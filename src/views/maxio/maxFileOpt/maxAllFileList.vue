<template>
  <div class="fileList_content max_fileList_content">
    <!-- file_Top -->
    <!-- <nut-sticky class="file_Top" top="0"> -->
    <!-- search_bar -->
    <div class="search_bar" v-if="category !== 1">
      <IconNewFolder
        @click="
          isNewFolder = true;
          renameShow = true;
        "
        v-show="category == 0 && isMobileOrder && isAvailableOrder"
        class="new_folder"
      ></IconNewFolder>
      <nut-searchbar @clear="doSearch('', prefix, true)" placeholder="Search By Name" v-model="keyWord">
        <template #rightin> <Search2 @click="doSearch('', prefix, true)" color="#0a7dd2" /> </template>
      </nut-searchbar>
      <div> </div>
    </div>

    <!-- Edit -->
    <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header']">
      <div style="display: flex">
        <!-- <nut-checkbox v-model="isCheckMode" label="Multiple">Edit</nut-checkbox> -->
        <IconListType
          style="width: 2rem; height: 2rem; vertical-align: middle"
          v-if="cardMode && category != 1"
          @click="cardMode = !cardMode"
        ></IconListType>
        <IconCardType
          style="margin: 0 0.2rem; width: 1.5rem; height: 2rem; vertical-align: middle"
          v-else-if="!cardMode && category != 1"
          @click="cardMode = !cardMode"
        ></IconCardType>
      </div>
    </div>
    <!-- </nut-sticky> -->
    <ErrorPage v-if="isError" @refresh="refresh"></ErrorPage>
    <template v-else-if="category != 1">
      <nut-infinite-loading
        v-if="tableData.length"
        load-more-txt="No more content"
        :class="['file_list', cardMode ? 'card_list' : '']"
        v-model="infinityValue"
        :has-more="!!continuationToken"
        @load-more="loadMore"
      >
        <nut-checkbox-group v-model="checkedItem" ref="group" :max="30">
          <div
            :class="['list_item', checkedItem.indexOf(item.name) > -1 && isCheckMode ? 'row_is_checked' : '']"
            :id="[index == 0 ? 'list_item_1' : '']"
            v-for="(item, index) in tableData"
            :key="index"
            @click="rowClick(item)"
          >
            <div :class="['left_icon_box']">
              <img src="@/assets/svg/home/ok-white.svg" class="ok_icon" v-if="item.checked" alt="" />
              <template v-else>
                <img
                  v-if="item.isDir && item.name.slice(0, item.name.length - 1) == 'pinning'"
                  class="cloud_pin"
                  src="@/assets/cloud_pin.png"
                  alt=""
                />
                <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
                <nut-image
                  v-else-if="item.category != 0 && item.imgUrl"
                  show-loading
                  show-error
                  round
                  radius="5px"
                  :src="item.imgUrl"
                  fit="cover"
                  position="center"
                >
                  <template #loading>
                    <Loading width="16" height="16"></Loading>
                  </template>
                </nut-image>
                <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
                <nut-image
                  v-else-if="item.category == 1 && item.originalSize <= 102400"
                  show-loading
                  show-error
                  round
                  radius="5px"
                  :src="item.imgUrlLarge"
                  fit="cover"
                  position="center"
                >
                  <template #loading>
                    <Loading width="16" height="16"></Loading>
                  </template>
                </nut-image>
                <IconImage1 v-else-if="item.category == 1"></IconImage1>
                <img v-else :src="getFileType(item.name)" alt="" />
                <IconPlay class="play_icon" v-if="item.category == 2"></IconPlay>
              </template>
            </div>
            <div class="name_box">
              <p>{{ item.isDir ? item.name.slice(0, item.name.length - 1) : item.name }}</p>
              <p v-if="!cardMode">{{ item.date || '' }}</p>
            </div>
            <div @click.stop v-if="item.isPin && !cardMode" class="ipfs_info">
              <IconIPFS v-if="item.isPin" color="#496AF2"></IconIPFS>
            </div>
            <div :class="['mask', 'right_radio', isCheckMode ? 'isChecking' : '']" @click.stop>
              <nut-checkbox v-if="isCheckMode" :label="item.name"></nut-checkbox>
              <MoreX v-else-if="!cardMode && !isCheckMode" @click="clickFIleItem(item)" width="40px" height="25px" />
            </div>
          </div>
        </nut-checkbox-group>
      </nut-infinite-loading>
      <nut-empty v-else description="No data" image="error">
        <div style="margin-top: 10px"> </div>
      </nut-empty>
    </template>
    <ImgList
      ref="imgListRef"
      :orderId="route.query.id"
      :mintType="mintType"
      v-model:imgArray="imgArray"
      v-model:isCheckMode="isCheckMode"
      v-model:checkedData="imgCheckedData"
      @cancelSelect="cancelSelect"
      @selectAll="selectAll"
      @rowClick="rowClick"
      v-else
    ></ImgList>

    <!-- checkbox action -->
    <Teleport to="body">
      <nut-tabbar
        v-if="isCheckMode && selectArr.length"
        @tab-switch="tabSwitch"
        :class="['bottom_action', selectArr.length ? 'canAction' : '']"
        bottom
        safe-area-inset-bottom
        placeholder
      >
        <!-- <template v-if="isAvailableOrder"> -->
        <nut-tabbar-item tab-title="Share" :class="[selectArr.length > 1 ? 'is-disable' : '']">
          <template #icon>
            <IconShare :color="selectArr.length == 1 ? '#fff' : '#cccccc6e'"></IconShare>
          </template>
        </nut-tabbar-item>
        <nut-tabbar-item tab-title="Rename" :class="[selectArr.length > 1 || !isMobileOrder ? 'is-disable' : '']">
          <template #icon="props">
            <IconRename :color="selectArr.length == 1 ? '#fff' : '#cccccc6e'"></IconRename>
          </template>
        </nut-tabbar-item>
        <nut-tabbar-item
          :tab-title="selectArr[0] && (!selectArr[0].isPin || !selectArr[0].cid) ? 'pin' : 'unpin'"
          :class="[selectArr.length > 1 ? 'is-disable' : '']"
        >
          <template #icon="props">
            <IconIPFS :color="selectArr.length == 1 ? '#fff' : '#cccccc6e'"></IconIPFS>
          </template>
        </nut-tabbar-item>
        <nut-tabbar-item tab-title="Move" :class="[category == 1 ? 'is-disable' : '']">
          <template #icon="props">
            <IconMove :color="selectArr.length && category != 1 ? '#fff' : '#cccccc6e'"></IconMove>
          </template>
        </nut-tabbar-item>
        <!-- </template> -->

        <nut-tabbar-item tab-title="Download" :class="[selectArr.length < 1 ? 'is-disable' : '']">
          <template #icon="props">
            <IconDownload :color="selectArr.length >= 1 ? '#fff' : '#cccccc6e'"></IconDownload>
          </template>
        </nut-tabbar-item>
        <nut-tabbar-item tab-title="Delete" :class="[selectArr.length < 1 ? 'is-disable' : 'delete-item']">
          <template #icon="props">
            <IconDelete :color="selectArr.length ? '#eebb15' : '#cccccc6e'"></IconDelete>
          </template>
        </nut-tabbar-item>
      </nut-tabbar>
    </Teleport>
    <ActionComponent
      ref="actionRef"
      v-model:fileItemPopupIsShow="fileItemPopupIsShow"
      v-model:fileItemDetailPopupIsShow="fileItemDetailPopupIsShow"
      v-model:renameShow="renameShow"
      v-model:moveShow="moveShow"
      v-model:detailShow="detailShow"
      v-model:imgStartIndex="imgStartIndex"
      v-model:wordVisible="wordVisible"
      :category="category"
      :header="header"
      :prefix="prefix"
      :isAvailableOrder="isAvailableOrder"
      :chooseItem="chooseItem"
      :images="images"
      :imgUrl="imgUrl"
      :isMobileOrder="isMobileOrder"
      :isNewFolder="isNewFolder"
      :selectArr="selectArr"
      :bucketName="bucketName"
      :metadata="metadata"
      :orderInfo="deviceData"
      :isCheckMode="isCheckMode"
      :accessKeyId="accessKeyId"
      :secretAccessKey="secretAccessKey"
      @refresh="refresh"
      @handlerClick="handlerClick"
      @swipeChange="swipeChange"
      @clickFIleItemDetail="clickFIleItemDetail"
      @clickFIleItem="clickFIleItem"
      :deviceData="deviceData"
    ></ActionComponent>
    <uploader
      :isMobileOrder="true"
      :orderInfo="deviceData"
      @getFileList="getFileList"
      @uploadComplete="uploadComplete"
      v-if="deviceData && deviceData.device_id"
    ></uploader>
    <Teleport to="body">
      <nut-dialog
        v-model:visible="showSocketDialog"
        title="File Update"
        :close-on-click-overlay="false"
        :show-cancel="false"
        :show-confirm="false"
        custom-class="CustomName BucketName"
        overlayClass="CustomOverlay"
      >
        <template #header>
          <span class="icon" style="margin-right: 5px">
            <IconBucket color="#000"></IconBucket>
          </span>
          File update Tips
        </template>

        <p class="bucket_tip" style="text-align: left; word-break: break-word"
          >We found that you updated the files in the current directory elsewhere. Do you want to update them simultaneously?.
        </p>
        <template #footer>
          <nut-button type="primary" @click="closeSocketDialog">Confirm</nut-button>
        </template>
      </nut-dialog>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  //   import * as Prox from '@/pb/net_pb.js';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/net_grpc_web_pb.js';
  import ActionComponent from './actionComponent.vue';
  import ImgList from './imgList.vue';
  import useDelete from './useDelete.js';
  import useShare from './useShare.js';
  import uploader from './uploader.vue';

  import IconListType from '~icons/home/listType.svg';
  import IconCardType from '~icons/home/cardType.svg';
  import IconBucket from '~icons/home/bucket.svg';
  import IconPlay from '~icons/home/play.svg';
  import IconDelete from '~icons/home/delete.svg';
  import IconIPFS from '~icons/ant-design/pushpin-outlined.svg';
  import ErrorPage from '@/views/errorPage/index.vue';
  import IconNft from '~icons/home/nft.svg';
  import IconShare from '~icons/home/share.svg';
  import IconRename from '~icons/home/rename.svg';
  import IconMove from '~icons/home/move.svg';
  import IconDownload from '~icons/home/download.svg';
  import { reactive, toRefs, watch, onMounted, onBeforeUnmount } from 'vue';
  import { useRoute } from 'vue-router';
  import { Search2, TriangleUp, Loading, MoreX, Tips } from '@nutui/icons-vue';
  import { showDialog, showToast } from '@nutui/nutui';
  import { transferUTCTime, getfilesize, transferGMTTime } from '@/utils/util';
  import { useUserStore } from '@/store/modules/user';
  import IconImage1 from '~icons/home/mimage.svg';

  const userStore = useUserStore();
  const MaxTokenMap = computed(() => userStore.getMaxTokenMap);

  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  import loadingImg from '@/components/loadingImg/index.vue';
  import moment, { duration } from 'moment';
  import { HmacSHA1, enc } from 'crypto-js';
  import { poolUrl, maxUrl } from '@/setting.js';
  import { get_order_sign, get_vood_token } from '@/api/index';
  import getFileType from '@/utils/getFileType.ts';
  import maxFileInfo from './maxFileInfo.js';

  let server = null;
  const route = useRoute();
  const mintType = ref(route.query.mintType || '0'); //0 not mint,1 nft mint,2 inscript

  const state = reactive({
    cardMode: false,
    actionRef: '',
    imgPreRef: '',
    swipe: '',
    imgArray: [],
    imgStartIndex: 0,
    category: '',
    keyWord: '',
    infinityValue: false,
    hasMore: false,
    showActionPop: false,
    tableData: [],
    chooseItem: {
      imageInfo: {
        camerainfo: {},
        gps: {},
        resolution: {},
      },
    },
    isCheckMode: false,
    renameShow: false,
    newName: '',
    showTypeCheckPop: false,
    tableLoading: false,
    detailShow: false,
    imgCheckedData: [],
    prefix: [],
    movePrefix: [],
    isSearch: false,
    moveShow: false,
    continuationToken: '',
    continuationToken2: '',
    dirData: [],
    isNewFolder: false,
    checkedItem: [],
    longPress: [
      {
        content: 'Long press on a list file to enable multi-select mode',
        target: 'list_item_1',
      },
    ],
    isFirst: false,
    wordVisible: false,
  });
  const imgListRef = ref('');
  const isMobileOrder = computed(() => {
    if (deviceData.value.electronic_type == '0') {
      return true;
    } else {
      return false;
    }
  });
  provide('isMobileOrder', isMobileOrder);

  const fileSocket = ref('');
  const socketDate = ref('');
  const socketToken = ref('');
  const showSocketDialog = ref(false);
  const currentFolder = ref('');
  const isError = ref(false);
  const {
    actionRef,
    imgPreRef,
    imgArray,
    imgStartIndex,
    tableLoading,
    showTypeCheckPop,
    renameShow,
    isCheckMode,
    chooseItem,
    showActionPop,
    tableData,
    infinityValue,
    keyWord,
    category,
    detailShow,
    imgCheckedData,
    prefix,
    movePrefix,
    moveShow,
    continuationToken,
    continuationToken2,
    isNewFolder,
    checkedItem,
    wordVisible,
    cardMode,
  } = toRefs(state);

  let metadata = ref({});

  const deviceData = ref({});
  const bucketName = ref('');
  deviceData.value = JSON.parse(window.localStorage.homeChooseBucket);
  const appType = ref('');
  appType.value = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
  const deviceToken = ref('');
  const { accessKeyId, secretAccessKey, getHttpShare, getSummary } = maxFileInfo();
  const header = computed(() => {
    let headerProx2 = new Prox.default.ProxHeader();
    headerProx2.setPeerid(deviceData.value.peer_id);
    headerProx2.setId(deviceData.value.foggie_id);
    headerProx2.setToken(deviceToken.value);
    headerProx2.setApptype(appType.value);
    // console.log(header.value, 'header.value');
    return headerProx2;
  });
  const { cloudPin } = useShare(deviceData, header, deviceData.value && deviceData.value.deviceType, {});
  provide('getSummary', getSummary);
  const images = computed(() => {
    let arr = [];
    imgArray.value.filter((el) => {
      arr.push(el.src);
    });
    return arr;
  });

  const { deleteItem } = useDelete(
    tableLoading,
    () => {
      checkedItem.value = [];
    },
    deviceData,
    header,
    metadata,
  );

  const selectArr = computed(() => {
    if (category.value == 1) {
      return imgCheckedData.value;
    } else {
      if (detailShow.value) {
        return [chooseItem.value];
      } else {
        if (isCheckMode.value) {
          return tableData.value.filter((el) => {
            return checkedItem.value.indexOf(el.name) > -1;
          });
        } else {
          return [chooseItem.value];
        }
      }
    }
  });

  const loadMore = () => {
    if (moveShow.value) {
      doSearch(continuationToken2.value, movePrefix.value, false);
    } else {
      doSearch(continuationToken.value, prefix.value, false);
    }
  };

  const imgUrl = ref('');

  const cancelSelect = () => {
    // isCheckMode.value = false;

    checkedItem.value = [];
  };
  const selectAll = () => {
    const isAll = selectArr.value.length == tableData.value.length;
    tableData.value.forEach((el) => {
      el.checked = !isAll;
    });
  };
  const rowClick = (row) => {
    if (row.isDir) {
      checkedItem.value = [];
      keyWord.value = '';
      let long_name = prefix.value.length ? prefix.value?.join('/') + '/' + row.name : row.name;
      prefix.value = long_name.split('/').slice(0, -1);
      prefixChange();
    } else {
      chooseItem.value = row;
      const type = row.name.substring(row.name.lastIndexOf('.') + 1);

      if (type == 'pdf') {
        console.log(row.imgUrlLarge);
        wordVisible.value = true;
      } else if (type == 'txt') {
        chooseItem.value.detailType = 'txt';
        detailShow.value = true;
      } else if (['xls', 'xlsx', 'csv'].includes(type)) {
        wordVisible.value = true;
        // router.push({ path: '/filePreview', query: { fileSrc: decodeURIComponent(row.imgUrlLarge), fileType: 'excel' } });
      } else if (['doc', 'docx'].includes(type)) {
        wordVisible.value = true;
        // router.push({ path: '/filePreview', query: { fileSrc: decodeURIComponent(row.imgUrlLarge), fileType: 'docx' } });
        // window.open('https://docs.google.com/viewer?url=' +  encodeURIComponent(row.imgUrlLarge));
        // window.open("https://view.xdocin.com/view?src=" + encodeURIComponent(row.imgUrlLarge) );
        console.log(row.imgUrlLarge);
      } else if (['ppt', 'pptx'].includes(type)) {
        // curSelectSrc.value = row.imgUrlLarge;
        // curSelectType.value = 'ppt';
        // // window.open('https://docs.google.com/viewer?url=' +  encodeURIComponent(row.imgUrlLarge));
        // window.open('https://view.xdocin.com/view?src=' + encodeURIComponent(row.imgUrlLarge));
        // // window.open("https://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(row.imgUrlLarge) );
        // console.log(row.imgUrlLarge);
      } else if (row.imgUrlLarge) {
        imgUrl.value = row.imgUrlLarge;

        imgStartIndex.value = imgArray.value.findIndex((el) => el.name == row.name);
        detailShow.value = true;
        nextTick(() => {
          console.log(imgStartIndex.value, 'imgStartIndex.value', imgArray.value);
          if (imgPreRef.value) {
            imgPreRef.value.swipeTo(imgStartIndex.value);
            console.log(imgPreRef.value.startPosition, 'startPosition.value');
            console.log(imgPreRef.value, 'imgPreRef.value');
          }
        });
      }
    }
  };
  const tabSwitch = (item: { tabTitle: string }, index: any) => {
    handlerClick(item.tabTitle.toLowerCase());
  };

  const $cordovaPlugins = inject('$cordovaPlugins');
  const maxDownload = (checkData) => {
    const objectKey = encodeURIComponent(chooseItem.value.key);
    // let url = `http://154.31.41.36:9900/o/${deviceData.value.peer_id}/${deviceData.value.foggie_id}/${objectKey}`;
    let url = `${maxUrl}/o/${deviceData.value.peer_id}/${deviceData.value.foggie_id}/${objectKey}`;
    let token = MaxTokenMap.value[deviceData.value.device_id];
    token = token.split(' ')[1];
    const headers = {
      Authorization: token,
    };
    fetch(url, { method: 'GET', headers })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          showToast.fail('Download failed, please try again');
          console.error('Error:', response.status, response.statusText);
        }
      })
      .then((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = checkData[0].fullName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        showToast.fail('Download failed, please try again');
        console.error('Network Error:', error);
      });
  };
  const handlerClick = async (type: string) => {
    showActionPop.value = false;
    fileItemPopupIsShow.value = false;
    let checkData = [];
    if (detailShow.value) {
      checkData = [chooseItem.value];
    } else {
      if (isCheckMode.value) {
        checkData = selectArr.value;
      } else {
        checkData = [chooseItem.value];
      }
    }
    console.log(checkData);
    if (type === 'move') {
      movePrefix.value = [];
      moveShow.value = true;
    } else if (type === 'download') {
      const objectKey = encodeURIComponent(checkData[0].fullName);
      //   let url = `http://154.31.41.36:9900/o/${deviceData.value.peer_id}/${deviceData.value.foggie_id}/${objectKey}`;
      let url = `${maxUrl}/o/${deviceData.value.peer_id}/${deviceData.value.foggie_id}/${objectKey}`;
      if (import.meta.env.VITE_BUILD_TYPE == 'ANDROID') {
        if (checkData.length > 1) return false;
        $cordovaPlugins.downloadFileHH(url, checkData[0].fullName, headers);
      } else {
        showToast.text('The download is in progress, please wait patiently');
        let stream;
        let downloadName;
        if (checkData.length == 1 && !checkData[0].isDir) {
          maxDownload(checkData);
        } else {
        }
      }
    } else if (type === 'delete') {
      const onOk = async () => {
        deleteItem(checkData);
        fileItemPopupIsShow.value = false;
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to delete?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class_delete',
        onOk,
      });
    } else if (type === 'rename') {
      if (checkData.length > 1) return false;

      renameShow.value = true;
    } else if (type === 'newFolder') {
    } else if (type === 'share') {
      if (checkData.length > 1) return false;
      actionRef.value.handlerClick('share');
      // await doShare(checkData[0]);
      // cancelSelect();
      // proxy.$notify({
      //   customClass: "notify-success",
      //   message: "Share succeeded",
      //   position: "bottom-left",
      // });
    } else if (type === 'pin') {
      const onOk = async () => {
        await cloudPin(checkData[0], 'ipfs');
        // doSearch('', prefix.value, true);
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to execute IPFS PIN?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        onOk,
      });
    } else if (type === 'un pin') {
      const onOk = async () => {
        const d = await cloudPin(checkData[0], 'ipfs', 'unpin');
        if (d) {
          tableData.value.map((el: { cid: any }) => {
            if (el.cid && el.cid == checkData[0].cid) {
              el.isPin = false;
            }
          });
        }
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to execute IPFS UNPIN?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class_delete',

        onOk,
      });
    }
  };
  const switchType = (type: number) => {
    category.value = type;
    cancelSelect();
    showTypeCheckPop.value = false;
  };

  const uploadComplete = (file: any) => {};

  async function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    console.log('getFileListgetFileList------', deviceData.value);
    if (!deviceData.value.device_id) {
      return;
    }
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let listObject = new Prox.default.ProxListObjectsRequest();
    let requestReq = new Prox.default.ProxListObjectsReq();
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': deviceData.value.peer_id,
    };
    // let header = new Prox.default.ProxHeader();
    // const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    // header.setPeerid(deviceData.value.peer_id);
    // header.setId(deviceData.value.foggie_id);
    // header.setToken(_token);
    // header.setApptype(appType);
    // header.value = header;
    // console.log(header, '---proxxxxhead------', header.value);

    listObject.setPrefix('');
    listObject.setDelimiter('');
    listObject.setEncodingType('');
    listObject.setMaxKeys(20);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('lastmodifiedtime desc');
    listObject.setTags('');
    listObject.setCategory(0);
    listObject.setDate('');
    requestReq.setHeader(header.value);
    requestReq.setRequest(listObject);
    // console.log(requestReq, metadata, header.value, '----listObjects-----');
    server.listObjects(
      requestReq,
      metadata,
      (
        err: any,
        res: {
          getCommonprefixesList: () => any;
          getContentList: () => any[];
          getContinuationtoken: () => any;
          getIstruncated: () => any;
          getMaxkeys: () => any;
          getNextmarker: () => any;
          getPrefix: () => any;
          getPrefixpinsList: () => any;
        },
      ) => {
        if (res) {
          const transferData = {
            commonPrefixes: res.getCommonprefixesList(),
            content: res
              .getContentList()
              .map(
                (el: {
                  getKey: () => any;
                  getEtag: () => any;
                  getLastmodified: () => any;
                  getSize: () => any;
                  getContenttype: () => any;
                  getCid: () => any;
                  getFileid: () => any;
                  getIspin: () => any;
                  getIspincyfs: () => any;
                  getPinexp: () => any;
                  getCyfsexp: () => any;
                  getOod: () => any;
                  getIspersistent: () => any;
                  getCategory: () => any;
                  getTags: () => any;
                  getImages: () => any;
                  getNftinfosList: () => any;
                  getThumb: () => any;
                }) => {
                  const imageObj = el.getImages().toObject();
                  const imageInfo = {};
                  let isShowDetail = false;
                  if (imageObj.camerainfo?.make) {
                    isShowDetail = true;
                    imageInfo.aperture = imageObj.addition.aperture; //光圈
                    imageInfo.datetime = moment(imageObj.addition?.datetime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); //拍摄时间
                    imageInfo.exposuretime = imageObj.addition.exposuretime; //ev曝光量
                    imageInfo.exptime = imageObj.addition.exptime; //曝光时间
                    imageInfo.orientation = imageObj.addition.orientation; //方向
                    imageInfo.focallength = imageObj.addition.focallength; //焦距
                    imageInfo.Flash = imageObj.addition.Flash || false; //是否使用闪光灯
                    imageInfo.software = imageObj.addition.software; // 使用软件
                    imageInfo.iso = imageObj.addition.iso.charCodeAt(0);
                    imageInfo.camerainfo = imageObj.camerainfo; //手机厂商及其机型
                    imageInfo.gps = imageObj.gps; //经纬度
                    imageInfo.resolution = imageObj.resolution; //像素
                  }
                  return {
                    key: el.getKey(),
                    etag: el.getEtag(),
                    lastModified: el.getLastmodified(),
                    size: el.getSize(),
                    contentType: el.getContenttype(),
                    cid: el.getCid(),
                    fileId: el.getFileid(),
                    isPin: el.getIspin(),
                    isPinCyfs: el.getIspincyfs(),
                    pinExp: el.getPinexp(),
                    CyfsExp: el.getCyfsexp(),
                    OOD: el.getOod(),
                    isPersistent: el.getIspersistent(),
                    category: el.getCategory(),
                    tags: el.getTags(),
                    imageInfo: imageInfo,
                    isShowDetail,
                    nftInfoList: el.getNftinfosList(),
                    thumb: el.getThumb(),
                  };
                },
              ),
            continuationToken: res.getContinuationtoken(),
            isTruncated: res.getIstruncated(),
            maxKeys: res.getMaxkeys(),
            nextMarker: res.getNextmarker(),
            prefix: res.getPrefix(),
            prefixpins: res.getPrefixpinsList(),
          };
          isError.value = false;
          //   console.log(transferData, 'transferDatatransferDatatransferData');
          initRemoteData(transferData, reset, 0);
          showToast.hide('file_list');
        } else if (err) {
          isError.value = true;
          showToast.hide('file_list');
          console.log('err----listlistObjects', err);
        }
      },
    );
  }
  const initRemoteData = async (
    data: {
      commonPrefixes?: any;
      content: any;
      continuationToken?: any;
      isTruncated?: any;
      maxKeys?: any;
      nextMarker?: any;
      prefix?: any;
      prefixpins?: any;
      err?: any;
    },
    reset = false,
    category: number,
  ) => {
    if (!data) {
      tableLoading.value = false;
      showToast.hide('file_list');
      return;
    }
    console.log('data', data);
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }
    let dir = prefix.value.join('/');
    if (reset) {
      if (moveShow.value) {
        dirData.value = [];
      } else {
        cancelSelect();
        tableData.value = [];
        imgArray.value = [];
      }
    }
    // if (!accessKeyId.value) {
    //   await getOrderInfo();
    // }
    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = data.commonPrefixes[i];

      let cur_cid = '';
      let isPin = false;
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.array[0] === name && data.prefixpins[i]?.array[1]) {
          cur_cid = data.prefixpins[i].array[1];
          isPin = data.prefixpins[i].array[2];
        }
      }

      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 0,
        fileType: 1,

        fullName: data.commonPrefixes[i],
        key: data.commonPrefixes[i],
        idList: [
          {
            name: 'IPFS',
            code: cur_cid,
          },
          {
            name: 'CYFS',
            code: '',
          },
        ],
        date: '-',
        size: '',
        status: '-',
        type: 'application/x-directory',
        file_id: '',
        pubkey: '',
        cid: cur_cid,
        imgUrl: '',
        imgUrlLarge: '',
        share: {},
        isSystemImg: false,
        canShare: false,
        isPin,
      };
      if (moveShow.value) {
        dirData.value.push(item);
      } else {
        tableData.value.push(item);
      }
    }
    currentFolder.value = data.prefix;
    window.sessionStorage.setItem('currentFolder', currentFolder.value);
    // console.log(data.prefix, 'data.prefix', currentFolder.value, 'currentFolder.value');
    for (let j = 0; j < data?.content?.length; j++) {
      let date = transferUTCTime(data.content[j].lastModified);
      let isDir = data?.content[j].contentType == 'application/x-directory' ? true : false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);

      // imgHttpLink, isSystemImg, imgHttpLarge

      // let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      const imgData = await handleImg(data.content[j], type, isDir);
      //   console.log('----------contentType', data?.content[j].contentType);
      const url = imgData.imgHttpLink;
      const isSystemImg = imgData.isSystemImg;
      const url_large = imgData.imgHttpLarge;
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = data.content[j].key;

      if (data.prefix) {
        name = name.split(decodeURIComponent(data.prefix))[1];
      }
      if (name.indexOf('/') > 0) {
        if (isDir) {
          name = name.split('/')[name.split('/').length - 2] + '/';
        } else {
          name = name.split('/')[name.split('/').length - 1];
        }
      }
      let isPersistent = data.content[j].isPersistent;

      //   console.log(data.content[j], 'data.content[j]1');

      let item = {
        imageInfo: data.content[j].imageInfo,
        isShowDetail: data.content[j].isShowDetail,
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        fileType: 2,
        fullName: data.content[j].key,
        key: data.content[j].key,
        idList: [
          {
            name: 'IPFS',
            code: data.content[j].isPin ? cid : '',
          },
          {
            name: 'CYFS',
            code: data.content[j].isPinCyfs ? file_id : '',
          },
        ],
        date,
        size: getfilesize(data.content[j].size),
        originalSize: data.content[j].size,
        status: cid || file_id ? 'Published' : '-',
        type: data.content[j].contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: data.content[j].thumb && data.content[j].thumb != 'b' ? url : '',
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
        isPin: data.content[j].isPin,
        isPinCyfs: data.content[j].isPinCyfs,
        nftInfoList: data.content[j].nftInfoList,
        thumb: data.content[j].thumb,
      };
      //   console.log(item, 'data.content[j]');

      if (moveShow.value) {
      } else {
        tableData.value.push(item);
        if (item.category == 1) {
          if (item.originalSize > 1024 * 1024 * 20) {
            item.src = item.imgUrl;
          } else {
            item.src = item.imgUrlLarge;
          }
          imgArray.value.push(item);
        }
      }
    }
    if (data.isTruncated) {
      if (moveShow.value) {
        continuationToken2.value = data.continuationToken;
      } else {
        continuationToken.value = data.continuationToken;
      }
    } else {
      continuationToken.value = '';
    }
    tableLoading.value = false;
    showToast.hide('file_list');
  };
  const handleImg = (item: { cid: any; key: any }, type: string, isDir: boolean) => {
    let imgHttpLink = '';
    let imgHttpLarge = '';
    type = type.toLowerCase();
    let isSystemImg = false;
    if (
      type === 'png' ||
      type === 'bmp' ||
      type === 'gif' ||
      type === 'jpeg' ||
      type === 'jpg' ||
      type === 'svg' ||
      type === 'ico' ||
      type === 'webp'
    ) {
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value);
      imgHttpLink = getHttpShare(
        accessKeyId.value,
        secretAccessKey.value,
        item.key,
        type === 'ico' || type === 'svg' ? false : true,
        deviceData.value,
      );
    } else if (type === 'mp3') {
      type = 'audio';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value) + '&inline=true';
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm' || type == 'mov') {
      type = 'video';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value) + '&inline=true';
    } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'csv'].includes(type)) {
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value);
    } else {
      isSystemImg = true;
    }
    if (isDir) {
      isSystemImg = true;
    }
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  provide('handleImg', handleImg);

  function doSearch(scroll: string = '', prefixArg: any[] = [], reset = false) {
    console.log('----doSearch------');
    // if (tableLoading.value) return false;
    if (category.value == 1 && !moveShow.value && !renameShow.value) {
      imgListRef.value.refresh();
      return;
    }
    if (keyWord.value == '') {
      getFileList(scroll, prefixArg, reset);
    } else {
      showToast.loading('Loading', {
        cover: true,
        coverColor: 'rgba(0,0,0,0.45)',
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
        // duration: 500000000,
      });
      tableLoading.value = true;
      let type = deviceData.value.device_type == 'space' || deviceData.value.device_type == 3 ? 'space' : 'foggie';
      // let ip = `https://${bucketName.value}.${poolUrl}:7007`;
      // server = new grpcService.default.ServiceClient(ip, null, null);
      let server = new grpcService.default.APIClient(maxUrl, null, null);
      let ProxFindRequest = new Prox.default.ProxFindRequest();
      console.log(header.value, 'header.valueheader.value');

      ProxFindRequest.setHeader(header.value);
      ProxFindRequest.setCid('');
      ProxFindRequest.setKey(encodeURIComponent(keyWord.value));
      ProxFindRequest.setFileid('');
      let list_prefix: string;
      list_prefix = '';

      // let header = new Prox.default.ProxHeader();
      // const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      // header.setPeerid(deviceData.value.peer_id);
      // header.setId(deviceData.value.foggie_id);
      // header.setToken(MaxTokenMap);
      // header.setApptype(appType);
      // header.value = header;
      //   if (prefixArg?.length) {
      //     list_prefix = prefixArg.join('/');
      //     if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
      //       list_prefix = list_prefix + '/';
      //     }
      //   }
      ProxFindRequest.setHeader(header.value);
      ProxFindRequest.setPrefix(list_prefix);
      server.findObjects(ProxFindRequest, metadata.value, (err: any, res: { getContentsList: () => any[] }) => {
        infinityValue.value = false;
        if (res) {
          const transferData = res
            .getContentsList()
            .map(
              (el: {
                getKey: () => any;
                getEtag: () => any;
                getLastmodified: () => any;
                getSize: () => any;
                getContenttype: () => any;
                getCid: () => any;
                getFileid: () => any;
                getIspin: () => any;
                getIspincyfs: () => any;
                getPinexp: () => any;
                getCyfsexp: () => any;
                getOod: () => any;
                getIspersistent: () => any;
                getCategory: () => any;
                getTags: () => any;
                getImages: () => any;
                getNftinfosList: () => any;
                getThumb: () => any;
              }) => {
                return {
                  key: el.getKey(),
                  etag: el.getEtag(),
                  lastModified: el.getLastmodified(),
                  size: el.getSize(),
                  contentType: el.getContenttype(),
                  cid: el.getCid(),
                  fileId: el.getFileid(),
                  isPin: el.getIspin(),
                  isPinCyfs: el.getIspincyfs(),
                  pinExp: el.getPinexp(),
                  CyfsExp: el.getCyfsexp(),
                  OOD: el.getOod(),
                  isPersistent: el.getIspersistent(),
                  category: el.getCategory(),
                  tags: el.getTags(),
                  nftInfoList: el.getNftinfosList(),
                  thumb: el.getThumb(),
                  // imageInfo,
                  // isShowDetail,
                };
              },
            );
          isError.value = false;
          console.log(transferData, 'search------transferDatatransferData');
          initRemoteData({ content: transferData }, true, category.value);
        } else {
          isError.value = true;
        }
      });
    }
  }
  const getSignHeaders = (objectKey: string) => {
    const date = new Date().toUTCString();
    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';
    const canonicalizedResource = `/${bucketName.value}/o/${objectKey}`;
    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;

    let hmac = HmacSHA1(signature, secretAccessKey.value);
    const signatureBase64 = enc.Base64.stringify(hmac);

    const headers = {
      'x-amz-date': date,
      Authorization: `AWS ${accessKeyId.value}:${signatureBase64}`,
    };
    return headers;
  };
  const prefixChange = () => {
    cancelSelect();
    doSearch('', prefix.value, true);
  };

  const initWebSocket = async () => {
    let param = {
      order_uuid: route?.query?.uuid,
    };
    const signData = await get_order_sign(param);
    socketDate.value = signData?.result?.data?.timestamp;
    socketToken.value = signData?.result?.data?.sign;
    console.log('initWebSocket-----------');
    const url = `wss://${bucketName.value}.${poolUrl}:6008/ws`;
    fileSocket.value = new WebSocket(url);
    fileSocket.value.onopen = () => {
      const authMessage = {
        action: 'AUTH',
        userID: deviceData.value.foggie_id,
        token: socketToken.value,
        date: socketDate.value,
      };
      fileSocket.value.send(JSON.stringify(authMessage));
    };

    fileSocket.value.onmessage = (event: { data: string }) => {
      const message = JSON.parse(event.data);
      const currentFolderStr = window.sessionStorage.getItem('currentFolder') || '';
      console.log('Received message from server:', message, currentFolderStr);
      const uploadFileName = window.sessionStorage.getItem('uploadFileName');
      let fileInfo = message.fileInfo;
      let dirArr = fileInfo.keys;
      const updateBy = fileInfo.updateBy;
      let dirFile = '';
      let dirFileName = '';
      if (dirArr && dirArr.length > 0) {
        let index = dirArr[0].lastIndexOf('/');
        if (index > -1) {
          dirFile = dirArr[0].substring(0, index + 1);
          dirFileName = dirArr[0].substring(index + 1, dirArr[0].length);
        } else {
          dirFile = '';
          dirFileName = dirArr[0];
        }
      }

      console.log(
        '888888',
        dirArr,
        dirFile,
        currentFolderStr,
        dirFile === decodeURIComponent(currentFolderStr),
        dirFileName !== uploadFileName,
      );
      if (dirFile === decodeURIComponent(currentFolderStr) || dirFile.charAt(dirFile.length - 1) === '/') {
        if (detailShow.value) {
          setTimeout(() => {
            initWebSocket();
          }, 3000);
        } else {
          doSocketFn(message);
        }
      }
    };

    fileSocket.value.onclose = (event: any) => {
      console.log('WebSocket connection closed:', event, fileSocket.value);
      if (fileSocket.value) {
        console.log('WebSocket connection again:');
        initPage();
      }
    };
    fileSocket.value.onerror = (event: any) => {
      console.error('WebSocket connection error:', event);
    };
  };
  function swipeChange(index) {
    imgStartIndex.value = index;
    chooseItem.value = imgArray.value[index];
    if (chooseItem.value.originalSize > 1024 * 1024 * 20) {
      showToast.text('The file is too large, please download and view');
    }
  }
  const doSocketFn = async (msg: { action: any; fileInfo: any }) => {
    console.log('doSocketFn', msg, tableData.value);
    const action = msg.action;
    const fileInfo = msg.fileInfo;
    const keys = fileInfo.keys;
    const bucket = fileInfo.bucket;
    const cid = fileInfo.cid;
    if (!action || !keys || keys.length === 0) {
      refresh();
      return;
    }

    if (action === 'FILE_ADD') {
      let index = keys[0].lastIndexOf('/');
      let name = keys[0].substring(index + 1);
      const date = transferGMTTime(fileInfo.lastModified * 1000);
      const _cid = cid && cid[0] ? cid[0] : '';
      const target = tableData.value.find((el: { fullName: any }) => el.fullName === keys[0]);
      if (!target) {
        const type = keys[0].substring(keys[0].lastIndexOf('.') + 1).toLowerCase();
        const data = {
          cid: _cid,
          key: keys[0],
        };
        const imgData = await handleImg(data, type, false);
        let category = 0;
        if (
          type === 'png' ||
          type === 'bmp' ||
          type === 'gif' ||
          type === 'jpeg' ||
          type === 'jpg' ||
          type === 'svg' ||
          type === 'heif' ||
          type === 'webp' ||
          type === 'ico'
        ) {
          category = 1;
        } else if (type === 'mp4' || type == 'ogg' || type == 'webm' || type == 'mov') {
          category = 2;
        } else if (type === 'mp3') {
          category = 3;
        } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'csv'].includes(type)) {
          category = 4;
        }
        const url = imgData.imgHttpLink;
        const isSystemImg = imgData.isSystemImg;
        const url_large = imgData.imgHttpLarge;

        console.log('FILE_ADD-----------', keys, name, date, url, url_large, isSystemImg);

        let imageInfo = {
          aperture: '',
          datetime: '', //拍摄时间
          exposuretime: '', //ev曝光量
          exptime: '', //曝光时间
          orientation: '', //方向
          focallength: '', //焦距
          Flash: false, //是否使用闪光灯
          software: '', // 使用软件
          iso: '', //iso
          camerainfo: '', //手机厂商及其机型
          gps: '', //经纬度
          resolution: '', //像素
        };
        let isShowDetail = false;

        if (fileInfo.image_infos && Object.keys(fileInfo.image_infos).length > 0) {
          let key = Object.keys(fileInfo.image_infos)[0];
          let imageObj = fileInfo.image_infos[key];
          if (imageObj && imageObj.addition) {
            isShowDetail = true;
            imageInfo.aperture = imageObj.addition.aperture;
            imageInfo.datetime = moment(imageObj.addition.date_time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); //拍摄时间
            imageInfo.exposuretime = imageObj.addition?.exposure_time; //ev曝光量
            imageInfo.exptime = imageObj.addition?.exp_time; //曝光时间
            imageInfo.orientation = imageObj.addition?.orientation; //方向
            imageInfo.focallength = imageObj.addition?.focal_length; //焦距
            imageInfo.Flash = imageObj.addition?.flash || false; //是否使用闪光灯
            imageInfo.software = imageObj.addition?.software; // 使用软件
            imageInfo.iso = imageObj.addition?.iso.charCodeAt(0);
            imageInfo.camerainfo = imageObj?.camera_info; //手机厂商及其机型
            imageInfo.gps = imageObj?.gps; //经纬度
            imageInfo.resolution = imageObj?.resolution; //像素
          }
          console.log('FILE_ADD-----------tableData', imageInfo);
        }

        let item = {
          isDir: false,
          checked: false,
          name,
          category,
          fileType: 2,
          fullName: keys[0],
          key: keys[0],
          idList: [
            {
              name: 'IPFS',
              code: '',
            },
            {
              name: 'CYFS',
              code: '',
            },
          ],
          date,
          pubkey: _cid,
          cid: _cid,
          imgUrl: url,
          imgUrlLarge: url_large,
          share: {},
          isSystemImg,
          canShare: _cid ? true : false,
          isPin: false,
          isPinCyfs: false,
          type,
          isShowDetail,
          imageInfo,
        };
        tableData.value.push(item);
        if (item.category == 1) {
          item.src = item.imgUrlLarge;
          imgArray.value.push(item);
        }
      }
    } else if (action === 'FILE_PIN') {
      const curName = fileInfo.keys[0];
      const curDir = window.sessionStorage.getItem('currentFolder');
      tableData.value.map((el: { cid: any; isPin: boolean; name: string }) => {
        if (el.cid === cid[0]) {
          el.isPin = true;
        } else if (
          curName.charAt(curName.length - 1) === '/' &&
          decodeURIComponent(curName) === decodeURIComponent(`${curDir}${el.name}`)
        ) {
          el.isPin = true;
          if (!el.cid && cid[0]) {
            el.cid = cid[0];
          }
        }
      });
    } else if (action === 'FILE_CHANGE') {
    } else if (action === 'FILE_DELETE') {
      console.log('FILE_DELETE', keys);
      tableData.value = tableData.value.filter((item: { key: any }) => keys.indexOf(item.key) === -1);
      imgArray.value = imgArray.value.filter((item: { key: any }) => keys.indexOf(item.key) === -1);
      cancelSelect();
    } else if (action === 'FILE_PINNING') {
    }
  };

  const fileItemPopupIsShow = ref(false);
  function clickFIleItem(params) {
    chooseItem.value = params;
    fileItemPopupIsShow.value = true;
  }

  const fileItemDetailPopupIsShow = ref(false); // 文件详情展示 例如 光圈 曝光时间等

  function clickFIleItemDetail(params) {
    console.log(params);
    fileItemDetailPopupIsShow.value = true;
  }

  watch(
    detailShow,
    (val) => {
      if (val) {
        nextTick(() => {
          if (chooseItem.value.originalSize > 1024 * 1024 * 20 && chooseItem.value.category == 1) {
            showToast.text('The file is too large, please download and view');
          }
        });
      }
    },
    { deep: true },
  );

  watch(
    category,
    async (val, old) => {
      cancelSelect();
      if (old == 1) {
        imgListRef?.value?.resetChecked();
        imgCheckedData.value = [];
      }
      if (val == 1) {
      } else {
        console.log(category.value, 'categorycategorycategory');
        doSearch('', prefix.value, true);
      }
    },
    { deep: true },
  );
  onMounted(async () => {
    let token = await get_vood_token({ vood_id: deviceData.value.device_id });
    userStore.setMaxTokenMap({
      id: deviceData.value.device_id,
      token: token.data.token_type + ' ' + token.data.access_token,
    });
    console.log(token.data.access_token, '0-------token.data.access_token');
    deviceToken.value = token.data.access_token;
    initPage();
  });
  console.log(header.value, 'header.value');

  onBeforeUnmount(() => {
    if (fileSocket.value) {
      fileSocket.value.close();
      fileSocket.value = null;
    }
  });

  const initPage = async () => {
    prefix.value = [];
    let category1 = 0;
    switchType(category1);
  };
  const refresh = async () => {
    cancelSelect();
    // await getOrderInfo();
    doSearch('', prefix.value, true);
  };
</script>

<style lang="scss">
  @import url('./style/list.scss');
</style>
<style scoped lang="scss">
  .bottom_action {
    .nut-tabbar-item {
      background: #1a459d !important;
      color: #fff;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .nut-tabbar-item_icon-box_nav-word {
      color: #fff;
    }
    // &.canAction {
    //   .nut-tabbar {
    //     background: #1a459d !important;
    //   }
    //   .nut-tabbar-item_icon-box_nav-word,
    //   .nut-tabbar-item,
    //   .nut-tabbar-item__icon--unactive {
    //     color: #fff !important;
    //   }
    //   .nut-tabbar-item_icon-box_nav-word {
    //     color: #fff;
    //   }
    // }
    .is-disable {
      color: #cccccc6e;
    }
    .delete-item {
      color: #eebb15;
      .nut-tabbar-item_icon-box_nav-word {
        color: #eebb15;
      }
    }
  }
</style>
