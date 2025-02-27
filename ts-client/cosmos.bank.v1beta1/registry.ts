import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendToAirdrop } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSendToTreasury } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSendToAddressByTreasury } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSendToAdmin } from "./types/cosmos/bank/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.bank.v1beta1.MsgSendToAirdrop", MsgSendToAirdrop],
    ["/cosmos.bank.v1beta1.MsgSendToTreasury", MsgSendToTreasury],
    ["/cosmos.bank.v1beta1.MsgSendToAddressByTreasury", MsgSendToAddressByTreasury],
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
    ["/cosmos.bank.v1beta1.MsgSendToAdmin", MsgSendToAdmin],
    
];

export { msgTypes }