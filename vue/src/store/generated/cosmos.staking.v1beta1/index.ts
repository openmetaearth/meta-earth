import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { StakeAuthorization } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { StakeAuthorization_Validators } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { FixedDepositAnnualRate } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { FixedDeposit } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { LastValidatorPower } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { Kyc } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
import { SiidNFT } from "me-chain-client-ts/cosmos.staking.v1beta1/types"
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


export { StakeAuthorization, StakeAuthorization_Validators, FixedDepositAnnualRate, FixedDeposit, LastValidatorPower, Kyc, SiidNFT, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, Region, HistoricalInfo, CommissionRates, Commission, Description, Validator, ValAddresses, DVPair, DVPairs, DVVTriplet, DVVTriplets, Delegation, UnbondingDelegation, UnbondingDelegationEntry, RedelegationEntry, Redelegation, Params, DelegationResponse, RedelegationEntryResponse, RedelegationResponse, Pool, Stake, UnbondingStake, UnbondingStakeEntry, SVPair, SVPairs, ValidatorUpdates, MsgBeginRedelegateResponse };

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
				Kyc: {},
				KycAll: {},
				KycByRegion: {},
				FixedDepositByAcct: {},
				FixedDepositByRegion: {},
				FixedDeposit: {},
				FixedDepositAll: {},
				FixedDepositInterestRate: {},
				Siid: {},
				SiidAll: {},
				SiidByAccount: {},
				
				_Structure: {
						StakeAuthorization: getStructure(StakeAuthorization.fromPartial({})),
						StakeAuthorization_Validators: getStructure(StakeAuthorization_Validators.fromPartial({})),
						FixedDepositAnnualRate: getStructure(FixedDepositAnnualRate.fromPartial({})),
						FixedDeposit: getStructure(FixedDeposit.fromPartial({})),
						LastValidatorPower: getStructure(LastValidatorPower.fromPartial({})),
						Kyc: getStructure(Kyc.fromPartial({})),
						SiidNFT: getStructure(SiidNFT.fromPartial({})),
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
				getKyc: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Kyc[JSON.stringify(params)] ?? {}
		},
				getKycAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.KycAll[JSON.stringify(params)] ?? {}
		},
				getKycByRegion: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.KycByRegion[JSON.stringify(params)] ?? {}
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
				getFixedDepositInterestRate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FixedDepositInterestRate[JSON.stringify(params)] ?? {}
		},
				getSiid: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Siid[JSON.stringify(params)] ?? {}
		},
				getSiidAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SiidAll[JSON.stringify(params)] ?? {}
		},
				getSiidByAccount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SiidByAccount[JSON.stringify(params)] ?? {}
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
		
		
		
		
		 		
		
		
		async QueryKyc({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryKyc( key.account)).data
				
					
				commit('QUERY', { query: 'Kyc', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKyc', payload: { options: { all }, params: {...key},query }})
				return getters['getKyc']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKyc API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryKycAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryKycAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryKycAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'KycAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKycAll', payload: { options: { all }, params: {...key},query }})
				return getters['getKycAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKycAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryKycByRegion({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryKycByRegion( key.regionId, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryKycByRegion( key.regionId, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'KycByRegion', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryKycByRegion', payload: { options: { all }, params: {...key},query }})
				return getters['getKycByRegion']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryKycByRegion API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async QueryFixedDepositInterestRate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.queryFixedDepositInterestRate(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.queryFixedDepositInterestRate({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FixedDepositInterestRate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFixedDepositInterestRate', payload: { options: { all }, params: {...key},query }})
				return getters['getFixedDepositInterestRate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFixedDepositInterestRate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySiid({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.querySiid( key.siid)).data
				
					
				commit('QUERY', { query: 'Siid', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySiid', payload: { options: { all }, params: {...key},query }})
				return getters['getSiid']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySiid API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySiidAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.querySiidAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosStakingV1Beta1.query.querySiidAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SiidAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySiidAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSiidAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySiidAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySiidByAccount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosStakingV1Beta1.query.querySiidByAccount( key.account)).data
				
					
				commit('QUERY', { query: 'SiidByAccount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySiidByAccount', payload: { options: { all }, params: {...key},query }})
				return getters['getSiidByAccount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySiidByAccount API Node Unavailable. Could not perform query: ' + e.message)
				
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
		async sendMsgSetFixedDepositInterestRate({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgSetFixedDepositInterestRate({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgRemoveKyc({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveKyc({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveKyc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveKyc:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgNewSiidNFT({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewSiidNFT({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewSiidNFT:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewSiidNFT:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgRemoveSiidNFT({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgRemoveSiidNFT({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveSiidNFT:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveSiidNFT:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgNewKyc({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmosStakingV1Beta1.tx.sendMsgNewKyc({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewKyc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgNewKyc:Send Could not broadcast Tx: '+ e.message)
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
		async MsgSetFixedDepositInterestRate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgSetFixedDepositInterestRate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetFixedDepositInterestRate:Create Could not create message: ' + e.message)
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
		async MsgRemoveKyc({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveKyc({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveKyc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveKyc:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgNewSiidNFT({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewSiidNFT({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewSiidNFT:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewSiidNFT:Create Could not create message: ' + e.message)
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
		async MsgRemoveSiidNFT({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgRemoveSiidNFT({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveSiidNFT:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveSiidNFT:Create Could not create message: ' + e.message)
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
		async MsgNewKyc({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosStakingV1Beta1.tx.msgNewKyc({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgNewKyc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgNewKyc:Create Could not create message: ' + e.message)
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
		
	}
}