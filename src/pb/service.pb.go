// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.4
// source: service.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DeviceInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token      string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Expire     string `protobuf:"bytes,2,opt,name=expire,proto3" json:"expire,omitempty"`
	Timestamp  string `protobuf:"bytes,3,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	DeviceID   string `protobuf:"bytes,4,opt,name=deviceID,proto3" json:"deviceID,omitempty"`
	DeviceType int32  `protobuf:"varint,5,opt,name=deviceType,proto3" json:"deviceType,omitempty"`
	FoggieID   string `protobuf:"bytes,6,opt,name=foggieID,proto3" json:"foggieID,omitempty"`
	BucketName string `protobuf:"bytes,7,opt,name=bucketName,proto3" json:"bucketName,omitempty"`
	Domain     string `protobuf:"bytes,8,opt,name=domain,proto3" json:"domain,omitempty"`
	S3Domain   string `protobuf:"bytes,9,opt,name=s3domain,proto3" json:"s3domain,omitempty"`
	DeviceIP   string `protobuf:"bytes,10,opt,name=deviceIP,proto3" json:"deviceIP,omitempty"`
	SpaceID    uint64 `protobuf:"varint,11,opt,name=spaceID,proto3" json:"spaceID,omitempty"`
}

func (x *DeviceInfo) Reset() {
	*x = DeviceInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeviceInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeviceInfo) ProtoMessage() {}

func (x *DeviceInfo) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeviceInfo.ProtoReflect.Descriptor instead.
func (*DeviceInfo) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{0}
}

func (x *DeviceInfo) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *DeviceInfo) GetExpire() string {
	if x != nil {
		return x.Expire
	}
	return ""
}

func (x *DeviceInfo) GetTimestamp() string {
	if x != nil {
		return x.Timestamp
	}
	return ""
}

func (x *DeviceInfo) GetDeviceID() string {
	if x != nil {
		return x.DeviceID
	}
	return ""
}

func (x *DeviceInfo) GetDeviceType() int32 {
	if x != nil {
		return x.DeviceType
	}
	return 0
}

func (x *DeviceInfo) GetFoggieID() string {
	if x != nil {
		return x.FoggieID
	}
	return ""
}

func (x *DeviceInfo) GetBucketName() string {
	if x != nil {
		return x.BucketName
	}
	return ""
}

func (x *DeviceInfo) GetDomain() string {
	if x != nil {
		return x.Domain
	}
	return ""
}

func (x *DeviceInfo) GetS3Domain() string {
	if x != nil {
		return x.S3Domain
	}
	return ""
}

func (x *DeviceInfo) GetDeviceIP() string {
	if x != nil {
		return x.DeviceIP
	}
	return ""
}

func (x *DeviceInfo) GetSpaceID() uint64 {
	if x != nil {
		return x.SpaceID
	}
	return 0
}

type UserEffect struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CurrentWorkspace    *DeviceInfo   `protobuf:"bytes,1,opt,name=currentWorkspace,proto3" json:"currentWorkspace,omitempty"`
	CurrentMaxIOSpace   *DeviceInfo   `protobuf:"bytes,2,opt,name=currentMaxIOSpace,proto3" json:"currentMaxIOSpace,omitempty"`
	Spaces              []*DeviceInfo `protobuf:"bytes,3,rep,name=spaces,proto3" json:"spaces,omitempty"`
	MaxIOSpaces         []*DeviceInfo `protobuf:"bytes,4,rep,name=maxIOSpaces,proto3" json:"maxIOSpaces,omitempty"`
	Wallet              *Wallet       `protobuf:"bytes,5,opt,name=wallet,proto3" json:"wallet,omitempty"`
	CurrentWorkspaceID  uint64        `protobuf:"varint,6,opt,name=currentWorkspaceID,proto3" json:"currentWorkspaceID,omitempty"`
	CurrentMaxIOSpaceID uint64        `protobuf:"varint,7,opt,name=currentMaxIOSpaceID,proto3" json:"currentMaxIOSpaceID,omitempty"`
}

func (x *UserEffect) Reset() {
	*x = UserEffect{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserEffect) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserEffect) ProtoMessage() {}

func (x *UserEffect) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserEffect.ProtoReflect.Descriptor instead.
func (*UserEffect) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{1}
}

func (x *UserEffect) GetCurrentWorkspace() *DeviceInfo {
	if x != nil {
		return x.CurrentWorkspace
	}
	return nil
}

func (x *UserEffect) GetCurrentMaxIOSpace() *DeviceInfo {
	if x != nil {
		return x.CurrentMaxIOSpace
	}
	return nil
}

func (x *UserEffect) GetSpaces() []*DeviceInfo {
	if x != nil {
		return x.Spaces
	}
	return nil
}

func (x *UserEffect) GetMaxIOSpaces() []*DeviceInfo {
	if x != nil {
		return x.MaxIOSpaces
	}
	return nil
}

func (x *UserEffect) GetWallet() *Wallet {
	if x != nil {
		return x.Wallet
	}
	return nil
}

func (x *UserEffect) GetCurrentWorkspaceID() uint64 {
	if x != nil {
		return x.CurrentWorkspaceID
	}
	return 0
}

func (x *UserEffect) GetCurrentMaxIOSpaceID() uint64 {
	if x != nil {
		return x.CurrentMaxIOSpaceID
	}
	return 0
}

type EffectRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ID           string `protobuf:"bytes,1,opt,name=ID,proto3" json:"ID,omitempty"`
	ForceRefresh int32  `protobuf:"varint,2,opt,name=forceRefresh,proto3" json:"forceRefresh,omitempty"`
}

func (x *EffectRequest) Reset() {
	*x = EffectRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EffectRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EffectRequest) ProtoMessage() {}

func (x *EffectRequest) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EffectRequest.ProtoReflect.Descriptor instead.
func (*EffectRequest) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{2}
}

func (x *EffectRequest) GetID() string {
	if x != nil {
		return x.ID
	}
	return ""
}

func (x *EffectRequest) GetForceRefresh() int32 {
	if x != nil {
		return x.ForceRefresh
	}
	return 0
}

type Wallet struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Wallet       string `protobuf:"bytes,2,opt,name=wallet,proto3" json:"wallet,omitempty"`
	WalletType   string `protobuf:"bytes,3,opt,name=walletType,proto3" json:"walletType,omitempty"`
	WalletPubkey string `protobuf:"bytes,4,opt,name=walletPubkey,proto3" json:"walletPubkey,omitempty"`
}

func (x *Wallet) Reset() {
	*x = Wallet{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Wallet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Wallet) ProtoMessage() {}

func (x *Wallet) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Wallet.ProtoReflect.Descriptor instead.
func (*Wallet) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{3}
}

func (x *Wallet) GetWallet() string {
	if x != nil {
		return x.Wallet
	}
	return ""
}

func (x *Wallet) GetWalletType() string {
	if x != nil {
		return x.WalletType
	}
	return ""
}

func (x *Wallet) GetWalletPubkey() string {
	if x != nil {
		return x.WalletPubkey
	}
	return ""
}

type BindRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ID     string  `protobuf:"bytes,1,opt,name=ID,proto3" json:"ID,omitempty"`
	Wallet *Wallet `protobuf:"bytes,2,opt,name=wallet,proto3" json:"wallet,omitempty"`
}

func (x *BindRequest) Reset() {
	*x = BindRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BindRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BindRequest) ProtoMessage() {}

func (x *BindRequest) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BindRequest.ProtoReflect.Descriptor instead.
func (*BindRequest) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{4}
}

func (x *BindRequest) GetID() string {
	if x != nil {
		return x.ID
	}
	return ""
}

func (x *BindRequest) GetWallet() *Wallet {
	if x != nil {
		return x.Wallet
	}
	return nil
}

type CommonResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status string `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CommonResponse) Reset() {
	*x = CommonResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CommonResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CommonResponse) ProtoMessage() {}

func (x *CommonResponse) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CommonResponse.ProtoReflect.Descriptor instead.
func (*CommonResponse) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{5}
}

func (x *CommonResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type SetMasterSpace struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ID         string `protobuf:"bytes,1,opt,name=ID,proto3" json:"ID,omitempty"`
	DeviceID   string `protobuf:"bytes,4,opt,name=deviceID,proto3" json:"deviceID,omitempty"`
	DeviceType int32  `protobuf:"varint,5,opt,name=deviceType,proto3" json:"deviceType,omitempty"`
	SpaceID    uint64 `protobuf:"varint,6,opt,name=spaceID,proto3" json:"spaceID,omitempty"`
}

func (x *SetMasterSpace) Reset() {
	*x = SetMasterSpace{}
	if protoimpl.UnsafeEnabled {
		mi := &file_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SetMasterSpace) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetMasterSpace) ProtoMessage() {}

func (x *SetMasterSpace) ProtoReflect() protoreflect.Message {
	mi := &file_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetMasterSpace.ProtoReflect.Descriptor instead.
func (*SetMasterSpace) Descriptor() ([]byte, []int) {
	return file_service_proto_rawDescGZIP(), []int{6}
}

func (x *SetMasterSpace) GetID() string {
	if x != nil {
		return x.ID
	}
	return ""
}

func (x *SetMasterSpace) GetDeviceID() string {
	if x != nil {
		return x.DeviceID
	}
	return ""
}

func (x *SetMasterSpace) GetDeviceType() int32 {
	if x != nil {
		return x.DeviceType
	}
	return 0
}

func (x *SetMasterSpace) GetSpaceID() uint64 {
	if x != nil {
		return x.SpaceID
	}
	return 0
}

var File_service_proto protoreflect.FileDescriptor

var file_service_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x03, 0x62, 0x6f, 0x74, 0x22, 0xba, 0x02, 0x0a, 0x0a, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x78, 0x70,
	0x69, 0x72, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x65, 0x78, 0x70, 0x69, 0x72,
	0x65, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12,
	0x1a, 0x0a, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x44, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x44, 0x12, 0x1e, 0x0a, 0x0a, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x0a, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x66,
	0x6f, 0x67, 0x67, 0x69, 0x65, 0x49, 0x44, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66,
	0x6f, 0x67, 0x67, 0x69, 0x65, 0x49, 0x44, 0x12, 0x1e, 0x0a, 0x0a, 0x62, 0x75, 0x63, 0x6b, 0x65,
	0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x62, 0x75, 0x63,
	0x6b, 0x65, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69,
	0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12,
	0x1a, 0x0a, 0x08, 0x73, 0x33, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x73, 0x33, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x50, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x50, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x70, 0x61, 0x63, 0x65,
	0x49, 0x44, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x73, 0x70, 0x61, 0x63, 0x65, 0x49,
	0x44, 0x22, 0xeb, 0x02, 0x0a, 0x0a, 0x55, 0x73, 0x65, 0x72, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74,
	0x12, 0x3b, 0x0a, 0x10, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x57, 0x6f, 0x72, 0x6b, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x62, 0x6f, 0x74,
	0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x10, 0x63, 0x75, 0x72,
	0x72, 0x65, 0x6e, 0x74, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x3d, 0x0a,
	0x11, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x4d, 0x61, 0x78, 0x49, 0x4f, 0x53, 0x70, 0x61,
	0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x44,
	0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x11, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x74, 0x4d, 0x61, 0x78, 0x49, 0x4f, 0x53, 0x70, 0x61, 0x63, 0x65, 0x12, 0x27, 0x0a, 0x06,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x62,
	0x6f, 0x74, 0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x73, 0x12, 0x31, 0x0a, 0x0b, 0x6d, 0x61, 0x78, 0x49, 0x4f, 0x53, 0x70,
	0x61, 0x63, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x62, 0x6f, 0x74,
	0x2e, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0b, 0x6d, 0x61, 0x78,
	0x49, 0x4f, 0x53, 0x70, 0x61, 0x63, 0x65, 0x73, 0x12, 0x23, 0x0a, 0x06, 0x77, 0x61, 0x6c, 0x6c,
	0x65, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x57,
	0x61, 0x6c, 0x6c, 0x65, 0x74, 0x52, 0x06, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x12, 0x2e, 0x0a,
	0x12, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63,
	0x65, 0x49, 0x44, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52, 0x12, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x74, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x49, 0x44, 0x12, 0x30, 0x0a,
	0x13, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x4d, 0x61, 0x78, 0x49, 0x4f, 0x53, 0x70, 0x61,
	0x63, 0x65, 0x49, 0x44, 0x18, 0x07, 0x20, 0x01, 0x28, 0x04, 0x52, 0x13, 0x63, 0x75, 0x72, 0x72,
	0x65, 0x6e, 0x74, 0x4d, 0x61, 0x78, 0x49, 0x4f, 0x53, 0x70, 0x61, 0x63, 0x65, 0x49, 0x44, 0x22,
	0x43, 0x0a, 0x0d, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x0e, 0x0a, 0x02, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x44,
	0x12, 0x22, 0x0a, 0x0c, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x52, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x22, 0x64, 0x0a, 0x06, 0x57, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x12, 0x16,
	0x0a, 0x06, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x12, 0x1e, 0x0a, 0x0a, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74,
	0x54, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x77, 0x61, 0x6c, 0x6c,
	0x65, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x22, 0x0a, 0x0c, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74,
	0x50, 0x75, 0x62, 0x6b, 0x65, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x77, 0x61,
	0x6c, 0x6c, 0x65, 0x74, 0x50, 0x75, 0x62, 0x6b, 0x65, 0x79, 0x22, 0x42, 0x0a, 0x0b, 0x42, 0x69,
	0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x49, 0x44, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x44, 0x12, 0x23, 0x0a, 0x06, 0x77, 0x61, 0x6c,
	0x6c, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x62, 0x6f, 0x74, 0x2e,
	0x57, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x52, 0x06, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x22, 0x28,
	0x0a, 0x0e, 0x43, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x76, 0x0a, 0x0e, 0x53, 0x65, 0x74, 0x4d,
	0x61, 0x73, 0x74, 0x65, 0x72, 0x53, 0x70, 0x61, 0x63, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x49, 0x44,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x44, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x49, 0x44, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x65,
	0x76, 0x69, 0x63, 0x65, 0x49, 0x44, 0x12, 0x1e, 0x0a, 0x0a, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x64, 0x65, 0x76, 0x69,
	0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x70, 0x61, 0x63, 0x65, 0x49,
	0x44, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x73, 0x70, 0x61, 0x63, 0x65, 0x49, 0x44,
	0x32, 0xb7, 0x01, 0x0a, 0x07, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x36, 0x0a, 0x0d,
	0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74, 0x12, 0x12, 0x2e,
	0x62, 0x6f, 0x74, 0x2e, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x0f, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x45, 0x66, 0x66, 0x65,
	0x63, 0x74, 0x22, 0x00, 0x12, 0x35, 0x0a, 0x0a, 0x42, 0x69, 0x6e, 0x64, 0x57, 0x61, 0x6c, 0x6c,
	0x65, 0x74, 0x12, 0x10, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x42, 0x69, 0x6e, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x3d, 0x0a, 0x0f, 0x53,
	0x65, 0x74, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x53, 0x70, 0x61, 0x63, 0x65, 0x12, 0x13,
	0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x53, 0x65, 0x74, 0x4d, 0x61, 0x73, 0x74, 0x65, 0x72, 0x53, 0x70,
	0x61, 0x63, 0x65, 0x1a, 0x13, 0x2e, 0x62, 0x6f, 0x74, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x1a, 0x5a, 0x18, 0x62, 0x63,
	0x74, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x72, 0x69, 0x76, 0x65, 0x5f, 0x62, 0x6f, 0x74, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_service_proto_rawDescOnce sync.Once
	file_service_proto_rawDescData = file_service_proto_rawDesc
)

func file_service_proto_rawDescGZIP() []byte {
	file_service_proto_rawDescOnce.Do(func() {
		file_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_service_proto_rawDescData)
	})
	return file_service_proto_rawDescData
}

var file_service_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_service_proto_goTypes = []interface{}{
	(*DeviceInfo)(nil),     // 0: bot.DeviceInfo
	(*UserEffect)(nil),     // 1: bot.UserEffect
	(*EffectRequest)(nil),  // 2: bot.EffectRequest
	(*Wallet)(nil),         // 3: bot.Wallet
	(*BindRequest)(nil),    // 4: bot.BindRequest
	(*CommonResponse)(nil), // 5: bot.CommonResponse
	(*SetMasterSpace)(nil), // 6: bot.SetMasterSpace
}
var file_service_proto_depIdxs = []int32{
	0, // 0: bot.UserEffect.currentWorkspace:type_name -> bot.DeviceInfo
	0, // 1: bot.UserEffect.currentMaxIOSpace:type_name -> bot.DeviceInfo
	0, // 2: bot.UserEffect.spaces:type_name -> bot.DeviceInfo
	0, // 3: bot.UserEffect.maxIOSpaces:type_name -> bot.DeviceInfo
	3, // 4: bot.UserEffect.wallet:type_name -> bot.Wallet
	3, // 5: bot.BindRequest.wallet:type_name -> bot.Wallet
	2, // 6: bot.Service.GetUserEffect:input_type -> bot.EffectRequest
	4, // 7: bot.Service.BindWallet:input_type -> bot.BindRequest
	6, // 8: bot.Service.SetCurrentSpace:input_type -> bot.SetMasterSpace
	1, // 9: bot.Service.GetUserEffect:output_type -> bot.UserEffect
	5, // 10: bot.Service.BindWallet:output_type -> bot.CommonResponse
	5, // 11: bot.Service.SetCurrentSpace:output_type -> bot.CommonResponse
	9, // [9:12] is the sub-list for method output_type
	6, // [6:9] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_service_proto_init() }
func file_service_proto_init() {
	if File_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeviceInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserEffect); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EffectRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Wallet); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BindRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CommonResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SetMasterSpace); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_service_proto_goTypes,
		DependencyIndexes: file_service_proto_depIdxs,
		MessageInfos:      file_service_proto_msgTypes,
	}.Build()
	File_service_proto = out.File
	file_service_proto_rawDesc = nil
	file_service_proto_goTypes = nil
	file_service_proto_depIdxs = nil
}
