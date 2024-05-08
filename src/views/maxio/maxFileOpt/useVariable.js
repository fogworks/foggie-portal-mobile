import { ref, reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';
export default function useVariable() {
  const store = useUserStore();
  const email = store.getUserInfo?.email;
  const uuid = store.getUserInfo?.uuid;
  const shareRefContent = reactive({});
  const copyContent = ref('');
  const pinData = reactive({
    item: {},
  });
  const ipfsDialogShow = ref(false);
  return {
    shareRefContent,
    copyContent,
    pinData,
    store,
    email,
    uuid,
    ipfsDialogShow,
  };
}
