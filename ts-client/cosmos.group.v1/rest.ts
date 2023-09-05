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
 * GroupInfo represents the high-level on-chain information for a group.
 */
export interface V1GroupInfo {
  /**
   * id is the unique ID of the group.
   * @format uint64
   */
  id?: string;

  /** admin is the account address of the group's admin. */
  admin?: string;

  /** metadata is any arbitrary metadata to attached to the group. */
  metadata?: string;

  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   * @format uint64
   */
  version?: string;

  /** total_weight is the sum of the group members' weights. */
  total_weight?: string;

  /**
   * created_at is a timestamp specifying when a group was created.
   * @format date-time
   */
  created_at?: string;
}

/**
 * GroupMember represents the relationship between a group and a member.
 */
export interface V1GroupMember {
  /**
   * group_id is the unique ID of the group.
   * @format uint64
   */
  group_id?: string;

  /** member is the member data. */
  member?: V1Member;
}

/**
* Member represents a group member with an account address,
non-zero weight, metadata and added_at timestamp.
*/
export interface V1Member {
  /** address is the member's account address. */
  address?: string;

  /** weight is the member's voting weight that should be greater than 0. */
  weight?: string;

  /** metadata is any arbitrary metadata attached to the member. */
  metadata?: string;

  /**
   * added_at is a timestamp specifying when a member was added.
   * @format date-time
   */
  added_at?: string;
}

/**
* MemberRequest represents a group member to be used in Msg server requests.
Contrary to `Member`, it doesn't have any `added_at` field
since this field cannot be set as part of requests.
*/
export interface V1MemberRequest {
  /** address is the member's account address. */
  address?: string;

  /** weight is the member's voting weight that should be greater than 0. */
  weight?: string;

  /** metadata is any arbitrary metadata attached to the member. */
  metadata?: string;
}

/**
 * MsgCreateGroup is the Msg/CreateGroup request type.
 */
export interface V1MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin?: string;

  /** members defines the group members. */
  members?: V1MemberRequest[];

  /** metadata is any arbitrary metadata to attached to the group. */
  metadata?: string;
  owner?: string;
}

/**
 * MsgCreateGroupResponse is the Msg/CreateGroup response type.
 */
export interface V1MsgCreateGroupResponse {
  /**
   * group_id is the unique ID of the newly created group.
   * @format uint64
   */
  group_id?: string;
}

export interface V1MsgDeleteGroup {
  /**
   * group_id is the unique ID of the group.
   * @format uint64
   */
  group_id?: string;

  /** admin is the account address of the global admin. */
  admin?: string;
}

export type V1MsgDeleteGroupResponse = object;

/**
 * MsgLeaveGroup is the Msg/LeaveGroup request type.
 */
export interface V1MsgLeaveGroup {
  admin?: string;

  /**
   * group_id is the unique ID of the group.
   * @format uint64
   */
  group_id?: string;

  /** address is the account address of the group member. */
  address?: string;
}

/**
 * MsgLeaveGroupResponse is the Msg/LeaveGroup response type.
 */
export type V1MsgLeaveGroupResponse = object;

/**
 * MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type.
 */
export interface V1MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin?: string;

  /**
   * group_id is the unique ID of the group.
   * @format uint64
   */
  group_id?: string;

  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates?: V1MemberRequest[];
  owner?: string;
  isSendRewards?: boolean;
}

/**
 * MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type.
 */
export type V1MsgUpdateGroupMembersResponse = object;

/**
 * QueryGroupInfoResponse is the Query/GroupInfo response type.
 */
export interface V1QueryGroupInfoResponse {
  /** info is the GroupInfo of the group. */
  info?: V1GroupInfo;
}

/**
 * QueryGroupMembersResponse is the Query/GroupMembersResponse response type.
 */
export interface V1QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members?: V1GroupMember[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.
 */
export interface V1QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups?: V1GroupInfo[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryGroupsByMemberResponse is the Query/GroupsByMember response type.
 */
export interface V1QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups?: V1GroupInfo[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
}

/**
* QueryGroupsResponse is the Query/Groups response type.

Since: cosmos-sdk 0.47.1
*/
export interface V1QueryGroupsResponse {
  /** `groups` is all the groups present in state. */
  groups?: V1GroupInfo[];

  /** pagination defines the pagination in the response. */
  pagination?: V1Beta1PageResponse;
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
 * @title cosmos/group/v1/events.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Msg
   * @name MsgCreateGroup
   * @summary CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
   * @request POST:/cosmos/group/v1/create_group
   */
  msgCreateGroup = (body: V1MsgCreateGroup, params: RequestParams = {}) =>
    this.request<V1MsgCreateGroupResponse, RpcStatus>({
      path: `/cosmos/group/v1/create_group`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgDeleteGroup
   * @summary Delete the group and members with given group id and admin address.
   * @request POST:/cosmos/group/v1/delete_member
   */
  msgDeleteGroup = (body: V1MsgDeleteGroup, params: RequestParams = {}) =>
    this.request<V1MsgDeleteGroupResponse, RpcStatus>({
      path: `/cosmos/group/v1/delete_member`,
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
   * @name QueryGroupInfo
   * @summary GroupInfo queries group info based on group id.
   * @request GET:/cosmos/group/v1/group_info/{group_id}
   */
  queryGroupInfo = (groupId: string, params: RequestParams = {}) =>
    this.request<V1QueryGroupInfoResponse, RpcStatus>({
      path: `/cosmos/group/v1/group_info/${groupId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGroupMembers
   * @summary GroupMembers queries members of a group by group id.
   * @request GET:/cosmos/group/v1/group_members/{group_id}
   */
  queryGroupMembers = (
    groupId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryGroupMembersResponse, RpcStatus>({
      path: `/cosmos/group/v1/group_members/${groupId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * @description Since: cosmos-sdk 0.47.1
   *
   * @tags Query
   * @name QueryGroups
   * @summary Groups queries all groups in state.
   * @request GET:/cosmos/group/v1/groups
   */
  queryGroups = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryGroupsResponse, RpcStatus>({
      path: `/cosmos/group/v1/groups`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGroupsByAdmin
   * @summary GroupsByAdmin queries groups by admin address.
   * @request GET:/cosmos/group/v1/groups_by_admin/{admin}
   */
  queryGroupsByAdmin = (
    admin: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryGroupsByAdminResponse, RpcStatus>({
      path: `/cosmos/group/v1/groups_by_admin/${admin}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGroupsByMember
   * @summary GroupsByMember queries groups by member address.
   * @request GET:/cosmos/group/v1/groups_by_member/{address}
   */
  queryGroupsByMember = (
    address: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryGroupsByMemberResponse, RpcStatus>({
      path: `/cosmos/group/v1/groups_by_member/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgLeaveGroup
   * @summary LeaveGroup allows a group member to leave the group.
   * @request POST:/cosmos/group/v1/leave_group
   */
  msgLeaveGroup = (body: V1MsgLeaveGroup, params: RequestParams = {}) =>
    this.request<V1MsgLeaveGroupResponse, RpcStatus>({
      path: `/cosmos/group/v1/leave_group`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgUpdateGroupMembers
   * @summary UpdateGroupMembers updates the group members with given group id and admin address.
   * @request POST:/cosmos/group/v1/update_member
   */
  msgUpdateGroupMembers = (body: V1MsgUpdateGroupMembers, params: RequestParams = {}) =>
    this.request<V1MsgUpdateGroupMembersResponse, RpcStatus>({
      path: `/cosmos/group/v1/update_member`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
