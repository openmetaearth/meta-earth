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

export interface V1Fee {
  /** the packet receive fee */
  recv_fee?: V1Beta1Coin[];

  /** the packet acknowledgement fee */
  ack_fee?: V1Beta1Coin[];

  /** the packet timeout fee */
  timeout_fee?: V1Beta1Coin[];
}

export interface V1FeeEnabledChannel {
  /** unique port identifier */
  port_id?: string;

  /** unique channel identifier */
  channel_id?: string;
}

export interface V1IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id?: V1PacketId;

  /** list of packet fees */
  packet_fees?: V1PacketFee[];
}

export type V1MsgPayPacketFeeAsyncResponse = object;

export type V1MsgPayPacketFeeResponse = object;

export type V1MsgRegisterCounterpartyPayeeResponse = object;

export type V1MsgRegisterPayeeResponse = object;

export interface V1PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: V1Fee;

  /** the refund address for unspent fees */
  refund_address?: string;

  /** optional list of relayers permitted to receive fees */
  relayers?: string[];
}

export interface V1PacketId {
  /** channel port identifier */
  port_id?: string;

  /** channel unique identifier */
  channel_id?: string;

  /**
   * packet sequence
   * @format uint64
   */
  sequence?: string;
}

export interface V1QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterparty_payee?: string;
}

export interface V1QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  fee_enabled?: boolean;
}

export interface V1QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  fee_enabled_channels?: V1FeeEnabledChannel[];
}

export interface V1QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivized_packet?: V1IdentifiedPacketFees;
}

export interface V1QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivized_packets?: V1IdentifiedPacketFees[];
}

export interface V1QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivized_packets?: V1IdentifiedPacketFees[];
}

export interface V1QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payee_address?: string;
}

export interface V1QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ack_fees?: V1Beta1Coin[];
}

export interface V1QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recv_fees?: V1Beta1Coin[];
}

export interface V1QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeout_fees?: V1Beta1Coin[];
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
 * @title ibc/applications/fee/v1/ack.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFeeEnabledChannel
   * @summary FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
   * @request GET:/ibc/apps/fee/v1/channels/{channel_id}/ports/{port_id}/fee_enabled
   */
  queryFeeEnabledChannel = (channelId: string, portId: string, params: RequestParams = {}) =>
    this.request<V1QueryFeeEnabledChannelResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/${channelId}/ports/${portId}/fee_enabled`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIncentivizedPacketsForChannel
   * @summary Gets all incentivized packets for a specific channel
   * @request GET:/ibc/apps/fee/v1/channels/{channel_id}/ports/{port_id}/incentivized_packets
   */
  queryIncentivizedPacketsForChannel = (
    channelId: string,
    portId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
      query_height?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryIncentivizedPacketsForChannelResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/${channelId}/ports/${portId}/incentivized_packets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCounterpartyPayee
   * @summary CounterpartyPayee returns the registered counterparty payee for forward relaying
   * @request GET:/ibc/apps/fee/v1/channels/{channel_id}/relayers/{relayer}/counterparty_payee
   */
  queryCounterpartyPayee = (channelId: string, relayer: string, params: RequestParams = {}) =>
    this.request<V1QueryCounterpartyPayeeResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/${channelId}/relayers/${relayer}/counterparty_payee`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPayee
   * @summary Payee returns the registered payee address for a specific channel given the relayer address
   * @request GET:/ibc/apps/fee/v1/channels/{channel_id}/relayers/{relayer}/payee
   */
  queryPayee = (channelId: string, relayer: string, params: RequestParams = {}) =>
    this.request<V1QueryPayeeResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/${channelId}/relayers/${relayer}/payee`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIncentivizedPacket
   * @summary IncentivizedPacket returns all packet fees for a packet given its identifier
   * @request GET:/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/incentivized_packet
   */
  queryIncentivizedPacket = (
    packetIdChannelId: string,
    packetIdPortId: string,
    packetIdSequence: string,
    query?: { query_height?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryIncentivizedPacketResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/incentivized_packet`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalAckFees
   * @summary TotalAckFees returns the total acknowledgement fees for a packet given its identifier
   * @request GET:/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_ack_fees
   */
  queryTotalAckFees = (
    packetIdChannelId: string,
    packetIdPortId: string,
    packetIdSequence: string,
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTotalAckFeesResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_ack_fees`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalRecvFees
   * @summary TotalRecvFees returns the total receive fees for a packet given its identifier
   * @request GET:/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_recv_fees
   */
  queryTotalRecvFees = (
    packetIdChannelId: string,
    packetIdPortId: string,
    packetIdSequence: string,
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTotalRecvFeesResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_recv_fees`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalTimeoutFees
   * @summary TotalTimeoutFees returns the total timeout fees for a packet given its identifier
   * @request GET:/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_timeout_fees
   */
  queryTotalTimeoutFees = (
    packetIdChannelId: string,
    packetIdPortId: string,
    packetIdSequence: string,
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTotalTimeoutFeesResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_timeout_fees`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeeEnabledChannels
   * @summary FeeEnabledChannels returns a list of all fee enabled channels
   * @request GET:/ibc/apps/fee/v1/fee_enabled
   */
  queryFeeEnabledChannels = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
      query_height?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryFeeEnabledChannelsResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/fee_enabled`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIncentivizedPackets
   * @summary IncentivizedPackets returns all incentivized packets and their associated fees
   * @request GET:/ibc/apps/fee/v1/incentivized_packets
   */
  queryIncentivizedPackets = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
      query_height?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryIncentivizedPacketsResponse, RpcStatus>({
      path: `/ibc/apps/fee/v1/incentivized_packets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
