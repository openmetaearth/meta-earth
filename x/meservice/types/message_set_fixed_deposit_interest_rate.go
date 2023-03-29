package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetFixedDepositInterestRate = "set_fixed_deposit_interest_rate"

var _ sdk.Msg = &MsgSetFixedDepositInterestRate{}

func NewMsgSetFixedDepositInterestRate(admin string, term FixedDepositTerm, rate sdk.Dec) *MsgSetFixedDepositInterestRate {
	return &MsgSetFixedDepositInterestRate{
		Admin: admin,
		Term:  term,
		Rate:  rate,
	}
}

func (msg *MsgSetFixedDepositInterestRate) Route() string {
	return RouterKey
}

func (msg *MsgSetFixedDepositInterestRate) Type() string {
	return TypeMsgSetFixedDepositInterestRate
}

func (msg *MsgSetFixedDepositInterestRate) GetSigners() []sdk.AccAddress {
	admin, err := sdk.AccAddressFromBech32(msg.Admin)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{admin}
}

func (msg *MsgSetFixedDepositInterestRate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetFixedDepositInterestRate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Admin)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}
	return nil
}
