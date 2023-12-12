package app

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/server"
	"github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"github.com/spf13/cobra"
	"time"
)

const (
	UpgradeNameV47 = "v47"
)

var UpgradeV47 = Upgrade{
	UpgradeName:          UpgradeNameV47,
	CreateUpgradeHandler: createUpgradeHandler,
	PreUpgradeCmd:        preUpgradeCmd(),
	StoreUpgrades: func() *types.StoreUpgrades {
		return &types.StoreUpgrades{
			Added:   []string{},
			Deleted: []string{},
		}
	},
}

func createUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
	app *App,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
		ctx.Logger().Info("Upgrade v47 start...")
		now := time.Now()
		cacheCtx, commit := ctx.CacheContext()
		ctx.Logger().Info("Upgrade v47 migration modules")

		baseAppLegacySS := app.ParamsKeeper.Subspace(baseapp.Paramspace).WithKeyTable(paramstypes.ConsensusParamsKeyTable())
		baseapp.MigrateParams(ctx, baseAppLegacySS, &app.ConsensusParamsKeeper)

		toVM, err := mm.RunMigrations(cacheCtx, configurator, fromVM)
		if err != nil {
			panic(err)
		}
		commit()
		ctx.EventManager().EmitEvents(cacheCtx.EventManager().Events())
		end := time.Now()

		ctx.Logger().Info(fmt.Sprintf("v47 complete takes %vms", end.Sub(now).Milliseconds()))
		return toVM, nil
	}
}

// preUpgradeCmd called by cosmovisor
func preUpgradeCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "pre-upgrade",
		Short: "v47 pre-upgrade, called by cosmovisor, before migrations upgrade",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, _ []string) error {
			serverCtx := server.GetServerContextFromCmd(cmd)
			serverCtx.Logger.Info("pre-upgrade-v47 starting")
			serverCtx.Logger.Info("pre-upgrade-v47 success")
			return nil
		},
	}
	return cmd
}
