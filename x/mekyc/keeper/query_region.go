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

func (k Keeper) RegionAll(goCtx context.Context, req *types.QueryAllRegionRequest) (*types.QueryAllRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var regions []types.Region
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	regionStore := prefix.NewStore(store, types.KeyPrefix(types.RegionKeyPrefix))

	pageRes, err := query.Paginate(regionStore, req.Pagination, func(key []byte, value []byte) error {
		var region types.Region
		if err := k.cdc.Unmarshal(value, &region); err != nil {
			return err
		}

		regions = append(regions, region)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRegionResponse{Region: regions, Pagination: pageRes}, nil
}

func (k Keeper) Region(goCtx context.Context, req *types.QueryGetRegionRequest) (*types.QueryGetRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetRegion(
		ctx,
		req.RegionId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetRegionResponse{Region: val}, nil
}
