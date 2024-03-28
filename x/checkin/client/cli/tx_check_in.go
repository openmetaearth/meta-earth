package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"me-chain/x/checkin/types"
)

var _ = strconv.Itoa(0)

func CmdCheckIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "check-in 'ME, My Way!' 'Asia/Shanghai'",
		Short: "Daily check in for special message",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCheckInMessage := args[0]
			argCheckInTimezone := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCheckIn(
				clientCtx.GetFromAddress().String(),
				argCheckInMessage,
				argCheckInTimezone,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
