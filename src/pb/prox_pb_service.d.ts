// package: proto
// file: prox.proto

import * as prox_pb from "./prox_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServicePing = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPingRequest;
  readonly responseType: typeof prox_pb.ProxPingResponse;
};

type ServicePingMiner = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPingMinerRequest;
  readonly responseType: typeof prox_pb.ProxPingMinerResponse;
};

type ServicePin = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPinReq;
  readonly responseType: typeof prox_pb.ProxPinResp;
};

type ServiceStage = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxStageRequest;
  readonly responseType: typeof prox_pb.ProxStageResponse;
};

type ServiceGetPeerIdInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.GetPeerIdInfoReq;
  readonly responseType: typeof prox_pb.GetPeerIDReply;
};

type ServicePutObjectStream = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxPutObjectOpt;
  readonly responseType: typeof prox_pb.ProxPutObjectResp;
};

type ServicePutObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPutObjectOpt;
  readonly responseType: typeof prox_pb.ProxPutObjectResp;
};

type ServiceNewMultipartObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPutObjectReq;
  readonly responseType: typeof prox_pb.ProxMultipartCreateResp;
};

type ServicePutObjectPart = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPutObjectPartOpt;
  readonly responseType: typeof prox_pb.ProxPutObjectPartResult;
};

type ServiceCompleteMultipart = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxCompleteMultipartReq;
  readonly responseType: typeof prox_pb.ProxCompleteMultipartResp;
};

type ServiceListMultipart = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxListUploadReq;
  readonly responseType: typeof prox_pb.ProxListMultipartUploadResponse;
};

type ServiceListObjectParts = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxListPartsReq;
  readonly responseType: typeof prox_pb.ProxListPartsResponse;
};

type ServiceListObjects = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxListObjectsReq;
  readonly responseType: typeof prox_pb.ProxListObjectsResp;
};

type ServiceGetBlock = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxGetBlockRequest;
  readonly responseType: typeof prox_pb.ProxGetBlockResponse;
};

type ServiceGetCarMeta = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxGetCarMetaRequest;
  readonly responseType: typeof prox_pb.ProxGetCarMetaResponse;
};

type ServiceGetObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxGetRequest;
  readonly responseType: typeof prox_pb.ProxGetResponse;
};

type ServiceGetObjects = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxGetRequests;
  readonly responseType: typeof prox_pb.ProxGetResponse;
};

type ServiceSearchObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof prox_pb.ProxSearchRequest;
  readonly responseType: typeof prox_pb.ProxSearchResponse;
};

type ServiceFindObjects = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFindRequest;
  readonly responseType: typeof prox_pb.ProxObjects;
};

type ServiceGetObjectInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxGetRequest;
  readonly responseType: typeof prox_pb.ProxObject;
};

type ServiceDeleteObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxDeleteObjectReq;
  readonly responseType: typeof prox_pb.ProxDeleteResp;
};

type ServiceSummaryInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxRequestSummaryIds;
  readonly responseType: typeof prox_pb.ProxSummaryInfos;
};

type ServiceStatistics = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxRequestStatistics;
  readonly responseType: typeof prox_pb.ProxStatisticsInfo;
};

type ServiceRenameObjects = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxRenameObject;
  readonly responseType: typeof prox_pb.ProxRenameObjectResp;
};

type ServiceGetTimeLine = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxTimeLine;
  readonly responseType: typeof prox_pb.ProxTimeLineResp;
};

type ServiceGetPreSigned = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPresignedURL;
  readonly responseType: typeof prox_pb.ProxPresignedURLResp;
};

type ServiceTouchFile = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFileInfo;
  readonly responseType: typeof prox_pb.ProxTouchResp;
};

type ServiceChat = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxChatReq;
  readonly responseType: typeof prox_pb.ProxChatResponse;
};

type ServiceKnowledge = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxKNReq;
  readonly responseType: typeof prox_pb.ProxKNResponse;
};

type ServiceGenerateCred = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxCredRequest;
  readonly responseType: typeof prox_pb.ProxCredResp;
};

type ServiceListCreds = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxGetCredRequest;
  readonly responseType: typeof prox_pb.ProxCredsList;
};

type ServiceGenPinningCred = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxGeneratePinCredRequest;
  readonly responseType: typeof prox_pb.ProxGeneratePinCredResp;
};

type ServiceDeleteCred = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxCredRequest;
  readonly responseType: typeof prox_pb.ProxCredResp;
};

type ServiceUpdateNFT = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxUpdateNFTRequest;
  readonly responseType: typeof prox_pb.ProxUpdateNFTResp;
};

type ServiceGenerateExtractCode = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxGExtractCode;
  readonly responseType: typeof prox_pb.ProxGExtractCodeResp;
};

type ServiceAsyncFetchObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFetchRequest;
  readonly responseType: typeof prox_pb.ProxPinningInfo;
};

type ServiceCancelFetchObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFetchPinningRequest;
  readonly responseType: typeof prox_pb.ProxFetchPinningResponse;
};

type ServiceDeleteFetchObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFetchPinningRequest;
  readonly responseType: typeof prox_pb.ProxFetchPinningResponse;
};

type ServiceResumeFetchObject = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFetchPinningRequest;
  readonly responseType: typeof prox_pb.ProxFetchPinningResponse;
};

type ServiceListPinnings = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxPinningListRequest;
  readonly responseType: typeof prox_pb.ProxPinningResp;
};

type ServiceFetchPinningEvent = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxFetchPinningRequest;
  readonly responseType: typeof prox_pb.ProxPinningInfo;
};

type ServiceF2PGetSpaceInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxF2PGetSpace;
  readonly responseType: typeof prox_pb.ProxF2PGetSpaceResp;
};

type ServiceF2PGetIOTList = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxF2PGetIOT;
  readonly responseType: typeof prox_pb.ProxF2PGetIOTResp;
};

type ServiceF2PGetIOTAmount = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxF2PGetIOT;
  readonly responseType: typeof prox_pb.ProxF2PGetIOTAmountResp;
};

type ServiceF2PGetMinerInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxF2PGetMiner;
  readonly responseType: typeof prox_pb.ProxF2PGetMinerResp;
};

type ServiceF2PGetAppInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prox_pb.ProxF2PGetApp;
  readonly responseType: typeof prox_pb.ProxF2PGetAppResp;
};

export class Service {
  static readonly serviceName: string;
  static readonly Ping: ServicePing;
  static readonly PingMiner: ServicePingMiner;
  static readonly Pin: ServicePin;
  static readonly Stage: ServiceStage;
  static readonly GetPeerIdInfo: ServiceGetPeerIdInfo;
  static readonly PutObjectStream: ServicePutObjectStream;
  static readonly PutObject: ServicePutObject;
  static readonly NewMultipartObject: ServiceNewMultipartObject;
  static readonly PutObjectPart: ServicePutObjectPart;
  static readonly CompleteMultipart: ServiceCompleteMultipart;
  static readonly ListMultipart: ServiceListMultipart;
  static readonly ListObjectParts: ServiceListObjectParts;
  static readonly ListObjects: ServiceListObjects;
  static readonly GetBlock: ServiceGetBlock;
  static readonly GetCarMeta: ServiceGetCarMeta;
  static readonly GetObject: ServiceGetObject;
  static readonly GetObjects: ServiceGetObjects;
  static readonly SearchObject: ServiceSearchObject;
  static readonly FindObjects: ServiceFindObjects;
  static readonly GetObjectInfo: ServiceGetObjectInfo;
  static readonly DeleteObject: ServiceDeleteObject;
  static readonly SummaryInfo: ServiceSummaryInfo;
  static readonly Statistics: ServiceStatistics;
  static readonly RenameObjects: ServiceRenameObjects;
  static readonly GetTimeLine: ServiceGetTimeLine;
  static readonly GetPreSigned: ServiceGetPreSigned;
  static readonly TouchFile: ServiceTouchFile;
  static readonly Chat: ServiceChat;
  static readonly Knowledge: ServiceKnowledge;
  static readonly GenerateCred: ServiceGenerateCred;
  static readonly ListCreds: ServiceListCreds;
  static readonly GenPinningCred: ServiceGenPinningCred;
  static readonly DeleteCred: ServiceDeleteCred;
  static readonly UpdateNFT: ServiceUpdateNFT;
  static readonly GenerateExtractCode: ServiceGenerateExtractCode;
  static readonly AsyncFetchObject: ServiceAsyncFetchObject;
  static readonly CancelFetchObject: ServiceCancelFetchObject;
  static readonly DeleteFetchObject: ServiceDeleteFetchObject;
  static readonly ResumeFetchObject: ServiceResumeFetchObject;
  static readonly ListPinnings: ServiceListPinnings;
  static readonly FetchPinningEvent: ServiceFetchPinningEvent;
  static readonly F2PGetSpaceInfo: ServiceF2PGetSpaceInfo;
  static readonly F2PGetIOTList: ServiceF2PGetIOTList;
  static readonly F2PGetIOTAmount: ServiceF2PGetIOTAmount;
  static readonly F2PGetMinerInfo: ServiceF2PGetMinerInfo;
  static readonly F2PGetAppInfo: ServiceF2PGetAppInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: prox_pb.ProxPingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPingResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: prox_pb.ProxPingRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPingResponse|null) => void
  ): UnaryResponse;
  pingMiner(
    requestMessage: prox_pb.ProxPingMinerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPingMinerResponse|null) => void
  ): UnaryResponse;
  pingMiner(
    requestMessage: prox_pb.ProxPingMinerRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPingMinerResponse|null) => void
  ): UnaryResponse;
  pin(
    requestMessage: prox_pb.ProxPinReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinResp|null) => void
  ): UnaryResponse;
  pin(
    requestMessage: prox_pb.ProxPinReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinResp|null) => void
  ): UnaryResponse;
  stage(metadata?: grpc.Metadata): RequestStream<prox_pb.ProxStageRequest>;
  getPeerIdInfo(
    requestMessage: prox_pb.GetPeerIdInfoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.GetPeerIDReply|null) => void
  ): UnaryResponse;
  getPeerIdInfo(
    requestMessage: prox_pb.GetPeerIdInfoReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.GetPeerIDReply|null) => void
  ): UnaryResponse;
  putObjectStream(metadata?: grpc.Metadata): BidirectionalStream<prox_pb.ProxPutObjectOpt, prox_pb.ProxPutObjectResp>;
  putObject(metadata?: grpc.Metadata): RequestStream<prox_pb.ProxPutObjectOpt>;
  newMultipartObject(
    requestMessage: prox_pb.ProxPutObjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxMultipartCreateResp|null) => void
  ): UnaryResponse;
  newMultipartObject(
    requestMessage: prox_pb.ProxPutObjectReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxMultipartCreateResp|null) => void
  ): UnaryResponse;
  putObjectPart(metadata?: grpc.Metadata): RequestStream<prox_pb.ProxPutObjectPartOpt>;
  completeMultipart(
    requestMessage: prox_pb.ProxCompleteMultipartReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCompleteMultipartResp|null) => void
  ): UnaryResponse;
  completeMultipart(
    requestMessage: prox_pb.ProxCompleteMultipartReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCompleteMultipartResp|null) => void
  ): UnaryResponse;
  listMultipart(
    requestMessage: prox_pb.ProxListUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListMultipartUploadResponse|null) => void
  ): UnaryResponse;
  listMultipart(
    requestMessage: prox_pb.ProxListUploadReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListMultipartUploadResponse|null) => void
  ): UnaryResponse;
  listObjectParts(
    requestMessage: prox_pb.ProxListPartsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListPartsResponse|null) => void
  ): UnaryResponse;
  listObjectParts(
    requestMessage: prox_pb.ProxListPartsReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListPartsResponse|null) => void
  ): UnaryResponse;
  listObjects(
    requestMessage: prox_pb.ProxListObjectsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListObjectsResp|null) => void
  ): UnaryResponse;
  listObjects(
    requestMessage: prox_pb.ProxListObjectsReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxListObjectsResp|null) => void
  ): UnaryResponse;
  getBlock(requestMessage: prox_pb.ProxGetBlockRequest, metadata?: grpc.Metadata): ResponseStream<prox_pb.ProxGetBlockResponse>;
  getCarMeta(requestMessage: prox_pb.ProxGetCarMetaRequest, metadata?: grpc.Metadata): ResponseStream<prox_pb.ProxGetCarMetaResponse>;
  getObject(requestMessage: prox_pb.ProxGetRequest, metadata?: grpc.Metadata): ResponseStream<prox_pb.ProxGetResponse>;
  getObjects(requestMessage: prox_pb.ProxGetRequests, metadata?: grpc.Metadata): ResponseStream<prox_pb.ProxGetResponse>;
  searchObject(requestMessage: prox_pb.ProxSearchRequest, metadata?: grpc.Metadata): ResponseStream<prox_pb.ProxSearchResponse>;
  findObjects(
    requestMessage: prox_pb.ProxFindRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxObjects|null) => void
  ): UnaryResponse;
  findObjects(
    requestMessage: prox_pb.ProxFindRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxObjects|null) => void
  ): UnaryResponse;
  getObjectInfo(
    requestMessage: prox_pb.ProxGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxObject|null) => void
  ): UnaryResponse;
  getObjectInfo(
    requestMessage: prox_pb.ProxGetRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxObject|null) => void
  ): UnaryResponse;
  deleteObject(
    requestMessage: prox_pb.ProxDeleteObjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxDeleteResp|null) => void
  ): UnaryResponse;
  deleteObject(
    requestMessage: prox_pb.ProxDeleteObjectReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxDeleteResp|null) => void
  ): UnaryResponse;
  summaryInfo(
    requestMessage: prox_pb.ProxRequestSummaryIds,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxSummaryInfos|null) => void
  ): UnaryResponse;
  summaryInfo(
    requestMessage: prox_pb.ProxRequestSummaryIds,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxSummaryInfos|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: prox_pb.ProxRequestStatistics,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxStatisticsInfo|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: prox_pb.ProxRequestStatistics,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxStatisticsInfo|null) => void
  ): UnaryResponse;
  renameObjects(
    requestMessage: prox_pb.ProxRenameObject,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxRenameObjectResp|null) => void
  ): UnaryResponse;
  renameObjects(
    requestMessage: prox_pb.ProxRenameObject,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxRenameObjectResp|null) => void
  ): UnaryResponse;
  getTimeLine(
    requestMessage: prox_pb.ProxTimeLine,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxTimeLineResp|null) => void
  ): UnaryResponse;
  getTimeLine(
    requestMessage: prox_pb.ProxTimeLine,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxTimeLineResp|null) => void
  ): UnaryResponse;
  getPreSigned(
    requestMessage: prox_pb.ProxPresignedURL,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPresignedURLResp|null) => void
  ): UnaryResponse;
  getPreSigned(
    requestMessage: prox_pb.ProxPresignedURL,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPresignedURLResp|null) => void
  ): UnaryResponse;
  touchFile(
    requestMessage: prox_pb.ProxFileInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxTouchResp|null) => void
  ): UnaryResponse;
  touchFile(
    requestMessage: prox_pb.ProxFileInfo,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxTouchResp|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: prox_pb.ProxChatReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: prox_pb.ProxChatReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxChatResponse|null) => void
  ): UnaryResponse;
  knowledge(
    requestMessage: prox_pb.ProxKNReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxKNResponse|null) => void
  ): UnaryResponse;
  knowledge(
    requestMessage: prox_pb.ProxKNReq,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxKNResponse|null) => void
  ): UnaryResponse;
  generateCred(
    requestMessage: prox_pb.ProxCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredResp|null) => void
  ): UnaryResponse;
  generateCred(
    requestMessage: prox_pb.ProxCredRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredResp|null) => void
  ): UnaryResponse;
  listCreds(
    requestMessage: prox_pb.ProxGetCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredsList|null) => void
  ): UnaryResponse;
  listCreds(
    requestMessage: prox_pb.ProxGetCredRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredsList|null) => void
  ): UnaryResponse;
  genPinningCred(
    requestMessage: prox_pb.ProxGeneratePinCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxGeneratePinCredResp|null) => void
  ): UnaryResponse;
  genPinningCred(
    requestMessage: prox_pb.ProxGeneratePinCredRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxGeneratePinCredResp|null) => void
  ): UnaryResponse;
  deleteCred(
    requestMessage: prox_pb.ProxCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredResp|null) => void
  ): UnaryResponse;
  deleteCred(
    requestMessage: prox_pb.ProxCredRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxCredResp|null) => void
  ): UnaryResponse;
  updateNFT(
    requestMessage: prox_pb.ProxUpdateNFTRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxUpdateNFTResp|null) => void
  ): UnaryResponse;
  updateNFT(
    requestMessage: prox_pb.ProxUpdateNFTRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxUpdateNFTResp|null) => void
  ): UnaryResponse;
  generateExtractCode(
    requestMessage: prox_pb.ProxGExtractCode,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxGExtractCodeResp|null) => void
  ): UnaryResponse;
  generateExtractCode(
    requestMessage: prox_pb.ProxGExtractCode,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxGExtractCodeResp|null) => void
  ): UnaryResponse;
  asyncFetchObject(
    requestMessage: prox_pb.ProxFetchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningInfo|null) => void
  ): UnaryResponse;
  asyncFetchObject(
    requestMessage: prox_pb.ProxFetchRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningInfo|null) => void
  ): UnaryResponse;
  cancelFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  cancelFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  deleteFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  deleteFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  resumeFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  resumeFetchObject(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxFetchPinningResponse|null) => void
  ): UnaryResponse;
  listPinnings(
    requestMessage: prox_pb.ProxPinningListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningResp|null) => void
  ): UnaryResponse;
  listPinnings(
    requestMessage: prox_pb.ProxPinningListRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningResp|null) => void
  ): UnaryResponse;
  fetchPinningEvent(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningInfo|null) => void
  ): UnaryResponse;
  fetchPinningEvent(
    requestMessage: prox_pb.ProxFetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxPinningInfo|null) => void
  ): UnaryResponse;
  f2PGetSpaceInfo(
    requestMessage: prox_pb.ProxF2PGetSpace,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetSpaceResp|null) => void
  ): UnaryResponse;
  f2PGetSpaceInfo(
    requestMessage: prox_pb.ProxF2PGetSpace,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetSpaceResp|null) => void
  ): UnaryResponse;
  f2PGetIOTList(
    requestMessage: prox_pb.ProxF2PGetIOT,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetIOTResp|null) => void
  ): UnaryResponse;
  f2PGetIOTList(
    requestMessage: prox_pb.ProxF2PGetIOT,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetIOTResp|null) => void
  ): UnaryResponse;
  f2PGetIOTAmount(
    requestMessage: prox_pb.ProxF2PGetIOT,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetIOTAmountResp|null) => void
  ): UnaryResponse;
  f2PGetIOTAmount(
    requestMessage: prox_pb.ProxF2PGetIOT,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetIOTAmountResp|null) => void
  ): UnaryResponse;
  f2PGetMinerInfo(
    requestMessage: prox_pb.ProxF2PGetMiner,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetMinerResp|null) => void
  ): UnaryResponse;
  f2PGetMinerInfo(
    requestMessage: prox_pb.ProxF2PGetMiner,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetMinerResp|null) => void
  ): UnaryResponse;
  f2PGetAppInfo(
    requestMessage: prox_pb.ProxF2PGetApp,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetAppResp|null) => void
  ): UnaryResponse;
  f2PGetAppInfo(
    requestMessage: prox_pb.ProxF2PGetApp,
    callback: (error: ServiceError|null, responseMessage: prox_pb.ProxF2PGetAppResp|null) => void
  ): UnaryResponse;
}

