package keeper

import (
	"me-chain/x/checkin/types"
)

var _ types.QueryServer = Keeper{}
