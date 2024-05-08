<template>
  <div class="upload_out_box">
    <nut-uploader
      v-if="isMobileOrder && !isAndroid"
      :url="uploadUri"
      :timeout="1000 * 60 * 60"
      :before-upload="beforeupload"
      :disabled="isDisabled"
      :data="formData"
      :headers="formData"
      :before-xhr-upload="beforeXhrUpload"
      :xhr-state="successStatus"
      :maximum="1000"
      @success="uploadSuccess"
      @progress="onProgress"
      @start="onStart"
      @failure="onFailure"
      @change="onChange"
      ref="uploadRef"
      class="upload_class"
      multiple
    >
      <nut-button type="info" class="upload_btn" size="small">
        <IconPlus></IconPlus>

        <!-- <img src="@/assets/newIcon/upload.png" alt="" srcset="" /> -->
      </nut-button>
    </nut-uploader>
    <nut-button
      style="z-index: 999"
      v-else-if="isMobileOrder && isAndroid"
      @click="startUpload"
      type="info"
      class="upload_btn"
      size="small"
    >
      <img src="@/assets/newIcon/upload.png" alt="" srcset="" />
    </nut-button>
  </div>
  <Transition name="fade-transform" mode="out-in">
    <div v-if="uploadProgressIsShow">
      <nut-progress
        class="upload_progress"
        :percentage="uploadProgress"
        stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status="icon"
        :show-text="false"
      >
      </nut-progress>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import IconPlus from '~icons/home/plus.svg';
  import { ref, toRefs, defineProps, inject } from 'vue';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import { showToast, showNotify } from '@nutui/nutui';
  import { save_upload, valid_upload, get_unique_order } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  import { getSecondTime, getType } from '@/utils/util';
  import { update_order_size } from '@/api/amb';
  import { delay, throttle } from 'lodash';
  import { poolUrl } from '@/setting.js';
  import useSyncPhotos from './useSyncPhotos.js';
  import CryptoJS from 'crypto-js';

  const isAndroid = computed(() => {
    return import.meta.env.VITE_BUILD_TYPE == 'ANDROID';
  });
  const emits = defineEmits(['uploadComplete']);

  interface Props {
    bucketName?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    prefix?: any;
    orderInfo?: any;
    isMobileOrder?: boolean;
    getSummary?: any;
  }
  // const getSummary = inject('getSummary');
  const props = defineProps<Props>();
  const { getSummary, bucketName, prefix, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  const uploadList = ref<any[]>([]);

  const uploaderList = ref<any[]>([]);
  // const props = defineProps({
  //   bucketName: [String],
  //   accessKeyId: [String],
  //   secretAccessKey: [String],
  //   orderInfo: [Object],
  // });

  // const { bucketName, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  // const getOrderInfo = inject('getOrderInfo');

  const route = useRoute();

  // const successStatus = ref<number>(201);
  const successStatus = ref<number>(204); //bucket上传是204 maxio是201

  const uploadRef = ref<any>(null);
  const uploadUri = ref<string>('');
  // const prefix = ref<string>('');
  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});

  const memo = ref<any>('');
  const order_id = ref<any>('');
  const amb_uuid = ref<any>('');

  let merkleTimeOut = null;
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: order_id.value,
    };
    return valid_upload(d).then((res) => {
      if (res?.data) {
        isDisabled.value = false;
        clearTimeout(merkleTimeOut);
      } else {
        if (timeout) {
          merkleTimeOut = setTimeout(() => {
            getMerkleState(timeout);
          }, 30000);
        }
        isDisabled.value = true;
      }
    });
  };
  const beforeupload = async (file: any) => {
    return new Promise(async (resolve, reject) => {
      const { bucketName, accessKeyId, secretAccessKey, orderInfo, prefix } = props;
      if (!bucketName || !accessKeyId || !secretAccessKey) {
        showToast.fail('The data is abnormal, please refresh the page and try again.');
        return reject(false);
      }

      let fileArr: any = [];

      for (let i = 0; i < file.length; i++) {
        let fileCopy = file[i];
        if (fileCopy.name == 'image.jpg') {
          const timestamp = Date.now();
          const newFileName = `image_${timestamp}.jpg`;

          // 创建一个新的 Blob 对象
          const blob = new Blob([fileCopy], { type: fileCopy.type });

          // 使用新文件名创建一个新的文件对象
          fileCopy = new File([blob], newFileName, { type: fileCopy.type });
        }

        // uploadUri.value = `https://${bucketName}.${poolUrl}:6008/o/`;

        // const policy = {
        //   expiration: new Date(Date.now() + 3600 * 1000),
        //   conditions: [
        //     { bucket: bucketName },
        //     { acl: 'public-read' },
        //     ['starts-with', fileCopy, prefixStr],
        //     ['starts-with', '$Content-Type', ''],
        //   ],
        // };
        // const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');

        // let hmac = HmacSHA1(policyBase64, secretAccessKey ?? '');
        // const signature = enc.Base64.stringify(hmac);
        // const md5Hash = await calculateMD5(fileCopy);
        // const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';

        // formData.value = {
        //   Key: encodeURIComponent(prefixStr + fileCopy.name),
        //   Policy: policyBase64,
        //   Signature: signature,
        //   Awsaccesskeyid: accessKeyId,
        //   category: getType(fileCopy.name),
        //   'Content-Md5': md5Hash,
        //   'App-Type': appType,
        // };
        uploadList.value.push(fileCopy);
        fileArr.push(fileCopy);
      }
      console.log(orderInfo.value.orderId, 'orderinfo');
      console.log(order_id.value, 'orderinfo');

      const d = { orderId: order_id.value };
      let merkleRes = await valid_upload(d);
      if (merkleRes?.data) {
        isDisabled.value = false;
      } else {
        isDisabled.value = true;
        showToast.warn(merkleRes.msg || 'Merkle is being built, not allowed to upload file.');
        if (!merkleTimeOut) {
          merkleTimeOut = setTimeout(() => {
            getMerkleState(true);
          }, 30000);
        }
        return reject();
      }

      // uploadUri.value = `http://127.0.0.1:9009/o/`;
      uploadUri.value = `https://${bucketName}.${poolUrl}:6008/o/`;
      console.log('uploadList------', uploadList.value);

      uploaderList.value = fileArr;

      resolve(fileArr);
    });
  };

  const calculateMD5 = (file: { size: number; slice: (arg0: number, arg1: any) => Blob }) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const chunkSize = 1024 * 1024; // 1MB
      const chunks = Math.ceil(file.size / chunkSize);
      let currentChunk = 0;
      let md5 = CryptoJS.algo.MD5.create();

      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const wordArray = CryptoJS.lib.WordArray.create(data);
        md5.update(wordArray);

        currentChunk++;

        if (currentChunk < chunks) {
          loadNext();
        } else {
          const hash = md5.finalize().toString();
          resolve(hash);
        }
      };

      reader.onerror = function () {
        reject(new Error('Failed to read file'));
      };

      function loadNext() {
        const start = currentChunk * chunkSize;
        const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
        reader.readAsArrayBuffer(file.slice(start, end));
      }

      loadNext();
    });
  };

  const uploadStatus = ref('');
  const averageSpeed = ref(0); // 当前块 上传的文件大小
  const timeRemaining = ref(0); // 剩余上传时间(s)
  const lastDownloadNumer = ref(0); // 最后一次上传的文件大小
  const uploadProgressIsShow = ref(false); // 是否展示上传进度
  const uploadProgress = ref(0); // 上传进度
  const downloadProgress = throttle(
    function (loaded: number, total: number) {
      if (loaded < lastDownloadNumer.value) return;
      averageSpeed.value = loaded - lastDownloadNumer.value;
      timeRemaining.value = (total - loaded) / averageSpeed.value;
      lastDownloadNumer.value = loaded;
    },
    1000,
    { leading: true, trailing: true },
  );
  const uploadSuccess = async ({ responseText, option, fileItem }: any) => {
    console.log('uploadSuccess-----', responseText, option, fileItem, isUploadComplete.value);
    if (isUploadComplete.value || isAndroid.value) {
      isDisabled.value = false;
      window.sessionStorage.setItem('uploadFileName', fileItem.name);

      uploadStatus.value = 'success';

      // emits('getFileList');

      let used_space = await getSummary.value();
      if (!amb_uuid.value) {
        let res = await get_unique_order({ order_uuid: route?.query?.uuid });
        amb_uuid.value = res?.result?.data?.amb_uuid;
      }
      if (used_space) {
        const d = {
          orderId: order_id.value,
          uuid: amb_uuid.value,
          orderUuid: memo.value,
          rpc: props.orderInfo.value.rpc,
          fileSize: option?.sourceFile?.size,
          usedSpace: used_space,
        };
        await save_upload(d).then((res) => {
          console.log('save_upload-----', res);
        });
      }

      delay(() => {
        uploadProgressIsShow.value = false;
      }, 2000);

      emits('uploadComplete');

      if (!isAndroid.value) uploadRef.value.clearUploadQueue();
    }
  };

  const onProgress = ({ event, option, percentage }: any) => {
    console.log('onProgress', option.sourceFile.name, percentage);
    uploadProgress.value = percentage;
    downloadProgress(event.loaded, event.total);
  };

  const onStart = ({ option }: any) => {
    uploadProgress.value = 0;
    uploadProgressIsShow.value = true;
    uploadStatus.value = 'uploading';
    console.log('onStart', option);
    // isDisabled.value = true;
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    debugger;
    if (isUploadComplete.value) {
      console.log(responseText, option, fileItem);

      showToast.fail('Upload failed, please try again later');
      delay(() => {
        uploadProgressIsShow.value = false;
      }, 3000);
      uploadStatus.value = 'error';
      isDisabled.value = false;
      if (!isAndroid.value) uploadRef.value.clearUploadQueue();
    }
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('onChange--------------22', fileList.length, fileList);
  };

  const xhrArray = ref<any[]>([]);

  const beforeXhrUpload = async (xhr: XMLHttpRequest, options: any) => {
    xhrArray.value.push({ xhr, options } as never);
    if (xhrArray.value.length === uploaderList.value.length) {
      isUploadComplete.value = false;
      sendAllRequests();
    }
  };

  const isUploadComplete = ref(false);
  const sendAllRequests = async () => {
    for (let i = 0; i < xhrArray.value.length; i++) {
      if (i === xhrArray.value.length - 1) {
        isUploadComplete.value = true;
      }
      try {
        let response = await sendRequest(xhrArray.value[i].xhr, xhrArray.value[i].options);
        console.log('Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    xhrArray.value = [];
  };

  const getHeaders = async (options) => {
    const { bucketName, accessKeyId, secretAccessKey, prefix } = props;
    const fileCopy = options.sourceFile;
    let prefixStr = '';
    if (prefix?.length > 0) {
      prefixStr = prefix.join('/') + '/';
    }

    const policy = {
      expiration: new Date(Date.now() + 3600 * 1000),
      conditions: [
        { bucket: bucketName },
        { acl: 'public-read' },
        ['starts-with', fileCopy, prefixStr],
        ['starts-with', '$Content-Type', ''],
      ],
    };
    const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');

    let hmac = HmacSHA1(policyBase64, secretAccessKey ?? '');
    const signature = enc.Base64.stringify(hmac);
    const md5Hash = await calculateMD5(fileCopy);
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';

    formData.value = {
      Key: encodeURIComponent(prefixStr + fileCopy.name),
      Policy: policyBase64,
      Signature: signature,
      Awsaccesskeyid: accessKeyId,
      category: getType(fileCopy.name),
      'Content-Md5': md5Hash,
      'App-Type': appType,
    };
  };
  const sendRequest = async (xhr, options) => {
    return new Promise(async (resolve, reject) => {
      await getHeaders(options);

      options.headers = {
        ...options.headers,
        ...formData.value,
      };
      let _form = new FormData();
      for (const [key, value] of Object.entries(options.headers)) {
        xhr.setRequestHeader(key as string, value as string);
        _form.append(key, value);
      }
      _form.append('file', options.sourceFile);

      // _form.append("Id", "baeqaemjq");
      // _form.append("PeerId", "12D3KooWQcfuGqvwGEBeKEjYZXm2vBxLUmcBfgqJNwXnBCyiHugU");
      // _form.append("Token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTEwMTc4MzksInVzZXJuYW1lIjpudWxsLCJlbWFpbCI6Im5uZDFAeXlkLmNvbSIsImRldmljZV9pZCI6IjY2MDAzNTAwLWI1MWUtMTFlZS1hYzRhLWJmZjYzMTQzMGMwMCIsImhvc3RfaWQiOiIiLCJwZWVyX2lkIjoiIiwiYWNjb3VudCI6IiIsImF1dGhvcml6ZWQiOnRydWV9.8ldxfyt8KfBbcpYBQL1y6Rjue4goDOde550ZrwR8aRA');
      // _form.append("Key", options.headers.Key);
      // _form.append("Success_action_status", "201");
      // _form.append("file", options.sourceFile, options.sourceFile.name);

      options.formData = _form;
      xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
      xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject();
        }
      };
      xhr.onerror = function () {
        reject();
      };
      xhr.send(options.formData);
    });
  };
  const { startUpload } = useSyncPhotos({
    bucketName,
    accessKeyId,
    secretAccessKey,
    orderInfo,
    prefix,
    onStart,
    uploadSuccess,
    onFailure,
    onProgress,
    isDisabled,
  });
  onMounted(() => {
    console.log(11111111111111111);
    console.log(orderInfo.value, 'orderInfo.value.orderId');

    memo.value = route.query.uuid || orderInfo.value.value.uuid;
    order_id.value = route.query.id || orderInfo.value.value.orderId;
    amb_uuid.value = route.query.amb_uuid || orderInfo.value.value.amb_uuid;
    console.log(order_id.value, 'order_id');

    // document.querySelector('.nut-uploader__input')?.addEventListener('click', () => {
    //   showNotify.primary('Sensitive information is recommended to be encrypted and uploaded', {
    //     'class-name': 'notify_primary',
    //     position: 'bottom',
    //     duration: 5000,
    //   });
    // });
  });
  onUnmounted(() => {
    clearTimeout(merkleTimeOut);
  });
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
    cursor: pointer;
    svg,
    img {
      width: 100%;
      height: 100%;
    }
  }

  .upload_class {
    z-index: 100;
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
  @media screen and (min-width: 500px) {
    .upload_btn {
      bottom: 100px;
      right: 30px;
      font-size: 50px;
      padding: 0px;
      width: 60px;
      height: 60px;
      --nut-button-small-line-height: 60px;
    }
    .upload_class {
      z-index: 100;
      :deep {
        .nut-uploader__input {
          position: fixed !important;
          top: unset !important;
          left: unset !important;
          bottom: 100px !important;
          right: 30px !important;
          width: 60px !important;
          height: 60px !important;
        }
      }
    }
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
    z-index: 999;
  }
  @media screen and (min-width: 500px) {
    .upload_progress {
      bottom: 60px !important;
    }
  }
</style>
<style lang="scss"></style>
