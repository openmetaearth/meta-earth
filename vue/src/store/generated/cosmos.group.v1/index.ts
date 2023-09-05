import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { EventCreateGroup } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventDeleteGroup } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventUpdateGroup } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventCreateGroupPolicy } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventUpdateGroupPolicy } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventSubmitProposal } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventWithdrawProposal } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventVote } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventExec } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventLeaveGroup } from "me-chain-client-ts/cosmos.group.v1/types"
import { EventProposalPruned } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPolicyInfoRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPolicyInfoResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPoliciesByGroupRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPoliciesByGroupResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPoliciesByAdminRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryGroupPoliciesByAdminResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryProposalRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryProposalResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryProposalsByGroupPolicyRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryProposalsByGroupPolicyResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVoteByProposalVoterRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVoteByProposalVoterResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVotesByProposalRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVotesByProposalResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVotesByVoterRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryVotesByVoterResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryTallyResultRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { QueryTallyResultResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgUpdateGroupAdminResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgUpdateGroupMetadataResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgCreateGroupPolicyResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgUpdateGroupPolicyAdminResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgCreateGroupWithPolicyResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgUpdateGroupPolicyMetadataResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgSubmitProposalResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgWithdrawProposalResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgVoteResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { MsgExecResponse } from "me-chain-client-ts/cosmos.group.v1/types"
import { Member } from "me-chain-client-ts/cosmos.group.v1/types"
import { MemberRequest } from "me-chain-client-ts/cosmos.group.v1/types"
import { ThresholdDecisionPolicy } from "me-chain-client-ts/cosmos.group.v1/types"
import { PercentageDecisionPolicy } from "me-chain-client-ts/cosmos.group.v1/types"
import { DecisionPolicyWindows } from "me-chain-client-ts/cosmos.group.v1/types"
import { GroupInfo } from "me-chain-client-ts/cosmos.group.v1/types"
import { GroupMember } from "me-chain-client-ts/cosmos.group.v1/types"
import { GroupPolicyInfo } from "me-chain-client-ts/cosmos.group.v1/types"
import { Proposal } from "me-chain-client-ts/cosmos.group.v1/types"
import { TallyResult } from "me-chain-client-ts/cosmos.group.v1/types"
import { Vote } from "me-chain-client-ts/cosmos.group.v1/types"


export { EventCreateGroup, EventDeleteGroup, EventUpdateGroup, EventCreateGroupPolicy, EventUpdateGroupPolicy, EventSubmitProposal, EventWithdrawProposal, EventVote, EventExec, EventLeaveGroup, EventProposalPruned, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryTallyResultRequest, QueryTallyResultResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadataResponse, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdminResponse, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadataResponse, MsgSubmitProposalResponse, MsgWithdrawProposalResponse, MsgVoteResponse, MsgExecResponse, Member, MemberRequest, ThresholdDecisionPolicy, PercentageDecisionPolicy, DecisionPolicyWindows, GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				GroupInfo: {},
				GroupMembers: {},
				GroupsByAdmin: {},
				GroupsByMember: {},
				Groups: {},
				CreateGroup: {},
				DeleteGroup: {},
				UpdateGroupMembers: {},
				LeaveGroup: {},
				
				_Structure: {
						EventCreateGroup: getStructure(EventCreateGroup.fromPartial({})),
						EventDeleteGroup: getStructure(EventDeleteGroup.fromPartial({})),
						EventUpdateGroup: getStructure(EventUpdateGroup.fromPartial({})),
						EventCreateGroupPolicy: getStructure(EventCreateGroupPolicy.fromPartial({})),
						EventUpdateGroupPolicy: getStructure(EventUpdateGroupPolicy.fromPartial({})),
						EventSubmitProposal: getStructure(EventSubmitProposal.fromPartial({})),
						EventWithdrawProposal: getStructure(EventWithdrawProposal.fromPartial({})),
						EventVote: getStructure(EventVote.fromPartial({})),
						EventExec: getStructure(EventExec.fromPartial({})),
						EventLeaveGroup: getStructure(EventLeaveGroup.fromPartial({})),
						EventProposalPruned: getStructure(EventProposalPruned.fromPartial({})),
						QueryGroupPolicyInfoRequest: getStructure(QueryGroupPolicyInfoRequest.fromPartial({})),
						QueryGroupPolicyInfoResponse: getStructure(QueryGroupPolicyInfoResponse.fromPartial({})),
						QueryGroupPoliciesByGroupRequest: getStructure(QueryGroupPoliciesByGroupRequest.fromPartial({})),
						QueryGroupPoliciesByGroupResponse: getStructure(QueryGroupPoliciesByGroupResponse.fromPartial({})),
						QueryGroupPoliciesByAdminRequest: getStructure(QueryGroupPoliciesByAdminRequest.fromPartial({})),
						QueryGroupPoliciesByAdminResponse: getStructure(QueryGroupPoliciesByAdminResponse.fromPartial({})),
						QueryProposalRequest: getStructure(QueryProposalRequest.fromPartial({})),
						QueryProposalResponse: getStructure(QueryProposalResponse.fromPartial({})),
						QueryProposalsByGroupPolicyRequest: getStructure(QueryProposalsByGroupPolicyRequest.fromPartial({})),
						QueryProposalsByGroupPolicyResponse: getStructure(QueryProposalsByGroupPolicyResponse.fromPartial({})),
						QueryVoteByProposalVoterRequest: getStructure(QueryVoteByProposalVoterRequest.fromPartial({})),
						QueryVoteByProposalVoterResponse: getStructure(QueryVoteByProposalVoterResponse.fromPartial({})),
						QueryVotesByProposalRequest: getStructure(QueryVotesByProposalRequest.fromPartial({})),
						QueryVotesByProposalResponse: getStructure(QueryVotesByProposalResponse.fromPartial({})),
						QueryVotesByVoterRequest: getStructure(QueryVotesByVoterRequest.fromPartial({})),
						QueryVotesByVoterResponse: getStructure(QueryVotesByVoterResponse.fromPartial({})),
						QueryTallyResultRequest: getStructure(QueryTallyResultRequest.fromPartial({})),
						QueryTallyResultResponse: getStructure(QueryTallyResultResponse.fromPartial({})),
						MsgUpdateGroupAdminResponse: getStructure(MsgUpdateGroupAdminResponse.fromPartial({})),
						MsgUpdateGroupMetadataResponse: getStructure(MsgUpdateGroupMetadataResponse.fromPartial({})),
						MsgCreateGroupPolicyResponse: getStructure(MsgCreateGroupPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyAdminResponse: getStructure(MsgUpdateGroupPolicyAdminResponse.fromPartial({})),
						MsgCreateGroupWithPolicyResponse: getStructure(MsgCreateGroupWithPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyDecisionPolicyResponse: getStructure(MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial({})),
						MsgUpdateGroupPolicyMetadataResponse: getStructure(MsgUpdateGroupPolicyMetadataResponse.fromPartial({})),
						MsgSubmitProposalResponse: getStructure(MsgSubmitProposalResponse.fromPartial({})),
						MsgWithdrawProposalResponse: getStructure(MsgWithdrawProposalResponse.fromPartial({})),
						MsgVoteResponse: getStructure(MsgVoteResponse.fromPartial({})),
						MsgExecResponse: getStructure(MsgExecResponse.fromPartial({})),
						Member: getStructure(Member.fromPartial({})),
						MemberRequest: getStructure(MemberRequest.fromPartial({})),
						ThresholdDecisionPolicy: getStructure(ThresholdDecisionPolicy.fromPartial({})),
						PercentageDecisionPolicy: getStructure(PercentageDecisionPolicy.fromPartial({})),
						DecisionPolicyWindows: getStructure(DecisionPolicyWindows.fromPartial({})),
						GroupInfo: getStructure(GroupInfo.fromPartial({})),
						GroupMember: getStructure(GroupMember.fromPartial({})),
						GroupPolicyInfo: getStructure(GroupPolicyInfo.fromPartial({})),
						Proposal: getStructure(Proposal.fromPartial({})),
						TallyResult: getStructure(TallyResult.fromPartial({})),
						Vote: getStructure(Vote.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getGroupInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupInfo[JSON.stringify(params)] ?? {}
		},
				getGroupMembers: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupMembers[JSON.stringify(params)] ?? {}
		},
				getGroupsByAdmin: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByAdmin[JSON.stringify(params)] ?? {}
		},
				getGroupsByMember: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByMember[JSON.stringify(params)] ?? {}
		},
				getGroups: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Groups[JSON.stringify(params)] ?? {}
		},
				getCreateGroup: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CreateGroup[JSON.stringify(params)] ?? {}
		},
				getDeleteGroup: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DeleteGroup[JSON.stringify(params)] ?? {}
		},
				getUpdateGroupMembers: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UpdateGroupMembers[JSON.stringify(params)] ?? {}
		},
				getLeaveGroup: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.LeaveGroup[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmos.group.v1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryGroupInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupInfo( key.group_id)).data
				
					
				commit('QUERY', { query: 'GroupInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupMembers({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupMembers( key.group_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupMembers( key.group_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupMembers', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupMembers', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupMembers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupMembers API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByAdmin({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupsByAdmin( key.admin, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupsByAdmin( key.admin, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByAdmin', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByAdmin', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByAdmin']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByAdmin API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByMember({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupsByMember( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupsByMember( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByMember', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByMember', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByMember']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByMember API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroups({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroups(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroups({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Groups', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroups', payload: { options: { all }, params: {...key},query }})
				return getters['getGroups']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroups API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgCreateGroup({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.msgCreateGroup({...key})).data
				
					
				commit('QUERY', { query: 'CreateGroup', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgCreateGroup', payload: { options: { all }, params: {...key},query }})
				return getters['getCreateGroup']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgCreateGroup API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgDeleteGroup({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.msgDeleteGroup({...key})).data
				
					
				commit('QUERY', { query: 'DeleteGroup', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgDeleteGroup', payload: { options: { all }, params: {...key},query }})
				return getters['getDeleteGroup']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgDeleteGroup API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgUpdateGroupMembers({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.msgUpdateGroupMembers({...key})).data
				
					
				commit('QUERY', { query: 'UpdateGroupMembers', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgUpdateGroupMembers', payload: { options: { all }, params: {...key},query }})
				return getters['getUpdateGroupMembers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgUpdateGroupMembers API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async MsgLeaveGroup({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.msgLeaveGroup({...key})).data
				
					
				commit('QUERY', { query: 'LeaveGroup', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'MsgLeaveGroup', payload: { options: { all }, params: {...key},query }})
				return getters['getLeaveGroup']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:MsgLeaveGroup API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgVote({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgVote({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgVote:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyMetadata({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyMetadata({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupMembers({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupMembers({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgLeaveGroup({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgLeaveGroup({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLeaveGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroupPolicy({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroupPolicy({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroupWithPolicy({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroupWithPolicy({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSubmitProposal({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgSubmitProposal({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSubmitProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawProposal({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgWithdrawProposal({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupAdmin({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupAdmin({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupMetadata({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupMetadata({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExec({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgExec({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExec:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteGroup({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgDeleteGroup({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyAdmin({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyAdmin({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroup({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroup({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgVote({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgVote({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgVote:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyMetadata({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyMetadata({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupMembers({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupMembers({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgLeaveGroup({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgLeaveGroup({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLeaveGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroupPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroupPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroupWithPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroupWithPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSubmitProposal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgSubmitProposal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSubmitProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyDecisionPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawProposal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgWithdrawProposal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupMetadata({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupMetadata({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExec({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgExec({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExec:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteGroup({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgDeleteGroup({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroup({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroup({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}