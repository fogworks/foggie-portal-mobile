// source: net.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.proto.ChatReq', null, global);
goog.exportSymbol('proto.proto.ChatRequest', null, global);
goog.exportSymbol('proto.proto.ChatResponse', null, global);
goog.exportSymbol('proto.proto.CompPart', null, global);
goog.exportSymbol('proto.proto.CompleteMultipartReq', null, global);
goog.exportSymbol('proto.proto.CompleteMultipartRequest', null, global);
goog.exportSymbol('proto.proto.CompleteMultipartResp', null, global);
goog.exportSymbol('proto.proto.CompletePartUpload', null, global);
goog.exportSymbol('proto.proto.Cred', null, global);
goog.exportSymbol('proto.proto.CredRequest', null, global);
goog.exportSymbol('proto.proto.CredResp', null, global);
goog.exportSymbol('proto.proto.CredsList', null, global);
goog.exportSymbol('proto.proto.DeleteObjectReq', null, global);
goog.exportSymbol('proto.proto.DeleteObjectRequest', null, global);
goog.exportSymbol('proto.proto.DeletePeerIdResp', null, global);
goog.exportSymbol('proto.proto.DeletePeerIdsResp', null, global);
goog.exportSymbol('proto.proto.DeleteResp', null, global);
goog.exportSymbol('proto.proto.FileInfo', null, global);
goog.exportSymbol('proto.proto.FindRequest', null, global);
goog.exportSymbol('proto.proto.GeneratePinCredRequest', null, global);
goog.exportSymbol('proto.proto.GeneratePinCredResp', null, global);
goog.exportSymbol('proto.proto.GetCredRequest', null, global);
goog.exportSymbol('proto.proto.GetFileRelay', null, global);
goog.exportSymbol('proto.proto.GetFileRequest', null, global);
goog.exportSymbol('proto.proto.GetHostIDReply', null, global);
goog.exportSymbol('proto.proto.GetHostIDRequest', null, global);
goog.exportSymbol('proto.proto.GetInfo', null, global);
goog.exportSymbol('proto.proto.GetRelay', null, global);
goog.exportSymbol('proto.proto.GetRequest', null, global);
goog.exportSymbol('proto.proto.GetRequests', null, global);
goog.exportSymbol('proto.proto.GetResponse', null, global);
goog.exportSymbol('proto.proto.GetResponse.OptionCase', null, global);
goog.exportSymbol('proto.proto.GetTokenReply', null, global);
goog.exportSymbol('proto.proto.GetTokenReply.PayloadCase', null, global);
goog.exportSymbol('proto.proto.GetTokenRequest', null, global);
goog.exportSymbol('proto.proto.GetTokenRequest.PayloadCase', null, global);
goog.exportSymbol('proto.proto.GpsInfo', null, global);
goog.exportSymbol('proto.proto.Header', null, global);
goog.exportSymbol('proto.proto.ImageAddition', null, global);
goog.exportSymbol('proto.proto.ImageCameraInfo', null, global);
goog.exportSymbol('proto.proto.ImageCameraResolution', null, global);
goog.exportSymbol('proto.proto.ImageInfo', null, global);
goog.exportSymbol('proto.proto.KNReq', null, global);
goog.exportSymbol('proto.proto.KNRequest', null, global);
goog.exportSymbol('proto.proto.KNResponse', null, global);
goog.exportSymbol('proto.proto.Link', null, global);
goog.exportSymbol('proto.proto.Links', null, global);
goog.exportSymbol('proto.proto.ListMultipartUploadResponse', null, global);
goog.exportSymbol('proto.proto.ListObjectsReq', null, global);
goog.exportSymbol('proto.proto.ListObjectsRequest', null, global);
goog.exportSymbol('proto.proto.ListObjectsResp', null, global);
goog.exportSymbol('proto.proto.ListPartsReq', null, global);
goog.exportSymbol('proto.proto.ListPartsRequest', null, global);
goog.exportSymbol('proto.proto.ListPartsResponse', null, global);
goog.exportSymbol('proto.proto.ListUploadReq', null, global);
goog.exportSymbol('proto.proto.ListUploadRequest', null, global);
goog.exportSymbol('proto.proto.MultipartCreateResp', null, global);
goog.exportSymbol('proto.proto.NFTInfo', null, global);
goog.exportSymbol('proto.proto.Object', null, global);
goog.exportSymbol('proto.proto.ObjectInfo', null, global);
goog.exportSymbol('proto.proto.Objects', null, global);
goog.exportSymbol('proto.proto.Part', null, global);
goog.exportSymbol('proto.proto.PeerIds', null, global);
goog.exportSymbol('proto.proto.PeerInfo', null, global);
goog.exportSymbol('proto.proto.PeerInfoResp', null, global);
goog.exportSymbol('proto.proto.PinPay', null, global);
goog.exportSymbol('proto.proto.PinReq', null, global);
goog.exportSymbol('proto.proto.PinRequest', null, global);
goog.exportSymbol('proto.proto.PinResp', null, global);
goog.exportSymbol('proto.proto.PingMiner', null, global);
goog.exportSymbol('proto.proto.PingMinerRequest', null, global);
goog.exportSymbol('proto.proto.PingMinerResponse', null, global);
goog.exportSymbol('proto.proto.PingRequest', null, global);
goog.exportSymbol('proto.proto.PingResponse', null, global);
goog.exportSymbol('proto.proto.Pinning', null, global);
goog.exportSymbol('proto.proto.PrefixPin', null, global);
goog.exportSymbol('proto.proto.PresignedURL', null, global);
goog.exportSymbol('proto.proto.PresignedURLResp', null, global);
goog.exportSymbol('proto.proto.PutObjectOpt', null, global);
goog.exportSymbol('proto.proto.PutObjectOpt.OptionCase', null, global);
goog.exportSymbol('proto.proto.PutObjectPartOpt', null, global);
goog.exportSymbol('proto.proto.PutObjectPartOpt.OptionCase', null, global);
goog.exportSymbol('proto.proto.PutObjectPartReq', null, global);
goog.exportSymbol('proto.proto.PutObjectPartRequest', null, global);
goog.exportSymbol('proto.proto.PutObjectPartResult', null, global);
goog.exportSymbol('proto.proto.PutObjectReq', null, global);
goog.exportSymbol('proto.proto.PutObjectRequest', null, global);
goog.exportSymbol('proto.proto.PutObjectResp', null, global);
goog.exportSymbol('proto.proto.PutObjectResult', null, global);
goog.exportSymbol('proto.proto.RangeRequest', null, global);
goog.exportSymbol('proto.proto.RenameObject', null, global);
goog.exportSymbol('proto.proto.RenameObjectResp', null, global);
goog.exportSymbol('proto.proto.RequestSummaryIds', null, global);
goog.exportSymbol('proto.proto.SearchRequest', null, global);
goog.exportSymbol('proto.proto.SearchResponse', null, global);
goog.exportSymbol('proto.proto.SearchResponse.OptionCase', null, global);
goog.exportSymbol('proto.proto.StagePin', null, global);
goog.exportSymbol('proto.proto.StageRequest', null, global);
goog.exportSymbol('proto.proto.StageRequest.OptionCase', null, global);
goog.exportSymbol('proto.proto.StageResponse', null, global);
goog.exportSymbol('proto.proto.SummaryInfo', null, global);
goog.exportSymbol('proto.proto.SummaryInfos', null, global);
goog.exportSymbol('proto.proto.Thumbnail', null, global);
goog.exportSymbol('proto.proto.TimeLine', null, global);
goog.exportSymbol('proto.proto.TimeLineRes', null, global);
goog.exportSymbol('proto.proto.TimeLineResp', null, global);
goog.exportSymbol('proto.proto.TouchResp', null, global);
goog.exportSymbol('proto.proto.UnPinReq', null, global);
goog.exportSymbol('proto.proto.UnpinRequest', null, global);
goog.exportSymbol('proto.proto.UpdateNFTRequest', null, global);
goog.exportSymbol('proto.proto.UpdateNFTResp', null, global);
goog.exportSymbol('proto.proto.Upload', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetHostIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetHostIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetHostIDRequest.displayName = 'proto.proto.GetHostIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetHostIDReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetHostIDReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetHostIDReply.displayName = 'proto.proto.GetHostIDReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.GetTokenRequest.oneofGroups_);
};
goog.inherits(proto.proto.GetTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetTokenRequest.displayName = 'proto.proto.GetTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetTokenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.GetTokenReply.oneofGroups_);
};
goog.inherits(proto.proto.GetTokenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetTokenReply.displayName = 'proto.proto.GetTokenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Header.displayName = 'proto.proto.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetFileRequest.displayName = 'proto.proto.GetFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetRelay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetRelay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetRelay.displayName = 'proto.proto.GetRelay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetFileRelay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetFileRelay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetFileRelay.displayName = 'proto.proto.GetFileRelay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PinPay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PinPay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PinPay.displayName = 'proto.proto.PinPay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.StagePin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.StagePin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StagePin.displayName = 'proto.proto.StagePin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.StageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.StageRequest.oneofGroups_);
};
goog.inherits(proto.proto.StageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StageRequest.displayName = 'proto.proto.StageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.MultipartCreateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.MultipartCreateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.MultipartCreateResp.displayName = 'proto.proto.MultipartCreateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.StageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.StageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StageResponse.displayName = 'proto.proto.StageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DeleteObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DeleteObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.DeleteObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeleteObjectRequest.displayName = 'proto.proto.DeleteObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DeleteResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DeleteResp.repeatedFields_, null);
};
goog.inherits(proto.proto.DeleteResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeleteResp.displayName = 'proto.proto.DeleteResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DeleteObjectReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DeleteObjectReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeleteObjectReq.displayName = 'proto.proto.DeleteObjectReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectRequest.displayName = 'proto.proto.PutObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectReq.displayName = 'proto.proto.PutObjectReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectOpt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.PutObjectOpt.oneofGroups_);
};
goog.inherits(proto.proto.PutObjectOpt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectOpt.displayName = 'proto.proto.PutObjectOpt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectResp.displayName = 'proto.proto.PutObjectResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CompPart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CompPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompPart.displayName = 'proto.proto.CompPart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CompletePartUpload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.CompletePartUpload.repeatedFields_, null);
};
goog.inherits(proto.proto.CompletePartUpload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompletePartUpload.displayName = 'proto.proto.CompletePartUpload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CompleteMultipartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CompleteMultipartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompleteMultipartRequest.displayName = 'proto.proto.CompleteMultipartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CompleteMultipartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CompleteMultipartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompleteMultipartReq.displayName = 'proto.proto.CompleteMultipartReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CompleteMultipartResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CompleteMultipartResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CompleteMultipartResp.displayName = 'proto.proto.CompleteMultipartResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RangeRequest.displayName = 'proto.proto.RangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Thumbnail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Thumbnail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Thumbnail.displayName = 'proto.proto.Thumbnail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetRequest.displayName = 'proto.proto.GetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ObjectInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ObjectInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ObjectInfo.displayName = 'proto.proto.ObjectInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.GetResponse.oneofGroups_);
};
goog.inherits(proto.proto.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetResponse.displayName = 'proto.proto.GetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectResult.displayName = 'proto.proto.PutObjectResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectPartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectPartRequest.displayName = 'proto.proto.PutObjectPartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectPartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectPartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectPartReq.displayName = 'proto.proto.PutObjectPartReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectPartOpt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.PutObjectPartOpt.oneofGroups_);
};
goog.inherits(proto.proto.PutObjectPartOpt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectPartOpt.displayName = 'proto.proto.PutObjectPartOpt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PutObjectPartResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PutObjectPartResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PutObjectPartResult.displayName = 'proto.proto.PutObjectPartResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListPartsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListPartsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListPartsRequest.displayName = 'proto.proto.ListPartsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListPartsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListPartsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListPartsReq.displayName = 'proto.proto.ListPartsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Part.displayName = 'proto.proto.Part';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListPartsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ListPartsResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ListPartsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListPartsResponse.displayName = 'proto.proto.ListPartsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Upload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Upload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Upload.displayName = 'proto.proto.Upload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListObjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListObjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListObjectsRequest.displayName = 'proto.proto.ListObjectsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListObjectsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListObjectsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListObjectsReq.displayName = 'proto.proto.ListObjectsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ImageCameraInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ImageCameraInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ImageCameraInfo.displayName = 'proto.proto.ImageCameraInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ImageCameraResolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ImageCameraResolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ImageCameraResolution.displayName = 'proto.proto.ImageCameraResolution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ImageAddition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ImageAddition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ImageAddition.displayName = 'proto.proto.ImageAddition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GpsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GpsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GpsInfo.displayName = 'proto.proto.GpsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ImageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ImageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ImageInfo.displayName = 'proto.proto.ImageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Object = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Object.repeatedFields_, null);
};
goog.inherits(proto.proto.Object, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Object.displayName = 'proto.proto.Object';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PrefixPin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.PrefixPin.repeatedFields_, null);
};
goog.inherits(proto.proto.PrefixPin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PrefixPin.displayName = 'proto.proto.PrefixPin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListObjectsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ListObjectsResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ListObjectsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListObjectsResp.displayName = 'proto.proto.ListObjectsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Pinning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Pinning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Pinning.displayName = 'proto.proto.Pinning';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListUploadRequest.displayName = 'proto.proto.ListUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ListUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListUploadReq.displayName = 'proto.proto.ListUploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ListMultipartUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ListMultipartUploadResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ListMultipartUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ListMultipartUploadResponse.displayName = 'proto.proto.ListMultipartUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UnpinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UnpinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.UnpinRequest.displayName = 'proto.proto.UnpinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UnPinReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UnPinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.UnPinReq.displayName = 'proto.proto.UnPinReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PinRequest.displayName = 'proto.proto.PinRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PinResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PinResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PinResp.displayName = 'proto.proto.PinResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PinReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PinReq.displayName = 'proto.proto.PinReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PeerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PeerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PeerInfo.displayName = 'proto.proto.PeerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PeerIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.PeerIds.repeatedFields_, null);
};
goog.inherits(proto.proto.PeerIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PeerIds.displayName = 'proto.proto.PeerIds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PeerInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.PeerInfoResp.repeatedFields_, null);
};
goog.inherits(proto.proto.PeerInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PeerInfoResp.displayName = 'proto.proto.PeerInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DeletePeerIdResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DeletePeerIdResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeletePeerIdResp.displayName = 'proto.proto.DeletePeerIdResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DeletePeerIdsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DeletePeerIdsResp.repeatedFields_, null);
};
goog.inherits(proto.proto.DeletePeerIdsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeletePeerIdsResp.displayName = 'proto.proto.DeletePeerIdsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PingRequest.displayName = 'proto.proto.PingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PingResponse.displayName = 'proto.proto.PingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PingMinerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PingMinerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PingMinerRequest.displayName = 'proto.proto.PingMinerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PingMiner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PingMiner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PingMiner.displayName = 'proto.proto.PingMiner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PingMinerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.PingMinerResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.PingMinerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PingMinerResponse.displayName = 'proto.proto.PingMinerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.FindRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FindRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FindRequest.displayName = 'proto.proto.FindRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Objects = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Objects.repeatedFields_, null);
};
goog.inherits(proto.proto.Objects, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Objects.displayName = 'proto.proto.Objects';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Links = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Links.repeatedFields_, null);
};
goog.inherits(proto.proto.Links, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Links.displayName = 'proto.proto.Links';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Link = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Link, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Link.displayName = 'proto.proto.Link';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SearchRequest.displayName = 'proto.proto.SearchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.SearchResponse.oneofGroups_);
};
goog.inherits(proto.proto.SearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SearchResponse.displayName = 'proto.proto.SearchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RequestSummaryIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.RequestSummaryIds.repeatedFields_, null);
};
goog.inherits(proto.proto.RequestSummaryIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RequestSummaryIds.displayName = 'proto.proto.RequestSummaryIds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SummaryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SummaryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SummaryInfo.displayName = 'proto.proto.SummaryInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SummaryInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.SummaryInfos.repeatedFields_, null);
};
goog.inherits(proto.proto.SummaryInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SummaryInfos.displayName = 'proto.proto.SummaryInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RenameObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RenameObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RenameObject.displayName = 'proto.proto.RenameObject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RenameObjectResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RenameObjectResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RenameObjectResp.displayName = 'proto.proto.RenameObjectResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TimeLine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TimeLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TimeLine.displayName = 'proto.proto.TimeLine';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TimeLineResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TimeLineResp.repeatedFields_, null);
};
goog.inherits(proto.proto.TimeLineResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TimeLineResp.displayName = 'proto.proto.TimeLineResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TimeLineRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TimeLineRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TimeLineRes.displayName = 'proto.proto.TimeLineRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetInfo.displayName = 'proto.proto.GetInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetRequests = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.GetRequests.repeatedFields_, null);
};
goog.inherits(proto.proto.GetRequests, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetRequests.displayName = 'proto.proto.GetRequests';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PresignedURL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PresignedURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PresignedURL.displayName = 'proto.proto.PresignedURL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PresignedURLResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PresignedURLResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PresignedURLResp.displayName = 'proto.proto.PresignedURLResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileInfo.displayName = 'proto.proto.FileInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TouchResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TouchResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TouchResp.displayName = 'proto.proto.TouchResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChatReq.displayName = 'proto.proto.ChatReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChatRequest.displayName = 'proto.proto.ChatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChatResponse.displayName = 'proto.proto.ChatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.KNReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.KNReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.KNReq.displayName = 'proto.proto.KNReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.KNRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.KNRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.KNRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.KNRequest.displayName = 'proto.proto.KNRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.KNResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.KNResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.KNResponse.displayName = 'proto.proto.KNResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Cred = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Cred, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Cred.displayName = 'proto.proto.Cred';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CredRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CredRequest.displayName = 'proto.proto.CredRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CredResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CredResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CredResp.displayName = 'proto.proto.CredResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetCredRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetCredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetCredRequest.displayName = 'proto.proto.GetCredRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CredsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.CredsList.repeatedFields_, null);
};
goog.inherits(proto.proto.CredsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CredsList.displayName = 'proto.proto.CredsList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GeneratePinCredRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GeneratePinCredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GeneratePinCredRequest.displayName = 'proto.proto.GeneratePinCredRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GeneratePinCredResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GeneratePinCredResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GeneratePinCredResp.displayName = 'proto.proto.GeneratePinCredResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NFTInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NFTInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.NFTInfo.displayName = 'proto.proto.NFTInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UpdateNFTRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.UpdateNFTRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.UpdateNFTRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.UpdateNFTRequest.displayName = 'proto.proto.UpdateNFTRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UpdateNFTResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UpdateNFTResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.UpdateNFTResp.displayName = 'proto.proto.UpdateNFTResp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetHostIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetHostIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetHostIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetHostIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetHostIDRequest}
 */
proto.proto.GetHostIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetHostIDRequest;
  return proto.proto.GetHostIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetHostIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetHostIDRequest}
 */
proto.proto.GetHostIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetHostIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetHostIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetHostIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetHostIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetHostIDReply.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetHostIDReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetHostIDReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetHostIDReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetHostIDReply}
 */
proto.proto.GetHostIDReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetHostIDReply;
  return proto.proto.GetHostIDReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetHostIDReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetHostIDReply}
 */
proto.proto.GetHostIDReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetHostIDReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetHostIDReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetHostIDReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetHostIDReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.GetHostIDReply.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetHostIDReply} returns this
 */
proto.proto.GetHostIDReply.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.GetTokenRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.proto.GetTokenRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  KEY: 1,
  STYPE: 2,
  SIGNATURE: 3
};

/**
 * @return {proto.proto.GetTokenRequest.PayloadCase}
 */
proto.proto.GetTokenRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.proto.GetTokenRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.proto.GetTokenRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetTokenRequest}
 */
proto.proto.GetTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetTokenRequest;
  return proto.proto.GetTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetTokenRequest}
 */
proto.proto.GetTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.GetTokenRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.setKey = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.proto.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.clearKey = function() {
  return jspb.Message.setOneofField(this, 1, proto.proto.GetTokenRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetTokenRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 stype = 2;
 * @return {number}
 */
proto.proto.GetTokenRequest.prototype.getStype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.setStype = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.clearStype = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetTokenRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetTokenRequest.prototype.hasStype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.GetTokenRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.proto.GetTokenRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.proto.GetTokenRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.setSignature = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.proto.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetTokenRequest} returns this
 */
proto.proto.GetTokenRequest.prototype.clearSignature = function() {
  return jspb.Message.setOneofField(this, 3, proto.proto.GetTokenRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetTokenRequest.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.GetTokenReply.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.GetTokenReply.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  CHALLENGE: 1,
  TOKEN: 2
};

/**
 * @return {proto.proto.GetTokenReply.PayloadCase}
 */
proto.proto.GetTokenReply.prototype.getPayloadCase = function() {
  return /** @type {proto.proto.GetTokenReply.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.proto.GetTokenReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetTokenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetTokenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetTokenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetTokenReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    challenge: msg.getChallenge_asB64(),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetTokenReply}
 */
proto.proto.GetTokenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetTokenReply;
  return proto.proto.GetTokenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetTokenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetTokenReply}
 */
proto.proto.GetTokenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChallenge(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetTokenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetTokenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetTokenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetTokenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes challenge = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.GetTokenReply.prototype.getChallenge = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes challenge = 1;
 * This is a type-conversion wrapper around `getChallenge()`
 * @return {string}
 */
proto.proto.GetTokenReply.prototype.getChallenge_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChallenge()));
};


/**
 * optional bytes challenge = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChallenge()`
 * @return {!Uint8Array}
 */
proto.proto.GetTokenReply.prototype.getChallenge_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChallenge()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.GetTokenReply} returns this
 */
proto.proto.GetTokenReply.prototype.setChallenge = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.proto.GetTokenReply.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetTokenReply} returns this
 */
proto.proto.GetTokenReply.prototype.clearChallenge = function() {
  return jspb.Message.setOneofField(this, 1, proto.proto.GetTokenReply.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetTokenReply.prototype.hasChallenge = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.proto.GetTokenReply.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetTokenReply} returns this
 */
proto.proto.GetTokenReply.prototype.setToken = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetTokenReply.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetTokenReply} returns this
 */
proto.proto.GetTokenReply.prototype.clearToken = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetTokenReply.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetTokenReply.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
    apptype: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Header}
 */
proto.proto.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Header;
  return proto.proto.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Header}
 */
proto.proto.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApptype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApptype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string peerId = 1;
 * @return {string}
 */
proto.proto.Header.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Header} returns this
 */
proto.proto.Header.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.proto.Header.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Header} returns this
 */
proto.proto.Header.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.proto.Header.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Header} returns this
 */
proto.proto.Header.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string appType = 4;
 * @return {string}
 */
proto.proto.Header.prototype.getApptype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Header} returns this
 */
proto.proto.Header.prototype.setApptype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetFileRequest}
 */
proto.proto.GetFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetFileRequest;
  return proto.proto.GetFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetFileRequest}
 */
proto.proto.GetFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string peerId = 1;
 * @return {string}
 */
proto.proto.GetFileRequest.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetFileRequest} returns this
 */
proto.proto.GetFileRequest.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.GetFileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetFileRequest} returns this
 */
proto.proto.GetFileRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetRelay.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetRelay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetRelay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRelay.toObject = function(includeInstance, msg) {
  var f, obj = {
    accept: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetRelay}
 */
proto.proto.GetRelay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetRelay;
  return proto.proto.GetRelay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetRelay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetRelay}
 */
proto.proto.GetRelay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccept(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetRelay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetRelay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetRelay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRelay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccept();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool accept = 1;
 * @return {boolean}
 */
proto.proto.GetRelay.prototype.getAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.GetRelay} returns this
 */
proto.proto.GetRelay.prototype.setAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetFileRelay.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetFileRelay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetFileRelay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetFileRelay.toObject = function(includeInstance, msg) {
  var f, obj = {
    accept: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetFileRelay}
 */
proto.proto.GetFileRelay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetFileRelay;
  return proto.proto.GetFileRelay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetFileRelay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetFileRelay}
 */
proto.proto.GetFileRelay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccept(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetFileRelay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetFileRelay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetFileRelay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetFileRelay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccept();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional bool accept = 1;
 * @return {boolean}
 */
proto.proto.GetFileRelay.prototype.getAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.GetFileRelay} returns this
 */
proto.proto.GetFileRelay.prototype.setAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.proto.GetFileRelay.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.GetFileRelay} returns this
 */
proto.proto.GetFileRelay.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PinPay.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PinPay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PinPay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinPay.toObject = function(includeInstance, msg) {
  var f, obj = {
    copied: jspb.Message.getFieldWithDefault(msg, 1, 0),
    trxid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PinPay}
 */
proto.proto.PinPay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PinPay;
  return proto.proto.PinPay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PinPay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PinPay}
 */
proto.proto.PinPay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCopied(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PinPay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PinPay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PinPay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinPay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCopied();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTrxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 copied = 1;
 * @return {number}
 */
proto.proto.PinPay.prototype.getCopied = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PinPay} returns this
 */
proto.proto.PinPay.prototype.setCopied = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string trxId = 2;
 * @return {string}
 */
proto.proto.PinPay.prototype.getTrxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinPay} returns this
 */
proto.proto.PinPay.prototype.setTrxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.StagePin.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StagePin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StagePin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StagePin.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.PinRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.StagePin}
 */
proto.proto.StagePin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StagePin;
  return proto.proto.StagePin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StagePin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StagePin}
 */
proto.proto.StagePin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.PinRequest;
      reader.readMessage(value,proto.proto.PinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.StagePin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StagePin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StagePin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StagePin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.PinRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.StagePin.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.StagePin} returns this
*/
proto.proto.StagePin.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.StagePin} returns this
 */
proto.proto.StagePin.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StagePin.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PinRequest request = 2;
 * @return {?proto.proto.PinRequest}
 */
proto.proto.StagePin.prototype.getRequest = function() {
  return /** @type{?proto.proto.PinRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.PinRequest, 2));
};


/**
 * @param {?proto.proto.PinRequest|undefined} value
 * @return {!proto.proto.StagePin} returns this
*/
proto.proto.StagePin.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.StagePin} returns this
 */
proto.proto.StagePin.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StagePin.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.StageRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.StageRequest.OptionCase = {
  OPTION_NOT_SET: 0,
  PIN: 1,
  CHUNK: 2
};

/**
 * @return {proto.proto.StageRequest.OptionCase}
 */
proto.proto.StageRequest.prototype.getOptionCase = function() {
  return /** @type {proto.proto.StageRequest.OptionCase} */(jspb.Message.computeOneofCase(this, proto.proto.StageRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.StageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: (f = msg.getPin()) && proto.proto.StagePin.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.StageRequest}
 */
proto.proto.StageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StageRequest;
  return proto.proto.StageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StageRequest}
 */
proto.proto.StageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.StagePin;
      reader.readMessage(value,proto.proto.StagePin.deserializeBinaryFromReader);
      msg.setPin(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.StageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.StagePin.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional StagePin pin = 1;
 * @return {?proto.proto.StagePin}
 */
proto.proto.StageRequest.prototype.getPin = function() {
  return /** @type{?proto.proto.StagePin} */ (
    jspb.Message.getWrapperField(this, proto.proto.StagePin, 1));
};


/**
 * @param {?proto.proto.StagePin|undefined} value
 * @return {!proto.proto.StageRequest} returns this
*/
proto.proto.StageRequest.prototype.setPin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.StageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.StageRequest} returns this
 */
proto.proto.StageRequest.prototype.clearPin = function() {
  return this.setPin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StageRequest.prototype.hasPin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.StageRequest.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.StageRequest.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.StageRequest.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.StageRequest} returns this
 */
proto.proto.StageRequest.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.StageRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.StageRequest} returns this
 */
proto.proto.StageRequest.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.StageRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.StageRequest.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.MultipartCreateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.MultipartCreateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.MultipartCreateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.MultipartCreateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    uploadid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.MultipartCreateResp}
 */
proto.proto.MultipartCreateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.MultipartCreateResp;
  return proto.proto.MultipartCreateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.MultipartCreateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.MultipartCreateResp}
 */
proto.proto.MultipartCreateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.MultipartCreateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.MultipartCreateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.MultipartCreateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.MultipartCreateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uploadId = 1;
 * @return {string}
 */
proto.proto.MultipartCreateResp.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.MultipartCreateResp} returns this
 */
proto.proto.MultipartCreateResp.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.MultipartCreateResp.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.MultipartCreateResp} returns this
 */
proto.proto.MultipartCreateResp.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.StageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.StageResponse}
 */
proto.proto.StageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StageResponse;
  return proto.proto.StageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StageResponse}
 */
proto.proto.StageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.StageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.StageResponse.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.StageResponse} returns this
 */
proto.proto.StageResponse.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DeleteObjectRequest.repeatedFields_ = [1,2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DeleteObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeleteObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeleteObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    objectsList: jspb.Message.toObjectList(msg.getObjectsList(),
    proto.proto.Upload.toObject, includeInstance),
    objectType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    prefixesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DeleteObjectRequest}
 */
proto.proto.DeleteObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeleteObjectRequest;
  return proto.proto.DeleteObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeleteObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeleteObjectRequest}
 */
proto.proto.DeleteObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCids(value);
      break;
    case 2:
      var value = new proto.proto.Upload;
      reader.readMessage(value,proto.proto.Upload.deserializeBinaryFromReader);
      msg.addObjects(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DeleteObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeleteObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeleteObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.Upload.serializeBinaryToWriter
    );
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string cids = 1;
 * @return {!Array<string>}
 */
proto.proto.DeleteObjectRequest.prototype.getCidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.setCidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.addCids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.clearCidsList = function() {
  return this.setCidsList([]);
};


/**
 * repeated Upload objects = 2;
 * @return {!Array<!proto.proto.Upload>}
 */
proto.proto.DeleteObjectRequest.prototype.getObjectsList = function() {
  return /** @type{!Array<!proto.proto.Upload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Upload, 2));
};


/**
 * @param {!Array<!proto.proto.Upload>} value
 * @return {!proto.proto.DeleteObjectRequest} returns this
*/
proto.proto.DeleteObjectRequest.prototype.setObjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.Upload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Upload}
 */
proto.proto.DeleteObjectRequest.prototype.addObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.Upload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};


/**
 * optional string object_type = 3;
 * @return {string}
 */
proto.proto.DeleteObjectRequest.prototype.getObjectType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.setObjectType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string prefixes = 4;
 * @return {!Array<string>}
 */
proto.proto.DeleteObjectRequest.prototype.getPrefixesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.setPrefixesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.addPrefixes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DeleteObjectRequest} returns this
 */
proto.proto.DeleteObjectRequest.prototype.clearPrefixesList = function() {
  return this.setPrefixesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DeleteResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DeleteResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeleteResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeleteResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DeleteResp}
 */
proto.proto.DeleteResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeleteResp;
  return proto.proto.DeleteResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeleteResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeleteResp}
 */
proto.proto.DeleteResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addObjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DeleteResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeleteResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeleteResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string objects = 1;
 * @return {!Array<string>}
 */
proto.proto.DeleteResp.prototype.getObjectsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.DeleteResp} returns this
 */
proto.proto.DeleteResp.prototype.setObjectsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.DeleteResp} returns this
 */
proto.proto.DeleteResp.prototype.addObjects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DeleteResp} returns this
 */
proto.proto.DeleteResp.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DeleteObjectReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeleteObjectReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeleteObjectReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteObjectReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.DeleteObjectRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DeleteObjectReq}
 */
proto.proto.DeleteObjectReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeleteObjectReq;
  return proto.proto.DeleteObjectReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeleteObjectReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeleteObjectReq}
 */
proto.proto.DeleteObjectReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.DeleteObjectRequest;
      reader.readMessage(value,proto.proto.DeleteObjectRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DeleteObjectReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeleteObjectReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeleteObjectReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeleteObjectReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.DeleteObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.DeleteObjectReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.DeleteObjectReq} returns this
*/
proto.proto.DeleteObjectReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.DeleteObjectReq} returns this
 */
proto.proto.DeleteObjectReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeleteObjectReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DeleteObjectRequest request = 2;
 * @return {?proto.proto.DeleteObjectRequest}
 */
proto.proto.DeleteObjectReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.DeleteObjectRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.DeleteObjectRequest, 2));
};


/**
 * @param {?proto.proto.DeleteObjectRequest|undefined} value
 * @return {!proto.proto.DeleteObjectReq} returns this
*/
proto.proto.DeleteObjectReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.DeleteObjectReq} returns this
 */
proto.proto.DeleteObjectReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.DeleteObjectReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    md5: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentlength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    contenttype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stageonly: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    category: jspb.Message.getFieldWithDefault(msg, 6, 0),
    tags: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectRequest}
 */
proto.proto.PutObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectRequest;
  return proto.proto.PutObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectRequest}
 */
proto.proto.PutObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContentlength(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStageonly(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategory(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentlength();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStageonly();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.PutObjectRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string md5 = 2;
 * @return {string}
 */
proto.proto.PutObjectRequest.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 contentLength = 3;
 * @return {number}
 */
proto.proto.PutObjectRequest.prototype.getContentlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setContentlength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string contentType = 4;
 * @return {string}
 */
proto.proto.PutObjectRequest.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool stageOnly = 5;
 * @return {boolean}
 */
proto.proto.PutObjectRequest.prototype.getStageonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setStageonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 category = 6;
 * @return {number}
 */
proto.proto.PutObjectRequest.prototype.getCategory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string tags = 7;
 * @return {string}
 */
proto.proto.PutObjectRequest.prototype.getTags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectRequest} returns this
 */
proto.proto.PutObjectRequest.prototype.setTags = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.PutObjectRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectReq}
 */
proto.proto.PutObjectReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectReq;
  return proto.proto.PutObjectReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectReq}
 */
proto.proto.PutObjectReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.PutObjectRequest;
      reader.readMessage(value,proto.proto.PutObjectRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.PutObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PutObjectReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PutObjectReq} returns this
*/
proto.proto.PutObjectReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectReq} returns this
 */
proto.proto.PutObjectReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PutObjectRequest request = 2;
 * @return {?proto.proto.PutObjectRequest}
 */
proto.proto.PutObjectReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.PutObjectRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.PutObjectRequest, 2));
};


/**
 * @param {?proto.proto.PutObjectRequest|undefined} value
 * @return {!proto.proto.PutObjectReq} returns this
*/
proto.proto.PutObjectReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectReq} returns this
 */
proto.proto.PutObjectReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.PutObjectOpt.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.PutObjectOpt.OptionCase = {
  OPTION_NOT_SET: 0,
  REQ: 1,
  CHUNK: 2
};

/**
 * @return {proto.proto.PutObjectOpt.OptionCase}
 */
proto.proto.PutObjectOpt.prototype.getOptionCase = function() {
  return /** @type {proto.proto.PutObjectOpt.OptionCase} */(jspb.Message.computeOneofCase(this, proto.proto.PutObjectOpt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectOpt.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectOpt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectOpt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectOpt.toObject = function(includeInstance, msg) {
  var f, obj = {
    req: (f = msg.getReq()) && proto.proto.PutObjectReq.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectOpt}
 */
proto.proto.PutObjectOpt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectOpt;
  return proto.proto.PutObjectOpt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectOpt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectOpt}
 */
proto.proto.PutObjectOpt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.PutObjectReq;
      reader.readMessage(value,proto.proto.PutObjectReq.deserializeBinaryFromReader);
      msg.setReq(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectOpt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectOpt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectOpt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectOpt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.PutObjectReq.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional PutObjectReq req = 1;
 * @return {?proto.proto.PutObjectReq}
 */
proto.proto.PutObjectOpt.prototype.getReq = function() {
  return /** @type{?proto.proto.PutObjectReq} */ (
    jspb.Message.getWrapperField(this, proto.proto.PutObjectReq, 1));
};


/**
 * @param {?proto.proto.PutObjectReq|undefined} value
 * @return {!proto.proto.PutObjectOpt} returns this
*/
proto.proto.PutObjectOpt.prototype.setReq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.PutObjectOpt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectOpt} returns this
 */
proto.proto.PutObjectOpt.prototype.clearReq = function() {
  return this.setReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectOpt.prototype.hasReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.PutObjectOpt.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.PutObjectOpt.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.PutObjectOpt.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.PutObjectOpt} returns this
 */
proto.proto.PutObjectOpt.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.PutObjectOpt.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PutObjectOpt} returns this
 */
proto.proto.PutObjectOpt.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.PutObjectOpt.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectOpt.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    md5: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ""),
    etag: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectResp}
 */
proto.proto.PutObjectResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectResp;
  return proto.proto.PutObjectResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectResp}
 */
proto.proto.PutObjectResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmodified(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.PutObjectResp.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResp} returns this
 */
proto.proto.PutObjectResp.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.PutObjectResp.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResp} returns this
 */
proto.proto.PutObjectResp.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.PutObjectResp.prototype.getLastmodified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResp} returns this
 */
proto.proto.PutObjectResp.prototype.setLastmodified = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string etag = 4;
 * @return {string}
 */
proto.proto.PutObjectResp.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResp} returns this
 */
proto.proto.PutObjectResp.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CompPart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompPart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompPart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompPart.toObject = function(includeInstance, msg) {
  var f, obj = {
    partnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    etag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CompPart}
 */
proto.proto.CompPart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompPart;
  return proto.proto.CompPart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompPart}
 */
proto.proto.CompPart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CompPart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompPart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartnumber();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 partNumber = 1;
 * @return {number}
 */
proto.proto.CompPart.prototype.getPartnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.CompPart} returns this
 */
proto.proto.CompPart.prototype.setPartnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.CompPart.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompPart} returns this
 */
proto.proto.CompPart.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.CompletePartUpload.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CompletePartUpload.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompletePartUpload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompletePartUpload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompletePartUpload.toObject = function(includeInstance, msg) {
  var f, obj = {
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.proto.CompPart.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CompletePartUpload}
 */
proto.proto.CompletePartUpload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompletePartUpload;
  return proto.proto.CompletePartUpload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompletePartUpload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompletePartUpload}
 */
proto.proto.CompletePartUpload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.CompPart;
      reader.readMessage(value,proto.proto.CompPart.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CompletePartUpload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompletePartUpload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompletePartUpload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompletePartUpload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.CompPart.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CompPart parts = 1;
 * @return {!Array<!proto.proto.CompPart>}
 */
proto.proto.CompletePartUpload.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.proto.CompPart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.CompPart, 1));
};


/**
 * @param {!Array<!proto.proto.CompPart>} value
 * @return {!proto.proto.CompletePartUpload} returns this
*/
proto.proto.CompletePartUpload.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.CompPart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.CompPart}
 */
proto.proto.CompletePartUpload.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.CompPart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.CompletePartUpload} returns this
 */
proto.proto.CompletePartUpload.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CompleteMultipartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompleteMultipartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompleteMultipartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uploadid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    completeupload: (f = msg.getCompleteupload()) && proto.proto.CompletePartUpload.toObject(includeInstance, f),
    stageonly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CompleteMultipartRequest}
 */
proto.proto.CompleteMultipartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompleteMultipartRequest;
  return proto.proto.CompleteMultipartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompleteMultipartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompleteMultipartRequest}
 */
proto.proto.CompleteMultipartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    case 3:
      var value = new proto.proto.CompletePartUpload;
      reader.readMessage(value,proto.proto.CompletePartUpload.deserializeBinaryFromReader);
      msg.setCompleteupload(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStageonly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CompleteMultipartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompleteMultipartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompleteMultipartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompleteupload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.CompletePartUpload.serializeBinaryToWriter
    );
  }
  f = message.getStageonly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.CompleteMultipartRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompleteMultipartRequest} returns this
 */
proto.proto.CompleteMultipartRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.CompleteMultipartRequest.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompleteMultipartRequest} returns this
 */
proto.proto.CompleteMultipartRequest.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CompletePartUpload completeUpload = 3;
 * @return {?proto.proto.CompletePartUpload}
 */
proto.proto.CompleteMultipartRequest.prototype.getCompleteupload = function() {
  return /** @type{?proto.proto.CompletePartUpload} */ (
    jspb.Message.getWrapperField(this, proto.proto.CompletePartUpload, 3));
};


/**
 * @param {?proto.proto.CompletePartUpload|undefined} value
 * @return {!proto.proto.CompleteMultipartRequest} returns this
*/
proto.proto.CompleteMultipartRequest.prototype.setCompleteupload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CompleteMultipartRequest} returns this
 */
proto.proto.CompleteMultipartRequest.prototype.clearCompleteupload = function() {
  return this.setCompleteupload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CompleteMultipartRequest.prototype.hasCompleteupload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool stageOnly = 4;
 * @return {boolean}
 */
proto.proto.CompleteMultipartRequest.prototype.getStageonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.CompleteMultipartRequest} returns this
 */
proto.proto.CompleteMultipartRequest.prototype.setStageonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CompleteMultipartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompleteMultipartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompleteMultipartReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.CompleteMultipartRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CompleteMultipartReq}
 */
proto.proto.CompleteMultipartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompleteMultipartReq;
  return proto.proto.CompleteMultipartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompleteMultipartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompleteMultipartReq}
 */
proto.proto.CompleteMultipartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.CompleteMultipartRequest;
      reader.readMessage(value,proto.proto.CompleteMultipartRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CompleteMultipartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompleteMultipartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompleteMultipartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.CompleteMultipartRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.CompleteMultipartReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.CompleteMultipartReq} returns this
*/
proto.proto.CompleteMultipartReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CompleteMultipartReq} returns this
 */
proto.proto.CompleteMultipartReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CompleteMultipartReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CompleteMultipartRequest request = 2;
 * @return {?proto.proto.CompleteMultipartRequest}
 */
proto.proto.CompleteMultipartReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.CompleteMultipartRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.CompleteMultipartRequest, 2));
};


/**
 * @param {?proto.proto.CompleteMultipartRequest|undefined} value
 * @return {!proto.proto.CompleteMultipartReq} returns this
*/
proto.proto.CompleteMultipartReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CompleteMultipartReq} returns this
 */
proto.proto.CompleteMultipartReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CompleteMultipartReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CompleteMultipartResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CompleteMultipartResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CompleteMultipartResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    etag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CompleteMultipartResp}
 */
proto.proto.CompleteMultipartResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CompleteMultipartResp;
  return proto.proto.CompleteMultipartResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CompleteMultipartResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CompleteMultipartResp}
 */
proto.proto.CompleteMultipartResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CompleteMultipartResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CompleteMultipartResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CompleteMultipartResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CompleteMultipartResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.CompleteMultipartResp.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompleteMultipartResp} returns this
 */
proto.proto.CompleteMultipartResp.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.CompleteMultipartResp.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompleteMultipartResp} returns this
 */
proto.proto.CompleteMultipartResp.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cid = 3;
 * @return {string}
 */
proto.proto.CompleteMultipartResp.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CompleteMultipartResp} returns this
 */
proto.proto.CompleteMultipartResp.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RangeRequest}
 */
proto.proto.RangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RangeRequest;
  return proto.proto.RangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RangeRequest}
 */
proto.proto.RangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.proto.RangeRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RangeRequest} returns this
 */
proto.proto.RangeRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 length = 2;
 * @return {number}
 */
proto.proto.RangeRequest.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RangeRequest} returns this
 */
proto.proto.RangeRequest.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Thumbnail.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Thumbnail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Thumbnail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Thumbnail.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Thumbnail}
 */
proto.proto.Thumbnail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Thumbnail;
  return proto.proto.Thumbnail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Thumbnail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Thumbnail}
 */
proto.proto.Thumbnail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Thumbnail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Thumbnail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Thumbnail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Thumbnail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 width = 1;
 * @return {number}
 */
proto.proto.Thumbnail.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Thumbnail} returns this
 */
proto.proto.Thumbnail.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 height = 2;
 * @return {number}
 */
proto.proto.Thumbnail.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Thumbnail} returns this
 */
proto.proto.Thumbnail.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    range: (f = msg.getRange()) && proto.proto.RangeRequest.toObject(includeInstance, f),
    thumb: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetRequest}
 */
proto.proto.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetRequest;
  return proto.proto.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetRequest}
 */
proto.proto.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = new proto.proto.RangeRequest;
      reader.readMessage(value,proto.proto.RangeRequest.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setThumb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.RangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getThumb();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.GetRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.GetRequest} returns this
*/
proto.proto.GetRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetRequest} returns this
 */
proto.proto.GetRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.GetRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetRequest} returns this
 */
proto.proto.GetRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.GetRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetRequest} returns this
 */
proto.proto.GetRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RangeRequest range = 4;
 * @return {?proto.proto.RangeRequest}
 */
proto.proto.GetRequest.prototype.getRange = function() {
  return /** @type{?proto.proto.RangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.RangeRequest, 4));
};


/**
 * @param {?proto.proto.RangeRequest|undefined} value
 * @return {!proto.proto.GetRequest} returns this
*/
proto.proto.GetRequest.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetRequest} returns this
 */
proto.proto.GetRequest.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool thumb = 5;
 * @return {boolean}
 */
proto.proto.GetRequest.prototype.getThumb = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.GetRequest} returns this
 */
proto.proto.GetRequest.prototype.setThumb = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ObjectInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ObjectInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ObjectInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ObjectInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.proto.Object.toObject(includeInstance, f),
    range: (f = msg.getRange()) && proto.proto.RangeRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ObjectInfo}
 */
proto.proto.ObjectInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ObjectInfo;
  return proto.proto.ObjectInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ObjectInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ObjectInfo}
 */
proto.proto.ObjectInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Object;
      reader.readMessage(value,proto.proto.Object.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.proto.RangeRequest;
      reader.readMessage(value,proto.proto.RangeRequest.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ObjectInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ObjectInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ObjectInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ObjectInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Object.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.RangeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object object = 1;
 * @return {?proto.proto.Object}
 */
proto.proto.ObjectInfo.prototype.getObject = function() {
  return /** @type{?proto.proto.Object} */ (
    jspb.Message.getWrapperField(this, proto.proto.Object, 1));
};


/**
 * @param {?proto.proto.Object|undefined} value
 * @return {!proto.proto.ObjectInfo} returns this
*/
proto.proto.ObjectInfo.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ObjectInfo} returns this
 */
proto.proto.ObjectInfo.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ObjectInfo.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RangeRequest range = 2;
 * @return {?proto.proto.RangeRequest}
 */
proto.proto.ObjectInfo.prototype.getRange = function() {
  return /** @type{?proto.proto.RangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.RangeRequest, 2));
};


/**
 * @param {?proto.proto.RangeRequest|undefined} value
 * @return {!proto.proto.ObjectInfo} returns this
*/
proto.proto.ObjectInfo.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ObjectInfo} returns this
 */
proto.proto.ObjectInfo.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ObjectInfo.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.GetResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.GetResponse.OptionCase = {
  OPTION_NOT_SET: 0,
  OBJECT: 1,
  CHUNK: 2
};

/**
 * @return {proto.proto.GetResponse.OptionCase}
 */
proto.proto.GetResponse.prototype.getOptionCase = function() {
  return /** @type {proto.proto.GetResponse.OptionCase} */(jspb.Message.computeOneofCase(this, proto.proto.GetResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.proto.ObjectInfo.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetResponse}
 */
proto.proto.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetResponse;
  return proto.proto.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetResponse}
 */
proto.proto.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ObjectInfo;
      reader.readMessage(value,proto.proto.ObjectInfo.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ObjectInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ObjectInfo object = 1;
 * @return {?proto.proto.ObjectInfo}
 */
proto.proto.GetResponse.prototype.getObject = function() {
  return /** @type{?proto.proto.ObjectInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ObjectInfo, 1));
};


/**
 * @param {?proto.proto.ObjectInfo|undefined} value
 * @return {!proto.proto.GetResponse} returns this
*/
proto.proto.GetResponse.prototype.setObject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.GetResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetResponse} returns this
 */
proto.proto.GetResponse.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.GetResponse.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.GetResponse.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.GetResponse.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.GetResponse} returns this
 */
proto.proto.GetResponse.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.GetResponse} returns this
 */
proto.proto.GetResponse.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.GetResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetResponse.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectResult.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    md5: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastmodified: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectResult}
 */
proto.proto.PutObjectResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectResult;
  return proto.proto.PutObjectResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectResult}
 */
proto.proto.PutObjectResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmodified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.PutObjectResult.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResult} returns this
 */
proto.proto.PutObjectResult.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.PutObjectResult.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResult} returns this
 */
proto.proto.PutObjectResult.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.PutObjectResult.prototype.getLastmodified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectResult} returns this
 */
proto.proto.PutObjectResult.prototype.setLastmodified = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectPartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectPartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectPartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    md5: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentlength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    partid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uploadid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectPartRequest}
 */
proto.proto.PutObjectPartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectPartRequest;
  return proto.proto.PutObjectPartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectPartRequest}
 */
proto.proto.PutObjectPartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContentlength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectPartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentlength();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPartid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.PutObjectPartRequest.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectPartRequest} returns this
 */
proto.proto.PutObjectPartRequest.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.PutObjectPartRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectPartRequest} returns this
 */
proto.proto.PutObjectPartRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 contentLength = 3;
 * @return {number}
 */
proto.proto.PutObjectPartRequest.prototype.getContentlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PutObjectPartRequest} returns this
 */
proto.proto.PutObjectPartRequest.prototype.setContentlength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 partId = 4;
 * @return {number}
 */
proto.proto.PutObjectPartRequest.prototype.getPartid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PutObjectPartRequest} returns this
 */
proto.proto.PutObjectPartRequest.prototype.setPartid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string uploadId = 5;
 * @return {string}
 */
proto.proto.PutObjectPartRequest.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectPartRequest} returns this
 */
proto.proto.PutObjectPartRequest.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectPartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectPartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectPartReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.PutObjectPartRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectPartReq}
 */
proto.proto.PutObjectPartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectPartReq;
  return proto.proto.PutObjectPartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectPartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectPartReq}
 */
proto.proto.PutObjectPartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.PutObjectPartRequest;
      reader.readMessage(value,proto.proto.PutObjectPartRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectPartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectPartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectPartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.PutObjectPartRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PutObjectPartReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PutObjectPartReq} returns this
*/
proto.proto.PutObjectPartReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectPartReq} returns this
 */
proto.proto.PutObjectPartReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectPartReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PutObjectPartRequest request = 2;
 * @return {?proto.proto.PutObjectPartRequest}
 */
proto.proto.PutObjectPartReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.PutObjectPartRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.PutObjectPartRequest, 2));
};


/**
 * @param {?proto.proto.PutObjectPartRequest|undefined} value
 * @return {!proto.proto.PutObjectPartReq} returns this
*/
proto.proto.PutObjectPartReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectPartReq} returns this
 */
proto.proto.PutObjectPartReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectPartReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.PutObjectPartOpt.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.PutObjectPartOpt.OptionCase = {
  OPTION_NOT_SET: 0,
  REQ: 1,
  CHUNK: 2
};

/**
 * @return {proto.proto.PutObjectPartOpt.OptionCase}
 */
proto.proto.PutObjectPartOpt.prototype.getOptionCase = function() {
  return /** @type {proto.proto.PutObjectPartOpt.OptionCase} */(jspb.Message.computeOneofCase(this, proto.proto.PutObjectPartOpt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectPartOpt.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectPartOpt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectPartOpt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartOpt.toObject = function(includeInstance, msg) {
  var f, obj = {
    req: (f = msg.getReq()) && proto.proto.PutObjectPartReq.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectPartOpt}
 */
proto.proto.PutObjectPartOpt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectPartOpt;
  return proto.proto.PutObjectPartOpt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectPartOpt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectPartOpt}
 */
proto.proto.PutObjectPartOpt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.PutObjectPartReq;
      reader.readMessage(value,proto.proto.PutObjectPartReq.deserializeBinaryFromReader);
      msg.setReq(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectPartOpt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectPartOpt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectPartOpt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartOpt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.PutObjectPartReq.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional PutObjectPartReq req = 1;
 * @return {?proto.proto.PutObjectPartReq}
 */
proto.proto.PutObjectPartOpt.prototype.getReq = function() {
  return /** @type{?proto.proto.PutObjectPartReq} */ (
    jspb.Message.getWrapperField(this, proto.proto.PutObjectPartReq, 1));
};


/**
 * @param {?proto.proto.PutObjectPartReq|undefined} value
 * @return {!proto.proto.PutObjectPartOpt} returns this
*/
proto.proto.PutObjectPartOpt.prototype.setReq = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.PutObjectPartOpt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PutObjectPartOpt} returns this
 */
proto.proto.PutObjectPartOpt.prototype.clearReq = function() {
  return this.setReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectPartOpt.prototype.hasReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.PutObjectPartOpt.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.PutObjectPartOpt.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.PutObjectPartOpt.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.PutObjectPartOpt} returns this
 */
proto.proto.PutObjectPartOpt.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.PutObjectPartOpt.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PutObjectPartOpt} returns this
 */
proto.proto.PutObjectPartOpt.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.PutObjectPartOpt.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PutObjectPartOpt.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PutObjectPartResult.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PutObjectPartResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PutObjectPartResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    etag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PutObjectPartResult}
 */
proto.proto.PutObjectPartResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PutObjectPartResult;
  return proto.proto.PutObjectPartResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PutObjectPartResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PutObjectPartResult}
 */
proto.proto.PutObjectPartResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PutObjectPartResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PutObjectPartResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PutObjectPartResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PutObjectPartResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string etag = 1;
 * @return {string}
 */
proto.proto.PutObjectPartResult.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PutObjectPartResult} returns this
 */
proto.proto.PutObjectPartResult.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.proto.PutObjectPartResult.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PutObjectPartResult} returns this
 */
proto.proto.PutObjectPartResult.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListPartsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListPartsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListPartsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uploadid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxparts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    partnumbermarker: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListPartsRequest}
 */
proto.proto.ListPartsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListPartsRequest;
  return proto.proto.ListPartsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListPartsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListPartsRequest}
 */
proto.proto.ListPartsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxparts(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartnumbermarker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListPartsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListPartsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListPartsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxparts();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ListPartsRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListPartsRequest} returns this
 */
proto.proto.ListPartsRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ListPartsRequest.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListPartsRequest} returns this
 */
proto.proto.ListPartsRequest.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 maxParts = 3;
 * @return {number}
 */
proto.proto.ListPartsRequest.prototype.getMaxparts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListPartsRequest} returns this
 */
proto.proto.ListPartsRequest.prototype.setMaxparts = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 partNumberMarker = 4;
 * @return {number}
 */
proto.proto.ListPartsRequest.prototype.getPartnumbermarker = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListPartsRequest} returns this
 */
proto.proto.ListPartsRequest.prototype.setPartnumbermarker = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListPartsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListPartsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListPartsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.ListPartsRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListPartsReq}
 */
proto.proto.ListPartsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListPartsReq;
  return proto.proto.ListPartsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListPartsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListPartsReq}
 */
proto.proto.ListPartsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.ListPartsRequest;
      reader.readMessage(value,proto.proto.ListPartsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListPartsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListPartsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListPartsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ListPartsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.ListPartsReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.ListPartsReq} returns this
*/
proto.proto.ListPartsReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListPartsReq} returns this
 */
proto.proto.ListPartsReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListPartsReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ListPartsRequest request = 2;
 * @return {?proto.proto.ListPartsRequest}
 */
proto.proto.ListPartsReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.ListPartsRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.ListPartsRequest, 2));
};


/**
 * @param {?proto.proto.ListPartsRequest|undefined} value
 * @return {!proto.proto.ListPartsReq} returns this
*/
proto.proto.ListPartsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListPartsReq} returns this
 */
proto.proto.ListPartsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListPartsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
    partnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    etag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Part}
 */
proto.proto.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Part;
  return proto.proto.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Part}
 */
proto.proto.Part.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmodified(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Part.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartnumber();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 partNumber = 1;
 * @return {number}
 */
proto.proto.Part.prototype.getPartnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Part} returns this
 */
proto.proto.Part.prototype.setPartnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.Part.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Part} returns this
 */
proto.proto.Part.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.Part.prototype.getLastmodified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Part} returns this
 */
proto.proto.Part.prototype.setLastmodified = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.Part.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Part} returns this
 */
proto.proto.Part.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ListPartsResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListPartsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListPartsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListPartsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uploadid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partnumbermarker: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nextpartnumbermarker: jspb.Message.getFieldWithDefault(msg, 4, 0),
    istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.proto.Part.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListPartsResponse}
 */
proto.proto.ListPartsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListPartsResponse;
  return proto.proto.ListPartsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListPartsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListPartsResponse}
 */
proto.proto.ListPartsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartnumbermarker(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextpartnumbermarker(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstruncated(value);
      break;
    case 6:
      var value = new proto.proto.Part;
      reader.readMessage(value,proto.proto.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListPartsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListPartsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListPartsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListPartsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNextpartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.Part.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ListPartsResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ListPartsResponse.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 partNumberMarker = 3;
 * @return {number}
 */
proto.proto.ListPartsResponse.prototype.getPartnumbermarker = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.setPartnumbermarker = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 nextPartNumberMarker = 4;
 * @return {number}
 */
proto.proto.ListPartsResponse.prototype.getNextpartnumbermarker = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.setNextpartnumbermarker = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool isTruncated = 5;
 * @return {boolean}
 */
proto.proto.ListPartsResponse.prototype.getIstruncated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.setIstruncated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated Part parts = 6;
 * @return {!Array<!proto.proto.Part>}
 */
proto.proto.ListPartsResponse.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.proto.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Part, 6));
};


/**
 * @param {!Array<!proto.proto.Part>} value
 * @return {!proto.proto.ListPartsResponse} returns this
*/
proto.proto.ListPartsResponse.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Part}
 */
proto.proto.ListPartsResponse.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListPartsResponse} returns this
 */
proto.proto.ListPartsResponse.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Upload.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Upload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Upload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Upload.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uploadid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Upload}
 */
proto.proto.Upload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Upload;
  return proto.proto.Upload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Upload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Upload}
 */
proto.proto.Upload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Upload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Upload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Upload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Upload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.Upload.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Upload} returns this
 */
proto.proto.Upload.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.Upload.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Upload} returns this
 */
proto.proto.Upload.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListObjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListObjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListObjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delimiter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    encodingType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    maxKeys: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startAfter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    continuationToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    versionIdMarker: jspb.Message.getFieldWithDefault(msg, 7, ""),
    keyMarker: jspb.Message.getFieldWithDefault(msg, 8, ""),
    orderby: jspb.Message.getFieldWithDefault(msg, 9, ""),
    tags: jspb.Message.getFieldWithDefault(msg, 10, ""),
    category: jspb.Message.getFieldWithDefault(msg, 11, 0),
    date: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListObjectsRequest}
 */
proto.proto.ListObjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListObjectsRequest;
  return proto.proto.ListObjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListObjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListObjectsRequest}
 */
proto.proto.ListObjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelimiter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncodingType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxKeys(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartAfter(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationToken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionIdMarker(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyMarker(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTags(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategory(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListObjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListObjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListObjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEncodingType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMaxKeys();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStartAfter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContinuationToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVersionIdMarker();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getKeyMarker();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrderby();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string delimiter = 2;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string encoding_type = 3;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getEncodingType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setEncodingType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 max_keys = 4;
 * @return {number}
 */
proto.proto.ListObjectsRequest.prototype.getMaxKeys = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setMaxKeys = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string start_after = 5;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getStartAfter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setStartAfter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string continuation_token = 6;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getContinuationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setContinuationToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string version_id_marker = 7;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getVersionIdMarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setVersionIdMarker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string key_marker = 8;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getKeyMarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setKeyMarker = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string orderby = 9;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string tags = 10;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getTags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setTags = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 category = 11;
 * @return {number}
 */
proto.proto.ListObjectsRequest.prototype.getCategory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string date = 12;
 * @return {string}
 */
proto.proto.ListObjectsRequest.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsRequest} returns this
 */
proto.proto.ListObjectsRequest.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListObjectsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListObjectsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListObjectsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.ListObjectsRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListObjectsReq}
 */
proto.proto.ListObjectsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListObjectsReq;
  return proto.proto.ListObjectsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListObjectsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListObjectsReq}
 */
proto.proto.ListObjectsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.ListObjectsRequest;
      reader.readMessage(value,proto.proto.ListObjectsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListObjectsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListObjectsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListObjectsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ListObjectsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.ListObjectsReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.ListObjectsReq} returns this
*/
proto.proto.ListObjectsReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListObjectsReq} returns this
 */
proto.proto.ListObjectsReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListObjectsReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ListObjectsRequest request = 2;
 * @return {?proto.proto.ListObjectsRequest}
 */
proto.proto.ListObjectsReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.ListObjectsRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.ListObjectsRequest, 2));
};


/**
 * @param {?proto.proto.ListObjectsRequest|undefined} value
 * @return {!proto.proto.ListObjectsReq} returns this
*/
proto.proto.ListObjectsReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListObjectsReq} returns this
 */
proto.proto.ListObjectsReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListObjectsReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ImageCameraInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ImageCameraInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ImageCameraInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageCameraInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    make: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ImageCameraInfo}
 */
proto.proto.ImageCameraInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ImageCameraInfo;
  return proto.proto.ImageCameraInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ImageCameraInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ImageCameraInfo}
 */
proto.proto.ImageCameraInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMake(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ImageCameraInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ImageCameraInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ImageCameraInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageCameraInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMake();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string make = 1;
 * @return {string}
 */
proto.proto.ImageCameraInfo.prototype.getMake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageCameraInfo} returns this
 */
proto.proto.ImageCameraInfo.prototype.setMake = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.proto.ImageCameraInfo.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageCameraInfo} returns this
 */
proto.proto.ImageCameraInfo.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ImageCameraResolution.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ImageCameraResolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ImageCameraResolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageCameraResolution.toObject = function(includeInstance, msg) {
  var f, obj = {
    weight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ImageCameraResolution}
 */
proto.proto.ImageCameraResolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ImageCameraResolution;
  return proto.proto.ImageCameraResolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ImageCameraResolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ImageCameraResolution}
 */
proto.proto.ImageCameraResolution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ImageCameraResolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ImageCameraResolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ImageCameraResolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageCameraResolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 weight = 1;
 * @return {number}
 */
proto.proto.ImageCameraResolution.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageCameraResolution} returns this
 */
proto.proto.ImageCameraResolution.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.proto.ImageCameraResolution.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ImageCameraResolution} returns this
 */
proto.proto.ImageCameraResolution.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ImageAddition.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ImageAddition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ImageAddition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageAddition.toObject = function(includeInstance, msg) {
  var f, obj = {
    datetime: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iso: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exptime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    aperture: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orientation: jspb.Message.getFieldWithDefault(msg, 5, ""),
    flash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    software: jspb.Message.getFieldWithDefault(msg, 7, ""),
    exposuretime: jspb.Message.getFieldWithDefault(msg, 8, ""),
    focallength: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ImageAddition}
 */
proto.proto.ImageAddition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ImageAddition;
  return proto.proto.ImageAddition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ImageAddition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ImageAddition}
 */
proto.proto.ImageAddition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatetime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExptime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAperture(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrientation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlash(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoftware(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExposuretime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFocallength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ImageAddition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ImageAddition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ImageAddition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageAddition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatetime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExptime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAperture();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrientation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFlash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSoftware();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExposuretime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFocallength();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string dateTime = 1;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getDatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setDatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string iso = 2;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setIso = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string expTime = 3;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getExptime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setExptime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string aperture = 4;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getAperture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setAperture = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string orientation = 5;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getOrientation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setOrientation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string flash = 6;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getFlash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setFlash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string software = 7;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getSoftware = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setSoftware = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string exposureTime = 8;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getExposuretime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setExposuretime = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string focalLength = 9;
 * @return {string}
 */
proto.proto.ImageAddition.prototype.getFocallength = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ImageAddition} returns this
 */
proto.proto.ImageAddition.prototype.setFocallength = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GpsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GpsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GpsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GpsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pb_long: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GpsInfo}
 */
proto.proto.GpsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GpsInfo;
  return proto.proto.GpsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GpsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GpsInfo}
 */
proto.proto.GpsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLong(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GpsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GpsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GpsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GpsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getLong();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float lat = 1;
 * @return {number}
 */
proto.proto.GpsInfo.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.GpsInfo} returns this
 */
proto.proto.GpsInfo.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float long = 2;
 * @return {number}
 */
proto.proto.GpsInfo.prototype.getLong = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.GpsInfo} returns this
 */
proto.proto.GpsInfo.prototype.setLong = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ImageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ImageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ImageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    camerainfo: (f = msg.getCamerainfo()) && proto.proto.ImageCameraInfo.toObject(includeInstance, f),
    resolution: (f = msg.getResolution()) && proto.proto.ImageCameraResolution.toObject(includeInstance, f),
    gps: (f = msg.getGps()) && proto.proto.GpsInfo.toObject(includeInstance, f),
    addition: (f = msg.getAddition()) && proto.proto.ImageAddition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ImageInfo}
 */
proto.proto.ImageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ImageInfo;
  return proto.proto.ImageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ImageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ImageInfo}
 */
proto.proto.ImageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ImageCameraInfo;
      reader.readMessage(value,proto.proto.ImageCameraInfo.deserializeBinaryFromReader);
      msg.setCamerainfo(value);
      break;
    case 2:
      var value = new proto.proto.ImageCameraResolution;
      reader.readMessage(value,proto.proto.ImageCameraResolution.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = new proto.proto.GpsInfo;
      reader.readMessage(value,proto.proto.GpsInfo.deserializeBinaryFromReader);
      msg.setGps(value);
      break;
    case 4:
      var value = new proto.proto.ImageAddition;
      reader.readMessage(value,proto.proto.ImageAddition.deserializeBinaryFromReader);
      msg.setAddition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ImageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ImageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ImageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ImageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamerainfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ImageCameraInfo.serializeBinaryToWriter
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ImageCameraResolution.serializeBinaryToWriter
    );
  }
  f = message.getGps();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.GpsInfo.serializeBinaryToWriter
    );
  }
  f = message.getAddition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.ImageAddition.serializeBinaryToWriter
    );
  }
};


/**
 * optional ImageCameraInfo cameraInfo = 1;
 * @return {?proto.proto.ImageCameraInfo}
 */
proto.proto.ImageInfo.prototype.getCamerainfo = function() {
  return /** @type{?proto.proto.ImageCameraInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageCameraInfo, 1));
};


/**
 * @param {?proto.proto.ImageCameraInfo|undefined} value
 * @return {!proto.proto.ImageInfo} returns this
*/
proto.proto.ImageInfo.prototype.setCamerainfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ImageInfo} returns this
 */
proto.proto.ImageInfo.prototype.clearCamerainfo = function() {
  return this.setCamerainfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageInfo.prototype.hasCamerainfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImageCameraResolution resolution = 2;
 * @return {?proto.proto.ImageCameraResolution}
 */
proto.proto.ImageInfo.prototype.getResolution = function() {
  return /** @type{?proto.proto.ImageCameraResolution} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageCameraResolution, 2));
};


/**
 * @param {?proto.proto.ImageCameraResolution|undefined} value
 * @return {!proto.proto.ImageInfo} returns this
*/
proto.proto.ImageInfo.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ImageInfo} returns this
 */
proto.proto.ImageInfo.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageInfo.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GpsInfo gps = 3;
 * @return {?proto.proto.GpsInfo}
 */
proto.proto.ImageInfo.prototype.getGps = function() {
  return /** @type{?proto.proto.GpsInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.GpsInfo, 3));
};


/**
 * @param {?proto.proto.GpsInfo|undefined} value
 * @return {!proto.proto.ImageInfo} returns this
*/
proto.proto.ImageInfo.prototype.setGps = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ImageInfo} returns this
 */
proto.proto.ImageInfo.prototype.clearGps = function() {
  return this.setGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageInfo.prototype.hasGps = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ImageAddition addition = 4;
 * @return {?proto.proto.ImageAddition}
 */
proto.proto.ImageInfo.prototype.getAddition = function() {
  return /** @type{?proto.proto.ImageAddition} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageAddition, 4));
};


/**
 * @param {?proto.proto.ImageAddition|undefined} value
 * @return {!proto.proto.ImageInfo} returns this
*/
proto.proto.ImageInfo.prototype.setAddition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ImageInfo} returns this
 */
proto.proto.ImageInfo.prototype.clearAddition = function() {
  return this.setAddition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ImageInfo.prototype.hasAddition = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Object.repeatedFields_ = [16,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Object.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Object.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Object} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Object.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    etag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contenttype: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ispin: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    ispincyfs: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    pinexp: jspb.Message.getFieldWithDefault(msg, 10, ""),
    cyfsexp: jspb.Message.getFieldWithDefault(msg, 11, ""),
    ood: jspb.Message.getFieldWithDefault(msg, 12, ""),
    ispersistent: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    category: jspb.Message.getFieldWithDefault(msg, 14, 0),
    tags: jspb.Message.getFieldWithDefault(msg, 15, ""),
    nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(),
    proto.proto.NFTInfo.toObject, includeInstance),
    pinningList: jspb.Message.toObjectList(msg.getPinningList(),
    proto.proto.Pinning.toObject, includeInstance),
    images: (f = msg.getImages()) && proto.proto.ImageInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Object}
 */
proto.proto.Object.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Object;
  return proto.proto.Object.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Object} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Object}
 */
proto.proto.Object.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmodified(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspin(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspincyfs(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPinexp(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCyfsexp(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOod(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspersistent(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategory(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTags(value);
      break;
    case 16:
      var value = new proto.proto.NFTInfo;
      reader.readMessage(value,proto.proto.NFTInfo.deserializeBinaryFromReader);
      msg.addNftinfos(value);
      break;
    case 17:
      var value = new proto.proto.Pinning;
      reader.readMessage(value,proto.proto.Pinning.deserializeBinaryFromReader);
      msg.addPinning(value);
      break;
    case 18:
      var value = new proto.proto.ImageInfo;
      reader.readMessage(value,proto.proto.ImageInfo.deserializeBinaryFromReader);
      msg.setImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Object.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Object.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Object} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Object.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIspin();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIspincyfs();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPinexp();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCyfsexp();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOod();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getIspersistent();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.proto.NFTInfo.serializeBinaryToWriter
    );
  }
  f = message.getPinningList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.proto.Pinning.serializeBinaryToWriter
    );
  }
  f = message.getImages();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.proto.ImageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.Object.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.Object.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.Object.prototype.getLastmodified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setLastmodified = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.Object.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string contentType = 5;
 * @return {string}
 */
proto.proto.Object.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cid = 6;
 * @return {string}
 */
proto.proto.Object.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fileId = 7;
 * @return {string}
 */
proto.proto.Object.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool isPin = 8;
 * @return {boolean}
 */
proto.proto.Object.prototype.getIspin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setIspin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool isPinCyfs = 9;
 * @return {boolean}
 */
proto.proto.Object.prototype.getIspincyfs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setIspincyfs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string pinExp = 10;
 * @return {string}
 */
proto.proto.Object.prototype.getPinexp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setPinexp = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string CyfsExp = 11;
 * @return {string}
 */
proto.proto.Object.prototype.getCyfsexp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setCyfsexp = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string OOD = 12;
 * @return {string}
 */
proto.proto.Object.prototype.getOod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setOod = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool isPersistent = 13;
 * @return {boolean}
 */
proto.proto.Object.prototype.getIspersistent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setIspersistent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional int32 category = 14;
 * @return {number}
 */
proto.proto.Object.prototype.getCategory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setCategory = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string tags = 15;
 * @return {string}
 */
proto.proto.Object.prototype.getTags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.setTags = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated NFTInfo nftInfos = 16;
 * @return {!Array<!proto.proto.NFTInfo>}
 */
proto.proto.Object.prototype.getNftinfosList = function() {
  return /** @type{!Array<!proto.proto.NFTInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.NFTInfo, 16));
};


/**
 * @param {!Array<!proto.proto.NFTInfo>} value
 * @return {!proto.proto.Object} returns this
*/
proto.proto.Object.prototype.setNftinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.proto.NFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.NFTInfo}
 */
proto.proto.Object.prototype.addNftinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.proto.NFTInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.clearNftinfosList = function() {
  return this.setNftinfosList([]);
};


/**
 * repeated Pinning pinning = 17;
 * @return {!Array<!proto.proto.Pinning>}
 */
proto.proto.Object.prototype.getPinningList = function() {
  return /** @type{!Array<!proto.proto.Pinning>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Pinning, 17));
};


/**
 * @param {!Array<!proto.proto.Pinning>} value
 * @return {!proto.proto.Object} returns this
*/
proto.proto.Object.prototype.setPinningList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.proto.Pinning=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Pinning}
 */
proto.proto.Object.prototype.addPinning = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.proto.Pinning, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.clearPinningList = function() {
  return this.setPinningList([]);
};


/**
 * optional ImageInfo images = 18;
 * @return {?proto.proto.ImageInfo}
 */
proto.proto.Object.prototype.getImages = function() {
  return /** @type{?proto.proto.ImageInfo} */ (
    jspb.Message.getWrapperField(this, proto.proto.ImageInfo, 18));
};


/**
 * @param {?proto.proto.ImageInfo|undefined} value
 * @return {!proto.proto.Object} returns this
*/
proto.proto.Object.prototype.setImages = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Object} returns this
 */
proto.proto.Object.prototype.clearImages = function() {
  return this.setImages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Object.prototype.hasImages = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.PrefixPin.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PrefixPin.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PrefixPin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PrefixPin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrefixPin.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ispin: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(),
    proto.proto.NFTInfo.toObject, includeInstance),
    pinningList: jspb.Message.toObjectList(msg.getPinningList(),
    proto.proto.Pinning.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PrefixPin}
 */
proto.proto.PrefixPin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PrefixPin;
  return proto.proto.PrefixPin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PrefixPin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PrefixPin}
 */
proto.proto.PrefixPin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspin(value);
      break;
    case 4:
      var value = new proto.proto.NFTInfo;
      reader.readMessage(value,proto.proto.NFTInfo.deserializeBinaryFromReader);
      msg.addNftinfos(value);
      break;
    case 5:
      var value = new proto.proto.Pinning;
      reader.readMessage(value,proto.proto.Pinning.deserializeBinaryFromReader);
      msg.addPinning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PrefixPin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PrefixPin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PrefixPin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrefixPin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIspin();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.proto.NFTInfo.serializeBinaryToWriter
    );
  }
  f = message.getPinningList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.proto.Pinning.serializeBinaryToWriter
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.PrefixPin.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PrefixPin} returns this
 */
proto.proto.PrefixPin.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.PrefixPin.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PrefixPin} returns this
 */
proto.proto.PrefixPin.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isPin = 3;
 * @return {boolean}
 */
proto.proto.PrefixPin.prototype.getIspin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PrefixPin} returns this
 */
proto.proto.PrefixPin.prototype.setIspin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated NFTInfo nftInfos = 4;
 * @return {!Array<!proto.proto.NFTInfo>}
 */
proto.proto.PrefixPin.prototype.getNftinfosList = function() {
  return /** @type{!Array<!proto.proto.NFTInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.NFTInfo, 4));
};


/**
 * @param {!Array<!proto.proto.NFTInfo>} value
 * @return {!proto.proto.PrefixPin} returns this
*/
proto.proto.PrefixPin.prototype.setNftinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.proto.NFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.NFTInfo}
 */
proto.proto.PrefixPin.prototype.addNftinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.NFTInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PrefixPin} returns this
 */
proto.proto.PrefixPin.prototype.clearNftinfosList = function() {
  return this.setNftinfosList([]);
};


/**
 * repeated Pinning pinning = 5;
 * @return {!Array<!proto.proto.Pinning>}
 */
proto.proto.PrefixPin.prototype.getPinningList = function() {
  return /** @type{!Array<!proto.proto.Pinning>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Pinning, 5));
};


/**
 * @param {!Array<!proto.proto.Pinning>} value
 * @return {!proto.proto.PrefixPin} returns this
*/
proto.proto.PrefixPin.prototype.setPinningList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.Pinning=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Pinning}
 */
proto.proto.PrefixPin.prototype.addPinning = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.Pinning, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PrefixPin} returns this
 */
proto.proto.PrefixPin.prototype.clearPinningList = function() {
  return this.setPinningList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ListObjectsResp.repeatedFields_ = [1,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListObjectsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListObjectsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListObjectsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonprefixesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    prefix: jspb.Message.getFieldWithDefault(msg, 3, ""),
    maxkeys: jspb.Message.getFieldWithDefault(msg, 4, 0),
    nextmarker: jspb.Message.getFieldWithDefault(msg, 5, ""),
    continuationtoken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    contentList: jspb.Message.toObjectList(msg.getContentList(),
    proto.proto.Object.toObject, includeInstance),
    prefixpinsList: jspb.Message.toObjectList(msg.getPrefixpinsList(),
    proto.proto.PrefixPin.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListObjectsResp}
 */
proto.proto.ListObjectsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListObjectsResp;
  return proto.proto.ListObjectsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListObjectsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListObjectsResp}
 */
proto.proto.ListObjectsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommonprefixes(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstruncated(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxkeys(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextmarker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    case 7:
      var value = new proto.proto.Object;
      reader.readMessage(value,proto.proto.Object.deserializeBinaryFromReader);
      msg.addContent(value);
      break;
    case 8:
      var value = new proto.proto.PrefixPin;
      reader.readMessage(value,proto.proto.PrefixPin.deserializeBinaryFromReader);
      msg.addPrefixpins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListObjectsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListObjectsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListObjectsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListObjectsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonprefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMaxkeys();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNextmarker();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContinuationtoken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.proto.Object.serializeBinaryToWriter
    );
  }
  f = message.getPrefixpinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.proto.PrefixPin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string commonPrefixes = 1;
 * @return {!Array<string>}
 */
proto.proto.ListObjectsResp.prototype.getCommonprefixesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setCommonprefixesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.addCommonprefixes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.clearCommonprefixesList = function() {
  return this.setCommonprefixesList([]);
};


/**
 * optional bool isTruncated = 2;
 * @return {boolean}
 */
proto.proto.ListObjectsResp.prototype.getIstruncated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setIstruncated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string prefix = 3;
 * @return {string}
 */
proto.proto.ListObjectsResp.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 maxKeys = 4;
 * @return {number}
 */
proto.proto.ListObjectsResp.prototype.getMaxkeys = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setMaxkeys = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string nextMarker = 5;
 * @return {string}
 */
proto.proto.ListObjectsResp.prototype.getNextmarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setNextmarker = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string continuationToken = 6;
 * @return {string}
 */
proto.proto.ListObjectsResp.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Object content = 7;
 * @return {!Array<!proto.proto.Object>}
 */
proto.proto.ListObjectsResp.prototype.getContentList = function() {
  return /** @type{!Array<!proto.proto.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Object, 7));
};


/**
 * @param {!Array<!proto.proto.Object>} value
 * @return {!proto.proto.ListObjectsResp} returns this
*/
proto.proto.ListObjectsResp.prototype.setContentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.proto.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Object}
 */
proto.proto.ListObjectsResp.prototype.addContent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.proto.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.clearContentList = function() {
  return this.setContentList([]);
};


/**
 * repeated PrefixPin prefixpins = 8;
 * @return {!Array<!proto.proto.PrefixPin>}
 */
proto.proto.ListObjectsResp.prototype.getPrefixpinsList = function() {
  return /** @type{!Array<!proto.proto.PrefixPin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.PrefixPin, 8));
};


/**
 * @param {!Array<!proto.proto.PrefixPin>} value
 * @return {!proto.proto.ListObjectsResp} returns this
*/
proto.proto.ListObjectsResp.prototype.setPrefixpinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.proto.PrefixPin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.PrefixPin}
 */
proto.proto.ListObjectsResp.prototype.addPrefixpins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.PrefixPin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListObjectsResp} returns this
 */
proto.proto.ListObjectsResp.prototype.clearPrefixpinsList = function() {
  return this.setPrefixpinsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Pinning.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Pinning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Pinning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Pinning.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Pinning}
 */
proto.proto.Pinning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Pinning;
  return proto.proto.Pinning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Pinning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Pinning}
 */
proto.proto.Pinning.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Pinning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Pinning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Pinning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Pinning.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string requestID = 1;
 * @return {string}
 */
proto.proto.Pinning.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Pinning} returns this
 */
proto.proto.Pinning.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delimiter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    encodingtype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxuploads: jspb.Message.getFieldWithDefault(msg, 3, 0),
    keymarker: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 5, ""),
    uploadidmarker: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListUploadRequest}
 */
proto.proto.ListUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListUploadRequest;
  return proto.proto.ListUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListUploadRequest}
 */
proto.proto.ListUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelimiter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncodingtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxuploads(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeymarker(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadidmarker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEncodingtype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxuploads();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getKeymarker();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUploadidmarker();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string delimiter = 1;
 * @return {string}
 */
proto.proto.ListUploadRequest.prototype.getDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string encodingType = 2;
 * @return {string}
 */
proto.proto.ListUploadRequest.prototype.getEncodingtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setEncodingtype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 maxUploads = 3;
 * @return {number}
 */
proto.proto.ListUploadRequest.prototype.getMaxuploads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setMaxuploads = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string keyMarker = 4;
 * @return {string}
 */
proto.proto.ListUploadRequest.prototype.getKeymarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setKeymarker = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string prefix = 5;
 * @return {string}
 */
proto.proto.ListUploadRequest.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string uploadIdMarker = 6;
 * @return {string}
 */
proto.proto.ListUploadRequest.prototype.getUploadidmarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListUploadRequest} returns this
 */
proto.proto.ListUploadRequest.prototype.setUploadidmarker = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListUploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.ListUploadRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListUploadReq}
 */
proto.proto.ListUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListUploadReq;
  return proto.proto.ListUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListUploadReq}
 */
proto.proto.ListUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.ListUploadRequest;
      reader.readMessage(value,proto.proto.ListUploadRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListUploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ListUploadRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.ListUploadReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.ListUploadReq} returns this
*/
proto.proto.ListUploadReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListUploadReq} returns this
 */
proto.proto.ListUploadReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListUploadReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ListUploadRequest request = 2;
 * @return {?proto.proto.ListUploadRequest}
 */
proto.proto.ListUploadReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.ListUploadRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.ListUploadRequest, 2));
};


/**
 * @param {?proto.proto.ListUploadRequest|undefined} value
 * @return {!proto.proto.ListUploadReq} returns this
*/
proto.proto.ListUploadReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ListUploadReq} returns this
 */
proto.proto.ListUploadReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ListUploadReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ListMultipartUploadResponse.repeatedFields_ = [8,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ListMultipartUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ListMultipartUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ListMultipartUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListMultipartUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    keymarker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uploadidmarker: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nextkeymarker: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nextuploadidmarker: jspb.Message.getFieldWithDefault(msg, 5, ""),
    maxuploads: jspb.Message.getFieldWithDefault(msg, 6, 0),
    istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    uploadsList: jspb.Message.toObjectList(msg.getUploadsList(),
    proto.proto.Upload.toObject, includeInstance),
    delimiter: jspb.Message.getFieldWithDefault(msg, 9, ""),
    commonprefixesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ListMultipartUploadResponse}
 */
proto.proto.ListMultipartUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ListMultipartUploadResponse;
  return proto.proto.ListMultipartUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ListMultipartUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ListMultipartUploadResponse}
 */
proto.proto.ListMultipartUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeymarker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadidmarker(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextkeymarker(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextuploadidmarker(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxuploads(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstruncated(value);
      break;
    case 8:
      var value = new proto.proto.Upload;
      reader.readMessage(value,proto.proto.Upload.deserializeBinaryFromReader);
      msg.addUploads(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelimiter(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommonprefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ListMultipartUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ListMultipartUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ListMultipartUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ListMultipartUploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeymarker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUploadidmarker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNextkeymarker();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNextuploadidmarker();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMaxuploads();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUploadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.proto.Upload.serializeBinaryToWriter
    );
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCommonprefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string keyMarker = 2;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getKeymarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setKeymarker = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string UploadIdMarker = 3;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getUploadidmarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setUploadidmarker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string NextKeyMarker = 4;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getNextkeymarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setNextkeymarker = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string NextUploadIdMarker = 5;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getNextuploadidmarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setNextuploadidmarker = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 MaxUploads = 6;
 * @return {number}
 */
proto.proto.ListMultipartUploadResponse.prototype.getMaxuploads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setMaxuploads = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool isTruncated = 7;
 * @return {boolean}
 */
proto.proto.ListMultipartUploadResponse.prototype.getIstruncated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setIstruncated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated Upload uploads = 8;
 * @return {!Array<!proto.proto.Upload>}
 */
proto.proto.ListMultipartUploadResponse.prototype.getUploadsList = function() {
  return /** @type{!Array<!proto.proto.Upload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Upload, 8));
};


/**
 * @param {!Array<!proto.proto.Upload>} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
*/
proto.proto.ListMultipartUploadResponse.prototype.setUploadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.proto.Upload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Upload}
 */
proto.proto.ListMultipartUploadResponse.prototype.addUploads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.Upload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.clearUploadsList = function() {
  return this.setUploadsList([]);
};


/**
 * optional string delimiter = 9;
 * @return {string}
 */
proto.proto.ListMultipartUploadResponse.prototype.getDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string commonPrefixes = 10;
 * @return {!Array<string>}
 */
proto.proto.ListMultipartUploadResponse.prototype.getCommonprefixesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.setCommonprefixesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.addCommonprefixes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ListMultipartUploadResponse} returns this
 */
proto.proto.ListMultipartUploadResponse.prototype.clearCommonprefixesList = function() {
  return this.setCommonprefixesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UnpinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UnpinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UnpinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UnpinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stype: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UnpinRequest}
 */
proto.proto.UnpinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UnpinRequest;
  return proto.proto.UnpinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UnpinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UnpinRequest}
 */
proto.proto.UnpinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UnpinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UnpinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UnpinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UnpinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.UnpinRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.UnpinRequest} returns this
 */
proto.proto.UnpinRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stype = 2;
 * @return {string}
 */
proto.proto.UnpinRequest.prototype.getStype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.UnpinRequest} returns this
 */
proto.proto.UnpinRequest.prototype.setStype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UnPinReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UnPinReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UnPinReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UnPinReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.UnpinRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UnPinReq}
 */
proto.proto.UnPinReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UnPinReq;
  return proto.proto.UnPinReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UnPinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UnPinReq}
 */
proto.proto.UnPinReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.UnpinRequest;
      reader.readMessage(value,proto.proto.UnpinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UnPinReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UnPinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UnPinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UnPinReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.UnpinRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.UnPinReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.UnPinReq} returns this
*/
proto.proto.UnPinReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.UnPinReq} returns this
 */
proto.proto.UnPinReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.UnPinReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UnpinRequest request = 2;
 * @return {?proto.proto.UnpinRequest}
 */
proto.proto.UnPinReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.UnpinRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.UnpinRequest, 2));
};


/**
 * @param {?proto.proto.UnpinRequest|undefined} value
 * @return {!proto.proto.UnPinReq} returns this
*/
proto.proto.UnPinReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.UnPinReq} returns this
 */
proto.proto.UnPinReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.UnPinReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pin: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isdir: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    key: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PinRequest}
 */
proto.proto.PinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PinRequest;
  return proto.proto.PinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PinRequest}
 */
proto.proto.PinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPin(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdir(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPin();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsdir();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.PinRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stype = 2;
 * @return {string}
 */
proto.proto.PinRequest.prototype.getStype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setStype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 exp = 3;
 * @return {number}
 */
proto.proto.PinRequest.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setExp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool pin = 4;
 * @return {boolean}
 */
proto.proto.PinRequest.prototype.getPin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setPin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool isDir = 5;
 * @return {boolean}
 */
proto.proto.PinRequest.prototype.getIsdir = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setIsdir = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string key = 6;
 * @return {string}
 */
proto.proto.PinRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinRequest} returns this
 */
proto.proto.PinRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PinResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PinResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PinResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PinResp}
 */
proto.proto.PinResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PinResp;
  return proto.proto.PinResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PinResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PinResp}
 */
proto.proto.PinResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PinResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PinResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PinResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.PinResp.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinResp} returns this
 */
proto.proto.PinResp.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.PinResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PinResp} returns this
 */
proto.proto.PinResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PinReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PinReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PinReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.PinRequest.toObject(includeInstance, f),
    pay: (f = msg.getPay()) && proto.proto.PinPay.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PinReq}
 */
proto.proto.PinReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PinReq;
  return proto.proto.PinReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PinReq}
 */
proto.proto.PinReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.PinRequest;
      reader.readMessage(value,proto.proto.PinRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 3:
      var value = new proto.proto.PinPay;
      reader.readMessage(value,proto.proto.PinPay.deserializeBinaryFromReader);
      msg.setPay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PinReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PinReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.PinRequest.serializeBinaryToWriter
    );
  }
  f = message.getPay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.PinPay.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PinReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PinReq} returns this
*/
proto.proto.PinReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PinReq} returns this
 */
proto.proto.PinReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PinReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PinRequest request = 2;
 * @return {?proto.proto.PinRequest}
 */
proto.proto.PinReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.PinRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.PinRequest, 2));
};


/**
 * @param {?proto.proto.PinRequest|undefined} value
 * @return {!proto.proto.PinReq} returns this
*/
proto.proto.PinReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PinReq} returns this
 */
proto.proto.PinReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PinReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PinPay pay = 3;
 * @return {?proto.proto.PinPay}
 */
proto.proto.PinReq.prototype.getPay = function() {
  return /** @type{?proto.proto.PinPay} */ (
    jspb.Message.getWrapperField(this, proto.proto.PinPay, 3));
};


/**
 * @param {?proto.proto.PinPay|undefined} value
 * @return {!proto.proto.PinReq} returns this
*/
proto.proto.PinReq.prototype.setPay = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PinReq} returns this
 */
proto.proto.PinReq.prototype.clearPay = function() {
  return this.setPay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PinReq.prototype.hasPay = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PeerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PeerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PeerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PeerInfo}
 */
proto.proto.PeerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PeerInfo;
  return proto.proto.PeerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PeerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PeerInfo}
 */
proto.proto.PeerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PeerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PeerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PeerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PeerInfo.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PeerInfo} returns this
*/
proto.proto.PeerInfo.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PeerInfo} returns this
 */
proto.proto.PeerInfo.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PeerInfo.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.PeerIds.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PeerIds.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PeerIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PeerIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PeerIds}
 */
proto.proto.PeerIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PeerIds;
  return proto.proto.PeerIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PeerIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PeerIds}
 */
proto.proto.PeerIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PeerIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PeerIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PeerIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.proto.PeerIds.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.PeerIds} returns this
 */
proto.proto.PeerIds.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.PeerIds} returns this
 */
proto.proto.PeerIds.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PeerIds} returns this
 */
proto.proto.PeerIds.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.PeerInfoResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PeerInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PeerInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PeerInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerinfosList: jspb.Message.toObjectList(msg.getPeerinfosList(),
    proto.proto.Header.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PeerInfoResp}
 */
proto.proto.PeerInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PeerInfoResp;
  return proto.proto.PeerInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PeerInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PeerInfoResp}
 */
proto.proto.PeerInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.addPeerinfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PeerInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PeerInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PeerInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PeerInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Header peerInfos = 1;
 * @return {!Array<!proto.proto.Header>}
 */
proto.proto.PeerInfoResp.prototype.getPeerinfosList = function() {
  return /** @type{!Array<!proto.proto.Header>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {!Array<!proto.proto.Header>} value
 * @return {!proto.proto.PeerInfoResp} returns this
*/
proto.proto.PeerInfoResp.prototype.setPeerinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Header=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Header}
 */
proto.proto.PeerInfoResp.prototype.addPeerinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Header, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PeerInfoResp} returns this
 */
proto.proto.PeerInfoResp.prototype.clearPeerinfosList = function() {
  return this.setPeerinfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DeletePeerIdResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeletePeerIdResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeletePeerIdResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeletePeerIdResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DeletePeerIdResp}
 */
proto.proto.DeletePeerIdResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeletePeerIdResp;
  return proto.proto.DeletePeerIdResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeletePeerIdResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeletePeerIdResp}
 */
proto.proto.DeletePeerIdResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DeletePeerIdResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeletePeerIdResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeletePeerIdResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeletePeerIdResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.DeletePeerIdResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeletePeerIdResp} returns this
 */
proto.proto.DeletePeerIdResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.proto.DeletePeerIdResp.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeletePeerIdResp} returns this
 */
proto.proto.DeletePeerIdResp.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DeletePeerIdsResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DeletePeerIdsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeletePeerIdsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeletePeerIdsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeletePeerIdsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletesList: jspb.Message.toObjectList(msg.getDeletesList(),
    proto.proto.DeletePeerIdResp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DeletePeerIdsResp}
 */
proto.proto.DeletePeerIdsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeletePeerIdsResp;
  return proto.proto.DeletePeerIdsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeletePeerIdsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeletePeerIdsResp}
 */
proto.proto.DeletePeerIdsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.DeletePeerIdResp;
      reader.readMessage(value,proto.proto.DeletePeerIdResp.deserializeBinaryFromReader);
      msg.addDeletes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DeletePeerIdsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeletePeerIdsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeletePeerIdsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeletePeerIdsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.DeletePeerIdResp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeletePeerIdResp deletes = 1;
 * @return {!Array<!proto.proto.DeletePeerIdResp>}
 */
proto.proto.DeletePeerIdsResp.prototype.getDeletesList = function() {
  return /** @type{!Array<!proto.proto.DeletePeerIdResp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.DeletePeerIdResp, 1));
};


/**
 * @param {!Array<!proto.proto.DeletePeerIdResp>} value
 * @return {!proto.proto.DeletePeerIdsResp} returns this
*/
proto.proto.DeletePeerIdsResp.prototype.setDeletesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.DeletePeerIdResp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.DeletePeerIdResp}
 */
proto.proto.DeletePeerIdsResp.prototype.addDeletes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.DeletePeerIdResp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DeletePeerIdsResp} returns this
 */
proto.proto.DeletePeerIdsResp.prototype.clearDeletesList = function() {
  return this.setDeletesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PingRequest}
 */
proto.proto.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PingRequest;
  return proto.proto.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PingRequest}
 */
proto.proto.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PingRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PingRequest} returns this
*/
proto.proto.PingRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PingRequest} returns this
 */
proto.proto.PingRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PingRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PingResponse}
 */
proto.proto.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PingResponse;
  return proto.proto.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PingResponse}
 */
proto.proto.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.PingResponse.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingResponse} returns this
 */
proto.proto.PingResponse.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PingMinerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PingMinerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PingMinerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMinerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    orderid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PingMinerRequest}
 */
proto.proto.PingMinerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PingMinerRequest;
  return proto.proto.PingMinerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PingMinerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PingMinerRequest}
 */
proto.proto.PingMinerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PingMinerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PingMinerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PingMinerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMinerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PingMinerRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PingMinerRequest} returns this
*/
proto.proto.PingMinerRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PingMinerRequest} returns this
 */
proto.proto.PingMinerRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PingMinerRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string orderID = 2;
 * @return {string}
 */
proto.proto.PingMinerRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingMinerRequest} returns this
 */
proto.proto.PingMinerRequest.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PingMiner.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PingMiner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PingMiner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMiner.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PingMiner}
 */
proto.proto.PingMiner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PingMiner;
  return proto.proto.PingMiner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PingMiner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PingMiner}
 */
proto.proto.PingMiner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PingMiner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PingMiner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PingMiner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMiner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.PingMiner.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingMiner} returns this
 */
proto.proto.PingMiner.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Addr = 2;
 * @return {string}
 */
proto.proto.PingMiner.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingMiner} returns this
 */
proto.proto.PingMiner.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.proto.PingMiner.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingMiner} returns this
 */
proto.proto.PingMiner.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.proto.PingMiner.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PingMiner} returns this
 */
proto.proto.PingMiner.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.PingMinerResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PingMinerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PingMinerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PingMinerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMinerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    minersList: jspb.Message.toObjectList(msg.getMinersList(),
    proto.proto.PingMiner.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PingMinerResponse}
 */
proto.proto.PingMinerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PingMinerResponse;
  return proto.proto.PingMinerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PingMinerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PingMinerResponse}
 */
proto.proto.PingMinerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.PingMiner;
      reader.readMessage(value,proto.proto.PingMiner.deserializeBinaryFromReader);
      msg.addMiners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PingMinerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PingMinerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PingMinerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PingMinerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.PingMiner.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PingMiner miners = 1;
 * @return {!Array<!proto.proto.PingMiner>}
 */
proto.proto.PingMinerResponse.prototype.getMinersList = function() {
  return /** @type{!Array<!proto.proto.PingMiner>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.PingMiner, 1));
};


/**
 * @param {!Array<!proto.proto.PingMiner>} value
 * @return {!proto.proto.PingMinerResponse} returns this
*/
proto.proto.PingMinerResponse.prototype.setMinersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.PingMiner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.PingMiner}
 */
proto.proto.PingMinerResponse.prototype.addMiners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.PingMiner, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PingMinerResponse} returns this
 */
proto.proto.PingMinerResponse.prototype.clearMinersList = function() {
  return this.setMinersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.FindRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FindRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FindRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FindRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.FindRequest}
 */
proto.proto.FindRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FindRequest;
  return proto.proto.FindRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FindRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FindRequest}
 */
proto.proto.FindRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.FindRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FindRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FindRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FindRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.FindRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.FindRequest} returns this
*/
proto.proto.FindRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FindRequest} returns this
 */
proto.proto.FindRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FindRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.FindRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FindRequest} returns this
 */
proto.proto.FindRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.FindRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FindRequest} returns this
 */
proto.proto.FindRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fileId = 4;
 * @return {string}
 */
proto.proto.FindRequest.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FindRequest} returns this
 */
proto.proto.FindRequest.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string prefix = 5;
 * @return {string}
 */
proto.proto.FindRequest.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FindRequest} returns this
 */
proto.proto.FindRequest.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Objects.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Objects.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Objects.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Objects} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Objects.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentsList: jspb.Message.toObjectList(msg.getContentsList(),
    proto.proto.Object.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Objects}
 */
proto.proto.Objects.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Objects;
  return proto.proto.Objects.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Objects} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Objects}
 */
proto.proto.Objects.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Object;
      reader.readMessage(value,proto.proto.Object.deserializeBinaryFromReader);
      msg.addContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Objects.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Objects.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Objects} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Objects.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Object.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object contents = 1;
 * @return {!Array<!proto.proto.Object>}
 */
proto.proto.Objects.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.proto.Object>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Object, 1));
};


/**
 * @param {!Array<!proto.proto.Object>} value
 * @return {!proto.proto.Objects} returns this
*/
proto.proto.Objects.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Object=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Object}
 */
proto.proto.Objects.prototype.addContents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Object, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Objects} returns this
 */
proto.proto.Objects.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Links.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Links.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Links.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Links} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Links.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.proto.Link.toObject(includeInstance, f),
    linksList: jspb.Message.toObjectList(msg.getLinksList(),
    proto.proto.Link.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Links}
 */
proto.proto.Links.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Links;
  return proto.proto.Links.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Links} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Links}
 */
proto.proto.Links.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Link;
      reader.readMessage(value,proto.proto.Link.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.proto.Link;
      reader.readMessage(value,proto.proto.Link.deserializeBinaryFromReader);
      msg.addLinks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Links.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Links.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Links} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Links.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Link.serializeBinaryToWriter
    );
  }
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.Link.serializeBinaryToWriter
    );
  }
};


/**
 * optional Link meta = 1;
 * @return {?proto.proto.Link}
 */
proto.proto.Links.prototype.getMeta = function() {
  return /** @type{?proto.proto.Link} */ (
    jspb.Message.getWrapperField(this, proto.proto.Link, 1));
};


/**
 * @param {?proto.proto.Link|undefined} value
 * @return {!proto.proto.Links} returns this
*/
proto.proto.Links.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.Links} returns this
 */
proto.proto.Links.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Links.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Link links = 2;
 * @return {!Array<!proto.proto.Link>}
 */
proto.proto.Links.prototype.getLinksList = function() {
  return /** @type{!Array<!proto.proto.Link>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Link, 2));
};


/**
 * @param {!Array<!proto.proto.Link>} value
 * @return {!proto.proto.Links} returns this
*/
proto.proto.Links.prototype.setLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.Link=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Link}
 */
proto.proto.Links.prototype.addLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.Link, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Links} returns this
 */
proto.proto.Links.prototype.clearLinksList = function() {
  return this.setLinksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Link.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Link.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Link} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Link.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Link}
 */
proto.proto.Link.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Link;
  return proto.proto.Link.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Link} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Link}
 */
proto.proto.Link.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Link.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Link.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Link} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Link.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.proto.Link.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Link} returns this
 */
proto.proto.Link.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.proto.Link.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Link} returns this
 */
proto.proto.Link.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.proto.Link.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Link} returns this
 */
proto.proto.Link.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.proto.Link.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Link} returns this
 */
proto.proto.Link.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.proto.Link.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Link} returns this
 */
proto.proto.Link.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SearchRequest}
 */
proto.proto.SearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SearchRequest;
  return proto.proto.SearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SearchRequest}
 */
proto.proto.SearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.SearchRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.SearchRequest} returns this
*/
proto.proto.SearchRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SearchRequest} returns this
 */
proto.proto.SearchRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SearchRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.SearchRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SearchRequest} returns this
 */
proto.proto.SearchRequest.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.SearchRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SearchRequest} returns this
 */
proto.proto.SearchRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.SearchResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.proto.SearchResponse.OptionCase = {
  OPTION_NOT_SET: 0,
  OBJECT: 1,
  LINKS: 2,
  CHUNK: 3
};

/**
 * @return {proto.proto.SearchResponse.OptionCase}
 */
proto.proto.SearchResponse.prototype.getOptionCase = function() {
  return /** @type {proto.proto.SearchResponse.OptionCase} */(jspb.Message.computeOneofCase(this, proto.proto.SearchResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.proto.Link.toObject(includeInstance, f),
    links: (f = msg.getLinks()) && proto.proto.Links.toObject(includeInstance, f),
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SearchResponse}
 */
proto.proto.SearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SearchResponse;
  return proto.proto.SearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SearchResponse}
 */
proto.proto.SearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Link;
      reader.readMessage(value,proto.proto.Link.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.proto.Links;
      reader.readMessage(value,proto.proto.Links.deserializeBinaryFromReader);
      msg.setLinks(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Link.serializeBinaryToWriter
    );
  }
  f = message.getLinks();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Links.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional Link object = 1;
 * @return {?proto.proto.Link}
 */
proto.proto.SearchResponse.prototype.getObject = function() {
  return /** @type{?proto.proto.Link} */ (
    jspb.Message.getWrapperField(this, proto.proto.Link, 1));
};


/**
 * @param {?proto.proto.Link|undefined} value
 * @return {!proto.proto.SearchResponse} returns this
*/
proto.proto.SearchResponse.prototype.setObject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.SearchResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SearchResponse} returns this
 */
proto.proto.SearchResponse.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SearchResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Links links = 2;
 * @return {?proto.proto.Links}
 */
proto.proto.SearchResponse.prototype.getLinks = function() {
  return /** @type{?proto.proto.Links} */ (
    jspb.Message.getWrapperField(this, proto.proto.Links, 2));
};


/**
 * @param {?proto.proto.Links|undefined} value
 * @return {!proto.proto.SearchResponse} returns this
*/
proto.proto.SearchResponse.prototype.setLinks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.SearchResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SearchResponse} returns this
 */
proto.proto.SearchResponse.prototype.clearLinks = function() {
  return this.setLinks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SearchResponse.prototype.hasLinks = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes chunk = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.SearchResponse.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes chunk = 3;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.SearchResponse.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.SearchResponse.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.SearchResponse} returns this
 */
proto.proto.SearchResponse.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.proto.SearchResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.SearchResponse} returns this
 */
proto.proto.SearchResponse.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 3, proto.proto.SearchResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SearchResponse.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.RequestSummaryIds.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RequestSummaryIds.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RequestSummaryIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RequestSummaryIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RequestSummaryIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    idsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RequestSummaryIds}
 */
proto.proto.RequestSummaryIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RequestSummaryIds;
  return proto.proto.RequestSummaryIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RequestSummaryIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RequestSummaryIds}
 */
proto.proto.RequestSummaryIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RequestSummaryIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RequestSummaryIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RequestSummaryIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RequestSummaryIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.RequestSummaryIds.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.RequestSummaryIds} returns this
*/
proto.proto.RequestSummaryIds.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.RequestSummaryIds} returns this
 */
proto.proto.RequestSummaryIds.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RequestSummaryIds.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string ids = 2;
 * @return {!Array<string>}
 */
proto.proto.RequestSummaryIds.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.RequestSummaryIds} returns this
 */
proto.proto.RequestSummaryIds.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.RequestSummaryIds} returns this
 */
proto.proto.RequestSummaryIds.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.RequestSummaryIds} returns this
 */
proto.proto.RequestSummaryIds.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SummaryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SummaryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SummaryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SummaryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SummaryInfo}
 */
proto.proto.SummaryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SummaryInfo;
  return proto.proto.SummaryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SummaryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SummaryInfo}
 */
proto.proto.SummaryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SummaryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SummaryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SummaryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SummaryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.SummaryInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SummaryInfo} returns this
 */
proto.proto.SummaryInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.proto.SummaryInfo.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SummaryInfo} returns this
 */
proto.proto.SummaryInfo.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.proto.SummaryInfo.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SummaryInfo} returns this
 */
proto.proto.SummaryInfo.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.SummaryInfos.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SummaryInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SummaryInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SummaryInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SummaryInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentsList: jspb.Message.toObjectList(msg.getContentsList(),
    proto.proto.SummaryInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SummaryInfos}
 */
proto.proto.SummaryInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SummaryInfos;
  return proto.proto.SummaryInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SummaryInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SummaryInfos}
 */
proto.proto.SummaryInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.SummaryInfo;
      reader.readMessage(value,proto.proto.SummaryInfo.deserializeBinaryFromReader);
      msg.addContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SummaryInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SummaryInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SummaryInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SummaryInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.SummaryInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SummaryInfo contents = 1;
 * @return {!Array<!proto.proto.SummaryInfo>}
 */
proto.proto.SummaryInfos.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.proto.SummaryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.SummaryInfo, 1));
};


/**
 * @param {!Array<!proto.proto.SummaryInfo>} value
 * @return {!proto.proto.SummaryInfos} returns this
*/
proto.proto.SummaryInfos.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.SummaryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SummaryInfo}
 */
proto.proto.SummaryInfos.prototype.addContents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.SummaryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.SummaryInfos} returns this
 */
proto.proto.SummaryInfos.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RenameObject.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RenameObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RenameObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RenameObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    sourceobject: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetobject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filetype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RenameObject}
 */
proto.proto.RenameObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RenameObject;
  return proto.proto.RenameObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RenameObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RenameObject}
 */
proto.proto.RenameObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceobject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetobject(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFiletype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RenameObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RenameObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RenameObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RenameObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getSourceobject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetobject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFiletype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.RenameObject.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.RenameObject} returns this
*/
proto.proto.RenameObject.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.RenameObject} returns this
 */
proto.proto.RenameObject.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.RenameObject.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sourceObject = 2;
 * @return {string}
 */
proto.proto.RenameObject.prototype.getSourceobject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.RenameObject} returns this
 */
proto.proto.RenameObject.prototype.setSourceobject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string targetObject = 3;
 * @return {string}
 */
proto.proto.RenameObject.prototype.getTargetobject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.RenameObject} returns this
 */
proto.proto.RenameObject.prototype.setTargetobject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 fileType = 4;
 * @return {number}
 */
proto.proto.RenameObject.prototype.getFiletype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RenameObject} returns this
 */
proto.proto.RenameObject.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RenameObjectResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RenameObjectResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RenameObjectResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RenameObjectResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RenameObjectResp}
 */
proto.proto.RenameObjectResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RenameObjectResp;
  return proto.proto.RenameObjectResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RenameObjectResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RenameObjectResp}
 */
proto.proto.RenameObjectResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RenameObjectResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RenameObjectResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RenameObjectResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RenameObjectResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.proto.RenameObjectResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.RenameObjectResp} returns this
 */
proto.proto.RenameObjectResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TimeLine.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TimeLine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TimeLine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLine.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    interval: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 3, ""),
    category: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TimeLine}
 */
proto.proto.TimeLine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TimeLine;
  return proto.proto.TimeLine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TimeLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TimeLine}
 */
proto.proto.TimeLine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TimeLine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TimeLine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TimeLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.TimeLine.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.TimeLine} returns this
*/
proto.proto.TimeLine.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TimeLine} returns this
 */
proto.proto.TimeLine.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TimeLine.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string interval = 2;
 * @return {string}
 */
proto.proto.TimeLine.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TimeLine} returns this
 */
proto.proto.TimeLine.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date = 3;
 * @return {string}
 */
proto.proto.TimeLine.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TimeLine} returns this
 */
proto.proto.TimeLine.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 category = 4;
 * @return {number}
 */
proto.proto.TimeLine.prototype.getCategory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TimeLine} returns this
 */
proto.proto.TimeLine.prototype.setCategory = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TimeLineResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TimeLineResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TimeLineResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TimeLineResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLineResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentsList: jspb.Message.toObjectList(msg.getContentsList(),
    proto.proto.TimeLineRes.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TimeLineResp}
 */
proto.proto.TimeLineResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TimeLineResp;
  return proto.proto.TimeLineResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TimeLineResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TimeLineResp}
 */
proto.proto.TimeLineResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.TimeLineRes;
      reader.readMessage(value,proto.proto.TimeLineRes.deserializeBinaryFromReader);
      msg.addContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TimeLineResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TimeLineResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TimeLineResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLineResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.TimeLineRes.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TimeLineRes contents = 1;
 * @return {!Array<!proto.proto.TimeLineRes>}
 */
proto.proto.TimeLineResp.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.proto.TimeLineRes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TimeLineRes, 1));
};


/**
 * @param {!Array<!proto.proto.TimeLineRes>} value
 * @return {!proto.proto.TimeLineResp} returns this
*/
proto.proto.TimeLineResp.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.TimeLineRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TimeLineRes}
 */
proto.proto.TimeLineResp.prototype.addContents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.TimeLineRes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.TimeLineResp} returns this
 */
proto.proto.TimeLineResp.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TimeLineRes.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TimeLineRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TimeLineRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLineRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TimeLineRes}
 */
proto.proto.TimeLineRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TimeLineRes;
  return proto.proto.TimeLineRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TimeLineRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TimeLineRes}
 */
proto.proto.TimeLineRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TimeLineRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TimeLineRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TimeLineRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeLineRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.proto.TimeLineRes.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TimeLineRes} returns this
 */
proto.proto.TimeLineRes.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.proto.TimeLineRes.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TimeLineRes} returns this
 */
proto.proto.TimeLineRes.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetInfo}
 */
proto.proto.GetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetInfo;
  return proto.proto.GetInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetInfo}
 */
proto.proto.GetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.GetInfo.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetInfo} returns this
 */
proto.proto.GetInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.GetInfo.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GetInfo} returns this
 */
proto.proto.GetInfo.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.GetRequests.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetRequests.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetRequests.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetRequests} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRequests.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    objsList: jspb.Message.toObjectList(msg.getObjsList(),
    proto.proto.GetInfo.toObject, includeInstance),
    range: (f = msg.getRange()) && proto.proto.RangeRequest.toObject(includeInstance, f),
    prefixesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetRequests}
 */
proto.proto.GetRequests.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetRequests;
  return proto.proto.GetRequests.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetRequests} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetRequests}
 */
proto.proto.GetRequests.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.GetInfo;
      reader.readMessage(value,proto.proto.GetInfo.deserializeBinaryFromReader);
      msg.addObjs(value);
      break;
    case 3:
      var value = new proto.proto.RangeRequest;
      reader.readMessage(value,proto.proto.RangeRequest.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrefixes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetRequests.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetRequests.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetRequests} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetRequests.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getObjsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.GetInfo.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.RangeRequest.serializeBinaryToWriter
    );
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.GetRequests.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.GetRequests} returns this
*/
proto.proto.GetRequests.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetRequests.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GetInfo objs = 2;
 * @return {!Array<!proto.proto.GetInfo>}
 */
proto.proto.GetRequests.prototype.getObjsList = function() {
  return /** @type{!Array<!proto.proto.GetInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.GetInfo, 2));
};


/**
 * @param {!Array<!proto.proto.GetInfo>} value
 * @return {!proto.proto.GetRequests} returns this
*/
proto.proto.GetRequests.prototype.setObjsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.GetInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.GetInfo}
 */
proto.proto.GetRequests.prototype.addObjs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.GetInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.clearObjsList = function() {
  return this.setObjsList([]);
};


/**
 * optional RangeRequest range = 3;
 * @return {?proto.proto.RangeRequest}
 */
proto.proto.GetRequests.prototype.getRange = function() {
  return /** @type{?proto.proto.RangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.RangeRequest, 3));
};


/**
 * @param {?proto.proto.RangeRequest|undefined} value
 * @return {!proto.proto.GetRequests} returns this
*/
proto.proto.GetRequests.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetRequests.prototype.hasRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string prefixes = 4;
 * @return {!Array<string>}
 */
proto.proto.GetRequests.prototype.getPrefixesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.setPrefixesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.addPrefixes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.GetRequests} returns this
 */
proto.proto.GetRequests.prototype.clearPrefixesList = function() {
  return this.setPrefixesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PresignedURL.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PresignedURL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PresignedURL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PresignedURL.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expires: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PresignedURL}
 */
proto.proto.PresignedURL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PresignedURL;
  return proto.proto.PresignedURL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PresignedURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PresignedURL}
 */
proto.proto.PresignedURL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpires(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PresignedURL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PresignedURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PresignedURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PresignedURL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpires();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.PresignedURL.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.PresignedURL} returns this
*/
proto.proto.PresignedURL.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PresignedURL} returns this
 */
proto.proto.PresignedURL.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PresignedURL.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.proto.PresignedURL.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PresignedURL} returns this
 */
proto.proto.PresignedURL.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string method = 3;
 * @return {string}
 */
proto.proto.PresignedURL.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PresignedURL} returns this
 */
proto.proto.PresignedURL.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 expires = 4;
 * @return {number}
 */
proto.proto.PresignedURL.prototype.getExpires = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PresignedURL} returns this
 */
proto.proto.PresignedURL.prototype.setExpires = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PresignedURLResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PresignedURLResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PresignedURLResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PresignedURLResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PresignedURLResp}
 */
proto.proto.PresignedURLResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PresignedURLResp;
  return proto.proto.PresignedURLResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PresignedURLResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PresignedURLResp}
 */
proto.proto.PresignedURLResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PresignedURLResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PresignedURLResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PresignedURLResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PresignedURLResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.proto.PresignedURLResp.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PresignedURLResp} returns this
 */
proto.proto.PresignedURLResp.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contenttype: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.FileInfo}
 */
proto.proto.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileInfo;
  return proto.proto.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileInfo}
 */
proto.proto.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.FileInfo.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.FileInfo} returns this
*/
proto.proto.FileInfo.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.FileInfo} returns this
 */
proto.proto.FileInfo.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileInfo.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.FileInfo.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FileInfo} returns this
 */
proto.proto.FileInfo.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contentType = 3;
 * @return {string}
 */
proto.proto.FileInfo.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.FileInfo} returns this
 */
proto.proto.FileInfo.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.FileInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.FileInfo} returns this
 */
proto.proto.FileInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TouchResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TouchResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TouchResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TouchResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TouchResp}
 */
proto.proto.TouchResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TouchResp;
  return proto.proto.TouchResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TouchResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TouchResp}
 */
proto.proto.TouchResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TouchResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TouchResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TouchResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TouchResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.TouchResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TouchResp} returns this
 */
proto.proto.TouchResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.ChatRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChatReq}
 */
proto.proto.ChatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatReq;
  return proto.proto.ChatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatReq}
 */
proto.proto.ChatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.ChatRequest;
      reader.readMessage(value,proto.proto.ChatRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ChatRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.ChatReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.ChatReq} returns this
*/
proto.proto.ChatReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChatReq} returns this
 */
proto.proto.ChatReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChatReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChatRequest request = 2;
 * @return {?proto.proto.ChatRequest}
 */
proto.proto.ChatReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.ChatRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChatRequest, 2));
};


/**
 * @param {?proto.proto.ChatRequest|undefined} value
 * @return {!proto.proto.ChatReq} returns this
*/
proto.proto.ChatReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChatReq} returns this
 */
proto.proto.ChatReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChatReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vsname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    en: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    model: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chattype: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChatRequest}
 */
proto.proto.ChatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatRequest;
  return proto.proto.ChatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatRequest}
 */
proto.proto.ChatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVsname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChattype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVsname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEn();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChattype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string vsName = 1;
 * @return {string}
 */
proto.proto.ChatRequest.prototype.getVsname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatRequest} returns this
 */
proto.proto.ChatRequest.prototype.setVsname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.proto.ChatRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatRequest} returns this
 */
proto.proto.ChatRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool en = 3;
 * @return {boolean}
 */
proto.proto.ChatRequest.prototype.getEn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChatRequest} returns this
 */
proto.proto.ChatRequest.prototype.setEn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string model = 4;
 * @return {string}
 */
proto.proto.ChatRequest.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatRequest} returns this
 */
proto.proto.ChatRequest.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string chatType = 5;
 * @return {string}
 */
proto.proto.ChatRequest.prototype.getChattype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatRequest} returns this
 */
proto.proto.ChatRequest.prototype.setChattype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sourcedocuments: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChatResponse}
 */
proto.proto.ChatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatResponse;
  return proto.proto.ChatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatResponse}
 */
proto.proto.ChatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcedocuments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourcedocuments();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.proto.ChatResponse.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatResponse} returns this
 */
proto.proto.ChatResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ChatResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatResponse} returns this
 */
proto.proto.ChatResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sourceDocuments = 3;
 * @return {string}
 */
proto.proto.ChatResponse.prototype.getSourcedocuments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChatResponse} returns this
 */
proto.proto.ChatResponse.prototype.setSourcedocuments = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.KNReq.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.KNReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.KNReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.proto.KNRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.KNReq}
 */
proto.proto.KNReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.KNReq;
  return proto.proto.KNReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.KNReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.KNReq}
 */
proto.proto.KNReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.KNRequest;
      reader.readMessage(value,proto.proto.KNRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.KNReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.KNReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.KNReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.KNRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.KNReq.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.KNReq} returns this
*/
proto.proto.KNReq.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.KNReq} returns this
 */
proto.proto.KNReq.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.KNReq.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KNRequest request = 2;
 * @return {?proto.proto.KNRequest}
 */
proto.proto.KNReq.prototype.getRequest = function() {
  return /** @type{?proto.proto.KNRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.KNRequest, 2));
};


/**
 * @param {?proto.proto.KNRequest|undefined} value
 * @return {!proto.proto.KNReq} returns this
*/
proto.proto.KNReq.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.KNReq} returns this
 */
proto.proto.KNReq.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.KNReq.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.KNRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.KNRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.KNRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.KNRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vsname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    method: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.KNRequest}
 */
proto.proto.KNRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.KNRequest;
  return proto.proto.KNRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.KNRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.KNRequest}
 */
proto.proto.KNRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVsname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFiles(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.KNRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.KNRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.KNRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVsname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string vsName = 1;
 * @return {string}
 */
proto.proto.KNRequest.prototype.getVsname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.setVsname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.proto.KNRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.proto.KNRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string files = 4;
 * @return {!Array<string>}
 */
proto.proto.KNRequest.prototype.getFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.setFilesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.addFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * optional string method = 5;
 * @return {string}
 */
proto.proto.KNRequest.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNRequest} returns this
 */
proto.proto.KNRequest.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.KNResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.KNResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.KNResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.KNResponse}
 */
proto.proto.KNResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.KNResponse;
  return proto.proto.KNResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.KNResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.KNResponse}
 */
proto.proto.KNResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.KNResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.KNResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.KNResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KNResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.KNResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNResponse} returns this
 */
proto.proto.KNResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.proto.KNResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.KNResponse} returns this
 */
proto.proto.KNResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Cred.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Cred.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Cred} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Cred.toObject = function(includeInstance, msg) {
  var f, obj = {
    accesskey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secretkey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Cred}
 */
proto.proto.Cred.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Cred;
  return proto.proto.Cred.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Cred} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Cred}
 */
proto.proto.Cred.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Cred.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Cred.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Cred} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Cred.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccesskey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecretkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string accessKey = 1;
 * @return {string}
 */
proto.proto.Cred.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Cred} returns this
 */
proto.proto.Cred.prototype.setAccesskey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secretKey = 2;
 * @return {string}
 */
proto.proto.Cred.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Cred} returns this
 */
proto.proto.Cred.prototype.setSecretkey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CredRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CredRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CredRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    cred: (f = msg.getCred()) && proto.proto.Cred.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CredRequest}
 */
proto.proto.CredRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CredRequest;
  return proto.proto.CredRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CredRequest}
 */
proto.proto.CredRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.Cred;
      reader.readMessage(value,proto.proto.Cred.deserializeBinaryFromReader);
      msg.setCred(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CredRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getCred();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.Cred.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.CredRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.CredRequest} returns this
*/
proto.proto.CredRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CredRequest} returns this
 */
proto.proto.CredRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CredRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Cred cred = 2;
 * @return {?proto.proto.Cred}
 */
proto.proto.CredRequest.prototype.getCred = function() {
  return /** @type{?proto.proto.Cred} */ (
    jspb.Message.getWrapperField(this, proto.proto.Cred, 2));
};


/**
 * @param {?proto.proto.Cred|undefined} value
 * @return {!proto.proto.CredRequest} returns this
*/
proto.proto.CredRequest.prototype.setCred = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CredRequest} returns this
 */
proto.proto.CredRequest.prototype.clearCred = function() {
  return this.setCred(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CredRequest.prototype.hasCred = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CredResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CredResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CredResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CredResp}
 */
proto.proto.CredResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CredResp;
  return proto.proto.CredResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CredResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CredResp}
 */
proto.proto.CredResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CredResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CredResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CredResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.CredResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CredResp} returns this
 */
proto.proto.CredResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetCredRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetCredRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetCredRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetCredRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetCredRequest}
 */
proto.proto.GetCredRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetCredRequest;
  return proto.proto.GetCredRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetCredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetCredRequest}
 */
proto.proto.GetCredRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetCredRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetCredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetCredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetCredRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.GetCredRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.GetCredRequest} returns this
*/
proto.proto.GetCredRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetCredRequest} returns this
 */
proto.proto.GetCredRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetCredRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.CredsList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.CredsList.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CredsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CredsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredsList.toObject = function(includeInstance, msg) {
  var f, obj = {
    credsList: jspb.Message.toObjectList(msg.getCredsList(),
    proto.proto.Cred.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CredsList}
 */
proto.proto.CredsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CredsList;
  return proto.proto.CredsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CredsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CredsList}
 */
proto.proto.CredsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Cred;
      reader.readMessage(value,proto.proto.Cred.deserializeBinaryFromReader);
      msg.addCreds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CredsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CredsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CredsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CredsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Cred.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Cred creds = 1;
 * @return {!Array<!proto.proto.Cred>}
 */
proto.proto.CredsList.prototype.getCredsList = function() {
  return /** @type{!Array<!proto.proto.Cred>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Cred, 1));
};


/**
 * @param {!Array<!proto.proto.Cred>} value
 * @return {!proto.proto.CredsList} returns this
*/
proto.proto.CredsList.prototype.setCredsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Cred=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Cred}
 */
proto.proto.CredsList.prototype.addCreds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Cred, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.CredsList} returns this
 */
proto.proto.CredsList.prototype.clearCredsList = function() {
  return this.setCredsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GeneratePinCredRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GeneratePinCredRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GeneratePinCredRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GeneratePinCredRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GeneratePinCredRequest}
 */
proto.proto.GeneratePinCredRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GeneratePinCredRequest;
  return proto.proto.GeneratePinCredRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GeneratePinCredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GeneratePinCredRequest}
 */
proto.proto.GeneratePinCredRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GeneratePinCredRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GeneratePinCredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GeneratePinCredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GeneratePinCredRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.GeneratePinCredRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.GeneratePinCredRequest} returns this
*/
proto.proto.GeneratePinCredRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GeneratePinCredRequest} returns this
 */
proto.proto.GeneratePinCredRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GeneratePinCredRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GeneratePinCredResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GeneratePinCredResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GeneratePinCredResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GeneratePinCredResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    cred: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GeneratePinCredResp}
 */
proto.proto.GeneratePinCredResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GeneratePinCredResp;
  return proto.proto.GeneratePinCredResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GeneratePinCredResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GeneratePinCredResp}
 */
proto.proto.GeneratePinCredResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCred(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GeneratePinCredResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GeneratePinCredResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GeneratePinCredResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GeneratePinCredResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCred();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cred = 1;
 * @return {string}
 */
proto.proto.GeneratePinCredResp.prototype.getCred = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.GeneratePinCredResp} returns this
 */
proto.proto.GeneratePinCredResp.prototype.setCred = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NFTInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NFTInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NFTInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NFTInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contractid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NFTInfo}
 */
proto.proto.NFTInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NFTInfo;
  return proto.proto.NFTInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NFTInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NFTInfo}
 */
proto.proto.NFTInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NFTInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NFTInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NFTInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NFTInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContractid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.NFTInfo.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.NFTInfo} returns this
 */
proto.proto.NFTInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string contractID = 2;
 * @return {string}
 */
proto.proto.NFTInfo.prototype.getContractid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.NFTInfo} returns this
 */
proto.proto.NFTInfo.prototype.setContractid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tokenID = 3;
 * @return {string}
 */
proto.proto.NFTInfo.prototype.getTokenid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.NFTInfo} returns this
 */
proto.proto.NFTInfo.prototype.setTokenid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.UpdateNFTRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UpdateNFTRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UpdateNFTRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UpdateNFTRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UpdateNFTRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.proto.Header.toObject(includeInstance, f),
    nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(),
    proto.proto.NFTInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UpdateNFTRequest}
 */
proto.proto.UpdateNFTRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UpdateNFTRequest;
  return proto.proto.UpdateNFTRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UpdateNFTRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UpdateNFTRequest}
 */
proto.proto.UpdateNFTRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Header;
      reader.readMessage(value,proto.proto.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.NFTInfo;
      reader.readMessage(value,proto.proto.NFTInfo.deserializeBinaryFromReader);
      msg.addNftinfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UpdateNFTRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UpdateNFTRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UpdateNFTRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UpdateNFTRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Header.serializeBinaryToWriter
    );
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.NFTInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.proto.Header}
 */
proto.proto.UpdateNFTRequest.prototype.getHeader = function() {
  return /** @type{?proto.proto.Header} */ (
    jspb.Message.getWrapperField(this, proto.proto.Header, 1));
};


/**
 * @param {?proto.proto.Header|undefined} value
 * @return {!proto.proto.UpdateNFTRequest} returns this
*/
proto.proto.UpdateNFTRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.UpdateNFTRequest} returns this
 */
proto.proto.UpdateNFTRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.UpdateNFTRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated NFTInfo nftInfos = 2;
 * @return {!Array<!proto.proto.NFTInfo>}
 */
proto.proto.UpdateNFTRequest.prototype.getNftinfosList = function() {
  return /** @type{!Array<!proto.proto.NFTInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.NFTInfo, 2));
};


/**
 * @param {!Array<!proto.proto.NFTInfo>} value
 * @return {!proto.proto.UpdateNFTRequest} returns this
*/
proto.proto.UpdateNFTRequest.prototype.setNftinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.NFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.NFTInfo}
 */
proto.proto.UpdateNFTRequest.prototype.addNftinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.NFTInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.UpdateNFTRequest} returns this
 */
proto.proto.UpdateNFTRequest.prototype.clearNftinfosList = function() {
  return this.setNftinfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UpdateNFTResp.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UpdateNFTResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UpdateNFTResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UpdateNFTResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UpdateNFTResp}
 */
proto.proto.UpdateNFTResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UpdateNFTResp;
  return proto.proto.UpdateNFTResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UpdateNFTResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UpdateNFTResp}
 */
proto.proto.UpdateNFTResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UpdateNFTResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UpdateNFTResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UpdateNFTResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UpdateNFTResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.UpdateNFTResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.UpdateNFTResp} returns this
 */
proto.proto.UpdateNFTResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.proto);
