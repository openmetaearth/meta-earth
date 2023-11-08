/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";
import { FixedDepositTerm, fixedDepositTermFromJSON, fixedDepositTermToJSON } from "./fixed_deposit";
import { CommissionRates, Description, Params } from "./staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  description: Description | undefined;
  commission: CommissionRates | undefined;
  minSelfStake: string;
  stakerAddress: string;
  validatorAddress: string;
  pubkey: Any | undefined;
  value: Coin | undefined;
}

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}

/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  description: Description | undefined;
  stakerAddress: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commissionRate: string;
  /**
   * string min_self_stake = 4
   *     [(cosmos_proto.scalar) = "cosmos.Int", (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];
   */
  ownerAddress: string;
  operatorAddress: string;
}

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin | undefined;
}

/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount: Coin | undefined;
}

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
  completionTime: Date | undefined;
}

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin | undefined;
  isKyc: boolean;
}

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completionTime: Date | undefined;
}

/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /** amount is always less than or equal to unbonding delegation entry balance */
  amount:
    | Coin
    | undefined;
  /** creation_height is the height which the unbonding took place. */
  creationHeight: number;
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/staking parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}

/**
 * MsgStake defines a SDK message for performing a stake of coins
 * from a staker to a validator.
 */
export interface MsgStake {
  stakerAddress: string;
  validatorAddress: string;
  amount: Coin | undefined;
}

/** MsgStakeResponse defines the Msg/Stake response type. */
export interface MsgStakeResponse {
}

/**
 * MsgUnstake defines a SDK message for performing an unstake from a
 * stake and a validator.
 */
export interface MsgUnstake {
  stakerAddress: string;
  validatorAddress: string;
  amount: Coin | undefined;
}

/** MsgUnstakeResponse defines the Msg/MsgUnstake response type. */
export interface MsgUnstakeResponse {
  completionTime: Date | undefined;
}

export interface MsgDoFixedDeposit {
  account: string;
  principal: Coin | undefined;
  term: FixedDepositTerm;
}

export interface MsgDoFixedDepositResponse {
  id: number;
}

export interface MsgDoFixedWithdraw {
  account: string;
  id: number;
}

export interface MsgDoFixedWithdrawResponse {
  principal: Coin | undefined;
  interest: Coin | undefined;
  term: FixedDepositTerm;
  rate: string;
}

export interface MsgSetFixedDepositInterestRate {
  admin: string;
  term: FixedDepositTerm;
  rate: string;
}

export interface MsgSetFixedDepositInterestRateResponse {
  retcode: string;
}

export interface MsgNewRegion {
  creator: string;
  regionId: string;
  name: string;
  operatorAddress: string;
}

export interface MsgNewRegionResponse {
  regionId: string;
}

export interface MsgRemoveRegion {
  creator: string;
  regionId: string;
}

export interface MsgRemoveRegionResponse {
  retcode: string;
}

export interface MsgNewKyc {
  creator: string;
  account: string;
  inviteAddr: string;
  regionId: string;
}

export interface MsgNewKycResponse {
  retcode: string;
}

export interface MsgRemoveKyc {
  creator: string;
  account: string;
}

export interface MsgRemoveKycResponse {
  retcode: string;
}

export interface MsgNewSiidNFT {
  creator: string;
  account: string;
  regionId: string;
  siid: string;
  meta: string;
  uri: string;
  urihash: string;
}

export interface MsgNewSiidNFTResponse {
  retcode: string;
}

export interface MsgRemoveSiidNFT {
  creator: string;
  account: string;
  siid: string;
}

export interface MsgRemoveSiidNFTResponse {
  retcode: string;
}

export interface MsgTransferKYC {
  fromRegion: string;
  toRegion: string;
  address: string[];
  creator: string;
}

export interface MsgTransferKYCResponse {
}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: undefined,
    commission: undefined,
    minSelfStake: "",
    stakerAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined,
  };
}

export const MsgCreateValidator = {
  encode(message: MsgCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfStake !== "") {
      writer.uint32(26).string(message.minSelfStake);
    }
    if (message.stakerAddress !== "") {
      writer.uint32(34).string(message.stakerAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfStake = reader.string();
          break;
        case 4:
          message.stakerAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      minSelfStake: isSet(object.minSelfStake) ? String(object.minSelfStake) : "",
      stakerAddress: isSet(object.stakerAddress) ? String(object.stakerAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.description !== undefined
      && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined
      && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.minSelfStake !== undefined && (obj.minSelfStake = message.minSelfStake);
    message.stakerAddress !== undefined && (obj.stakerAddress = message.stakerAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(object: I): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.commission = (object.commission !== undefined && object.commission !== null)
      ? CommissionRates.fromPartial(object.commission)
      : undefined;
    message.minSelfStake = object.minSelfStake ?? "";
    message.stakerAddress = object.stakerAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.pubkey = (object.pubkey !== undefined && object.pubkey !== null)
      ? Any.fromPartial(object.pubkey)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}

export const MsgCreateValidatorResponse = {
  encode(_: MsgCreateValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateValidatorResponse {
    return {};
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(_: I): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
};

function createBaseMsgEditValidator(): MsgEditValidator {
  return { description: undefined, stakerAddress: "", commissionRate: "", ownerAddress: "", operatorAddress: "" };
}

export const MsgEditValidator = {
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakerAddress !== "") {
      writer.uint32(18).string(message.stakerAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(42).string(message.operatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.stakerAddress = reader.string();
          break;
        case 3:
          message.commissionRate = reader.string();
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditValidator {
    return {
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      stakerAddress: isSet(object.stakerAddress) ? String(object.stakerAddress) : "",
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
    };
  },

  toJSON(message: MsgEditValidator): unknown {
    const obj: any = {};
    message.description !== undefined
      && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.stakerAddress !== undefined && (obj.stakerAddress = message.stakerAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(object: I): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.stakerAddress = object.stakerAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
};

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}

export const MsgEditValidatorResponse = {
  encode(_: MsgEditValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditValidatorResponse {
    return {};
  },

  toJSON(_: MsgEditValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(_: I): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
};

function createBaseMsgDelegate(): MsgDelegate {
  return { delegatorAddress: "", validatorAddress: "", amount: undefined };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(_: I): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
};

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "", amount: undefined };
}

export const MsgBeginRedelegate = {
  encode(message: MsgBeginRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginRedelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgBeginRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(object: I): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return { completionTime: undefined };
}

export const MsgBeginRedelegateResponse = {
  encode(message: MsgBeginRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginRedelegateResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgBeginRedelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(object: I): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgUndelegate(): MsgUndelegate {
  return { delegatorAddress: "", validatorAddress: "", amount: undefined, isKyc: false };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.isKyc === true) {
      writer.uint32(32).bool(message.isKyc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.isKyc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      isKyc: isSet(object.isKyc) ? Boolean(object.isKyc) : false,
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.isKyc !== undefined && (obj.isKyc = message.isKyc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.isKyc = object.isKyc ?? false;
    return message;
  },
};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return { completionTime: undefined };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(object: I): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return { delegatorAddress: "", validatorAddress: "", amount: undefined, creationHeight: 0 };
}

export const MsgCancelUnbondingDelegation = {
  encode(message: MsgCancelUnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.creationHeight !== 0) {
      writer.uint32(32).int64(message.creationHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelUnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
    };
  },

  toJSON(message: MsgCancelUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUnbondingDelegation>, I>>(object: I): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.creationHeight = object.creationHeight ?? 0;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgStake(): MsgStake {
  return { stakerAddress: "", validatorAddress: "", amount: undefined };
}

export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStake {
    return {
      stakerAddress: isSet(object.stakerAddress) ? String(object.stakerAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.stakerAddress !== undefined && (obj.stakerAddress = message.stakerAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStake>, I>>(object: I): MsgStake {
    const message = createBaseMsgStake();
    message.stakerAddress = object.stakerAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {};
}

export const MsgStakeResponse = {
  encode(_: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStakeResponse {
    return {};
  },

  toJSON(_: MsgStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakeResponse>, I>>(_: I): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  },
};

function createBaseMsgUnstake(): MsgUnstake {
  return { stakerAddress: "", validatorAddress: "", amount: undefined };
}

export const MsgUnstake = {
  encode(message: MsgUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstake {
    return {
      stakerAddress: isSet(object.stakerAddress) ? String(object.stakerAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.stakerAddress !== undefined && (obj.stakerAddress = message.stakerAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstake>, I>>(object: I): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.stakerAddress = object.stakerAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return { completionTime: undefined };
}

export const MsgUnstakeResponse = {
  encode(message: MsgUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakeResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgUnstakeResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakeResponse>, I>>(object: I): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgDoFixedDeposit(): MsgDoFixedDeposit {
  return { account: "", principal: undefined, term: 0 };
}

export const MsgDoFixedDeposit = {
  encode(message: MsgDoFixedDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.term !== 0) {
      writer.uint32(32).int32(message.term);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDoFixedDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDoFixedDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.term = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoFixedDeposit {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      term: isSet(object.term) ? fixedDepositTermFromJSON(object.term) : 0,
    };
  },

  toJSON(message: MsgDoFixedDeposit): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.term !== undefined && (obj.term = fixedDepositTermToJSON(message.term));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDoFixedDeposit>, I>>(object: I): MsgDoFixedDeposit {
    const message = createBaseMsgDoFixedDeposit();
    message.account = object.account ?? "";
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Coin.fromPartial(object.principal)
      : undefined;
    message.term = object.term ?? 0;
    return message;
  },
};

function createBaseMsgDoFixedDepositResponse(): MsgDoFixedDepositResponse {
  return { id: 0 };
}

export const MsgDoFixedDepositResponse = {
  encode(message: MsgDoFixedDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDoFixedDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDoFixedDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoFixedDepositResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgDoFixedDepositResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDoFixedDepositResponse>, I>>(object: I): MsgDoFixedDepositResponse {
    const message = createBaseMsgDoFixedDepositResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDoFixedWithdraw(): MsgDoFixedWithdraw {
  return { account: "", id: 0 };
}

export const MsgDoFixedWithdraw = {
  encode(message: MsgDoFixedWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDoFixedWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDoFixedWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoFixedWithdraw {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDoFixedWithdraw): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDoFixedWithdraw>, I>>(object: I): MsgDoFixedWithdraw {
    const message = createBaseMsgDoFixedWithdraw();
    message.account = object.account ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDoFixedWithdrawResponse(): MsgDoFixedWithdrawResponse {
  return { principal: undefined, interest: undefined, term: 0, rate: "" };
}

export const MsgDoFixedWithdrawResponse = {
  encode(message: MsgDoFixedWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(10).fork()).ldelim();
    }
    if (message.interest !== undefined) {
      Coin.encode(message.interest, writer.uint32(18).fork()).ldelim();
    }
    if (message.term !== 0) {
      writer.uint32(24).int32(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(34).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDoFixedWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDoFixedWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.interest = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.term = reader.int32() as any;
          break;
        case 4:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoFixedWithdrawResponse {
    return {
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      interest: isSet(object.interest) ? Coin.fromJSON(object.interest) : undefined,
      term: isSet(object.term) ? fixedDepositTermFromJSON(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: MsgDoFixedWithdrawResponse): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.interest !== undefined && (obj.interest = message.interest ? Coin.toJSON(message.interest) : undefined);
    message.term !== undefined && (obj.term = fixedDepositTermToJSON(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDoFixedWithdrawResponse>, I>>(object: I): MsgDoFixedWithdrawResponse {
    const message = createBaseMsgDoFixedWithdrawResponse();
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? Coin.fromPartial(object.principal)
      : undefined;
    message.interest = (object.interest !== undefined && object.interest !== null)
      ? Coin.fromPartial(object.interest)
      : undefined;
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    return message;
  },
};

function createBaseMsgSetFixedDepositInterestRate(): MsgSetFixedDepositInterestRate {
  return { admin: "", term: 0, rate: "" };
}

export const MsgSetFixedDepositInterestRate = {
  encode(message: MsgSetFixedDepositInterestRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.term !== 0) {
      writer.uint32(16).int32(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositInterestRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositInterestRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.term = reader.int32() as any;
          break;
        case 3:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDepositInterestRate {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      term: isSet(object.term) ? fixedDepositTermFromJSON(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: MsgSetFixedDepositInterestRate): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.term !== undefined && (obj.term = fixedDepositTermToJSON(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositInterestRate>, I>>(
    object: I,
  ): MsgSetFixedDepositInterestRate {
    const message = createBaseMsgSetFixedDepositInterestRate();
    message.admin = object.admin ?? "";
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    return message;
  },
};

function createBaseMsgSetFixedDepositInterestRateResponse(): MsgSetFixedDepositInterestRateResponse {
  return { retcode: "" };
}

export const MsgSetFixedDepositInterestRateResponse = {
  encode(message: MsgSetFixedDepositInterestRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositInterestRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositInterestRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFixedDepositInterestRateResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgSetFixedDepositInterestRateResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositInterestRateResponse>, I>>(
    object: I,
  ): MsgSetFixedDepositInterestRateResponse {
    const message = createBaseMsgSetFixedDepositInterestRateResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgNewRegion(): MsgNewRegion {
  return { creator: "", regionId: "", name: "", operatorAddress: "" };
}

export const MsgNewRegion = {
  encode(message: MsgNewRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRegion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRegion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewRegion {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
    };
  },

  toJSON(message: MsgNewRegion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.name !== undefined && (obj.name = message.name);
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewRegion>, I>>(object: I): MsgNewRegion {
    const message = createBaseMsgNewRegion();
    message.creator = object.creator ?? "";
    message.regionId = object.regionId ?? "";
    message.name = object.name ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
};

function createBaseMsgNewRegionResponse(): MsgNewRegionResponse {
  return { regionId: "" };
}

export const MsgNewRegionResponse = {
  encode(message: MsgNewRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewRegionResponse {
    return { regionId: isSet(object.regionId) ? String(object.regionId) : "" };
  },

  toJSON(message: MsgNewRegionResponse): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewRegionResponse>, I>>(object: I): MsgNewRegionResponse {
    const message = createBaseMsgNewRegionResponse();
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseMsgRemoveRegion(): MsgRemoveRegion {
  return { creator: "", regionId: "" };
}

export const MsgRemoveRegion = {
  encode(message: MsgRemoveRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRegion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRegion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRegion {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
    };
  },

  toJSON(message: MsgRemoveRegion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveRegion>, I>>(object: I): MsgRemoveRegion {
    const message = createBaseMsgRemoveRegion();
    message.creator = object.creator ?? "";
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseMsgRemoveRegionResponse(): MsgRemoveRegionResponse {
  return { retcode: "" };
}

export const MsgRemoveRegionResponse = {
  encode(message: MsgRemoveRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRegionResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveRegionResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveRegionResponse>, I>>(object: I): MsgRemoveRegionResponse {
    const message = createBaseMsgRemoveRegionResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgNewKyc(): MsgNewKyc {
  return { creator: "", account: "", inviteAddr: "", regionId: "" };
}

export const MsgNewKyc = {
  encode(message: MsgNewKyc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.inviteAddr !== "") {
      writer.uint32(26).string(message.inviteAddr);
    }
    if (message.regionId !== "") {
      writer.uint32(34).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewKyc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewKyc();
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
          message.inviteAddr = reader.string();
          break;
        case 4:
          message.regionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewKyc {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      inviteAddr: isSet(object.inviteAddr) ? String(object.inviteAddr) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
    };
  },

  toJSON(message: MsgNewKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.inviteAddr !== undefined && (obj.inviteAddr = message.inviteAddr);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewKyc>, I>>(object: I): MsgNewKyc {
    const message = createBaseMsgNewKyc();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.inviteAddr = object.inviteAddr ?? "";
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseMsgNewKycResponse(): MsgNewKycResponse {
  return { retcode: "" };
}

export const MsgNewKycResponse = {
  encode(message: MsgNewKycResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewKycResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewKycResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewKycResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgNewKycResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewKycResponse>, I>>(object: I): MsgNewKycResponse {
    const message = createBaseMsgNewKycResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgRemoveKyc(): MsgRemoveKyc {
  return { creator: "", account: "" };
}

export const MsgRemoveKyc = {
  encode(message: MsgRemoveKyc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveKyc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveKyc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveKyc {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgRemoveKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveKyc>, I>>(object: I): MsgRemoveKyc {
    const message = createBaseMsgRemoveKyc();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseMsgRemoveKycResponse(): MsgRemoveKycResponse {
  return { retcode: "" };
}

export const MsgRemoveKycResponse = {
  encode(message: MsgRemoveKycResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveKycResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveKycResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveKycResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveKycResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveKycResponse>, I>>(object: I): MsgRemoveKycResponse {
    const message = createBaseMsgRemoveKycResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgNewSiidNFT(): MsgNewSiidNFT {
  return { creator: "", account: "", regionId: "", siid: "", meta: "", uri: "", urihash: "" };
}

export const MsgNewSiidNFT = {
  encode(message: MsgNewSiidNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.siid !== "") {
      writer.uint32(34).string(message.siid);
    }
    if (message.meta !== "") {
      writer.uint32(42).string(message.meta);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.urihash !== "") {
      writer.uint32(58).string(message.urihash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewSiidNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewSiidNFT();
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
          message.siid = reader.string();
          break;
        case 5:
          message.meta = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.urihash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewSiidNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      siid: isSet(object.siid) ? String(object.siid) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      urihash: isSet(object.urihash) ? String(object.urihash) : "",
    };
  },

  toJSON(message: MsgNewSiidNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.siid !== undefined && (obj.siid = message.siid);
    message.meta !== undefined && (obj.meta = message.meta);
    message.uri !== undefined && (obj.uri = message.uri);
    message.urihash !== undefined && (obj.urihash = message.urihash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewSiidNFT>, I>>(object: I): MsgNewSiidNFT {
    const message = createBaseMsgNewSiidNFT();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.regionId = object.regionId ?? "";
    message.siid = object.siid ?? "";
    message.meta = object.meta ?? "";
    message.uri = object.uri ?? "";
    message.urihash = object.urihash ?? "";
    return message;
  },
};

function createBaseMsgNewSiidNFTResponse(): MsgNewSiidNFTResponse {
  return { retcode: "" };
}

export const MsgNewSiidNFTResponse = {
  encode(message: MsgNewSiidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewSiidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewSiidNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNewSiidNFTResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgNewSiidNFTResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewSiidNFTResponse>, I>>(object: I): MsgNewSiidNFTResponse {
    const message = createBaseMsgNewSiidNFTResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgRemoveSiidNFT(): MsgRemoveSiidNFT {
  return { creator: "", account: "", siid: "" };
}

export const MsgRemoveSiidNFT = {
  encode(message: MsgRemoveSiidNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.siid !== "") {
      writer.uint32(26).string(message.siid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSiidNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSiidNFT();
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
          message.siid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSiidNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      siid: isSet(object.siid) ? String(object.siid) : "",
    };
  },

  toJSON(message: MsgRemoveSiidNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.siid !== undefined && (obj.siid = message.siid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveSiidNFT>, I>>(object: I): MsgRemoveSiidNFT {
    const message = createBaseMsgRemoveSiidNFT();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.siid = object.siid ?? "";
    return message;
  },
};

function createBaseMsgRemoveSiidNFTResponse(): MsgRemoveSiidNFTResponse {
  return { retcode: "" };
}

export const MsgRemoveSiidNFTResponse = {
  encode(message: MsgRemoveSiidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSiidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSiidNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSiidNFTResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveSiidNFTResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveSiidNFTResponse>, I>>(object: I): MsgRemoveSiidNFTResponse {
    const message = createBaseMsgRemoveSiidNFTResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgTransferKYC(): MsgTransferKYC {
  return { fromRegion: "", toRegion: "", address: [], creator: "" };
}

export const MsgTransferKYC = {
  encode(message: MsgTransferKYC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromRegion !== "") {
      writer.uint32(10).string(message.fromRegion);
    }
    if (message.toRegion !== "") {
      writer.uint32(18).string(message.toRegion);
    }
    for (const v of message.address) {
      writer.uint32(26).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferKYC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferKYC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromRegion = reader.string();
          break;
        case 2:
          message.toRegion = reader.string();
          break;
        case 3:
          message.address.push(reader.string());
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferKYC {
    return {
      fromRegion: isSet(object.fromRegion) ? String(object.fromRegion) : "",
      toRegion: isSet(object.toRegion) ? String(object.toRegion) : "",
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgTransferKYC): unknown {
    const obj: any = {};
    message.fromRegion !== undefined && (obj.fromRegion = message.fromRegion);
    message.toRegion !== undefined && (obj.toRegion = message.toRegion);
    if (message.address) {
      obj.address = message.address.map((e) => e);
    } else {
      obj.address = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferKYC>, I>>(object: I): MsgTransferKYC {
    const message = createBaseMsgTransferKYC();
    message.fromRegion = object.fromRegion ?? "";
    message.toRegion = object.toRegion ?? "";
    message.address = object.address?.map((e) => e) || [];
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgTransferKYCResponse(): MsgTransferKYCResponse {
  return {};
}

export const MsgTransferKYCResponse = {
  encode(_: MsgTransferKYCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferKYCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferKYCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferKYCResponse {
    return {};
  },

  toJSON(_: MsgTransferKYCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferKYCResponse>, I>>(_: I): MsgTransferKYCResponse {
    const message = createBaseMsgTransferKYCResponse();
    return message;
  },
};

/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /**
   * UpdateParams defines an operation for updating the x/staking module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * Stake defines a method for performing a stake of coins
   * from a staker to a validator.
   */
  Stake(request: MsgStake): Promise<MsgStakeResponse>;
  /**
   * Unstake defines a method for performing an unstake from a
   * stake and a validator.
   */
  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  DoFixedDeposit(request: MsgDoFixedDeposit): Promise<MsgDoFixedDepositResponse>;
  DoFixedWithdraw(request: MsgDoFixedWithdraw): Promise<MsgDoFixedWithdrawResponse>;
  SetFixedDepositInterestRate(request: MsgSetFixedDepositInterestRate): Promise<MsgSetFixedDepositInterestRateResponse>;
  NewRegion(request: MsgNewRegion): Promise<MsgNewRegionResponse>;
  RemoveRegion(request: MsgRemoveRegion): Promise<MsgRemoveRegionResponse>;
  NewKyc(request: MsgNewKyc): Promise<MsgNewKycResponse>;
  RemoveKyc(request: MsgRemoveKyc): Promise<MsgRemoveKycResponse>;
  NewSiidNFT(request: MsgNewSiidNFT): Promise<MsgNewSiidNFTResponse>;
  RemoveSiidNFT(request: MsgRemoveSiidNFT): Promise<MsgRemoveSiidNFTResponse>;
  TransferKYC(request: MsgTransferKYC): Promise<MsgTransferKYCResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateValidator = this.CreateValidator.bind(this);
    this.EditValidator = this.EditValidator.bind(this);
    this.Delegate = this.Delegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.Stake = this.Stake.bind(this);
    this.Unstake = this.Unstake.bind(this);
    this.DoFixedDeposit = this.DoFixedDeposit.bind(this);
    this.DoFixedWithdraw = this.DoFixedWithdraw.bind(this);
    this.SetFixedDepositInterestRate = this.SetFixedDepositInterestRate.bind(this);
    this.NewRegion = this.NewRegion.bind(this);
    this.RemoveRegion = this.RemoveRegion.bind(this);
    this.NewKyc = this.NewKyc.bind(this);
    this.RemoveKyc = this.RemoveKyc.bind(this);
    this.NewSiidNFT = this.NewSiidNFT.bind(this);
    this.RemoveSiidNFT = this.RemoveSiidNFT.bind(this);
    this.TransferKYC = this.TransferKYC.bind(this);
  }
  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then((data) => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then((data) => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then((data) => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then((data) => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Stake", data);
    return promise.then((data) => MsgStakeResponse.decode(new _m0.Reader(data)));
  }

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Unstake", data);
    return promise.then((data) => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }

  DoFixedDeposit(request: MsgDoFixedDeposit): Promise<MsgDoFixedDepositResponse> {
    const data = MsgDoFixedDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "DoFixedDeposit", data);
    return promise.then((data) => MsgDoFixedDepositResponse.decode(new _m0.Reader(data)));
  }

  DoFixedWithdraw(request: MsgDoFixedWithdraw): Promise<MsgDoFixedWithdrawResponse> {
    const data = MsgDoFixedWithdraw.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "DoFixedWithdraw", data);
    return promise.then((data) => MsgDoFixedWithdrawResponse.decode(new _m0.Reader(data)));
  }

  SetFixedDepositInterestRate(
    request: MsgSetFixedDepositInterestRate,
  ): Promise<MsgSetFixedDepositInterestRateResponse> {
    const data = MsgSetFixedDepositInterestRate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "SetFixedDepositInterestRate", data);
    return promise.then((data) => MsgSetFixedDepositInterestRateResponse.decode(new _m0.Reader(data)));
  }

  NewRegion(request: MsgNewRegion): Promise<MsgNewRegionResponse> {
    const data = MsgNewRegion.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewRegion", data);
    return promise.then((data) => MsgNewRegionResponse.decode(new _m0.Reader(data)));
  }

  RemoveRegion(request: MsgRemoveRegion): Promise<MsgRemoveRegionResponse> {
    const data = MsgRemoveRegion.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveRegion", data);
    return promise.then((data) => MsgRemoveRegionResponse.decode(new _m0.Reader(data)));
  }

  NewKyc(request: MsgNewKyc): Promise<MsgNewKycResponse> {
    const data = MsgNewKyc.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewKyc", data);
    return promise.then((data) => MsgNewKycResponse.decode(new _m0.Reader(data)));
  }

  RemoveKyc(request: MsgRemoveKyc): Promise<MsgRemoveKycResponse> {
    const data = MsgRemoveKyc.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveKyc", data);
    return promise.then((data) => MsgRemoveKycResponse.decode(new _m0.Reader(data)));
  }

  NewSiidNFT(request: MsgNewSiidNFT): Promise<MsgNewSiidNFTResponse> {
    const data = MsgNewSiidNFT.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewSiidNFT", data);
    return promise.then((data) => MsgNewSiidNFTResponse.decode(new _m0.Reader(data)));
  }

  RemoveSiidNFT(request: MsgRemoveSiidNFT): Promise<MsgRemoveSiidNFTResponse> {
    const data = MsgRemoveSiidNFT.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveSiidNFT", data);
    return promise.then((data) => MsgRemoveSiidNFTResponse.decode(new _m0.Reader(data)));
  }

  TransferKYC(request: MsgTransferKYC): Promise<MsgTransferKYCResponse> {
    const data = MsgTransferKYC.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TransferKYC", data);
    return promise.then((data) => MsgTransferKYCResponse.decode(new _m0.Reader(data)));
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
