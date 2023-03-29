package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"me-chain/x/mekyc/types"
)

func (k Keeper) FixedDepositByRegion(goCtx context.Context, req *types.QueryFixedDepositByRegionRequest) (*types.QueryFixedDepositByRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryFixedDepositByRegionResponse{}, nil
}
