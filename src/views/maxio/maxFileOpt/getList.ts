// import { useOrderStore } from '@/store/modules/order';

// import * as pb from '@/pb/prox_grpc_web_pb';
// import * as grpc from '@/pb/prox_pb';

import { s3Url, poolUrl, maxUrl } from '@/setting.js';

// import * as Prox from '@/pb/prox_pb.js';
// import * as grpcService from '@/pb/net_grpc_web_pb.js';

import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';

import { get_vood_token, searchDeviceEarningsAPI } from '@/api/index';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
import moment from 'moment';
import { getfilesize } from "@/utils/util";

export default function getList(deviceData) {
    const myPoolList = ref([] as any);
    const myIotList = ref([] as any);
    const myIotNumber = ref(0);
    const mySpaceInfo = ref({} as any);
    const MinerReward = ref('');
    const IOTReward = ref('');
    const rewardList = ref([] as any);
    const spaceData = ref([]);
    const fileListArr = ref([
        {
            type: "Photos",
            number: "",
            capacity: "",
            name: "Images",
            total: 0,
        },
        {
            type: "Videos",
            number: "",
            capacity: "",
            name: "Videos",
            total: 0,
        },
        {
            type: "Audio",
            number: "",
            capacity: "",
            name: "Audio",
            total: 0,
        },
        {
            type: "Documents",
            number: "",
            capacity: "",
            name: "Documents",
            total: 0,
        },
        {
            type: "Other",
            number: "",
            capacity: "",
            name: "Other",
            total: 0,
        },
    ]);
    let allCount = ref(0);
    let allSize = ref("");
    let currentDeviceData = ref({});
    let deviceToken = ref('');
    const appType = ref('');
    const header = computed(() => {
        let headerProx2 = new Prox.default.Header();
        headerProx2.setPeerid(currentDeviceData.value.peer_id);
        headerProx2.setId(currentDeviceData.value.foggie_id);
        headerProx2.setToken(deviceToken.value);
        headerProx2.setApptype(appType.value);
        return headerProx2;
    });
    rewardList.value = [
        { name: 'Minning', number: '0', type: 'pool', count: 0 },
        { name: 'IOT', number: '0', type: 'iot', count: 0, iotNumber: 0 },
        { name: 'Filecoin Station', number: '0', type: 'ipfs', count: 0 },
    ];
    const getMyList = async (deviceData) => {
        if (!deviceData.device_id) {
            return;
        }
        currentDeviceData.value = deviceData;
        let token = await get_vood_token({ vood_id: deviceData.device_id });
        userStore.setMaxTokenMap({
            id: deviceData.device_id,
            token: token.data.token_type + " " + token.data.access_token,
        });
        let _token = token.data.access_token;
        deviceToken.value = _token;

        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.ProxF2PGetMiner();
        // console.log(server, header, 'getMyListgetMyList');
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);

        appType.value = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
        header.setApptype(appType.value);
        request.setHeader(header);
        let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
        let metadata = {
            'X-Custom-Date': date + 'Z',
            'X-Sid': deviceData.peer_id,
        };
        // console.log(header, 'header...', request, metadata);
        server.f2PGetMinerInfo(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log('f2PGetMinerInfoerr------:', err);
            }
            // console.log(res, '888')
            // console.log(res.toObject().result.dataList);
            if (res) {
                myPoolList.value = res.toObject().result.dataList;
                // console.log(myPoolList.value, 'myPoolList')
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IOT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filecoin Station', number: '0.0000', type: 'ipfs', count: 0 },
                ];

            }
            window.localStorage.setItem("myPoolList", JSON.stringify(myPoolList.value));
            window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));

        });
        initIotList(deviceData, _token, appType.value, metadata);
        getTotalReward(deviceData);
        getFileStatistics(deviceData, _token, appType.value, metadata);
        initSpaceInfo(deviceData, _token, appType.value, metadata);
    };
    const initIotList = async (deviceData, _token, appType, metadata) => {
        myIotNumber.value = 0;
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.ProxF2PGetIOT();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        server.f2PGetIOTList(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log('f2PGetIOTList--err------:', err);
            }
            // console.log(res, 'f2PGetIOTList', res.toObject());
            if (res) {
                myIotList.value = res.toObject().dataList;
                for (var i = 0; i < myIotList.value.length; i++) {
                    if (myIotList.value[i].listList.length > 0) {
                        myIotNumber.value = myIotNumber.value + 1;
                    }
                }
                // console.log(myIotList.value, 'myIotList')
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IOT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filecoin Station', number: '0.0000', type: 'ipfs', count: 0 },
                ];
                window.localStorage.setItem("myIotList", JSON.stringify(myIotList.value));
                window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));
            }

        });
        // server.f2PGetIOTAmount(request, metadata, (err: any, res: { array: any }) => {
        //     if (err) {
        //         console.log('F2PGetIOTAmounterr------:', err);
        //     }
        //     console.log(res, 'F2PGetIOTAmounterr', res.getData());

        // });

    };
    const initSpaceInfo = async (deviceData, _token, appType, metadata) => {
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.ProxF2PGetSpace();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        spaceData.value = [];
        // console.log(request, '----request---', header);
        server.f2PGetSpaceInfo(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log('f2PGetSpaceInfo--err------:', err);
            }
            // console.log(res, 'f2PGetSpaceInfo', res.toObject());
            if (res) {
                mySpaceInfo.value = res.toObject().result;
                // console.log(mySpaceInfo.value, 'mySpaceInfo')
                for (var key in mySpaceInfo.value) {
                    let _item = { name: key, value: mySpaceInfo.value[key] }
                    spaceData.value.push(_item);
                }
                window.localStorage.setItem("spaceData", JSON.stringify(spaceData.value));
                // console.log(spaceData.value, ' spaceData.value')
            }

        });
        // server.f2PGetIOTAmount(request, metadata, (err: any, res: { array: any }) => {
        //     if (err) {
        //         console.log('F2PGetIOTAmounterr------:', err);
        //     }
        //     console.log(res, 'F2PGetIOTAmounterr', res.getData());

        // });

    };
    const getTotalReward = async (deviceData) => {
        let params1 = {
            device_id: deviceData.device_id,
            asset_type: "miner_pool",
            start_time: "",
            end_time: "",
            cycle: "",
            bucket: "",
            iot_device_id: "",
            total: true,
        };

        let params2 = {
            device_id: deviceData.device_id,
            asset_type: "iot",
            start_time: "",
            end_time: "",
            cycle: "",
            bucket: "",
            iot_device_id: "",
            total: true,
        };

        searchDeviceEarningsAPI(params1).then((res) => {
            if (res && res.result) {
                MinerReward.value = res.result.counts;
                window.localStorage.setItem("MinerReward", MinerReward.value);
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IOT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filecoin Station', number: '0.0000', type: 'ipfs', count: 0 },
                ];
            }
            // console.log(res, 'pool111', MinerReward.value);
        });

        searchDeviceEarningsAPI(params2).then((res) => {
            // console.log(res, 'iot222');
            if (res && res.result) {
                IOTReward.value = res.result.counts;
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IOT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filecoin Station', number: '0.0000', type: 'ipfs', count: 0 },
                ];
                window.localStorage.setItem("IOTReward", JSON.stringify(IOTReward.value));
                window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));
            }
        });
    };
    const getFileStatistics = async (deviceData, _token, appType, metadata) => {
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.ProxRequestStatistics();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        // console.log(server.statistics, 'server.statistics', header);
        server.statistics(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log("err-statistics------:", err);
            } else {
                fileListArr.value = fileListArr.value.map((item: any) => {
                    return {
                        ...item,
                        number: 0,
                        capacity: 0,
                    };
                });
                allCount.value = res.getCategorysum().getCount();
                allSize.value = getfilesize(res.getCategorysum().getTotal());
                res.getCategoriesList().map((item: any) => {
                    let index = item.getCategory();
                    if (index > 0) {
                        fileListArr.value[index - 1].number = item.getCount();
                        fileListArr.value[index - 1].capacity = getfilesize(item.getTotal(),);
                        fileListArr.value[index - 1].total = item.getTotal();
                    }
                });
                window.localStorage.setItem("fileListArr", JSON.stringify(fileListArr.value));
                // console.log(fileListArr.value, 'fileListArr');
            }
        });
    };
    return {
        getMyList,
        getTotalReward,
        myPoolList,
        myIotList,
        MinerReward,
        IOTReward,
        rewardList,
        mySpaceInfo,
        spaceData,
        fileListArr,
        header
    }
}