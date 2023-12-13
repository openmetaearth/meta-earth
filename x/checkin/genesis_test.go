package checkin_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "meta-earth/testutil/keeper"
	"meta-earth/testutil/nullify"
	"meta-earth/x/checkin"
	"meta-earth/x/checkin/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CheckinKeeper(t)
	checkin.InitGenesis(ctx, *k, genesisState)
	got := checkin.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
