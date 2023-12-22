package app

import (
	"fmt"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"time"
)

const UpgradeNameV0_0_2 = "v0.0.2"

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
		adminAddr, err := app.StakingKeeper.GetGlobalAdminAddr(ctx)
		if err != nil {
			return newVM, err
		}
		ctx.Logger().Info(fmt.Sprintf("adminAddr: %s", adminAddr.String()))
		stakes := app.StakingKeeper.GetAllStakes(ctx)
		for _, stake := range stakes {
			fmt.Println("stake: ", stake.String())
		}
		validators := app.StakingKeeper.GetAllValidators(ctx)
		for _, validator := range validators {
			stake, found := app.StakingKeeper.GetStake(ctx, adminAddr, validator.GetOperator())
			if !found {
				return newVM, fmt.Errorf("not found stake")
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

			devOperatorAddr := app.StakingKeeper.GetDevOperatorAddress(ctx)
			validator.OwnerAddress = devOperatorAddr
			err := app.StakingKeeper.SetValidatorByConsAddr(ctx, validator)
			if err != nil {
				return nil, err
			}
			ctx.Logger().Info("==> reset validator", "validator", validator.GetOperator().String())
			app.StakingKeeper.SetValidator(ctx, validator)
			app.StakingKeeper.SetValidatorByPowerIndex(ctx, validator)
			ctx.Logger().Info("==> reset stake", "staker", stake.StakerAddress, "validator", stake.ValidatorAddress)
			app.StakingKeeper.SetStake(ctx, stake)
			if err := app.StakingKeeper.Hooks().AfterValidatorCreated(ctx, validator.GetOperator()); err != nil {
				return nil, err
			}
		}
		ctx.Logger().Info("==> reset gov params")
		govParams := app.GovKeeper.GetParams(ctx)
		depositPeriod := 120 * time.Second
		govParams.MaxDepositPeriod = &depositPeriod
		govParams.VotingPeriod = &depositPeriod
		err = app.GovKeeper.SetParams(ctx, govParams)
		if err != nil {
			return nil, err
		}
		return newVM, err
	}
}
