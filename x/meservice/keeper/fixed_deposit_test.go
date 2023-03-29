package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "me-chain/testutil/keeper"
	"me-chain/testutil/nullify"
	"me-chain/x/meservice/keeper"
	"me-chain/x/meservice/types"
)

func createNFixedDeposit(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.FixedDeposit {
	items := make([]types.FixedDeposit, n)
	for i := range items {
		items[i].Id = keeper.AppendFixedDeposit(ctx, items[i])
	}
	return items
}

func TestFixedDepositGet(t *testing.T) {
	keeper, ctx := keepertest.MeserviceKeeper(t)
	items := createNFixedDeposit(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFixedDeposit(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFixedDepositRemove(t *testing.T) {
	keeper, ctx := keepertest.MeserviceKeeper(t)
	items := createNFixedDeposit(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFixedDeposit(ctx, item.Id)
		_, found := keeper.GetFixedDeposit(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFixedDepositGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeserviceKeeper(t)
	items := createNFixedDeposit(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFixedDeposit(ctx)),
	)
}

func TestFixedDepositCount(t *testing.T) {
	keeper, ctx := keepertest.MeserviceKeeper(t)
	items := createNFixedDeposit(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFixedDepositCount(ctx))
}
