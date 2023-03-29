package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		RegionList: []Region{},
		KycList:    []Kyc{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in region
	regionIndexMap := make(map[string]struct{})

	for _, elem := range gs.RegionList {
		index := string(RegionKey(elem.RegionId))
		if _, ok := regionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for region")
		}
		regionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in kyc
	kycIndexMap := make(map[string]struct{})

	for _, elem := range gs.KycList {
		index := string(KycKey(elem.Account))
		if _, ok := kycIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for kyc")
		}
		kycIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
