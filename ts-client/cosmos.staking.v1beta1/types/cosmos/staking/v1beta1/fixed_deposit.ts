/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";

export const protobufPackage = "cosmos.staking.v1beta1";

export enum FixedDepositState {
  ALL_STATE = 0,
  NOT_EXPIRED = 1,
  EXPIRED = 2,
  UNRECOGNIZED = -1,
}

export function fixedDepositStateFromJSON(object: any): FixedDepositState {
  switch (object) {
    case 0:
    case "ALL_STATE":
      return FixedDepositState.ALL_STATE;
    case 1:
    case "NOT_EXPIRED":
      return FixedDepositState.NOT_EXPIRED;
    case 2:
    case "EXPIRED":
      return FixedDepositState.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FixedDepositState.UNRECOGNIZED;
  }
}

export function fixedDepositStateToJSON(object: FixedDepositState): string {
  switch (object) {
    case FixedDepositState.ALL_STATE:
      return "ALL_STATE";
    case FixedDepositState.NOT_EXPIRED:
      return "NOT_EXPIRED";
    case FixedDepositState.EXPIRED:
      return "EXPIRED";
    case FixedDepositState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum fixedDepositCfgStatus {
  FIXED_DEPOSIT_CFG_ACTIVE = 0,
  FIXED_DEPOSIT_CFG_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function fixedDepositCfgStatusFromJSON(object: any): fixedDepositCfgStatus {
  switch (object) {
    case 0:
    case "FIXED_DEPOSIT_CFG_ACTIVE":
      return fixedDepositCfgStatus.FIXED_DEPOSIT_CFG_ACTIVE;
    case 1:
    case "FIXED_DEPOSIT_CFG_INACTIVE":
      return fixedDepositCfgStatus.FIXED_DEPOSIT_CFG_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return fixedDepositCfgStatus.UNRECOGNIZED;
  }
}

export function fixedDepositCfgStatusToJSON(object: fixedDepositCfgStatus): string {
  switch (object) {
    case fixedDepositCfgStatus.FIXED_DEPOSIT_CFG_ACTIVE:
      return "FIXED_DEPOSIT_CFG_ACTIVE";
    case fixedDepositCfgStatus.FIXED_DEPOSIT_CFG_INACTIVE:
      return "FIXED_DEPOSIT_CFG_INACTIVE";
    case fixedDepositCfgStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FixedDeposit {
  id: number;
  account: string;
  principal: Coin | undefined;
  interest: Coin | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
  term: number;
  rate: string;
}

export interface FixedDepositTotal {
  Amount: Coin | undefined;
}

export interface FixedDepositCfg {
  regionId: string;
  term: number;
  rate: string;
  status: fixedDepositCfgStatus;
}

function createBaseFixedDeposit(): FixedDeposit {
  return {
    id: 0,
    account: "",
    principal: undefined,
    interest: undefined,
    startTime: undefined,
    endTime: undefined,
    term: 0,
    rate: "",
  };
}

export const FixedDeposit = {
  encode(message: FixedDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(26).fork()).ldelim();
    }
    if (message.interest !== undefined) {
      Coin.encode(message.interest, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.term !== 0) {
      writer.uint32(56).int64(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(66).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.interest = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.term = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDeposit {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      account: isSet(object.account) ? String(object.account) : "",
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      interest: isSet(object.interest) ? Coin.fromJSON(object.interest) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      term: isSet(object.term) ? Number(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: FixedDeposit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.account !== undefined && (obj.account = message.account);
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.interest !== undefined && (obj.interest = message.interest ? Coin.toJSON(message.interest) : undefined);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.term !== undefined && (obj.term = Math.round(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FixedDeposit>, I>>(object: I): FixedDeposit {
    const message = createBaseFixedDeposit();
    message.id = object.id ?? 0;
    message.account = object.account ?? "";
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Coin.fromPartial(object.principal)
      : undefined;
    message.interest = (object.interest !== undefined && object.interest !== null)
      ? Coin.fromPartial(object.interest)
      : undefined;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    return message;
  },
};

function createBaseFixedDepositTotal(): FixedDepositTotal {
  return { Amount: undefined };
}

export const FixedDepositTotal = {
  encode(message: FixedDepositTotal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined) {
      Coin.encode(message.Amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedDepositTotal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedDepositTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDepositTotal {
    return { Amount: isSet(object.Amount) ? Coin.fromJSON(object.Amount) : undefined };
  },

  toJSON(message: FixedDepositTotal): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.Amount = message.Amount ? Coin.toJSON(message.Amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FixedDepositTotal>, I>>(object: I): FixedDepositTotal {
    const message = createBaseFixedDepositTotal();
    message.Amount = (object.Amount !== undefined && object.Amount !== null)
      ? Coin.fromPartial(object.Amount)
      : undefined;
    return message;
  },
};

function createBaseFixedDepositCfg(): FixedDepositCfg {
  return { regionId: "", term: 0, rate: "", status: 0 };
}

export const FixedDepositCfg = {
  encode(message: FixedDepositCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(16).int64(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(message.rate);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedDepositCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedDepositCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.term = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.rate = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedDepositCfg {
    return {
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
      status: isSet(object.status) ? fixedDepositCfgStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: FixedDepositCfg): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    message.status !== undefined && (obj.status = fixedDepositCfgStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FixedDepositCfg>, I>>(object: I): FixedDepositCfg {
    const message = createBaseFixedDepositCfg();
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
