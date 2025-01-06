/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";
import { fixedDepositCfgStatus, fixedDepositCfgStatusFromJSON, fixedDepositCfgStatusToJSON } from "./fixed_deposit";
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
  isMeid: boolean;
}

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completionTime: Date | undefined;
}

export interface MsgUnMeidUndelegate {
  delegatorAddress: string;
  /** experience node validator address */
  validatorAddress: string;
  amount: Coin | undefined;
}

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUnMeidUndelegateResponse {
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
  term: number;
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
  term: number;
  rate: string;
}

export interface MsgNewFixedDepositCfg {
  admin: string;
  regionId: string;
  term: number;
  rate: string;
}

export interface MsgNewFixedDepositCfgResp {
  retcode: string;
}

export interface MsgRemoveFixedDepositCfg {
  admin: string;
  regionId: string;
  term: number;
}

export interface MsgRemoveFixedDepositCfgResp {
  retcode: string;
}

export interface MsgSetFixedDepositCfgStatus {
  admin: string;
  regionId: string;
  term: number;
  status: fixedDepositCfgStatus;
}

export interface MsgSetFixedDepositCfgStatusResp {
  retcode: string;
}

export interface MsgSetFixedDepositCfgRate {
  admin: string;
  regionId: string;
  term: number;
  rate: string;
}

export interface MsgSetFixedDepositCfgRateResp {
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

export interface MsgRetrieveCoinsFromRegion {
  admin: string;
  regionId: string;
  receiver: string;
  amount: Coin[];
}

export interface MsgRetrieveCoinsFromRegionResp {
  retcode: string;
}

export interface MsgNewMeid {
  creator: string;
  account: string;
  inviteAddr: string;
  regionId: string;
}

export interface MsgNewMeidResponse {
  retcode: string;
}

export interface MsgRemoveMeid {
  creator: string;
  account: string;
}

export interface MsgRemoveMeidResponse {
  retcode: string;
}

export interface MsgNewMeidNFT {
  creator: string;
  account: string;
  regionId: string;
  umeid: string;
  meta: string;
  uri: string;
  urihash: string;
}

export interface MsgNewMeidNFTResponse {
  retcode: string;
}

export interface MsgRemoveMeidNFT {
  creator: string;
  account: string;
  umeid: string;
  regionId: string;
}

export interface MsgRemoveMeidNFTResponse {
  retcode: string;
}

export interface MsgTransferRegion {
  fromRegion: string;
  toRegion: string;
  address: string[];
  creator: string;
}

export interface MsgTransferRegionResponse {
}

export interface MsgNewRecord {
  actionNumber: string;
  actionUrl: string;
  from: string;
}

export interface MsgNewRecordResponse {
}

export interface MsgReviewRecord {
  recordHash: string;
  reviewResult: string;
  from: string;
  ActionNumber: string;
  reviewedAddress: string;
}

export interface MsgReviewRecordResponse {
}

export interface MsgRetrieveFeeFromGlobalAdminFeePool {
  admin: string;
  amount: Coin[];
}

export interface MsgRetrieveFeeFromGlobalAdminFeePoolResp {
  retcode: string;
}

export interface MsgResetValidator {
  stakerAddress: string;
  valOperAddress: string;
  newValidatorAddress: string;
}

export interface MsgResetValidatorResponse {
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
  return { delegatorAddress: "", validatorAddress: "", amount: undefined, isMeid: false };
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
    if (message.isMeid === true) {
      writer.uint32(32).bool(message.isMeid);
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
          message.isMeid = reader.bool();
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
      isMeid: isSet(object.isMeid) ? Boolean(object.isMeid) : false,
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.isMeid !== undefined && (obj.isMeid = message.isMeid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.isMeid = object.isMeid ?? false;
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

function createBaseMsgUnMeidUndelegate(): MsgUnMeidUndelegate {
  return { delegatorAddress: "", validatorAddress: "", amount: undefined };
}

export const MsgUnMeidUndelegate = {
  encode(message: MsgUnMeidUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnMeidUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnMeidUndelegate();
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

  fromJSON(object: any): MsgUnMeidUndelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgUnMeidUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnMeidUndelegate>, I>>(object: I): MsgUnMeidUndelegate {
    const message = createBaseMsgUnMeidUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgUnMeidUndelegateResponse(): MsgUnMeidUndelegateResponse {
  return { completionTime: undefined };
}

export const MsgUnMeidUndelegateResponse = {
  encode(message: MsgUnMeidUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnMeidUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnMeidUndelegateResponse();
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

  fromJSON(object: any): MsgUnMeidUndelegateResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgUnMeidUndelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnMeidUndelegateResponse>, I>>(object: I): MsgUnMeidUndelegateResponse {
    const message = createBaseMsgUnMeidUndelegateResponse();
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
      writer.uint32(32).int64(message.term);
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
          message.term = longToNumber(reader.int64() as Long);
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
      term: isSet(object.term) ? Number(object.term) : 0,
    };
  },

  toJSON(message: MsgDoFixedDeposit): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.term !== undefined && (obj.term = Math.round(message.term));
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
      writer.uint32(24).int64(message.term);
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
          message.term = longToNumber(reader.int64() as Long);
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
      term: isSet(object.term) ? Number(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: MsgDoFixedWithdrawResponse): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.interest !== undefined && (obj.interest = message.interest ? Coin.toJSON(message.interest) : undefined);
    message.term !== undefined && (obj.term = Math.round(message.term));
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

function createBaseMsgNewFixedDepositCfg(): MsgNewFixedDepositCfg {
  return { admin: "", regionId: "", term: 0, rate: "" };
}

export const MsgNewFixedDepositCfg = {
  encode(message: MsgNewFixedDepositCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(24).int64(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(34).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewFixedDepositCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewFixedDepositCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.term = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): MsgNewFixedDepositCfg {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: MsgNewFixedDepositCfg): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewFixedDepositCfg>, I>>(object: I): MsgNewFixedDepositCfg {
    const message = createBaseMsgNewFixedDepositCfg();
    message.admin = object.admin ?? "";
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    return message;
  },
};

function createBaseMsgNewFixedDepositCfgResp(): MsgNewFixedDepositCfgResp {
  return { retcode: "" };
}

export const MsgNewFixedDepositCfgResp = {
  encode(message: MsgNewFixedDepositCfgResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewFixedDepositCfgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewFixedDepositCfgResp();
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

  fromJSON(object: any): MsgNewFixedDepositCfgResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgNewFixedDepositCfgResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewFixedDepositCfgResp>, I>>(object: I): MsgNewFixedDepositCfgResp {
    const message = createBaseMsgNewFixedDepositCfgResp();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgRemoveFixedDepositCfg(): MsgRemoveFixedDepositCfg {
  return { admin: "", regionId: "", term: 0 };
}

export const MsgRemoveFixedDepositCfg = {
  encode(message: MsgRemoveFixedDepositCfg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(24).int64(message.term);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFixedDepositCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFixedDepositCfg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.term = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveFixedDepositCfg {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
    };
  },

  toJSON(message: MsgRemoveFixedDepositCfg): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveFixedDepositCfg>, I>>(object: I): MsgRemoveFixedDepositCfg {
    const message = createBaseMsgRemoveFixedDepositCfg();
    message.admin = object.admin ?? "";
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    return message;
  },
};

function createBaseMsgRemoveFixedDepositCfgResp(): MsgRemoveFixedDepositCfgResp {
  return { retcode: "" };
}

export const MsgRemoveFixedDepositCfgResp = {
  encode(message: MsgRemoveFixedDepositCfgResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFixedDepositCfgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFixedDepositCfgResp();
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

  fromJSON(object: any): MsgRemoveFixedDepositCfgResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveFixedDepositCfgResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveFixedDepositCfgResp>, I>>(object: I): MsgRemoveFixedDepositCfgResp {
    const message = createBaseMsgRemoveFixedDepositCfgResp();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgSetFixedDepositCfgStatus(): MsgSetFixedDepositCfgStatus {
  return { admin: "", regionId: "", term: 0, status: 0 };
}

export const MsgSetFixedDepositCfgStatus = {
  encode(message: MsgSetFixedDepositCfgStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(24).int64(message.term);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositCfgStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositCfgStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.term = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): MsgSetFixedDepositCfgStatus {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
      status: isSet(object.status) ? fixedDepositCfgStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgSetFixedDepositCfgStatus): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    message.status !== undefined && (obj.status = fixedDepositCfgStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositCfgStatus>, I>>(object: I): MsgSetFixedDepositCfgStatus {
    const message = createBaseMsgSetFixedDepositCfgStatus();
    message.admin = object.admin ?? "";
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgSetFixedDepositCfgStatusResp(): MsgSetFixedDepositCfgStatusResp {
  return { retcode: "" };
}

export const MsgSetFixedDepositCfgStatusResp = {
  encode(message: MsgSetFixedDepositCfgStatusResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositCfgStatusResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositCfgStatusResp();
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

  fromJSON(object: any): MsgSetFixedDepositCfgStatusResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgSetFixedDepositCfgStatusResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositCfgStatusResp>, I>>(
    object: I,
  ): MsgSetFixedDepositCfgStatusResp {
    const message = createBaseMsgSetFixedDepositCfgStatusResp();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgSetFixedDepositCfgRate(): MsgSetFixedDepositCfgRate {
  return { admin: "", regionId: "", term: 0, rate: "" };
}

export const MsgSetFixedDepositCfgRate = {
  encode(message: MsgSetFixedDepositCfgRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(24).int64(message.term);
    }
    if (message.rate !== "") {
      writer.uint32(34).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositCfgRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositCfgRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.term = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): MsgSetFixedDepositCfgRate {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },

  toJSON(message: MsgSetFixedDepositCfgRate): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositCfgRate>, I>>(object: I): MsgSetFixedDepositCfgRate {
    const message = createBaseMsgSetFixedDepositCfgRate();
    message.admin = object.admin ?? "";
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    message.rate = object.rate ?? "";
    return message;
  },
};

function createBaseMsgSetFixedDepositCfgRateResp(): MsgSetFixedDepositCfgRateResp {
  return { retcode: "" };
}

export const MsgSetFixedDepositCfgRateResp = {
  encode(message: MsgSetFixedDepositCfgRateResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFixedDepositCfgRateResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFixedDepositCfgRateResp();
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

  fromJSON(object: any): MsgSetFixedDepositCfgRateResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgSetFixedDepositCfgRateResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFixedDepositCfgRateResp>, I>>(
    object: I,
  ): MsgSetFixedDepositCfgRateResp {
    const message = createBaseMsgSetFixedDepositCfgRateResp();
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

function createBaseMsgRetrieveCoinsFromRegion(): MsgRetrieveCoinsFromRegion {
  return { admin: "", regionId: "", receiver: "", amount: [] };
}

export const MsgRetrieveCoinsFromRegion = {
  encode(message: MsgRetrieveCoinsFromRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.regionId !== "") {
      writer.uint32(18).string(message.regionId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetrieveCoinsFromRegion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveCoinsFromRegion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.regionId = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetrieveCoinsFromRegion {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRetrieveCoinsFromRegion): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetrieveCoinsFromRegion>, I>>(object: I): MsgRetrieveCoinsFromRegion {
    const message = createBaseMsgRetrieveCoinsFromRegion();
    message.admin = object.admin ?? "";
    message.regionId = object.regionId ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRetrieveCoinsFromRegionResp(): MsgRetrieveCoinsFromRegionResp {
  return { retcode: "" };
}

export const MsgRetrieveCoinsFromRegionResp = {
  encode(message: MsgRetrieveCoinsFromRegionResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetrieveCoinsFromRegionResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveCoinsFromRegionResp();
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

  fromJSON(object: any): MsgRetrieveCoinsFromRegionResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRetrieveCoinsFromRegionResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetrieveCoinsFromRegionResp>, I>>(
    object: I,
  ): MsgRetrieveCoinsFromRegionResp {
    const message = createBaseMsgRetrieveCoinsFromRegionResp();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgNewMeid(): MsgNewMeid {
  return { creator: "", account: "", inviteAddr: "", regionId: "" };
}

export const MsgNewMeid = {
  encode(message: MsgNewMeid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewMeid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewMeid();
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

  fromJSON(object: any): MsgNewMeid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      inviteAddr: isSet(object.inviteAddr) ? String(object.inviteAddr) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
    };
  },

  toJSON(message: MsgNewMeid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.inviteAddr !== undefined && (obj.inviteAddr = message.inviteAddr);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewMeid>, I>>(object: I): MsgNewMeid {
    const message = createBaseMsgNewMeid();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.inviteAddr = object.inviteAddr ?? "";
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseMsgNewMeidResponse(): MsgNewMeidResponse {
  return { retcode: "" };
}

export const MsgNewMeidResponse = {
  encode(message: MsgNewMeidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewMeidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewMeidResponse();
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

  fromJSON(object: any): MsgNewMeidResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgNewMeidResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewMeidResponse>, I>>(object: I): MsgNewMeidResponse {
    const message = createBaseMsgNewMeidResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgRemoveMeid(): MsgRemoveMeid {
  return { creator: "", account: "" };
}

export const MsgRemoveMeid = {
  encode(message: MsgRemoveMeid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMeid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMeid();
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

  fromJSON(object: any): MsgRemoveMeid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgRemoveMeid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMeid>, I>>(object: I): MsgRemoveMeid {
    const message = createBaseMsgRemoveMeid();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseMsgRemoveMeidResponse(): MsgRemoveMeidResponse {
  return { retcode: "" };
}

export const MsgRemoveMeidResponse = {
  encode(message: MsgRemoveMeidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMeidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMeidResponse();
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

  fromJSON(object: any): MsgRemoveMeidResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveMeidResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMeidResponse>, I>>(object: I): MsgRemoveMeidResponse {
    const message = createBaseMsgRemoveMeidResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgNewMeidNFT(): MsgNewMeidNFT {
  return { creator: "", account: "", regionId: "", umeid: "", meta: "", uri: "", urihash: "" };
}

export const MsgNewMeidNFT = {
  encode(message: MsgNewMeidNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.regionId !== "") {
      writer.uint32(26).string(message.regionId);
    }
    if (message.umeid !== "") {
      writer.uint32(34).string(message.umeid);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewMeidNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewMeidNFT();
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
          message.umeid = reader.string();
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

  fromJSON(object: any): MsgNewMeidNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      umeid: isSet(object.umeid) ? String(object.umeid) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      urihash: isSet(object.urihash) ? String(object.urihash) : "",
    };
  },

  toJSON(message: MsgNewMeidNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.umeid !== undefined && (obj.umeid = message.umeid);
    message.meta !== undefined && (obj.meta = message.meta);
    message.uri !== undefined && (obj.uri = message.uri);
    message.urihash !== undefined && (obj.urihash = message.urihash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewMeidNFT>, I>>(object: I): MsgNewMeidNFT {
    const message = createBaseMsgNewMeidNFT();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.regionId = object.regionId ?? "";
    message.umeid = object.umeid ?? "";
    message.meta = object.meta ?? "";
    message.uri = object.uri ?? "";
    message.urihash = object.urihash ?? "";
    return message;
  },
};

function createBaseMsgNewMeidNFTResponse(): MsgNewMeidNFTResponse {
  return { retcode: "" };
}

export const MsgNewMeidNFTResponse = {
  encode(message: MsgNewMeidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewMeidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewMeidNFTResponse();
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

  fromJSON(object: any): MsgNewMeidNFTResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgNewMeidNFTResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewMeidNFTResponse>, I>>(object: I): MsgNewMeidNFTResponse {
    const message = createBaseMsgNewMeidNFTResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgRemoveMeidNFT(): MsgRemoveMeidNFT {
  return { creator: "", account: "", umeid: "", regionId: "" };
}

export const MsgRemoveMeidNFT = {
  encode(message: MsgRemoveMeidNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.umeid !== "") {
      writer.uint32(26).string(message.umeid);
    }
    if (message.regionId !== "") {
      writer.uint32(34).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMeidNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMeidNFT();
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
          message.umeid = reader.string();
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

  fromJSON(object: any): MsgRemoveMeidNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      account: isSet(object.account) ? String(object.account) : "",
      umeid: isSet(object.umeid) ? String(object.umeid) : "",
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
    };
  },

  toJSON(message: MsgRemoveMeidNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.umeid !== undefined && (obj.umeid = message.umeid);
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMeidNFT>, I>>(object: I): MsgRemoveMeidNFT {
    const message = createBaseMsgRemoveMeidNFT();
    message.creator = object.creator ?? "";
    message.account = object.account ?? "";
    message.umeid = object.umeid ?? "";
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseMsgRemoveMeidNFTResponse(): MsgRemoveMeidNFTResponse {
  return { retcode: "" };
}

export const MsgRemoveMeidNFTResponse = {
  encode(message: MsgRemoveMeidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMeidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMeidNFTResponse();
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

  fromJSON(object: any): MsgRemoveMeidNFTResponse {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRemoveMeidNFTResponse): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMeidNFTResponse>, I>>(object: I): MsgRemoveMeidNFTResponse {
    const message = createBaseMsgRemoveMeidNFTResponse();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgTransferRegion(): MsgTransferRegion {
  return { fromRegion: "", toRegion: "", address: [], creator: "" };
}

export const MsgTransferRegion = {
  encode(message: MsgTransferRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferRegion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferRegion();
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

  fromJSON(object: any): MsgTransferRegion {
    return {
      fromRegion: isSet(object.fromRegion) ? String(object.fromRegion) : "",
      toRegion: isSet(object.toRegion) ? String(object.toRegion) : "",
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgTransferRegion): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgTransferRegion>, I>>(object: I): MsgTransferRegion {
    const message = createBaseMsgTransferRegion();
    message.fromRegion = object.fromRegion ?? "";
    message.toRegion = object.toRegion ?? "";
    message.address = object.address?.map((e) => e) || [];
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgTransferRegionResponse(): MsgTransferRegionResponse {
  return {};
}

export const MsgTransferRegionResponse = {
  encode(_: MsgTransferRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferRegionResponse();
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

  fromJSON(_: any): MsgTransferRegionResponse {
    return {};
  },

  toJSON(_: MsgTransferRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferRegionResponse>, I>>(_: I): MsgTransferRegionResponse {
    const message = createBaseMsgTransferRegionResponse();
    return message;
  },
};

function createBaseMsgNewRecord(): MsgNewRecord {
  return { actionNumber: "", actionUrl: "", from: "" };
}

export const MsgNewRecord = {
  encode(message: MsgNewRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionNumber !== "") {
      writer.uint32(10).string(message.actionNumber);
    }
    if (message.actionUrl !== "") {
      writer.uint32(18).string(message.actionUrl);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionNumber = reader.string();
          break;
        case 2:
          message.actionUrl = reader.string();
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

  fromJSON(object: any): MsgNewRecord {
    return {
      actionNumber: isSet(object.actionNumber) ? String(object.actionNumber) : "",
      actionUrl: isSet(object.actionUrl) ? String(object.actionUrl) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: MsgNewRecord): unknown {
    const obj: any = {};
    message.actionNumber !== undefined && (obj.actionNumber = message.actionNumber);
    message.actionUrl !== undefined && (obj.actionUrl = message.actionUrl);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewRecord>, I>>(object: I): MsgNewRecord {
    const message = createBaseMsgNewRecord();
    message.actionNumber = object.actionNumber ?? "";
    message.actionUrl = object.actionUrl ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgNewRecordResponse(): MsgNewRecordResponse {
  return {};
}

export const MsgNewRecordResponse = {
  encode(_: MsgNewRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRecordResponse();
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

  fromJSON(_: any): MsgNewRecordResponse {
    return {};
  },

  toJSON(_: MsgNewRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNewRecordResponse>, I>>(_: I): MsgNewRecordResponse {
    const message = createBaseMsgNewRecordResponse();
    return message;
  },
};

function createBaseMsgReviewRecord(): MsgReviewRecord {
  return { recordHash: "", reviewResult: "", from: "", ActionNumber: "", reviewedAddress: "" };
}

export const MsgReviewRecord = {
  encode(message: MsgReviewRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordHash !== "") {
      writer.uint32(10).string(message.recordHash);
    }
    if (message.reviewResult !== "") {
      writer.uint32(18).string(message.reviewResult);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.ActionNumber !== "") {
      writer.uint32(34).string(message.ActionNumber);
    }
    if (message.reviewedAddress !== "") {
      writer.uint32(42).string(message.reviewedAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReviewRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReviewRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordHash = reader.string();
          break;
        case 2:
          message.reviewResult = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.ActionNumber = reader.string();
          break;
        case 5:
          message.reviewedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReviewRecord {
    return {
      recordHash: isSet(object.recordHash) ? String(object.recordHash) : "",
      reviewResult: isSet(object.reviewResult) ? String(object.reviewResult) : "",
      from: isSet(object.from) ? String(object.from) : "",
      ActionNumber: isSet(object.ActionNumber) ? String(object.ActionNumber) : "",
      reviewedAddress: isSet(object.reviewedAddress) ? String(object.reviewedAddress) : "",
    };
  },

  toJSON(message: MsgReviewRecord): unknown {
    const obj: any = {};
    message.recordHash !== undefined && (obj.recordHash = message.recordHash);
    message.reviewResult !== undefined && (obj.reviewResult = message.reviewResult);
    message.from !== undefined && (obj.from = message.from);
    message.ActionNumber !== undefined && (obj.ActionNumber = message.ActionNumber);
    message.reviewedAddress !== undefined && (obj.reviewedAddress = message.reviewedAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReviewRecord>, I>>(object: I): MsgReviewRecord {
    const message = createBaseMsgReviewRecord();
    message.recordHash = object.recordHash ?? "";
    message.reviewResult = object.reviewResult ?? "";
    message.from = object.from ?? "";
    message.ActionNumber = object.ActionNumber ?? "";
    message.reviewedAddress = object.reviewedAddress ?? "";
    return message;
  },
};

function createBaseMsgReviewRecordResponse(): MsgReviewRecordResponse {
  return {};
}

export const MsgReviewRecordResponse = {
  encode(_: MsgReviewRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReviewRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReviewRecordResponse();
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

  fromJSON(_: any): MsgReviewRecordResponse {
    return {};
  },

  toJSON(_: MsgReviewRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReviewRecordResponse>, I>>(_: I): MsgReviewRecordResponse {
    const message = createBaseMsgReviewRecordResponse();
    return message;
  },
};

function createBaseMsgRetrieveFeeFromGlobalAdminFeePool(): MsgRetrieveFeeFromGlobalAdminFeePool {
  return { admin: "", amount: [] };
}

export const MsgRetrieveFeeFromGlobalAdminFeePool = {
  encode(message: MsgRetrieveFeeFromGlobalAdminFeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetrieveFeeFromGlobalAdminFeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveFeeFromGlobalAdminFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetrieveFeeFromGlobalAdminFeePool {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRetrieveFeeFromGlobalAdminFeePool): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetrieveFeeFromGlobalAdminFeePool>, I>>(
    object: I,
  ): MsgRetrieveFeeFromGlobalAdminFeePool {
    const message = createBaseMsgRetrieveFeeFromGlobalAdminFeePool();
    message.admin = object.admin ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRetrieveFeeFromGlobalAdminFeePoolResp(): MsgRetrieveFeeFromGlobalAdminFeePoolResp {
  return { retcode: "" };
}

export const MsgRetrieveFeeFromGlobalAdminFeePoolResp = {
  encode(message: MsgRetrieveFeeFromGlobalAdminFeePoolResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retcode !== "") {
      writer.uint32(10).string(message.retcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetrieveFeeFromGlobalAdminFeePoolResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrieveFeeFromGlobalAdminFeePoolResp();
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

  fromJSON(object: any): MsgRetrieveFeeFromGlobalAdminFeePoolResp {
    return { retcode: isSet(object.retcode) ? String(object.retcode) : "" };
  },

  toJSON(message: MsgRetrieveFeeFromGlobalAdminFeePoolResp): unknown {
    const obj: any = {};
    message.retcode !== undefined && (obj.retcode = message.retcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetrieveFeeFromGlobalAdminFeePoolResp>, I>>(
    object: I,
  ): MsgRetrieveFeeFromGlobalAdminFeePoolResp {
    const message = createBaseMsgRetrieveFeeFromGlobalAdminFeePoolResp();
    message.retcode = object.retcode ?? "";
    return message;
  },
};

function createBaseMsgResetValidator(): MsgResetValidator {
  return { stakerAddress: "", valOperAddress: "", newValidatorAddress: "" };
}

export const MsgResetValidator = {
  encode(message: MsgResetValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.valOperAddress !== "") {
      writer.uint32(18).string(message.valOperAddress);
    }
    if (message.newValidatorAddress !== "") {
      writer.uint32(26).string(message.newValidatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.valOperAddress = reader.string();
          break;
        case 3:
          message.newValidatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgResetValidator {
    return {
      stakerAddress: isSet(object.stakerAddress) ? String(object.stakerAddress) : "",
      valOperAddress: isSet(object.valOperAddress) ? String(object.valOperAddress) : "",
      newValidatorAddress: isSet(object.newValidatorAddress) ? String(object.newValidatorAddress) : "",
    };
  },

  toJSON(message: MsgResetValidator): unknown {
    const obj: any = {};
    message.stakerAddress !== undefined && (obj.stakerAddress = message.stakerAddress);
    message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
    message.newValidatorAddress !== undefined && (obj.newValidatorAddress = message.newValidatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetValidator>, I>>(object: I): MsgResetValidator {
    const message = createBaseMsgResetValidator();
    message.stakerAddress = object.stakerAddress ?? "";
    message.valOperAddress = object.valOperAddress ?? "";
    message.newValidatorAddress = object.newValidatorAddress ?? "";
    return message;
  },
};

function createBaseMsgResetValidatorResponse(): MsgResetValidatorResponse {
  return {};
}

export const MsgResetValidatorResponse = {
  encode(_: MsgResetValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetValidatorResponse();
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

  fromJSON(_: any): MsgResetValidatorResponse {
    return {};
  },

  toJSON(_: MsgResetValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgResetValidatorResponse>, I>>(_: I): MsgResetValidatorResponse {
    const message = createBaseMsgResetValidatorResponse();
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
  NewFixedDepositCfg(request: MsgNewFixedDepositCfg): Promise<MsgNewFixedDepositCfgResp>;
  RemoveFixedDepositCfg(request: MsgRemoveFixedDepositCfg): Promise<MsgRemoveFixedDepositCfgResp>;
  SetFixedDepositCfgStatus(request: MsgSetFixedDepositCfgStatus): Promise<MsgSetFixedDepositCfgStatusResp>;
  SetFixedDepositCfgRate(request: MsgSetFixedDepositCfgRate): Promise<MsgSetFixedDepositCfgRateResp>;
  NewRegion(request: MsgNewRegion): Promise<MsgNewRegionResponse>;
  RemoveRegion(request: MsgRemoveRegion): Promise<MsgRemoveRegionResponse>;
  RetrieveCoinsFromRegion(request: MsgRetrieveCoinsFromRegion): Promise<MsgRetrieveCoinsFromRegionResp>;
  NewMeid(request: MsgNewMeid): Promise<MsgNewMeidResponse>;
  RemoveMeid(request: MsgRemoveMeid): Promise<MsgRemoveMeidResponse>;
  NewMeidNFT(request: MsgNewMeidNFT): Promise<MsgNewMeidNFTResponse>;
  RemoveMeidNFT(request: MsgRemoveMeidNFT): Promise<MsgRemoveMeidNFTResponse>;
  TransferRegion(request: MsgTransferRegion): Promise<MsgTransferRegionResponse>;
  NewRecord(request: MsgNewRecord): Promise<MsgNewRecordResponse>;
  ReviewRecord(request: MsgReviewRecord): Promise<MsgReviewRecordResponse>;
  RetrieveFeeFromGlobalAdminFeePool(
    request: MsgRetrieveFeeFromGlobalAdminFeePool,
  ): Promise<MsgRetrieveFeeFromGlobalAdminFeePoolResp>;
  ResetValidator(request: MsgResetValidator): Promise<MsgResetValidatorResponse>;
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
    this.NewFixedDepositCfg = this.NewFixedDepositCfg.bind(this);
    this.RemoveFixedDepositCfg = this.RemoveFixedDepositCfg.bind(this);
    this.SetFixedDepositCfgStatus = this.SetFixedDepositCfgStatus.bind(this);
    this.SetFixedDepositCfgRate = this.SetFixedDepositCfgRate.bind(this);
    this.NewRegion = this.NewRegion.bind(this);
    this.RemoveRegion = this.RemoveRegion.bind(this);
    this.RetrieveCoinsFromRegion = this.RetrieveCoinsFromRegion.bind(this);
    this.NewMeid = this.NewMeid.bind(this);
    this.RemoveMeid = this.RemoveMeid.bind(this);
    this.NewMeidNFT = this.NewMeidNFT.bind(this);
    this.RemoveMeidNFT = this.RemoveMeidNFT.bind(this);
    this.TransferRegion = this.TransferRegion.bind(this);
    this.NewRecord = this.NewRecord.bind(this);
    this.ReviewRecord = this.ReviewRecord.bind(this);
    this.RetrieveFeeFromGlobalAdminFeePool = this.RetrieveFeeFromGlobalAdminFeePool.bind(this);
    this.ResetValidator = this.ResetValidator.bind(this);
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

  NewFixedDepositCfg(request: MsgNewFixedDepositCfg): Promise<MsgNewFixedDepositCfgResp> {
    const data = MsgNewFixedDepositCfg.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewFixedDepositCfg", data);
    return promise.then((data) => MsgNewFixedDepositCfgResp.decode(new _m0.Reader(data)));
  }

  RemoveFixedDepositCfg(request: MsgRemoveFixedDepositCfg): Promise<MsgRemoveFixedDepositCfgResp> {
    const data = MsgRemoveFixedDepositCfg.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveFixedDepositCfg", data);
    return promise.then((data) => MsgRemoveFixedDepositCfgResp.decode(new _m0.Reader(data)));
  }

  SetFixedDepositCfgStatus(request: MsgSetFixedDepositCfgStatus): Promise<MsgSetFixedDepositCfgStatusResp> {
    const data = MsgSetFixedDepositCfgStatus.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "SetFixedDepositCfgStatus", data);
    return promise.then((data) => MsgSetFixedDepositCfgStatusResp.decode(new _m0.Reader(data)));
  }

  SetFixedDepositCfgRate(request: MsgSetFixedDepositCfgRate): Promise<MsgSetFixedDepositCfgRateResp> {
    const data = MsgSetFixedDepositCfgRate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "SetFixedDepositCfgRate", data);
    return promise.then((data) => MsgSetFixedDepositCfgRateResp.decode(new _m0.Reader(data)));
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

  RetrieveCoinsFromRegion(request: MsgRetrieveCoinsFromRegion): Promise<MsgRetrieveCoinsFromRegionResp> {
    const data = MsgRetrieveCoinsFromRegion.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RetrieveCoinsFromRegion", data);
    return promise.then((data) => MsgRetrieveCoinsFromRegionResp.decode(new _m0.Reader(data)));
  }

  NewMeid(request: MsgNewMeid): Promise<MsgNewMeidResponse> {
    const data = MsgNewMeid.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewMeid", data);
    return promise.then((data) => MsgNewMeidResponse.decode(new _m0.Reader(data)));
  }

  RemoveMeid(request: MsgRemoveMeid): Promise<MsgRemoveMeidResponse> {
    const data = MsgRemoveMeid.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveMeid", data);
    return promise.then((data) => MsgRemoveMeidResponse.decode(new _m0.Reader(data)));
  }

  NewMeidNFT(request: MsgNewMeidNFT): Promise<MsgNewMeidNFTResponse> {
    const data = MsgNewMeidNFT.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewMeidNFT", data);
    return promise.then((data) => MsgNewMeidNFTResponse.decode(new _m0.Reader(data)));
  }

  RemoveMeidNFT(request: MsgRemoveMeidNFT): Promise<MsgRemoveMeidNFTResponse> {
    const data = MsgRemoveMeidNFT.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RemoveMeidNFT", data);
    return promise.then((data) => MsgRemoveMeidNFTResponse.decode(new _m0.Reader(data)));
  }

  TransferRegion(request: MsgTransferRegion): Promise<MsgTransferRegionResponse> {
    const data = MsgTransferRegion.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TransferRegion", data);
    return promise.then((data) => MsgTransferRegionResponse.decode(new _m0.Reader(data)));
  }

  NewRecord(request: MsgNewRecord): Promise<MsgNewRecordResponse> {
    const data = MsgNewRecord.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "NewRecord", data);
    return promise.then((data) => MsgNewRecordResponse.decode(new _m0.Reader(data)));
  }

  ReviewRecord(request: MsgReviewRecord): Promise<MsgReviewRecordResponse> {
    const data = MsgReviewRecord.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "ReviewRecord", data);
    return promise.then((data) => MsgReviewRecordResponse.decode(new _m0.Reader(data)));
  }

  RetrieveFeeFromGlobalAdminFeePool(
    request: MsgRetrieveFeeFromGlobalAdminFeePool,
  ): Promise<MsgRetrieveFeeFromGlobalAdminFeePoolResp> {
    const data = MsgRetrieveFeeFromGlobalAdminFeePool.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RetrieveFeeFromGlobalAdminFeePool", data);
    return promise.then((data) => MsgRetrieveFeeFromGlobalAdminFeePoolResp.decode(new _m0.Reader(data)));
  }

  ResetValidator(request: MsgResetValidator): Promise<MsgResetValidatorResponse> {
    const data = MsgResetValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "ResetValidator", data);
    return promise.then((data) => MsgResetValidatorResponse.decode(new _m0.Reader(data)));
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
