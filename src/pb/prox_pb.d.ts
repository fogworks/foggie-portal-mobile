import * as jspb from 'google-protobuf';

export class ProxHeader extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): ProxHeader;

  getId(): string;
  setId(value: string): ProxHeader;

  getToken(): string;
  setToken(value: string): ProxHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ProxHeader): ProxHeader.AsObject;
  static serializeBinaryToWriter(message: ProxHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxHeader;
  static deserializeBinaryFromReader(message: ProxHeader, reader: jspb.BinaryReader): ProxHeader;
}

export namespace ProxHeader {
  export type AsObject = {
    peerid: string;
    id: string;
    token: string;
  };
}

export class ProxStagePartRequest extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxStagePartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePartRequest): ProxStagePartRequest.AsObject;
  static serializeBinaryToWriter(message: ProxStagePartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePartRequest;
  static deserializeBinaryFromReader(message: ProxStagePartRequest, reader: jspb.BinaryReader): ProxStagePartRequest;
}

export namespace ProxStagePartRequest {
  export type AsObject = {
    chunk: Uint8Array | string;
  };
}

export class ProxStagePartResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxStagePartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePartResponse): ProxStagePartResponse.AsObject;
  static serializeBinaryToWriter(message: ProxStagePartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePartResponse;
  static deserializeBinaryFromReader(message: ProxStagePartResponse, reader: jspb.BinaryReader): ProxStagePartResponse;
}

export namespace ProxStagePartResponse {
  export type AsObject = {
    cid: string;
  };
}

export class ProxPinPay extends jspb.Message {
  getCopied(): number;
  setCopied(value: number): ProxPinPay;

  getTrxid(): string;
  setTrxid(value: string): ProxPinPay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinPay.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinPay): ProxPinPay.AsObject;
  static serializeBinaryToWriter(message: ProxPinPay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinPay;
  static deserializeBinaryFromReader(message: ProxPinPay, reader: jspb.BinaryReader): ProxPinPay;
}

export namespace ProxPinPay {
  export type AsObject = {
    copied: number;
    trxid: string;
  };
}

export class ProxStagePin extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxStagePin;
  hasHeader(): boolean;
  clearHeader(): ProxStagePin;

  getRequest(): ProxPinRequest | undefined;
  setRequest(value?: ProxPinRequest): ProxStagePin;
  hasRequest(): boolean;
  clearRequest(): ProxStagePin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStagePin.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStagePin): ProxStagePin.AsObject;
  static serializeBinaryToWriter(message: ProxStagePin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStagePin;
  static deserializeBinaryFromReader(message: ProxStagePin, reader: jspb.BinaryReader): ProxStagePin;
}

export namespace ProxStagePin {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxPinRequest.AsObject;
  };
}

export class ProxStageRequest extends jspb.Message {
  getPin(): ProxStagePin | undefined;
  setPin(value?: ProxStagePin): ProxStageRequest;
  hasPin(): boolean;
  clearPin(): ProxStageRequest;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxStageRequest;

  getOptionCase(): ProxStageRequest.OptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStageRequest): ProxStageRequest.AsObject;
  static serializeBinaryToWriter(message: ProxStageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStageRequest;
  static deserializeBinaryFromReader(message: ProxStageRequest, reader: jspb.BinaryReader): ProxStageRequest;
}

export namespace ProxStageRequest {
  export type AsObject = {
    pin?: ProxStagePin.AsObject;
    chunk: Uint8Array | string;
  };

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    PIN = 1,
    CHUNK = 2,
  }
}

export class StageProxResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): StageProxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageProxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageProxResponse): StageProxResponse.AsObject;
  static serializeBinaryToWriter(message: StageProxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageProxResponse;
  static deserializeBinaryFromReader(message: StageProxResponse, reader: jspb.BinaryReader): StageProxResponse;
}

export namespace StageProxResponse {
  export type AsObject = {
    cid: string;
  };
}

export class GetProxRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): GetProxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProxRequest): GetProxRequest.AsObject;
  static serializeBinaryToWriter(message: GetProxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProxRequest;
  static deserializeBinaryFromReader(message: GetProxRequest, reader: jspb.BinaryReader): GetProxRequest;
}

export namespace GetProxRequest {
  export type AsObject = {
    cid: string;
  };
}

export class GetProxResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): GetProxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProxResponse): GetProxResponse.AsObject;
  static serializeBinaryToWriter(message: GetProxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProxResponse;
  static deserializeBinaryFromReader(message: GetProxResponse, reader: jspb.BinaryReader): GetProxResponse;
}

export namespace GetProxResponse {
  export type AsObject = {
    chunk: Uint8Array | string;
  };
}

export class ProxMultipartCreateResp extends jspb.Message {
  getUploadid(): string;
  setUploadid(value: string): ProxMultipartCreateResp;

  getKey(): string;
  setKey(value: string): ProxMultipartCreateResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxMultipartCreateResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxMultipartCreateResp): ProxMultipartCreateResp.AsObject;
  static serializeBinaryToWriter(message: ProxMultipartCreateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxMultipartCreateResp;
  static deserializeBinaryFromReader(message: ProxMultipartCreateResp, reader: jspb.BinaryReader): ProxMultipartCreateResp;
}

export namespace ProxMultipartCreateResp {
  export type AsObject = {
    uploadid: string;
    key: string;
  };
}

export class ProxStageResponse extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxStageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxStageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxStageResponse): ProxStageResponse.AsObject;
  static serializeBinaryToWriter(message: ProxStageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxStageResponse;
  static deserializeBinaryFromReader(message: ProxStageResponse, reader: jspb.BinaryReader): ProxStageResponse;
}

export namespace ProxStageResponse {
  export type AsObject = {
    cid: string;
  };
}

export class ProxDeleteObjectRequest extends jspb.Message {
  getCidsList(): Array<string>;
  setCidsList(value: Array<string>): ProxDeleteObjectRequest;
  clearCidsList(): ProxDeleteObjectRequest;
  addCids(value: string, index?: number): ProxDeleteObjectRequest;

  getObjectsList(): Array<ProxUpload>;
  setObjectsList(value: Array<ProxUpload>): ProxDeleteObjectRequest;
  clearObjectsList(): ProxDeleteObjectRequest;
  addObjects(value?: ProxUpload, index?: number): ProxUpload;

  getObjectType(): string;
  setObjectType(value: string): ProxDeleteObjectRequest;

  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): ProxDeleteObjectRequest;
  clearPrefixesList(): ProxDeleteObjectRequest;
  addPrefixes(value: string, index?: number): ProxDeleteObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteObjectRequest): ProxDeleteObjectRequest.AsObject;
  static serializeBinaryToWriter(message: ProxDeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteObjectRequest;
  static deserializeBinaryFromReader(message: ProxDeleteObjectRequest, reader: jspb.BinaryReader): ProxDeleteObjectRequest;
}

export namespace ProxDeleteObjectRequest {
  export type AsObject = {
    cidsList: Array<string>;
    objectsList: Array<ProxUpload.AsObject>;
    objectType: string;
    prefixesList: Array<string>;
  };
}

export class ProxDeleteResp extends jspb.Message {
  getObjectsList(): Array<string>;
  setObjectsList(value: Array<string>): ProxDeleteResp;
  clearObjectsList(): ProxDeleteResp;
  addObjects(value: string, index?: number): ProxDeleteResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteResp): ProxDeleteResp.AsObject;
  static serializeBinaryToWriter(message: ProxDeleteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteResp;
  static deserializeBinaryFromReader(message: ProxDeleteResp, reader: jspb.BinaryReader): ProxDeleteResp;
}

export namespace ProxDeleteResp {
  export type AsObject = {
    objectsList: Array<string>;
  };
}

export class ProxDeleteObjectReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxDeleteObjectReq;
  hasHeader(): boolean;
  clearHeader(): ProxDeleteObjectReq;

  getRequest(): ProxDeleteObjectRequest | undefined;
  setRequest(value?: ProxDeleteObjectRequest): ProxDeleteObjectReq;
  hasRequest(): boolean;
  clearRequest(): ProxDeleteObjectReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxDeleteObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxDeleteObjectReq): ProxDeleteObjectReq.AsObject;
  static serializeBinaryToWriter(message: ProxDeleteObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxDeleteObjectReq;
  static deserializeBinaryFromReader(message: ProxDeleteObjectReq, reader: jspb.BinaryReader): ProxDeleteObjectReq;
}

export namespace ProxDeleteObjectReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxDeleteObjectRequest.AsObject;
  };
}

export class ProxPutObjectRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxPutObjectRequest;

  getMd5(): string;
  setMd5(value: string): ProxPutObjectRequest;

  getContentlength(): number;
  setContentlength(value: number): ProxPutObjectRequest;

  getContenttype(): string;
  setContenttype(value: string): ProxPutObjectRequest;

  getStageonly(): boolean;
  setStageonly(value: boolean): ProxPutObjectRequest;

  getCategory(): number;
  setCategory(value: number): ProxPutObjectRequest;

  getTags(): string;
  setTags(value: string): ProxPutObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectRequest): ProxPutObjectRequest.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectRequest;
  static deserializeBinaryFromReader(message: ProxPutObjectRequest, reader: jspb.BinaryReader): ProxPutObjectRequest;
}

export namespace ProxPutObjectRequest {
  export type AsObject = {
    key: string;
    md5: string;
    contentlength: number;
    contenttype: string;
    stageonly: boolean;
    category: number;
    tags: string;
  };
}

export class ProxPutObjectReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxPutObjectReq;
  hasHeader(): boolean;
  clearHeader(): ProxPutObjectReq;

  getRequest(): ProxPutObjectRequest | undefined;
  setRequest(value?: ProxPutObjectRequest): ProxPutObjectReq;
  hasRequest(): boolean;
  clearRequest(): ProxPutObjectReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectReq): ProxPutObjectReq.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectReq;
  static deserializeBinaryFromReader(message: ProxPutObjectReq, reader: jspb.BinaryReader): ProxPutObjectReq;
}

export namespace ProxPutObjectReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxPutObjectRequest.AsObject;
  };
}

export class ProxPutObjectOpt extends jspb.Message {
  getReq(): ProxPutObjectReq | undefined;
  setReq(value?: ProxPutObjectReq): ProxPutObjectOpt;
  hasReq(): boolean;
  clearReq(): ProxPutObjectOpt;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxPutObjectOpt;

  getOptionCase(): ProxPutObjectOpt.OptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectOpt.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectOpt): ProxPutObjectOpt.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectOpt;
  static deserializeBinaryFromReader(message: ProxPutObjectOpt, reader: jspb.BinaryReader): ProxPutObjectOpt;
}

export namespace ProxPutObjectOpt {
  export type AsObject = {
    req?: ProxPutObjectReq.AsObject;
    chunk: Uint8Array | string;
  };

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class ProxPutObjectResp extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): ProxPutObjectResp;

  getCid(): string;
  setCid(value: string): ProxPutObjectResp;

  getLastmodified(): string;
  setLastmodified(value: string): ProxPutObjectResp;

  getEtag(): string;
  setEtag(value: string): ProxPutObjectResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectResp): ProxPutObjectResp.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectResp;
  static deserializeBinaryFromReader(message: ProxPutObjectResp, reader: jspb.BinaryReader): ProxPutObjectResp;
}

export namespace ProxPutObjectResp {
  export type AsObject = {
    md5: string;
    cid: string;
    lastmodified: string;
    etag: string;
  };
}

export class ProxCompPart extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): ProxCompPart;

  getEtag(): string;
  setEtag(value: string): ProxCompPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompPart.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompPart): ProxCompPart.AsObject;
  static serializeBinaryToWriter(message: ProxCompPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompPart;
  static deserializeBinaryFromReader(message: ProxCompPart, reader: jspb.BinaryReader): ProxCompPart;
}

export namespace ProxCompPart {
  export type AsObject = {
    partnumber: number;
    etag: string;
  };
}

export class ProxCompletePartUpload extends jspb.Message {
  getPartsList(): Array<ProxCompPart>;
  setPartsList(value: Array<ProxCompPart>): ProxCompletePartUpload;
  clearPartsList(): ProxCompletePartUpload;
  addParts(value?: ProxCompPart, index?: number): ProxCompPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompletePartUpload.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompletePartUpload): ProxCompletePartUpload.AsObject;
  static serializeBinaryToWriter(message: ProxCompletePartUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompletePartUpload;
  static deserializeBinaryFromReader(message: ProxCompletePartUpload, reader: jspb.BinaryReader): ProxCompletePartUpload;
}

export namespace ProxCompletePartUpload {
  export type AsObject = {
    partsList: Array<ProxCompPart.AsObject>;
  };
}

export class ProxCompleteMultipartRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxCompleteMultipartRequest;

  getUploadid(): string;
  setUploadid(value: string): ProxCompleteMultipartRequest;

  getCompleteupload(): ProxCompletePartUpload | undefined;
  setCompleteupload(value?: ProxCompletePartUpload): ProxCompleteMultipartRequest;
  hasCompleteupload(): boolean;
  clearCompleteupload(): ProxCompleteMultipartRequest;

  getStageonly(): boolean;
  setStageonly(value: boolean): ProxCompleteMultipartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartRequest): ProxCompleteMultipartRequest.AsObject;
  static serializeBinaryToWriter(message: ProxCompleteMultipartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartRequest;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartRequest, reader: jspb.BinaryReader): ProxCompleteMultipartRequest;
}

export namespace ProxCompleteMultipartRequest {
  export type AsObject = {
    key: string;
    uploadid: string;
    completeupload?: ProxCompletePartUpload.AsObject;
    stageonly: boolean;
  };
}

export class ProxCompleteMultipartReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxCompleteMultipartReq;
  hasHeader(): boolean;
  clearHeader(): ProxCompleteMultipartReq;

  getRequest(): ProxCompleteMultipartRequest | undefined;
  setRequest(value?: ProxCompleteMultipartRequest): ProxCompleteMultipartReq;
  hasRequest(): boolean;
  clearRequest(): ProxCompleteMultipartReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartReq): ProxCompleteMultipartReq.AsObject;
  static serializeBinaryToWriter(message: ProxCompleteMultipartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartReq;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartReq, reader: jspb.BinaryReader): ProxCompleteMultipartReq;
}

export namespace ProxCompleteMultipartReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxCompleteMultipartRequest.AsObject;
  };
}

export class ProxCompleteMultipartResp extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxCompleteMultipartResp;

  getEtag(): string;
  setEtag(value: string): ProxCompleteMultipartResp;

  getCid(): string;
  setCid(value: string): ProxCompleteMultipartResp;

  getSize(): number;
  setSize(value: number): ProxCompleteMultipartResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCompleteMultipartResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCompleteMultipartResp): ProxCompleteMultipartResp.AsObject;
  static serializeBinaryToWriter(message: ProxCompleteMultipartResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCompleteMultipartResp;
  static deserializeBinaryFromReader(message: ProxCompleteMultipartResp, reader: jspb.BinaryReader): ProxCompleteMultipartResp;
}

export namespace ProxCompleteMultipartResp {
  export type AsObject = {
    key: string;
    etag: string;
    cid: string;
    size: number;
  };
}

export class ProxRangeRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): ProxRangeRequest;

  getLength(): number;
  setLength(value: number): ProxRangeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRangeRequest): ProxRangeRequest.AsObject;
  static serializeBinaryToWriter(message: ProxRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRangeRequest;
  static deserializeBinaryFromReader(message: ProxRangeRequest, reader: jspb.BinaryReader): ProxRangeRequest;
}

export namespace ProxRangeRequest {
  export type AsObject = {
    start: number;
    length: number;
  };
}

export class ProxGetRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxGetRequest;
  hasHeader(): boolean;
  clearHeader(): ProxGetRequest;

  getCid(): string;
  setCid(value: string): ProxGetRequest;

  getKey(): string;
  setKey(value: string): ProxGetRequest;

  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): ProxGetRequest;
  hasRange(): boolean;
  clearRange(): ProxGetRequest;

  getThumb(): boolean;
  setThumb(value: boolean): ProxGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetRequest): ProxGetRequest.AsObject;
  static serializeBinaryToWriter(message: ProxGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetRequest;
  static deserializeBinaryFromReader(message: ProxGetRequest, reader: jspb.BinaryReader): ProxGetRequest;
}

export namespace ProxGetRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    cid: string;
    key: string;
    range?: ProxRangeRequest.AsObject;
    thumb: boolean;
  };
}

export class ProxGetInfo extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxGetInfo;

  getKey(): string;
  setKey(value: string): ProxGetInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetInfo): ProxGetInfo.AsObject;
  static serializeBinaryToWriter(message: ProxGetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetInfo;
  static deserializeBinaryFromReader(message: ProxGetInfo, reader: jspb.BinaryReader): ProxGetInfo;
}

export namespace ProxGetInfo {
  export type AsObject = {
    cid: string;
    key: string;
  };
}

export class ProxGetRequests extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxGetRequests;
  hasHeader(): boolean;
  clearHeader(): ProxGetRequests;

  getObjsList(): Array<ProxGetInfo>;
  setObjsList(value: Array<ProxGetInfo>): ProxGetRequests;
  clearObjsList(): ProxGetRequests;
  addObjs(value?: ProxGetInfo, index?: number): ProxGetInfo;

  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): ProxGetRequests;
  hasRange(): boolean;
  clearRange(): ProxGetRequests;

  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): ProxGetRequests;
  clearPrefixesList(): ProxGetRequests;
  addPrefixes(value: string, index?: number): ProxGetRequests;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetRequests.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetRequests): ProxGetRequests.AsObject;
  static serializeBinaryToWriter(message: ProxGetRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetRequests;
  static deserializeBinaryFromReader(message: ProxGetRequests, reader: jspb.BinaryReader): ProxGetRequests;
}

export namespace ProxGetRequests {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    objsList: Array<ProxGetInfo.AsObject>;
    range?: ProxRangeRequest.AsObject;
    prefixesList: Array<string>;
  };
}

export class ProxSearchRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxSearchRequest;
  hasHeader(): boolean;
  clearHeader(): ProxSearchRequest;

  getCid(): string;
  setCid(value: string): ProxSearchRequest;

  getKey(): string;
  setKey(value: string): ProxSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSearchRequest): ProxSearchRequest.AsObject;
  static serializeBinaryToWriter(message: ProxSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSearchRequest;
  static deserializeBinaryFromReader(message: ProxSearchRequest, reader: jspb.BinaryReader): ProxSearchRequest;
}

export namespace ProxSearchRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    cid: string;
    key: string;
  };
}

export class ProxObjectInfo extends jspb.Message {
  getObject(): ProxObject | undefined;
  setObject(value?: ProxObject): ProxObjectInfo;
  hasObject(): boolean;
  clearObject(): ProxObjectInfo;

  getRange(): ProxRangeRequest | undefined;
  setRange(value?: ProxRangeRequest): ProxObjectInfo;
  hasRange(): boolean;
  clearRange(): ProxObjectInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObjectInfo): ProxObjectInfo.AsObject;
  static serializeBinaryToWriter(message: ProxObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObjectInfo;
  static deserializeBinaryFromReader(message: ProxObjectInfo, reader: jspb.BinaryReader): ProxObjectInfo;
}

export namespace ProxObjectInfo {
  export type AsObject = {
    object?: ProxObject.AsObject;
    range?: ProxRangeRequest.AsObject;
  };
}

export class ProxGetResponse extends jspb.Message {
  getObject(): ProxObjectInfo | undefined;
  setObject(value?: ProxObjectInfo): ProxGetResponse;
  hasObject(): boolean;
  clearObject(): ProxGetResponse;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxGetResponse;

  getOptionCase(): ProxGetResponse.OptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetResponse): ProxGetResponse.AsObject;
  static serializeBinaryToWriter(message: ProxGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetResponse;
  static deserializeBinaryFromReader(message: ProxGetResponse, reader: jspb.BinaryReader): ProxGetResponse;
}

export namespace ProxGetResponse {
  export type AsObject = {
    object?: ProxObjectInfo.AsObject;
    chunk: Uint8Array | string;
  };

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    CHUNK = 2,
  }
}

export class ProxLinks extends jspb.Message {
  getMeta(): ProxLink | undefined;
  setMeta(value?: ProxLink): ProxLinks;
  hasMeta(): boolean;
  clearMeta(): ProxLinks;

  getLinksList(): Array<ProxLink>;
  setLinksList(value: Array<ProxLink>): ProxLinks;
  clearLinksList(): ProxLinks;
  addLinks(value?: ProxLink, index?: number): ProxLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxLinks.AsObject;
  static toObject(includeInstance: boolean, msg: ProxLinks): ProxLinks.AsObject;
  static serializeBinaryToWriter(message: ProxLinks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxLinks;
  static deserializeBinaryFromReader(message: ProxLinks, reader: jspb.BinaryReader): ProxLinks;
}

export namespace ProxLinks {
  export type AsObject = {
    meta?: ProxLink.AsObject;
    linksList: Array<ProxLink.AsObject>;
  };
}

export class ProxLink extends jspb.Message {
  getName(): string;
  setName(value: string): ProxLink;

  getPath(): string;
  setPath(value: string): ProxLink;

  getHash(): string;
  setHash(value: string): ProxLink;

  getType(): number;
  setType(value: number): ProxLink;

  getSize(): number;
  setSize(value: number): ProxLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxLink.AsObject;
  static toObject(includeInstance: boolean, msg: ProxLink): ProxLink.AsObject;
  static serializeBinaryToWriter(message: ProxLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxLink;
  static deserializeBinaryFromReader(message: ProxLink, reader: jspb.BinaryReader): ProxLink;
}

export namespace ProxLink {
  export type AsObject = {
    name: string;
    path: string;
    hash: string;
    type: number;
    size: number;
  };
}

export class ProxSearchResponse extends jspb.Message {
  getObject(): ProxLink | undefined;
  setObject(value?: ProxLink): ProxSearchResponse;
  hasObject(): boolean;
  clearObject(): ProxSearchResponse;

  getLinks(): ProxLinks | undefined;
  setLinks(value?: ProxLinks): ProxSearchResponse;
  hasLinks(): boolean;
  clearLinks(): ProxSearchResponse;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxSearchResponse;

  getOptionCase(): ProxSearchResponse.OptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSearchResponse): ProxSearchResponse.AsObject;
  static serializeBinaryToWriter(message: ProxSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSearchResponse;
  static deserializeBinaryFromReader(message: ProxSearchResponse, reader: jspb.BinaryReader): ProxSearchResponse;
}

export namespace ProxSearchResponse {
  export type AsObject = {
    object?: ProxLink.AsObject;
    links?: ProxLinks.AsObject;
    chunk: Uint8Array | string;
  };

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    OBJECT = 1,
    LINKS = 2,
    CHUNK = 3,
  }
}

export class ProxPutObjectResult extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): ProxPutObjectResult;

  getCid(): string;
  setCid(value: string): ProxPutObjectResult;

  getLastmodified(): string;
  setLastmodified(value: string): ProxPutObjectResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectResult): ProxPutObjectResult.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectResult;
  static deserializeBinaryFromReader(message: ProxPutObjectResult, reader: jspb.BinaryReader): ProxPutObjectResult;
}

export namespace ProxPutObjectResult {
  export type AsObject = {
    md5: string;
    cid: string;
    lastmodified: string;
  };
}

export class ProxPutObjectPartRequest extends jspb.Message {
  getMd5(): string;
  setMd5(value: string): ProxPutObjectPartRequest;

  getKey(): string;
  setKey(value: string): ProxPutObjectPartRequest;

  getContentlength(): number;
  setContentlength(value: number): ProxPutObjectPartRequest;

  getPartid(): number;
  setPartid(value: number): ProxPutObjectPartRequest;

  getUploadid(): string;
  setUploadid(value: string): ProxPutObjectPartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartRequest): ProxPutObjectPartRequest.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartRequest;
  static deserializeBinaryFromReader(message: ProxPutObjectPartRequest, reader: jspb.BinaryReader): ProxPutObjectPartRequest;
}

export namespace ProxPutObjectPartRequest {
  export type AsObject = {
    md5: string;
    key: string;
    contentlength: number;
    partid: number;
    uploadid: string;
  };
}

export class ProxPutObjectPartReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxPutObjectPartReq;
  hasHeader(): boolean;
  clearHeader(): ProxPutObjectPartReq;

  getRequest(): ProxPutObjectPartRequest | undefined;
  setRequest(value?: ProxPutObjectPartRequest): ProxPutObjectPartReq;
  hasRequest(): boolean;
  clearRequest(): ProxPutObjectPartReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartReq): ProxPutObjectPartReq.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectPartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartReq;
  static deserializeBinaryFromReader(message: ProxPutObjectPartReq, reader: jspb.BinaryReader): ProxPutObjectPartReq;
}

export namespace ProxPutObjectPartReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxPutObjectPartRequest.AsObject;
  };
}

export class ProxPutObjectPartOpt extends jspb.Message {
  getReq(): ProxPutObjectPartReq | undefined;
  setReq(value?: ProxPutObjectPartReq): ProxPutObjectPartOpt;
  hasReq(): boolean;
  clearReq(): ProxPutObjectPartOpt;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): ProxPutObjectPartOpt;

  getOptionCase(): ProxPutObjectPartOpt.OptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartOpt.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartOpt): ProxPutObjectPartOpt.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectPartOpt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartOpt;
  static deserializeBinaryFromReader(message: ProxPutObjectPartOpt, reader: jspb.BinaryReader): ProxPutObjectPartOpt;
}

export namespace ProxPutObjectPartOpt {
  export type AsObject = {
    req?: ProxPutObjectPartReq.AsObject;
    chunk: Uint8Array | string;
  };

  export enum OptionCase {
    OPTION_NOT_SET = 0,
    REQ = 1,
    CHUNK = 2,
  }
}

export class ProxPutObjectPartResult extends jspb.Message {
  getEtag(): string;
  setEtag(value: string): ProxPutObjectPartResult;

  getSize(): number;
  setSize(value: number): ProxPutObjectPartResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPutObjectPartResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPutObjectPartResult): ProxPutObjectPartResult.AsObject;
  static serializeBinaryToWriter(message: ProxPutObjectPartResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPutObjectPartResult;
  static deserializeBinaryFromReader(message: ProxPutObjectPartResult, reader: jspb.BinaryReader): ProxPutObjectPartResult;
}

export namespace ProxPutObjectPartResult {
  export type AsObject = {
    etag: string;
    size: number;
  };
}

export class ProxListPartsRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxListPartsRequest;

  getUploadid(): string;
  setUploadid(value: string): ProxListPartsRequest;

  getMaxparts(): number;
  setMaxparts(value: number): ProxListPartsRequest;

  getPartnumbermarker(): number;
  setPartnumbermarker(value: number): ProxListPartsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsRequest): ProxListPartsRequest.AsObject;
  static serializeBinaryToWriter(message: ProxListPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsRequest;
  static deserializeBinaryFromReader(message: ProxListPartsRequest, reader: jspb.BinaryReader): ProxListPartsRequest;
}

export namespace ProxListPartsRequest {
  export type AsObject = {
    key: string;
    uploadid: string;
    maxparts: number;
    partnumbermarker: number;
  };
}

export class ProxListUploadRequest extends jspb.Message {
  getDelimiter(): string;
  setDelimiter(value: string): ProxListUploadRequest;

  getEncodingtype(): string;
  setEncodingtype(value: string): ProxListUploadRequest;

  getMaxuploads(): number;
  setMaxuploads(value: number): ProxListUploadRequest;

  getKeymarker(): string;
  setKeymarker(value: string): ProxListUploadRequest;

  getPrefix(): string;
  setPrefix(value: string): ProxListUploadRequest;

  getUploadidmarker(): string;
  setUploadidmarker(value: string): ProxListUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListUploadRequest): ProxListUploadRequest.AsObject;
  static serializeBinaryToWriter(message: ProxListUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListUploadRequest;
  static deserializeBinaryFromReader(message: ProxListUploadRequest, reader: jspb.BinaryReader): ProxListUploadRequest;
}

export namespace ProxListUploadRequest {
  export type AsObject = {
    delimiter: string;
    encodingtype: string;
    maxuploads: number;
    keymarker: string;
    prefix: string;
    uploadidmarker: string;
  };
}

export class ProxListUploadReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxListUploadReq;
  hasHeader(): boolean;
  clearHeader(): ProxListUploadReq;

  getRequest(): ProxListUploadRequest | undefined;
  setRequest(value?: ProxListUploadRequest): ProxListUploadReq;
  hasRequest(): boolean;
  clearRequest(): ProxListUploadReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListUploadReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListUploadReq): ProxListUploadReq.AsObject;
  static serializeBinaryToWriter(message: ProxListUploadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListUploadReq;
  static deserializeBinaryFromReader(message: ProxListUploadReq, reader: jspb.BinaryReader): ProxListUploadReq;
}

export namespace ProxListUploadReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxListUploadRequest.AsObject;
  };
}

export class ProxListPartsReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxListPartsReq;
  hasHeader(): boolean;
  clearHeader(): ProxListPartsReq;

  getRequest(): ProxListPartsRequest | undefined;
  setRequest(value?: ProxListPartsRequest): ProxListPartsReq;
  hasRequest(): boolean;
  clearRequest(): ProxListPartsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsReq): ProxListPartsReq.AsObject;
  static serializeBinaryToWriter(message: ProxListPartsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsReq;
  static deserializeBinaryFromReader(message: ProxListPartsReq, reader: jspb.BinaryReader): ProxListPartsReq;
}

export namespace ProxListPartsReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxListPartsRequest.AsObject;
  };
}

export class ProxPart extends jspb.Message {
  getPartnumber(): number;
  setPartnumber(value: number): ProxPart;

  getEtag(): string;
  setEtag(value: string): ProxPart;

  getLastmodified(): string;
  setLastmodified(value: string): ProxPart;

  getSize(): number;
  setSize(value: number): ProxPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPart.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPart): ProxPart.AsObject;
  static serializeBinaryToWriter(message: ProxPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPart;
  static deserializeBinaryFromReader(message: ProxPart, reader: jspb.BinaryReader): ProxPart;
}

export namespace ProxPart {
  export type AsObject = {
    partnumber: number;
    etag: string;
    lastmodified: string;
    size: number;
  };
}

export class ProxListMultipartUploadResponse extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): ProxListMultipartUploadResponse;

  getKeymarker(): string;
  setKeymarker(value: string): ProxListMultipartUploadResponse;

  getUploadidmarker(): string;
  setUploadidmarker(value: string): ProxListMultipartUploadResponse;

  getNextkeymarker(): string;
  setNextkeymarker(value: string): ProxListMultipartUploadResponse;

  getNextuploadidmarker(): string;
  setNextuploadidmarker(value: string): ProxListMultipartUploadResponse;

  getMaxuploads(): number;
  setMaxuploads(value: number): ProxListMultipartUploadResponse;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): ProxListMultipartUploadResponse;

  getUploadsList(): Array<ProxUpload>;
  setUploadsList(value: Array<ProxUpload>): ProxListMultipartUploadResponse;
  clearUploadsList(): ProxListMultipartUploadResponse;
  addUploads(value?: ProxUpload, index?: number): ProxUpload;

  getDelimiter(): string;
  setDelimiter(value: string): ProxListMultipartUploadResponse;

  getCommonprefixesList(): Array<string>;
  setCommonprefixesList(value: Array<string>): ProxListMultipartUploadResponse;
  clearCommonprefixesList(): ProxListMultipartUploadResponse;
  addCommonprefixes(value: string, index?: number): ProxListMultipartUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListMultipartUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListMultipartUploadResponse): ProxListMultipartUploadResponse.AsObject;
  static serializeBinaryToWriter(message: ProxListMultipartUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListMultipartUploadResponse;
  static deserializeBinaryFromReader(message: ProxListMultipartUploadResponse, reader: jspb.BinaryReader): ProxListMultipartUploadResponse;
}

export namespace ProxListMultipartUploadResponse {
  export type AsObject = {
    prefix: string;
    keymarker: string;
    uploadidmarker: string;
    nextkeymarker: string;
    nextuploadidmarker: string;
    maxuploads: number;
    istruncated: boolean;
    uploadsList: Array<ProxUpload.AsObject>;
    delimiter: string;
    commonprefixesList: Array<string>;
  };
}

export class ProxListPartsResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxListPartsResponse;

  getUploadid(): string;
  setUploadid(value: string): ProxListPartsResponse;

  getPartnumbermarker(): number;
  setPartnumbermarker(value: number): ProxListPartsResponse;

  getNextpartnumbermarker(): number;
  setNextpartnumbermarker(value: number): ProxListPartsResponse;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): ProxListPartsResponse;

  getPartsList(): Array<ProxPart>;
  setPartsList(value: Array<ProxPart>): ProxListPartsResponse;
  clearPartsList(): ProxListPartsResponse;
  addParts(value?: ProxPart, index?: number): ProxPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListPartsResponse): ProxListPartsResponse.AsObject;
  static serializeBinaryToWriter(message: ProxListPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListPartsResponse;
  static deserializeBinaryFromReader(message: ProxListPartsResponse, reader: jspb.BinaryReader): ProxListPartsResponse;
}

export namespace ProxListPartsResponse {
  export type AsObject = {
    key: string;
    uploadid: string;
    partnumbermarker: number;
    nextpartnumbermarker: number;
    istruncated: boolean;
    partsList: Array<ProxPart.AsObject>;
  };
}

export class ProxUpload extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxUpload;

  getUploadid(): string;
  setUploadid(value: string): ProxUpload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUpload.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUpload): ProxUpload.AsObject;
  static serializeBinaryToWriter(message: ProxUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUpload;
  static deserializeBinaryFromReader(message: ProxUpload, reader: jspb.BinaryReader): ProxUpload;
}

export namespace ProxUpload {
  export type AsObject = {
    key: string;
    uploadid: string;
  };
}

export class ProxListObjectsRequest extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): ProxListObjectsRequest;

  getDelimiter(): string;
  setDelimiter(value: string): ProxListObjectsRequest;

  getEncodingType(): string;
  setEncodingType(value: string): ProxListObjectsRequest;

  getMaxKeys(): number;
  setMaxKeys(value: number): ProxListObjectsRequest;

  getStartAfter(): string;
  setStartAfter(value: string): ProxListObjectsRequest;

  getContinuationToken(): string;
  setContinuationToken(value: string): ProxListObjectsRequest;

  getVersionIdMarker(): string;
  setVersionIdMarker(value: string): ProxListObjectsRequest;

  getKeyMarker(): string;
  setKeyMarker(value: string): ProxListObjectsRequest;

  getOrderby(): string;
  setOrderby(value: string): ProxListObjectsRequest;

  getTags(): string;
  setTags(value: string): ProxListObjectsRequest;

  getCategory(): number;
  setCategory(value: number): ProxListObjectsRequest;

  getDate(): string;
  setDate(value: string): ProxListObjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsRequest): ProxListObjectsRequest.AsObject;
  static serializeBinaryToWriter(message: ProxListObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsRequest;
  static deserializeBinaryFromReader(message: ProxListObjectsRequest, reader: jspb.BinaryReader): ProxListObjectsRequest;
}

export namespace ProxListObjectsRequest {
  export type AsObject = {
    prefix: string;
    delimiter: string;
    encodingType: string;
    maxKeys: number;
    startAfter: string;
    continuationToken: string;
    versionIdMarker: string;
    keyMarker: string;
    orderby: string;
    tags: string;
    category: number;
    date: string;
  };
}

export class ProxListObjectsReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxListObjectsReq;
  hasHeader(): boolean;
  clearHeader(): ProxListObjectsReq;

  getRequest(): ProxListObjectsRequest | undefined;
  setRequest(value?: ProxListObjectsRequest): ProxListObjectsReq;
  hasRequest(): boolean;
  clearRequest(): ProxListObjectsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsReq): ProxListObjectsReq.AsObject;
  static serializeBinaryToWriter(message: ProxListObjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsReq;
  static deserializeBinaryFromReader(message: ProxListObjectsReq, reader: jspb.BinaryReader): ProxListObjectsReq;
}

export namespace ProxListObjectsReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxListObjectsRequest.AsObject;
  };
}

export class ProxObject extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProxObject;

  getEtag(): string;
  setEtag(value: string): ProxObject;

  getLastmodified(): string;
  setLastmodified(value: string): ProxObject;

  getSize(): number;
  setSize(value: number): ProxObject;

  getContenttype(): string;
  setContenttype(value: string): ProxObject;

  getCid(): string;
  setCid(value: string): ProxObject;

  getFileid(): string;
  setFileid(value: string): ProxObject;

  getIspin(): boolean;
  setIspin(value: boolean): ProxObject;

  getIspincyfs(): boolean;
  setIspincyfs(value: boolean): ProxObject;

  getPinexp(): string;
  setPinexp(value: string): ProxObject;

  getCyfsexp(): string;
  setCyfsexp(value: string): ProxObject;

  getOod(): string;
  setOod(value: string): ProxObject;

  getIspersistent(): boolean;
  setIspersistent(value: boolean): ProxObject;

  getCategory(): number;
  setCategory(value: number): ProxObject;

  getTags(): string;
  setTags(value: string): ProxObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObject.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObject): ProxObject.AsObject;
  static serializeBinaryToWriter(message: ProxObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObject;
  static deserializeBinaryFromReader(message: ProxObject, reader: jspb.BinaryReader): ProxObject;
}

export namespace ProxObject {
  export type AsObject = {
    key: string;
    etag: string;
    lastmodified: string;
    size: number;
    contenttype: string;
    cid: string;
    fileid: string;
    ispin: boolean;
    ispincyfs: boolean;
    pinexp: string;
    cyfsexp: string;
    ood: string;
    ispersistent: boolean;
    category: number;
    tags: string;
  };
}

export class ProxPrefixPin extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): ProxPrefixPin;

  getCid(): string;
  setCid(value: string): ProxPrefixPin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPrefixPin.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPrefixPin): ProxPrefixPin.AsObject;
  static serializeBinaryToWriter(message: ProxPrefixPin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPrefixPin;
  static deserializeBinaryFromReader(message: ProxPrefixPin, reader: jspb.BinaryReader): ProxPrefixPin;
}

export namespace ProxPrefixPin {
  export type AsObject = {
    prefix: string;
    cid: string;
  };
}

export class ProxListObjectsResp extends jspb.Message {
  getCommonprefixesList(): Array<string>;
  setCommonprefixesList(value: Array<string>): ProxListObjectsResp;
  clearCommonprefixesList(): ProxListObjectsResp;
  addCommonprefixes(value: string, index?: number): ProxListObjectsResp;

  getIstruncated(): boolean;
  setIstruncated(value: boolean): ProxListObjectsResp;

  getPrefix(): string;
  setPrefix(value: string): ProxListObjectsResp;

  getMaxkeys(): number;
  setMaxkeys(value: number): ProxListObjectsResp;

  getNextmarker(): string;
  setNextmarker(value: string): ProxListObjectsResp;

  getContinuationtoken(): string;
  setContinuationtoken(value: string): ProxListObjectsResp;

  getContentList(): Array<ProxObject>;
  setContentList(value: Array<ProxObject>): ProxListObjectsResp;
  clearContentList(): ProxListObjectsResp;
  addContent(value?: ProxObject, index?: number): ProxObject;

  getPrefixpinsList(): Array<ProxPrefixPin>;
  setPrefixpinsList(value: Array<ProxPrefixPin>): ProxListObjectsResp;
  clearPrefixpinsList(): ProxListObjectsResp;
  addPrefixpins(value?: ProxPrefixPin, index?: number): ProxPrefixPin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxListObjectsResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxListObjectsResp): ProxListObjectsResp.AsObject;
  static serializeBinaryToWriter(message: ProxListObjectsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxListObjectsResp;
  static deserializeBinaryFromReader(message: ProxListObjectsResp, reader: jspb.BinaryReader): ProxListObjectsResp;
}

export namespace ProxListObjectsResp {
  export type AsObject = {
    commonprefixesList: Array<string>;
    istruncated: boolean;
    prefix: string;
    maxkeys: number;
    nextmarker: string;
    continuationtoken: string;
    contentList: Array<ProxObject.AsObject>;
    prefixpinsList: Array<ProxPrefixPin.AsObject>;
  };
}

export class ProxPinRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxPinRequest;

  getStype(): string;
  setStype(value: string): ProxPinRequest;

  getExp(): number;
  setExp(value: number): ProxPinRequest;

  getPin(): boolean;
  setPin(value: boolean): ProxPinRequest;

  getIsdir(): boolean;
  setIsdir(value: boolean): ProxPinRequest;

  getKey(): string;
  setKey(value: string): ProxPinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinRequest): ProxPinRequest.AsObject;
  static serializeBinaryToWriter(message: ProxPinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinRequest;
  static deserializeBinaryFromReader(message: ProxPinRequest, reader: jspb.BinaryReader): ProxPinRequest;
}

export namespace ProxPinRequest {
  export type AsObject = {
    cid: string;
    stype: string;
    exp: number;
    pin: boolean;
    isdir: boolean;
    key: string;
  };
}

export class ProxPinResp extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxPinResp;

  getStatus(): string;
  setStatus(value: string): ProxPinResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinResp): ProxPinResp.AsObject;
  static serializeBinaryToWriter(message: ProxPinResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinResp;
  static deserializeBinaryFromReader(message: ProxPinResp, reader: jspb.BinaryReader): ProxPinResp;
}

export namespace ProxPinResp {
  export type AsObject = {
    cid: string;
    status: string;
  };
}

export class ProxPinReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxPinReq;
  hasHeader(): boolean;
  clearHeader(): ProxPinReq;

  getRequest(): ProxPinRequest | undefined;
  setRequest(value?: ProxPinRequest): ProxPinReq;
  hasRequest(): boolean;
  clearRequest(): ProxPinReq;

  getPay(): ProxPinPay | undefined;
  setPay(value?: ProxPinPay): ProxPinReq;
  hasPay(): boolean;
  clearPay(): ProxPinReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPinReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPinReq): ProxPinReq.AsObject;
  static serializeBinaryToWriter(message: ProxPinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPinReq;
  static deserializeBinaryFromReader(message: ProxPinReq, reader: jspb.BinaryReader): ProxPinReq;
}

export namespace ProxPinReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxPinRequest.AsObject;
    pay?: ProxPinPay.AsObject;
  };
}

export class GetPeerIdInfoReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): GetPeerIdInfoReq;
  hasHeader(): boolean;
  clearHeader(): GetPeerIdInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerIdInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerIdInfoReq): GetPeerIdInfoReq.AsObject;
  static serializeBinaryToWriter(message: GetPeerIdInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerIdInfoReq;
  static deserializeBinaryFromReader(message: GetPeerIdInfoReq, reader: jspb.BinaryReader): GetPeerIdInfoReq;
}

export namespace GetPeerIdInfoReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
  };
}

export class GetPeerIDReply extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): GetPeerIDReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerIDReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerIDReply): GetPeerIDReply.AsObject;
  static serializeBinaryToWriter(message: GetPeerIDReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerIDReply;
  static deserializeBinaryFromReader(message: GetPeerIDReply, reader: jspb.BinaryReader): GetPeerIDReply;
}

export namespace GetPeerIDReply {
  export type AsObject = {
    peerid: string;
  };
}

export class ProxUnpinRequest extends jspb.Message {
  getCid(): string;
  setCid(value: string): ProxUnpinRequest;

  getStype(): string;
  setStype(value: string): ProxUnpinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUnpinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUnpinRequest): ProxUnpinRequest.AsObject;
  static serializeBinaryToWriter(message: ProxUnpinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUnpinRequest;
  static deserializeBinaryFromReader(message: ProxUnpinRequest, reader: jspb.BinaryReader): ProxUnpinRequest;
}

export namespace ProxUnpinRequest {
  export type AsObject = {
    cid: string;
    stype: string;
  };
}

export class ProxUnPinReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxUnPinReq;
  hasHeader(): boolean;
  clearHeader(): ProxUnPinReq;

  getRequest(): ProxUnpinRequest | undefined;
  setRequest(value?: ProxUnpinRequest): ProxUnPinReq;
  hasRequest(): boolean;
  clearRequest(): ProxUnPinReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxUnPinReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxUnPinReq): ProxUnPinReq.AsObject;
  static serializeBinaryToWriter(message: ProxUnPinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxUnPinReq;
  static deserializeBinaryFromReader(message: ProxUnPinReq, reader: jspb.BinaryReader): ProxUnPinReq;
}

export namespace ProxUnPinReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxUnpinRequest.AsObject;
  };
}

export class ProxPingRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxPingRequest;
  hasHeader(): boolean;
  clearHeader(): ProxPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingRequest): ProxPingRequest.AsObject;
  static serializeBinaryToWriter(message: ProxPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingRequest;
  static deserializeBinaryFromReader(message: ProxPingRequest, reader: jspb.BinaryReader): ProxPingRequest;
}

export namespace ProxPingRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
  };
}

export class ProxPingResponse extends jspb.Message {
  getPeerid(): string;
  setPeerid(value: string): ProxPingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPingResponse): ProxPingResponse.AsObject;
  static serializeBinaryToWriter(message: ProxPingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPingResponse;
  static deserializeBinaryFromReader(message: ProxPingResponse, reader: jspb.BinaryReader): ProxPingResponse;
}

export namespace ProxPingResponse {
  export type AsObject = {
    peerid: string;
  };
}

export class ProxFindRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxFindRequest;
  hasHeader(): boolean;
  clearHeader(): ProxFindRequest;

  getCid(): string;
  setCid(value: string): ProxFindRequest;

  getKey(): string;
  setKey(value: string): ProxFindRequest;

  getFileid(): string;
  setFileid(value: string): ProxFindRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFindRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFindRequest): ProxFindRequest.AsObject;
  static serializeBinaryToWriter(message: ProxFindRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFindRequest;
  static deserializeBinaryFromReader(message: ProxFindRequest, reader: jspb.BinaryReader): ProxFindRequest;
}

export namespace ProxFindRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    cid: string;
    key: string;
    fileid: string;
  };
}

export class ProxObjects extends jspb.Message {
  getContentsList(): Array<ProxObject>;
  setContentsList(value: Array<ProxObject>): ProxObjects;
  clearContentsList(): ProxObjects;
  addContents(value?: ProxObject, index?: number): ProxObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxObjects.AsObject;
  static toObject(includeInstance: boolean, msg: ProxObjects): ProxObjects.AsObject;
  static serializeBinaryToWriter(message: ProxObjects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxObjects;
  static deserializeBinaryFromReader(message: ProxObjects, reader: jspb.BinaryReader): ProxObjects;
}

export namespace ProxObjects {
  export type AsObject = {
    contentsList: Array<ProxObject.AsObject>;
  };
}

export class ProxRequestSummaryIds extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxRequestSummaryIds;
  hasHeader(): boolean;
  clearHeader(): ProxRequestSummaryIds;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ProxRequestSummaryIds;
  clearIdsList(): ProxRequestSummaryIds;
  addIds(value: string, index?: number): ProxRequestSummaryIds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRequestSummaryIds.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRequestSummaryIds): ProxRequestSummaryIds.AsObject;
  static serializeBinaryToWriter(message: ProxRequestSummaryIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRequestSummaryIds;
  static deserializeBinaryFromReader(message: ProxRequestSummaryIds, reader: jspb.BinaryReader): ProxRequestSummaryIds;
}

export namespace ProxRequestSummaryIds {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    idsList: Array<string>;
  };
}

export class ProxSummaryInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProxSummaryInfo;

  getTotal(): number;
  setTotal(value: number): ProxSummaryInfo;

  getCount(): number;
  setCount(value: number): ProxSummaryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSummaryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSummaryInfo): ProxSummaryInfo.AsObject;
  static serializeBinaryToWriter(message: ProxSummaryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSummaryInfo;
  static deserializeBinaryFromReader(message: ProxSummaryInfo, reader: jspb.BinaryReader): ProxSummaryInfo;
}

export namespace ProxSummaryInfo {
  export type AsObject = {
    id: string;
    total: number;
    count: number;
  };
}

export class ProxSummaryInfos extends jspb.Message {
  getContentsList(): Array<ProxSummaryInfo>;
  setContentsList(value: Array<ProxSummaryInfo>): ProxSummaryInfos;
  clearContentsList(): ProxSummaryInfos;
  addContents(value?: ProxSummaryInfo, index?: number): ProxSummaryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxSummaryInfos.AsObject;
  static toObject(includeInstance: boolean, msg: ProxSummaryInfos): ProxSummaryInfos.AsObject;
  static serializeBinaryToWriter(message: ProxSummaryInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxSummaryInfos;
  static deserializeBinaryFromReader(message: ProxSummaryInfos, reader: jspb.BinaryReader): ProxSummaryInfos;
}

export namespace ProxSummaryInfos {
  export type AsObject = {
    contentsList: Array<ProxSummaryInfo.AsObject>;
  };
}

export class ProxRenameObject extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxRenameObject;
  hasHeader(): boolean;
  clearHeader(): ProxRenameObject;

  getSourceobject(): string;
  setSourceobject(value: string): ProxRenameObject;

  getTargetobject(): string;
  setTargetobject(value: string): ProxRenameObject;

  getFiletype(): number;
  setFiletype(value: number): ProxRenameObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRenameObject.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRenameObject): ProxRenameObject.AsObject;
  static serializeBinaryToWriter(message: ProxRenameObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRenameObject;
  static deserializeBinaryFromReader(message: ProxRenameObject, reader: jspb.BinaryReader): ProxRenameObject;
}

export namespace ProxRenameObject {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    sourceobject: string;
    targetobject: string;
    filetype: number;
  };
}

export class ProxRenameObjectResp extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): ProxRenameObjectResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxRenameObjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxRenameObjectResp): ProxRenameObjectResp.AsObject;
  static serializeBinaryToWriter(message: ProxRenameObjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxRenameObjectResp;
  static deserializeBinaryFromReader(message: ProxRenameObjectResp, reader: jspb.BinaryReader): ProxRenameObjectResp;
}

export namespace ProxRenameObjectResp {
  export type AsObject = {
    total: number;
  };
}

export class ProxTimeLine extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxTimeLine;
  hasHeader(): boolean;
  clearHeader(): ProxTimeLine;

  getInterval(): string;
  setInterval(value: string): ProxTimeLine;

  getDate(): string;
  setDate(value: string): ProxTimeLine;

  getCategory(): number;
  setCategory(value: number): ProxTimeLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLine.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLine): ProxTimeLine.AsObject;
  static serializeBinaryToWriter(message: ProxTimeLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLine;
  static deserializeBinaryFromReader(message: ProxTimeLine, reader: jspb.BinaryReader): ProxTimeLine;
}

export namespace ProxTimeLine {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    interval: string;
    date: string;
    category: number;
  };
}

export class ProxTimeLineResp extends jspb.Message {
  getContentsList(): Array<ProxTimeLineRes>;
  setContentsList(value: Array<ProxTimeLineRes>): ProxTimeLineResp;
  clearContentsList(): ProxTimeLineResp;
  addContents(value?: ProxTimeLineRes, index?: number): ProxTimeLineRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLineResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLineResp): ProxTimeLineResp.AsObject;
  static serializeBinaryToWriter(message: ProxTimeLineResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLineResp;
  static deserializeBinaryFromReader(message: ProxTimeLineResp, reader: jspb.BinaryReader): ProxTimeLineResp;
}

export namespace ProxTimeLineResp {
  export type AsObject = {
    contentsList: Array<ProxTimeLineRes.AsObject>;
  };
}

export class ProxTimeLineRes extends jspb.Message {
  getDate(): string;
  setDate(value: string): ProxTimeLineRes;

  getCount(): number;
  setCount(value: number): ProxTimeLineRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTimeLineRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTimeLineRes): ProxTimeLineRes.AsObject;
  static serializeBinaryToWriter(message: ProxTimeLineRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTimeLineRes;
  static deserializeBinaryFromReader(message: ProxTimeLineRes, reader: jspb.BinaryReader): ProxTimeLineRes;
}

export namespace ProxTimeLineRes {
  export type AsObject = {
    date: string;
    count: number;
  };
}

export class ProxPresignedURL extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxPresignedURL;
  hasHeader(): boolean;
  clearHeader(): ProxPresignedURL;

  getUrl(): string;
  setUrl(value: string): ProxPresignedURL;

  getMethod(): string;
  setMethod(value: string): ProxPresignedURL;

  getExpires(): number;
  setExpires(value: number): ProxPresignedURL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPresignedURL.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPresignedURL): ProxPresignedURL.AsObject;
  static serializeBinaryToWriter(message: ProxPresignedURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPresignedURL;
  static deserializeBinaryFromReader(message: ProxPresignedURL, reader: jspb.BinaryReader): ProxPresignedURL;
}

export namespace ProxPresignedURL {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    url: string;
    method: string;
    expires: number;
  };
}

export class ProxPresignedURLResp extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ProxPresignedURLResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxPresignedURLResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxPresignedURLResp): ProxPresignedURLResp.AsObject;
  static serializeBinaryToWriter(message: ProxPresignedURLResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxPresignedURLResp;
  static deserializeBinaryFromReader(message: ProxPresignedURLResp, reader: jspb.BinaryReader): ProxPresignedURLResp;
}

export namespace ProxPresignedURLResp {
  export type AsObject = {
    url: string;
  };
}

export class ProxFileInfo extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxFileInfo;
  hasHeader(): boolean;
  clearHeader(): ProxFileInfo;

  getKey(): string;
  setKey(value: string): ProxFileInfo;

  getContenttype(): string;
  setContenttype(value: string): ProxFileInfo;

  getSize(): number;
  setSize(value: number): ProxFileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProxFileInfo): ProxFileInfo.AsObject;
  static serializeBinaryToWriter(message: ProxFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxFileInfo;
  static deserializeBinaryFromReader(message: ProxFileInfo, reader: jspb.BinaryReader): ProxFileInfo;
}

export namespace ProxFileInfo {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    key: string;
    contenttype: string;
    size: number;
  };
}

export class ProxTouchResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ProxTouchResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxTouchResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxTouchResp): ProxTouchResp.AsObject;
  static serializeBinaryToWriter(message: ProxTouchResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxTouchResp;
  static deserializeBinaryFromReader(message: ProxTouchResp, reader: jspb.BinaryReader): ProxTouchResp;
}

export namespace ProxTouchResp {
  export type AsObject = {
    status: string;
  };
}

export class ProxCred extends jspb.Message {
  getAccesskey(): string;
  setAccesskey(value: string): ProxCred;

  getSecretkey(): string;
  setSecretkey(value: string): ProxCred;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCred.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCred): ProxCred.AsObject;
  static serializeBinaryToWriter(message: ProxCred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCred;
  static deserializeBinaryFromReader(message: ProxCred, reader: jspb.BinaryReader): ProxCred;
}

export namespace ProxCred {
  export type AsObject = {
    accesskey: string;
    secretkey: string;
  };
}

export class ProxCredRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxCredRequest;
  hasHeader(): boolean;
  clearHeader(): ProxCredRequest;

  getCred(): ProxCred | undefined;
  setCred(value?: ProxCred): ProxCredRequest;
  hasCred(): boolean;
  clearCred(): ProxCredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredRequest): ProxCredRequest.AsObject;
  static serializeBinaryToWriter(message: ProxCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredRequest;
  static deserializeBinaryFromReader(message: ProxCredRequest, reader: jspb.BinaryReader): ProxCredRequest;
}

export namespace ProxCredRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    cred?: ProxCred.AsObject;
  };
}

export class ProxCredResp extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ProxCredResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredResp): ProxCredResp.AsObject;
  static serializeBinaryToWriter(message: ProxCredResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredResp;
  static deserializeBinaryFromReader(message: ProxCredResp, reader: jspb.BinaryReader): ProxCredResp;
}

export namespace ProxCredResp {
  export type AsObject = {
    status: string;
  };
}

export class ProxGetCredRequest extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxGetCredRequest;
  hasHeader(): boolean;
  clearHeader(): ProxGetCredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxGetCredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxGetCredRequest): ProxGetCredRequest.AsObject;
  static serializeBinaryToWriter(message: ProxGetCredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxGetCredRequest;
  static deserializeBinaryFromReader(message: ProxGetCredRequest, reader: jspb.BinaryReader): ProxGetCredRequest;
}

export namespace ProxGetCredRequest {
  export type AsObject = {
    header?: ProxHeader.AsObject;
  };
}

export class ProxCredsList extends jspb.Message {
  getCredsList(): Array<ProxCred>;
  setCredsList(value: Array<ProxCred>): ProxCredsList;
  clearCredsList(): ProxCredsList;
  addCreds(value?: ProxCred, index?: number): ProxCred;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxCredsList.AsObject;
  static toObject(includeInstance: boolean, msg: ProxCredsList): ProxCredsList.AsObject;
  static serializeBinaryToWriter(message: ProxCredsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxCredsList;
  static deserializeBinaryFromReader(message: ProxCredsList, reader: jspb.BinaryReader): ProxCredsList;
}

export namespace ProxCredsList {
  export type AsObject = {
    credsList: Array<ProxCred.AsObject>;
  };
}

export class ProxChatReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxChatReq;
  hasHeader(): boolean;
  clearHeader(): ProxChatReq;

  getRequest(): ProxChatRequest | undefined;
  setRequest(value?: ProxChatRequest): ProxChatReq;
  hasRequest(): boolean;
  clearRequest(): ProxChatReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatReq): ProxChatReq.AsObject;
  static serializeBinaryToWriter(message: ProxChatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatReq;
  static deserializeBinaryFromReader(message: ProxChatReq, reader: jspb.BinaryReader): ProxChatReq;
}

export namespace ProxChatReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxChatRequest.AsObject;
  };
}

export class ProxChatRequest extends jspb.Message {
  getVsname(): string;
  setVsname(value: string): ProxChatRequest;

  getQuery(): string;
  setQuery(value: string): ProxChatRequest;

  getEn(): boolean;
  setEn(value: boolean): ProxChatRequest;

  getModel(): string;
  setModel(value: string): ProxChatRequest;

  getChattype(): string;
  setChattype(value: string): ProxChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatRequest): ProxChatRequest.AsObject;
  static serializeBinaryToWriter(message: ProxChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatRequest;
  static deserializeBinaryFromReader(message: ProxChatRequest, reader: jspb.BinaryReader): ProxChatRequest;
}

export namespace ProxChatRequest {
  export type AsObject = {
    vsname: string;
    query: string;
    en: boolean;
    model: string;
    chattype: string;
  };
}

export class ProxChatResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): ProxChatResponse;

  getStatus(): string;
  setStatus(value: string): ProxChatResponse;

  getSourcedocuments(): string;
  setSourcedocuments(value: string): ProxChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxChatResponse): ProxChatResponse.AsObject;
  static serializeBinaryToWriter(message: ProxChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxChatResponse;
  static deserializeBinaryFromReader(message: ProxChatResponse, reader: jspb.BinaryReader): ProxChatResponse;
}

export namespace ProxChatResponse {
  export type AsObject = {
    value: string;
    status: string;
    sourcedocuments: string;
  };
}

export class ProxKNReq extends jspb.Message {
  getHeader(): ProxHeader | undefined;
  setHeader(value?: ProxHeader): ProxKNReq;
  hasHeader(): boolean;
  clearHeader(): ProxKNReq;

  getRequest(): ProxKNRequest | undefined;
  setRequest(value?: ProxKNRequest): ProxKNReq;
  hasRequest(): boolean;
  clearRequest(): ProxKNReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNReq): ProxKNReq.AsObject;
  static serializeBinaryToWriter(message: ProxKNReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNReq;
  static deserializeBinaryFromReader(message: ProxKNReq, reader: jspb.BinaryReader): ProxKNReq;
}

export namespace ProxKNReq {
  export type AsObject = {
    header?: ProxHeader.AsObject;
    request?: ProxKNRequest.AsObject;
  };
}

export class ProxKNRequest extends jspb.Message {
  getVsname(): string;
  setVsname(value: string): ProxKNRequest;

  getTitle(): string;
  setTitle(value: string): ProxKNRequest;

  getContent(): string;
  setContent(value: string): ProxKNRequest;

  getFilesList(): Array<string>;
  setFilesList(value: Array<string>): ProxKNRequest;
  clearFilesList(): ProxKNRequest;
  addFiles(value: string, index?: number): ProxKNRequest;

  getMethod(): string;
  setMethod(value: string): ProxKNRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNRequest): ProxKNRequest.AsObject;
  static serializeBinaryToWriter(message: ProxKNRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNRequest;
  static deserializeBinaryFromReader(message: ProxKNRequest, reader: jspb.BinaryReader): ProxKNRequest;
}

export namespace ProxKNRequest {
  export type AsObject = {
    vsname: string;
    title: string;
    content: string;
    filesList: Array<string>;
    method: string;
  };
}

export class ProxKNResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ProxKNResponse;

  getData(): string;
  setData(value: string): ProxKNResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxKNResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProxKNResponse): ProxKNResponse.AsObject;
  static serializeBinaryToWriter(message: ProxKNResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxKNResponse;
  static deserializeBinaryFromReader(message: ProxKNResponse, reader: jspb.BinaryReader): ProxKNResponse;
}

export namespace ProxKNResponse {
  export type AsObject = {
    status: string;
    data: string;
  };
}
