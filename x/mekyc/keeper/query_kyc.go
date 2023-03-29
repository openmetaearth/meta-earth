package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"me-chain/x/mekyc/types"
)

func (k Keeper) KycAll(goCtx context.Context, req *types.QueryAllKycRequest) (*types.QueryAllKycResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var kycs []types.Kyc
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	kycStore := prefix.NewStore(store, types.KeyPrefix(types.KycKeyPrefix))

	pageRes, err := query.Paginate(kycStore, req.Pagination, func(key []byte, value []byte) error {
		var kyc types.Kyc
		if err := k.cdc.Unmarshal(value, &kyc); err != nil {
			return err
		}

		kycs = append(kycs, kyc)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllKycResponse{Kyc: kycs, Pagination: pageRes}, nil
}

func (k Keeper) Kyc(goCtx context.Context, req *types.QueryGetKycRequest) (*types.QueryGetKycResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetKyc(
		ctx,
		req.Account,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetKycResponse{Kyc: val}, nil
}
