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

func createNKyc(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Kyc {
	items := make([]types.Kyc, n)
	for i := range items {
		items[i].Account = strconv.Itoa(i)

		keeper.SetKyc(ctx, items[i])
	}
	return items
}

func TestKycGet(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNKyc(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKyc(ctx,
			item.Account,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestKycRemove(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNKyc(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKyc(ctx,
			item.Account,
		)
		_, found := keeper.GetKyc(ctx,
			item.Account,
		)
		require.False(t, found)
	}
}

func TestKycGetAll(t *testing.T) {
	keeper, ctx := keepertest.MekycKeeper(t)
	items := createNKyc(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllKyc(ctx)),
	)
}
