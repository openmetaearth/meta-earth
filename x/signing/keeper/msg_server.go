package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"me-chain/x/signing/types"
)

var _ types.MsgServer = msgServer{}

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

func (m msgServer) SignIn(goCtx context.Context, msg *types.MsgSignIn) (*types.MsgSignInResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeSignIn,
			sdk.NewAttribute(types.AttributeKeySignInMessage, msg.SignInMessage),
			sdk.NewAttribute(types.AttributeKeySignInAddress, msg.SignInAddress),
		),
	})

	return &types.MsgSignInResponse{}, nil
}
