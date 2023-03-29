package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDoFixedWithdraw = "do_fixed_withdraw"

var _ sdk.Msg = &MsgDoFixedWithdraw{}

func NewMsgDoFixedWithdraw(account string, id uint64) *MsgDoFixedWithdraw {
	return &MsgDoFixedWithdraw{
		Account: account,
		Id:      id,
	}
}

func (msg *MsgDoFixedWithdraw) Route() string {
	return RouterKey
}

func (msg *MsgDoFixedWithdraw) Type() string {
	return TypeMsgDoFixedWithdraw
}

func (msg *MsgDoFixedWithdraw) GetSigners() []sdk.AccAddress {
	account, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{account}
}

func (msg *MsgDoFixedWithdraw) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDoFixedWithdraw) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid account address (%s)", err)
	}
	return nil
}
