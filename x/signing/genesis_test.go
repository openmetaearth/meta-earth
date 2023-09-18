package signing_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/signing"
	"me-chain/x/signing/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SigningKeeper(t)
	signing.InitGenesis(ctx, *k, genesisState)
	got := signing.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
