<template>
  <div>
    <div class="img-content" v-if="isReady">
        <div class="top_phpto_title"  v-if="pageFlag==='timeFlag'">
            <span class="title">My Photos</span>
            <span class="more" @click="changeFlag('timeline')">TimeLine ></span>
        </div>
        <div class="top_phpto_select"  v-if="pageFlag==='timeDetailFlag'">
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
        </div>

        <!-- v-if="pageFlag==='timeFlag'" -->
        <nut-infinite-loading
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
        </nut-infinite-loading>


      <!-- v-if="pageFlag==='timeDetailFlag' -->
      <nut-infinite-loading
        ref="listRef"
        load-more-txt="No more content"
        v-model="infinityValue"
        :has-more="!isEnd"
        @load-more="getFileList"
        class="photo_image_box"
        v-if="pageFlag==='timeDetailFlag'"
      >
        <div class="photo_image_listP">
          <p v-if="currentTimeList.list.length" class="top-title">
            <span>{{ currentTimeList.time }}</span>
          </p>
          <div class="photo_image_listS">
            <div :class="['img-item']" v-for="(img, index2) in currentTimeList.list" @click="openImage" class="photo_image_listItem">
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
        class="photo_image_box"
        v-if="pageFlag==='timeLineFlag'"
      >
        <div v-if="imgData.length" v-for="(item, index) in imgData" class="photo_image_listP">
          <p v-if="item.list.length" class="top-title">
            <span>{{ item.time }}</span>
          </p>
          <div class="photo_image_listS">
            <div :class="['img-item']" v-for="(img, index2) in item.list" @click="openImage" class="photo_image_listItem">
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
        </div>
        <nut-empty v-else :image-size="200" description="No Data" image="error" />
      </nut-infinite-loading>
    </div>
    <div class="img-content" v-else>
      <nut-empty :image-size="200" description="No Data" image="error" />
    </div>

    <!-- preview -->
    <Teleport to="body">
      <nut-overlay v-if="imgDetailShow" overlay-class="photo_detail_prev" v-model:visible="imgDetailShow" :close-on-click-overlay="false">
        <div class="detail_top">
          <IconArrowLeft @click="imgDetailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
          <IconMore @click="showAction(chooseItem)" class="detail_back" color="#fff"></IconMore>
        </div>
        <div class="middle_img">
          <van-image-preview
            v-model:show="imgDetailShow"
            :closeOnClickOverlay="false"
            :start-position="imgStartIndex"
            :images="images"
            @change="swipeChange"
          >
            <template #cover>
              <div class="detail_top">
                <IconArrowLeft @click="imgDetailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
                <!-- <IconMore @click="showAction(chooseItem)" class="detail_back" color="#fff"></IconMore> -->
              </div>
              <div class="bottom_action">
                <!-- <div>
                  <IconShare @click="handlerClick('share')"></IconShare>
                  <p>Share</p>
                </div> -->
                <div>
                  <IconDownload @click="handlerClick('download')"></IconDownload>
                  <p>Download</p>
                </div>
                <!-- <div>
                    <IconMore @click="showAction(chooseItem)" class="detail_back" color="#fff"></IconMore>
                  <p>More</p>
                </div> -->
              </div>
            </template>
          </van-image-preview>
        </div>
      </nut-overlay>
    </Teleport>

    <!-- more -->
    <nut-popup
      teleport-disable
      pop-class="photoBottomPop"
      position="bottom"
      safe-area-inset-bottom
      closeable
      round
      z-index="2000"
      :style="{ height: 'auto', minHeight: '40%' }"
      v-model:visible="fileItemPopupIsShow"
    >
      <div class="fileItem_header">
        <img v-if="(chooseItem.category == 1 || chooseItem.category == 2) && chooseItem.imgUrl" :src="chooseItem.imgUrl" alt="" />
        <img v-else-if="chooseItem.isDir" src="@/assets/svg/home/folder.svg" alt="" />
        <img v-else-if="chooseItem.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
        <img v-else src="@/assets/svg/home/file.svg" alt="" />
        <div class="fileItem_header_right">
          <div>{{ chooseItem.fullName }}</div>
          <div  v-if="!chooseItem.isDir">{{ chooseItem.date }} · {{ chooseItem.size }}</div>
        </div>
      </div>
      <div
        class="fileItem_body"
        :style="{
          height: chooseItem.isPin ? '345px' : '300px',
        }"
      >
        <div class="optionBox">
          <div @click="handlerClick('share')">
            <IconShare color="#222224 "></IconShare>
            <span>Share</span>
          </div>
          <div @click="handlerClick('rename')">
            <IconRename color="#222224"></IconRename>
            Rename
          </div>
          <div @click="handlerClick(chooseItem && (!chooseItem.isPin || !chooseItem.cid) ? 'pin' : 'un pin')">
            <IconIPFS color="#222224"></IconIPFS>
            {{ chooseItem && (!chooseItem.isPin || !chooseItem.cid) ? 'Pinned' : 'Unpin' }}
          </div>
          <div @click="handlerClick('move')">
            <IconMove :color="category != 1 || !isMobileOrder ? '#222224' : '#ffffff5c'"></IconMove>
            Move
          </div>
          <div @click="handlerClick('download')">
            <IconDownload color="#222224"></IconDownload>
            Download
          </div>
        </div>
        <div class="ipfs">
          <p v-if="chooseItem.isPin">
            <span>{{ handleID(`ipfs://${chooseItem.cid}`) }} </span>
            <IconCopy color="#222224" @click="copyIPFS('ipfs', chooseItem)"></IconCopy>
          </p>
          <p>
            <span> {{ handleID(`https://${orderInfo.value.domain}.${poolUrl}:6008/ipfs/${chooseItem.cid}`) }} </span>
            <IconCopy color="#222224" @click="copyIPFS('http', chooseItem)"></IconCopy>
          </p>
        </div>

        <nut-button
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          block
          type="danger"
          style="margin-top: 40px"
          @click="handlerClick('delete')"
        >
          <template #icon><IconDelete /> </template>Delete</nut-button
        >
      </div>
    </nut-popup>
  </div>
</template>
<script setup>
  import { Checked } from '@nutui/icons-vue';
  import IconShare from '~icons/home/share.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconMore from '~icons/home/more.svg';
  import { toRefs, ref, reactive, nextTick, watch, onMounted, computed, inject } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import { showToast } from '@nutui/nutui';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from '@/views/list/details/useOrderInfo.js';
  import imgUrl from '@/assets/DMC_token.png';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { poolUrl } from '@/setting.js';
  import { list } from 'postcss';

  let server;
  const { header, metadata, deviceType, orderInfo, bucketName, accessKeyId, secretAccessKey,  getOrderInfo } = useOrderInfo();
  const imgCheckedData = reactive({
    value: {},
  });
  const emits = defineEmits(['update:checkedData', 'touchRow', 'touchmoveRow', 'touchendRow']);
  const props = defineProps({
    isCheckMode: Boolean,
  });
  const handleImg = inject('handleImg');

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

  const imgDetailShow = ref(false);
  const imgStartIndex = ref(3);
  const imgArray = ref([]);
  const state = reactive({
    imgData: [],
    chooseItem: { name: '' },
    currentTimeList:{},
    currentTimeArr: [],
  });
  const currentTimeValue=ref('');
  const {chooseItem,imgData,currentTimeList,currentTimeArr}= toRefs(state);
  const fileItemPopupIsShow=ref(false);
  const $cordovaPlugins = inject('$cordovaPlugins');
  import { HmacSHA1, enc } from 'crypto-js';
  const pageFlag = ref('timeFlag')


  onMounted(async () => {
    await getOrderInfo();
    init();
  });
  const init = async () => {
    await getTimeLine();
    isReady.value = true;
    currentTimeArr.value=[];
  };
  const getFileCategories=()=>{

  };
  const timeChange=(val)=>{
    let item =imgData.value.find((el) => el.text == val);
    changeFlag('detail',item);
    
  };
  const changeFlag=(type,item)=>{
    if(type === 'detail'){
        currentTimeList.value =item;
        currentTimeValue.value = item.time;
        pageFlag.value = "timeDetailFlag";
    }else if(type === 'timeline'){
        pageFlag.value = "timeLineFlag";
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
        ProxTimeLine.setHeader(header);
        ProxTimeLine.setInterval(interval);
        ProxTimeLine.setDate(date);
        ProxTimeLine.setCategory(1);
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
    console.log(imgData.value,'imgData.value');
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
            text:date,
            value:date,
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
    requestReq.setHeader(header);
    requestReq.setRequest(listObject);
    server.listObjects(requestReq, metadata.value, (err, res) => {
      if (res) {
        const transferData = {
          commonPrefixes: res.getCommonprefixesList(),
          content: res.getContentList().map((el) => {
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
    if (reset) imgData.value = [];
    let promiseArray = data?.content?.map(async (el, index) => {
      let date = transferTime(el.lastModified);
      let isDir = false;
      const type = el.key.substring(el.key.lastIndexOf('.') + 1);
      const imgData2 = await handleImg(el, type, isDir);
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
        fileType: 2,
        isDir: isDir,
        name,
        fullName: decodeURIComponent(el.key),
        key: name,
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
      target[target.time]= target.list;
      tableData.value = [...tableData.value, ...content];
      imgArray.value = tableData.value;
    }
    console.log(tableData.value, 'tableDatatableData', imgData.value);
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
    timeLine.value = [];
    dateTimeLine.value = [];
    imgData.value = [];
    imgCheckedData.value = {};
    isReady.value = false;
    imgIndex.value = 0;
    await init();
    nextTick(() => {
      isReady.value = true;
    });
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
  const openImage = () => {
    imgDetailShow.value = true;
  };


const showAction = (item) => {
    // if (timeOutEvent !== 0) {
      chooseItem.value = item;
      fileItemPopupIsShow.value = true;
    // }
};
const copyIPFS= () => {};
const handlerClick=(type)=>{
    let checkData = [];
    checkData = [chooseItem.value];
    if(type === 'download'){
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
function handleID(id) {
    if (id) {
      return id.substring(0, 15) + '...' + id.substring(id.length - 15, id.length);
    }
  }
  watch(
    isReady,
    (val) => {
      getFileList();
    },
    { deep: true },
  );
</script>


<style lang="scss"  >
  #app {
    background: #fff;
  }
  .top_phpto_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    margin: 0 8vw;
    margin-top: 30px;
    .title{
        font-size: 50px;
        font-weight:bold;

    }
    .more{
        background: #ffd870;
        height: 30px;
        padding: 10px 30px;
        display: inline-block;
        border-radius: 30px;
        color:#000;
        font-weight: bold;
        line-height: 30px;
        font-size: 20px;
    }

  }
  .photo_timeLine_box{
    margin-top: 40px;
    width: calc(100% - 4vw);
    .nut-infinite__container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .photo_timeLine_List{
        cursor: pointer;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .photo_timeLine_item{
            text-align: center;
            .photo_timeLine_img{
                img {
                    // width: ;
                }
            }

        }
    }

  }
  .photo_image_box {
    padding: 20px;
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

</style>
