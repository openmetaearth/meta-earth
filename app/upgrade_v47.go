package app

import (
	"fmt"
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
	"time"
)

const (
	UpgradeNameV47     = "v47"
	meidAdminAddress   = "me1jy4sl7pq7vwsmap0f4ylq7hst4nejjk3fa6avs"
	airDropAddress     = "me1w4tjt9pupkuzk0mgcz9ajp7nn96dm4uwxpvhl7"
	exponentMultiplier = 100
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
		err = resetExponent(ctx, app)
		if err != nil {
			return newVM, err
		}

		ctx.Logger().Info("3. upgrade for replace validator operator address")
		err = fixValidator(ctx, app)
		if err != nil {
			return newVM, err
		}

		ctx.Logger().Info("5. reset gov params")
		err = fixGovParams(ctx, app)
		if err != nil {
			return newVM, err
		}
		//err = fixSlashParams(ctx, app)
		//if err != nil {
		//	return newVM, err
		//}
		return newVM, err
	}
}

func resetExponent(ctx sdk.Context, app *App) error {
	allAccounts := app.AccountKeeper.GetAllAccounts(ctx)
	for _, account := range allAccounts {
		balancesBeforeUpgrade := app.BankKeeper.GetAllBalances(ctx, account.GetAddress())
		mintBalances := sdk.NewCoins()
		for _, balance := range balancesBeforeUpgrade {
			balance.Amount = balance.Amount.Mul(sdk.NewInt(exponentMultiplier)).Sub(balance.Amount)
			mintBalances = append(mintBalances, balance)
		}
		ctx.Logger().Info(mintBalances.String())
		err := app.BankKeeper.MintCoins(ctx, minttypes.ModuleName, mintBalances)
		if err != nil {
			return err
		}
		macc, ok := account.(authtypes.ModuleAccountI)
		if ok {
			if err := app.BankKeeper.SendCoinsFromModuleToModule(ctx, minttypes.ModuleName, macc.GetName(), mintBalances); err != nil {
				return err
			}
		} else {
			if err := app.BankKeeper.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, account.GetAddress(), mintBalances); err != nil {
				return err
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
				return err
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
				return err
			}
			app.AccountKeeper.SetAccount(ctx, account)
			ctx.Logger().Info("new account number 1 for meid admin")
			ctx.Logger().Info("reset account number 1 to 2 for dev operator")
		}
		if account.GetAccountNumber() == 3 {
			// account number 2 move to nex account number
			err := account.SetAccountNumber(app.AccountKeeper.NextAccountNumber(ctx))
			if err != nil {
				return err
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
	return nil
}

func fixValidator(ctx sdk.Context, app *App) error {
	var (
		validatorOperatorAddressNode1  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1fm7xpeu2uxp03afq4ea9v27l5krvq29yqnc7nn")).String()
		validatorOperatorAddressNode2  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1fp67zvjqmhl3xc7dstepht7nh46jtzxcalytwk")).String()
		validatorOperatorAddressNode3  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me16a9ku63u7766zvrgpuyzpu6fvmmt0mjf57jn2z")).String()
		validatorOperatorAddressNode4  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1cfhxhmtjr6c9h332fdd6enenvr6f6er658508e")).String()
		validatorOperatorAddressNode5  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1vevcep3q6gg5q8rfha2naggmrnclgsapv3grcd")).String()
		validatorOperatorAddressNode6  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1a8uw8uswg3puyr70hj7yuaxp894900dfayqxx7")).String()
		validatorOperatorAddressNode7  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1mmgy7xl9zktyd6ajpxqfajuzyc0x6wpjuwgpkn")).String()
		validatorOperatorAddressNode8  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1wylamlxz8juklcywmfnrjeevkuszzv4r2gd9hd")).String()
		validatorOperatorAddressNode9  = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1hx609plt8tyrptuxsntmvhcgfl9rejerr24p06")).String()
		validatorOperatorAddressNode10 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me109vphldcx95cl486pguzll8c6teufatn57wgfx")).String()
		validatorOperatorAddressNode11 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1ypmq0dt6y983jf24jpw8u97xm66au0ltfsdlhc")).String()
		validatorOperatorAddressNode12 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1nhkxkc8pn4mstug3fd38xad9swu85wxzzzn7ga")).String()
		validatorOperatorAddressNode13 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me18y5rykc4293v50el4yn4fan9gf5qna86evpym5")).String()
		validatorOperatorAddressNode14 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1ldav99eec6nm3vp2n8lhza4j792znqfuhecrlg")).String()
		validatorOperatorAddressNode15 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1k8fypadjt6z8yt4ufpx2v639har40w6245k3xj")).String()
		validatorOperatorAddressNode16 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1k9pdvavle7n6fe7w9seezazlqqs72g835p6qxa")).String()
		validatorOperatorAddressNode17 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1t4atmvxqaffpwxjkpm5lxt83q3ja9y5d8nr64j")).String()
		validatorOperatorAddressNode18 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me14m0dhjc6rs084y427ptnjyc4hfefxhzmyedrga")).String()
		validatorOperatorAddressNode19 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1asfkp2ua7splwaf6lqqru3akcrw2l3dupvmewp")).String()
		validatorOperatorAddressNode20 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1685gnusadlv86tl73h935626qnsr8u830msdsc")).String()
		validatorOperatorAddressNode21 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me16d4act7my9tshkxulvr75ntdwc0334pxknck05")).String()
		validatorOperatorAddressNode22 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1vlnx284eqf5hlz59y4zdnfx0de5j8zjds5ny4z")).String()
		validatorOperatorAddressNode23 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1kmu7alqc8vlhmy3l4wcw8ephva42asaapt4qn3")).String()
		validatorOperatorAddressNode24 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1z4s5n9uqk6yjwca83vezahvnwp3xn9gusjwyze")).String()
		validatorOperatorAddressNode25 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me15lvx9x4e248jjpdxspstg4knwkyew6hhtrcu5j")).String()
		validatorOperatorAddressNode26 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1v8wtd9qk9v08np3dd4khxgqwhvv59zgypzf7g7")).String()
		validatorOperatorAddressNode27 = sdk.ValAddress(sdk.MustAccAddressFromBech32("me1ar9pkzk02eu0qksm7pzuhkcvd2stshvgur75aj")).String()
	)
	adminAddr, err := app.StakingKeeper.GetGlobalAdminAddr(ctx)
	if err != nil {
		return err
	}
	ctx.Logger().Info(fmt.Sprintf("adminAddr: %s", adminAddr.String()))
	stakes := app.StakingKeeper.GetAllStakes(ctx)
	for _, stake := range stakes {
		ctx.Logger().Info("stake info", "stake", stake.String())
	}
	validators := app.StakingKeeper.GetAllValidators(ctx)
	for _, validator := range validators {
		stake, found := app.StakingKeeper.GetStake(ctx, adminAddr, validator.GetOperator())
		if !found {
			return fmt.Errorf("not found stake")
		}
		ctx.Logger().Info("==>stake", "staker", stake.StakerAddress, "old stake", stake.ValidatorAddress)
		ctx.Logger().Info("==>validator", "old validator", validator.GetOperator())

		app.StakingKeeper.RemoveValidatorKeys(ctx, validator.GetOperator())
		app.StakingKeeper.DeleteLastValidatorPower(ctx, validator.GetOperator())
		app.StakingKeeper.DeleteValidatorByPowerIndex(ctx, validator)
		switch validator.GetMoniker() {
		case "node1":
			validator.OperatorAddress = validatorOperatorAddressNode1
			stake.ValidatorAddress = validatorOperatorAddressNode1
		case "node2":
			validator.OperatorAddress = validatorOperatorAddressNode2
			stake.ValidatorAddress = validatorOperatorAddressNode2
		case "node3":
			validator.OperatorAddress = validatorOperatorAddressNode3
			stake.ValidatorAddress = validatorOperatorAddressNode3
		case "node4":
			validator.OperatorAddress = validatorOperatorAddressNode4
			stake.ValidatorAddress = validatorOperatorAddressNode4
		case "node5":
			validator.OperatorAddress = validatorOperatorAddressNode5
			stake.ValidatorAddress = validatorOperatorAddressNode5
		case "node6":
			validator.OperatorAddress = validatorOperatorAddressNode6
			stake.ValidatorAddress = validatorOperatorAddressNode6
		case "node7":
			validator.OperatorAddress = validatorOperatorAddressNode7
			stake.ValidatorAddress = validatorOperatorAddressNode7
		case "node8":
			validator.OperatorAddress = validatorOperatorAddressNode8
			stake.ValidatorAddress = validatorOperatorAddressNode8
		case "node9":
			validator.OperatorAddress = validatorOperatorAddressNode9
			stake.ValidatorAddress = validatorOperatorAddressNode9
		case "node10":
			validator.OperatorAddress = validatorOperatorAddressNode10
			stake.ValidatorAddress = validatorOperatorAddressNode10
		case "node11":
			validator.OperatorAddress = validatorOperatorAddressNode11
			stake.ValidatorAddress = validatorOperatorAddressNode11
		case "node12":
			validator.OperatorAddress = validatorOperatorAddressNode12
			stake.ValidatorAddress = validatorOperatorAddressNode12
		case "node13":
			validator.OperatorAddress = validatorOperatorAddressNode13
			stake.ValidatorAddress = validatorOperatorAddressNode13
		case "node14":
			validator.OperatorAddress = validatorOperatorAddressNode14
			stake.ValidatorAddress = validatorOperatorAddressNode14
		case "node15":
			validator.OperatorAddress = validatorOperatorAddressNode15
			stake.ValidatorAddress = validatorOperatorAddressNode15
		case "node16":
			validator.OperatorAddress = validatorOperatorAddressNode16
			stake.ValidatorAddress = validatorOperatorAddressNode16
		case "node17":
			validator.OperatorAddress = validatorOperatorAddressNode17
			stake.ValidatorAddress = validatorOperatorAddressNode17
		case "node18":
			validator.OperatorAddress = validatorOperatorAddressNode18
			stake.ValidatorAddress = validatorOperatorAddressNode18
		case "node19":
			validator.OperatorAddress = validatorOperatorAddressNode19
			stake.ValidatorAddress = validatorOperatorAddressNode19
		case "node20":
			validator.OperatorAddress = validatorOperatorAddressNode20
			stake.ValidatorAddress = validatorOperatorAddressNode20
		case "node21":
			validator.OperatorAddress = validatorOperatorAddressNode21
			stake.ValidatorAddress = validatorOperatorAddressNode21
		case "node22":
			validator.OperatorAddress = validatorOperatorAddressNode22
			stake.ValidatorAddress = validatorOperatorAddressNode22
		case "node23":
			validator.OperatorAddress = validatorOperatorAddressNode23
			stake.ValidatorAddress = validatorOperatorAddressNode23
		case "node24":
			validator.OperatorAddress = validatorOperatorAddressNode24
			stake.ValidatorAddress = validatorOperatorAddressNode24
		case "node25":
			validator.OperatorAddress = validatorOperatorAddressNode25
			stake.ValidatorAddress = validatorOperatorAddressNode25
		case "node26":
			validator.OperatorAddress = validatorOperatorAddressNode26
			stake.ValidatorAddress = validatorOperatorAddressNode26
		case "node27":
			validator.OperatorAddress = validatorOperatorAddressNode27
			stake.ValidatorAddress = validatorOperatorAddressNode27
		}

		if !stake.Shares.IsNil() {
			stake.Shares = stake.Shares.Mul(sdk.NewDec(exponentMultiplier))
		}
		if !stake.Amount.IsNil() {
			stake.Amount = stake.Amount.Mul(sdk.NewInt(exponentMultiplier))
		}
		app.StakingKeeper.SetStake(ctx, stake)

		devOperatorAddr := app.StakingKeeper.GetDevOperatorAddress(ctx)
		validator.OwnerAddress = devOperatorAddr
		err := app.StakingKeeper.SetValidatorByConsAddr(ctx, validator)
		if err != nil {
			return err
		}
		ctx.Logger().Info("==> reset validator", "validator", validator.GetOperator().String())
		if !validator.Tokens.IsNil() {
			validator.Tokens = validator.Tokens.Mul(sdk.NewInt(exponentMultiplier))
		}
		if !validator.StakerShares.IsNil() {
			validator.StakerShares = validator.StakerShares.Mul(sdk.NewDec(exponentMultiplier))
		}
		app.StakingKeeper.SetValidator(ctx, validator)
		app.StakingKeeper.SetValidatorByPowerIndex(ctx, validator)
		ctx.Logger().Info("==> reset stake", "staker", stake.StakerAddress, "validator", stake.ValidatorAddress)
		if err := app.StakingKeeper.Hooks().AfterValidatorCreated(ctx, validator.GetOperator()); err != nil {
			return err
		}
	}
	return nil
}

func fixGovParams(ctx sdk.Context, app *App) error {
	govParams := app.GovKeeper.GetParams(ctx)
	depositPeriod := 120 * time.Second
	govParams.MaxDepositPeriod = &depositPeriod
	govParams.VotingPeriod = &depositPeriod
	return app.GovKeeper.SetParams(ctx, govParams)
}

//func fixSlashParams(ctx sdk.Context, app *App) error {
//	slashParams := app.SlashingKeeper.GetParams(ctx)
//	slashParams.SignedBlocksWindow = 2000
//	return app.SlashingKeeper.SetParams(ctx, slashParams)
//}
