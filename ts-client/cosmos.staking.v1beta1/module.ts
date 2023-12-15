// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveKyc } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgNewRegion } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUnstake } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDoFixedDeposit } from "./types/cosmos/staking/v1beta1/tx";
import { MsgNewKyc } from "./types/cosmos/staking/v1beta1/tx";
import { MsgNewSiidNFT } from "./types/cosmos/staking/v1beta1/tx";
import { MsgStake } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDoFixedWithdraw } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveRegion } from "./types/cosmos/staking/v1beta1/tx";
import { MsgSetFixedDepositInterestRate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgTransferKYC } from "./types/cosmos/staking/v1beta1/tx";
import { MsgRemoveSiidNFT } from "./types/cosmos/staking/v1beta1/tx";

import { StakeAuthorization as typeStakeAuthorization} from "./types"
import { StakeAuthorization_Validators as typeStakeAuthorization_Validators} from "./types"
import { FixedDepositAnnualRate as typeFixedDepositAnnualRate} from "./types"
import { FixedDeposit as typeFixedDeposit} from "./types"
import { LastValidatorPower as typeLastValidatorPower} from "./types"
import { Kyc as typeKyc} from "./types"
import { SiidNFT as typeSiidNFT} from "./types"
import { QueryValidatorUnbondingDelegationsRequest as typeQueryValidatorUnbondingDelegationsRequest} from "./types"
import { QueryValidatorUnbondingDelegationsResponse as typeQueryValidatorUnbondingDelegationsResponse} from "./types"
import { QueryDelegatorDelegationsRequest as typeQueryDelegatorDelegationsRequest} from "./types"
import { QueryDelegatorDelegationsResponse as typeQueryDelegatorDelegationsResponse} from "./types"
import { QueryDelegatorUnbondingDelegationsRequest as typeQueryDelegatorUnbondingDelegationsRequest} from "./types"
import { QueryDelegatorUnbondingDelegationsResponse as typeQueryDelegatorUnbondingDelegationsResponse} from "./types"
import { QueryRedelegationsRequest as typeQueryRedelegationsRequest} from "./types"
import { QueryRedelegationsResponse as typeQueryRedelegationsResponse} from "./types"
import { QueryDelegatorValidatorsRequest as typeQueryDelegatorValidatorsRequest} from "./types"
import { QueryDelegatorValidatorsResponse as typeQueryDelegatorValidatorsResponse} from "./types"
import { QueryDelegatorValidatorRequest as typeQueryDelegatorValidatorRequest} from "./types"
import { QueryDelegatorValidatorResponse as typeQueryDelegatorValidatorResponse} from "./types"
import { Region as typeRegion} from "./types"
import { HistoricalInfo as typeHistoricalInfo} from "./types"
import { CommissionRates as typeCommissionRates} from "./types"
import { Commission as typeCommission} from "./types"
import { Description as typeDescription} from "./types"
import { Validator as typeValidator} from "./types"
import { ValAddresses as typeValAddresses} from "./types"
import { DVPair as typeDVPair} from "./types"
import { DVPairs as typeDVPairs} from "./types"
import { DVVTriplet as typeDVVTriplet} from "./types"
import { DVVTriplets as typeDVVTriplets} from "./types"
import { Delegation as typeDelegation} from "./types"
import { UnbondingDelegation as typeUnbondingDelegation} from "./types"
import { UnbondingDelegationEntry as typeUnbondingDelegationEntry} from "./types"
import { RedelegationEntry as typeRedelegationEntry} from "./types"
import { Redelegation as typeRedelegation} from "./types"
import { Params as typeParams} from "./types"
import { DelegationResponse as typeDelegationResponse} from "./types"
import { RedelegationEntryResponse as typeRedelegationEntryResponse} from "./types"
import { RedelegationResponse as typeRedelegationResponse} from "./types"
import { Pool as typePool} from "./types"
import { Stake as typeStake} from "./types"
import { UnbondingStake as typeUnbondingStake} from "./types"
import { UnbondingStakeEntry as typeUnbondingStakeEntry} from "./types"
import { SVPair as typeSVPair} from "./types"
import { SVPairs as typeSVPairs} from "./types"
import { ValidatorUpdates as typeValidatorUpdates} from "./types"
import { MsgBeginRedelegateResponse as typeMsgBeginRedelegateResponse} from "./types"

export { MsgEditValidator, MsgBeginRedelegate, MsgRemoveKyc, MsgCancelUnbondingDelegation, MsgNewRegion, MsgUndelegate, MsgUnstake, MsgCreateValidator, MsgDoFixedDeposit, MsgNewKyc, MsgNewSiidNFT, MsgStake, MsgDoFixedWithdraw, MsgRemoveRegion, MsgSetFixedDepositInterestRate, MsgDelegate, MsgTransferKYC, MsgRemoveSiidNFT };

type sendMsgEditValidatorParams = {
  value: MsgEditValidator,
  fee?: StdFee,
  memo?: string
};

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveKycParams = {
  value: MsgRemoveKyc,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation,
  fee?: StdFee,
  memo?: string
};

type sendMsgNewRegionParams = {
  value: MsgNewRegion,
  fee?: StdFee,
  memo?: string
};

type sendMsgUndelegateParams = {
  value: MsgUndelegate,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnstakeParams = {
  value: MsgUnstake,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator,
  fee?: StdFee,
  memo?: string
};

type sendMsgDoFixedDepositParams = {
  value: MsgDoFixedDeposit,
  fee?: StdFee,
  memo?: string
};

type sendMsgNewKycParams = {
  value: MsgNewKyc,
  fee?: StdFee,
  memo?: string
};

type sendMsgNewSiidNFTParams = {
  value: MsgNewSiidNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgStakeParams = {
  value: MsgStake,
  fee?: StdFee,
  memo?: string
};

type sendMsgDoFixedWithdrawParams = {
  value: MsgDoFixedWithdraw,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveRegionParams = {
  value: MsgRemoveRegion,
  fee?: StdFee,
  memo?: string
};

type sendMsgSetFixedDepositInterestRateParams = {
  value: MsgSetFixedDepositInterestRate,
  fee?: StdFee,
  memo?: string
};

type sendMsgDelegateParams = {
  value: MsgDelegate,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferKYCParams = {
  value: MsgTransferKYC,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveSiidNFTParams = {
  value: MsgRemoveSiidNFT,
  fee?: StdFee,
  memo?: string
};


type msgEditValidatorParams = {
  value: MsgEditValidator,
};

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate,
};

type msgRemoveKycParams = {
  value: MsgRemoveKyc,
};

type msgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation,
};

type msgNewRegionParams = {
  value: MsgNewRegion,
};

type msgUndelegateParams = {
  value: MsgUndelegate,
};

type msgUnstakeParams = {
  value: MsgUnstake,
};

type msgCreateValidatorParams = {
  value: MsgCreateValidator,
};

type msgDoFixedDepositParams = {
  value: MsgDoFixedDeposit,
};

type msgNewKycParams = {
  value: MsgNewKyc,
};

type msgNewSiidNFTParams = {
  value: MsgNewSiidNFT,
};

type msgStakeParams = {
  value: MsgStake,
};

type msgDoFixedWithdrawParams = {
  value: MsgDoFixedWithdraw,
};

type msgRemoveRegionParams = {
  value: MsgRemoveRegion,
};

type msgSetFixedDepositInterestRateParams = {
  value: MsgSetFixedDepositInterestRate,
};

type msgDelegateParams = {
  value: MsgDelegate,
};

type msgTransferKYCParams = {
  value: MsgTransferKYC,
};

type msgRemoveSiidNFTParams = {
  value: MsgRemoveSiidNFT,
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
		
		async sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditValidator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditValidator({ value: MsgEditValidator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditValidator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBeginRedelegate({ value: MsgBeginRedelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBeginRedelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveKyc({ value, fee, memo }: sendMsgRemoveKycParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveKyc: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveKyc({ value: MsgRemoveKyc.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveKyc: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelUnbondingDelegation({ value: MsgCancelUnbondingDelegation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgNewRegion({ value, fee, memo }: sendMsgNewRegionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgNewRegion: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgNewRegion({ value: MsgNewRegion.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgNewRegion: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUndelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUndelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUnstake({ value, fee, memo }: sendMsgUnstakeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnstake: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnstake({ value: MsgUnstake.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnstake: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateValidator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateValidator({ value: MsgCreateValidator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateValidator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDoFixedDeposit({ value, fee, memo }: sendMsgDoFixedDepositParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDoFixedDeposit: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDoFixedDeposit({ value: MsgDoFixedDeposit.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDoFixedDeposit: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgNewKyc({ value, fee, memo }: sendMsgNewKycParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgNewKyc: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgNewKyc({ value: MsgNewKyc.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgNewKyc: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgNewSiidNFT({ value, fee, memo }: sendMsgNewSiidNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgNewSiidNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgNewSiidNFT({ value: MsgNewSiidNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgNewSiidNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStake({ value, fee, memo }: sendMsgStakeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStake: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStake({ value: MsgStake.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStake: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDoFixedWithdraw({ value, fee, memo }: sendMsgDoFixedWithdrawParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDoFixedWithdraw: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDoFixedWithdraw({ value: MsgDoFixedWithdraw.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDoFixedWithdraw: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveRegion({ value, fee, memo }: sendMsgRemoveRegionParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveRegion: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveRegion({ value: MsgRemoveRegion.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveRegion: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSetFixedDepositInterestRate({ value, fee, memo }: sendMsgSetFixedDepositInterestRateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSetFixedDepositInterestRate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSetFixedDepositInterestRate({ value: MsgSetFixedDepositInterestRate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSetFixedDepositInterestRate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferKYC({ value, fee, memo }: sendMsgTransferKYCParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferKYC: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferKYC({ value: MsgTransferKYC.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferKYC: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveSiidNFT({ value, fee, memo }: sendMsgRemoveSiidNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveSiidNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveSiidNFT({ value: MsgRemoveSiidNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveSiidNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgEditValidator({ value }: msgEditValidatorParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator", value: MsgEditValidator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditValidator: Could not create message: ' + e.message)
			}
		},
		
		msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate", value: MsgBeginRedelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBeginRedelegate: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveKyc({ value }: msgRemoveKycParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgRemoveKyc", value: MsgRemoveKyc.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveKyc: Could not create message: ' + e.message)
			}
		},
		
		msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", value: MsgCancelUnbondingDelegation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelUnbondingDelegation: Could not create message: ' + e.message)
			}
		},
		
		msgNewRegion({ value }: msgNewRegionParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgNewRegion", value: MsgNewRegion.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgNewRegion: Could not create message: ' + e.message)
			}
		},
		
		msgUndelegate({ value }: msgUndelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate", value: MsgUndelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUndelegate: Could not create message: ' + e.message)
			}
		},
		
		msgUnstake({ value }: msgUnstakeParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgUnstake", value: MsgUnstake.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnstake: Could not create message: ' + e.message)
			}
		},
		
		msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator", value: MsgCreateValidator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateValidator: Could not create message: ' + e.message)
			}
		},
		
		msgDoFixedDeposit({ value }: msgDoFixedDepositParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgDoFixedDeposit", value: MsgDoFixedDeposit.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDoFixedDeposit: Could not create message: ' + e.message)
			}
		},
		
		msgNewKyc({ value }: msgNewKycParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgNewKyc", value: MsgNewKyc.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgNewKyc: Could not create message: ' + e.message)
			}
		},
		
		msgNewSiidNFT({ value }: msgNewSiidNFTParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgNewSiidNFT", value: MsgNewSiidNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgNewSiidNFT: Could not create message: ' + e.message)
			}
		},
		
		msgStake({ value }: msgStakeParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgStake", value: MsgStake.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStake: Could not create message: ' + e.message)
			}
		},
		
		msgDoFixedWithdraw({ value }: msgDoFixedWithdrawParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgDoFixedWithdraw", value: MsgDoFixedWithdraw.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDoFixedWithdraw: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveRegion({ value }: msgRemoveRegionParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgRemoveRegion", value: MsgRemoveRegion.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveRegion: Could not create message: ' + e.message)
			}
		},
		
		msgSetFixedDepositInterestRate({ value }: msgSetFixedDepositInterestRateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgSetFixedDepositInterestRate", value: MsgSetFixedDepositInterestRate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSetFixedDepositInterestRate: Could not create message: ' + e.message)
			}
		},
		
		msgDelegate({ value }: msgDelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgDelegate", value: MsgDelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDelegate: Could not create message: ' + e.message)
			}
		},
		
		msgTransferKYC({ value }: msgTransferKYCParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgTransferKYC", value: MsgTransferKYC.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferKYC: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveSiidNFT({ value }: msgRemoveSiidNFTParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgRemoveSiidNFT", value: MsgRemoveSiidNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveSiidNFT: Could not create message: ' + e.message)
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
						StakeAuthorization: getStructure(typeStakeAuthorization.fromPartial({})),
						StakeAuthorization_Validators: getStructure(typeStakeAuthorization_Validators.fromPartial({})),
						FixedDepositAnnualRate: getStructure(typeFixedDepositAnnualRate.fromPartial({})),
						FixedDeposit: getStructure(typeFixedDeposit.fromPartial({})),
						LastValidatorPower: getStructure(typeLastValidatorPower.fromPartial({})),
						Kyc: getStructure(typeKyc.fromPartial({})),
						SiidNFT: getStructure(typeSiidNFT.fromPartial({})),
						QueryValidatorUnbondingDelegationsRequest: getStructure(typeQueryValidatorUnbondingDelegationsRequest.fromPartial({})),
						QueryValidatorUnbondingDelegationsResponse: getStructure(typeQueryValidatorUnbondingDelegationsResponse.fromPartial({})),
						QueryDelegatorDelegationsRequest: getStructure(typeQueryDelegatorDelegationsRequest.fromPartial({})),
						QueryDelegatorDelegationsResponse: getStructure(typeQueryDelegatorDelegationsResponse.fromPartial({})),
						QueryDelegatorUnbondingDelegationsRequest: getStructure(typeQueryDelegatorUnbondingDelegationsRequest.fromPartial({})),
						QueryDelegatorUnbondingDelegationsResponse: getStructure(typeQueryDelegatorUnbondingDelegationsResponse.fromPartial({})),
						QueryRedelegationsRequest: getStructure(typeQueryRedelegationsRequest.fromPartial({})),
						QueryRedelegationsResponse: getStructure(typeQueryRedelegationsResponse.fromPartial({})),
						QueryDelegatorValidatorsRequest: getStructure(typeQueryDelegatorValidatorsRequest.fromPartial({})),
						QueryDelegatorValidatorsResponse: getStructure(typeQueryDelegatorValidatorsResponse.fromPartial({})),
						QueryDelegatorValidatorRequest: getStructure(typeQueryDelegatorValidatorRequest.fromPartial({})),
						QueryDelegatorValidatorResponse: getStructure(typeQueryDelegatorValidatorResponse.fromPartial({})),
						Region: getStructure(typeRegion.fromPartial({})),
						HistoricalInfo: getStructure(typeHistoricalInfo.fromPartial({})),
						CommissionRates: getStructure(typeCommissionRates.fromPartial({})),
						Commission: getStructure(typeCommission.fromPartial({})),
						Description: getStructure(typeDescription.fromPartial({})),
						Validator: getStructure(typeValidator.fromPartial({})),
						ValAddresses: getStructure(typeValAddresses.fromPartial({})),
						DVPair: getStructure(typeDVPair.fromPartial({})),
						DVPairs: getStructure(typeDVPairs.fromPartial({})),
						DVVTriplet: getStructure(typeDVVTriplet.fromPartial({})),
						DVVTriplets: getStructure(typeDVVTriplets.fromPartial({})),
						Delegation: getStructure(typeDelegation.fromPartial({})),
						UnbondingDelegation: getStructure(typeUnbondingDelegation.fromPartial({})),
						UnbondingDelegationEntry: getStructure(typeUnbondingDelegationEntry.fromPartial({})),
						RedelegationEntry: getStructure(typeRedelegationEntry.fromPartial({})),
						Redelegation: getStructure(typeRedelegation.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						DelegationResponse: getStructure(typeDelegationResponse.fromPartial({})),
						RedelegationEntryResponse: getStructure(typeRedelegationEntryResponse.fromPartial({})),
						RedelegationResponse: getStructure(typeRedelegationResponse.fromPartial({})),
						Pool: getStructure(typePool.fromPartial({})),
						Stake: getStructure(typeStake.fromPartial({})),
						UnbondingStake: getStructure(typeUnbondingStake.fromPartial({})),
						UnbondingStakeEntry: getStructure(typeUnbondingStakeEntry.fromPartial({})),
						SVPair: getStructure(typeSVPair.fromPartial({})),
						SVPairs: getStructure(typeSVPairs.fromPartial({})),
						ValidatorUpdates: getStructure(typeValidatorUpdates.fromPartial({})),
						MsgBeginRedelegateResponse: getStructure(typeMsgBeginRedelegateResponse.fromPartial({})),
						
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
			CosmosStakingV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;