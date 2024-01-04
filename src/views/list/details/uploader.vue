<template>
  <div class="">
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
      @success="uploadSuccess"
      @progress="onProgress"
      @start="onStart"
      @failure="onFailure"
      ref="uploadRef"
      class="upload_class"
    >
      <nut-button type="info" class="upload_btn" size="small">
        +
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
  import { ref, toRefs, defineProps, inject } from 'vue';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import { showToast, showNotify } from '@nutui/nutui';
  import { save_upload, valid_upload, get_unique_order } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  import { getSecondTime } from '@/utils/util';
  import { update_order_size } from '@/api/amb';
  import { delay, throttle } from 'lodash';
  import { poolUrl } from '@/setting.js';
  import useSyncPhotos from './useSyncPhotos.js';
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
  }
  const getSummary = inject('getSummary');
  const props = defineProps<Props>();
  const { bucketName, prefix, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  // const props = defineProps({
  //   bucketName: [String],
  //   accessKeyId: [String],
  //   secretAccessKey: [String],
  //   orderInfo: [Object],
  // });

  // const { bucketName, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  // const getOrderInfo = inject('getOrderInfo');

  const route = useRoute();

  const successStatus = ref<number>(204);

  const uploadRef = ref<any>(null);
  const uploadUri = ref<string>('');
  // const prefix = ref<string>('');
  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});

  const memo = ref<any>('');
  const order_id = ref<any>('');
  const amb_uuid = ref<any>('');
  memo.value = route.query.uuid;
  order_id.value = route.query.id;
  amb_uuid.value = route.query.amb_uuid;
  let merkleTimeOut = null;
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: order_id.value,
    };
    return valid_upload(d).then((res) => {
      if (res?.data) {
        // TODO
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
  const beforeupload = (file: any) => {
    return new Promise(async (resolve, reject) => {
      const { bucketName, accessKeyId, secretAccessKey, orderInfo, prefix } = props;
      if (!bucketName || !accessKeyId || !secretAccessKey) {
        showToast.fail('The data is abnormal, please refresh the page and try again.');
        return reject(false);
      }

      let prefixStr = '';
      if (prefix?.length > 0) {
        prefixStr = prefix.join('/') + '/';
      }

      console.log('prefixStr-------------', prefixStr, '-------------------', prefix);

      let nowTime = Date.now();
      let endTime = new Date(orderInfo.value.created_at).getTime() + 1000 * 60 * 3;
      let time = Math.round((endTime - nowTime) / 1000);
      if (time > 6 * 60) {
        time -= 60 * 60;
      }
      if (time > 0) {
        const content = `Upload files after ${getSecondTime(time)}`;
        showToast.fail(content);
        return reject(false);
      }

      let fileCopy = file[0];
      if (fileCopy.name == 'image.jpg') {
        const timestamp = Date.now();
        const newFileName = `image_${timestamp}.jpg`;

        // 创建一个新的 Blob 对象
        const blob = new Blob([fileCopy], { type: fileCopy.type });

        // 使用新文件名创建一个新的文件对象
        fileCopy = new File([blob], newFileName, { type: fileCopy.type });
      }
      const d = { orderId: order_id.value };
      let merkleRes = await valid_upload(d);
      if (merkleRes?.data) {
        isDisabled.value = false;
      } else {
        isDisabled.value = true;
        showToast.fail(merkleRes.msg || 'Merkle is being built, not allowed to upload file.');
        if (!merkleTimeOut) {
          merkleTimeOut = setTimeout(() => {
            getMerkleState(true);
          }, 30000);
        }
        return reject();
      }

      uploadUri.value = `https://${bucketName}.${poolUrl}:6008/o/`;

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

      formData.value = {
        Key: encodeURIComponent(prefixStr + fileCopy.name),
        Policy: policyBase64,
        Signature: signature,
        Awsaccesskeyid: accessKeyId,
        category: getType(fileCopy.name),
      };

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
    } else if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) {
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
    isDisabled.value = false;
    console.log('uploadSuccess', responseText, option, fileItem);
    console.log('-----uploadSuccess', fileItem.name);
    window.sessionStorage.setItem('uploadFileName', fileItem.name);

    // console.log(option, 'option');
    uploadStatus.value = 'success';

    // emits('getFileList');

    let used_space = await getSummary();
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
    isDisabled.value = true;
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    showToast.fail('Upload failed, please try again later');
    delay(() => {
      uploadProgressIsShow.value = false;
    }, 3000);
    uploadStatus.value = 'error';
    isDisabled.value = false;
    if (!isAndroid.value) uploadRef.value.clearUploadQueue();
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('--------------22');
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
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
    document.querySelector('.nut-uploader__input')?.addEventListener('click', () => {
      showNotify.primary('Sensitive information is recommended to be encrypted and uploaded', {
        'class-name': 'notify_primary',
        position: 'bottom',
        duration: 5000,
      });
    });
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
    display: grid;
    place-items: center;
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
</style>
<style lang="scss">
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
