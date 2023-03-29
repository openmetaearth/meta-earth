package keeper

import (
	"me-chain/x/meservice/types"

	"github.com/tendermint/tendermint/crypto"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

// SetFixedDepositVaultt set a specific vault in the store from its index
func (k Keeper) SetFixedDepositVault(ctx sdk.Context, vault types.FixedDepositVault) {
	regionAcc := k.GetVaultAccount(ctx)
	if regionAcc == nil {
		vaultAddr := k.GetVaultAccountAddr()
		k.accountKeeper.SetAccount(ctx, k.accountKeeper.NewAccountWithAddress(ctx, vaultAddr))
	}

	vault.Account = k.GetVaultAccountAddr().String()

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	key := types.KeyPrefix(types.FixedDepositVaultKey)

	b := k.cdc.MustMarshal(&vault)
	store.Set(key, b)
}

// SetFixedDepositVaulttAnnualRate set a specific vault in the store from its index
func (k Keeper) SetFixedDepositVaultAnnualRate(ctx sdk.Context, annualRate types.FixedDepositAnnualRate) error {
	var vault types.FixedDepositVault

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	key := types.KeyPrefix(types.FixedDepositVaultKey)

	b := store.Get(key)
	if b == nil {
		return types.ErrFixedDepositVaultNotExists
	}

	k.cdc.MustUnmarshal(b, &vault)
	vault.Rate = &annualRate

	b = k.cdc.MustMarshal(&vault)
	store.Set(key, b)

	return nil
}

// GetFixedDepositVaultt returns a vault from its index
func (k Keeper) GetFixedDepositVault(
	ctx sdk.Context,
) (val types.FixedDepositVault, found bool) {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	key := types.KeyPrefix(types.FixedDepositVaultKey)

	b := store.Get(key)
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

func (k Keeper) GetVaultAccountAddr() sdk.AccAddress {
	return sdk.AccAddress(crypto.AddressHash([]byte(types.FixedDepositVaultAccountName)))
}

func (k Keeper) HasVaultAccount(ctx sdk.Context) bool {
	vaultAddr := k.GetVaultAccountAddr()
	return k.accountKeeper.HasAccount(ctx, vaultAddr)
}

func (k Keeper) GetVaultAccount(ctx sdk.Context) authtypes.AccountI {
	vaultAddr := k.GetVaultAccountAddr()
	return k.accountKeeper.GetAccount(ctx, vaultAddr)
}

func (k Keeper) GetReginValutAllBalance(ctx sdk.Context) sdk.Coins {
	vaultAddr := k.GetVaultAccountAddr()
	return k.bankKeeper.GetAllBalances(ctx, vaultAddr)
}

// SetRegionVaultAnnualRate set a specific regionVault in the store from its index
func (k Keeper) SetRegionVaultAnnualRate(ctx sdk.Context, rate types.FixedDepositAnnualRate) error {
	var vault types.FixedDepositVault

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	key := types.KeyPrefix(types.FixedDepositVaultKey)

	b := store.Get(key)
	if b == nil {
		return types.ErrFixedDepositVaultNotExists
	}

	k.cdc.MustUnmarshal(b, &vault)
	vault.Rate = &rate

	b = k.cdc.MustMarshal(&vault)
	store.Set(key, b)

	return nil
}
