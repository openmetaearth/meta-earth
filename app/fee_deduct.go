package app

import (
	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
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
	wasmKeeper     wasmtypes.ViewKeeper
}

func NewDeductFeeDecorator(ak ante.AccountKeeper, fk ante.FeegrantKeeper, vk StakingKeeper, tfc ante.TxFeeChecker, wk wasmtypes.ViewKeeper) DeductFeeDecorator {
	if tfc == nil {
		tfc = checkTxFeeWithValidatorMinGasPrices
	}

	return DeductFeeDecorator{
		ak:             ak,
		feegrantKeeper: fk,
		stakingKeeper:  vk,
		txFeeChecker:   tfc,
		wasmKeeper:     wk,
	}
}

func (dfd DeductFeeDecorator) ParseWasmMsgContractOwner(ctx sdk.Context, tx sdk.Tx) (string, bool) {
	// wasm exec message should be the only message in tx
	// to be considered as a wasm transaction
	// this criterion is coarse, refine it later!

	allwasm := true
	var contract string
	for _, msg := range tx.GetMsgs() {
		switch msg := msg.(type) {
		case *wasmtypes.MsgExecuteContract:
			contract = msg.Contract
		case *wasmtypes.MsgMigrateContract:
			contract = msg.Contract
		case *wasmtypes.MsgUpdateAdmin:
			contract = msg.Contract
		case *wasmtypes.MsgClearAdmin:
			contract = msg.Contract
		case *wasmtypes.MsgSudoContract:
			contract = msg.Contract
		default:
			allwasm = false
		}
	}

	if allwasm {
		addr, err := sdk.AccAddressFromBech32(contract)
		if err != nil {
			return "", false
		}
		admin := dfd.wasmKeeper.GetContractInfo(ctx, addr).Creator

		return admin, true
	}

	return "", false
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

	if !simulate {
		_, priority, err = dfd.txFeeChecker(ctx, tx)
		if err != nil {
			return ctx, err
		}
	}

	feePending := feeTx.GetFee()
	feePayer := feeTx.FeePayer()
	feeGranter := feeTx.FeeGranter()
	fee, err := sdk.ParseCoinsNormalized(feePending.String())
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

		fee10 := make(sdk.Coins, len(fee))
		fee20 := make(sdk.Coins, len(fee))
		fee30 := make(sdk.Coins, len(fee))
		fee40 := make(sdk.Coins, len(fee))
		for i, f := range fee {
			rate10 := sdk.MustNewDecFromStr("0.1")
			rate20 := sdk.MustNewDecFromStr("0.2")
			rate30 := sdk.MustNewDecFromStr("0.3")

			fee10[i] = sdk.NewCoin(f.Denom, rate10.MulInt(f.Amount).TruncateInt())
			fee20[i] = sdk.NewCoin(f.Denom, rate20.MulInt(f.Amount).TruncateInt())
			fee30[i] = sdk.NewCoin(f.Denom, rate30.MulInt(f.Amount).TruncateInt())
			fee40[i] = sdk.NewCoin(f.Denom, f.Amount.Sub(fee10[i].Amount).Sub(fee20[i].Amount).Sub(fee30[i].Amount))
		}

		fee10Address := ""
		fee20Address := ""
		fee30Address := ""
		fee40Address := ""

		if fee10.IsAllPositive() {
			fee10Address = dfd.stakingKeeper.GetDevOperatorAddress(ctx)
		}

		if fee20.IsAllPositive() {
			meid, ok := dfd.stakingKeeper.GetMeid(ctx, deductFeesFrom.String())
			if ok {
				addrGlobalAdmin := dfd.stakingKeeper.GetGlobalAdminAddress(ctx)
				if addrGlobalAdmin == deductFeesFrom.String() {
					fee20Address = dfd.stakingKeeper.GetDevOperatorAddress(ctx)
				} else {
					fee20Address, err = dfd.stakingKeeper.GetValOwnerAddress(ctx, meid.Account)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToNodeVal, err.Error())
					}
				}
			} else {
				fee20Address, err = dfd.stakingKeeper.GetProposerOwnerAddress(ctx)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
				}
			}
		}

		if fee30.IsAllPositive() {
			fee30Address, err = dfd.stakingKeeper.GetGlobalTreasureAddress(ctx)
			if err != nil {
				return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
			}
		}

		if fee40.IsAllPositive() {
			contractOwner, ok := dfd.ParseWasmMsgContractOwner(ctx, tx)
			if ok {
				fee40Address = contractOwner
			} else {
				fee40Address, err = dfd.stakingKeeper.GetGlobalTreasureAddress(ctx)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
				}
			}
		}

		deductFeesFromString := deductFeesFrom.String()
		inputs := []banktypes.Input{
			{
				deductFeesFromString,
				fee,
			},
		}
		outputs := []banktypes.Output{
			{
				fee10Address,
				fee10,
			},
			{
				fee20Address,
				fee20,
			},
			{
				fee30Address,
				fee30,
			},
			{
				fee40Address,
				fee40,
			},
		}
		err = dfd.stakingKeeper.FeeToRecievers(ctx, inputs, outputs)
		if nil != err {
			return ctx, err
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
