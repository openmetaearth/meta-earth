import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgNewClass } from "./types/cosmos/nft/v1beta1/tx";
import { MsgMintNFT } from "./types/cosmos/nft/v1beta1/tx";
import { MsgNftSend } from "./types/cosmos/nft/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.nft.v1beta1.MsgNewClass", MsgNewClass],
    ["/cosmos.nft.v1beta1.MsgMintNFT", MsgMintNFT],
    ["/cosmos.nft.v1beta1.MsgNftSend", MsgNftSend],
    
];

export { msgTypes }