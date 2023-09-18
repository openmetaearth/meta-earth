package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/signing module sentinel errors
var (
	ErrSignInMessage = sdkerrors.Register(ModuleName, 1100, "invalid sign in message, please input 'ME, my way!'")
)
