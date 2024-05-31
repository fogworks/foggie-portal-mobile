import useVariable from './useVariable';
import { ref, toRefs, nextTick, computed } from 'vue';
import { showToast } from '@nutui/nutui';
// import * as Prox from '@/pb/prox_pb.js';
// import * as grpcService from '@/pb/prox_grpc_web_pb.js';

import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';
import '@nutui/nutui/dist/packages/toast/style';
import useOrderInfo from './useOrderInfo.js';
import { s3Url, poolUrl, maxUrl } from '@/setting.js';
import moment from 'moment';

export default function useDelete(tableLoading, refresh, orderInfo, header, _metadata) {
  const deleteItem = (item) => {
    tableLoading.value = true;
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
    ProxDeleteObjectReq.setHeader(header.value);
    ProxDeleteObjectReq.setRequest(ProxDeleteObjectRequest);

    let server = new grpcService.default.APIClient(maxUrl, null, null);
    console.log('ProxDeleteObjectReq', ProxDeleteObjectReq);
    server.deleteObject(ProxDeleteObjectReq, metadata.value, (err, res) => {
      if (res) {
        console.log(res);
        showToast.success('Delete succeeded');
        tableLoading.value = false;
        nextTick(() => {
          refresh();
        });
      } else {
        console.log('---deleteObject----', err);
        tableLoading.value = false;
        showToast.fail('Delete Failed');
      }
    });
  };
  return {
    deleteItem,
  };
}
