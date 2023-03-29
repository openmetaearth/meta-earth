package cli

import (
	"strconv"
	"strings"

	"me-chain/x/meservice/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdDoFixedDeposit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "do-fixed-deposit [principal] [term]",
		Short: "Broadcast message do_fixed_deposit",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPrincipal, err := sdk.ParseCoinNormalized(args[0])
			if err != nil {
				return err
			}
			argTerm := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			term, ok := types.FixedDepositTerm_value[strings.ToUpper(strings.Trim(argTerm, " "))]
			if !ok {
				return types.ErrParameter.Wrap("period error")
			}

			msg := types.NewMsgDoFixedDeposit(
				clientCtx.GetFromAddress().String(),
				argPrincipal,
				types.FixedDepositTerm(term),
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

func CmdDoFixedWithdraw() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "do-fixed-withdraw [id]",
		Short: "Broadcast message do_fixed_withdraw",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDoFixedWithdraw(
				clientCtx.GetFromAddress().String(),
				argId,
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

func CmdSetFixedDepositInterestRate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-fixed-deposit-interest-rate [term] [rate]",
		Short: "Broadcast message set-fixed-deposit-interest-rate",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTerm := args[0]
			argRate := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			term, ok := types.FixedDepositTerm_value[strings.ToUpper(strings.Trim(argTerm, " "))]
			if !ok {
				return types.ErrParameter.Wrap("period error")
			}

			msg := types.NewMsgSetFixedDepositInterestRate(
				clientCtx.GetFromAddress().String(),
				types.FixedDepositTerm(term),
				sdk.MustNewDecFromStr(argRate),
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
