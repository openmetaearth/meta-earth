package app

import (
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"time"
)

const (
	UpgradeNameV0_0_2             = "v0.0.2"
	validatorOperatorAddressNode1 = "mevaloper172u6ngl42fudjshs8hr4qqk7lt04mhgl6khy95"
	validatorOperatorAddressNode2 = "mevaloper1l0z77qrtq5cwpw8qq2jf74wgarajgkxemeykf5"
	validatorOperatorAddressNode3 = "mevaloper1mjhyh099y4dj74965w2lu9urwvlkma22qdkzc9"
	validatorOperatorAddressNode4 = "mevaloper1ac8gwkjcdae9ay4hj8qu5neyd33pzah84us449"
	validatorOperatorAddressNode5 = "mevaloper1thwhefuv5kd6gnv2vdd0mu8a2cpv6n9ecear7w"
	validatorOperatorAddressNode6 = "mevaloper1cu9ld3c77xthn24evd369jqv4fn46u99vgmzcp"
	validatorOperatorAddressNode7 = "mevaloper1huv4930qzgyyxzlmk84tfmqfsethag40jd4fkh"
)

var UpgradeV0_0_2 = Upgrade{
	UpgradeName:          UpgradeNameV0_0_2,
	CreateUpgradeHandler: CreateUpgradeHandlerV0_0_2,
	StoreUpgrades: func() *storetypes.StoreUpgrades {
		return &storetypes.StoreUpgrades{
			Added:   []string{},
			Deleted: []string{},
		}
	},
}

func CreateUpgradeHandlerV0_0_2(
	mm *module.Manager,
	configurator module.Configurator,
	app *App,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
		newVM, err := app.ModuleManager.RunMigrations(ctx, app.configurator, fromVM)
		if err != nil {
			return newVM, err
		}

		for n, m := range app.ModuleManager.Modules {
			if mod, ok := m.(module.HasConsensusVersion); ok {
				fromVM[n] = mod.ConsensusVersion()
			}
		}

		ctx.Logger().Info("==> replace validator operator address")
		validators := app.StakingKeeper.GetAllValidators(ctx)
		for _, validator := range validators {
			app.StakingKeeper.RemoveValidatorKeys(ctx, validator.GetOperator())
			app.StakingKeeper.DeleteLastValidatorPower(ctx, validator.GetOperator())
			switch validator.GetMoniker() {
			case "node1":
				validator.OperatorAddress = validatorOperatorAddressNode1
			case "node2":
				validator.OperatorAddress = validatorOperatorAddressNode2
			case "node3":
				validator.OperatorAddress = validatorOperatorAddressNode3
			case "node4":
				validator.OperatorAddress = validatorOperatorAddressNode4
			case "node5":
				validator.OperatorAddress = validatorOperatorAddressNode5
			case "node6":
				validator.OperatorAddress = validatorOperatorAddressNode6
			case "node7":
				validator.OperatorAddress = validatorOperatorAddressNode7
			}
			devOperatorAddr := app.StakingKeeper.GetDevOperatorAddress(ctx)
			validator.OwnerAddress = devOperatorAddr
			app.StakingKeeper.SetValidatorByConsAddr(ctx, validator)
			app.StakingKeeper.AddValidatorTokensAndShares(ctx, validator, validator.Tokens)
			if err := app.StakingKeeper.Hooks().AfterValidatorCreated(ctx, validator.GetOperator()); err != nil {
				return nil, err
			}
		}
		ctx.Logger().Info("==> replace validator operator address")
		govParams := app.GovKeeper.GetParams(ctx)
		depositPeriod := 300 * time.Second
		govParams.MaxDepositPeriod = &depositPeriod
		govParams.VotingPeriod = &depositPeriod
		err = app.GovKeeper.SetParams(ctx, govParams)
		if err != nil {
			return nil, err
		}
		return newVM, err
	}
}
