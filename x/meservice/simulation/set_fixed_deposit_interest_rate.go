package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"me-chain/x/meservice/keeper"
	"me-chain/x/meservice/types"
)

func SimulateMsgSetFixedDepositInterestRate(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetFixedDepositInterestRate{
			Admin: simAccount.Address.String(),
		}

		// TODO: Handling the SetFixedDepositInterestRate simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SetFixedDepositInterestRate simulation not implemented"), nil, nil
	}
}
