package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "meta-earth/testutil/keeper"
	"meta-earth/x/checkin/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CheckinKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
