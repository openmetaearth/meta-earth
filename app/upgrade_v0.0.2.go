package app

import (
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"time"
)

const (
	UpgradeNameV0_0_2              = "v0.0.2"
	validatorOperatorAddressNode1  = "me1fm7xpeu2uxp03afq4ea9v27l5krvq29yqnc7nn"
	validatorOperatorAddressNode2  = "me1fp67zvjqmhl3xc7dstepht7nh46jtzxcalytwk"
	validatorOperatorAddressNode3  = "me16a9ku63u7766zvrgpuyzpu6fvmmt0mjf57jn2z"
	validatorOperatorAddressNode4  = "me1cfhxhmtjr6c9h332fdd6enenvr6f6er658508e"
	validatorOperatorAddressNode5  = "me1vevcep3q6gg5q8rfha2naggmrnclgsapv3grcd"
	validatorOperatorAddressNode6  = "me1a8uw8uswg3puyr70hj7yuaxp894900dfayqxx7"
	validatorOperatorAddressNode7  = "me1mmgy7xl9zktyd6ajpxqfajuzyc0x6wpjuwgpkn"
	validatorOperatorAddressNode8  = "me1wylamlxz8juklcywmfnrjeevkuszzv4r2gd9hd"
	validatorOperatorAddressNode9  = "me1hx609plt8tyrptuxsntmvhcgfl9rejerr24p06"
	validatorOperatorAddressNode10 = "me109vphldcx95cl486pguzll8c6teufatn57wgfx"
	validatorOperatorAddressNode11 = "me1ypmq0dt6y983jf24jpw8u97xm66au0ltfsdlhc"
	validatorOperatorAddressNode12 = "me1nhkxkc8pn4mstug3fd38xad9swu85wxzzzn7ga"
	validatorOperatorAddressNode13 = "me18y5rykc4293v50el4yn4fan9gf5qna86evpym5"
	validatorOperatorAddressNode14 = "me1ldav99eec6nm3vp2n8lhza4j792znqfuhecrlg"
	validatorOperatorAddressNode15 = "me1k8fypadjt6z8yt4ufpx2v639har40w6245k3xj"
	validatorOperatorAddressNode16 = "me1k9pdvavle7n6fe7w9seezazlqqs72g835p6qxa"
	validatorOperatorAddressNode17 = "me1t4atmvxqaffpwxjkpm5lxt83q3ja9y5d8nr64j"
	validatorOperatorAddressNode18 = "me14m0dhjc6rs084y427ptnjyc4hfefxhzmyedrga"
	validatorOperatorAddressNode19 = "me1asfkp2ua7splwaf6lqqru3akcrw2l3dupvmewp"
	validatorOperatorAddressNode20 = "me1685gnusadlv86tl73h935626qnsr8u830msdsc"
	validatorOperatorAddressNode21 = "me16d4act7my9tshkxulvr75ntdwc0334pxknck05"
	validatorOperatorAddressNode22 = "me1vlnx284eqf5hlz59y4zdnfx0de5j8zjds5ny4z"
	validatorOperatorAddressNode23 = "me1kmu7alqc8vlhmy3l4wcw8ephva42asaapt4qn3"
	validatorOperatorAddressNode24 = "me1z4s5n9uqk6yjwca83vezahvnwp3xn9gusjwyze"
	validatorOperatorAddressNode25 = "me15lvx9x4e248jjpdxspstg4knwkyew6hhtrcu5j"
	validatorOperatorAddressNode26 = "me1v8wtd9qk9v08np3dd4khxgqwhvv59zgypzf7g7"
	validatorOperatorAddressNode27 = "me1ar9pkzk02eu0qksm7pzuhkcvd2stshvgur75aj"
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
			app.StakingKeeper.DeleteValidatorByPowerIndex(ctx, validator)
			switch validator.GetMoniker() {
			case "node1":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode1)).String()
			case "node2":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode2)).String()
			case "node3":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode3)).String()
			case "node4":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode4)).String()
			case "node5":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode5)).String()
			case "node6":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode6)).String()
			case "node7":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode7)).String()
			case "node8":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode8)).String()
			case "node9":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode9)).String()
			case "node10":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode10)).String()
			case "node11":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode11)).String()
			case "node12":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode12)).String()
			case "node13":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode13)).String()
			case "node14":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode14)).String()
			case "node15":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode15)).String()
			case "node16":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode16)).String()
			case "node17":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode17)).String()
			case "node18":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode18)).String()
			case "node19":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode19)).String()
			case "node20":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode20)).String()
			case "node21":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode21)).String()
			case "node22":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode22)).String()
			case "node23":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode23)).String()
			case "node24":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode24)).String()
			case "node25":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode25)).String()
			case "node26":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode26)).String()
			case "node27":
				validator.OperatorAddress = sdk.ValAddress(sdk.MustAccAddressFromBech32(validatorOperatorAddressNode27)).String()
			}

			devOperatorAddr := app.StakingKeeper.GetDevOperatorAddress(ctx)
			validator.OwnerAddress = devOperatorAddr
			err := app.StakingKeeper.SetValidatorByConsAddr(ctx, validator)
			if err != nil {
				return nil, err
			}
			app.StakingKeeper.SetValidator(ctx, validator)
			app.StakingKeeper.SetValidatorByPowerIndex(ctx, validator)
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
