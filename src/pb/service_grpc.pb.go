// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	GetUserEffect(ctx context.Context, in *EffectRequest, opts ...grpc.CallOption) (*UserEffect, error)
	BindWallet(ctx context.Context, in *BindRequest, opts ...grpc.CallOption) (*CommonResponse, error)
	SetCurrentSpace(ctx context.Context, in *SetMasterSpace, opts ...grpc.CallOption) (*CommonResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) GetUserEffect(ctx context.Context, in *EffectRequest, opts ...grpc.CallOption) (*UserEffect, error) {
	out := new(UserEffect)
	err := c.cc.Invoke(ctx, "/bot.Service/GetUserEffect", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) BindWallet(ctx context.Context, in *BindRequest, opts ...grpc.CallOption) (*CommonResponse, error) {
	out := new(CommonResponse)
	err := c.cc.Invoke(ctx, "/bot.Service/BindWallet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) SetCurrentSpace(ctx context.Context, in *SetMasterSpace, opts ...grpc.CallOption) (*CommonResponse, error) {
	out := new(CommonResponse)
	err := c.cc.Invoke(ctx, "/bot.Service/SetCurrentSpace", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	GetUserEffect(context.Context, *EffectRequest) (*UserEffect, error)
	BindWallet(context.Context, *BindRequest) (*CommonResponse, error)
	SetCurrentSpace(context.Context, *SetMasterSpace) (*CommonResponse, error)
	//mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) GetUserEffect(context.Context, *EffectRequest) (*UserEffect, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserEffect not implemented")
}
func (UnimplementedServiceServer) BindWallet(context.Context, *BindRequest) (*CommonResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BindWallet not implemented")
}
func (UnimplementedServiceServer) SetCurrentSpace(context.Context, *SetMasterSpace) (*CommonResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetCurrentSpace not implemented")
}
func (UnimplementedServiceServer) mustEmbedUnimplementedServiceServer() {}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_GetUserEffect_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EffectRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetUserEffect(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bot.Service/GetUserEffect",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetUserEffect(ctx, req.(*EffectRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_BindWallet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BindRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).BindWallet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bot.Service/BindWallet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).BindWallet(ctx, req.(*BindRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_SetCurrentSpace_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetMasterSpace)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).SetCurrentSpace(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bot.Service/SetCurrentSpace",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).SetCurrentSpace(ctx, req.(*SetMasterSpace))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "bot.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetUserEffect",
			Handler:    _Service_GetUserEffect_Handler,
		},
		{
			MethodName: "BindWallet",
			Handler:    _Service_BindWallet_Handler,
		},
		{
			MethodName: "SetCurrentSpace",
			Handler:    _Service_SetCurrentSpace_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.proto",
}
