// package: bot
// file: service.proto

import * as jspb from "google-protobuf";

export class DeviceInfo extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getExpire(): string;
  setExpire(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getDevicetype(): number;
  setDevicetype(value: number): void;

  getFoggieid(): string;
  setFoggieid(value: string): void;

  getBucketname(): string;
  setBucketname(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  getS3domain(): string;
  setS3domain(value: string): void;

  getDeviceip(): string;
  setDeviceip(value: string): void;

  getSpaceid(): number;
  setSpaceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    token: string,
    expire: string,
    timestamp: string,
    deviceid: string,
    devicetype: number,
    foggieid: string,
    bucketname: string,
    domain: string,
    s3domain: string,
    deviceip: string,
    spaceid: number,
  }
}

export class UserEffect extends jspb.Message {
  hasCurrentworkspace(): boolean;
  clearCurrentworkspace(): void;
  getCurrentworkspace(): DeviceInfo | undefined;
  setCurrentworkspace(value?: DeviceInfo): void;

  hasCurrentmaxiospace(): boolean;
  clearCurrentmaxiospace(): void;
  getCurrentmaxiospace(): DeviceInfo | undefined;
  setCurrentmaxiospace(value?: DeviceInfo): void;

  clearSpacesList(): void;
  getSpacesList(): Array<DeviceInfo>;
  setSpacesList(value: Array<DeviceInfo>): void;
  addSpaces(value?: DeviceInfo, index?: number): DeviceInfo;

  clearMaxiospacesList(): void;
  getMaxiospacesList(): Array<DeviceInfo>;
  setMaxiospacesList(value: Array<DeviceInfo>): void;
  addMaxiospaces(value?: DeviceInfo, index?: number): DeviceInfo;

  hasWallet(): boolean;
  clearWallet(): void;
  getWallet(): Wallet | undefined;
  setWallet(value?: Wallet): void;

  getCurrentworkspaceid(): number;
  setCurrentworkspaceid(value: number): void;

  getCurrentmaxiospaceid(): number;
  setCurrentmaxiospaceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserEffect.AsObject;
  static toObject(includeInstance: boolean, msg: UserEffect): UserEffect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserEffect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserEffect;
  static deserializeBinaryFromReader(message: UserEffect, reader: jspb.BinaryReader): UserEffect;
}

export namespace UserEffect {
  export type AsObject = {
    currentworkspace?: DeviceInfo.AsObject,
    currentmaxiospace?: DeviceInfo.AsObject,
    spacesList: Array<DeviceInfo.AsObject>,
    maxiospacesList: Array<DeviceInfo.AsObject>,
    wallet?: Wallet.AsObject,
    currentworkspaceid: number,
    currentmaxiospaceid: number,
  }
}

export class EffectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getForcerefresh(): number;
  setForcerefresh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EffectRequest): EffectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectRequest;
  static deserializeBinaryFromReader(message: EffectRequest, reader: jspb.BinaryReader): EffectRequest;
}

export namespace EffectRequest {
  export type AsObject = {
    id: string,
    forcerefresh: number,
  }
}

export class Wallet extends jspb.Message {
  getWallet(): string;
  setWallet(value: string): void;

  getWallettype(): string;
  setWallettype(value: string): void;

  getWalletpubkey(): string;
  setWalletpubkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    wallet: string,
    wallettype: string,
    walletpubkey: string,
  }
}

export class BindRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasWallet(): boolean;
  clearWallet(): void;
  getWallet(): Wallet | undefined;
  setWallet(value?: Wallet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BindRequest): BindRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindRequest;
  static deserializeBinaryFromReader(message: BindRequest, reader: jspb.BinaryReader): BindRequest;
}

export namespace BindRequest {
  export type AsObject = {
    id: string,
    wallet?: Wallet.AsObject,
  }
}

export class CommonResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResponse): CommonResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResponse;
  static deserializeBinaryFromReader(message: CommonResponse, reader: jspb.BinaryReader): CommonResponse;
}

export namespace CommonResponse {
  export type AsObject = {
    status: string,
  }
}

export class SetMasterSpace extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getDevicetype(): number;
  setDevicetype(value: number): void;

  getSpaceid(): number;
  setSpaceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMasterSpace.AsObject;
  static toObject(includeInstance: boolean, msg: SetMasterSpace): SetMasterSpace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMasterSpace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMasterSpace;
  static deserializeBinaryFromReader(message: SetMasterSpace, reader: jspb.BinaryReader): SetMasterSpace;
}

export namespace SetMasterSpace {
  export type AsObject = {
    id: string,
    deviceid: string,
    devicetype: number,
    spaceid: number,
  }
}

