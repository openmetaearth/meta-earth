package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "me-chain/testutil/keeper"
	"me-chain/x/signing/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.SigningKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
