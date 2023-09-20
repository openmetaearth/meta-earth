package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"me-chain/x/checkin/types"
)

func (k msgServer) CheckIn(goCtx context.Context, msg *types.MsgCheckIn) (*types.MsgCheckInResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeCheckIn,
			sdk.NewAttribute(types.AttributeKeyCheckInMessage, msg.CheckInMessage),
			sdk.NewAttribute(types.AttributeKeyCheckInAddress, msg.CheckInAddress),
		),
	})

	return &types.MsgCheckInResponse{}, nil
}
