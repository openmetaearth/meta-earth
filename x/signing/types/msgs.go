package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignIn = "sign_in"

var _ sdk.Msg = &MsgSignIn{}

func NewMsgSignIn(signInAddress string, signInMessage string) *MsgSignIn {
	return &MsgSignIn{
		SignInAddress: signInAddress,
		SignInMessage: signInMessage,
	}
}

func (msg *MsgSignIn) Route() string {
	return RouterKey
}

func (msg *MsgSignIn) Type() string {
	return TypeMsgSignIn
}

func (msg *MsgSignIn) GetSigners() []sdk.AccAddress {
	signer, err := sdk.AccAddressFromBech32(msg.SignInAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{signer}
}

func (msg *MsgSignIn) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignIn) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.SignInAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sign in address (%s)", err)
	}

	if msg.SignInMessage != "ME, my way!" {
		return sdkerrors.Wrapf(ErrSignInMessage, "invalid sign in message (%s)", err)
	}
	return nil
}
