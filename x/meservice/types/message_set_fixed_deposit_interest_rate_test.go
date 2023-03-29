package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"me-chain/testutil/sample"
)

func TestMsgSetFixedDepositInterestRate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgSetFixedDepositInterestRate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgSetFixedDepositInterestRate{
				Admin: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgSetFixedDepositInterestRate{
				Admin: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
