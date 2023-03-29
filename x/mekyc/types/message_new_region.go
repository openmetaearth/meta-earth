package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgNewRegion = "new_region"

var _ sdk.Msg = &MsgNewRegion{}

func NewMsgNewRegion(creator string, regionId string, name string) *MsgNewRegion {
	return &MsgNewRegion{
		Creator:  creator,
		RegionId: regionId,
		Name:     name,
	}
}

func (msg *MsgNewRegion) Route() string {
	return RouterKey
}

func (msg *MsgNewRegion) Type() string {
	return TypeMsgNewRegion
}

func (msg *MsgNewRegion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgNewRegion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgNewRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
