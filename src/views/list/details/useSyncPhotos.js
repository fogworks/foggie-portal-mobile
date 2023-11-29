import { showToast, showNotify } from '@nutui/nutui';
import { getSecondTime } from '@/utils/util';
import { save_upload, valid_upload, get_unique_order } from '@/api/index';
import { poolUrl } from '@/setting.js';
import { useRoute } from 'vue-router';
export default function useSyncPhotos(props) {
  console.log(JSON.stringify(props), 'props');
  const $cordovaPlugins = inject('$cordovaPlugins');
  console.log($cordovaPlugins, 'cordovaPlugins');
  let merkleTimeOut = null;
  const { bucketName, accessKeyId, secretAccessKey, orderInfo, prefix = [] } = toRefs(props);
  console.log(bucketName.value, 'bucketName');
  console.log(orderInfo.value, 'orderInfo');

  const order_id = ref('');
  const route = useRoute();
  order_id.value = route.query.id;
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: order_id.value,
    };
    return valid_upload(d).then((res) => {
      if (res?.data) {
        // TODO
        clearTimeout(merkleTimeOut);
      } else {
        if (timeout) {
          merkleTimeOut = setTimeout(() => {
            getMerkleState(timeout);
          }, 30000);
        }
      }
    });
  };
  const startUpload = async () => {
    console.log('进入上传方法');
    if (!bucketName.value || !accessKeyId.value || !secretAccessKey.value) {
      showToast.fail('The data is abnormal, please refresh the page and try again.');
      return false;
    }

    let prefixStr = '';
    if (prefix.value?.length > 0) {
      prefixStr = prefix.value.join('/') + '/';
    }
    let nowTime = Date.now();
    let endTime = new Date(orderInfo.value.created_at).getTime() + 1000 * 60 * 3;
    let time = Math.round((endTime - nowTime) / 1000);
    if (time > 4 * 60) {
      time -= 60 * 60;
    }
    if (time > 0) {
      const content = `Upload files after ${getSecondTime(time)}`;
      showToast.fail(content);
      return false;
    }
    const d = { orderId: order_id.value };
    let merkleRes = await valid_upload(d);
    if (merkleRes?.data) {
    } else {
      showToast.fail(merkleRes.msg || 'Merkle is being built, not allowed to upload file.');
      if (!merkleTimeOut) {
        merkleTimeOut = setTimeout(() => {
          getMerkleState(true);
        }, 30000);
      }
      return false;
    }
    const uploadUrl = `https://${bucketName.value}.${poolUrl}:6008/o/`;
    console.log('开始调用选择文件');
    $cordovaPlugins.chooseFile({
      serviceUrl: uploadUrl,
      bucketName: bucketName.value,
      accessKeyId: accessKeyId.value,
      secretAccessKey: secretAccessKey.value,
      prefixStr,
    });
  };
  return {
    startUpload,
  };
}
