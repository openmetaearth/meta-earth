package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"me-chain/x/checkin/keeper"
	"me-chain/x/checkin/types"
)

func SimulateMsgCheckIn(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCheckIn{
			CheckInAddress: simAccount.Address.String(),
		}

		// TODO: Handling the CheckIn simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CheckIn simulation not implemented"), nil, nil
	}
}
