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
 * Class defines the class of the nft type.
 */
export interface V1Beta1Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id?: string;

  /** name defines the human-readable name of the NFT classification. Optional */
  name?: string;

  /** symbol is an abbreviated name for nft classification. Optional */
  symbol?: string;

  /** description is a brief description of nft classification. Optional */
  description?: string;

  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri?: string;

  /** uri_hash is a hash of the document pointed by uri. Optional */
  uri_hash?: string;

  /**
   * data is the app specific metadata of the NFT class. Optional
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  data?: ProtobufAny;

  /** @format uint64 */
  total_supply?: string;
}

/**
 * MsgMintResponse defines the Msg/Mint response type.
 */
export type V1Beta1MsgMintNFTResponse = object;

/**
 * MsgNewClassResponse defines the Msg/NewClass response type.
 */
export type V1Beta1MsgNewClassResponse = object;

/**
 * MsgSendResponse defines the Msg/Send response type.
 */
export type V1Beta1MsgSendResponse = object;

/**
 * NFT defines the NFT.
 */
export interface V1Beta1NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id?: string;

  /** id is a unique identifier of the NFT */
  id?: string;

  /** uri for the NFT metadata stored off chain */
  uri?: string;

  /** uri_hash is a hash of the document pointed by uri */
  uri_hash?: string;

  /**
   * data is an app specific data of the NFT. Optional
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  data?: ProtobufAny;
}

export interface V1Beta1NftList {
  class_id?: string;
  token_id?: string;
  uri?: string;
  owner?: string;
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

export interface V1Beta1QueryBalanceResponse {
  /**
   * amount is the number of all NFTs of a given class owned by the owner
   * @format uint64
   */
  amount?: string;
}

export interface V1Beta1QueryClassAddressResponse {
  exists?: boolean;

  /** @format uint64 */
  total_supply?: string;
  nfts?: string[];
}

export interface V1Beta1QueryClassResponse {
  /** class defines the class of the nft type. */
  class?: V1Beta1Class;
}

export interface V1Beta1QueryClassesResponse {
  /** class defines the class of the nft type. */
  classes?: V1Beta1Class[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryNFTResponse {
  /**
   * owner is the owner address of the nft
   * NFT defines the NFT.
   */
  nft?: V1Beta1NFT;
}

export interface V1Beta1QueryNFTsResponse {
  /** NFT defines the NFT */
  nfts?: V1Beta1NFT[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

export interface V1Beta1QueryNftFilterRequest {
  owner?: string;
  class_id?: string;
  token_id?: string;
}

export interface V1Beta1QueryNftFilterResponse {
  nfts?: V1Beta1NftList[];
}

export interface V1Beta1QueryOwnerResponse {
  /** owner is the owner address of the nft */
  owner?: string;
}

export interface V1Beta1QuerySupplyResponse {
  /**
   * amount is the number of all NFTs from the given class
   * @format uint64
   */
  amount?: string;
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
 * @title cosmos/nft/v1beta1/event.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBalance
   * @summary Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
   * @request GET:/cosmos/nft/v1beta1/balance/{owner}/{class_id}
   */
  queryBalance = (owner: string, classId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryBalanceResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/balance/${owner}/${classId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClassAddress
   * @summary Classes queries Address
   * @request GET:/cosmos/nft/v1beta1/class_address/{address}/{class_id}
   */
  queryClassAddress = (address: string, classId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryClassAddressResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/class_address/${address}/${classId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClasses
   * @summary Classes queries all NFT classes
   * @request GET:/cosmos/nft/v1beta1/classes
   */
  queryClasses = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryClassesResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/classes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClass
   * @summary Class queries an NFT class based on its id
   * @request GET:/cosmos/nft/v1beta1/classes/{class_id}
   */
  queryClass = (classId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryClassResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/classes/${classId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNftFilter
   * @summary queries nft filter
   * @request POST:/cosmos/nft/v1beta1/nft_filter
   */
  queryNftFilter = (body: V1Beta1QueryNftFilterRequest, params: RequestParams = {}) =>
    this.request<V1Beta1QueryNftFilterResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/nft_filter`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryNfTs
 * @summary NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
ERC721Enumerable
 * @request GET:/cosmos/nft/v1beta1/nfts
 */
  queryNFTs = (
    query?: {
      class_id?: string;
      owner?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryNFTsResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/nfts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNft
   * @summary NFT queries an NFT based on its class and id.
   * @request GET:/cosmos/nft/v1beta1/nfts/{class_id}/{id}
   */
  queryNFT = (classId: string, id: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryNFTResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/nfts/${classId}/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOwner
   * @summary Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
   * @request GET:/cosmos/nft/v1beta1/owner/{class_id}/{id}
   */
  queryOwner = (classId: string, id: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryOwnerResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/owner/${classId}/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySupply
   * @summary Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
   * @request GET:/cosmos/nft/v1beta1/supply/{class_id}
   */
  querySupply = (classId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QuerySupplyResponse, RpcStatus>({
      path: `/cosmos/nft/v1beta1/supply/${classId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
