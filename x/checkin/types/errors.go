package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/checkin module sentinel errors
var (
	ErrCheckInMessage = sdkerrors.Register(ModuleName, 1100, "invalid check in message, please input 'ME, my way!'")
)
