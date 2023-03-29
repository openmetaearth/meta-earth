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

func CmdNewKyc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "new-kyc [account] [region-id]",
		Short: "Broadcast message new-kyc",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAccount := args[0]
			argRegionId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgNewKyc(
				clientCtx.GetFromAddress().String(),
				argAccount,
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

var _ = strconv.Itoa(0)

func CmdRemoveKyc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "remove-kyc [account]",
		Short: "Broadcast message remove-kyc",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAccount := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRemoveKyc(
				clientCtx.GetFromAddress().String(),
				argAccount,
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
