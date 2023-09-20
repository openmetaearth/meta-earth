import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgNewRegion } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveRegion } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgSetFixedDepositInterestRate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveKyc } from "./types/cosmos/staking/v1beta1/tx";
import { MsgNewSiidNFT } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUnstake } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDoFixedDeposit } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveSiidNFT } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDoFixedWithdraw } from "./types/cosmos/staking/v1beta1/tx";
import { MsgNewKyc } from "./types/cosmos/staking/v1beta1/tx";
import { MsgStake } from "./types/cosmos/staking/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.staking.v1beta1.MsgNewRegion", MsgNewRegion],
    ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
    ["/cosmos.staking.v1beta1.MsgRemoveRegion", MsgRemoveRegion],
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgSetFixedDepositInterestRate", MsgSetFixedDepositInterestRate],
    ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
    ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgRemoveKyc", MsgRemoveKyc],
    ["/cosmos.staking.v1beta1.MsgNewSiidNFT", MsgNewSiidNFT],
    ["/cosmos.staking.v1beta1.MsgUnstake", MsgUnstake],
    ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", MsgCancelUnbondingDelegation],
    ["/cosmos.staking.v1beta1.MsgDoFixedDeposit", MsgDoFixedDeposit],
    ["/cosmos.staking.v1beta1.MsgRemoveSiidNFT", MsgRemoveSiidNFT],
    ["/cosmos.staking.v1beta1.MsgDoFixedWithdraw", MsgDoFixedWithdraw],
    ["/cosmos.staking.v1beta1.MsgNewKyc", MsgNewKyc],
    ["/cosmos.staking.v1beta1.MsgStake", MsgStake],
    
];

export { msgTypes }