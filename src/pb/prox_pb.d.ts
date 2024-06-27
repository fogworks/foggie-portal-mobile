// package: proto
// file: prox.proto

import * as jspb from "google-protobuf";

export class ProxHeader extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getApptype(): string;
  setApptype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ProxHeader): ProxHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxHeader;
  static deserializeBinaryFromReader(message: ProxHeader, reader: jspb.BinaryReader): ProxHeader;
}

export namespace ProxHeader {
  export type AsObject = {
    peerid: string,
    id: string,
    token: string,
    apptype: string,
  }
}

export class ProxStagePartRequest extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePartRequest): ProxStagePartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStagePartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePartRequest;
  static deserializeBinaryFromReader(message: ProxStagePartRequest, reader: jspb.BinaryReader): ProxStagePartRequest;
}

export namespace ProxStagePartRequest {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class ProxStagePartResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePartResponse): ProxStagePartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStagePartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePartResponse;
  static deserializeBinaryFromReader(message: ProxStagePartResponse, reader: jspb.BinaryReader): ProxStagePartResponse;
}

export namespace ProxStagePartResponse {
  export type AsObject = {
    cid: string,
  }
}

export class ProxPinPay extends jspb.Message {
  getCopied(): number;
  setCopied(value: number): void;

  getTrxid(): string;
  setTrxid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinPay.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinPay): ProxPinPay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinPay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinPay;
  static deserializeBinaryFromReader(message: ProxPinPay, reader: jspb.BinaryReader): ProxPinPay;
}

export namespace ProxPinPay {
  export type AsObject = {
    copied: number,
    trxid: string,
  }
}

export class ProxStagePin extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxPinRequest | undefined;
  setRequest(value?: ProxPinRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePin.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePin): ProxStagePin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStagePin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePin;
  static deserializeBinaryFromReader(message: ProxStagePin, reader: jspb.BinaryReader): ProxStagePin;
}

export namespace ProxStagePin {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxPinRequest.AsObject,
  }
}

export class ProxStageRequest extends jspb.Message {
  hasPin(): boolean;
  clearPin(): void;
  getPin(): ProxStagePin | undefined;
  setPin(value?: ProxStagePin): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): ProxStageRequest.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStageRequest): ProxStageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStageRequest;
  static deserializeBinaryFromReader(message: ProxStageRequest, reader: jspb.BinaryReader): ProxStageRequest;
}

export namespace ProxStageRequest {
  export type AsObject = {
    pin?: ProxStagePin.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    PIN = 1,
    CHUNK = 2,
  }
}

export class StageProxResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageProxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageProxResponse): StageProxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageProxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageProxResponse;
  static deserializeBinaryFromReader(message: StageProxResponse, reader: jspb.BinaryReader): StageProxResponse;
}

export namespace StageProxResponse {
  export type AsObject = {
    cid: string,
  }
}

export class GetProxRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProxRequest): GetProxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProxRequest;
  static deserializeBinaryFromReader(message: GetProxRequest, reader: jspb.BinaryReader): GetProxRequest;
}

export namespace GetProxRequest {
  export type AsObject = {
    cid: string,
  }
}

export class GetProxResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProxResponse): GetProxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProxResponse;
  static deserializeBinaryFromReader(message: GetProxResponse, reader: jspb.BinaryReader): GetProxResponse;
}

export namespace GetProxResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class ProxMultipartCreateResp extends jspb.Message {
  getUploadid(): string;
  setUploadid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxMultipartCreateResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxMultipartCreateResp): ProxMultipartCreateResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxMultipartCreateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxMultipartCreateResp;
  static deserializeBinaryFromReader(message: ProxMultipartCreateResp, reader: jspb.BinaryReader): ProxMultipartCreateResp;
}

export namespace ProxMultipartCreateResp {
  export type AsObject = {
    uploadid: string,
    key: string,
  }
}

export class ProxStageResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStageResponse): ProxStageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStageResponse;
  static deserializeBinaryFromReader(message: ProxStageResponse, reader: jspb.BinaryReader): ProxStageResponse;
}

export namespace ProxStageResponse {
  export type AsObject = {
    cid: string,
  }
}

export class ProxDeleteObjectRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  clearObjectsList(): void;
  getObjectsList(): Array<ProxUpload>;
  setObjectsList(value: Array<ProxUpload>): void;
  addObjects(value?: ProxUpload, index?: number): ProxUpload;

  getObjectType(): string;
  setObjectType(value: string): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteObjectRequest): ProxDeleteObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxDeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteObjectRequest;
  static deserializeBinaryFromReader(message: ProxDeleteObjectRequest, reader: jspb.BinaryReader): ProxDeleteObjectRequest;
}

export namespace ProxDeleteObjectRequest {
  export type AsObject = {
    cidsList: Array<string>,
    objectsList: Array<ProxUpload.AsObject>,
    objectType: string,
    prefixesList: Array<string>,
  }
}

export class ProxDeleteResp extends jspb.Message {
  clearObjectsList(): void;
  getObjectsList(): Array<string>;
  setObjectsList(value: Array<string>): void;
  addObjects(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteResp): ProxDeleteResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxDeleteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteResp;
  static deserializeBinaryFromReader(message: ProxDeleteResp, reader: jspb.BinaryReader): ProxDeleteResp;
}

export namespace ProxDeleteResp {
  export type AsObject = {
    objectsList: Array<string>,
  }
}

export class ProxDeleteObjectReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxDeleteObjectRequest | undefined;
  setRequest(value?: ProxDeleteObjectRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteObjectReq): ProxDeleteObjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxDeleteObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteObjectReq;
  static deserializeBinaryFromReader(message: ProxDeleteObjectReq, reader: jspb.BinaryReader): ProxDeleteObjectReq;
}

export namespace ProxDeleteObjectReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxDeleteObjectRequest.AsObject,
  }
}

export class ProxPutObjectRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getMd5(): string;
  setMd5(value: string): void;

  getContentlength(): number;
  setContentlength(value: number): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getStageonly(): boolean;
  setStageonly(value: boolean): void;

  getCategory(): number;
  setCategory(value: number): void;

  getTags(): string;
  setTags(value: string): void;

  getRhash(): string;
  setRhash(value: string): void;

  getAcl(): string;
  setAcl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectRequest): ProxPutObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectRequest;
  static deserializeBinaryFromReader(message: ProxPutObjectRequest, reader: jspb.BinaryReader): ProxPutObjectRequest;
}

export namespace ProxPutObjectRequest {
  export type AsObject = {
    key: string,
    md5: string,
    contentlength: number,
    contenttype: string,
    stageonly: boolean,
    category: number,
    tags: string,
    rhash: string,
    acl: string,
  }
}

export class ProxPutObjectReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxPutObjectRequest | undefined;
  setRequest(value?: ProxPutObjectRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectReq): ProxPutObjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectReq;
  static deserializeBinaryFromReader(message: ProxPutObjectReq, reader: jspb.BinaryReader): ProxPutObjectReq;
}

export namespace ProxPutObjectReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxPutObjectRequest.AsObject,
  }
}

export class ProxPutObjectOpt extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): ProxPutObjectReq | undefined;
  setReq(value?: ProxPutObjectReq): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): ProxPutObjectOpt.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectOpt.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectOpt): ProxPutObjectOpt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectOpt;
  static deserializeBinaryFromReader(message: ProxPutObjectOpt, reader: jspb.BinaryReader): ProxPutObjectOpt;
}

export namespace ProxPutObjectOpt {
  export type AsObject = {
    req?: ProxPutObjectReq.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class ProxPutObjectResp extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectResp): ProxPutObjectResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectResp;
  static deserializeBinaryFromReader(message: ProxPutObjectResp, reader: jspb.BinaryReader): ProxPutObjectResp;
}

export namespace ProxPutObjectResp {
  export type AsObject = {
    md5: string,
    cid: string,
    lastmodified: string,
    etag: string,
  }
}

export class ProxCompPart extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompPart.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompPart): ProxCompPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCompPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompPart;
  static deserializeBinaryFromReader(message: ProxCompPart, reader: jspb.BinaryReader): ProxCompPart;
}

export namespace ProxCompPart {
  export type AsObject = {
    partnumber: number,
    etag: string,
  }
}

export class ProxCompletePartUpload extends jspb.Message {
  clearPartsList(): void;
  getPartsList(): Array<ProxCompPart>;
  setPartsList(value: Array<ProxCompPart>): void;
  addParts(value?: ProxCompPart, index?: number): ProxCompPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompletePartUpload.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompletePartUpload): ProxCompletePartUpload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCompletePartUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompletePartUpload;
  static deserializeBinaryFromReader(message: ProxCompletePartUpload, reader: jspb.BinaryReader): ProxCompletePartUpload;
}

export namespace ProxCompletePartUpload {
  export type AsObject = {
    partsList: Array<ProxCompPart.AsObject>,
  }
}

export class ProxCompleteMultipartRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  hasCompleteupload(): boolean;
  clearCompleteupload(): void;
  getCompleteupload(): ProxCompletePartUpload | undefined;
  setCompleteupload(value?: ProxCompletePartUpload): void;

  getStageonly(): boolean;
  setStageonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartRequest): ProxCompleteMultipartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCompleteMultipartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartRequest;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartRequest, reader: jspb.BinaryReader): ProxCompleteMultipartRequest;
}

export namespace ProxCompleteMultipartRequest {
  export type AsObject = {
    key: string,
    uploadid: string,
    completeupload?: ProxCompletePartUpload.AsObject,
    stageonly: boolean,
  }
}

export class ProxCompleteMultipartReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxCompleteMultipartRequest | undefined;
  setRequest(value?: ProxCompleteMultipartRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartReq): ProxCompleteMultipartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCompleteMultipartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartReq;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartReq, reader: jspb.BinaryReader): ProxCompleteMultipartReq;
}

export namespace ProxCompleteMultipartReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxCompleteMultipartRequest.AsObject,
  }
}

export class ProxCompleteMultipartResp extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartResp): ProxCompleteMultipartResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCompleteMultipartResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartResp;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartResp, reader: jspb.BinaryReader): ProxCompleteMultipartResp;
}

export namespace ProxCompleteMultipartResp {
  export type AsObject = {
    key: string,
    etag: string,
    cid: string,
    size: number,
  }
}

export class ProxRangeRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRangeRequest): ProxRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRangeRequest;
  static deserializeBinaryFromReader(message: ProxRangeRequest, reader: jspb.BinaryReader): ProxRangeRequest;
}

export namespace ProxRangeRequest {
  export type AsObject = {
    start: number,
    length: number,
  }
}

export class ProxOrigins extends jspb.Message {
  getMultiaddr(): string;
  setMultiaddr(value: string): void;

  getAccess(): string;
  setAccess(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxOrigins.AsObject;
  static toObject(includeInstance: boolean, msg: ProxOrigins): ProxOrigins.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxOrigins, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxOrigins;
  static deserializeBinaryFromReader(message: ProxOrigins, reader: jspb.BinaryReader): ProxOrigins;
}

export namespace ProxOrigins {
  export type AsObject = {
    multiaddr: string,
    access: string,
    id: string,
  }
}

export class ProxFetchRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getUrl(): string;
  setUrl(value: string): void;

  getName(): string;
  setName(value: string): void;

  getMeta(): Uint8Array | string;
  getMeta_asU8(): Uint8Array;
  getMeta_asB64(): string;
  setMeta(value: Uint8Array | string): void;

  clearOriginsList(): void;
  getOriginsList(): Array<ProxOrigins>;
  setOriginsList(value: Array<ProxOrigins>): void;
  addOrigins(value?: ProxOrigins, index?: number): ProxOrigins;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFetchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFetchRequest): ProxFetchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFetchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFetchRequest;
  static deserializeBinaryFromReader(message: ProxFetchRequest, reader: jspb.BinaryReader): ProxFetchRequest;
}

export namespace ProxFetchRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    url: string,
    name: string,
    meta: Uint8Array | string,
    originsList: Array<ProxOrigins.AsObject>,
  }
}

export class ProxFetchPinningRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getPinningid(): string;
  setPinningid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFetchPinningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFetchPinningRequest): ProxFetchPinningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFetchPinningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFetchPinningRequest;
  static deserializeBinaryFromReader(message: ProxFetchPinningRequest, reader: jspb.BinaryReader): ProxFetchPinningRequest;
}

export namespace ProxFetchPinningRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    pinningid: string,
  }
}

export class ProxFetchPinningResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  getCreated(): string;
  setCreated(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFetchPinningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFetchPinningResponse): ProxFetchPinningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFetchPinningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFetchPinningResponse;
  static deserializeBinaryFromReader(message: ProxFetchPinningResponse, reader: jspb.BinaryReader): ProxFetchPinningResponse;
}

export namespace ProxFetchPinningResponse {
  export type AsObject = {
    status: string,
    requestid: string,
    created: string,
  }
}

export class ProxGetRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): void;

  getThumb(): boolean;
  setThumb(value: boolean): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetRequest): ProxGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetRequest;
  static deserializeBinaryFromReader(message: ProxGetRequest, reader: jspb.BinaryReader): ProxGetRequest;
}

export namespace ProxGetRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cid: string,
    key: string,
    range?: ProxRangeRequest.AsObject,
    thumb: boolean,
    pwd: string,
  }
}

export class ProxGetBlockRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getCid(): string;
  setCid(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetBlockRequest): ProxGetBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetBlockRequest;
  static deserializeBinaryFromReader(message: ProxGetBlockRequest, reader: jspb.BinaryReader): ProxGetBlockRequest;
}

export namespace ProxGetBlockRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cid: string,
    pwd: string,
  }
}

export class ProxGetCarMetaRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getName(): string;
  setName(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetCarMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetCarMetaRequest): ProxGetCarMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetCarMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetCarMetaRequest;
  static deserializeBinaryFromReader(message: ProxGetCarMetaRequest, reader: jspb.BinaryReader): ProxGetCarMetaRequest;
}

export namespace ProxGetCarMetaRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    name: string,
    cid: string,
    pwd: string,
  }
}

export class ProxGetCarMetaResponse extends jspb.Message {
  getMeta(): Uint8Array | string;
  getMeta_asU8(): Uint8Array;
  getMeta_asB64(): string;
  setMeta(value: Uint8Array | string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetCarMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetCarMetaResponse): ProxGetCarMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetCarMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetCarMetaResponse;
  static deserializeBinaryFromReader(message: ProxGetCarMetaResponse, reader: jspb.BinaryReader): ProxGetCarMetaResponse;
}

export namespace ProxGetCarMetaResponse {
  export type AsObject = {
    meta: Uint8Array | string,
    status: string,
  }
}

export class ProxGetInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetInfo): ProxGetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetInfo;
  static deserializeBinaryFromReader(message: ProxGetInfo, reader: jspb.BinaryReader): ProxGetInfo;
}

export namespace ProxGetInfo {
  export type AsObject = {
    cid: string,
    key: string,
  }
}

export class ProxGetRequests extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  clearObjsList(): void;
  getObjsList(): Array<ProxGetInfo>;
  setObjsList(value: Array<ProxGetInfo>): void;
  addObjs(value?: ProxGetInfo, index?: number): ProxGetInfo;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetRequests.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetRequests): ProxGetRequests.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetRequests;
  static deserializeBinaryFromReader(message: ProxGetRequests, reader: jspb.BinaryReader): ProxGetRequests;
}

export namespace ProxGetRequests {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    objsList: Array<ProxGetInfo.AsObject>,
    range?: ProxRangeRequest.AsObject,
    prefixesList: Array<string>,
  }
}

export class ProxSearchRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSearchRequest): ProxSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSearchRequest;
  static deserializeBinaryFromReader(message: ProxSearchRequest, reader: jspb.BinaryReader): ProxSearchRequest;
}

export namespace ProxSearchRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cid: string,
    key: string,
  }
}

export class ProxObjectInfo extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ProxObject | undefined;
  setObject(value?: ProxObject): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObjectInfo): ProxObjectInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObjectInfo;
  static deserializeBinaryFromReader(message: ProxObjectInfo, reader: jspb.BinaryReader): ProxObjectInfo;
}

export namespace ProxObjectInfo {
  export type AsObject = {
    object?: ProxObject.AsObject,
    range?: ProxRangeRequest.AsObject,
  }
}

export class ProxGetBlockResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetBlockResponse): ProxGetBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetBlockResponse;
  static deserializeBinaryFromReader(message: ProxGetBlockResponse, reader: jspb.BinaryReader): ProxGetBlockResponse;
}

export namespace ProxGetBlockResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
    status: string,
  }
}

export class ProxFetchResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFetchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFetchResponse): ProxFetchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFetchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFetchResponse;
  static deserializeBinaryFromReader(message: ProxFetchResponse, reader: jspb.BinaryReader): ProxFetchResponse;
}

export namespace ProxFetchResponse {
  export type AsObject = {
    status: string,
  }
}

export class ProxGetResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ProxObjectInfo | undefined;
  setObject(value?: ProxObjectInfo): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): ProxGetResponse.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetResponse): ProxGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetResponse;
  static deserializeBinaryFromReader(message: ProxGetResponse, reader: jspb.BinaryReader): ProxGetResponse;
}

export namespace ProxGetResponse {
  export type AsObject = {
    object?: ProxObjectInfo.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    CHUNK = 2,
  }
}

export class ProxLinks extends jspb.Message {
  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): ProxLink | undefined;
  setMeta(value?: ProxLink): void;

  clearLinksList(): void;
  getLinksList(): Array<ProxLink>;
  setLinksList(value: Array<ProxLink>): void;
  addLinks(value?: ProxLink, index?: number): ProxLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxLinks.AsObject;
  static toObject(includeInstance: boolean, msg: ProxLinks): ProxLinks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxLinks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxLinks;
  static deserializeBinaryFromReader(message: ProxLinks, reader: jspb.BinaryReader): ProxLinks;
}

export namespace ProxLinks {
  export type AsObject = {
    meta?: ProxLink.AsObject,
    linksList: Array<ProxLink.AsObject>,
  }
}

export class ProxLink extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getType(): number;
  setType(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxLink.AsObject;
  static toObject(includeInstance: boolean, msg: ProxLink): ProxLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxLink;
  static deserializeBinaryFromReader(message: ProxLink, reader: jspb.BinaryReader): ProxLink;
}

export namespace ProxLink {
  export type AsObject = {
    name: string,
    path: string,
    hash: string,
    type: number,
    size: number,
  }
}

export class ProxSearchResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ProxLink | undefined;
  setObject(value?: ProxLink): void;

  hasLinks(): boolean;
  clearLinks(): void;
  getLinks(): ProxLinks | undefined;
  setLinks(value?: ProxLinks): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): ProxSearchResponse.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSearchResponse): ProxSearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSearchResponse;
  static deserializeBinaryFromReader(message: ProxSearchResponse, reader: jspb.BinaryReader): ProxSearchResponse;
}

export namespace ProxSearchResponse {
  export type AsObject = {
    object?: ProxLink.AsObject,
    links?: ProxLinks.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    LINKS = 2,
    CHUNK = 3,
  }
}

export class ProxPutObjectResult extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectResult): ProxPutObjectResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectResult;
  static deserializeBinaryFromReader(message: ProxPutObjectResult, reader: jspb.BinaryReader): ProxPutObjectResult;
}

export namespace ProxPutObjectResult {
  export type AsObject = {
    md5: string,
    cid: string,
    lastmodified: string,
  }
}

export class ProxPutObjectPartRequest extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContentlength(): number;
  setContentlength(value: number): void;

  getPartid(): number;
  setPartid(value: number): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartRequest): ProxPutObjectPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartRequest;
  static deserializeBinaryFromReader(message: ProxPutObjectPartRequest, reader: jspb.BinaryReader): ProxPutObjectPartRequest;
}

export namespace ProxPutObjectPartRequest {
  export type AsObject = {
    md5: string,
    key: string,
    contentlength: number,
    partid: number,
    uploadid: string,
  }
}

export class ProxPutObjectPartReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxPutObjectPartRequest | undefined;
  setRequest(value?: ProxPutObjectPartRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartReq): ProxPutObjectPartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectPartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartReq;
  static deserializeBinaryFromReader(message: ProxPutObjectPartReq, reader: jspb.BinaryReader): ProxPutObjectPartReq;
}

export namespace ProxPutObjectPartReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxPutObjectPartRequest.AsObject,
  }
}

export class ProxPutObjectPartOpt extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): ProxPutObjectPartReq | undefined;
  setReq(value?: ProxPutObjectPartReq): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): ProxPutObjectPartOpt.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartOpt.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartOpt): ProxPutObjectPartOpt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectPartOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartOpt;
  static deserializeBinaryFromReader(message: ProxPutObjectPartOpt, reader: jspb.BinaryReader): ProxPutObjectPartOpt;
}

export namespace ProxPutObjectPartOpt {
  export type AsObject = {
    req?: ProxPutObjectPartReq.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class ProxPutObjectPartResult extends jspb.Message {
  getEtag(): string;
  setEtag(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartResult): ProxPutObjectPartResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPutObjectPartResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartResult;
  static deserializeBinaryFromReader(message: ProxPutObjectPartResult, reader: jspb.BinaryReader): ProxPutObjectPartResult;
}

export namespace ProxPutObjectPartResult {
  export type AsObject = {
    etag: string,
    size: number,
  }
}

export class ProxListPartsRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  getMaxparts(): number;
  setMaxparts(value: number): void;

  getPartnumbermarker(): number;
  setPartnumbermarker(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsRequest): ProxListPartsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsRequest;
  static deserializeBinaryFromReader(message: ProxListPartsRequest, reader: jspb.BinaryReader): ProxListPartsRequest;
}

export namespace ProxListPartsRequest {
  export type AsObject = {
    key: string,
    uploadid: string,
    maxparts: number,
    partnumbermarker: number,
  }
}

export class ProxListUploadRequest extends jspb.Message {
  getDelimiter(): string;
  setDelimiter(value: string): void;

  getEncodingtype(): string;
  setEncodingtype(value: string): void;

  getMaxuploads(): number;
  setMaxuploads(value: number): void;

  getKeymarker(): string;
  setKeymarker(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getUploadidmarker(): string;
  setUploadidmarker(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListUploadRequest): ProxListUploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListUploadRequest;
  static deserializeBinaryFromReader(message: ProxListUploadRequest, reader: jspb.BinaryReader): ProxListUploadRequest;
}

export namespace ProxListUploadRequest {
  export type AsObject = {
    delimiter: string,
    encodingtype: string,
    maxuploads: number,
    keymarker: string,
    prefix: string,
    uploadidmarker: string,
  }
}

export class ProxListUploadReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxListUploadRequest | undefined;
  setRequest(value?: ProxListUploadRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListUploadReq): ProxListUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListUploadReq;
  static deserializeBinaryFromReader(message: ProxListUploadReq, reader: jspb.BinaryReader): ProxListUploadReq;
}

export namespace ProxListUploadReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxListUploadRequest.AsObject,
  }
}

export class ProxListPartsReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxListPartsRequest | undefined;
  setRequest(value?: ProxListPartsRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsReq): ProxListPartsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListPartsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsReq;
  static deserializeBinaryFromReader(message: ProxListPartsReq, reader: jspb.BinaryReader): ProxListPartsReq;
}

export namespace ProxListPartsReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxListPartsRequest.AsObject,
  }
}

export class ProxPart extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): void;

  getEtag(): string;
  setEtag(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPart.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPart): ProxPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPart;
  static deserializeBinaryFromReader(message: ProxPart, reader: jspb.BinaryReader): ProxPart;
}

export namespace ProxPart {
  export type AsObject = {
    partnumber: number,
    etag: string,
    lastmodified: string,
    size: number,
  }
}

export class ProxListMultipartUploadResponse extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getKeymarker(): string;
  setKeymarker(value: string): void;

  getUploadidmarker(): string;
  setUploadidmarker(value: string): void;

  getNextkeymarker(): string;
  setNextkeymarker(value: string): void;

  getNextuploadidmarker(): string;
  setNextuploadidmarker(value: string): void;

  getMaxuploads(): number;
  setMaxuploads(value: number): void;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): void;

  clearUploadsList(): void;
  getUploadsList(): Array<ProxUpload>;
  setUploadsList(value: Array<ProxUpload>): void;
  addUploads(value?: ProxUpload, index?: number): ProxUpload;

  getDelimiter(): string;
  setDelimiter(value: string): void;

  clearCommonprefixesList(): void;
  getCommonprefixesList(): Array<string>;
  setCommonprefixesList(value: Array<string>): void;
  addCommonprefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListMultipartUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListMultipartUploadResponse): ProxListMultipartUploadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListMultipartUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListMultipartUploadResponse;
  static deserializeBinaryFromReader(message: ProxListMultipartUploadResponse, reader: jspb.BinaryReader): ProxListMultipartUploadResponse;
}

export namespace ProxListMultipartUploadResponse {
  export type AsObject = {
    prefix: string,
    keymarker: string,
    uploadidmarker: string,
    nextkeymarker: string,
    nextuploadidmarker: string,
    maxuploads: number,
    istruncated: boolean,
    uploadsList: Array<ProxUpload.AsObject>,
    delimiter: string,
    commonprefixesList: Array<string>,
  }
}

export class ProxListPartsResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  getPartnumbermarker(): number;
  setPartnumbermarker(value: number): void;

  getNextpartnumbermarker(): number;
  setNextpartnumbermarker(value: number): void;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): void;

  clearPartsList(): void;
  getPartsList(): Array<ProxPart>;
  setPartsList(value: Array<ProxPart>): void;
  addParts(value?: ProxPart, index?: number): ProxPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsResponse): ProxListPartsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsResponse;
  static deserializeBinaryFromReader(message: ProxListPartsResponse, reader: jspb.BinaryReader): ProxListPartsResponse;
}

export namespace ProxListPartsResponse {
  export type AsObject = {
    key: string,
    uploadid: string,
    partnumbermarker: number,
    nextpartnumbermarker: number,
    istruncated: boolean,
    partsList: Array<ProxPart.AsObject>,
  }
}

export class ProxUpload extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUpload.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUpload): ProxUpload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUpload;
  static deserializeBinaryFromReader(message: ProxUpload, reader: jspb.BinaryReader): ProxUpload;
}

export namespace ProxUpload {
  export type AsObject = {
    key: string,
    uploadid: string,
  }
}

export class ProxListObjectsRequest extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getDelimiter(): string;
  setDelimiter(value: string): void;

  getEncodingType(): string;
  setEncodingType(value: string): void;

  getMaxKeys(): number;
  setMaxKeys(value: number): void;

  getStartAfter(): string;
  setStartAfter(value: string): void;

  getContinuationToken(): string;
  setContinuationToken(value: string): void;

  getVersionIdMarker(): string;
  setVersionIdMarker(value: string): void;

  getKeyMarker(): string;
  setKeyMarker(value: string): void;

  getOrderby(): string;
  setOrderby(value: string): void;

  getTags(): string;
  setTags(value: string): void;

  getCategory(): number;
  setCategory(value: number): void;

  getDate(): string;
  setDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsRequest): ProxListObjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsRequest;
  static deserializeBinaryFromReader(message: ProxListObjectsRequest, reader: jspb.BinaryReader): ProxListObjectsRequest;
}

export namespace ProxListObjectsRequest {
  export type AsObject = {
    prefix: string,
    delimiter: string,
    encodingType: string,
    maxKeys: number,
    startAfter: string,
    continuationToken: string,
    versionIdMarker: string,
    keyMarker: string,
    orderby: string,
    tags: string,
    category: number,
    date: string,
  }
}

export class ProxListObjectsReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxListObjectsRequest | undefined;
  setRequest(value?: ProxListObjectsRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsReq): ProxListObjectsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListObjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsReq;
  static deserializeBinaryFromReader(message: ProxListObjectsReq, reader: jspb.BinaryReader): ProxListObjectsReq;
}

export namespace ProxListObjectsReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxListObjectsRequest.AsObject,
  }
}

export class ProxImageCameraInfo extends jspb.Message {
  getMake(): string;
  setMake(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxImageCameraInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxImageCameraInfo): ProxImageCameraInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxImageCameraInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxImageCameraInfo;
  static deserializeBinaryFromReader(message: ProxImageCameraInfo, reader: jspb.BinaryReader): ProxImageCameraInfo;
}

export namespace ProxImageCameraInfo {
  export type AsObject = {
    make: string,
    model: string,
  }
}

export class ProxImageCameraResolution extends jspb.Message {
  getWeight(): number;
  setWeight(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxImageCameraResolution.AsObject;
  static toObject(includeInstance: boolean, msg: ProxImageCameraResolution): ProxImageCameraResolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxImageCameraResolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxImageCameraResolution;
  static deserializeBinaryFromReader(message: ProxImageCameraResolution, reader: jspb.BinaryReader): ProxImageCameraResolution;
}

export namespace ProxImageCameraResolution {
  export type AsObject = {
    weight: number,
    height: number,
  }
}

export class ProxImageAddition extends jspb.Message {
  getDatetime(): string;
  setDatetime(value: string): void;

  getIso(): string;
  setIso(value: string): void;

  getExptime(): string;
  setExptime(value: string): void;

  getAperture(): string;
  setAperture(value: string): void;

  getOrientation(): string;
  setOrientation(value: string): void;

  getFlash(): string;
  setFlash(value: string): void;

  getSoftware(): string;
  setSoftware(value: string): void;

  getExposuretime(): string;
  setExposuretime(value: string): void;

  getFocallength(): string;
  setFocallength(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxImageAddition.AsObject;
  static toObject(includeInstance: boolean, msg: ProxImageAddition): ProxImageAddition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxImageAddition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxImageAddition;
  static deserializeBinaryFromReader(message: ProxImageAddition, reader: jspb.BinaryReader): ProxImageAddition;
}

export namespace ProxImageAddition {
  export type AsObject = {
    datetime: string,
    iso: string,
    exptime: string,
    aperture: string,
    orientation: string,
    flash: string,
    software: string,
    exposuretime: string,
    focallength: string,
  }
}

export class ProxGpsInfo extends jspb.Message {
  getLat(): number;
  setLat(value: number): void;

  getLong(): number;
  setLong(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGpsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGpsInfo): ProxGpsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGpsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGpsInfo;
  static deserializeBinaryFromReader(message: ProxGpsInfo, reader: jspb.BinaryReader): ProxGpsInfo;
}

export namespace ProxGpsInfo {
  export type AsObject = {
    lat: number,
    pb_long: number,
  }
}

export class ProxImageInfo extends jspb.Message {
  hasCamerainfo(): boolean;
  clearCamerainfo(): void;
  getCamerainfo(): ProxImageCameraInfo | undefined;
  setCamerainfo(value?: ProxImageCameraInfo): void;

  hasResolution(): boolean;
  clearResolution(): void;
  getResolution(): ProxImageCameraResolution | undefined;
  setResolution(value?: ProxImageCameraResolution): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): ProxGpsInfo | undefined;
  setGps(value?: ProxGpsInfo): void;

  hasAddition(): boolean;
  clearAddition(): void;
  getAddition(): ProxImageAddition | undefined;
  setAddition(value?: ProxImageAddition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxImageInfo): ProxImageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxImageInfo;
  static deserializeBinaryFromReader(message: ProxImageInfo, reader: jspb.BinaryReader): ProxImageInfo;
}

export namespace ProxImageInfo {
  export type AsObject = {
    camerainfo?: ProxImageCameraInfo.AsObject,
    resolution?: ProxImageCameraResolution.AsObject,
    gps?: ProxGpsInfo.AsObject,
    addition?: ProxImageAddition.AsObject,
  }
}

export class ProxObject extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getFileid(): string;
  setFileid(value: string): void;

  getIspin(): boolean;
  setIspin(value: boolean): void;

  getIspincyfs(): boolean;
  setIspincyfs(value: boolean): void;

  getPinexp(): string;
  setPinexp(value: string): void;

  getCyfsexp(): string;
  setCyfsexp(value: string): void;

  getOod(): string;
  setOod(value: string): void;

  getIspersistent(): boolean;
  setIspersistent(value: boolean): void;

  getCategory(): number;
  setCategory(value: number): void;

  getTags(): string;
  setTags(value: string): void;

  clearNftinfosList(): void;
  getNftinfosList(): Array<ProxNFTInfo>;
  setNftinfosList(value: Array<ProxNFTInfo>): void;
  addNftinfos(value?: ProxNFTInfo, index?: number): ProxNFTInfo;

  clearPinningList(): void;
  getPinningList(): Array<ProxPinning>;
  setPinningList(value: Array<ProxPinning>): void;
  addPinning(value?: ProxPinning, index?: number): ProxPinning;

  hasImages(): boolean;
  clearImages(): void;
  getImages(): ProxImageInfo | undefined;
  setImages(value?: ProxImageInfo): void;

  getThumb(): string;
  setThumb(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObject.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObject): ProxObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObject;
  static deserializeBinaryFromReader(message: ProxObject, reader: jspb.BinaryReader): ProxObject;
}

export namespace ProxObject {
  export type AsObject = {
    key: string,
    etag: string,
    lastmodified: string,
    size: number,
    contenttype: string,
    cid: string,
    fileid: string,
    ispin: boolean,
    ispincyfs: boolean,
    pinexp: string,
    cyfsexp: string,
    ood: string,
    ispersistent: boolean,
    category: number,
    tags: string,
    nftinfosList: Array<ProxNFTInfo.AsObject>,
    pinningList: Array<ProxPinning.AsObject>,
    images?: ProxImageInfo.AsObject,
    thumb: string,
  }
}

export class ProxPrefixPin extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getIspin(): boolean;
  setIspin(value: boolean): void;

  clearNftinfosList(): void;
  getNftinfosList(): Array<ProxNFTInfo>;
  setNftinfosList(value: Array<ProxNFTInfo>): void;
  addNftinfos(value?: ProxNFTInfo, index?: number): ProxNFTInfo;

  clearPinningList(): void;
  getPinningList(): Array<ProxPinning>;
  setPinningList(value: Array<ProxPinning>): void;
  addPinning(value?: ProxPinning, index?: number): ProxPinning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPrefixPin.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPrefixPin): ProxPrefixPin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPrefixPin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPrefixPin;
  static deserializeBinaryFromReader(message: ProxPrefixPin, reader: jspb.BinaryReader): ProxPrefixPin;
}

export namespace ProxPrefixPin {
  export type AsObject = {
    prefix: string,
    cid: string,
    ispin: boolean,
    nftinfosList: Array<ProxNFTInfo.AsObject>,
    pinningList: Array<ProxPinning.AsObject>,
  }
}

export class ProxListObjectsResp extends jspb.Message {
  clearCommonprefixesList(): void;
  getCommonprefixesList(): Array<string>;
  setCommonprefixesList(value: Array<string>): void;
  addCommonprefixes(value: string, index?: number): string;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getMaxkeys(): number;
  setMaxkeys(value: number): void;

  getNextmarker(): string;
  setNextmarker(value: string): void;

  getContinuationtoken(): string;
  setContinuationtoken(value: string): void;

  clearContentList(): void;
  getContentList(): Array<ProxObject>;
  setContentList(value: Array<ProxObject>): void;
  addContent(value?: ProxObject, index?: number): ProxObject;

  clearPrefixpinsList(): void;
  getPrefixpinsList(): Array<ProxPrefixPin>;
  setPrefixpinsList(value: Array<ProxPrefixPin>): void;
  addPrefixpins(value?: ProxPrefixPin, index?: number): ProxPrefixPin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsResp): ProxListObjectsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxListObjectsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsResp;
  static deserializeBinaryFromReader(message: ProxListObjectsResp, reader: jspb.BinaryReader): ProxListObjectsResp;
}

export namespace ProxListObjectsResp {
  export type AsObject = {
    commonprefixesList: Array<string>,
    istruncated: boolean,
    prefix: string,
    maxkeys: number,
    nextmarker: string,
    continuationtoken: string,
    contentList: Array<ProxObject.AsObject>,
    prefixpinsList: Array<ProxPrefixPin.AsObject>,
  }
}

export class ProxPinning extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinning.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinning): ProxPinning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinning;
  static deserializeBinaryFromReader(message: ProxPinning, reader: jspb.BinaryReader): ProxPinning;
}

export namespace ProxPinning {
  export type AsObject = {
    requestid: string,
  }
}

export class ProxPinRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStype(): string;
  setStype(value: string): void;

  getExp(): number;
  setExp(value: number): void;

  getPin(): boolean;
  setPin(value: boolean): void;

  getIsdir(): boolean;
  setIsdir(value: boolean): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinRequest): ProxPinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinRequest;
  static deserializeBinaryFromReader(message: ProxPinRequest, reader: jspb.BinaryReader): ProxPinRequest;
}

export namespace ProxPinRequest {
  export type AsObject = {
    cid: string,
    stype: string,
    exp: number,
    pin: boolean,
    isdir: boolean,
    key: string,
  }
}

export class ProxPinResp extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinResp): ProxPinResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinResp;
  static deserializeBinaryFromReader(message: ProxPinResp, reader: jspb.BinaryReader): ProxPinResp;
}

export namespace ProxPinResp {
  export type AsObject = {
    cid: string,
    status: string,
  }
}

export class ProxPinReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxPinRequest | undefined;
  setRequest(value?: ProxPinRequest): void;

  hasPay(): boolean;
  clearPay(): void;
  getPay(): ProxPinPay | undefined;
  setPay(value?: ProxPinPay): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinReq): ProxPinReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinReq;
  static deserializeBinaryFromReader(message: ProxPinReq, reader: jspb.BinaryReader): ProxPinReq;
}

export namespace ProxPinReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxPinRequest.AsObject,
    pay?: ProxPinPay.AsObject,
  }
}

export class GetPeerIdInfoReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerIdInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerIdInfoReq): GetPeerIdInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerIdInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerIdInfoReq;
  static deserializeBinaryFromReader(message: GetPeerIdInfoReq, reader: jspb.BinaryReader): GetPeerIdInfoReq;
}

export namespace GetPeerIdInfoReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class GetPeerIDReply extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerIDReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerIDReply): GetPeerIDReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerIDReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerIDReply;
  static deserializeBinaryFromReader(message: GetPeerIDReply, reader: jspb.BinaryReader): GetPeerIDReply;
}

export namespace GetPeerIDReply {
  export type AsObject = {
    peerid: string,
  }
}

export class ProxUnpinRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStype(): string;
  setStype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUnpinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUnpinRequest): ProxUnpinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxUnpinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUnpinRequest;
  static deserializeBinaryFromReader(message: ProxUnpinRequest, reader: jspb.BinaryReader): ProxUnpinRequest;
}

export namespace ProxUnpinRequest {
  export type AsObject = {
    cid: string,
    stype: string,
  }
}

export class ProxUnPinReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxUnpinRequest | undefined;
  setRequest(value?: ProxUnpinRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUnPinReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUnPinReq): ProxUnPinReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxUnPinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUnPinReq;
  static deserializeBinaryFromReader(message: ProxUnPinReq, reader: jspb.BinaryReader): ProxUnPinReq;
}

export namespace ProxUnPinReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxUnpinRequest.AsObject,
  }
}

export class ProxPingRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingRequest): ProxPingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingRequest;
  static deserializeBinaryFromReader(message: ProxPingRequest, reader: jspb.BinaryReader): ProxPingRequest;
}

export namespace ProxPingRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxPingMinerRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingMinerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingMinerRequest): ProxPingMinerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPingMinerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingMinerRequest;
  static deserializeBinaryFromReader(message: ProxPingMinerRequest, reader: jspb.BinaryReader): ProxPingMinerRequest;
}

export namespace ProxPingMinerRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    orderid: string,
  }
}

export class ProxPingMiner extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  getAddr(): string;
  setAddr(value: string): void;

  getError(): string;
  setError(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingMiner.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingMiner): ProxPingMiner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPingMiner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingMiner;
  static deserializeBinaryFromReader(message: ProxPingMiner, reader: jspb.BinaryReader): ProxPingMiner;
}

export namespace ProxPingMiner {
  export type AsObject = {
    peerid: string,
    addr: string,
    error: string,
    type: string,
  }
}

export class ProxPingMinerResponse extends jspb.Message {
  clearMinersList(): void;
  getMinersList(): Array<ProxPingMiner>;
  setMinersList(value: Array<ProxPingMiner>): void;
  addMiners(value?: ProxPingMiner, index?: number): ProxPingMiner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingMinerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingMinerResponse): ProxPingMinerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPingMinerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingMinerResponse;
  static deserializeBinaryFromReader(message: ProxPingMinerResponse, reader: jspb.BinaryReader): ProxPingMinerResponse;
}

export namespace ProxPingMinerResponse {
  export type AsObject = {
    minersList: Array<ProxPingMiner.AsObject>,
  }
}

export class ProxPingResponse extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingResponse): ProxPingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingResponse;
  static deserializeBinaryFromReader(message: ProxPingResponse, reader: jspb.BinaryReader): ProxPingResponse;
}

export namespace ProxPingResponse {
  export type AsObject = {
    peerid: string,
  }
}

export class ProxFindRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getFileid(): string;
  setFileid(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFindRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFindRequest): ProxFindRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFindRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFindRequest;
  static deserializeBinaryFromReader(message: ProxFindRequest, reader: jspb.BinaryReader): ProxFindRequest;
}

export namespace ProxFindRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cid: string,
    key: string,
    fileid: string,
    prefix: string,
  }
}

export class ProxObjects extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<ProxObject>;
  setContentsList(value: Array<ProxObject>): void;
  addContents(value?: ProxObject, index?: number): ProxObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObjects.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObjects): ProxObjects.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxObjects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObjects;
  static deserializeBinaryFromReader(message: ProxObjects, reader: jspb.BinaryReader): ProxObjects;
}

export namespace ProxObjects {
  export type AsObject = {
    contentsList: Array<ProxObject.AsObject>,
  }
}

export class ProxRequestSummaryIds extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRequestSummaryIds.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRequestSummaryIds): ProxRequestSummaryIds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxRequestSummaryIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRequestSummaryIds;
  static deserializeBinaryFromReader(message: ProxRequestSummaryIds, reader: jspb.BinaryReader): ProxRequestSummaryIds;
}

export namespace ProxRequestSummaryIds {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    idsList: Array<string>,
  }
}

export class ProxCategory extends jspb.Message {
  getCategory(): number;
  setCategory(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCategory): ProxCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCategory;
  static deserializeBinaryFromReader(message: ProxCategory, reader: jspb.BinaryReader): ProxCategory;
}

export namespace ProxCategory {
  export type AsObject = {
    category: number,
    total: number,
    count: number,
  }
}

export class ProxPrefix extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPrefix): ProxPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPrefix;
  static deserializeBinaryFromReader(message: ProxPrefix, reader: jspb.BinaryReader): ProxPrefix;
}

export namespace ProxPrefix {
  export type AsObject = {
    prefix: string,
    total: number,
    count: number,
  }
}

export class ProxStatisticsInfo extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<ProxCategory>;
  setCategoriesList(value: Array<ProxCategory>): void;
  addCategories(value?: ProxCategory, index?: number): ProxCategory;

  clearPrefixesList(): void;
  getPrefixesList(): Array<ProxPrefix>;
  setPrefixesList(value: Array<ProxPrefix>): void;
  addPrefixes(value?: ProxPrefix, index?: number): ProxPrefix;

  hasCategorysum(): boolean;
  clearCategorysum(): void;
  getCategorysum(): ProxCategory | undefined;
  setCategorysum(value?: ProxCategory): void;

  hasPrefixsum(): boolean;
  clearPrefixsum(): void;
  getPrefixsum(): ProxPrefix | undefined;
  setPrefixsum(value?: ProxPrefix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStatisticsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStatisticsInfo): ProxStatisticsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxStatisticsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStatisticsInfo;
  static deserializeBinaryFromReader(message: ProxStatisticsInfo, reader: jspb.BinaryReader): ProxStatisticsInfo;
}

export namespace ProxStatisticsInfo {
  export type AsObject = {
    categoriesList: Array<ProxCategory.AsObject>,
    prefixesList: Array<ProxPrefix.AsObject>,
    categorysum?: ProxCategory.AsObject,
    prefixsum?: ProxPrefix.AsObject,
  }
}

export class ProxRequestStatistics extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getNeedprefix(): boolean;
  setNeedprefix(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRequestStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRequestStatistics): ProxRequestStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxRequestStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRequestStatistics;
  static deserializeBinaryFromReader(message: ProxRequestStatistics, reader: jspb.BinaryReader): ProxRequestStatistics;
}

export namespace ProxRequestStatistics {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    prefix: string,
    needprefix: boolean,
  }
}

export class ProxSummaryInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSummaryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSummaryInfo): ProxSummaryInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxSummaryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSummaryInfo;
  static deserializeBinaryFromReader(message: ProxSummaryInfo, reader: jspb.BinaryReader): ProxSummaryInfo;
}

export namespace ProxSummaryInfo {
  export type AsObject = {
    id: string,
    total: number,
    count: number,
  }
}

export class ProxSummaryInfos extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<ProxSummaryInfo>;
  setContentsList(value: Array<ProxSummaryInfo>): void;
  addContents(value?: ProxSummaryInfo, index?: number): ProxSummaryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSummaryInfos.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSummaryInfos): ProxSummaryInfos.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxSummaryInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSummaryInfos;
  static deserializeBinaryFromReader(message: ProxSummaryInfos, reader: jspb.BinaryReader): ProxSummaryInfos;
}

export namespace ProxSummaryInfos {
  export type AsObject = {
    contentsList: Array<ProxSummaryInfo.AsObject>,
  }
}

export class ProxRenameObject extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getSourceobject(): string;
  setSourceobject(value: string): void;

  getTargetobject(): string;
  setTargetobject(value: string): void;

  getFiletype(): number;
  setFiletype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRenameObject.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRenameObject): ProxRenameObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxRenameObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRenameObject;
  static deserializeBinaryFromReader(message: ProxRenameObject, reader: jspb.BinaryReader): ProxRenameObject;
}

export namespace ProxRenameObject {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    sourceobject: string,
    targetobject: string,
    filetype: number,
  }
}

export class ProxRenameObjectResp extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRenameObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRenameObjectResp): ProxRenameObjectResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxRenameObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRenameObjectResp;
  static deserializeBinaryFromReader(message: ProxRenameObjectResp, reader: jspb.BinaryReader): ProxRenameObjectResp;
}

export namespace ProxRenameObjectResp {
  export type AsObject = {
    total: number,
  }
}

export class ProxTimeLine extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getInterval(): string;
  setInterval(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getCategory(): number;
  setCategory(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLine.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLine): ProxTimeLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxTimeLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLine;
  static deserializeBinaryFromReader(message: ProxTimeLine, reader: jspb.BinaryReader): ProxTimeLine;
}

export namespace ProxTimeLine {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    interval: string,
    date: string,
    category: number,
  }
}

export class ProxTimeLineResp extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<ProxTimeLineRes>;
  setContentsList(value: Array<ProxTimeLineRes>): void;
  addContents(value?: ProxTimeLineRes, index?: number): ProxTimeLineRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLineResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLineResp): ProxTimeLineResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxTimeLineResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLineResp;
  static deserializeBinaryFromReader(message: ProxTimeLineResp, reader: jspb.BinaryReader): ProxTimeLineResp;
}

export namespace ProxTimeLineResp {
  export type AsObject = {
    contentsList: Array<ProxTimeLineRes.AsObject>,
  }
}

export class ProxTimeLineRes extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLineRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLineRes): ProxTimeLineRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxTimeLineRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLineRes;
  static deserializeBinaryFromReader(message: ProxTimeLineRes, reader: jspb.BinaryReader): ProxTimeLineRes;
}

export namespace ProxTimeLineRes {
  export type AsObject = {
    date: string,
    count: number,
  }
}

export class ProxPresignedURL extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getUrl(): string;
  setUrl(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getExpires(): number;
  setExpires(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPresignedURL.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPresignedURL): ProxPresignedURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPresignedURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPresignedURL;
  static deserializeBinaryFromReader(message: ProxPresignedURL, reader: jspb.BinaryReader): ProxPresignedURL;
}

export namespace ProxPresignedURL {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    url: string,
    method: string,
    expires: number,
  }
}

export class ProxPresignedURLResp extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPresignedURLResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPresignedURLResp): ProxPresignedURLResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPresignedURLResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPresignedURLResp;
  static deserializeBinaryFromReader(message: ProxPresignedURLResp, reader: jspb.BinaryReader): ProxPresignedURLResp;
}

export namespace ProxPresignedURLResp {
  export type AsObject = {
    url: string,
  }
}

export class ProxFileInfo extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getKey(): string;
  setKey(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFileInfo): ProxFileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFileInfo;
  static deserializeBinaryFromReader(message: ProxFileInfo, reader: jspb.BinaryReader): ProxFileInfo;
}

export namespace ProxFileInfo {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    key: string,
    contenttype: string,
    size: number,
  }
}

export class ProxTouchResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTouchResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTouchResp): ProxTouchResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxTouchResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTouchResp;
  static deserializeBinaryFromReader(message: ProxTouchResp, reader: jspb.BinaryReader): ProxTouchResp;
}

export namespace ProxTouchResp {
  export type AsObject = {
    status: string,
  }
}

export class ProxGExtractCode extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getExp(): string;
  setExp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGExtractCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGExtractCode): ProxGExtractCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGExtractCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGExtractCode;
  static deserializeBinaryFromReader(message: ProxGExtractCode, reader: jspb.BinaryReader): ProxGExtractCode;
}

export namespace ProxGExtractCode {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cid: string,
    key: string,
    exp: string,
  }
}

export class ProxGExtractCodeResp extends jspb.Message {
  getExtractcode(): string;
  setExtractcode(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getState(): string;
  setState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGExtractCodeResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGExtractCodeResp): ProxGExtractCodeResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGExtractCodeResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGExtractCodeResp;
  static deserializeBinaryFromReader(message: ProxGExtractCodeResp, reader: jspb.BinaryReader): ProxGExtractCodeResp;
}

export namespace ProxGExtractCodeResp {
  export type AsObject = {
    extractcode: string,
    cid: string,
    state: string,
  }
}

export class ProxPInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getAveragespeed(): number;
  setAveragespeed(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getFirstbyte(): number;
  setFirstbyte(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getProvider(): string;
  setProvider(value: string): void;

  getIdx(): number;
  setIdx(value: number): void;

  getCompleted(): number;
  setCompleted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPInfo): ProxPInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPInfo;
  static deserializeBinaryFromReader(message: ProxPInfo, reader: jspb.BinaryReader): ProxPInfo;
}

export namespace ProxPInfo {
  export type AsObject = {
    cid: string,
    status: string,
    averagespeed: number,
    size: number,
    firstbyte: number,
    duration: number,
    provider: string,
    idx: number,
    completed: number,
  }
}

export class ProxPinningInfo extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreated(): string;
  setCreated(value: string): void;

  clearPinsList(): void;
  getPinsList(): Array<ProxPInfo>;
  setPinsList(value: Array<ProxPInfo>): void;
  addPins(value?: ProxPInfo, index?: number): ProxPInfo;

  getName(): string;
  setName(value: string): void;

  getFstype(): number;
  setFstype(value: number): void;

  getOpertype(): number;
  setOpertype(value: number): void;

  getAveragespeed(): number;
  setAveragespeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinningInfo): ProxPinningInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinningInfo;
  static deserializeBinaryFromReader(message: ProxPinningInfo, reader: jspb.BinaryReader): ProxPinningInfo;
}

export namespace ProxPinningInfo {
  export type AsObject = {
    requestid: string,
    status: string,
    created: string,
    pinsList: Array<ProxPInfo.AsObject>,
    name: string,
    fstype: number,
    opertype: number,
    averagespeed: number,
  }
}

export class ProxPinningListRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getStatus(): string;
  setStatus(value: string): void;

  getPintype(): string;
  setPintype(value: string): void;

  getBefore(): string;
  setBefore(value: string): void;

  getAfter(): string;
  setAfter(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getMatch(): string;
  setMatch(value: string): void;

  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinningListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinningListRequest): ProxPinningListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinningListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinningListRequest;
  static deserializeBinaryFromReader(message: ProxPinningListRequest, reader: jspb.BinaryReader): ProxPinningListRequest;
}

export namespace ProxPinningListRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    status: string,
    pintype: string,
    before: string,
    after: string,
    limit: number,
    match: string,
    cidsList: Array<string>,
  }
}

export class ProxPinningResp extends jspb.Message {
  clearPinningsList(): void;
  getPinningsList(): Array<ProxPinningInfo>;
  setPinningsList(value: Array<ProxPinningInfo>): void;
  addPinnings(value?: ProxPinningInfo, index?: number): ProxPinningInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinningResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinningResp): ProxPinningResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxPinningResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinningResp;
  static deserializeBinaryFromReader(message: ProxPinningResp, reader: jspb.BinaryReader): ProxPinningResp;
}

export namespace ProxPinningResp {
  export type AsObject = {
    pinningsList: Array<ProxPinningInfo.AsObject>,
  }
}

export class ProxNFTInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getContractid(): string;
  setContractid(value: string): void;

  getTokenid(): string;
  setTokenid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxNFTInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxNFTInfo): ProxNFTInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxNFTInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxNFTInfo;
  static deserializeBinaryFromReader(message: ProxNFTInfo, reader: jspb.BinaryReader): ProxNFTInfo;
}

export namespace ProxNFTInfo {
  export type AsObject = {
    cid: string,
    contractid: string,
    tokenid: string,
  }
}

export class ProxUpdateNFTRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  clearNftinfosList(): void;
  getNftinfosList(): Array<ProxNFTInfo>;
  setNftinfosList(value: Array<ProxNFTInfo>): void;
  addNftinfos(value?: ProxNFTInfo, index?: number): ProxNFTInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUpdateNFTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUpdateNFTRequest): ProxUpdateNFTRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxUpdateNFTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUpdateNFTRequest;
  static deserializeBinaryFromReader(message: ProxUpdateNFTRequest, reader: jspb.BinaryReader): ProxUpdateNFTRequest;
}

export namespace ProxUpdateNFTRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    nftinfosList: Array<ProxNFTInfo.AsObject>,
  }
}

export class ProxUpdateNFTResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUpdateNFTResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUpdateNFTResp): ProxUpdateNFTResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxUpdateNFTResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUpdateNFTResp;
  static deserializeBinaryFromReader(message: ProxUpdateNFTResp, reader: jspb.BinaryReader): ProxUpdateNFTResp;
}

export namespace ProxUpdateNFTResp {
  export type AsObject = {
    status: string,
  }
}

export class ProxCred extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): void;

  getSecretkey(): string;
  setSecretkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCred.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCred): ProxCred.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCred;
  static deserializeBinaryFromReader(message: ProxCred, reader: jspb.BinaryReader): ProxCred;
}

export namespace ProxCred {
  export type AsObject = {
    accesskey: string,
    secretkey: string,
  }
}

export class ProxCredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasCred(): boolean;
  clearCred(): void;
  getCred(): ProxCred | undefined;
  setCred(value?: ProxCred): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredRequest): ProxCredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredRequest;
  static deserializeBinaryFromReader(message: ProxCredRequest, reader: jspb.BinaryReader): ProxCredRequest;
}

export namespace ProxCredRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    cred?: ProxCred.AsObject,
  }
}

export class ProxCredResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredResp): ProxCredResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCredResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredResp;
  static deserializeBinaryFromReader(message: ProxCredResp, reader: jspb.BinaryReader): ProxCredResp;
}

export namespace ProxCredResp {
  export type AsObject = {
    status: string,
  }
}

export class ProxGetCredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetCredRequest): ProxGetCredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGetCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetCredRequest;
  static deserializeBinaryFromReader(message: ProxGetCredRequest, reader: jspb.BinaryReader): ProxGetCredRequest;
}

export namespace ProxGetCredRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxGeneratePinCredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGeneratePinCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGeneratePinCredRequest): ProxGeneratePinCredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGeneratePinCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGeneratePinCredRequest;
  static deserializeBinaryFromReader(message: ProxGeneratePinCredRequest, reader: jspb.BinaryReader): ProxGeneratePinCredRequest;
}

export namespace ProxGeneratePinCredRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxGeneratePinCredResp extends jspb.Message {
  getCred(): string;
  setCred(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGeneratePinCredResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGeneratePinCredResp): ProxGeneratePinCredResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxGeneratePinCredResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGeneratePinCredResp;
  static deserializeBinaryFromReader(message: ProxGeneratePinCredResp, reader: jspb.BinaryReader): ProxGeneratePinCredResp;
}

export namespace ProxGeneratePinCredResp {
  export type AsObject = {
    cred: string,
  }
}

export class ProxCredsList extends jspb.Message {
  clearCredsList(): void;
  getCredsList(): Array<ProxCred>;
  setCredsList(value: Array<ProxCred>): void;
  addCreds(value?: ProxCred, index?: number): ProxCred;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredsList.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredsList): ProxCredsList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxCredsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredsList;
  static deserializeBinaryFromReader(message: ProxCredsList, reader: jspb.BinaryReader): ProxCredsList;
}

export namespace ProxCredsList {
  export type AsObject = {
    credsList: Array<ProxCred.AsObject>,
  }
}

export class ProxChatReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxChatRequest | undefined;
  setRequest(value?: ProxChatRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatReq): ProxChatReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxChatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatReq;
  static deserializeBinaryFromReader(message: ProxChatReq, reader: jspb.BinaryReader): ProxChatReq;
}

export namespace ProxChatReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxChatRequest.AsObject,
  }
}

export class ProxChatRequest extends jspb.Message {
  getVsname(): string;
  setVsname(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getEn(): boolean;
  setEn(value: boolean): void;

  getModel(): string;
  setModel(value: string): void;

  getChattype(): string;
  setChattype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatRequest): ProxChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatRequest;
  static deserializeBinaryFromReader(message: ProxChatRequest, reader: jspb.BinaryReader): ProxChatRequest;
}

export namespace ProxChatRequest {
  export type AsObject = {
    vsname: string,
    query: string,
    en: boolean,
    model: string,
    chattype: string,
  }
}

export class ProxChatResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getSourcedocuments(): string;
  setSourcedocuments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatResponse): ProxChatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatResponse;
  static deserializeBinaryFromReader(message: ProxChatResponse, reader: jspb.BinaryReader): ProxChatResponse;
}

export namespace ProxChatResponse {
  export type AsObject = {
    value: string,
    status: string,
    sourcedocuments: string,
  }
}

export class ProxKNReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ProxKNRequest | undefined;
  setRequest(value?: ProxKNRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNReq): ProxKNReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxKNReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNReq;
  static deserializeBinaryFromReader(message: ProxKNReq, reader: jspb.BinaryReader): ProxKNReq;
}

export namespace ProxKNReq {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    request?: ProxKNRequest.AsObject,
  }
}

export class ProxKNRequest extends jspb.Message {
  getVsname(): string;
  setVsname(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<string>;
  setFilesList(value: Array<string>): void;
  addFiles(value: string, index?: number): string;

  getMethod(): string;
  setMethod(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNRequest): ProxKNRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxKNRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNRequest;
  static deserializeBinaryFromReader(message: ProxKNRequest, reader: jspb.BinaryReader): ProxKNRequest;
}

export namespace ProxKNRequest {
  export type AsObject = {
    vsname: string,
    title: string,
    content: string,
    filesList: Array<string>,
    method: string,
  }
}

export class ProxKNResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNResponse): ProxKNResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxKNResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNResponse;
  static deserializeBinaryFromReader(message: ProxKNResponse, reader: jspb.BinaryReader): ProxKNResponse;
}

export namespace ProxKNResponse {
  export type AsObject = {
    status: string,
    data: string,
  }
}

export class ProxF2PGetSpace extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetSpace.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetSpace): ProxF2PGetSpace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetSpace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetSpace;
  static deserializeBinaryFromReader(message: ProxF2PGetSpace, reader: jspb.BinaryReader): ProxF2PGetSpace;
}

export namespace ProxF2PGetSpace {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxF2PGetMiner extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetMiner.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetMiner): ProxF2PGetMiner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetMiner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetMiner;
  static deserializeBinaryFromReader(message: ProxF2PGetMiner, reader: jspb.BinaryReader): ProxF2PGetMiner;
}

export namespace ProxF2PGetMiner {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxF2PGetApp extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetApp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetApp): ProxF2PGetApp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetApp;
  static deserializeBinaryFromReader(message: ProxF2PGetApp, reader: jspb.BinaryReader): ProxF2PGetApp;
}

export namespace ProxF2PGetApp {
  export type AsObject = {
    header?: ProxHeader.AsObject,
    name: string,
  }
}

export class ProxF2PGetAppData extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getUpdatedat(): string;
  setUpdatedat(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getState(): string;
  setState(value: string): void;

  getInstallType(): string;
  setInstallType(value: string): void;

  getServiceState(): string;
  setServiceState(value: string): void;

  getParams(): string;
  setParams(value: string): void;

  getTime(): string;
  setTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetAppData.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetAppData): ProxF2PGetAppData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetAppData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetAppData;
  static deserializeBinaryFromReader(message: ProxF2PGetAppData, reader: jspb.BinaryReader): ProxF2PGetAppData;
}

export namespace ProxF2PGetAppData {
  export type AsObject = {
    id: number,
    createdat: string,
    updatedat: string,
    name: string,
    version: string,
    state: string,
    installType: string,
    serviceState: string,
    params: string,
    time: string,
  }
}

export class ProxF2PGetSpaceResult extends jspb.Message {
  getIpfs(): number;
  setIpfs(value: number): void;

  getLocalData(): number;
  setLocalData(value: number): void;

  getIot(): number;
  setIot(value: number): void;

  getMiningPool(): number;
  setMiningPool(value: number): void;

  getRemaining(): number;
  setRemaining(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetSpaceResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetSpaceResult): ProxF2PGetSpaceResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetSpaceResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetSpaceResult;
  static deserializeBinaryFromReader(message: ProxF2PGetSpaceResult, reader: jspb.BinaryReader): ProxF2PGetSpaceResult;
}

export namespace ProxF2PGetSpaceResult {
  export type AsObject = {
    ipfs: number,
    localData: number,
    iot: number,
    miningPool: number,
    remaining: number,
    total: number,
  }
}

export class ProxF2PGetSpaceResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ProxF2PGetSpaceResult | undefined;
  setResult(value?: ProxF2PGetSpaceResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetSpaceResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetSpaceResp): ProxF2PGetSpaceResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetSpaceResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetSpaceResp;
  static deserializeBinaryFromReader(message: ProxF2PGetSpaceResp, reader: jspb.BinaryReader): ProxF2PGetSpaceResp;
}

export namespace ProxF2PGetSpaceResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: ProxF2PGetSpaceResult.AsObject,
  }
}

export class ProxF2PGetIOT extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetIOT.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetIOT): ProxF2PGetIOT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetIOT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetIOT;
  static deserializeBinaryFromReader(message: ProxF2PGetIOT, reader: jspb.BinaryReader): ProxF2PGetIOT;
}

export namespace ProxF2PGetIOT {
  export type AsObject = {
    header?: ProxHeader.AsObject,
  }
}

export class ProxIOTInfo extends jspb.Message {
  getDeviceid(): string;
  setDeviceid(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getGroupname(): string;
  setGroupname(value: string): void;

  getLastactivetime(): string;
  setLastactivetime(value: string): void;

  getTemperature(): string;
  setTemperature(value: string): void;

  getHumidity(): string;
  setHumidity(value: string): void;

  getGroupid(): number;
  setGroupid(value: number): void;

  getDevicename(): string;
  setDevicename(value: string): void;

  getDevicetype(): number;
  setDevicetype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxIOTInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxIOTInfo): ProxIOTInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxIOTInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxIOTInfo;
  static deserializeBinaryFromReader(message: ProxIOTInfo, reader: jspb.BinaryReader): ProxIOTInfo;
}

export namespace ProxIOTInfo {
  export type AsObject = {
    deviceid: string,
    status: number,
    groupname: string,
    lastactivetime: string,
    temperature: string,
    humidity: string,
    groupid: number,
    devicename: string,
    devicetype: number,
  }
}

export class ProxIOTData extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): void;

  getType(): number;
  setType(value: number): void;

  getGroupname(): string;
  setGroupname(value: string): void;

  clearListList(): void;
  getListList(): Array<ProxIOTInfo>;
  setListList(value: Array<ProxIOTInfo>): void;
  addList(value?: ProxIOTInfo, index?: number): ProxIOTInfo;

  getReceiverstatus(): boolean;
  setReceiverstatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxIOTData.AsObject;
  static toObject(includeInstance: boolean, msg: ProxIOTData): ProxIOTData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxIOTData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxIOTData;
  static deserializeBinaryFromReader(message: ProxIOTData, reader: jspb.BinaryReader): ProxIOTData;
}

export namespace ProxIOTData {
  export type AsObject = {
    groupid: number,
    type: number,
    groupname: string,
    listList: Array<ProxIOTInfo.AsObject>,
    receiverstatus: boolean,
  }
}

export class ProxF2PGetIOTResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<ProxIOTData>;
  setDataList(value: Array<ProxIOTData>): void;
  addData(value?: ProxIOTData, index?: number): ProxIOTData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetIOTResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetIOTResp): ProxF2PGetIOTResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetIOTResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetIOTResp;
  static deserializeBinaryFromReader(message: ProxF2PGetIOTResp, reader: jspb.BinaryReader): ProxF2PGetIOTResp;
}

export namespace ProxF2PGetIOTResp {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<ProxIOTData.AsObject>,
  }
}

export class ProxF2PGetIOTAmountResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  getData(): number;
  setData(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetIOTAmountResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetIOTAmountResp): ProxF2PGetIOTAmountResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetIOTAmountResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetIOTAmountResp;
  static deserializeBinaryFromReader(message: ProxF2PGetIOTAmountResp, reader: jspb.BinaryReader): ProxF2PGetIOTAmountResp;
}

export namespace ProxF2PGetIOTAmountResp {
  export type AsObject = {
    code: number,
    msg: string,
    data: number,
    time: number,
  }
}

export class ProxF2PGetMinerData extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBucket(): string;
  setBucket(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getDeleteData(): boolean;
  setDeleteData(value: boolean): void;

  getDmcAccount(): string;
  setDmcAccount(value: string): void;

  getExpireOnWeek(): number;
  setExpireOnWeek(value: number): void;

  getIsDelete(): number;
  setIsDelete(value: number): void;

  getIsPin(): boolean;
  setIsPin(value: boolean): void;

  getMemo(): string;
  setMemo(value: string): void;

  getMinerPoolAddr(): string;
  setMinerPoolAddr(value: string): void;

  getMinerPoolName(): string;
  setMinerPoolName(value: string): void;

  getPinSize(): string;
  setPinSize(value: string): void;

  getSpace(): string;
  setSpace(value: string): void;

  getStackAsset(): string;
  setStackAsset(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getUpdatedat(): string;
  setUpdatedat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetMinerData.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetMinerData): ProxF2PGetMinerData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetMinerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetMinerData;
  static deserializeBinaryFromReader(message: ProxF2PGetMinerData, reader: jspb.BinaryReader): ProxF2PGetMinerData;
}

export namespace ProxF2PGetMinerData {
  export type AsObject = {
    id: number,
    bucket: string,
    createdat: string,
    deleteData: boolean,
    dmcAccount: string,
    expireOnWeek: number,
    isDelete: number,
    isPin: boolean,
    memo: string,
    minerPoolAddr: string,
    minerPoolName: string,
    pinSize: string,
    space: string,
    stackAsset: string,
    status: string,
    updatedat: string,
  }
}

export class ProxF2PGetMinerResult extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<ProxF2PGetMinerData>;
  setDataList(value: Array<ProxF2PGetMinerData>): void;
  addData(value?: ProxF2PGetMinerData, index?: number): ProxF2PGetMinerData;

  getPagenumber(): string;
  setPagenumber(value: string): void;

  getPagesize(): string;
  setPagesize(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetMinerResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetMinerResult): ProxF2PGetMinerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetMinerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetMinerResult;
  static deserializeBinaryFromReader(message: ProxF2PGetMinerResult, reader: jspb.BinaryReader): ProxF2PGetMinerResult;
}

export namespace ProxF2PGetMinerResult {
  export type AsObject = {
    dataList: Array<ProxF2PGetMinerData.AsObject>,
    pagenumber: string,
    pagesize: string,
    total: number,
  }
}

export class ProxF2PGetMinerResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ProxF2PGetMinerResult | undefined;
  setResult(value?: ProxF2PGetMinerResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetMinerResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetMinerResp): ProxF2PGetMinerResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetMinerResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetMinerResp;
  static deserializeBinaryFromReader(message: ProxF2PGetMinerResp, reader: jspb.BinaryReader): ProxF2PGetMinerResp;
}

export namespace ProxF2PGetMinerResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: ProxF2PGetMinerResult.AsObject,
  }
}

export class ProxF2PGetAppResult extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): ProxF2PGetAppData | undefined;
  setData(value?: ProxF2PGetAppData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetAppResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetAppResult): ProxF2PGetAppResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetAppResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetAppResult;
  static deserializeBinaryFromReader(message: ProxF2PGetAppResult, reader: jspb.BinaryReader): ProxF2PGetAppResult;
}

export namespace ProxF2PGetAppResult {
  export type AsObject = {
    data?: ProxF2PGetAppData.AsObject,
  }
}

export class ProxF2PGetAppResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ProxF2PGetAppResult | undefined;
  setResult(value?: ProxF2PGetAppResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxF2PGetAppResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxF2PGetAppResp): ProxF2PGetAppResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxF2PGetAppResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxF2PGetAppResp;
  static deserializeBinaryFromReader(message: ProxF2PGetAppResp, reader: jspb.BinaryReader): ProxF2PGetAppResp;
}

export namespace ProxF2PGetAppResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: ProxF2PGetAppResult.AsObject,
  }
}

