// package: bot
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Service = (function () {
  function Service() {}
  Service.serviceName = "bot.Service";
  return Service;
}());

Service.GetUserEffect = {
  methodName: "GetUserEffect",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.EffectRequest,
  responseType: service_pb.UserEffect
};

Service.BindWallet = {
  methodName: "BindWallet",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.BindRequest,
  responseType: service_pb.CommonResponse
};

Service.SetCurrentSpace = {
  methodName: "SetCurrentSpace",
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.SetMasterSpace,
  responseType: service_pb.CommonResponse
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.getUserEffect = function getUserEffect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.GetUserEffect, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServiceClient.prototype.bindWallet = function bindWallet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.BindWallet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ServiceClient.prototype.setCurrentSpace = function setCurrentSpace(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Service.SetCurrentSpace, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ServiceClient = ServiceClient;

