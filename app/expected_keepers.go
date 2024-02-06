package app

import (
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type StakingKeeper interface {
	GetMeid(ctx sdk.Context, account string) (val stakingtypes.Meid, found bool)

	GetValOwnerAddress(ctx sdk.Context, meidAddress string) (string, error)
	GetGlobalTreasureAddress(ctx sdk.Context) (string, error)
	GetDevOperatorAddress(ctx sdk.Context) string
	GetProposerOwnerAddress(ctx sdk.Context) (string, error)

	GetGlobalAdminAddr(ctx sdk.Context) (sdk.AccAddress, error)
	GetGlobalAdminAddress(ctx sdk.Context) string
}

type BankKeeper interface {
	InputOutputCoins(ctx sdk.Context, input banktypes.Input, outputs []banktypes.Output) error
}
