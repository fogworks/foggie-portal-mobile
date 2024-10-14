<template>
  <div class="offlineBox" :class="[isShowOffline ? 'showOff' : 'hideOff']">
    <div class="closeImg" @click="closeBuy"></div>
    <div class="offlinelist_Box" v-if="!showAdd">
      <div class="offline_title"
        >Offline Download
        <div class="offline_box offline_add_btn_box">
          <nut-button class="offline_add_link" type="primary" @click="showLink">Add</nut-button>
        </div>
      </div>
      <nut-tabs v-model="currentTab" @change="changeTypeTab">
        <nut-tab-pane title="Downloading" pane-key="current">
          <!-- <div class="update_line" @click="updateList" v-if="!isListLoading">
            <img src="@/assets/maxio/update.svg" />
            <span>Update List</span>
          </div> -->

          <div class="show_offline_list">
            <div class="show_offline_item" v-for="(item, index) in my_runningList" :key="index">
              <div class="show_offline_itemImgBox">
                <!-- <img src="@/assets/maxio/file.svg" /> -->
                <img
                  src="@/assets/maxio/http.svg"
                  v-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('http') > -1"
                />
                <img
                  src="@/assets/maxio/ftp.svg"
                  v-else-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('ftp:') > -1"
                />
                <img
                  src="@/assets/maxio/ipfsLink.svg"
                  v-else-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('ipfs') > -1"
                />
                <img src="@/assets/maxio/link.svg" v-else />
              </div>
              <div class="show_offline_item_content">
                <div class="show_offline_item_title"> {{ item.name }}</div>
                <div class="show_offline_item_progress">
                  <nut-progress
                    size="small"
                    :percentage="item.progress"
                    stroke-color="linear-gradient(234deg, rgb(119 255 18) 0%, rgb(62 158 83) 32.8156%, rgb(209 190 102) 100%)"
                    status="active"
                  />
                </div>
                <div class="show_offline_item_bottom">
                  <!-- <div class="show_offline_item_left"> 离线下载({{ item.status }}) </div> -->
                  <div class="show_offline_item_left">
                    {{ item.status === 'pulling' || item.status === 'active' ? 'downloading' : item.status }}
                  </div>
                  <div class="show_offline_item_center">
                    <div class="show_offline_item_have">
                      {{
                        item.pinsList &&
                        item.pinsList.length &&
                        item.pinsList[0].completed &&
                        item.pinsList[0].completed &&
                        getfilesize(item.pinsList[0].completed)
                      }}
                    </div>
                    /
                    <div class="show_offline_item_total">
                      {{ item.pinsList && item.pinsList.length && item.pinsList[0].size && getfilesize(item.pinsList[0].size) }}</div
                    >
                  </div>
                  <div class="show_offline_item_right" v-if="item.status === 'pinning' || item.status === 'active'">
                    <img src="@/assets/maxio/download.svg" />

                    {{ item.pinsList && item.pinsList.length && item.pinsList[0] && item.pinsList[0].averagespeed }}/s
                  </div>
                </div>
              </div>
              <div
                class="show_offline_item_option"
                v-if="item.status === 'active' || item.status === 'pinning' || item.status === 'cancel'"
              >
                <img
                  src="@/assets/maxio/pause.svg"
                  class="user_img"
                  @click="changeStatus(item, index, 'stop')"
                  v-if="item.status === 'active' || item.status === 'pinning'"
                />
                <img
                  src="@/assets/maxio/pause1.svg"
                  class="user_img"
                  @click="changeStatus(item, index, 'start')"
                  v-if="item.status === 'cancel'"
                />
                <img
                  src="@/assets/maxio/delete.svg"
                  class="user_img"
                  @click="changeStatus(item, index, 'delete')"
                  v-if="item.status === 'cancel'"
                />
              </div>
            </div>
            <div class="offline_empty" v-if="my_runningList.length === 0 && !isListLoading">
              <img src="@/assets/maxio/emptyList.svg" />
            </div>
            <div v-if="my_runningList.length === 0 && isListLoading" class="offf_loading_box_wrap">
              <loadingImg></loadingImg>
            </div>
            <!-- <div class="offline_empty" v-if="my_runningList.length === 0 && isListLoading">

            </div> -->
          </div></nut-tab-pane
        >
        <nut-tab-pane title="Completed" pane-key="history">
          <div class="show_offline_list">
            <div class="show_offline_item" v-for="(item, index) in my_offLineList" :key="index">
              <div class="show_offline_itemImgBox">
                <!-- <img src="@/assets/maxio/file.svg" /> -->
                <img
                  src="@/assets/maxio/http1.svg"
                  v-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('http') > -1"
                />
                <img
                  src="@/assets/maxio/ftp.svg"
                  v-else-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('ftp:') > -1"
                />
                <img
                  src="@/assets/maxio/ipfsLink.svg"
                  v-else-if="item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('ipfs') > -1"
                />
                <img src="@/assets/logo-dog.svg" v-else-if="item.pinsList && item.pinsList.length && item.pinsList[0].cid" />
                <img src="@/assets/maxio/link.svg" v-else />
              </div>
              <div class="show_offline_item_content">
                <div class="show_offline_item_title" @click="gotoFile(item.name)"> {{ item.name }}</div>
                <div class="show_offline_item_provider" v-if="item.pinsList && item.pinsList.length > 0">
                  {{
                    item.pinsList && item.pinsList.length && item.pinsList[0].provider.indexOf('127.0.0.1') > -1
                      ? item.pinsList[0].cid
                      : item.pinsList[0].provider
                  }}</div
                >
                <div class="show_offline_item_progress" v-if="item.status === 'pinned' || item.status === 'pulled'">
                  <nut-progress
                    size="small"
                    :percentage="100"
                    stroke-color="linear-gradient(234deg, rgb(119 255 18) 0%, rgb(62 158 83) 32.8156%, rgb(209 190 102) 100%)"
                  />
                </div>
                <div class="show_offline_item_progress" v-if="item.status === 'failed'">
                  <nut-progress
                    size="small"
                    :percentage="0"
                    stroke-color="linear-gradient(234deg, rgb(119 255 18) 0%, rgb(62 158 83) 32.8156%, rgb(209 190 102) 100%)"
                  />
                </div>
                <div class="show_offline_item_bottom">
                  <div class="show_offline_item_left">
                    <img src="@/assets/maxio/complete.svg" v-if="item.status === 'pinned' || item.status === 'pulled'" />
                    <img src="@/assets/maxio/failed.svg" v-if="item.status !== 'pinned' && item.status !== 'pulled'" />
                    {{ item.status === 'pinned' || item.status === 'pulled' ? 'Complete' : 'Failed' }}</div
                  >
                  <div class="show_offline_item_center">
                    <!-- <div class="show_offline_item_have">
                      {{
                        item.pinsList &&
                        item.pinsList.length &&
                        item.pinsList[0].completed &&
                        item.pinsList[0].completed &&
                        getfilesize(item.pinsList[0].completed)
                      }}
                    </div> -->
                    <!-- / -->
                    <div class="show_offline_item_total">
                      {{ item.pinsList && item.pinsList.length && item.pinsList[0].size && getfilesize(item.pinsList[0].size) }}</div
                    >
                  </div>
                  <div class="show_offline_item_right">
                    {{
                      item.pinsList &&
                      item.pinsList.length &&
                      item.pinsList[0] &&
                      item.pinsList[0].duration &&
                      convertSecondsToHMS(item.pinsList[0].duration)
                    }}
                  </div>
                </div>
                <div class="show_created"> {{ transferUTCTime(item.created) }} </div>
              </div>
              <div class="show_offline_item_option">
                <img src="@/assets/maxio/delete.svg" class="user_img" @click="changeStatus(item, index, 'delete')" />
              </div>
            </div>
            <div class="offline_empty" v-if="my_offLineList.length === 0 && !isListLoading">
              <img src="@/assets/maxio/emptyList.svg" />
            </div>
            <div v-if="my_offLineList.length === 0 && isListLoading" class="offf_loading_box_wrap">
              <loadingImg></loadingImg>
            </div>
          </div>
        </nut-tab-pane>
      </nut-tabs>
    </div>
    <div class="offline_add_Box" v-if="showAdd">
      <div class="offline_title">Add Offline Download</div>
      <div class="offline_box">
        <div class="offline_label">Url Adresss</div>
        <nut-textarea
          v-model="offlineLink"
          rows="3"
          placeholder="Support IPFS/FOGGIE/HTTP/FTP/magnetic link"
          @change="changeLinkName(offlineLink)"
        />
        <div class="offline_label">FileName</div>
        <nut-input v-model="offlineLinkName" placeholder="FileName" clearable show-clear-icon></nut-input>
        <div class="folder_title">Save As: offlineFolder/{{ offlineLinkName }}</div>
        <div class="bottom_btns">
          <nut-button class="offline_add_link_add offline_add_link_back" type="primary" @click="showAdd = false">Back</nut-button>
          <nut-button class="offline_add_link_add" type="primary" @click="addLink" :disabled="isAdd">AddLink</nut-button>
        </div>
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
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  const userStore = useUserStore();
  import moment from 'moment';
  import * as Prox from '@/pb/net_pb.js';
  import * as grpcService from '@/pb/net_grpc_web_pb.js';
  const currentTab = ref('current');
  import loadingImg from '@/components/loadingImg/index.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const my_offLineList = ref([]);
  const my_runningList = ref([]);
  const myTotalList = ref([]);

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
  const isListLoading = ref(false);
  const refreshInterval = ref(null);
  const refreshTimer = ref(10000);
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
      //   offlineList.value = val;
    },
    { deep: true },
  );
  watch(
    isShowOffline,
    (val) => {
      if (val) {
        showAdd.value = false;
        isAdd.value = false;
        showToast.hide('');
        offlineLink.value = '';
        offlineLinkName.value = '';
        // console.log(MaxTokenMap.value, 'MaxTokenMap.value');
        if (MaxTokenMap.value && MaxTokenMap.value[currentBucketData.value.device_id]) {
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
  const showLink = () => {
    showAdd.value = true;
  };
  const changeLinkName = (link) => {
    if (link.indexOf('magnet:?') > -1) {
      return;
    }
    let arrr = link.split('/');
    let name = arrr[arrr.length - 1];
    if (name.indexOf('?') > -1) {
      name = name.split('?')[0];
    }
    offlineLinkName.value = name;
  };
  const convertSecondsToHMS = (seconds, dateFormat = 'imss') => {
    var obj = {};
    obj.H = Number.parseInt(seconds / 3600);
    obj.i = Number.parseInt((seconds - obj.H * 3600) / 60);
    obj.s = Number.parseInt(seconds - obj.H * 3600 - obj.i * 60);
    // if (obj.H < 10) {
    //   obj.H = '0' + obj.H;
    // }
    // if (obj.i < 10) {
    //   obj.i = '0' + obj.i;
    // }
    if (obj.s < 10) {
      obj.s = '0' + obj.s;
    }

    // 3.解析
    var rs = dateFormat.replace('H', obj.H).replace('i', obj.i).replace('s', obj.s);
    return rs;
  };

  const showListPage = () => {
    showAdd.value = false;
    showLists(true);
  };
  const updateList = () => {
    showAdd.value = false;
    showLists(true);
  };
  const changeStatus = (item, index, type) => {
    // offlineList.value[index].statusType = type;
    console.log('changeStatus----', type);
    if (type === 'delete') {
      deleteItem(item, index, type);
    } else if (type === 'stop') {
      cancelItem(item, index, type);
    } else if (type === 'start') {
      resumeItem(item, index, type);
    }
  };
  const deleteItem = (item, index, type) => {
    console.log(item, index, type);
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.FetchPinningRequest();
    request.setHeader(header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    request.setPinningid(item.requestid);
    server.deleteFetchObject(request, metadata, (err, res) => {
      if (err) {
        console.log('-----deleteItem---err123---:', err);
      }
      if (res) {
        console.log(res.array && res.array[0], 'deleteetedtgeiydehdiuedhiu');
        showLists(true);
      }
    });
  };
  const cancelItem = (item, index, type) => {
    console.log(item, index, type);
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.FetchPinningRequest();
    request.setHeader(header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    request.setPinningid(item.requestid);
    server.cancelFetchObject(request, metadata, (err, res) => {
      if (err) {
        console.log('-----cancelFetchObject---err123---:', err);
      }
      if (res) {
        console.log(res.array && res.array[0], 'cancelFetchObjectcancelFetchObjectcancelFetchObject');
        showLists();
      }
    });
  };
  const resumeItem = (item, index, type) => {
    console.log(item, index, type);
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.FetchPinningRequest();
    request.setHeader(header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    request.setPinningid(item.requestid);
    server.resumeFetchObject(request, metadata, (err, res) => {
      if (err) {
        console.log('-----resumeItem---err123---:', err);
      }
      if (res) {
        console.log(res.array && res.array[0], 'resumeFetchObjectresumeFetchObjectresumeFetchObject');
        showLists();
      }
    });
  };

  const changeTypeTab = () => {
    // console.log(currentTab.value, 'changeTypeTabchangeTypeTabchangeTypeTab-currentTab');
    // if (currentTab.value === 'history') {
    //   offlineList.value = [];
    // } else {
    //     offlineList.value = isOfflineArr.value;
    // }
  };
  const gotoFile = (name) => {
    console.log(name, 'gotoFile');
    let _name = name.split('/');
    let file = _name[_name.length - 1];
    let folder = name.replace(file, '');
    console.log(folder, '11111');
    let prefix = folder.split('/').slice(0, -1);
    const cloudQuery = {
      id: deviceData.value.id,
    };
    router.push({
      path: '/maxFile',
      query: { ...cloudQuery, category: 0, prefix: prefix.join('/') },
    });
  };
  const getTokenMap = async () => {
    console.log('offline---getTokenMap');
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
    showLists(true);
  };

  const showLists = (type) => {
    console.log('showLists-----', type);
    if (type) {
      isListLoading.value = true;
    }
    // my_runningList.value = [];
    // my_offLineList.value = [];
    // myTotalList.value = [];
    // showToast.loading('Loading', {
    //   cover: true,
    //   coverColor: 'rgba(0,0,0,0.45)',
    //   customClass: 'app_loading',
    //   icon: loadingImg,
    //   loadingRotate: false,
    // });
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let request = new Prox.default.PinningListRequest();
    request.setHeader(header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': currentBucketData.value.peer_id,
    };
    request.setStatus('');
    request.setLimit(10);
    // request.setBefore('2024-02-09T00:00:00Z');
    // request.setAfter('2024-06-09T00:00:00Z');
    // console.log(request, header.value, 'header.value');
    server.listPinnings(request, metadata, (err, res) => {
      if (err) {
        console.log('-----ListPinnings---err123---:', err);
        offlineList.value = [];
        isListLoading.value = false;
        if (refreshInterval.value) clearInterval(refreshInterval.value);
      }
      if (res) {
        let data = res.getPinningsList();
        let obj = res.toObject();
        myTotalList.value = obj && obj.pinningsList;
        // console.log(myTotalList.value, 'myTotalList.value');

        my_offLineList.value = myTotalList.value.filter((item) => {
          return item.status !== 'pinning' && item.status !== 'queued' && item.status !== 'active' && item.status !== 'cancel';
        });
        my_runningList.value = myTotalList.value.filter((item) => {
          let progress = 0;
          let completed = 0;
          let size = 0;
          completed = item.pinsList && item.pinsList.length && item.pinsList[0].completed && item.pinsList[0].completed;

          size = item.pinsList && item.pinsList.length && item.pinsList[0].size;

          item.progress = completed && size ? Number(completed / size).toFixed(2) * 100 : 0;
          //   console.log(
          //     'item.progress-----',
          //     completed,
          //     size,
          //     item.progress,
          //     item.status,
          //     item.status === 'pinning' || item.status === 'queued' || item.status === 'active',
          //   );
          return item.status === 'pinning' || item.status === 'queued' || item.status === 'active' || item.status === 'cancel';
        });
        isListLoading.value = false;
        console.log('----ListPinnings', obj, myTotalList.value, my_runningList.value.length);
        // && currentTab.value === 'current'
        if (my_runningList.value.length > 0) {
          console.log('my_runningList.value.length ', my_runningList.value.length);
          if (!refreshInterval.value) {
            refreshInterval.value = setInterval(() => {
              showLists();
            }, refreshTimer.value);
          }
        } else {
          if (refreshInterval.value) clearInterval(refreshInterval.value);
        }
      }
    });
  };
  const addLink = () => {
    isAdd.value = true;
    if (!offlineLinkName.value) {
      showToast.text('Please fill in the  file name');
      isAdd.value = false;
      return;
    }
    if (!offlineLink.value) {
      showToast.text('Please fill in the link address');
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
        let name = `offlineFolder/${offlineLinkName.value}`;
        request.setHeader(header.value);
        request.setUrl(offlineLink.value);
        request.setName(name);

        let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
        let metadata = {
          'X-Custom-Date': date + 'Z',
          'X-Sid': currentBucketData.value.peer_id,
        };
        isAdd.value = false;
        showListPage();
        console.log('asyncFetchObject-request', request);
        server.asyncFetchObject(request, metadata, (err, res) => {
          if (err) {
            console.log('AsyncFetchObject---err---:', err);
            isAdd.value = false;
            showListPage();
            offlineLinkName.value = '';
            offlineLink.value = '';
            return;
          }
          if (res) {
            console.log(res, 'AsyncFetchObject');
            isAdd.value = false;
            showListPage();
            offlineLinkName.value = '';
            offlineLink.value = '';
            return;
          }
        });
      } else {
        showToast.text('Offline download supports IPFS/FOGGIE/HTTP/FTP/magnetic link, please fill in the standard link address');
        isAdd.value = false;
        return;
      }
    }
  };
  onUnmounted(() => {
    if (refreshInterval.value) clearInterval(refreshInterval.value);
  });
</script>

<style lang="scss">
  .offlineBox {
    position: fixed;
    top: 150px;
    left: 8%;
    width: 80%;
    height: 800px;
    height: auto;
    // overflow-y: scroll;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .update_line {
    display: flex;
    color: #4aa245;
    font-weight: bold;
    align-items: center;
    justify-content: end;
    border-bottom: 1px solid #373737;
    padding-bottom: 10px;
    margin-top: -20px;
    cursor: pointer;
    font-size: 26px;
    background-clip: text;
    color: transparent;
    background-image: -webkit-linear-gradient(1deg, #0e91dc 10%, #77bbea 40%, #df7a3a 50%, #ffd07f 100%);
    background-image: linear-gradient(89deg, #0e91dc 10%, #77bbea 40%, #df7a3a 50%, #ffd07f 100%);
    background-image: linear-gradient(89deg, #c0e0be 10%, #7ce86c 40%, #689950 50%, #3ede31 100%);
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
  .offline_label {
    color: #fff;
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-top: 20px;
  }
  .folder_title {
    color: #fff;
    font-size: 3.2vw;
    margin-top: 2.666667vw;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    cursor: pointer;
  }
  .offline_add_btn_box {
    // width: 100%;
    // width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #373737;
    padding-bottom: 10px;
    .offline_add_link {
      width: 160px !important;
    }
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
    .offline_add_link_add {
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
    .offline_add_link {
      margin-left: 10px;
      //   margin: 30px auto;
      display: block;
      padding: 0 8px !important;
      font-size: 22px;
      height: 60px;
      border-radius: 10px;
      background: #ffc97a !important;
      width: 200px;
      //   background: #3872e0 !important;
      background-image: linear-gradient(89deg, #199dec 0%, #0061a3 0%, #df6b22 0%, #ffd07f 100%) !important;
      background-image: linear-gradient(244deg, #51bb25 0%, #0061a3 0%, #84d32e 0%, #272523 100%) !important;
      color: #fff;
      font-weight: bold !important;
      cursor: pointer;
      border: 1px solid #fff;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .bottom_btns {
    display: flex;
    .offline_add_link_add {
      width: 40%;
      background-image: linear-gradient(89deg, #199dec 0%, #0061a3 0%, #df6b22 0%, #ffd07f 100%) !important;
    }
    .offline_add_link_back {
      background-image: none !important;
    }
  }
  .hideOff {
    transform: translateY(-600px);
    opacity: 0;
    z-index: -1;
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
        background: linear-gradient(275deg, #5edc74 0%, rgb(224, 214, 33) 100%) !important;
        width: 100% !important;
      }
    }
  }

  .show_offline_list {
    color: #fff;
    height: 500px !important;
    overflow-y: scroll;
    .offline_empty {
      //   img {
      //     width: 100px;
      //     height: 100px;
      //   }
    }
    .show_offline_item {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 0;
      border-bottom: 1px solid #ffffff40;

      .show_offline_itemImgBox {
        // margin-right: 20px;
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
        width: calc(100% - 140px);
        padding: 0 10px;
        .show_offline_item_title {
          font-size: 22px;
          margin-bottom: 10px;
          background-clip: text;
          color: transparent;
          //   background-image: linear-gradient(89deg, #1495ef 0%, #df7a3a 50%, #ffd07f 100%);
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 100%;
          overflow: hidden;
          color: rgb(255, 158, 13);
          color: #7ce86c;
          text-decoration: underline;
        }
        .show_offline_item_provider {
          font-size: 20px;
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          //   text-decoration: underline;
        }
        .show_offline_item_progress {
        }
      }
      .show_offline_item_option {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        // background: #ffffff29;
        border-radius: 50%;
        img {
          //   width: 50px;
          padding: 10px;
          width: auto;
          height: 40px;
          overflow: hidden;
          clear: both;
        }
      }
    }
    .offf_loading_box_wrap {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .show_offline_item_bottom {
      margin-top: 12px;
      display: flex;
      font-size: 22px;
      align-items: center;
      justify-content: space-between;
      //   font-weight: bold;
      .show_offline_item_left {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-size: 20px;
        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
      }
      .show_offline_item_center {
        display: flex;
        .show_offline_item_have {
          white-space: nowrap;
          font-size: 20px;
        }
        .show_offline_item_total {
          white-space: nowrap;
          font-size: 20px;
        }
      }
      .show_offline_item_right {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        font-size: 20px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .show_created {
      font-size: 20px;
      color: #f8f8f8;
      margin-top: 5px;
    }
  }
</style>
