// import { useOrderStore } from '@/store/modules/order';

// import * as pb from '@/pb/prox_grpc_web_pb';
// import * as grpc from '@/pb/prox_pb';

import { s3Url, poolUrl, maxUrl } from '@/setting.js';

import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';

import { get_vood_token } from '@/api/index';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();

export default function getList(deviceData) {
    const myPoolList = ref([] as any);
    const myIotList = ref([] as any);
    const getMyList = async (deviceData) => {
        let token = await get_vood_token({ vood_id: deviceData.device_id });
        userStore.setMaxTokenMap({
            id: deviceData.device_id,
            token: token.data.token_type + " " + token.data.access_token,
        });
        let _token = token.data.token_type + " " + token.data.access_token;

        let server = new grpcService.default.ServiceClient(maxUrl, null, null);
        let header = new Prox.default.ProxHeader();
        let request = new Prox.default.ProxF2PGetMiner();

        header.setPeerid(deviceData.peer_id);
        header.setId(deviceData.foggie_id);
        header.setToken(_token);

        const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
        header.setApptype(appType);
        request.setHeader(header);

        let metadata = {
            'X-Custom-Date': '20240423T094100Z'
        };
        console.log(header, 'header...', request, metadata);

        server.f2PGetMinerInfo(request, metadata, (err: any, res: { array: any }) => {
            if (err) {
                console.log('err------generateCred:', err);
            }
            console.log(res, '888')
        });
    };
    return {
        getMyList,
        myPoolList,
        myIotList,
    };
}
