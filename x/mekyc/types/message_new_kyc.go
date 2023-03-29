package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgNewKyc = "new_kyc"

var _ sdk.Msg = &MsgNewKyc{}

func NewMsgNewKyc(creator string, account string, regionId string) *MsgNewKyc {
	return &MsgNewKyc{
		Creator:  creator,
		Account:  account,
		RegionId: regionId,
	}
}

func (msg *MsgNewKyc) Route() string {
	return RouterKey
}

func (msg *MsgNewKyc) Type() string {
	return TypeMsgNewKyc
}

func (msg *MsgNewKyc) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgNewKyc) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgNewKyc) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
