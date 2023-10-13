<template>
  <div class="top_box">
    <nut-row class="order-detail">
      <nut-col :span="24" class="order-des">
        <span class="span1">Order-{{ detailsData[0].order_id }} </span>
        <span class="span2">Expriration time: {{ detailsData[0].expire }}</span>
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
    <nut-row class="order-icons">
      <nut-col @click="router.push({ name: 'FileList', query: { ...route.query } })" :span="6" class="order-icon-recycle">
        <IconRecycleFill color="#fff" />
      </nut-col>
      <nut-col :span="6" class="order-icon-node-tree">
        <IconRiNodeTree color="#fff" />
      </nut-col>
      <nut-col :span="6" class="order-icon-send-to-back">
        <IconRiSendToBack color="#fff" />
      </nut-col>
      <nut-col :span="6" class="order-icon-input-cursor-move">
        <IconRiInputCursorMove color="#fff" />
      </nut-col>
    </nut-row>

    <nut-row class="order-icons">
      <nut-col @click="getKey" :span="6" class="order-icon-recycle">
        <keySolid color="#fff" />
      </nut-col>
    </nut-row>
    <div class="type_check_box">
      <div class="type_item" @click="router.push({ name: 'FileList', query: { ...route.query, category: 3 } })">
        <div class="svg_box">
          <IconAudio></IconAudio>
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
      <nut-button type="success" size="small">+ Upload</nut-button>
    </nut-uploader>

    <!-- <recycleFill color="#9F9BEF"/> -->
    <!-- <icon10kOutline color="red" /> -->
    <!-- <keySolid color="red" @click="getKey" /> -->
  </div>
</template>

<script setup lang="ts">
  // import recycleFill from '~icons/home/recycle-fill';
  import IconMdiF from '~icons/mdi/file-cloud';
  import IconRiPie from '~icons/ri/pie-chart-fill';
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';

  import IconRecycleFill from '~icons/ri/recycle-fill';
  import icon10kOutline from '~icons/material-symbols/10k-outline';

  import keySolid from '~icons/teenyicons/key-solid';
  // import AESHelper from './AESHelper';
  // import { Image } from '@nutui/icons-vue';
  import { detailsData } from '../data';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRoute, useRouter } from 'vue-router';
  import { check_name, miner_name_set, order_name_set, search_bill } from '@/api/index';

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

  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});

  const memo = ref<string>('');
  const order_id = ref<string>('');
  const minerIp = ref<string>('');

  memo.value = '963cbdb1-5600-11ee-9223-f04da274e59a_Order_buy';
  order_id.value = '1281';
  search_bill(memo.value, order_id.value).then((res) => {
    console.log('search_bill', res);
    minerIp.value = res?.data?.mp_ipaddr;
  });

  const beforeupload = async (file: any) => {
    bucketName.value = 'foggiebucket';
    accessKeyId.value = 'FOG9C40y1MBG1x85DU3o';
    secretAccessKey.value = 'IZIPDmHm1HXE4ZNCSRIJWuGsUXkp9f98bKHAifVG';
    // uploadUri.value = '/fog/baeqacmjq/foggiebucket';
    uploadUri.value = '/o/foggiebucket';

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
    formData.value.Success_action_status = 201;
    console.log('file', file.length, file, file[0]);
    return [file[0]];
  };

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
    uploadRef.value.clearUploadQueue();
  };

  const onChange = ({ fileList, event }: any) => {
    console.log('onChange', fileList, event);
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    console.log('xhr', xhr, options);
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
  };
  const getKey = () => {
    router.push('/getKey');
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
      console.log('name is not exist');
      let data = {
        is_domain: true,
        name: newBucketName.value,
        order_id: '1281',
      };
      let token = '';
      const miner_result = await miner_name_set(data, token);
      console.log('miner_result', miner_result);
      if (!miner_result?.data?.result) {
        return;
      }
      let order_data = {
        is_domain: true,
        name: 'test12345',
        order_uuid: '1e151b9c-507a-11ee-8369-f218985479b1',
      };
      const order_result = await order_name_set(order_data);
      if (!order_result?.data?.result) {
        return;
      }
    }
  };

  // 218.2.96.99:6008

  //   bucketname: foggiebucket

  // AK: FOG9C40y1MBG1x85DU3o

  //  SK IZIPDmHm1HXE4ZNCSRIJWuGsUXkp9f98bKHAifVG
</script>

<style lang="scss" scoped>
  .top_box {
    margin: 0 30px;
    padding: 30px 10px;
    border-radius: 20px;
    background: $primary-color;

    .order-des {
      margin-bottom: 20px;
      color: #fff;

      .span1 {
        margin-left: 5vw;
        float: left;
        font-size: 18px;
      }

      .span2 {
        margin-right: 5vw;
        float: right;
        font-size: 12px;
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
        height: 8vw;
        margin-left: 10%;
        padding-left: 8vw;
        border-bottom: 1px solid #fff;
        border-radius: 0;
        background: $primary-color;
        box-shadow: none;
        color: #fff;
        font-size: 12px;
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
    height: 100%;
    padding: 20px;

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
