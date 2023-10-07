import useVariable from './useVariable';
import { ref, toRefs, inject, nextTick, computed } from 'vue';
import { file_delete } from '@/api';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default function useDelete(tableLoading, refresh) {
  const { store } = useVariable();
  const deviceData = inject('deviceData');
  const deleteItem = (item) => {
    tableLoading.value = true;
    const token = computed(() => {
      if (deviceData.device_type == 3) {
        return deviceData.sign;
      }
      // else {
      //     return tokenMap.value[deviceData.device_id];
      // }
    });
    file_delete(token.value, item, deviceData).then((res) => {
      if (res && res.data) {
        showToast.success('Delete succeeded');
        // proxy.$notify({
        //   customClass: 'notify-success',
        //   message: 'Delete succeeded',
        //   position: 'bottom-left',
        // });
        tableLoading.value = false;
        let arr = [];
        if (store.getters.uploadFileList && deviceData.device_id) {
          arr = store.getters.uploadFileList[deviceData.device_id];
          if (arr && arr.length > 0) {
            store.getters.uploadFileList[deviceData.device_id] = arr.filter((val) => {
              return val.urlFileName !== item.key;
            });
          }
        }
        nextTick(() => {
          refresh();
        });
      } else {
        tableLoading.value = false;
        // proxy.$notify({
        //   customClass: 'notify-error',
        //   message: 'Delete Failed',
        //   position: 'bottom-left',
        // });
        showToast.fail('Delete succeeded');
      }
    });
  };
  return {
    deleteItem,
  };
}
