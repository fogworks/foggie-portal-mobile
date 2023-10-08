import useVariable from './useVariable';
import { ref, toRefs, inject } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import { file_pin } from '@/api';
export default function useShare() {
  const { store, email, shareRefContent, copyContent, pinData, ipfsDialogShow } = useVariable();
  const deviceData = inject('deviceData');
  const showShareDialog = ref(false);
  const ipfsPin = (item, stype, flag) => {
    let foggieToken = deviceData.device_id;
    if (foggieToken && foggieToken.indexOf('bearer ') > -1) {
      foggieToken = foggieToken.split('bearer ')[1];
    }
    let device_type = null;

    if (deviceData.device_type == 'foggie' || !deviceData.device_type) {
      device_type = 1;
    } else if (deviceData.device_type == 'foggie_max') {
      device_type = 2;
    } else if (deviceData.device_type == 'space') {
      device_type = 3;
    }
    let data = {
      isDir: item.isDir,
      copied: 0,
      exp: 3 * 24 * 3600,
      email,
      orderId: device_type === 3 ? deviceData.space_order_id : deviceData.device_id,
      cid: item.cid,
      stype,
      key: item.key,
      pin: flag !== 'unpin',
      deviceType: device_type,
      fileSize: item.originalSize,
      foggieToken,
    };

    return file_pin(data).then((res) => {
      if (res) {
        showToast.success('Operation successful');

        ipfsDialogShow.value = false;
      }
    });
  };
  const doShare = async (item) => {
    pinData.item = item;
    let key = item.key;
    // if (item && !item.isDir && !item.isPin) {
    //     await ipfsPin(item, 'ipfs');
    // }
    if (key) {
      let peer_id = deviceData.peer_id;
      let foggieStr = `foggie://${peer_id}/${deviceData.foggie_id}/${item.cid}`;
      let httpStr = `http://${deviceData.rpc.split(':')[0]}/fog/${deviceData.foggie_id}/${item.cid}`;
      let ipfsStr = item.cid ? `ipfs://${item.cid}` : '';

      shareRefContent.ipfsStr = ipfsStr;
      shareRefContent.httpStr = httpStr;
      shareRefContent.foggieStr = foggieStr;

      showShareDialog.value = true;
      // this.shareBoxShow = true;
    }
  };
  return {
    ipfsPin,
    doShare,
    shareRefContent,
    copyContent,
    showShareDialog,
    ipfsDialogShow,
  };
}
