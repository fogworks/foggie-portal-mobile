// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var net_pb = require('./net_pb.js');

function serialize_proto_CompleteMultipartReq(arg) {
  if (!(arg instanceof net_pb.CompleteMultipartReq)) {
    throw new Error('Expected argument of type proto.CompleteMultipartReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CompleteMultipartReq(buffer_arg) {
  return net_pb.CompleteMultipartReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CompleteMultipartResp(arg) {
  if (!(arg instanceof net_pb.CompleteMultipartResp)) {
    throw new Error('Expected argument of type proto.CompleteMultipartResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CompleteMultipartResp(buffer_arg) {
  return net_pb.CompleteMultipartResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteObjectReq(arg) {
  if (!(arg instanceof net_pb.DeleteObjectReq)) {
    throw new Error('Expected argument of type proto.DeleteObjectReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteObjectReq(buffer_arg) {
  return net_pb.DeleteObjectReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteResp(arg) {
  if (!(arg instanceof net_pb.DeleteResp)) {
    throw new Error('Expected argument of type proto.DeleteResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteResp(buffer_arg) {
  return net_pb.DeleteResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetHostIDReply(arg) {
  if (!(arg instanceof net_pb.GetHostIDReply)) {
    throw new Error('Expected argument of type proto.GetHostIDReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetHostIDReply(buffer_arg) {
  return net_pb.GetHostIDReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetHostIDRequest(arg) {
  if (!(arg instanceof net_pb.GetHostIDRequest)) {
    throw new Error('Expected argument of type proto.GetHostIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetHostIDRequest(buffer_arg) {
  return net_pb.GetHostIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMerkleHashRequest(arg) {
  if (!(arg instanceof net_pb.GetMerkleHashRequest)) {
    throw new Error('Expected argument of type proto.GetMerkleHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMerkleHashRequest(buffer_arg) {
  return net_pb.GetMerkleHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMerkleHashResponse(arg) {
  if (!(arg instanceof net_pb.GetMerkleHashResponse)) {
    throw new Error('Expected argument of type proto.GetMerkleHashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMerkleHashResponse(buffer_arg) {
  return net_pb.GetMerkleHashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMerkleReply(arg) {
  if (!(arg instanceof net_pb.GetMerkleReply)) {
    throw new Error('Expected argument of type proto.GetMerkleReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMerkleReply(buffer_arg) {
  return net_pb.GetMerkleReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMerkleRequest(arg) {
  if (!(arg instanceof net_pb.GetMerkleRequest)) {
    throw new Error('Expected argument of type proto.GetMerkleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMerkleRequest(buffer_arg) {
  return net_pb.GetMerkleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetRequest(arg) {
  if (!(arg instanceof net_pb.GetRequest)) {
    throw new Error('Expected argument of type proto.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetRequest(buffer_arg) {
  return net_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetResponse(arg) {
  if (!(arg instanceof net_pb.GetResponse)) {
    throw new Error('Expected argument of type proto.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetResponse(buffer_arg) {
  return net_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetTokenReply(arg) {
  if (!(arg instanceof net_pb.GetTokenReply)) {
    throw new Error('Expected argument of type proto.GetTokenReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetTokenReply(buffer_arg) {
  return net_pb.GetTokenReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetTokenRequest(arg) {
  if (!(arg instanceof net_pb.GetTokenRequest)) {
    throw new Error('Expected argument of type proto.GetTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetTokenRequest(buffer_arg) {
  return net_pb.GetTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListMultipartUploadResponse(arg) {
  if (!(arg instanceof net_pb.ListMultipartUploadResponse)) {
    throw new Error('Expected argument of type proto.ListMultipartUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListMultipartUploadResponse(buffer_arg) {
  return net_pb.ListMultipartUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListObjectsReq(arg) {
  if (!(arg instanceof net_pb.ListObjectsReq)) {
    throw new Error('Expected argument of type proto.ListObjectsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListObjectsReq(buffer_arg) {
  return net_pb.ListObjectsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListObjectsResp(arg) {
  if (!(arg instanceof net_pb.ListObjectsResp)) {
    throw new Error('Expected argument of type proto.ListObjectsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListObjectsResp(buffer_arg) {
  return net_pb.ListObjectsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListPartsReq(arg) {
  if (!(arg instanceof net_pb.ListPartsReq)) {
    throw new Error('Expected argument of type proto.ListPartsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListPartsReq(buffer_arg) {
  return net_pb.ListPartsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListPartsResponse(arg) {
  if (!(arg instanceof net_pb.ListPartsResponse)) {
    throw new Error('Expected argument of type proto.ListPartsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListPartsResponse(buffer_arg) {
  return net_pb.ListPartsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListUploadReq(arg) {
  if (!(arg instanceof net_pb.ListUploadReq)) {
    throw new Error('Expected argument of type proto.ListUploadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListUploadReq(buffer_arg) {
  return net_pb.ListUploadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MultipartCreateResp(arg) {
  if (!(arg instanceof net_pb.MultipartCreateResp)) {
    throw new Error('Expected argument of type proto.MultipartCreateResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MultipartCreateResp(buffer_arg) {
  return net_pb.MultipartCreateResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PinReq(arg) {
  if (!(arg instanceof net_pb.PinReq)) {
    throw new Error('Expected argument of type proto.PinReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PinReq(buffer_arg) {
  return net_pb.PinReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PinResp(arg) {
  if (!(arg instanceof net_pb.PinResp)) {
    throw new Error('Expected argument of type proto.PinResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PinResp(buffer_arg) {
  return net_pb.PinResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PutObjectOpt(arg) {
  if (!(arg instanceof net_pb.PutObjectOpt)) {
    throw new Error('Expected argument of type proto.PutObjectOpt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PutObjectOpt(buffer_arg) {
  return net_pb.PutObjectOpt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PutObjectPartOpt(arg) {
  if (!(arg instanceof net_pb.PutObjectPartOpt)) {
    throw new Error('Expected argument of type proto.PutObjectPartOpt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PutObjectPartOpt(buffer_arg) {
  return net_pb.PutObjectPartOpt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PutObjectPartResult(arg) {
  if (!(arg instanceof net_pb.PutObjectPartResult)) {
    throw new Error('Expected argument of type proto.PutObjectPartResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PutObjectPartResult(buffer_arg) {
  return net_pb.PutObjectPartResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PutObjectReq(arg) {
  if (!(arg instanceof net_pb.PutObjectReq)) {
    throw new Error('Expected argument of type proto.PutObjectReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PutObjectReq(buffer_arg) {
  return net_pb.PutObjectReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PutObjectResp(arg) {
  if (!(arg instanceof net_pb.PutObjectResp)) {
    throw new Error('Expected argument of type proto.PutObjectResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PutObjectResp(buffer_arg) {
  return net_pb.PutObjectResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_StageRequest(arg) {
  if (!(arg instanceof net_pb.StageRequest)) {
    throw new Error('Expected argument of type proto.StageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_StageRequest(buffer_arg) {
  return net_pb.StageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_StageResponse(arg) {
  if (!(arg instanceof net_pb.StageResponse)) {
    throw new Error('Expected argument of type proto.StageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_StageResponse(buffer_arg) {
  return net_pb.StageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var APIService = exports.APIService = {
  pin: {
    path: '/proto.API/Pin',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.PinReq,
    responseType: net_pb.PinResp,
    requestSerialize: serialize_proto_PinReq,
    requestDeserialize: deserialize_proto_PinReq,
    responseSerialize: serialize_proto_PinResp,
    responseDeserialize: deserialize_proto_PinResp,
  },
  getMerkle: {
    path: '/proto.API/GetMerkle',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.GetMerkleRequest,
    responseType: net_pb.GetMerkleReply,
    requestSerialize: serialize_proto_GetMerkleRequest,
    requestDeserialize: deserialize_proto_GetMerkleRequest,
    responseSerialize: serialize_proto_GetMerkleReply,
    responseDeserialize: deserialize_proto_GetMerkleReply,
  },
  getMerkleHash: {
    path: '/proto.API/GetMerkleHash',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.GetMerkleHashRequest,
    responseType: net_pb.GetMerkleHashResponse,
    requestSerialize: serialize_proto_GetMerkleHashRequest,
    requestDeserialize: deserialize_proto_GetMerkleHashRequest,
    responseSerialize: serialize_proto_GetMerkleHashResponse,
    responseDeserialize: deserialize_proto_GetMerkleHashResponse,
  },
  getHostID: {
    path: '/proto.API/GetHostID',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.GetHostIDRequest,
    responseType: net_pb.GetHostIDReply,
    requestSerialize: serialize_proto_GetHostIDRequest,
    requestDeserialize: deserialize_proto_GetHostIDRequest,
    responseSerialize: serialize_proto_GetHostIDReply,
    responseDeserialize: deserialize_proto_GetHostIDReply,
  },
  getToken: {
    path: '/proto.API/GetToken',
    requestStream: true,
    responseStream: true,
    requestType: net_pb.GetTokenRequest,
    responseType: net_pb.GetTokenReply,
    requestSerialize: serialize_proto_GetTokenRequest,
    requestDeserialize: deserialize_proto_GetTokenRequest,
    responseSerialize: serialize_proto_GetTokenReply,
    responseDeserialize: deserialize_proto_GetTokenReply,
  },
  stage: {
    path: '/proto.API/Stage',
    requestStream: true,
    responseStream: false,
    requestType: net_pb.StageRequest,
    responseType: net_pb.StageResponse,
    requestSerialize: serialize_proto_StageRequest,
    requestDeserialize: deserialize_proto_StageRequest,
    responseSerialize: serialize_proto_StageResponse,
    responseDeserialize: deserialize_proto_StageResponse,
  },
  putObject: {
    path: '/proto.API/PutObject',
    requestStream: true,
    responseStream: false,
    requestType: net_pb.PutObjectOpt,
    responseType: net_pb.PutObjectResp,
    requestSerialize: serialize_proto_PutObjectOpt,
    requestDeserialize: deserialize_proto_PutObjectOpt,
    responseSerialize: serialize_proto_PutObjectResp,
    responseDeserialize: deserialize_proto_PutObjectResp,
  },
  newMultipartObject: {
    path: '/proto.API/NewMultipartObject',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.PutObjectReq,
    responseType: net_pb.MultipartCreateResp,
    requestSerialize: serialize_proto_PutObjectReq,
    requestDeserialize: deserialize_proto_PutObjectReq,
    responseSerialize: serialize_proto_MultipartCreateResp,
    responseDeserialize: deserialize_proto_MultipartCreateResp,
  },
  putObjectPart: {
    path: '/proto.API/PutObjectPart',
    requestStream: true,
    responseStream: false,
    requestType: net_pb.PutObjectPartOpt,
    responseType: net_pb.PutObjectPartResult,
    requestSerialize: serialize_proto_PutObjectPartOpt,
    requestDeserialize: deserialize_proto_PutObjectPartOpt,
    responseSerialize: serialize_proto_PutObjectPartResult,
    responseDeserialize: deserialize_proto_PutObjectPartResult,
  },
  completeMultipart: {
    path: '/proto.API/CompleteMultipart',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.CompleteMultipartReq,
    responseType: net_pb.CompleteMultipartResp,
    requestSerialize: serialize_proto_CompleteMultipartReq,
    requestDeserialize: deserialize_proto_CompleteMultipartReq,
    responseSerialize: serialize_proto_CompleteMultipartResp,
    responseDeserialize: deserialize_proto_CompleteMultipartResp,
  },
  listMultipart: {
    path: '/proto.API/ListMultipart',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.ListUploadReq,
    responseType: net_pb.ListMultipartUploadResponse,
    requestSerialize: serialize_proto_ListUploadReq,
    requestDeserialize: deserialize_proto_ListUploadReq,
    responseSerialize: serialize_proto_ListMultipartUploadResponse,
    responseDeserialize: deserialize_proto_ListMultipartUploadResponse,
  },
  listObjectParts: {
    path: '/proto.API/ListObjectParts',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.ListPartsReq,
    responseType: net_pb.ListPartsResponse,
    requestSerialize: serialize_proto_ListPartsReq,
    requestDeserialize: deserialize_proto_ListPartsReq,
    responseSerialize: serialize_proto_ListPartsResponse,
    responseDeserialize: deserialize_proto_ListPartsResponse,
  },
  listObjects: {
    path: '/proto.API/ListObjects',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.ListObjectsReq,
    responseType: net_pb.ListObjectsResp,
    requestSerialize: serialize_proto_ListObjectsReq,
    requestDeserialize: deserialize_proto_ListObjectsReq,
    responseSerialize: serialize_proto_ListObjectsResp,
    responseDeserialize: deserialize_proto_ListObjectsResp,
  },
  getObject: {
    path: '/proto.API/GetObject',
    requestStream: false,
    responseStream: true,
    requestType: net_pb.GetRequest,
    responseType: net_pb.GetResponse,
    requestSerialize: serialize_proto_GetRequest,
    requestDeserialize: deserialize_proto_GetRequest,
    responseSerialize: serialize_proto_GetResponse,
    responseDeserialize: deserialize_proto_GetResponse,
  },
  deleteObject: {
    path: '/proto.API/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: net_pb.DeleteObjectReq,
    responseType: net_pb.DeleteResp,
    requestSerialize: serialize_proto_DeleteObjectReq,
    requestDeserialize: deserialize_proto_DeleteObjectReq,
    responseSerialize: serialize_proto_DeleteResp,
    responseDeserialize: deserialize_proto_DeleteResp,
  },
};

exports.APIClient = grpc.makeGenericClientConstructor(APIService);
