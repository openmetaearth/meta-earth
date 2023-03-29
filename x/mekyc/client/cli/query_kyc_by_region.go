package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"me-chain/x/mekyc/types"
)

var _ = strconv.Itoa(0)

func CmdKycByRegion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "kyc-by-region [region-id]",
		Short: "Query kyc-by-region",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqRegionId := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryKycByRegionRequest{

				RegionId: reqRegionId,
			}

			res, err := queryClient.KycByRegion(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
