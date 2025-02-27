// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgDeleteGroup } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";

import { EventCreateGroup as typeEventCreateGroup} from "./types"
import { EventDeleteGroup as typeEventDeleteGroup} from "./types"
import { EventUpdateGroup as typeEventUpdateGroup} from "./types"
import { EventCreateGroupPolicy as typeEventCreateGroupPolicy} from "./types"
import { EventUpdateGroupPolicy as typeEventUpdateGroupPolicy} from "./types"
import { EventSubmitProposal as typeEventSubmitProposal} from "./types"
import { EventWithdrawProposal as typeEventWithdrawProposal} from "./types"
import { EventVote as typeEventVote} from "./types"
import { EventExec as typeEventExec} from "./types"
import { EventLeaveGroup as typeEventLeaveGroup} from "./types"
import { EventProposalPruned as typeEventProposalPruned} from "./types"
import { QueryGroupPolicyInfoRequest as typeQueryGroupPolicyInfoRequest} from "./types"
import { QueryGroupPolicyInfoResponse as typeQueryGroupPolicyInfoResponse} from "./types"
import { QueryGroupPoliciesByGroupRequest as typeQueryGroupPoliciesByGroupRequest} from "./types"
import { QueryGroupPoliciesByGroupResponse as typeQueryGroupPoliciesByGroupResponse} from "./types"
import { QueryGroupPoliciesByAdminRequest as typeQueryGroupPoliciesByAdminRequest} from "./types"
import { QueryGroupPoliciesByAdminResponse as typeQueryGroupPoliciesByAdminResponse} from "./types"
import { QueryProposalRequest as typeQueryProposalRequest} from "./types"
import { QueryProposalResponse as typeQueryProposalResponse} from "./types"
import { QueryProposalsByGroupPolicyRequest as typeQueryProposalsByGroupPolicyRequest} from "./types"
import { QueryProposalsByGroupPolicyResponse as typeQueryProposalsByGroupPolicyResponse} from "./types"
import { QueryVoteByProposalVoterRequest as typeQueryVoteByProposalVoterRequest} from "./types"
import { QueryVoteByProposalVoterResponse as typeQueryVoteByProposalVoterResponse} from "./types"
import { QueryVotesByProposalRequest as typeQueryVotesByProposalRequest} from "./types"
import { QueryVotesByProposalResponse as typeQueryVotesByProposalResponse} from "./types"
import { QueryVotesByVoterRequest as typeQueryVotesByVoterRequest} from "./types"
import { QueryVotesByVoterResponse as typeQueryVotesByVoterResponse} from "./types"
import { QueryTallyResultRequest as typeQueryTallyResultRequest} from "./types"
import { QueryTallyResultResponse as typeQueryTallyResultResponse} from "./types"
import { MsgUpdateGroupAdminResponse as typeMsgUpdateGroupAdminResponse} from "./types"
import { MsgUpdateGroupMetadataResponse as typeMsgUpdateGroupMetadataResponse} from "./types"
import { MsgCreateGroupPolicyResponse as typeMsgCreateGroupPolicyResponse} from "./types"
import { MsgUpdateGroupPolicyAdminResponse as typeMsgUpdateGroupPolicyAdminResponse} from "./types"
import { MsgCreateGroupWithPolicyResponse as typeMsgCreateGroupWithPolicyResponse} from "./types"
import { MsgUpdateGroupPolicyDecisionPolicyResponse as typeMsgUpdateGroupPolicyDecisionPolicyResponse} from "./types"
import { MsgUpdateGroupPolicyMetadataResponse as typeMsgUpdateGroupPolicyMetadataResponse} from "./types"
import { MsgSubmitProposalResponse as typeMsgSubmitProposalResponse} from "./types"
import { MsgWithdrawProposalResponse as typeMsgWithdrawProposalResponse} from "./types"
import { MsgVoteResponse as typeMsgVoteResponse} from "./types"
import { MsgExecResponse as typeMsgExecResponse} from "./types"
import { Member as typeMember} from "./types"
import { MemberRequest as typeMemberRequest} from "./types"
import { ThresholdDecisionPolicy as typeThresholdDecisionPolicy} from "./types"
import { PercentageDecisionPolicy as typePercentageDecisionPolicy} from "./types"
import { DecisionPolicyWindows as typeDecisionPolicyWindows} from "./types"
import { GroupInfo as typeGroupInfo} from "./types"
import { GroupMember as typeGroupMember} from "./types"
import { GroupPolicyInfo as typeGroupPolicyInfo} from "./types"
import { Proposal as typeProposal} from "./types"
import { TallyResult as typeTallyResult} from "./types"
import { Vote as typeVote} from "./types"

export { MsgCreateGroup, MsgVote, MsgWithdrawProposal, MsgSubmitProposal, MsgCreateGroupWithPolicy, MsgUpdateGroupMembers, MsgDeleteGroup, MsgLeaveGroup, MsgUpdateGroupAdmin, MsgExec, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgCreateGroupPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupMetadata };

type sendMsgCreateGroupParams = {
  value: MsgCreateGroup,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteParams = {
  value: MsgVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawProposalParams = {
  value: MsgWithdrawProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateGroupWithPolicyParams = {
  value: MsgCreateGroupWithPolicy,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupMembersParams = {
  value: MsgUpdateGroupMembers,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteGroupParams = {
  value: MsgDeleteGroup,
  fee?: StdFee,
  memo?: string
};

type sendMsgLeaveGroupParams = {
  value: MsgLeaveGroup,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupAdminParams = {
  value: MsgUpdateGroupAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgExecParams = {
  value: MsgExec,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
  value: MsgUpdateGroupPolicyDecisionPolicy,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupPolicyMetadataParams = {
  value: MsgUpdateGroupPolicyMetadata,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateGroupPolicyParams = {
  value: MsgCreateGroupPolicy,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupPolicyAdminParams = {
  value: MsgUpdateGroupPolicyAdmin,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateGroupMetadataParams = {
  value: MsgUpdateGroupMetadata,
  fee?: StdFee,
  memo?: string
};


type msgCreateGroupParams = {
  value: MsgCreateGroup,
};

type msgVoteParams = {
  value: MsgVote,
};

type msgWithdrawProposalParams = {
  value: MsgWithdrawProposal,
};

type msgSubmitProposalParams = {
  value: MsgSubmitProposal,
};

type msgCreateGroupWithPolicyParams = {
  value: MsgCreateGroupWithPolicy,
};

type msgUpdateGroupMembersParams = {
  value: MsgUpdateGroupMembers,
};

type msgDeleteGroupParams = {
  value: MsgDeleteGroup,
};

type msgLeaveGroupParams = {
  value: MsgLeaveGroup,
};

type msgUpdateGroupAdminParams = {
  value: MsgUpdateGroupAdmin,
};

type msgExecParams = {
  value: MsgExec,
};

type msgUpdateGroupPolicyDecisionPolicyParams = {
  value: MsgUpdateGroupPolicyDecisionPolicy,
};

type msgUpdateGroupPolicyMetadataParams = {
  value: MsgUpdateGroupPolicyMetadata,
};

type msgCreateGroupPolicyParams = {
  value: MsgCreateGroupPolicy,
};

type msgUpdateGroupPolicyAdminParams = {
  value: MsgUpdateGroupPolicyAdmin,
};

type msgUpdateGroupMetadataParams = {
  value: MsgUpdateGroupMetadata,
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
		
		async sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateGroup: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateGroup({ value: MsgCreateGroup.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateGroup: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgVote({ value: MsgVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawProposal({ value: MsgWithdrawProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateGroupWithPolicy({ value, fee, memo }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateGroupWithPolicy({ value: MsgCreateGroupWithPolicy.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateGroupWithPolicy: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupMembers: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupMembers({ value: MsgUpdateGroupMembers.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupMembers: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteGroup({ value, fee, memo }: sendMsgDeleteGroupParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteGroup: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteGroup({ value: MsgDeleteGroup.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteGroup: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgLeaveGroup: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgLeaveGroup({ value: MsgLeaveGroup.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgLeaveGroup: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupAdmin({ value: MsgUpdateGroupAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExec: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgExec({ value: MsgExec.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExec: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupPolicyDecisionPolicy({ value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupPolicyDecisionPolicy: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupPolicyMetadata({ value: MsgUpdateGroupPolicyMetadata.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupPolicyMetadata: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateGroupPolicy: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateGroupPolicy({ value: MsgCreateGroupPolicy.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateGroupPolicy: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupPolicyAdmin({ value: MsgUpdateGroupPolicyAdmin.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupPolicyAdmin: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateGroupMetadata({ value, fee, memo }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateGroupMetadata: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateGroupMetadata({ value: MsgUpdateGroupMetadata.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateGroupMetadata: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgCreateGroup", value: MsgCreateGroup.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateGroup: Could not create message: ' + e.message)
			}
		},
		
		msgVote({ value }: msgVoteParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgVote", value: MsgVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgVote: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgWithdrawProposal", value: MsgWithdrawProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawProposal: Could not create message: ' + e.message)
			}
		},
		
		msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message)
			}
		},
		
		msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy", value: MsgCreateGroupWithPolicy.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateGroupWithPolicy: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers", value: MsgUpdateGroupMembers.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupMembers: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteGroup({ value }: msgDeleteGroupParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgDeleteGroup", value: MsgDeleteGroup.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteGroup: Could not create message: ' + e.message)
			}
		},
		
		msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgLeaveGroup", value: MsgLeaveGroup.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgLeaveGroup: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin", value: MsgUpdateGroupAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgExec({ value }: msgExecParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgExec", value: MsgExec.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExec: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", value: MsgUpdateGroupPolicyMetadata.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupPolicyMetadata: Could not create message: ' + e.message)
			}
		},
		
		msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy", value: MsgCreateGroupPolicy.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateGroupPolicy: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", value: MsgUpdateGroupPolicyAdmin.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupPolicyAdmin: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata", value: MsgUpdateGroupMetadata.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateGroupMetadata: Could not create message: ' + e.message)
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
						EventCreateGroup: getStructure(typeEventCreateGroup.fromPartial({})),
						EventDeleteGroup: getStructure(typeEventDeleteGroup.fromPartial({})),
						EventUpdateGroup: getStructure(typeEventUpdateGroup.fromPartial({})),
						EventCreateGroupPolicy: getStructure(typeEventCreateGroupPolicy.fromPartial({})),
						EventUpdateGroupPolicy: getStructure(typeEventUpdateGroupPolicy.fromPartial({})),
						EventSubmitProposal: getStructure(typeEventSubmitProposal.fromPartial({})),
						EventWithdrawProposal: getStructure(typeEventWithdrawProposal.fromPartial({})),
						EventVote: getStructure(typeEventVote.fromPartial({})),
						EventExec: getStructure(typeEventExec.fromPartial({})),
						EventLeaveGroup: getStructure(typeEventLeaveGroup.fromPartial({})),
						EventProposalPruned: getStructure(typeEventProposalPruned.fromPartial({})),
						QueryGroupPolicyInfoRequest: getStructure(typeQueryGroupPolicyInfoRequest.fromPartial({})),
						QueryGroupPolicyInfoResponse: getStructure(typeQueryGroupPolicyInfoResponse.fromPartial({})),
						QueryGroupPoliciesByGroupRequest: getStructure(typeQueryGroupPoliciesByGroupRequest.fromPartial({})),
						QueryGroupPoliciesByGroupResponse: getStructure(typeQueryGroupPoliciesByGroupResponse.fromPartial({})),
						QueryGroupPoliciesByAdminRequest: getStructure(typeQueryGroupPoliciesByAdminRequest.fromPartial({})),
						QueryGroupPoliciesByAdminResponse: getStructure(typeQueryGroupPoliciesByAdminResponse.fromPartial({})),
						QueryProposalRequest: getStructure(typeQueryProposalRequest.fromPartial({})),
						QueryProposalResponse: getStructure(typeQueryProposalResponse.fromPartial({})),
						QueryProposalsByGroupPolicyRequest: getStructure(typeQueryProposalsByGroupPolicyRequest.fromPartial({})),
						QueryProposalsByGroupPolicyResponse: getStructure(typeQueryProposalsByGroupPolicyResponse.fromPartial({})),
						QueryVoteByProposalVoterRequest: getStructure(typeQueryVoteByProposalVoterRequest.fromPartial({})),
						QueryVoteByProposalVoterResponse: getStructure(typeQueryVoteByProposalVoterResponse.fromPartial({})),
						QueryVotesByProposalRequest: getStructure(typeQueryVotesByProposalRequest.fromPartial({})),
						QueryVotesByProposalResponse: getStructure(typeQueryVotesByProposalResponse.fromPartial({})),
						QueryVotesByVoterRequest: getStructure(typeQueryVotesByVoterRequest.fromPartial({})),
						QueryVotesByVoterResponse: getStructure(typeQueryVotesByVoterResponse.fromPartial({})),
						QueryTallyResultRequest: getStructure(typeQueryTallyResultRequest.fromPartial({})),
						QueryTallyResultResponse: getStructure(typeQueryTallyResultResponse.fromPartial({})),
						MsgUpdateGroupAdminResponse: getStructure(typeMsgUpdateGroupAdminResponse.fromPartial({})),
						MsgUpdateGroupMetadataResponse: getStructure(typeMsgUpdateGroupMetadataResponse.fromPartial({})),
						MsgCreateGroupPolicyResponse: getStructure(typeMsgCreateGroupPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyAdminResponse: getStructure(typeMsgUpdateGroupPolicyAdminResponse.fromPartial({})),
						MsgCreateGroupWithPolicyResponse: getStructure(typeMsgCreateGroupWithPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyDecisionPolicyResponse: getStructure(typeMsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyMetadataResponse: getStructure(typeMsgUpdateGroupPolicyMetadataResponse.fromPartial({})),
						MsgSubmitProposalResponse: getStructure(typeMsgSubmitProposalResponse.fromPartial({})),
						MsgWithdrawProposalResponse: getStructure(typeMsgWithdrawProposalResponse.fromPartial({})),
						MsgVoteResponse: getStructure(typeMsgVoteResponse.fromPartial({})),
						MsgExecResponse: getStructure(typeMsgExecResponse.fromPartial({})),
						Member: getStructure(typeMember.fromPartial({})),
						MemberRequest: getStructure(typeMemberRequest.fromPartial({})),
						ThresholdDecisionPolicy: getStructure(typeThresholdDecisionPolicy.fromPartial({})),
						PercentageDecisionPolicy: getStructure(typePercentageDecisionPolicy.fromPartial({})),
						DecisionPolicyWindows: getStructure(typeDecisionPolicyWindows.fromPartial({})),
						GroupInfo: getStructure(typeGroupInfo.fromPartial({})),
						GroupMember: getStructure(typeGroupMember.fromPartial({})),
						GroupPolicyInfo: getStructure(typeGroupPolicyInfo.fromPartial({})),
						Proposal: getStructure(typeProposal.fromPartial({})),
						TallyResult: getStructure(typeTallyResult.fromPartial({})),
						Vote: getStructure(typeVote.fromPartial({})),
						
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
			CosmosGroupV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;