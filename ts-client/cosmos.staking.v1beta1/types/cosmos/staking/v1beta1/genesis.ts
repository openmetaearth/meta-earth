/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FixedDeposit } from "./fixed_deposit";
import { Meid, MeidNFT } from "./meid";
import { Region } from "./region";
import { Delegation, Params, Redelegation, Stake, UnbondingDelegation, UnbondingStake, Validator } from "./staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params:
    | Params
    | undefined;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  /** stakes defines the stakes active at genesis. */
  stakes: Stake[];
  /** unbonding_stakes defines the unbonding stakes active at genesis. */
  unbondingStakes: UnbondingStake[];
  regionList: Region[];
  meidList: Meid[];
  fixedDepositList: FixedDeposit[];
  fixedDepositCount: number;
  exported: boolean;
  meidNFTList: MeidNFT[];
}

/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    stakes: [],
    unbondingStakes: [],
    regionList: [],
    meidList: [],
    fixedDepositList: [],
    fixedDepositCount: 0,
    exported: false,
    meidNFTList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.unbondingStakes) {
      UnbondingStake.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.regionList) {
      Region.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.meidList) {
      Meid.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.fixedDepositList) {
      FixedDeposit.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.fixedDepositCount !== 0) {
      writer.uint32(104).uint64(message.fixedDepositCount);
    }
    if (message.exported === true) {
      writer.uint32(120).bool(message.exported);
    }
    for (const v of message.meidNFTList) {
      MeidNFT.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
          break;
        case 9:
          message.unbondingStakes.push(UnbondingStake.decode(reader, reader.uint32()));
          break;
        case 10:
          message.regionList.push(Region.decode(reader, reader.uint32()));
          break;
        case 11:
          message.meidList.push(Meid.decode(reader, reader.uint32()));
          break;
        case 12:
          message.fixedDepositList.push(FixedDeposit.decode(reader, reader.uint32()));
          break;
        case 13:
          message.fixedDepositCount = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.exported = reader.bool();
          break;
        case 16:
          message.meidNFTList.push(MeidNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
      lastValidatorPowers: Array.isArray(object?.lastValidatorPowers)
        ? object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e))
        : [],
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      unbondingDelegations: Array.isArray(object?.unbondingDelegations)
        ? object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => Redelegation.fromJSON(e))
        : [],
      stakes: Array.isArray(object?.stakes) ? object.stakes.map((e: any) => Stake.fromJSON(e)) : [],
      unbondingStakes: Array.isArray(object?.unbondingStakes)
        ? object.unbondingStakes.map((e: any) => UnbondingStake.fromJSON(e))
        : [],
      regionList: Array.isArray(object?.regionList) ? object.regionList.map((e: any) => Region.fromJSON(e)) : [],
      meidList: Array.isArray(object?.meidList) ? object.meidList.map((e: any) => Meid.fromJSON(e)) : [],
      fixedDepositList: Array.isArray(object?.fixedDepositList)
        ? object.fixedDepositList.map((e: any) => FixedDeposit.fromJSON(e))
        : [],
      fixedDepositCount: isSet(object.fixedDepositCount) ? Number(object.fixedDepositCount) : 0,
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
      meidNFTList: Array.isArray(object?.meidNFTList) ? object.meidNFTList.map((e: any) => MeidNFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined
      && (obj.lastTotalPower = base64FromBytes(
        message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array(),
      ));
    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map((e) => e ? LastValidatorPower.toJSON(e) : undefined);
    } else {
      obj.lastValidatorPowers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingDelegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    if (message.stakes) {
      obj.stakes = message.stakes.map((e) => e ? Stake.toJSON(e) : undefined);
    } else {
      obj.stakes = [];
    }
    if (message.unbondingStakes) {
      obj.unbondingStakes = message.unbondingStakes.map((e) => e ? UnbondingStake.toJSON(e) : undefined);
    } else {
      obj.unbondingStakes = [];
    }
    if (message.regionList) {
      obj.regionList = message.regionList.map((e) => e ? Region.toJSON(e) : undefined);
    } else {
      obj.regionList = [];
    }
    if (message.meidList) {
      obj.meidList = message.meidList.map((e) => e ? Meid.toJSON(e) : undefined);
    } else {
      obj.meidList = [];
    }
    if (message.fixedDepositList) {
      obj.fixedDepositList = message.fixedDepositList.map((e) => e ? FixedDeposit.toJSON(e) : undefined);
    } else {
      obj.fixedDepositList = [];
    }
    message.fixedDepositCount !== undefined && (obj.fixedDepositCount = Math.round(message.fixedDepositCount));
    message.exported !== undefined && (obj.exported = message.exported);
    if (message.meidNFTList) {
      obj.meidNFTList = message.meidNFTList.map((e) => e ? MeidNFT.toJSON(e) : undefined);
    } else {
      obj.meidNFTList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.stakes = object.stakes?.map((e) => Stake.fromPartial(e)) || [];
    message.unbondingStakes = object.unbondingStakes?.map((e) => UnbondingStake.fromPartial(e)) || [];
    message.regionList = object.regionList?.map((e) => Region.fromPartial(e)) || [];
    message.meidList = object.meidList?.map((e) => Meid.fromPartial(e)) || [];
    message.fixedDepositList = object.fixedDepositList?.map((e) => FixedDeposit.fromPartial(e)) || [];
    message.fixedDepositCount = object.fixedDepositCount ?? 0;
    message.exported = object.exported ?? false;
    message.meidNFTList = object.meidNFTList?.map((e) => MeidNFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastValidatorPower(): LastValidatorPower {
  return { address: "", power: 0 };
}

export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== 0) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastValidatorPower {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? Number(object.power) : 0,
    };
  },

  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = Math.round(message.power));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastValidatorPower>, I>>(object: I): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power ?? 0;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
