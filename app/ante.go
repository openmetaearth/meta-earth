package app

import (
	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/auth/ante"

	errorsmod "cosmossdk.io/errors"
	wasmTypes "github.com/CosmWasm/wasmd/x/wasm/types"
	ibcante "github.com/cosmos/ibc-go/v7/modules/core/ante"
	"github.com/cosmos/ibc-go/v7/modules/core/keeper"
)

// HandlerOptions are the options required for constructing a default SDK AnteHandler.
type HandlerOptions struct {
	ante.HandlerOptions
	StakingKeeper     StakingKeeper
	IBCKeeper         *keeper.Keeper
	WasmConfig        *wasmTypes.WasmConfig
	wasmViewKeeper    wasmTypes.ViewKeeper
	TXCounterStoreKey storetypes.StoreKey
}

// NewAnteHandler returns an AnteHandler that checks and increments sequence
// numbers, checks signatures & account numbers, and deducts fees from the first
// signer.
func NewAnteHandler(options HandlerOptions) (sdk.AnteHandler, error) {
	if options.AccountKeeper == nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "account keeper is required for AnteHandler")
	}
	if options.BankKeeper == nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "bank keeper is required for AnteHandler")
	}
	if options.SignModeHandler == nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "sign mode handler is required for ante builder")
	}
	if options.WasmConfig == nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "wasm config is required for ante builder")
	}
	if options.TXCounterStoreKey == nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "tx counter key is required for ante builder")
	}

	var sigGasConsumer = options.SigGasConsumer
	if sigGasConsumer == nil {
		sigGasConsumer = ante.DefaultSigVerificationGasConsumer
	}

	anteDecorators := []sdk.AnteDecorator{
		ante.NewSetUpContextDecorator(), // outermost AnteDecorator. SetUpContext must be called first
		wasmkeeper.NewLimitSimulationGasDecorator(options.WasmConfig.SimulationGasLimit), // after setup context to enforce limits early
		wasmkeeper.NewCountTXDecorator(options.TXCounterStoreKey),
		ante.NewExtensionOptionsDecorator(options.ExtensionOptionChecker),
		//ante.NewValidateBasicDecorator(),
		//ante.NewTxTimeoutHeightDecorator(),
		//ante.NewValidateMemoDecorator(options.AccountKeeper),
		//ante.NewConsumeGasForTxSizeDecorator(options.AccountKeeper),
		NewDeductFeeDecorator(options.AccountKeeper, options.FeegrantKeeper, options.StakingKeeper, options.TxFeeChecker, options.wasmViewKeeper),
		ante.NewSetPubKeyDecorator(options.AccountKeeper), // SetPubKeyDecorator must be called before all signature verification decorators
		//ante.NewValidateSigCountDecorator(options.AccountKeeper),
		ante.NewSigGasConsumeDecorator(options.AccountKeeper, options.SigGasConsumer),
		ante.NewSigVerificationDecorator(options.AccountKeeper, options.SignModeHandler),
		ante.NewIncrementSequenceDecorator(options.AccountKeeper),
		ibcante.NewRedundantRelayDecorator(options.IBCKeeper),
	}
	return sdk.ChainAnteDecorators(anteDecorators...), nil
}
