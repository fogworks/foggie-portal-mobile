<template>
  <div>
    <!-- ACTION SHEET -->
    <nut-popup
      teleport-disable
      pop-class="fileItemPopup"
      position="bottom"
      safe-area-inset-bottom
      closeable
      round
      z-index="1802"
      @close="emits('update:fileItemPopupIsShow', false)"
      :style="{ height: 'auto', minHeight: chooseItem.nftInfoList && chooseItem.nftInfoList.length > 0 ? '80%' : '40%' }"
      v-model:visible="fileItemPopupIsShow1"
    >
      <div class="fileItem_header">
        <img v-if="(chooseItem.category == 1 || chooseItem.category == 2) && chooseItem.imgUrl" :src="chooseItem.imgUrl" alt="" />
        <img v-else-if="chooseItem.isDir" src="@/assets/svg/home/folder.svg" alt="" />
        <nut-image
          v-else-if="chooseItem.category != 0 && chooseItem.category != 4 && chooseItem.imgUrl"
          show-loading
          show-error
          round
          radius="5px"
          :src="chooseItem.imgUrl"
          fit="cover"
          position="center"
        >
          <template #loading>
            <Loading width="16" height="16"></Loading>
          </template>
        </nut-image>
        <img v-else-if="chooseItem.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
        <img v-else :src="getFileType(chooseItem.name)" alt="" />
        <div class="fileItem_header_right">
          <div style="width: 75%">{{ chooseItem.fullName }}</div>
          <div v-if="!chooseItem.isDir">{{ chooseItem.date }} · {{ chooseItem.size }}</div>
        </div>
      </div>
      <div
        class="fileItem_body"
        :style="{
          height: chooseItem.nftInfoList && chooseItem.nftInfoList.length > 0 ? '500px' : chooseItem.isPin ? '345px' : '300px',
        }"
      >
        <div class="optionBox">
          <template v-if="isAvailableOrder">
            <div @click="handlerClick('share')" v-if="!chooseItem.isDir">
              <IconShare color="#222224 "></IconShare>
              <span>Share</span>
            </div>
            <div @click="handlerClick('rename')">
              <IconRename color="#222224"></IconRename>
              Rename
            </div>
            <div @click="handlerClick(chooseItem && (!chooseItem.isPin || !chooseItem.cid) ? 'pin' : 'un pin')">
              <IconIPFS color="#222224"></IconIPFS>
              {{ chooseItem && (!chooseItem.isPin || !chooseItem.cid) ? 'pin' : 'unpin' }}
            </div>
            <div @click="handlerClick('move')">
              <IconMove :color="category != 1 || !isMobileOrder ? '#222224' : '#ffffff5c'"></IconMove>
              Move
            </div>
          </template>

          <div @click="handlerClick('download')">
            <IconDownload color="#222224"></IconDownload>
            Download
          </div>
        </div>
        <div class="ipfs" v-if="chooseItem.isPin || chooseItem.cid">
          <p v-if="chooseItem.isPin && chooseItem.cid">
            <span>{{ handleID(`ipfs://${chooseItem.cid}`) }} </span>
            <IconCopy color="#222224" @click="copyIPFS('ipfs', chooseItem)"></IconCopy>
          </p>
          <p v-if="chooseItem.cid">
            <span> {{ handleID(`https://${orderInfo.value.domain}.${poolUrl}:6008/ipfs/${chooseItem.cid}`) }} </span>
            <IconCopy color="#222224" @click="copyIPFS('http', chooseItem)"></IconCopy>
          </p>
        </div>

        <div class="ipfs" v-if="chooseItem.nftInfoList && chooseItem.nftInfoList.length > 0" style="margin-top: 40px">
          <p v-for="(nft, index) in chooseItem.nftInfoList">
            <span> {{ handleID(`${browserUrl}/nft/${nft.getContractid()}/${nft.getTokenid()}`) }} </span>
            <IconCopy color="#262628" @click="copyNft(nft)"></IconCopy>
          </p>
        </div>

        <nut-button
          v-if="isAvailableOrder"
          block
          type="primary"
          style="margin-top: 40px; color: rgb(238, 10, 36)"
          @click="handlerClick('delete')"
        >
          <template #icon><IconDelete /> </template>Delete</nut-button
        >
      </div>
    </nut-popup>
    <!-- iso -->
    <nut-popup
      teleport-disable
      pop-class="fileItemPopup"
      position="bottom"
      safe-area-inset-bottom
      closeable
      round
      z-index="1801"
      @close="emits('update:fileItemDetailPopupIsShow', false)"
      :style="{ height: 'auto', minHeight: '35%' }"
      v-model:visible="fileItemDetailPopupIsShow1"
    >
      <div class="fileItem_header">
        <img v-if="chooseItem.imgUrl" :src="chooseItem.imgUrl" alt="" />
        <div class="fileItem_header_right">
          <div style="width: 85%">{{ chooseItem.fullName }}</div>
          <div>{{ chooseItem.imageInfo?.datetime }} · {{ chooseItem.size }}</div>
        </div>
      </div>
      <div class="fileItemDetail">
        <div class="fileItemDetail_header">
          <span>{{ chooseItem.imageInfo?.camerainfo?.model }} </span>
          <span class="flashlamp" v-if="chooseItem.imageInfo?.Flash">
            <FlashLight></FlashLight>
          </span>
        </div>
        <div class="fileItemDetail_Body">
          <div>{{ chooseItem.imageInfo?.resolution?.weight }} * {{ chooseItem.imageInfo?.resolution?.height }}</div>
          <div>{{ Number(chooseItem.imageInfo?.gps?.lat).toFixed(4) }}°N {{ Number(chooseItem.imageInfo?.gps?.pb_long).toFixed(4) }}°W</div>
        </div>
        <div class="fileItemDetail_bottom">
          <span>ISO {{ chooseItem.imageInfo?.iso }}</span>
          <span> {{ chooseItem.imageInfo?.exposuretime || 0 }} ev</span>
          <span>{{ chooseItem.imageInfo?.focallength }}</span>
          <span>f{{ chooseItem.imageInfo?.aperture }}</span>
          <span>{{ chooseItem.imageInfo?.exptime }} s</span>
        </div>
      </div>
    </nut-popup>

    <!-- rename / newFolder -->
    <nut-popup
      teleport-disable
      v-if="renameShow"
      @close="
        isNewFolder = false;
        newName = '';
        emits('update:renameShow', false);
      "
      position="bottom"
      closeable
      round
      z-index="1801"
      :style="{ height: '90%' }"
      v-model:visible="renameShow1"
    >
      <div class="rename_box">
        <IconFolder v-if="isNewFolder"></IconFolder>
        <div v-if="!isNewFolder" :class="['left_icon_box']">
          <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
          <IconFolder v-if="selectArr[0].isDir"></IconFolder>
          <IconImage v-else-if="selectArr[0].category == 1"></IconImage>
          <IconVideo v-else-if="selectArr[0].category == 2"></IconVideo>
          <IconAudio2 v-else-if="selectArr[0].category == 3" src="@/assets/svg/home/audio.svg" alt="" />
          <!-- <img v-else-if="(item.category == 1 || item.category == 2) && item.imgUrl" :src="item.imgUrl" alt="" /> -->
          <IconFile v-else :src="getFileType(selectArr[0].name)" alt="" />
        </div>
        <p v-if="!isNewFolder"> {{ selectArr.length ? getOriginName(selectArr[0].name.split('/')[0]) : '' }}</p>
        <nut-searchbar
          v-model="newName"
          :placeholder="isNewFolder ? 'Please Input Folder Name' : getOriginName(selectArr[0].name.split('/')[0])"
        >
          <template v-if="!isNewFolder" #rightin>
            <span> {{ getEndName(selectArr[0].name.split('/')[0]) }}</span>
          </template>
        </nut-searchbar>
        <nut-button type="info" block @click="confirmRename">Confirm</nut-button>
      </div>
    </nut-popup>

    <!-- move -->
    <nut-popup
      teleport-disable
      v-if="moveShow"
      z-index="1801"
      position="bottom"
      closeable
      round
      @closed="emits('update:moveShow', false)"
      :style="{ height: '100vh' }"
      v-model:visible="moveShow1"
    >
      <div class="rename_box move_box">
        <IconFolder></IconFolder>
        <div
          v-if="movePrefix.length"
          class="top_back"
          @click="
            movePrefix.splice(-1);
            doSearch('', movePrefix, true);
          "
        >
          <p> {{ movePrefix.length ? movePrefix.slice(-1)[0] : '' }}</p>
        </div>
        <nut-infinite-loading
          load-more-txt="No more content"
          class="file_list file_list_move"
          v-model="infinityValue"
          :has-more="!!continuationToken2"
          @load-more="loadMore"
        >
          <div @click="toNextLevel(item)" :class="['list_item']" v-for="(item, index) in dirData" :key="index">
            <div :class="['left_icon_box']">
              <IconFolder></IconFolder>
            </div>
            <div class="name_box">
              <p>{{ item.name.split('/')[0] }}</p>
              <!-- <p>{{ item.date || '' }}</p> -->
            </div>
          </div>
        </nut-infinite-loading>
        <nut-button type="info" block @click="confirmMove">Move to current folder</nut-button>
      </div>
    </nut-popup>

    <!-- share -->
    <nut-popup
      teleport-disable
      v-if="showShareDialog"
      z-index="1801"
      @closed="
        isReady = false;
        shareType = '';
      "
      position="bottom"
      closeable
      round
      :style="{ height: '300px' }"
      v-model:visible="showShareDialog"
    >
      <div v-if="isReady" class="rename_box move_box">
        <nut-cell style="margin-top: 50px" title="Access Period:">
          <template #link>
            <span v-if="isMobileDevice" style="display: flex; align-items: center"
              >{{ desc }}
              <IconEdit style="margin-left: 5px; color: #abacff" @click="periodShow = true"></IconEdit>
            </span>
            <van-dropdown-menu direction="up" v-else>
              <van-dropdown-item v-model="periodValue" :options="options" />
            </van-dropdown-menu>
          </template>
        </nut-cell>
        <template v-if="shareType">
          <p style="text-align: left; color: #666666; margin-bottom: 5px">Descriptions:</p>
          <nut-textarea rows="3" v-model="imgDesc" />
        </template>
        <nut-popup position="bottom" z-index="2100" v-if="isMobileDevice" v-model:visible="periodShow">
          <nut-picker
            v-model="periodValue"
            :columns="options"
            title="Select expiration time"
            @confirm="confirmPeriod"
            @cancel="periodShow = false"
          >
          </nut-picker>
        </nut-popup>

        <nut-button
          type="info"
          block
          @click="() => confirmHttpShare(shareType, shareCheckData[0], accessKeyId, secretAccessKey, bucketName)"
          >Confirm</nut-button
        >
      </div>
      <template v-else>
        <div class="share_info_box">
          <div v-if="shareRefContent.httpStr">
            <IconHttp
              @click="
                shareType = '';
                isReady = true;
              "
            ></IconHttp>
            HTTP Link
          </div>
        </div>
        <div class="share_info_box" style="margin-top: 10px">
          <!-- <div v-if="shareRefContent.ipfsStr && isMobileOrder">
          <img @click="confirmShare" src="@/assets/ipfs.png" alt="" />
          IPFS Link
        </div> -->

          <div v-if="shareRefContent.httpStr">
            <IconTwitter
              @click="
                shareType = 'twitter';
                isReady = true;
              "
            ></IconTwitter>
            Twitter
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconFacebook
              @click="
                shareType = 'faceBook';
                isReady = true;
              "
            ></IconFacebook>
            Facebook
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconSlack
              @click="
                shareType = 'slack';
                isReady = true;
              "
            ></IconSlack>
            Slack
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconPinterest
              @click="
                shareType = 'pinterest';
                isReady = true;
              "
            ></IconPinterest>
            Pinterest
          </div>
        </div>
      </template>
    </nut-popup>
    <!-- preview -->
    <Teleport to="body">
      <nut-overlay z-index="1800" overlay-class="detail_over" v-model:visible="detailShow1" :close-on-click-overlay="false">
        <div class="detail_top" v-if="chooseItem.category !== 1">
          <IconArrowLeft @click="emits('update:detailShow', false)" class="detail_back" color="#fff"></IconArrowLeft>
          <IconMore @click="clickFIleItem(chooseItem)" class="detail_back" color="#fff"></IconMore>
        </div>
        <HLSVideo v-if="chooseItem.category == 2" :imgUrl="imgUrl"></HLSVideo>
        <pre v-else-if="chooseItem.detailType == 'txt'" id="txtContainer"></pre>
        <MyAudio v-else-if="chooseItem.category == 3" :coverUrl="chooseItem.imgUrl" :audioUrl="chooseItem.imgUrlLarge"></MyAudio>
        <div v-else-if="imgUrl && chooseItem.category == 1" class="middle_img">
          <van-image-preview
            ref="imgPreRef"
            v-model:show="detailShow"
            :start-position="imgStartIndex"
            :closeOnClickOverlay="false"
            :images="images"
            @change="swipeChange"
          >
            <template #cover>
              <div class="detail_top">
                <IconArrowLeft @click="emits('update:detailShow', false)" class="detail_back" color="#fff"></IconArrowLeft>
                <div>
                  <Tips
                    v-if="chooseItem.isShowDetail"
                    @click="clickFIleItemDetail(chooseItem)"
                    class="detail_back"
                    width="22px"
                    style="margin-right: 10px"
                    color="#fff"
                  />
                  <IconMore @click="clickFIleItem(chooseItem)" class="detail_back" color="#fff"></IconMore>
                </div>
              </div>
              <div class="bottom_action">
                <div v-if="isAvailableOrder">
                  <IconShare @click="handlerClick('share')"></IconShare>
                  <p>Share</p>
                </div>
                <div>
                  <IconDownload @click="handlerClick('download')"></IconDownload>
                  <p>Download</p>
                </div>
              </div>
            </template>
          </van-image-preview>
        </div>
        <div class="bottom_action">
          <div v-if="isAvailableOrder">
            <IconShare @click="handlerClick('share')"></IconShare>
            <p>Share</p>
          </div>
          <div>
            <IconDownload @click="handlerClick('download')"></IconDownload>
            <p>Download</p>
          </div>
        </div>
      </nut-overlay>
    </Teleport>
    <Teleport to="body">
      <nut-action-sheet z-index="1800" @close="emits('update:wordVisible', false)" v-model:visible="wordVisible" title="Links">
        <div class="custom-action_sheet">
          <div @click="choose('google')">
            <img src="@/assets/googlelogo_preview.png" style="height: 25px" />
          </div>
          <div @click="choose('Microsoft')">
            <img src="@/assets/removebg-preview.png" style="height: 25px" />
          </div>

          <div @click="choose('other')">
            <img src="@/assets/otherplugins.png" style="width: 30px; height: 30px" />
            <div style="font-size: 18px; margin-left: 5px">Direct open</div>
          </div>

          <div @click="emits('update:wordVisible', false)"> Cancel </div>
        </div>
      </nut-action-sheet>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import IconCopy from '~icons/home/copy.svg';
  // import IconIPFS from '~icons/home/ipfs.svg';
  import IconIPFS from '~icons/ant-design/pushpin-outlined.svg';
  import FlashLight from '~icons/ri/flashlight-fill';
  import IconEdit from '~icons/iconamoon/edit-fill.svg';
  import IconPinterest from '~icons/logos/pinterest.svg';
  import IconSlack from '~icons/home/slack.svg';
  import IconDelete from '~icons/home/delete.svg';
  import IconTwitter from '~icons/home/twitter.svg';
  import IconFacebook from '~icons/devicon/facebook.svg';
  import IconAudio2 from '~icons/home/audio2.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconFile from '~icons/home/file.svg';
  import IconVideo from '~icons/home/video.svg';
  import IconFolder from '~icons/home/folder.svg';
  import IconShare from '~icons/home/share.svg';
  import IconRename from '~icons/home/rename.svg';
  import IconMove from '~icons/home/move.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconMore from '~icons/home/more.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconHttp from '~icons/home/http.svg';
  import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Search2, TriangleUp, Loading, MoreX, Tips } from '@nutui/icons-vue';
  import { showDialog, showToast } from '@nutui/nutui';
  import { transferUTCTime, getfilesize, transferGMTTime } from '@/utils/util';
  import useDelete from './useDelete.js';
  import useShare from './useShare.js';
  import HLSVideo from './hlsVideo.vue';
  import MyAudio from './myAudio.vue';
  // import { ProxListObjectsRequest, ProxListObjectsReq, ProxHeader } from '@/pb/prox_pb.js';
  // import Prox from '@/pb/prox_pb.ts';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from './useOrderInfo.js';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  import loadingImg from '@/components/loadingImg/index.vue';
  import moment from 'moment';
  import { HmacSHA1, enc } from 'crypto-js';
  import { poolUrl, browserUrl } from '@/setting.js';

  import getFileType from '@/utils/getFileType.ts';

  const { getOrderInfo } = useOrderInfo();
  const isMobileDevice = computed(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 此正则表达式涵盖了大多数使用的手机和平板设备
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  });
  const emits = defineEmits([
    'update:fileItemPopupIsShow',
    'update:fileItemDetailPopupIsShow',
    'update:renameShow',
    'update:moveShow',
    'update:detailShow',
    'update:imgStartIndex',
    'update:isNewFolder',
    'update:wordVisible',
    'handlerClick',
    'swipeChange',
    'clickFIleItemDetail',
    'clickFIleItem',
    'refresh',
  ]);
  let server;
  const props = defineProps({
    category: [String, Number],
    header: Object,
    orderInfo: Object,
    isCheckMode: Boolean,
    fileItemPopupIsShow: Boolean,
    fileItemDetailPopupIsShow: Boolean,
    isAvailableOrder: Boolean,
    detailShow: Boolean,
    chooseItem: Object,
    images: Array,
    imgStartIndex: Number,
    imgUrl: String,
    isMobileOrder: Boolean,
    renameShow: Boolean,
    isNewFolder: Boolean,
    wordVisible: Boolean,
    selectArr: Array,
    bucketName: String,
    accessKeyId: String,
    secretAccessKey: String,
    metadata: Object,
    prefix: Array,
    moveShow: Boolean,
  });
  const state = reactive({
    newName: '',
    fileItemPopupIsShow1: false,
    fileItemDetailPopupIsShow1: false,
    renameShow1: false,
    moveShow1: false,
    movePrefix: [],
    dirData: [],
    currentFolder: '',
    continuationToken2: '',
    detailShow1: false,
    infinityValue: false,
    imgPreRef: '',
  });
  const {
    moveShow,
    prefix,
    accessKeyId,
    secretAccessKey,
    isCheckMode,
    category,
    header,
    orderInfo,
    isNewFolder,
    renameShow,
    metadata,
    bucketName,
    imgUrl,
    isMobileOrder,
    wordVisible,
    imgStartIndex,
    images,
    fileItemPopupIsShow,
    fileItemDetailPopupIsShow,
    isAvailableOrder,
    detailShow,
    chooseItem,
    selectArr,
  } = toRefs(props);
  const {
    imgPreRef,
    infinityValue,
    dirData,
    currentFolder,
    continuationToken2,
    movePrefix,
    newName,
    moveShow1,
    detailShow1,
    fileItemPopupIsShow1,
    fileItemDetailPopupIsShow1,
    renameShow1,
  } = toRefs(state);
  const router = useRouter();
  watch(
    fileItemPopupIsShow,
    (val) => {
      console.log('111--------', chooseItem.value);
      fileItemPopupIsShow1.value = val;
    },
    { deep: true, immediate: true },
  );
  watch(
    fileItemDetailPopupIsShow,
    (val) => {
      fileItemDetailPopupIsShow1.value = val;
    },
    { deep: true, immediate: true },
  );
  watch(
    renameShow,
    (val) => {
      renameShow1.value = val;
    },
    { deep: true, immediate: true },
  );
  watch(
    moveShow,
    (val) => {
      moveShow1.value = val;
      if (val) {
        doSearch('', movePrefix.value, true);
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    detailShow,
    (val) => {
      detailShow1.value = val;
      console.log(chooseItem.value, 'chooseItem.value');

      nextTick(() => {
        if (imgPreRef.value) {
          imgPreRef.value.swipeTo(imgStartIndex.value);
        } else if (chooseItem.value.detailType == 'txt') {
          console.log('chooseItem.value.imgUrlLarge', chooseItem.value.imgUrlLarge);

          fetch(chooseItem.value.imgUrlLarge)
            .then((response) => response.text())
            .then((text) => {
              document.getElementById('txtContainer').textContent = text;
            });
        }
      });
    },
    { deep: true, immediate: true },
  );
  const deviceType = computed(() => orderInfo.value.value.device_type);
  const {
    httpCopyLink,
    copyLink,
    shareType,
    isReady,
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
  function choose(type) {
    const curSelectType = chooseItem.value.name.substring(chooseItem.value.name.lastIndexOf('.') + 1);
    const curSelectTypeMap = {
      xls: 'excel',
      xlsx: 'excel',
      csv: 'excel',
      pdf: 'pdf',
      doc: 'docx',
      docx: 'docx',
    };
    switch (type) {
      case 'google':
        window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(chooseItem.value.imgUrlLarge)}`);
        break;
      case 'Microsoft':
        window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(chooseItem.value.imgUrlLarge)}`);
        break;
      case 'other':
        router.push({ path: '/filePreview', query: { fileSrc: chooseItem.value.imgUrlLarge, fileType: curSelectTypeMap[curSelectType] } });
        break;
    }
    emits('update:wordVisible', false);
  }

  const shareCheckData = computed(() => {
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
    return checkData;
  });
  const handlerClick = async (type) => {
    emits('update:fileItemPopupIsShow', false);
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
    if (type == 'share') {
      if (checkData.length > 1) return false;
      await doShare(checkData[0]);
    } else if (type == 'move') {
      movePrefix.value = [];
      emits('update:moveShow', true);
      // moveShow.value = true;
      // doSearch('', movePrefix.value, true);
    } else if (type == 'download') {
      showToast.text('Coming soon for your download');
      let ip = `https://${bucketName.value}.${poolUrl}:7007`;
      server = new grpcService.default.ServiceClient(ip, null, null);
      let range = new Prox.default.ProxRangeRequest();
      let request = null;
      let stream;
      let downloadName;
      if (!checkData[0].isDir) {
        request = new Prox.default.ProxGetRequest();
        request.setHeader(header.value);
        request.setRange(range);
        request.setCid(checkData[0].cid);
        request.setKey(encodeURIComponent(checkData[0].key));
        request.setThumb(false);
        console.log(request, 'request');
        downloadName = checkData[0].name;
        stream = server.getObject(request, metadata.value);
      } else {
        downloadName = 'download.zip';
        let infoList = [];

        for (const item of checkData) {
          let objs = new Prox.default.ProxGetInfo();
          objs.setCid(item.cid);
          objs.setKey(item.key);
          infoList.push(objs);
        }
        request = new Prox.default.ProxGetRequests();
        request.setHeader(header.value);
        request.setRange(range);
        request.setObjsList(infoList);
        let prefixes = [];
        let data = [];
        checkData.forEach((el) => {
          if (el.cid && !el.isDir) {
            data.push({
              cid: el.cid,
              key: encodeURIComponent(el.fullName),
            });
          } else {
            // prefixes.push(encodeURIComponent(el.fullName));
            prefixes.push(el.fullName.replace('/', ''));
          }
        });
        request.setPrefixesList(JSON.parse(JSON.stringify(prefixes)));
        stream = server.getObjects(request, metadata.value);
      }
      let chunks = [];
      stream.on('data', (response) => {
        console.log(response, 'response');

        chunks.push(response.getChunk_asU8()); // 收集数据块
      });

      stream.on('status', (status) => {
        console.log('Stream status:', status);
      });

      stream.on('end', (end) => {
        let blob = new Blob(chunks, { type: 'application/octet-stream' }); // 创建 Blob 对象
        let url = URL.createObjectURL(blob); // 为 Blob 创建 URL

        // 创建隐藏的下载链接并触发点击
        let a = document.createElement('a');
        a.href = url;
        a.download = downloadName; // 指定下载文件的名称
        document.body.appendChild(a); // 将链接添加到文档中
        a.click(); // 模拟点击进行下载
        // 清理
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // 释放 Blob 对象的 URL
        console.log('Stream end!', end);
      });

      stream.on('error', (error) => {
        console.log('error----------upload', error);
      });
    } else {
      emits('handlerClick', type);
    }
  };
  const clickFIleItemDetail = (item) => {
    emits('clickFIleItemDetail', item);
  };
  const clickFIleItem = (item) => {
    emits('clickFIleItem', item);
  };
  const swipeChange = (index) => {
    emits('swipeChange', index);
  };
  const getOriginName = (name: string) => {
    let arr = name.split('.');
    if (arr.length > 1) {
      arr.pop();
    }
    return arr.join('.');
  };
  const getEndName = (name: string) => {
    let arr = name.split('.');
    if (arr.length > 1) {
      return '.' + arr[arr.length - 1];
    } else {
      return '';
    }
  };
  function handleID(id) {
    if (id) {
      return id.substring(0, 15) + '...' + id.substring(id.length - 15, id.length);
    }
  }
  const toNextLevel = (row: { name: string }) => {
    let long_name = movePrefix.value.length ? movePrefix.value?.join('/') + '/' + row.name : row.name;
    movePrefix.value = long_name.split('/').slice(0, -1);
    getFileList('', movePrefix.value, true);
  };
  const loadMore = () => {
    if (moveShow.value) {
      doSearch(continuationToken2.value, movePrefix.value, false);
    } else {
      //   doSearch(continuationToken.value, prefix.value, false);
    }
  };
  function doSearch(scroll: string = '', prefixArg: any[] = [], reset = false) {
    // tableData.value = [];
    // if (moveShow.value) {
    getFileList(scroll, prefixArg, reset);
    // } else {
    //   getFileList('', prefix.value, false);
    // }
  }
  function getFileList(scroll: string, prefix: any[], reset = false) {
    showToast.loading('Loading', {
      //   cover: true,
      //   customClass: 'app_loading',
      //   icon: loadingImg,
      //   loadingRotate: false,
      //   id: 'file_list',
      //   coverColor: 'rgba(0,0,0,0.45)',

      id: 'file_list',
      cover: true,
      coverColor: 'rgba(0,0,0,0.45)',
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = encodeURIComponent(list_prefix) + '/';
      }
    }
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix(list_prefix);
    let delimiter: string;
    let categoryParam: string | number;
    if (moveShow.value) {
      delimiter = '/';
      categoryParam = '0';
    } else {
      delimiter = category.value != 0 ? '' : '/';
      categoryParam = category.value;
    }
    listObject.setDelimiter(delimiter);
    listObject.setEncodingType('');
    listObject.setMaxKeys(30);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('');
    listObject.setTags('');

    listObject.setCategory(categoryParam);
    listObject.setDate('');
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header.value);
    // console.log('list-object--header', header, metadata.value);
    // console.log('listObjectlistObject', listObject);
    requestReq.setRequest(listObject);
    server.listObjects(
      requestReq,
      metadata.value,
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
        infinityValue.value = false;
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
          console.log(transferData, 'transferData,transferData');
          console.log(res, 'res,res');
          initRemoteData(transferData, reset, category.value);
        } else if (err) {
          showToast.hide('file_list');
          console.log('err----', err);
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
      }
    }
    if (!accessKeyId.value) {
      await getOrderInfo();
    }
    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = data.commonPrefixes[i];
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      let isPin = false;
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.array[0] === name && data.prefixpins[i]?.array[1]) {
          cur_cid = data.prefixpins[i].array[1];
          isPin = data.prefixpins[i].array[2];
        }
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 1,
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
      }
    }
    currentFolder.value = data.prefix;
    window.sessionStorage.setItem('currentFolder', currentFolder.value);
    console.log(data.prefix, 'data.prefix', currentFolder.value, 'currentFolder.value');
    if (data.isTruncated) {
      if (moveShow.value) {
        continuationToken2.value = data.continuationToken;
      } else {
      }
    } else {
      continuationToken2.value = '';
    }
    showToast.hide('file_list');
  };
  const confirmRename = () => {
    if (!newName.value) {
      showToast.warn('Please enter a name');
      return false;
    }
    const folderNameRegex = /^[^\s\\\\/:*?"<>|]+(\.[^\s\\\\/:*?"<>|]+)?$/;
    if (!folderNameRegex.test(newName.value)) {
      showToast.warn("Incorrect name format. Please do not include special characters and do not end with the character '/'");

      return false;
    }
    // const checkData = !detailShow.value ? selectArr.value : [chooseItem.value];
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

    const targetObject = () => {
      if (isNewFolder.value) {
        if (prefix.value.length) {
          return encodeURIComponent(prefix.value.join('/') + '/' + newName.value) + '/';
        } else {
          return encodeURIComponent(newName.value) + '/';
        }
      } else {
        const endName = getEndName(checkData[0].name);
        const arr = checkData?.[0]?.fullName.split('/');
        if (checkData[0]?.type == 'application/x-directory') {
          if (newName.value[newName.value.length - 1] == '/') {
            const newData = newName.value.slice(0, newName.value.length - 1);
            arr.splice(arr.length - 2, 1, newData);
          } else {
            arr.splice(arr.length - 2, 1, newName.value);
          }
        } else {
          arr.splice(arr.length - 1, 1, newName.value + endName);
        }
        return arr.join('/');
      }
    };
    if (targetObject().length > 1024) {
      showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
      return false;
    }
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`);
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    console.log(ip);

    server = new grpcService.default.ServiceClient(ip, null, null);

    if (isNewFolder.value) {
      let ProxFileInfo = new Prox.default.ProxFileInfo();
      ProxFileInfo.setHeader(header.value);
      ProxFileInfo.setKey(targetObject());
      ProxFileInfo.setContenttype('application/x-directory');
      ProxFileInfo.setSize(0);
      console.log(ProxFileInfo, 'ProxFileInfo');

      server.touchFile(ProxFileInfo, metadata.value, (err: { message: any }, data: any) => {
        if (data) {
          showToast.success('Create successful');
          emits('update:renameShow', false);
          emits('update:isNewFolder', false);
          newName.value = '';
          emits('refresh');
        } else {
          showToast.fail(err.message || 'Create failed');
        }
      });
    } else {
      let ProxRenameObject = new Prox.default.ProxRenameObject();
      ProxRenameObject.setHeader(header.value);
      ProxRenameObject.setSourceobject(encodeURIComponent(checkData[0].fullName));
      ProxRenameObject.setTargetobject(targetObject());
      ProxRenameObject.setFiletype(checkData[0].fileType);
      console.log(ProxRenameObject, 'ProxRenameObject');
      console.log(metadata.value);
      console.log(server);

      server.renameObjects(ProxRenameObject, metadata.value, (err: { message: any }, data: any) => {
        if (data) {
          console.log(1111111111);

          showToast.success('Rename successful');
          newName.value = '';
          emits('update:renameShow', false);
          emits('refresh');
        } else {
          console.log(err, 'err');

          showToast.fail(err.message || 'Rename failed');
        }
      });
    }
  };
  const confirmMove = () => {
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
    const targetObject = (val: { name: string }) => {
      if (movePrefix.value.length) {
        return movePrefix.value.join('/') + '/' + val.name;
      } else {
        return val.name;
      }
    };
    let index = 0;
    const length = checkData.length - 1;
    const rename = function (
      resolve: { (value: unknown): void; (arg0: boolean): void },
      reject: { (reason?: any): void; (arg0: boolean): void },
    ) {
      if (targetObject(checkData[index]).length > 1024) {
        showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
        if (index === length) {
          resolve(true);
        } else {
          index++;
          rename(resolve, reject);
        }
        return false;
      }
      // let ip = orderInfo.value.rpc.split(':')[0];
      // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
      let ip = `https://${bucketName.value}.${poolUrl}:7007`;
      server = new grpcService.default.ServiceClient(ip, null, null);
      let ProxRenameObject = new Prox.default.ProxRenameObject();
      ProxRenameObject.setHeader(header.value);
      ProxRenameObject.setSourceobject(encodeURIComponent(checkData[index].fullName));
      ProxRenameObject.setTargetobject(encodeURIComponent(targetObject(checkData[index])));
      ProxRenameObject.setFiletype(checkData[index].fileType);
      console.log(ProxRenameObject, 'ProxRenameObject');

      server.renameObjects(ProxRenameObject, {}, (err: { message: any }, data: any) => {
        if (data) {
          if (index === length) {
            showToast.success('Move successful');
            emits('update:moveShow', false);
            // moveShow.value = false;
            movePrefix.value = [];
            emits('refresh');
            resolve(true);
          } else {
            index++;
            rename(resolve, reject);
          }
        } else {
          console.log(err, 'err');
          // movePrefix.value = [];
          showToast.fail(err.message || 'Move failed');
          // emits('refresh');

          reject(false);
        }
      });
    };
    return new Promise((resolve, reject) => {
      rename(resolve, reject);
    });
    // moveShow.value = false;
  };
  defineExpose({
    handlerClick,
  });
</script>
<style lang="scss">
  .custom-action_sheet {
    display: flex;
    flex-direction: column;

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
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
  }

  .fileItemPopup.nut-popup {
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
            color: #000;
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
    .fileItemDetail {
      margin-top: 60px;
      border-radius: 15px;
      border: 1px solid #cac9ce;
      overflow: hidden;
      .fileItemDetail_header {
        padding: 0px 20px;
        height: 70px;
        line-height: 70px;
        background-color: #cbcacf;
        font-weight: 600;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 4px solid #adacb1;
        .flashlamp {
          display: flex;
          border-radius: 50%;
          border: 4px solid #5e5d62;
        }
      }
      .fileItemDetail_Body {
        padding: 20px 20px;
        border-bottom: 4px solid #adacb1;
        background-color: #dfdee3;
        & > div {
          height: 40px;
          line-height: 40px;
          font-weight: 600px;
          font-size: 28px;
        }
      }
      .fileItemDetail_bottom {
        background-color: #dfdee3;
        display: grid;
        padding: 0px 20px;
        grid-template-columns: repeat(5, 1fr);
        & > span {
          text-align: center;
          height: 60px;
          line-height: 60px;
          font-weight: 700px;
          font-size: 28px;
          position: relative;
        }
        & > span:not(:last-child)::before {
          display: inline-block;
          content: '';
          width: 3px;
          height: 60%;
          background-color: #cdccd1;
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
        // & > span:last-child{
        //  border: 0px;
        // }
      }
    }
  }

  .fileUpdateIcon {
    position: absolute;
    bottom: 8px;
    left: 10px;
    width: 140px;
    height: 140px;
  }
</style>
<style scoped lang="scss">
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
  .type_check_pop {
    /* padding-top: 120px; */
    height: 450px;
  }
  .dialog_class {
    font-size: 30px;
    .nut-dialog__header {
      height: unset;
      font-size: 35px;
    }
    .nut-dialog__content {
      font-size: 30px;
    }
  }
  .share_info_box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 100px;
    padding: 0 10px;
    overflow-x: auto;
    div {
      min-width: 180px;
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
  .custom-content {
    width: 100%;
    p {
      padding: 30px 20px;
      color: #909090;
      border-bottom: 1px solid #eee;
      svg,
      img {
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
        padding: 20px 20px;
        &:not(:last-child) {
          border-bottom: 1px dotted #e5e5e5;
        }
        svg,
        img {
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
    .delete_item {
      color: red;
    }
    .cancel_btn {
      padding: 20px;
      background-color: #f7f7f7;
      color: #000;
      text-align: center;
      font-size: 35px;
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
        padding: 20px 0;
      }
      .nut-button {
        margin-top: 40px;
      }
    }
  }
  .move_box {
    .top_back {
      margin-bottom: 10px;
      p {
        margin: 0 5px;
        color: #000;
      }
    }
    .file_list {
      height: 600px;
      overflow-y: auto;
      .list_item {
        width: 100%;
        box-sizing: border-box;
      }
      .left_icon_box {
        width: 80px;
        height: 80px;
        svg {
          width: 100px;
          height: 100px;
        }
      }
      .name_box {
        p {
          text-align: right;
          margin: 0;
          font-size: 30px;
        }
      }
    }
  }
  .list_item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px 20px 40px;
    border-top: 1px solid #efefef;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    :deep {
      .nut-image {
        width: 100%;
        height: 100%;
      }
    }
    &:active {
      background: #cde3f5;
    }
    .left_checkMode {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      background: #f1f1f1;
      border-radius: 50%;
      img {
        width: 50px !important;
        height: 50px !important;
        border-radius: 0.4rem;
      }
      &.is_checked {
        width: 60px;
        height: 60px;
        margin: 10px;
        background: #2e70ff;
      }
      .ok_icon {
        color: #fff;
      }
    }
    .type_icon {
      width: 80px;
      height: 80px;
    }
    .left_icon_box {
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 0.3rem;
      }
    }
    .name_box {
      width: calc(100% - 500px);
      flex: 1;
      margin-left: 40px;
      margin-right: 30px;
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
    .ipfs_info {
      display: flex;
      align-items: center;
      width: 100px;
      height: 80px;
      svg,
      img {
        object-fit: contain;
        height: 1.5rem;
        width: 1.5rem;
        margin-left: 20px;
        cursor: pointer;
      }
    }
    .right_div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
    }
    .right_radio {
      height: 80px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep {
        .nut-checkbox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-right: 0;
        }
        .nut-checkbox__label {
          display: none;
        }
      }
    }
    .right_more {
      width: 50px;
      height: 50px;
      color: #ccc;
    }
  }
  .detail_over {
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
          .van-image-preview__swipe-item {
            background: #000;
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
  .detail_back {
    width: 60px;
    height: 60px;
  }
  .top_back {
    margin: 0;
    color: $main_blue;
  }
  .top_title {
    margin-left: 80px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>
