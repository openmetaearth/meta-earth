/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.staking.v1beta1";

export interface Kyc {
  account: string;
  creator: string;
  regionId: string;
  regionName: string;
}

export interface SiidNFT {
  creator: string;
  account: string;
  regionId: string;
  regionName: string;
  siid: string;
  nftId: string;
}

function createBaseKyc(): Kyc {
  return { account: "", creator: "", regionId: "", regionName: "" };
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
    if (message.regionName !== "") {
      writer.uint32(34).string(message.regionName);
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
      regionName: isSet(object.regionName) ? String(object.regionName) : "",
    };
  },

  toJSON(message: Kyc): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Kyc>, I>>(object: I): Kyc {
    const message = createBaseKyc();
    message.account = object.account ?? "";
    message.creator = object.creator ?? "";
    message.regionId = object.regionId ?? "";
    message.regionName = object.regionName ?? "";
    return message;
  },
};

function createBaseSiidNFT(): SiidNFT {
  return { creator: "", account: "", regionId: "", regionName: "", siid: "", nftId: "" };
}

export const SiidNFT = {
  encode(message: SiidNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.regionName !== "") {
      writer.uint32(34).string(message.regionName);
    }
    if (message.siid !== "") {
      writer.uint32(42).string(message.siid);
    }
    if (message.nftId !== "") {
      writer.uint32(50).string(message.nftId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiidNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiidNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.regionId = reader.string();
          break;
        case 4:
          message.regionName = reader.string();
          break;
        case 5:
          message.siid = reader.string();
          break;
        case 6:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiidNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      regionName: isSet(object.regionName) ? String(object.regionName) : "",
      siid: isSet(object.siid) ? String(object.siid) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
    };
  },

  toJSON(message: SiidNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.regionName !== undefined && (obj.regionName = message.regionName);
    message.siid !== undefined && (obj.siid = message.siid);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SiidNFT>, I>>(object: I): SiidNFT {
    const message = createBaseSiidNFT();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.regionId = object.regionId ?? "";
    message.regionName = object.regionName ?? "";
    message.siid = object.siid ?? "";
    message.nftId = object.nftId ?? "";
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
