<template>
  <div class="offlineBox" :class="[isShowOffline ? 'showOff' : 'hideOff']">
    <div class="closeImg" @click="closeBuy"></div>
    <div class="offlinelist_Box" v-if="!showAdd">
      <div class="offline_title">离线下载任务</div>
      <nut-tabs v-model="currentTab" @change="changeTypeTab">
        <nut-tab-pane title="正在传输" pane-key="current">
          <div class="show_offline_list">
            <div class="show_offline_item" v-for="(item, index) in offlineList" :key="index">
              <div class="show_offline_itemImgBox">
                <img src="@/assets/maxio/file.svg" />
              </div>
              <div class="show_offline_item_content">
                <div class="show_offline_item_title"> {{ item.title }}</div>
                <div class="show_offline_item_progress">
                  <nut-progress
                    size="small"
                    :percentage="item.progress"
                    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
                    status="active"
                  />
                </div>
                <div class="show_offline_item_bottom">
                  <div class="show_offline_item_left"> 云添加 </div>
                  <div class="show_offline_item_center">
                    <div class="show_offline_item_have">0.4GB </div>
                    /
                    <div class="show_offline_item_total"> 2.2GB</div>
                  </div>
                  <div class="show_offline_item_right">
                    <img src="@/assets/maxio/download.svg" />
                    1MB/s
                  </div>
                </div>
              </div>
              <div class="show_offline_item_option">
                <img
                  src="@/assets/maxio/pause.svg"
                  class="user_img"
                  @click="changeStatus(item, index, 'stop')"
                  v-if="item.statusType !== 'stop'"
                />
                <img
                  src="@/assets/maxio/pause1.svg"
                  class="user_img"
                  @click="changeStatus(item, index, 'start')"
                  v-if="item.statusType === 'stop'"
                />
              </div>
            </div> </div
        ></nut-tab-pane>
        <nut-tab-pane title="已完成" pane-key="history">
          <div class="show_offline_list">
            <div class="show_offline_item" v-for="(item, index) in offlineList" :key="index">
              <div class="show_offline_itemImgBox">
                <img src="@/assets/maxio/running.svg" class="user_img" />
              </div>
              <div class="show_offline_item_content">
                <div class="show_offline_item_title"> {{ item.title }}</div>
              </div>
              <div class="show_offline_item_option"> </div>
            </div> </div
        ></nut-tab-pane>
      </nut-tabs>

      <div class="offline_box">
        <nut-button class="offline_add_link" type="primary" @click="showLink">去添加离线下载任务</nut-button>
      </div></div
    >
    <div class="offline_add_Box" v-if="showAdd">
      <div class="offline_title">添加离线下载链接</div>
      <div class="offline_box">
        <div class="offline_label">链接地址</div>
        <nut-textarea v-model="offlineLink" rows="3" placeholder="支持IPFS/FOGGIE/HTTP/FTP/磁力链接" />
        <div class="offline_label">文件名</div>
        <nut-input v-model="offlineLinkName" placeholder="离线下载文件名"></nut-input>
        <nut-button class="offline_add_link" type="primary" @click="addLink" :disabled="isAdd">Add12</nut-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
  const props = defineProps({
    isShowOffline: Boolean,
    currentBucketData: Object,
    isOfflineArr: Array,
    MaxTokenMap: String,
  });
  const { isShowOffline, currentBucketData, isOfflineArr, MaxTokenMap } = toRefs(props);

  import { maxUrl } from '@/setting.js';
  import { get_vood_token } from '@/api/index';
  import { showToast } from '@nutui/nutui';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  import moment from 'moment';
  import * as Prox from '@/pb/net_pb.js';
  import * as grpcService from '@/pb/net_grpc_web_pb.js';
  const currentTab = ref('current');

  const offlineLink = ref('');
  const offlineLinkName = ref('');
  let deviceToken = ref('');
  const offlineList = ref([]);
  const appType = ref('');
  const deviceData = ref({});
  const header = ref({});
  const emits = defineEmits(['closeBuy']);
  const statusType = ref('start');
  const showAdd = ref(false);
  const isAdd = ref(false);
  const closeBuy = () => {
    emits('closeBuy');
  };
  //   watch(
  //     MaxTokenMap,
  //     (val) => {
  //       deviceData.value = currentBucketData.value;
  //       let token = val[currentBucketData.value.device_id];
  //       token = token.split(' ')[1];
  //       deviceToken.value = token;
  //       initHeader();
  //     },
  //     { deep: true },
  //   );
  watch(
    isOfflineArr,
    (val) => {
      offlineList.value = val;
    },
    { deep: true },
  );
  watch(
    isShowOffline,
    (val) => {
      if (val) {
        offlineLink.value = '';
        offlineLinkName.value = '';
        // console.log(MaxTokenMap.value, 'MaxTokenMap.value');
        if (MaxTokenMap.value) {
          deviceData.value = currentBucketData.value;
          let token = MaxTokenMap.value[currentBucketData.value.device_id];
          token = token.split(' ')[1];
          deviceToken.value = token;
          initHeader();
        } else {
          getTokenMap();
        }
      }
    },
    { deep: true },
  );
  offlineList.value = isOfflineArr.value;

  //   去添加离线下载任务
  const showLink = () => {
    showAdd.value = true;
  };
  const showListPage = () => {
    showAdd.value = false;
    showLists();
  };
  const changeStatus = (item, index, type) => {
    offlineList.value[index].statusType = type;
  };
  const changeTypeTab = () => {
    if (currentTab.value === 'history') {
      offlineList.value = [];
    } else {
      offlineList.value = isOfflineArr.value;
    }
  };
  const getTokenMap = async () => {
    if (deviceData.value && deviceData.value.device_id) {
      let token = await get_vood_token({ vood_id: deviceData.value.device_id });
      if (token) {
        userStore.setMaxTokenMap({
          id: currentBucketData.value.device_id,
          token: token.data.token_type + ' ' + token.data.access_token,
        });
        let _token = token.data.access_token;
        deviceToken.value = _token;
        initHeader();
      }
    }
  };
  const initHeader = () => {
    let headerProx2 = new Prox.default.Header();
    appType.value = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    headerProx2.setPeerid(deviceData.value.peer_id);
    headerProx2.setId(deviceData.value.foggie_id);
    headerProx2.setToken(deviceToken.value);
    headerProx2.setApptype(appType.value);
    header.value = headerProx2;
    // console.log('initHeaderinitHeader', header.value);
    showLists();
  };

  const showLists = () => {
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.PinningListRequest();
    request.setHeader(header.value);
    // console.log('showLists---request', request, header.value, server);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    // Header header = 1;
    // string status = 2;
    // string pinType = 3;
    // string before = 4;
    // string after = 5;
    // int32 limit = 6;
    // string match = 7;
    // repeated string cids = 8;
    // request.setStatus('');
    // request.setBefore('2024-02-09T00:00:00Z');
    // request.setAfter('2024-06-09T00:00:00Z');
    server.listPinnings(request, metadata, (err, res) => {
      if (err) {
        console.log('-----ListPinnings---err123---:', err);
      }
      if (res) {
        let data = res.getPinningsList();
        let obj = res.toObject();
        console.log(res, '----ListPinnings', data, obj);
      }
    });
  };
  const addLink = () => {
    // console.log('addLink', offlineLink.value, offlineLinkName.value, header.value);
    // return;
    isAdd.value = true;
    if (!offlineLinkName.value) {
      showToast.text('请填写离线下载文件名');
      isAdd.value = false;
      return;
    }
    if (!offlineLink.value) {
      showToast.text('请填写离线下载链接');
      isAdd.value = false;
      return;
    } else {
      let _offlineLink = offlineLink.value.toLocaleLowerCase();
      if (
        _offlineLink.indexOf('ipfs://') > -1 ||
        _offlineLink.indexOf('foggie://') > -1 ||
        _offlineLink.indexOf('http://') > -1 ||
        _offlineLink.indexOf('https://') > -1 ||
        _offlineLink.indexOf('ftp://') > -1 ||
        _offlineLink.indexOf('sftp://') > -1 ||
        _offlineLink.indexOf('magnet:?') > -1
      ) {
        if (!currentBucketData.value.device_id) {
          isAdd.value = false;
          return;
        }

        let server = new grpcService.default.APIClient(maxUrl, null, null);
        let request = new Prox.default.FetchRequest();
        let name = `cqy0528/${offlineLinkName.value}`;
        request.setHeader(header.value);
        request.setUrl(offlineLink.value);
        request.setName(name);

        let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
        let metadata = {
          'X-Custom-Date': date + 'Z',
          'X-Sid': currentBucketData.value.peer_id,
        };
        // console.log(request, 'asyncFetchObjectasyncFetchObject--request');

        server.asyncFetchObject(request, metadata, (err, res) => {
          if (err) {
            console.log('AsyncFetchObject---err---:', err);
            isAdd.value = false;
            return;
          }
          if (res) {
            console.log(res, 'AsyncFetchObject');
            isAdd.value = false;
            showListPage();
          }
        });
      } else {
        showToast.text('离线下载支持IPFS/FOGGIE/HTTP/FTP/磁力链接,请填写规范的链接地址');
        isAdd.value = false;
        return;
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
    z-index: 102;
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
      background: #3872e0;
      //   background-image: linear-gradient(89deg, #199dec 10%, #0061a3 40%, #df6b22 50%, #ffd07f 100%);
      color: #fff;
      cursor: pointer;
      background: #d8dde538;
      border: 1px solid #ffffff70;
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
  .offlineBox {
    .nut-tab-pane {
      padding: 30px 10px;
    }
    .nut-tab-pane,
    .nut-tabs__titles-item {
      color: #fff;
      background: #212121 !important;
    }
    .nut-tabs__titles-item__text {
      color: #fff;
    }
    .nut-tabs__titles-item.active {
      color: #d3ab2c !important;
      .nut-tabs__titles-item__line {
        background: linear-gradient(90deg, #2478be 0%, rgb(248 185 108) 100%) !important;
        width: 100% !important;
      }
    }
  }

  .show_offline_list {
    color: #fff;
    .show_offline_item {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 0;
      border-bottom: 1px solid #ffffff40;
      .show_offline_itemImgBox {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 60px;
          height: 60px;
          border-radius: 10px;
        }
      }
      .show_offline_item_content {
        width: calc(100% - 120px);
        .show_offline_item_title {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .show_offline_item_progress {
        }
      }
      .show_offline_item_option {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
    .show_offline_item_bottom {
      margin-top: 12px;
      display: flex;
      font-size: 22px;
      align-items: center;
      justify-content: space-between;
      //   font-weight: bold;
      .show_offline_item_left {
      }
      .show_offline_item_center {
        display: flex;
        .show_offline_item_have {
        }
        .show_offline_item_total {
        }
      }
      .show_offline_item_right {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
</style>
