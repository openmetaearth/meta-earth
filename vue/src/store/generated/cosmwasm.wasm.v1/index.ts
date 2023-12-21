import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { ContractExecutionAuthorization } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ContractMigrationAuthorization } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ContractGrant } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { MaxCallsLimit } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { MaxFundsLimit } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { CombinedLimit } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AllowAllMessagesFilter } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AcceptedMessageKeysFilter } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AcceptedMessagesFilter } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { Code } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { Contract } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { Sequence } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { MsgIBCSendResponse } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { StoreCodeProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { InstantiateContractProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { InstantiateContract2Proposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { MigrateContractProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { SudoContractProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ExecuteContractProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { UpdateAdminProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ClearAdminProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { PinCodesProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { UnpinCodesProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AccessConfigUpdate } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { UpdateInstantiateConfigProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { StoreAndInstantiateContractProposal } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { CodeInfoResponse } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AccessTypeParam } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AccessConfig } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { Params } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { CodeInfo } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ContractInfo } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { ContractCodeHistoryEntry } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { AbsoluteTxPosition } from "me-chain-client-ts/cosmwasm.wasm.v1/types"
import { Model } from "me-chain-client-ts/cosmwasm.wasm.v1/types"


export { ContractExecutionAuthorization, ContractMigrationAuthorization, ContractGrant, MaxCallsLimit, MaxFundsLimit, CombinedLimit, AllowAllMessagesFilter, AcceptedMessageKeysFilter, AcceptedMessagesFilter, Code, Contract, Sequence, MsgIBCSendResponse, StoreCodeProposal, InstantiateContractProposal, InstantiateContract2Proposal, MigrateContractProposal, SudoContractProposal, ExecuteContractProposal, UpdateAdminProposal, ClearAdminProposal, PinCodesProposal, UnpinCodesProposal, AccessConfigUpdate, UpdateInstantiateConfigProposal, StoreAndInstantiateContractProposal, CodeInfoResponse, AccessTypeParam, AccessConfig, Params, CodeInfo, ContractInfo, ContractCodeHistoryEntry, AbsoluteTxPosition, Model };

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
				ContractInfo: {},
				ContractHistory: {},
				ContractsByCode: {},
				AllContractState: {},
				RawContractState: {},
				SmartContractState: {},
				Code: {},
				Codes: {},
				PinnedCodes: {},
				Params: {},
				ContractsByCreator: {},
				
				_Structure: {
						ContractExecutionAuthorization: getStructure(ContractExecutionAuthorization.fromPartial({})),
						ContractMigrationAuthorization: getStructure(ContractMigrationAuthorization.fromPartial({})),
						ContractGrant: getStructure(ContractGrant.fromPartial({})),
						MaxCallsLimit: getStructure(MaxCallsLimit.fromPartial({})),
						MaxFundsLimit: getStructure(MaxFundsLimit.fromPartial({})),
						CombinedLimit: getStructure(CombinedLimit.fromPartial({})),
						AllowAllMessagesFilter: getStructure(AllowAllMessagesFilter.fromPartial({})),
						AcceptedMessageKeysFilter: getStructure(AcceptedMessageKeysFilter.fromPartial({})),
						AcceptedMessagesFilter: getStructure(AcceptedMessagesFilter.fromPartial({})),
						Code: getStructure(Code.fromPartial({})),
						Contract: getStructure(Contract.fromPartial({})),
						Sequence: getStructure(Sequence.fromPartial({})),
						MsgIBCSendResponse: getStructure(MsgIBCSendResponse.fromPartial({})),
						StoreCodeProposal: getStructure(StoreCodeProposal.fromPartial({})),
						InstantiateContractProposal: getStructure(InstantiateContractProposal.fromPartial({})),
						InstantiateContract2Proposal: getStructure(InstantiateContract2Proposal.fromPartial({})),
						MigrateContractProposal: getStructure(MigrateContractProposal.fromPartial({})),
						SudoContractProposal: getStructure(SudoContractProposal.fromPartial({})),
						ExecuteContractProposal: getStructure(ExecuteContractProposal.fromPartial({})),
						UpdateAdminProposal: getStructure(UpdateAdminProposal.fromPartial({})),
						ClearAdminProposal: getStructure(ClearAdminProposal.fromPartial({})),
						PinCodesProposal: getStructure(PinCodesProposal.fromPartial({})),
						UnpinCodesProposal: getStructure(UnpinCodesProposal.fromPartial({})),
						AccessConfigUpdate: getStructure(AccessConfigUpdate.fromPartial({})),
						UpdateInstantiateConfigProposal: getStructure(UpdateInstantiateConfigProposal.fromPartial({})),
						StoreAndInstantiateContractProposal: getStructure(StoreAndInstantiateContractProposal.fromPartial({})),
						CodeInfoResponse: getStructure(CodeInfoResponse.fromPartial({})),
						AccessTypeParam: getStructure(AccessTypeParam.fromPartial({})),
						AccessConfig: getStructure(AccessConfig.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						CodeInfo: getStructure(CodeInfo.fromPartial({})),
						ContractInfo: getStructure(ContractInfo.fromPartial({})),
						ContractCodeHistoryEntry: getStructure(ContractCodeHistoryEntry.fromPartial({})),
						AbsoluteTxPosition: getStructure(AbsoluteTxPosition.fromPartial({})),
						Model: getStructure(Model.fromPartial({})),
						
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
				getContractInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ContractInfo[JSON.stringify(params)] ?? {}
		},
				getContractHistory: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ContractHistory[JSON.stringify(params)] ?? {}
		},
				getContractsByCode: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ContractsByCode[JSON.stringify(params)] ?? {}
		},
				getAllContractState: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllContractState[JSON.stringify(params)] ?? {}
		},
				getRawContractState: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RawContractState[JSON.stringify(params)] ?? {}
		},
				getSmartContractState: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SmartContractState[JSON.stringify(params)] ?? {}
		},
				getCode: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Code[JSON.stringify(params)] ?? {}
		},
				getCodes: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Codes[JSON.stringify(params)] ?? {}
		},
				getPinnedCodes: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PinnedCodes[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getContractsByCreator: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ContractsByCreator[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmwasm.wasm.v1 initialized!')
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
		
		
		
		 		
		
		
		async QueryContractInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryContractInfo( key.address)).data
				
					
				commit('QUERY', { query: 'ContractInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryContractInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getContractInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryContractInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryContractHistory({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryContractHistory( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryContractHistory( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ContractHistory', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryContractHistory', payload: { options: { all }, params: {...key},query }})
				return getters['getContractHistory']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryContractHistory API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryContractsByCode({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryContractsByCode( key.code_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryContractsByCode( key.code_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ContractsByCode', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryContractsByCode', payload: { options: { all }, params: {...key},query }})
				return getters['getContractsByCode']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryContractsByCode API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllContractState({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryAllContractState( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryAllContractState( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AllContractState', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllContractState', payload: { options: { all }, params: {...key},query }})
				return getters['getAllContractState']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllContractState API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRawContractState({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryRawContractState( key.address,  key.query_data)).data
				
					
				commit('QUERY', { query: 'RawContractState', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRawContractState', payload: { options: { all }, params: {...key},query }})
				return getters['getRawContractState']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRawContractState API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySmartContractState({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.querySmartContractState( key.address,  key.query_data)).data
				
					
				commit('QUERY', { query: 'SmartContractState', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySmartContractState', payload: { options: { all }, params: {...key},query }})
				return getters['getSmartContractState']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySmartContractState API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCode({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryCode( key.code_id)).data
				
					
				commit('QUERY', { query: 'Code', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCode', payload: { options: { all }, params: {...key},query }})
				return getters['getCode']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCode API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCodes({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryCodes(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryCodes({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Codes', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCodes', payload: { options: { all }, params: {...key},query }})
				return getters['getCodes']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCodes API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPinnedCodes({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryPinnedCodes(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryPinnedCodes({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PinnedCodes', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPinnedCodes', payload: { options: { all }, params: {...key},query }})
				return getters['getPinnedCodes']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPinnedCodes API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryContractsByCreator({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmwasmWasmV1.query.queryContractsByCreator( key.creator_address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmwasmWasmV1.query.queryContractsByCreator( key.creator_address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ContractsByCreator', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryContractsByCreator', payload: { options: { all }, params: {...key},query }})
				return getters['getContractsByCreator']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryContractsByCreator API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgIBCCloseChannel({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgIBCCloseChannel({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIBCCloseChannel:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIBCCloseChannel:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgStoreAndInstantiateContract({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgStoreAndInstantiateContract({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStoreAndInstantiateContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgStoreAndInstantiateContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPinCodes({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgPinCodes({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPinCodes:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPinCodes:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddCodeUploadParamsAddresses({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgAddCodeUploadParamsAddresses({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddCodeUploadParamsAddresses:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddCodeUploadParamsAddresses:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveCodeUploadParamsAddresses({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgRemoveCodeUploadParamsAddresses({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateAdmin({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgUpdateAdmin({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgClearAdmin({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgClearAdmin({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgClearAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgClearAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSudoContract({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgSudoContract({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSudoContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSudoContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgIBCSend({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgIBCSend({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIBCSend:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIBCSend:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMigrateContract({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgMigrateContract({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMigrateContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMigrateContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgStoreCode({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgStoreCode({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStoreCode:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgStoreCode:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateParams({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgUpdateParams({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateParams:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateParams:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateInstantiateConfig({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgUpdateInstantiateConfig({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateInstantiateConfig:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateInstantiateConfig:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExecuteContract({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgExecuteContract({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExecuteContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExecuteContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUnpinCodes({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgUnpinCodes({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnpinCodes:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnpinCodes:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInstantiateContract({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgInstantiateContract({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInstantiateContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInstantiateContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInstantiateContract2({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.CosmwasmWasmV1.tx.sendMsgInstantiateContract2({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInstantiateContract2:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInstantiateContract2:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgIBCCloseChannel({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgIBCCloseChannel({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIBCCloseChannel:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIBCCloseChannel:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgStoreAndInstantiateContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgStoreAndInstantiateContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStoreAndInstantiateContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgStoreAndInstantiateContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPinCodes({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgPinCodes({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPinCodes:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPinCodes:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddCodeUploadParamsAddresses({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgAddCodeUploadParamsAddresses({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddCodeUploadParamsAddresses:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAddCodeUploadParamsAddresses:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveCodeUploadParamsAddresses({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgRemoveCodeUploadParamsAddresses({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveCodeUploadParamsAddresses:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgUpdateAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgClearAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgClearAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgClearAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgClearAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSudoContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgSudoContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSudoContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSudoContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgIBCSend({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgIBCSend({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIBCSend:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIBCSend:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMigrateContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgMigrateContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMigrateContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgMigrateContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgStoreCode({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgStoreCode({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStoreCode:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgStoreCode:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateParams({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgUpdateParams({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateParams:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateParams:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateInstantiateConfig({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgUpdateInstantiateConfig({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateInstantiateConfig:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateInstantiateConfig:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExecuteContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgExecuteContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExecuteContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExecuteContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUnpinCodes({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgUnpinCodes({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnpinCodes:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnpinCodes:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInstantiateContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgInstantiateContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInstantiateContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInstantiateContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInstantiateContract2({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmwasmWasmV1.tx.msgInstantiateContract2({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInstantiateContract2:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInstantiateContract2:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}