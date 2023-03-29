package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"me-chain/x/meservice/types"
)

// GetFixedDepositCount get the total number of fixedDeposit
func (k Keeper) GetFixedDepositCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FixedDepositCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFixedDepositCount set the total number of fixedDeposit
func (k Keeper) SetFixedDepositCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FixedDepositCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFixedDeposit appends a fixedDeposit in the store with a new id and update the count
func (k Keeper) AppendFixedDeposit(
	ctx sdk.Context,
	fixedDeposit types.FixedDeposit,
) uint64 {
	// Create the fixedDeposit
	count := k.GetFixedDepositCount(ctx)

	// Set the ID of the appended value
	fixedDeposit.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FixedDepositKey))
	appendedValue := k.cdc.MustMarshal(&fixedDeposit)
	store.Set(GetFixedDepositIDBytes(fixedDeposit.Id), appendedValue)

	// Update fixedDeposit count
	k.SetFixedDepositCount(ctx, count+1)

	return count
}

// SetFixedDeposit set a specific fixedDeposit in the store
func (k Keeper) SetFixedDeposit(ctx sdk.Context, fixedDeposit types.FixedDeposit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FixedDepositKey))
	b := k.cdc.MustMarshal(&fixedDeposit)
	store.Set(GetFixedDepositIDBytes(fixedDeposit.Id), b)
}

// GetFixedDeposit returns a fixedDeposit from its id
func (k Keeper) GetFixedDeposit(ctx sdk.Context, id uint64) (val types.FixedDeposit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FixedDepositKey))
	b := store.Get(GetFixedDepositIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFixedDeposit removes a fixedDeposit from the store
func (k Keeper) RemoveFixedDeposit(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FixedDepositKey))
	store.Delete(GetFixedDepositIDBytes(id))
}

// GetAllFixedDeposit returns all fixedDeposit
func (k Keeper) GetAllFixedDeposit(ctx sdk.Context) (list []types.FixedDeposit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FixedDepositKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.FixedDeposit
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFixedDepositIDBytes returns the byte representation of the ID
func GetFixedDepositIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFixedDepositIDFromBytes returns ID in uint64 format from a byte array
func GetFixedDepositIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
