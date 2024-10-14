<template>
  <div class="offlineBox" :class="[isShowOffline ? 'showOff' : 'hideOff']">
    <div class="closeImg" @click="closeBuy"></div>
    <div class="show_offline_list"> </div>
    <div class="offline_title">添加离线下载链接</div>
    <div class="offline_box">
      <div class="offline_label">文件名</div>
      <nut-input v-model="offlineLinkName" placeholder="离线下载文件名"></nut-input>
      <div class="offline_label">链接地址</div>
      <nut-textarea v-model="offlineLink" rows="3" placeholder="支持IPFS/FOGGIE/HTTP/FTP/磁力链接" />
      <nut-button class="offline_add_link" type="primary" @click="addLink">Add</nut-button>
    </div>
  </div>
</template>

<script setup>
  import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
  const props = defineProps({
    isShowOffline: Boolean,
    currentBucketData: Object,
  });
  const { isShowOffline, currentBucketData } = toRefs(props);
  import { maxUrl } from '@/setting.js';
  import { get_vood_token } from '@/api/index';
  import { showToast } from '@nutui/nutui';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  import moment from 'moment';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/net_grpc_web_pb.js';

  const offlineLink = ref('');
  const offlineLinkName = ref('');
  let deviceToken = ref('');
  const appType = ref('');
  const deviceData = ref({});
  const header = ref({});
  const emits = defineEmits(['closeBuy']);
  const closeBuy = () => {
    emits('closeBuy');
  };
  watch(
    currentBucketData,
    (val) => {
      deviceData.value = val;
      getTokenMap();
    },
    { deep: true },
  );

  onMounted(async () => {
    getTokenMap();
  });
  const getTokenMap = async () => {
    console.log('getTokenMapgetTokenMapgetTokenMap');
    if (deviceData.value && deviceData.value.device_id) {
      let token = await get_vood_token({ vood_id: deviceData.value.device_id });
      if (token) {
        userStore.setMaxTokenMap({
          id: currentBucketData.value.device_id,
          token: token.data.token_type + ' ' + token.data.access_token,
        });
        let _token = token.data.access_token;
        deviceToken.value = _token;
        console.log(deviceToken.value, 'deviceToken.value ');
        initHeader();
      }
    }
  };
  const initHeader = () => {
    let headerProx2 = new Prox.default.ProxHeader();
    appType.value = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    headerProx2.setPeerid(deviceData.value.peer_id);
    headerProx2.setId(deviceData.value.foggie_id);
    headerProx2.setToken(deviceToken.value);
    headerProx2.setApptype(appType.value);
    header.value = headerProx2;
    console.log(' header.value', header.value);
  };

  const showLists = () => {
    console.log('showListsshowListsshowListsshowLists');
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.ProxPinningListRequest();
    request.setHeader(header.value);
    console.log('showLists', request, header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    // ProxHeader header = 1;
    // string status = 2;
    // string pinType = 3;
    // string before = 4;
    // string after = 5;
    // int32 limit = 6;
    // string match = 7;
    // repeated string cids = 8;
    request.setStatus(2);
    request.setPintype('false');
    request.setBefore(4);
    request.setAfter(5);
    request.setLimit(6);
    request.setMatch(7);
    // request.setCids(currentBucketData.value.cid);
    server.listPinnings(request, metadata, (err, res) => {
      if (err) {
        console.log('-----ListPinnings---err---:', err);
      }
      if (res) {
        console.log(res, '----ListPinnings');
      }
    });
  };
  const addLink = () => {
    showLists();
    return;
    console.log(offlineLink.value, offlineLinkName.value);
    if (!offlineLinkName.value) {
      showToast.text('请填写离线下载文件名');
      return;
    }
    if (!offlineLink.value) {
      showToast.text('请填写离线下载链接');
    } else {
      let offlineLink = offlineLink.value.toLocaleLowerCase();
      if (
        offlineLink.indexOf('ipfs://') > -1 ||
        offlineLink.indexOf('foggie://') > -1 ||
        offlineLink.indexOf('http://') > -1 ||
        offlineLink.indexOf('https://') > -1 ||
        offlineLink.indexOf('ftp://') > -1 ||
        offlineLink.indexOf('sftp://') > -1 ||
        offlineLink.indexOf('magnet:?') > -1
      ) {
        if (!currentBucketData.value.device_id) {
          return;
        }

        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let header = new Prox.default.ProxHeader();
        let request = new Prox.default.ProxFetchRequest();
        request.setHeader(header.value);

        let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
        let metadata = {
          'X-Custom-Date': date + 'Z',
          'X-Sid': currentBucketData.value.peer_id,
        };

        server.AsyncFetchObject(request, metadata, (err, res) => {
          if (err) {
            console.log('AsyncFetchObject---err---:', err);
          }
          if (res) {
            console.log(res, 'AsyncFetchObject');
          }
        });
      } else {
        showToast.text('离线下载支持IPFS/FOGGIE/HTTP/FTP/磁力链接,请填写规范的链接地址');
      }
    }
  };
</script>

<style lang="scss">
  .offlineBox {
    position: fixed;
    top: 150px;
    left: 8%;
    width: 80%;
    height: 500px;
    height: auto;
    border: 1px solid #373737;
    border: 1px solid #ffffff36;
    border-radius: 10px;
    z-index: 9999;
    transition: all 0.9s ease;
    background: #212121;
    padding: 20px;
    box-shadow:
      rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  .offline_title {
    color: #fff;
    text-align: center;
    height: 40px;
    margin: 20px;
    font-weight: bold;
  }
  .offline_label {
    color: #fff;
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-top: 20px;
  }
  .offline_box {
    padding: 10px;
    .nut-textarea,
    .nut-input {
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      //   height: 300px;
    }
    .nut-textarea__textarea,
    .nut-input-box {
      width: 100%;
      color: #fff;
    }
    .offline_add_link {
      margin: 30px auto;
      display: block;
      width: 400px;
      background: #fac858;
      background: #88f948;
      //   background-image: linear-gradient(89deg, #199dec 10%, #0061a3 40%, #df6b22 50%, #ffd07f 100%);
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .hideOff {
    transform: translateY(-600px);
    opacity: 0;
  }
  .showOff {
    transform: translateY(0);
    opacity: 1;
  }
  .closeImg {
    background: url('@/assets/maxio/close.svg');
    width: 60px;
    height: 60px;
    position: absolute;
    top: -22px;
    right: -20px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    z-index: 999;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>
