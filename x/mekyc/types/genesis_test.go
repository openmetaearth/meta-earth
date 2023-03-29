package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"me-chain/x/mekyc/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				RegionList: []types.Region{
					{
						RegionId: "0",
					},
					{
						RegionId: "1",
					},
				},
				KycList: []types.Kyc{
					{
						Account: "0",
					},
					{
						Account: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated region",
			genState: &types.GenesisState{
				RegionList: []types.Region{
					{
						RegionId: "0",
					},
					{
						RegionId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated kyc",
			genState: &types.GenesisState{
				KycList: []types.Kyc{
					{
						Account: "0",
					},
					{
						Account: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
