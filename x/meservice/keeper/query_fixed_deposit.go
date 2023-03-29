package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"me-chain/x/meservice/types"
)

func (k Keeper) FixedDepositAll(goCtx context.Context, req *types.QueryAllFixedDepositRequest) (*types.QueryAllFixedDepositResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fixedDeposits []types.FixedDeposit
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	fixedDepositStore := prefix.NewStore(store, types.KeyPrefix(types.FixedDepositKey))

	pageRes, err := query.Paginate(fixedDepositStore, req.Pagination, func(key []byte, value []byte) error {
		var fixedDeposit types.FixedDeposit
		if err := k.cdc.Unmarshal(value, &fixedDeposit); err != nil {
			return err
		}

		fixedDeposits = append(fixedDeposits, fixedDeposit)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFixedDepositResponse{FixedDeposit: fixedDeposits, Pagination: pageRes}, nil
}

func (k Keeper) FixedDeposit(goCtx context.Context, req *types.QueryGetFixedDepositRequest) (*types.QueryGetFixedDepositResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	fixedDeposit, found := k.GetFixedDeposit(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFixedDepositResponse{FixedDeposit: fixedDeposit}, nil
}
