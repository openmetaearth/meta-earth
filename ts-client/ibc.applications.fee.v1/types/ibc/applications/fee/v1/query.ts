/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { FeeEnabledChannel } from "./genesis";

export const protobufPackage = "ibc.applications.fee.v1";

/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination:
    | PageRequest
    | undefined;
  /** block height at which to query */
  queryHeight: number;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
}

/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId:
    | PacketId
    | undefined;
  /** block height at which to query */
  queryHeight: number;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees | undefined;
}

/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: number;
}

/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
}

/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}

/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}

/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}

/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}

/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}

/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}

/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}

/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination:
    | PageRequest
    | undefined;
  /** block height at which to query */
  queryHeight: number;
}

/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
}

/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}

function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return { pagination: undefined, queryHeight: 0 };
}

export const QueryIncentivizedPacketsRequest = {
  encode(message: QueryIncentivizedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== 0) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
    };
  },

  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = Math.round(message.queryHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.queryHeight = object.queryHeight ?? 0;
    return message;
  },
};

function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return { incentivizedPackets: [] };
}

export const QueryIncentivizedPacketsResponse = {
  encode(message: QueryIncentivizedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets)
        ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return { packetId: undefined, queryHeight: 0 };
}

export const QueryIncentivizedPacketRequest = {
  encode(message: QueryIncentivizedPacketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== 0) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
    };
  },

  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = Math.round(message.queryHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    message.queryHeight = object.queryHeight ?? 0;
    return message;
  },
};

function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return { incentivizedPacket: undefined };
}

export const QueryIncentivizedPacketResponse = {
  encode(message: QueryIncentivizedPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: isSet(object.incentivizedPacket)
        ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket)
        : undefined,
    };
  },

  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined && (obj.incentivizedPacket = message.incentivizedPacket
      ? IdentifiedPacketFees.toJSON(message.incentivizedPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null)
      ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket)
      : undefined;
    return message;
  },
};

function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return { pagination: undefined, portId: "", channelId: "", queryHeight: 0 };
}

export const QueryIncentivizedPacketsForChannelRequest = {
  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== 0) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
    };
  },

  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = Math.round(message.queryHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight ?? 0;
    return message;
  },
};

function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return { incentivizedPackets: [] };
}

export const QueryIncentivizedPacketsForChannelResponse = {
  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets)
        ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalRecvFeesRequest = {
  encode(message: QueryTotalRecvFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesRequest>, I>>(object: I): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return { recvFees: [] };
}

export const QueryTotalRecvFeesResponse = {
  encode(message: QueryTotalRecvFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesResponse {
    return { recvFees: Array.isArray(object?.recvFees) ? object.recvFees.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.recvFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesResponse>, I>>(object: I): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalAckFeesRequest = {
  encode(message: QueryTotalAckFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesRequest>, I>>(object: I): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return { ackFees: [] };
}

export const QueryTotalAckFeesResponse = {
  encode(message: QueryTotalAckFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesResponse {
    return { ackFees: Array.isArray(object?.ackFees) ? object.ackFees.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.ackFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesResponse>, I>>(object: I): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalTimeoutFeesRequest = {
  encode(message: QueryTotalTimeoutFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesRequest>, I>>(object: I): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return { timeoutFees: [] };
}

export const QueryTotalTimeoutFeesResponse = {
  encode(message: QueryTotalTimeoutFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeoutFees) ? object.timeoutFees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesResponse>, I>>(
    object: I,
  ): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return { channelId: "", relayer: "" };
}

export const QueryPayeeRequest = {
  encode(message: QueryPayeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPayeeRequest>, I>>(object: I): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return { payeeAddress: "" };
}

export const QueryPayeeResponse = {
  encode(message: QueryPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeResponse {
    return { payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : "" };
  },

  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPayeeResponse>, I>>(object: I): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
};

function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return { channelId: "", relayer: "" };
}

export const QueryCounterpartyPayeeRequest = {
  encode(message: QueryCounterpartyPayeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeRequest>, I>>(
    object: I,
  ): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return { counterpartyPayee: "" };
}

export const QueryCounterpartyPayeeResponse = {
  encode(message: QueryCounterpartyPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    return { counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "" };
  },

  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeResponse>, I>>(
    object: I,
  ): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
};

function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return { pagination: undefined, queryHeight: 0 };
}

export const QueryFeeEnabledChannelsRequest = {
  encode(message: QueryFeeEnabledChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== 0) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
    };
  },

  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = Math.round(message.queryHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsRequest>, I>>(
    object: I,
  ): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.queryHeight = object.queryHeight ?? 0;
    return message;
  },
};

function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return { feeEnabledChannels: [] };
}

export const QueryFeeEnabledChannelsResponse = {
  encode(message: QueryFeeEnabledChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels)
        ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsResponse>, I>>(
    object: I,
  ): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return { portId: "", channelId: "" };
}

export const QueryFeeEnabledChannelRequest = {
  encode(message: QueryFeeEnabledChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelRequest>, I>>(
    object: I,
  ): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return { feeEnabled: false };
}

export const QueryFeeEnabledChannelResponse = {
  encode(message: QueryFeeEnabledChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    return { feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false };
  },

  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelResponse>, I>>(
    object: I,
  ): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
};

/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel(
    request: QueryIncentivizedPacketsForChannelRequest,
  ): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
    this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
    this.IncentivizedPacketsForChannel = this.IncentivizedPacketsForChannel.bind(this);
    this.TotalRecvFees = this.TotalRecvFees.bind(this);
    this.TotalAckFees = this.TotalAckFees.bind(this);
    this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
    this.Payee = this.Payee.bind(this);
    this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
    this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
    this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
  }
  IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then((data) => QueryIncentivizedPacketsResponse.decode(new _m0.Reader(data)));
  }

  IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then((data) => QueryIncentivizedPacketResponse.decode(new _m0.Reader(data)));
  }

  IncentivizedPacketsForChannel(
    request: QueryIncentivizedPacketsForChannelRequest,
  ): Promise<QueryIncentivizedPacketsForChannelResponse> {
    const data = QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then((data) => QueryIncentivizedPacketsForChannelResponse.decode(new _m0.Reader(data)));
  }

  TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then((data) => QueryTotalRecvFeesResponse.decode(new _m0.Reader(data)));
  }

  TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then((data) => QueryTotalAckFeesResponse.decode(new _m0.Reader(data)));
  }

  TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then((data) => QueryTotalTimeoutFeesResponse.decode(new _m0.Reader(data)));
  }

  Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse> {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then((data) => QueryPayeeResponse.decode(new _m0.Reader(data)));
  }

  CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then((data) => QueryCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
  }

  FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then((data) => QueryFeeEnabledChannelsResponse.decode(new _m0.Reader(data)));
  }

  FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then((data) => QueryFeeEnabledChannelResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
