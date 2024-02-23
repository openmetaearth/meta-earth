import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgPayPacketFeeAsync } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFee } from "./types/ibc/applications/fee/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", MsgPayPacketFee],
    
];

export { msgTypes }