package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/mekyc/keeper"
	"me-chain/x/mekyc/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNRegion(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Region {
	items := make([]types.Region, n)
	for i := range items {
		items[i].RegionId = strconv.Itoa(i)

		keeper.SetRegion(ctx, items[i])
	}
	return items
}

func TestRegionGet(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetRegion(ctx,
			item.RegionId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestRegionRemove(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRegion(ctx,
			item.RegionId,
		)
		_, found := keeper.GetRegion(ctx,
			item.RegionId,
		)
		require.False(t, found)
	}
}

func TestRegionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRegion(ctx)),
	)
}
