<template>
  <div>
    <div class="out_show_box">
      <p>Photograph</p>
      <div class="out_img_box" v-if="tableData.length">
        <!-- <nut-image fit="cover" v-for="index in 4" v-if="tableData?.[index]" :src="tableData?.[index].imgUrl">
          <template #loading>
            <Loading width="16px" height="16px" name="loading" />
          </template>
        </nut-image> -->
        <div v-for="index in 4">
          <nut-image
            @click="showImgList"
            fit="cover"
            v-if="index <= isAvailableOrder ? 3 : 4 && tableData[index - 1]"
            :src="tableData[index - 1].imgUrl"
          >
            <template #loading>
              <Loading width="16px" height="16px" name="loading" />
            </template>
          </nut-image>
          <slot v-if="index == 4 && isAvailableOrder"></slot>
        </div>
      </div>
      <div class="out_img_box" v-else>
        <img @click="showImgList" src="@/assets/bucketPhoto0.svg" alt="" />
        <img @click="showImgList" src="@/assets/bucketPhoto1.svg" alt="" />
        <img @click="showImgList" src="@/assets/bucketPhoto2.svg" alt="" />
        <img @click="showImgList" v-if="!isAvailableOrder" src="@/assets/bucketPhoto3.svg" alt="" />
        <slot v-else></slot>
      </div>
    </div>
    <Teleport to="body">
      <nut-popup z-index="1799" position="bottom" closeable round :style="{ height: '90vh' }" v-model:visible="showPop">
        <div class="img-content" v-if="isReady">
          <div class="top_phpto_title">
            <span class="title">My Photos</span>
            <span class="more" @click="changeFlag(pageFlag == 'timeLineFlag' ? 'default' : 'timeline')">TimeLine ></span>
          </div>
          <!-- <div class="top_phpto_select" >
            <nut-menu active-color="#4524a3">
                <nut-menu-item
                :title="`List By ${currentTimeValue}`"
                v-model="currentTimeValue"
                :options="imgData"
                @change="timeChange"
                >
                <template #icon> <Checked></Checked> </template>
                </nut-menu-item>
            </nut-menu>
        </div> -->

          <!-- v-if="pageFlag==='timeFlag'" -->
          <!-- <nut-infinite-loading
            ref="listRef"
            load-more-txt="No more content"
            v-model="infinityValue"
            :has-more="!isEnd"
            @load-more="getFileCategories"
            class="photo_timeLine_box"
            v-if="pageFlag==='timeFlag'"
            
      >
        <div v-if="imgData.length" v-for="(item, index) in imgData" class="photo_timeLine_List" :key="index" @click="changeFlag('detail',item)">
          <div v-if="item.list.length" class="photo_timeLine_item">
            <div class="photo_timeLine_img">
                <img src="@/assets/photoType1.jpg" v-if="index%5===0">
                <img src="@/assets/photoType2.jpg" v-if="index%5 === 1">
            </div>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <nut-empty v-else :image-size="200" description="No Data" image="error" />
        </nut-infinite-loading> -->

          <nut-infinite-loading
            ref="listRef"
            load-more-txt="No more content"
            v-model="infinityValue"
            :has-more="!isEnd"
            @load-more="getFileList"
            class="photo_image_box"
            v-if="pageFlag === 'timeFlag'"
          >
            <!-- <div class="photo_image_listP" v-for="(item, index) in imgData" v-if="imgData.length">
              <p class="top-title">
                <span>{{ item.time }}</span>
              </p>
              <div class="photo_image_listS" v-if="item.list.length">
                <div :class="['img-item']" v-for="(img, index2) in item.list" @click="openImage(img)" class="photo_image_listItem">
                  <nut-image
                    :class="[isCheckMode && itemChecked(img.cid, item.dateId) ? 'imageItemChecked' : '']"
                    fit="cover"
                    :key="img.cid"
                    :src="img.imgUrl"
                  >
                    <template #loading>
                      <Loading width="16px" height="16px" name="loading" />
                    </template>
                  </nut-image>
                </div>
              </div>
            </div> -->
            <div class="falls">
              <nut-image
                v-for="item in tableData"
                @click="openImage(item)"
                :class="[isCheckMode && itemChecked(item.cid, item.dateId) ? 'imageItemChecked' : '']"
                fit="cover"
                :key="item.cid"
                :src="item.imgUrl"
              >
                <template #loading>
                  <Loading width="16px" height="16px" name="loading" />
                </template>
              </nut-image>
            </div>
          </nut-infinite-loading>

          <!-- v-if="pageFlag==='timeDetailFlag' -->
          <nut-infinite-loading
            ref="listRef"
            load-more-txt="No more content"
            v-model="infinityValue"
            :has-more="!isEnd"
            @load-more="getFileList"
            class="photo_image_box"
            v-if="pageFlag === 'timeDetailFlag'"
          >
            <div class="photo_image_listP">
              <p v-if="currentTimeList.list.length" class="top-title">
                <span>{{ currentTimeList.time }}</span>
              </p>
              <div class="photo_image_listS">
                <div
                  :class="['img-item']"
                  v-for="(img, index2) in currentTimeList.list"
                  @click="openImage(img)"
                  class="photo_image_listItem"
                >
                  <nut-image
                    :class="[isCheckMode && itemChecked(img.cid, currentTimeList.dateId) ? 'imageItemChecked' : '']"
                    fit="cover"
                    :key="img.cid"
                    :src="img.imgUrl"
                  >
                    <template #loading>
                      <Loading width="16px" height="16px" name="loading" />
                    </template>
                  </nut-image>
                </div>
              </div>
            </div>
          </nut-infinite-loading>

          <!-- v-if="pageFlag==='timeLineFlag' -->
          <nut-infinite-loading
            ref="listRef"
            load-more-txt="No more content"
            v-model="infinityValue"
            :has-more="!isEnd"
            @load-more="getFileList"
            class="photo_image_box photo_image_timeLineBox"
            v-if="pageFlag === 'timeLineFlag'"
          >
            <div v-if="imgData.length" v-for="(item, index) in imgData" class="photo_image_listP">
              <p v-if="item.list.length" class="top-title">
                <span>{{ item.time }}</span>
              </p>
              <div class="photo_image_listS">
                <nut-steps direction="vertical" :current="1">
                  <nut-step :title="img.fullName" v-for="(img, index2) in item.list" @click="openImage(img)">
                    <template #content>
                      <span>{{ img.date }}</span>
                      <nut-image
                        :class="[isCheckMode && itemChecked(img.cid, item.dateId) ? 'imageItemChecked' : '']"
                        fit="cover"
                        :key="img.cid"
                        :src="img.imgUrl"
                      >
                        <template #loading>
                          <Loading width="16px" height="16px" name="loading" />
                        </template>
                      </nut-image>
                    </template>
                  </nut-step>
                </nut-steps>
              </div>
            </div>
            <nut-empty v-else :image-size="200" description="No Data" image="error" />
          </nut-infinite-loading>
        </div>
        <div class="img-content" v-else>
          <nut-empty :image-size="200" description="No Data" image="error" />
        </div>
      </nut-popup>
    </Teleport>

    <ActionComponent
      ref="actionRef"
      v-model:fileItemPopupIsShow="fileItemPopupIsShow"
      v-model:fileItemDetailPopupIsShow="fileItemDetailPopupIsShow"
      v-model:renameShow="renameShow"
      v-model:moveShow="moveShow"
      v-model:detailShow="imgDetailShow"
      v-model:imgStartIndex="imgStartIndex"
      :category="1"
      :header="header"
      :prefix="[]"
      :isAvailableOrder="isAvailableOrder"
      :chooseItem="chooseItem"
      :images="images"
      :imgUrl="chooseItem.imgUrl"
      :isMobileOrder="isMobileOrder"
      :isNewFolder="false"
      :selectArr="selectArr"
      :bucketName="bucketName"
      :metadata="metadata"
      :orderInfo="orderInfo"
      :isCheckMode="false"
      :accessKeyId="accessKeyId"
      :secretAccessKey="secretAccessKey"
      @refresh="refresh2"
      @handlerClick="handlerClick"
      @swipeChange="swipeChange"
      @clickFIleItemDetail="clickFIleItemDetail"
      @clickFIleItem="clickFIleItem"
    ></ActionComponent>
  </div>
</template>
<script setup>
  import { Checked, Loading } from '@nutui/icons-vue';
  import IconShare from '~icons/home/share.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconMore from '~icons/home/more.svg';
  import { toRefs, ref, reactive, nextTick, watch, onMounted, computed, inject } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import { showToast, showDialog } from '@nutui/nutui';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from '@/views/list/details/useOrderInfo.js';
  import useDelete from '@/views/list/details/useDelete.js';
  import useShare from '@/views/list/details/useShare.js';
  import ActionComponent from '@/views/list/details/actionComponent.vue';
  import imgUrl from '@/assets/DMC_token.png';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { poolUrl } from '@/setting.js';
  import { list } from 'postcss';
  import moment from 'moment';

  let server;
  // const { isAvailableOrder, header, metadata, deviceType, orderInfo, bucketName, accessKeyId, secretAccessKey, getOrderInfo } =
  //   useOrderInfo();

  const imgCheckedData = reactive({
    value: {},
  });
  const emits = defineEmits(['update:checkedData', 'refresh', 'touchRow', 'touchmoveRow', 'touchendRow']);
  const props = defineProps({
    isCheckMode: Boolean,
    order_uuid: String,
    handleImg: Function,
    isAvailableOrder: Boolean,
    header: Object,
    metadata: Object,
    orderInfo: Object,
    bucketName: String,
    accessKeyId: String,
    secretAccessKey: String,
    deviceType: String,
  });
  const { order_uuid, handleImg, isAvailableOrder, header, metadata, orderInfo, bucketName, accessKeyId, secretAccessKey, deviceType } =
    toRefs(props);
  const {
    httpCopyLink,
    copyLink,
    shareType,
    confirmShare,
    periodValue,
    confirmPeriod,
    periodShow,
    desc,
    imgDesc,
    options,
    doShare,
    createNFT,
    ipfsPin,
    showShareDialog,
    shareRefContent,
    copyContent,
    confirmHttpShare,
    getHttpShare,
    cloudPin,
    copyIPFS,
    copyNft,
  } = useShare(orderInfo.value, header, deviceType, metadata);
  const isMobileOrder = computed(() => {
    if (orderInfo.value.value.electronic_type == '0') {
      return true;
    } else {
      return false;
    }
  });
  // const handleImg = inject('handleImg');
  const actionRef = ref('');
  const showPop = ref(false);
  const infinityValue = ref(false);
  const tableLoading = ref(false);
  const isReady = ref(false);
  const isEnd = ref(false);
  const listRef = ref('');
  const imgIndex = ref(0);
  const store = useUserStore();
  const uuid = computed(() => store.getUserInfo?.uuid || '');
  const timeLine = ref([]);
  const dateTimeLine = ref([]);
  const continuationToken = ref('');
  const tableData = ref([]);

  const imgPreRef = ref('');
  const imgDetailShow = ref(false);
  const imgStartIndex = ref(0);
  const imgArray = ref([]);
  const state = reactive({
    imgData: [],
    chooseItem: { name: '', imgUrl: '' },
    currentTimeList: {},
    currentTimeArr: [],
  });
  const currentTimeValue = ref('All');
  const { chooseItem, imgData, currentTimeList, currentTimeArr } = toRefs(state);
  const fileItemPopupIsShow = ref(false);
  const fileItemDetailPopupIsShow = ref(false);
  const renameShow = ref(false);
  const moveShow = ref(false);
  const $cordovaPlugins = inject('$cordovaPlugins');
  import { HmacSHA1, enc } from 'crypto-js';
  const pageFlag = ref('timeFlag');
  const selectArr = computed(() => {
    return [chooseItem.value];
  });
  const { deleteItem } = useDelete(
    tableLoading,
    () => {
      refresh2();
    },
    orderInfo.value,
    header,
    metadata,
  );

  // onMounted(async () => {
  //   await getOrderInfo(true, order_uuid.value);
  //   init();
  // });
  const showImgList = async () => {
    showPop.value = true;
    // isReady.value = false;
    // await getOrderInfo(true, order_uuid.value);
    // init();
  };
  const init = async () => {
    tableData.value = [];
    timeLine.value = [];
    continuationToken.value = '';
    imgArray.value = [];
    imgData.value = [];
    currentTimeList.value = {};

    await getTimeLine();
    isReady.value = true;
    console.log('isReady', isReady.value);

    currentTimeArr.value = [];
  };
  const getFileCategories = () => {};
  const timeChange = (val) => {
    let item = imgData.value.find((el) => el.text == val);
    changeFlag('detail', item);
  };
  const changeFlag = (type, item) => {
    if (type === 'detail') {
      currentTimeList.value = item;
      currentTimeValue.value = item.time;
      pageFlag.value = 'timeDetailFlag';
    } else if (type === 'timeline') {
      pageFlag.value = 'timeLineFlag';
    } else if (type == 'default') {
      pageFlag.value = 'timeFlag';
    }
  };
  const getTimeLine = () => {
    return new Promise((resolve, reject) => {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
        id: 'img_time_line',
        coverColor: 'rgba(0,0,0,0.45)',
      });
      const getMethod = (date = '') => {
        let interval = 'year';
        if (!date) {
          interval = 'year';
        } else if (date.length == 4) {
          interval = 'month';
        } else {
          interval = 'day';
        }
        tableLoading.value = true;
        let ip = `https://${bucketName.value}.${poolUrl}:7007`;
        server = new grpcService.default.ServiceClient(ip, null, null);

        let ProxTimeLine = new Prox.default.ProxTimeLine();
        ProxTimeLine.setHeader(header.value);
        ProxTimeLine.setInterval(interval);
        ProxTimeLine.setDate(date);
        ProxTimeLine.setCategory(1);
        console.log(ip, 'ip');
        console.log(ProxTimeLine, 'ProxTimeLine');
        server.getTimeLine(ProxTimeLine, metadata.value, (err, data) => {
          if (data) {
            const content = data.getContentsList().map((el) => {
              return {
                date: el.getDate(),
                count: el.getCount(),
              };
            });
            // console.log(content,'timtline....');
            if (!content.length) {
              showToast.hide('img_time_line');
            }
            for (let k = content.length - 1; k >= 0; k--) {
              if (content[k].count) {
                timeLine.value.push(content[k].date);
                if (content[k].date.length !== 10) {
                  getMethod(content[k].date);
                } else {
                  dateTimeLine.value.push({
                    date: content[k].date,
                    count: content[k].count,
                  });
                  //   console.log(dateTimeLine.value, 'dateTimeLine');
                  tableLoading.value = false;
                  resolve(true);
                }
              }
            }
          } else {
            reject();
          }
        });
      };
      getMethod();
    });
  };
  const getFileList = function (scroll, prefix, reset = false, date = '') {
    let target = '';
    let max_keys = '';
    target = imgData.value.find((el) => el.time == date);
    console.log(imgData.value, 'imgData.value');
    if (target) return false;
    if (dateTimeLine.value[imgIndex.value]) {
      date = dateTimeLine.value[imgIndex.value].date;
      max_keys = dateTimeLine.value[imgIndex.value].count;
      if (!target) {
        imgData.value.push({
          time: date,
          dateId: date,
          indeterminate: false,
          list: [],
          text: date,
          value: date,
        });
      }
      imgIndex.value++;
    } else {
      return false;
    }
    let list_prefix = '';
    tableLoading.value = true;
    if (deviceType.value == 'space' || deviceType.value == 3) {
      getReomteData(scroll, list_prefix, reset, date, max_keys);
    } else {
    }
  };
  const getReomteData = (scroll, prefix, reset = false, date = '', max_keys) => {
    tableLoading.value = true;
    let type = 'space';
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix('');
    listObject.setDelimiter('');
    listObject.setEncodingType('');
    listObject.setMaxKeys(100);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('');
    listObject.setTags('');
    listObject.setCategory(1);
    listObject.setDate(date);
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header.value);
    requestReq.setRequest(listObject);
    server.listObjects(requestReq, metadata.value, (err, res) => {
      if (res) {
        const transferData = {
          commonPrefixes: res.getCommonprefixesList(),
          content: res.getContentList().map((el) => {
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
            };
          }),
          continuationToken: res.getContinuationtoken(),
          isTruncated: res.getIstruncated(),
          maxKeys: res.getMaxkeys(),
          nextMarker: res.getNextmarker(),
          prefix: res.getPrefix(),
          prefixpins: res.getPrefixpinsList(),
        };
        console.log(transferData, 'transferData');

        initRemoteData(transferData, reset, date);
      } else if (err) {
        tableLoading.value = false;

        console.log('err----', err);
      }
    });
  };
  const initRemoteData = async (data, reset = false, dateKey = '') => {
    if (!data) {
      tableLoading.value = false;
      return;
    }
    if (data.err) {
      showToast.warn('Failed to  retrieve data. Please try again later');
    }
    let dir = '';
    if (reset) {
      imgData.value = [];
    }
    if (!accessKeyId.value) {
      // await getOrderInfo(true, order_uuid.value);
    }
    let promiseArray = data?.content?.map(async (el, index) => {
      let date = transferTime(el.lastModified);
      let isDir = false;
      const type = el.key.substring(el.key.lastIndexOf('.') + 1);
      const imgData2 = await handleImg.value(el, type, isDir);
      const url = imgData2.imgHttpLink;
      const isSystemImg = imgData2.isSystemImg;
      const url_large = imgData2.imgHttpLarge;
      let cid = el.cid;
      let file_id = el.fileId;

      let name = decodeURIComponent(el.key);
      if (name.indexOf('/') > -1) {
        name = name.split('/')[name.split('/').length - 1];
      }
      let isPersistent = el.isPersistent;

      let item = {
        imageInfo: el.imageInfo,
        isShowDetail: el.isShowDetail,
        fileType: 2,
        isDir: isDir,
        name,
        fullName: decodeURIComponent(el.key),
        key: el.key,
        category: 1,
        idList: [
          {
            name: 'IPFS',
            code: el.isPin ? cid : '',
          },
          {
            name: 'CYFS',
            code: el.isPinCyfs ? file_id : '',
          },
        ],
        date,
        size: getfilesize(el.size),
        status: cid || file_id ? 'Published' : '-',
        type: el.contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: url,
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
      };
      return item;
    });
    let content = await Promise.all(promiseArray);

    const target = imgData.value.find((el) => el.time == dateKey);
    console.log(target, 'target');

    if (target) {
      console.log(content, 'content');
      target.list = [...target.list, ...content];
      target[target.time] = target.list;
      tableData.value = [...tableData.value, ...content];
      imgArray.value = tableData.value;
    }
    console.log(tableData.value, 'tableDatatableData', imgData.value, imgData.value[0]);
    // currentTimeValue.value =imgData.value[0].time;
    isEnd.value = dateTimeLine.value.findIndex((el) => el.date == dateKey) == dateTimeLine.value.length - 1;
    if (data.isTruncated) {
      continuationToken.value = data.continuationToken;
    } else {
      continuationToken.value = '';
    }
    showToast.hide('img_time_line');
    tableLoading.value = false;
    infinityValue.value = false;
    nextTick(() => {
      if (!isEnd.value && listRef.value.$el.clientHeight >= listRef.value.$el.scrollHeight) {
        getFileList();
      }
    });
  };

  const refresh = async () => {
    imgDetailShow.value = false;
    timeLine.value = [];
    dateTimeLine.value = [];
    tableData.value = [];
    imgData.value = [];
    imgArray.value = [];
    imgCheckedData.value = {};
    isReady.value = false;
    imgIndex.value = 0;
    await init();
    nextTick(() => {
      isReady.value = true;
    });
  };
  const refresh3 = () => {
    imgDetailShow.value = false;
    timeLine.value = [];
    dateTimeLine.value = [];
    tableData.value = [];
    imgData.value = [];
    imgArray.value = [];
    imgCheckedData.value = {};
    imgIndex.value = 0;
  };
  const refresh2 = () => {
    emits('refresh');
  };
  const images = computed(() => {
    let arr = [];
    imgArray.value.filter((el) => {
      arr.push(el.imgUrlLarge);
    });
    return arr;
  });
  function swipeChange(index) {
    chooseItem.value = imgArray.value[index];
  }
  const openImage = (item) => {
    const index = imgArray.value.findIndex((el) => el.fullName == item.fullName);
    imgStartIndex.value = index;
    imgDetailShow.value = true;
    chooseItem.value = item;
    nextTick(() => {
      if (imgPreRef.value) {
        imgPreRef.value.swipeTo(imgStartIndex.value);
      }
    });
  };

  const showAction = (item) => {
    // if (timeOutEvent !== 0) {
    chooseItem.value = item;
    fileItemPopupIsShow.value = true;
    // }
  };
  const handlerClick = (type) => {
    let checkData = [];
    checkData = [chooseItem.value];
    if (type === 'move') {
      // if (category.value == 1) return false;
      movePrefix.value = [];
      moveShow.value = true;
      // doSearch('', movePrefix.value, true);
    } else if (type === 'download') {
      const objectKey = encodeURIComponent(checkData[0].fullName);
      const headers = getSignHeaders(objectKey);
      const url = `https://${bucketName.value}.${poolUrl}:6008/o/${objectKey}`;
      if (import.meta.env.VITE_BUILD_TYPE == 'ANDROID') {
        $cordovaPlugins.downloadFileHH(url, checkData.fullName, headers);
      } else {
        showToast.text('Coming soon for your download');
        fetch(url, { method: 'GET', headers })
          .then((response) => {
            if (response.ok) {
              // 创建一个 Blob 对象，并将响应数据写入其中
              return response.blob();
            } else {
              // 处理错误响应
              console.error('Error:', response.status, response.statusText);
            }
          })
          .then((blob) => {
            // 创建一个 <a> 元素，并设置其 href 属性为 Blob URL
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = checkData[0].fullName;

            // 将 <a> 元素添加到文档中，并模拟点击
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
          .catch((error) => {
            // 处理网络错误
            console.error('Network Error:', error);
          });
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
    } else if (type == 'nft') {
      if (checkData.length > 1) return false;
      createNFT(checkData[0], accessKeyId.value, secretAccessKey.value, bucketName.value);
    } else if (type === 'pin') {
      const onOk = async () => {
        await cloudPin(checkData[0], 'ipfs');
        // doSearch('', prefix.value, true);
        refresh2();
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
          tableData.value.map((el) => {
            if (el.cid && el.cid == checkData[0].cid) {
              el.isPin = false;
            }
          });
          refresh2();
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
    }
  };
  const getSignHeaders = (objectKey) => {
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
  function clickFIleItem(params) {
    chooseItem.value = params;
    fileItemPopupIsShow.value = true;
  }

  function clickFIleItemDetail(params) {
    console.log(params);
    fileItemDetailPopupIsShow.value = true;
  }
  function handleID(id) {
    if (id) {
      return id.substring(0, 15) + '...' + id.substring(id.length - 15, id.length);
    }
  }

  defineExpose({ refresh, refresh3 });
  watch(
    isReady,
    (val) => {
      // getFileList('', '', true);
      if (val) {
        console.log(val, 'readyyyyyyyyyyyyy');
        getFileList();
      }
    },
    { deep: true },
  );
  watch(
    order_uuid,
    async (val) => {
      if (val) {
        imgDetailShow.value = false;
        timeLine.value = [];
        dateTimeLine.value = [];
        tableData.value = [];
        imgData.value = [];
        imgArray.value = [];
        imgCheckedData.value = {};
        // isReady.value = false;
        imgIndex.value = 0;
        // await getOrderInfo(true, val);
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
  watch(
    secretAccessKey,
    (val) => {
      if (val) {
        console.log(val, 'secretAccessKeysecretAccessKey');
        imgDetailShow.value = false;
        timeLine.value = [];
        dateTimeLine.value = [];
        tableData.value = [];
        imgData.value = [];
        imgArray.value = [];
        imgCheckedData.value = {};
        isReady.value = false;
        imgIndex.value = 0;
        // await getOrderInfo(true, val);
        refresh();
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
</script>

<style lang="scss">
  .out_show_box {
    width: 100%;
    height: 380px;
    background: #fff;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    p {
      padding: 0.5rem 1rem 0;
      font-weight: 600;
    }
    .out_img_box {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      height: 280px;
      .nut-image {
        height: 130px;
        border-radius: 10px;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
    }
  }
  // #app {
  //   background: #fff;
  // }
  .top_phpto_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin: 0 90px;
    margin-top: 30px;
    margin-bottom: 30px;
    .title {
      font-size: 50px;
      font-weight: bold;
    }
    .more {
      background: #ffd870;
      height: 30px;
      padding: 10px 30px;
      display: inline-block;
      border-radius: 30px;
      color: #000;
      font-weight: bold;
      line-height: 30px;
      font-size: 20px;
    }
  }
  .photo_timeLine_box {
    margin-top: 40px;
    width: calc(100% - 4vw);
    .nut-infinite__container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .photo_timeLine_List {
      cursor: pointer;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .photo_timeLine_item {
        text-align: center;
        .photo_timeLine_img {
          img {
            // width: ;
          }
        }
      }
    }
  }
  .photo_image_box {
    padding: 20px 50px;
    box-sizing: border-box;

    .photo_image_listP {
      width: 100%;
      .top-title {
        font-size: 32px;
        font-weight: bold;
        margin: 30px 0 0px 0;
        // border-top:1px dashed #ccc;
        // padding-top:10px;
      }
      .photo_image_listS {
        height: 200px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;
        .photo_image_listItem {
          margin-top: 30px;
          width: 33%;
          height: 200px;
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 200px;
            height: 200px;
            border-radius: 20px;
          }
        }
      }
    }
    .falls {
      box-sizing: border-box;
      width: 100%;
      column-count: 2;
      column-gap: 1.5rem;
      padding-bottom: 1rem;
      & > div {
        break-inside: avoid;
        margin-bottom: 1rem;
        border-radius: 1rem;
        // box-shadow:
        //   rgba(0, 0, 0, 0.19) 0px 10px 20px,
        //   rgba(0, 0, 0, 0.23) 0px 6px 6px;
        overflow: hidden;
      }
      .nut-image {
        display: flex;
        justify-content: center;
        min-height: 8rem;
        max-height: 16rem;
        overflow: hidden;
        .nut-img {
          height: auto !important;
        }
      }
    }
  }
  .photo_detail_prev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px;
    background: #000;
    box-sizing: border-box;
    // overflow: auto;
    z-index: 99;
    .detail_top {
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 1rem;
      background: linear-gradient(180deg, #00000059, transparent);
      z-index: 99;
    }
    .middle_img {
      max-height: 100%;
      .nut-image {
        width: 100%;
        height: 100%;
      }
      :deep {
        .van-swipe {
          width: 100%;
          height: 100%;
          .van-swipe__track {
            align-items: center;
            width: 100% !important;
            img {
              // width: 100%;
              width: unset;
              max-width: 100%;
              margin: 0 auto;
            }
          }
        }
      }
    }
    .detail_back {
      width: 60px;
      height: 60px;
    }
    .bottom_action {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      height: 140px;
      background: linear-gradient(0deg, #00000059, transparent);

      margin-top: 20px;
      div {
        text-align: center;
        color: #fff;
      }
      svg {
        color: #fff;
        width: 80px;
        height: 80px;
      }
    }
  }
  .photoBottomPop.nut-popup {
    background-color: #f9f9f9;
    padding: 40px 40px;
    box-sizing: border-box;
    .fileItem_header {
      display: grid;
      grid-template-columns: 100px auto;
      gap: 30px;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
      .fileItem_header_right > div {
        font-size: 30px;
        font-weight: 600;
        line-height: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .fileItem_body {
      margin-top: 50px;
      overflow-x: hidden;
      overflow-y: auto;
      .optionBox {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        // place-items: center;
        justify-items: center;
        gap: 25px;
        padding: 30px 10px;
        & > div {
          width: 100%;
          border-radius: 25px;
          border: 1px solid #ddd1d1;
          background-color: #f1f1f1;
          height: 170px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          color: #222224;
          svg {
            width: 60px;
            height: 60px;
          }
        }
      }
      .ipfs {
        border-radius: 25px;
        border: 1px solid #ddd1d1;
        background-color: #f1f1f1;
        p {
          display: grid;
          grid-template-columns: auto 100px;
          gap: 100px;
          align-items: center;
          border-bottom: 2px solid #fff;
          height: 100px;
          line-height: 100px;
          box-sizing: border-box;
          padding: 0px 15px;

          & > * {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 25px;
            color: #222224;
          }
          svg {
            height: 60px;
            width: 60px;
          }
        }
        p:last-child {
          border-bottom: 0px;
        }
      }
    }

    .nut-popup__close-icon {
      background-color: #ccccccc2;
      border-radius: 50%;
      color: #fff;
    }
  }
  .photo_image_timeLineBox {
    .photo_image_listP {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }
    .nut-step-title {
      margin-top: 10px;
      font-weight: bold;
      font-size: 30px;
      color: #5758a0;
    }
    .nut-step-content {
      margin-bottom: 30px;
    }
  }
</style>
