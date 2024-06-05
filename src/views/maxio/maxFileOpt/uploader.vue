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
      <nut-button type="info" class="upload_btn maxio_upload_btn" size="small">
        <IconPlus></IconPlus>
      </nut-button>
    </nut-uploader>
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
  import { ref, toRefs, defineProps, watch } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { delay, throttle } from 'lodash';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
  import { maxUrl } from '@/setting.js';

  const isAndroid = computed(() => {
    return import.meta.env.VITE_BUILD_TYPE == 'ANDROID';
  });
  const emits = defineEmits(['uploadComplete', 'getFileList']);

  interface Props {
    orderInfo?: any;
    isMobileOrder?: boolean;
    prefix?: any;
  }
  const props = defineProps<Props>();
  const { orderInfo, prefix } = toRefs(props);
  const uploadList = ref<any[]>([]);
  const uploaderList = ref<any[]>([]);
  const successStatus = ref<number>(201); //bucket上传是204 maxio是201
  const uploadRef = ref<any>(null);
  const uploadUri = ref<string>('');
  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});

  const beforeupload = async (file: any) => {
    // console.log('-----000------beforeupload---------------', file.length, orderInfo.value.peer_id);
    return new Promise(async (resolve, reject) => {
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
        uploadList.value.push(fileCopy);
        fileArr.push(fileCopy);
      }
      //   uploadUri.value = `http://154.31.41.36:8080/o/${orderInfo.peer_id}/${orderInfo.foggie_id}`;
      uploadUri.value = `${maxUrl}/o/${orderInfo.value.peer_id}/${orderInfo.value.foggie_id}`;
      uploaderList.value = fileArr;
      resolve(fileArr);
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
      //   emits('getFileList');
      delay(() => {
        uploadProgressIsShow.value = false;
      }, 2000);

      emits('uploadComplete');

      if (!isAndroid.value) uploadRef.value.clearUploadQueue();
    }
  };

  const onProgress = ({ event, option, percentage }: any) => {
    console.log('----onProgress', option.sourceFile.name, percentage);
    uploadProgress.value = percentage;
    downloadProgress(event.loaded, event.total);
  };

  const onStart = ({ option }: any) => {
    uploadProgress.value = 0;
    uploadProgressIsShow.value = true;
    uploadStatus.value = 'uploading';
    // console.log('onStart-------options', option);
    // isDisabled.value = true;
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    console.log('-----onFailure-----', responseText, option, fileItem, isUploadComplete.value);
    if (isUploadComplete.value) {
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
    // console.log('onChange--------------22', fileList.length, fileList);
  };

  const xhrArray = ref<any[]>([]);

  const beforeXhrUpload = async (xhr: XMLHttpRequest, options: any) => {
    // console.log('------------------beforeXhrUpload--------------');
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
        // console.log('beforeXhrUpload--Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    xhrArray.value = [];
  };
  const sendRequest = async (xhr, options) => {
    return new Promise(async (resolve, reject) => {
      let token = MaxTokenMap.value[orderInfo.value.device_id];
      token = token.split(' ')[1];
      let prefixStr = '';
      if (prefix.value && prefix.value.length > 0) {
        prefixStr = prefix.value.join('/') + '/';
      }
      console.log(prefix.value, prefixStr + options.sourceFile.name, 'refixStr + options.sourceFile.name');
      let Key = encodeURIComponent(prefixStr + options.sourceFile.name);
      let _form = new FormData();
      xhr.setRequestHeader('Authorization', token);
      //   Key: encodeURIComponent(prefixStr + fileCopy.name),
      //   _form.append('Key', options.sourceFile.name); // prefix + name
      _form.append('Key', Key); // prefix + name
      _form.append('Success_action_status', 201);
      _form.append('file', options.sourceFile);

      options.formData = _form;
      xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
      xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);

      xhr.onload = function () {
        if (xhr.status === 201) {
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
  onMounted(() => {});
</script>

<style lang="scss" scoped>
  .upload_btn {
    position: fixed;
    bottom: 120px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border: 1px solid #ffffff2b;
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
    left: 0;
  }
  @media screen and (min-width: 500px) {
    .upload_progress {
      bottom: 60px !important;
    }
  }
</style>
<style lang="scss">
  .maxio_upload_btn {
    // background: #bebfd473 !important;
    // background: #212121 !important;
    // background: #7341ea !important;
    border: 0.4vw solid #373737;
    background-image: linear-gradient(89deg, #199dec 10%, #0061a3 40%, #df6b22 50%, #ffd07f 100%);
  }
</style>
