package keeper

import (
	"me-chain/x/meservice/types"
)

var _ types.QueryServer = Keeper{}
