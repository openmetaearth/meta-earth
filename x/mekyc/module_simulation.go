package mekyc

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"me-chain/testutil/sample"
	mekycsimulation "me-chain/x/mekyc/simulation"
	"me-chain/x/mekyc/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = mekycsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgNewRegion = "op_weight_msg_new_region"
	// TODO: Determine the simulation weight value
	defaultWeightMsgNewRegion int = 100

	opWeightMsgRemoveRegion = "op_weight_msg_remove_region"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveRegion int = 100

	opWeightMsgNewKyc = "op_weight_msg_new_kyc"
	// TODO: Determine the simulation weight value
	defaultWeightMsgNewKyc int = 100

	opWeightMsgRemoveKyc = "op_weight_msg_remove_kyc"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveKyc int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	mekycGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&mekycGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgNewRegion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgNewRegion, &weightMsgNewRegion, nil,
		func(_ *rand.Rand) {
			weightMsgNewRegion = defaultWeightMsgNewRegion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgNewRegion,
		mekycsimulation.SimulateMsgNewRegion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveRegion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveRegion, &weightMsgRemoveRegion, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveRegion = defaultWeightMsgRemoveRegion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveRegion,
		mekycsimulation.SimulateMsgRemoveRegion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgNewKyc int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgNewKyc, &weightMsgNewKyc, nil,
		func(_ *rand.Rand) {
			weightMsgNewKyc = defaultWeightMsgNewKyc
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgNewKyc,
		mekycsimulation.SimulateMsgNewKyc(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveKyc int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveKyc, &weightMsgRemoveKyc, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveKyc = defaultWeightMsgRemoveKyc
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveKyc,
		mekycsimulation.SimulateMsgRemoveKyc(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
