package keeper

import (
	"context"
	"me-chain/x/mekyc/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) DoNewKyc(ctx sdk.Context, creator, account, regionid string) error {

	return nil
}

func (k msgServer) NewKyc(goCtx context.Context, msg *types.MsgNewKyc) (*types.MsgNewKycResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetKyc(ctx, msg.Account)
	if found {
		return nil, sdkerrors.Wrapf(types.ErrKycExists, "kyc with account (%s) exists", msg.Account)
	}

	accAddr, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrKycNew, "account format error (%s)", err)
	}
	has := k.accountKeeper.HasAccount(ctx, accAddr)
	if !has {
		newAccount := k.accountKeeper.NewAccountWithAddress(ctx, accAddr)
		k.accountKeeper.SetAccount(ctx, newAccount)
	}

	region, found := k.GetRegion(ctx, msg.RegionId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrRegionNotExist, "kyc reigion not found")
	}

	if msg.Creator != region.Admin {
		return nil, sdkerrors.Wrapf(types.ErrKycNew, "only region admin can create kyc")
	}

	//if err := k.newBonus(ctx, account, regionid); err != nil {
	//	return err
	//}

	kyc := types.Kyc{
		Account:  msg.Account,
		RegionId: msg.RegionId,
	}
	k.SetKyc(ctx, kyc)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeKycNew,
			sdk.NewAttribute(types.AttributeKeyAccount, kyc.Account),
			sdk.NewAttribute(types.AttributeKeyRegionId, kyc.RegionId),
			sdk.NewAttribute(types.AttributeKeyCreator, kyc.Creator),
		),
	)

	return &types.MsgNewKycResponse{}, nil
}

func (k msgServer) RemoveKyc(goCtx context.Context, msg *types.MsgRemoveKyc) (*types.MsgRemoveKycResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	kyc, found := k.GetKyc(ctx, msg.Account)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrKycNotExists, "kyc with account (%s) NOT exists", msg.Account)
	}

	region, found := k.GetRegion(ctx, kyc.RegionId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrKycNotExists, "kyc's region (%s) NOT exists", kyc.RegionId)
	}

	if msg.Creator != region.Admin {
		return nil, sdkerrors.Wrapf(types.ErrKycNew, "only region admin can remove kyc")
	}

	//err := k.removeUserBonus(ctx, kyc.RegionId, kyc.Account)
	//if err != nil {
	//	return err
	//}

	k.Keeper.RemoveKyc(ctx, msg.Account)

	return &types.MsgRemoveKycResponse{}, nil
}
