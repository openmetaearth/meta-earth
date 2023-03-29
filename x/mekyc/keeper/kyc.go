package keeper

import (
	"me-chain/x/mekyc/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	GLOBAL_ADMIN_ADDR = "sil1hhhww7mwzhcl7cvgjvv89mkkt4m9gljpvpkrts"
)

func (k Keeper) GetGlobalAdminAddr() (sdk.AccAddress, error) {
	return sdk.AccAddressFromBech32(GLOBAL_ADMIN_ADDR)
}

func (k Keeper) GetGlobalAdmin() string {
	return GLOBAL_ADMIN_ADDR
}

// SetKyc set a specific kyc in the store from its index
func (k Keeper) SetKyc(ctx sdk.Context, kyc types.Kyc) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KycKeyPrefix))
	b := k.cdc.MustMarshal(&kyc)
	store.Set(types.KycKey(
		kyc.Account,
	), b)
}

// GetKyc returns a kyc from its index
func (k Keeper) GetKyc(
	ctx sdk.Context,
	account string,

) (val types.Kyc, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KycKeyPrefix))

	b := store.Get(types.KycKey(
		account,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveKyc removes a kyc from the store
func (k Keeper) RemoveKyc(
	ctx sdk.Context,
	account string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KycKeyPrefix))
	store.Delete(types.KycKey(
		account,
	))
}

// GetAllKyc returns all kyc
func (k Keeper) GetAllKyc(ctx sdk.Context) (list []types.Kyc) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KycKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Kyc
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
