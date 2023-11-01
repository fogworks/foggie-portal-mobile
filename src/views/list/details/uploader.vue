<template>
  <div class="">
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
      ref="uploadRef"
      class="upload_class"
    >
      <nut-button type="success" class="upload_btn" size="small">+</nut-button>
    </nut-uploader>
  </div>
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
  import { ref, toRefs, defineProps } from 'vue';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import { showToast } from '@nutui/nutui';
  import { calc_merkle, valid_upload } from '@/api/index';
  import '@nutui/nutui/dist/packages/toast/style';
  import { getSecondTime } from '@/utils/util';
  import { update_order_size, tag_mobile_upload } from '@/api/amb';
  import { delay, throttle } from 'lodash';

  import { minSize } from '@/setting.json';
  console.log('----minSize', minSize);

  const emits = defineEmits(['uploadComplete']);

  interface Props {
    bucketName?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    prefix?: any;
    orderInfo?: any;
  }

  const props = defineProps<Props>();

  // const props = defineProps({
  //   bucketName: [String],
  //   accessKeyId: [String],
  //   secretAccessKey: [String],
  //   orderInfo: [Object],
  // });

  // const { bucketName, accessKeyId, secretAccessKey, orderInfo } = toRefs(props);

  const { getOrderInfo } = useOrderInfo();

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
  const getMerkleState = (timeout = true) => {
    const d = {
      orderId: order_id.value,
    };
    valid_upload(d).then((res) => {
      if (res.data?.data) {
        // TODO
        isDisabled.value = true;
        if (timeout) {
          setTimeout(() => {
            getMerkleState(timeout);
          }, 30000);
        }
      } else {
        isDisabled.value = false;
      }
    });
  };
  const beforeupload = (file: any) => {
    return new Promise(async (resolve, reject) => {
      const { bucketName, accessKeyId, secretAccessKey, orderInfo, prefix } = props;
      if (!bucketName || !accessKeyId || !secretAccessKey) {
        return reject(false);
      }

      let prefixStr = '';
      if (prefix.length > 0) {
        prefixStr = prefix.join('/') + '/';
      }

      console.log('prefixStr-------------', prefixStr, '-------------------', prefix);

      let nowTime = Date.now();
      let endTime = new Date(orderInfo.value.created_at).getTime() + 1000 * 60 * 3;
      let time = Math.round((endTime - nowTime) / 1000);
      if (time > 4 * 60) {
        time -= 60 * 60;
      }
      if (time > 0) {
        const content = `Upload files after ${getSecondTime(time)}`;
        showToast.fail(content);
        return reject(false);
      }

      const fileCopy = file[0];
      const d = { orderId: order_id.value };
      let merkleRes = await valid_upload(d);
      if (merkleRes?.data) {
        isDisabled.value = false;
      } else {
        isDisabled.value = true;
        getMerkleState(true);
        return reject();
      }

      uploadUri.value = `https://${bucketName}.devus.u2i.net:6008/o/`;

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
    console.log('responseText--------', option?.sourceFile?.size);
    uploadStatus.value = 'success';

    delay(() => {
      uploadProgressIsShow.value = false;
    }, 2000);
    // emits('getFileList');
    emits('uploadComplete');
    const updateUsedSpace = () => {
      return update_order_size({
        used_space: +option.sourceFile.size,
        order_id: +order_id.value,
        device_type: props.orderInfo.value.used_space === 0 ? 'mobile' : '',
      })
        .then((res: any) => {
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

    console.log('-------------------used---1', props.orderInfo.value.used_space )
    await getOrderInfo(false);
    console.log('-------------------used---2', props.orderInfo.value.used_space )
    if (props.orderInfo.value.mobile_upload == undefined) {
      const tagMobile = () => {
        // orderInfo.value.nodeIp
        tag_mobile_upload('', {
          orderUuid: props.orderInfo.value.uuid,
          tag: true,
        })
          .then((res: any) => {
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
    // let uploadLine = 1024 * 1024 * 50;
    let uploadLine = 1024 * 1024 * minSize;

    let used_space = props.orderInfo.value.used_space || 0;
    if (uploadLine >= used_space) {
      console.log('uploadLine', uploadLine, 'used_space', used_space);
      return false;
    }
    const d = {
      orderId: order_id.value,
      uuid: amb_uuid.value,
      orderUuid: memo.value,
      rpc: props.orderInfo.value.rpc,
      fileSize: option?.sourceFile?.size,
      usedSpace: used_space,
    };
    calc_merkle(d).then((res) => {
      console.log('calc_merkle-----', res);
    });
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
    console.log('--------------22');
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
  };
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
  }
</style>
