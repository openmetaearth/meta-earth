/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "mechain.checkin";

export interface MsgCheckIn {
  checkInAddress: string;
  checkInMessage: string;
  checkInTimezone: string;
}

export interface MsgCheckInResponse {
}

function createBaseMsgCheckIn(): MsgCheckIn {
  return { checkInAddress: "", checkInMessage: "", checkInTimezone: "" };
}

export const MsgCheckIn = {
  encode(message: MsgCheckIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkInAddress !== "") {
      writer.uint32(10).string(message.checkInAddress);
    }
    if (message.checkInMessage !== "") {
      writer.uint32(18).string(message.checkInMessage);
    }
    if (message.checkInTimezone !== "") {
      writer.uint32(26).string(message.checkInTimezone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCheckIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCheckIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkInAddress = reader.string();
          break;
        case 2:
          message.checkInMessage = reader.string();
          break;
        case 3:
          message.checkInTimezone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckIn {
    return {
      checkInAddress: isSet(object.checkInAddress) ? String(object.checkInAddress) : "",
      checkInMessage: isSet(object.checkInMessage) ? String(object.checkInMessage) : "",
      checkInTimezone: isSet(object.checkInTimezone) ? String(object.checkInTimezone) : "",
    };
  },

  toJSON(message: MsgCheckIn): unknown {
    const obj: any = {};
    message.checkInAddress !== undefined && (obj.checkInAddress = message.checkInAddress);
    message.checkInMessage !== undefined && (obj.checkInMessage = message.checkInMessage);
    message.checkInTimezone !== undefined && (obj.checkInTimezone = message.checkInTimezone);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCheckIn>, I>>(object: I): MsgCheckIn {
    const message = createBaseMsgCheckIn();
    message.checkInAddress = object.checkInAddress ?? "";
    message.checkInMessage = object.checkInMessage ?? "";
    message.checkInTimezone = object.checkInTimezone ?? "";
    return message;
  },
};

function createBaseMsgCheckInResponse(): MsgCheckInResponse {
  return {};
}

export const MsgCheckInResponse = {
  encode(_: MsgCheckInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCheckInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCheckInResponse();
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

  fromJSON(_: any): MsgCheckInResponse {
    return {};
  },

  toJSON(_: MsgCheckInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCheckInResponse>, I>>(_: I): MsgCheckInResponse {
    const message = createBaseMsgCheckInResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CheckIn(request: MsgCheckIn): Promise<MsgCheckInResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CheckIn = this.CheckIn.bind(this);
  }
  CheckIn(request: MsgCheckIn): Promise<MsgCheckInResponse> {
    const data = MsgCheckIn.encode(request).finish();
    const promise = this.rpc.request("mechain.checkin.Msg", "CheckIn", data);
    return promise.then((data) => MsgCheckInResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
