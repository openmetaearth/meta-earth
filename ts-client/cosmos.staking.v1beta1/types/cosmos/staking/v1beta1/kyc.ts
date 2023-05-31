/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.staking.v1beta1";

export interface Kyc {
  account: string;
  creator: string;
  regionId: string;
  nftId: string;
  regionName: string;
}

function createBaseKyc(): Kyc {
  return { account: "", creator: "", regionId: "", nftId: "", regionName: "" };
}

export const Kyc = {
  encode(message: Kyc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.nftId !== "") {
      writer.uint32(34).string(message.nftId);
    }
    if (message.regionName !== "") {
      writer.uint32(42).string(message.regionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Kyc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKyc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.regionId = reader.string();
          break;
        case 4:
          message.nftId = reader.string();
          break;
        case 5:
          message.regionName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Kyc {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      regionName: isSet(object.regionName) ? String(object.regionName) : "",
    };
  },

  toJSON(message: Kyc): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Kyc>, I>>(object: I): Kyc {
    const message = createBaseKyc();
    message.account = object.account ?? "";
    message.creator = object.creator ?? "";
    message.regionId = object.regionId ?? "";
    message.nftId = object.nftId ?? "";
    message.regionName = object.regionName ?? "";
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
