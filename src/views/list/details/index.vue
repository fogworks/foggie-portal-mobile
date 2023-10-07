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
      <nut-col @click="router.push({ name: 'FileList', query: { id: route.query.order_id } })" :span="6" class="order-icon-recycle">
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

    <nut-uploader
      :url="uploadUri"
      multiple
      :before-upload="beforeupload"
      :disabled="isDisabled"
      :data="formData"
      :headers="formData"
      :before-xhr-upload="beforeXhrUpload"
    >
      <nut-button type="success" size="small">+ Upload</nut-button>
    </nut-uploader>

    <!-- <recycleFill color="#9F9BEF"/> -->
    <icon10kOutline color="red" />
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
  // import AESHelper from './AESHelper';
  // import { Image } from '@nutui/icons-vue';
  import { detailsData } from '../data';
  import { HmacSHA1, enc } from 'crypto-js';
  import { Buffer } from 'buffer';
  import { useRouter, useRoute } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  // let details = reactive<any>({ data: {} });

  // import { get_order_node } from '@/api/amb';

  const bucketName = ref<string>('');
  const accessKeyId = ref<string>('');
  const secretAccessKey = ref<string>('');
  const uploadUri = ref<string>('');
  const prefix = ref<string>('');

  const isDisabled = ref<boolean>(false);
  const formData = ref<any>({});
  const beforeupload = async (file: any) => {
    console.log('file++++', file[0]);
    // get amb node
    // get_order_node(detailsData[0].uuid)
    //   .then((res) => {
    //     console.log('res----', res);
    //     // get status
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    bucketName.value = 'foggiebucket';
    // accessKeyId.value = 'FOGZ2QkDgu2jajTs7oAD';
    accessKeyId.value = 'FOG9C40y1MBG1x85DU3o';
    // secretAccessKey.value = 'hK44W0c2lc6S58RsXFiqsUCF0PJZ080iFYALGwH7';
    secretAccessKey.value = 'IZIPDmHm1HXE4ZNCSRIJWuGsUXkp9f98bKHAifVG';
    // uploadUri.value = 'http://218.2.96.99:6008';
    uploadUri.value = '/fog/baeqacmjq/foggiebucket';

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
    formData.value.Key = prefix.value + file[0].name;
    formData.value.Policy = policyBase64;
    formData.value.Signature = signature;
    formData.value.Awsaccesskeyid = accessKeyId.value;
    formData.value.Success_action_status = 201;
    console.log('file', file.length, file, file[0]);
    return [file[0]];
  };

  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    console.log('xhr', xhr, options);
    xhr.setRequestHeader('x-amz-meta-content-length', options.sourceFile.size.toString());
    xhr.setRequestHeader('x-amz-meta-content-type', options.sourceFile.type);
    xhr.send(options.formData);
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
