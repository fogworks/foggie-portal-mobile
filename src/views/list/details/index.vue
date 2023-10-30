<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">
      <div v-if="bucketName">
        <img src="@/assets/bucketIcon.svg" class="bucket_detail_smal" />
        {{ bucketName }}
        <img src="@/assets/bucketIcon.svg" class="bucket_detail_smal" />
      </div>
      <div v-else> Order:{{ order_id }} </div>
      <!-- <nut-button class="creat-name" type="primary" @click="creatName" v-if="!bucketName">Creat Name</nut-button>
      <nut-input placeholder="Please enter name" v-model="newBucketName" v-if="showCreatName" /> -->
    </div>
    <nut-row class="order-detail">
      <nut-col :span="24" class="order-des">
        <span class="span2">Expiration: {{ transferUTCTime(orderInfo.value.expire) }}</span>
      </nut-col>
      <nut-col :span="24" class="order-circle">
        <nut-circle-progress
          :progress="((orderInfo.value.used_space || 0) / (orderInfo.value.total_space || 1)) * 100"
          radius="60"
          color="#5460FE"
        >
          Used: {{ Math.round(orderInfo.value.used_space / orderInfo.value.total_space) * 100 }}%
        </nut-circle-progress>
      </nut-col>
      <nut-col :span="24" class="order-count">
        <nut-cell>
          <IconMdiF color="#9F9BEF" />
          File:1000

          <!-- File 1000 -->
        </nut-cell>
        <nut-cell>
          <IconSpace color="#7F7AE9" />
          Space: {{ getfilesize(orderInfo.value.total_space, 'B') }}
        </nut-cell>
        <nut-cell>
          <IconRiPie color="#7F7AE9" />
          Used: {{ getfilesize(orderInfo.value.used_space, 'B') }}
        </nut-cell>
      </nut-col>
    </nut-row>
    <!-- <span v-if="bucketName">{{ bucketName }}</span>
    <nut-input placeholder="Please enter name" v-model="newBucketName" v-if="showCreatName" />
    <nut-button class="creat-name" type="primary" @click="creatName" v-if="!bucketName">Creat Name</nut-button> -->
  </div>
  <div class="detail_box">
    <!-- <nut-grid class="top_grid" column-num="3" direction="horizontal">
      <nut-grid-item text="Income">
        <img src="@/assets/incoming.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Merkle">
        <img src="@/assets/tree.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Challenge">
        <img src="@/assets/setting.svg" alt="" />
      </nut-grid-item>
    </nut-grid> -->
    <!-- <nut-row class="order-icons">
      <nut-col :span="6" class="order-icon-recycle">
        <IconRecycleFill color="#fff" />
      </nut-col>
      <nut-col :span="6" class="order-icon-node-tree">
        <IconRiNodeTree color="#fff" />
        <p>Merkle</p>
      </nut-col>
      <nut-col :span="6" class="order-icon-send-to-back">
        <IconRiSendToBack color="#fff" />
        <p>Changelle</p>
      </nut-col>
      <nut-col :span="6" class="order-icon-input-cursor-move">
        <IconRiInputCursorMove color="#fff" />
        <p>Arbitrate</p>
      </nut-col>
      <nut-col @click="getKey" :span="6" class="order-icon-recycle">
        <keySolid color="#fff" />
        <p>Secret Key</p>
      </nut-col>
    </nut-row> -->

    <div class="type_check_box">
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
      <div class="type_item" @click="getKey">
        <div class="svg_box svg_box2 order-icon-recycle">
          <keySolid color="#fff" />
        </div>
        <p>Secret Key</p>
      </div>
    </div>
    <div class="type_check_box">
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
      <span class="title">Recent Files</span>
      <span class="see_all" @click="router.push({ name: 'FileList', query: { ...route.query, category: 0, bucketName } })">See All ></span>
    </div>
    <nut-infinite-loading load-more-txt="No more content" v-if="tableData.length" :has-more="false" class="file_list">
      <div @click="handleRow(item)" :class="['list_item']" v-show="index < 4" v-for="(item, index) in tableData" :key="index">
        <div :class="['left_icon_box']">
          <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
          <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
          <img v-else-if="item.category == 4" src="@/assets/svg/home/document.svg" alt="" />
          <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
          <img v-else-if="item.imgUrl" :src="item.imgUrl" alt="" />
          <img v-else src="@/assets/svg/home/file.svg" alt="" />
        </div>
        <div class="name_box">
          <p>{{ item.isDir ? item.name.slice(0, item.name.length - 1) : item.name }}</p>
          <p>{{ item.date || '' }}</p>
        </div>
      </div>
    </nut-infinite-loading>
    <nut-empty v-else description="No data,Go ahead and upload it." image="error"> </nut-empty>
    <Teleport to="body">
      <nut-overlay overlay-class="detail_over" v-model:visible="detailShow" :close-on-click-overlay="false">
        <IconArrowLeft @click="detailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
        <div class="middle_img">
          <nut-image :src="imgUrl" fit="contain" position="center" />
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
      <nut-popup @closed="isReady = false" position="bottom" closeable round :style="{ height: '200px' }" v-model:visible="showShareDialog">
        <div v-if="isReady" class="rename_box move_box">
          <nut-cell style="margin-top: 50px" title="Access Period" :desc="desc" @click="periodShow = true"></nut-cell>
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
          <nut-button type="info" block @click="() => confirmHttpShare(shareType, detailRow)">Confirm</nut-button>
        </div>
        <div class="share_info_box" v-else>
          <div v-if="shareRefContent.ipfsStr && +detailRow.originalSize <= orderInfo.value.total_space * 0.01">
            <img @click="confirmShare" src="@/assets/ipfs.png" alt="" />
            IPFS Link
            <!-- <IconCopy @click="copyLink(shareRefContent.ipfsStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconHttp @click="isReady = true"></IconHttp>
            HTTP Link
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconTwitter @click="isReady = true"></IconTwitter>
            Twitter
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
          </div>
          <div v-if="shareRefContent.httpStr">
            <IconFacebook @click="isReady = true"></IconFacebook>
            Facebook
            <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
          </div>
        </div>
      </nut-popup>
    </Teleport>

    <nut-uploader
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
    </nut-uploader>
    <nut-dialog
      v-model:visible="dialogVisible"
      title="Custom Name"
      :close-on-click-overlay="false"
      :show-cancel="false"
      :show-confirm="false"
      class="CustomName"
    >
      <nut-input v-model="newBucketName" placeholder="Please enter Custom Name" max-length="10" min-length="8"></nut-input>
      <template #footer>
        <nut-button type="primary" @click="router.go(-1)">Operate Later</nut-button>
        <nut-button type="primary" @click="creatName" :loading="isNameLoading">Confirm</nut-button>
      </template>
    </nut-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  // import recycleFill from '~icons/home/recycle-fill';
  // import IconAudio from '~icons/home/audio.svg';
  import IconShare from '~icons/home/share.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconTwitter from '~icons/home/twitter.svg';
  import IconHttp from '~icons/home/http.svg';
  import IconFacebook from '~icons/devicon/facebook.svg';

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
  import { HeartFill } from '@nutui/icons-vue';
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
  import { update_order_size, tag_mobile_upload } from '@/api/amb';
  const { accessKeyId, secretAccessKey, bucketName, header, token, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
  const {
    isReady,
    confirmShare,
    periodValue,
    confirmPeriod,
    periodShow,
    desc,
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

  const userStore = useUserStore();
  const uuid = computed(() => userStore.getUserInfo.uuid);
  const dmcName = computed(() => userStore.getUserInfo.dmc);

  const dialogVisible = ref<boolean>(false);

  // let details = reactive<any>({ data: {} });

  // import { get_order_node } from '@/api/amb';
  const uploadRef = ref<any>(null);
  // const bucketName = ref<string>('');
  // const accessKeyId = ref<string>('');
  // const secretAccessKey = ref<string>('');
  const uploadUri = ref<string>('');
  const prefix = ref<string>('');
  const showCreatName = ref<boolean>(true);
  const newBucketName = ref<string>('');
  const tableData = ref<array>([]);
  const tableLoading = ref<boolean>(false);
  const isDisabled = ref<boolean>(false);
  const btnLoading = ref<boolean>(false);
  const formData = ref<any>({});

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
          showToast.success('Merkle creation is complete and you can proceed to upload the file');
        }
        isDisabled.value = false;
      }
    });
  };
  const beforeupload = async (file: any) => {
    console.log('upload-----------', bucketName.value);
    let nowTime = new Date().getTime();
    let endTime = new Date(orderInfo.value.created_at).getTime() + 1000 * 60 * 3;
    let time = ((+endTime - +nowTime) / 1000).toFixed(0);
    if (time > 4 * 60) {
      time = time - 60 * 60;
    }
    if (time > 0) {
      let content = 'Upload files after ' + getSecondTime(+time);
      showToast.fail(content);
      return false;
    }
    const fileCopy = file[0]; // 保存file变量的副本
    const d = {
      orderId: order_id.value,
    };
    let merkleRes = await valid_upload(d);
    if (merkleRes?.data?.data) {
      showToast.fail('Merkle creation is in progress, please wait until it is complete before uploading.');
      // TODO
      isDisabled.value = true;
      getMerkleState(true);
      return;
    } else if (merkleRes?.data) {
      isDisabled.value = false;
    } else {
      showToast.fail('Failed to get Merkle status. Please try again.');
    }

    // bucketName.value = 'test11111';
    // accessKeyId.value = 'FOGaCTsgpOoeXsrtjmk5';
    // secretAccessKey.value = '8zztbNHf6CVYdadg3AXmairRZ8mTXoowzMU2sUOq';

    // uploadUri.value = '/fog/baeqacmjq/foggiebucket';
    // uploadUri.value = '/o/foggiebucket';
    uploadUri.value = `http://${bucketName.value}.devus.u2i.net:6008/o/`;
    // uploadUri.value = '/o';

    const policy = {
      expiration: new Date(Date.now() + 3600 * 1000), // 过期时间（1小时后）
      conditions: [
        { bucket: bucketName.value },
        { acl: 'public-read' }, // 设置 ACL（可根据需求更改）
        ['starts-with', fileCopy, prefix.value], // Key 以 "uploads/" 开头
        ['starts-with', '$Content-Type', ''], // Content-Type 为空
      ],
    };
    console.log('policy', policy);
    // 将 POST Policy 转换为 JSON 字符串
    const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');
    console.log('policyBase64', policyBase64);

    let hmac = HmacSHA1(policyBase64, secretAccessKey.value);
    const signature = enc.Base64.stringify(hmac);
    console.log(file, 'filefilefile');

    console.log('signature', signature);
    formData.value = {};
    formData.value.Key = encodeURIComponent(prefix.value + fileCopy.name);
    formData.value.Policy = policyBase64;
    formData.value.Signature = signature;
    formData.value.Awsaccesskeyid = accessKeyId.value;

    formData.value.category = getType(fileCopy.name);
    // formData.value.Success_action_status = 201;
    // console.log('file', file.length, file, file[0]);
    return [fileCopy];
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
  let detailRow = {};
  const handleRow = (row) => {
    detailRow = row;
    if (row.imgUrl) {
      imgUrl.value = row.imgUrlLarge;
      detailShow.value = true;
    } else {
      let prefix;
      if (row.isDir) {
        prefix = detailRow.fullName.split('/').slice(0, -2);
      } else {
        prefix = detailRow.fullName.split('/').slice(0, -1);
      }
      console.log(detailRow.fullName, prefix);

      router.push({
        name: 'FileList',
        query: { ...route.query, category: 0, prefix: prefix.join('/') },
      });
    }
  };
  const handlerClick = async (type: string) => {
    const checkData = JSON.parse(JSON.stringify(detailRow));
    console.log(checkData, 'checkData');

    if (type === 'download') {
      const objectKey = encodeURIComponent(checkData.fullName);
      const headers = getSignHeaders(objectKey);
      const url = `http://${bucketName.value}.devus.u2i.net:6008/o/${objectKey}`;
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

    console.log('==================', accessKeyId.value, secretAccessKey.value, bucketName.value, objectKey);

    const date = new Date().toUTCString();

    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';
    // const canonicalizedResource = `/o/${bucketName}/${objectKey}`;
    const canonicalizedResource = `/${bucketName.value}/o/${objectKey}`;

    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;
    console.log(signature, 'signature');

    let hmac = HmacSHA1(signature, secretAccessKey.value);
    const signatureBase64 = enc.Base64.stringify(hmac);
    console.log(signatureBase64, 'signatureBase64');

    const headers = {
      'x-amz-date': date,
      Authorization: `AWS ${accessKeyId.value}:${signatureBase64}`,
    };
    return headers;
  };

  const uploadSuccess = async ({ responseText, option, fileItem }: any) => {
    console.log('uploadSuccess', responseText, option, fileItem);
    console.log(option, 'option');
    getFileList();
    const updateUsedSpace = () => {
      return update_order_size({
        used_space: +option.sourceFile.size,
        order_id: +order_id.value,
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

    await getOrderInfo(false);
    if (orderInfo.value.mobile_upload == undefined) {
      const tagMobile = () => {
        // orderInfo.value.nodeIp
        tag_mobile_upload('', {
          orderUuid: orderInfo.value.uuid,
          tag: true,
        })
          .then((res) => {
            if (res.code !== 200) {
              setTimeout(() => {
                tagMobile();
              }, 3000);
            }
          })
          .catch(() => {
            setTimeout(() => {
              tagMobile();
            }, 3000);
          });
      };
      tagMobile();
    }
    let uploadLine = 1024 * 1024 * 50;
    let used_space = orderInfo.value.used_space || 0;
    if (uploadLine >= used_space) {
      let needSpace = getfilesize(uploadLine - used_space);
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

  const onProgress = ({ event, options, percentage }: any) => {
    console.log('onProgress', event, options, percentage);
  };

  const onStart = ({ options }: any) => {
    console.log('onStart', options);
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    console.log('onFailure', '-----', responseText, '-----', option, '-----', fileItem);

    uploadRef.value.clearUploadQueue();
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('--------------2');
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    console.log('xhr', xhr, options);
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
  };
  const getKey = () => {
    router.push({ name: 'getKey', query: { uuid: orderInfo.value.uuid, bucketName: bucketName.value } });
  };

  const creatName = async () => {
    if (!showCreatName.value) {
      showCreatName.value = true;
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
          if (!order_result?.data?.result) {
            bucketName.value = newBucketName.value;
            dialogVisible.value = false;
            return;
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
    if (type === 'png' || type === 'bmp' || type === 'gif' || type === 'jpeg' || type === 'ico' || type === 'jpg' || type === 'svg') {
      type = 'img';
      // imgHttpLink = `${location}/d/${ID}/${pubkey}?new_w=200`;
      // imgHttpLink = `${location}/object?pubkey=${pubkey}&new_w=${size}`;
      // let token = store.getters.token;
      // imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}&thumb=true`;
      // imgHttpLarge = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}`;
      // let bucketName = 'foggiebucket';
      // imgHttpLink = `/o/${bucketName.value}/${encodeURIComponent(item.key)}?thumb=true`;
      const headers = getSignHeaders(encodeURIComponent(item.key));

      // const params = new URLSearchParams(headers);
      // imgHttpLink = `/o/${encodeURIComponent(item.key)}?${params.toString()}&thumb=true`;
      // imgHttpLarge = `/o/${encodeURIComponent(item.key)}?${params.toString()}`;
      // console.log('imgHttpLink------------', imgHttpLink);

      // const url = `/o/${encodeURIComponent(item.key)}?`
      console.log('-----------------img-headers', headers);
      // imgHttpLarge = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${orderInfo.value.foggie_id}/${item.cid}`;
      // imgHttpLink = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${orderInfo.value.foggie_id}/${item.cid}`;
      console.log('----------img', accessKeyId.value, accessKeyId.value, bucketName.value, item.key);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
      console.log('--------imgHttpLarge', imgHttpLarge);

      // await fetch(url, { method: 'GET', headers })
      //   .then((response) => {
      //     if (response.ok) {
      //       // 创建一个 Blob 对象，并将响应数据写入其中
      //       console.log('Success------img', response);
      //       return response.blob();
      //     } else {
      //       // 处理错误响应
      //       console.error('Error:----img', response.status, response.statusText);
      //     }
      //   })
      //   .then((blob) => {
      //     if (blob) {
      //       imgHttpLarge = URL.createObjectURL(blob);
      //     }
      //   })
      //   .catch((error) => {
      //     // 处理网络错误
      //     console.error('Network Error:---img', error);
      //   });
      // const url_thumb = `/o/${encodeURIComponent(item.key)}?thumb=true`

      // await fetch(url_thumb, { method: 'GET', headers })
      //     .then((response) => {
      //       if (response.ok) {
      //         // 创建一个 Blob 对象，并将响应数据写入其中
      //         console.log('Success', response);
      //         return response.blob();
      //       } else {
      //         // 处理错误响应
      //         console.error('Error:', response.status, response.statusText);
      //       }
      //     })
      //     .then((blob) => {
      //       if (blob) {
      //         imgHttpLink = URL.createObjectURL(blob);
      //       }
      //     })
      //     .catch((error) => {
      //       // 处理网络错误
      //       console.error('Network Error:', error);
      //     });

      // foggie://peerid/spaceid/cid
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm') {
      type = 'video';
      // item.contentType = "video/mp4";

      // imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}&thumb=true`;
    } else {
      isSystemImg = true;
      // imgHttpLink =
      //   theme === "light"
      //     ? require(`@/assets/logo-dog.svg`)
      //     : require(`@/assets/logo-dog-black.svg`);
    }
    if (isDir) {
      isSystemImg = true;
      // imgHttpLink =
      //   theme === "light"
      //     ? require(`@/assets/logo-dog.svg`)
      //     : require(`@/assets/logo-dog-black.svg`);
    }
    console.log({ imgHttpLink, isSystemImg, imgHttpLarge }, '{ imgHttpLink, isSystemImg, imgHttpLarge }');

    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    // let ip = orderInfo.value.rpc.split(':')[0];
    let ip = `http://${bucketName.value}.devus.u2i.net:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    // header.setToken(token.value.split('bearer ')[1]);
    // console.log(token.value, 'token.value.sign');
    // var myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
    // var time = myDate.toJSON().split('T').join('').substr(0, 10);
    // console.log(time);
    console.log('header--------------', header);
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
    // console.log(requestReq, 'requestReq');
    server.listObjects(
      requestReq,
      {},
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
          //   console.log(transferData, 'transferData');

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
      if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 2];
      }
      let isPersistent = data.content[j].isPersistent;

      let item = {
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        category: 2,
        fileType: 2,
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

    tableLoading.value = false;
    showToast.hide(1);
  };

  const getKeys = () => {
    return new Prmise((resolve, reject) => {
      let server = new grpcService.default.ServiceClient(`http://${bucketName.value}.devus.u2i.net:7007`, null, null);
      let request = new Prox.default.ProxGetCredRequest();
      request.setHeader(header);
      // console.log('request-----------------getkeys', request);
      server.listCreds(request, {}, (err: any, res: { array: any }) => {
        if (err) {
          console.log('err------:', err);
          reject(false);
        } else if (res.array.length > 0) {
          accessKeyId.value = res.array[0][0][0];
          secretAccessKey.value = res.array[0][0][1];
          reject(true);
          // console.log('ak ---- sk:', accessKeyId.value, secretAccessKey.value);
        }
      });
    });
  };
  const setDefaultName = () => {
    let orderName = route.query.id;
    console.log('bucketName------', orderName, dmcName.value);
    let length = 9 - orderName.toString().length;
    let str = `${dmcName.value.substring(0, length)}-${orderName}`;
    newBucketName.value = str;
  };
  onMounted(async () => {
    // showToast.loading('Loading', {
    //   cover: true,
    //   customClass: 'app_loading',
    //   icon: loadingImg,
    //   loadingRotate: false,
    // });
    let res = await getOrderInfo();
    console.log(res, 'ressssssss');

    // showToast.hide();
    console.log(orderInfo.value, bucketName.value);

    if (bucketName.value) {
      // let key = await getKeys();
      getFileList();
    } else {
      dialogVisible.value = true;
      setDefaultName();
    }
  });
  onDeactivated(() => {
    if (merkleTimeOut) clearTimeout(merkleTimeOut);
  });
  onUnmounted(() => {
    if (merkleTimeOut) clearTimeout(merkleTimeOut);
  });
  watch(
    () => route.query,
    async () => {
      // showToast.loading('Loading', {
      //   cover: true,
      //   customClass: 'app_loading',
      //   icon: loadingImg,
      //   loadingRotate: false,
      // });
      dialogVisible.value = false;
      await getOrderInfo();
      // showToast.hide();
      // bucketName.value = orderInfo.value.domain;
      console.log('bucketName------', bucketName.value);
      if (bucketName.value) {
        // console.log('bucketName------');
        // let key = await getKeys();
        getFileList();
      } else {
        // console.log('no bucketName------');
        dialogVisible.value = true;
        setDefaultName();
      }
    },
    { deep: true },
  );
</script>

<style lang="scss" scoped>
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
      height: 300px;

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
        margin-left: 5vw;
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
      background: #fff;
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
    justify-content: space-evenly;
    align-items: center;
    margin-top: 150px;

    div {
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
</style>
<style lang="scss">
  .order-circle .nut-circle-progress {
    svg {
      border-radius: 50%;
      background-color: #fff;
    }

    .nut-circle-progress__text {
      color: #5460fe;
      font-size: 36px !important;
      white-space: pre-wrap;
    }
  }
</style>
