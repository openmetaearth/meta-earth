/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.staking.v1beta1";

export interface Record {
  recordNumber: string;
  url: string;
  from: string;
}

export interface ReviewRecord {
  recordHash: string;
  actionNumber: string;
  recordResult: string;
  reviewedAddress: string;
}

function createBaseRecord(): Record {
  return { recordNumber: "", url: "", from: "" };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordNumber !== "") {
      writer.uint32(10).string(message.recordNumber);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordNumber = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record {
    return {
      recordNumber: isSet(object.recordNumber) ? String(object.recordNumber) : "",
      url: isSet(object.url) ? String(object.url) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.recordNumber !== undefined && (obj.recordNumber = message.recordNumber);
    message.url !== undefined && (obj.url = message.url);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.recordNumber = object.recordNumber ?? "";
    message.url = object.url ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseReviewRecord(): ReviewRecord {
  return { recordHash: "", actionNumber: "", recordResult: "", reviewedAddress: "" };
}

export const ReviewRecord = {
  encode(message: ReviewRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordHash !== "") {
      writer.uint32(10).string(message.recordHash);
    }
    if (message.actionNumber !== "") {
      writer.uint32(18).string(message.actionNumber);
    }
    if (message.recordResult !== "") {
      writer.uint32(26).string(message.recordResult);
    }
    if (message.reviewedAddress !== "") {
      writer.uint32(34).string(message.reviewedAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordHash = reader.string();
          break;
        case 2:
          message.actionNumber = reader.string();
          break;
        case 3:
          message.recordResult = reader.string();
          break;
        case 4:
          message.reviewedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReviewRecord {
    return {
      recordHash: isSet(object.recordHash) ? String(object.recordHash) : "",
      actionNumber: isSet(object.actionNumber) ? String(object.actionNumber) : "",
      recordResult: isSet(object.recordResult) ? String(object.recordResult) : "",
      reviewedAddress: isSet(object.reviewedAddress) ? String(object.reviewedAddress) : "",
    };
  },

  toJSON(message: ReviewRecord): unknown {
    const obj: any = {};
    message.recordHash !== undefined && (obj.recordHash = message.recordHash);
    message.actionNumber !== undefined && (obj.actionNumber = message.actionNumber);
    message.recordResult !== undefined && (obj.recordResult = message.recordResult);
    message.reviewedAddress !== undefined && (obj.reviewedAddress = message.reviewedAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReviewRecord>, I>>(object: I): ReviewRecord {
    const message = createBaseReviewRecord();
    message.recordHash = object.recordHash ?? "";
    message.actionNumber = object.actionNumber ?? "";
    message.recordResult = object.recordResult ?? "";
    message.reviewedAddress = object.reviewedAddress ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
