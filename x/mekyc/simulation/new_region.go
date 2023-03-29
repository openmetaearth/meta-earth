package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"me-chain/x/mekyc/keeper"
	"me-chain/x/mekyc/types"
)

func SimulateMsgNewRegion(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgNewRegion{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the NewRegion simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "NewRegion simulation not implemented"), nil, nil
	}
}
