package keeper

import (
	"context"

	"me-chain/x/mekyc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) NewRegion(ctx sdk.Context, regionId, creator, name string) error {

	return nil
}

func (k msgServer) NewRegion(goCtx context.Context, msg *types.MsgNewRegion) (*types.MsgNewRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	globalAdminAddress := k.GetGlobalAdmin()
	if globalAdminAddress != msg.Creator {
		return nil, sdkerrors.Wrapf(types.ErrKycRemove, "only global admin can  create region")
	}

	_, found := k.GetRegion(ctx, msg.RegionId)
	if found {
		return nil, sdkerrors.Wrapf(types.ErrRegionAlreadyExist, "region already exist")
	}

	region := types.Region{
		RegionId: msg.RegionId,
		Creator:  msg.Creator,
		Name:     msg.Name,
		Admin:    msg.Admin,
	}

	k.SetRegion(ctx, region)

	err := k.Keeper.NewRegion(ctx, msg.Creator, msg.Name, msg.RegionId)
	if err != nil {

	}
	return &types.MsgNewRegionResponse{}, nil
}

func (k msgServer) RemoveRegion(goCtx context.Context, msg *types.MsgRemoveRegion) (*types.MsgRemoveRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	globalAdminAddress := k.GetGlobalAdmin()
	if globalAdminAddress != msg.Creator {
		return nil, sdkerrors.Wrapf(types.ErrKycRemove, "only global admin can remove region")
	}

	_, found := k.GetRegion(ctx, msg.RegionId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrRegionNotExist, "region not exist")
	}

	k.Keeper.RemoveRegion(ctx, msg.RegionId)

	return &types.MsgRemoveRegionResponse{}, nil
}
