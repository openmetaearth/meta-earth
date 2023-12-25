package checkin_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/checkin"
	"me-chain/x/checkin/types"
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

func TestModuleName(t *testing.T) {
	t.Log(authtypes.NewModuleAddress("bonded_stake_tokens_pool").String())
	t.Log(authtypes.NewModuleAddress("stake_tokens_pool").String())
	t.Log(sdk.ValAddress(sdk.MustAccAddressFromBech32("me1fm7xpeu2uxp03afq4ea9v27l5krvq29yqnc7nn")).String())
}
