package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCheckIn = "check_in"

var _ sdk.Msg = &MsgCheckIn{}

func NewMsgCheckIn(checkInAddress string, checkInMessage string) *MsgCheckIn {
	return &MsgCheckIn{
		CheckInAddress: checkInAddress,
		CheckInMessage: checkInMessage,
	}
}

func (msg *MsgCheckIn) Route() string {
	return RouterKey
}

func (msg *MsgCheckIn) Type() string {
	return TypeMsgCheckIn
}

func (msg *MsgCheckIn) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.CheckInAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckIn) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckIn) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.CheckInAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid check in address (%s)", err)
	}

	if msg.CheckInMessage != "ME, my way!" {
		return sdkerrors.Wrapf(ErrCheckInMessage, "invalid check in message (%s)", err)
	}
	return nil
}
