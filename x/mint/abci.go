package mint

import (
	"math"
	"math/big"
	"time"

	"github.com/cosmos/cosmos-sdk/telemetry"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"meta-earth/x/mint/keeper"
	"meta-earth/x/mint/types"
)

// BeginBlocker mints new tokens for the previous block.
func BeginBlocker(ctx sdk.Context, k keeper.Keeper, ic types.InflationCalculationFn) {
	defer telemetry.ModuleMeasureSince(types.ModuleName, time.Now(), telemetry.MetricKeyBeginBlocker)
	logger := k.Logger(ctx)

	mintedAmount := k.GetMintedCoinAmount(ctx)
	blockHeight := ctx.BlockHeight()
	mul := (blockHeight - 1) / types.OneYearTotalBlocks
	amount := types.InitOneYearMintAmount / types.OneYearTotalBlocks / math.Exp2(float64(mul))
	mintingMEAmount := RoundUpToFourDecimals(amount)
	mintingUMEAmount := mintingMEAmount * math.Pow(10, sdk.MEExponent)

	// Compare the currently mined coins with the total amount of coins
	// -1 means that the current accumulated amount of mined is smaller than the total amount
	result := mintedAmount.Cmp(big.NewInt(types.TotalMintCoinsAmount))
	if result == -1 {
		// Accumulate the mined coins
		mintedAmount.Add(&mintedAmount, big.NewInt(int64(mintingUMEAmount)))
		k.SetMintedCoinAmount(ctx, mintedAmount)
	} else {
		mintingUMEAmount = 0
	}

	mintedCoin := sdk.NewCoin(sdk.BaseMEDenom, sdk.NewInt(int64(mintingUMEAmount)))
	mintedCoins := sdk.NewCoins(mintedCoin)
	err := k.MintCoins(ctx, mintedCoins)
	if err != nil {
		panic(err)
	}

	// send the minted coins to the distribution module account
	err = k.SendCoinsToDistr(ctx, mintedCoins)
	if err != nil {
		panic(err)
	}

	if mintedCoin.Amount.IsInt64() {
		defer telemetry.ModuleSetGauge(types.ModuleName, float32(mintedCoin.Amount.Int64()), "minted_tokens")
	}

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			types.EventTypeMint,
			sdk.NewAttribute("minted umec amount", mintedCoin.Amount.String()),
		),
	)

	logger.Info(
		"minted coin success",
		"block height", blockHeight,
		"minted umec amount", mintedCoin.Amount.String(),
	)
}

func RoundUpToFourDecimals(x float64) float64 {
	return math.Ceil(x*10000) / 10000
}
