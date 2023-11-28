import useVariable from './useVariable';
import { ref, toRefs, nextTick, computed } from 'vue';
import { showToast } from '@nutui/nutui';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import '@nutui/nutui/dist/packages/toast/style';
import useOrderInfo from './useOrderInfo.js';
import { poolUrl } from '@/setting.js';

// import { isCloudCanUpload_Api } from '@/api/upload';
const { bucketName, metadata } = useOrderInfo();
export default function useDelete(tableLoading, refresh, orderInfo, header) {
  const deleteItem = (item) => {
    tableLoading.value = true;
    let cids = [];
    let prefixes = [];
    let objects = [];
    for (let i = 0; i < item.length; i++) {
      if (item[i].type == 'application/x-directory') {
        prefixes.push(item[i].key + '');
      } else {
        objects.push({
          pubkey: item[i].pubkey ? item[i].pubkey + '' : encodeURIComponent(item[i].key + ''),
        });
        cids.push(item[i].cid + '');
      }
    }
    let ProxDeleteObjectRequest = new Prox.default.ProxDeleteObjectRequest();
    ProxDeleteObjectRequest.setCidsList(cids);
    let ProxUpload = new Prox.default.ProxUpload();
    ProxUpload.setKey(objects);
    ProxDeleteObjectRequest.setObjectsList(ProxUpload);
    ProxDeleteObjectRequest.setObjectType('normal');
    ProxDeleteObjectRequest.setPrefixesList(prefixes);
    let ProxDeleteObjectReq = new Prox.default.ProxDeleteObjectReq();
    ProxDeleteObjectReq.setHeader(header);
    ProxDeleteObjectReq.setRequest(ProxDeleteObjectRequest);
    // let ip = orderInfo.value.rpc.split(':')[0];
    // let server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    let server = new grpcService.default.ServiceClient(ip, null, null);

    server.deleteObject(ProxDeleteObjectReq, metadata.value, (err, res) => {
      if (res) {
        showToast.success('Delete succeeded');
        tableLoading.value = false;
        // let arr = [];
        // if (store.getters.uploadFileList && deviceData.device_id) {
        //   arr = store.getters.uploadFileList[deviceData.device_id];
        //   if (arr && arr.length > 0) {
        //     store.getters.uploadFileList[deviceData.device_id] = arr.filter((val) => {
        //       return val.urlFileName !== item.key;
        //     });
        //   }
        // }
        nextTick(() => {
          refresh();
        });
      } else {
        tableLoading.value = false;
        showToast.fail('Delete Failed');
      }
    });
  };
  return {
    deleteItem,
  };
}
