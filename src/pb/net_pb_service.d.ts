// package: proto
// file: net.proto

import * as net_pb from "./net_pb";
import {grpc} from "@improbable-eng/grpc-web";

type APIPin = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PinReq;
  readonly responseType: typeof net_pb.PinResp;
};

type APIPingMiner = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PingMinerRequest;
  readonly responseType: typeof net_pb.PingMinerResponse;
};

type APIPing = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PingRequest;
  readonly responseType: typeof net_pb.PingResponse;
};

type APIGetHostID = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.GetHostIDRequest;
  readonly responseType: typeof net_pb.GetHostIDReply;
};

type APIGetToken = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.GetTokenRequest;
  readonly responseType: typeof net_pb.GetTokenReply;
};

type APIStage = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.StageRequest;
  readonly responseType: typeof net_pb.StageResponse;
};

type APIPutObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PutObjectOpt;
  readonly responseType: typeof net_pb.PutObjectResp;
};

type APIPutObjectStream = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.PutObjectOpt;
  readonly responseType: typeof net_pb.PutObjectResp;
};

type APINewMultipartObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PutObjectReq;
  readonly responseType: typeof net_pb.MultipartCreateResp;
};

type APIPutObjectPart = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PutObjectPartOpt;
  readonly responseType: typeof net_pb.PutObjectPartResult;
};

type APICompleteMultipart = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.CompleteMultipartReq;
  readonly responseType: typeof net_pb.CompleteMultipartResp;
};

type APIListMultipart = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.ListUploadReq;
  readonly responseType: typeof net_pb.ListMultipartUploadResponse;
};

type APIListObjectParts = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.ListPartsReq;
  readonly responseType: typeof net_pb.ListPartsResponse;
};

type APIListObjects = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.ListObjectsReq;
  readonly responseType: typeof net_pb.ListObjectsResp;
};

type APIGetObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.GetRequest;
  readonly responseType: typeof net_pb.GetResponse;
};

type APIFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.FetchRequest;
  readonly responseType: typeof net_pb.GetResponse;
};

type APIAsyncFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchRequest;
  readonly responseType: typeof net_pb.PinningInfo;
};

type APIGetBlock = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.GetBlockRequest;
  readonly responseType: typeof net_pb.GetResponse;
};

type APIGetCarMeta = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.GetCarMetaRequest;
  readonly responseType: typeof net_pb.GetResponse;
};

type APIGetObjects = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.GetRequests;
  readonly responseType: typeof net_pb.GetResponse;
};

type APIGetObjectInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.GetRequest;
  readonly responseType: typeof net_pb.Object;
};

type APIDeleteObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.DeleteObjectReq;
  readonly responseType: typeof net_pb.DeleteResp;
};

type APISearchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof net_pb.SearchRequest;
  readonly responseType: typeof net_pb.SearchResponse;
};

type APIFindObjects = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FindRequest;
  readonly responseType: typeof net_pb.Objects;
};

type APISummaryInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.RequestSummaryIds;
  readonly responseType: typeof net_pb.SummaryInfos;
};

type APIStatistics = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.RequestStatistics;
  readonly responseType: typeof net_pb.StatisticsInfo;
};

type APIRenameObjects = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.RenameObject;
  readonly responseType: typeof net_pb.RenameObjectResp;
};

type APIGetTimeLine = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.TimeLine;
  readonly responseType: typeof net_pb.TimeLineResp;
};

type APIGetPreSigned = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PresignedURL;
  readonly responseType: typeof net_pb.PresignedURLResp;
};

type APITouchFile = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FileInfo;
  readonly responseType: typeof net_pb.TouchResp;
};

type APIChat = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.ChatReq;
  readonly responseType: typeof net_pb.ChatResponse;
};

type APIKnowledge = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.KNReq;
  readonly responseType: typeof net_pb.KNResponse;
};

type APIGenerateCred = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.CredRequest;
  readonly responseType: typeof net_pb.CredResp;
};

type APIGenerateExtractCode = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.GExtractCode;
  readonly responseType: typeof net_pb.GExtractCodeResp;
};

type APIPausedFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchPinningRequest;
  readonly responseType: typeof net_pb.FetchPinningResponse;
};

type APICancelFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchPinningRequest;
  readonly responseType: typeof net_pb.FetchPinningResponse;
};

type APIDeleteFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchPinningRequest;
  readonly responseType: typeof net_pb.FetchPinningResponse;
};

type APIResumeFetchObject = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchPinningRequest;
  readonly responseType: typeof net_pb.FetchPinningResponse;
};

type APIFetchPinningEvent = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.FetchPinningRequest;
  readonly responseType: typeof net_pb.PinningInfo;
};

type APIListPinnings = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.PinningListRequest;
  readonly responseType: typeof net_pb.PinningResp;
};

type APIListCreds = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.GetCredRequest;
  readonly responseType: typeof net_pb.CredsList;
};

type APIDeleteCred = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.CredRequest;
  readonly responseType: typeof net_pb.CredResp;
};

type APIGenPinningCred = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.GeneratePinCredRequest;
  readonly responseType: typeof net_pb.GeneratePinCredResp;
};

type APIUpdateNFT = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.UpdateNFTRequest;
  readonly responseType: typeof net_pb.UpdateNFTResp;
};

type APIF2PGetSpaceInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.F2PGetSpace;
  readonly responseType: typeof net_pb.F2PGetSpaceResp;
};

type APIF2PGetMinerInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.F2PGetMiner;
  readonly responseType: typeof net_pb.F2PGetMinerResp;
};

type APIF2PGetIOTList = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.F2PGetIOT;
  readonly responseType: typeof net_pb.F2PGetIOTResp;
};

type APIF2PGetIOTAmount = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.F2PGetIOT;
  readonly responseType: typeof net_pb.F2PGetIOTAmountResp;
};

type APIF2PGetAppInfo = {
  readonly methodName: string;
  readonly service: typeof API;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof net_pb.F2PGetApp;
  readonly responseType: typeof net_pb.F2PGetAppResp;
};

export class API {
  static readonly serviceName: string;
  static readonly Pin: APIPin;
  static readonly PingMiner: APIPingMiner;
  static readonly Ping: APIPing;
  static readonly GetHostID: APIGetHostID;
  static readonly GetToken: APIGetToken;
  static readonly Stage: APIStage;
  static readonly PutObject: APIPutObject;
  static readonly PutObjectStream: APIPutObjectStream;
  static readonly NewMultipartObject: APINewMultipartObject;
  static readonly PutObjectPart: APIPutObjectPart;
  static readonly CompleteMultipart: APICompleteMultipart;
  static readonly ListMultipart: APIListMultipart;
  static readonly ListObjectParts: APIListObjectParts;
  static readonly ListObjects: APIListObjects;
  static readonly GetObject: APIGetObject;
  static readonly FetchObject: APIFetchObject;
  static readonly AsyncFetchObject: APIAsyncFetchObject;
  static readonly GetBlock: APIGetBlock;
  static readonly GetCarMeta: APIGetCarMeta;
  static readonly GetObjects: APIGetObjects;
  static readonly GetObjectInfo: APIGetObjectInfo;
  static readonly DeleteObject: APIDeleteObject;
  static readonly SearchObject: APISearchObject;
  static readonly FindObjects: APIFindObjects;
  static readonly SummaryInfo: APISummaryInfo;
  static readonly Statistics: APIStatistics;
  static readonly RenameObjects: APIRenameObjects;
  static readonly GetTimeLine: APIGetTimeLine;
  static readonly GetPreSigned: APIGetPreSigned;
  static readonly TouchFile: APITouchFile;
  static readonly Chat: APIChat;
  static readonly Knowledge: APIKnowledge;
  static readonly GenerateCred: APIGenerateCred;
  static readonly GenerateExtractCode: APIGenerateExtractCode;
  static readonly PausedFetchObject: APIPausedFetchObject;
  static readonly CancelFetchObject: APICancelFetchObject;
  static readonly DeleteFetchObject: APIDeleteFetchObject;
  static readonly ResumeFetchObject: APIResumeFetchObject;
  static readonly FetchPinningEvent: APIFetchPinningEvent;
  static readonly ListPinnings: APIListPinnings;
  static readonly ListCreds: APIListCreds;
  static readonly DeleteCred: APIDeleteCred;
  static readonly GenPinningCred: APIGenPinningCred;
  static readonly UpdateNFT: APIUpdateNFT;
  static readonly F2PGetSpaceInfo: APIF2PGetSpaceInfo;
  static readonly F2PGetMinerInfo: APIF2PGetMinerInfo;
  static readonly F2PGetIOTList: APIF2PGetIOTList;
  static readonly F2PGetIOTAmount: APIF2PGetIOTAmount;
  static readonly F2PGetAppInfo: APIF2PGetAppInfo;
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

export class APIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  pin(
    requestMessage: net_pb.PinReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinResp|null) => void
  ): UnaryResponse;
  pin(
    requestMessage: net_pb.PinReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinResp|null) => void
  ): UnaryResponse;
  pingMiner(
    requestMessage: net_pb.PingMinerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PingMinerResponse|null) => void
  ): UnaryResponse;
  pingMiner(
    requestMessage: net_pb.PingMinerRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.PingMinerResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: net_pb.PingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PingResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: net_pb.PingRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.PingResponse|null) => void
  ): UnaryResponse;
  getHostID(
    requestMessage: net_pb.GetHostIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.GetHostIDReply|null) => void
  ): UnaryResponse;
  getHostID(
    requestMessage: net_pb.GetHostIDRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.GetHostIDReply|null) => void
  ): UnaryResponse;
  getToken(metadata?: grpc.Metadata): BidirectionalStream<net_pb.GetTokenRequest, net_pb.GetTokenReply>;
  stage(metadata?: grpc.Metadata): RequestStream<net_pb.StageRequest>;
  putObject(metadata?: grpc.Metadata): RequestStream<net_pb.PutObjectOpt>;
  putObjectStream(metadata?: grpc.Metadata): BidirectionalStream<net_pb.PutObjectOpt, net_pb.PutObjectResp>;
  newMultipartObject(
    requestMessage: net_pb.PutObjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.MultipartCreateResp|null) => void
  ): UnaryResponse;
  newMultipartObject(
    requestMessage: net_pb.PutObjectReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.MultipartCreateResp|null) => void
  ): UnaryResponse;
  putObjectPart(metadata?: grpc.Metadata): RequestStream<net_pb.PutObjectPartOpt>;
  completeMultipart(
    requestMessage: net_pb.CompleteMultipartReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.CompleteMultipartResp|null) => void
  ): UnaryResponse;
  completeMultipart(
    requestMessage: net_pb.CompleteMultipartReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.CompleteMultipartResp|null) => void
  ): UnaryResponse;
  listMultipart(
    requestMessage: net_pb.ListUploadReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListMultipartUploadResponse|null) => void
  ): UnaryResponse;
  listMultipart(
    requestMessage: net_pb.ListUploadReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListMultipartUploadResponse|null) => void
  ): UnaryResponse;
  listObjectParts(
    requestMessage: net_pb.ListPartsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListPartsResponse|null) => void
  ): UnaryResponse;
  listObjectParts(
    requestMessage: net_pb.ListPartsReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListPartsResponse|null) => void
  ): UnaryResponse;
  listObjects(
    requestMessage: net_pb.ListObjectsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListObjectsResp|null) => void
  ): UnaryResponse;
  listObjects(
    requestMessage: net_pb.ListObjectsReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.ListObjectsResp|null) => void
  ): UnaryResponse;
  getObject(requestMessage: net_pb.GetRequest, metadata?: grpc.Metadata): ResponseStream<net_pb.GetResponse>;
  fetchObject(requestMessage: net_pb.FetchRequest, metadata?: grpc.Metadata): ResponseStream<net_pb.GetResponse>;
  asyncFetchObject(
    requestMessage: net_pb.FetchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningInfo|null) => void
  ): UnaryResponse;
  asyncFetchObject(
    requestMessage: net_pb.FetchRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningInfo|null) => void
  ): UnaryResponse;
  getBlock(requestMessage: net_pb.GetBlockRequest, metadata?: grpc.Metadata): ResponseStream<net_pb.GetResponse>;
  getCarMeta(requestMessage: net_pb.GetCarMetaRequest, metadata?: grpc.Metadata): ResponseStream<net_pb.GetResponse>;
  getObjects(requestMessage: net_pb.GetRequests, metadata?: grpc.Metadata): ResponseStream<net_pb.GetResponse>;
  getObjectInfo(
    requestMessage: net_pb.GetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.Object|null) => void
  ): UnaryResponse;
  getObjectInfo(
    requestMessage: net_pb.GetRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.Object|null) => void
  ): UnaryResponse;
  deleteObject(
    requestMessage: net_pb.DeleteObjectReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.DeleteResp|null) => void
  ): UnaryResponse;
  deleteObject(
    requestMessage: net_pb.DeleteObjectReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.DeleteResp|null) => void
  ): UnaryResponse;
  searchObject(requestMessage: net_pb.SearchRequest, metadata?: grpc.Metadata): ResponseStream<net_pb.SearchResponse>;
  findObjects(
    requestMessage: net_pb.FindRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.Objects|null) => void
  ): UnaryResponse;
  findObjects(
    requestMessage: net_pb.FindRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.Objects|null) => void
  ): UnaryResponse;
  summaryInfo(
    requestMessage: net_pb.RequestSummaryIds,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.SummaryInfos|null) => void
  ): UnaryResponse;
  summaryInfo(
    requestMessage: net_pb.RequestSummaryIds,
    callback: (error: ServiceError|null, responseMessage: net_pb.SummaryInfos|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: net_pb.RequestStatistics,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.StatisticsInfo|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: net_pb.RequestStatistics,
    callback: (error: ServiceError|null, responseMessage: net_pb.StatisticsInfo|null) => void
  ): UnaryResponse;
  renameObjects(
    requestMessage: net_pb.RenameObject,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.RenameObjectResp|null) => void
  ): UnaryResponse;
  renameObjects(
    requestMessage: net_pb.RenameObject,
    callback: (error: ServiceError|null, responseMessage: net_pb.RenameObjectResp|null) => void
  ): UnaryResponse;
  getTimeLine(
    requestMessage: net_pb.TimeLine,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.TimeLineResp|null) => void
  ): UnaryResponse;
  getTimeLine(
    requestMessage: net_pb.TimeLine,
    callback: (error: ServiceError|null, responseMessage: net_pb.TimeLineResp|null) => void
  ): UnaryResponse;
  getPreSigned(
    requestMessage: net_pb.PresignedURL,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PresignedURLResp|null) => void
  ): UnaryResponse;
  getPreSigned(
    requestMessage: net_pb.PresignedURL,
    callback: (error: ServiceError|null, responseMessage: net_pb.PresignedURLResp|null) => void
  ): UnaryResponse;
  touchFile(
    requestMessage: net_pb.FileInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.TouchResp|null) => void
  ): UnaryResponse;
  touchFile(
    requestMessage: net_pb.FileInfo,
    callback: (error: ServiceError|null, responseMessage: net_pb.TouchResp|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: net_pb.ChatReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.ChatResponse|null) => void
  ): UnaryResponse;
  chat(
    requestMessage: net_pb.ChatReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.ChatResponse|null) => void
  ): UnaryResponse;
  knowledge(
    requestMessage: net_pb.KNReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.KNResponse|null) => void
  ): UnaryResponse;
  knowledge(
    requestMessage: net_pb.KNReq,
    callback: (error: ServiceError|null, responseMessage: net_pb.KNResponse|null) => void
  ): UnaryResponse;
  generateCred(
    requestMessage: net_pb.CredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredResp|null) => void
  ): UnaryResponse;
  generateCred(
    requestMessage: net_pb.CredRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredResp|null) => void
  ): UnaryResponse;
  generateExtractCode(
    requestMessage: net_pb.GExtractCode,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.GExtractCodeResp|null) => void
  ): UnaryResponse;
  generateExtractCode(
    requestMessage: net_pb.GExtractCode,
    callback: (error: ServiceError|null, responseMessage: net_pb.GExtractCodeResp|null) => void
  ): UnaryResponse;
  pausedFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  pausedFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  cancelFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  cancelFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  deleteFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  deleteFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  resumeFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  resumeFetchObject(
    requestMessage: net_pb.FetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.FetchPinningResponse|null) => void
  ): UnaryResponse;
  fetchPinningEvent(
    requestMessage: net_pb.FetchPinningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningInfo|null) => void
  ): UnaryResponse;
  fetchPinningEvent(
    requestMessage: net_pb.FetchPinningRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningInfo|null) => void
  ): UnaryResponse;
  listPinnings(
    requestMessage: net_pb.PinningListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningResp|null) => void
  ): UnaryResponse;
  listPinnings(
    requestMessage: net_pb.PinningListRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.PinningResp|null) => void
  ): UnaryResponse;
  listCreds(
    requestMessage: net_pb.GetCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredsList|null) => void
  ): UnaryResponse;
  listCreds(
    requestMessage: net_pb.GetCredRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredsList|null) => void
  ): UnaryResponse;
  deleteCred(
    requestMessage: net_pb.CredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredResp|null) => void
  ): UnaryResponse;
  deleteCred(
    requestMessage: net_pb.CredRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.CredResp|null) => void
  ): UnaryResponse;
  genPinningCred(
    requestMessage: net_pb.GeneratePinCredRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.GeneratePinCredResp|null) => void
  ): UnaryResponse;
  genPinningCred(
    requestMessage: net_pb.GeneratePinCredRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.GeneratePinCredResp|null) => void
  ): UnaryResponse;
  updateNFT(
    requestMessage: net_pb.UpdateNFTRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.UpdateNFTResp|null) => void
  ): UnaryResponse;
  updateNFT(
    requestMessage: net_pb.UpdateNFTRequest,
    callback: (error: ServiceError|null, responseMessage: net_pb.UpdateNFTResp|null) => void
  ): UnaryResponse;
  f2PGetSpaceInfo(
    requestMessage: net_pb.F2PGetSpace,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetSpaceResp|null) => void
  ): UnaryResponse;
  f2PGetSpaceInfo(
    requestMessage: net_pb.F2PGetSpace,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetSpaceResp|null) => void
  ): UnaryResponse;
  f2PGetMinerInfo(
    requestMessage: net_pb.F2PGetMiner,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetMinerResp|null) => void
  ): UnaryResponse;
  f2PGetMinerInfo(
    requestMessage: net_pb.F2PGetMiner,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetMinerResp|null) => void
  ): UnaryResponse;
  f2PGetIOTList(
    requestMessage: net_pb.F2PGetIOT,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetIOTResp|null) => void
  ): UnaryResponse;
  f2PGetIOTList(
    requestMessage: net_pb.F2PGetIOT,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetIOTResp|null) => void
  ): UnaryResponse;
  f2PGetIOTAmount(
    requestMessage: net_pb.F2PGetIOT,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetIOTAmountResp|null) => void
  ): UnaryResponse;
  f2PGetIOTAmount(
    requestMessage: net_pb.F2PGetIOT,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetIOTAmountResp|null) => void
  ): UnaryResponse;
  f2PGetAppInfo(
    requestMessage: net_pb.F2PGetApp,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetAppResp|null) => void
  ): UnaryResponse;
  f2PGetAppInfo(
    requestMessage: net_pb.F2PGetApp,
    callback: (error: ServiceError|null, responseMessage: net_pb.F2PGetAppResp|null) => void
  ): UnaryResponse;
}

