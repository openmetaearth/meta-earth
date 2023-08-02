package app

import (
	"github.com/cosmos/cosmos-sdk/baseapp"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	capabilitykeeper "github.com/cosmos/cosmos-sdk/x/capability/keeper"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	ibckeeper "github.com/cosmos/ibc-go/v7/modules/core/keeper"

	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
)

func (app *App) GetIBCKeeper() *ibckeeper.Keeper {
	return app.IBCKeeper
}

func (app *App) GetScopedIBCKeeper() capabilitykeeper.ScopedKeeper {
	return app.ScopedIBCKeeper
}

func (app *App) GetBaseApp() *baseapp.BaseApp {
	return app.BaseApp
}

func (app *App) GetBankKeeper() bankkeeper.Keeper {
	return app.BankKeeper
}

func (app *App) GetStakingKeeper() *stakingkeeper.Keeper {
	return app.StakingKeeper
}

func (app *App) GetAccountKeeper() authkeeper.AccountKeeper {
	return app.AccountKeeper
}

func (app *App) GetWasmKeeper() wasmkeeper.Keeper {
	return app.WasmKeeper
}
