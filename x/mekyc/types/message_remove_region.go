package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveRegion = "remove_region"

var _ sdk.Msg = &MsgRemoveRegion{}

func NewMsgRemoveRegion(creator string, regionId string) *MsgRemoveRegion {
	return &MsgRemoveRegion{
		Creator:  creator,
		RegionId: regionId,
	}
}

func (msg *MsgRemoveRegion) Route() string {
	return RouterKey
}

func (msg *MsgRemoveRegion) Type() string {
	return TypeMsgRemoveRegion
}

func (msg *MsgRemoveRegion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveRegion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
