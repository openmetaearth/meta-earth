// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUnpinCodes } from "./types/cosmwasm/wasm/v1/tx";
import { MsgAddCodeUploadParamsAddresses } from "./types/cosmwasm/wasm/v1/tx";
import { MsgSudoContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgClearAdmin } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateInstantiateConfig } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCCloseChannel } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgMigrateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgExecuteContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgStoreAndInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract } from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCSend } from "./types/cosmwasm/wasm/v1/ibc";
import { MsgStoreCode } from "./types/cosmwasm/wasm/v1/tx";
import { MsgInstantiateContract2 } from "./types/cosmwasm/wasm/v1/tx";
import { MsgPinCodes } from "./types/cosmwasm/wasm/v1/tx";
import { MsgRemoveCodeUploadParamsAddresses } from "./types/cosmwasm/wasm/v1/tx";
import { MsgUpdateParams } from "./types/cosmwasm/wasm/v1/tx";

import { ContractExecutionAuthorization as typeContractExecutionAuthorization} from "./types"
import { ContractMigrationAuthorization as typeContractMigrationAuthorization} from "./types"
import { ContractGrant as typeContractGrant} from "./types"
import { MaxCallsLimit as typeMaxCallsLimit} from "./types"
import { MaxFundsLimit as typeMaxFundsLimit} from "./types"
import { CombinedLimit as typeCombinedLimit} from "./types"
import { AllowAllMessagesFilter as typeAllowAllMessagesFilter} from "./types"
import { AcceptedMessageKeysFilter as typeAcceptedMessageKeysFilter} from "./types"
import { AcceptedMessagesFilter as typeAcceptedMessagesFilter} from "./types"
import { Code as typeCode} from "./types"
import { Contract as typeContract} from "./types"
import { Sequence as typeSequence} from "./types"
import { MsgIBCSendResponse as typeMsgIBCSendResponse} from "./types"
import { StoreCodeProposal as typeStoreCodeProposal} from "./types"
import { InstantiateContractProposal as typeInstantiateContractProposal} from "./types"
import { InstantiateContract2Proposal as typeInstantiateContract2Proposal} from "./types"
import { MigrateContractProposal as typeMigrateContractProposal} from "./types"
import { SudoContractProposal as typeSudoContractProposal} from "./types"
import { ExecuteContractProposal as typeExecuteContractProposal} from "./types"
import { UpdateAdminProposal as typeUpdateAdminProposal} from "./types"
import { ClearAdminProposal as typeClearAdminProposal} from "./types"
import { PinCodesProposal as typePinCodesProposal} from "./types"
import { UnpinCodesProposal as typeUnpinCodesProposal} from "./types"
import { AccessConfigUpdate as typeAccessConfigUpdate} from "./types"
import { UpdateInstantiateConfigProposal as typeUpdateInstantiateConfigProposal} from "./types"
import { StoreAndInstantiateContractProposal as typeStoreAndInstantiateContractProposal} from "./types"
import { CodeInfoResponse as typeCodeInfoResponse} from "./types"
import { AccessTypeParam as typeAccessTypeParam} from "./types"
import { AccessConfig as typeAccessConfig} from "./types"
import { Params as typeParams} from "./types"
import { CodeInfo as typeCodeInfo} from "./types"
import { ContractInfo as typeContractInfo} from "./types"
import { ContractCodeHistoryEntry as typeContractCodeHistoryEntry} from "./types"
import { AbsoluteTxPosition as typeAbsoluteTxPosition} from "./types"
import { Model as typeModel} from "./types"

export { MsgUnpinCodes, MsgAddCodeUploadParamsAddresses, MsgSudoContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgIBCCloseChannel, MsgMigrateContract, MsgExecuteContract, MsgStoreAndInstantiateContract, MsgInstantiateContract, MsgIBCSend, MsgStoreCode, MsgInstantiateContract2, MsgPinCodes, MsgRemoveCodeUploadParamsAddresses, MsgUpdateParams };

type sendMsgUnpinCodesParams = {
  value: MsgUnpinCodes,
  fee?: StdFee,
  memo?: string
};

type sendMsgAddCodeUploadParamsAddressesParams = {
  value: MsgAddCodeUploadParamsAddresses,
  fee?: StdFee,
  memo?: string
};

type sendMsgSudoContractParams = {
  value: MsgSudoContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateAdminParams = {
  value: MsgUpdateAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgClearAdminParams = {
  value: MsgClearAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateInstantiateConfigParams = {
  value: MsgUpdateInstantiateConfig,
  fee?: StdFee,
  memo?: string
};

type sendMsgIBCCloseChannelParams = {
  value: MsgIBCCloseChannel,
  fee?: StdFee,
  memo?: string
};

type sendMsgMigrateContractParams = {
  value: MsgMigrateContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgExecuteContractParams = {
  value: MsgExecuteContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgStoreAndInstantiateContractParams = {
  value: MsgStoreAndInstantiateContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgInstantiateContractParams = {
  value: MsgInstantiateContract,
  fee?: StdFee,
  memo?: string
};

type sendMsgIBCSendParams = {
  value: MsgIBCSend,
  fee?: StdFee,
  memo?: string
};

type sendMsgStoreCodeParams = {
  value: MsgStoreCode,
  fee?: StdFee,
  memo?: string
};

type sendMsgInstantiateContract2Params = {
  value: MsgInstantiateContract2,
  fee?: StdFee,
  memo?: string
};

type sendMsgPinCodesParams = {
  value: MsgPinCodes,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveCodeUploadParamsAddressesParams = {
  value: MsgRemoveCodeUploadParamsAddresses,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};


type msgUnpinCodesParams = {
  value: MsgUnpinCodes,
};

type msgAddCodeUploadParamsAddressesParams = {
  value: MsgAddCodeUploadParamsAddresses,
};

type msgSudoContractParams = {
  value: MsgSudoContract,
};

type msgUpdateAdminParams = {
  value: MsgUpdateAdmin,
};

type msgClearAdminParams = {
  value: MsgClearAdmin,
};

type msgUpdateInstantiateConfigParams = {
  value: MsgUpdateInstantiateConfig,
};

type msgIBCCloseChannelParams = {
  value: MsgIBCCloseChannel,
};

type msgMigrateContractParams = {
  value: MsgMigrateContract,
};

type msgExecuteContractParams = {
  value: MsgExecuteContract,
};

type msgStoreAndInstantiateContractParams = {
  value: MsgStoreAndInstantiateContract,
};

type msgInstantiateContractParams = {
  value: MsgInstantiateContract,
};

type msgIBCSendParams = {
  value: MsgIBCSend,
};

type msgStoreCodeParams = {
  value: MsgStoreCode,
};

type msgInstantiateContract2Params = {
  value: MsgInstantiateContract2,
};

type msgPinCodesParams = {
  value: MsgPinCodes,
};

type msgRemoveCodeUploadParamsAddressesParams = {
  value: MsgRemoveCodeUploadParamsAddresses,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgUnpinCodes({ value, fee, memo }: sendMsgUnpinCodesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnpinCodes: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnpinCodes({ value: MsgUnpinCodes.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnpinCodes: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgAddCodeUploadParamsAddresses({ value, fee, memo }: sendMsgAddCodeUploadParamsAddressesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAddCodeUploadParamsAddresses: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgAddCodeUploadParamsAddresses({ value: MsgAddCodeUploadParamsAddresses.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAddCodeUploadParamsAddresses: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSudoContract({ value, fee, memo }: sendMsgSudoContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSudoContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSudoContract({ value: MsgSudoContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSudoContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateAdmin({ value, fee, memo }: sendMsgUpdateAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateAdmin({ value: MsgUpdateAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgClearAdmin({ value, fee, memo }: sendMsgClearAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgClearAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgClearAdmin({ value: MsgClearAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgClearAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateInstantiateConfig({ value, fee, memo }: sendMsgUpdateInstantiateConfigParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateInstantiateConfig: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateInstantiateConfig({ value: MsgUpdateInstantiateConfig.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateInstantiateConfig: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIBCCloseChannel({ value, fee, memo }: sendMsgIBCCloseChannelParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIBCCloseChannel: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIBCCloseChannel({ value: MsgIBCCloseChannel.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIBCCloseChannel: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMigrateContract({ value, fee, memo }: sendMsgMigrateContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMigrateContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMigrateContract({ value: MsgMigrateContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMigrateContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExecuteContract({ value, fee, memo }: sendMsgExecuteContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExecuteContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExecuteContract({ value: MsgExecuteContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExecuteContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStoreAndInstantiateContract({ value, fee, memo }: sendMsgStoreAndInstantiateContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStoreAndInstantiateContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStoreAndInstantiateContract({ value: MsgStoreAndInstantiateContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStoreAndInstantiateContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInstantiateContract({ value, fee, memo }: sendMsgInstantiateContractParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInstantiateContract: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInstantiateContract({ value: MsgInstantiateContract.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInstantiateContract: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIBCSend({ value, fee, memo }: sendMsgIBCSendParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIBCSend: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIBCSend({ value: MsgIBCSend.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIBCSend: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStoreCode({ value, fee, memo }: sendMsgStoreCodeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStoreCode: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStoreCode({ value: MsgStoreCode.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStoreCode: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgInstantiateContract2({ value, fee, memo }: sendMsgInstantiateContract2Params): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgInstantiateContract2: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgInstantiateContract2({ value: MsgInstantiateContract2.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgInstantiateContract2: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPinCodes({ value, fee, memo }: sendMsgPinCodesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPinCodes: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPinCodes({ value: MsgPinCodes.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPinCodes: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveCodeUploadParamsAddresses({ value, fee, memo }: sendMsgRemoveCodeUploadParamsAddressesParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveCodeUploadParamsAddresses: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveCodeUploadParamsAddresses({ value: MsgRemoveCodeUploadParamsAddresses.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveCodeUploadParamsAddresses: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUnpinCodes({ value }: msgUnpinCodesParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes", value: MsgUnpinCodes.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnpinCodes: Could not create message: ' + e.message)
			}
		},
		
		msgAddCodeUploadParamsAddresses({ value }: msgAddCodeUploadParamsAddressesParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", value: MsgAddCodeUploadParamsAddresses.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAddCodeUploadParamsAddresses: Could not create message: ' + e.message)
			}
		},
		
		msgSudoContract({ value }: msgSudoContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract", value: MsgSudoContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSudoContract: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateAdmin({ value }: msgUpdateAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin", value: MsgUpdateAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgClearAdmin({ value }: msgClearAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin", value: MsgClearAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgClearAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateInstantiateConfig({ value }: msgUpdateInstantiateConfigParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", value: MsgUpdateInstantiateConfig.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateInstantiateConfig: Could not create message: ' + e.message)
			}
		},
		
		msgIBCCloseChannel({ value }: msgIBCCloseChannelParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel", value: MsgIBCCloseChannel.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIBCCloseChannel: Could not create message: ' + e.message)
			}
		},
		
		msgMigrateContract({ value }: msgMigrateContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract", value: MsgMigrateContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMigrateContract: Could not create message: ' + e.message)
			}
		},
		
		msgExecuteContract({ value }: msgExecuteContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract", value: MsgExecuteContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExecuteContract: Could not create message: ' + e.message)
			}
		},
		
		msgStoreAndInstantiateContract({ value }: msgStoreAndInstantiateContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", value: MsgStoreAndInstantiateContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStoreAndInstantiateContract: Could not create message: ' + e.message)
			}
		},
		
		msgInstantiateContract({ value }: msgInstantiateContractParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract", value: MsgInstantiateContract.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInstantiateContract: Could not create message: ' + e.message)
			}
		},
		
		msgIBCSend({ value }: msgIBCSendParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend", value: MsgIBCSend.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIBCSend: Could not create message: ' + e.message)
			}
		},
		
		msgStoreCode({ value }: msgStoreCodeParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode", value: MsgStoreCode.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStoreCode: Could not create message: ' + e.message)
			}
		},
		
		msgInstantiateContract2({ value }: msgInstantiateContract2Params): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2", value: MsgInstantiateContract2.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgInstantiateContract2: Could not create message: ' + e.message)
			}
		},
		
		msgPinCodes({ value }: msgPinCodesParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes", value: MsgPinCodes.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPinCodes: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveCodeUploadParamsAddresses({ value }: msgRemoveCodeUploadParamsAddressesParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", value: MsgRemoveCodeUploadParamsAddresses.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						ContractExecutionAuthorization: getStructure(typeContractExecutionAuthorization.fromPartial({})),
						ContractMigrationAuthorization: getStructure(typeContractMigrationAuthorization.fromPartial({})),
						ContractGrant: getStructure(typeContractGrant.fromPartial({})),
						MaxCallsLimit: getStructure(typeMaxCallsLimit.fromPartial({})),
						MaxFundsLimit: getStructure(typeMaxFundsLimit.fromPartial({})),
						CombinedLimit: getStructure(typeCombinedLimit.fromPartial({})),
						AllowAllMessagesFilter: getStructure(typeAllowAllMessagesFilter.fromPartial({})),
						AcceptedMessageKeysFilter: getStructure(typeAcceptedMessageKeysFilter.fromPartial({})),
						AcceptedMessagesFilter: getStructure(typeAcceptedMessagesFilter.fromPartial({})),
						Code: getStructure(typeCode.fromPartial({})),
						Contract: getStructure(typeContract.fromPartial({})),
						Sequence: getStructure(typeSequence.fromPartial({})),
						MsgIBCSendResponse: getStructure(typeMsgIBCSendResponse.fromPartial({})),
						StoreCodeProposal: getStructure(typeStoreCodeProposal.fromPartial({})),
						InstantiateContractProposal: getStructure(typeInstantiateContractProposal.fromPartial({})),
						InstantiateContract2Proposal: getStructure(typeInstantiateContract2Proposal.fromPartial({})),
						MigrateContractProposal: getStructure(typeMigrateContractProposal.fromPartial({})),
						SudoContractProposal: getStructure(typeSudoContractProposal.fromPartial({})),
						ExecuteContractProposal: getStructure(typeExecuteContractProposal.fromPartial({})),
						UpdateAdminProposal: getStructure(typeUpdateAdminProposal.fromPartial({})),
						ClearAdminProposal: getStructure(typeClearAdminProposal.fromPartial({})),
						PinCodesProposal: getStructure(typePinCodesProposal.fromPartial({})),
						UnpinCodesProposal: getStructure(typeUnpinCodesProposal.fromPartial({})),
						AccessConfigUpdate: getStructure(typeAccessConfigUpdate.fromPartial({})),
						UpdateInstantiateConfigProposal: getStructure(typeUpdateInstantiateConfigProposal.fromPartial({})),
						StoreAndInstantiateContractProposal: getStructure(typeStoreAndInstantiateContractProposal.fromPartial({})),
						CodeInfoResponse: getStructure(typeCodeInfoResponse.fromPartial({})),
						AccessTypeParam: getStructure(typeAccessTypeParam.fromPartial({})),
						AccessConfig: getStructure(typeAccessConfig.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						CodeInfo: getStructure(typeCodeInfo.fromPartial({})),
						ContractInfo: getStructure(typeContractInfo.fromPartial({})),
						ContractCodeHistoryEntry: getStructure(typeContractCodeHistoryEntry.fromPartial({})),
						AbsoluteTxPosition: getStructure(typeAbsoluteTxPosition.fromPartial({})),
						Model: getStructure(typeModel.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			CosmwasmWasmV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;