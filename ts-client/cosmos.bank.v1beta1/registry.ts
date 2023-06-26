import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendToTreasury } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSendToAdmin } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.bank.v1beta1.MsgSendToTreasury", MsgSendToTreasury],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
    ["/cosmos.bank.v1beta1.MsgSendToAdmin", MsgSendToAdmin],
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    
];

export { msgTypes }