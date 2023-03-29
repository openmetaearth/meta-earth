package keeper

import (
	"context"
	"strconv"
	"time"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"me-chain/x/meservice/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) TermToDuration(ctx sdk.Context, enumTerm types.FixedDepositTerm) (time.Duration, error) {
	//for test only, 12 minutes means one year
	//params.BlocksPerYear /= 43800

	minutesPerMonth := (30 * 24 * 60 * time.Minute)

	switch enumTerm {
	case types.Term1Month:
		return minutesPerMonth, nil
	case types.Term3Month:
		return (3 * minutesPerMonth), nil
	case types.Term6Month:
		return (6 * minutesPerMonth), nil
	case types.Term12Month:
		return (12 * minutesPerMonth), nil
	case types.Term24Month:
		return (24 * minutesPerMonth), nil
	case types.Term48Month:
		return (48 * minutesPerMonth), nil
	default:
		return 0, types.ErrParameter.Wrapf("period is not in enum set")
	}
}

func (k msgServer) GetFixedDepositInterest(AnnualRate *types.FixedDepositAnnualRate, principal sdk.Coin, period types.FixedDepositTerm) sdk.Dec {
	var rate sdk.Dec
	switch period {
	case types.Term1Month:
		rate = AnnualRate.AnnualRate_1Months.QuoInt(sdk.NewInt(12))
	case types.Term3Month:
		rate = AnnualRate.AnnualRate_3Months.QuoInt(sdk.NewInt(4))
	case types.Term6Month:
		rate = AnnualRate.AnnualRate_6Months.QuoInt(sdk.NewInt(2))
	case types.Term12Month:
		rate = AnnualRate.AnnualRate_12Months
	case types.Term24Month:
		rate = AnnualRate.AnnualRate_24Months.MulInt(sdk.NewInt(2))
	case types.Term48Month:
		rate = AnnualRate.AnnualRate_48Months.MulInt(sdk.NewInt(4))
	default:
		return sdk.MustNewDecFromStr("0")
	}

	return rate.MulInt(principal.Amount).MulInt(sdk.NewInt(400))
}

func (k msgServer) DoFixedDeposit(goCtx context.Context, msg *types.MsgDoFixedDeposit) (*types.MsgDoFixedDepositResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !msg.Principal.Amount.IsPositive() {
		return nil, types.ErrDoFixedDeposit.Wrapf("fixed deposit amount error (%s)", types.ErrAmountNotPositive)
	}

	vault, ok := k.GetFixedDepositVault(ctx)
	if !ok {
		return nil, types.ErrDoFixedDeposit.Wrapf("fixed deposit account error (%s)", types.ErrFixedDepositVaultNotExists)
	}

	duration, err := k.TermToDuration(ctx, msg.Term)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedDeposit, "period value error (%s)", err)
	}
	startTime := ctx.BlockTime()
	endTime := startTime.Add(duration)

	interest := k.GetFixedDepositInterest(vault.Rate, msg.Principal, msg.Term)
	fixedDeposit := types.FixedDeposit{
		Account:   msg.Account,
		Principal: msg.Principal,
		Interest:  msg.Principal,
		StartTime: startTime,
		EndTime:   endTime,
	}
	id := k.AppendFixedDeposit(ctx, fixedDeposit)

	accAddr, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedDeposit, "account format error (%s)", err)
	}

	//check base vault having enough balances for interest
	vaultAddr := k.GetVaultAccountAddr()
	balances := k.bankKeeper.SpendableCoins(ctx, vaultAddr)
	if balances.AmountOf(msg.Principal.Denom).LT(interest.TruncateInt()) {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedWithDraw, "fixed deposit vault (%s) does not have enough balances.", vaultAddr.String())
	}

	//send interest to deposit vault
	baseVaultAddr := k.GetVaultAccountAddr()
	fixedVaultAddr := k.GetVaultAccountAddr()

	err = k.bankKeeper.SendCoins(ctx,
		baseVaultAddr,
		fixedVaultAddr,
		sdk.NewCoins(fixedDeposit.Interest))
	if err != nil {
		return nil, types.ErrDoFixedDeposit.Wrapf("send coin from account to module error (%s)", err)
	}

	//send principal to deposit vault
	err = k.bankKeeper.SendCoins(ctx,
		accAddr,
		fixedVaultAddr,
		sdk.NewCoins(fixedDeposit.Principal))
	if err != nil {
		return nil, types.ErrDoFixedDeposit.Wrapf("send coin from account to module error (%s)", err)
	}

	log := k.Logger(ctx)
	log.Info("srs-poa do fixed deposit",
		", account", msg.Account,
		", Principal", msg.Principal,
		", start height", ctx.BlockHeight(),
		", term", msg.Term.String(),
	)

	event := sdk.NewEvent(types.EventTypeDoFixedDeposit,
		sdk.NewAttribute(types.AttributeKeyAccount, msg.Account),
		sdk.NewAttribute(types.AttributeKeyPrincipal, msg.Principal.String()),
		sdk.NewAttribute(types.AttributeKeyInterest, fixedDeposit.Interest.String()),
		sdk.NewAttribute(types.AttributeKeyStartTime, strconv.FormatInt(ctx.BlockHeight(), 10)),
		sdk.NewAttribute(types.AttributeKeyEndTime, fixedDeposit.EndTime.String()),
		sdk.NewAttribute(types.AttributeKeyExecTime, time.Now().String()))
	ctx.EventManager().EmitEvent(event)

	return &types.MsgDoFixedDepositResponse{Id: id}, nil
}

func (k msgServer) DoFixedWithdraw(goCtx context.Context, msg *types.MsgDoFixedWithdraw) (*types.MsgDoFixedWithdrawResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	log := ctx.Logger()

	fixedDeposit, isFound := k.GetFixedDeposit(ctx, msg.Id)
	if !isFound {
		return nil, types.ErrDoFixedWithDraw.Wrapf("fixed deposit not found (%s)", types.ErrNoFixedDepositFound)
	}

	if fixedDeposit.Account != msg.Account {
		return nil, types.ErrDoFixedWithDraw.Wrapf("only depositor can withdraw (%s)", types.ErrFixedDepositInvalidPayee)
	}

	//check fixed deposit vault have enough balances
	vaultAddr := k.GetVaultAccountAddr()
	if k.bankKeeper.SpendableCoins(ctx, vaultAddr).AmountOf(fixedDeposit.Principal.Denom).LT(fixedDeposit.Principal.Amount) {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedWithDraw, "fixed deposit vault (%s) src insufficient balances.", vaultAddr.String())
	}

	if k.bankKeeper.SpendableCoins(ctx, vaultAddr).AmountOf(fixedDeposit.Principal.Denom).LT(fixedDeposit.Interest.Amount) {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedWithDraw, "fixed deposit vault (%s) srg insufficient balances.", vaultAddr.String())
	}

	accAddr, err := sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrDoFixedWithDraw, "account format error (%s)", err)
	}
	expired := fixedDeposit.EndTime.Unix() <= ctx.BlockTime().Unix()
	if expired {
		//deposit period has expired, send the principal to user
		err = k.bankKeeper.SendCoins(ctx,
			vaultAddr,
			accAddr,
			sdk.NewCoins(fixedDeposit.Principal))
		if err != nil {
			return nil, types.ErrDoFixedWithDraw.Wrapf("send coin from vault to account error (%s)", err)
		}

		//deposit period has expired, send the interests to user
		err = k.bankKeeper.SendCoins(ctx,
			vaultAddr,
			accAddr,
			sdk.NewCoins(fixedDeposit.Interest))
		if err != nil {
			return nil, types.ErrDoFixedWithDraw.Wrapf("send coin from vault to account error (%s)", err)
		}
	} else {
		//deposit period has NOT expired, send the principal to user only and send interest to global vault
		err = k.bankKeeper.SendCoins(ctx,
			vaultAddr,
			accAddr,
			sdk.NewCoins(fixedDeposit.Principal))
		if err != nil {
			return nil, types.ErrDoFixedWithDraw.Wrapf("send coin from vault to account error (%s)", err)
		}

		baseVaultAddr := k.GetVaultAccountAddr()
		err = k.bankKeeper.SendCoins(ctx,
			vaultAddr,
			baseVaultAddr,
			sdk.NewCoins(fixedDeposit.Interest))
		if err != nil {
			return nil, types.ErrDoFixedWithDraw.Wrapf("send coin from vault to account error (%s)", err)
		}
	}
	k.RemoveFixedDeposit(ctx, msg.Id)

	log.Info("me-chain do fixed withdraw",
		"period expired:", expired,
		", account:", fixedDeposit.Account,
		", principal:", fixedDeposit.Principal,
		", interest:", fixedDeposit.Interest,
		", start time:", fixedDeposit.StartTime,
		", end time:", fixedDeposit.EndTime,
	)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeDoFixedWithDraw,
			sdk.NewAttribute(types.AttributeKeyAccount, msg.Account),
			sdk.NewAttribute(types.AttributeKeyPrincipal, fixedDeposit.Principal.String()),
			sdk.NewAttribute(types.AttributeKeyInterest, fixedDeposit.Interest.String()),
			sdk.NewAttribute(types.AttributeKeyStartTime, strconv.FormatInt(fixedDeposit.StartTime.Unix(), 10)),
			sdk.NewAttribute(types.AttributeKeyEndTime, strconv.FormatInt(fixedDeposit.StartTime.Unix(), 10)),
			sdk.NewAttribute(types.AttributeKeyInterest, fixedDeposit.Interest.String()),
		),
	)

	return &types.MsgDoFixedWithdrawResponse{}, nil
}

func (k msgServer) SetFixedDepositInterestRate(goCtx context.Context, msg *types.MsgSetFixedDepositInterestRate) (*types.MsgSetFixedDepositInterestRateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	vault, ok := k.GetFixedDepositVault(ctx)
	if !ok {
		return nil, types.ErrSetRegionAnnualRate.Wrapf("get fixed deposit vault error")
	}

	globalAdminAddress := k.kycKeeper.GetGlobalAdmin()
	if msg.Admin != globalAdminAddress {
		return nil, types.ErrSetRegionAnnualRate.Wrapf("only global admin can change fixed deposit annual rate")
	}

	annualRate := *vault.Rate
	switch msg.Term {
	case types.Term1Month:
		annualRate.AnnualRate_1Months = msg.Rate
	case types.Term3Month:
		annualRate.AnnualRate_3Months = msg.Rate
	case types.Term6Month:
		annualRate.AnnualRate_6Months = msg.Rate
	case types.Term12Month:
		annualRate.AnnualRate_12Months = msg.Rate
	case types.Term24Month:
		annualRate.AnnualRate_24Months = msg.Rate
	case types.Term48Month:
		annualRate.AnnualRate_48Months = msg.Rate
	}
	err := k.Keeper.SetFixedDepositVaultAnnualRate(ctx, annualRate)
	if err != nil {
		return nil, types.ErrSetRegionAnnualRate.Wrapf("set fixed deposit annual rate error (%s)", types.ErrFixedDepositVaultNotExists)
	}

	return &types.MsgSetFixedDepositInterestRateResponse{}, nil
}
