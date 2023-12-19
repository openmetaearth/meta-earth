package app

import (
	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	consensustypes "github.com/cosmos/cosmos-sdk/x/consensus/types"
	crisistypes "github.com/cosmos/cosmos-sdk/x/crisis/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	govv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	icacontrollertypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types"
	icahosttypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/host/types"
	ibcfeetypes "github.com/cosmos/ibc-go/v7/modules/apps/29-fee/types"
	ibctransfertypes "github.com/cosmos/ibc-go/v7/modules/apps/transfer/types"
	checkintypes "me-chain/x/checkin/types"
)

const (
	UpgradeNameV47   = "v47"
	meidAdminAddress = "me1jy4sl7pq7vwsmap0f4ylq7hst4nejjk3fa6avs"
	airDropAddress   = "me1w4tjt9pupkuzk0mgcz9ajp7nn96dm4uwxpvhl7"
)

var UpgradeV47 = Upgrade{
	UpgradeName:          UpgradeNameV47,
	CreateUpgradeHandler: CreateUpgradeHandler,
	StoreUpgrades: func() *storetypes.StoreUpgrades {
		return &storetypes.StoreUpgrades{
			Added: []string{
				consensustypes.ModuleName,
				crisistypes.ModuleName,
				ibcfeetypes.ModuleName,
				wasmtypes.ModuleName,
				checkintypes.ModuleName,
			},
			Deleted: []string{},
		}
	},
}

func CreateUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
	app *App,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
		// Set param key table for params module migration
		for _, subspace := range app.ParamsKeeper.GetSubspaces() {
			subspace := subspace

			var keyTable paramstypes.KeyTable
			switch subspace.Name() {
			case authtypes.ModuleName:
				keyTable = authtypes.ParamKeyTable() //nolint:staticcheck
			case banktypes.ModuleName:
				keyTable = banktypes.ParamKeyTable() //nolint:staticcheck
			case stakingtypes.ModuleName:
				keyTable = stakingtypes.ParamKeyTable()
			case minttypes.ModuleName:
				keyTable = minttypes.ParamKeyTable() //nolint:staticcheck
			case distrtypes.ModuleName:
				keyTable = distrtypes.ParamKeyTable() //nolint:staticcheck
			case slashingtypes.ModuleName:
				keyTable = slashingtypes.ParamKeyTable() //nolint:staticcheck
			case govtypes.ModuleName:
				keyTable = govv1.ParamKeyTable() //nolint:staticcheck
			case crisistypes.ModuleName:
				keyTable = crisistypes.ParamKeyTable() //nolint:staticcheck
				// ibc types
			case ibctransfertypes.ModuleName:
				keyTable = ibctransfertypes.ParamKeyTable()
			case icahosttypes.SubModuleName:
				keyTable = icahosttypes.ParamKeyTable()
			case icacontrollertypes.SubModuleName:
				keyTable = icacontrollertypes.ParamKeyTable()
				// wasm
			case wasmtypes.ModuleName:
				keyTable = wasmtypes.ParamKeyTable() //nolint:staticcheck
			default:
				continue
			}

			if !subspace.HasKeyTable() {
				subspace.WithKeyTable(keyTable)
			}
		}

		newVM, err := app.ModuleManager.RunMigrations(ctx, app.configurator, fromVM)
		if err != nil {
			return newVM, err
		}

		for n, m := range app.ModuleManager.Modules {
			if mod, ok := m.(module.HasConsensusVersion); ok {
				fromVM[n] = mod.ConsensusVersion()
			}
		}

		// No x/consensus module in v46, Migrate Tendermint consensus parameters from x/params module to a dedicated x/consensus module
		ctx.Logger().Info("1. x/params migration => Migrating to module owned params")
		baseAppLegacySS := app.ParamsKeeper.Subspace(baseapp.Paramspace).WithKeyTable(paramstypes.ConsensusParamsKeyTable())
		baseapp.MigrateParams(ctx, baseAppLegacySS, &app.ConsensusParamsKeeper)

		ctx.Logger().Info("2. change umec precision")
		allAccounts := app.AccountKeeper.GetAllAccounts(ctx)
		for _, account := range allAccounts {
			balancesBeforeUpgrade := app.BankKeeper.GetAllBalances(ctx, account.GetAddress())
			mintBalances := sdk.NewCoins()
			for _, balance := range balancesBeforeUpgrade {
				balance.Amount = balance.Amount.Mul(sdk.NewInt(100)).Sub(balance.Amount)
				mintBalances = append(mintBalances, balance)
			}
			ctx.Logger().Info(mintBalances.String())
			err := app.BankKeeper.MintCoins(ctx, minttypes.ModuleName, mintBalances)
			if err != nil {
				return nil, err
			}
			macc, ok := account.(authtypes.ModuleAccountI)
			if ok {
				if err := app.BankKeeper.SendCoinsFromModuleToModule(ctx, minttypes.ModuleName, macc.GetName(), mintBalances); err != nil {
					return nil, err
				}
			} else {
				if err := app.BankKeeper.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, account.GetAddress(), mintBalances); err != nil {
					return nil, err
				}
			}
			balancesAfter := app.BankKeeper.GetAllBalances(ctx, account.GetAddress())
			ctx.Logger().Info("balances upgrade",
				"account", account.GetAddress(),
				"balances before upgrade", balancesBeforeUpgrade.String(),
				"balances after upgrade", balancesAfter.String())

			// account number 2 move to nex account number
			if account.GetAccountNumber() == 2 {
				err := account.SetAccountNumber(app.AccountKeeper.NextAccountNumber(ctx))
				if err != nil {
					return nil, err
				}
				app.AccountKeeper.SetAccount(ctx, account)
				ctx.Logger().Info("move original account number 2 to latest account number")
			}
			// new account number 1, account number 1 reset to 2
			if account.GetAccountNumber() == 1 {
				meidAdmin := authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(meidAdminAddress))
				meidAdmin.AccountNumber = 1
				app.AccountKeeper.SetAccount(ctx, meidAdmin)
				err = account.SetAccountNumber(2)
				if err != nil {
					return nil, err
				}
				app.AccountKeeper.SetAccount(ctx, account)
				ctx.Logger().Info("new account number 1 for meid admin")
				ctx.Logger().Info("reset account number 1 to 2 for dev operator")
			}
			if account.GetAccountNumber() == 3 {
				// account number 2 move to nex account number
				err := account.SetAccountNumber(app.AccountKeeper.NextAccountNumber(ctx))
				if err != nil {
					return nil, err
				}
				app.AccountKeeper.SetAccount(ctx, account)
				ctx.Logger().Info("move original account number 3 to latest account number")

				// new account number 3
				airDropAccount := authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(airDropAddress))
				airDropAccount.AccountNumber = 3
				app.AccountKeeper.SetAccount(ctx, airDropAccount)
				ctx.Logger().Info("new account number 3 for air drop account")
			}
		}
		return newVM, err
	}
}
