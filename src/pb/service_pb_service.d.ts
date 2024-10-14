// package: bot
// file: service.proto

import * as service_pb from "./service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceGetUserEffect = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.EffectRequest;
  readonly responseType: typeof service_pb.UserEffect;
};

type ServiceBindWallet = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.BindRequest;
  readonly responseType: typeof service_pb.CommonResponse;
};

type ServiceSetCurrentSpace = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.SetMasterSpace;
  readonly responseType: typeof service_pb.CommonResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly GetUserEffect: ServiceGetUserEffect;
  static readonly BindWallet: ServiceBindWallet;
  static readonly SetCurrentSpace: ServiceSetCurrentSpace;
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
  getUserEffect(
    requestMessage: service_pb.EffectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.UserEffect|null) => void
  ): UnaryResponse;
  getUserEffect(
    requestMessage: service_pb.EffectRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.UserEffect|null) => void
  ): UnaryResponse;
  bindWallet(
    requestMessage: service_pb.BindRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CommonResponse|null) => void
  ): UnaryResponse;
  bindWallet(
    requestMessage: service_pb.BindRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.CommonResponse|null) => void
  ): UnaryResponse;
  setCurrentSpace(
    requestMessage: service_pb.SetMasterSpace,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CommonResponse|null) => void
  ): UnaryResponse;
  setCurrentSpace(
    requestMessage: service_pb.SetMasterSpace,
    callback: (error: ServiceError|null, responseMessage: service_pb.CommonResponse|null) => void
  ): UnaryResponse;
}

