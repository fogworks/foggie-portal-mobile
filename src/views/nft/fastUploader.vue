<template>
  <div class="">
    <nut-uploader
      v-model:file-list="defaultFileList"
      :url="uploadUri"
      :timeout="1000 * 60 * 60"
      maximum="1"
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
      <div class="uploadArea" v-if="!defaultFileList.length">
        <UploadIcon></UploadIcon>
        <div class="uploadType">PNG.GIF.JPG.JPEG.SVG types can be previewed. </div>
      </div>
      <div class="uploadArea uploadArea2" v-else>
        <nut-image
          show-error
          show-loading=""
          v-if="getType(defaultFileList[0].name) == 1"
          :src="defaultFileList[0].url"
          alt=""
          width="200"
          height="200"
          fit="contain"
        >
          <!-- <template #loading>
            <Loading width="16" height="16"></Loading>
          </template>
          <template #error>
            <CircleClose width="16px" height="16px" name="circleClose"></CircleClose>
          </template> -->
        </nut-image>
        <!-- <img v-if="getType(defaultFileList[0].name) == 1" :src="defaultFileList[0].url" alt="" /> -->
        <div style="padding: 3rem; text-align: center" v-else> Support for displaying files in image format only </div>
        <div class="deploy_box">
          <p>Name</p>
          <nut-searchbar v-if="renameShow" v-model="newName" :placeholder="getOriginName(defaultFileList[0].name)">
            <template #rightin>
              <span> {{ getEndName(defaultFileList[0].name) }}</span>
            </template>
            <template #rightout>
              <IconCancel
                @click="
                  renameShow = false;
                  newName = '';
                "
              ></IconCancel>
              <IconOk @click="confirmRename"></IconOk>
            </template>
          </nut-searchbar>
          <p v-else>{{ defaultFileList[0].name }} <EditIcon @click="startRename"></EditIcon></p>
          <div class="deploy_action">
            <nut-button type="primary" class="block_button" @click="clearUploadList">Upload New</nut-button>
          </div>
        </div>
      </div>
    </nut-uploader>
  </div>
  <!-- <nut-popup
    teleport-disable
    v-if="renameShow"
    @closed="
      renameShow = false;
      newName = '';
    "
    position="bottom"
    closeable
    round
    :style="{ height: '500px' }"
    v-model:visible="renameShow"
  >
    <div class="rename_box">
      <IconFolder style="display: block; margin: 0 auto"></IconFolder>
      <p> {{ getOriginName(defaultFileList[0].name) }}</p>
      <nut-searchbar v-model="newName" :placeholder="getOriginName(defaultFileList[0].name)">
        <template #rightin>
          <span> {{ getEndName(defaultFileList[0].name) }}</span>
        </template>
      </nut-searchbar>
      <nut-button class="block_button" type="info" block @click="confirmRename">Confirm</nut-button>
    </div>
  </nut-popup> -->
  <Transition name="fade-transform" mode="out-in">
    <div v-if="uploadProgressIsShow" style="margin-top: 30px">
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
  import { Loading, CircleClose, CloseLittle } from '@nutui/icons-vue';
  import IconFolder from '~icons/home/folder.svg';
  import IconCancel from '~icons/home/cancel.svg';
  import IconOk from '~icons/home/ok.svg';
  import useShare from '@/views/list/details/useShare.js';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { ref, toRefs, defineProps, inject, computed } from 'vue';
  import { HmacSHA1, enc } from 'crypto-js';
  import EditIcon from '~icons/home/edit.svg';
  import { Buffer } from 'buffer';
  import { useRoute, useRouter } from 'vue-router';
  import UploadIcon from '~icons/home/upload.svg';
  import { showToast, showNotify } from '@nutui/nutui';
  import { save_upload, valid_upload, get_unique_order } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  import { getSecondTime, getType } from '@/utils/util';
  import { delay, throttle } from 'lodash';
  import { poolUrl } from '@/setting.js';
  import CryptoJS from 'crypto-js';

  const router = useRouter();
  const route = useRoute();

  const metaImage = computed(() => {
    return route.query.metaImage || '';
  });

  const checkBucket = computed(() => {
    return route.query.bucket || '';
  });

  const name = computed(() => {
    return route.query.name || '';
  });
  const checkPrefix = computed(() => {
    return route.query.checkPrefix || '';
  });
  const isAndroid = computed(() => {
    return import.meta.env.VITE_BUILD_TYPE == 'ANDROID';
  });
  const emits = defineEmits(['setBucketAndPath', 'getRouteOrder', 'uploadComplete', 'update:canSet', 'update:setVisible']);
  interface Props {
    bucketName?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    prefix?: any;
    orderInfo?: any;
    header?: any;
    metadata?: any;
    setVisible?: boolean;
  }
  const props = defineProps<Props>();
  const { bucketName, setVisible, prefix, metadata, header, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);
  const { getHttpShare } = useShare(orderInfo, header, 3);
  // const props = defineProps({
  //   bucketName: [String],
  //   accessKeyId: [String],
  //   secretAccessKey: [String],
  //   orderInfo: [Object],
  // });

  // const { bucketName, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  // const getOrderInfo = inject('getOrderInfo');

  let server;
  const successStatus = ref<number>(204);
  const renameShow = ref('');
  const isError = ref(false);
  const newName = ref('');
  const uploadRef = ref<any>(null);
  const uploadUri = ref<string>('');
  const routeBucket = ref('');
  // const prefix = ref<string>('');
  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});
  const amb_uuid = ref<string>('');
  const defaultFileList = ref([]);
  let merkleTimeOut = null;
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: orderInfo.value.value.orderId,
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
  watch(
    bucketName,
    () => {
      if (merkleTimeOut) clearTimeout(merkleTimeOut);
      isDisabled.value = false;
    },
    { deep: true },
  );
  const beforeupload = async (file: any) => {
    return new Promise(async (resolve, reject) => {
      const { bucketName, accessKeyId, secretAccessKey, prefix, orderInfo } = props;
      if (!bucketName || !accessKeyId || !secretAccessKey) {
        showToast.fail('The data is abnormal, please refresh the page and try again.');
        return reject(false);
      }

      let prefixStr = '';
      if (prefix) {
        prefixStr = prefix + '/';
      } else {
        prefixStr = '';
      }

      console.log('prefixStr-------------', prefixStr, '-------------------', prefix);

      const fileCopy = file[0];
      console.log(orderInfo.value.orderId, 'order_idorder_idorder_id');

      const d = { orderId: orderInfo.value.orderId };
      let merkleRes = await valid_upload(d);
      if (merkleRes?.data) {
        isDisabled.value = false;
      } else {
        showToast.warn(merkleRes.msg || 'Merkle is being built, not allowed to upload file.');
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

      resolve([fileCopy]);
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

  const getType = (fileName: string) => {
    if (
      fileName.endsWith('.jpeg') ||
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.png') ||
      fileName.endsWith('.svg') ||
      fileName.endsWith('.gif')
    ) {
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
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls') || fileName.endsWith('.csv')) {
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
    console.log('uploadSuccess', responseText, option, fileItem);
    // console.log(option, 'option');
    uploadStatus.value = 'success';

    console.log(defaultFileList.value, 'defaultFileList.value');

    // emits('getFileList');

    // let used_space = await getSummary();
    let used_space = 1;
    console.log(orderInfo.value.value.amb_uuid, 'amb_uuidamb_uuidamb_uuid');

    if (!orderInfo.value.value.amb_uuid) {
      let res = await get_unique_order({ order_uuid: orderInfo.value.value.uuid });
      amb_uuid.value = res?.result?.data?.amb_uuid;
    }
    if (used_space) {
      const d = {
        orderId: orderInfo.value.value.orderId,
        uuid: orderInfo.value.value.amb_uuid || amb_uuid.value,
        orderUuid: orderInfo.value.value.order_uuid,
        rpc: props.orderInfo.value.rpc,
        fileSize: option?.sourceFile?.size,
        usedSpace: used_space,
      };
      await save_upload(d).then((res) => {
        console.log('save_upload-----', res);
      });
    }
    defaultFileList.value = [
      {
        name: fileItem.name,
        url: fileItem.url,
        status: fileItem.status,
        message: fileItem.message,
        type: fileItem.type,
      },
    ];
    // delay(() => {
    uploadProgressIsShow.value = false;
    // }, 2000);

    emits('uploadComplete');

    // if (!isAndroid.value) uploadRef.value.clearUploadQueue();
  };
  const startRename = async () => {
    if (routeBucket.value) {
      emits('getRouteOrder');
    }
    renameShow.value = true;
  };
  const clearUploadList = () => {
    emits('update:canSet', true);
    renameShow.value = false;
    newName.value = '';
    isDisabled.value = false;
    defaultFileList.value = [];
    uploadProgressIsShow.value = false;
    uploadRef.value.clearUploadQueue();
    nextTick(() => {
      document.querySelector('.nut-uploader__input')?.click();
    });
  };
  const onProgress = ({ event, options, percentage }: any) => {
    console.log('onProgress', event, options, percentage);
    uploadProgress.value = percentage;
    downloadProgress(event.loaded, event.total);
  };

  const onStart = ({ options }: any) => {
    emits('update:canSet', false);
    uploadProgress.value = 0;
    uploadProgressIsShow.value = true;
    uploadStatus.value = 'uploading';
    console.log('onStart', options);
    isDisabled.value = true;
  };

  const onFailure = ({ responseText, option, fileItem }: any) => {
    showToast.fail('Upload failed, please try again later');
    emits('update:canSet', true);
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
  const getOriginName = (name) => {
    let arr = name.split('.');
    if (arr.length > 1) {
      arr.pop();
    }
    return arr.join('.');
  };
  const getEndName = (name) => {
    let arr = name.split('.');
    if (arr.length > 1) {
      return '.' + arr[arr.length - 1];
    } else {
      return '';
    }
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
    const checkData = defaultFileList.value;
    const endName = getEndName(checkData[0].name);
    const targetObject = () => {
      if (prefix.value) {
        return prefix.value + '/' + newName.value + endName;
      } else {
        return newName.value + endName;
      }
    };
    const sourceObject = () => {
      if (prefix.value) {
        return encodeURIComponent(prefix.value + '/' + checkData[0].name);
      } else {
        return encodeURIComponent(checkData[0].name);
      }
    };
    if (targetObject().length > 1024) {
      showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
      return false;
    }
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`);
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let ProxRenameObject = new Prox.default.ProxRenameObject();
    ProxRenameObject.setHeader(header.value);
    ProxRenameObject.setSourceobject(sourceObject());
    ProxRenameObject.setTargetobject(targetObject());
    ProxRenameObject.setFiletype(2);
    console.log(ProxRenameObject, 'ProxRenameObject');

    server.renameObjects(ProxRenameObject, metadata.value, (err, data) => {
      if (data) {
        showToast.success('Rename successful');
        renameShow.value = false;
        defaultFileList.value[0].name = newName.value + endName;
        if (routeBucket.value) {
          router.replace({
            name: 'BucketList',
            query: {
              ...route.query,
              name: newName.value + endName,
            },
          });
        }
        newName.value = '';
      } else {
        console.log(err, 'err');

        showToast.fail(err.message || 'Rename failed');
      }
    });
  };
  const gotoDeploy = () => {
    if (metaImage.value) {
      router.push({
        path: '/deploy',
        query: {
          metaImage: metaImage.value,
          name: defaultFileList.value[0].name,
        },
      });
      return false;
    }
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'file_list',
    });
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);
    let list_prefix = '';
    if (prefix.value) {
      list_prefix = prefix.value + '/';
    }
    let ProxFindRequest = new Prox.default.ProxFindRequest();
    ProxFindRequest.setHeader(header.value);
    ProxFindRequest.setCid('');
    ProxFindRequest.setKey(encodeURIComponent(list_prefix + defaultFileList.value[0].name));
    ProxFindRequest.setFileid('');

    ProxFindRequest.setPrefix('');

    server.findObjects(ProxFindRequest, metadata.value, (err: any, res: { getContentsList: () => any[] }) => {
      if (res) {
        const transferData = res
          .getContentsList()
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
          );
        isError.value = false;

        initRemoteData({ content: transferData }, true, 0);
      } else {
        isError.value = true;
      }
    });
  };
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
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }

    // for (let i = 0; i < data.commonPrefixes?.length; i++) {
    //   let name = data.commonPrefixes[i];
    //   if (data.prefix) {
    //     // name = name.split(data.prefix)[1];
    //     name = name.split('/')[name.split('/').length - 2] + '/';
    //   }

    //   let cur_cid = '';
    //   for (let i = 0; i < data.prefixpins?.length; i++) {
    //     if (data.prefixpins[i]?.prefix === name && data.prefixpins[i]?.cid) {
    //       cur_cid = data.prefixpins[i].cid;
    //     }
    //   }

    //   let item = {
    //     isDir: true,
    //     checked: false,
    //     name,
    //     category: 0,
    //     fileType: 1,

    //     fullName: data.commonPrefixes[i],
    //     key: data.commonPrefixes[i],
    //     idList: [
    //       {
    //         name: 'IPFS',
    //         code: cur_cid,
    //       },
    //       {
    //         name: 'CYFS',
    //         code: '',
    //       },
    //     ],
    //     date: '-',
    //     size: '',
    //     status: '-',
    //     type: 'application/x-directory',
    //     file_id: '',
    //     pubkey: '',
    //     cid: cur_cid,
    //     imgUrl: '',
    //     imgUrlLarge: '',
    //     share: {},
    //     isSystemImg: false,
    //     canShare: false,
    //   };
    //   if (moveShow.value) {
    //     dirData.value.push(item);
    //   } else {
    //     tableData.value.push(item);
    //   }
    // }
    for (let j = 0; j < data?.content?.length; j++) {
      let isDir = data?.content[j].contentType == 'application/x-directory' ? true : false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);

      // imgHttpLink, isSystemImg, imgHttpLarge

      // let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);

      let cid = data.content[j].cid;

      let name = data.content[j].key;
      console.log(data.prefix, 'data.prefix');

      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0) {
        if (isDir) {
          name = name.split('/')[name.split('/').length - 2] + '/';
        } else {
          name = name.split('/')[name.split('/').length - 1];
        }
      }
      let metaImage = `https://${bucketName.value}.${poolUrl}:6008/ipfs/${cid}`;
      console.log(router, 'routerrouter');

      router.push({
        path: '/deploy',
        query: {
          metaImage,
          name: name,
        },
      });
      emits('update:setVisible', false);
      showToast.hide('file_list');
    }
  };

  onMounted(() => {
    if (metaImage.value && name.value) {
      routeBucket.value = checkBucket.value;
      bucketName.value = checkBucket.value;
      prefix.value = checkPrefix.value;
      defaultFileList.value.push({
        name: name.value,
        url: metaImage.value,
      });
    }
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
  .rename_box {
    margin-top: 2rem;
    padding: 0 2rem;
    p {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
  .uploadArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    text-align: center;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background: #fcfcfd;
    border-radius: 2rem;
    svg {
      width: 4rem;
      height: 4rem;
      color: $main_blue;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .uploadType {
      color: #888;
    }
  }
  .uploadArea2 {
    position: relative;
    // max-width: 30rem;
    // max-height: 35rem;
    // width: unset !important;
    height: unset !important;
    // overflow: auto;
  }

  .upload_class {
    justify-content: center;
    z-index: 100;
    // padding-bottom: 11rem;
    :deep {
      .nut-uploader__preview {
        display: none;
      }
    }
  }
  .deploy_box {
    // position: fixed;
    // bottom: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    width: 18rem;
    padding: 1rem;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 0px 0.3rem 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    :deep {
      .nut-searchbar__right-search-icon {
        width: 3.5rem;
        height: 1.5rem;
        margin: 0 0.2rem;
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    p {
      text-align: left;
    }
    p:first-child {
      color: #777;
    }
    p:nth-child(2) {
      font-weight: 700;
      font-size: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      svg {
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
        color: $main_blue;
      }
    }
    .deploy_action {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 0.8rem;
      :deep {
        .nut-button {
          width: 60%;
        }
      }
    }
  }
  @media screen and (min-width: 500px) {
    .uploadArea {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 20rem;
      min-width: 500px;
      width: 50%;
      height: 20rem;
      box-shadow:
        rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      svg {
        width: 4rem;
        height: 4rem;
        color: $main_blue;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .upload_class {
      justify-content: center;
      z-index: 100;
      margin-top: 4rem;
      :deep {
        .nut-uploader__preview {
          display: none;
        }
      }
    }
    .deploy_box {
      border-radius: 1rem;
      background-color: #fff;
      // width: 28rem;
      min-width: 500px;
      width: 50%;
      padding: 1rem;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 0px 0.3rem 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      p:first-child {
        color: #777;
      }
      p:nth-child(2) {
        font-weight: 700;
        font-size: 1.2rem;
      }
      .deploy_action {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 0.8rem;
        :deep {
          .nut-button {
            width: 45%;
          }
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
      bottom: -40px;
      width: 100%;
    }
  }
  .upload_progress {
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
  @media screen and (min-width: 500px) {
    .upload_progress {
      bottom: 0;
      left: 0;
    }
  }
</style>
<style lang="scss"></style>
