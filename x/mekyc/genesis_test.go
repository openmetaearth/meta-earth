package mekyc_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/mekyc"
	"me-chain/x/mekyc/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		RegionList: []types.Region{
			{
				RegionId: "0",
			},
			{
				RegionId: "1",
			},
		},
		KycList: []types.Kyc{
			{
				Account: "0",
			},
			{
				Account: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MekycKeeper(t)
	mekyc.InitGenesis(ctx, *k, genesisState)
	got := mekyc.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.RegionList, got.RegionList)
	require.ElementsMatch(t, genesisState.KycList, got.KycList)
	// this line is used by starport scaffolding # genesis/test/assert
}
