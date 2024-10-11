// import { useOrderStore } from '@/store/modules/order';

import { maxUrl } from '@/setting.js';
import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';

import { get_vood_token, searchDeviceEarningsAPI } from '@/api/index';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
import moment from 'moment';
import { getfilesize, getScheduledRewards } from "@/utils/util";

export default function getList(deviceData) {
    const CurrentToken = ref('' as any);
    const myPoolList = ref([] as any);
    const myIotList = ref([] as any);
    const myIotNumber = ref(0);
    const mySpaceInfo = ref({} as any);
    const MinerReward = ref('');
    const IOTReward = ref('');
    const rewardList = ref([] as any);
    const spaceData = ref([]);
    const spaceTotal = ref(0);
    const filReward = ref(0 as any);
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
        // {
        //     type: "Other",
        //     number: "",
        //     capacity: "",
        //     name: "Other",
        //     total: 0,
        // },
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
        { name: 'IoT', number: '0', type: 'iot', count: 0, iotNumber: 0 },
        { name: 'Filstation', number: 0, type: 'ipfs', count: 0 },
    ];
    const initToken = async (deviceData) => {
        let token = '';
        // console.log(MaxTokenMap.value, 'getlist-initTokeninitToken--MaxTokenMap.value');
        CurrentToken.value = '';
        if (deviceData.deploy_svc_gateway_state !== 'finish') {
            return;
        }
        if (MaxTokenMap.value && MaxTokenMap.value[deviceData.device_id]) {
            token = MaxTokenMap.value[deviceData.device_id];
            token = token.split(' ')[1];
            CurrentToken.value = token;
        } else {
            token = await get_vood_token({ vood_id: deviceData.device_id });
            if (token) {
                userStore.setMaxTokenMap({
                    id: deviceData.device_id,
                    token: token.data.token_type + ' ' + token.data.access_token,
                });
            }
            CurrentToken.value = token.data.access_token;
            // console.log(' CurrentToken.value', CurrentToken.value);
        }
    };
    const getMyList = async (deviceData) => {
        rewardList.value = [
            { name: 'Minning', number: '0', type: 'pool', count: 0 },
            { name: 'IoT', number: '0', type: 'iot', count: 0, iotNumber: 0 },
            { name: 'Filstation', number: 0, type: 'ipfs', count: 0 },
        ];
        spaceData.value = [];
        myPoolList.value = [];
        myIotList.value = [];
        MinerReward.value = '';
        IOTReward.value = '';
        fileListArr.value = [
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
            // {
            //     type: "Other",
            //     number: "",
            //     capacity: "",
            //     name: "Other",
            //     total: 0,
            // },
        ];
        if (!deviceData.device_id) {
            return;
        }
        if (deviceData.deploy_svc_gateway_state !== 'finish') {
            return;
        }
        filReward.value = 0;
        rewardList.value = [
            { name: 'Minning', number: '0', type: 'pool', count: 0 },
            { name: 'IoT', number: '0', type: 'iot', count: 0, iotNumber: 0 },
            { name: 'Filstation', number: 0, type: 'ipfs', count: 0 },
        ];
        currentDeviceData.value = deviceData;

        let token = '';
        let _token = CurrentToken.value;
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.F2PGetMiner();
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
                    { name: 'IoT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filstation', number: '0.0000', type: 'ipfs', count: filReward.value },
                ];

            }
            window.localStorage.setItem("myPoolList", JSON.stringify(myPoolList.value));
            window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));

        });
        initFilStation(deviceData, _token, appType.value, metadata);
        initIotList(deviceData, _token, appType.value, metadata);
        getTotalReward(deviceData);
        getFileStatistics(deviceData, _token, appType.value, metadata);
        initSpaceInfo(deviceData, _token, appType.value, metadata);
    };
    const initFilStation = async (deviceData, _token, appType, metadata) => {
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.F2PGetApp();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        request.setName('filecoin_station');
        server.f2PGetAppInfo(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log('f2PGetAppInfo--err------:', err);
            }
            if (res) {
                let resArr = res.array && res.array.length && res.array[2];
                if (resArr.length > 0) {
                    let add = resArr[0][8];
                    let address = add && JSON.parse(add) && JSON.parse(add).fil_wallet_address;
                    // console.log(res, 'ressss', add, address);
                    address && getScheduledRewards(address).then((res) => {
                        let value = res.rewards && Number(res.rewards) / 1e18;
                        // console.log('getScheduledRewards----eee', res, value);
                        filReward.value = Number(value).toFixed(4);
                        rewardList.value = [
                            { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                            { name: 'IoT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                            { name: 'Filstation', number: filReward.value, type: 'ipfs', count: 0 },
                        ];
                        window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));
                    });
                }
                // window.localStorage.setItem("myIotList", JSON.stringify(myIotList.value));
            }

        });
    };
    const initIotList = async (deviceData, _token, appType, metadata) => {
        myIotNumber.value = 0;
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.F2PGetIOT();
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
                    { name: 'IoT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filstation', number: filReward.value, type: 'ipfs', count: 0 },
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
        let request = new Prox.default.F2PGetSpace();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        spaceData.value = [];
        spaceTotal.value = 0;
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
                    let _item = {
                        name: key.charAt(0).toUpperCase() + key.slice(1)
                        , value: mySpaceInfo.value[key]
                    }
                    // if (key !== 'total') {
                    //     spaceData.value.push(_item);
                    // }
                    if (key === 'total') {
                        spaceTotal.value = _item.value;
                    }
                    spaceData.value.push(_item);
                }
                // console.log(spaceData.value, 'spaceDataspaceData');
                window.localStorage.setItem("spaceData", JSON.stringify(spaceData.value));
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
                MinerReward.value = res.result.counts && Number(res.result.counts).toFixed(4);
                window.localStorage.setItem("MinerReward", MinerReward.value);
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IoT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filstation', number: filReward.value, type: 'ipfs', count: 0 },
                ];
            }
            // console.log(res, 'pool111', MinerReward.value);
        });

        searchDeviceEarningsAPI(params2).then((res) => {
            // console.log(res, 'iot222');
            if (res && res.result) {
                IOTReward.value = res.result.counts && Number(res.result.counts).toFixed(4);
                rewardList.value = [
                    { name: 'Minning', number: MinerReward.value, type: 'pool', count: myPoolList.value.length },
                    { name: 'IoT', number: IOTReward.value, type: 'iot', count: myIotList.value.length, iotNumber: myIotNumber.value },
                    { name: 'Filstation', number: filReward.value, type: 'ipfs', count: 0 },
                ];
                window.localStorage.setItem("IOTReward", JSON.stringify(IOTReward.value));
                window.localStorage.setItem("rewardList", JSON.stringify(rewardList.value));
            }
        });
    };
    const getFileStatistics = async (deviceData, _token, appType, metadata) => {
        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.Header();
        let request = new Prox.default.RequestStatistics();
        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);
        header.setApptype(appType);
        request.setHeader(header);
        let total = 0;
        let size = 0;
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
                    if (index > 0 && index < 5) {
                        fileListArr.value[index - 1].number = item.getCount();
                        fileListArr.value[index - 1].capacity = getfilesize(item.getTotal(),);
                        fileListArr.value[index - 1].total = item.getTotal();
                        total = total + Number(fileListArr.value[index - 1].number);
                        size = size + item.getTotal();
                    }
                });
                let _sat = {
                    total,
                    size
                }
                window.localStorage.setItem("fileListArr", JSON.stringify(fileListArr.value));
                window.localStorage.setItem("fileListSat", JSON.stringify(_sat));
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
        header,
        CurrentToken,
        initToken,
        spaceTotal
    }
}