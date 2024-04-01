import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { StakeAuthorization } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { StakeAuthorization_Validators } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { FixedDeposit } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { FixedDepositTotal } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { FixedDepositCfg } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { LastValidatorPower } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Meid } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { MeidNFT } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryValidatorUnbondingDelegationsRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryValidatorUnbondingDelegationsResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorDelegationsRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorDelegationsResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorUnbondingDelegationsRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorUnbondingDelegationsResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryRedelegationsRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryRedelegationsResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorValidatorsRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorValidatorsResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorValidatorRequest } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { QueryDelegatorValidatorResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Region } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { HistoricalInfo } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { CommissionRates } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Commission } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Description } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Validator } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { ValAddresses } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { DVPair } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { DVPairs } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { DVVTriplet } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { DVVTriplets } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Delegation } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { UnbondingDelegation } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { UnbondingDelegationEntry } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { RedelegationEntry } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Redelegation } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Params } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { DelegationResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { RedelegationEntryResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { RedelegationResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Pool } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Stake } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { UnbondingStake } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { UnbondingStakeEntry } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { SVPair } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { SVPairs } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { ValidatorUpdates } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { MsgBeginRedelegateResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { MsgUnMeidUndelegateResponse } from "me-chain-client-ts/cosmos.staking.v1beta1/types"


export { StakeAuthorization, StakeAuthorization_Validators, FixedDeposit, FixedDepositTotal, FixedDepositCfg, LastValidatorPower, Meid, MeidNFT, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, Region, HistoricalInfo, CommissionRates, Commission, Description, Validator, ValAddresses, DVPair, DVPairs, DVVTriplet, DVVTriplets, Delegation, UnbondingDelegation, UnbondingDelegationEntry, RedelegationEntry, Redelegation, Params, DelegationResponse, RedelegationEntryResponse, RedelegationResponse, Pool, Stake, UnbondingStake, UnbondingStakeEntry, SVPair, SVPairs, ValidatorUpdates, MsgBeginRedelegateResponse, MsgUnMeidUndelegateResponse };

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
				Validators: {},
				Validator: {},
				ValidatorDelegations: {},
				Delegation: {},
				UnbondingDelegation: {},
				HistoricalInfo: {},
				Pool: {},
				Params: {},
				Region: {},
				RegionAll: {},
				Meid: {},
				MeidAll: {},
				MeidByRegion: {},
				FixedDepositByAcct: {},
				FixedDepositByRegion: {},
				FixedDeposit: {},
				FixedDepositAll: {},
				FixedDepositCfg: {},
				FixedDepositCfgByTerm: {},
				MeidNFT: {},
				MeidNFTAll: {},
				UnMeidAmount: {},
				FixedDepositTotalAmount: {},
				FixedDepositAmountByMeid: {},
				CheckIsPledgeByAccount: {},
				GlobalAdminFeePool: {},
				
				_Structure: {
						StakeAuthorization: getStructure(StakeAuthorization.fromPartial({})),
						StakeAuthorization_Validators: getStructure(StakeAuthorization_Validators.fromPartial({})),
						FixedDeposit: getStructure(FixedDeposit.fromPartial({})),
						FixedDepositTotal: getStructure(FixedDepositTotal.fromPartial({})),
						FixedDepositCfg: getStructure(FixedDepositCfg.fromPartial({})),
						LastValidatorPower: getStructure(LastValidatorPower.fromPartial({})),
						Meid: getStructure(Meid.fromPartial({})),
						MeidNFT: getStructure(MeidNFT.fromPartial({})),
						QueryValidatorUnbondingDelegationsRequest: getStructure(QueryValidatorUnbondingDelegationsRequest.fromPartial({})),
						QueryValidatorUnbondingDelegationsResponse: getStructure(QueryValidatorUnbondingDelegationsResponse.fromPartial({})),
						QueryDelegatorDelegationsRequest: getStructure(QueryDelegatorDelegationsRequest.fromPartial({})),
						QueryDelegatorDelegationsResponse: getStructure(QueryDelegatorDelegationsResponse.fromPartial({})),
						QueryDelegatorUnbondingDelegationsRequest: getStructure(QueryDelegatorUnbondingDelegationsRequest.fromPartial({})),
						QueryDelegatorUnbondingDelegationsResponse: getStructure(QueryDelegatorUnbondingDelegationsResponse.fromPartial({})),
						QueryRedelegationsRequest: getStructure(QueryRedelegationsRequest.fromPartial({})),
						QueryRedelegationsResponse: getStructure(QueryRedelegationsResponse.fromPartial({})),
						QueryDelegatorValidatorsRequest: getStructure(QueryDelegatorValidatorsRequest.fromPartial({})),
						QueryDelegatorValidatorsResponse: getStructure(QueryDelegatorValidatorsResponse.fromPartial({})),
						QueryDelegatorValidatorRequest: getStructure(QueryDelegatorValidatorRequest.fromPartial({})),
						QueryDelegatorValidatorResponse: getStructure(QueryDelegatorValidatorResponse.fromPartial({})),
						Region: getStructure(Region.fromPartial({})),
						HistoricalInfo: getStructure(HistoricalInfo.fromPartial({})),
						CommissionRates: getStructure(CommissionRates.fromPartial({})),
						Commission: getStructure(Commission.fromPartial({})),
						Description: getStructure(Description.fromPartial({})),
						Validator: getStructure(Validator.fromPartial({})),
						ValAddresses: getStructure(ValAddresses.fromPartial({})),
						DVPair: getStructure(DVPair.fromPartial({})),
						DVPairs: getStructure(DVPairs.fromPartial({})),
						DVVTriplet: getStructure(DVVTriplet.fromPartial({})),
						DVVTriplets: getStructure(DVVTriplets.fromPartial({})),
						Delegation: getStructure(Delegation.fromPartial({})),
						UnbondingDelegation: getStructure(UnbondingDelegation.fromPartial({})),
						UnbondingDelegationEntry: getStructure(UnbondingDelegationEntry.fromPartial({})),
						RedelegationEntry: getStructure(RedelegationEntry.fromPartial({})),
						Redelegation: getStructure(Redelegation.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						DelegationResponse: getStructure(DelegationResponse.fromPartial({})),
						RedelegationEntryResponse: getStructure(RedelegationEntryResponse.fromPartial({})),
						RedelegationResponse: getStructure(RedelegationResponse.fromPartial({})),
						Pool: getStructure(Pool.fromPartial({})),
						Stake: getStructure(Stake.fromPartial({})),
						UnbondingStake: getStructure(UnbondingStake.fromPartial({})),
						UnbondingStakeEntry: getStructure(UnbondingStakeEntry.fromPartial({})),
						SVPair: getStructure(SVPair.fromPartial({})),
						SVPairs: getStructure(SVPairs.fromPartial({})),
						ValidatorUpdates: getStructure(ValidatorUpdates.fromPartial({})),
						MsgBeginRedelegateResponse: getStructure(MsgBeginRedelegateResponse.fromPartial({})),
						MsgUnMeidUndelegateResponse: getStructure(MsgUnMeidUndelegateResponse.fromPartial({})),
						
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
				getValidators: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validators[JSON.stringify(params)] ?? {}
		},
				getValidator: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validator[JSON.stringify(params)] ?? {}
		},
				getValidatorDelegations: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidatorDelegations[JSON.stringify(params)] ?? {}
		},
				getDelegation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Delegation[JSON.stringify(params)] ?? {}
		},
				getUnbondingDelegation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnbondingDelegation[JSON.stringify(params)] ?? {}
		},
				getHistoricalInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.HistoricalInfo[JSON.stringify(params)] ?? {}
		},
				getPool: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pool[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Region[JSON.stringify(params)] ?? {}
		},
				getRegionAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegionAll[JSON.stringify(params)] ?? {}
		},
				getMeid: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Meid[JSON.stringify(params)] ?? {}
		},
				getMeidAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeidAll[JSON.stringify(params)] ?? {}
		},
				getMeidByRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeidByRegion[JSON.stringify(params)] ?? {}
		},
				getFixedDepositByAcct: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositByAcct[JSON.stringify(params)] ?? {}
		},
				getFixedDepositByRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositByRegion[JSON.stringify(params)] ?? {}
		},
				getFixedDeposit: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDeposit[JSON.stringify(params)] ?? {}
		},
				getFixedDepositAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositAll[JSON.stringify(params)] ?? {}
		},
				getFixedDepositCfg: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositCfg[JSON.stringify(params)] ?? {}
		},
				getFixedDepositCfgByTerm: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositCfgByTerm[JSON.stringify(params)] ?? {}
		},
				getMeidNFT: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeidNFT[JSON.stringify(params)] ?? {}
		},
				getMeidNFTAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeidNFTAll[JSON.stringify(params)] ?? {}
		},
				getUnMeidAmount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnMeidAmount[JSON.stringify(params)] ?? {}
		},
				getFixedDepositTotalAmount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositTotalAmount[JSON.stringify(params)] ?? {}
		},
				getFixedDepositAmountByMeid: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositAmountByMeid[JSON.stringify(params)] ?? {}
		},
				getCheckIsPledgeByAccount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CheckIsPledgeByAccount[JSON.stringify(params)] ?? {}
		},
				getGlobalAdminFeePool: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GlobalAdminFeePool[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.staking.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryValidators({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryValidators(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryValidators({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Validators', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidators', payload: { options: { all }, params: {...key},query }})
				return getters['getValidators']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidators API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidator({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryValidator( key.validator_addr)).data
				
					
				commit('QUERY', { query: 'Validator', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidator', payload: { options: { all }, params: {...key},query }})
				return getters['getValidator']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidator API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidatorDelegations({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryValidatorDelegations( key.validator_addr, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryValidatorDelegations( key.validator_addr, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ValidatorDelegations', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidatorDelegations', payload: { options: { all }, params: {...key},query }})
				return getters['getValidatorDelegations']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidatorDelegations API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryDelegation( key.delegator_addr)).data
				
					
				commit('QUERY', { query: 'Delegation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegation', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnbondingDelegation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryUnbondingDelegation( key.delegator_addr)).data
				
					
				commit('QUERY', { query: 'UnbondingDelegation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnbondingDelegation', payload: { options: { all }, params: {...key},query }})
				return getters['getUnbondingDelegation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnbondingDelegation API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryHistoricalInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryHistoricalInfo( key.height)).data
				
					
				commit('QUERY', { query: 'HistoricalInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryHistoricalInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getHistoricalInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryHistoricalInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPool({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryPool()).data
				
					
				commit('QUERY', { query: 'Pool', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPool', payload: { options: { all }, params: {...key},query }})
				return getters['getPool']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPool API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryRegion( key.regionId)).data
				
					
				commit('QUERY', { query: 'Region', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegionAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryRegionAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryRegionAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RegionAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegionAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRegionAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegionAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeid({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryMeid( key.account)).data
				
					
				commit('QUERY', { query: 'Meid', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeid', payload: { options: { all }, params: {...key},query }})
				return getters['getMeid']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeid API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeidAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryMeidAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryMeidAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MeidAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeidAll', payload: { options: { all }, params: {...key},query }})
				return getters['getMeidAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeidAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeidByRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryMeidByRegion( key.regionId, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryMeidByRegion( key.regionId, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MeidByRegion', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeidByRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getMeidByRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeidByRegion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositByAcct({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositByAcct( key.account,  key.query_type)).data
				
					
				commit('QUERY', { query: 'FixedDepositByAcct', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositByAcct', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositByAcct']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositByAcct API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositByRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositByRegion( key.regionid, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDepositByRegion( key.regionid, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDepositByRegion', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositByRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositByRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositByRegion API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDeposit({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDeposit( key.id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDeposit( key.id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDeposit', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDeposit', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDeposit']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDeposit API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDepositAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDepositAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositAll', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositCfg({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositCfg(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDepositCfg({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDepositCfg', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositCfg', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositCfg']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositCfg API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositCfgByTerm({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositCfgByTerm(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDepositCfgByTerm({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDepositCfgByTerm', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositCfgByTerm', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositCfgByTerm']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositCfgByTerm API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeidNFT({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryMeidNFT( key.umeid)).data
				
					
				commit('QUERY', { query: 'MeidNFT', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeidNFT', payload: { options: { all }, params: {...key},query }})
				return getters['getMeidNFT']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeidNFT API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeidNFTAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryMeidNFTAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryMeidNFTAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MeidNFTAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeidNFTAll', payload: { options: { all }, params: {...key},query }})
				return getters['getMeidNFTAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeidNFTAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnMeidAmount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryUnMeidAmount()).data
				
					
				commit('QUERY', { query: 'UnMeidAmount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnMeidAmount', payload: { options: { all }, params: {...key},query }})
				return getters['getUnMeidAmount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnMeidAmount API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositTotalAmount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositTotalAmount()).data
				
					
				commit('QUERY', { query: 'FixedDepositTotalAmount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositTotalAmount', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositTotalAmount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositTotalAmount API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFixedDepositAmountByMeid({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositAmountByMeid( key.account)).data
				
					
				commit('QUERY', { query: 'FixedDepositAmountByMeid', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositAmountByMeid', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositAmountByMeid']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositAmountByMeid API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCheckIsPledgeByAccount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryCheckIsPledgeByAccount( key.account)).data
				
					
				commit('QUERY', { query: 'CheckIsPledgeByAccount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCheckIsPledgeByAccount', payload: { options: { all }, params: {...key},query }})
				return getters['getCheckIsPledgeByAccount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCheckIsPledgeByAccount API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGlobalAdminFeePool({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryGlobalAdminFeePool()).data
				
					
				commit('QUERY', { query: 'GlobalAdminFeePool', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGlobalAdminFeePool', payload: { options: { all }, params: {...key},query }})
				return getters['getGlobalAdminFeePool']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGlobalAdminFeePool API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgRemoveRegion({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveRegion({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBeginRedelegate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgBeginRedelegate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBeginRedelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBeginRedelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUnMeidUndelegate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgUnMeidUndelegate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnMeidUndelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnMeidUndelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewRegion({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewRegion({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewMeid({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewMeid({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewMeid:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewMeid:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSetFixedDepositCfgRate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgSetFixedDepositCfgRate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositCfgRate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetFixedDepositCfgRate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSetFixedDepositCfgStatus({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgSetFixedDepositCfgStatus({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositCfgStatus:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetFixedDepositCfgStatus:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUndelegate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgUndelegate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUndelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUndelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveMeid({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveMeid({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveMeid:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveMeid:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgTransferRegion({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgTransferRegion({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgTransferRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgTransferRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDelegate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgDelegate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDelegate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDelegate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateValidator({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgCreateValidator({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateValidator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgResetValidator({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgResetValidator({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgResetValidator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgResetValidator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewMeidNFT({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewMeidNFT({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewMeidNFT:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewMeidNFT:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCancelUnbondingDelegation({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgCancelUnbondingDelegation({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelUnbondingDelegation:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCancelUnbondingDelegation:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUnstake({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgUnstake({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnstake:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnstake:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgStake({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgStake({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStake:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgStake:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgEditValidator({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgEditValidator({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEditValidator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgEditValidator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRetrieveCoinsFromRegion({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRetrieveCoinsFromRegion({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRetrieveCoinsFromRegion:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRetrieveCoinsFromRegion:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewFixedDepositCfg({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewFixedDepositCfg({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewFixedDepositCfg:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewFixedDepositCfg:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDoFixedWithdraw({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgDoFixedWithdraw({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDoFixedWithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDoFixedWithdraw:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveMeidNFT({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveMeidNFT({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveMeidNFT:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveMeidNFT:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveFixedDepositCfg({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveFixedDepositCfg({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveFixedDepositCfg:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveFixedDepositCfg:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDoFixedDeposit({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgDoFixedDeposit({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDoFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDoFixedDeposit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRetrieveFeeFromGlobalAdminFeePool({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRetrieveFeeFromGlobalAdminFeePool({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRetrieveFeeFromGlobalAdminFeePool:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRetrieveFeeFromGlobalAdminFeePool:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgRemoveRegion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveRegion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBeginRedelegate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgBeginRedelegate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBeginRedelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBeginRedelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUnMeidUndelegate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgUnMeidUndelegate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnMeidUndelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnMeidUndelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewRegion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewRegion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewMeid({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewMeid({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewMeid:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewMeid:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSetFixedDepositCfgRate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgSetFixedDepositCfgRate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositCfgRate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetFixedDepositCfgRate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSetFixedDepositCfgStatus({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgSetFixedDepositCfgStatus({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositCfgStatus:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetFixedDepositCfgStatus:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUndelegate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgUndelegate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUndelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUndelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveMeid({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveMeid({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveMeid:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveMeid:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgTransferRegion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgTransferRegion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgTransferRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgTransferRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDelegate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgDelegate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDelegate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDelegate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateValidator({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgCreateValidator({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidator:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateValidator:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgResetValidator({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgResetValidator({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgResetValidator:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgResetValidator:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewMeidNFT({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewMeidNFT({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewMeidNFT:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewMeidNFT:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCancelUnbondingDelegation({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgCancelUnbondingDelegation({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelUnbondingDelegation:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCancelUnbondingDelegation:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUnstake({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgUnstake({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnstake:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnstake:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgStake({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgStake({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStake:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgStake:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgEditValidator({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgEditValidator({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEditValidator:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgEditValidator:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRetrieveCoinsFromRegion({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRetrieveCoinsFromRegion({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRetrieveCoinsFromRegion:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRetrieveCoinsFromRegion:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewFixedDepositCfg({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewFixedDepositCfg({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewFixedDepositCfg:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewFixedDepositCfg:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDoFixedWithdraw({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgDoFixedWithdraw({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDoFixedWithdraw:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDoFixedWithdraw:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveMeidNFT({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveMeidNFT({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveMeidNFT:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveMeidNFT:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveFixedDepositCfg({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveFixedDepositCfg({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveFixedDepositCfg:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveFixedDepositCfg:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDoFixedDeposit({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgDoFixedDeposit({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDoFixedDeposit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDoFixedDeposit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRetrieveFeeFromGlobalAdminFeePool({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRetrieveFeeFromGlobalAdminFeePool({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRetrieveFeeFromGlobalAdminFeePool:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRetrieveFeeFromGlobalAdminFeePool:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}