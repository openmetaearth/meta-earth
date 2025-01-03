/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import {
  FixedDeposit,
  FixedDepositCfg,
  FixedDepositState,
  fixedDepositStateFromJSON,
  fixedDepositStateToJSON,
} from "./fixed_deposit";
import { Meid, MeidNFT } from "./meid";
import { Record, ReviewRecord } from "./record";
import { Region } from "./region";
import {
  DelegationResponse,
  HistoricalInfo,
  Params,
  Pool,
  RedelegationResponse,
  UnbondingDelegation,
  Validator,
} from "./staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator | undefined;
}

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse: DelegationResponse | undefined;
}

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation | undefined;
}

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator | undefined;
}

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: number;
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist: HistoricalInfo | undefined;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRegionRequest {
  regionId: string;
}

export interface QueryGetRegionResponse {
  region: Region | undefined;
}

export interface QueryAllRegionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRegionResponse {
  region: Region[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMeidRequest {
  account: string;
}

export interface QueryGetMeidResponse {
  meid: Meid | undefined;
}

export interface QueryGetUnMeidAmountRequest {
}

export interface QueryGetUnMeidAmountResponse {
  balance: Coin | undefined;
}

export interface QueryRecordsByAddress {
  account: string;
}

export interface QueryRecordsByAddressResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  records: Record[];
}

export interface QueryAllRecords {
  pagination: PageRequest | undefined;
}

export interface QueryAllRecordsResponse {
  records: Record[];
  pagination: PageResponse | undefined;
}

export interface QueryReviewRecordByNumber {
  actionNumber: string;
}

export interface QueryReviewRecordByNumberResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  reviewRecord: ReviewRecord | undefined;
}

export interface QueryAllMeidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMeidResponse {
  meid: Meid[];
  pagination: PageResponse | undefined;
}

export interface QueryMeidByRegionRequest {
  regionId: string;
  pagination: PageRequest | undefined;
}

export interface QueryMeidByRegionResponse {
  meid: Meid[];
  pagination: PageResponse | undefined;
}

export interface QueryFixedDepositByAcctRequest {
  /** cosmos.base.query.v1beta1.PageRequest pagination = 1; */
  account: string;
  queryType: FixedDepositState;
}

export interface QueryFixedDepositByAcctResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit: FixedDeposit[];
}

export interface QueryFixedDepositByRegionRequest {
  regionid: string;
  /** cosmos.base.query.v1beta1.PageRequest pagination = 2; */
  queryType: FixedDepositState;
}

export interface QueryFixedDepositByRegionResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit: FixedDeposit[];
}

export interface QueryGetFixedDepositRequest {
  address: string;
  id: number;
}

export interface QueryGetFixedDepositResponse {
  FixedDeposit: FixedDeposit | undefined;
}

export interface QueryAllFixedDepositRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFixedDepositResponse {
  FixedDeposit: FixedDeposit[];
  pagination: PageResponse | undefined;
}

export interface QueryFixedDepositCfgRequest {
  regionId: string;
}

export interface QueryFixedDepositCfgResponse {
  FixedDepositCfgs: FixedDepositCfg[];
}

export interface QueryFixedDepositCfgByTermRequest {
  regionId: string;
  term: number;
}

export interface QueryFixedDepositCfgByTermResponse {
  FixedDepositCfg: FixedDepositCfg | undefined;
}

export interface QueryGetMeidNFTRequest {
  umeid: string;
}

export interface QueryGetMeidNFTResponse {
  meidNFT: MeidNFT | undefined;
}

export interface QueryAllMeidNFTRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMeidNFTResponse {
  meidNFT: MeidNFT[];
  pagination: PageResponse | undefined;
}

export interface QueryFixedDepositTotalAmountRequest {
}

export interface QueryFixedDepositTotalAmountResponse {
  amount: Coin | undefined;
}

export interface QueryFixedDepositAmountByMeidRequest {
  account: string;
}

export interface QueryFixedDepositAmountByMeidResponse {
  amount: Coin | undefined;
}

export interface QueryCheckIsPledgeByAccountRequest {
  account: string;
}

export interface QueryCheckIsPledgeByAccountResponse {
  isPledge: boolean;
}

export interface QueryGlobalAdminFeePoolReq {
}

export interface QueryGlobalAdminFeePoolResp {
  globalAdminFeePool: string;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return { status: "", pagination: undefined };
}

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(object: I): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return { validators: [], pagination: undefined };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return { validatorAddr: "" };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(object: I): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return { validator: undefined };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined
      && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(object: I): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return { validatorAddr: "", pagination: undefined };
}

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(
    object: I,
  ): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return { delegationResponses: [], pagination: undefined };
}

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(
    object: I,
  ): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return { validatorAddr: "", pagination: undefined };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(
    object: I,
  ): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return { unbondingResponses: [], pagination: undefined };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(
    object: I,
  ): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return { delegatorAddr: "" };
}

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRequest {
    return { delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "" };
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(object: I): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    return message;
  },
};

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return { delegationResponse: undefined };
}

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    return {
      delegationResponse: isSet(object.delegationResponse)
        ? DelegationResponse.fromJSON(object.delegationResponse)
        : undefined,
    };
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse
      ? DelegationResponse.toJSON(message.delegationResponse)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(object: I): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = (object.delegationResponse !== undefined && object.delegationResponse !== null)
      ? DelegationResponse.fromPartial(object.delegationResponse)
      : undefined;
    return message;
  },
};

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return { delegatorAddr: "" };
}

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    return { delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "" };
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(
    object: I,
  ): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    return message;
  },
};

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return { unbond: undefined };
}

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    return { unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined };
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined
      && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(
    object: I,
  ): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = (object.unbond !== undefined && object.unbond !== null)
      ? UnbondingDelegation.fromPartial(object.unbond)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(
    object: I,
  ): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return { delegationResponses: [], pagination: undefined };
}

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(
    object: I,
  ): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(
    object: I,
  ): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return { unbondingResponses: [], pagination: undefined };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(
    object: I,
  ): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return { delegatorAddr: "", srcValidatorAddr: "", dstValidatorAddr: "", pagination: undefined };
}

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRedelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
      dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(object: I): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return { redelegationResponses: [], pagination: undefined };
}

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegationResponses)
        ? object.redelegationResponses.map((e: any) => RedelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) =>
        e ? RedelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(object: I): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map((e) => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return { validators: [], pagination: undefined };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return { delegatorAddr: "", validatorAddr: "" };
}

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return { validator: undefined };
}

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined
      && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return { height: 0 };
}

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    return { height: isSet(object.height) ? Number(object.height) : 0 };
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(object: I): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return { hist: undefined };
}

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    return { hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined };
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(object: I): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = (object.hist !== undefined && object.hist !== null)
      ? HistoricalInfo.fromPartial(object.hist)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(_: any): QueryPoolRequest {
    return {};
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(_: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRegionRequest(): QueryGetRegionRequest {
  return { regionId: "" };
}

export const QueryGetRegionRequest = {
  encode(message: QueryGetRegionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRegionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRegionRequest();
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

  fromJSON(object: any): QueryGetRegionRequest {
    return { regionId: isSet(object.regionId) ? String(object.regionId) : "" };
  },

  toJSON(message: QueryGetRegionRequest): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRegionRequest>, I>>(object: I): QueryGetRegionRequest {
    const message = createBaseQueryGetRegionRequest();
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseQueryGetRegionResponse(): QueryGetRegionResponse {
  return { region: undefined };
}

export const QueryGetRegionResponse = {
  encode(message: QueryGetRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== undefined) {
      Region.encode(message.region, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region = Region.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRegionResponse {
    return { region: isSet(object.region) ? Region.fromJSON(object.region) : undefined };
  },

  toJSON(message: QueryGetRegionResponse): unknown {
    const obj: any = {};
    message.region !== undefined && (obj.region = message.region ? Region.toJSON(message.region) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRegionResponse>, I>>(object: I): QueryGetRegionResponse {
    const message = createBaseQueryGetRegionResponse();
    message.region = (object.region !== undefined && object.region !== null)
      ? Region.fromPartial(object.region)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRegionRequest(): QueryAllRegionRequest {
  return { pagination: undefined };
}

export const QueryAllRegionRequest = {
  encode(message: QueryAllRegionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRegionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRegionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRegionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRegionRequest>, I>>(object: I): QueryAllRegionRequest {
    const message = createBaseQueryAllRegionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRegionResponse(): QueryAllRegionResponse {
  return { region: [], pagination: undefined };
}

export const QueryAllRegionResponse = {
  encode(message: QueryAllRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.region) {
      Region.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.region.push(Region.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRegionResponse {
    return {
      region: Array.isArray(object?.region) ? object.region.map((e: any) => Region.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRegionResponse): unknown {
    const obj: any = {};
    if (message.region) {
      obj.region = message.region.map((e) => e ? Region.toJSON(e) : undefined);
    } else {
      obj.region = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRegionResponse>, I>>(object: I): QueryAllRegionResponse {
    const message = createBaseQueryAllRegionResponse();
    message.region = object.region?.map((e) => Region.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMeidRequest(): QueryGetMeidRequest {
  return { account: "" };
}

export const QueryGetMeidRequest = {
  encode(message: QueryGetMeidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeidRequest {
    return { account: isSet(object.account) ? String(object.account) : "" };
  },

  toJSON(message: QueryGetMeidRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeidRequest>, I>>(object: I): QueryGetMeidRequest {
    const message = createBaseQueryGetMeidRequest();
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryGetMeidResponse(): QueryGetMeidResponse {
  return { meid: undefined };
}

export const QueryGetMeidResponse = {
  encode(message: QueryGetMeidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meid !== undefined) {
      Meid.encode(message.meid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meid = Meid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeidResponse {
    return { meid: isSet(object.meid) ? Meid.fromJSON(object.meid) : undefined };
  },

  toJSON(message: QueryGetMeidResponse): unknown {
    const obj: any = {};
    message.meid !== undefined && (obj.meid = message.meid ? Meid.toJSON(message.meid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeidResponse>, I>>(object: I): QueryGetMeidResponse {
    const message = createBaseQueryGetMeidResponse();
    message.meid = (object.meid !== undefined && object.meid !== null) ? Meid.fromPartial(object.meid) : undefined;
    return message;
  },
};

function createBaseQueryGetUnMeidAmountRequest(): QueryGetUnMeidAmountRequest {
  return {};
}

export const QueryGetUnMeidAmountRequest = {
  encode(_: QueryGetUnMeidAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnMeidAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnMeidAmountRequest();
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

  fromJSON(_: any): QueryGetUnMeidAmountRequest {
    return {};
  },

  toJSON(_: QueryGetUnMeidAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUnMeidAmountRequest>, I>>(_: I): QueryGetUnMeidAmountRequest {
    const message = createBaseQueryGetUnMeidAmountRequest();
    return message;
  },
};

function createBaseQueryGetUnMeidAmountResponse(): QueryGetUnMeidAmountResponse {
  return { balance: undefined };
}

export const QueryGetUnMeidAmountResponse = {
  encode(message: QueryGetUnMeidAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUnMeidAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUnMeidAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUnMeidAmountResponse {
    return { balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined };
  },

  toJSON(message: QueryGetUnMeidAmountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUnMeidAmountResponse>, I>>(object: I): QueryGetUnMeidAmountResponse {
    const message = createBaseQueryGetUnMeidAmountResponse();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseQueryRecordsByAddress(): QueryRecordsByAddress {
  return { account: "" };
}

export const QueryRecordsByAddress = {
  encode(message: QueryRecordsByAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsByAddress {
    return { account: isSet(object.account) ? String(object.account) : "" };
  },

  toJSON(message: QueryRecordsByAddress): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordsByAddress>, I>>(object: I): QueryRecordsByAddress {
    const message = createBaseQueryRecordsByAddress();
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryRecordsByAddressResponse(): QueryRecordsByAddressResponse {
  return { records: [] };
}

export const QueryRecordsByAddressResponse = {
  encode(message: QueryRecordsByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(Record.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsByAddressResponse {
    return { records: Array.isArray(object?.records) ? object.records.map((e: any) => Record.fromJSON(e)) : [] };
  },

  toJSON(message: QueryRecordsByAddressResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? Record.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordsByAddressResponse>, I>>(
    object: I,
  ): QueryRecordsByAddressResponse {
    const message = createBaseQueryRecordsByAddressResponse();
    message.records = object.records?.map((e) => Record.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllRecords(): QueryAllRecords {
  return { pagination: undefined };
}

export const QueryAllRecords = {
  encode(message: QueryAllRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRecords {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRecords): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRecords>, I>>(object: I): QueryAllRecords {
    const message = createBaseQueryAllRecords();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRecordsResponse(): QueryAllRecordsResponse {
  return { records: [], pagination: undefined };
}

export const QueryAllRecordsResponse = {
  encode(message: QueryAllRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(Record.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => Record.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? Record.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRecordsResponse>, I>>(object: I): QueryAllRecordsResponse {
    const message = createBaseQueryAllRecordsResponse();
    message.records = object.records?.map((e) => Record.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryReviewRecordByNumber(): QueryReviewRecordByNumber {
  return { actionNumber: "" };
}

export const QueryReviewRecordByNumber = {
  encode(message: QueryReviewRecordByNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionNumber !== "") {
      writer.uint32(10).string(message.actionNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReviewRecordByNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReviewRecordByNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReviewRecordByNumber {
    return { actionNumber: isSet(object.actionNumber) ? String(object.actionNumber) : "" };
  },

  toJSON(message: QueryReviewRecordByNumber): unknown {
    const obj: any = {};
    message.actionNumber !== undefined && (obj.actionNumber = message.actionNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReviewRecordByNumber>, I>>(object: I): QueryReviewRecordByNumber {
    const message = createBaseQueryReviewRecordByNumber();
    message.actionNumber = object.actionNumber ?? "";
    return message;
  },
};

function createBaseQueryReviewRecordByNumberResponse(): QueryReviewRecordByNumberResponse {
  return { reviewRecord: undefined };
}

export const QueryReviewRecordByNumberResponse = {
  encode(message: QueryReviewRecordByNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewRecord !== undefined) {
      ReviewRecord.encode(message.reviewRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReviewRecordByNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReviewRecordByNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewRecord = ReviewRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReviewRecordByNumberResponse {
    return { reviewRecord: isSet(object.reviewRecord) ? ReviewRecord.fromJSON(object.reviewRecord) : undefined };
  },

  toJSON(message: QueryReviewRecordByNumberResponse): unknown {
    const obj: any = {};
    message.reviewRecord !== undefined
      && (obj.reviewRecord = message.reviewRecord ? ReviewRecord.toJSON(message.reviewRecord) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReviewRecordByNumberResponse>, I>>(
    object: I,
  ): QueryReviewRecordByNumberResponse {
    const message = createBaseQueryReviewRecordByNumberResponse();
    message.reviewRecord = (object.reviewRecord !== undefined && object.reviewRecord !== null)
      ? ReviewRecord.fromPartial(object.reviewRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeidRequest(): QueryAllMeidRequest {
  return { pagination: undefined };
}

export const QueryAllMeidRequest = {
  encode(message: QueryAllMeidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeidRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMeidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeidRequest>, I>>(object: I): QueryAllMeidRequest {
    const message = createBaseQueryAllMeidRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeidResponse(): QueryAllMeidResponse {
  return { meid: [], pagination: undefined };
}

export const QueryAllMeidResponse = {
  encode(message: QueryAllMeidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.meid) {
      Meid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meid.push(Meid.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeidResponse {
    return {
      meid: Array.isArray(object?.meid) ? object.meid.map((e: any) => Meid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMeidResponse): unknown {
    const obj: any = {};
    if (message.meid) {
      obj.meid = message.meid.map((e) => e ? Meid.toJSON(e) : undefined);
    } else {
      obj.meid = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeidResponse>, I>>(object: I): QueryAllMeidResponse {
    const message = createBaseQueryAllMeidResponse();
    message.meid = object.meid?.map((e) => Meid.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMeidByRegionRequest(): QueryMeidByRegionRequest {
  return { regionId: "", pagination: undefined };
}

export const QueryMeidByRegionRequest = {
  encode(message: QueryMeidByRegionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMeidByRegionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMeidByRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMeidByRegionRequest {
    return {
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMeidByRegionRequest): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMeidByRegionRequest>, I>>(object: I): QueryMeidByRegionRequest {
    const message = createBaseQueryMeidByRegionRequest();
    message.regionId = object.regionId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMeidByRegionResponse(): QueryMeidByRegionResponse {
  return { meid: [], pagination: undefined };
}

export const QueryMeidByRegionResponse = {
  encode(message: QueryMeidByRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.meid) {
      Meid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMeidByRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMeidByRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meid.push(Meid.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMeidByRegionResponse {
    return {
      meid: Array.isArray(object?.meid) ? object.meid.map((e: any) => Meid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMeidByRegionResponse): unknown {
    const obj: any = {};
    if (message.meid) {
      obj.meid = message.meid.map((e) => e ? Meid.toJSON(e) : undefined);
    } else {
      obj.meid = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMeidByRegionResponse>, I>>(object: I): QueryMeidByRegionResponse {
    const message = createBaseQueryMeidByRegionResponse();
    message.meid = object.meid?.map((e) => Meid.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFixedDepositByAcctRequest(): QueryFixedDepositByAcctRequest {
  return { account: "", queryType: 0 };
}

export const QueryFixedDepositByAcctRequest = {
  encode(message: QueryFixedDepositByAcctRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.queryType !== 0) {
      writer.uint32(24).int32(message.queryType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositByAcctRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositByAcctRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.queryType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByAcctRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      queryType: isSet(object.queryType) ? fixedDepositStateFromJSON(object.queryType) : 0,
    };
  },

  toJSON(message: QueryFixedDepositByAcctRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.queryType !== undefined && (obj.queryType = fixedDepositStateToJSON(message.queryType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositByAcctRequest>, I>>(
    object: I,
  ): QueryFixedDepositByAcctRequest {
    const message = createBaseQueryFixedDepositByAcctRequest();
    message.account = object.account ?? "";
    message.queryType = object.queryType ?? 0;
    return message;
  },
};

function createBaseQueryFixedDepositByAcctResponse(): QueryFixedDepositByAcctResponse {
  return { FixedDeposit: [] };
}

export const QueryFixedDepositByAcctResponse = {
  encode(message: QueryFixedDepositByAcctResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositByAcctResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositByAcctResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(FixedDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByAcctResponse {
    return {
      FixedDeposit: Array.isArray(object?.FixedDeposit)
        ? object.FixedDeposit.map((e: any) => FixedDeposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFixedDepositByAcctResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) => e ? FixedDeposit.toJSON(e) : undefined);
    } else {
      obj.FixedDeposit = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositByAcctResponse>, I>>(
    object: I,
  ): QueryFixedDepositByAcctResponse {
    const message = createBaseQueryFixedDepositByAcctResponse();
    message.FixedDeposit = object.FixedDeposit?.map((e) => FixedDeposit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFixedDepositByRegionRequest(): QueryFixedDepositByRegionRequest {
  return { regionid: "", queryType: 0 };
}

export const QueryFixedDepositByRegionRequest = {
  encode(message: QueryFixedDepositByRegionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionid !== "") {
      writer.uint32(10).string(message.regionid);
    }
    if (message.queryType !== 0) {
      writer.uint32(24).int32(message.queryType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositByRegionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositByRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionid = reader.string();
          break;
        case 3:
          message.queryType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByRegionRequest {
    return {
      regionid: isSet(object.regionid) ? String(object.regionid) : "",
      queryType: isSet(object.queryType) ? fixedDepositStateFromJSON(object.queryType) : 0,
    };
  },

  toJSON(message: QueryFixedDepositByRegionRequest): unknown {
    const obj: any = {};
    message.regionid !== undefined && (obj.regionid = message.regionid);
    message.queryType !== undefined && (obj.queryType = fixedDepositStateToJSON(message.queryType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositByRegionRequest>, I>>(
    object: I,
  ): QueryFixedDepositByRegionRequest {
    const message = createBaseQueryFixedDepositByRegionRequest();
    message.regionid = object.regionid ?? "";
    message.queryType = object.queryType ?? 0;
    return message;
  },
};

function createBaseQueryFixedDepositByRegionResponse(): QueryFixedDepositByRegionResponse {
  return { FixedDeposit: [] };
}

export const QueryFixedDepositByRegionResponse = {
  encode(message: QueryFixedDepositByRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositByRegionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositByRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(FixedDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositByRegionResponse {
    return {
      FixedDeposit: Array.isArray(object?.FixedDeposit)
        ? object.FixedDeposit.map((e: any) => FixedDeposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFixedDepositByRegionResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) => e ? FixedDeposit.toJSON(e) : undefined);
    } else {
      obj.FixedDeposit = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositByRegionResponse>, I>>(
    object: I,
  ): QueryFixedDepositByRegionResponse {
    const message = createBaseQueryFixedDepositByRegionResponse();
    message.FixedDeposit = object.FixedDeposit?.map((e) => FixedDeposit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetFixedDepositRequest(): QueryGetFixedDepositRequest {
  return { address: "", id: 0 };
}

export const QueryGetFixedDepositRequest = {
  encode(message: QueryGetFixedDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixedDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixedDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryGetFixedDepositRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: QueryGetFixedDepositRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFixedDepositRequest>, I>>(object: I): QueryGetFixedDepositRequest {
    const message = createBaseQueryGetFixedDepositRequest();
    message.address = object.address ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetFixedDepositResponse(): QueryGetFixedDepositResponse {
  return { FixedDeposit: undefined };
}

export const QueryGetFixedDepositResponse = {
  encode(message: QueryGetFixedDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FixedDeposit !== undefined) {
      FixedDeposit.encode(message.FixedDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixedDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixedDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit = FixedDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFixedDepositResponse {
    return { FixedDeposit: isSet(object.FixedDeposit) ? FixedDeposit.fromJSON(object.FixedDeposit) : undefined };
  },

  toJSON(message: QueryGetFixedDepositResponse): unknown {
    const obj: any = {};
    message.FixedDeposit !== undefined
      && (obj.FixedDeposit = message.FixedDeposit ? FixedDeposit.toJSON(message.FixedDeposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFixedDepositResponse>, I>>(object: I): QueryGetFixedDepositResponse {
    const message = createBaseQueryGetFixedDepositResponse();
    message.FixedDeposit = (object.FixedDeposit !== undefined && object.FixedDeposit !== null)
      ? FixedDeposit.fromPartial(object.FixedDeposit)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFixedDepositRequest(): QueryAllFixedDepositRequest {
  return { pagination: undefined };
}

export const QueryAllFixedDepositRequest = {
  encode(message: QueryAllFixedDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixedDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixedDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFixedDepositRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFixedDepositRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFixedDepositRequest>, I>>(object: I): QueryAllFixedDepositRequest {
    const message = createBaseQueryAllFixedDepositRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFixedDepositResponse(): QueryAllFixedDepositResponse {
  return { FixedDeposit: [], pagination: undefined };
}

export const QueryAllFixedDepositResponse = {
  encode(message: QueryAllFixedDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.FixedDeposit) {
      FixedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixedDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixedDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDeposit.push(FixedDeposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFixedDepositResponse {
    return {
      FixedDeposit: Array.isArray(object?.FixedDeposit)
        ? object.FixedDeposit.map((e: any) => FixedDeposit.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFixedDepositResponse): unknown {
    const obj: any = {};
    if (message.FixedDeposit) {
      obj.FixedDeposit = message.FixedDeposit.map((e) => e ? FixedDeposit.toJSON(e) : undefined);
    } else {
      obj.FixedDeposit = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFixedDepositResponse>, I>>(object: I): QueryAllFixedDepositResponse {
    const message = createBaseQueryAllFixedDepositResponse();
    message.FixedDeposit = object.FixedDeposit?.map((e) => FixedDeposit.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFixedDepositCfgRequest(): QueryFixedDepositCfgRequest {
  return { regionId: "" };
}

export const QueryFixedDepositCfgRequest = {
  encode(message: QueryFixedDepositCfgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositCfgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositCfgRequest();
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

  fromJSON(object: any): QueryFixedDepositCfgRequest {
    return { regionId: isSet(object.regionId) ? String(object.regionId) : "" };
  },

  toJSON(message: QueryFixedDepositCfgRequest): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositCfgRequest>, I>>(object: I): QueryFixedDepositCfgRequest {
    const message = createBaseQueryFixedDepositCfgRequest();
    message.regionId = object.regionId ?? "";
    return message;
  },
};

function createBaseQueryFixedDepositCfgResponse(): QueryFixedDepositCfgResponse {
  return { FixedDepositCfgs: [] };
}

export const QueryFixedDepositCfgResponse = {
  encode(message: QueryFixedDepositCfgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.FixedDepositCfgs) {
      FixedDepositCfg.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositCfgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositCfgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDepositCfgs.push(FixedDepositCfg.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositCfgResponse {
    return {
      FixedDepositCfgs: Array.isArray(object?.FixedDepositCfgs)
        ? object.FixedDepositCfgs.map((e: any) => FixedDepositCfg.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFixedDepositCfgResponse): unknown {
    const obj: any = {};
    if (message.FixedDepositCfgs) {
      obj.FixedDepositCfgs = message.FixedDepositCfgs.map((e) => e ? FixedDepositCfg.toJSON(e) : undefined);
    } else {
      obj.FixedDepositCfgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositCfgResponse>, I>>(object: I): QueryFixedDepositCfgResponse {
    const message = createBaseQueryFixedDepositCfgResponse();
    message.FixedDepositCfgs = object.FixedDepositCfgs?.map((e) => FixedDepositCfg.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFixedDepositCfgByTermRequest(): QueryFixedDepositCfgByTermRequest {
  return { regionId: "", term: 0 };
}

export const QueryFixedDepositCfgByTermRequest = {
  encode(message: QueryFixedDepositCfgByTermRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    if (message.term !== 0) {
      writer.uint32(16).int64(message.term);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositCfgByTermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositCfgByTermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.term = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositCfgByTermRequest {
    return {
      regionId: isSet(object.regionId) ? String(object.regionId) : "",
      term: isSet(object.term) ? Number(object.term) : 0,
    };
  },

  toJSON(message: QueryFixedDepositCfgByTermRequest): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    message.term !== undefined && (obj.term = Math.round(message.term));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositCfgByTermRequest>, I>>(
    object: I,
  ): QueryFixedDepositCfgByTermRequest {
    const message = createBaseQueryFixedDepositCfgByTermRequest();
    message.regionId = object.regionId ?? "";
    message.term = object.term ?? 0;
    return message;
  },
};

function createBaseQueryFixedDepositCfgByTermResponse(): QueryFixedDepositCfgByTermResponse {
  return { FixedDepositCfg: undefined };
}

export const QueryFixedDepositCfgByTermResponse = {
  encode(message: QueryFixedDepositCfgByTermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FixedDepositCfg !== undefined) {
      FixedDepositCfg.encode(message.FixedDepositCfg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositCfgByTermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositCfgByTermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FixedDepositCfg = FixedDepositCfg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositCfgByTermResponse {
    return {
      FixedDepositCfg: isSet(object.FixedDepositCfg) ? FixedDepositCfg.fromJSON(object.FixedDepositCfg) : undefined,
    };
  },

  toJSON(message: QueryFixedDepositCfgByTermResponse): unknown {
    const obj: any = {};
    message.FixedDepositCfg !== undefined
      && (obj.FixedDepositCfg = message.FixedDepositCfg ? FixedDepositCfg.toJSON(message.FixedDepositCfg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositCfgByTermResponse>, I>>(
    object: I,
  ): QueryFixedDepositCfgByTermResponse {
    const message = createBaseQueryFixedDepositCfgByTermResponse();
    message.FixedDepositCfg = (object.FixedDepositCfg !== undefined && object.FixedDepositCfg !== null)
      ? FixedDepositCfg.fromPartial(object.FixedDepositCfg)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMeidNFTRequest(): QueryGetMeidNFTRequest {
  return { umeid: "" };
}

export const QueryGetMeidNFTRequest = {
  encode(message: QueryGetMeidNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.umeid !== "") {
      writer.uint32(10).string(message.umeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeidNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeidNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.umeid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeidNFTRequest {
    return { umeid: isSet(object.umeid) ? String(object.umeid) : "" };
  },

  toJSON(message: QueryGetMeidNFTRequest): unknown {
    const obj: any = {};
    message.umeid !== undefined && (obj.umeid = message.umeid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeidNFTRequest>, I>>(object: I): QueryGetMeidNFTRequest {
    const message = createBaseQueryGetMeidNFTRequest();
    message.umeid = object.umeid ?? "";
    return message;
  },
};

function createBaseQueryGetMeidNFTResponse(): QueryGetMeidNFTResponse {
  return { meidNFT: undefined };
}

export const QueryGetMeidNFTResponse = {
  encode(message: QueryGetMeidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meidNFT !== undefined) {
      MeidNFT.encode(message.meidNFT, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeidNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meidNFT = MeidNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeidNFTResponse {
    return { meidNFT: isSet(object.meidNFT) ? MeidNFT.fromJSON(object.meidNFT) : undefined };
  },

  toJSON(message: QueryGetMeidNFTResponse): unknown {
    const obj: any = {};
    message.meidNFT !== undefined && (obj.meidNFT = message.meidNFT ? MeidNFT.toJSON(message.meidNFT) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeidNFTResponse>, I>>(object: I): QueryGetMeidNFTResponse {
    const message = createBaseQueryGetMeidNFTResponse();
    message.meidNFT = (object.meidNFT !== undefined && object.meidNFT !== null)
      ? MeidNFT.fromPartial(object.meidNFT)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeidNFTRequest(): QueryAllMeidNFTRequest {
  return { pagination: undefined };
}

export const QueryAllMeidNFTRequest = {
  encode(message: QueryAllMeidNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeidNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeidNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeidNFTRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMeidNFTRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeidNFTRequest>, I>>(object: I): QueryAllMeidNFTRequest {
    const message = createBaseQueryAllMeidNFTRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeidNFTResponse(): QueryAllMeidNFTResponse {
  return { meidNFT: [], pagination: undefined };
}

export const QueryAllMeidNFTResponse = {
  encode(message: QueryAllMeidNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.meidNFT) {
      MeidNFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeidNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeidNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meidNFT.push(MeidNFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeidNFTResponse {
    return {
      meidNFT: Array.isArray(object?.meidNFT) ? object.meidNFT.map((e: any) => MeidNFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMeidNFTResponse): unknown {
    const obj: any = {};
    if (message.meidNFT) {
      obj.meidNFT = message.meidNFT.map((e) => e ? MeidNFT.toJSON(e) : undefined);
    } else {
      obj.meidNFT = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeidNFTResponse>, I>>(object: I): QueryAllMeidNFTResponse {
    const message = createBaseQueryAllMeidNFTResponse();
    message.meidNFT = object.meidNFT?.map((e) => MeidNFT.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFixedDepositTotalAmountRequest(): QueryFixedDepositTotalAmountRequest {
  return {};
}

export const QueryFixedDepositTotalAmountRequest = {
  encode(_: QueryFixedDepositTotalAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositTotalAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositTotalAmountRequest();
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

  fromJSON(_: any): QueryFixedDepositTotalAmountRequest {
    return {};
  },

  toJSON(_: QueryFixedDepositTotalAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositTotalAmountRequest>, I>>(
    _: I,
  ): QueryFixedDepositTotalAmountRequest {
    const message = createBaseQueryFixedDepositTotalAmountRequest();
    return message;
  },
};

function createBaseQueryFixedDepositTotalAmountResponse(): QueryFixedDepositTotalAmountResponse {
  return { amount: undefined };
}

export const QueryFixedDepositTotalAmountResponse = {
  encode(message: QueryFixedDepositTotalAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositTotalAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositTotalAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositTotalAmountResponse {
    return { amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined };
  },

  toJSON(message: QueryFixedDepositTotalAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositTotalAmountResponse>, I>>(
    object: I,
  ): QueryFixedDepositTotalAmountResponse {
    const message = createBaseQueryFixedDepositTotalAmountResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseQueryFixedDepositAmountByMeidRequest(): QueryFixedDepositAmountByMeidRequest {
  return { account: "" };
}

export const QueryFixedDepositAmountByMeidRequest = {
  encode(message: QueryFixedDepositAmountByMeidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositAmountByMeidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositAmountByMeidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositAmountByMeidRequest {
    return { account: isSet(object.account) ? String(object.account) : "" };
  },

  toJSON(message: QueryFixedDepositAmountByMeidRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositAmountByMeidRequest>, I>>(
    object: I,
  ): QueryFixedDepositAmountByMeidRequest {
    const message = createBaseQueryFixedDepositAmountByMeidRequest();
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryFixedDepositAmountByMeidResponse(): QueryFixedDepositAmountByMeidResponse {
  return { amount: undefined };
}

export const QueryFixedDepositAmountByMeidResponse = {
  encode(message: QueryFixedDepositAmountByMeidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFixedDepositAmountByMeidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFixedDepositAmountByMeidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFixedDepositAmountByMeidResponse {
    return { amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined };
  },

  toJSON(message: QueryFixedDepositAmountByMeidResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFixedDepositAmountByMeidResponse>, I>>(
    object: I,
  ): QueryFixedDepositAmountByMeidResponse {
    const message = createBaseQueryFixedDepositAmountByMeidResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseQueryCheckIsPledgeByAccountRequest(): QueryCheckIsPledgeByAccountRequest {
  return { account: "" };
}

export const QueryCheckIsPledgeByAccountRequest = {
  encode(message: QueryCheckIsPledgeByAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckIsPledgeByAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckIsPledgeByAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckIsPledgeByAccountRequest {
    return { account: isSet(object.account) ? String(object.account) : "" };
  },

  toJSON(message: QueryCheckIsPledgeByAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckIsPledgeByAccountRequest>, I>>(
    object: I,
  ): QueryCheckIsPledgeByAccountRequest {
    const message = createBaseQueryCheckIsPledgeByAccountRequest();
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseQueryCheckIsPledgeByAccountResponse(): QueryCheckIsPledgeByAccountResponse {
  return { isPledge: false };
}

export const QueryCheckIsPledgeByAccountResponse = {
  encode(message: QueryCheckIsPledgeByAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPledge === true) {
      writer.uint32(8).bool(message.isPledge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckIsPledgeByAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckIsPledgeByAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPledge = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckIsPledgeByAccountResponse {
    return { isPledge: isSet(object.isPledge) ? Boolean(object.isPledge) : false };
  },

  toJSON(message: QueryCheckIsPledgeByAccountResponse): unknown {
    const obj: any = {};
    message.isPledge !== undefined && (obj.isPledge = message.isPledge);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckIsPledgeByAccountResponse>, I>>(
    object: I,
  ): QueryCheckIsPledgeByAccountResponse {
    const message = createBaseQueryCheckIsPledgeByAccountResponse();
    message.isPledge = object.isPledge ?? false;
    return message;
  },
};

function createBaseQueryGlobalAdminFeePoolReq(): QueryGlobalAdminFeePoolReq {
  return {};
}

export const QueryGlobalAdminFeePoolReq = {
  encode(_: QueryGlobalAdminFeePoolReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalAdminFeePoolReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalAdminFeePoolReq();
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

  fromJSON(_: any): QueryGlobalAdminFeePoolReq {
    return {};
  },

  toJSON(_: QueryGlobalAdminFeePoolReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalAdminFeePoolReq>, I>>(_: I): QueryGlobalAdminFeePoolReq {
    const message = createBaseQueryGlobalAdminFeePoolReq();
    return message;
  },
};

function createBaseQueryGlobalAdminFeePoolResp(): QueryGlobalAdminFeePoolResp {
  return { globalAdminFeePool: "" };
}

export const QueryGlobalAdminFeePoolResp = {
  encode(message: QueryGlobalAdminFeePoolResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalAdminFeePool !== "") {
      writer.uint32(10).string(message.globalAdminFeePool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlobalAdminFeePoolResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlobalAdminFeePoolResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalAdminFeePool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGlobalAdminFeePoolResp {
    return { globalAdminFeePool: isSet(object.globalAdminFeePool) ? String(object.globalAdminFeePool) : "" };
  },

  toJSON(message: QueryGlobalAdminFeePoolResp): unknown {
    const obj: any = {};
    message.globalAdminFeePool !== undefined && (obj.globalAdminFeePool = message.globalAdminFeePool);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGlobalAdminFeePoolResp>, I>>(object: I): QueryGlobalAdminFeePoolResp {
    const message = createBaseQueryGlobalAdminFeePoolResp();
    message.globalAdminFeePool = object.globalAdminFeePool ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Validators queries all validators that match the given status.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /**
   * ValidatorDelegations queries delegate info for given validator.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   *  rpc DelegatorValidator(QueryDelegatorValidatorRequest) returns (QueryDelegatorValidatorResponse) {
   *    option (cosmos.query.v1.module_query_safe) = true;
   *    option (google.api.http).get = "/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/"
   *                                   "{validator_addr}";
   *  }
   */
  QueryAllRecord(request: QueryAllRecords): Promise<QueryAllRecordsResponse>;
  QueryRecordByAddress(request: QueryRecordsByAddress): Promise<QueryRecordsByAddressResponse>;
  QueryReviewRecordByID(request: QueryReviewRecordByNumber): Promise<QueryReviewRecordByNumberResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Region items. */
  Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse>;
  RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse>;
  /** Queries a list of Meid items. */
  Meid(request: QueryGetMeidRequest): Promise<QueryGetMeidResponse>;
  MeidAll(request: QueryAllMeidRequest): Promise<QueryAllMeidResponse>;
  /** Queries a list of MeidByRegion items. */
  MeidByRegion(request: QueryMeidByRegionRequest): Promise<QueryMeidByRegionResponse>;
  /** Queries a list of FixedDepositByAcct items. */
  FixedDepositByAcct(request: QueryFixedDepositByAcctRequest): Promise<QueryFixedDepositByAcctResponse>;
  /** Queries a list of FixedDepositByRegion items. */
  FixedDepositByRegion(request: QueryFixedDepositByRegionRequest): Promise<QueryFixedDepositByRegionResponse>;
  /** Queries a list of FixedDeposit items. */
  FixedDeposit(request: QueryGetFixedDepositRequest): Promise<QueryGetFixedDepositResponse>;
  FixedDepositAll(request: QueryAllFixedDepositRequest): Promise<QueryAllFixedDepositResponse>;
  FixedDepositCfg(request: QueryFixedDepositCfgRequest): Promise<QueryFixedDepositCfgResponse>;
  FixedDepositCfgByTerm(request: QueryFixedDepositCfgByTermRequest): Promise<QueryFixedDepositCfgByTermResponse>;
  MeidNFT(request: QueryGetMeidNFTRequest): Promise<QueryGetMeidNFTResponse>;
  MeidNFTAll(request: QueryAllMeidNFTRequest): Promise<QueryAllMeidNFTResponse>;
  /** Queries un-Meid amount. */
  UnMeidAmount(request: QueryGetUnMeidAmountRequest): Promise<QueryGetUnMeidAmountResponse>;
  FixedDepositTotalAmount(request: QueryFixedDepositTotalAmountRequest): Promise<QueryFixedDepositTotalAmountResponse>;
  FixedDepositAmountByMeid(
    request: QueryFixedDepositAmountByMeidRequest,
  ): Promise<QueryFixedDepositAmountByMeidResponse>;
  CheckIsPledgeByAccount(request: QueryCheckIsPledgeByAccountRequest): Promise<QueryCheckIsPledgeByAccountResponse>;
  GlobalAdminFeePool(request: QueryGlobalAdminFeePoolReq): Promise<QueryGlobalAdminFeePoolResp>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.QueryAllRecord = this.QueryAllRecord.bind(this);
    this.QueryRecordByAddress = this.QueryRecordByAddress.bind(this);
    this.QueryReviewRecordByID = this.QueryReviewRecordByID.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
    this.Region = this.Region.bind(this);
    this.RegionAll = this.RegionAll.bind(this);
    this.Meid = this.Meid.bind(this);
    this.MeidAll = this.MeidAll.bind(this);
    this.MeidByRegion = this.MeidByRegion.bind(this);
    this.FixedDepositByAcct = this.FixedDepositByAcct.bind(this);
    this.FixedDepositByRegion = this.FixedDepositByRegion.bind(this);
    this.FixedDeposit = this.FixedDeposit.bind(this);
    this.FixedDepositAll = this.FixedDepositAll.bind(this);
    this.FixedDepositCfg = this.FixedDepositCfg.bind(this);
    this.FixedDepositCfgByTerm = this.FixedDepositCfgByTerm.bind(this);
    this.MeidNFT = this.MeidNFT.bind(this);
    this.MeidNFTAll = this.MeidNFTAll.bind(this);
    this.UnMeidAmount = this.UnMeidAmount.bind(this);
    this.FixedDepositTotalAmount = this.FixedDepositTotalAmount.bind(this);
    this.FixedDepositAmountByMeid = this.FixedDepositAmountByMeid.bind(this);
    this.CheckIsPledgeByAccount = this.CheckIsPledgeByAccount.bind(this);
    this.GlobalAdminFeePool = this.GlobalAdminFeePool.bind(this);
  }
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then((data) => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then((data) => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then((data) => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then((data) => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then((data) => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  QueryAllRecord(request: QueryAllRecords): Promise<QueryAllRecordsResponse> {
    const data = QueryAllRecords.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "QueryAllRecord", data);
    return promise.then((data) => QueryAllRecordsResponse.decode(new _m0.Reader(data)));
  }

  QueryRecordByAddress(request: QueryRecordsByAddress): Promise<QueryRecordsByAddressResponse> {
    const data = QueryRecordsByAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "QueryRecordByAddress", data);
    return promise.then((data) => QueryRecordsByAddressResponse.decode(new _m0.Reader(data)));
  }

  QueryReviewRecordByID(request: QueryReviewRecordByNumber): Promise<QueryReviewRecordByNumberResponse> {
    const data = QueryReviewRecordByNumber.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "QueryReviewRecordByID", data);
    return promise.then((data) => QueryReviewRecordByNumberResponse.decode(new _m0.Reader(data)));
  }

  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then((data) => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse> {
    const data = QueryGetRegionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Region", data);
    return promise.then((data) => QueryGetRegionResponse.decode(new _m0.Reader(data)));
  }

  RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse> {
    const data = QueryAllRegionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "RegionAll", data);
    return promise.then((data) => QueryAllRegionResponse.decode(new _m0.Reader(data)));
  }

  Meid(request: QueryGetMeidRequest): Promise<QueryGetMeidResponse> {
    const data = QueryGetMeidRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Meid", data);
    return promise.then((data) => QueryGetMeidResponse.decode(new _m0.Reader(data)));
  }

  MeidAll(request: QueryAllMeidRequest): Promise<QueryAllMeidResponse> {
    const data = QueryAllMeidRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "MeidAll", data);
    return promise.then((data) => QueryAllMeidResponse.decode(new _m0.Reader(data)));
  }

  MeidByRegion(request: QueryMeidByRegionRequest): Promise<QueryMeidByRegionResponse> {
    const data = QueryMeidByRegionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "MeidByRegion", data);
    return promise.then((data) => QueryMeidByRegionResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositByAcct(request: QueryFixedDepositByAcctRequest): Promise<QueryFixedDepositByAcctResponse> {
    const data = QueryFixedDepositByAcctRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositByAcct", data);
    return promise.then((data) => QueryFixedDepositByAcctResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositByRegion(request: QueryFixedDepositByRegionRequest): Promise<QueryFixedDepositByRegionResponse> {
    const data = QueryFixedDepositByRegionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositByRegion", data);
    return promise.then((data) => QueryFixedDepositByRegionResponse.decode(new _m0.Reader(data)));
  }

  FixedDeposit(request: QueryGetFixedDepositRequest): Promise<QueryGetFixedDepositResponse> {
    const data = QueryGetFixedDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDeposit", data);
    return promise.then((data) => QueryGetFixedDepositResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositAll(request: QueryAllFixedDepositRequest): Promise<QueryAllFixedDepositResponse> {
    const data = QueryAllFixedDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositAll", data);
    return promise.then((data) => QueryAllFixedDepositResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositCfg(request: QueryFixedDepositCfgRequest): Promise<QueryFixedDepositCfgResponse> {
    const data = QueryFixedDepositCfgRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositCfg", data);
    return promise.then((data) => QueryFixedDepositCfgResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositCfgByTerm(request: QueryFixedDepositCfgByTermRequest): Promise<QueryFixedDepositCfgByTermResponse> {
    const data = QueryFixedDepositCfgByTermRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositCfgByTerm", data);
    return promise.then((data) => QueryFixedDepositCfgByTermResponse.decode(new _m0.Reader(data)));
  }

  MeidNFT(request: QueryGetMeidNFTRequest): Promise<QueryGetMeidNFTResponse> {
    const data = QueryGetMeidNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "MeidNFT", data);
    return promise.then((data) => QueryGetMeidNFTResponse.decode(new _m0.Reader(data)));
  }

  MeidNFTAll(request: QueryAllMeidNFTRequest): Promise<QueryAllMeidNFTResponse> {
    const data = QueryAllMeidNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "MeidNFTAll", data);
    return promise.then((data) => QueryAllMeidNFTResponse.decode(new _m0.Reader(data)));
  }

  UnMeidAmount(request: QueryGetUnMeidAmountRequest): Promise<QueryGetUnMeidAmountResponse> {
    const data = QueryGetUnMeidAmountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnMeidAmount", data);
    return promise.then((data) => QueryGetUnMeidAmountResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositTotalAmount(request: QueryFixedDepositTotalAmountRequest): Promise<QueryFixedDepositTotalAmountResponse> {
    const data = QueryFixedDepositTotalAmountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositTotalAmount", data);
    return promise.then((data) => QueryFixedDepositTotalAmountResponse.decode(new _m0.Reader(data)));
  }

  FixedDepositAmountByMeid(
    request: QueryFixedDepositAmountByMeidRequest,
  ): Promise<QueryFixedDepositAmountByMeidResponse> {
    const data = QueryFixedDepositAmountByMeidRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "FixedDepositAmountByMeid", data);
    return promise.then((data) => QueryFixedDepositAmountByMeidResponse.decode(new _m0.Reader(data)));
  }

  CheckIsPledgeByAccount(request: QueryCheckIsPledgeByAccountRequest): Promise<QueryCheckIsPledgeByAccountResponse> {
    const data = QueryCheckIsPledgeByAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "CheckIsPledgeByAccount", data);
    return promise.then((data) => QueryCheckIsPledgeByAccountResponse.decode(new _m0.Reader(data)));
  }

  GlobalAdminFeePool(request: QueryGlobalAdminFeePoolReq): Promise<QueryGlobalAdminFeePoolResp> {
    const data = QueryGlobalAdminFeePoolReq.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "GlobalAdminFeePool", data);
    return promise.then((data) => QueryGlobalAdminFeePoolResp.decode(new _m0.Reader(data)));
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
