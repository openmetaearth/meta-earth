import { Client, registry, MissingWalletError } from 'me-chain-client-ts'

import { IncentivizedAcknowledgement } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { Fee } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { PacketFee } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { PacketFees } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { IdentifiedPacketFees } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { FeeEnabledChannel } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { RegisteredPayee } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { RegisteredCounterpartyPayee } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { ForwardRelayerAddress } from "me-chain-client-ts/ibc.applications.fee.v1/types"
import { Metadata } from "me-chain-client-ts/ibc.applications.fee.v1/types"


export { IncentivizedAcknowledgement, Fee, PacketFee, PacketFees, IdentifiedPacketFees, FeeEnabledChannel, RegisteredPayee, RegisteredCounterpartyPayee, ForwardRelayerAddress, Metadata };

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
				IncentivizedPackets: {},
				IncentivizedPacket: {},
				IncentivizedPacketsForChannel: {},
				TotalRecvFees: {},
				TotalAckFees: {},
				TotalTimeoutFees: {},
				Payee: {},
				CounterpartyPayee: {},
				FeeEnabledChannels: {},
				FeeEnabledChannel: {},
				
				_Structure: {
						IncentivizedAcknowledgement: getStructure(IncentivizedAcknowledgement.fromPartial({})),
						Fee: getStructure(Fee.fromPartial({})),
						PacketFee: getStructure(PacketFee.fromPartial({})),
						PacketFees: getStructure(PacketFees.fromPartial({})),
						IdentifiedPacketFees: getStructure(IdentifiedPacketFees.fromPartial({})),
						FeeEnabledChannel: getStructure(FeeEnabledChannel.fromPartial({})),
						RegisteredPayee: getStructure(RegisteredPayee.fromPartial({})),
						RegisteredCounterpartyPayee: getStructure(RegisteredCounterpartyPayee.fromPartial({})),
						ForwardRelayerAddress: getStructure(ForwardRelayerAddress.fromPartial({})),
						Metadata: getStructure(Metadata.fromPartial({})),
						
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
				getIncentivizedPackets: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.IncentivizedPackets[JSON.stringify(params)] ?? {}
		},
				getIncentivizedPacket: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.IncentivizedPacket[JSON.stringify(params)] ?? {}
		},
				getIncentivizedPacketsForChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.IncentivizedPacketsForChannel[JSON.stringify(params)] ?? {}
		},
				getTotalRecvFees: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalRecvFees[JSON.stringify(params)] ?? {}
		},
				getTotalAckFees: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalAckFees[JSON.stringify(params)] ?? {}
		},
				getTotalTimeoutFees: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalTimeoutFees[JSON.stringify(params)] ?? {}
		},
				getPayee: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Payee[JSON.stringify(params)] ?? {}
		},
				getCounterpartyPayee: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CounterpartyPayee[JSON.stringify(params)] ?? {}
		},
				getFeeEnabledChannels: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FeeEnabledChannels[JSON.stringify(params)] ?? {}
		},
				getFeeEnabledChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FeeEnabledChannel[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: ibc.applications.fee.v1 initialized!')
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
		
		
		
		 		
		
		
		async QueryIncentivizedPackets({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryIncentivizedPackets(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.IbcApplicationsFeeV1.query.queryIncentivizedPackets({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'IncentivizedPackets', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryIncentivizedPackets', payload: { options: { all }, params: {...key},query }})
				return getters['getIncentivizedPackets']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryIncentivizedPackets API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryIncentivizedPacket({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryIncentivizedPacket( key.packet_id.channel_id,  key.packet_id.port_id,  key.packet_id.sequence)).data
				
					
				commit('QUERY', { query: 'IncentivizedPacket', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryIncentivizedPacket', payload: { options: { all }, params: {...key},query }})
				return getters['getIncentivizedPacket']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryIncentivizedPacket API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryIncentivizedPacketsForChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryIncentivizedPacketsForChannel( key.channel_id,  key.port_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.IbcApplicationsFeeV1.query.queryIncentivizedPacketsForChannel( key.channel_id,  key.port_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'IncentivizedPacketsForChannel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryIncentivizedPacketsForChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getIncentivizedPacketsForChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryIncentivizedPacketsForChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalRecvFees({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryTotalRecvFees( key.packet_id.channel_id,  key.packet_id.port_id,  key.packet_id.sequence)).data
				
					
				commit('QUERY', { query: 'TotalRecvFees', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalRecvFees', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalRecvFees']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalRecvFees API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalAckFees({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryTotalAckFees( key.packet_id.channel_id,  key.packet_id.port_id,  key.packet_id.sequence)).data
				
					
				commit('QUERY', { query: 'TotalAckFees', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalAckFees', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalAckFees']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalAckFees API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalTimeoutFees({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryTotalTimeoutFees( key.packet_id.channel_id,  key.packet_id.port_id,  key.packet_id.sequence)).data
				
					
				commit('QUERY', { query: 'TotalTimeoutFees', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalTimeoutFees', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalTimeoutFees']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalTimeoutFees API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPayee({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryPayee( key.channel_id,  key.relayer)).data
				
					
				commit('QUERY', { query: 'Payee', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPayee', payload: { options: { all }, params: {...key},query }})
				return getters['getPayee']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPayee API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCounterpartyPayee({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryCounterpartyPayee( key.channel_id,  key.relayer)).data
				
					
				commit('QUERY', { query: 'CounterpartyPayee', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCounterpartyPayee', payload: { options: { all }, params: {...key},query }})
				return getters['getCounterpartyPayee']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCounterpartyPayee API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFeeEnabledChannels({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryFeeEnabledChannels(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.IbcApplicationsFeeV1.query.queryFeeEnabledChannels({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FeeEnabledChannels', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFeeEnabledChannels', payload: { options: { all }, params: {...key},query }})
				return getters['getFeeEnabledChannels']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFeeEnabledChannels API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFeeEnabledChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.IbcApplicationsFeeV1.query.queryFeeEnabledChannel( key.channel_id,  key.port_id)).data
				
					
				commit('QUERY', { query: 'FeeEnabledChannel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFeeEnabledChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getFeeEnabledChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFeeEnabledChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgPayPacketFee({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.IbcApplicationsFeeV1.tx.sendMsgPayPacketFee({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPayPacketFee:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPayPacketFee:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPayPacketFeeAsync({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.IbcApplicationsFeeV1.tx.sendMsgPayPacketFeeAsync({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPayPacketFeeAsync:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPayPacketFeeAsync:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgPayPacketFee({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.IbcApplicationsFeeV1.tx.msgPayPacketFee({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPayPacketFee:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPayPacketFee:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPayPacketFeeAsync({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.IbcApplicationsFeeV1.tx.msgPayPacketFeeAsync({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPayPacketFeeAsync:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPayPacketFeeAsync:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}