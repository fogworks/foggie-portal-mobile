<template>
  <div class="top_box">
    <TopBack class="detail_top">
      <div v-if="bucketName">
        <img src="@/assets/bucketIcon.svg" class="bucket_detail_smal" />
        {{ bucketName }}
        <img src="@/assets/bucketIcon.svg" class="bucket_detail_smal" />
      </div>
      <div v-else> Order:{{ order_id }} </div>
      <span class="benefit_analysis" v-if="orderInfo.value.state == '0'" @click="closedOrder">
        <img src="@/assets/orderclosed.svg" class="bucket_detail_smal" />
      </span>
      <span class="benefit_analysis" v-else @click="gotoSummary(order_id, orderInfo.value.state)">
        <img src="@/assets/analysis.svg" class="bucket_detail_smal" />
      </span>
    </TopBack>
    <nut-row class="order-detail">
      <nut-col :span="24" class="order-des">
        <span class="span1">ID: {{ orderInfo.value?.foggie_id }}</span>

        <span class="span2">Expiration: {{ transferUTCTime(orderInfo.value.expire) }}</span>
      </nut-col>
      <nut-col :span="24" class="order-circle">
        <nut-circle-progress :progress="((usedSize || 0) / (orderInfo.value.total_space || 1)) * 100" radius="60" color="#5460FE">
          Used: {{ Math.round((usedSize / orderInfo.value.total_space) * 10000) / 100 }} %
        </nut-circle-progress>
      </nut-col>
      <nut-col :span="24" class="order-count">
        <nut-cell>
          <IconMdiF color="#9F9BEF" />
          File:{{ filesCount }}
        </nut-cell>
        <nut-cell>
          <IconSpace color="#7F7AE9" />
          Space: {{ getfilesize(orderInfo.value.total_space, 'B') }}
        </nut-cell>
        <nut-cell>
          <IconRiPie color="#7F7AE9" />
          Used: {{ getfilesize(usedSize, 'B') }}
        </nut-cell>
      </nut-col>
    </nut-row>
  </div>
  <div class="detail_box">
    <div class="type_check_box type_check_box1">
      <div class="type_check">
        <div class="type_item" @click="router.push({ name: 'RecordsList', query: { ...route.query, category: 1 } })">
          <div class="svg_box svg_box2 order-icon-node-tree">
            <IconRiNodeTree color="#fff" />
          </div>
          <p>Merkle</p>
        </div>
        <div class="type_item" @click="router.push({ name: 'RecordsList', query: { ...route.query, category: 2 } })">
          <div class="svg_box svg_box2 order-icon-send-to-back">
            <IconRiSendToBack color="#fff" />
          </div>
          <p>Challenge</p>
        </div>
        <div class="type_item" @click="router.push({ name: 'RecordsList', query: { ...route.query, category: 3 } })">
          <div class="svg_box svg_box2 order-icon-input-cursor-move">
            <IconRiInputCursorMove color="#fff" />
          </div>
          <p>Arbitrate</p>
        </div>
      </div>

      <div :class="['type_item', 's3key', orderInfo.value.electronic_type == '1' ? 'router_disabled' : '']" @click="getKey">
        <div class="svg_box svg_box2 order-icon-recycle">
          <keySolid color="#fff" />
        </div>
        <p>S3 Access</p>
      </div>
    </div>
    <div class="type_check_box" style="margin-top: 5px; border-radius: 10px; background-color: #fff">
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 1 } })">
        <div class="svg_box">
          <IconImage></IconImage>
        </div>
        <p>Images</p>
      </div>
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 3 } })">
        <div class="svg_box">
          <IconAudio2></IconAudio2>
        </div>
        <p>Audio</p>
      </div>
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 4 } })">
        <div class="svg_box">
          <IconDocument></IconDocument>
        </div>
        <p>Documents</p>
      </div>
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 2 } })">
        <div class="svg_box">
          <IconVideo></IconVideo>
        </div>
        <p>Video</p>
      </div>
    </div>
    <div class="today_file">
      <span class="title" @click="uploadProgressIsShow = !uploadProgressIsShow">Recent Files</span>
      <span class="see_all" @click="router.push({ name: 'FileList', query: { ...route.query, category: 0, bucketName } })">See All ></span>
    </div>

    <!-- <Transition name="fade-transform" mode="out-in">
      <div v-if="uploadProgressIsShow" style="margin-top: 30px">
        <nut-progress
          class="upload_progress"
          :percentage="uploadProgress"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="icon"
        >
          <template #icon-name>
            <template v-if="uploadStatus == 'uploading'">
              <div style="display: flex; justify-content: space-between; width: 100%">
                <div style="margin-left: 25px"> {{ curUploadFileSize }}</div>
                <div>
                  <span>{{ uploadProgress }} %</span>
                  <em style="margin-left: 10px">{{ formatedAverageSpeed }}</em>
                  <i style="margin-left: 15px">{{ formatedTimeRemaining }}</i>
                </div>
              </div>
            </template>
            <template v-if="uploadStatus == 'success'">
              <span>Uploaded successfully</span>
              <Success style="margin-left: 10px" color="#4CC71E" class="nut-icon-am-bounce nut-icon-am-infinite"></Success>
            </template>
            <template v-if="uploadStatus == 'error'">
              <span>Upload Failed</span>
              <MaskClose style="margin-left: 10px" color="#FA2C19"></MaskClose>
            </template>
          </template>
        </nut-progress>
      </div>
    </Transition> -->

    <nut-infinite-loading load-more-txt="No more content" v-if="tableData.length" :has-more="false" class="file_list">
      <div @click="handleRow(item)" :class="['list_item']" v-show="index < 4" v-for="(item, index) in tableData" :key="index">
        <div :class="['left_icon_box']">
          <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
          <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
          <img v-else-if="item.category == 4" src="@/assets/svg/home/icon_pdf.svg" alt="" />
          <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
          <img v-else-if="item.imgUrl" :src="item.imgUrl" alt="" />
          <img v-else src="@/assets/svg/home/file.svg" alt="" />
        </div>
        <div class="name_box">
          <p>{{ item.name }}</p>
          <p>{{ item.date || '' }}</p>
        </div>
      </div>
    </nut-infinite-loading>
    <nut-empty v-else description="No data,Go ahead and upload it." image="error"> </nut-empty>
    <Teleport to="body">
      <nut-overlay overlay-class="detail_over" v-if="detailShow" v-model:visible="detailShow" :close-on-click-overlay="false">
        <IconArrowLeft @click="detailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
        <HLSVideo v-if="detailRow.value.type && detailRow.value.type.split('/')[1] == 'mp4'" :imgUrl="imgUrl"></HLSVideo>
        <pre v-else-if="detailRow.value.detailType == 'txt'" id="txtContainer"></pre>
        <!-- <div v-else-if="detailRow.value.detailType == 'word'" id="odfContainer"></div> -->

        <div v-else-if="imgUrl" class="middle_img">
          <nut-image :src="imgUrl" fit="contain" position="center">
            <template #loading>
              <Loading width="16px" height="16px" name="loading" />
            </template>
          </nut-image>
        </div>
        <div class="bottom_action">
          <div>
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

    <!-- share -->
    <Teleport to="body">
      <nut-popup
        v-if="showShareDialog"
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
              <span style="display: flex"
                >{{ desc }} <IconEdit style="margin-left: 5px; color: #abacff" @click="periodShow = true"></IconEdit
              ></span>
            </template>
          </nut-cell>
          <template v-if="shareType">
            <p style="text-align: left; color: #666666; margin-bottom: 5px">Descriptions:</p>
            <nut-textarea rows="3" v-model="imgDesc" />
          </template>
          <nut-popup position="bottom" v-model:visible="periodShow">
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
            @click="() => confirmHttpShare(shareType, detailRow.value, accessKeyId, secretAccessKey, bucketName)"
            >Confirm</nut-button
          >
        </div>
        <div class="share_info_box" v-else>
          <div v-if="shareRefContent.ipfsStr && +detailRow.value.originalSize <= orderInfo.value.total_space * 0.01">
            <img @click="confirmShare" src="@/assets/ipfs.png" alt="" />
            IPFS Link
            <!-- <IconCopy @click="copyLink(shareRefContent.ipfsStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconHttp
              @click="
                shareType = '';
                isReady = true;
              "
            ></IconHttp>
            HTTP Link
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconTwitter
              @click="
                shareType = 'twitter';
                isReady = true;
              "
            ></IconTwitter>
            Twitter
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconFacebook
              @click="
                shareType = 'faceBook';
                isReady = true;
              "
            ></IconFacebook>
            Facebook
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
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
      </nut-popup>
    </Teleport>

    <!-- <nut-uploader
      v-if="isMobileOrder"
      :url="uploadUri"
      :timeout="1000 * 60 * 60"
      :before-upload="beforeupload"
      :disabled="isDisabled"
      :data="formData"
      :headers="formData"
      :before-xhr-upload="beforeXhrUpload"
      :xhr-state="successStatus"
      @success="uploadSuccess"
      @progress="onProgress"
      @start="onStart"
      @failure="onFailure"
      @change="onChange"
      ref="uploadRef"
      class="upload_class"
    >
      <nut-button type="success" class="upload_btn" size="small">+</nut-button>
    </nut-uploader> -->
    <!-- dialogVisible -->
    <Teleport to="body">
      <nut-dialog
        v-model:visible="dialogVisible"
        title="Bucket Name"
        :close-on-click-overlay="false"
        :show-cancel="false"
        :show-confirm="false"
        custom-class="CustomName"
        overlayClass="CustomOverlay"
      >
        <template #header>
          <span class="icon" style="margin-right: 5px">
            <IconBucket color="#000"></IconBucket>
          </span>
          Create a Bucket
        </template>
        <p class="bucket_tip" style="text-align: left; word-break: break-word"
          >Buckets are used to store and organize your files.Custom names can only contain lowercase letters, numbers, periods, and dashes
          (-), and must start and end with lowercase letters or numbers</p
        >
        <p
          style="
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fdfdfd;
          "
        >
          <span>Bucket Name</span> <span>Required</span>
        </p>
        <nut-input v-model="newBucketName" placeholder="Please enter Custom Name" max-length="10" min-length="8"></nut-input>
        <template #footer>
          <nut-button type="primary" style="font-size: 12px" @click="router.go(-1)">Operate Later</nut-button>
          <nut-button type="primary"  @click="createName" :loading="isNameLoading">Confirm</nut-button>
        </template>
      </nut-dialog>
    </Teleport>
  </div>
  <!-- <Transition name="fade-transform" mode="out-in">
      <div v-if="uploadProgressIsShow" style="margin-top: 30px">
        <nut-progress
          class="upload_progress"
          :percentage="uploadProgress"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="icon"
          :show-text="false"
        >
          <template #icon-name>
            <template v-if="uploadStatus == 'uploading'">
              <div  style="display: flex; justify-content: space-between;width: 100%;">
                <div style="margin-left: 25px;"> {{ curUploadFileSize }}</div>
                <div>
                  <span>{{ uploadProgress }} %</span>
                  <em style="margin-left: 10px">{{ formatedAverageSpeed }}</em>
                  <i style="margin-left: 15px">{{ formatedTimeRemaining }}</i>
                </div>
              </div>
            </template>
            <template v-if="uploadStatus == 'success'">
              <span>Uploaded successfully</span>
              <Success style="margin-left: 10px" color="#4CC71E" class="nut-icon-am-bounce nut-icon-am-infinite"></Success>
            </template>
            <template v-if="uploadStatus == 'error'">
              <span>Upload Failed</span>
              <MaskClose style="margin-left: 10px" color="#FA2C19"></MaskClose>
            </template>
          </template>
        </nut-progress>
      </div>
    </Transition> -->

  <uploader
    v-if="isMobileOrder"
    :bucketName="bucketName"
    :accessKeyId="accessKeyId"
    :secretAccessKey="secretAccessKey"
    :orderInfo="orderInfo"
    @uploadComplete="uploadComplete"
  ></uploader>

  <Teleport to="body">
    <nut-action-sheet v-model:visible="sheetVisible" title="Links">
      <div class="custom-action_sheet">
        <div @click="choose('google')">
          <img src="@/assets/googlelogo_preview.png" style="width: 80px; height: 25px" />
        </div>
        <div @click="choose('Microsoft')">
          <img src="@/assets/removebg-preview.png" style="width: 80px; height: 25px" />
        </div>

        <div @click="choose('other')">
          <img src="@/assets/otherplugins.png" style="width: 30px; height: 30px" />
          <div style="font-size: 18px; margin-left: 5px">Other</div>
        </div>

        <div @click="sheetVisible = false"> Cancel </div>
      </div>
    </nut-action-sheet>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch, createVNode } from 'vue';
  // import recycleFill from '~icons/home/recycle-fill';
  // import IconAudio from '~icons/home/audio.svg';
  import IconEdit from '~icons/iconamoon/edit-fill.svg';
  import IconPinterest from '~icons/logos/pinterest.svg';
  import IconSlack from '~icons/home/slack.svg';
  import IconBucket from '~icons/home/bucket.svg';
  import IconShare from '~icons/home/share.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconTwitter from '~icons/home/twitter.svg';
  import IconHttp from '~icons/home/http.svg';
  import IconFacebook from '~icons/devicon/facebook.svg';
  import { delay, throttle } from 'lodash';
  import IconAudio2 from '~icons/home/audio2.svg';
  import IconMore from '~icons/home/more.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconVideo from '~icons/home/video.svg';
  //   import IconMdiF from '~icons/mdi/file-cloud';
  //   import IconRiPie from '~icons/ri/pie-chart-fill';
  import IconMdiF from '~icons/home/png.svg';
  import IconRiPie from '~icons/home/pie.svg';
  import IconSpace from '~icons/home/space.svg';
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';
  import keySolid from '~icons/teenyicons/key-solid';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  // import AESHelper from './AESHelper';
  // import { Image } from '@nutui/icons-vue';
  import { HeartFill, Success, MaskClose } from '@nutui/icons-vue';
  import { showDialog } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute, useRouter } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import useShare from './useShare.js';
  import { showToast } from '@nutui/nutui';
  import { transferUTCTime, getfilesize } from '@/utils/util';
  import { check_name, order_name_set, get_merkle, calc_merkle, valid_upload } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { useUserStore } from '@/store/modules/user';
  import { getSecondTime } from '@/utils/util';
  import { update_order_size, closedOrderApi } from '@/api/amb';

  import { status } from 'grpc';
  import HLSVideo from './hlsVideo.vue';
  import uploader from './uploader.vue';

  const { accessKeyId, secretAccessKey, bucketName, header, metadata, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
  provide('getOrderInfo', getOrderInfo);
  const {
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
    ipfsPin,
    showShareDialog,
    shareRefContent,
    copyContent,
    confirmHttpShare,
    getHttpShare,
  } = useShare(orderInfo, header, deviceType);
  let server;
  const route = useRoute();
  const router = useRouter();

  const successStatus = ref<number>(204);
  const isNameLoading = ref(false);
  const sheetVisible = ref(false);

  const userStore = useUserStore();
  const uuid = computed(() => userStore.getUserInfo.uuid);
  const dmcName = computed(() => userStore.getUserInfo.dmc);
  const isMobileOrder = computed(() => {
    if (orderInfo.value.electronic_type == '0') {
      return true;
    } else {
      return false;
    }
  });

  const dialogVisible = ref<boolean>(false);

  // let details = reactive<any>({ data: {} });

  // import { get_order_node } from '@/api/amb';
  const uploadRef = ref<any>(null);
  // const bucketName = ref<string>('');
  // const accessKeyId = ref<string>('');
  // const secretAccessKey = ref<string>('');
  const uploadUri = ref<string>('');
  const prefix = ref<string>('');
  const showCreateName = ref<boolean>(true);
  const newBucketName = ref<string>('');
  const tableData = ref<array>([]);
  const tableLoading = ref<boolean>(false);
  const isDisabled = ref<boolean>(false);
  const btnLoading = ref<boolean>(false);
  const formData = ref<any>({});
  const filesCount = ref<any>(0);
  const usedSize = ref<any>(0);

  const memo = ref<any>('');
  const order_id = ref<any>('');
  const amb_uuid = ref<any>('');
  const minerIp = ref<string>('');

  // memo.value = '963cbdb1-5600-11ee-9223-f04da274e59a_Order_buy';
  // order_id.value = '1281';
  memo.value = route.query.uuid;
  order_id.value = route.query.id;
  amb_uuid.value = route.query.amb_uuid;
  // search_bill(memo.value, order_id.value).then((res) => {
  //   console.log('search_bill', res);
  //   minerIp.value = res?.data?.mp_ipaddr;
  // });
  let merkleTimeOut;
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: order_id.value,
    };
    valid_upload(d).then((res) => {
      if (res.data?.data) {
        // TODO
        isDisabled.value = true;
        if (timeout) {
          merkleTimeOut = setTimeout(() => {
            getMerkleState(timeout);
          }, 30000);
        }
      } else {
        if (isDisabled.value) {
          // showToast.success('Merkle creation is complete and you can proceed to upload the file');
        }
        isDisabled.value = false;
      }
    });
  };
  const beforeupload = (file: any) => {
    return new Promise(async (resolve, reject) => {
      let nowTime = new Date().getTime();
      let endTime = new Date(orderInfo.value.created_at).getTime() + 1000 * 60 * 3;
      let time = ((+endTime - +nowTime) / 1000).toFixed(0);
      if (time > 4 * 60) {
        time = time - 60 * 60;
      }
      if (time > 0) {
        let content = 'Upload files after ' + getSecondTime(+time);
        showToast.fail(content);
        reject(false);
      }
      const fileCopy = file[0]; // 保存file变量的副本
      const d = {
        orderId: order_id.value,
      };
      let merkleRes = await valid_upload(d);
      if (merkleRes?.data) {
        isDisabled.value = false;
      } else {
        // showToast.fail('Merkle creation is in progress, please wait until it is complete before uploading.');
        isDisabled.value = true;
        getMerkleState(true);
        reject();
      }

      uploadUri.value = `https://${bucketName.value}.devus.u2i.net:6008/o/`;

      const policy = {
        expiration: new Date(Date.now() + 3600 * 1000), // 过期时间（1小时后）
        conditions: [
          { bucket: bucketName.value },
          { acl: 'public-read' }, // 设置 ACL（可根据需求更改）
          ['starts-with', fileCopy, prefix.value], // Key 以 "uploads/" 开头
          ['starts-with', '$Content-Type', ''], // Content-Type 为空
        ],
      };
      const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');

      let hmac = HmacSHA1(policyBase64, secretAccessKey.value);
      const signature = enc.Base64.stringify(hmac);

      formData.value = {};
      formData.value.Key = encodeURIComponent(prefix.value + fileCopy.name);
      formData.value.Policy = policyBase64;
      formData.value.Signature = signature;
      formData.value.Awsaccesskeyid = accessKeyId.value;

      formData.value.category = getType(fileCopy.name);
      resolve([fileCopy]);
    });
  };

  const getType = (fileName: string) => {
    if (fileName.endsWith('.jpeg') || fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.endsWith('.svg')) {
      return 1;
    } else if (fileName.endsWith('.mp4') || fileName.endsWith('.avi') || fileName.endsWith('.mp4')) {
      return 2;
    } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
      return 4;
    } else if (fileName.endsWith('.zip') || fileName.endsWith('.rar') || fileName.endsWith('.gz') || fileName.endsWith('.tar')) {
      return 5;
    } else if (fileName.endsWith('.cmd')) {
      return 5;
    } else if (fileName.endsWith('.css')) {
      return 5;
    } else if (fileName.endsWith('.mp3')) {
      return 3;
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      return 4;
    } else if (fileName.endsWith('.pdf')) {
      return 4;
    } else if (fileName.endsWith('.ppt')) {
      return 4;
    } else if (fileName.endsWith('.text') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
      return 4;
    } else if (fileName.endsWith('.html')) {
      return 5;
    } else if (fileName.endsWith('/')) {
      return 5;
    } else {
      return 5;
    }
  };
  const detailShow = ref(false);
  const imgUrl = ref('');
  const detailRow = reactive({ value: {} });

  const curSelectSrc = ref(''); //当前选择文件的src
  const curSelectType = ref(''); //当前选择文件的类型

  const handleRow = (row) => {
    detailRow.value = row;
    const type = row.name.substring(row.name.lastIndexOf('.') + 1);
    console.log(row.imgUrlLarge);
    if (type == 'pdf') {
      curSelectSrc.value = row.imgUrlLarge;
      curSelectType.value = 'pdf';
      sheetVisible.value = true;
    } else if (type == 'txt') {
      detailRow.value.detailType = 'txt';
      detailShow.value = true;
      fetch(row.imgUrlLarge)
        .then((response) => response.text())
        .then((text) => {
          document.getElementById('txtContainer').textContent = text;
        });
    } else if (['xls', 'xlsx'].includes(type)) {
      curSelectSrc.value = row.imgUrlLarge;
      curSelectType.value = 'excel';
      sheetVisible.value = true;
    } else if (['doc', 'docx'].includes(type)) {
      curSelectSrc.value = row.imgUrlLarge;
      curSelectType.value = 'docx';
      sheetVisible.value = true;
    } else if (['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(type)) {
      detailRow.value.detailType = 'word';
      router.push({ path: '/filePreview', query: { fileSrc: row.imgUrlLarge, fileType: 'docx' } });
      // window.open('https://docs.google.com/viewer?url=' +  encodeURIComponent(row.imgUrlLarge));
      // window.open("https://view.xdocin.com/view?src=" + encodeURIComponent(row.imgUrlLarge) );
      console.log(row.imgUrlLarge);
    } else if (row.imgUrlLarge) {
      imgUrl.value = row.imgUrlLarge;
      detailShow.value = true;
    } else {
      let prefix;
      if (row.isDir) {
        prefix = detailRow.value.fullName.split('/').slice(0, -2);
      } else {
        prefix = detailRow.value.fullName.split('/').slice(0, -1);
      }
      console.log(detailRow.value.fullName, prefix);

      router.push({
        name: 'FileList',
        query: { ...route.query, category: 0, prefix: prefix.join('/') },
      });
    }
  };

  function choose(type) {
    console.log(type);
    console.log(curSelectSrc.value);
    console.log(curSelectType.value);

    switch (type) {
      case 'google':
        window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(curSelectSrc.value)}`);
        break;
      case 'Microsoft':
        window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(curSelectSrc.value)}`);
        break;
      case 'other':
        router.push({ path: '/filePreview', query: { fileSrc: curSelectSrc.value, fileType: curSelectType.value } });
        break;
    }
  }

  const handlerClick = async (type: string) => {
    const checkData = JSON.parse(JSON.stringify(detailRow.value));
    console.log(checkData, 'checkData');

    if (type === 'download') {
      const objectKey = encodeURIComponent(checkData.fullName);
      const headers = getSignHeaders(objectKey);
      const url = `https://${bucketName.value}.devus.u2i.net:6008/o/${objectKey}`;
      fetch(url, { method: 'GET', headers })
        .then((response) => {
          if (response.ok) {
            // 创建一个 Blob 对象，并将响应数据写入其中
            console.log('Success', response);
            return response.blob();
          } else {
            // 处理错误响应
            console.error('Error:', response.status, response.statusText);
          }
        })
        .then((blob) => {
          console.log(blob, 'blob');

          // 创建一个 <a> 元素，并设置其 href 属性为 Blob URL
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = checkData.fullName;

          // 将 <a> 元素添加到文档中，并模拟点击
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch((error) => {
          // 处理网络错误
          console.error('Network Error:', error);
        });
    } else if (type === 'share') {
      await doShare(checkData);
    }
  };
  const getSignHeaders = (objectKey) => {
    // const objectKey = encodeURIComponent(checkData[0].fullName);
    const date = new Date().toUTCString();

    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';
    // const canonicalizedResource = `/o/${bucketName}/${objectKey}`;
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

  function secondsToStr(seconds) {
    let hours: any = Math.floor(seconds / 3600).toFixed(0);
    let minutes: any = Math.floor((seconds % 3600) / 60).toFixed(0);
    let remainingSeconds: any = (seconds % 60).toFixed(0);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    if (hours >= 24 || seconds < 0) {
      return '- -';
    } else {
      return hours + '：' + minutes + '：' + remainingSeconds;
    }
  }
  const formatSize = (size: number) => {
    size = Number(size);
    if (size < 1024) {
      return size.toFixed(0) + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
    }
  };

  const curUploadFileSize = computed(() => formatSize(lastDownloadNumer.value));
  // 剩余上传时间
  const formatedTimeRemaining = computed(() => {
    if (timeRemaining.value === Number.POSITIVE_INFINITY || timeRemaining.value === 0) {
      return '';
    }
    let parsedTimeRemaining = secondsToStr(timeRemaining.value);

    return parsedTimeRemaining;
  });

  const formatedAverageSpeed = computed(() => `${formatSize(averageSpeed.value)} / s`);
  const uploadStatus = ref('');
  const averageSpeed = ref(0); // 当前块 上传的文件大小
  const timeRemaining = ref(0); // 剩余上传时间(s)
  const lastDownloadNumer = ref(0); // 最后一次上传的文件大小
  const uploadProgressIsShow = ref(false); // 是否展示上传进度
  const uploadProgress = ref(0); // 上传进度
  const downloadProgress = throttle(
    function (loaded, total) {
      if (loaded < lastDownloadNumer.value) return;
      averageSpeed.value = loaded - lastDownloadNumer.value;
      timeRemaining.value = (total - loaded) / averageSpeed.value;
      lastDownloadNumer.value = loaded;
    },
    1000,
    { leading: true, trailing: true },
  );

  const uploadSuccess = async ({ responseText, option, fileItem }: any) => {
    console.log('uploadSuccess', responseText, option, fileItem);
    console.log(option, 'option');
    uploadStatus.value = 'success';

    delay(() => {
      uploadProgressIsShow.value = false;
    }, 2000);
    getFileList();
    const updateUsedSpace = () => {
      return update_order_size({
        used_space: +option.sourceFile.size,
        order_id: +order_id.value,
        device_type: 'mobile',
      })
        .then((res) => {
          if (res.code == 200) {
            // getOrderInfo(false);
            uploadRef.value.clearUploadQueue();
          } else {
            setTimeout(() => {
              updateUsedSpace();
            }, 3000);
          }
        })
        .catch(() => {
          setTimeout(() => {
            updateUsedSpace();
          }, 3000);
        });
    };
    await updateUsedSpace();
    if (orderInfo.value.mobile_upload == undefined) {
      await getOrderInfo(false);
    }

    // let uploadLine = 1024 * 1024 * 50;
    let uploadLine = 1024 * 1024 * 1;

    let used_space = usedSize || 0;
    if (uploadLine >= used_space) {
      // let needSpace = getfilesize(uploadLine - used_space);
      // showToast.text(`At least ${needSpace} of files need to be uploaded to submit Merkle`);
      return false;
    }
    const d = {
      orderId: order_id.value,
      uuid: amb_uuid.value,
      // uuid: 'fb08ae12-c5fb-4b24-88d9-746339b72fd0',
      orderUuid: memo.value,
      rpc: orderInfo.value.rpc,
    };
    calc_merkle(d).then((res) => {
      console.log('calc_merkle-----', res);
    });
    // uploadRef.value.clearUploadQueue();
  };

  const uploadComplete = () => {
    console.log('uploadComplete');
    getFileList();
  };

  const onProgress = ({ event, options, percentage }: any) => {
    console.log('onProgress', event, options, percentage);
    uploadProgress.value = percentage;
    downloadProgress(event.loaded, event.total);
  };

  const onStart = ({ options }: any) => {
    uploadProgress.value = 0;
    uploadProgressIsShow.value = true;
    uploadStatus.value = 'uploading';
    console.log('onStart', options);
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    console.log('onFailure', '-----', responseText, '-----', option, '-----', fileItem);
    delay(() => {
      uploadProgressIsShow.value = false;
    }, 3000);
    uploadStatus.value = 'error';
    uploadRef.value.clearUploadQueue();
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('--------------2');
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
  };
  const getKey = () => {
    if (orderInfo.value.electronic_type == '1') {
      return false;
    } else {
      router.push({
        name: 'getKey',
        query: { uuid: orderInfo.value.uuid, bucketName: bucketName.value, domain: orderInfo.value.mp_domain },
      });
    }
  };

  const createName = async () => {
    if (!showCreateName.value) {
      showCreateName.value = true;
    } else if (newBucketName.value) {
      let reg = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9]))*(?:\.[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9]))*)*$/;
      if (newBucketName.value.length < 8 || newBucketName.value.length > 10) {
        showToast.text('Please enter a name with a length of 8-10 digits');
        return;
      }
      if (!reg.test(newBucketName.value)) {
        showToast.text(
          'Custom names can only contain lowercase letters, numbers, periods, and dashes (-), and must start and end with lowercase letters or numbers',
        );
        return;
      }
      // check name
      isNameLoading.value = true;
      const result = await check_name(newBucketName.value);
      if (result?.data?.domain) {
        console.log('name is exist');
        isNameLoading.value = false;
        return;
      }
      let order_data = {
        is_domain: true,
        name: newBucketName.value,
        order_uuid: orderInfo.value.uuid,
      };
      //   const order_result = await order_name_set(order_data);
      order_name_set(order_data).then(
        (order_result) => {
          isNameLoading.value = false;
          if (order_result.code == 200) {
            if (!order_result?.data?.result) {
              bucketName.value = newBucketName.value;
              getOrderInfo();
              getSummary();
              dialogVisible.value = false;
              return;
            }
          }
        },
        (err) => {
          showToast.text(err.message);
          isNameLoading.value = false;
        },
      );
    }
  };
  const handleImg = (item: { cid: any; key: any }, type: string, isDir: boolean) => {
    let imgHttpLink = '';
    let imgHttpLarge = '';
    type = type.toLowerCase();
    let isSystemImg = false;
    let cid = item.cid;
    let key = item.key;

    let ip = orderInfo.value.rpc.split(':')[0];
    let port = orderInfo.value.rpc.split(':')[1];
    let Id = orderInfo.value.foggie_id;
    let peerId = orderInfo.value.peer_id;
    if (type === 'png' || type === 'bmp' || type === 'gif' || type === 'jpeg' || type === 'jpg' || type === 'svg') {
      type = 'img';
      console.log('----------img', accessKeyId.value, accessKeyId.value, bucketName.value, item.key);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
      // console.log('--------imgHttpLarge', imgHttpLarge);
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm') {
      type = 'video';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
    } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(type)) {
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
    } else {
      isSystemImg = true;
    }
    if (isDir) {
      isSystemImg = true;
    }
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    let ip = `https://${bucketName.value}.devus.u2i.net:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);
    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix('');
    listObject.setDelimiter('');
    listObject.setEncodingType('');
    listObject.setMaxKeys(30);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('lastmodifiedtime desc');
    listObject.setTags('');
    listObject.setCategory(0);
    listObject.setDate('');
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header);
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

          initRemoteData(transferData, reset, 0);
        } else if (err) {
          console.log('err----list', err);
        }
      },
    );
  }
  const initRemoteData = (
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
      showToast.hide(1);
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
      let name = decodeURIComponent(data.commonPrefixes[i]);
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.prefix === el && data.prefixpins[i]?.cid) {
          cur_cid = data.prefixpins[i].cid;
        }
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 1,
        fileType: 1,

        fullName: decodeURIComponent(data.commonPrefixes[i]),
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

      let name = decodeURIComponent(data.content[j].key);
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0 && name[name.length - 1] != '/') {
        name = name.split('/')[name.split('/').length - 1];
      } else if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 2];
      }
      let isPersistent = data.content[j].isPersistent;

      let item = {
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        category: data.content[j].category,
        fileType: data.content[j].contentType,
        fullName: decodeURIComponent(data.content[j].key),
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
        imgUrl: url,
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
        isPin: data.content[j].isPin,
        isPinCyfs: data.content[j].isPinCyfs,
      };

      tableData.value.push(item);
    }
    console.log(data, 'data');
    console.log(tableData.value, '11111111111111');
    tableLoading.value = false;
    showToast.hide(1);
  };

  const getKeys = () => {
    return new Prmise((resolve, reject) => {
      let server = new grpcService.default.ServiceClient(`https://${bucketName.value}.devus.u2i.net:7007`, null, null);
      let request = new Prox.default.ProxGetCredRequest();
      request.setHeader(header);
      server.listCreds(request, {}, (err: any, res: { array: any }) => {
        if (err) {
          console.log('err------:', err);
          reject(false);
        } else if (res.array.length > 0) {
          accessKeyId.value = res.array[0][0][0];
          secretAccessKey.value = res.array[0][0][1];
          reject(true);
        }
      });
    });
  };
  const setDefaultName = () => {
    let orderName = route.query.id;
    let length = 10 - orderName.toString().length;
    const _dmcName = dmcName.value ? dmcName.value : 'dmcaccount';
    let str = `${_dmcName.substring(0, length)}${orderName}`;
    newBucketName.value = str;
  };
  const gotoSummary = (order_id, state) => {
    console.log(order_id, state, 'order_id, state');
    router.push({ name: 'orderSummary', query: { id: order_id, status: state } });
  };
  onMounted(async () => {
    await getOrderInfo();

    // if (orderInfo.value.electronic_type == '0') {
    if (bucketName.value) {
      getFileList();
      getSummary();
    } else {
      dialogVisible.value = true;
      setDefaultName();
    }
    // } else {
    //   getFileList();
    //   getSummary();
    // }
  });
  const getSummary = () => {
    return new Promise((resolve, reject) => {
      let server = new grpcService.default.ServiceClient(`https://${bucketName.value}.devus.u2i.net:7007`, null, null);
      let request = new Prox.default.ProxRequestSummaryIds();
      request.setHeader(header);

      request.setIdsList([orderInfo.value.foggie_id]);

      console.log(`https://${bucketName.value}.devus.u2i.net:7007`, 'bucketNamebucketNamebucketNamebucketName');
      console.log(request, 'requestrequestrequestrequest');

      server.summaryInfo(request, metadata.value, (err: any, res: { array: any }) => {
        if (err) {
          console.log('errsummry------:', err);
          // reject(false);
          resolve(false);
        } else {
          const contentList = res.getContentsList().map((el) => {
            return {
              count: el.getCount(),
              id: el.getId(),
              total: el.getTotal(),
            };
          });
          console.log(contentList, 'contentListcontentListcontentListcontentList');

          filesCount.value = contentList?.[0]?.count || 0;
          usedSize.value = contentList?.[0]?.total || 0;
          resolve(usedSize.value);
        }
      });
    });
  };
  function closedOrder() {
    showDialog({
      title: 'Cancel order',
      content: createVNode('span', { style: {} }, 'Are you sure you want to cancel this order?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {
        // console.log('取消');
      },
      onOk: () => {
        closedOrderApi({ uuid: orderInfo.value.amb_uuid, orderId: orderInfo.value.orderId }).then((res) => {
          if (res.code == 200) {
            router.replace({ name: 'orderSummary', query: { id: orderInfo.value.orderId, type: 'history', status: 5 } });
          } else {
            showToast.fail('Cancel failed please try again');
          }
        });
      },
    });
  }
  provide('getSummary', getSummary);
  onDeactivated(() => {
    if (merkleTimeOut) clearTimeout(merkleTimeOut);
  });
  onUnmounted(() => {
    if (merkleTimeOut) clearTimeout(merkleTimeOut);
  });
  watch(
    () => route.query,
    async () => {
      dialogVisible.value = false;
      await getOrderInfo();
      // if (orderInfo.value.electronic_type == '0') {
      if (bucketName.value) {
        getFileList();
      } else {
        dialogVisible.value = true;
        setDefaultName();
      }
      // } else {
      //   getFileList();
      // }
    },
    { deep: true },
  );
  provide('isMobileOrder', isMobileOrder);
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
    right: 10px;
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

  .bucket_name_tip {
    word-break: break-word;
    font-size: 30px;
  }

  .detail_over {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 10px;
    background: #000;
    box-sizing: border-box;

    .middle_img {
    }

    .bottom_action {
      display: flex;
      justify-content: space-evenly;
      height: 200px;

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

  .order-detail {
    margin-top: 30px;
  }

  .upload_btn {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .upload_class {
    :deep {
      .nut-uploader__input {
        position: fixed !important;
        top: unset !important;
        left: unset !important;
        bottom: 150px !important;
        right: 50px !important;
        width: 80px !important;
        height: 80px !important;
      }
    }
  }

  .top_box {
    // margin: 0 30px;
    padding: 30px 10px;
    border-radius: 20px;
    background: $primary-color;

    .order-des {
      //   margin-bottom: 20px;
      color: #fff;
      //   border-bottom: 1px dashed #fff;

      .span1 {
        float: left;
        font-size: 24px;
        font-weight: bold;
      }

      .span2 {
        // margin-right: 5vw;
        float: right;
        font-size: 20px;
        font-weight: bold;
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

      .nut-cell {
        width: auto;
        white-space: nowrap;
        // height: vw;
        // margin-left: 10%;
        padding-left: 8vw;
        // border-bottom: 1px solid #fff;
        border-radius: 0;
        background: $primary-color;
        box-shadow: none;
        color: #fff;
        font-size: 24px;
        line-height: 4vw;
        font-weight: bold;
        margin: 10px 0;
      }

      svg {
        position: absolute;
        left: 2vw;
        width: 4vw;
        height: 4vw;
      }
    }
  }

  .detail_box {
    box-sizing: border-box;
    height: 100%;
    padding: 20px;

    .type_check_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px;

      .type_item {
        width: 25%;
        text-align: center;
        height: 150px;

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
          background-color: #ff8b00;
          border-radius: 50%;

          svg {
            width: 60% !important;
            height: 60% !important;
            vertical-align: middle;
          }
        }

        .order-icon-node-tree {
          background-color: #34964f;
          border-radius: 50%;

          svg {
            width: 60%;
            height: 60%;
            vertical-align: middle;
          }
        }

        .order-icon-send-to-back {
          background-color: #fcd116;
          border-radius: 50%;

          svg {
            width: 60%;
            height: 60%;
            vertical-align: middle;
          }
        }

        .order-icon-input-cursor-move {
          background-color: #5f57ff;
          border-radius: 50%;

          svg {
            width: 60%;
            height: 60%;
            vertical-align: middle;
          }
        }

        p {
          color: #051e56;
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

    .type_check_box1 {
      display: grid;
      grid-template-columns: 3fr 1fr;

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
        margin-left: 10px;
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
      margin: 30px 0;
      font-size: 32px;
      font-weight: bold;

      .title {
        font-weight: bold;
      }

      .see_all {
        color: #5460fe;
        font-size: 30px;
        // text-decoration: underline;
      }
    }

    .file_list {
      margin-top: 20px;
      background: #fff;
      border-radius: 16px;
    }

    .list_item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      border-top: 1px solid #eee;

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
        }
      }

      .name_box {
        width: calc(100% - 180px);
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

      .order-icon-recycle {
        background-color: #ff8b00;
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

  .move_box {
    .top_back {
      margin-bottom: 10px;

      p {
        margin: 0 5px;
        color: #000;
      }
    }

    .file_list {
      height: 950px;
      overflow-y: auto;

      .list_item {
        width: 100%;
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
        }
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
</style>
<style lang="scss">
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
</style>
<style lang="scss">
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
</style>
