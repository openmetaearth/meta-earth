package ante

import (
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/auth/ante"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
)

// DeductFeeDecorator deducts fees from the first signer of the tx
// If the first signer does not have the funds to pay for the fees, return with InsufficientFunds error
// Call next AnteHandler if fees successfully deducted
// CONTRACT: Tx must implement FeeTx interface to use DeductFeeDecorator
type DeductFeeDecorator struct {
	ak             ante.AccountKeeper
	feegrantKeeper ante.FeegrantKeeper
	stakingKeeper  StakingKeeper
	txFeeChecker   ante.TxFeeChecker
}

func NewDeductFeeDecorator(ak ante.AccountKeeper, fk ante.FeegrantKeeper, vk StakingKeeper, tfc ante.TxFeeChecker) DeductFeeDecorator {
	if tfc == nil {
		tfc = checkTxFeeWithValidatorMinGasPrices
	}

	return DeductFeeDecorator{
		ak:             ak,
		feegrantKeeper: fk,
		stakingKeeper:  vk,
		txFeeChecker:   tfc,
	}
}

func (dfd DeductFeeDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (sdk.Context, error) {
	log := ctx.Logger()
	feeTx, ok := tx.(sdk.FeeTx)
	if !ok {
		return ctx, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "Tx must be a FeeTx")
	}

	if !simulate && ctx.BlockHeight() > 0 && feeTx.GetGas() == 0 {
		return ctx, sdkerrors.Wrap(sdkerrors.ErrInvalidGasLimit, "must provide positive gas")
	}

	var (
		priority int64
		err      error
	)

	fee := feeTx.GetFee()
	if !simulate {
		fee, priority, err = dfd.txFeeChecker(ctx, tx)
		if err != nil {
			return ctx, err
		}
	}

	feePending := feeTx.GetFee()
	feePayer := feeTx.FeePayer()
	feeGranter := feeTx.FeeGranter()
	fee, err = sdk.ParseCoinsNormalized(feePending.String())
	if err != nil {
		return ctx, sdkerrors.Wrap(err, "")
	}

	log.Info("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "txFee", feeTx.GetFee().String(), "txGas", feeTx.GetGas(), "ctxGasUsed", ctx.GasMeter().GasConsumed(), "ctxGasLimit", ctx.GasMeter().Limit(), "ctxGasPrice", ctx.MinGasPrices().String())

	deductFeesFrom := feePayer

	// if fee granter set deduct fee from fee granter account.
	// this works with only when fee grant enabled.
	if feeGranter != nil {
		if dfd.stakingKeeper == nil {
			return ctx, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "fee grants are not enabled")
		} else if !feeGranter.Equals(feePayer) {
			err := dfd.feegrantKeeper.UseGrantedFees(ctx, feeGranter, feePayer, fee, tx.GetMsgs())

			if err != nil {
				return ctx, sdkerrors.Wrapf(err, "%s not allowed to pay fees from %s", feeGranter, feePayer)
			}
		}

		deductFeesFrom = feeGranter
	}

	// deduct the fees
	if !fee.IsZero() {
		// DeductFees deducts fees from the given account.
		if !fee.IsValid() {
			return ctx, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "invalid fee amount: %s", fee)
		}

		_, ok := dfd.stakingKeeper.GetKyc(ctx, deductFeesFrom.String())
		if !ok {
			log.Info("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "kyc, fee to node owner", fee.String())
			err := dfd.stakingKeeper.SendCoinsToGlobalTreasure(ctx, deductFeesFrom, fee)
			if err != nil {
				return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
			}
		} else {
			addrGlobalAdmin := dfd.stakingKeeper.GetGlobalAdminAddress(ctx)
			if addrGlobalAdmin == deductFeesFrom.String() {
				err = dfd.stakingKeeper.SendCoinsToGlobalTreasure(ctx, deductFeesFrom, fee)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
				}
			} else {
				log.Info("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "no kyc, fee to three receivers: ", fee.String())
				feeValOwner := make(sdk.Coins, len(fee))
				feeGlobalTreasure := make(sdk.Coins, len(fee))
				feeDevOperator := make(sdk.Coins, len(fee))
				for i, f := range fee {
					rateNodeVal := sdk.MustNewDecFromStr("0.1")
					rateDevOperator := sdk.MustNewDecFromStr("0.1")

					feeValOwner[i] = sdk.NewCoin(f.Denom, rateNodeVal.MulInt(f.Amount).RoundInt())
					feeDevOperator[i] = sdk.NewCoin(f.Denom, rateDevOperator.MulInt(f.Amount).RoundInt())
					feeGlobalTreasure[i] = sdk.NewCoin(f.Denom, f.Amount.Sub(feeValOwner[i].Amount).Sub(feeDevOperator[i].Amount))
				}

				if feeValOwner.IsAllPositive() {
					err := dfd.stakingKeeper.SendCoinsToValOwner(ctx, deductFeesFrom, deductFeesFrom.String(), feeValOwner)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToNodeVal, err.Error())
					}
				}

				if feeDevOperator.IsAllPositive() {
					err := dfd.stakingKeeper.SendCoinsToDevOperator(ctx, deductFeesFrom, feeDevOperator)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToDevOperator, err.Error())
					}
				}

				if feeGlobalTreasure.IsAllPositive() {
					err = dfd.stakingKeeper.SendCoinsToGlobalTreasure(ctx, deductFeesFrom, feeGlobalTreasure)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
					}
				}
				log.Info("ante.DeductFeeDecorator",
					"IsCheckTx:", ctx.IsCheckTx(),
					"kyc user, deductFeesFrom", deductFeesFrom,
					"fee to kyc node:", feeValOwner.String(),
					"fee to dev operator:", feeDevOperator.String(),
					"fee to global treasure:", feeGlobalTreasure.String(),
				)
			}
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(sdk.EventTypeTx,
				sdk.NewAttribute(sdk.AttributeKeyFee, feeTx.GetFee().String()),
			),
		)
	}

	newCtx := ctx.WithPriority(priority)

	return next(newCtx, tx, simulate)
}

// checkTxFeeWithValidatorMinGasPrices implements the default fee logic, where the minimum price per
// unit of gas is fixed and set by each validator, can the tx priority is computed from the gas price.
func checkTxFeeWithValidatorMinGasPrices(ctx sdk.Context, tx sdk.Tx) (sdk.Coins, int64, error) {
	feeTx, ok := tx.(sdk.FeeTx)
	if !ok {
		return nil, 0, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "Tx must be a FeeTx")
	}

	feeCoins := feeTx.GetFee()
	gas := feeTx.GetGas()

	// Ensure that the provided fees meet a minimum threshold for the validator,
	// if this is a CheckTx. This is only for local mempool purposes, and thus
	// is only ran on check tx.
	if ctx.IsCheckTx() {
		minGasPrices := ctx.MinGasPrices()
		if !minGasPrices.IsZero() {
			requiredFees := make(sdk.Coins, len(minGasPrices))

			// Determine the required fees by multiplying each required minimum gas
			// price by the gas limit, where fee = ceil(minGasPrice * gasLimit).
			glDec := sdk.NewDec(int64(gas))
			for i, gp := range minGasPrices {
				fee := gp.Amount.Mul(glDec)
				requiredFees[i] = sdk.NewCoin(gp.Denom, fee.Ceil().RoundInt())
			}

			if !feeCoins.IsAnyGTE(requiredFees) {
				return nil, 0, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFee, "insufficient fees; got: %s required: %s", feeCoins, requiredFees)
			}
		}
	}

	priority := getTxPriority(feeCoins, int64(gas))
	return feeCoins, priority, nil
}

// getTxPriority returns a naive tx priority based on the amount of the smallest denomination of the gas price
// provided in a transaction.
// NOTE: This implementation should be used with a great consideration as it opens potential attack vectors
// where txs with multiple coins could not be prioritize as expected.
func getTxPriority(fee sdk.Coins, gas int64) int64 {
	var priority int64
	for _, c := range fee {
		p := int64(math.MaxInt64)
		gasPrice := c.Amount.QuoRaw(gas)
		if gasPrice.IsInt64() {
			p = gasPrice.Int64()
		}
		if priority == 0 || p < priority {
			priority = p
		}
	}

	return priority
}
