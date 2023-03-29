package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/mekyc module sentinel errors
var (
	ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")

	ErrDoDeposit        = sdkerrors.Register(ModuleName, 1101, "do deposit error")
	ErrDoWithdraw       = sdkerrors.Register(ModuleName, 1102, "do withdraw error")
	ErrNoDeposit        = sdkerrors.Register(ModuleName, 1103, "deposit not exist error")
	ErrNotEnoughDeposit = sdkerrors.Register(ModuleName, 1104, "deposit not enough error")
	ErrAmountNotInteger = sdkerrors.Register(ModuleName, 1105, "amount is not integer error")

	ErrDoFixedDeposit           = sdkerrors.Register(ModuleName, 1113, "do fixed deposit error")
	ErrDoFixedWithDraw          = sdkerrors.Register(ModuleName, 1114, "do fixed withdraw error")
	ErrNoFixedDepositFound      = sdkerrors.Register(ModuleName, 1115, "fixed deposit not found")
	ErrFixedDepositNotExpired   = sdkerrors.Register(ModuleName, 1116, "fixed deposit not reach deadline")
	ErrFixedDepositInvalidPayee = sdkerrors.Register(ModuleName, 1117, "fixed deposit payee error")

	ErrAgToAc        = sdkerrors.Register(ModuleName, 1118, "ag to ac exchange error")
	ErrNotEnoughAc   = sdkerrors.Register(ModuleName, 1119, "not enough AC error")
	ErrNotEnoughAg   = sdkerrors.Register(ModuleName, 1120, "not enough AG error")
	ErrLessThanMinAg = sdkerrors.Register(ModuleName, 1121, "not enough AG to convert to AC error")

	ErrorBonusNew      = sdkerrors.Register(ModuleName, 1130, "new bonus error")
	ErrorBonusRetrieve = sdkerrors.Register(ModuleName, 1131, "bonus retrieve error")
	ErrorBonusStatus   = sdkerrors.Register(ModuleName, 1132, "bonus status error")
	ErrorBonusNotExist = sdkerrors.Register(ModuleName, 1133, "bonus not exist")

	ErrVaultAccountExists    = sdkerrors.Register(ModuleName, 1140, "region vault account exists")
	ErrSendCoinToRegionAdmin = sdkerrors.Register(ModuleName, 1141, "send coins to region admin error")
	ErrSendCoinToRegionVault = sdkerrors.Register(ModuleName, 1142, "send coins to region vault error")
	ErrSetRegionAnnualRate   = sdkerrors.Register(ModuleName, 1143, "set region annual rate error")

	ErrKycNew               = sdkerrors.Register(ModuleName, 1150, "new kyc error")
	ErrKycRemove            = sdkerrors.Register(ModuleName, 1151, "remove kyc error")
	ErrKycExists            = sdkerrors.Register(ModuleName, 1152, "kyc already exists")
	ErrKycNotExists         = sdkerrors.Register(ModuleName, 1153, "kyc not exists")
	ErrRegionVaultNotExists = sdkerrors.Register(ModuleName, 1154, "region vault not exists")
	ErrInvalidKycRole       = sdkerrors.Register(ModuleName, 1155, "invalid kyc role value")
	ErrSetKycMinStaking     = sdkerrors.Register(ModuleName, 1156, "set kyc min staking error")
	ErrSetKycMaxStaking     = sdkerrors.Register(ModuleName, 1157, "set kyc max staking error")
	ErrKycRegionAdminExists = sdkerrors.Register(ModuleName, 1158, "kyc region admin already exists")
	ErrKycRemoveRegionAdmin = sdkerrors.Register(ModuleName, 1159, "remove kyc region admin error")

	ErrSetClearHeight = sdkerrors.Register(ModuleName, 1160, "set clear height failed")
	ErrGetClearHeight = sdkerrors.Register(ModuleName, 1161, "get clear height failed")

	ErrRegionAlreadyExist = sdkerrors.Register(ModuleName, 1162, "region already exist")
	ErrRegionNotExist     = sdkerrors.Register(ModuleName, 1163, "region not exist")

	ErrParameter = sdkerrors.Register(ModuleName, 1201, "parameter error")
)
