import useVariable from './useVariable';
import { ref, toRefs, nextTick, computed } from 'vue';
import { showToast } from '@nutui/nutui';
// import * as Prox from '@/pb/prox_pb.js';
// import * as grpcService from '@/pb/prox_grpc_web_pb.js';

import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';
import '@nutui/nutui/dist/packages/toast/style';
import { s3Url, poolUrl, maxUrl } from '@/setting.js';
import moment from 'moment';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
const header = computed(() => {});
export default function useDelete(tableLoading, refresh, orderInfo) {
  const deleteItem = (item) => {
    tableLoading.value = true;
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    let token = MaxTokenMap.value[orderInfo.value.device_id];
    token = token && token.split(' ')[1];
    let header = new Prox.default.Header();
    header.setPeerid(orderInfo.value.peer_id);
    header.setId(orderInfo.value.foggie_id);
    header.setToken(token);
    header.setApptype(appType);

    let cids = [];
    let prefixes = [];
    let objects = '';
    let ProxDeleteObjectRequest = new Prox.default.DeleteObjectRequest();
    let ProxUploads = [];
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': orderInfo.value.peer_id,
    };
    console.log('useDeleteuseDelete', item, 'item');
    for (let i = 0; i < item.length; i++) {
      if (item[i].type == 'application/x-directory') {
        prefixes.push(item[i].key + '');
      } else {
        const ProxUpload = new Prox.default.Upload();
        objects = encodeURIComponent(item[i].key + '');
        ProxUpload.setKey(objects);
        ProxUploads.push(ProxUpload);
      }
    }

    ProxDeleteObjectRequest.setObjectsList(ProxUploads);
    ProxDeleteObjectRequest.setObjectType('normal');
    ProxDeleteObjectRequest.setPrefixesList(prefixes);
    let ProxDeleteObjectReq = new Prox.default.DeleteObjectReq();
    ProxDeleteObjectReq.setHeader(header);
    ProxDeleteObjectReq.setRequest(ProxDeleteObjectRequest);

    let server = new grpcService.default.APIClient(maxUrl, null, null);
    console.log('ProxDeleteObjectReq', ProxDeleteObjectReq);
    server.deleteObject(ProxDeleteObjectReq, metadata.value, (err, res) => {
      if (res) {
        console.log(res, 'Delete succeeded');
        showToast.success('Delete succeeded');
        tableLoading.value = false;
        nextTick(() => {
          refresh();
        });
      } else {
        console.log('---deleteObject---Delete Failed-', err);
        tableLoading.value = false;
        showToast.fail('Delete Failed');
      }
    });
  };
  return {
    deleteItem,
  };
}
