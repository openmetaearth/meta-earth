/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Validator defines a validator, together with the total amount of the
Validator's bond shares and their exchange rate to coins. Slashing results in
a decrease in the exchange rate, allowing correct calculation of future
undelegations without iterating over delegators. When coins are delegated to
this validator, the validator is credited with a delegation whose number of
bond shares is based on the amount of coins delegated divided by the current
exchange rate. Voting power can be calculated as total bonded shares
multiplied by exchange rate.
*/
export interface Stakingv1Beta1Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address?: string;

  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensus_pubkey?: ProtobufAny;

  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed?: boolean;

  /** status is the validator status (bonded/unbonding/unbonded). */
  status?: V1Beta1BondStatus;

  /** tokens define the staked tokens (incl. self-stake). */
  tokens?: string;

  /** staker_shares defines total shares issued to a validator's stakers. */
  staker_shares?: string;

  /** description defines the description terms for the validator. */
  description?: V1Beta1Description;

  /**
   * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
   * @format int64
   */
  unbonding_height?: string;

  /**
   * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
   * @format date-time
   */
  unbonding_time?: string;

  /** commission defines the commission parameters. */
  commission?: V1Beta1Commission;

  /**
   * min_self_stake is the validator's self declared minimum self stake.
   *
   * Since: cosmos-sdk 0.46
   */
  min_self_stake?: string;

  /** count delegation amount */
  delegation_amount?: string;

  /** count meid amount */
  meid_amount?: string;

  /** owner_address defines the address of distribute gas income */
  owner_address?: string;

  /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
  unbonding_ids?: string[];

  /**
   * strictly positive if this validator's unbonding has been stopped by external modules
   * @format int64
   */
  unbonding_on_hold_ref_count?: string;
}

export interface TypesBlockID {
  /** @format byte */
  hash?: string;
  part_set_header?: TypesPartSetHeader;
}

/**
 * Header defines the structure of a block header.
 */
export interface TypesHeader {
  /**
   * basic block info
   * Consensus captures the consensus rules for processing a block in the blockchain,
   * including all blockchain data structures and the rules of the application's
   * state transition machine.
   */
  version?: VersionConsensus;
  chain_id?: string;

  /** @format int64 */
  height?: string;

  /** @format date-time */
  time?: string;

  /** prev block info */
  last_block_id?: TypesBlockID;

  /**
   * hashes of block data
   * commit from validators from the last block
   * @format byte
   */
  last_commit_hash?: string;

  /**
   * transactions
   * @format byte
   */
  data_hash?: string;

  /**
   * hashes from the app output from the prev block
   * validators for the current block
   * @format byte
   */
  validators_hash?: string;

  /**
   * validators for the next block
   * @format byte
   */
  next_validators_hash?: string;

  /**
   * consensus params for current block
   * @format byte
   */
  consensus_hash?: string;

  /**
   * state after txs from the previous block
   * @format byte
   */
  app_hash?: string;

  /**
   * root hash of all results from the txs from the previous block
   * @format byte
   */
  last_results_hash?: string;

  /**
   * consensus info
   * evidence included in the block
   * @format byte
   */
  evidence_hash?: string;

  /**
   * original proposer of the block
   * @format byte
   */
  proposer_address?: string;
}

export interface TypesPartSetHeader {
  /** @format int64 */
  total?: number;

  /** @format byte */
  hash?: string;
}

/**
* BondStatus is the status of a validator.

 - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.
 - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.
 - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.
 - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.
*/
export enum V1Beta1BondStatus {
  BOND_STATUS_UNSPECIFIED = "BOND_STATUS_UNSPECIFIED",
  BOND_STATUS_UNBONDED = "BOND_STATUS_UNBONDED",
  BOND_STATUS_UNBONDING = "BOND_STATUS_UNBONDING",
  BOND_STATUS_BONDED = "BOND_STATUS_BONDED",
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
 * Commission defines commission parameters for a given validator.
 */
export interface V1Beta1Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates?: V1Beta1CommissionRates;

  /**
   * update_time is the last time the commission rate was changed.
   * @format date-time
   */
  update_time?: string;
}

/**
* CommissionRates defines the initial commission rates to be used for creating
a validator.
*/
export interface V1Beta1CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate?: string;

  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate?: string;

  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate?: string;
}

/**
* Delegation represents the bond with tokens held by an account. It is
owned by one delegator, and is associated with the voting power of one
validator.
*/
export interface V1Beta1Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;

  /** shares define the delegation shares received. */
  shares?: string;

  /** @format int64 */
  startHeight?: string;
  amount?: string;
  unmovable?: string;
  unMeidAmount?: string;
}

/**
* DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.
*/
export interface V1Beta1DelegationResponse {
  /**
   * Delegation represents the bond with tokens held by an account. It is
   * owned by one delegator, and is associated with the voting power of one
   * validator.
   */
  delegation?: V1Beta1Delegation;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: V1Beta1Coin;
}

/**
 * Description defines a validator description.
 */
export interface V1Beta1Description {
  /** moniker defines a human-readable name for the validator. */
  moniker?: string;

  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;

  /** website defines an optional website link. */
  website?: string;

  /** security_contact defines an optional email for security contact. */
  security_contact?: string;

  /** details define other optional details. */
  details?: string;

  /** regionID define other optional details. */
  regionID?: string;
}

export enum V1Beta1FIXEDDEPOSITCFGSTATUS {
  FIXED_DEPOSIT_CFG_ACTIVE = "FIXED_DEPOSIT_CFG_ACTIVE",
  FIXED_DEPOSIT_CFG_INACTIVE = "FIXED_DEPOSIT_CFG_INACTIVE",
}

export interface V1Beta1FixedDeposit {
  /** @format uint64 */
  id?: string;
  account?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  principal?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  interest?: V1Beta1Coin;

  /** @format date-time */
  start_time?: string;

  /** @format date-time */
  end_time?: string;

  /** @format int64 */
  term?: string;
  rate?: string;
}

export interface V1Beta1FixedDepositCfg {
  regionId?: string;

  /** @format int64 */
  term?: string;
  rate?: string;
  status?: V1Beta1FIXEDDEPOSITCFGSTATUS;
}

export enum V1Beta1FixedDepositState {
  ALL_STATE = "ALL_STATE",
  NOT_EXPIRED = "NOT_EXPIRED",
  EXPIRED = "EXPIRED",
}

/**
* HistoricalInfo contains header and validator information for a given block.
It is stored as part of staking module's state, which persists the `n` most
recent HistoricalInfo
(`n` is set by the staking module's `historical_entries` parameter).
*/
export interface V1Beta1HistoricalInfo {
  /** Header defines the structure of a block header. */
  header?: TypesHeader;
  valset?: Stakingv1Beta1Validator[];
}

export interface V1Beta1Meid {
  account?: string;
  creator?: string;
  regionId?: string;
  regionName?: string;

  /** @format int32 */
  RewardType?: number;
}

export interface V1Beta1MeidNFT {
  creator?: string;
  account?: string;
  regionId?: string;
  regionName?: string;

  /** umeid means user meid. */
  umeid?: string;
  nft_id?: string;
}

/**
 * MsgCreateValidatorResponse defines the Msg/CreateValidator response type.
 */
export type V1Beta1MsgCreateValidatorResponse = object;

/**
 * MsgDelegateResponse defines the Msg/Delegate response type.
 */
export type V1Beta1MsgDelegateResponse = object;

export interface V1Beta1MsgDoFixedDepositResponse {
  /** @format uint64 */
  id?: string;
}

export interface V1Beta1MsgDoFixedWithdrawResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  principal?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  interest?: V1Beta1Coin;

  /** @format int64 */
  term?: string;
  rate?: string;
}

/**
 * MsgEditValidatorResponse defines the Msg/EditValidator response type.
 */
export type V1Beta1MsgEditValidatorResponse = object;

export interface V1Beta1MsgNewFixedDepositCfgResp {
  retcode?: string;
}

export interface V1Beta1MsgNewMeidNFTResponse {
  retcode?: string;
}

export interface V1Beta1MsgNewMeidResponse {
  retcode?: string;
}

export type V1Beta1MsgNewRecordResponse = object;

export interface V1Beta1MsgNewRegionResponse {
  regionId?: string;
}

export interface V1Beta1MsgRemoveFixedDepositCfgResp {
  retcode?: string;
}

export interface V1Beta1MsgRemoveMeidNFTResponse {
  retcode?: string;
}

export interface V1Beta1MsgRemoveMeidResponse {
  retcode?: string;
}

export interface V1Beta1MsgRemoveRegionResponse {
  retcode?: string;
}

export type V1Beta1MsgResetValidatorResponse = object;

export interface V1Beta1MsgRetrieveCoinsFromRegionResp {
  retcode?: string;
}

export interface V1Beta1MsgRetrieveFeeFromGlobalAdminFeePoolResp {
  retcode?: string;
}

export type V1Beta1MsgReviewRecordResponse = object;

export interface V1Beta1MsgSetFixedDepositCfgRateResp {
  retcode?: string;
}

export interface V1Beta1MsgSetFixedDepositCfgStatusResp {
  retcode?: string;
}

/**
 * MsgStakeResponse defines the Msg/Stake response type.
 */
export type V1Beta1MsgStakeResponse = object;

export type V1Beta1MsgTransferRegionResponse = object;

/**
 * MsgUndelegateResponse defines the Msg/Undelegate response type.
 */
export interface V1Beta1MsgUndelegateResponse {
  /** @format date-time */
  completion_time?: string;
}

/**
 * MsgUnstakeResponse defines the Msg/MsgUnstake response type.
 */
export interface V1Beta1MsgUnstakeResponse {
  /** @format date-time */
  completion_time?: string;
}

/**
* MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: cosmos-sdk 0.47
*/
export type V1Beta1MsgUpdateParamsResponse = object;

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

/**
 * Params defines the parameters for the x/staking module.
 */
export interface V1Beta1Params {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: string;

  /**
   * max_validators is the maximum number of validators.
   * @format int64
   */
  max_validators?: number;

  /**
   * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
   * @format int64
   */
  max_entries?: number;

  /**
   * historical_entries is the number of historical entries to persist.
   * @format int64
   */
  historical_entries?: number;

  /** bond_denom defines the bondable coin denomination. */
  bond_denom?: string;

  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate?: string;
}

/**
* Pool is used for tracking bonded and not-bonded token supply of the bond
denomination.
*/
export interface V1Beta1Pool {
  not_bonded_tokens?: string;
  bonded_tokens?: string;
  not_bonded_stake_tokens?: string;
  bonded_stake_tokens?: string;
  stake_tokens?: string;
}

export interface V1Beta1QueryAllFixedDepositResponse {
  FixedDeposit?: V1Beta1FixedDeposit[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllMeidNFTResponse {
  meidNFT?: V1Beta1MeidNFT[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllMeidResponse {
  meid?: V1Beta1Meid[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllRecordsResponse {
  records?: V1Beta1Record[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryAllRegionResponse {
  region?: V1Beta1Region[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryCheckIsPledgeByAccountResponse {
  is_pledge?: boolean;
}

/**
 * QueryDelegationResponse is response type for the Query/Delegation RPC method.
 */
export interface V1Beta1QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response?: V1Beta1DelegationResponse;
}

export interface V1Beta1QueryFixedDepositAmountByMeidResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
}

export interface V1Beta1QueryFixedDepositByAcctResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit?: V1Beta1FixedDeposit[];
}

export interface V1Beta1QueryFixedDepositByRegionResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  FixedDeposit?: V1Beta1FixedDeposit[];
}

export interface V1Beta1QueryFixedDepositCfgByTermResponse {
  FixedDepositCfg?: V1Beta1FixedDepositCfg;
}

export interface V1Beta1QueryFixedDepositCfgResponse {
  FixedDepositCfgs?: V1Beta1FixedDepositCfg[];
}

export interface V1Beta1QueryFixedDepositTotalAmountResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: V1Beta1Coin;
}

export interface V1Beta1QueryGetFixedDepositResponse {
  FixedDeposit?: V1Beta1FixedDeposit;
}

export interface V1Beta1QueryGetMeidNFTResponse {
  meidNFT?: V1Beta1MeidNFT;
}

export interface V1Beta1QueryGetMeidResponse {
  meid?: V1Beta1Meid;
}

export interface V1Beta1QueryGetRegionResponse {
  /** Region defines the region a meid user belongs to. */
  region?: V1Beta1Region;
}

export interface V1Beta1QueryGetUnMeidAmountResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: V1Beta1Coin;
}

export interface V1Beta1QueryGlobalAdminFeePoolResp {
  global_admin_fee_pool?: string;
}

/**
* QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.
*/
export interface V1Beta1QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: V1Beta1HistoricalInfo;
}

export interface V1Beta1QueryMeidByRegionResponse {
  meid?: V1Beta1Meid[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface V1Beta1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: V1Beta1Params;
}

/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 */
export interface V1Beta1QueryPoolResponse {
  /** pool defines the pool info. */
  pool?: V1Beta1Pool;
}

export interface V1Beta1QueryRecordsByAddressResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  records?: V1Beta1Record[];
}

export interface V1Beta1QueryReviewRecordByNumberResponse {
  /** cosmos.base.query.v1beta1.PageResponse pagination = 2; */
  reviewRecord?: V1Beta1ReviewRecord;
}

/**
* QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.
*/
export interface V1Beta1QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond?: V1Beta1UnbondingDelegation;
}

export interface V1Beta1QueryValidatorDelegationsResponse {
  delegation_responses?: V1Beta1DelegationResponse[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryValidatorResponse {
  /** validator defines the validator info. */
  validator?: Stakingv1Beta1Validator;
}

export interface V1Beta1QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators?: Stakingv1Beta1Validator[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1Record {
  recordNumber?: string;
  url?: string;
  from?: string;
}

/**
 * Region defines the region a meid user belongs to.
 */
export interface V1Beta1Region {
  regionId?: string;
  name?: string;
  creator?: string;
  operator_address?: string;
  nft_class_id?: string;
  region_treasure_addr?: string;
  deposit_interest_addr?: string;

  /** tokens define the region tokens share */
  region_share?: string;
  delegate_interest?: string;
  delegate_amount?: string;
}

export interface V1Beta1ReviewRecord {
  recordHash?: string;
  actionNumber?: string;
  recordResult?: string;
  reviewedAddress?: string;
}

/**
* UnbondingDelegation stores all of a single delegator's unbonding bonds
for a single validator in an time-ordered list.
*/
export interface V1Beta1UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;

  /**
   * entries are the unbonding delegation entries.
   *
   * unbonding delegation entries
   */
  entries?: V1Beta1UnbondingDelegationEntry[];
}

/**
 * UnbondingDelegationEntry defines an unbonding object with relevant metadata.
 */
export interface V1Beta1UnbondingDelegationEntry {
  /**
   * creation_height is the height which the unbonding took place.
   * @format int64
   */
  creation_height?: string;

  /**
   * completion_time is the unix time for unbonding completion.
   * @format date-time
   */
  completion_time?: string;

  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance?: string;

  /** balance defines the tokens to receive at completion. */
  balance?: string;

  /**
   * Incrementing id that uniquely identifies this entry
   * @format uint64
   */
  unbonding_id?: string;

  /**
   * Strictly positive if this entry's unbonding has been stopped by external modules
   * @format int64
   */
  unbonding_on_hold_ref_count?: string;
}

/**
* Consensus captures the consensus rules for processing a block in the blockchain,
including all blockchain data structures and the rules of the application's
state transition machine.
*/
export interface VersionConsensus {
  /** @format uint64 */
  block?: string;

  /** @format uint64 */
  app?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title cosmos/staking/v1beta1/authz.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCheckIsPledgeByAccount
   * @request GET:/cosmos/staking/v1beta1/check_is_pledge_by_account/{account}
   */
  queryCheckIsPledgeByAccount = (account: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryCheckIsPledgeByAccountResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/check_is_pledge_by_account/${account}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDelegation
   * @summary Delegation queries delegate info for given validator delegator pair.
   * @request GET:/cosmos/staking/v1beta1/delegation/{delegator_addr}
   */
  queryDelegation = (delegatorAddr: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryDelegationResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/delegation/${delegatorAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositAll
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit
   */
  queryFixedDepositAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllFixedDepositResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDeposit
   * @summary Queries a list of FixedDeposit items.
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit/{id}
   */
  queryFixedDeposit = (id: string, query?: { address?: string }, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetFixedDepositResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositAmountByMeid
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_amount_by_meid/{account}
   */
  queryFixedDepositAmountByMeid = (account: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryFixedDepositAmountByMeidResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_amount_by_meid/${account}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositByAcct
   * @summary Queries a list of FixedDepositByAcct items.
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_by_acct/{account}/{query_type}
   */
  queryFixedDepositByAcct = (
    account: string,
    queryType: "ALL_STATE" | "NOT_EXPIRED" | "EXPIRED",
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryFixedDepositByAcctResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_by_acct/${account}/${queryType}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositByRegion
   * @summary Queries a list of FixedDepositByRegion items.
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_by_region/{regionid}
   */
  queryFixedDepositByRegion = (
    regionid: string,
    query?: { query_type?: "ALL_STATE" | "NOT_EXPIRED" | "EXPIRED" },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryFixedDepositByRegionResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_by_region/${regionid}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositCfg
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_cfg
   */
  queryFixedDepositCfg = (query?: { regionId?: string }, params: RequestParams = {}) =>
    this.request<V1Beta1QueryFixedDepositCfgResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_cfg`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositCfgByTerm
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_cfg_by_term
   */
  queryFixedDepositCfgByTerm = (query?: { regionId?: string; term?: string }, params: RequestParams = {}) =>
    this.request<V1Beta1QueryFixedDepositCfgByTermResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_cfg_by_term`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFixedDepositTotalAmount
   * @request GET:/cosmos/staking/v1beta1/fixed_deposit_total_amount
   */
  queryFixedDepositTotalAmount = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryFixedDepositTotalAmountResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/fixed_deposit_total_amount`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGlobalAdminFeePool
   * @request GET:/cosmos/staking/v1beta1/global_admin_fee_pool
   */
  queryGlobalAdminFeePool = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryGlobalAdminFeePoolResp, RpcStatus>({
      path: `/cosmos/staking/v1beta1/global_admin_fee_pool`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHistoricalInfo
   * @summary HistoricalInfo queries the historical info for given height.
   * @request GET:/cosmos/staking/v1beta1/historical_info/{height}
   */
  queryHistoricalInfo = (height: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryHistoricalInfoResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/historical_info/${height}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeidAll
   * @request GET:/cosmos/staking/v1beta1/meid
   */
  queryMeidAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllMeidResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/meid`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeid
   * @summary Queries a list of Meid items.
   * @request GET:/cosmos/staking/v1beta1/meid/{account}
   */
  queryMeid = (account: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetMeidResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/meid/${account}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeidByRegion
   * @summary Queries a list of MeidByRegion items.
   * @request GET:/cosmos/staking/v1beta1/meid_by_region/{regionId}
   */
  queryMeidByRegion = (
    regionId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryMeidByRegionResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/meid_by_region/${regionId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeidNftAll
   * @request GET:/cosmos/staking/v1beta1/meid_nft
   */
  queryMeidNFTAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllMeidNFTResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/meid_nft`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the staking parameters.
   * @request GET:/cosmos/staking/v1beta1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryParamsResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Pool queries the pool info.
   * @request GET:/cosmos/staking/v1beta1/pool
   */
  queryPool = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryPoolResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/pool`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryQueryRecordByAddress
   * @request GET:/cosmos/staking/v1beta1/record/{account}
   */
  queryQueryRecordByAddress = (account: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryRecordsByAddressResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/record/${account}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryQueryAllRecord
 * @summary DelegatorValidator queries validator info for given delegator validator
pair.
 rpc DelegatorValidator(QueryDelegatorValidatorRequest) returns (QueryDelegatorValidatorResponse) {
   option (cosmos.query.v1.module_query_safe) = true;
   option (google.api.http).get = "/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/"
                                  "{validator_addr}";
 }
 * @request GET:/cosmos/staking/v1beta1/records
 */
  queryQueryAllRecord = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllRecordsResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/records`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegionAll
   * @request GET:/cosmos/staking/v1beta1/region
   */
  queryRegionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryAllRegionResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/region`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegion
   * @summary Queries a list of Region items.
   * @request GET:/cosmos/staking/v1beta1/region/{regionId}
   */
  queryRegion = (regionId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetRegionResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/region/${regionId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryQueryReviewRecordById
   * @request GET:/cosmos/staking/v1beta1/review_record/{actionNumber}
   */
  queryQueryReviewRecordByID = (actionNumber: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryReviewRecordByNumberResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/review_record/${actionNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeidNft
   * @request GET:/cosmos/staking/v1beta1/umeid/{umeid}
   */
  queryMeidNFT = (umeid: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetMeidNFTResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/umeid/${umeid}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryUnbondingDelegation
 * @summary UnbondingDelegation queries unbonding info for given validator delegator
pair.
 * @request GET:/cosmos/staking/v1beta1/unbonding_delegation/{delegator_addr}
 */
  queryUnbondingDelegation = (delegatorAddr: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryUnbondingDelegationResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/unbonding_delegation/${delegatorAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnMeidAmount
   * @summary Queries un-Meid amount.
   * @request GET:/cosmos/staking/v1beta1/unmeidamount
   */
  queryUnMeidAmount = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryGetUnMeidAmountResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/unmeidamount`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.
   *
   * @tags Query
   * @name QueryValidators
   * @summary Validators queries all validators that match the given status.
   * @request GET:/cosmos/staking/v1beta1/validators
   */
  queryValidators = (
    query?: {
      status?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryValidatorsResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/validators`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidator
   * @summary Validator queries validator info for given validator address.
   * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}
   */
  queryValidator = (validatorAddr: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryValidatorResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/validators/${validatorAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set.
   *
   * @tags Query
   * @name QueryValidatorDelegations
   * @summary ValidatorDelegations queries delegate info for given validator.
   * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations
   */
  queryValidatorDelegations = (
    validatorAddr: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryValidatorDelegationsResponse, RpcStatus>({
      path: `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
