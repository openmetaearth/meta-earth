package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDoFixedDeposit = "do_fixed_deposit"

var _ sdk.Msg = &MsgDoFixedDeposit{}

func NewMsgDoFixedDeposit(account string, principal sdk.Coin, term FixedDepositTerm) *MsgDoFixedDeposit {
	return &MsgDoFixedDeposit{
		Account:   account,
		Principal: principal,
		Term:      term,
	}
}

func (msg *MsgDoFixedDeposit) Route() string {
	return RouterKey
}

func (msg *MsgDoFixedDeposit) Type() string {
	return TypeMsgDoFixedDeposit
}

func (msg *MsgDoFixedDeposit) GetSigners() []sdk.AccAddress {
	account, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{account}
}

func (msg *MsgDoFixedDeposit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDoFixedDeposit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid account address (%s)", err)
	}
	return nil
}
