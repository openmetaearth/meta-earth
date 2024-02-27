// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUnmeidWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgCommunityPoolSpend } from "./types/cosmos/distribution/v1beta1/tx";

import { Params as typeParams} from "./types"
import { ValidatorHistoricalRewards as typeValidatorHistoricalRewards} from "./types"
import { ValidatorCurrentRewards as typeValidatorCurrentRewards} from "./types"
import { ValidatorAccumulatedCommission as typeValidatorAccumulatedCommission} from "./types"
import { ValidatorOutstandingRewards as typeValidatorOutstandingRewards} from "./types"
import { ValidatorSlashEvent as typeValidatorSlashEvent} from "./types"
import { ValidatorSlashEvents as typeValidatorSlashEvents} from "./types"
import { FeePool as typeFeePool} from "./types"
import { CommunityPoolSpendProposal as typeCommunityPoolSpendProposal} from "./types"
import { DelegatorStartingInfo as typeDelegatorStartingInfo} from "./types"
import { DelegationDelegatorReward as typeDelegationDelegatorReward} from "./types"
import { CommunityPoolSpendProposalWithDeposit as typeCommunityPoolSpendProposalWithDeposit} from "./types"
import { DelegatorWithdrawInfo as typeDelegatorWithdrawInfo} from "./types"
import { ValidatorOutstandingRewardsRecord as typeValidatorOutstandingRewardsRecord} from "./types"
import { ValidatorAccumulatedCommissionRecord as typeValidatorAccumulatedCommissionRecord} from "./types"
import { ValidatorHistoricalRewardsRecord as typeValidatorHistoricalRewardsRecord} from "./types"
import { ValidatorCurrentRewardsRecord as typeValidatorCurrentRewardsRecord} from "./types"
import { DelegatorStartingInfoRecord as typeDelegatorStartingInfoRecord} from "./types"
import { ValidatorSlashEventRecord as typeValidatorSlashEventRecord} from "./types"
import { QueryValidatorOutstandingRewardsRequest as typeQueryValidatorOutstandingRewardsRequest} from "./types"
import { QueryValidatorOutstandingRewardsResponse as typeQueryValidatorOutstandingRewardsResponse} from "./types"
import { QueryValidatorCommissionRequest as typeQueryValidatorCommissionRequest} from "./types"
import { QueryValidatorCommissionResponse as typeQueryValidatorCommissionResponse} from "./types"
import { QueryValidatorSlashesRequest as typeQueryValidatorSlashesRequest} from "./types"
import { QueryValidatorSlashesResponse as typeQueryValidatorSlashesResponse} from "./types"
import { QueryDelegationTotalRewardsRequest as typeQueryDelegationTotalRewardsRequest} from "./types"
import { QueryDelegationTotalRewardsResponse as typeQueryDelegationTotalRewardsResponse} from "./types"
import { QueryDelegatorValidatorsRequest as typeQueryDelegatorValidatorsRequest} from "./types"
import { QueryDelegatorValidatorsResponse as typeQueryDelegatorValidatorsResponse} from "./types"
import { QueryDelegatorWithdrawAddressRequest as typeQueryDelegatorWithdrawAddressRequest} from "./types"
import { QueryDelegatorWithdrawAddressResponse as typeQueryDelegatorWithdrawAddressResponse} from "./types"
import { QueryCommunityPoolRequest as typeQueryCommunityPoolRequest} from "./types"
import { QueryCommunityPoolResponse as typeQueryCommunityPoolResponse} from "./types"
import { MsgSetWithdrawAddressResponse as typeMsgSetWithdrawAddressResponse} from "./types"
import { MsgWithdrawValidatorCommissionResponse as typeMsgWithdrawValidatorCommissionResponse} from "./types"
import { MsgFundCommunityPoolResponse as typeMsgFundCommunityPoolResponse} from "./types"

export { MsgUnmeidWithdrawDelegatorReward, MsgWithdrawDelegatorReward, MsgUpdateParams, MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawValidatorCommission, MsgCommunityPoolSpend };

type sendMsgUnmeidWithdrawDelegatorRewardParams = {
  value: MsgUnmeidWithdrawDelegatorReward,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgFundCommunityPoolParams = {
  value: MsgFundCommunityPool,
  fee?: StdFee,
  memo?: string
};

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission,
  fee?: StdFee,
  memo?: string
};

type sendMsgCommunityPoolSpendParams = {
  value: MsgCommunityPoolSpend,
  fee?: StdFee,
  memo?: string
};


type msgUnmeidWithdrawDelegatorRewardParams = {
  value: MsgUnmeidWithdrawDelegatorReward,
};

type msgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgFundCommunityPoolParams = {
  value: MsgFundCommunityPool,
};

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress,
};

type msgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission,
};

type msgCommunityPoolSpendParams = {
  value: MsgCommunityPoolSpend,
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
		
		async sendMsgUnmeidWithdrawDelegatorReward({ value, fee, memo }: sendMsgUnmeidWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnmeidWithdrawDelegatorReward: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnmeidWithdrawDelegatorReward({ value: MsgUnmeidWithdrawDelegatorReward.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnmeidWithdrawDelegatorReward: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawDelegatorReward({ value: MsgWithdrawDelegatorReward.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Could not broadcast Tx: '+ e.message)
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
		
		async sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgFundCommunityPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgFundCommunityPool({ value: MsgFundCommunityPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgFundCommunityPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSetWithdrawAddress: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSetWithdrawAddress({ value: MsgSetWithdrawAddress.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSetWithdrawAddress: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawValidatorCommission({ value: MsgWithdrawValidatorCommission.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCommunityPoolSpend: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCommunityPoolSpend({ value: MsgCommunityPoolSpend.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCommunityPoolSpend: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUnmeidWithdrawDelegatorReward({ value }: msgUnmeidWithdrawDelegatorRewardParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgUnmeidWithdrawDelegatorReward", value: MsgUnmeidWithdrawDelegatorReward.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnmeidWithdrawDelegatorReward: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", value: MsgWithdrawDelegatorReward.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawDelegatorReward: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool", value: MsgFundCommunityPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgFundCommunityPool: Could not create message: ' + e.message)
			}
		},
		
		msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", value: MsgSetWithdrawAddress.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSetWithdrawAddress: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", value: MsgWithdrawValidatorCommission.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawValidatorCommission: Could not create message: ' + e.message)
			}
		},
		
		msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", value: MsgCommunityPoolSpend.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCommunityPoolSpend: Could not create message: ' + e.message)
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
						Params: getStructure(typeParams.fromPartial({})),
						ValidatorHistoricalRewards: getStructure(typeValidatorHistoricalRewards.fromPartial({})),
						ValidatorCurrentRewards: getStructure(typeValidatorCurrentRewards.fromPartial({})),
						ValidatorAccumulatedCommission: getStructure(typeValidatorAccumulatedCommission.fromPartial({})),
						ValidatorOutstandingRewards: getStructure(typeValidatorOutstandingRewards.fromPartial({})),
						ValidatorSlashEvent: getStructure(typeValidatorSlashEvent.fromPartial({})),
						ValidatorSlashEvents: getStructure(typeValidatorSlashEvents.fromPartial({})),
						FeePool: getStructure(typeFeePool.fromPartial({})),
						CommunityPoolSpendProposal: getStructure(typeCommunityPoolSpendProposal.fromPartial({})),
						DelegatorStartingInfo: getStructure(typeDelegatorStartingInfo.fromPartial({})),
						DelegationDelegatorReward: getStructure(typeDelegationDelegatorReward.fromPartial({})),
						CommunityPoolSpendProposalWithDeposit: getStructure(typeCommunityPoolSpendProposalWithDeposit.fromPartial({})),
						DelegatorWithdrawInfo: getStructure(typeDelegatorWithdrawInfo.fromPartial({})),
						ValidatorOutstandingRewardsRecord: getStructure(typeValidatorOutstandingRewardsRecord.fromPartial({})),
						ValidatorAccumulatedCommissionRecord: getStructure(typeValidatorAccumulatedCommissionRecord.fromPartial({})),
						ValidatorHistoricalRewardsRecord: getStructure(typeValidatorHistoricalRewardsRecord.fromPartial({})),
						ValidatorCurrentRewardsRecord: getStructure(typeValidatorCurrentRewardsRecord.fromPartial({})),
						DelegatorStartingInfoRecord: getStructure(typeDelegatorStartingInfoRecord.fromPartial({})),
						ValidatorSlashEventRecord: getStructure(typeValidatorSlashEventRecord.fromPartial({})),
						QueryValidatorOutstandingRewardsRequest: getStructure(typeQueryValidatorOutstandingRewardsRequest.fromPartial({})),
						QueryValidatorOutstandingRewardsResponse: getStructure(typeQueryValidatorOutstandingRewardsResponse.fromPartial({})),
						QueryValidatorCommissionRequest: getStructure(typeQueryValidatorCommissionRequest.fromPartial({})),
						QueryValidatorCommissionResponse: getStructure(typeQueryValidatorCommissionResponse.fromPartial({})),
						QueryValidatorSlashesRequest: getStructure(typeQueryValidatorSlashesRequest.fromPartial({})),
						QueryValidatorSlashesResponse: getStructure(typeQueryValidatorSlashesResponse.fromPartial({})),
						QueryDelegationTotalRewardsRequest: getStructure(typeQueryDelegationTotalRewardsRequest.fromPartial({})),
						QueryDelegationTotalRewardsResponse: getStructure(typeQueryDelegationTotalRewardsResponse.fromPartial({})),
						QueryDelegatorValidatorsRequest: getStructure(typeQueryDelegatorValidatorsRequest.fromPartial({})),
						QueryDelegatorValidatorsResponse: getStructure(typeQueryDelegatorValidatorsResponse.fromPartial({})),
						QueryDelegatorWithdrawAddressRequest: getStructure(typeQueryDelegatorWithdrawAddressRequest.fromPartial({})),
						QueryDelegatorWithdrawAddressResponse: getStructure(typeQueryDelegatorWithdrawAddressResponse.fromPartial({})),
						QueryCommunityPoolRequest: getStructure(typeQueryCommunityPoolRequest.fromPartial({})),
						QueryCommunityPoolResponse: getStructure(typeQueryCommunityPoolResponse.fromPartial({})),
						MsgSetWithdrawAddressResponse: getStructure(typeMsgSetWithdrawAddressResponse.fromPartial({})),
						MsgWithdrawValidatorCommissionResponse: getStructure(typeMsgWithdrawValidatorCommissionResponse.fromPartial({})),
						MsgFundCommunityPoolResponse: getStructure(typeMsgFundCommunityPoolResponse.fromPartial({})),
						
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
			CosmosDistributionV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;