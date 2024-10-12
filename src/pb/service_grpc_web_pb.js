/**
 * @fileoverview gRPC-Web generated client stub for bot
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.4
// source: service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.bot = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.bot.ServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.bot.ServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bot.EffectRequest,
 *   !proto.bot.UserEffect>}
 */
const methodDescriptor_Service_GetUserEffect = new grpc.web.MethodDescriptor(
  '/bot.Service/GetUserEffect',
  grpc.web.MethodType.UNARY,
  proto.bot.EffectRequest,
  proto.bot.UserEffect,
  /**
   * @param {!proto.bot.EffectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bot.UserEffect.deserializeBinary
);


/**
 * @param {!proto.bot.EffectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bot.UserEffect)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bot.UserEffect>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bot.ServiceClient.prototype.getUserEffect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bot.Service/GetUserEffect',
      request,
      metadata || {},
      methodDescriptor_Service_GetUserEffect,
      callback);
};


/**
 * @param {!proto.bot.EffectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bot.UserEffect>}
 *     Promise that resolves to the response
 */
proto.bot.ServicePromiseClient.prototype.getUserEffect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bot.Service/GetUserEffect',
      request,
      metadata || {},
      methodDescriptor_Service_GetUserEffect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bot.BindRequest,
 *   !proto.bot.CommonResponse>}
 */
const methodDescriptor_Service_BindWallet = new grpc.web.MethodDescriptor(
  '/bot.Service/BindWallet',
  grpc.web.MethodType.UNARY,
  proto.bot.BindRequest,
  proto.bot.CommonResponse,
  /**
   * @param {!proto.bot.BindRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bot.CommonResponse.deserializeBinary
);


/**
 * @param {!proto.bot.BindRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bot.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bot.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bot.ServiceClient.prototype.bindWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bot.Service/BindWallet',
      request,
      metadata || {},
      methodDescriptor_Service_BindWallet,
      callback);
};


/**
 * @param {!proto.bot.BindRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bot.CommonResponse>}
 *     Promise that resolves to the response
 */
proto.bot.ServicePromiseClient.prototype.bindWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bot.Service/BindWallet',
      request,
      metadata || {},
      methodDescriptor_Service_BindWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bot.SetMasterSpace,
 *   !proto.bot.CommonResponse>}
 */
const methodDescriptor_Service_SetCurrentSpace = new grpc.web.MethodDescriptor(
  '/bot.Service/SetCurrentSpace',
  grpc.web.MethodType.UNARY,
  proto.bot.SetMasterSpace,
  proto.bot.CommonResponse,
  /**
   * @param {!proto.bot.SetMasterSpace} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bot.CommonResponse.deserializeBinary
);


/**
 * @param {!proto.bot.SetMasterSpace} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bot.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bot.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bot.ServiceClient.prototype.setCurrentSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bot.Service/SetCurrentSpace',
      request,
      metadata || {},
      methodDescriptor_Service_SetCurrentSpace,
      callback);
};


/**
 * @param {!proto.bot.SetMasterSpace} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bot.CommonResponse>}
 *     Promise that resolves to the response
 */
proto.bot.ServicePromiseClient.prototype.setCurrentSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bot.Service/SetCurrentSpace',
      request,
      metadata || {},
      methodDescriptor_Service_SetCurrentSpace);
};


module.exports = proto.bot;

