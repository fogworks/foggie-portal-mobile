<template>
  <div>
    <div class="detail_box" v-if="!loadingAnmation">
      <ErrorPage v-if="isError" @refresh="refresh"></ErrorPage>
      <template v-else-if="tableData.length">
        <div class="file_list file_list_img" v-if="imgData.length">
          <div @click="handleRow(item)" class="list_item" v-show="index < 10" v-for="(item, index) in imgData" :key="index">
            <nut-image
              v-if="item.imgUrl || item.originalSize <= 102400"
              show-loading
              show-error
              round
              radius="5px"
              :src="item.imgUrl || item.imgUrlLarge"
              fit="cover"
              position="center"
            >
              <template #loading>
                <Loading width="16" height="16"></Loading>
              </template>
            </nut-image>
            <IconImage v-else></IconImage>
          </div>
        </div>
        <div class="file_list" v-if="otherData.length">
          <div @click="handleRow(item)" class="list_item" v-show="index < 4" v-for="(item, index) in otherData" :key="index">
            <div :class="['left_icon_box']">
              <img v-if="item.isDir && item.name == 'pinning'" class="cloud_pin" src="@/assets/cloud_pin.png" alt="" />
              <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
              <nut-image
                v-else-if="item.category != 0 && item.category != 4 && item.imgUrl"
                show-loading
                show-error
                round
                radius="5px"
                :src="item.imgUrl"
                fit="cover"
                position="center"
                style="width: 100%; height: 100%"
              >
                <template #loading>
                  <Loading width="16" height="16"></Loading>
                </template>
              </nut-image>
              <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
              <img v-else :src="getFileType(item.name)" alt="" />
              <IconPlay class="play_icon" v-if="item.category == 2"></IconPlay>
            </div>
            <div class="name_box">
              <p>{{ item.name }}</p>
              <p>{{ item.date || '' }}</p>
            </div>
            <div class="right_radio" @click.stop>
              <MoreX @click="clickFIleItem(item)" width="40px" height="25px" />
            </div>
          </div>
        </div>
      </template>
      <nut-empty
        v-else
        style="padding: 10px 0 50px 0; border: 1px dashed #fff; border-radius: 10px"
        description="No data,Go ahead and upload it."
        image="error"
      >
      </nut-empty>

      <actionComponent
        :CurrentToken="CurrentToken"
        v-model:fileItemPopupIsShow="fileItemPopupIsShow"
        v-model:fileItemDetailPopupIsShow="fileItemDetailPopupIsShow"
        v-model:renameShow="renameShow"
        v-model:moveShow="moveShow"
        v-model:detailShow="detailShow"
        v-model:imgStartIndex="imgStartIndex"
        v-model:wordVisible="wordVisible"
        :orderInfo="deviceData"
        :category="0"
        :header="header"
        :prefix="[]"
        :isAvailableOrder="isAvailableOrder"
        :chooseItem="detailRow.value"
        :images="images"
        :imgUrl="imgUrl"
        :isMobileOrder="isMobileOrder"
        :isNewFolder="false"
        :selectArr="selectArr"
        :bucketName="bucketName"
        :metadata="metadata"
        :deviceData="deviceData"
        :isCheckMode="false"
        :accessKeyId="accessKeyId"
        :secretAccessKey="secretAccessKey"
        @refresh="refresh"
        @handlerClick="handlerClick"
        @swipeChange="swipeChange"
        @clickFIleItemDetail="clickFIleItemDetail"
        @clickFIleItem="clickFIleItem"
      ></actionComponent>
    </div>
    <div class="skeleton-picture" v-if="loadingAnmation" style="width: 100%">
      <nut-skeleton width="250px" height="15px" animated avatar avatar-size="60px" row="3" style="margin: 20px 0px; width: 100%">
      </nut-skeleton>
      <nut-skeleton width="250px" height="15px" animated avatar avatar-size="60px" row="3" style="margin: 20px 0px; width: 100%">
      </nut-skeleton>
      <nut-skeleton width="250px" height="15px" animated avatar avatar-size="60px" row="3" style="margin: 20px 0px; width: 100%">
      </nut-skeleton>
    </div>
    <uploader
      :isMobileOrder="true"
      :orderInfo="deviceData"
      @getFileList="getFileList"
      @uploadComplete="uploadComplete"
      v-if="deviceData && deviceData.device_id"
    ></uploader>
  </div>
</template>

<script setup lang="ts">
  import actionComponent from './maxFileOpt/actionComponent.vue';
  import useDelete from './maxFileOpt/useDelete.js';
  import maxFileInfo from './maxFileOpt/maxFileInfo.js';
  //   import useOrderInfo from '@/views/list/details/useOrderInfo.js';

  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  import { ref, onMounted, watch, createVNode, provide } from 'vue';
  import getFileType from '@/utils/getFileType.ts';
  import IconImage from '~icons/home/image.svg';
  import IconPlay from '~icons/home/play.svg';
  import { s3Url, poolUrl, maxUrl } from '@/setting.js';
  import { MoreX, HeartFill, Success, MaskClose, Clock, Order, Refresh, TriangleUp, TriangleDown } from '@nutui/icons-vue';
  //   import * as Prox from '@/pb/prox_pb.js';
  //   import * as grpcService from '@/pb/net_grpc_web_pb.js';

  import * as Prox from '@/pb/net_pb.js';
  import * as grpcService from '@/pb/net_grpc_web_pb.js';

  import { showDialog, showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  import { HmacSHA1, enc } from 'crypto-js';
  import { useRouter } from 'vue-router';
  import { transferUTCTime, getfilesize, transferGMTTime } from '@/utils/util';
  import { valid_upload, get_order_sign } from '@/api/index';
  import uploader from '@/views/maxio/maxFileOpt/uploader.vue';
  import useShare from './maxFileOpt/useShare';

  import '@nutui/nutui/dist/packages/toast/style';
  import moment from 'moment';
  const props = defineProps({
    cloudQuery: {
      type: Object,
      default: () => {},
    },
    deviceData: {
      type: Object,
      default: () => {},
    },
    CurrentToken: {
      type: String,
      default: '',
    },
  });
  const { cloudQuery, deviceData, CurrentToken } = toRefs(props);
  const { doShare, cloudPin } = useShare(deviceData, {}, deviceData.value.deviceType, {});
  const { accessKeyId, secretAccessKey, getHttpShare, initSk, getSummary } = maxFileInfo();
  const isError = ref(false);
  const router = useRouter();
  const imgPreRef = ref('');
  const isMobileOrder = ref(false);
  const moveShow = ref<boolean>(false);
  const tableData = ref<array>([]);
  const imgData = ref([]);
  const otherData = ref([]);
  const tableLoading = ref<boolean>(false);
  const isDisabled = ref<boolean>(false);

  const order_id = ref<any>('');
  const fileItemPopupIsShow = ref(false);
  const fileItemDetailPopupIsShow = ref(false);
  const renameShow = ref(false);
  const detailShow = ref(false);
  const imgStartIndex = ref(false);
  const wordVisible = ref(false);

  const fileSocket = ref('');
  const socketDate = ref('');
  const socketToken = ref('');
  const isMaxPng = ref(false);
  const isMaxPngUrl = ref('');
  const images = computed(() => {
    let arr = [];
    imgData.value.filter((el) => {
      if (arr.length < 20) {
        if (isMaxPng.value) {
          if (isMaxPngUrl.value === el.imgUrlLarge) {
            arr.push(el.imgUrlLarge);
          } else {
            arr.push(el.imgUrl);
          }
        } else {
          arr.push(el.imgUrl);
        }
      }
    });
    return arr;
  });
  const appType = ref('');
  appType.value = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
  const header = computed(() => {
    let headerProx2 = new Prox.default.Header();
    headerProx2.setPeerid(deviceData.value.peer_id);
    headerProx2.setId(deviceData.value.foggie_id);
    headerProx2.setToken(CurrentToken.value);
    headerProx2.setApptype(appType.value);
    return headerProx2;
  });
  const selectArr = computed(() => {
    return [detailRow.value];
  });
  const { deleteItem } = useDelete(
    tableLoading,
    () => {
      refresh();
    },
    deviceData,
    // header,
  );
  function swipeChange(index) {
    imgStartIndex.value = index;
    detailRow.value = imgData.value[index];
    if (detailRow.value.originalSize > 1024 * 1024 * 20) {
      showToast.text('The file is too large, please download and view');
    }
  }
  function clickFIleItem(params) {
    detailRow.value = params;
    // console.log(params, 'clickFIleItemclickFIleItemparams', detailRow.value, detailRow.value.originalSize);
    fileItemPopupIsShow.value = true;
    if (detailRow.value.originalSize > 1024 * 1024 * 200 && detailRow.value.category == 1) {
      showToast.text('The file is too large, please download and view');
    }
  }
  function clickFIleItemDetail(params) {
    // console.log('list00-----clickFIleItemDetail', params);
    fileItemDetailPopupIsShow.value = true;
  }
  order_id.value = cloudQuery.value.id;
  let merkleTimeOut;

  const imgUrl = ref('');
  const detailRow = reactive({ value: {} });

  const handleRow = (row) => {
    // console.log('handleRow-------', row, row.name.substring(row.name.lastIndexOf('.') + 1));
    detailRow.value = row;
    const type = row.name.substring(row.name.lastIndexOf('.') + 1);

    if (type == 'pdf') {
      wordVisible.value = true;
    } else if (type == 'txt') {
      detailRow.value.detailType = 'txt';
      detailShow.value = true;
      fetch(row.imgUrlLarge)
        .then((response) => response.text())
        .then((text) => {
          document.getElementById('txtContainer').textContent = text;
        });
    } else if (['xls', 'xlsx', 'csv'].includes(type)) {
      wordVisible.value = true;
    } else if (['doc', 'docx'].includes(type)) {
      wordVisible.value = true;
      //   console.log(row.imgUrlLarge);
    } else if (['ppt', 'pptx'].includes(type)) {
    } else if (row.imgUrlLarge) {
      imgUrl.value = row.imgUrlLarge;
      imgStartIndex.value = imgData.value.findIndex((el) => el.name == row.name);
      detailShow.value = true;
      nextTick(() => {
        if (imgPreRef.value) {
          imgPreRef.value.swipeTo(imgStartIndex.value);
        }
      });
    } else {
      let prefix = detailRow.value.fullName.split('/').slice(0, -1);
      router.push({
        path: '/maxFile',
        query: { ...cloudQuery.value, category: 0, prefix: prefix.join('/') },
      });
    }
  };
  const $cordovaPlugins = inject('$cordovaPlugins');
  const handlerClick = async (type: string) => {
    const checkData = JSON.parse(JSON.stringify(detailRow.value));
    if (type === 'download') {
      const objectKey = encodeURIComponent(checkData.fullName);
      const headers = getSignHeaders(objectKey);
      //   console.log('headers:', headers);
      const url = `https://${bucketName.value}.${poolUrl}:6008/o/${objectKey}`;
      if (import.meta.env.VITE_BUILD_TYPE == 'ANDROID') {
        $cordovaPlugins.downloadFileHH(url, checkData.fullName, headers);
      } else {
        showToast.text('The download is in progress, please wait patiently');
        fetch(url, { method: 'GET', headers })
          .then((response) => {
            if (response.ok) {
              // 创建一个 Blob 对象，并将响应数据写入其中
              console.log('Success', response);
              return response.blob();
            } else {
              showToast.fail('Download failed, please try again');
              // 处理错误响应
              console.error('Error:', response.status, response.statusText);
            }
          })
          .then((blob) => {
            // console.log(blob, 'blob');
            console.log('Blob type:', blob.type);

            // 创建一个 <a> 元素，并设置其 href 属性为 Blob URL
            const a = document.createElement('a');
            console.log("document.createElement('a')");

            a.href = URL.createObjectURL(blob);
            console.log(a.href);

            a.download = checkData.fullName;
            console.log(a.download);

            // 将 <a> 元素添加到文档中，并模拟点击
            document.body.appendChild(a);
            console.log('添加');
            a.click();
            console.log('点击');

            document.body.removeChild(a);
          })
          .catch((error) => {
            showToast.fail('Download failed, please try again');
            // 处理网络错误
            console.error('Network Error:', error);
          });
      }
    } else if (type === 'share') {
      await doShare(checkData);
    } else if (type === 'move') {
      moveShow.value = true;
    } else if (type == 'rename') {
      renameShow.value = true;
    } else if (type === 'delete') {
      const onOk = async () => {
        deleteItem([checkData]);
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
    } else if (type == 'nft') {
    } else if (type === 'pin') {
      const onOk = async () => {
        await cloudPin(checkData, 'ipfs');
        detailShow.value = false;
        getFileList();
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
        const d = await cloudPin(checkData, 'ipfs', 'unpin');
        if (d) {
          imgData.value.map((el: { cid: any }) => {
            if (el.cid && el.cid == checkData.cid) {
              el.isPin = false;
            }
          });
          otherData.value.map((el: { cid: any }) => {
            if (el.cid && el.cid == checkData.cid) {
              el.isPin = false;
            }
          });
          detailRow.value.isPin = false;
        }
        // doSearch('', prefix.value, true);
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to execute IPFS UNPIN?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class_delete',

        onOk,
      });
    } else if (type === 'maxPng') {
      isMaxPngUrl.value = detailRow.value.imgUrlLarge;
      isMaxPng.value = true;
    }
  };

  async function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    if (!deviceData.value.device_id) {
      return;
    }
    let _token = CurrentToken.value;
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    let header = new Prox.default.Header();
    let listObject = new Prox.default.ListObjectsRequest();
    let requestReq = new Prox.default.ListObjectsReq();
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': deviceData.value.peer_id,
    };

    header.setPeerid(deviceData.value.peer_id);
    header.setId(deviceData.value.foggie_id);
    header.setToken(_token);
    header.setApptype(appType);

    listObject.setPrefix('');
    listObject.setDelimiter('/');
    listObject.setEncodingType('');
    listObject.setMaxKeys(20);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby(''); //lastmodifiedtime desc
    listObject.setTags('');
    listObject.setCategory(0);
    listObject.setDate('');
    requestReq.setHeader(header);
    requestReq.setRequest(listObject);
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
      return;
    }
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }
    let dir = [].join('/');
    if (reset) {
      tableData.value = [];
    }

    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = data.commonPrefixes[i];
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.prefix === data.prefix && data.prefixpins[i]?.cid) {
          cur_cid = data.prefixpins[i].cid;
        }
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
      };

      tableData.value.push(item);
    }

    for (let j = 0; j < data?.content?.length; j++) {
      let date = transferUTCTime(data.content[j].lastModified);
      let isDir = data.content[j].contentType == 'application/x-directory' ? true : false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = data.content[j].key;
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0 && name[name.length - 1] != '/') {
        // console.log(name.indexOf('/') > 0, 'name.indexOf(' / ') > 0');
        name = name.split('/')[name.split('/').length - 1];
      } else if (name.indexOf('/') > 0) {
        // console.log(name.indexOf('/') > 0, 'name.indexOf(' / ') > 01111111');
        name = name.split('/')[name.split('/').length - 2];
      }
      let isPersistent = data.content[j].isPersistent;
      //   console.log(data.content[j], 'data.content[j]');

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
      };

      tableData.value.push(item);
      //   console.log(tableData.value, 'tableData.value');
    }

    // tableLoading.value = false;
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
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value, item);
      imgHttpLink = getHttpShare(
        accessKeyId.value,
        secretAccessKey.value,
        item.key,
        type === 'ico' || type === 'svg' ? false : true,
        deviceData.value,
        item,
      );
    } else if (type === 'mp3') {
      type = 'audio';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value, item);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value, item) + '&inline=true';
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm' || type == 'mov') {
      type = 'video';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value, item);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value, item) + '&inline=true';
    } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'csv'].includes(type)) {
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, true, deviceData.value, item);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, item.key, false, deviceData.value, item);
    } else {
      isSystemImg = true;
    }
    if (isDir) {
      isSystemImg = true;
    }
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };

  const refresh = async () => {
    detailShow.value = false;
    tableData.value = [];
    imgData.value = [];
    otherData.value = [];
    getFileList();
  };
  onMounted(() => {
    tableData.value = [];
    imgData.value = [];
    otherData.value = [];
    // console.log('onMounted', tableData.value, imgData.value, otherData.value);
  });

  watch(
    () => CurrentToken.value,
    async (val) => {
      if (val) {
        // console.log('getFileList--------------------------------', val);
        await initSk(deviceData.value, val);
        tableData.value = [];
        imgData.value = [];
        otherData.value = [];
        // console.log(tableData.value, imgData.value, otherData.value);
        getFileList();
        getSummary(deviceData.value, val);
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );

  //   watch(
  //     () => cloudQuery.value.id,
  //     async (val) => {
  //       if (val) {
  //         // console.log(deviceData.value, 'maxfileList----0000');
  //         // await initToken(deviceData.value);
  //         await initSk(deviceData.value, maxToken.value);
  //         getFileList();
  //         getSummary(deviceData.value, maxToken.value);

  //         // initWebSocket();
  //       }
  //     },
  //     {
  //       deep: true,
  //       immediate: true,
  //     },
  //   );
  watch(
    tableData,
    (val) => {
      //   console.log('max--tableDate', tableData.value);
      if (val.length) {
        imgData.value = [];
        otherData.value = [];
        val.forEach((el) => {
          if (el.category == 1) {
            imgData.value.push(el);
          } else {
            otherData.value.push(el);
          }
        });
      }
    },
    { deep: true },
  );
  onUnmounted(() => {
    if (merkleTimeOut) clearTimeout(merkleTimeOut);
  });
  provide('isMobileOrder', isMobileOrder);
  const uploadComplete = () => {
    console.log('uploadComplete');
    getFileList();
    // refresh();
  };
</script>

<style lang="scss" scoped>
  #txtContainer {
    color: #fff;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    max-height: calc(100% - 300px);
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .benefit_analysis {
    // font-size: 16px;
    position: absolute;
    right: 40px;
    background: #4d5092;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid #fff;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    box-shadow:
      rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50%;
    -webkit-animation: sizeChange 5s infinite;
    -webkit-animation-timing-function: linear;
    -webkit-perspective: 1000;
    -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
    -webkit-filter: saturate(1.45) hue-rotate(2deg);

    img {
      width: 42px;
      height: 42px;
    }

    @keyframes sizeChange {
      from {
        -webkit-transform: rotateY(0deg);
        // transform: scale(1.1);
      }

      to {
        -webkit-transform: rotateY(360deg);
        // transform: scale(1.2);
      }
    }
  }

  .bucket_detail_smal {
    width: 36px;
    height: 36px;
  }
  .cancel_svg {
    height: 30px !important;
    width: 30px !important;
  }

  .bucket_name_tip {
    word-break: break-word;
    font-size: 30px;
  }
  .detail_top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 1.2rem;
  }

  .detail_back {
    width: 60px;
    height: 60px;
  }

  .order-detail {
    margin-top: 30px;
  }
  .main_detail_box {
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 36px 0;
    .profit_box {
      color: #fff;
      width: 70%;
      .title {
        color: #fff;
        font-weight: bold;
      }
      .value {
        font-size: 1rem;
      }
    }
    .progress_box {
      transition: all 0.5s linear;
      color: #fff;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: #4d5092;
      background: #9597c212;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      box-shadow:
        rgb(204, 219, 232) 0.4vw 0.4vw 0.8vw 0px inset,
        rgba(255, 255, 255, 0.5) -0.4vw -0.4vw 0.8vw 1px inset;
      position: relative;
      flex-direction: column;
      .text {
        font-size: 20px;
        font-weight: bolder;
        color: yellow;
      }
    }
  }

  .top_box {
    padding: 10px 10px;
    border-radius: 20px !important;
    background: transparent;
    padding-bottom: 50px;
    // background-image: -webkit-linear-gradient(190deg, #4062bb00 0%, #5200ae57 74%);
    // background-image: -webkit-linear-gradient(62deg, rgb(64 98 187 / 39%) 0%, rgb(82 0 174 / 43%) 74%);
    transition: all 0.5s linear;
    border: 1px dashed #fff;
    // height: 100px;
    .order-content_wrap {
      display: flex;
      margin-top: 10px;
      position: relative;
      transition: all 0.5s linear;
      height: 0;
      opacity: 1;
      max-height: 500px;
    }
    &.showHight {
      //   height: 540px;
      .progress_box {
        width: 140px;
        height: 140px;
      }
    }
    &.hideHight {
      height: 200px;
      border: none;

      .progress_box {
        width: 200px;
        height: 200px;
      }
    }
    .my_svg_icon {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 40px;
      height: 40px;
    }
    .show_avg {
      top: 0px;
    }
    .order-des {
      //   margin-bottom: 20px;
      display: flex;
      align-items: start;
      color: #fff;
      height: 60px;
      justify-content: start;
      flex-direction: column;
      //   border-bottom: 1px dashed #fff;

      .span1 {
        float: left;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 13px 0;
        font-weight: bold;
        font-size: 24px;
        svg {
          margin-right: 8px;
        }
      }

      .span2 {
        float: right;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 13px 0;
        font-weight: bold;
        svg {
          margin-right: 8px;
        }
      }
    }

    .order-circle {
      //   padding: 2vw;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      .nut-circle-progress {
        margin-left: 3vw;
        border: 30px solid #7f7ae9;
        border-radius: 50%;
        font-size: 12px;
        box-shadow:
          rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
    }

    .order-count {
      display: flex;
      align-items: center;
      justify-content: center;
      justify-content: space-between;
      //   width: 100%;
      justify-content: end;
      flex-direction: column;
      align-items: end;
      //   justify-content: start;
      //   align-items: start;
      //   background: #4a17a0 !important;
      //   padding: 20px 0;

      .nut-cell {
        width: auto;
        white-space: nowrap;
        // height: vw;
        // margin-left: 10%;
        padding-left: 8vw;
        // border-bottom: 1px solid #fff;
        border-radius: 0;
        background: transparent !important;
        box-shadow: none;
        color: #fff;
        font-size: 24px;
        line-height: 4vw;
        font-weight: bold;
        margin: 0px 0;
        padding: 13px 10px 13px 52px;
        display: flex;
        flex-direction: row;
        span {
          // color: #ff7b1d;
          color: #9cb77d;
          color: yellow;
        }
      }

      svg {
        position: absolute;
        left: 2vw;
        width: 4vw;
        height: 4vw;
      }
    }
    .left_count {
      justify-content: start;
      align-items: start;
      //   border-right: 2px solid #fff;
      width: auto;
      padding-right: 10px !important;
      //   transition: all 0.3s;
    }
  }
  .isHistory {
    // background: #2b2929;
  }

  .detail_box {
    box-sizing: border-box;
    height: 100%;
    // padding: 20px 0;
    // padding-bottom: 5rem;
    // background: #fff;
    border-radius: 40px 40px 0 0;
    z-index: 99;
    position: relative;
    :deep {
      .nut-empty__description {
        color: #fff;
      }
    }

    .type_check_box {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px;
      background: #fff;
      border-radius: 20px;
      width: 40%;
      :deep {
        .nut-swiper {
          width: 100% !important;
          .nut-swiper-inner {
            // width: 200% !important;
          }
          .nut-swiper-item {
            width: 100% !important;
          }
        }
        .nut-swiper-pagination {
          position: absolute;
          left: 1rem;
          top: 1rem;
        }
        .van-swipe {
          width: 100%;
        }
        .van-swipe__indicators {
          position: absolute;
          bottom: unset;
          left: 1rem;
          top: 1rem;
        }
      }
      .type_item {
        width: 50%;
        text-align: center;
        height: 150px;
        cursor: pointer;
        font-weight: bold;
        &.miner_tool {
          height: 100px;
          .svg_box {
            margin: 0 auto;
            img {
              width: unset;
              height: 60%;
            }
          }
          p {
            font-size: 0.8rem;
          }
        }

        .svg_box {
          width: 80px;
          height: 80px;
          line-height: 80px;
          margin: 10px auto;
          text-align: center;
          border-radius: 20px;

          svg {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }

        &:nth-child(3),
        &:nth-child(4) {
          .svg_box {
            svg {
              width: 60px;
              height: 60px;
            }
          }
        }

        .order-icon-recycle {
          //   background-color: #ff8b00;
          // background-image: linear-gradient(120deg, rgb(255, 158, 13) 0%, #f3d811 100%);
          //   background-image: linear-gradient(120deg, #8ae9d7 0%, #483bb5 100%);
          border-radius: 50%;

          svg {
            width: 80% !important;
            height: 80% !important;
            vertical-align: middle;
          }
        }

        .order-icon-node-tree {
          //   background-color: #34964f;
          //   background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
          border-radius: 50%;

          svg {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }

        .order-icon-send-to-back {
          background-color: #fcd116;
          background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
          border-radius: 50%;

          svg {
            width: 60%;
            height: 60%;
            vertical-align: middle;
          }
        }

        .order-icon-input-cursor-move {
          background-color: #5f57ff;
          background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
          border-radius: 50%;

          svg {
            width: 60%;
            height: 60%;
            vertical-align: middle;
          }
        }

        p {
          color: #051e56;
          white-space: nowrap;
        }

        // &:nth-child(1) {
        //   .svg_box {
        //     svg {
        //       color: #aa5eff;
        //     }
        //   }
        // }
        // &:nth-child(2) {
        //   .svg_box {
        //     background: #e0f3ff;
        //   }
        // }
        // &:nth-child(3) {
        //   .svg_box {
        //     background: #ffebef;
        //   }
        // }
        // &:nth-child(4) {
        //   .svg_box {
        //     background: #e2e4ff;
        //   }
        // }
      }
    }
    .right_check_box {
      width: 60%;
      background: #e9e9f8;
      margin-left: 40px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background: #fff;
    }

    .type_check_box1 {
      flex-direction: column;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      //   display: grid;
      //   grid-template-columns: 3fr 1fr;

      .type_check {
        display: flex;
        align-items: center;
        margin-right: 10px;
        border-radius: 10px;

        background-color: #fff;
        .type_item {
          width: 33.3333%;
        }
      }

      .s3key {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background: #fff;
        border-radius: 10px;
        // margin-left: 10px;
        &.router_disabled {
          .order-icon-recycle {
            background-color: #ccc;
          }
          p {
            color: #ccc;
          }
        }
      }
    }

    .today_file {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      font-size: 26px;
      font-weight: bold;

      .title {
        font-weight: bold;
      }
    }

    .file_list {
      // display: grid;
      // grid-template-columns: repeat(4, 1fr);
      // grid-gap: 0.5rem;
      margin-top: 20px;
      background: $card-bg;
      border-radius: 16px;
      background: #212121;
      border: 2px solid #373737;
      .list_item {
        .left_icon_box {
          position: relative;
          height: 80px;
          width: 80px;
          img {
            vertical-align: middle;
          }
          .play_icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
    }
    .file_list_img {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 0.2rem;
      justify-items: center;
      margin-top: 20px;
      padding: 0.5rem;
      background: $card-bg;
      background: #212121;
      border: 2px solid #373737;
      border-radius: 16px;
      .list_item {
        width: 100px;
        height: 100px;
        justify-content: center;
        padding: 0 !important;
        // padding: 20px 0;
        :deep {
          .nut-image {
            width: 100%;
            height: 100%;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.3rem;
        }
      }
    }

    .list_item {
      display: flex;
      // flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      // border-top: 1px solid #eee;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        word-break: break-all;
      }
      &:active {
        background: #cde3f5;
      }

      .type_icon {
        width: 80px;
        height: 80px;
      }

      .name_box {
        width: calc(100% - 200px);
        margin-left: 30px;

        p:first-child {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.9rem;
          text-align: left;
          font-size: 26px;
        }

        p:last-child {
          margin-top: 5px;
          color: #fff;
          font-size: 20px;
          text-align: left;
        }
      }

      .right_more {
        width: 50px;
        height: 50px;
        color: #ccc;
      }
      .right_radio {
      }
    }

    .top_grid {
      :deep {
        .nut-grid-item__content {
          height: unset;
          margin: 20px;
          padding: 20px;
          border-radius: 40px;

          img {
            width: 100px;
          }
        }
      }
    }

    .order-icons {
      .nut-col {
        width: 13vw;
        height: 13vw;
        margin: 5vw;
        border-radius: 50%;

        svg {
          width: 7vw;
          height: 7vw;
          margin: 3vw;
        }
      }

      .order-icon-recycle {
        background-color: #ff8b00;
        background-image: linear-gradient(120deg, rgb(255, 158, 13) 0%, #f3d811 100%);
      }

      .order-icon-node-tree {
        background-color: #34964f;
      }

      .order-icon-send-to-back {
        background-color: #fcd116;
      }

      .order-icon-input-cursor-move {
        background-color: #5f57ff;
      }
    }
  }
  .detail_box_toolbox {
    display: flex;
  }

  .creat-name {
    background: #f5f8fd;
    color: #0099ff;
  }

  .rename_box {
    margin-top: 40px;
    padding: 0 40px;

    :deep {
      .nut-cell {
        padding-left: 0;
        padding-right: 0;
        box-shadow: none;
      }

      .nut-textarea {
        padding-left: 0;
        padding-right: 0;
      }
    }

    p {
      text-align: center;
      margin-bottom: 30px;
    }

    svg {
      display: block;
      margin: 0 auto;
    }

    :deep {
      .nut-searchbar {
        padding: 20px 0;
      }

      .nut-button {
        margin-top: 40px;
      }
    }
  }

  .share_info_box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 100px;

    div {
      min-width: 240px;
      margin-top: 20px;
      text-align: center;
      color: $main_blue;

      img,
      svg {
        display: block;
        margin: 0 auto;
        width: 80px;
        height: 80px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    #txtContainer {
      color: #fff;
      width: 100%;
      padding: 0 20px;
      max-height: calc(100% - 300px);
    }
    .benefit_analysis {
      // font-size: 16px;
      right: 10px;
      width: 60px;
      height: 60px;

      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
      box-shadow:
        rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

      img {
        width: 42px;
        height: 42px;
      }
    }
    .bucket_detail_smal {
      width: 36px;
      height: 36px;
    }
    .cancel_svg {
      height: 30px !important;
      width: 30px !important;
    }
    .bucket_name_tip {
      font-size: 30px;
    }
    .detail_back {
      width: 60px;
      height: 60px;
    }
    .order-detail {
      margin-top: 30px;
    }
    .main_detail_box {
      height: auto;
      width: 100%;
      padding: 5px 0;
      .profit_box {
        width: 70%;
        .title {
        }
        .value {
          font-size: 28px;
        }
      }
      .progress_box {
        width: 90px;
        height: 90px;
        font-size: 18px;
        box-shadow:
          rgb(204, 219, 232) 0.4vw 0.4vw 0.8vw 0px inset,
          rgba(255, 255, 255, 0.5) -0.4vw -0.4vw 0.8vw 1px inset;
        .text {
          font-size: 18px;
        }
      }
    }
    .top_box {
      padding: 20px 10px;
      border-radius: 0px !important;
      padding-bottom: 50px;
      .order-content_wrap {
        margin-top: 10px;
        height: 0;
        border-top: 1px dashed #ccc;
        opacity: 1;
        max-height: 500px;
      }
      .showHight {
        height: unset;
        max-height: 140px;
      }
      .hideHight {
        height: 0;
        max-height: 0;
      }
      .my_svg_icon {
        position: absolute;
        top: -16px;
        right: 10px;
        width: 40px;
        height: 40px;
      }
      .show_avg {
        top: -36px;
      }
      .order-des {
        height: 60px;

        .span1 {
          float: left;
          padding: 13px 0;
          font-size: 24px;
          svg {
            margin-right: 8px;
          }
        }

        .span2 {
          float: right;
          font-size: 20px;
          padding: 13px 0;
          svg {
            margin-right: 8px;
          }
        }
      }

      .order-circle {
        //   padding: 2vw;
        margin-top: 10px;

        .nut-circle-progress {
          margin-left: 3vw;
          border: 30px solid #7f7ae9;
          border-radius: 50%;
          font-size: 12px;
          box-shadow:
            rgba(0, 0, 0, 0.3) 0px 19px 38px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }
      }

      .order-count {
        .nut-cell {
          width: auto;
          // height: vw;
          // margin-left: 10%;
          // border-bottom: 1px solid #fff;
          border-radius: 0;
          font-size: 24px;
          line-height: 32px;
          margin: 0px 0;
          padding: 13px 10px 13px 52px;
        }

        svg {
          position: absolute;
          left: 15px;
          width: 30px;
          height: 30px;
        }
      }
      .left_count {
        padding-right: 10px !important;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    .detail_box {
      height: 100%;
      padding: 20px;
      margin-top: -40px;
      border-radius: 40px 40px 0 0;
      padding-bottom: 5rem;

      .type_check_box {
        float: left;
        display: flex;
        margin-top: 0 !important;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 10px 5px;
        border-radius: 0 !important;
        // border-right: 1px solid #e2e2e2;
        .type_item {
          width: 80px;
          height: 100px;

          .svg_box {
            width: 60px;
            height: 60px;
            line-height: 60px;
            margin: 10px auto;
            border-radius: 20px;

            svg {
              width: 100%;
              height: 100%;
            }
          }

          &:nth-child(3),
          &:nth-child(4) {
            .svg_box {
              svg {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }

      .type_check_box1 {
        border: none;
        .type_check {
          flex-direction: column;
          margin-right: 0;
          border-radius: 10px;

          .type_item {
            width: 80px;
          }
        }

        .s3key {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 80px;
          border-radius: 10px;
          margin-left: 0;
        }
      }

      .today_file {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        padding: 0 10px;
        font-size: 26px;

        .see_all {
          font-size: 24px;
        }
        .see_all {
          margin-top: 1rem;
          color: #fff;
          font-weight: bold;
          font-size: 30px;
          text-align: center;
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .file_list {
        width: unset;
        // margin-left: 190px;
        margin-top: 20px;
        border-radius: 16px;
      }

      .list_item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        border-top: 1px solid #eee;

        .type_icon {
          width: 80px;
          height: 80px;
        }

        .left_icon_box {
          position: relative;
          width: 80px;
          height: 80px;

          img {
            width: 80px;
            height: 80px;
          }
          .play_icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .name_box {
          width: calc(100% - 200px);
          margin-left: 30px;

          p:first-child {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          p:last-child {
            margin-top: 5px;
            color: #a7a7a7;
            font-size: 20px;
          }
        }

        .right_more {
          width: 50px;
          height: 50px;
          color: #ccc;
        }
      }

      .top_grid {
        :deep {
          .nut-grid-item__content {
            height: unset;
            margin: 20px;
            padding: 20px;
            border-radius: 40px;

            img {
              width: 100px;
            }
          }
        }
      }

      .order-icons {
        .nut-col {
          width: 13vw;
          height: 13vw;
          margin: 5vw;
          border-radius: 50%;

          svg {
            width: 7vw;
            height: 7vw;
            margin: 3vw;
          }
        }
      }
    }

    :deep {
      .nut-popup {
        .nut-icon {
          min-height: 20px;
        }
      }
    }
    .rename_box {
      margin-top: 40px;
      padding: 0 40px;
      :deep {
        .nut-cell {
          padding-left: 0;
          padding-right: 0;
          box-shadow: none;
        }
        .nut-textarea {
          padding-left: 0;
          padding-right: 0;
        }
      }
      p {
        text-align: center;
        margin-bottom: 30px;
      }
      svg {
        display: block;
        margin: 0 auto;
      }
      :deep {
        .nut-searchbar {
          margin: 0 auto;
          padding: 20px 0;
          --nut-searchbar-width: 600px;
          --nut-searchbar-input-height: 70px;
        }
        .nut-button {
          width: 300px;
          margin: 0 auto;
          margin-top: 40px;
          --nut-button-default-height: 70px;
          --nut-button-default-font-size: 1.5rem;
        }
        .nut-searchbar__search-input .nut-searchbar__input-bar {
          font-size: 1.5rem;
        }
        .nut-icon {
          --nut-icon-width: 30px;
          --nut-icon-height: 30px;
          --nut-icon-line-height: 30px;
        }
      }
    }

    .share_info_box {
      margin-top: 30px;
      margin: 30px 120px 0;
      justify-content: space-around;
      div {
        min-width: 150px;
        margin-top: 20px;

        img,
        svg {
          width: 80px;
          height: 80px;
        }
      }
    }
    .custom-content {
      p {
        padding: 10px 20px;
        color: #909090;
        border-bottom: 1px solid #eee;
        svg {
          width: 60px;
          height: 60px;
          margin-right: 20px;
          vertical-align: middle;
        }
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          padding: 10px 20px;
          svg {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            vertical-align: middle;
          }
          &:active,
          &:hover {
            background: #cde3f5;
          }
        }
      }
      .cancel_btn {
        padding: 10px;
        font-size: 24px;
      }
    }
    .timeSelect {
      z-index: 9999;
    }
    :deep {
      .van-dropdown-menu__bar {
        background-color: transparent;
        box-shadow: none;
      }
      .van-dropdown-menu__title:after {
        transform: rotate(-45deg) scale(0.8);
      }
      .van-dropdown-menu__title--down:after {
        transform: rotate(135deg) scale(0.8);
      }
      .van-dropdown-item__option {
        padding: 20px;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .order-circle .nut-circle-progress {
    .custom-content {
      p {
        padding: 30px 20px;
        color: #909090;
        border-bottom: 1px solid #eee;

        svg {
          width: 60px;
          height: 60px;
          margin-right: 20px;
          vertical-align: middle;
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 30px 20px;

          svg {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            vertical-align: text-bottom;
          }

          &:active {
            background: #cde3f5;
          }
        }

        .is-disable {
          color: #ccc;
        }
      }

      .cancel_btn {
        padding: 20px;
        background-color: #f7f7f7;
        color: #000;
        text-align: center;
        font-size: 35px;
      }
    }
  }
  .BucketName {
    background: url('@/assets/newIcon/Bucketname.png');
    // background-size: 100% 100%;
    background-size: 30%;
    background-repeat: no-repeat;

    background-position: calc(100% + 0.5rem) top;
  }
</style>
<style lang="scss" scoped>
  .order-circle .nut-circle-progress {
    svg {
      border-radius: 50%;
      background-color: #fff;
    }

    .nut-circle-progress__text {
      color: #5460fe;
      font-size: 28px !important;
      white-space: pre-wrap;
    }
  }

  .fade-transform-leave-active {
    transition: all 0.3s ease;
  }

  .fade-transform-enter-active {
    transition: all 0.15s ease;
    transition-delay: 0.1s;
  }

  .fade-transform-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .upload_progress.nut-progress {
    .nut-progress-outer-part {
      width: 100%;
    }

    .nut-progress-text {
      position: absolute;
      right: 0px;
      top: -40px;
      width: 100%;
    }
  }

  .upload_progress {
    position: fixed;
    bottom: 14vw;
  }
</style>

<style lang="scss" scoped>
  .custom-action_sheet {
    display: flex;
    flex-direction: column;
    .nut-action-sheet__title {
      background-color: #211d1d !important;
    }
    & > div:not(:last-child) {
      padding: 10px 20px;
      width: 100%;
      height: 90px;
      line-height: 90px;
      display: flex;
      align-items: center;
    }

    & > div:last-child {
      height: 100px;
      background-color: #f7f7f7;
      background-color: #211d1d;
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
  }
</style>
