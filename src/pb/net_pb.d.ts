// package: proto
// file: net.proto

import * as jspb from "google-protobuf";

export class GetHostIDRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostIDRequest): GetHostIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostIDRequest;
  static deserializeBinaryFromReader(message: GetHostIDRequest, reader: jspb.BinaryReader): GetHostIDRequest;
}

export namespace GetHostIDRequest {
  export type AsObject = {
  }
}

export class GetHostIDReply extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHostIDReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetHostIDReply): GetHostIDReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHostIDReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHostIDReply;
  static deserializeBinaryFromReader(message: GetHostIDReply, reader: jspb.BinaryReader): GetHostIDReply;
}

export namespace GetHostIDReply {
  export type AsObject = {
    peerid: string,
  }
}

export class GetTokenRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string;
  setKey(value: string): void;

  hasStype(): boolean;
  clearStype(): void;
  getStype(): number;
  setStype(value: number): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPayloadCase(): GetTokenRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenRequest): GetTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenRequest;
  static deserializeBinaryFromReader(message: GetTokenRequest, reader: jspb.BinaryReader): GetTokenRequest;
}

export namespace GetTokenRequest {
  export type AsObject = {
    key: string,
    stype: number,
    signature: Uint8Array | string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    KEY = 1,
    STYPE = 2,
    SIGNATURE = 3,
  }
}

export class GetTokenReply extends jspb.Message {
  hasChallenge(): boolean;
  clearChallenge(): void;
  getChallenge(): Uint8Array | string;
  getChallenge_asU8(): Uint8Array;
  getChallenge_asB64(): string;
  setChallenge(value: Uint8Array | string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  getPayloadCase(): GetTokenReply.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenReply): GetTokenReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTokenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenReply;
  static deserializeBinaryFromReader(message: GetTokenReply, reader: jspb.BinaryReader): GetTokenReply;
}

export namespace GetTokenReply {
  export type AsObject = {
    challenge: Uint8Array | string,
    token: string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    CHALLENGE = 1,
    TOKEN = 2,
  }
}

export class Header extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getApptype(): string;
  setApptype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    peerid: string,
    id: string,
    token: string,
    apptype: string,
  }
}

export class GetFileRequest extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRequest;
  static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
  export type AsObject = {
    peerid: string,
    name: string,
  }
}

export class GetRelay extends jspb.Message {
  getAccept(): boolean;
  setAccept(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelay.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelay): GetRelay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRelay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelay;
  static deserializeBinaryFromReader(message: GetRelay, reader: jspb.BinaryReader): GetRelay;
}

export namespace GetRelay {
  export type AsObject = {
    accept: boolean,
  }
}

export class GetFileRelay extends jspb.Message {
  getAccept(): boolean;
  setAccept(value: boolean): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRelay.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRelay): GetFileRelay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileRelay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRelay;
  static deserializeBinaryFromReader(message: GetFileRelay, reader: jspb.BinaryReader): GetFileRelay;
}

export namespace GetFileRelay {
  export type AsObject = {
    accept: boolean,
    size: number,
  }
}

export class PinPay extends jspb.Message {
  getCopied(): number;
  setCopied(value: number): void;

  getTrxid(): string;
  setTrxid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinPay.AsObject;
  static toObject(includeInstance: boolean, msg: PinPay): PinPay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinPay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinPay;
  static deserializeBinaryFromReader(message: PinPay, reader: jspb.BinaryReader): PinPay;
}

export namespace PinPay {
  export type AsObject = {
    copied: number,
    trxid: string,
  }
}

export class StagePin extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): PinRequest | undefined;
  setRequest(value?: PinRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StagePin.AsObject;
  static toObject(includeInstance: boolean, msg: StagePin): StagePin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StagePin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StagePin;
  static deserializeBinaryFromReader(message: StagePin, reader: jspb.BinaryReader): StagePin;
}

export namespace StagePin {
  export type AsObject = {
    header?: Header.AsObject,
    request?: PinRequest.AsObject,
  }
}

export class StageRequest extends jspb.Message {
  hasPin(): boolean;
  clearPin(): void;
  getPin(): StagePin | undefined;
  setPin(value?: StagePin): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): StageRequest.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StageRequest): StageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageRequest;
  static deserializeBinaryFromReader(message: StageRequest, reader: jspb.BinaryReader): StageRequest;
}

export namespace StageRequest {
  export type AsObject = {
    pin?: StagePin.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    PIN = 1,
    CHUNK = 2,
  }
}

export class MultipartCreateResp extends jspb.Message {
  getUploadid(): string;
  setUploadid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipartCreateResp.AsObject;
  static toObject(includeInstance: boolean, msg: MultipartCreateResp): MultipartCreateResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultipartCreateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipartCreateResp;
  static deserializeBinaryFromReader(message: MultipartCreateResp, reader: jspb.BinaryReader): MultipartCreateResp;
}

export namespace MultipartCreateResp {
  export type AsObject = {
    uploadid: string,
    key: string,
  }
}

export class StageResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageResponse): StageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageResponse;
  static deserializeBinaryFromReader(message: StageResponse, reader: jspb.BinaryReader): StageResponse;
}

export namespace StageResponse {
  export type AsObject = {
    cid: string,
  }
}

export class DeleteObjectRequest extends jspb.Message {
  clearCidsList(): void;
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): void;
  addCids(value: string, index?: number): string;

  clearObjectsList(): void;
  getObjectsList(): Array<Upload>;
  setObjectsList(value: Array<Upload>): void;
  addObjects(value?: Upload, index?: number): Upload;

  getObjectType(): string;
  setObjectType(value: string): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectRequest): DeleteObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectRequest;
  static deserializeBinaryFromReader(message: DeleteObjectRequest, reader: jspb.BinaryReader): DeleteObjectRequest;
}

export namespace DeleteObjectRequest {
  export type AsObject = {
    cidsList: Array<string>,
    objectsList: Array<Upload.AsObject>,
    objectType: string,
    prefixesList: Array<string>,
  }
}

export class DeleteResp extends jspb.Message {
  clearObjectsList(): void;
  getObjectsList(): Array<string>;
  setObjectsList(value: Array<string>): void;
  addObjects(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResp): DeleteResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResp;
  static deserializeBinaryFromReader(message: DeleteResp, reader: jspb.BinaryReader): DeleteResp;
}

export namespace DeleteResp {
  export type AsObject = {
    objectsList: Array<string>,
  }
}

export class DeleteObjectReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): DeleteObjectRequest | undefined;
  setRequest(value?: DeleteObjectRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectReq): DeleteObjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectReq;
  static deserializeBinaryFromReader(message: DeleteObjectReq, reader: jspb.BinaryReader): DeleteObjectReq;
}

export namespace DeleteObjectReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: DeleteObjectRequest.AsObject,
  }
}

export class PutObjectRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): PutObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectRequest): PutObjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectRequest;
  static deserializeBinaryFromReader(message: PutObjectRequest, reader: jspb.BinaryReader): PutObjectRequest;
}

export namespace PutObjectRequest {
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

export class PutObjectReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): PutObjectRequest | undefined;
  setRequest(value?: PutObjectRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectReq): PutObjectReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectReq;
  static deserializeBinaryFromReader(message: PutObjectReq, reader: jspb.BinaryReader): PutObjectReq;
}

export namespace PutObjectReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: PutObjectRequest.AsObject,
  }
}

export class PutObjectOpt extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): PutObjectReq | undefined;
  setReq(value?: PutObjectReq): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): PutObjectOpt.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectOpt.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectOpt): PutObjectOpt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectOpt;
  static deserializeBinaryFromReader(message: PutObjectOpt, reader: jspb.BinaryReader): PutObjectOpt;
}

export namespace PutObjectOpt {
  export type AsObject = {
    req?: PutObjectReq.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class PutObjectResp extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectResp): PutObjectResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectResp;
  static deserializeBinaryFromReader(message: PutObjectResp, reader: jspb.BinaryReader): PutObjectResp;
}

export namespace PutObjectResp {
  export type AsObject = {
    md5: string,
    cid: string,
    lastmodified: string,
    etag: string,
  }
}

export class CompPart extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompPart.AsObject;
  static toObject(includeInstance: boolean, msg: CompPart): CompPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompPart;
  static deserializeBinaryFromReader(message: CompPart, reader: jspb.BinaryReader): CompPart;
}

export namespace CompPart {
  export type AsObject = {
    partnumber: number,
    etag: string,
  }
}

export class CompletePartUpload extends jspb.Message {
  clearPartsList(): void;
  getPartsList(): Array<CompPart>;
  setPartsList(value: Array<CompPart>): void;
  addParts(value?: CompPart, index?: number): CompPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletePartUpload.AsObject;
  static toObject(includeInstance: boolean, msg: CompletePartUpload): CompletePartUpload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletePartUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletePartUpload;
  static deserializeBinaryFromReader(message: CompletePartUpload, reader: jspb.BinaryReader): CompletePartUpload;
}

export namespace CompletePartUpload {
  export type AsObject = {
    partsList: Array<CompPart.AsObject>,
  }
}

export class CompleteMultipartRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  hasCompleteupload(): boolean;
  clearCompleteupload(): void;
  getCompleteupload(): CompletePartUpload | undefined;
  setCompleteupload(value?: CompletePartUpload): void;

  getStageonly(): boolean;
  setStageonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteMultipartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteMultipartRequest): CompleteMultipartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteMultipartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteMultipartRequest;
  static deserializeBinaryFromReader(message: CompleteMultipartRequest, reader: jspb.BinaryReader): CompleteMultipartRequest;
}

export namespace CompleteMultipartRequest {
  export type AsObject = {
    key: string,
    uploadid: string,
    completeupload?: CompletePartUpload.AsObject,
    stageonly: boolean,
  }
}

export class CompleteMultipartReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): CompleteMultipartRequest | undefined;
  setRequest(value?: CompleteMultipartRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteMultipartReq.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteMultipartReq): CompleteMultipartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteMultipartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteMultipartReq;
  static deserializeBinaryFromReader(message: CompleteMultipartReq, reader: jspb.BinaryReader): CompleteMultipartReq;
}

export namespace CompleteMultipartReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: CompleteMultipartRequest.AsObject,
  }
}

export class CompleteMultipartResp extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteMultipartResp.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteMultipartResp): CompleteMultipartResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteMultipartResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteMultipartResp;
  static deserializeBinaryFromReader(message: CompleteMultipartResp, reader: jspb.BinaryReader): CompleteMultipartResp;
}

export namespace CompleteMultipartResp {
  export type AsObject = {
    key: string,
    etag: string,
    cid: string,
  }
}

export class RangeRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RangeRequest): RangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeRequest;
  static deserializeBinaryFromReader(message: RangeRequest, reader: jspb.BinaryReader): RangeRequest;
}

export namespace RangeRequest {
  export type AsObject = {
    start: number,
    length: number,
  }
}

export class Thumbnail extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thumbnail.AsObject;
  static toObject(includeInstance: boolean, msg: Thumbnail): Thumbnail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Thumbnail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thumbnail;
  static deserializeBinaryFromReader(message: Thumbnail, reader: jspb.BinaryReader): Thumbnail;
}

export namespace Thumbnail {
  export type AsObject = {
    width: number,
    height: number,
  }
}

export class GetRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): RangeRequest | undefined;
  setRange(value?: RangeRequest): void;

  getThumb(): boolean;
  setThumb(value: boolean): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    header?: Header.AsObject,
    cid: string,
    key: string,
    range?: RangeRequest.AsObject,
    thumb: boolean,
    pwd: string,
  }
}

export class ObjectInfo extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): Object | undefined;
  setObject(value?: Object): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): RangeRequest | undefined;
  setRange(value?: RangeRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectInfo): ObjectInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectInfo;
  static deserializeBinaryFromReader(message: ObjectInfo, reader: jspb.BinaryReader): ObjectInfo;
}

export namespace ObjectInfo {
  export type AsObject = {
    object?: Object.AsObject,
    range?: RangeRequest.AsObject,
  }
}

export class GetResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ObjectInfo | undefined;
  setObject(value?: ObjectInfo): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): GetResponse.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    object?: ObjectInfo.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    CHUNK = 2,
  }
}

export class PutObjectResult extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectResult.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectResult): PutObjectResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectResult;
  static deserializeBinaryFromReader(message: PutObjectResult, reader: jspb.BinaryReader): PutObjectResult;
}

export namespace PutObjectResult {
  export type AsObject = {
    md5: string,
    cid: string,
    lastmodified: string,
  }
}

export class PutObjectPartRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): PutObjectPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectPartRequest): PutObjectPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectPartRequest;
  static deserializeBinaryFromReader(message: PutObjectPartRequest, reader: jspb.BinaryReader): PutObjectPartRequest;
}

export namespace PutObjectPartRequest {
  export type AsObject = {
    md5: string,
    key: string,
    contentlength: number,
    partid: number,
    uploadid: string,
  }
}

export class PutObjectPartReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): PutObjectPartRequest | undefined;
  setRequest(value?: PutObjectPartRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectPartReq.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectPartReq): PutObjectPartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectPartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectPartReq;
  static deserializeBinaryFromReader(message: PutObjectPartReq, reader: jspb.BinaryReader): PutObjectPartReq;
}

export namespace PutObjectPartReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: PutObjectPartRequest.AsObject,
  }
}

export class PutObjectPartOpt extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): PutObjectPartReq | undefined;
  setReq(value?: PutObjectPartReq): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): PutObjectPartOpt.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectPartOpt.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectPartOpt): PutObjectPartOpt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectPartOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectPartOpt;
  static deserializeBinaryFromReader(message: PutObjectPartOpt, reader: jspb.BinaryReader): PutObjectPartOpt;
}

export namespace PutObjectPartOpt {
  export type AsObject = {
    req?: PutObjectPartReq.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class PutObjectPartResult extends jspb.Message {
  getEtag(): string;
  setEtag(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutObjectPartResult.AsObject;
  static toObject(includeInstance: boolean, msg: PutObjectPartResult): PutObjectPartResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutObjectPartResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutObjectPartResult;
  static deserializeBinaryFromReader(message: PutObjectPartResult, reader: jspb.BinaryReader): PutObjectPartResult;
}

export namespace PutObjectPartResult {
  export type AsObject = {
    etag: string,
    size: number,
  }
}

export class ListPartsRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  getMaxparts(): number;
  setMaxparts(value: number): void;

  getPartnumbermarker(): number;
  setPartnumbermarker(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartsRequest): ListPartsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartsRequest;
  static deserializeBinaryFromReader(message: ListPartsRequest, reader: jspb.BinaryReader): ListPartsRequest;
}

export namespace ListPartsRequest {
  export type AsObject = {
    key: string,
    uploadid: string,
    maxparts: number,
    partnumbermarker: number,
  }
}

export class ListPartsReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListPartsRequest | undefined;
  setRequest(value?: ListPartsRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartsReq): ListPartsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPartsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartsReq;
  static deserializeBinaryFromReader(message: ListPartsReq, reader: jspb.BinaryReader): ListPartsReq;
}

export namespace ListPartsReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: ListPartsRequest.AsObject,
  }
}

export class Part extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): void;

  getEtag(): string;
  setEtag(value: string): void;

  getLastmodified(): string;
  setLastmodified(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Part.AsObject;
  static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Part;
  static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
  export type AsObject = {
    partnumber: number,
    etag: string,
    lastmodified: string,
    size: number,
  }
}

export class ListPartsResponse extends jspb.Message {
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
  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): void;
  addParts(value?: Part, index?: number): Part;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartsResponse): ListPartsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartsResponse;
  static deserializeBinaryFromReader(message: ListPartsResponse, reader: jspb.BinaryReader): ListPartsResponse;
}

export namespace ListPartsResponse {
  export type AsObject = {
    key: string,
    uploadid: string,
    partnumbermarker: number,
    nextpartnumbermarker: number,
    istruncated: boolean,
    partsList: Array<Part.AsObject>,
  }
}

export class Upload extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upload.AsObject;
  static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upload;
  static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
  export type AsObject = {
    key: string,
    uploadid: string,
  }
}

export class ListObjectsRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsRequest): ListObjectsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsRequest;
  static deserializeBinaryFromReader(message: ListObjectsRequest, reader: jspb.BinaryReader): ListObjectsRequest;
}

export namespace ListObjectsRequest {
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

export class ListObjectsReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListObjectsRequest | undefined;
  setRequest(value?: ListObjectsRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsReq): ListObjectsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsReq;
  static deserializeBinaryFromReader(message: ListObjectsReq, reader: jspb.BinaryReader): ListObjectsReq;
}

export namespace ListObjectsReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: ListObjectsRequest.AsObject,
  }
}

export class ImageCameraInfo extends jspb.Message {
  getMake(): string;
  setMake(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageCameraInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageCameraInfo): ImageCameraInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageCameraInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageCameraInfo;
  static deserializeBinaryFromReader(message: ImageCameraInfo, reader: jspb.BinaryReader): ImageCameraInfo;
}

export namespace ImageCameraInfo {
  export type AsObject = {
    make: string,
    model: string,
  }
}

export class ImageCameraResolution extends jspb.Message {
  getWeight(): number;
  setWeight(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageCameraResolution.AsObject;
  static toObject(includeInstance: boolean, msg: ImageCameraResolution): ImageCameraResolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageCameraResolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageCameraResolution;
  static deserializeBinaryFromReader(message: ImageCameraResolution, reader: jspb.BinaryReader): ImageCameraResolution;
}

export namespace ImageCameraResolution {
  export type AsObject = {
    weight: number,
    height: number,
  }
}

export class ImageAddition extends jspb.Message {
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
  toObject(includeInstance?: boolean): ImageAddition.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAddition): ImageAddition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageAddition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAddition;
  static deserializeBinaryFromReader(message: ImageAddition, reader: jspb.BinaryReader): ImageAddition;
}

export namespace ImageAddition {
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

export class GpsInfo extends jspb.Message {
  getLat(): number;
  setLat(value: number): void;

  getLong(): number;
  setLong(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GpsInfo): GpsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GpsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpsInfo;
  static deserializeBinaryFromReader(message: GpsInfo, reader: jspb.BinaryReader): GpsInfo;
}

export namespace GpsInfo {
  export type AsObject = {
    lat: number,
    pb_long: number,
  }
}

export class ImageInfo extends jspb.Message {
  hasCamerainfo(): boolean;
  clearCamerainfo(): void;
  getCamerainfo(): ImageCameraInfo | undefined;
  setCamerainfo(value?: ImageCameraInfo): void;

  hasResolution(): boolean;
  clearResolution(): void;
  getResolution(): ImageCameraResolution | undefined;
  setResolution(value?: ImageCameraResolution): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): GpsInfo | undefined;
  setGps(value?: GpsInfo): void;

  hasAddition(): boolean;
  clearAddition(): void;
  getAddition(): ImageAddition | undefined;
  setAddition(value?: ImageAddition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageInfo;
  static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
  export type AsObject = {
    camerainfo?: ImageCameraInfo.AsObject,
    resolution?: ImageCameraResolution.AsObject,
    gps?: GpsInfo.AsObject,
    addition?: ImageAddition.AsObject,
  }
}

export class Object extends jspb.Message {
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
  getNftinfosList(): Array<NFTInfo>;
  setNftinfosList(value: Array<NFTInfo>): void;
  addNftinfos(value?: NFTInfo, index?: number): NFTInfo;

  clearPinningList(): void;
  getPinningList(): Array<Pinning>;
  setPinningList(value: Array<Pinning>): void;
  addPinning(value?: Pinning, index?: number): Pinning;

  hasImages(): boolean;
  clearImages(): void;
  getImages(): ImageInfo | undefined;
  setImages(value?: ImageInfo): void;

  getThumb(): string;
  setThumb(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
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
    nftinfosList: Array<NFTInfo.AsObject>,
    pinningList: Array<Pinning.AsObject>,
    images?: ImageInfo.AsObject,
    thumb: string,
  }
}

export class PrefixPin extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getIspin(): boolean;
  setIspin(value: boolean): void;

  clearNftinfosList(): void;
  getNftinfosList(): Array<NFTInfo>;
  setNftinfosList(value: Array<NFTInfo>): void;
  addNftinfos(value?: NFTInfo, index?: number): NFTInfo;

  clearPinningList(): void;
  getPinningList(): Array<Pinning>;
  setPinningList(value: Array<Pinning>): void;
  addPinning(value?: Pinning, index?: number): Pinning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrefixPin.AsObject;
  static toObject(includeInstance: boolean, msg: PrefixPin): PrefixPin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrefixPin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrefixPin;
  static deserializeBinaryFromReader(message: PrefixPin, reader: jspb.BinaryReader): PrefixPin;
}

export namespace PrefixPin {
  export type AsObject = {
    prefix: string,
    cid: string,
    ispin: boolean,
    nftinfosList: Array<NFTInfo.AsObject>,
    pinningList: Array<Pinning.AsObject>,
  }
}

export class ListObjectsResp extends jspb.Message {
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
  getContentList(): Array<Object>;
  setContentList(value: Array<Object>): void;
  addContent(value?: Object, index?: number): Object;

  clearPrefixpinsList(): void;
  getPrefixpinsList(): Array<PrefixPin>;
  setPrefixpinsList(value: Array<PrefixPin>): void;
  addPrefixpins(value?: PrefixPin, index?: number): PrefixPin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsResp.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsResp): ListObjectsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListObjectsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsResp;
  static deserializeBinaryFromReader(message: ListObjectsResp, reader: jspb.BinaryReader): ListObjectsResp;
}

export namespace ListObjectsResp {
  export type AsObject = {
    commonprefixesList: Array<string>,
    istruncated: boolean,
    prefix: string,
    maxkeys: number,
    nextmarker: string,
    continuationtoken: string,
    contentList: Array<Object.AsObject>,
    prefixpinsList: Array<PrefixPin.AsObject>,
  }
}

export class Pinning extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pinning.AsObject;
  static toObject(includeInstance: boolean, msg: Pinning): Pinning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pinning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pinning;
  static deserializeBinaryFromReader(message: Pinning, reader: jspb.BinaryReader): Pinning;
}

export namespace Pinning {
  export type AsObject = {
    requestid: string,
  }
}

export class ListUploadRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUploadRequest): ListUploadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUploadRequest;
  static deserializeBinaryFromReader(message: ListUploadRequest, reader: jspb.BinaryReader): ListUploadRequest;
}

export namespace ListUploadRequest {
  export type AsObject = {
    delimiter: string,
    encodingtype: string,
    maxuploads: number,
    keymarker: string,
    prefix: string,
    uploadidmarker: string,
  }
}

export class ListUploadReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ListUploadRequest | undefined;
  setRequest(value?: ListUploadRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListUploadReq): ListUploadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUploadReq;
  static deserializeBinaryFromReader(message: ListUploadReq, reader: jspb.BinaryReader): ListUploadReq;
}

export namespace ListUploadReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: ListUploadRequest.AsObject,
  }
}

export class ListMultipartUploadResponse extends jspb.Message {
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
  getUploadsList(): Array<Upload>;
  setUploadsList(value: Array<Upload>): void;
  addUploads(value?: Upload, index?: number): Upload;

  getDelimiter(): string;
  setDelimiter(value: string): void;

  clearCommonprefixesList(): void;
  getCommonprefixesList(): Array<string>;
  setCommonprefixesList(value: Array<string>): void;
  addCommonprefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMultipartUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMultipartUploadResponse): ListMultipartUploadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMultipartUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMultipartUploadResponse;
  static deserializeBinaryFromReader(message: ListMultipartUploadResponse, reader: jspb.BinaryReader): ListMultipartUploadResponse;
}

export namespace ListMultipartUploadResponse {
  export type AsObject = {
    prefix: string,
    keymarker: string,
    uploadidmarker: string,
    nextkeymarker: string,
    nextuploadidmarker: string,
    maxuploads: number,
    istruncated: boolean,
    uploadsList: Array<Upload.AsObject>,
    delimiter: string,
    commonprefixesList: Array<string>,
  }
}

export class UnpinRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStype(): string;
  setStype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnpinRequest): UnpinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnpinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpinRequest;
  static deserializeBinaryFromReader(message: UnpinRequest, reader: jspb.BinaryReader): UnpinRequest;
}

export namespace UnpinRequest {
  export type AsObject = {
    cid: string,
    stype: string,
  }
}

export class UnPinReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): UnpinRequest | undefined;
  setRequest(value?: UnpinRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnPinReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnPinReq): UnPinReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnPinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnPinReq;
  static deserializeBinaryFromReader(message: UnPinReq, reader: jspb.BinaryReader): UnPinReq;
}

export namespace UnPinReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: UnpinRequest.AsObject,
  }
}

export class PinRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): PinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinRequest): PinRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinRequest;
  static deserializeBinaryFromReader(message: PinRequest, reader: jspb.BinaryReader): PinRequest;
}

export namespace PinRequest {
  export type AsObject = {
    cid: string,
    stype: string,
    exp: number,
    pin: boolean,
    isdir: boolean,
    key: string,
  }
}

export class PinResp extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinResp.AsObject;
  static toObject(includeInstance: boolean, msg: PinResp): PinResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinResp;
  static deserializeBinaryFromReader(message: PinResp, reader: jspb.BinaryReader): PinResp;
}

export namespace PinResp {
  export type AsObject = {
    cid: string,
    status: string,
  }
}

export class PinReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): PinRequest | undefined;
  setRequest(value?: PinRequest): void;

  hasPay(): boolean;
  clearPay(): void;
  getPay(): PinPay | undefined;
  setPay(value?: PinPay): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinReq.AsObject;
  static toObject(includeInstance: boolean, msg: PinReq): PinReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinReq;
  static deserializeBinaryFromReader(message: PinReq, reader: jspb.BinaryReader): PinReq;
}

export namespace PinReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: PinRequest.AsObject,
    pay?: PinPay.AsObject,
  }
}

export class PingRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class PingResponse extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    peerid: string,
  }
}

export class PingMinerRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMinerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingMinerRequest): PingMinerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMinerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMinerRequest;
  static deserializeBinaryFromReader(message: PingMinerRequest, reader: jspb.BinaryReader): PingMinerRequest;
}

export namespace PingMinerRequest {
  export type AsObject = {
    header?: Header.AsObject,
    orderid: string,
  }
}

export class PingMiner extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): void;

  getAddr(): string;
  setAddr(value: string): void;

  getError(): string;
  setError(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMiner.AsObject;
  static toObject(includeInstance: boolean, msg: PingMiner): PingMiner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMiner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMiner;
  static deserializeBinaryFromReader(message: PingMiner, reader: jspb.BinaryReader): PingMiner;
}

export namespace PingMiner {
  export type AsObject = {
    peerid: string,
    addr: string,
    error: string,
    type: string,
  }
}

export class PingMinerResponse extends jspb.Message {
  clearMinersList(): void;
  getMinersList(): Array<PingMiner>;
  setMinersList(value: Array<PingMiner>): void;
  addMiners(value?: PingMiner, index?: number): PingMiner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMinerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingMinerResponse): PingMinerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMinerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMinerResponse;
  static deserializeBinaryFromReader(message: PingMinerResponse, reader: jspb.BinaryReader): PingMinerResponse;
}

export namespace PingMinerResponse {
  export type AsObject = {
    minersList: Array<PingMiner.AsObject>,
  }
}

export class FindRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getFileid(): string;
  setFileid(value: string): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRequest): FindRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRequest;
  static deserializeBinaryFromReader(message: FindRequest, reader: jspb.BinaryReader): FindRequest;
}

export namespace FindRequest {
  export type AsObject = {
    header?: Header.AsObject,
    cid: string,
    key: string,
    fileid: string,
    prefix: string,
  }
}

export class Objects extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<Object>;
  setContentsList(value: Array<Object>): void;
  addContents(value?: Object, index?: number): Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Objects.AsObject;
  static toObject(includeInstance: boolean, msg: Objects): Objects.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Objects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Objects;
  static deserializeBinaryFromReader(message: Objects, reader: jspb.BinaryReader): Objects;
}

export namespace Objects {
  export type AsObject = {
    contentsList: Array<Object.AsObject>,
  }
}

export class Links extends jspb.Message {
  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): Link | undefined;
  setMeta(value?: Link): void;

  clearLinksList(): void;
  getLinksList(): Array<Link>;
  setLinksList(value: Array<Link>): void;
  addLinks(value?: Link, index?: number): Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Links.AsObject;
  static toObject(includeInstance: boolean, msg: Links): Links.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Links, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Links;
  static deserializeBinaryFromReader(message: Links, reader: jspb.BinaryReader): Links;
}

export namespace Links {
  export type AsObject = {
    meta?: Link.AsObject,
    linksList: Array<Link.AsObject>,
  }
}

export class Link extends jspb.Message {
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
  toObject(includeInstance?: boolean): Link.AsObject;
  static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Link;
  static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
}

export namespace Link {
  export type AsObject = {
    name: string,
    path: string,
    hash: string,
    type: number,
    size: number,
  }
}

export class SearchRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    header?: Header.AsObject,
    cid: string,
    key: string,
  }
}

export class SearchResponse extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): Link | undefined;
  setObject(value?: Link): void;

  hasLinks(): boolean;
  clearLinks(): void;
  getLinks(): Links | undefined;
  setLinks(value?: Links): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getOptionCase(): SearchResponse.OptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    object?: Link.AsObject,
    links?: Links.AsObject,
    chunk: Uint8Array | string,
  }

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    LINKS = 2,
    CHUNK = 3,
  }
}

export class RequestSummaryIds extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSummaryIds.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSummaryIds): RequestSummaryIds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestSummaryIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSummaryIds;
  static deserializeBinaryFromReader(message: RequestSummaryIds, reader: jspb.BinaryReader): RequestSummaryIds;
}

export namespace RequestSummaryIds {
  export type AsObject = {
    header?: Header.AsObject,
    idsList: Array<string>,
  }
}

export class SummaryInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryInfo): SummaryInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummaryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryInfo;
  static deserializeBinaryFromReader(message: SummaryInfo, reader: jspb.BinaryReader): SummaryInfo;
}

export namespace SummaryInfo {
  export type AsObject = {
    id: string,
    total: number,
    count: number,
  }
}

export class SummaryInfos extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<SummaryInfo>;
  setContentsList(value: Array<SummaryInfo>): void;
  addContents(value?: SummaryInfo, index?: number): SummaryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryInfos.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryInfos): SummaryInfos.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummaryInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryInfos;
  static deserializeBinaryFromReader(message: SummaryInfos, reader: jspb.BinaryReader): SummaryInfos;
}

export namespace SummaryInfos {
  export type AsObject = {
    contentsList: Array<SummaryInfo.AsObject>,
  }
}

export class RenameObject extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getSourceobject(): string;
  setSourceobject(value: string): void;

  getTargetobject(): string;
  setTargetobject(value: string): void;

  getFiletype(): number;
  setFiletype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameObject.AsObject;
  static toObject(includeInstance: boolean, msg: RenameObject): RenameObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameObject;
  static deserializeBinaryFromReader(message: RenameObject, reader: jspb.BinaryReader): RenameObject;
}

export namespace RenameObject {
  export type AsObject = {
    header?: Header.AsObject,
    sourceobject: string,
    targetobject: string,
    filetype: number,
  }
}

export class RenameObjectResp extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: RenameObjectResp): RenameObjectResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenameObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameObjectResp;
  static deserializeBinaryFromReader(message: RenameObjectResp, reader: jspb.BinaryReader): RenameObjectResp;
}

export namespace RenameObjectResp {
  export type AsObject = {
    total: number,
  }
}

export class TimeLine extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getInterval(): string;
  setInterval(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getCategory(): number;
  setCategory(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeLine.AsObject;
  static toObject(includeInstance: boolean, msg: TimeLine): TimeLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeLine;
  static deserializeBinaryFromReader(message: TimeLine, reader: jspb.BinaryReader): TimeLine;
}

export namespace TimeLine {
  export type AsObject = {
    header?: Header.AsObject,
    interval: string,
    date: string,
    category: number,
  }
}

export class TimeLineResp extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<TimeLineRes>;
  setContentsList(value: Array<TimeLineRes>): void;
  addContents(value?: TimeLineRes, index?: number): TimeLineRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeLineResp.AsObject;
  static toObject(includeInstance: boolean, msg: TimeLineResp): TimeLineResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeLineResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeLineResp;
  static deserializeBinaryFromReader(message: TimeLineResp, reader: jspb.BinaryReader): TimeLineResp;
}

export namespace TimeLineResp {
  export type AsObject = {
    contentsList: Array<TimeLineRes.AsObject>,
  }
}

export class TimeLineRes extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeLineRes.AsObject;
  static toObject(includeInstance: boolean, msg: TimeLineRes): TimeLineRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeLineRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeLineRes;
  static deserializeBinaryFromReader(message: TimeLineRes, reader: jspb.BinaryReader): TimeLineRes;
}

export namespace TimeLineRes {
  export type AsObject = {
    date: string,
    count: number,
  }
}

export class GetInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfo): GetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfo;
  static deserializeBinaryFromReader(message: GetInfo, reader: jspb.BinaryReader): GetInfo;
}

export namespace GetInfo {
  export type AsObject = {
    cid: string,
    key: string,
  }
}

export class GetRequests extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  clearObjsList(): void;
  getObjsList(): Array<GetInfo>;
  setObjsList(value: Array<GetInfo>): void;
  addObjs(value?: GetInfo, index?: number): GetInfo;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): RangeRequest | undefined;
  setRange(value?: RangeRequest): void;

  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequests.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequests): GetRequests.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequests;
  static deserializeBinaryFromReader(message: GetRequests, reader: jspb.BinaryReader): GetRequests;
}

export namespace GetRequests {
  export type AsObject = {
    header?: Header.AsObject,
    objsList: Array<GetInfo.AsObject>,
    range?: RangeRequest.AsObject,
    prefixesList: Array<string>,
  }
}

export class PresignedURL extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getUrl(): string;
  setUrl(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getExpires(): number;
  setExpires(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresignedURL.AsObject;
  static toObject(includeInstance: boolean, msg: PresignedURL): PresignedURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PresignedURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresignedURL;
  static deserializeBinaryFromReader(message: PresignedURL, reader: jspb.BinaryReader): PresignedURL;
}

export namespace PresignedURL {
  export type AsObject = {
    header?: Header.AsObject,
    url: string,
    method: string,
    expires: number,
  }
}

export class PresignedURLResp extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresignedURLResp.AsObject;
  static toObject(includeInstance: boolean, msg: PresignedURLResp): PresignedURLResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PresignedURLResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresignedURLResp;
  static deserializeBinaryFromReader(message: PresignedURLResp, reader: jspb.BinaryReader): PresignedURLResp;
}

export namespace PresignedURLResp {
  export type AsObject = {
    url: string,
  }
}

export class FileInfo extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getKey(): string;
  setKey(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    header?: Header.AsObject,
    key: string,
    contenttype: string,
    size: number,
  }
}

export class TouchResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TouchResp.AsObject;
  static toObject(includeInstance: boolean, msg: TouchResp): TouchResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TouchResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TouchResp;
  static deserializeBinaryFromReader(message: TouchResp, reader: jspb.BinaryReader): TouchResp;
}

export namespace TouchResp {
  export type AsObject = {
    status: string,
  }
}

export class ChatReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ChatRequest | undefined;
  setRequest(value?: ChatRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatReq.AsObject;
  static toObject(includeInstance: boolean, msg: ChatReq): ChatReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatReq;
  static deserializeBinaryFromReader(message: ChatReq, reader: jspb.BinaryReader): ChatReq;
}

export namespace ChatReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: ChatRequest.AsObject,
  }
}

export class ChatRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    vsname: string,
    query: string,
    en: boolean,
    model: string,
    chattype: string,
  }
}

export class ChatResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getSourcedocuments(): string;
  setSourcedocuments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
    value: string,
    status: string,
    sourcedocuments: string,
  }
}

export class KNReq extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): KNRequest | undefined;
  setRequest(value?: KNRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KNReq.AsObject;
  static toObject(includeInstance: boolean, msg: KNReq): KNReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KNReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KNReq;
  static deserializeBinaryFromReader(message: KNReq, reader: jspb.BinaryReader): KNReq;
}

export namespace KNReq {
  export type AsObject = {
    header?: Header.AsObject,
    request?: KNRequest.AsObject,
  }
}

export class KNRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): KNRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KNRequest): KNRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KNRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KNRequest;
  static deserializeBinaryFromReader(message: KNRequest, reader: jspb.BinaryReader): KNRequest;
}

export namespace KNRequest {
  export type AsObject = {
    vsname: string,
    title: string,
    content: string,
    filesList: Array<string>,
    method: string,
  }
}

export class KNResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KNResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KNResponse): KNResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KNResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KNResponse;
  static deserializeBinaryFromReader(message: KNResponse, reader: jspb.BinaryReader): KNResponse;
}

export namespace KNResponse {
  export type AsObject = {
    status: string,
    data: string,
  }
}

export class Cred extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): void;

  getSecretkey(): string;
  setSecretkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cred.AsObject;
  static toObject(includeInstance: boolean, msg: Cred): Cred.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cred;
  static deserializeBinaryFromReader(message: Cred, reader: jspb.BinaryReader): Cred;
}

export namespace Cred {
  export type AsObject = {
    accesskey: string,
    secretkey: string,
  }
}

export class CredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasCred(): boolean;
  clearCred(): void;
  getCred(): Cred | undefined;
  setCred(value?: Cred): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CredRequest): CredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredRequest;
  static deserializeBinaryFromReader(message: CredRequest, reader: jspb.BinaryReader): CredRequest;
}

export namespace CredRequest {
  export type AsObject = {
    header?: Header.AsObject,
    cred?: Cred.AsObject,
  }
}

export class CredResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredResp.AsObject;
  static toObject(includeInstance: boolean, msg: CredResp): CredResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CredResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredResp;
  static deserializeBinaryFromReader(message: CredResp, reader: jspb.BinaryReader): CredResp;
}

export namespace CredResp {
  export type AsObject = {
    status: string,
  }
}

export class GetCredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredRequest): GetCredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredRequest;
  static deserializeBinaryFromReader(message: GetCredRequest, reader: jspb.BinaryReader): GetCredRequest;
}

export namespace GetCredRequest {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class CredsList extends jspb.Message {
  clearCredsList(): void;
  getCredsList(): Array<Cred>;
  setCredsList(value: Array<Cred>): void;
  addCreds(value?: Cred, index?: number): Cred;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredsList.AsObject;
  static toObject(includeInstance: boolean, msg: CredsList): CredsList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CredsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredsList;
  static deserializeBinaryFromReader(message: CredsList, reader: jspb.BinaryReader): CredsList;
}

export namespace CredsList {
  export type AsObject = {
    credsList: Array<Cred.AsObject>,
  }
}

export class GeneratePinCredRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePinCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePinCredRequest): GeneratePinCredRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneratePinCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePinCredRequest;
  static deserializeBinaryFromReader(message: GeneratePinCredRequest, reader: jspb.BinaryReader): GeneratePinCredRequest;
}

export namespace GeneratePinCredRequest {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class GeneratePinCredResp extends jspb.Message {
  getCred(): string;
  setCred(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePinCredResp.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePinCredResp): GeneratePinCredResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneratePinCredResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePinCredResp;
  static deserializeBinaryFromReader(message: GeneratePinCredResp, reader: jspb.BinaryReader): GeneratePinCredResp;
}

export namespace GeneratePinCredResp {
  export type AsObject = {
    cred: string,
  }
}

export class NFTInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): void;

  getContractid(): string;
  setContractid(value: string): void;

  getTokenid(): string;
  setTokenid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NFTInfo): NFTInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NFTInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTInfo;
  static deserializeBinaryFromReader(message: NFTInfo, reader: jspb.BinaryReader): NFTInfo;
}

export namespace NFTInfo {
  export type AsObject = {
    cid: string,
    contractid: string,
    tokenid: string,
  }
}

export class UpdateNFTRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  clearNftinfosList(): void;
  getNftinfosList(): Array<NFTInfo>;
  setNftinfosList(value: Array<NFTInfo>): void;
  addNftinfos(value?: NFTInfo, index?: number): NFTInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNFTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNFTRequest): UpdateNFTRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNFTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNFTRequest;
  static deserializeBinaryFromReader(message: UpdateNFTRequest, reader: jspb.BinaryReader): UpdateNFTRequest;
}

export namespace UpdateNFTRequest {
  export type AsObject = {
    header?: Header.AsObject,
    nftinfosList: Array<NFTInfo.AsObject>,
  }
}

export class UpdateNFTResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNFTResp.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNFTResp): UpdateNFTResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNFTResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNFTResp;
  static deserializeBinaryFromReader(message: UpdateNFTResp, reader: jspb.BinaryReader): UpdateNFTResp;
}

export namespace UpdateNFTResp {
  export type AsObject = {
    status: string,
  }
}

export class Category extends jspb.Message {
  getCategory(): number;
  setCategory(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    category: number,
    total: number,
    count: number,
  }
}

export class Prefix extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prefix.AsObject;
  static toObject(includeInstance: boolean, msg: Prefix): Prefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prefix;
  static deserializeBinaryFromReader(message: Prefix, reader: jspb.BinaryReader): Prefix;
}

export namespace Prefix {
  export type AsObject = {
    prefix: string,
    total: number,
    count: number,
  }
}

export class StatisticsInfo extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<Category>;
  setCategoriesList(value: Array<Category>): void;
  addCategories(value?: Category, index?: number): Category;

  clearPrefixesList(): void;
  getPrefixesList(): Array<Prefix>;
  setPrefixesList(value: Array<Prefix>): void;
  addPrefixes(value?: Prefix, index?: number): Prefix;

  hasCategorysum(): boolean;
  clearCategorysum(): void;
  getCategorysum(): Category | undefined;
  setCategorysum(value?: Category): void;

  hasPrefixsum(): boolean;
  clearPrefixsum(): void;
  getPrefixsum(): Prefix | undefined;
  setPrefixsum(value?: Prefix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsInfo): StatisticsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsInfo;
  static deserializeBinaryFromReader(message: StatisticsInfo, reader: jspb.BinaryReader): StatisticsInfo;
}

export namespace StatisticsInfo {
  export type AsObject = {
    categoriesList: Array<Category.AsObject>,
    prefixesList: Array<Prefix.AsObject>,
    categorysum?: Category.AsObject,
    prefixsum?: Prefix.AsObject,
  }
}

export class RequestStatistics extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getPrefix(): string;
  setPrefix(value: string): void;

  getNeedprefix(): boolean;
  setNeedprefix(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStatistics): RequestStatistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatistics;
  static deserializeBinaryFromReader(message: RequestStatistics, reader: jspb.BinaryReader): RequestStatistics;
}

export namespace RequestStatistics {
  export type AsObject = {
    header?: Header.AsObject,
    prefix: string,
    needprefix: boolean,
  }
}

export class GetCarMetaRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getName(): string;
  setName(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCarMetaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCarMetaRequest): GetCarMetaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCarMetaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCarMetaRequest;
  static deserializeBinaryFromReader(message: GetCarMetaRequest, reader: jspb.BinaryReader): GetCarMetaRequest;
}

export namespace GetCarMetaRequest {
  export type AsObject = {
    header?: Header.AsObject,
    name: string,
    cid: string,
    pwd: string,
  }
}

export class GetCarMetaResponse extends jspb.Message {
  getMeta(): Uint8Array | string;
  getMeta_asU8(): Uint8Array;
  getMeta_asB64(): string;
  setMeta(value: Uint8Array | string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCarMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCarMetaResponse): GetCarMetaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCarMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCarMetaResponse;
  static deserializeBinaryFromReader(message: GetCarMetaResponse, reader: jspb.BinaryReader): GetCarMetaResponse;
}

export namespace GetCarMetaResponse {
  export type AsObject = {
    meta: Uint8Array | string,
    status: string,
  }
}

export class GetBlockResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockResponse): GetBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockResponse;
  static deserializeBinaryFromReader(message: GetBlockResponse, reader: jspb.BinaryReader): GetBlockResponse;
}

export namespace GetBlockResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
    status: string,
  }
}

export class GetBlockRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getCid(): string;
  setCid(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockRequest): GetBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(message: GetBlockRequest, reader: jspb.BinaryReader): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    header?: Header.AsObject,
    cid: string,
    pwd: string,
  }
}

export class TargetPeer extends jspb.Message {
  getMultiaddr(): string;
  setMultiaddr(value: string): void;

  getAccess(): string;
  setAccess(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetPeer.AsObject;
  static toObject(includeInstance: boolean, msg: TargetPeer): TargetPeer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetPeer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetPeer;
  static deserializeBinaryFromReader(message: TargetPeer, reader: jspb.BinaryReader): TargetPeer;
}

export namespace TargetPeer {
  export type AsObject = {
    multiaddr: string,
    access: string,
    id: string,
  }
}

export class FetchRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getUrl(): string;
  setUrl(value: string): void;

  getName(): string;
  setName(value: string): void;

  getMeta(): Uint8Array | string;
  getMeta_asU8(): Uint8Array;
  getMeta_asB64(): string;
  setMeta(value: Uint8Array | string): void;

  clearOriginsList(): void;
  getOriginsList(): Array<TargetPeer>;
  setOriginsList(value: Array<TargetPeer>): void;
  addOrigins(value?: TargetPeer, index?: number): TargetPeer;

  getPwd(): string;
  setPwd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchRequest): FetchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchRequest;
  static deserializeBinaryFromReader(message: FetchRequest, reader: jspb.BinaryReader): FetchRequest;
}

export namespace FetchRequest {
  export type AsObject = {
    header?: Header.AsObject,
    url: string,
    name: string,
    meta: Uint8Array | string,
    originsList: Array<TargetPeer.AsObject>,
    pwd: string,
  }
}

export class GExtractCode extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getCid(): string;
  setCid(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getExp(): string;
  setExp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GExtractCode.AsObject;
  static toObject(includeInstance: boolean, msg: GExtractCode): GExtractCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GExtractCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GExtractCode;
  static deserializeBinaryFromReader(message: GExtractCode, reader: jspb.BinaryReader): GExtractCode;
}

export namespace GExtractCode {
  export type AsObject = {
    header?: Header.AsObject,
    cid: string,
    key: string,
    exp: string,
  }
}

export class FetchPinningRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getPinningid(): string;
  setPinningid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPinningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPinningRequest): FetchPinningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchPinningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPinningRequest;
  static deserializeBinaryFromReader(message: FetchPinningRequest, reader: jspb.BinaryReader): FetchPinningRequest;
}

export namespace FetchPinningRequest {
  export type AsObject = {
    header?: Header.AsObject,
    pinningid: string,
  }
}

export class FetchPinningResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPinningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPinningResponse): FetchPinningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchPinningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPinningResponse;
  static deserializeBinaryFromReader(message: FetchPinningResponse, reader: jspb.BinaryReader): FetchPinningResponse;
}

export namespace FetchPinningResponse {
  export type AsObject = {
    status: string,
  }
}

export class GExtractCodeResp extends jspb.Message {
  getExtractcode(): string;
  setExtractcode(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GExtractCodeResp.AsObject;
  static toObject(includeInstance: boolean, msg: GExtractCodeResp): GExtractCodeResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GExtractCodeResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GExtractCodeResp;
  static deserializeBinaryFromReader(message: GExtractCodeResp, reader: jspb.BinaryReader): GExtractCodeResp;
}

export namespace GExtractCodeResp {
  export type AsObject = {
    extractcode: string,
    state: string,
    cid: string,
  }
}

export class FetchResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResponse): FetchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResponse;
  static deserializeBinaryFromReader(message: FetchResponse, reader: jspb.BinaryReader): FetchResponse;
}

export namespace FetchResponse {
  export type AsObject = {
    status: string,
  }
}

export class PInfo extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PInfo): PInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PInfo;
  static deserializeBinaryFromReader(message: PInfo, reader: jspb.BinaryReader): PInfo;
}

export namespace PInfo {
  export type AsObject = {
    cid: string,
    status: string,
    averagespeed: number,
    size: number,
    firstbyte: number,
    duration: number,
    provider: string,
    idx: number,
  }
}

export class PinningInfo extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreated(): string;
  setCreated(value: string): void;

  clearPinsList(): void;
  getPinsList(): Array<PInfo>;
  setPinsList(value: Array<PInfo>): void;
  addPins(value?: PInfo, index?: number): PInfo;

  getName(): string;
  setName(value: string): void;

  getFstype(): number;
  setFstype(value: number): void;

  getOpertype(): number;
  setOpertype(value: number): void;

  getAveragespeed(): number;
  setAveragespeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PinningInfo): PinningInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinningInfo;
  static deserializeBinaryFromReader(message: PinningInfo, reader: jspb.BinaryReader): PinningInfo;
}

export namespace PinningInfo {
  export type AsObject = {
    requestid: string,
    status: string,
    created: string,
    pinsList: Array<PInfo.AsObject>,
    name: string,
    fstype: number,
    opertype: number,
    averagespeed: number,
  }
}

export class PinningListRequest extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

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
  toObject(includeInstance?: boolean): PinningListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinningListRequest): PinningListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinningListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinningListRequest;
  static deserializeBinaryFromReader(message: PinningListRequest, reader: jspb.BinaryReader): PinningListRequest;
}

export namespace PinningListRequest {
  export type AsObject = {
    header?: Header.AsObject,
    status: string,
    pintype: string,
    before: string,
    after: string,
    limit: number,
    match: string,
    cidsList: Array<string>,
  }
}

export class PinningResp extends jspb.Message {
  clearPinningsList(): void;
  getPinningsList(): Array<PinningInfo>;
  setPinningsList(value: Array<PinningInfo>): void;
  addPinnings(value?: PinningInfo, index?: number): PinningInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinningResp.AsObject;
  static toObject(includeInstance: boolean, msg: PinningResp): PinningResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinningResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinningResp;
  static deserializeBinaryFromReader(message: PinningResp, reader: jspb.BinaryReader): PinningResp;
}

export namespace PinningResp {
  export type AsObject = {
    pinningsList: Array<PinningInfo.AsObject>,
  }
}

export class F2PGetSpace extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetSpace.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetSpace): F2PGetSpace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetSpace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetSpace;
  static deserializeBinaryFromReader(message: F2PGetSpace, reader: jspb.BinaryReader): F2PGetSpace;
}

export namespace F2PGetSpace {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class F2PGetMiner extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetMiner.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetMiner): F2PGetMiner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetMiner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetMiner;
  static deserializeBinaryFromReader(message: F2PGetMiner, reader: jspb.BinaryReader): F2PGetMiner;
}

export namespace F2PGetMiner {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class F2PGetSpaceResult extends jspb.Message {
  getIpfs(): number;
  setIpfs(value: number): void;

  getLocalData(): number;
  setLocalData(value: number): void;

  getLot(): number;
  setLot(value: number): void;

  getMiningPool(): number;
  setMiningPool(value: number): void;

  getRemaining(): number;
  setRemaining(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetSpaceResult.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetSpaceResult): F2PGetSpaceResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetSpaceResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetSpaceResult;
  static deserializeBinaryFromReader(message: F2PGetSpaceResult, reader: jspb.BinaryReader): F2PGetSpaceResult;
}

export namespace F2PGetSpaceResult {
  export type AsObject = {
    ipfs: number,
    localData: number,
    lot: number,
    miningPool: number,
    remaining: number,
    total: number,
  }
}

export class F2PGetSpaceResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): F2PGetSpaceResult | undefined;
  setResult(value?: F2PGetSpaceResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetSpaceResp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetSpaceResp): F2PGetSpaceResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetSpaceResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetSpaceResp;
  static deserializeBinaryFromReader(message: F2PGetSpaceResp, reader: jspb.BinaryReader): F2PGetSpaceResp;
}

export namespace F2PGetSpaceResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: F2PGetSpaceResult.AsObject,
  }
}

export class F2PGetMinerData extends jspb.Message {
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
  toObject(includeInstance?: boolean): F2PGetMinerData.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetMinerData): F2PGetMinerData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetMinerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetMinerData;
  static deserializeBinaryFromReader(message: F2PGetMinerData, reader: jspb.BinaryReader): F2PGetMinerData;
}

export namespace F2PGetMinerData {
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

export class F2PGetMinerResult extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<F2PGetMinerData>;
  setDataList(value: Array<F2PGetMinerData>): void;
  addData(value?: F2PGetMinerData, index?: number): F2PGetMinerData;

  getPagenumber(): string;
  setPagenumber(value: string): void;

  getPagesize(): string;
  setPagesize(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetMinerResult.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetMinerResult): F2PGetMinerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetMinerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetMinerResult;
  static deserializeBinaryFromReader(message: F2PGetMinerResult, reader: jspb.BinaryReader): F2PGetMinerResult;
}

export namespace F2PGetMinerResult {
  export type AsObject = {
    dataList: Array<F2PGetMinerData.AsObject>,
    pagenumber: string,
    pagesize: string,
    total: number,
  }
}

export class F2PGetMinerResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): F2PGetMinerResult | undefined;
  setResult(value?: F2PGetMinerResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetMinerResp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetMinerResp): F2PGetMinerResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetMinerResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetMinerResp;
  static deserializeBinaryFromReader(message: F2PGetMinerResp, reader: jspb.BinaryReader): F2PGetMinerResp;
}

export namespace F2PGetMinerResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: F2PGetMinerResult.AsObject,
  }
}

export class F2PGetIOT extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetIOT.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetIOT): F2PGetIOT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetIOT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetIOT;
  static deserializeBinaryFromReader(message: F2PGetIOT, reader: jspb.BinaryReader): F2PGetIOT;
}

export namespace F2PGetIOT {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class IOTInfo extends jspb.Message {
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
  toObject(includeInstance?: boolean): IOTInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IOTInfo): IOTInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IOTInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IOTInfo;
  static deserializeBinaryFromReader(message: IOTInfo, reader: jspb.BinaryReader): IOTInfo;
}

export namespace IOTInfo {
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

export class IOTData extends jspb.Message {
  getGroupid(): number;
  setGroupid(value: number): void;

  getType(): number;
  setType(value: number): void;

  getGroupname(): string;
  setGroupname(value: string): void;

  clearListList(): void;
  getListList(): Array<IOTInfo>;
  setListList(value: Array<IOTInfo>): void;
  addList(value?: IOTInfo, index?: number): IOTInfo;

  getReceiverstatus(): boolean;
  setReceiverstatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IOTData.AsObject;
  static toObject(includeInstance: boolean, msg: IOTData): IOTData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IOTData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IOTData;
  static deserializeBinaryFromReader(message: IOTData, reader: jspb.BinaryReader): IOTData;
}

export namespace IOTData {
  export type AsObject = {
    groupid: number,
    type: number,
    groupname: string,
    listList: Array<IOTInfo.AsObject>,
    receiverstatus: boolean,
  }
}

export class F2PGetIOTResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  clearDataList(): void;
  getDataList(): Array<IOTData>;
  setDataList(value: Array<IOTData>): void;
  addData(value?: IOTData, index?: number): IOTData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetIOTResp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetIOTResp): F2PGetIOTResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetIOTResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetIOTResp;
  static deserializeBinaryFromReader(message: F2PGetIOTResp, reader: jspb.BinaryReader): F2PGetIOTResp;
}

export namespace F2PGetIOTResp {
  export type AsObject = {
    code: number,
    msg: string,
    dataList: Array<IOTData.AsObject>,
  }
}

export class F2PGetIOTAmountResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  getData(): number;
  setData(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetIOTAmountResp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetIOTAmountResp): F2PGetIOTAmountResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetIOTAmountResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetIOTAmountResp;
  static deserializeBinaryFromReader(message: F2PGetIOTAmountResp, reader: jspb.BinaryReader): F2PGetIOTAmountResp;
}

export namespace F2PGetIOTAmountResp {
  export type AsObject = {
    code: number,
    msg: string,
    data: number,
    time: number,
  }
}

export class F2PGetApp extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetApp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetApp): F2PGetApp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetApp;
  static deserializeBinaryFromReader(message: F2PGetApp, reader: jspb.BinaryReader): F2PGetApp;
}

export namespace F2PGetApp {
  export type AsObject = {
    header?: Header.AsObject,
    name: string,
  }
}

export class F2PGetAppData extends jspb.Message {
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
  toObject(includeInstance?: boolean): F2PGetAppData.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetAppData): F2PGetAppData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetAppData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetAppData;
  static deserializeBinaryFromReader(message: F2PGetAppData, reader: jspb.BinaryReader): F2PGetAppData;
}

export namespace F2PGetAppData {
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

export class F2PGetAppResult extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): F2PGetAppData | undefined;
  setData(value?: F2PGetAppData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetAppResult.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetAppResult): F2PGetAppResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetAppResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetAppResult;
  static deserializeBinaryFromReader(message: F2PGetAppResult, reader: jspb.BinaryReader): F2PGetAppResult;
}

export namespace F2PGetAppResult {
  export type AsObject = {
    data?: F2PGetAppData.AsObject,
  }
}

export class F2PGetAppResp extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): F2PGetAppResult | undefined;
  setResult(value?: F2PGetAppResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2PGetAppResp.AsObject;
  static toObject(includeInstance: boolean, msg: F2PGetAppResp): F2PGetAppResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F2PGetAppResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2PGetAppResp;
  static deserializeBinaryFromReader(message: F2PGetAppResp, reader: jspb.BinaryReader): F2PGetAppResp;
}

export namespace F2PGetAppResp {
  export type AsObject = {
    code: number,
    message: string,
    result?: F2PGetAppResult.AsObject,
  }
}

