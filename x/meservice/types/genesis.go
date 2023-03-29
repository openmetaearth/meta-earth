package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		FixedDepositList: []FixedDeposit{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in fixedDeposit
	fixedDepositIdMap := make(map[uint64]bool)
	fixedDepositCount := gs.GetFixedDepositCount()
	for _, elem := range gs.FixedDepositList {
		if _, ok := fixedDepositIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for fixedDeposit")
		}
		if elem.Id >= fixedDepositCount {
			return fmt.Errorf("fixedDeposit id should be lower or equal than the last id")
		}
		fixedDepositIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
