package meservice_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/meservice"
	"me-chain/x/meservice/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		FixedDepositList: []types.FixedDeposit{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		FixedDepositCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MeserviceKeeper(t)
	meservice.InitGenesis(ctx, *k, genesisState)
	got := meservice.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.FixedDepositList, got.FixedDepositList)
	require.Equal(t, genesisState.FixedDepositCount, got.FixedDepositCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
