// source: prox.proto
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
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  return Function('return this')();
}.call(null);

goog.exportSymbol('proto.proto.GetPeerIDReply', null, global);
goog.exportSymbol('proto.proto.GetPeerIdInfoReq', null, global);
goog.exportSymbol('proto.proto.GetProxRequest', null, global);
goog.exportSymbol('proto.proto.GetProxResponse', null, global);
goog.exportSymbol('proto.proto.ProxCategory', null, global);
goog.exportSymbol('proto.proto.ProxChatReq', null, global);
goog.exportSymbol('proto.proto.ProxChatRequest', null, global);
goog.exportSymbol('proto.proto.ProxChatResponse', null, global);
goog.exportSymbol('proto.proto.ProxCompPart', null, global);
goog.exportSymbol('proto.proto.ProxCompleteMultipartReq', null, global);
goog.exportSymbol('proto.proto.ProxCompleteMultipartRequest', null, global);
goog.exportSymbol('proto.proto.ProxCompleteMultipartResp', null, global);
goog.exportSymbol('proto.proto.ProxCompletePartUpload', null, global);
goog.exportSymbol('proto.proto.ProxCred', null, global);
goog.exportSymbol('proto.proto.ProxCredRequest', null, global);
goog.exportSymbol('proto.proto.ProxCredResp', null, global);
goog.exportSymbol('proto.proto.ProxCredsList', null, global);
goog.exportSymbol('proto.proto.ProxDeleteObjectReq', null, global);
goog.exportSymbol('proto.proto.ProxDeleteObjectRequest', null, global);
goog.exportSymbol('proto.proto.ProxDeleteResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetApp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetAppData', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetAppResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetAppResult', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetIOT', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetIOTAmountResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetIOTResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetMiner', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetMinerData', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetMinerResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetMinerResult', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetSpace', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetSpaceResp', null, global);
goog.exportSymbol('proto.proto.ProxF2PGetSpaceResult', null, global);
goog.exportSymbol('proto.proto.ProxFetchPinningRequest', null, global);
goog.exportSymbol('proto.proto.ProxFetchPinningResponse', null, global);
goog.exportSymbol('proto.proto.ProxFetchRequest', null, global);
goog.exportSymbol('proto.proto.ProxFetchResponse', null, global);
goog.exportSymbol('proto.proto.ProxFileInfo', null, global);
goog.exportSymbol('proto.proto.ProxFindRequest', null, global);
goog.exportSymbol('proto.proto.ProxGExtractCode', null, global);
goog.exportSymbol('proto.proto.ProxGExtractCodeResp', null, global);
goog.exportSymbol('proto.proto.ProxGeneratePinCredRequest', null, global);
goog.exportSymbol('proto.proto.ProxGeneratePinCredResp', null, global);
goog.exportSymbol('proto.proto.ProxGetBlockRequest', null, global);
goog.exportSymbol('proto.proto.ProxGetBlockResponse', null, global);
goog.exportSymbol('proto.proto.ProxGetCarMetaRequest', null, global);
goog.exportSymbol('proto.proto.ProxGetCarMetaResponse', null, global);
goog.exportSymbol('proto.proto.ProxGetCredRequest', null, global);
goog.exportSymbol('proto.proto.ProxGetInfo', null, global);
goog.exportSymbol('proto.proto.ProxGetRequest', null, global);
goog.exportSymbol('proto.proto.ProxGetRequests', null, global);
goog.exportSymbol('proto.proto.ProxGetResponse', null, global);
goog.exportSymbol('proto.proto.ProxGetResponse.OptionCase', null, global);
goog.exportSymbol('proto.proto.ProxGpsInfo', null, global);
goog.exportSymbol('proto.proto.ProxHeader', null, global);
goog.exportSymbol('proto.proto.ProxIOTData', null, global);
goog.exportSymbol('proto.proto.ProxIOTInfo', null, global);
goog.exportSymbol('proto.proto.ProxImageAddition', null, global);
goog.exportSymbol('proto.proto.ProxImageCameraInfo', null, global);
goog.exportSymbol('proto.proto.ProxImageCameraResolution', null, global);
goog.exportSymbol('proto.proto.ProxImageInfo', null, global);
goog.exportSymbol('proto.proto.ProxKNReq', null, global);
goog.exportSymbol('proto.proto.ProxKNRequest', null, global);
goog.exportSymbol('proto.proto.ProxKNResponse', null, global);
goog.exportSymbol('proto.proto.ProxLink', null, global);
goog.exportSymbol('proto.proto.ProxLinks', null, global);
goog.exportSymbol('proto.proto.ProxListMultipartUploadResponse', null, global);
goog.exportSymbol('proto.proto.ProxListObjectsReq', null, global);
goog.exportSymbol('proto.proto.ProxListObjectsRequest', null, global);
goog.exportSymbol('proto.proto.ProxListObjectsResp', null, global);
goog.exportSymbol('proto.proto.ProxListPartsReq', null, global);
goog.exportSymbol('proto.proto.ProxListPartsRequest', null, global);
goog.exportSymbol('proto.proto.ProxListPartsResponse', null, global);
goog.exportSymbol('proto.proto.ProxListUploadReq', null, global);
goog.exportSymbol('proto.proto.ProxListUploadRequest', null, global);
goog.exportSymbol('proto.proto.ProxMultipartCreateResp', null, global);
goog.exportSymbol('proto.proto.ProxNFTInfo', null, global);
goog.exportSymbol('proto.proto.ProxObject', null, global);
goog.exportSymbol('proto.proto.ProxObjectInfo', null, global);
goog.exportSymbol('proto.proto.ProxObjects', null, global);
goog.exportSymbol('proto.proto.ProxOrigins', null, global);
goog.exportSymbol('proto.proto.ProxPInfo', null, global);
goog.exportSymbol('proto.proto.ProxPart', null, global);
goog.exportSymbol('proto.proto.ProxPinPay', null, global);
goog.exportSymbol('proto.proto.ProxPinReq', null, global);
goog.exportSymbol('proto.proto.ProxPinRequest', null, global);
goog.exportSymbol('proto.proto.ProxPinResp', null, global);
goog.exportSymbol('proto.proto.ProxPingMiner', null, global);
goog.exportSymbol('proto.proto.ProxPingMinerRequest', null, global);
goog.exportSymbol('proto.proto.ProxPingMinerResponse', null, global);
goog.exportSymbol('proto.proto.ProxPingRequest', null, global);
goog.exportSymbol('proto.proto.ProxPingResponse', null, global);
goog.exportSymbol('proto.proto.ProxPinning', null, global);
goog.exportSymbol('proto.proto.ProxPinningInfo', null, global);
goog.exportSymbol('proto.proto.ProxPinningListRequest', null, global);
goog.exportSymbol('proto.proto.ProxPinningResp', null, global);
goog.exportSymbol('proto.proto.ProxPrefix', null, global);
goog.exportSymbol('proto.proto.ProxPrefixPin', null, global);
goog.exportSymbol('proto.proto.ProxPresignedURL', null, global);
goog.exportSymbol('proto.proto.ProxPresignedURLResp', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectOpt', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectOpt.OptionCase', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectPartOpt', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectPartOpt.OptionCase', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectPartReq', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectPartRequest', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectPartResult', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectReq', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectRequest', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectResp', null, global);
goog.exportSymbol('proto.proto.ProxPutObjectResult', null, global);
goog.exportSymbol('proto.proto.ProxRangeRequest', null, global);
goog.exportSymbol('proto.proto.ProxRenameObject', null, global);
goog.exportSymbol('proto.proto.ProxRenameObjectResp', null, global);
goog.exportSymbol('proto.proto.ProxRequestStatistics', null, global);
goog.exportSymbol('proto.proto.ProxRequestSummaryIds', null, global);
goog.exportSymbol('proto.proto.ProxSearchRequest', null, global);
goog.exportSymbol('proto.proto.ProxSearchResponse', null, global);
goog.exportSymbol('proto.proto.ProxSearchResponse.OptionCase', null, global);
goog.exportSymbol('proto.proto.ProxStagePartRequest', null, global);
goog.exportSymbol('proto.proto.ProxStagePartResponse', null, global);
goog.exportSymbol('proto.proto.ProxStagePin', null, global);
goog.exportSymbol('proto.proto.ProxStageRequest', null, global);
goog.exportSymbol('proto.proto.ProxStageRequest.OptionCase', null, global);
goog.exportSymbol('proto.proto.ProxStageResponse', null, global);
goog.exportSymbol('proto.proto.ProxStatisticsInfo', null, global);
goog.exportSymbol('proto.proto.ProxSummaryInfo', null, global);
goog.exportSymbol('proto.proto.ProxSummaryInfos', null, global);
goog.exportSymbol('proto.proto.ProxTimeLine', null, global);
goog.exportSymbol('proto.proto.ProxTimeLineRes', null, global);
goog.exportSymbol('proto.proto.ProxTimeLineResp', null, global);
goog.exportSymbol('proto.proto.ProxTouchResp', null, global);
goog.exportSymbol('proto.proto.ProxUnPinReq', null, global);
goog.exportSymbol('proto.proto.ProxUnpinRequest', null, global);
goog.exportSymbol('proto.proto.ProxUpdateNFTRequest', null, global);
goog.exportSymbol('proto.proto.ProxUpdateNFTResp', null, global);
goog.exportSymbol('proto.proto.ProxUpload', null, global);
goog.exportSymbol('proto.proto.StageProxResponse', null, global);
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
proto.proto.ProxHeader = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxHeader.displayName = 'proto.proto.ProxHeader';
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
proto.proto.ProxStagePartRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxStagePartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStagePartRequest.displayName = 'proto.proto.ProxStagePartRequest';
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
proto.proto.ProxStagePartResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxStagePartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStagePartResponse.displayName = 'proto.proto.ProxStagePartResponse';
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
proto.proto.ProxPinPay = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPinPay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinPay.displayName = 'proto.proto.ProxPinPay';
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
proto.proto.ProxStagePin = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxStagePin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStagePin.displayName = 'proto.proto.ProxStagePin';
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
proto.proto.ProxStageRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ProxStageRequest.oneofGroups_);
};
goog.inherits(proto.proto.ProxStageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStageRequest.displayName = 'proto.proto.ProxStageRequest';
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
proto.proto.StageProxResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.StageProxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StageProxResponse.displayName = 'proto.proto.StageProxResponse';
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
proto.proto.GetProxRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetProxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetProxRequest.displayName = 'proto.proto.GetProxRequest';
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
proto.proto.GetProxResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetProxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetProxResponse.displayName = 'proto.proto.GetProxResponse';
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
proto.proto.ProxMultipartCreateResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxMultipartCreateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxMultipartCreateResp.displayName = 'proto.proto.ProxMultipartCreateResp';
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
proto.proto.ProxStageResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxStageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStageResponse.displayName = 'proto.proto.ProxStageResponse';
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
proto.proto.ProxDeleteObjectRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxDeleteObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxDeleteObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxDeleteObjectRequest.displayName = 'proto.proto.ProxDeleteObjectRequest';
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
proto.proto.ProxDeleteResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxDeleteResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxDeleteResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxDeleteResp.displayName = 'proto.proto.ProxDeleteResp';
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
proto.proto.ProxDeleteObjectReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxDeleteObjectReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxDeleteObjectReq.displayName = 'proto.proto.ProxDeleteObjectReq';
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
proto.proto.ProxPutObjectRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectRequest.displayName = 'proto.proto.ProxPutObjectRequest';
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
proto.proto.ProxPutObjectReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectReq.displayName = 'proto.proto.ProxPutObjectReq';
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
proto.proto.ProxPutObjectOpt = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ProxPutObjectOpt.oneofGroups_);
};
goog.inherits(proto.proto.ProxPutObjectOpt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectOpt.displayName = 'proto.proto.ProxPutObjectOpt';
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
proto.proto.ProxPutObjectResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectResp.displayName = 'proto.proto.ProxPutObjectResp';
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
proto.proto.ProxCompPart = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCompPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCompPart.displayName = 'proto.proto.ProxCompPart';
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
proto.proto.ProxCompletePartUpload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxCompletePartUpload.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxCompletePartUpload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCompletePartUpload.displayName = 'proto.proto.ProxCompletePartUpload';
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
proto.proto.ProxCompleteMultipartRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCompleteMultipartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCompleteMultipartRequest.displayName = 'proto.proto.ProxCompleteMultipartRequest';
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
proto.proto.ProxCompleteMultipartReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCompleteMultipartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCompleteMultipartReq.displayName = 'proto.proto.ProxCompleteMultipartReq';
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
proto.proto.ProxCompleteMultipartResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCompleteMultipartResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCompleteMultipartResp.displayName = 'proto.proto.ProxCompleteMultipartResp';
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
proto.proto.ProxRangeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxRangeRequest.displayName = 'proto.proto.ProxRangeRequest';
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
proto.proto.ProxOrigins = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxOrigins, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxOrigins.displayName = 'proto.proto.ProxOrigins';
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
proto.proto.ProxFetchRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxFetchRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxFetchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFetchRequest.displayName = 'proto.proto.ProxFetchRequest';
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
proto.proto.ProxFetchPinningRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxFetchPinningRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFetchPinningRequest.displayName = 'proto.proto.ProxFetchPinningRequest';
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
proto.proto.ProxFetchPinningResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxFetchPinningResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFetchPinningResponse.displayName = 'proto.proto.ProxFetchPinningResponse';
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
proto.proto.ProxGetRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetRequest.displayName = 'proto.proto.ProxGetRequest';
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
proto.proto.ProxGetBlockRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetBlockRequest.displayName = 'proto.proto.ProxGetBlockRequest';
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
proto.proto.ProxGetCarMetaRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetCarMetaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetCarMetaRequest.displayName = 'proto.proto.ProxGetCarMetaRequest';
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
proto.proto.ProxGetCarMetaResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetCarMetaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetCarMetaResponse.displayName = 'proto.proto.ProxGetCarMetaResponse';
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
proto.proto.ProxGetInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetInfo.displayName = 'proto.proto.ProxGetInfo';
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
proto.proto.ProxGetRequests = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxGetRequests.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxGetRequests, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetRequests.displayName = 'proto.proto.ProxGetRequests';
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
proto.proto.ProxSearchRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxSearchRequest.displayName = 'proto.proto.ProxSearchRequest';
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
proto.proto.ProxObjectInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxObjectInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxObjectInfo.displayName = 'proto.proto.ProxObjectInfo';
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
proto.proto.ProxGetBlockResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetBlockResponse.displayName = 'proto.proto.ProxGetBlockResponse';
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
proto.proto.ProxFetchResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxFetchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFetchResponse.displayName = 'proto.proto.ProxFetchResponse';
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
proto.proto.ProxGetResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ProxGetResponse.oneofGroups_);
};
goog.inherits(proto.proto.ProxGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetResponse.displayName = 'proto.proto.ProxGetResponse';
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
proto.proto.ProxLinks = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxLinks.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxLinks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxLinks.displayName = 'proto.proto.ProxLinks';
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
proto.proto.ProxLink = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxLink.displayName = 'proto.proto.ProxLink';
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
proto.proto.ProxSearchResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ProxSearchResponse.oneofGroups_);
};
goog.inherits(proto.proto.ProxSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxSearchResponse.displayName = 'proto.proto.ProxSearchResponse';
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
proto.proto.ProxPutObjectResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectResult.displayName = 'proto.proto.ProxPutObjectResult';
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
proto.proto.ProxPutObjectPartRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectPartRequest.displayName = 'proto.proto.ProxPutObjectPartRequest';
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
proto.proto.ProxPutObjectPartReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectPartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectPartReq.displayName = 'proto.proto.ProxPutObjectPartReq';
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
proto.proto.ProxPutObjectPartOpt = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ProxPutObjectPartOpt.oneofGroups_);
};
goog.inherits(proto.proto.ProxPutObjectPartOpt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectPartOpt.displayName = 'proto.proto.ProxPutObjectPartOpt';
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
proto.proto.ProxPutObjectPartResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPutObjectPartResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPutObjectPartResult.displayName = 'proto.proto.ProxPutObjectPartResult';
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
proto.proto.ProxListPartsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListPartsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListPartsRequest.displayName = 'proto.proto.ProxListPartsRequest';
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
proto.proto.ProxListUploadRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListUploadRequest.displayName = 'proto.proto.ProxListUploadRequest';
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
proto.proto.ProxListUploadReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListUploadReq.displayName = 'proto.proto.ProxListUploadReq';
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
proto.proto.ProxListPartsReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListPartsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListPartsReq.displayName = 'proto.proto.ProxListPartsReq';
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
proto.proto.ProxPart = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPart.displayName = 'proto.proto.ProxPart';
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
proto.proto.ProxListMultipartUploadResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxListMultipartUploadResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxListMultipartUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListMultipartUploadResponse.displayName = 'proto.proto.ProxListMultipartUploadResponse';
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
proto.proto.ProxListPartsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxListPartsResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxListPartsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListPartsResponse.displayName = 'proto.proto.ProxListPartsResponse';
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
proto.proto.ProxUpload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxUpload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxUpload.displayName = 'proto.proto.ProxUpload';
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
proto.proto.ProxListObjectsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListObjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListObjectsRequest.displayName = 'proto.proto.ProxListObjectsRequest';
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
proto.proto.ProxListObjectsReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxListObjectsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListObjectsReq.displayName = 'proto.proto.ProxListObjectsReq';
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
proto.proto.ProxImageCameraInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxImageCameraInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxImageCameraInfo.displayName = 'proto.proto.ProxImageCameraInfo';
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
proto.proto.ProxImageCameraResolution = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxImageCameraResolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxImageCameraResolution.displayName = 'proto.proto.ProxImageCameraResolution';
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
proto.proto.ProxImageAddition = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxImageAddition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxImageAddition.displayName = 'proto.proto.ProxImageAddition';
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
proto.proto.ProxGpsInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGpsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGpsInfo.displayName = 'proto.proto.ProxGpsInfo';
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
proto.proto.ProxImageInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxImageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxImageInfo.displayName = 'proto.proto.ProxImageInfo';
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
proto.proto.ProxObject = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxObject.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxObject.displayName = 'proto.proto.ProxObject';
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
proto.proto.ProxPrefixPin = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxPrefixPin.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxPrefixPin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPrefixPin.displayName = 'proto.proto.ProxPrefixPin';
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
proto.proto.ProxListObjectsResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxListObjectsResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxListObjectsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxListObjectsResp.displayName = 'proto.proto.ProxListObjectsResp';
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
proto.proto.ProxPinning = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPinning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinning.displayName = 'proto.proto.ProxPinning';
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
proto.proto.ProxPinRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinRequest.displayName = 'proto.proto.ProxPinRequest';
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
proto.proto.ProxPinResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPinResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinResp.displayName = 'proto.proto.ProxPinResp';
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
proto.proto.ProxPinReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinReq.displayName = 'proto.proto.ProxPinReq';
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
proto.proto.GetPeerIdInfoReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetPeerIdInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetPeerIdInfoReq.displayName = 'proto.proto.GetPeerIdInfoReq';
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
proto.proto.GetPeerIDReply = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetPeerIDReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.GetPeerIDReply.displayName = 'proto.proto.GetPeerIDReply';
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
proto.proto.ProxUnpinRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxUnpinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxUnpinRequest.displayName = 'proto.proto.ProxUnpinRequest';
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
proto.proto.ProxUnPinReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxUnPinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxUnPinReq.displayName = 'proto.proto.ProxUnPinReq';
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
proto.proto.ProxPingRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPingRequest.displayName = 'proto.proto.ProxPingRequest';
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
proto.proto.ProxPingMinerRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPingMinerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPingMinerRequest.displayName = 'proto.proto.ProxPingMinerRequest';
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
proto.proto.ProxPingMiner = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPingMiner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPingMiner.displayName = 'proto.proto.ProxPingMiner';
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
proto.proto.ProxPingMinerResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxPingMinerResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxPingMinerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPingMinerResponse.displayName = 'proto.proto.ProxPingMinerResponse';
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
proto.proto.ProxPingResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPingResponse.displayName = 'proto.proto.ProxPingResponse';
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
proto.proto.ProxFindRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxFindRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFindRequest.displayName = 'proto.proto.ProxFindRequest';
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
proto.proto.ProxObjects = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxObjects.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxObjects, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxObjects.displayName = 'proto.proto.ProxObjects';
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
proto.proto.ProxRequestSummaryIds = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxRequestSummaryIds.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxRequestSummaryIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxRequestSummaryIds.displayName = 'proto.proto.ProxRequestSummaryIds';
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
proto.proto.ProxCategory = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCategory.displayName = 'proto.proto.ProxCategory';
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
proto.proto.ProxPrefix = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPrefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPrefix.displayName = 'proto.proto.ProxPrefix';
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
proto.proto.ProxStatisticsInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxStatisticsInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxStatisticsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxStatisticsInfo.displayName = 'proto.proto.ProxStatisticsInfo';
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
proto.proto.ProxRequestStatistics = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxRequestStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxRequestStatistics.displayName = 'proto.proto.ProxRequestStatistics';
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
proto.proto.ProxSummaryInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxSummaryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxSummaryInfo.displayName = 'proto.proto.ProxSummaryInfo';
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
proto.proto.ProxSummaryInfos = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxSummaryInfos.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxSummaryInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxSummaryInfos.displayName = 'proto.proto.ProxSummaryInfos';
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
proto.proto.ProxRenameObject = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxRenameObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxRenameObject.displayName = 'proto.proto.ProxRenameObject';
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
proto.proto.ProxRenameObjectResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxRenameObjectResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxRenameObjectResp.displayName = 'proto.proto.ProxRenameObjectResp';
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
proto.proto.ProxTimeLine = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxTimeLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxTimeLine.displayName = 'proto.proto.ProxTimeLine';
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
proto.proto.ProxTimeLineResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxTimeLineResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxTimeLineResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxTimeLineResp.displayName = 'proto.proto.ProxTimeLineResp';
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
proto.proto.ProxTimeLineRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxTimeLineRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxTimeLineRes.displayName = 'proto.proto.ProxTimeLineRes';
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
proto.proto.ProxPresignedURL = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPresignedURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPresignedURL.displayName = 'proto.proto.ProxPresignedURL';
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
proto.proto.ProxPresignedURLResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPresignedURLResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPresignedURLResp.displayName = 'proto.proto.ProxPresignedURLResp';
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
proto.proto.ProxFileInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxFileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxFileInfo.displayName = 'proto.proto.ProxFileInfo';
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
proto.proto.ProxTouchResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxTouchResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxTouchResp.displayName = 'proto.proto.ProxTouchResp';
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
proto.proto.ProxGExtractCode = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGExtractCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGExtractCode.displayName = 'proto.proto.ProxGExtractCode';
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
proto.proto.ProxGExtractCodeResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGExtractCodeResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGExtractCodeResp.displayName = 'proto.proto.ProxGExtractCodeResp';
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
proto.proto.ProxPInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxPInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPInfo.displayName = 'proto.proto.ProxPInfo';
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
proto.proto.ProxPinningInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxPinningInfo.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxPinningInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinningInfo.displayName = 'proto.proto.ProxPinningInfo';
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
proto.proto.ProxPinningListRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxPinningListRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxPinningListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinningListRequest.displayName = 'proto.proto.ProxPinningListRequest';
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
proto.proto.ProxPinningResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxPinningResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxPinningResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxPinningResp.displayName = 'proto.proto.ProxPinningResp';
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
proto.proto.ProxNFTInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxNFTInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxNFTInfo.displayName = 'proto.proto.ProxNFTInfo';
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
proto.proto.ProxUpdateNFTRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxUpdateNFTRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxUpdateNFTRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxUpdateNFTRequest.displayName = 'proto.proto.ProxUpdateNFTRequest';
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
proto.proto.ProxUpdateNFTResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxUpdateNFTResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxUpdateNFTResp.displayName = 'proto.proto.ProxUpdateNFTResp';
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
proto.proto.ProxCred = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCred, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCred.displayName = 'proto.proto.ProxCred';
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
proto.proto.ProxCredRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCredRequest.displayName = 'proto.proto.ProxCredRequest';
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
proto.proto.ProxCredResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxCredResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCredResp.displayName = 'proto.proto.ProxCredResp';
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
proto.proto.ProxGetCredRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGetCredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGetCredRequest.displayName = 'proto.proto.ProxGetCredRequest';
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
proto.proto.ProxGeneratePinCredRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGeneratePinCredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGeneratePinCredRequest.displayName = 'proto.proto.ProxGeneratePinCredRequest';
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
proto.proto.ProxGeneratePinCredResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxGeneratePinCredResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxGeneratePinCredResp.displayName = 'proto.proto.ProxGeneratePinCredResp';
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
proto.proto.ProxCredsList = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxCredsList.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxCredsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxCredsList.displayName = 'proto.proto.ProxCredsList';
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
proto.proto.ProxChatReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxChatReq.displayName = 'proto.proto.ProxChatReq';
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
proto.proto.ProxChatRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxChatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxChatRequest.displayName = 'proto.proto.ProxChatRequest';
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
proto.proto.ProxChatResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxChatResponse.displayName = 'proto.proto.ProxChatResponse';
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
proto.proto.ProxKNReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxKNReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxKNReq.displayName = 'proto.proto.ProxKNReq';
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
proto.proto.ProxKNRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxKNRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxKNRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxKNRequest.displayName = 'proto.proto.ProxKNRequest';
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
proto.proto.ProxKNResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxKNResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxKNResponse.displayName = 'proto.proto.ProxKNResponse';
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
proto.proto.ProxF2PGetSpace = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetSpace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetSpace.displayName = 'proto.proto.ProxF2PGetSpace';
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
proto.proto.ProxF2PGetMiner = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetMiner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetMiner.displayName = 'proto.proto.ProxF2PGetMiner';
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
proto.proto.ProxF2PGetApp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetApp.displayName = 'proto.proto.ProxF2PGetApp';
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
proto.proto.ProxF2PGetAppData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetAppData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetAppData.displayName = 'proto.proto.ProxF2PGetAppData';
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
proto.proto.ProxF2PGetSpaceResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetSpaceResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetSpaceResult.displayName = 'proto.proto.ProxF2PGetSpaceResult';
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
proto.proto.ProxF2PGetSpaceResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetSpaceResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetSpaceResp.displayName = 'proto.proto.ProxF2PGetSpaceResp';
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
proto.proto.ProxF2PGetIOT = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetIOT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetIOT.displayName = 'proto.proto.ProxF2PGetIOT';
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
proto.proto.ProxIOTInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxIOTInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxIOTInfo.displayName = 'proto.proto.ProxIOTInfo';
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
proto.proto.ProxIOTData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxIOTData.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxIOTData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxIOTData.displayName = 'proto.proto.ProxIOTData';
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
proto.proto.ProxF2PGetIOTResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxF2PGetIOTResp.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxF2PGetIOTResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetIOTResp.displayName = 'proto.proto.ProxF2PGetIOTResp';
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
proto.proto.ProxF2PGetIOTAmountResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetIOTAmountResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetIOTAmountResp.displayName = 'proto.proto.ProxF2PGetIOTAmountResp';
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
proto.proto.ProxF2PGetMinerData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetMinerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetMinerData.displayName = 'proto.proto.ProxF2PGetMinerData';
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
proto.proto.ProxF2PGetMinerResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ProxF2PGetMinerResult.repeatedFields_, null);
};
goog.inherits(proto.proto.ProxF2PGetMinerResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetMinerResult.displayName = 'proto.proto.ProxF2PGetMinerResult';
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
proto.proto.ProxF2PGetMinerResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetMinerResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetMinerResp.displayName = 'proto.proto.ProxF2PGetMinerResp';
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
proto.proto.ProxF2PGetAppResult = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetAppResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetAppResult.displayName = 'proto.proto.ProxF2PGetAppResult';
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
proto.proto.ProxF2PGetAppResp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ProxF2PGetAppResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ProxF2PGetAppResp.displayName = 'proto.proto.ProxF2PGetAppResp';
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
  proto.proto.ProxHeader.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxHeader.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxHeader} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxHeader.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        peerid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        id: jspb.Message.getFieldWithDefault(msg, 2, ''),
        token: jspb.Message.getFieldWithDefault(msg, 3, ''),
        apptype: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxHeader}
 */
proto.proto.ProxHeader.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxHeader();
  return proto.proto.ProxHeader.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxHeader}
 */
proto.proto.ProxHeader.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxHeader.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxHeader.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getApptype();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string peerId = 1;
 * @return {string}
 */
proto.proto.ProxHeader.prototype.getPeerid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxHeader} returns this
 */
proto.proto.ProxHeader.prototype.setPeerid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string Id = 2;
 * @return {string}
 */
proto.proto.ProxHeader.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxHeader} returns this
 */
proto.proto.ProxHeader.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string token = 3;
 * @return {string}
 */
proto.proto.ProxHeader.prototype.getToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxHeader} returns this
 */
proto.proto.ProxHeader.prototype.setToken = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string appType = 4;
 * @return {string}
 */
proto.proto.ProxHeader.prototype.getApptype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxHeader} returns this
 */
proto.proto.ProxHeader.prototype.setApptype = function (value) {
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
  proto.proto.ProxStagePartRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStagePartRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStagePartRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStagePartRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxStagePartRequest}
 */
proto.proto.ProxStagePartRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStagePartRequest();
  return proto.proto.ProxStagePartRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStagePartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStagePartRequest}
 */
proto.proto.ProxStagePartRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
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
proto.proto.ProxStagePartRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStagePartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStagePartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStagePartRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxStagePartRequest.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxStagePartRequest.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxStagePartRequest.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxStagePartRequest} returns this
 */
proto.proto.ProxStagePartRequest.prototype.setChunk = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
  proto.proto.ProxStagePartResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStagePartResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStagePartResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStagePartResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxStagePartResponse}
 */
proto.proto.ProxStagePartResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStagePartResponse();
  return proto.proto.ProxStagePartResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStagePartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStagePartResponse}
 */
proto.proto.ProxStagePartResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxStagePartResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStagePartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStagePartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStagePartResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxStagePartResponse.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxStagePartResponse} returns this
 */
proto.proto.ProxStagePartResponse.prototype.setCid = function (value) {
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
  proto.proto.ProxPinPay.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinPay.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinPay} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinPay.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        copied: jspb.Message.getFieldWithDefault(msg, 1, 0),
        trxid: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxPinPay}
 */
proto.proto.ProxPinPay.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinPay();
  return proto.proto.ProxPinPay.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinPay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinPay}
 */
proto.proto.ProxPinPay.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPinPay.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinPay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinPay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinPay.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCopied();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getTrxid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional int32 copied = 1;
 * @return {number}
 */
proto.proto.ProxPinPay.prototype.getCopied = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinPay} returns this
 */
proto.proto.ProxPinPay.prototype.setCopied = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string trxId = 2;
 * @return {string}
 */
proto.proto.ProxPinPay.prototype.getTrxid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinPay} returns this
 */
proto.proto.ProxPinPay.prototype.setTrxid = function (value) {
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
  proto.proto.ProxStagePin.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStagePin.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStagePin} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStagePin.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxPinRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxStagePin}
 */
proto.proto.ProxStagePin.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStagePin();
  return proto.proto.ProxStagePin.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStagePin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStagePin}
 */
proto.proto.ProxStagePin.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxPinRequest();
        reader.readMessage(value, proto.proto.ProxPinRequest.deserializeBinaryFromReader);
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
proto.proto.ProxStagePin.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStagePin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStagePin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStagePin.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxPinRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxStagePin.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxStagePin} returns this
 */
proto.proto.ProxStagePin.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxStagePin} returns this
 */
proto.proto.ProxStagePin.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStagePin.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxPinRequest request = 2;
 * @return {?proto.proto.ProxPinRequest}
 */
proto.proto.ProxStagePin.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxPinRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPinRequest, 2));
};

/**
 * @param {?proto.proto.ProxPinRequest|undefined} value
 * @return {!proto.proto.ProxStagePin} returns this
 */
proto.proto.ProxStagePin.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxStagePin} returns this
 */
proto.proto.ProxStagePin.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStagePin.prototype.hasRequest = function () {
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
proto.proto.ProxStageRequest.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.proto.ProxStageRequest.OptionCase = {
  OPTION_NOT_SET: 0,
  PIN: 1,
  CHUNK: 2,
};

/**
 * @return {proto.proto.ProxStageRequest.OptionCase}
 */
proto.proto.ProxStageRequest.prototype.getOptionCase = function () {
  return /** @type {proto.proto.ProxStageRequest.OptionCase} */ (
    jspb.Message.computeOneofCase(this, proto.proto.ProxStageRequest.oneofGroups_[0])
  );
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
  proto.proto.ProxStageRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStageRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStageRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStageRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        pin: (f = msg.getPin()) && proto.proto.ProxStagePin.toObject(includeInstance, f),
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxStageRequest}
 */
proto.proto.ProxStageRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStageRequest();
  return proto.proto.ProxStageRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStageRequest}
 */
proto.proto.ProxStageRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxStagePin();
        reader.readMessage(value, proto.proto.ProxStagePin.deserializeBinaryFromReader);
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
proto.proto.ProxStageRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStageRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxStagePin.serializeBinaryToWriter);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional ProxStagePin pin = 1;
 * @return {?proto.proto.ProxStagePin}
 */
proto.proto.ProxStageRequest.prototype.getPin = function () {
  return /** @type{?proto.proto.ProxStagePin} */ (jspb.Message.getWrapperField(this, proto.proto.ProxStagePin, 1));
};

/**
 * @param {?proto.proto.ProxStagePin|undefined} value
 * @return {!proto.proto.ProxStageRequest} returns this
 */
proto.proto.ProxStageRequest.prototype.setPin = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.ProxStageRequest.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxStageRequest} returns this
 */
proto.proto.ProxStageRequest.prototype.clearPin = function () {
  return this.setPin(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStageRequest.prototype.hasPin = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxStageRequest.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxStageRequest.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxStageRequest.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxStageRequest} returns this
 */
proto.proto.ProxStageRequest.prototype.setChunk = function (value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxStageRequest.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProxStageRequest} returns this
 */
proto.proto.ProxStageRequest.prototype.clearChunk = function () {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxStageRequest.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStageRequest.prototype.hasChunk = function () {
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
  proto.proto.StageProxResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.StageProxResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.StageProxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.StageProxResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.StageProxResponse}
 */
proto.proto.StageProxResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StageProxResponse();
  return proto.proto.StageProxResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StageProxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StageProxResponse}
 */
proto.proto.StageProxResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.StageProxResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.StageProxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StageProxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StageProxResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.StageProxResponse.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.StageProxResponse} returns this
 */
proto.proto.StageProxResponse.prototype.setCid = function (value) {
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
  proto.proto.GetProxRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.GetProxRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.GetProxRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.GetProxRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.GetProxRequest}
 */
proto.proto.GetProxRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetProxRequest();
  return proto.proto.GetProxRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetProxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetProxRequest}
 */
proto.proto.GetProxRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.GetProxRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetProxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetProxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetProxRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.GetProxRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.GetProxRequest} returns this
 */
proto.proto.GetProxRequest.prototype.setCid = function (value) {
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
  proto.proto.GetProxResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.GetProxResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.GetProxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.GetProxResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.GetProxResponse}
 */
proto.proto.GetProxResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetProxResponse();
  return proto.proto.GetProxResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetProxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetProxResponse}
 */
proto.proto.GetProxResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
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
proto.proto.GetProxResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetProxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetProxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetProxResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.GetProxResponse.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.GetProxResponse.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.GetProxResponse.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.GetProxResponse} returns this
 */
proto.proto.GetProxResponse.prototype.setChunk = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
  proto.proto.ProxMultipartCreateResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxMultipartCreateResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxMultipartCreateResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxMultipartCreateResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        uploadid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        key: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxMultipartCreateResp}
 */
proto.proto.ProxMultipartCreateResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxMultipartCreateResp();
  return proto.proto.ProxMultipartCreateResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxMultipartCreateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxMultipartCreateResp}
 */
proto.proto.ProxMultipartCreateResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxMultipartCreateResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxMultipartCreateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxMultipartCreateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxMultipartCreateResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string uploadId = 1;
 * @return {string}
 */
proto.proto.ProxMultipartCreateResp.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxMultipartCreateResp} returns this
 */
proto.proto.ProxMultipartCreateResp.prototype.setUploadid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.ProxMultipartCreateResp.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxMultipartCreateResp} returns this
 */
proto.proto.ProxMultipartCreateResp.prototype.setKey = function (value) {
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
  proto.proto.ProxStageResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStageResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStageResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStageResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxStageResponse}
 */
proto.proto.ProxStageResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStageResponse();
  return proto.proto.ProxStageResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStageResponse}
 */
proto.proto.ProxStageResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxStageResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStageResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxStageResponse.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxStageResponse} returns this
 */
proto.proto.ProxStageResponse.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxDeleteObjectRequest.repeatedFields_ = [1, 2, 4];

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
  proto.proto.ProxDeleteObjectRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxDeleteObjectRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxDeleteObjectRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxDeleteObjectRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
        objectsList: jspb.Message.toObjectList(msg.getObjectsList(), proto.proto.ProxUpload.toObject, includeInstance),
        objectType: jspb.Message.getFieldWithDefault(msg, 3, ''),
        prefixesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxDeleteObjectRequest}
 */
proto.proto.ProxDeleteObjectRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxDeleteObjectRequest();
  return proto.proto.ProxDeleteObjectRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxDeleteObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxDeleteObjectRequest}
 */
proto.proto.ProxDeleteObjectRequest.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxUpload();
        reader.readMessage(value, proto.proto.ProxUpload.deserializeBinaryFromReader);
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
proto.proto.ProxDeleteObjectRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxDeleteObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxDeleteObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxDeleteObjectRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.proto.ProxUpload.serializeBinaryToWriter);
  }
  f = message.getObjectType();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(4, f);
  }
};

/**
 * repeated string cids = 1;
 * @return {!Array<string>}
 */
proto.proto.ProxDeleteObjectRequest.prototype.getCidsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.setCidsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.addCids = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.clearCidsList = function () {
  return this.setCidsList([]);
};

/**
 * repeated ProxUpload objects = 2;
 * @return {!Array<!proto.proto.ProxUpload>}
 */
proto.proto.ProxDeleteObjectRequest.prototype.getObjectsList = function () {
  return /** @type{!Array<!proto.proto.ProxUpload>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxUpload, 2));
};

/**
 * @param {!Array<!proto.proto.ProxUpload>} value
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.setObjectsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.proto.ProxUpload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxUpload}
 */
proto.proto.ProxDeleteObjectRequest.prototype.addObjects = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ProxUpload, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.clearObjectsList = function () {
  return this.setObjectsList([]);
};

/**
 * optional string object_type = 3;
 * @return {string}
 */
proto.proto.ProxDeleteObjectRequest.prototype.getObjectType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.setObjectType = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * repeated string prefixes = 4;
 * @return {!Array<string>}
 */
proto.proto.ProxDeleteObjectRequest.prototype.getPrefixesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.setPrefixesList = function (value) {
  return jspb.Message.setField(this, 4, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.addPrefixes = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxDeleteObjectRequest} returns this
 */
proto.proto.ProxDeleteObjectRequest.prototype.clearPrefixesList = function () {
  return this.setPrefixesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxDeleteResp.repeatedFields_ = [1];

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
  proto.proto.ProxDeleteResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxDeleteResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxDeleteResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxDeleteResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        objectsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxDeleteResp}
 */
proto.proto.ProxDeleteResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxDeleteResp();
  return proto.proto.ProxDeleteResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxDeleteResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxDeleteResp}
 */
proto.proto.ProxDeleteResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxDeleteResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxDeleteResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxDeleteResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxDeleteResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

/**
 * repeated string objects = 1;
 * @return {!Array<string>}
 */
proto.proto.ProxDeleteResp.prototype.getObjectsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxDeleteResp} returns this
 */
proto.proto.ProxDeleteResp.prototype.setObjectsList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxDeleteResp} returns this
 */
proto.proto.ProxDeleteResp.prototype.addObjects = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxDeleteResp} returns this
 */
proto.proto.ProxDeleteResp.prototype.clearObjectsList = function () {
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
  proto.proto.ProxDeleteObjectReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxDeleteObjectReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxDeleteObjectReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxDeleteObjectReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxDeleteObjectRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxDeleteObjectReq}
 */
proto.proto.ProxDeleteObjectReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxDeleteObjectReq();
  return proto.proto.ProxDeleteObjectReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxDeleteObjectReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxDeleteObjectReq}
 */
proto.proto.ProxDeleteObjectReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxDeleteObjectRequest();
        reader.readMessage(value, proto.proto.ProxDeleteObjectRequest.deserializeBinaryFromReader);
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
proto.proto.ProxDeleteObjectReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxDeleteObjectReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxDeleteObjectReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxDeleteObjectReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxDeleteObjectRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxDeleteObjectReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxDeleteObjectReq} returns this
 */
proto.proto.ProxDeleteObjectReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxDeleteObjectReq} returns this
 */
proto.proto.ProxDeleteObjectReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxDeleteObjectReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxDeleteObjectRequest request = 2;
 * @return {?proto.proto.ProxDeleteObjectRequest}
 */
proto.proto.ProxDeleteObjectReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxDeleteObjectRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxDeleteObjectRequest, 2));
};

/**
 * @param {?proto.proto.ProxDeleteObjectRequest|undefined} value
 * @return {!proto.proto.ProxDeleteObjectReq} returns this
 */
proto.proto.ProxDeleteObjectReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxDeleteObjectReq} returns this
 */
proto.proto.ProxDeleteObjectReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxDeleteObjectReq.prototype.hasRequest = function () {
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
  proto.proto.ProxPutObjectRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        md5: jspb.Message.getFieldWithDefault(msg, 2, ''),
        contentlength: jspb.Message.getFieldWithDefault(msg, 3, 0),
        contenttype: jspb.Message.getFieldWithDefault(msg, 4, ''),
        stageonly: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
        category: jspb.Message.getFieldWithDefault(msg, 6, 0),
        tags: jspb.Message.getFieldWithDefault(msg, 7, ''),
        rhash: jspb.Message.getFieldWithDefault(msg, 8, ''),
        acl: jspb.Message.getFieldWithDefault(msg, 9, ''),
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
 * @return {!proto.proto.ProxPutObjectRequest}
 */
proto.proto.ProxPutObjectRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectRequest();
  return proto.proto.ProxPutObjectRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectRequest}
 */
proto.proto.ProxPutObjectRequest.deserializeBinaryFromReader = function (msg, reader) {
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
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setRhash(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setAcl(value);
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
proto.proto.ProxPutObjectRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getContentlength();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getStageonly();
  if (f) {
    writer.writeBool(5, f);
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(6, f);
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getRhash();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getAcl();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string md5 = 2;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getMd5 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setMd5 = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 contentLength = 3;
 * @return {number}
 */
proto.proto.ProxPutObjectRequest.prototype.getContentlength = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setContentlength = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional string contentType = 4;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getContenttype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setContenttype = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional bool stageOnly = 5;
 * @return {boolean}
 */
proto.proto.ProxPutObjectRequest.prototype.getStageonly = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setStageonly = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * optional int32 category = 6;
 * @return {number}
 */
proto.proto.ProxPutObjectRequest.prototype.getCategory = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setCategory = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional string tags = 7;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getTags = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setTags = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional string rhash = 8;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getRhash = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setRhash = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional string acl = 9;
 * @return {string}
 */
proto.proto.ProxPutObjectRequest.prototype.getAcl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectRequest} returns this
 */
proto.proto.ProxPutObjectRequest.prototype.setAcl = function (value) {
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
  proto.proto.ProxPutObjectReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxPutObjectRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxPutObjectReq}
 */
proto.proto.ProxPutObjectReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectReq();
  return proto.proto.ProxPutObjectReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectReq}
 */
proto.proto.ProxPutObjectReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxPutObjectRequest();
        reader.readMessage(value, proto.proto.ProxPutObjectRequest.deserializeBinaryFromReader);
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
proto.proto.ProxPutObjectReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxPutObjectRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPutObjectReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPutObjectReq} returns this
 */
proto.proto.ProxPutObjectReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectReq} returns this
 */
proto.proto.ProxPutObjectReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxPutObjectRequest request = 2;
 * @return {?proto.proto.ProxPutObjectRequest}
 */
proto.proto.ProxPutObjectReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxPutObjectRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPutObjectRequest, 2));
};

/**
 * @param {?proto.proto.ProxPutObjectRequest|undefined} value
 * @return {!proto.proto.ProxPutObjectReq} returns this
 */
proto.proto.ProxPutObjectReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectReq} returns this
 */
proto.proto.ProxPutObjectReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectReq.prototype.hasRequest = function () {
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
proto.proto.ProxPutObjectOpt.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.proto.ProxPutObjectOpt.OptionCase = {
  OPTION_NOT_SET: 0,
  REQ: 1,
  CHUNK: 2,
};

/**
 * @return {proto.proto.ProxPutObjectOpt.OptionCase}
 */
proto.proto.ProxPutObjectOpt.prototype.getOptionCase = function () {
  return /** @type {proto.proto.ProxPutObjectOpt.OptionCase} */ (
    jspb.Message.computeOneofCase(this, proto.proto.ProxPutObjectOpt.oneofGroups_[0])
  );
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
  proto.proto.ProxPutObjectOpt.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectOpt.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectOpt} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectOpt.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        req: (f = msg.getReq()) && proto.proto.ProxPutObjectReq.toObject(includeInstance, f),
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxPutObjectOpt}
 */
proto.proto.ProxPutObjectOpt.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectOpt();
  return proto.proto.ProxPutObjectOpt.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectOpt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectOpt}
 */
proto.proto.ProxPutObjectOpt.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxPutObjectReq();
        reader.readMessage(value, proto.proto.ProxPutObjectReq.deserializeBinaryFromReader);
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
proto.proto.ProxPutObjectOpt.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectOpt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectOpt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectOpt.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxPutObjectReq.serializeBinaryToWriter);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional ProxPutObjectReq req = 1;
 * @return {?proto.proto.ProxPutObjectReq}
 */
proto.proto.ProxPutObjectOpt.prototype.getReq = function () {
  return /** @type{?proto.proto.ProxPutObjectReq} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPutObjectReq, 1));
};

/**
 * @param {?proto.proto.ProxPutObjectReq|undefined} value
 * @return {!proto.proto.ProxPutObjectOpt} returns this
 */
proto.proto.ProxPutObjectOpt.prototype.setReq = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.ProxPutObjectOpt.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectOpt} returns this
 */
proto.proto.ProxPutObjectOpt.prototype.clearReq = function () {
  return this.setReq(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectOpt.prototype.hasReq = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxPutObjectOpt.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxPutObjectOpt.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxPutObjectOpt.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxPutObjectOpt} returns this
 */
proto.proto.ProxPutObjectOpt.prototype.setChunk = function (value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxPutObjectOpt.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProxPutObjectOpt} returns this
 */
proto.proto.ProxPutObjectOpt.prototype.clearChunk = function () {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxPutObjectOpt.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectOpt.prototype.hasChunk = function () {
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
  proto.proto.ProxPutObjectResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        md5: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ''),
        etag: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxPutObjectResp}
 */
proto.proto.ProxPutObjectResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectResp();
  return proto.proto.ProxPutObjectResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectResp}
 */
proto.proto.ProxPutObjectResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPutObjectResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.ProxPutObjectResp.prototype.getMd5 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResp} returns this
 */
proto.proto.ProxPutObjectResp.prototype.setMd5 = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxPutObjectResp.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResp} returns this
 */
proto.proto.ProxPutObjectResp.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.ProxPutObjectResp.prototype.getLastmodified = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResp} returns this
 */
proto.proto.ProxPutObjectResp.prototype.setLastmodified = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string etag = 4;
 * @return {string}
 */
proto.proto.ProxPutObjectResp.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResp} returns this
 */
proto.proto.ProxPutObjectResp.prototype.setEtag = function (value) {
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
  proto.proto.ProxCompPart.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCompPart.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCompPart} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCompPart.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        partnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
        etag: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxCompPart}
 */
proto.proto.ProxCompPart.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCompPart();
  return proto.proto.ProxCompPart.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCompPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCompPart}
 */
proto.proto.ProxCompPart.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxCompPart.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCompPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCompPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCompPart.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPartnumber();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional int64 partNumber = 1;
 * @return {number}
 */
proto.proto.ProxCompPart.prototype.getPartnumber = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxCompPart} returns this
 */
proto.proto.ProxCompPart.prototype.setPartnumber = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.ProxCompPart.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompPart} returns this
 */
proto.proto.ProxCompPart.prototype.setEtag = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxCompletePartUpload.repeatedFields_ = [1];

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
  proto.proto.ProxCompletePartUpload.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCompletePartUpload.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCompletePartUpload} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCompletePartUpload.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        partsList: jspb.Message.toObjectList(msg.getPartsList(), proto.proto.ProxCompPart.toObject, includeInstance),
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
 * @return {!proto.proto.ProxCompletePartUpload}
 */
proto.proto.ProxCompletePartUpload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCompletePartUpload();
  return proto.proto.ProxCompletePartUpload.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCompletePartUpload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCompletePartUpload}
 */
proto.proto.ProxCompletePartUpload.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxCompPart();
        reader.readMessage(value, proto.proto.ProxCompPart.deserializeBinaryFromReader);
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
proto.proto.ProxCompletePartUpload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCompletePartUpload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCompletePartUpload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCompletePartUpload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxCompPart.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxCompPart parts = 1;
 * @return {!Array<!proto.proto.ProxCompPart>}
 */
proto.proto.ProxCompletePartUpload.prototype.getPartsList = function () {
  return /** @type{!Array<!proto.proto.ProxCompPart>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxCompPart, 1));
};

/**
 * @param {!Array<!proto.proto.ProxCompPart>} value
 * @return {!proto.proto.ProxCompletePartUpload} returns this
 */
proto.proto.ProxCompletePartUpload.prototype.setPartsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxCompPart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxCompPart}
 */
proto.proto.ProxCompletePartUpload.prototype.addParts = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxCompPart, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxCompletePartUpload} returns this
 */
proto.proto.ProxCompletePartUpload.prototype.clearPartsList = function () {
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
  proto.proto.ProxCompleteMultipartRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCompleteMultipartRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCompleteMultipartRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCompleteMultipartRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        uploadid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        completeupload: (f = msg.getCompleteupload()) && proto.proto.ProxCompletePartUpload.toObject(includeInstance, f),
        stageonly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
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
 * @return {!proto.proto.ProxCompleteMultipartRequest}
 */
proto.proto.ProxCompleteMultipartRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCompleteMultipartRequest();
  return proto.proto.ProxCompleteMultipartRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCompleteMultipartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCompleteMultipartRequest}
 */
proto.proto.ProxCompleteMultipartRequest.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxCompletePartUpload();
        reader.readMessage(value, proto.proto.ProxCompletePartUpload.deserializeBinaryFromReader);
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
proto.proto.ProxCompleteMultipartRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCompleteMultipartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCompleteMultipartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCompleteMultipartRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCompleteupload();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxCompletePartUpload.serializeBinaryToWriter);
  }
  f = message.getStageonly();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxCompleteMultipartRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompleteMultipartRequest} returns this
 */
proto.proto.ProxCompleteMultipartRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ProxCompleteMultipartRequest.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompleteMultipartRequest} returns this
 */
proto.proto.ProxCompleteMultipartRequest.prototype.setUploadid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional ProxCompletePartUpload completeUpload = 3;
 * @return {?proto.proto.ProxCompletePartUpload}
 */
proto.proto.ProxCompleteMultipartRequest.prototype.getCompleteupload = function () {
  return /** @type{?proto.proto.ProxCompletePartUpload} */ (jspb.Message.getWrapperField(this, proto.proto.ProxCompletePartUpload, 3));
};

/**
 * @param {?proto.proto.ProxCompletePartUpload|undefined} value
 * @return {!proto.proto.ProxCompleteMultipartRequest} returns this
 */
proto.proto.ProxCompleteMultipartRequest.prototype.setCompleteupload = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxCompleteMultipartRequest} returns this
 */
proto.proto.ProxCompleteMultipartRequest.prototype.clearCompleteupload = function () {
  return this.setCompleteupload(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxCompleteMultipartRequest.prototype.hasCompleteupload = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional bool stageOnly = 4;
 * @return {boolean}
 */
proto.proto.ProxCompleteMultipartRequest.prototype.getStageonly = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxCompleteMultipartRequest} returns this
 */
proto.proto.ProxCompleteMultipartRequest.prototype.setStageonly = function (value) {
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
  proto.proto.ProxCompleteMultipartReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCompleteMultipartReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCompleteMultipartReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCompleteMultipartReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxCompleteMultipartRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxCompleteMultipartReq}
 */
proto.proto.ProxCompleteMultipartReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCompleteMultipartReq();
  return proto.proto.ProxCompleteMultipartReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCompleteMultipartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCompleteMultipartReq}
 */
proto.proto.ProxCompleteMultipartReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxCompleteMultipartRequest();
        reader.readMessage(value, proto.proto.ProxCompleteMultipartRequest.deserializeBinaryFromReader);
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
proto.proto.ProxCompleteMultipartReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCompleteMultipartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCompleteMultipartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCompleteMultipartReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxCompleteMultipartRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxCompleteMultipartReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxCompleteMultipartReq} returns this
 */
proto.proto.ProxCompleteMultipartReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxCompleteMultipartReq} returns this
 */
proto.proto.ProxCompleteMultipartReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxCompleteMultipartReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxCompleteMultipartRequest request = 2;
 * @return {?proto.proto.ProxCompleteMultipartRequest}
 */
proto.proto.ProxCompleteMultipartReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxCompleteMultipartRequest} */ (
    jspb.Message.getWrapperField(this, proto.proto.ProxCompleteMultipartRequest, 2)
  );
};

/**
 * @param {?proto.proto.ProxCompleteMultipartRequest|undefined} value
 * @return {!proto.proto.ProxCompleteMultipartReq} returns this
 */
proto.proto.ProxCompleteMultipartReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxCompleteMultipartReq} returns this
 */
proto.proto.ProxCompleteMultipartReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxCompleteMultipartReq.prototype.hasRequest = function () {
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
  proto.proto.ProxCompleteMultipartResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCompleteMultipartResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCompleteMultipartResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCompleteMultipartResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        etag: jspb.Message.getFieldWithDefault(msg, 2, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 3, ''),
        size: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxCompleteMultipartResp}
 */
proto.proto.ProxCompleteMultipartResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCompleteMultipartResp();
  return proto.proto.ProxCompleteMultipartResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCompleteMultipartResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCompleteMultipartResp}
 */
proto.proto.ProxCompleteMultipartResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxCompleteMultipartResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCompleteMultipartResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCompleteMultipartResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCompleteMultipartResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxCompleteMultipartResp.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompleteMultipartResp} returns this
 */
proto.proto.ProxCompleteMultipartResp.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.ProxCompleteMultipartResp.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompleteMultipartResp} returns this
 */
proto.proto.ProxCompleteMultipartResp.prototype.setEtag = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string cid = 3;
 * @return {string}
 */
proto.proto.ProxCompleteMultipartResp.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCompleteMultipartResp} returns this
 */
proto.proto.ProxCompleteMultipartResp.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.ProxCompleteMultipartResp.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxCompleteMultipartResp} returns this
 */
proto.proto.ProxCompleteMultipartResp.prototype.setSize = function (value) {
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
  proto.proto.ProxRangeRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxRangeRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxRangeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxRangeRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        start: jspb.Message.getFieldWithDefault(msg, 1, 0),
        length: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.proto.ProxRangeRequest}
 */
proto.proto.ProxRangeRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxRangeRequest();
  return proto.proto.ProxRangeRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxRangeRequest}
 */
proto.proto.ProxRangeRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxRangeRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxRangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxRangeRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
};

/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.proto.ProxRangeRequest.prototype.getStart = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxRangeRequest} returns this
 */
proto.proto.ProxRangeRequest.prototype.setStart = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int64 length = 2;
 * @return {number}
 */
proto.proto.ProxRangeRequest.prototype.getLength = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxRangeRequest} returns this
 */
proto.proto.ProxRangeRequest.prototype.setLength = function (value) {
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
  proto.proto.ProxOrigins.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxOrigins.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxOrigins} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxOrigins.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        multiaddr: jspb.Message.getFieldWithDefault(msg, 1, ''),
        access: jspb.Message.getFieldWithDefault(msg, 3, ''),
        id: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxOrigins}
 */
proto.proto.ProxOrigins.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxOrigins();
  return proto.proto.ProxOrigins.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxOrigins} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxOrigins}
 */
proto.proto.ProxOrigins.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setMultiaddr(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setAccess(value);
        break;
      case 4:
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
proto.proto.ProxOrigins.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxOrigins.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxOrigins} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxOrigins.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMultiaddr();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getAccess();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string multiAddr = 1;
 * @return {string}
 */
proto.proto.ProxOrigins.prototype.getMultiaddr = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxOrigins} returns this
 */
proto.proto.ProxOrigins.prototype.setMultiaddr = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string access = 3;
 * @return {string}
 */
proto.proto.ProxOrigins.prototype.getAccess = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxOrigins} returns this
 */
proto.proto.ProxOrigins.prototype.setAccess = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string id = 4;
 * @return {string}
 */
proto.proto.ProxOrigins.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxOrigins} returns this
 */
proto.proto.ProxOrigins.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxFetchRequest.repeatedFields_ = [5];

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
  proto.proto.ProxFetchRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFetchRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFetchRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFetchRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        url: jspb.Message.getFieldWithDefault(msg, 2, ''),
        name: jspb.Message.getFieldWithDefault(msg, 3, ''),
        meta: msg.getMeta_asB64(),
        originsList: jspb.Message.toObjectList(msg.getOriginsList(), proto.proto.ProxOrigins.toObject, includeInstance),
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
 * @return {!proto.proto.ProxFetchRequest}
 */
proto.proto.ProxFetchRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFetchRequest();
  return proto.proto.ProxFetchRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFetchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFetchRequest}
 */
proto.proto.ProxFetchRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setUrl(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMeta(value);
        break;
      case 5:
        var value = new proto.proto.ProxOrigins();
        reader.readMessage(value, proto.proto.ProxOrigins.deserializeBinaryFromReader);
        msg.addOrigins(value);
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
proto.proto.ProxFetchRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFetchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFetchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFetchRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getMeta_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(5, f, proto.proto.ProxOrigins.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxFetchRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxFetchRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string url = 2;
 * @return {string}
 */
proto.proto.ProxFetchRequest.prototype.getUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.setUrl = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string name = 3;
 * @return {string}
 */
proto.proto.ProxFetchRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bytes meta = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxFetchRequest.prototype.getMeta = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * optional bytes meta = 4;
 * This is a type-conversion wrapper around `getMeta()`
 * @return {string}
 */
proto.proto.ProxFetchRequest.prototype.getMeta_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMeta()));
};

/**
 * optional bytes meta = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMeta()`
 * @return {!Uint8Array}
 */
proto.proto.ProxFetchRequest.prototype.getMeta_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMeta()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.setMeta = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * repeated ProxOrigins origins = 5;
 * @return {!Array<!proto.proto.ProxOrigins>}
 */
proto.proto.ProxFetchRequest.prototype.getOriginsList = function () {
  return /** @type{!Array<!proto.proto.ProxOrigins>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxOrigins, 5));
};

/**
 * @param {!Array<!proto.proto.ProxOrigins>} value
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.setOriginsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.proto.ProxOrigins=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxOrigins}
 */
proto.proto.ProxFetchRequest.prototype.addOrigins = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.ProxOrigins, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxFetchRequest} returns this
 */
proto.proto.ProxFetchRequest.prototype.clearOriginsList = function () {
  return this.setOriginsList([]);
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
  proto.proto.ProxFetchPinningRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFetchPinningRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFetchPinningRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFetchPinningRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        pinningid: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxFetchPinningRequest}
 */
proto.proto.ProxFetchPinningRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFetchPinningRequest();
  return proto.proto.ProxFetchPinningRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFetchPinningRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFetchPinningRequest}
 */
proto.proto.ProxFetchPinningRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPinningid(value);
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
proto.proto.ProxFetchPinningRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFetchPinningRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFetchPinningRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFetchPinningRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getPinningid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxFetchPinningRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxFetchPinningRequest} returns this
 */
proto.proto.ProxFetchPinningRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxFetchPinningRequest} returns this
 */
proto.proto.ProxFetchPinningRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxFetchPinningRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string pinningId = 2;
 * @return {string}
 */
proto.proto.ProxFetchPinningRequest.prototype.getPinningid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchPinningRequest} returns this
 */
proto.proto.ProxFetchPinningRequest.prototype.setPinningid = function (value) {
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
  proto.proto.ProxFetchPinningResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFetchPinningResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFetchPinningResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFetchPinningResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
        requestid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        created: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxFetchPinningResponse}
 */
proto.proto.ProxFetchPinningResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFetchPinningResponse();
  return proto.proto.ProxFetchPinningResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFetchPinningResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFetchPinningResponse}
 */
proto.proto.ProxFetchPinningResponse.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setRequestid(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreated(value);
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
proto.proto.ProxFetchPinningResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFetchPinningResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFetchPinningResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFetchPinningResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCreated();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxFetchPinningResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchPinningResponse} returns this
 */
proto.proto.ProxFetchPinningResponse.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string requestId = 2;
 * @return {string}
 */
proto.proto.ProxFetchPinningResponse.prototype.getRequestid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchPinningResponse} returns this
 */
proto.proto.ProxFetchPinningResponse.prototype.setRequestid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string created = 3;
 * @return {string}
 */
proto.proto.ProxFetchPinningResponse.prototype.getCreated = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchPinningResponse} returns this
 */
proto.proto.ProxFetchPinningResponse.prototype.setCreated = function (value) {
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
  proto.proto.ProxGetRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        key: jspb.Message.getFieldWithDefault(msg, 3, ''),
        range: (f = msg.getRange()) && proto.proto.ProxRangeRequest.toObject(includeInstance, f),
        thumb: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
        pwd: jspb.Message.getFieldWithDefault(msg, 6, ''),
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
 * @return {!proto.proto.ProxGetRequest}
 */
proto.proto.ProxGetRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetRequest();
  return proto.proto.ProxGetRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetRequest}
 */
proto.proto.ProxGetRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
        var value = new proto.proto.ProxRangeRequest();
        reader.readMessage(value, proto.proto.ProxRangeRequest.deserializeBinaryFromReader);
        msg.setRange(value);
        break;
      case 5:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setThumb(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setPwd(value);
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
proto.proto.ProxGetRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(4, f, proto.proto.ProxRangeRequest.serializeBinaryToWriter);
  }
  f = message.getThumb();
  if (f) {
    writer.writeBool(5, f);
  }
  f = message.getPwd();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGetRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxGetRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.ProxGetRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional ProxRangeRequest range = 4;
 * @return {?proto.proto.ProxRangeRequest}
 */
proto.proto.ProxGetRequest.prototype.getRange = function () {
  return /** @type{?proto.proto.ProxRangeRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxRangeRequest, 4));
};

/**
 * @param {?proto.proto.ProxRangeRequest|undefined} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setRange = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetRequest.prototype.hasRange = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional bool thumb = 5;
 * @return {boolean}
 */
proto.proto.ProxGetRequest.prototype.getThumb = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setThumb = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * optional string pwd = 6;
 * @return {string}
 */
proto.proto.ProxGetRequest.prototype.getPwd = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetRequest} returns this
 */
proto.proto.ProxGetRequest.prototype.setPwd = function (value) {
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
  proto.proto.ProxGetBlockRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetBlockRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetBlockRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetBlockRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        pwd: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxGetBlockRequest}
 */
proto.proto.ProxGetBlockRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetBlockRequest();
  return proto.proto.ProxGetBlockRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetBlockRequest}
 */
proto.proto.ProxGetBlockRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCid(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPwd(value);
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
proto.proto.ProxGetBlockRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetBlockRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPwd();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGetBlockRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGetBlockRequest} returns this
 */
proto.proto.ProxGetBlockRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetBlockRequest} returns this
 */
proto.proto.ProxGetBlockRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetBlockRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxGetBlockRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetBlockRequest} returns this
 */
proto.proto.ProxGetBlockRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string pwd = 3;
 * @return {string}
 */
proto.proto.ProxGetBlockRequest.prototype.getPwd = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetBlockRequest} returns this
 */
proto.proto.ProxGetBlockRequest.prototype.setPwd = function (value) {
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
  proto.proto.ProxGetCarMetaRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetCarMetaRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetCarMetaRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetCarMetaRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 3, ''),
        pwd: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxGetCarMetaRequest}
 */
proto.proto.ProxGetCarMetaRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetCarMetaRequest();
  return proto.proto.ProxGetCarMetaRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetCarMetaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetCarMetaRequest}
 */
proto.proto.ProxGetCarMetaRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCid(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setPwd(value);
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
proto.proto.ProxGetCarMetaRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetCarMetaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetCarMetaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetCarMetaRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getPwd();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGetCarMetaRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGetCarMetaRequest} returns this
 */
proto.proto.ProxGetCarMetaRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetCarMetaRequest} returns this
 */
proto.proto.ProxGetCarMetaRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetCarMetaRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string Name = 2;
 * @return {string}
 */
proto.proto.ProxGetCarMetaRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetCarMetaRequest} returns this
 */
proto.proto.ProxGetCarMetaRequest.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string cid = 3;
 * @return {string}
 */
proto.proto.ProxGetCarMetaRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetCarMetaRequest} returns this
 */
proto.proto.ProxGetCarMetaRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string pwd = 4;
 * @return {string}
 */
proto.proto.ProxGetCarMetaRequest.prototype.getPwd = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetCarMetaRequest} returns this
 */
proto.proto.ProxGetCarMetaRequest.prototype.setPwd = function (value) {
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
  proto.proto.ProxGetCarMetaResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetCarMetaResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetCarMetaResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetCarMetaResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        meta: msg.getMeta_asB64(),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxGetCarMetaResponse}
 */
proto.proto.ProxGetCarMetaResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetCarMetaResponse();
  return proto.proto.ProxGetCarMetaResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetCarMetaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetCarMetaResponse}
 */
proto.proto.ProxGetCarMetaResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMeta(value);
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
proto.proto.ProxGetCarMetaResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetCarMetaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetCarMetaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetCarMetaResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMeta_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional bytes meta = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxGetCarMetaResponse.prototype.getMeta = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes meta = 1;
 * This is a type-conversion wrapper around `getMeta()`
 * @return {string}
 */
proto.proto.ProxGetCarMetaResponse.prototype.getMeta_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMeta()));
};

/**
 * optional bytes meta = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMeta()`
 * @return {!Uint8Array}
 */
proto.proto.ProxGetCarMetaResponse.prototype.getMeta_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getMeta()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxGetCarMetaResponse} returns this
 */
proto.proto.ProxGetCarMetaResponse.prototype.setMeta = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxGetCarMetaResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetCarMetaResponse} returns this
 */
proto.proto.ProxGetCarMetaResponse.prototype.setStatus = function (value) {
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
  proto.proto.ProxGetInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        key: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxGetInfo}
 */
proto.proto.ProxGetInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetInfo();
  return proto.proto.ProxGetInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetInfo}
 */
proto.proto.ProxGetInfo.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxGetInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxGetInfo.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetInfo} returns this
 */
proto.proto.ProxGetInfo.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.ProxGetInfo.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetInfo} returns this
 */
proto.proto.ProxGetInfo.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxGetRequests.repeatedFields_ = [2, 4];

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
  proto.proto.ProxGetRequests.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetRequests.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetRequests} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetRequests.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        objsList: jspb.Message.toObjectList(msg.getObjsList(), proto.proto.ProxGetInfo.toObject, includeInstance),
        range: (f = msg.getRange()) && proto.proto.ProxRangeRequest.toObject(includeInstance, f),
        prefixesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxGetRequests}
 */
proto.proto.ProxGetRequests.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetRequests();
  return proto.proto.ProxGetRequests.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetRequests} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetRequests}
 */
proto.proto.ProxGetRequests.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxGetInfo();
        reader.readMessage(value, proto.proto.ProxGetInfo.deserializeBinaryFromReader);
        msg.addObjs(value);
        break;
      case 3:
        var value = new proto.proto.ProxRangeRequest();
        reader.readMessage(value, proto.proto.ProxRangeRequest.deserializeBinaryFromReader);
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
proto.proto.ProxGetRequests.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetRequests.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetRequests} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetRequests.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getObjsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.proto.ProxGetInfo.serializeBinaryToWriter);
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxRangeRequest.serializeBinaryToWriter);
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGetRequests.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetRequests.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ProxGetInfo objs = 2;
 * @return {!Array<!proto.proto.ProxGetInfo>}
 */
proto.proto.ProxGetRequests.prototype.getObjsList = function () {
  return /** @type{!Array<!proto.proto.ProxGetInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxGetInfo, 2));
};

/**
 * @param {!Array<!proto.proto.ProxGetInfo>} value
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.setObjsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.proto.ProxGetInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxGetInfo}
 */
proto.proto.ProxGetRequests.prototype.addObjs = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ProxGetInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.clearObjsList = function () {
  return this.setObjsList([]);
};

/**
 * optional ProxRangeRequest range = 3;
 * @return {?proto.proto.ProxRangeRequest}
 */
proto.proto.ProxGetRequests.prototype.getRange = function () {
  return /** @type{?proto.proto.ProxRangeRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxRangeRequest, 3));
};

/**
 * @param {?proto.proto.ProxRangeRequest|undefined} value
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.setRange = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetRequests.prototype.hasRange = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * repeated string prefixes = 4;
 * @return {!Array<string>}
 */
proto.proto.ProxGetRequests.prototype.getPrefixesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.setPrefixesList = function (value) {
  return jspb.Message.setField(this, 4, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.addPrefixes = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxGetRequests} returns this
 */
proto.proto.ProxGetRequests.prototype.clearPrefixesList = function () {
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
  proto.proto.ProxSearchRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxSearchRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxSearchRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxSearchRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        key: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxSearchRequest}
 */
proto.proto.ProxSearchRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxSearchRequest();
  return proto.proto.ProxSearchRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxSearchRequest}
 */
proto.proto.ProxSearchRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxSearchRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxSearchRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxSearchRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxSearchRequest} returns this
 */
proto.proto.ProxSearchRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxSearchRequest} returns this
 */
proto.proto.ProxSearchRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxSearchRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxSearchRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxSearchRequest} returns this
 */
proto.proto.ProxSearchRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.ProxSearchRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxSearchRequest} returns this
 */
proto.proto.ProxSearchRequest.prototype.setKey = function (value) {
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
  proto.proto.ProxObjectInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxObjectInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxObjectInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxObjectInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        object: (f = msg.getObject()) && proto.proto.ProxObject.toObject(includeInstance, f),
        range: (f = msg.getRange()) && proto.proto.ProxRangeRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxObjectInfo}
 */
proto.proto.ProxObjectInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxObjectInfo();
  return proto.proto.ProxObjectInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxObjectInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxObjectInfo}
 */
proto.proto.ProxObjectInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxObject();
        reader.readMessage(value, proto.proto.ProxObject.deserializeBinaryFromReader);
        msg.setObject(value);
        break;
      case 2:
        var value = new proto.proto.ProxRangeRequest();
        reader.readMessage(value, proto.proto.ProxRangeRequest.deserializeBinaryFromReader);
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
proto.proto.ProxObjectInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxObjectInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxObjectInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxObjectInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxObject.serializeBinaryToWriter);
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxRangeRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxObject object = 1;
 * @return {?proto.proto.ProxObject}
 */
proto.proto.ProxObjectInfo.prototype.getObject = function () {
  return /** @type{?proto.proto.ProxObject} */ (jspb.Message.getWrapperField(this, proto.proto.ProxObject, 1));
};

/**
 * @param {?proto.proto.ProxObject|undefined} value
 * @return {!proto.proto.ProxObjectInfo} returns this
 */
proto.proto.ProxObjectInfo.prototype.setObject = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxObjectInfo} returns this
 */
proto.proto.ProxObjectInfo.prototype.clearObject = function () {
  return this.setObject(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxObjectInfo.prototype.hasObject = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxRangeRequest range = 2;
 * @return {?proto.proto.ProxRangeRequest}
 */
proto.proto.ProxObjectInfo.prototype.getRange = function () {
  return /** @type{?proto.proto.ProxRangeRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxRangeRequest, 2));
};

/**
 * @param {?proto.proto.ProxRangeRequest|undefined} value
 * @return {!proto.proto.ProxObjectInfo} returns this
 */
proto.proto.ProxObjectInfo.prototype.setRange = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxObjectInfo} returns this
 */
proto.proto.ProxObjectInfo.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxObjectInfo.prototype.hasRange = function () {
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
  proto.proto.ProxGetBlockResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetBlockResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetBlockResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetBlockResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        chunk: msg.getChunk_asB64(),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxGetBlockResponse}
 */
proto.proto.ProxGetBlockResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetBlockResponse();
  return proto.proto.ProxGetBlockResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetBlockResponse}
 */
proto.proto.ProxGetBlockResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setChunk(value);
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
proto.proto.ProxGetBlockResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetBlockResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxGetBlockResponse.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxGetBlockResponse.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxGetBlockResponse.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxGetBlockResponse} returns this
 */
proto.proto.ProxGetBlockResponse.prototype.setChunk = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxGetBlockResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGetBlockResponse} returns this
 */
proto.proto.ProxGetBlockResponse.prototype.setStatus = function (value) {
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
  proto.proto.ProxFetchResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFetchResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFetchResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFetchResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxFetchResponse}
 */
proto.proto.ProxFetchResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFetchResponse();
  return proto.proto.ProxFetchResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFetchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFetchResponse}
 */
proto.proto.ProxFetchResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxFetchResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFetchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFetchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFetchResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxFetchResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFetchResponse} returns this
 */
proto.proto.ProxFetchResponse.prototype.setStatus = function (value) {
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
proto.proto.ProxGetResponse.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.proto.ProxGetResponse.OptionCase = {
  OPTION_NOT_SET: 0,
  OBJECT: 1,
  CHUNK: 2,
};

/**
 * @return {proto.proto.ProxGetResponse.OptionCase}
 */
proto.proto.ProxGetResponse.prototype.getOptionCase = function () {
  return /** @type {proto.proto.ProxGetResponse.OptionCase} */ (
    jspb.Message.computeOneofCase(this, proto.proto.ProxGetResponse.oneofGroups_[0])
  );
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
  proto.proto.ProxGetResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        object: (f = msg.getObject()) && proto.proto.ProxObjectInfo.toObject(includeInstance, f),
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxGetResponse}
 */
proto.proto.ProxGetResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetResponse();
  return proto.proto.ProxGetResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetResponse}
 */
proto.proto.ProxGetResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxObjectInfo();
        reader.readMessage(value, proto.proto.ProxObjectInfo.deserializeBinaryFromReader);
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
proto.proto.ProxGetResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxObjectInfo.serializeBinaryToWriter);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional ProxObjectInfo object = 1;
 * @return {?proto.proto.ProxObjectInfo}
 */
proto.proto.ProxGetResponse.prototype.getObject = function () {
  return /** @type{?proto.proto.ProxObjectInfo} */ (jspb.Message.getWrapperField(this, proto.proto.ProxObjectInfo, 1));
};

/**
 * @param {?proto.proto.ProxObjectInfo|undefined} value
 * @return {!proto.proto.ProxGetResponse} returns this
 */
proto.proto.ProxGetResponse.prototype.setObject = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.ProxGetResponse.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetResponse} returns this
 */
proto.proto.ProxGetResponse.prototype.clearObject = function () {
  return this.setObject(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetResponse.prototype.hasObject = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxGetResponse.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxGetResponse.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxGetResponse.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxGetResponse} returns this
 */
proto.proto.ProxGetResponse.prototype.setChunk = function (value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxGetResponse.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProxGetResponse} returns this
 */
proto.proto.ProxGetResponse.prototype.clearChunk = function () {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxGetResponse.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetResponse.prototype.hasChunk = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxLinks.repeatedFields_ = [2];

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
  proto.proto.ProxLinks.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxLinks.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxLinks} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxLinks.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        meta: (f = msg.getMeta()) && proto.proto.ProxLink.toObject(includeInstance, f),
        linksList: jspb.Message.toObjectList(msg.getLinksList(), proto.proto.ProxLink.toObject, includeInstance),
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
 * @return {!proto.proto.ProxLinks}
 */
proto.proto.ProxLinks.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxLinks();
  return proto.proto.ProxLinks.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxLinks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxLinks}
 */
proto.proto.ProxLinks.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxLink();
        reader.readMessage(value, proto.proto.ProxLink.deserializeBinaryFromReader);
        msg.setMeta(value);
        break;
      case 2:
        var value = new proto.proto.ProxLink();
        reader.readMessage(value, proto.proto.ProxLink.deserializeBinaryFromReader);
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
proto.proto.ProxLinks.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxLinks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxLinks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxLinks.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxLink.serializeBinaryToWriter);
  }
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.proto.ProxLink.serializeBinaryToWriter);
  }
};

/**
 * optional ProxLink meta = 1;
 * @return {?proto.proto.ProxLink}
 */
proto.proto.ProxLinks.prototype.getMeta = function () {
  return /** @type{?proto.proto.ProxLink} */ (jspb.Message.getWrapperField(this, proto.proto.ProxLink, 1));
};

/**
 * @param {?proto.proto.ProxLink|undefined} value
 * @return {!proto.proto.ProxLinks} returns this
 */
proto.proto.ProxLinks.prototype.setMeta = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxLinks} returns this
 */
proto.proto.ProxLinks.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxLinks.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ProxLink links = 2;
 * @return {!Array<!proto.proto.ProxLink>}
 */
proto.proto.ProxLinks.prototype.getLinksList = function () {
  return /** @type{!Array<!proto.proto.ProxLink>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxLink, 2));
};

/**
 * @param {!Array<!proto.proto.ProxLink>} value
 * @return {!proto.proto.ProxLinks} returns this
 */
proto.proto.ProxLinks.prototype.setLinksList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.proto.ProxLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxLink}
 */
proto.proto.ProxLinks.prototype.addLinks = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ProxLink, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxLinks} returns this
 */
proto.proto.ProxLinks.prototype.clearLinksList = function () {
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
  proto.proto.ProxLink.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxLink.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxLink} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxLink.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
        path: jspb.Message.getFieldWithDefault(msg, 2, ''),
        hash: jspb.Message.getFieldWithDefault(msg, 3, ''),
        type: jspb.Message.getFieldWithDefault(msg, 4, 0),
        size: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
 * @return {!proto.proto.ProxLink}
 */
proto.proto.ProxLink.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxLink();
  return proto.proto.ProxLink.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxLink}
 */
proto.proto.ProxLink.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxLink.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxLink.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.proto.ProxLink.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxLink} returns this
 */
proto.proto.ProxLink.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string path = 2;
 * @return {string}
 */
proto.proto.ProxLink.prototype.getPath = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxLink} returns this
 */
proto.proto.ProxLink.prototype.setPath = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string hash = 3;
 * @return {string}
 */
proto.proto.ProxLink.prototype.getHash = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxLink} returns this
 */
proto.proto.ProxLink.prototype.setHash = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.proto.ProxLink.prototype.getType = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxLink} returns this
 */
proto.proto.ProxLink.prototype.setType = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.proto.ProxLink.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxLink} returns this
 */
proto.proto.ProxLink.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.ProxSearchResponse.oneofGroups_ = [[1, 2, 3]];

/**
 * @enum {number}
 */
proto.proto.ProxSearchResponse.OptionCase = {
  OPTION_NOT_SET: 0,
  OBJECT: 1,
  LINKS: 2,
  CHUNK: 3,
};

/**
 * @return {proto.proto.ProxSearchResponse.OptionCase}
 */
proto.proto.ProxSearchResponse.prototype.getOptionCase = function () {
  return /** @type {proto.proto.ProxSearchResponse.OptionCase} */ (
    jspb.Message.computeOneofCase(this, proto.proto.ProxSearchResponse.oneofGroups_[0])
  );
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
  proto.proto.ProxSearchResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxSearchResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxSearchResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxSearchResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        object: (f = msg.getObject()) && proto.proto.ProxLink.toObject(includeInstance, f),
        links: (f = msg.getLinks()) && proto.proto.ProxLinks.toObject(includeInstance, f),
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxSearchResponse}
 */
proto.proto.ProxSearchResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxSearchResponse();
  return proto.proto.ProxSearchResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxSearchResponse}
 */
proto.proto.ProxSearchResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxLink();
        reader.readMessage(value, proto.proto.ProxLink.deserializeBinaryFromReader);
        msg.setObject(value);
        break;
      case 2:
        var value = new proto.proto.ProxLinks();
        reader.readMessage(value, proto.proto.ProxLinks.deserializeBinaryFromReader);
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
proto.proto.ProxSearchResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxSearchResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxLink.serializeBinaryToWriter);
  }
  f = message.getLinks();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxLinks.serializeBinaryToWriter);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(3, f);
  }
};

/**
 * optional ProxLink object = 1;
 * @return {?proto.proto.ProxLink}
 */
proto.proto.ProxSearchResponse.prototype.getObject = function () {
  return /** @type{?proto.proto.ProxLink} */ (jspb.Message.getWrapperField(this, proto.proto.ProxLink, 1));
};

/**
 * @param {?proto.proto.ProxLink|undefined} value
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.setObject = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.ProxSearchResponse.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.clearObject = function () {
  return this.setObject(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxSearchResponse.prototype.hasObject = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxLinks links = 2;
 * @return {?proto.proto.ProxLinks}
 */
proto.proto.ProxSearchResponse.prototype.getLinks = function () {
  return /** @type{?proto.proto.ProxLinks} */ (jspb.Message.getWrapperField(this, proto.proto.ProxLinks, 2));
};

/**
 * @param {?proto.proto.ProxLinks|undefined} value
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.setLinks = function (value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.ProxSearchResponse.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.clearLinks = function () {
  return this.setLinks(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxSearchResponse.prototype.hasLinks = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional bytes chunk = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxSearchResponse.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * optional bytes chunk = 3;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxSearchResponse.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxSearchResponse.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.setChunk = function (value) {
  return jspb.Message.setOneofField(this, 3, proto.proto.ProxSearchResponse.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProxSearchResponse} returns this
 */
proto.proto.ProxSearchResponse.prototype.clearChunk = function () {
  return jspb.Message.setOneofField(this, 3, proto.proto.ProxSearchResponse.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxSearchResponse.prototype.hasChunk = function () {
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
  proto.proto.ProxPutObjectResult.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        md5: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxPutObjectResult}
 */
proto.proto.ProxPutObjectResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectResult();
  return proto.proto.ProxPutObjectResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectResult}
 */
proto.proto.ProxPutObjectResult.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPutObjectResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.ProxPutObjectResult.prototype.getMd5 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResult} returns this
 */
proto.proto.ProxPutObjectResult.prototype.setMd5 = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxPutObjectResult.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResult} returns this
 */
proto.proto.ProxPutObjectResult.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.ProxPutObjectResult.prototype.getLastmodified = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectResult} returns this
 */
proto.proto.ProxPutObjectResult.prototype.setLastmodified = function (value) {
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
  proto.proto.ProxPutObjectPartRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectPartRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectPartRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectPartRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        md5: jspb.Message.getFieldWithDefault(msg, 1, ''),
        key: jspb.Message.getFieldWithDefault(msg, 2, ''),
        contentlength: jspb.Message.getFieldWithDefault(msg, 3, 0),
        partid: jspb.Message.getFieldWithDefault(msg, 4, 0),
        uploadid: jspb.Message.getFieldWithDefault(msg, 5, ''),
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
 * @return {!proto.proto.ProxPutObjectPartRequest}
 */
proto.proto.ProxPutObjectPartRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectPartRequest();
  return proto.proto.ProxPutObjectPartRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectPartRequest}
 */
proto.proto.ProxPutObjectPartRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPutObjectPartRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectPartRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getContentlength();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getPartid();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.proto.ProxPutObjectPartRequest.prototype.getMd5 = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectPartRequest} returns this
 */
proto.proto.ProxPutObjectPartRequest.prototype.setMd5 = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.ProxPutObjectPartRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectPartRequest} returns this
 */
proto.proto.ProxPutObjectPartRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 contentLength = 3;
 * @return {number}
 */
proto.proto.ProxPutObjectPartRequest.prototype.getContentlength = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPutObjectPartRequest} returns this
 */
proto.proto.ProxPutObjectPartRequest.prototype.setContentlength = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 partId = 4;
 * @return {number}
 */
proto.proto.ProxPutObjectPartRequest.prototype.getPartid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPutObjectPartRequest} returns this
 */
proto.proto.ProxPutObjectPartRequest.prototype.setPartid = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional string uploadId = 5;
 * @return {string}
 */
proto.proto.ProxPutObjectPartRequest.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectPartRequest} returns this
 */
proto.proto.ProxPutObjectPartRequest.prototype.setUploadid = function (value) {
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
  proto.proto.ProxPutObjectPartReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectPartReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectPartReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectPartReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxPutObjectPartRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxPutObjectPartReq}
 */
proto.proto.ProxPutObjectPartReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectPartReq();
  return proto.proto.ProxPutObjectPartReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectPartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectPartReq}
 */
proto.proto.ProxPutObjectPartReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxPutObjectPartRequest();
        reader.readMessage(value, proto.proto.ProxPutObjectPartRequest.deserializeBinaryFromReader);
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
proto.proto.ProxPutObjectPartReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectPartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectPartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectPartReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxPutObjectPartRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPutObjectPartReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPutObjectPartReq} returns this
 */
proto.proto.ProxPutObjectPartReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectPartReq} returns this
 */
proto.proto.ProxPutObjectPartReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectPartReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxPutObjectPartRequest request = 2;
 * @return {?proto.proto.ProxPutObjectPartRequest}
 */
proto.proto.ProxPutObjectPartReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxPutObjectPartRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPutObjectPartRequest, 2));
};

/**
 * @param {?proto.proto.ProxPutObjectPartRequest|undefined} value
 * @return {!proto.proto.ProxPutObjectPartReq} returns this
 */
proto.proto.ProxPutObjectPartReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectPartReq} returns this
 */
proto.proto.ProxPutObjectPartReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectPartReq.prototype.hasRequest = function () {
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
proto.proto.ProxPutObjectPartOpt.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.proto.ProxPutObjectPartOpt.OptionCase = {
  OPTION_NOT_SET: 0,
  REQ: 1,
  CHUNK: 2,
};

/**
 * @return {proto.proto.ProxPutObjectPartOpt.OptionCase}
 */
proto.proto.ProxPutObjectPartOpt.prototype.getOptionCase = function () {
  return /** @type {proto.proto.ProxPutObjectPartOpt.OptionCase} */ (
    jspb.Message.computeOneofCase(this, proto.proto.ProxPutObjectPartOpt.oneofGroups_[0])
  );
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
  proto.proto.ProxPutObjectPartOpt.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectPartOpt.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectPartOpt} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectPartOpt.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        req: (f = msg.getReq()) && proto.proto.ProxPutObjectPartReq.toObject(includeInstance, f),
        chunk: msg.getChunk_asB64(),
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
 * @return {!proto.proto.ProxPutObjectPartOpt}
 */
proto.proto.ProxPutObjectPartOpt.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectPartOpt();
  return proto.proto.ProxPutObjectPartOpt.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectPartOpt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectPartOpt}
 */
proto.proto.ProxPutObjectPartOpt.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxPutObjectPartReq();
        reader.readMessage(value, proto.proto.ProxPutObjectPartReq.deserializeBinaryFromReader);
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
proto.proto.ProxPutObjectPartOpt.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectPartOpt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectPartOpt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectPartOpt.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxPutObjectPartReq.serializeBinaryToWriter);
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional ProxPutObjectPartReq req = 1;
 * @return {?proto.proto.ProxPutObjectPartReq}
 */
proto.proto.ProxPutObjectPartOpt.prototype.getReq = function () {
  return /** @type{?proto.proto.ProxPutObjectPartReq} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPutObjectPartReq, 1));
};

/**
 * @param {?proto.proto.ProxPutObjectPartReq|undefined} value
 * @return {!proto.proto.ProxPutObjectPartOpt} returns this
 */
proto.proto.ProxPutObjectPartOpt.prototype.setReq = function (value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.ProxPutObjectPartOpt.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPutObjectPartOpt} returns this
 */
proto.proto.ProxPutObjectPartOpt.prototype.clearReq = function () {
  return this.setReq(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectPartOpt.prototype.hasReq = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes chunk = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ProxPutObjectPartOpt.prototype.getChunk = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes chunk = 2;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.proto.ProxPutObjectPartOpt.prototype.getChunk_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getChunk()));
};

/**
 * optional bytes chunk = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.proto.ProxPutObjectPartOpt.prototype.getChunk_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.proto.ProxPutObjectPartOpt} returns this
 */
proto.proto.ProxPutObjectPartOpt.prototype.setChunk = function (value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxPutObjectPartOpt.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ProxPutObjectPartOpt} returns this
 */
proto.proto.ProxPutObjectPartOpt.prototype.clearChunk = function () {
  return jspb.Message.setOneofField(this, 2, proto.proto.ProxPutObjectPartOpt.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPutObjectPartOpt.prototype.hasChunk = function () {
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
  proto.proto.ProxPutObjectPartResult.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPutObjectPartResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPutObjectPartResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPutObjectPartResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        etag: jspb.Message.getFieldWithDefault(msg, 1, ''),
        size: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.proto.ProxPutObjectPartResult}
 */
proto.proto.ProxPutObjectPartResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPutObjectPartResult();
  return proto.proto.ProxPutObjectPartResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPutObjectPartResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPutObjectPartResult}
 */
proto.proto.ProxPutObjectPartResult.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPutObjectPartResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPutObjectPartResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPutObjectPartResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPutObjectPartResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
};

/**
 * optional string etag = 1;
 * @return {string}
 */
proto.proto.ProxPutObjectPartResult.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPutObjectPartResult} returns this
 */
proto.proto.ProxPutObjectPartResult.prototype.setEtag = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.proto.ProxPutObjectPartResult.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPutObjectPartResult} returns this
 */
proto.proto.ProxPutObjectPartResult.prototype.setSize = function (value) {
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
  proto.proto.ProxListPartsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListPartsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListPartsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListPartsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        uploadid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        maxparts: jspb.Message.getFieldWithDefault(msg, 3, 0),
        partnumbermarker: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxListPartsRequest}
 */
proto.proto.ProxListPartsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListPartsRequest();
  return proto.proto.ProxListPartsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListPartsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListPartsRequest}
 */
proto.proto.ProxListPartsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxListPartsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListPartsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListPartsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListPartsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getMaxparts();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getPartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxListPartsRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListPartsRequest} returns this
 */
proto.proto.ProxListPartsRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ProxListPartsRequest.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListPartsRequest} returns this
 */
proto.proto.ProxListPartsRequest.prototype.setUploadid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 maxParts = 3;
 * @return {number}
 */
proto.proto.ProxListPartsRequest.prototype.getMaxparts = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListPartsRequest} returns this
 */
proto.proto.ProxListPartsRequest.prototype.setMaxparts = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 partNumberMarker = 4;
 * @return {number}
 */
proto.proto.ProxListPartsRequest.prototype.getPartnumbermarker = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListPartsRequest} returns this
 */
proto.proto.ProxListPartsRequest.prototype.setPartnumbermarker = function (value) {
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
  proto.proto.ProxListUploadRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListUploadRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListUploadRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListUploadRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        delimiter: jspb.Message.getFieldWithDefault(msg, 1, ''),
        encodingtype: jspb.Message.getFieldWithDefault(msg, 2, ''),
        maxuploads: jspb.Message.getFieldWithDefault(msg, 3, 0),
        keymarker: jspb.Message.getFieldWithDefault(msg, 4, ''),
        prefix: jspb.Message.getFieldWithDefault(msg, 5, ''),
        uploadidmarker: jspb.Message.getFieldWithDefault(msg, 6, ''),
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
 * @return {!proto.proto.ProxListUploadRequest}
 */
proto.proto.ProxListUploadRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListUploadRequest();
  return proto.proto.ProxListUploadRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListUploadRequest}
 */
proto.proto.ProxListUploadRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxListUploadRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListUploadRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEncodingtype();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getMaxuploads();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getKeymarker();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getUploadidmarker();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

/**
 * optional string delimiter = 1;
 * @return {string}
 */
proto.proto.ProxListUploadRequest.prototype.getDelimiter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setDelimiter = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string encodingType = 2;
 * @return {string}
 */
proto.proto.ProxListUploadRequest.prototype.getEncodingtype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setEncodingtype = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 maxUploads = 3;
 * @return {number}
 */
proto.proto.ProxListUploadRequest.prototype.getMaxuploads = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setMaxuploads = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional string keyMarker = 4;
 * @return {string}
 */
proto.proto.ProxListUploadRequest.prototype.getKeymarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setKeymarker = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string prefix = 5;
 * @return {string}
 */
proto.proto.ProxListUploadRequest.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string uploadIdMarker = 6;
 * @return {string}
 */
proto.proto.ProxListUploadRequest.prototype.getUploadidmarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListUploadRequest} returns this
 */
proto.proto.ProxListUploadRequest.prototype.setUploadidmarker = function (value) {
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
  proto.proto.ProxListUploadReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListUploadReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListUploadReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListUploadReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxListUploadRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxListUploadReq}
 */
proto.proto.ProxListUploadReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListUploadReq();
  return proto.proto.ProxListUploadReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListUploadReq}
 */
proto.proto.ProxListUploadReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxListUploadRequest();
        reader.readMessage(value, proto.proto.ProxListUploadRequest.deserializeBinaryFromReader);
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
proto.proto.ProxListUploadReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListUploadReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxListUploadRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxListUploadReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxListUploadReq} returns this
 */
proto.proto.ProxListUploadReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListUploadReq} returns this
 */
proto.proto.ProxListUploadReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListUploadReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxListUploadRequest request = 2;
 * @return {?proto.proto.ProxListUploadRequest}
 */
proto.proto.ProxListUploadReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxListUploadRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxListUploadRequest, 2));
};

/**
 * @param {?proto.proto.ProxListUploadRequest|undefined} value
 * @return {!proto.proto.ProxListUploadReq} returns this
 */
proto.proto.ProxListUploadReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListUploadReq} returns this
 */
proto.proto.ProxListUploadReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListUploadReq.prototype.hasRequest = function () {
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
  proto.proto.ProxListPartsReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListPartsReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListPartsReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListPartsReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxListPartsRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxListPartsReq}
 */
proto.proto.ProxListPartsReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListPartsReq();
  return proto.proto.ProxListPartsReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListPartsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListPartsReq}
 */
proto.proto.ProxListPartsReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxListPartsRequest();
        reader.readMessage(value, proto.proto.ProxListPartsRequest.deserializeBinaryFromReader);
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
proto.proto.ProxListPartsReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListPartsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListPartsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListPartsReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxListPartsRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxListPartsReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxListPartsReq} returns this
 */
proto.proto.ProxListPartsReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListPartsReq} returns this
 */
proto.proto.ProxListPartsReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListPartsReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxListPartsRequest request = 2;
 * @return {?proto.proto.ProxListPartsRequest}
 */
proto.proto.ProxListPartsReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxListPartsRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxListPartsRequest, 2));
};

/**
 * @param {?proto.proto.ProxListPartsRequest|undefined} value
 * @return {!proto.proto.ProxListPartsReq} returns this
 */
proto.proto.ProxListPartsReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListPartsReq} returns this
 */
proto.proto.ProxListPartsReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListPartsReq.prototype.hasRequest = function () {
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
  proto.proto.ProxPart.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPart.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPart} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPart.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        partnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
        etag: jspb.Message.getFieldWithDefault(msg, 2, ''),
        lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ''),
        size: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxPart}
 */
proto.proto.ProxPart.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPart();
  return proto.proto.ProxPart.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPart}
 */
proto.proto.ProxPart.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPart.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPart.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPartnumber();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional int64 partNumber = 1;
 * @return {number}
 */
proto.proto.ProxPart.prototype.getPartnumber = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPart} returns this
 */
proto.proto.ProxPart.prototype.setPartnumber = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.ProxPart.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPart} returns this
 */
proto.proto.ProxPart.prototype.setEtag = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.ProxPart.prototype.getLastmodified = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPart} returns this
 */
proto.proto.ProxPart.prototype.setLastmodified = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.ProxPart.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPart} returns this
 */
proto.proto.ProxPart.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxListMultipartUploadResponse.repeatedFields_ = [8, 10];

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
  proto.proto.ProxListMultipartUploadResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListMultipartUploadResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListMultipartUploadResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListMultipartUploadResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        prefix: jspb.Message.getFieldWithDefault(msg, 1, ''),
        keymarker: jspb.Message.getFieldWithDefault(msg, 2, ''),
        uploadidmarker: jspb.Message.getFieldWithDefault(msg, 3, ''),
        nextkeymarker: jspb.Message.getFieldWithDefault(msg, 4, ''),
        nextuploadidmarker: jspb.Message.getFieldWithDefault(msg, 5, ''),
        maxuploads: jspb.Message.getFieldWithDefault(msg, 6, 0),
        istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
        uploadsList: jspb.Message.toObjectList(msg.getUploadsList(), proto.proto.ProxUpload.toObject, includeInstance),
        delimiter: jspb.Message.getFieldWithDefault(msg, 9, ''),
        commonprefixesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxListMultipartUploadResponse}
 */
proto.proto.ProxListMultipartUploadResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListMultipartUploadResponse();
  return proto.proto.ProxListMultipartUploadResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListMultipartUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListMultipartUploadResponse}
 */
proto.proto.ProxListMultipartUploadResponse.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxUpload();
        reader.readMessage(value, proto.proto.ProxUpload.deserializeBinaryFromReader);
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
proto.proto.ProxListMultipartUploadResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListMultipartUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListMultipartUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListMultipartUploadResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getKeymarker();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getUploadidmarker();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getNextkeymarker();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getNextuploadidmarker();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getMaxuploads();
  if (f !== 0) {
    writer.writeInt64(6, f);
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(7, f);
  }
  f = message.getUploadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(8, f, proto.proto.ProxUpload.serializeBinaryToWriter);
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getCommonprefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(10, f);
  }
};

/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string keyMarker = 2;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getKeymarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setKeymarker = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string UploadIdMarker = 3;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getUploadidmarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setUploadidmarker = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string NextKeyMarker = 4;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getNextkeymarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setNextkeymarker = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string NextUploadIdMarker = 5;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getNextuploadidmarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setNextuploadidmarker = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional int64 MaxUploads = 6;
 * @return {number}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getMaxuploads = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setMaxuploads = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional bool isTruncated = 7;
 * @return {boolean}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getIstruncated = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setIstruncated = function (value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};

/**
 * repeated ProxUpload uploads = 8;
 * @return {!Array<!proto.proto.ProxUpload>}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getUploadsList = function () {
  return /** @type{!Array<!proto.proto.ProxUpload>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxUpload, 8));
};

/**
 * @param {!Array<!proto.proto.ProxUpload>} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setUploadsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};

/**
 * @param {!proto.proto.ProxUpload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxUpload}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.addUploads = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.ProxUpload, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.clearUploadsList = function () {
  return this.setUploadsList([]);
};

/**
 * optional string delimiter = 9;
 * @return {string}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getDelimiter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setDelimiter = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};

/**
 * repeated string commonPrefixes = 10;
 * @return {!Array<string>}
 */
proto.proto.ProxListMultipartUploadResponse.prototype.getCommonprefixesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.setCommonprefixesList = function (value) {
  return jspb.Message.setField(this, 10, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.addCommonprefixes = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListMultipartUploadResponse} returns this
 */
proto.proto.ProxListMultipartUploadResponse.prototype.clearCommonprefixesList = function () {
  return this.setCommonprefixesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxListPartsResponse.repeatedFields_ = [6];

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
  proto.proto.ProxListPartsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListPartsResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListPartsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListPartsResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        uploadid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        partnumbermarker: jspb.Message.getFieldWithDefault(msg, 3, 0),
        nextpartnumbermarker: jspb.Message.getFieldWithDefault(msg, 4, 0),
        istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
        partsList: jspb.Message.toObjectList(msg.getPartsList(), proto.proto.ProxPart.toObject, includeInstance),
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
 * @return {!proto.proto.ProxListPartsResponse}
 */
proto.proto.ProxListPartsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListPartsResponse();
  return proto.proto.ProxListPartsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListPartsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListPartsResponse}
 */
proto.proto.ProxListPartsResponse.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxPart();
        reader.readMessage(value, proto.proto.ProxPart.deserializeBinaryFromReader);
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
proto.proto.ProxListPartsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListPartsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListPartsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListPartsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getNextpartnumbermarker();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(5, f);
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(6, f, proto.proto.ProxPart.serializeBinaryToWriter);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxListPartsResponse.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ProxListPartsResponse.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setUploadid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 partNumberMarker = 3;
 * @return {number}
 */
proto.proto.ProxListPartsResponse.prototype.getPartnumbermarker = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setPartnumbermarker = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 nextPartNumberMarker = 4;
 * @return {number}
 */
proto.proto.ProxListPartsResponse.prototype.getNextpartnumbermarker = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setNextpartnumbermarker = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional bool isTruncated = 5;
 * @return {boolean}
 */
proto.proto.ProxListPartsResponse.prototype.getIstruncated = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setIstruncated = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * repeated ProxPart parts = 6;
 * @return {!Array<!proto.proto.ProxPart>}
 */
proto.proto.ProxListPartsResponse.prototype.getPartsList = function () {
  return /** @type{!Array<!proto.proto.ProxPart>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPart, 6));
};

/**
 * @param {!Array<!proto.proto.ProxPart>} value
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.setPartsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};

/**
 * @param {!proto.proto.ProxPart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPart}
 */
proto.proto.ProxListPartsResponse.prototype.addParts = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.ProxPart, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListPartsResponse} returns this
 */
proto.proto.ProxListPartsResponse.prototype.clearPartsList = function () {
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
  proto.proto.ProxUpload.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxUpload.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxUpload} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxUpload.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        uploadid: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxUpload}
 */
proto.proto.ProxUpload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxUpload();
  return proto.proto.ProxUpload.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxUpload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxUpload}
 */
proto.proto.ProxUpload.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxUpload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxUpload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxUpload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxUpload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxUpload.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxUpload} returns this
 */
proto.proto.ProxUpload.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string uploadId = 2;
 * @return {string}
 */
proto.proto.ProxUpload.prototype.getUploadid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxUpload} returns this
 */
proto.proto.ProxUpload.prototype.setUploadid = function (value) {
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
  proto.proto.ProxListObjectsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListObjectsRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListObjectsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListObjectsRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        prefix: jspb.Message.getFieldWithDefault(msg, 1, ''),
        delimiter: jspb.Message.getFieldWithDefault(msg, 2, ''),
        encodingType: jspb.Message.getFieldWithDefault(msg, 3, ''),
        maxKeys: jspb.Message.getFieldWithDefault(msg, 4, 0),
        startAfter: jspb.Message.getFieldWithDefault(msg, 5, ''),
        continuationToken: jspb.Message.getFieldWithDefault(msg, 6, ''),
        versionIdMarker: jspb.Message.getFieldWithDefault(msg, 7, ''),
        keyMarker: jspb.Message.getFieldWithDefault(msg, 8, ''),
        orderby: jspb.Message.getFieldWithDefault(msg, 9, ''),
        tags: jspb.Message.getFieldWithDefault(msg, 10, ''),
        category: jspb.Message.getFieldWithDefault(msg, 11, 0),
        date: jspb.Message.getFieldWithDefault(msg, 12, ''),
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
 * @return {!proto.proto.ProxListObjectsRequest}
 */
proto.proto.ProxListObjectsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListObjectsRequest();
  return proto.proto.ProxListObjectsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListObjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListObjectsRequest}
 */
proto.proto.ProxListObjectsRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxListObjectsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListObjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListObjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListObjectsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getEncodingType();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getMaxKeys();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getStartAfter();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getContinuationToken();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getVersionIdMarker();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getKeyMarker();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getOrderby();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(10, f);
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(11, f);
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(12, f);
  }
};

/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string delimiter = 2;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getDelimiter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setDelimiter = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string encoding_type = 3;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getEncodingType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setEncodingType = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 max_keys = 4;
 * @return {number}
 */
proto.proto.ProxListObjectsRequest.prototype.getMaxKeys = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setMaxKeys = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional string start_after = 5;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getStartAfter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setStartAfter = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string continuation_token = 6;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getContinuationToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setContinuationToken = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional string version_id_marker = 7;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getVersionIdMarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setVersionIdMarker = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional string key_marker = 8;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getKeyMarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setKeyMarker = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional string orderby = 9;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getOrderby = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setOrderby = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};

/**
 * optional string tags = 10;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getTags = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setTags = function (value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};

/**
 * optional int32 category = 11;
 * @return {number}
 */
proto.proto.ProxListObjectsRequest.prototype.getCategory = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setCategory = function (value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};

/**
 * optional string date = 12;
 * @return {string}
 */
proto.proto.ProxListObjectsRequest.prototype.getDate = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsRequest} returns this
 */
proto.proto.ProxListObjectsRequest.prototype.setDate = function (value) {
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
  proto.proto.ProxListObjectsReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListObjectsReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListObjectsReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListObjectsReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxListObjectsRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxListObjectsReq}
 */
proto.proto.ProxListObjectsReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListObjectsReq();
  return proto.proto.ProxListObjectsReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListObjectsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListObjectsReq}
 */
proto.proto.ProxListObjectsReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxListObjectsRequest();
        reader.readMessage(value, proto.proto.ProxListObjectsRequest.deserializeBinaryFromReader);
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
proto.proto.ProxListObjectsReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListObjectsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListObjectsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListObjectsReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxListObjectsRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxListObjectsReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxListObjectsReq} returns this
 */
proto.proto.ProxListObjectsReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListObjectsReq} returns this
 */
proto.proto.ProxListObjectsReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListObjectsReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxListObjectsRequest request = 2;
 * @return {?proto.proto.ProxListObjectsRequest}
 */
proto.proto.ProxListObjectsReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxListObjectsRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxListObjectsRequest, 2));
};

/**
 * @param {?proto.proto.ProxListObjectsRequest|undefined} value
 * @return {!proto.proto.ProxListObjectsReq} returns this
 */
proto.proto.ProxListObjectsReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxListObjectsReq} returns this
 */
proto.proto.ProxListObjectsReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxListObjectsReq.prototype.hasRequest = function () {
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
  proto.proto.ProxImageCameraInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxImageCameraInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxImageCameraInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxImageCameraInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        make: jspb.Message.getFieldWithDefault(msg, 1, ''),
        model: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxImageCameraInfo}
 */
proto.proto.ProxImageCameraInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxImageCameraInfo();
  return proto.proto.ProxImageCameraInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxImageCameraInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxImageCameraInfo}
 */
proto.proto.ProxImageCameraInfo.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxImageCameraInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxImageCameraInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxImageCameraInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxImageCameraInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMake();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string make = 1;
 * @return {string}
 */
proto.proto.ProxImageCameraInfo.prototype.getMake = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageCameraInfo} returns this
 */
proto.proto.ProxImageCameraInfo.prototype.setMake = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string model = 2;
 * @return {string}
 */
proto.proto.ProxImageCameraInfo.prototype.getModel = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageCameraInfo} returns this
 */
proto.proto.ProxImageCameraInfo.prototype.setModel = function (value) {
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
  proto.proto.ProxImageCameraResolution.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxImageCameraResolution.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxImageCameraResolution} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxImageCameraResolution.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        weight: jspb.Message.getFieldWithDefault(msg, 1, 0),
        height: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.proto.ProxImageCameraResolution}
 */
proto.proto.ProxImageCameraResolution.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxImageCameraResolution();
  return proto.proto.ProxImageCameraResolution.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxImageCameraResolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxImageCameraResolution}
 */
proto.proto.ProxImageCameraResolution.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxImageCameraResolution.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxImageCameraResolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxImageCameraResolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxImageCameraResolution.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(2, f);
  }
};

/**
 * optional int32 weight = 1;
 * @return {number}
 */
proto.proto.ProxImageCameraResolution.prototype.getWeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxImageCameraResolution} returns this
 */
proto.proto.ProxImageCameraResolution.prototype.setWeight = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.proto.ProxImageCameraResolution.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxImageCameraResolution} returns this
 */
proto.proto.ProxImageCameraResolution.prototype.setHeight = function (value) {
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
  proto.proto.ProxImageAddition.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxImageAddition.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxImageAddition} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxImageAddition.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        datetime: jspb.Message.getFieldWithDefault(msg, 1, ''),
        iso: jspb.Message.getFieldWithDefault(msg, 2, ''),
        exptime: jspb.Message.getFieldWithDefault(msg, 3, ''),
        aperture: jspb.Message.getFieldWithDefault(msg, 4, ''),
        orientation: jspb.Message.getFieldWithDefault(msg, 5, ''),
        flash: jspb.Message.getFieldWithDefault(msg, 6, ''),
        software: jspb.Message.getFieldWithDefault(msg, 7, ''),
        exposuretime: jspb.Message.getFieldWithDefault(msg, 8, ''),
        focallength: jspb.Message.getFieldWithDefault(msg, 9, ''),
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
 * @return {!proto.proto.ProxImageAddition}
 */
proto.proto.ProxImageAddition.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxImageAddition();
  return proto.proto.ProxImageAddition.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxImageAddition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxImageAddition}
 */
proto.proto.ProxImageAddition.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxImageAddition.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxImageAddition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxImageAddition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxImageAddition.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDatetime();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getExptime();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getAperture();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getOrientation();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getFlash();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getSoftware();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getExposuretime();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getFocallength();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
};

/**
 * optional string dateTime = 1;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getDatetime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setDatetime = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string iso = 2;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getIso = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setIso = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string expTime = 3;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getExptime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setExptime = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string aperture = 4;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getAperture = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setAperture = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string orientation = 5;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getOrientation = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setOrientation = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string flash = 6;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getFlash = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setFlash = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional string software = 7;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getSoftware = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setSoftware = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional string exposureTime = 8;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getExposuretime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setExposuretime = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional string focalLength = 9;
 * @return {string}
 */
proto.proto.ProxImageAddition.prototype.getFocallength = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxImageAddition} returns this
 */
proto.proto.ProxImageAddition.prototype.setFocallength = function (value) {
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
  proto.proto.ProxGpsInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGpsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGpsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGpsInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        pb_long: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
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
 * @return {!proto.proto.ProxGpsInfo}
 */
proto.proto.ProxGpsInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGpsInfo();
  return proto.proto.ProxGpsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGpsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGpsInfo}
 */
proto.proto.ProxGpsInfo.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxGpsInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGpsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGpsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGpsInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeFloat(1, f);
  }
  f = message.getLong();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
};

/**
 * optional float lat = 1;
 * @return {number}
 */
proto.proto.ProxGpsInfo.prototype.getLat = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxGpsInfo} returns this
 */
proto.proto.ProxGpsInfo.prototype.setLat = function (value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};

/**
 * optional float long = 2;
 * @return {number}
 */
proto.proto.ProxGpsInfo.prototype.getLong = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxGpsInfo} returns this
 */
proto.proto.ProxGpsInfo.prototype.setLong = function (value) {
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
  proto.proto.ProxImageInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxImageInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxImageInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxImageInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        camerainfo: (f = msg.getCamerainfo()) && proto.proto.ProxImageCameraInfo.toObject(includeInstance, f),
        resolution: (f = msg.getResolution()) && proto.proto.ProxImageCameraResolution.toObject(includeInstance, f),
        gps: (f = msg.getGps()) && proto.proto.ProxGpsInfo.toObject(includeInstance, f),
        addition: (f = msg.getAddition()) && proto.proto.ProxImageAddition.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxImageInfo}
 */
proto.proto.ProxImageInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxImageInfo();
  return proto.proto.ProxImageInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxImageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxImageInfo}
 */
proto.proto.ProxImageInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxImageCameraInfo();
        reader.readMessage(value, proto.proto.ProxImageCameraInfo.deserializeBinaryFromReader);
        msg.setCamerainfo(value);
        break;
      case 2:
        var value = new proto.proto.ProxImageCameraResolution();
        reader.readMessage(value, proto.proto.ProxImageCameraResolution.deserializeBinaryFromReader);
        msg.setResolution(value);
        break;
      case 3:
        var value = new proto.proto.ProxGpsInfo();
        reader.readMessage(value, proto.proto.ProxGpsInfo.deserializeBinaryFromReader);
        msg.setGps(value);
        break;
      case 4:
        var value = new proto.proto.ProxImageAddition();
        reader.readMessage(value, proto.proto.ProxImageAddition.deserializeBinaryFromReader);
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
proto.proto.ProxImageInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxImageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxImageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxImageInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCamerainfo();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxImageCameraInfo.serializeBinaryToWriter);
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxImageCameraResolution.serializeBinaryToWriter);
  }
  f = message.getGps();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxGpsInfo.serializeBinaryToWriter);
  }
  f = message.getAddition();
  if (f != null) {
    writer.writeMessage(4, f, proto.proto.ProxImageAddition.serializeBinaryToWriter);
  }
};

/**
 * optional ProxImageCameraInfo cameraInfo = 1;
 * @return {?proto.proto.ProxImageCameraInfo}
 */
proto.proto.ProxImageInfo.prototype.getCamerainfo = function () {
  return /** @type{?proto.proto.ProxImageCameraInfo} */ (jspb.Message.getWrapperField(this, proto.proto.ProxImageCameraInfo, 1));
};

/**
 * @param {?proto.proto.ProxImageCameraInfo|undefined} value
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.setCamerainfo = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.clearCamerainfo = function () {
  return this.setCamerainfo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxImageInfo.prototype.hasCamerainfo = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxImageCameraResolution resolution = 2;
 * @return {?proto.proto.ProxImageCameraResolution}
 */
proto.proto.ProxImageInfo.prototype.getResolution = function () {
  return /** @type{?proto.proto.ProxImageCameraResolution} */ (
    jspb.Message.getWrapperField(this, proto.proto.ProxImageCameraResolution, 2)
  );
};

/**
 * @param {?proto.proto.ProxImageCameraResolution|undefined} value
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.setResolution = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.clearResolution = function () {
  return this.setResolution(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxImageInfo.prototype.hasResolution = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional ProxGpsInfo gps = 3;
 * @return {?proto.proto.ProxGpsInfo}
 */
proto.proto.ProxImageInfo.prototype.getGps = function () {
  return /** @type{?proto.proto.ProxGpsInfo} */ (jspb.Message.getWrapperField(this, proto.proto.ProxGpsInfo, 3));
};

/**
 * @param {?proto.proto.ProxGpsInfo|undefined} value
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.setGps = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.clearGps = function () {
  return this.setGps(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxImageInfo.prototype.hasGps = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional ProxImageAddition addition = 4;
 * @return {?proto.proto.ProxImageAddition}
 */
proto.proto.ProxImageInfo.prototype.getAddition = function () {
  return /** @type{?proto.proto.ProxImageAddition} */ (jspb.Message.getWrapperField(this, proto.proto.ProxImageAddition, 4));
};

/**
 * @param {?proto.proto.ProxImageAddition|undefined} value
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.setAddition = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxImageInfo} returns this
 */
proto.proto.ProxImageInfo.prototype.clearAddition = function () {
  return this.setAddition(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxImageInfo.prototype.hasAddition = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxObject.repeatedFields_ = [16, 17];

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
  proto.proto.ProxObject.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxObject.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxObject} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxObject.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        key: jspb.Message.getFieldWithDefault(msg, 1, ''),
        etag: jspb.Message.getFieldWithDefault(msg, 2, ''),
        lastmodified: jspb.Message.getFieldWithDefault(msg, 3, ''),
        size: jspb.Message.getFieldWithDefault(msg, 4, 0),
        contenttype: jspb.Message.getFieldWithDefault(msg, 5, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 6, ''),
        fileid: jspb.Message.getFieldWithDefault(msg, 7, ''),
        ispin: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
        ispincyfs: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
        pinexp: jspb.Message.getFieldWithDefault(msg, 10, ''),
        cyfsexp: jspb.Message.getFieldWithDefault(msg, 11, ''),
        ood: jspb.Message.getFieldWithDefault(msg, 12, ''),
        ispersistent: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
        category: jspb.Message.getFieldWithDefault(msg, 14, 0),
        tags: jspb.Message.getFieldWithDefault(msg, 15, ''),
        nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(), proto.proto.ProxNFTInfo.toObject, includeInstance),
        pinningList: jspb.Message.toObjectList(msg.getPinningList(), proto.proto.ProxPinning.toObject, includeInstance),
        images: (f = msg.getImages()) && proto.proto.ProxImageInfo.toObject(includeInstance, f),
        thumb: jspb.Message.getFieldWithDefault(msg, 19, ''),
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
 * @return {!proto.proto.ProxObject}
 */
proto.proto.ProxObject.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxObject();
  return proto.proto.ProxObject.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxObject}
 */
proto.proto.ProxObject.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxNFTInfo();
        reader.readMessage(value, proto.proto.ProxNFTInfo.deserializeBinaryFromReader);
        msg.addNftinfos(value);
        break;
      case 17:
        var value = new proto.proto.ProxPinning();
        reader.readMessage(value, proto.proto.ProxPinning.deserializeBinaryFromReader);
        msg.addPinning(value);
        break;
      case 18:
        var value = new proto.proto.ProxImageInfo();
        reader.readMessage(value, proto.proto.ProxImageInfo.deserializeBinaryFromReader);
        msg.setImages(value);
        break;
      case 19:
        var value = /** @type {string} */ (reader.readString());
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
proto.proto.ProxObject.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxObject.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getLastmodified();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getIspin();
  if (f) {
    writer.writeBool(8, f);
  }
  f = message.getIspincyfs();
  if (f) {
    writer.writeBool(9, f);
  }
  f = message.getPinexp();
  if (f.length > 0) {
    writer.writeString(10, f);
  }
  f = message.getCyfsexp();
  if (f.length > 0) {
    writer.writeString(11, f);
  }
  f = message.getOod();
  if (f.length > 0) {
    writer.writeString(12, f);
  }
  f = message.getIspersistent();
  if (f) {
    writer.writeBool(13, f);
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(14, f);
  }
  f = message.getTags();
  if (f.length > 0) {
    writer.writeString(15, f);
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(16, f, proto.proto.ProxNFTInfo.serializeBinaryToWriter);
  }
  f = message.getPinningList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(17, f, proto.proto.ProxPinning.serializeBinaryToWriter);
  }
  f = message.getImages();
  if (f != null) {
    writer.writeMessage(18, f, proto.proto.ProxImageInfo.serializeBinaryToWriter);
  }
  f = message.getThumb();
  if (f.length > 0) {
    writer.writeString(19, f);
  }
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string etag = 2;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getEtag = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setEtag = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string lastModified = 3;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getLastmodified = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setLastmodified = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.ProxObject.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional string contentType = 5;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getContenttype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setContenttype = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string cid = 6;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional string fileId = 7;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getFileid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setFileid = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional bool isPin = 8;
 * @return {boolean}
 */
proto.proto.ProxObject.prototype.getIspin = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setIspin = function (value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};

/**
 * optional bool isPinCyfs = 9;
 * @return {boolean}
 */
proto.proto.ProxObject.prototype.getIspincyfs = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setIspincyfs = function (value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};

/**
 * optional string pinExp = 10;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getPinexp = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setPinexp = function (value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};

/**
 * optional string CyfsExp = 11;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getCyfsexp = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setCyfsexp = function (value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};

/**
 * optional string OOD = 12;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getOod = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setOod = function (value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};

/**
 * optional bool isPersistent = 13;
 * @return {boolean}
 */
proto.proto.ProxObject.prototype.getIspersistent = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setIspersistent = function (value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};

/**
 * optional int32 category = 14;
 * @return {number}
 */
proto.proto.ProxObject.prototype.getCategory = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setCategory = function (value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};

/**
 * optional string tags = 15;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getTags = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setTags = function (value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};

/**
 * repeated ProxNFTInfo nftInfos = 16;
 * @return {!Array<!proto.proto.ProxNFTInfo>}
 */
proto.proto.ProxObject.prototype.getNftinfosList = function () {
  return /** @type{!Array<!proto.proto.ProxNFTInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxNFTInfo, 16));
};

/**
 * @param {!Array<!proto.proto.ProxNFTInfo>} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setNftinfosList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};

/**
 * @param {!proto.proto.ProxNFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxNFTInfo}
 */
proto.proto.ProxObject.prototype.addNftinfos = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.proto.ProxNFTInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.clearNftinfosList = function () {
  return this.setNftinfosList([]);
};

/**
 * repeated ProxPinning pinning = 17;
 * @return {!Array<!proto.proto.ProxPinning>}
 */
proto.proto.ProxObject.prototype.getPinningList = function () {
  return /** @type{!Array<!proto.proto.ProxPinning>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPinning, 17));
};

/**
 * @param {!Array<!proto.proto.ProxPinning>} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setPinningList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};

/**
 * @param {!proto.proto.ProxPinning=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPinning}
 */
proto.proto.ProxObject.prototype.addPinning = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.proto.ProxPinning, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.clearPinningList = function () {
  return this.setPinningList([]);
};

/**
 * optional ProxImageInfo images = 18;
 * @return {?proto.proto.ProxImageInfo}
 */
proto.proto.ProxObject.prototype.getImages = function () {
  return /** @type{?proto.proto.ProxImageInfo} */ (jspb.Message.getWrapperField(this, proto.proto.ProxImageInfo, 18));
};

/**
 * @param {?proto.proto.ProxImageInfo|undefined} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setImages = function (value) {
  return jspb.Message.setWrapperField(this, 18, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.clearImages = function () {
  return this.setImages(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxObject.prototype.hasImages = function () {
  return jspb.Message.getField(this, 18) != null;
};

/**
 * optional string thumb = 19;
 * @return {string}
 */
proto.proto.ProxObject.prototype.getThumb = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxObject} returns this
 */
proto.proto.ProxObject.prototype.setThumb = function (value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxPrefixPin.repeatedFields_ = [4, 5];

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
  proto.proto.ProxPrefixPin.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPrefixPin.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPrefixPin} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPrefixPin.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        prefix: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        ispin: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(), proto.proto.ProxNFTInfo.toObject, includeInstance),
        pinningList: jspb.Message.toObjectList(msg.getPinningList(), proto.proto.ProxPinning.toObject, includeInstance),
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
 * @return {!proto.proto.ProxPrefixPin}
 */
proto.proto.ProxPrefixPin.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPrefixPin();
  return proto.proto.ProxPrefixPin.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPrefixPin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPrefixPin}
 */
proto.proto.ProxPrefixPin.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxNFTInfo();
        reader.readMessage(value, proto.proto.ProxNFTInfo.deserializeBinaryFromReader);
        msg.addNftinfos(value);
        break;
      case 5:
        var value = new proto.proto.ProxPinning();
        reader.readMessage(value, proto.proto.ProxPinning.deserializeBinaryFromReader);
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
proto.proto.ProxPrefixPin.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPrefixPin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPrefixPin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPrefixPin.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getIspin();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(4, f, proto.proto.ProxNFTInfo.serializeBinaryToWriter);
  }
  f = message.getPinningList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(5, f, proto.proto.ProxPinning.serializeBinaryToWriter);
  }
};

/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ProxPrefixPin.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxPrefixPin.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bool isPin = 3;
 * @return {boolean}
 */
proto.proto.ProxPrefixPin.prototype.getIspin = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.setIspin = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * repeated ProxNFTInfo nftInfos = 4;
 * @return {!Array<!proto.proto.ProxNFTInfo>}
 */
proto.proto.ProxPrefixPin.prototype.getNftinfosList = function () {
  return /** @type{!Array<!proto.proto.ProxNFTInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxNFTInfo, 4));
};

/**
 * @param {!Array<!proto.proto.ProxNFTInfo>} value
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.setNftinfosList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.proto.ProxNFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxNFTInfo}
 */
proto.proto.ProxPrefixPin.prototype.addNftinfos = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.ProxNFTInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.clearNftinfosList = function () {
  return this.setNftinfosList([]);
};

/**
 * repeated ProxPinning pinning = 5;
 * @return {!Array<!proto.proto.ProxPinning>}
 */
proto.proto.ProxPrefixPin.prototype.getPinningList = function () {
  return /** @type{!Array<!proto.proto.ProxPinning>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPinning, 5));
};

/**
 * @param {!Array<!proto.proto.ProxPinning>} value
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.setPinningList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.proto.ProxPinning=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPinning}
 */
proto.proto.ProxPrefixPin.prototype.addPinning = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.ProxPinning, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPrefixPin} returns this
 */
proto.proto.ProxPrefixPin.prototype.clearPinningList = function () {
  return this.setPinningList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxListObjectsResp.repeatedFields_ = [1, 7, 8];

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
  proto.proto.ProxListObjectsResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxListObjectsResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxListObjectsResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxListObjectsResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        commonprefixesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
        istruncated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
        prefix: jspb.Message.getFieldWithDefault(msg, 3, ''),
        maxkeys: jspb.Message.getFieldWithDefault(msg, 4, 0),
        nextmarker: jspb.Message.getFieldWithDefault(msg, 5, ''),
        continuationtoken: jspb.Message.getFieldWithDefault(msg, 6, ''),
        contentList: jspb.Message.toObjectList(msg.getContentList(), proto.proto.ProxObject.toObject, includeInstance),
        prefixpinsList: jspb.Message.toObjectList(msg.getPrefixpinsList(), proto.proto.ProxPrefixPin.toObject, includeInstance),
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
 * @return {!proto.proto.ProxListObjectsResp}
 */
proto.proto.ProxListObjectsResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxListObjectsResp();
  return proto.proto.ProxListObjectsResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxListObjectsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxListObjectsResp}
 */
proto.proto.ProxListObjectsResp.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = new proto.proto.ProxObject();
        reader.readMessage(value, proto.proto.ProxObject.deserializeBinaryFromReader);
        msg.addContent(value);
        break;
      case 8:
        var value = new proto.proto.ProxPrefixPin();
        reader.readMessage(value, proto.proto.ProxPrefixPin.deserializeBinaryFromReader);
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
proto.proto.ProxListObjectsResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxListObjectsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxListObjectsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxListObjectsResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCommonprefixesList();
  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
  f = message.getIstruncated();
  if (f) {
    writer.writeBool(2, f);
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getMaxkeys();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
  f = message.getNextmarker();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getContinuationtoken();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(7, f, proto.proto.ProxObject.serializeBinaryToWriter);
  }
  f = message.getPrefixpinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(8, f, proto.proto.ProxPrefixPin.serializeBinaryToWriter);
  }
};

/**
 * repeated string commonPrefixes = 1;
 * @return {!Array<string>}
 */
proto.proto.ProxListObjectsResp.prototype.getCommonprefixesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setCommonprefixesList = function (value) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.addCommonprefixes = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.clearCommonprefixesList = function () {
  return this.setCommonprefixesList([]);
};

/**
 * optional bool isTruncated = 2;
 * @return {boolean}
 */
proto.proto.ProxListObjectsResp.prototype.getIstruncated = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setIstruncated = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional string prefix = 3;
 * @return {string}
 */
proto.proto.ProxListObjectsResp.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 maxKeys = 4;
 * @return {number}
 */
proto.proto.ProxListObjectsResp.prototype.getMaxkeys = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setMaxkeys = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional string nextMarker = 5;
 * @return {string}
 */
proto.proto.ProxListObjectsResp.prototype.getNextmarker = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setNextmarker = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string continuationToken = 6;
 * @return {string}
 */
proto.proto.ProxListObjectsResp.prototype.getContinuationtoken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setContinuationtoken = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * repeated ProxObject content = 7;
 * @return {!Array<!proto.proto.ProxObject>}
 */
proto.proto.ProxListObjectsResp.prototype.getContentList = function () {
  return /** @type{!Array<!proto.proto.ProxObject>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxObject, 7));
};

/**
 * @param {!Array<!proto.proto.ProxObject>} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setContentList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.proto.ProxObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxObject}
 */
proto.proto.ProxListObjectsResp.prototype.addContent = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.proto.ProxObject, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.clearContentList = function () {
  return this.setContentList([]);
};

/**
 * repeated ProxPrefixPin prefixpins = 8;
 * @return {!Array<!proto.proto.ProxPrefixPin>}
 */
proto.proto.ProxListObjectsResp.prototype.getPrefixpinsList = function () {
  return /** @type{!Array<!proto.proto.ProxPrefixPin>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPrefixPin, 8));
};

/**
 * @param {!Array<!proto.proto.ProxPrefixPin>} value
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.setPrefixpinsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};

/**
 * @param {!proto.proto.ProxPrefixPin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPrefixPin}
 */
proto.proto.ProxListObjectsResp.prototype.addPrefixpins = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.proto.ProxPrefixPin, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxListObjectsResp} returns this
 */
proto.proto.ProxListObjectsResp.prototype.clearPrefixpinsList = function () {
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
  proto.proto.ProxPinning.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinning.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinning} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinning.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        requestid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxPinning}
 */
proto.proto.ProxPinning.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinning();
  return proto.proto.ProxPinning.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinning}
 */
proto.proto.ProxPinning.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPinning.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinning.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string requestID = 1;
 * @return {string}
 */
proto.proto.ProxPinning.prototype.getRequestid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinning} returns this
 */
proto.proto.ProxPinning.prototype.setRequestid = function (value) {
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
  proto.proto.ProxPinRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        stype: jspb.Message.getFieldWithDefault(msg, 2, ''),
        exp: jspb.Message.getFieldWithDefault(msg, 3, 0),
        pin: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        isdir: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
        key: jspb.Message.getFieldWithDefault(msg, 6, ''),
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
 * @return {!proto.proto.ProxPinRequest}
 */
proto.proto.ProxPinRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinRequest();
  return proto.proto.ProxPinRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinRequest}
 */
proto.proto.ProxPinRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPinRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStype();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getExp();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
  f = message.getPin();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getIsdir();
  if (f) {
    writer.writeBool(5, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxPinRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string stype = 2;
 * @return {string}
 */
proto.proto.ProxPinRequest.prototype.getStype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setStype = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 exp = 3;
 * @return {number}
 */
proto.proto.ProxPinRequest.prototype.getExp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setExp = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional bool pin = 4;
 * @return {boolean}
 */
proto.proto.ProxPinRequest.prototype.getPin = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setPin = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional bool isDir = 5;
 * @return {boolean}
 */
proto.proto.ProxPinRequest.prototype.getIsdir = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setIsdir = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * optional string key = 6;
 * @return {string}
 */
proto.proto.ProxPinRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinRequest} returns this
 */
proto.proto.ProxPinRequest.prototype.setKey = function (value) {
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
  proto.proto.ProxPinResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxPinResp}
 */
proto.proto.ProxPinResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinResp();
  return proto.proto.ProxPinResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinResp}
 */
proto.proto.ProxPinResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPinResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxPinResp.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinResp} returns this
 */
proto.proto.ProxPinResp.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxPinResp.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinResp} returns this
 */
proto.proto.ProxPinResp.prototype.setStatus = function (value) {
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
  proto.proto.ProxPinReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxPinRequest.toObject(includeInstance, f),
        pay: (f = msg.getPay()) && proto.proto.ProxPinPay.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxPinReq}
 */
proto.proto.ProxPinReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinReq();
  return proto.proto.ProxPinReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinReq}
 */
proto.proto.ProxPinReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxPinRequest();
        reader.readMessage(value, proto.proto.ProxPinRequest.deserializeBinaryFromReader);
        msg.setRequest(value);
        break;
      case 3:
        var value = new proto.proto.ProxPinPay();
        reader.readMessage(value, proto.proto.ProxPinPay.deserializeBinaryFromReader);
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
proto.proto.ProxPinReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxPinRequest.serializeBinaryToWriter);
  }
  f = message.getPay();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxPinPay.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPinReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPinReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxPinRequest request = 2;
 * @return {?proto.proto.ProxPinRequest}
 */
proto.proto.ProxPinReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxPinRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPinRequest, 2));
};

/**
 * @param {?proto.proto.ProxPinRequest|undefined} value
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPinReq.prototype.hasRequest = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional ProxPinPay pay = 3;
 * @return {?proto.proto.ProxPinPay}
 */
proto.proto.ProxPinReq.prototype.getPay = function () {
  return /** @type{?proto.proto.ProxPinPay} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPinPay, 3));
};

/**
 * @param {?proto.proto.ProxPinPay|undefined} value
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.setPay = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPinReq} returns this
 */
proto.proto.ProxPinReq.prototype.clearPay = function () {
  return this.setPay(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPinReq.prototype.hasPay = function () {
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
  proto.proto.GetPeerIdInfoReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.GetPeerIdInfoReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.GetPeerIdInfoReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.GetPeerIdInfoReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.GetPeerIdInfoReq}
 */
proto.proto.GetPeerIdInfoReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetPeerIdInfoReq();
  return proto.proto.GetPeerIdInfoReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetPeerIdInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetPeerIdInfoReq}
 */
proto.proto.GetPeerIdInfoReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.GetPeerIdInfoReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetPeerIdInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetPeerIdInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetPeerIdInfoReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.GetPeerIdInfoReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.GetPeerIdInfoReq} returns this
 */
proto.proto.GetPeerIdInfoReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.GetPeerIdInfoReq} returns this
 */
proto.proto.GetPeerIdInfoReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetPeerIdInfoReq.prototype.hasHeader = function () {
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
  proto.proto.GetPeerIDReply.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.GetPeerIDReply.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.GetPeerIDReply} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.GetPeerIDReply.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        peerid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.GetPeerIDReply}
 */
proto.proto.GetPeerIDReply.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetPeerIDReply();
  return proto.proto.GetPeerIDReply.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetPeerIDReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetPeerIDReply}
 */
proto.proto.GetPeerIDReply.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.GetPeerIDReply.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetPeerIDReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetPeerIDReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetPeerIDReply.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.GetPeerIDReply.prototype.getPeerid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.GetPeerIDReply} returns this
 */
proto.proto.GetPeerIDReply.prototype.setPeerid = function (value) {
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
  proto.proto.ProxUnpinRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxUnpinRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxUnpinRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxUnpinRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        stype: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxUnpinRequest}
 */
proto.proto.ProxUnpinRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxUnpinRequest();
  return proto.proto.ProxUnpinRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxUnpinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxUnpinRequest}
 */
proto.proto.ProxUnpinRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxUnpinRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxUnpinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxUnpinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxUnpinRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStype();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxUnpinRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxUnpinRequest} returns this
 */
proto.proto.ProxUnpinRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string stype = 2;
 * @return {string}
 */
proto.proto.ProxUnpinRequest.prototype.getStype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxUnpinRequest} returns this
 */
proto.proto.ProxUnpinRequest.prototype.setStype = function (value) {
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
  proto.proto.ProxUnPinReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxUnPinReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxUnPinReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxUnPinReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxUnpinRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxUnPinReq}
 */
proto.proto.ProxUnPinReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxUnPinReq();
  return proto.proto.ProxUnPinReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxUnPinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxUnPinReq}
 */
proto.proto.ProxUnPinReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxUnpinRequest();
        reader.readMessage(value, proto.proto.ProxUnpinRequest.deserializeBinaryFromReader);
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
proto.proto.ProxUnPinReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxUnPinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxUnPinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxUnPinReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxUnpinRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxUnPinReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxUnPinReq} returns this
 */
proto.proto.ProxUnPinReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxUnPinReq} returns this
 */
proto.proto.ProxUnPinReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxUnPinReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxUnpinRequest request = 2;
 * @return {?proto.proto.ProxUnpinRequest}
 */
proto.proto.ProxUnPinReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxUnpinRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxUnpinRequest, 2));
};

/**
 * @param {?proto.proto.ProxUnpinRequest|undefined} value
 * @return {!proto.proto.ProxUnPinReq} returns this
 */
proto.proto.ProxUnPinReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxUnPinReq} returns this
 */
proto.proto.ProxUnPinReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxUnPinReq.prototype.hasRequest = function () {
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
  proto.proto.ProxPingRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPingRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPingRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPingRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxPingRequest}
 */
proto.proto.ProxPingRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPingRequest();
  return proto.proto.ProxPingRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPingRequest}
 */
proto.proto.ProxPingRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxPingRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPingRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPingRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPingRequest} returns this
 */
proto.proto.ProxPingRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPingRequest} returns this
 */
proto.proto.ProxPingRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPingRequest.prototype.hasHeader = function () {
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
  proto.proto.ProxPingMinerRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPingMinerRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPingMinerRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPingMinerRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        orderid: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxPingMinerRequest}
 */
proto.proto.ProxPingMinerRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPingMinerRequest();
  return proto.proto.ProxPingMinerRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPingMinerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPingMinerRequest}
 */
proto.proto.ProxPingMinerRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxPingMinerRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPingMinerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPingMinerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPingMinerRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPingMinerRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPingMinerRequest} returns this
 */
proto.proto.ProxPingMinerRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPingMinerRequest} returns this
 */
proto.proto.ProxPingMinerRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPingMinerRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string orderID = 2;
 * @return {string}
 */
proto.proto.ProxPingMinerRequest.prototype.getOrderid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingMinerRequest} returns this
 */
proto.proto.ProxPingMinerRequest.prototype.setOrderid = function (value) {
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
  proto.proto.ProxPingMiner.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPingMiner.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPingMiner} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPingMiner.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        peerid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        addr: jspb.Message.getFieldWithDefault(msg, 2, ''),
        error: jspb.Message.getFieldWithDefault(msg, 3, ''),
        type: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxPingMiner}
 */
proto.proto.ProxPingMiner.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPingMiner();
  return proto.proto.ProxPingMiner.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPingMiner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPingMiner}
 */
proto.proto.ProxPingMiner.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPingMiner.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPingMiner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPingMiner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPingMiner.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.ProxPingMiner.prototype.getPeerid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingMiner} returns this
 */
proto.proto.ProxPingMiner.prototype.setPeerid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string Addr = 2;
 * @return {string}
 */
proto.proto.ProxPingMiner.prototype.getAddr = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingMiner} returns this
 */
proto.proto.ProxPingMiner.prototype.setAddr = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string error = 3;
 * @return {string}
 */
proto.proto.ProxPingMiner.prototype.getError = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingMiner} returns this
 */
proto.proto.ProxPingMiner.prototype.setError = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string type = 4;
 * @return {string}
 */
proto.proto.ProxPingMiner.prototype.getType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingMiner} returns this
 */
proto.proto.ProxPingMiner.prototype.setType = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxPingMinerResponse.repeatedFields_ = [1];

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
  proto.proto.ProxPingMinerResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPingMinerResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPingMinerResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPingMinerResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        minersList: jspb.Message.toObjectList(msg.getMinersList(), proto.proto.ProxPingMiner.toObject, includeInstance),
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
 * @return {!proto.proto.ProxPingMinerResponse}
 */
proto.proto.ProxPingMinerResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPingMinerResponse();
  return proto.proto.ProxPingMinerResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPingMinerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPingMinerResponse}
 */
proto.proto.ProxPingMinerResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxPingMiner();
        reader.readMessage(value, proto.proto.ProxPingMiner.deserializeBinaryFromReader);
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
proto.proto.ProxPingMinerResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPingMinerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPingMinerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPingMinerResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMinersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxPingMiner.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxPingMiner miners = 1;
 * @return {!Array<!proto.proto.ProxPingMiner>}
 */
proto.proto.ProxPingMinerResponse.prototype.getMinersList = function () {
  return /** @type{!Array<!proto.proto.ProxPingMiner>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPingMiner, 1));
};

/**
 * @param {!Array<!proto.proto.ProxPingMiner>} value
 * @return {!proto.proto.ProxPingMinerResponse} returns this
 */
proto.proto.ProxPingMinerResponse.prototype.setMinersList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxPingMiner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPingMiner}
 */
proto.proto.ProxPingMinerResponse.prototype.addMiners = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxPingMiner, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPingMinerResponse} returns this
 */
proto.proto.ProxPingMinerResponse.prototype.clearMinersList = function () {
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
  proto.proto.ProxPingResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPingResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPingResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPingResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        peerid: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxPingResponse}
 */
proto.proto.ProxPingResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPingResponse();
  return proto.proto.ProxPingResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPingResponse}
 */
proto.proto.ProxPingResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPingResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPingResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string peerID = 1;
 * @return {string}
 */
proto.proto.ProxPingResponse.prototype.getPeerid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPingResponse} returns this
 */
proto.proto.ProxPingResponse.prototype.setPeerid = function (value) {
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
  proto.proto.ProxFindRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFindRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFindRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFindRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        key: jspb.Message.getFieldWithDefault(msg, 3, ''),
        fileid: jspb.Message.getFieldWithDefault(msg, 4, ''),
        prefix: jspb.Message.getFieldWithDefault(msg, 5, ''),
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
 * @return {!proto.proto.ProxFindRequest}
 */
proto.proto.ProxFindRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFindRequest();
  return proto.proto.ProxFindRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFindRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFindRequest}
 */
proto.proto.ProxFindRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxFindRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFindRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFindRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFindRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxFindRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxFindRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxFindRequest.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.ProxFindRequest.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string fileId = 4;
 * @return {string}
 */
proto.proto.ProxFindRequest.prototype.getFileid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.setFileid = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string prefix = 5;
 * @return {string}
 */
proto.proto.ProxFindRequest.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFindRequest} returns this
 */
proto.proto.ProxFindRequest.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxObjects.repeatedFields_ = [1];

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
  proto.proto.ProxObjects.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxObjects.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxObjects} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxObjects.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        contentsList: jspb.Message.toObjectList(msg.getContentsList(), proto.proto.ProxObject.toObject, includeInstance),
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
 * @return {!proto.proto.ProxObjects}
 */
proto.proto.ProxObjects.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxObjects();
  return proto.proto.ProxObjects.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxObjects} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxObjects}
 */
proto.proto.ProxObjects.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxObject();
        reader.readMessage(value, proto.proto.ProxObject.deserializeBinaryFromReader);
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
proto.proto.ProxObjects.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxObjects.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxObjects} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxObjects.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxObject.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxObject contents = 1;
 * @return {!Array<!proto.proto.ProxObject>}
 */
proto.proto.ProxObjects.prototype.getContentsList = function () {
  return /** @type{!Array<!proto.proto.ProxObject>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxObject, 1));
};

/**
 * @param {!Array<!proto.proto.ProxObject>} value
 * @return {!proto.proto.ProxObjects} returns this
 */
proto.proto.ProxObjects.prototype.setContentsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxObject}
 */
proto.proto.ProxObjects.prototype.addContents = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxObject, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxObjects} returns this
 */
proto.proto.ProxObjects.prototype.clearContentsList = function () {
  return this.setContentsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxRequestSummaryIds.repeatedFields_ = [2];

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
  proto.proto.ProxRequestSummaryIds.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxRequestSummaryIds.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxRequestSummaryIds} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxRequestSummaryIds.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        idsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxRequestSummaryIds}
 */
proto.proto.ProxRequestSummaryIds.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxRequestSummaryIds();
  return proto.proto.ProxRequestSummaryIds.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxRequestSummaryIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxRequestSummaryIds}
 */
proto.proto.ProxRequestSummaryIds.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxRequestSummaryIds.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxRequestSummaryIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxRequestSummaryIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxRequestSummaryIds.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxRequestSummaryIds.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxRequestSummaryIds} returns this
 */
proto.proto.ProxRequestSummaryIds.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxRequestSummaryIds} returns this
 */
proto.proto.ProxRequestSummaryIds.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxRequestSummaryIds.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated string ids = 2;
 * @return {!Array<string>}
 */
proto.proto.ProxRequestSummaryIds.prototype.getIdsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxRequestSummaryIds} returns this
 */
proto.proto.ProxRequestSummaryIds.prototype.setIdsList = function (value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxRequestSummaryIds} returns this
 */
proto.proto.ProxRequestSummaryIds.prototype.addIds = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxRequestSummaryIds} returns this
 */
proto.proto.ProxRequestSummaryIds.prototype.clearIdsList = function () {
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
  proto.proto.ProxCategory.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCategory.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCategory} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCategory.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        category: jspb.Message.getFieldWithDefault(msg, 1, 0),
        total: jspb.Message.getFieldWithDefault(msg, 2, 0),
        count: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.proto.ProxCategory}
 */
proto.proto.ProxCategory.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCategory();
  return proto.proto.ProxCategory.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCategory}
 */
proto.proto.ProxCategory.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCategory(value);
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
proto.proto.ProxCategory.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCategory.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};

/**
 * optional int32 category = 1;
 * @return {number}
 */
proto.proto.ProxCategory.prototype.getCategory = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxCategory} returns this
 */
proto.proto.ProxCategory.prototype.setCategory = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.proto.ProxCategory.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxCategory} returns this
 */
proto.proto.ProxCategory.prototype.setTotal = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.proto.ProxCategory.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxCategory} returns this
 */
proto.proto.ProxCategory.prototype.setCount = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
  proto.proto.ProxPrefix.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPrefix.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPrefix} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPrefix.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        prefix: jspb.Message.getFieldWithDefault(msg, 1, ''),
        total: jspb.Message.getFieldWithDefault(msg, 2, 0),
        count: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.proto.ProxPrefix}
 */
proto.proto.ProxPrefix.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPrefix();
  return proto.proto.ProxPrefix.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPrefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPrefix}
 */
proto.proto.ProxPrefix.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPrefix.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPrefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPrefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPrefix.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};

/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.proto.ProxPrefix.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPrefix} returns this
 */
proto.proto.ProxPrefix.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.proto.ProxPrefix.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPrefix} returns this
 */
proto.proto.ProxPrefix.prototype.setTotal = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.proto.ProxPrefix.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPrefix} returns this
 */
proto.proto.ProxPrefix.prototype.setCount = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxStatisticsInfo.repeatedFields_ = [1, 2];

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
  proto.proto.ProxStatisticsInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxStatisticsInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxStatisticsInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxStatisticsInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(), proto.proto.ProxCategory.toObject, includeInstance),
        prefixesList: jspb.Message.toObjectList(msg.getPrefixesList(), proto.proto.ProxPrefix.toObject, includeInstance),
        categorysum: (f = msg.getCategorysum()) && proto.proto.ProxCategory.toObject(includeInstance, f),
        prefixsum: (f = msg.getPrefixsum()) && proto.proto.ProxPrefix.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxStatisticsInfo}
 */
proto.proto.ProxStatisticsInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxStatisticsInfo();
  return proto.proto.ProxStatisticsInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxStatisticsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxStatisticsInfo}
 */
proto.proto.ProxStatisticsInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxCategory();
        reader.readMessage(value, proto.proto.ProxCategory.deserializeBinaryFromReader);
        msg.addCategories(value);
        break;
      case 2:
        var value = new proto.proto.ProxPrefix();
        reader.readMessage(value, proto.proto.ProxPrefix.deserializeBinaryFromReader);
        msg.addPrefixes(value);
        break;
      case 3:
        var value = new proto.proto.ProxCategory();
        reader.readMessage(value, proto.proto.ProxCategory.deserializeBinaryFromReader);
        msg.setCategorysum(value);
        break;
      case 4:
        var value = new proto.proto.ProxPrefix();
        reader.readMessage(value, proto.proto.ProxPrefix.deserializeBinaryFromReader);
        msg.setPrefixsum(value);
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
proto.proto.ProxStatisticsInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxStatisticsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxStatisticsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxStatisticsInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxCategory.serializeBinaryToWriter);
  }
  f = message.getPrefixesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.proto.ProxPrefix.serializeBinaryToWriter);
  }
  f = message.getCategorysum();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxCategory.serializeBinaryToWriter);
  }
  f = message.getPrefixsum();
  if (f != null) {
    writer.writeMessage(4, f, proto.proto.ProxPrefix.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxCategory categories = 1;
 * @return {!Array<!proto.proto.ProxCategory>}
 */
proto.proto.ProxStatisticsInfo.prototype.getCategoriesList = function () {
  return /** @type{!Array<!proto.proto.ProxCategory>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxCategory, 1));
};

/**
 * @param {!Array<!proto.proto.ProxCategory>} value
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.setCategoriesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxCategory}
 */
proto.proto.ProxStatisticsInfo.prototype.addCategories = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxCategory, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.clearCategoriesList = function () {
  return this.setCategoriesList([]);
};

/**
 * repeated ProxPrefix prefixes = 2;
 * @return {!Array<!proto.proto.ProxPrefix>}
 */
proto.proto.ProxStatisticsInfo.prototype.getPrefixesList = function () {
  return /** @type{!Array<!proto.proto.ProxPrefix>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPrefix, 2));
};

/**
 * @param {!Array<!proto.proto.ProxPrefix>} value
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.setPrefixesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.proto.ProxPrefix=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPrefix}
 */
proto.proto.ProxStatisticsInfo.prototype.addPrefixes = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ProxPrefix, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.clearPrefixesList = function () {
  return this.setPrefixesList([]);
};

/**
 * optional ProxCategory categorySum = 3;
 * @return {?proto.proto.ProxCategory}
 */
proto.proto.ProxStatisticsInfo.prototype.getCategorysum = function () {
  return /** @type{?proto.proto.ProxCategory} */ (jspb.Message.getWrapperField(this, proto.proto.ProxCategory, 3));
};

/**
 * @param {?proto.proto.ProxCategory|undefined} value
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.setCategorysum = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.clearCategorysum = function () {
  return this.setCategorysum(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStatisticsInfo.prototype.hasCategorysum = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional ProxPrefix prefixSum = 4;
 * @return {?proto.proto.ProxPrefix}
 */
proto.proto.ProxStatisticsInfo.prototype.getPrefixsum = function () {
  return /** @type{?proto.proto.ProxPrefix} */ (jspb.Message.getWrapperField(this, proto.proto.ProxPrefix, 4));
};

/**
 * @param {?proto.proto.ProxPrefix|undefined} value
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.setPrefixsum = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxStatisticsInfo} returns this
 */
proto.proto.ProxStatisticsInfo.prototype.clearPrefixsum = function () {
  return this.setPrefixsum(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxStatisticsInfo.prototype.hasPrefixsum = function () {
  return jspb.Message.getField(this, 4) != null;
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
  proto.proto.ProxRequestStatistics.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxRequestStatistics.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxRequestStatistics} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxRequestStatistics.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        prefix: jspb.Message.getFieldWithDefault(msg, 2, ''),
        needprefix: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
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
 * @return {!proto.proto.ProxRequestStatistics}
 */
proto.proto.ProxRequestStatistics.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxRequestStatistics();
  return proto.proto.ProxRequestStatistics.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxRequestStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxRequestStatistics}
 */
proto.proto.ProxRequestStatistics.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPrefix(value);
        break;
      case 3:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setNeedprefix(value);
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
proto.proto.ProxRequestStatistics.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxRequestStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxRequestStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxRequestStatistics.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getNeedprefix();
  if (f) {
    writer.writeBool(3, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxRequestStatistics.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxRequestStatistics} returns this
 */
proto.proto.ProxRequestStatistics.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxRequestStatistics} returns this
 */
proto.proto.ProxRequestStatistics.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxRequestStatistics.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string prefix = 2;
 * @return {string}
 */
proto.proto.ProxRequestStatistics.prototype.getPrefix = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxRequestStatistics} returns this
 */
proto.proto.ProxRequestStatistics.prototype.setPrefix = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bool needPrefix = 3;
 * @return {boolean}
 */
proto.proto.ProxRequestStatistics.prototype.getNeedprefix = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxRequestStatistics} returns this
 */
proto.proto.ProxRequestStatistics.prototype.setNeedprefix = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
  proto.proto.ProxSummaryInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxSummaryInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxSummaryInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxSummaryInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        total: jspb.Message.getFieldWithDefault(msg, 2, 0),
        count: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.proto.ProxSummaryInfo}
 */
proto.proto.ProxSummaryInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxSummaryInfo();
  return proto.proto.ProxSummaryInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxSummaryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxSummaryInfo}
 */
proto.proto.ProxSummaryInfo.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxSummaryInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxSummaryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxSummaryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxSummaryInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(3, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.ProxSummaryInfo.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxSummaryInfo} returns this
 */
proto.proto.ProxSummaryInfo.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.proto.ProxSummaryInfo.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxSummaryInfo} returns this
 */
proto.proto.ProxSummaryInfo.prototype.setTotal = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.proto.ProxSummaryInfo.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxSummaryInfo} returns this
 */
proto.proto.ProxSummaryInfo.prototype.setCount = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxSummaryInfos.repeatedFields_ = [1];

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
  proto.proto.ProxSummaryInfos.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxSummaryInfos.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxSummaryInfos} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxSummaryInfos.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        contentsList: jspb.Message.toObjectList(msg.getContentsList(), proto.proto.ProxSummaryInfo.toObject, includeInstance),
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
 * @return {!proto.proto.ProxSummaryInfos}
 */
proto.proto.ProxSummaryInfos.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxSummaryInfos();
  return proto.proto.ProxSummaryInfos.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxSummaryInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxSummaryInfos}
 */
proto.proto.ProxSummaryInfos.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxSummaryInfo();
        reader.readMessage(value, proto.proto.ProxSummaryInfo.deserializeBinaryFromReader);
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
proto.proto.ProxSummaryInfos.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxSummaryInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxSummaryInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxSummaryInfos.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxSummaryInfo.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxSummaryInfo contents = 1;
 * @return {!Array<!proto.proto.ProxSummaryInfo>}
 */
proto.proto.ProxSummaryInfos.prototype.getContentsList = function () {
  return /** @type{!Array<!proto.proto.ProxSummaryInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxSummaryInfo, 1));
};

/**
 * @param {!Array<!proto.proto.ProxSummaryInfo>} value
 * @return {!proto.proto.ProxSummaryInfos} returns this
 */
proto.proto.ProxSummaryInfos.prototype.setContentsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxSummaryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxSummaryInfo}
 */
proto.proto.ProxSummaryInfos.prototype.addContents = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxSummaryInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxSummaryInfos} returns this
 */
proto.proto.ProxSummaryInfos.prototype.clearContentsList = function () {
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
  proto.proto.ProxRenameObject.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxRenameObject.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxRenameObject} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxRenameObject.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        sourceobject: jspb.Message.getFieldWithDefault(msg, 2, ''),
        targetobject: jspb.Message.getFieldWithDefault(msg, 3, ''),
        filetype: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxRenameObject}
 */
proto.proto.ProxRenameObject.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxRenameObject();
  return proto.proto.ProxRenameObject.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxRenameObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxRenameObject}
 */
proto.proto.ProxRenameObject.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxRenameObject.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxRenameObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxRenameObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxRenameObject.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getSourceobject();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getTargetobject();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getFiletype();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxRenameObject.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxRenameObject} returns this
 */
proto.proto.ProxRenameObject.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxRenameObject} returns this
 */
proto.proto.ProxRenameObject.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxRenameObject.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string sourceObject = 2;
 * @return {string}
 */
proto.proto.ProxRenameObject.prototype.getSourceobject = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxRenameObject} returns this
 */
proto.proto.ProxRenameObject.prototype.setSourceobject = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string targetObject = 3;
 * @return {string}
 */
proto.proto.ProxRenameObject.prototype.getTargetobject = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxRenameObject} returns this
 */
proto.proto.ProxRenameObject.prototype.setTargetobject = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int32 fileType = 4;
 * @return {number}
 */
proto.proto.ProxRenameObject.prototype.getFiletype = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxRenameObject} returns this
 */
proto.proto.ProxRenameObject.prototype.setFiletype = function (value) {
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
  proto.proto.ProxRenameObjectResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxRenameObjectResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxRenameObjectResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxRenameObjectResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        total: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.proto.ProxRenameObjectResp}
 */
proto.proto.ProxRenameObjectResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxRenameObjectResp();
  return proto.proto.ProxRenameObjectResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxRenameObjectResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxRenameObjectResp}
 */
proto.proto.ProxRenameObjectResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxRenameObjectResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxRenameObjectResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxRenameObjectResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxRenameObjectResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
};

/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.proto.ProxRenameObjectResp.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxRenameObjectResp} returns this
 */
proto.proto.ProxRenameObjectResp.prototype.setTotal = function (value) {
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
  proto.proto.ProxTimeLine.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxTimeLine.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxTimeLine} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxTimeLine.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        interval: jspb.Message.getFieldWithDefault(msg, 2, ''),
        date: jspb.Message.getFieldWithDefault(msg, 3, ''),
        category: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxTimeLine}
 */
proto.proto.ProxTimeLine.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxTimeLine();
  return proto.proto.ProxTimeLine.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxTimeLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxTimeLine}
 */
proto.proto.ProxTimeLine.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxTimeLine.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxTimeLine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxTimeLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxTimeLine.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxTimeLine.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxTimeLine} returns this
 */
proto.proto.ProxTimeLine.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxTimeLine} returns this
 */
proto.proto.ProxTimeLine.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxTimeLine.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string interval = 2;
 * @return {string}
 */
proto.proto.ProxTimeLine.prototype.getInterval = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxTimeLine} returns this
 */
proto.proto.ProxTimeLine.prototype.setInterval = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string date = 3;
 * @return {string}
 */
proto.proto.ProxTimeLine.prototype.getDate = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxTimeLine} returns this
 */
proto.proto.ProxTimeLine.prototype.setDate = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int32 category = 4;
 * @return {number}
 */
proto.proto.ProxTimeLine.prototype.getCategory = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxTimeLine} returns this
 */
proto.proto.ProxTimeLine.prototype.setCategory = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxTimeLineResp.repeatedFields_ = [1];

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
  proto.proto.ProxTimeLineResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxTimeLineResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxTimeLineResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxTimeLineResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        contentsList: jspb.Message.toObjectList(msg.getContentsList(), proto.proto.ProxTimeLineRes.toObject, includeInstance),
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
 * @return {!proto.proto.ProxTimeLineResp}
 */
proto.proto.ProxTimeLineResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxTimeLineResp();
  return proto.proto.ProxTimeLineResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxTimeLineResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxTimeLineResp}
 */
proto.proto.ProxTimeLineResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxTimeLineRes();
        reader.readMessage(value, proto.proto.ProxTimeLineRes.deserializeBinaryFromReader);
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
proto.proto.ProxTimeLineResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxTimeLineResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxTimeLineResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxTimeLineResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxTimeLineRes.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxTimeLineRes contents = 1;
 * @return {!Array<!proto.proto.ProxTimeLineRes>}
 */
proto.proto.ProxTimeLineResp.prototype.getContentsList = function () {
  return /** @type{!Array<!proto.proto.ProxTimeLineRes>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxTimeLineRes, 1));
};

/**
 * @param {!Array<!proto.proto.ProxTimeLineRes>} value
 * @return {!proto.proto.ProxTimeLineResp} returns this
 */
proto.proto.ProxTimeLineResp.prototype.setContentsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxTimeLineRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxTimeLineRes}
 */
proto.proto.ProxTimeLineResp.prototype.addContents = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxTimeLineRes, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxTimeLineResp} returns this
 */
proto.proto.ProxTimeLineResp.prototype.clearContentsList = function () {
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
  proto.proto.ProxTimeLineRes.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxTimeLineRes.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxTimeLineRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxTimeLineRes.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        date: jspb.Message.getFieldWithDefault(msg, 1, ''),
        count: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.proto.ProxTimeLineRes}
 */
proto.proto.ProxTimeLineRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxTimeLineRes();
  return proto.proto.ProxTimeLineRes.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxTimeLineRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxTimeLineRes}
 */
proto.proto.ProxTimeLineRes.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxTimeLineRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxTimeLineRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxTimeLineRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxTimeLineRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(2, f);
  }
};

/**
 * optional string date = 1;
 * @return {string}
 */
proto.proto.ProxTimeLineRes.prototype.getDate = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxTimeLineRes} returns this
 */
proto.proto.ProxTimeLineRes.prototype.setDate = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.proto.ProxTimeLineRes.prototype.getCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxTimeLineRes} returns this
 */
proto.proto.ProxTimeLineRes.prototype.setCount = function (value) {
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
  proto.proto.ProxPresignedURL.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPresignedURL.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPresignedURL} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPresignedURL.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        url: jspb.Message.getFieldWithDefault(msg, 2, ''),
        method: jspb.Message.getFieldWithDefault(msg, 3, ''),
        expires: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxPresignedURL}
 */
proto.proto.ProxPresignedURL.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPresignedURL();
  return proto.proto.ProxPresignedURL.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPresignedURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPresignedURL}
 */
proto.proto.ProxPresignedURL.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxPresignedURL.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPresignedURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPresignedURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPresignedURL.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getExpires();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPresignedURL.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPresignedURL} returns this
 */
proto.proto.ProxPresignedURL.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPresignedURL} returns this
 */
proto.proto.ProxPresignedURL.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPresignedURL.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string url = 2;
 * @return {string}
 */
proto.proto.ProxPresignedURL.prototype.getUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPresignedURL} returns this
 */
proto.proto.ProxPresignedURL.prototype.setUrl = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string method = 3;
 * @return {string}
 */
proto.proto.ProxPresignedURL.prototype.getMethod = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPresignedURL} returns this
 */
proto.proto.ProxPresignedURL.prototype.setMethod = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 expires = 4;
 * @return {number}
 */
proto.proto.ProxPresignedURL.prototype.getExpires = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPresignedURL} returns this
 */
proto.proto.ProxPresignedURL.prototype.setExpires = function (value) {
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
  proto.proto.ProxPresignedURLResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPresignedURLResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPresignedURLResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPresignedURLResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        url: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxPresignedURLResp}
 */
proto.proto.ProxPresignedURLResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPresignedURLResp();
  return proto.proto.ProxPresignedURLResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPresignedURLResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPresignedURLResp}
 */
proto.proto.ProxPresignedURLResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxPresignedURLResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPresignedURLResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPresignedURLResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPresignedURLResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.proto.ProxPresignedURLResp.prototype.getUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPresignedURLResp} returns this
 */
proto.proto.ProxPresignedURLResp.prototype.setUrl = function (value) {
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
  proto.proto.ProxFileInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxFileInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxFileInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxFileInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        key: jspb.Message.getFieldWithDefault(msg, 2, ''),
        contenttype: jspb.Message.getFieldWithDefault(msg, 3, ''),
        size: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxFileInfo}
 */
proto.proto.ProxFileInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxFileInfo();
  return proto.proto.ProxFileInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxFileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxFileInfo}
 */
proto.proto.ProxFileInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxFileInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxFileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxFileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxFileInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxFileInfo.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxFileInfo} returns this
 */
proto.proto.ProxFileInfo.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxFileInfo} returns this
 */
proto.proto.ProxFileInfo.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxFileInfo.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string key = 2;
 * @return {string}
 */
proto.proto.ProxFileInfo.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFileInfo} returns this
 */
proto.proto.ProxFileInfo.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string contentType = 3;
 * @return {string}
 */
proto.proto.ProxFileInfo.prototype.getContenttype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxFileInfo} returns this
 */
proto.proto.ProxFileInfo.prototype.setContenttype = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.proto.ProxFileInfo.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxFileInfo} returns this
 */
proto.proto.ProxFileInfo.prototype.setSize = function (value) {
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
  proto.proto.ProxTouchResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxTouchResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxTouchResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxTouchResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxTouchResp}
 */
proto.proto.ProxTouchResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxTouchResp();
  return proto.proto.ProxTouchResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxTouchResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxTouchResp}
 */
proto.proto.ProxTouchResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxTouchResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxTouchResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxTouchResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxTouchResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxTouchResp.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxTouchResp} returns this
 */
proto.proto.ProxTouchResp.prototype.setStatus = function (value) {
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
  proto.proto.ProxGExtractCode.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGExtractCode.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGExtractCode} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGExtractCode.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        key: jspb.Message.getFieldWithDefault(msg, 3, ''),
        exp: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.proto.ProxGExtractCode}
 */
proto.proto.ProxGExtractCode.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGExtractCode();
  return proto.proto.ProxGExtractCode.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGExtractCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGExtractCode}
 */
proto.proto.ProxGExtractCode.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
        msg.setExp(value);
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
proto.proto.ProxGExtractCode.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGExtractCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGExtractCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGExtractCode.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getExp();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGExtractCode.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGExtractCode} returns this
 */
proto.proto.ProxGExtractCode.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGExtractCode} returns this
 */
proto.proto.ProxGExtractCode.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGExtractCode.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string cid = 2;
 * @return {string}
 */
proto.proto.ProxGExtractCode.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCode} returns this
 */
proto.proto.ProxGExtractCode.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string key = 3;
 * @return {string}
 */
proto.proto.ProxGExtractCode.prototype.getKey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCode} returns this
 */
proto.proto.ProxGExtractCode.prototype.setKey = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string exp = 4;
 * @return {string}
 */
proto.proto.ProxGExtractCode.prototype.getExp = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCode} returns this
 */
proto.proto.ProxGExtractCode.prototype.setExp = function (value) {
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
  proto.proto.ProxGExtractCodeResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGExtractCodeResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGExtractCodeResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGExtractCodeResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        extractcode: jspb.Message.getFieldWithDefault(msg, 1, ''),
        cid: jspb.Message.getFieldWithDefault(msg, 3, ''),
        state: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxGExtractCodeResp}
 */
proto.proto.ProxGExtractCodeResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGExtractCodeResp();
  return proto.proto.ProxGExtractCodeResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGExtractCodeResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGExtractCodeResp}
 */
proto.proto.ProxGExtractCodeResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setExtractcode(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCid(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setState(value);
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
proto.proto.ProxGExtractCodeResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGExtractCodeResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGExtractCodeResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGExtractCodeResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getExtractcode();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string extractCode = 1;
 * @return {string}
 */
proto.proto.ProxGExtractCodeResp.prototype.getExtractcode = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCodeResp} returns this
 */
proto.proto.ProxGExtractCodeResp.prototype.setExtractcode = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string cid = 3;
 * @return {string}
 */
proto.proto.ProxGExtractCodeResp.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCodeResp} returns this
 */
proto.proto.ProxGExtractCodeResp.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string state = 2;
 * @return {string}
 */
proto.proto.ProxGExtractCodeResp.prototype.getState = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGExtractCodeResp} returns this
 */
proto.proto.ProxGExtractCodeResp.prototype.setState = function (value) {
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
  proto.proto.ProxPInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
        averagespeed: jspb.Message.getFieldWithDefault(msg, 3, 0),
        size: jspb.Message.getFieldWithDefault(msg, 4, 0),
        firstbyte: jspb.Message.getFieldWithDefault(msg, 5, 0),
        duration: jspb.Message.getFieldWithDefault(msg, 6, 0),
        provider: jspb.Message.getFieldWithDefault(msg, 7, ''),
        idx: jspb.Message.getFieldWithDefault(msg, 8, 0),
        completed: jspb.Message.getFieldWithDefault(msg, 9, 0),
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
 * @return {!proto.proto.ProxPInfo}
 */
proto.proto.ProxPInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPInfo();
  return proto.proto.ProxPInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPInfo}
 */
proto.proto.ProxPInfo.deserializeBinaryFromReader = function (msg, reader) {
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
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAveragespeed(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSize(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFirstbyte(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setDuration(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setProvider(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setIdx(value);
        break;
      case 9:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setCompleted(value);
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
proto.proto.ProxPInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getAveragespeed();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getFirstbyte();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getIdx();
  if (f !== 0) {
    writer.writeInt32(8, f);
  }
  f = message.getCompleted();
  if (f !== 0) {
    writer.writeUint64(9, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxPInfo.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxPInfo.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional uint64 averageSpeed = 3;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getAveragespeed = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setAveragespeed = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 size = 4;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getSize = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setSize = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 firstByte = 5;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getFirstbyte = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setFirstbyte = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 duration = 6;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getDuration = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setDuration = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional string provider = 7;
 * @return {string}
 */
proto.proto.ProxPInfo.prototype.getProvider = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setProvider = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional int32 idx = 8;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getIdx = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setIdx = function (value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};

/**
 * optional uint64 completed = 9;
 * @return {number}
 */
proto.proto.ProxPInfo.prototype.getCompleted = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPInfo} returns this
 */
proto.proto.ProxPInfo.prototype.setCompleted = function (value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxPinningInfo.repeatedFields_ = [4];

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
  proto.proto.ProxPinningInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinningInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinningInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinningInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        requestid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
        created: jspb.Message.getFieldWithDefault(msg, 3, ''),
        pinsList: jspb.Message.toObjectList(msg.getPinsList(), proto.proto.ProxPInfo.toObject, includeInstance),
        name: jspb.Message.getFieldWithDefault(msg, 5, ''),
        fstype: jspb.Message.getFieldWithDefault(msg, 6, 0),
        opertype: jspb.Message.getFieldWithDefault(msg, 7, 0),
        averagespeed: jspb.Message.getFieldWithDefault(msg, 8, 0),
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
 * @return {!proto.proto.ProxPinningInfo}
 */
proto.proto.ProxPinningInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinningInfo();
  return proto.proto.ProxPinningInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinningInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinningInfo}
 */
proto.proto.ProxPinningInfo.deserializeBinaryFromReader = function (msg, reader) {
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
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setStatus(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreated(value);
        break;
      case 4:
        var value = new proto.proto.ProxPInfo();
        reader.readMessage(value, proto.proto.ProxPInfo.deserializeBinaryFromReader);
        msg.addPins(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setFstype(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setOpertype(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAveragespeed(value);
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
proto.proto.ProxPinningInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinningInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinningInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinningInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCreated();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getPinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(4, f, proto.proto.ProxPInfo.serializeBinaryToWriter);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getFstype();
  if (f !== 0) {
    writer.writeInt32(6, f);
  }
  f = message.getOpertype();
  if (f !== 0) {
    writer.writeInt32(7, f);
  }
  f = message.getAveragespeed();
  if (f !== 0) {
    writer.writeUint64(8, f);
  }
};

/**
 * optional string requestID = 1;
 * @return {string}
 */
proto.proto.ProxPinningInfo.prototype.getRequestid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setRequestid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxPinningInfo.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string Created = 3;
 * @return {string}
 */
proto.proto.ProxPinningInfo.prototype.getCreated = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setCreated = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * repeated ProxPInfo pins = 4;
 * @return {!Array<!proto.proto.ProxPInfo>}
 */
proto.proto.ProxPinningInfo.prototype.getPinsList = function () {
  return /** @type{!Array<!proto.proto.ProxPInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPInfo, 4));
};

/**
 * @param {!Array<!proto.proto.ProxPInfo>} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setPinsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.proto.ProxPInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPInfo}
 */
proto.proto.ProxPinningInfo.prototype.addPins = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.ProxPInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.clearPinsList = function () {
  return this.setPinsList([]);
};

/**
 * optional string name = 5;
 * @return {string}
 */
proto.proto.ProxPinningInfo.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional int32 fsType = 6;
 * @return {number}
 */
proto.proto.ProxPinningInfo.prototype.getFstype = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setFstype = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional int32 operType = 7;
 * @return {number}
 */
proto.proto.ProxPinningInfo.prototype.getOpertype = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setOpertype = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional uint64 averageSpeed = 8;
 * @return {number}
 */
proto.proto.ProxPinningInfo.prototype.getAveragespeed = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinningInfo} returns this
 */
proto.proto.ProxPinningInfo.prototype.setAveragespeed = function (value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxPinningListRequest.repeatedFields_ = [8];

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
  proto.proto.ProxPinningListRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinningListRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinningListRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinningListRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
        pintype: jspb.Message.getFieldWithDefault(msg, 3, ''),
        before: jspb.Message.getFieldWithDefault(msg, 4, ''),
        after: jspb.Message.getFieldWithDefault(msg, 5, ''),
        limit: jspb.Message.getFieldWithDefault(msg, 6, 0),
        match: jspb.Message.getFieldWithDefault(msg, 7, ''),
        cidsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
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
 * @return {!proto.proto.ProxPinningListRequest}
 */
proto.proto.ProxPinningListRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinningListRequest();
  return proto.proto.ProxPinningListRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinningListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinningListRequest}
 */
proto.proto.ProxPinningListRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setStatus(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPintype(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setBefore(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setAfter(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setLimit(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setMatch(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.addCids(value);
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
proto.proto.ProxPinningListRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinningListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinningListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinningListRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPintype();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getBefore();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getAfter();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(6, f);
  }
  f = message.getMatch();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getCidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(8, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxPinningListRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxPinningListRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxPinningListRequest.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string pinType = 3;
 * @return {string}
 */
proto.proto.ProxPinningListRequest.prototype.getPintype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setPintype = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string before = 4;
 * @return {string}
 */
proto.proto.ProxPinningListRequest.prototype.getBefore = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setBefore = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string after = 5;
 * @return {string}
 */
proto.proto.ProxPinningListRequest.prototype.getAfter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setAfter = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional int32 limit = 6;
 * @return {number}
 */
proto.proto.ProxPinningListRequest.prototype.getLimit = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setLimit = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional string match = 7;
 * @return {string}
 */
proto.proto.ProxPinningListRequest.prototype.getMatch = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setMatch = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * repeated string cids = 8;
 * @return {!Array<string>}
 */
proto.proto.ProxPinningListRequest.prototype.getCidsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.setCidsList = function (value) {
  return jspb.Message.setField(this, 8, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.addCids = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPinningListRequest} returns this
 */
proto.proto.ProxPinningListRequest.prototype.clearCidsList = function () {
  return this.setCidsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxPinningResp.repeatedFields_ = [1];

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
  proto.proto.ProxPinningResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxPinningResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxPinningResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxPinningResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        pinningsList: jspb.Message.toObjectList(msg.getPinningsList(), proto.proto.ProxPinningInfo.toObject, includeInstance),
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
 * @return {!proto.proto.ProxPinningResp}
 */
proto.proto.ProxPinningResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxPinningResp();
  return proto.proto.ProxPinningResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxPinningResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxPinningResp}
 */
proto.proto.ProxPinningResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxPinningInfo();
        reader.readMessage(value, proto.proto.ProxPinningInfo.deserializeBinaryFromReader);
        msg.addPinnings(value);
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
proto.proto.ProxPinningResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxPinningResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxPinningResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxPinningResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPinningsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxPinningInfo.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxPinningInfo pinnings = 1;
 * @return {!Array<!proto.proto.ProxPinningInfo>}
 */
proto.proto.ProxPinningResp.prototype.getPinningsList = function () {
  return /** @type{!Array<!proto.proto.ProxPinningInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxPinningInfo, 1));
};

/**
 * @param {!Array<!proto.proto.ProxPinningInfo>} value
 * @return {!proto.proto.ProxPinningResp} returns this
 */
proto.proto.ProxPinningResp.prototype.setPinningsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxPinningInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxPinningInfo}
 */
proto.proto.ProxPinningResp.prototype.addPinnings = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxPinningInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxPinningResp} returns this
 */
proto.proto.ProxPinningResp.prototype.clearPinningsList = function () {
  return this.setPinningsList([]);
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
  proto.proto.ProxNFTInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxNFTInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxNFTInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxNFTInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        contractid: jspb.Message.getFieldWithDefault(msg, 2, ''),
        tokenid: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxNFTInfo}
 */
proto.proto.ProxNFTInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxNFTInfo();
  return proto.proto.ProxNFTInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxNFTInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxNFTInfo}
 */
proto.proto.ProxNFTInfo.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxNFTInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxNFTInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxNFTInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxNFTInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getContractid();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getTokenid();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string cid = 1;
 * @return {string}
 */
proto.proto.ProxNFTInfo.prototype.getCid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxNFTInfo} returns this
 */
proto.proto.ProxNFTInfo.prototype.setCid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string contractID = 2;
 * @return {string}
 */
proto.proto.ProxNFTInfo.prototype.getContractid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxNFTInfo} returns this
 */
proto.proto.ProxNFTInfo.prototype.setContractid = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string tokenID = 3;
 * @return {string}
 */
proto.proto.ProxNFTInfo.prototype.getTokenid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxNFTInfo} returns this
 */
proto.proto.ProxNFTInfo.prototype.setTokenid = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxUpdateNFTRequest.repeatedFields_ = [2];

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
  proto.proto.ProxUpdateNFTRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxUpdateNFTRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxUpdateNFTRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxUpdateNFTRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        nftinfosList: jspb.Message.toObjectList(msg.getNftinfosList(), proto.proto.ProxNFTInfo.toObject, includeInstance),
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
 * @return {!proto.proto.ProxUpdateNFTRequest}
 */
proto.proto.ProxUpdateNFTRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxUpdateNFTRequest();
  return proto.proto.ProxUpdateNFTRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxUpdateNFTRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxUpdateNFTRequest}
 */
proto.proto.ProxUpdateNFTRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxNFTInfo();
        reader.readMessage(value, proto.proto.ProxNFTInfo.deserializeBinaryFromReader);
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
proto.proto.ProxUpdateNFTRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxUpdateNFTRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxUpdateNFTRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxUpdateNFTRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getNftinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, proto.proto.ProxNFTInfo.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxUpdateNFTRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxUpdateNFTRequest} returns this
 */
proto.proto.ProxUpdateNFTRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxUpdateNFTRequest} returns this
 */
proto.proto.ProxUpdateNFTRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxUpdateNFTRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ProxNFTInfo nftInfos = 2;
 * @return {!Array<!proto.proto.ProxNFTInfo>}
 */
proto.proto.ProxUpdateNFTRequest.prototype.getNftinfosList = function () {
  return /** @type{!Array<!proto.proto.ProxNFTInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxNFTInfo, 2));
};

/**
 * @param {!Array<!proto.proto.ProxNFTInfo>} value
 * @return {!proto.proto.ProxUpdateNFTRequest} returns this
 */
proto.proto.ProxUpdateNFTRequest.prototype.setNftinfosList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.proto.ProxNFTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxNFTInfo}
 */
proto.proto.ProxUpdateNFTRequest.prototype.addNftinfos = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ProxNFTInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxUpdateNFTRequest} returns this
 */
proto.proto.ProxUpdateNFTRequest.prototype.clearNftinfosList = function () {
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
  proto.proto.ProxUpdateNFTResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxUpdateNFTResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxUpdateNFTResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxUpdateNFTResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxUpdateNFTResp}
 */
proto.proto.ProxUpdateNFTResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxUpdateNFTResp();
  return proto.proto.ProxUpdateNFTResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxUpdateNFTResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxUpdateNFTResp}
 */
proto.proto.ProxUpdateNFTResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxUpdateNFTResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxUpdateNFTResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxUpdateNFTResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxUpdateNFTResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxUpdateNFTResp.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxUpdateNFTResp} returns this
 */
proto.proto.ProxUpdateNFTResp.prototype.setStatus = function (value) {
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
  proto.proto.ProxCred.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCred.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCred} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCred.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        accesskey: jspb.Message.getFieldWithDefault(msg, 1, ''),
        secretkey: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxCred}
 */
proto.proto.ProxCred.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCred();
  return proto.proto.ProxCred.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCred} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCred}
 */
proto.proto.ProxCred.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxCred.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCred.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCred} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCred.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccesskey();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getSecretkey();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string accessKey = 1;
 * @return {string}
 */
proto.proto.ProxCred.prototype.getAccesskey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCred} returns this
 */
proto.proto.ProxCred.prototype.setAccesskey = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string secretKey = 2;
 * @return {string}
 */
proto.proto.ProxCred.prototype.getSecretkey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCred} returns this
 */
proto.proto.ProxCred.prototype.setSecretkey = function (value) {
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
  proto.proto.ProxCredRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCredRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCredRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCredRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        cred: (f = msg.getCred()) && proto.proto.ProxCred.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxCredRequest}
 */
proto.proto.ProxCredRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCredRequest();
  return proto.proto.ProxCredRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCredRequest}
 */
proto.proto.ProxCredRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxCred();
        reader.readMessage(value, proto.proto.ProxCred.deserializeBinaryFromReader);
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
proto.proto.ProxCredRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCredRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getCred();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxCred.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxCredRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxCredRequest} returns this
 */
proto.proto.ProxCredRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxCredRequest} returns this
 */
proto.proto.ProxCredRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxCredRequest.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxCred cred = 2;
 * @return {?proto.proto.ProxCred}
 */
proto.proto.ProxCredRequest.prototype.getCred = function () {
  return /** @type{?proto.proto.ProxCred} */ (jspb.Message.getWrapperField(this, proto.proto.ProxCred, 2));
};

/**
 * @param {?proto.proto.ProxCred|undefined} value
 * @return {!proto.proto.ProxCredRequest} returns this
 */
proto.proto.ProxCredRequest.prototype.setCred = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxCredRequest} returns this
 */
proto.proto.ProxCredRequest.prototype.clearCred = function () {
  return this.setCred(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxCredRequest.prototype.hasCred = function () {
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
  proto.proto.ProxCredResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCredResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCredResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCredResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxCredResp}
 */
proto.proto.ProxCredResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCredResp();
  return proto.proto.ProxCredResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCredResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCredResp}
 */
proto.proto.ProxCredResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxCredResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCredResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCredResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCredResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxCredResp.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxCredResp} returns this
 */
proto.proto.ProxCredResp.prototype.setStatus = function (value) {
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
  proto.proto.ProxGetCredRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGetCredRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGetCredRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGetCredRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxGetCredRequest}
 */
proto.proto.ProxGetCredRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGetCredRequest();
  return proto.proto.ProxGetCredRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGetCredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGetCredRequest}
 */
proto.proto.ProxGetCredRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxGetCredRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGetCredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGetCredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGetCredRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGetCredRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGetCredRequest} returns this
 */
proto.proto.ProxGetCredRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGetCredRequest} returns this
 */
proto.proto.ProxGetCredRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGetCredRequest.prototype.hasHeader = function () {
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
  proto.proto.ProxGeneratePinCredRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGeneratePinCredRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGeneratePinCredRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGeneratePinCredRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxGeneratePinCredRequest}
 */
proto.proto.ProxGeneratePinCredRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGeneratePinCredRequest();
  return proto.proto.ProxGeneratePinCredRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGeneratePinCredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGeneratePinCredRequest}
 */
proto.proto.ProxGeneratePinCredRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxGeneratePinCredRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGeneratePinCredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGeneratePinCredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGeneratePinCredRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxGeneratePinCredRequest.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxGeneratePinCredRequest} returns this
 */
proto.proto.ProxGeneratePinCredRequest.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxGeneratePinCredRequest} returns this
 */
proto.proto.ProxGeneratePinCredRequest.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxGeneratePinCredRequest.prototype.hasHeader = function () {
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
  proto.proto.ProxGeneratePinCredResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxGeneratePinCredResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxGeneratePinCredResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxGeneratePinCredResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cred: jspb.Message.getFieldWithDefault(msg, 1, ''),
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
 * @return {!proto.proto.ProxGeneratePinCredResp}
 */
proto.proto.ProxGeneratePinCredResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxGeneratePinCredResp();
  return proto.proto.ProxGeneratePinCredResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxGeneratePinCredResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxGeneratePinCredResp}
 */
proto.proto.ProxGeneratePinCredResp.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxGeneratePinCredResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxGeneratePinCredResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxGeneratePinCredResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxGeneratePinCredResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCred();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string cred = 1;
 * @return {string}
 */
proto.proto.ProxGeneratePinCredResp.prototype.getCred = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxGeneratePinCredResp} returns this
 */
proto.proto.ProxGeneratePinCredResp.prototype.setCred = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxCredsList.repeatedFields_ = [1];

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
  proto.proto.ProxCredsList.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxCredsList.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxCredsList} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxCredsList.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        credsList: jspb.Message.toObjectList(msg.getCredsList(), proto.proto.ProxCred.toObject, includeInstance),
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
 * @return {!proto.proto.ProxCredsList}
 */
proto.proto.ProxCredsList.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxCredsList();
  return proto.proto.ProxCredsList.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxCredsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxCredsList}
 */
proto.proto.ProxCredsList.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxCred();
        reader.readMessage(value, proto.proto.ProxCred.deserializeBinaryFromReader);
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
proto.proto.ProxCredsList.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxCredsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxCredsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxCredsList.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCredsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxCred.serializeBinaryToWriter);
  }
};

/**
 * repeated ProxCred creds = 1;
 * @return {!Array<!proto.proto.ProxCred>}
 */
proto.proto.ProxCredsList.prototype.getCredsList = function () {
  return /** @type{!Array<!proto.proto.ProxCred>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxCred, 1));
};

/**
 * @param {!Array<!proto.proto.ProxCred>} value
 * @return {!proto.proto.ProxCredsList} returns this
 */
proto.proto.ProxCredsList.prototype.setCredsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxCred=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxCred}
 */
proto.proto.ProxCredsList.prototype.addCreds = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxCred, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxCredsList} returns this
 */
proto.proto.ProxCredsList.prototype.clearCredsList = function () {
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
  proto.proto.ProxChatReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxChatReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxChatReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxChatReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxChatRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxChatReq}
 */
proto.proto.ProxChatReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxChatReq();
  return proto.proto.ProxChatReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxChatReq}
 */
proto.proto.ProxChatReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxChatRequest();
        reader.readMessage(value, proto.proto.ProxChatRequest.deserializeBinaryFromReader);
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
proto.proto.ProxChatReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxChatReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxChatRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxChatReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxChatReq} returns this
 */
proto.proto.ProxChatReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxChatReq} returns this
 */
proto.proto.ProxChatReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxChatReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxChatRequest request = 2;
 * @return {?proto.proto.ProxChatRequest}
 */
proto.proto.ProxChatReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxChatRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxChatRequest, 2));
};

/**
 * @param {?proto.proto.ProxChatRequest|undefined} value
 * @return {!proto.proto.ProxChatReq} returns this
 */
proto.proto.ProxChatReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxChatReq} returns this
 */
proto.proto.ProxChatReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxChatReq.prototype.hasRequest = function () {
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
  proto.proto.ProxChatRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxChatRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxChatRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxChatRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        vsname: jspb.Message.getFieldWithDefault(msg, 1, ''),
        query: jspb.Message.getFieldWithDefault(msg, 2, ''),
        en: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
        model: jspb.Message.getFieldWithDefault(msg, 4, ''),
        chattype: jspb.Message.getFieldWithDefault(msg, 5, ''),
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
 * @return {!proto.proto.ProxChatRequest}
 */
proto.proto.ProxChatRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxChatRequest();
  return proto.proto.ProxChatRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxChatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxChatRequest}
 */
proto.proto.ProxChatRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxChatRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxChatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxChatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxChatRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getVsname();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getEn();
  if (f) {
    writer.writeBool(3, f);
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getChattype();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string vsName = 1;
 * @return {string}
 */
proto.proto.ProxChatRequest.prototype.getVsname = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatRequest} returns this
 */
proto.proto.ProxChatRequest.prototype.setVsname = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string query = 2;
 * @return {string}
 */
proto.proto.ProxChatRequest.prototype.getQuery = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatRequest} returns this
 */
proto.proto.ProxChatRequest.prototype.setQuery = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional bool en = 3;
 * @return {boolean}
 */
proto.proto.ProxChatRequest.prototype.getEn = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxChatRequest} returns this
 */
proto.proto.ProxChatRequest.prototype.setEn = function (value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional string model = 4;
 * @return {string}
 */
proto.proto.ProxChatRequest.prototype.getModel = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatRequest} returns this
 */
proto.proto.ProxChatRequest.prototype.setModel = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string chatType = 5;
 * @return {string}
 */
proto.proto.ProxChatRequest.prototype.getChattype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatRequest} returns this
 */
proto.proto.ProxChatRequest.prototype.setChattype = function (value) {
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
  proto.proto.ProxChatResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxChatResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxChatResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxChatResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        value: jspb.Message.getFieldWithDefault(msg, 1, ''),
        status: jspb.Message.getFieldWithDefault(msg, 2, ''),
        sourcedocuments: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.proto.ProxChatResponse}
 */
proto.proto.ProxChatResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxChatResponse();
  return proto.proto.ProxChatResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxChatResponse}
 */
proto.proto.ProxChatResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxChatResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxChatResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getSourcedocuments();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string value = 1;
 * @return {string}
 */
proto.proto.ProxChatResponse.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatResponse} returns this
 */
proto.proto.ProxChatResponse.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string status = 2;
 * @return {string}
 */
proto.proto.ProxChatResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatResponse} returns this
 */
proto.proto.ProxChatResponse.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string sourceDocuments = 3;
 * @return {string}
 */
proto.proto.ProxChatResponse.prototype.getSourcedocuments = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxChatResponse} returns this
 */
proto.proto.ProxChatResponse.prototype.setSourcedocuments = function (value) {
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
  proto.proto.ProxKNReq.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxKNReq.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxKNReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxKNReq.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        request: (f = msg.getRequest()) && proto.proto.ProxKNRequest.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxKNReq}
 */
proto.proto.ProxKNReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxKNReq();
  return proto.proto.ProxKNReq.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxKNReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxKNReq}
 */
proto.proto.ProxKNReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
        break;
      case 2:
        var value = new proto.proto.ProxKNRequest();
        reader.readMessage(value, proto.proto.ProxKNRequest.deserializeBinaryFromReader);
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
proto.proto.ProxKNReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxKNReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxKNReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxKNReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(2, f, proto.proto.ProxKNRequest.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxKNReq.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxKNReq} returns this
 */
proto.proto.ProxKNReq.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxKNReq} returns this
 */
proto.proto.ProxKNReq.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxKNReq.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional ProxKNRequest request = 2;
 * @return {?proto.proto.ProxKNRequest}
 */
proto.proto.ProxKNReq.prototype.getRequest = function () {
  return /** @type{?proto.proto.ProxKNRequest} */ (jspb.Message.getWrapperField(this, proto.proto.ProxKNRequest, 2));
};

/**
 * @param {?proto.proto.ProxKNRequest|undefined} value
 * @return {!proto.proto.ProxKNReq} returns this
 */
proto.proto.ProxKNReq.prototype.setRequest = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxKNReq} returns this
 */
proto.proto.ProxKNReq.prototype.clearRequest = function () {
  return this.setRequest(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxKNReq.prototype.hasRequest = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxKNRequest.repeatedFields_ = [4];

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
  proto.proto.ProxKNRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxKNRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxKNRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxKNRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        vsname: jspb.Message.getFieldWithDefault(msg, 1, ''),
        title: jspb.Message.getFieldWithDefault(msg, 2, ''),
        content: jspb.Message.getFieldWithDefault(msg, 3, ''),
        filesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
        method: jspb.Message.getFieldWithDefault(msg, 5, ''),
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
 * @return {!proto.proto.ProxKNRequest}
 */
proto.proto.ProxKNRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxKNRequest();
  return proto.proto.ProxKNRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxKNRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxKNRequest}
 */
proto.proto.ProxKNRequest.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxKNRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxKNRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxKNRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxKNRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getVsname();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(4, f);
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string vsName = 1;
 * @return {string}
 */
proto.proto.ProxKNRequest.prototype.getVsname = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.setVsname = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string title = 2;
 * @return {string}
 */
proto.proto.ProxKNRequest.prototype.getTitle = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.setTitle = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string content = 3;
 * @return {string}
 */
proto.proto.ProxKNRequest.prototype.getContent = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.setContent = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * repeated string files = 4;
 * @return {!Array<string>}
 */
proto.proto.ProxKNRequest.prototype.getFilesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.setFilesList = function (value) {
  return jspb.Message.setField(this, 4, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.addFiles = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.clearFilesList = function () {
  return this.setFilesList([]);
};

/**
 * optional string method = 5;
 * @return {string}
 */
proto.proto.ProxKNRequest.prototype.getMethod = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNRequest} returns this
 */
proto.proto.ProxKNRequest.prototype.setMethod = function (value) {
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
  proto.proto.ProxKNResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxKNResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxKNResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxKNResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, ''),
        data: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxKNResponse}
 */
proto.proto.ProxKNResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxKNResponse();
  return proto.proto.ProxKNResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxKNResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxKNResponse}
 */
proto.proto.ProxKNResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.proto.ProxKNResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxKNResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxKNResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxKNResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string status = 1;
 * @return {string}
 */
proto.proto.ProxKNResponse.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNResponse} returns this
 */
proto.proto.ProxKNResponse.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string data = 2;
 * @return {string}
 */
proto.proto.ProxKNResponse.prototype.getData = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxKNResponse} returns this
 */
proto.proto.ProxKNResponse.prototype.setData = function (value) {
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
  proto.proto.ProxF2PGetSpace.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetSpace.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetSpace} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetSpace.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetSpace}
 */
proto.proto.ProxF2PGetSpace.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetSpace();
  return proto.proto.ProxF2PGetSpace.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetSpace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetSpace}
 */
proto.proto.ProxF2PGetSpace.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxF2PGetSpace.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetSpace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetSpace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetSpace.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxF2PGetSpace.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxF2PGetSpace} returns this
 */
proto.proto.ProxF2PGetSpace.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetSpace} returns this
 */
proto.proto.ProxF2PGetSpace.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetSpace.prototype.hasHeader = function () {
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
  proto.proto.ProxF2PGetMiner.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetMiner.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetMiner} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetMiner.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetMiner}
 */
proto.proto.ProxF2PGetMiner.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetMiner();
  return proto.proto.ProxF2PGetMiner.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetMiner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetMiner}
 */
proto.proto.ProxF2PGetMiner.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxF2PGetMiner.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetMiner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetMiner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetMiner.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxF2PGetMiner.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxF2PGetMiner} returns this
 */
proto.proto.ProxF2PGetMiner.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetMiner} returns this
 */
proto.proto.ProxF2PGetMiner.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetMiner.prototype.hasHeader = function () {
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
  proto.proto.ProxF2PGetApp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetApp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetApp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetApp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
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
 * @return {!proto.proto.ProxF2PGetApp}
 */
proto.proto.ProxF2PGetApp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetApp();
  return proto.proto.ProxF2PGetApp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetApp}
 */
proto.proto.ProxF2PGetApp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
        msg.setHeader(value);
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
proto.proto.ProxF2PGetApp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetApp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxF2PGetApp.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxF2PGetApp} returns this
 */
proto.proto.ProxF2PGetApp.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetApp} returns this
 */
proto.proto.ProxF2PGetApp.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetApp.prototype.hasHeader = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetApp.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetApp} returns this
 */
proto.proto.ProxF2PGetApp.prototype.setName = function (value) {
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
  proto.proto.ProxF2PGetAppData.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetAppData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetAppData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetAppData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, 0),
        createdat: jspb.Message.getFieldWithDefault(msg, 2, ''),
        updatedat: jspb.Message.getFieldWithDefault(msg, 3, ''),
        name: jspb.Message.getFieldWithDefault(msg, 4, ''),
        version: jspb.Message.getFieldWithDefault(msg, 5, ''),
        state: jspb.Message.getFieldWithDefault(msg, 6, ''),
        installType: jspb.Message.getFieldWithDefault(msg, 7, ''),
        serviceState: jspb.Message.getFieldWithDefault(msg, 8, ''),
        params: jspb.Message.getFieldWithDefault(msg, 9, ''),
        time: jspb.Message.getFieldWithDefault(msg, 10, ''),
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
 * @return {!proto.proto.ProxF2PGetAppData}
 */
proto.proto.ProxF2PGetAppData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetAppData();
  return proto.proto.ProxF2PGetAppData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetAppData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetAppData}
 */
proto.proto.ProxF2PGetAppData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreatedat(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setUpdatedat(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setVersion(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setState(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setInstallType(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setServiceState(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setParams(value);
        break;
      case 10:
        var value = /** @type {string} */ (reader.readString());
        msg.setTime(value);
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
proto.proto.ProxF2PGetAppData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetAppData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetAppData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetAppData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getUpdatedat();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getInstallType();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
  f = message.getServiceState();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getParams();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(10, f);
  }
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetAppData.prototype.getId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string createdAt = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getCreatedat = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setCreatedat = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string updatedAt = 3;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getUpdatedat = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setUpdatedat = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string name = 4;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string version = 5;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getVersion = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setVersion = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string state = 6;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getState = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setState = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional string install_type = 7;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getInstallType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setInstallType = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional string service_state = 8;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getServiceState = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setServiceState = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional string params = 9;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getParams = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setParams = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};

/**
 * optional string time = 10;
 * @return {string}
 */
proto.proto.ProxF2PGetAppData.prototype.getTime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppData} returns this
 */
proto.proto.ProxF2PGetAppData.prototype.setTime = function (value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
  proto.proto.ProxF2PGetSpaceResult.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetSpaceResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetSpaceResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetSpaceResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        ipfs: jspb.Message.getFieldWithDefault(msg, 1, 0),
        localData: jspb.Message.getFieldWithDefault(msg, 2, 0),
        iot: jspb.Message.getFieldWithDefault(msg, 3, 0),
        miningPool: jspb.Message.getFieldWithDefault(msg, 4, 0),
        remaining: jspb.Message.getFieldWithDefault(msg, 5, 0),
        total: jspb.Message.getFieldWithDefault(msg, 6, 0),
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
 * @return {!proto.proto.ProxF2PGetSpaceResult}
 */
proto.proto.ProxF2PGetSpaceResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetSpaceResult();
  return proto.proto.ProxF2PGetSpaceResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetSpaceResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetSpaceResult}
 */
proto.proto.ProxF2PGetSpaceResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setIpfs(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setLocalData(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setIot(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMiningPool(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setRemaining(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
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
proto.proto.ProxF2PGetSpaceResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetSpaceResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetSpaceResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetSpaceResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getIpfs();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getLocalData();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getIot();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getMiningPool();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getRemaining();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
};

/**
 * optional uint64 ipfs = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getIpfs = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setIpfs = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional uint64 local_data = 2;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getLocalData = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setLocalData = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 iot = 3;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getIot = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setIot = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 mining_pool = 4;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getMiningPool = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setMiningPool = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 remaining = 5;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getRemaining = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setRemaining = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 total = 6;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResult.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResult} returns this
 */
proto.proto.ProxF2PGetSpaceResult.prototype.setTotal = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
  proto.proto.ProxF2PGetSpaceResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetSpaceResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetSpaceResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetSpaceResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        message: jspb.Message.getFieldWithDefault(msg, 2, ''),
        result: (f = msg.getResult()) && proto.proto.ProxF2PGetSpaceResult.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetSpaceResp}
 */
proto.proto.ProxF2PGetSpaceResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetSpaceResp();
  return proto.proto.ProxF2PGetSpaceResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetSpaceResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetSpaceResp}
 */
proto.proto.ProxF2PGetSpaceResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 3:
        var value = new proto.proto.ProxF2PGetSpaceResult();
        reader.readMessage(value, proto.proto.ProxF2PGetSpaceResult.deserializeBinaryFromReader);
        msg.setResult(value);
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
proto.proto.ProxF2PGetSpaceResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetSpaceResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetSpaceResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetSpaceResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxF2PGetSpaceResult.serializeBinaryToWriter);
  }
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetSpaceResp.prototype.getCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetSpaceResp} returns this
 */
proto.proto.ProxF2PGetSpaceResp.prototype.setCode = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string message = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetSpaceResp.prototype.getMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetSpaceResp} returns this
 */
proto.proto.ProxF2PGetSpaceResp.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional ProxF2PGetSpaceResult result = 3;
 * @return {?proto.proto.ProxF2PGetSpaceResult}
 */
proto.proto.ProxF2PGetSpaceResp.prototype.getResult = function () {
  return /** @type{?proto.proto.ProxF2PGetSpaceResult} */ (jspb.Message.getWrapperField(this, proto.proto.ProxF2PGetSpaceResult, 3));
};

/**
 * @param {?proto.proto.ProxF2PGetSpaceResult|undefined} value
 * @return {!proto.proto.ProxF2PGetSpaceResp} returns this
 */
proto.proto.ProxF2PGetSpaceResp.prototype.setResult = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetSpaceResp} returns this
 */
proto.proto.ProxF2PGetSpaceResp.prototype.clearResult = function () {
  return this.setResult(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetSpaceResp.prototype.hasResult = function () {
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
  proto.proto.ProxF2PGetIOT.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetIOT.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetIOT} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetIOT.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        header: (f = msg.getHeader()) && proto.proto.ProxHeader.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetIOT}
 */
proto.proto.ProxF2PGetIOT.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetIOT();
  return proto.proto.ProxF2PGetIOT.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetIOT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetIOT}
 */
proto.proto.ProxF2PGetIOT.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxHeader();
        reader.readMessage(value, proto.proto.ProxHeader.deserializeBinaryFromReader);
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
proto.proto.ProxF2PGetIOT.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetIOT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetIOT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetIOT.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxHeader.serializeBinaryToWriter);
  }
};

/**
 * optional ProxHeader header = 1;
 * @return {?proto.proto.ProxHeader}
 */
proto.proto.ProxF2PGetIOT.prototype.getHeader = function () {
  return /** @type{?proto.proto.ProxHeader} */ (jspb.Message.getWrapperField(this, proto.proto.ProxHeader, 1));
};

/**
 * @param {?proto.proto.ProxHeader|undefined} value
 * @return {!proto.proto.ProxF2PGetIOT} returns this
 */
proto.proto.ProxF2PGetIOT.prototype.setHeader = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetIOT} returns this
 */
proto.proto.ProxF2PGetIOT.prototype.clearHeader = function () {
  return this.setHeader(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetIOT.prototype.hasHeader = function () {
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
  proto.proto.ProxIOTInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxIOTInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxIOTInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxIOTInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        deviceid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        status: jspb.Message.getFieldWithDefault(msg, 2, 0),
        groupname: jspb.Message.getFieldWithDefault(msg, 3, ''),
        lastactivetime: jspb.Message.getFieldWithDefault(msg, 4, ''),
        temperature: jspb.Message.getFieldWithDefault(msg, 5, ''),
        humidity: jspb.Message.getFieldWithDefault(msg, 6, ''),
        groupid: jspb.Message.getFieldWithDefault(msg, 7, 0),
        devicename: jspb.Message.getFieldWithDefault(msg, 8, ''),
        devicetype: jspb.Message.getFieldWithDefault(msg, 9, 0),
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
 * @return {!proto.proto.ProxIOTInfo}
 */
proto.proto.ProxIOTInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxIOTInfo();
  return proto.proto.ProxIOTInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxIOTInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxIOTInfo}
 */
proto.proto.ProxIOTInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setDeviceid(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setStatus(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setGroupname(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setLastactivetime(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setTemperature(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setHumidity(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setGroupid(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setDevicename(value);
        break;
      case 9:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setDevicetype(value);
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
proto.proto.ProxIOTInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxIOTInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxIOTInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxIOTInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(2, f);
  }
  f = message.getGroupname();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getLastactivetime();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getTemperature();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getHumidity();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(7, f);
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(8, f);
  }
  f = message.getDevicetype();
  if (f !== 0) {
    writer.writeInt32(9, f);
  }
};

/**
 * optional string deviceId = 1;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getDeviceid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setDeviceid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.proto.ProxIOTInfo.prototype.getStatus = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setStatus = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string groupName = 3;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getGroupname = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setGroupname = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string lastActiveTime = 4;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getLastactivetime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setLastactivetime = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string temperature = 5;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getTemperature = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setTemperature = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string humidity = 6;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getHumidity = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setHumidity = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

/**
 * optional int32 groupId = 7;
 * @return {number}
 */
proto.proto.ProxIOTInfo.prototype.getGroupid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setGroupid = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional string deviceName = 8;
 * @return {string}
 */
proto.proto.ProxIOTInfo.prototype.getDevicename = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setDevicename = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};

/**
 * optional int32 deviceType = 9;
 * @return {number}
 */
proto.proto.ProxIOTInfo.prototype.getDevicetype = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxIOTInfo} returns this
 */
proto.proto.ProxIOTInfo.prototype.setDevicetype = function (value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxIOTData.repeatedFields_ = [4];

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
  proto.proto.ProxIOTData.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxIOTData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxIOTData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxIOTData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
        type: jspb.Message.getFieldWithDefault(msg, 2, 0),
        groupname: jspb.Message.getFieldWithDefault(msg, 3, ''),
        listList: jspb.Message.toObjectList(msg.getListList(), proto.proto.ProxIOTInfo.toObject, includeInstance),
        receiverstatus: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
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
 * @return {!proto.proto.ProxIOTData}
 */
proto.proto.ProxIOTData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxIOTData();
  return proto.proto.ProxIOTData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxIOTData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxIOTData}
 */
proto.proto.ProxIOTData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setGroupid(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setType(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setGroupname(value);
        break;
      case 4:
        var value = new proto.proto.ProxIOTInfo();
        reader.readMessage(value, proto.proto.ProxIOTInfo.deserializeBinaryFromReader);
        msg.addList(value);
        break;
      case 5:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setReceiverstatus(value);
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
proto.proto.ProxIOTData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxIOTData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxIOTData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxIOTData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(2, f);
  }
  f = message.getGroupname();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(4, f, proto.proto.ProxIOTInfo.serializeBinaryToWriter);
  }
  f = message.getReceiverstatus();
  if (f) {
    writer.writeBool(5, f);
  }
};

/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.proto.ProxIOTData.prototype.getGroupid = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.setGroupid = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.proto.ProxIOTData.prototype.getType = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.setType = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string groupName = 3;
 * @return {string}
 */
proto.proto.ProxIOTData.prototype.getGroupname = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.setGroupname = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * repeated ProxIOTInfo list = 4;
 * @return {!Array<!proto.proto.ProxIOTInfo>}
 */
proto.proto.ProxIOTData.prototype.getListList = function () {
  return /** @type{!Array<!proto.proto.ProxIOTInfo>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxIOTInfo, 4));
};

/**
 * @param {!Array<!proto.proto.ProxIOTInfo>} value
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.setListList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.proto.ProxIOTInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxIOTInfo}
 */
proto.proto.ProxIOTData.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.proto.ProxIOTInfo, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.clearListList = function () {
  return this.setListList([]);
};

/**
 * optional bool receiverStatus = 5;
 * @return {boolean}
 */
proto.proto.ProxIOTData.prototype.getReceiverstatus = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxIOTData} returns this
 */
proto.proto.ProxIOTData.prototype.setReceiverstatus = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxF2PGetIOTResp.repeatedFields_ = [3];

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
  proto.proto.ProxF2PGetIOTResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetIOTResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetIOTResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetIOTResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        msg: jspb.Message.getFieldWithDefault(msg, 2, ''),
        dataList: jspb.Message.toObjectList(msg.getDataList(), proto.proto.ProxIOTData.toObject, includeInstance),
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
 * @return {!proto.proto.ProxF2PGetIOTResp}
 */
proto.proto.ProxF2PGetIOTResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetIOTResp();
  return proto.proto.ProxF2PGetIOTResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetIOTResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetIOTResp}
 */
proto.proto.ProxF2PGetIOTResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMsg(value);
        break;
      case 3:
        var value = new proto.proto.ProxIOTData();
        reader.readMessage(value, proto.proto.ProxIOTData.deserializeBinaryFromReader);
        msg.addData(value);
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
proto.proto.ProxF2PGetIOTResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetIOTResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetIOTResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetIOTResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, proto.proto.ProxIOTData.serializeBinaryToWriter);
  }
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetIOTResp.prototype.getCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetIOTResp} returns this
 */
proto.proto.ProxF2PGetIOTResp.prototype.setCode = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string msg = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetIOTResp.prototype.getMsg = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetIOTResp} returns this
 */
proto.proto.ProxF2PGetIOTResp.prototype.setMsg = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * repeated ProxIOTData data = 3;
 * @return {!Array<!proto.proto.ProxIOTData>}
 */
proto.proto.ProxF2PGetIOTResp.prototype.getDataList = function () {
  return /** @type{!Array<!proto.proto.ProxIOTData>} */ (jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxIOTData, 3));
};

/**
 * @param {!Array<!proto.proto.ProxIOTData>} value
 * @return {!proto.proto.ProxF2PGetIOTResp} returns this
 */
proto.proto.ProxF2PGetIOTResp.prototype.setDataList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.proto.ProxIOTData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxIOTData}
 */
proto.proto.ProxF2PGetIOTResp.prototype.addData = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.ProxIOTData, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxF2PGetIOTResp} returns this
 */
proto.proto.ProxF2PGetIOTResp.prototype.clearDataList = function () {
  return this.setDataList([]);
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
  proto.proto.ProxF2PGetIOTAmountResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetIOTAmountResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetIOTAmountResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetIOTAmountResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        msg: jspb.Message.getFieldWithDefault(msg, 2, ''),
        data: jspb.Message.getFieldWithDefault(msg, 3, 0),
        time: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxF2PGetIOTAmountResp}
 */
proto.proto.ProxF2PGetIOTAmountResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetIOTAmountResp();
  return proto.proto.ProxF2PGetIOTAmountResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetIOTAmountResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetIOTAmountResp}
 */
proto.proto.ProxF2PGetIOTAmountResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMsg(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setData(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setTime(value);
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
proto.proto.ProxF2PGetIOTAmountResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetIOTAmountResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetIOTAmountResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetIOTAmountResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getData();
  if (f !== 0) {
    writer.writeInt32(3, f);
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(4, f);
  }
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.getCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetIOTAmountResp} returns this
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.setCode = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string msg = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.getMsg = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetIOTAmountResp} returns this
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.setMsg = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int32 data = 3;
 * @return {number}
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.getData = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetIOTAmountResp} returns this
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.setData = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 time = 4;
 * @return {number}
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.getTime = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetIOTAmountResp} returns this
 */
proto.proto.ProxF2PGetIOTAmountResp.prototype.setTime = function (value) {
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
  proto.proto.ProxF2PGetMinerData.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetMinerData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetMinerData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetMinerData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, 0),
        bucket: jspb.Message.getFieldWithDefault(msg, 2, ''),
        createdat: jspb.Message.getFieldWithDefault(msg, 3, ''),
        deleteData: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
        dmcAccount: jspb.Message.getFieldWithDefault(msg, 5, ''),
        expireOnWeek: jspb.Message.getFieldWithDefault(msg, 6, 0),
        isDelete: jspb.Message.getFieldWithDefault(msg, 7, 0),
        isPin: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
        memo: jspb.Message.getFieldWithDefault(msg, 9, ''),
        minerPoolAddr: jspb.Message.getFieldWithDefault(msg, 10, ''),
        minerPoolName: jspb.Message.getFieldWithDefault(msg, 11, ''),
        pinSize: jspb.Message.getFieldWithDefault(msg, 12, ''),
        space: jspb.Message.getFieldWithDefault(msg, 13, ''),
        stackAsset: jspb.Message.getFieldWithDefault(msg, 14, ''),
        status: jspb.Message.getFieldWithDefault(msg, 15, ''),
        updatedat: jspb.Message.getFieldWithDefault(msg, 16, ''),
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
 * @return {!proto.proto.ProxF2PGetMinerData}
 */
proto.proto.ProxF2PGetMinerData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetMinerData();
  return proto.proto.ProxF2PGetMinerData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetMinerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetMinerData}
 */
proto.proto.ProxF2PGetMinerData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setBucket(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreatedat(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setDeleteData(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setDmcAccount(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setExpireOnWeek(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setIsDelete(value);
        break;
      case 8:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsPin(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      case 10:
        var value = /** @type {string} */ (reader.readString());
        msg.setMinerPoolAddr(value);
        break;
      case 11:
        var value = /** @type {string} */ (reader.readString());
        msg.setMinerPoolName(value);
        break;
      case 12:
        var value = /** @type {string} */ (reader.readString());
        msg.setPinSize(value);
        break;
      case 13:
        var value = /** @type {string} */ (reader.readString());
        msg.setSpace(value);
        break;
      case 14:
        var value = /** @type {string} */ (reader.readString());
        msg.setStackAsset(value);
        break;
      case 15:
        var value = /** @type {string} */ (reader.readString());
        msg.setStatus(value);
        break;
      case 16:
        var value = /** @type {string} */ (reader.readString());
        msg.setUpdatedat(value);
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
proto.proto.ProxF2PGetMinerData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetMinerData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetMinerData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetMinerData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getDeleteData();
  if (f) {
    writer.writeBool(4, f);
  }
  f = message.getDmcAccount();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
  f = message.getExpireOnWeek();
  if (f !== 0) {
    writer.writeInt32(6, f);
  }
  f = message.getIsDelete();
  if (f !== 0) {
    writer.writeInt32(7, f);
  }
  f = message.getIsPin();
  if (f) {
    writer.writeBool(8, f);
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getMinerPoolAddr();
  if (f.length > 0) {
    writer.writeString(10, f);
  }
  f = message.getMinerPoolName();
  if (f.length > 0) {
    writer.writeString(11, f);
  }
  f = message.getPinSize();
  if (f.length > 0) {
    writer.writeString(12, f);
  }
  f = message.getSpace();
  if (f.length > 0) {
    writer.writeString(13, f);
  }
  f = message.getStackAsset();
  if (f.length > 0) {
    writer.writeString(14, f);
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(15, f);
  }
  f = message.getUpdatedat();
  if (f.length > 0) {
    writer.writeString(16, f);
  }
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetMinerData.prototype.getId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setId = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string bucket = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getBucket = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setBucket = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string createdAt = 3;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getCreatedat = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setCreatedat = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bool delete_data = 4;
 * @return {boolean}
 */
proto.proto.ProxF2PGetMinerData.prototype.getDeleteData = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setDeleteData = function (value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional string dmc_account = 5;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getDmcAccount = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setDmcAccount = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional int32 expire_on_week = 6;
 * @return {number}
 */
proto.proto.ProxF2PGetMinerData.prototype.getExpireOnWeek = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setExpireOnWeek = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional int32 is_delete = 7;
 * @return {number}
 */
proto.proto.ProxF2PGetMinerData.prototype.getIsDelete = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setIsDelete = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional bool is_pin = 8;
 * @return {boolean}
 */
proto.proto.ProxF2PGetMinerData.prototype.getIsPin = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};

/**
 * @param {boolean} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setIsPin = function (value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};

/**
 * optional string memo = 9;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setMemo = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};

/**
 * optional string miner_pool_addr = 10;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getMinerPoolAddr = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setMinerPoolAddr = function (value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};

/**
 * optional string miner_pool_name = 11;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getMinerPoolName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setMinerPoolName = function (value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};

/**
 * optional string pin_size = 12;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getPinSize = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setPinSize = function (value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};

/**
 * optional string space = 13;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getSpace = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setSpace = function (value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};

/**
 * optional string stack_asset = 14;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getStackAsset = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setStackAsset = function (value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};

/**
 * optional string status = 15;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getStatus = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setStatus = function (value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};

/**
 * optional string updatedAt = 16;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerData.prototype.getUpdatedat = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerData} returns this
 */
proto.proto.ProxF2PGetMinerData.prototype.setUpdatedat = function (value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ProxF2PGetMinerResult.repeatedFields_ = [1];

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
  proto.proto.ProxF2PGetMinerResult.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetMinerResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetMinerResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetMinerResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        dataList: jspb.Message.toObjectList(msg.getDataList(), proto.proto.ProxF2PGetMinerData.toObject, includeInstance),
        pagenumber: jspb.Message.getFieldWithDefault(msg, 2, ''),
        pagesize: jspb.Message.getFieldWithDefault(msg, 3, ''),
        total: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.proto.ProxF2PGetMinerResult}
 */
proto.proto.ProxF2PGetMinerResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetMinerResult();
  return proto.proto.ProxF2PGetMinerResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetMinerResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetMinerResult}
 */
proto.proto.ProxF2PGetMinerResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxF2PGetMinerData();
        reader.readMessage(value, proto.proto.ProxF2PGetMinerData.deserializeBinaryFromReader);
        msg.addData(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setPagenumber(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPagesize(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt32());
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
proto.proto.ProxF2PGetMinerResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetMinerResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetMinerResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetMinerResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.proto.ProxF2PGetMinerData.serializeBinaryToWriter);
  }
  f = message.getPagenumber();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPagesize();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};

/**
 * repeated ProxF2PGetMinerData data = 1;
 * @return {!Array<!proto.proto.ProxF2PGetMinerData>}
 */
proto.proto.ProxF2PGetMinerResult.prototype.getDataList = function () {
  return /** @type{!Array<!proto.proto.ProxF2PGetMinerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ProxF2PGetMinerData, 1)
  );
};

/**
 * @param {!Array<!proto.proto.ProxF2PGetMinerData>} value
 * @return {!proto.proto.ProxF2PGetMinerResult} returns this
 */
proto.proto.ProxF2PGetMinerResult.prototype.setDataList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.proto.ProxF2PGetMinerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ProxF2PGetMinerData}
 */
proto.proto.ProxF2PGetMinerResult.prototype.addData = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ProxF2PGetMinerData, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ProxF2PGetMinerResult} returns this
 */
proto.proto.ProxF2PGetMinerResult.prototype.clearDataList = function () {
  return this.setDataList([]);
};

/**
 * optional string pageNumber = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerResult.prototype.getPagenumber = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerResult} returns this
 */
proto.proto.ProxF2PGetMinerResult.prototype.setPagenumber = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string pageSize = 3;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerResult.prototype.getPagesize = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerResult} returns this
 */
proto.proto.ProxF2PGetMinerResult.prototype.setPagesize = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.proto.ProxF2PGetMinerResult.prototype.getTotal = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetMinerResult} returns this
 */
proto.proto.ProxF2PGetMinerResult.prototype.setTotal = function (value) {
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
  proto.proto.ProxF2PGetMinerResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetMinerResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetMinerResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetMinerResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        message: jspb.Message.getFieldWithDefault(msg, 2, ''),
        result: (f = msg.getResult()) && proto.proto.ProxF2PGetMinerResult.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetMinerResp}
 */
proto.proto.ProxF2PGetMinerResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetMinerResp();
  return proto.proto.ProxF2PGetMinerResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetMinerResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetMinerResp}
 */
proto.proto.ProxF2PGetMinerResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 3:
        var value = new proto.proto.ProxF2PGetMinerResult();
        reader.readMessage(value, proto.proto.ProxF2PGetMinerResult.deserializeBinaryFromReader);
        msg.setResult(value);
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
proto.proto.ProxF2PGetMinerResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetMinerResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetMinerResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetMinerResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxF2PGetMinerResult.serializeBinaryToWriter);
  }
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetMinerResp.prototype.getCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetMinerResp} returns this
 */
proto.proto.ProxF2PGetMinerResp.prototype.setCode = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string message = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetMinerResp.prototype.getMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetMinerResp} returns this
 */
proto.proto.ProxF2PGetMinerResp.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional ProxF2PGetMinerResult result = 3;
 * @return {?proto.proto.ProxF2PGetMinerResult}
 */
proto.proto.ProxF2PGetMinerResp.prototype.getResult = function () {
  return /** @type{?proto.proto.ProxF2PGetMinerResult} */ (jspb.Message.getWrapperField(this, proto.proto.ProxF2PGetMinerResult, 3));
};

/**
 * @param {?proto.proto.ProxF2PGetMinerResult|undefined} value
 * @return {!proto.proto.ProxF2PGetMinerResp} returns this
 */
proto.proto.ProxF2PGetMinerResp.prototype.setResult = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetMinerResp} returns this
 */
proto.proto.ProxF2PGetMinerResp.prototype.clearResult = function () {
  return this.setResult(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetMinerResp.prototype.hasResult = function () {
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
  proto.proto.ProxF2PGetAppResult.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetAppResult.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetAppResult} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetAppResult.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        data: (f = msg.getData()) && proto.proto.ProxF2PGetAppData.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetAppResult}
 */
proto.proto.ProxF2PGetAppResult.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetAppResult();
  return proto.proto.ProxF2PGetAppResult.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetAppResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetAppResult}
 */
proto.proto.ProxF2PGetAppResult.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.proto.ProxF2PGetAppData();
        reader.readMessage(value, proto.proto.ProxF2PGetAppData.deserializeBinaryFromReader);
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
proto.proto.ProxF2PGetAppResult.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetAppResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetAppResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetAppResult.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(1, f, proto.proto.ProxF2PGetAppData.serializeBinaryToWriter);
  }
};

/**
 * optional ProxF2PGetAppData data = 1;
 * @return {?proto.proto.ProxF2PGetAppData}
 */
proto.proto.ProxF2PGetAppResult.prototype.getData = function () {
  return /** @type{?proto.proto.ProxF2PGetAppData} */ (jspb.Message.getWrapperField(this, proto.proto.ProxF2PGetAppData, 1));
};

/**
 * @param {?proto.proto.ProxF2PGetAppData|undefined} value
 * @return {!proto.proto.ProxF2PGetAppResult} returns this
 */
proto.proto.ProxF2PGetAppResult.prototype.setData = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetAppResult} returns this
 */
proto.proto.ProxF2PGetAppResult.prototype.clearData = function () {
  return this.setData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetAppResult.prototype.hasData = function () {
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
  proto.proto.ProxF2PGetAppResp.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.ProxF2PGetAppResp.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.ProxF2PGetAppResp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.ProxF2PGetAppResp.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        code: jspb.Message.getFieldWithDefault(msg, 1, 0),
        message: jspb.Message.getFieldWithDefault(msg, 2, ''),
        result: (f = msg.getResult()) && proto.proto.ProxF2PGetAppResult.toObject(includeInstance, f),
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
 * @return {!proto.proto.ProxF2PGetAppResp}
 */
proto.proto.ProxF2PGetAppResp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ProxF2PGetAppResp();
  return proto.proto.ProxF2PGetAppResp.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ProxF2PGetAppResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ProxF2PGetAppResp}
 */
proto.proto.ProxF2PGetAppResp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setCode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 3:
        var value = new proto.proto.ProxF2PGetAppResult();
        reader.readMessage(value, proto.proto.ProxF2PGetAppResult.deserializeBinaryFromReader);
        msg.setResult(value);
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
proto.proto.ProxF2PGetAppResp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.ProxF2PGetAppResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ProxF2PGetAppResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ProxF2PGetAppResp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(3, f, proto.proto.ProxF2PGetAppResult.serializeBinaryToWriter);
  }
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.proto.ProxF2PGetAppResp.prototype.getCode = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.proto.ProxF2PGetAppResp} returns this
 */
proto.proto.ProxF2PGetAppResp.prototype.setCode = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string message = 2;
 * @return {string}
 */
proto.proto.ProxF2PGetAppResp.prototype.getMessage = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.ProxF2PGetAppResp} returns this
 */
proto.proto.ProxF2PGetAppResp.prototype.setMessage = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional ProxF2PGetAppResult result = 3;
 * @return {?proto.proto.ProxF2PGetAppResult}
 */
proto.proto.ProxF2PGetAppResp.prototype.getResult = function () {
  return /** @type{?proto.proto.ProxF2PGetAppResult} */ (jspb.Message.getWrapperField(this, proto.proto.ProxF2PGetAppResult, 3));
};

/**
 * @param {?proto.proto.ProxF2PGetAppResult|undefined} value
 * @return {!proto.proto.ProxF2PGetAppResp} returns this
 */
proto.proto.ProxF2PGetAppResp.prototype.setResult = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ProxF2PGetAppResp} returns this
 */
proto.proto.ProxF2PGetAppResp.prototype.clearResult = function () {
  return this.setResult(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ProxF2PGetAppResp.prototype.hasResult = function () {
  return jspb.Message.getField(this, 3) != null;
};

// goog.object.extend(exports, proto.proto);
const exportedObject = {};
goog.object.extend(exportedObject, proto.proto);
module.exports = exportedObject;
