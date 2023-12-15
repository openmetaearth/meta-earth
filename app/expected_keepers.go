package app

import (
	"github.com/cosmos/cosmos-sdk/x/staking/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// BankKeeper defines the contract needed for supply related APIs (noalias)
type StakingKeeper interface {
	GetMeid(ctx sdk.Context, account string) (val types.Meid, found bool)
	SendCoinsToValOwner(ctx sdk.Context, senderAddr sdk.AccAddress, kycAddress string, amt sdk.Coins) error
	SendCoinsToDevOperator(ctx sdk.Context, senderAddr sdk.AccAddress, amt sdk.Coins) error
	SendCoinsToGlobalTreasure(ctx sdk.Context, senderAddr sdk.AccAddress, amt sdk.Coins) error
	SendCoinsToContractOwner(ctx sdk.Context, senderAddr sdk.AccAddress, contractOwnner sdk.AccAddress, amt sdk.Coins) error
	SendCoinsToProposerOwner(ctx sdk.Context, senderAddr sdk.AccAddress, amt sdk.Coins) error

	GetGlobalAdminAddr(ctx sdk.Context) (sdk.AccAddress, error)
	GetGlobalAdminAddress(ctx sdk.Context) string
}
