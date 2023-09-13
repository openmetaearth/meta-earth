package app

import (
	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
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

func (dfd DeductFeeDecorator) ParseWasmMsg(ctx sdk.Context, tx sdk.Tx) (string, bool) {
	// wasm exec message should be the only message in tx
	// to be considered as a wasm transaction
	if len(tx.GetMsgs()) >= 1 {
		return "", false
	}

	for _, msg := range tx.GetMsgs() {
		var contract string
		found := false
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
		}
		if found {
			addr, err := sdk.AccAddressFromBech32(contract)
			if err != nil {
				return "", false
			}
			admin := dfd.wasmKeeper.GetContractInfo(ctx, addr).Admin

			return admin, true
		}
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

		// 交易或消息的10%归入项目方地址
		if fee10.IsAllPositive() {
			err := dfd.stakingKeeper.SendCoinsToDevOperator(ctx, deductFeesFrom, fee10)
			if err != nil {
				return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToDevOperator, err.Error())
			}
		}

		//kyc用户的交易或消息,20%归所属区节点，若非kvc用户的交易或消息,20%归打包出块节点
		if fee20.IsAllPositive() {
			kyc, ok := dfd.stakingKeeper.GetKyc(ctx, deductFeesFrom.String())
			if ok {
				addrGlobalAdmin := dfd.stakingKeeper.GetGlobalAdminAddress(ctx)
				if addrGlobalAdmin == deductFeesFrom.String() {
					err = dfd.stakingKeeper.SendCoinsToDevOperator(ctx, deductFeesFrom, fee)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
					}
				} else {
					err := dfd.stakingKeeper.SendCoinsToValOwner(ctx, deductFeesFrom, kyc.Account, fee20)
					if err != nil {
						return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToNodeVal, err.Error())
					}
				}
			} else {
				err := dfd.stakingKeeper.SendCoinsToProposerOwner(ctx, deductFeesFrom, fee20)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
				}
			}
		}

		// 交易或消息的30%归入金库
		if fee30.IsAllPositive() {
			err = dfd.stakingKeeper.SendCoinsToGlobalTreasure(ctx, deductFeesFrom, fee30)
			if err != nil {
				return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
			}
		}

		// 若交易或消息通过dapp或三方应用，40%归dapp或三方应用地址,否则40%归入金库
		if fee40.IsAllPositive() {
			contractAdmin, ok := dfd.ParseWasmMsg(ctx, tx)
			if ok {
				addr, err := sdk.AccAddressFromBech32(contractAdmin)
				if err != nil {
					return ctx, sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid contract admin address: %s", contractAdmin)
				}

				err = dfd.stakingKeeper.SendCoinsToContractAdmin(ctx, deductFeesFrom, addr, fee40)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToDevOperator, err.Error())
				}
			} else {
				err = dfd.stakingKeeper.SendCoinsToGlobalTreasure(ctx, deductFeesFrom, fee40)
				if err != nil {
					return ctx, sdkerrors.Wrapf(stakingtypes.ErrSendCoinToGlobalAdmin, err.Error())
				}
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
