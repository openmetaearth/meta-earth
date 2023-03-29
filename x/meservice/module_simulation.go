package meservice

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"me-chain/testutil/sample"
	meservicesimulation "me-chain/x/meservice/simulation"
	"me-chain/x/meservice/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = meservicesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgDoFixedDeposit = "op_weight_msg_do_fixed_deposit"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDoFixedDeposit int = 100

	opWeightMsgDoFixedWithdraw = "op_weight_msg_do_fixed_withdraw"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDoFixedWithdraw int = 100

	opWeightMsgSetFixedDepositInterestRate = "op_weight_msg_set_fixed_deposit_interest_rate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetFixedDepositInterestRate int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	meserviceGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&meserviceGenesis)
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

	var weightMsgDoFixedDeposit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDoFixedDeposit, &weightMsgDoFixedDeposit, nil,
		func(_ *rand.Rand) {
			weightMsgDoFixedDeposit = defaultWeightMsgDoFixedDeposit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDoFixedDeposit,
		meservicesimulation.SimulateMsgDoFixedDeposit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDoFixedWithdraw int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDoFixedWithdraw, &weightMsgDoFixedWithdraw, nil,
		func(_ *rand.Rand) {
			weightMsgDoFixedWithdraw = defaultWeightMsgDoFixedWithdraw
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDoFixedWithdraw,
		meservicesimulation.SimulateMsgDoFixedWithdraw(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSetFixedDepositInterestRate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetFixedDepositInterestRate, &weightMsgSetFixedDepositInterestRate, nil,
		func(_ *rand.Rand) {
			weightMsgSetFixedDepositInterestRate = defaultWeightMsgSetFixedDepositInterestRate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetFixedDepositInterestRate,
		meservicesimulation.SimulateMsgSetFixedDepositInterestRate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
