package ante

import (
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
}

func NewDeductFeeDecorator(ak ante.AccountKeeper, fk ante.FeegrantKeeper, vk StakingKeeper) DeductFeeDecorator {
	return DeductFeeDecorator{
		ak:             ak,
		feegrantKeeper: fk,
		stakingKeeper:  vk,
	}
}

func (dfd DeductFeeDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (newCtx sdk.Context, err error) {
	log := ctx.Logger()

	feeTx, ok := tx.(sdk.FeeTx)
	if !ok {
		return ctx, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "Tx must be a FeeTx")
	}

	feePending := feeTx.GetFee()
	feePayer := feeTx.FeePayer()
	feeGranter := feeTx.FeeGranter()
	fee, err := sdk.ParseCoinsNormalized(feePending.String())
	if err != nil {
		return ctx, sdkerrors.Wrap(err, "")
	}

	log.Debug("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "txFee", feeTx.GetFee().String(), "txGas", feeTx.GetGas(), "ctxGasUsed", ctx.GasMeter().GasConsumed(), "ctxGasLimit", ctx.GasMeter().Limit(), "ctxGasPrice", ctx.MinGasPrices().String())

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

		kyc, ok := dfd.stakingKeeper.GetKyc(ctx, deductFeesFrom.String())
		if ok {
			log.Debug("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "kyc, fee to node owner", fee.String())
			err := dfd.stakingKeeper.SendCoinsToValOwner(ctx, deductFeesFrom, kyc.Account, fee)
			if err != nil {
				return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToRegionVault, err.Error())
			}
		} else {
			log.Debug("ante.DeductFeeDecorator", "IsCheckTx:", ctx.IsCheckTx(), "no kyc, fee to three receivers: ", fee.String())
			feeNodeVal := make(sdk.Coins, len(fee))
			feeGlobalAdmin := make(sdk.Coins, len(fee))
			feeDevOperator := make(sdk.Coins, len(fee))
			for i, f := range fee {
				rateNodeVal := sdk.MustNewDecFromStr("0.1")
				rateDevOperator := sdk.MustNewDecFromStr("0.1")

				feeNodeVal[i] = sdk.NewCoin(f.Denom, rateNodeVal.MulInt(f.Amount).Ceil().RoundInt())
				feeDevOperator[i] = sdk.NewCoin(f.Denom, rateDevOperator.MulInt(f.Amount).Ceil().RoundInt())
				feeGlobalAdmin[i] = sdk.NewCoin(f.Denom, f.Amount.Sub(feeNodeVal[i].Amount).Sub(feeDevOperator[i].Amount))
			}

            /*
			if feeNodeVal.IsAllPositive() {
				err := dfd.stakingKeeper.SendCoinsToValOwner(ctx, deductFeesFrom, kyc.Account, feeNodeVal)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToRegionVault, err.Error())
				}
			}
            */

			if feeDevOperator.IsAllPositive() {
				err := dfd.stakingKeeper.SendCoinsToDevOperator(ctx, deductFeesFrom, feeDevOperator)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToRegionVault, err.Error())
				}
			}

			if feeGlobalAdmin.IsAllPositive() {
				err = dfd.stakingKeeper.SendCoinsToGlobalAdmin(ctx, deductFeesFrom, feeGlobalAdmin)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToRegionAdmin, err.Error())
				}
			}
			log.Debug("ante.DeductFeeDecorator",
				"IsCheckTx:", ctx.IsCheckTx(),
				"kyc user, deductFeesFrom", deductFeesFrom,
				"fee to kyc node:", feeNodeVal.String(),
				"fee to dev operator:", feeDevOperator.String(),
				"fee to global admin:", feeGlobalAdmin.String(),
			)
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(sdk.EventTypeTx,
				sdk.NewAttribute(sdk.AttributeKeyFee, feeTx.GetFee().String()),
			),
		)
	}

	return next(ctx, tx, simulate)
}
