package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveKyc = "remove_kyc"

var _ sdk.Msg = &MsgRemoveKyc{}

func NewMsgRemoveKyc(creator string, account string) *MsgRemoveKyc {
	return &MsgRemoveKyc{
		Creator: creator,
		Account: account,
	}
}

func (msg *MsgRemoveKyc) Route() string {
	return RouterKey
}

func (msg *MsgRemoveKyc) Type() string {
	return TypeMsgRemoveKyc
}

func (msg *MsgRemoveKyc) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveKyc) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveKyc) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
