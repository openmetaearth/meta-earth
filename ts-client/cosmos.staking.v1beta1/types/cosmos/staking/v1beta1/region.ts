/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.staking.v1beta1";

export enum regionAccountType {
  REGION_ACCOUNT_TYPE_BASE = 0,
  REGION_ACCOUNT_TYPE_DEPOSIT_INTEREST = 1,
  UNRECOGNIZED = -1,
}

export function regionAccountTypeFromJSON(object: any): regionAccountType {
  switch (object) {
    case 0:
    case "REGION_ACCOUNT_TYPE_BASE":
      return regionAccountType.REGION_ACCOUNT_TYPE_BASE;
    case 1:
    case "REGION_ACCOUNT_TYPE_DEPOSIT_INTEREST":
      return regionAccountType.REGION_ACCOUNT_TYPE_DEPOSIT_INTEREST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return regionAccountType.UNRECOGNIZED;
  }
}

export function regionAccountTypeToJSON(object: regionAccountType): string {
  switch (object) {
    case regionAccountType.REGION_ACCOUNT_TYPE_BASE:
      return "REGION_ACCOUNT_TYPE_BASE";
    case regionAccountType.REGION_ACCOUNT_TYPE_DEPOSIT_INTEREST:
      return "REGION_ACCOUNT_TYPE_DEPOSIT_INTEREST";
    case regionAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Region defines the region a meid user belongs to. */
export interface Region {
  regionId: string;
  name: string;
  creator: string;
  operatorAddress: string;
  nftClassId: string;
  regionTreasureAddr: string;
  depositInterestAddr: string;
  /** tokens define the region tokens share */
  regionShare: string;
  delegateInterest: string;
  delegateAmount: string;
}

function createBaseRegion(): Region {
  return {
    regionId: "",
    name: "",
    creator: "",
    operatorAddress: "",
    nftClassId: "",
    regionTreasureAddr: "",
    depositInterestAddr: "",
    regionShare: "",
    delegateInterest: "",
    delegateAmount: "",
  };
}

export const Region = {
  encode(message: Region, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    if (message.nftClassId !== "") {
      writer.uint32(42).string(message.nftClassId);
    }
    if (message.regionTreasureAddr !== "") {
      writer.uint32(50).string(message.regionTreasureAddr);
    }
    if (message.depositInterestAddr !== "") {
      writer.uint32(66).string(message.depositInterestAddr);
    }
    if (message.regionShare !== "") {
      writer.uint32(74).string(message.regionShare);
    }
    if (message.delegateInterest !== "") {
      writer.uint32(82).string(message.delegateInterest);
    }
    if (message.delegateAmount !== "") {
      writer.uint32(90).string(message.delegateAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Region {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.operatorAddress = reader.string();
          break;
        case 5:
          message.nftClassId = reader.string();
          break;
        case 6:
          message.regionTreasureAddr = reader.string();
          break;
        case 8:
          message.depositInterestAddr = reader.string();
          break;
        case 9:
          message.regionShare = reader.string();
          break;
        case 10:
          message.delegateInterest = reader.string();
          break;
        case 11:
          message.delegateAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Region {
    return {
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      nftClassId: isSet(object.nftClassId) ? String(object.nftClassId) : "",
      regionTreasureAddr: isSet(object.regionTreasureAddr) ? String(object.regionTreasureAddr) : "",
      depositInterestAddr: isSet(object.depositInterestAddr) ? String(object.depositInterestAddr) : "",
      regionShare: isSet(object.regionShare) ? String(object.regionShare) : "",
      delegateInterest: isSet(object.delegateInterest) ? String(object.delegateInterest) : "",
      delegateAmount: isSet(object.delegateAmount) ? String(object.delegateAmount) : "",
    };
  },

  toJSON(message: Region): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.name !== undefined && (obj.name = message.name);
    message.creator !== undefined && (obj.creator = message.creator);
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.nftClassId !== undefined && (obj.nftClassId = message.nftClassId);
    message.regionTreasureAddr !== undefined && (obj.regionTreasureAddr = message.regionTreasureAddr);
    message.depositInterestAddr !== undefined && (obj.depositInterestAddr = message.depositInterestAddr);
    message.regionShare !== undefined && (obj.regionShare = message.regionShare);
    message.delegateInterest !== undefined && (obj.delegateInterest = message.delegateInterest);
    message.delegateAmount !== undefined && (obj.delegateAmount = message.delegateAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Region>, I>>(object: I): Region {
    const message = createBaseRegion();
    message.regionId = object.regionId ?? "";
    message.name = object.name ?? "";
    message.creator = object.creator ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.nftClassId = object.nftClassId ?? "";
    message.regionTreasureAddr = object.regionTreasureAddr ?? "";
    message.depositInterestAddr = object.depositInterestAddr ?? "";
    message.regionShare = object.regionShare ?? "";
    message.delegateInterest = object.delegateInterest ?? "";
    message.delegateAmount = object.delegateAmount ?? "";
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
