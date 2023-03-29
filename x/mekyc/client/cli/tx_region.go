package cli

import (
	"strconv"

	"me-chain/x/mekyc/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdNewRegion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "new-region [region-id] [name]",
		Short: "Broadcast message new-region",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argRegionId := args[0]
			argName := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgNewRegion(
				clientCtx.GetFromAddress().String(),
				argRegionId,
				argName,
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

var _ = strconv.Itoa(0)

func CmdRemoveRegion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "remove-region [region-id]",
		Short: "Broadcast message remove-region",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argRegionId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRemoveRegion(
				clientCtx.GetFromAddress().String(),
				argRegionId,
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
