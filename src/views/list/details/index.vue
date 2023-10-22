<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)"></div>
    <nut-row class="order-detail">
      <nut-col :span="24" class="order-des">
        <span class="span1">Order-{{ detailsData[0].order_id }} </span>
        <span class="span2">Expiration time: {{ detailsData[0].expire }}</span>
      </nut-col>
      <nut-col :span="8" class="order-circle">
        <nut-circle-progress progress="20" radius="40" color="#5460FE">100M of 1G</nut-circle-progress>
      </nut-col>
      <nut-col :span="16" class="order-count">
        <nut-cell>
          <IconMdiF color="#9F9BEF" />
          File 1000

          <!-- File 1000 -->
        </nut-cell>
        <nut-cell>
          <IconRiPie color="#7F7AE9" />
          Space 1GB
        </nut-cell>
      </nut-col>
    </nut-row>
    <span v-if="bucketName">{{ bucketName }}</span>
    <nut-input placeholder="Please enter name" v-model="newBucketName" v-if="showCreatName" />
    <nut-button class="creat-name" type="primary" @click="creatName" v-if="!bucketName">Creat Name</nut-button>
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

    <!-- <nut-row class="order-icons"> </nut-row> -->
    <div class="type_check_box">
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 3 } })">
        <div class="svg_box">
          <IconAudio2></IconAudio2>
        </div>
        <p>Audio</p>
      </div>
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 1 } })">
        <div class="svg_box">
          <IconImage></IconImage>
        </div>
        <p>Images</p>
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
      <span>Recent Files</span>
      <span class="see_all" @click="router.push({ name: 'FileList', query: { ...route.query, category: 0, bucketName } })">See All ></span>
    </div>
    <nut-infinite-loading v-if="tableData.length" :has-more="false" class="file_list">
      <div
        @click="
          router.push({
            name: 'FileList',
            query: { ...route.query, category: 0, keyWord: item.isDir ? item.name.slice(0, item.name.length - 1) : item.name },
          })
        "
        :class="['list_item']"
        v-show="index < 4"
        v-for="(item, index) in tableData"
        :key="index"
      >
        <div :class="['left_icon_box']">
          <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
          <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
          <img v-else-if="item.category == 4" src="@/assets/svg/home/document.svg" alt="" />
          <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
          <img v-else src="@/assets/svg/home/file.svg" alt="" />
        </div>
        <div class="name_box">
          <p>{{ item.isDir ? item.name.slice(0, item.name.length - 1) : item.name }}</p>
          <p>{{ item.date || '' }}</p>
        </div>
        <!-- <IconMore v-show="!isCheckMode" class="right_more" @click.stop="showAction(item)"></IconMore> -->
      </div>
    </nut-infinite-loading>
    <nut-empty v-else description="No data,Go ahead and upload it."> </nut-empty>
    <nut-uploader
      :url="uploadUri"
      :timeout="1000 * 60 * 60"
      :before-upload="beforeupload"
      :disabled="isDisabled"
      :data="formData"
      :headers="formData"
      :before-xhr-upload="beforeXhrUpload"
      @success="uploadSuccess"
      @progress="onProgress"
      @start="onStart"
      @failure="onFailure"
      @change="onChange"
      ref="uploadRef"
    >
      <nut-button type="success" class="upload_btn" size="small">+</nut-button>
    </nut-uploader>

    <!-- <recycleFill color="#9F9BEF"/> -->
    <!-- <icon10kOutline color="red" /> -->
    <!-- <keySolid color="red" @click="getKey" /> -->
  </div>
</template>

<script setup lang="ts">
  // import recycleFill from '~icons/home/recycle-fill';
  // import IconAudio from '~icons/home/audio.svg';
  import IconAudio2 from '~icons/home/audio2.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconVideo from '~icons/home/video.svg';
  import IconMdiF from '~icons/mdi/file-cloud';
  import IconRiPie from '~icons/ri/pie-chart-fill';
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';

  import IconRecycleFill from '~icons/ri/recycle-fill';
  import icon10kOutline from '~icons/material-symbols/10k-outline';

  import keySolid from '~icons/teenyicons/key-solid';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  // import AESHelper from './AESHelper';
  // import { Image } from '@nutui/icons-vue';
  import { detailsData } from '../data';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute, useRouter } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import { showToast } from '@nutui/nutui';
  import { transferUTCTime, getfilesize } from '@/utils/util';
  import { check_name, order_name_set, search_bill, get_merkle, calc_merkle } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  const { header, token, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
  let server;
  const route = useRoute();
  const router = useRouter();
  // let details = reactive<any>({ data: {} });

  // import { get_order_node } from '@/api/amb';

  const uploadRef = ref<any>(null);
  const bucketName = ref<string>('');
  const accessKeyId = ref<string>('');
  const secretAccessKey = ref<string>('');
  const uploadUri = ref<string>('');
  const prefix = ref<string>('');
  const showCreatName = ref<boolean>(false);
  const newBucketName = ref<string>('');
  const tableData = ref<array>([]);
  const tableLoading = ref<boolean>(false);
  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});

  const memo = ref<any>('');
  const order_id = ref<any>('');
  const minerIp = ref<string>('');

  // memo.value = '963cbdb1-5600-11ee-9223-f04da274e59a_Order_buy';
  // order_id.value = '1281';
  memo.value = route.query.uuid;
  order_id.value = route.query.id;
  search_bill(memo.value, order_id.value).then((res) => {
    console.log('search_bill', res);
    minerIp.value = res?.data?.mp_ipaddr;
  });

  const beforeupload = async (file: any) => {
    // bucketName.value = 'test11111';
    // accessKeyId.value = 'FOGaCTsgpOoeXsrtjmk5';
    // secretAccessKey.value = '8zztbNHf6CVYdadg3AXmairRZ8mTXoowzMU2sUOq';


    // uploadUri.value = '/fog/baeqacmjq/foggiebucket';
    // uploadUri.value = '/o/foggiebucket';
    // uploadUri.value = `http://${bucketName.value}.devus.u2i.net:6008/o/`;
    uploadUri.value = '/o'

    const policy = {
      expiration: new Date(Date.now() + 3600 * 1000), // 过期时间（1小时后）
      conditions: [
        { bucket: bucketName.value },
        { acl: 'public-read' }, // 设置 ACL（可根据需求更改）
        ['starts-with', file[0], prefix.value], // Key 以 "uploads/" 开头
        ['starts-with', '$Content-Type', ''], // Content-Type 为空
      ],
    };
    console.log('policy', policy);
    // 将 POST Policy 转换为 JSON 字符串
    const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');
    console.log('policyBase64', policyBase64);

    let hmac = HmacSHA1(policyBase64, secretAccessKey.value);
    const signature = enc.Base64.stringify(hmac);


    console.log('signature', signature);
    formData.value = {};
    formData.value.Key = encodeURIComponent(prefix.value + file[0].name);
    formData.value.Policy = policyBase64;
    formData.value.Signature = signature;
    formData.value.Awsaccesskeyid = accessKeyId.value;

    

    formData.value.category = getType(file[0].name);
    // formData.value.Success_action_status = 201;
    console.log('file', file.length, file, file[0]);
    return [file[0]];
  };

  const getType = (fileName: string) => {
    if (
      fileName.endsWith(".jpeg") ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".png") ||
      fileName.endsWith(".svg")
    ) {
      return 1;
    } else if (
      fileName.endsWith(".mp4") ||
      fileName.endsWith(".avi") ||
      fileName.endsWith(".mp4")
    ) {
      return 2;
    } else if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
      return 4;
    } else if (
      fileName.endsWith(".zip") ||
      fileName.endsWith(".rar") ||
      fileName.endsWith(".gz") ||
      fileName.endsWith(".tar")
    ) {
      return 5;
    } else if (fileName.endsWith(".cmd")) {
      return 5;
    } else if (fileName.endsWith(".css")) {
      return 5;
    } else if (fileName.endsWith(".mp3")) {
      return 3;
    } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      return 4;
    } else if (fileName.endsWith(".pdf")) {
      return 4;
    } else if (fileName.endsWith(".ppt")) {
      return 4;
    } else if (
      fileName.endsWith(".text") ||
      fileName.endsWith(".txt") ||
      fileName.endsWith(".md")
    ) {
      return 4;
    } else if (fileName.endsWith(".html")) {
      return 5;
    } else if (fileName.endsWith("/")) {
      return 5;
    } else {
      return 5;
    }
  }

  const uploadSuccess = ({ responseText, option, fileItem }: any) => {
    console.log('uploadSuccess', responseText, option, fileItem);
    uploadRef.value.clearUploadQueue();
  };

  const onProgress = ({ event, options, percentage }: any) => {
    console.log('onProgress', event, options, percentage);
  };

  const onStart = ({ options }: any) => {
    console.log('onStart', options);
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    console.log('onFailure', responseText, option, fileItem);
    // const d = {
    //   orderId: '1281',
    //   uuid: '1e151b9c-507a-11ee-8369-f218985479b1',
    //   orderUuid: '1e151b9c-507a-11ee-8369-f218985479b1',
    // }
    // calc_merkle(d).then((res) => {
    //   console.log('calc_merkle', res);
    // })
    uploadRef.value.clearUploadQueue();
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    // const d = {
    //   orderId: '1281',
    // }
    // get_merkle(d).then((res) => {
    //   if(res.data[0].merkle_status === 0) {
    //     isDisabled.value = true;
    //     return;
    //   } else {
    //     isDisabled.value = false;
    //     console.log('xhr', xhr, options);
    //     xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    //     xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    //     xhr.send(options.formData);
    //   }
    // })
    console.log('xhr', xhr, options);
        xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
        xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
        xhr.send(options.formData);
  
  };
  const getKey = () => {
    router.push({ name: 'getKey', query: { uuid: orderInfo.value.uuid} })
  };

  const creatName = async () => {
    if (!showCreatName.value) {
      showCreatName.value = true;
    } else if (newBucketName.value) {
      // check name
      const result = await check_name(newBucketName.value);
      if (result?.data?.domain) {
        console.log('name is exist');
        return;
      }
      let order_data = {
        is_domain: true,
        name: newBucketName.value,
        order_uuid: orderInfo.value.uuid,
      };
      const order_result = await order_name_set(order_data);
      if (!order_result?.data?.result) {
        bucketName.value = newBucketName.value;
        return;
      }
    }
  };
  const handleImg = (item: { cid: any; key: any }, type: string, isDir: boolean) => {
    let baseUrl = '127.0.0.1';
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
      let bucketName = 'foggiebucket';
      imgHttpLink = `/o/${bucketName}/${encodeURIComponent(item.key)}`;
      imgHttpLarge = `/o/${bucketName}/${encodeURIComponent(item.key)}`;

      // foggie://peerid/spaceid/cid
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm') {
      type = 'video';
      // item.contentType = "video/mp4";

      imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
        deviceType.value == 'space' ? 'space' : 'foggie'
      }&token=${token.value}&thumb=true`;
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
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = list_prefix + '/';
      }
    }
    // let ip = orderInfo.value.rpc.split(':')[0];
    let ip = `http://${bucketName.value}.devus.u2i.net:7007`
    server = new grpcService.default.ServiceClient(ip, null, null);

    // header.setToken(token.value.split('bearer ')[1]);
    // console.log(token.value, 'token.value.sign');
    // var myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
    // var time = myDate.toJSON().split('T').join('').substr(0, 10);
    // console.log(time);
console.log('header--------------', header);
    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix(list_prefix);
    listObject.setDelimiter('/');
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
    console.log(requestReq, 'requestReq');
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
      let isDir = false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = decodeURIComponent(data.content[j].key);
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 1];
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
    let server = new grpcService.default.ServiceClient(`http://${bucketName.value}.devus.u2i.net:7007`, null, null);
    let request = new Prox.default.ProxGetCredRequest();
    request.setHeader(header);
    server.listCreds(request, {}, (err: any, res: { array: any }) => {
      if (err) {
        console.log('err------:', err);
      } else if (res.array.length > 0) {
        accessKeyId.value = res.array[0][0][0];
        secretAccessKey.value = res.array[0][0][1];
      }
    });
  };

  onMounted(async () => {
    await getOrderInfo();
    bucketName.value = orderInfo.value.domain;
    if (bucketName.value) {
      getKeys();
      getFileList();
    } else {

    }
    
  });
  // 218.2.96.99:6008

  //   bucketname: foggiebucket

  // AK: FOG9C40y1MBG1x85DU3o

  //  SK IZIPDmHm1HXE4ZNCSRIJWuGsUXkp9f98bKHAifVG
</script>

<style lang="scss" scoped>
  .upload_btn {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 80px;
    height: 80px;
  }
  .top_box {
    // margin: 0 30px;
    padding: 30px 10px;
    border-radius: 20px;
    background: $primary-color;

    .order-des {
      margin-bottom: 20px;
      color: #fff;

      .span1 {
        margin-left: 5vw;
        float: left;
        font-size: 24px;
      }

      .span2 {
        margin-right: 5vw;
        float: right;
        font-size: 20px;
      }
    }

    .order-circle {
      padding: 2vw;

      .nut-circle-progress {
        margin-left: 3vw;
        border: 15px solid #7f7ae9;
        border-radius: 50%;
        font-size: 12px;
      }
    }

    .order-count {
      .nut-cell {
        width: 70%;
        height: vw;
        margin-left: 10%;
        padding-left: 8vw;
        border-bottom: 1px solid #fff;
        border-radius: 0;
        background: $primary-color;
        box-shadow: none;
        color: #fff;
        font-size: 24px;
        line-height: 4vw;
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
    // height: 100%;
    padding: 20px;
    .type_check_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
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

        .order-icon-recycle {
          background-color: #ff8b00;
          border-radius: 50%;
          svg {
            width: 60%;
            height: 60%;
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
      margin-top: 10px;
      font-size: 30px;
      .see_all {
        color: #5460fe;
        font-size: 24px;
      }
    }
    .file_list {
      margin-top: 20px;
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
</style>
<style lang="scss">
  .order-circle .nut-circle-progress {
    svg {
      border-radius: 50%;
      background-color: #fff;
    }

    .nut-circle-progress__text {
      color: #5460fe;
      font-size: 12px !important;
    }
  }
</style>
