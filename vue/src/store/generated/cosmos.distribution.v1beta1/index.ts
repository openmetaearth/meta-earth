import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { Params } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorHistoricalRewards } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorCurrentRewards } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorAccumulatedCommission } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorOutstandingRewards } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorSlashEvent } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorSlashEvents } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { FeePool } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { CommunityPoolSpendProposal } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { DelegatorStartingInfo } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { DelegationDelegatorReward } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { CommunityPoolSpendProposalWithDeposit } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { DelegatorWithdrawInfo } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorOutstandingRewardsRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorAccumulatedCommissionRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorHistoricalRewardsRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorCurrentRewardsRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { DelegatorStartingInfoRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { ValidatorSlashEventRecord } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorOutstandingRewardsRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorOutstandingRewardsResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorCommissionRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorCommissionResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorSlashesRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryValidatorSlashesResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegationTotalRewardsRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegationTotalRewardsResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegatorValidatorsRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegatorValidatorsResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegatorWithdrawAddressRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryDelegatorWithdrawAddressResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryCommunityPoolRequest } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { QueryCommunityPoolResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { MsgSetWithdrawAddressResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { MsgWithdrawValidatorCommissionResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"
import { MsgFundCommunityPoolResponse } from "me-chain-client-ts/cosmos.distribution.v1beta1/types"


export { Params, ValidatorHistoricalRewards, ValidatorCurrentRewards, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent, ValidatorSlashEvents, FeePool, CommunityPoolSpendProposal, DelegatorStartingInfo, DelegationDelegatorReward, CommunityPoolSpendProposalWithDeposit, DelegatorWithdrawInfo, ValidatorOutstandingRewardsRecord, ValidatorAccumulatedCommissionRecord, ValidatorHistoricalRewardsRecord, ValidatorCurrentRewardsRecord, DelegatorStartingInfoRecord, ValidatorSlashEventRecord, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse, MsgSetWithdrawAddressResponse, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPoolResponse };

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
				Params: {},
				DelegationRewards: {},
				
				_Structure: {
						Params: getStructure(Params.fromPartial({})),
						ValidatorHistoricalRewards: getStructure(ValidatorHistoricalRewards.fromPartial({})),
						ValidatorCurrentRewards: getStructure(ValidatorCurrentRewards.fromPartial({})),
						ValidatorAccumulatedCommission: getStructure(ValidatorAccumulatedCommission.fromPartial({})),
						ValidatorOutstandingRewards: getStructure(ValidatorOutstandingRewards.fromPartial({})),
						ValidatorSlashEvent: getStructure(ValidatorSlashEvent.fromPartial({})),
						ValidatorSlashEvents: getStructure(ValidatorSlashEvents.fromPartial({})),
						FeePool: getStructure(FeePool.fromPartial({})),
						CommunityPoolSpendProposal: getStructure(CommunityPoolSpendProposal.fromPartial({})),
						DelegatorStartingInfo: getStructure(DelegatorStartingInfo.fromPartial({})),
						DelegationDelegatorReward: getStructure(DelegationDelegatorReward.fromPartial({})),
						CommunityPoolSpendProposalWithDeposit: getStructure(CommunityPoolSpendProposalWithDeposit.fromPartial({})),
						DelegatorWithdrawInfo: getStructure(DelegatorWithdrawInfo.fromPartial({})),
						ValidatorOutstandingRewardsRecord: getStructure(ValidatorOutstandingRewardsRecord.fromPartial({})),
						ValidatorAccumulatedCommissionRecord: getStructure(ValidatorAccumulatedCommissionRecord.fromPartial({})),
						ValidatorHistoricalRewardsRecord: getStructure(ValidatorHistoricalRewardsRecord.fromPartial({})),
						ValidatorCurrentRewardsRecord: getStructure(ValidatorCurrentRewardsRecord.fromPartial({})),
						DelegatorStartingInfoRecord: getStructure(DelegatorStartingInfoRecord.fromPartial({})),
						ValidatorSlashEventRecord: getStructure(ValidatorSlashEventRecord.fromPartial({})),
						QueryValidatorOutstandingRewardsRequest: getStructure(QueryValidatorOutstandingRewardsRequest.fromPartial({})),
						QueryValidatorOutstandingRewardsResponse: getStructure(QueryValidatorOutstandingRewardsResponse.fromPartial({})),
						QueryValidatorCommissionRequest: getStructure(QueryValidatorCommissionRequest.fromPartial({})),
						QueryValidatorCommissionResponse: getStructure(QueryValidatorCommissionResponse.fromPartial({})),
						QueryValidatorSlashesRequest: getStructure(QueryValidatorSlashesRequest.fromPartial({})),
						QueryValidatorSlashesResponse: getStructure(QueryValidatorSlashesResponse.fromPartial({})),
						QueryDelegationTotalRewardsRequest: getStructure(QueryDelegationTotalRewardsRequest.fromPartial({})),
						QueryDelegationTotalRewardsResponse: getStructure(QueryDelegationTotalRewardsResponse.fromPartial({})),
						QueryDelegatorValidatorsRequest: getStructure(QueryDelegatorValidatorsRequest.fromPartial({})),
						QueryDelegatorValidatorsResponse: getStructure(QueryDelegatorValidatorsResponse.fromPartial({})),
						QueryDelegatorWithdrawAddressRequest: getStructure(QueryDelegatorWithdrawAddressRequest.fromPartial({})),
						QueryDelegatorWithdrawAddressResponse: getStructure(QueryDelegatorWithdrawAddressResponse.fromPartial({})),
						QueryCommunityPoolRequest: getStructure(QueryCommunityPoolRequest.fromPartial({})),
						QueryCommunityPoolResponse: getStructure(QueryCommunityPoolResponse.fromPartial({})),
						MsgSetWithdrawAddressResponse: getStructure(MsgSetWithdrawAddressResponse.fromPartial({})),
						MsgWithdrawValidatorCommissionResponse: getStructure(MsgWithdrawValidatorCommissionResponse.fromPartial({})),
						MsgFundCommunityPoolResponse: getStructure(MsgFundCommunityPoolResponse.fromPartial({})),
						
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
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getDelegationRewards: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DelegationRewards[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.distribution.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosDistributionV1Beta1.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegationRewards({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosDistributionV1Beta1.query.queryDelegationRewards( key.delegator_address,  key.validator_address)).data
				
					
				commit('QUERY', { query: 'DelegationRewards', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegationRewards', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegationRewards']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegationRewards API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSetWithdrawAddress({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosDistributionV1Beta1.tx.sendMsgSetWithdrawAddress({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetWithdrawAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetWithdrawAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawDelegatorReward({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosDistributionV1Beta1.tx.sendMsgWithdrawDelegatorReward({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawDelegatorReward:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawDelegatorReward:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawValidatorCommission({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosDistributionV1Beta1.tx.sendMsgWithdrawValidatorCommission({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawValidatorCommission:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawValidatorCommission:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgFundCommunityPool({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosDistributionV1Beta1.tx.sendMsgFundCommunityPool({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFundCommunityPool:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgFundCommunityPool:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSetWithdrawAddress({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosDistributionV1Beta1.tx.msgSetWithdrawAddress({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetWithdrawAddress:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetWithdrawAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawDelegatorReward({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosDistributionV1Beta1.tx.msgWithdrawDelegatorReward({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawDelegatorReward:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawDelegatorReward:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawValidatorCommission({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosDistributionV1Beta1.tx.msgWithdrawValidatorCommission({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawValidatorCommission:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawValidatorCommission:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgFundCommunityPool({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosDistributionV1Beta1.tx.msgFundCommunityPool({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFundCommunityPool:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgFundCommunityPool:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}