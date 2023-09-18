package keeper

import (
	"me-chain/x/signing/types"
)

var _ types.QueryServer = Keeper{}
