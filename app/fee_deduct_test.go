package app

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	grouptypes "github.com/cosmos/cosmos-sdk/x/group"
	"github.com/stretchr/testify/require"

	checkintypes "me-chain/x/checkin/types"
)

func TestMessagesAllowFreeGas(t *testing.T) {
	checkIn := &checkintypes.MsgCheckIn{}
	groupUpdate := &grouptypes.MsgUpdateGroupMembers{}
	send := &banktypes.MsgSend{}

	tests := []struct {
		name string
		msgs []sdk.Msg
		want bool
	}{
		{
			name: "check in only",
			msgs: []sdk.Msg{checkIn},
			want: true,
		},
		{
			name: "group update only",
			msgs: []sdk.Msg{groupUpdate},
			want: true,
		},
		{
			name: "multiple free gas messages",
			msgs: []sdk.Msg{checkIn, groupUpdate},
			want: true,
		},
		{
			name: "mixed check in and paid message",
			msgs: []sdk.Msg{checkIn, send},
			want: false,
		},
		{
			name: "paid message only",
			msgs: []sdk.Msg{send},
			want: false,
		},
		{
			name: "empty transaction",
			msgs: nil,
			want: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			require.Equal(t, tt.want, messagesAllowFreeGas(tt.msgs))
		})
	}
}
