package meservice

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"me-chain/x/meservice/keeper"
	"me-chain/x/meservice/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the fixedDeposit
	for _, elem := range genState.FixedDepositList {
		k.SetFixedDeposit(ctx, elem)
	}

	// Set fixedDeposit count
	k.SetFixedDepositCount(ctx, genState.FixedDepositCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.FixedDepositList = k.GetAllFixedDeposit(ctx)
	genesis.FixedDepositCount = k.GetFixedDepositCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
