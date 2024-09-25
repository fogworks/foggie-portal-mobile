<template>
  <div style="height: 100%">
    <div class="top_box">
      <TopBack>IPFS Pinning Service</TopBack>
    </div>
    <div class="generateKey">
      <div class="top_tips2">
        <p>IPFS Pinning Service API Endpoint</p>
        <nut-searchbar disabled :placeholder="`https://${bucketName}...:6008/pinning`">
          <template #leftin> <Link></Link> </template>
          <template #rightout>
            <div @click="copyS3"> <IconCopy style="vertical-align: middle"></IconCopy> Copy</div>
          </template>
        </nut-searchbar>
      </div>

      <div class="add_key_topBox" v-if="!JWTToken">
        <nut-button type="primary" class="add_key_top" @click="add"> <IconAdd></IconAdd> Create an JWT token</nut-button>
      </div>
      <div class="top_tips2" v-if="JWTToken">
        <p>JWT Token <span class="valid"> (Valid for 7 days)</span></p>
        <nut-searchbar disabled :placeholder="JWTToken">
          <template #leftin> <Link></Link> </template>
          <template #rightout>
            <div @click="copyJWT"> <IconCopy style="vertical-align: middle"></IconCopy> Copy</div>
          </template>
        </nut-searchbar>
      </div>

      <div class="top_tips">
        <img src="@/assets/ipfsService.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Link } from '@nutui/icons-vue';
  import IconCopy from '~icons/home/copy.svg';
  import { ref, onMounted } from 'vue';
  import IconAdd from '~icons/gg/add';
  import { useRoute, useRouter } from 'vue-router';
  import { get_unique_order, get_order_sign } from '@/api/index';
  import { showToast, showDialog } from '@nutui/nutui';
  import { poolUrl } from '@/setting.js';
  import useOrderInfo from './useOrderInfo.js';

  import * as pb from '@/pb/prox_grpc_web_pb';
  import * as grpc from '@/pb/prox_pb';

  // import * as grpcWeb from 'grpc-web';
  const { accessKeyId, secretAccessKey, header, metadata, getOrderInfo, getOrderInfo1, isAvailableOrder, isError } = useOrderInfo();
  const router = useRouter();
  const route = useRoute();
  const ip = ref<any>('');
  const JWTToken = ref<any>('');
  const peer_id = ref<any>('');
  const foggie_id = ref<any>('');
  const token = ref<any>('');
  const bucketName = ref<any>('');
  const domain = ref<any>('');
  domain.value = route.query.domain;
  bucketName.value = route.query.domain;
  const bucketUrl = ref<any>('');
  const loading = ref(false);
  bucketUrl.value = `https://${bucketName.value}.${poolUrl}:6008/pinning`;
  ip.value = `https://${domain.value}.${poolUrl}:7007`;
  // peer_id.value = '12D3KooWRB2biisvjS8F11MM9ritJZrtEdNfD6FaT5Fvi1JAG7sp';
  // foggie_id.value = 'baeqagmrygu';
  // token.value = 'SIG_K1_KZgJypnYhkcohgLKczEKdjbXZehopW2RCA5NbWxs1LDsdnqLRqkpQFn3YUbUjnmrpysmi9SxFxcbtU2oRCRPo555jKvE1b';

  // const dynamicForm: {
  //   state: DynamicFormState;
  // } = {
  //   state: {
  //     tels: [],
  //   },
  // };
  const copyS3 = () => {
    var input = document.createElement('input');
    input.value = bucketUrl.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };
  const copyJWT = () => {
    var input = document.createElement('input');
    input.value = JWTToken.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };

  const add = async () => {
    if (!accessKeyId.value || isError.value) {
      // await getOrderInfo();
      let d = {
        peer_id: route.query.peer_id,
        foggie_id: route.query.foggie_id,
        signature: route.query.signature,
        sign_timestamp: route.query.sign_timestamp,
        order_id: route.query.order_id,
        domain: route.query.domain,
      }

      await getOrderInfo1(d);
    }
    let server = new pb.default.ServiceClient(ip.value, null, null);
    let request = new grpc.default.ProxGeneratePinCredRequest();
    request.setHeader(header.value);
    server.genPinningCred(request, metadata.value, (err: any, res: any) => {
      if (err) {
        isError.value = true;
        console.log('err------generateCred:', err);
      } else {
        console.log(res);
        JWTToken.value = res.array[0];
      }
    });
  };
  onMounted(() => {});
</script>

<style lang="scss">
  .generateKey {
    height: 100%;
    padding-bottom: 120px;
    .bucket_svg_box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
      margin-bottom: 0;
      .bucket_svg {
        width: 120px;
        height: 120px;
      }
    }
    .s3url {
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: underline;
      text-align: center;
      margin: 0 auto;
      display: inline-block;
      span {
        color: #f85c26;
      }
    }
    .s3url1 {
      text-decoration: underline;
      color: #f85c26;
      font-weight: bold;
    }

    .key_tips {
      padding: 0 20px;
      font-size: 22px;
      font-weight: 300;
      line-height: 40px;
      //   color: #5264f9;
    }
    .key_tips + a {
      display: block;
      padding: 0 20px;
      text-decoration: none;
      color: #f85c26;
    }
    .add_tips {
      color: #5264f9;
      font-weight: bold;
      position: fixed;
      bottom: 280px;
      left: 20px;
      width: calc(100% - 200px);
    }
    .s3_tips {
      color: #f85c26;
      font-weight: bold;
      position: fixed;

      bottom: 150px;
      left: 20px;
      width: calc(100% - 200px);
    }
    .left_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0px;
      height: 0px;
      border-radius: 50%;
      background: #5b5f97;
      svg {
        color: #fff;
        width: 50px;
        height: 50px;
      }
    }
    .key_form {
      --nut-form-item-label-width: 100px;
      min-height: 300px;
    }
    .secret_key {
      color: #5264f9;
      color: #000;
      font-size: 22px;
      white-space: nowrap;
      white-space: pre-wrap;
    }
    .key_form_item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f7f1f1;
      .nut-form-item__label {
        display: none !important;
        width: auto !important;
      }
    }
    .nut-cell-group__wrap {
      box-shadow: none;
    }
    .sk_line {
      display: flex;
      width: 100%;
      p {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
      }
    }
    .nut-form-item__body__slots {
      color: #5b5f97;
      font-size: 24px;
      .open_key {
        word-break: break-all;
      }
      svg {
        font-size: 30px;
        color: #5b5f97;
        // margin: 0 5px;
        vertical-align: bottom;
      }
    }
    .right_action {
      //   float: right;
      position: absolute;
      top: -10px;
      right: -20px;
      //   border-top: 1px solid #f8f8f8;
      padding-top: 10px;
      //   width: 100%;
      display: flex;
      //   flex-direction: column;
      align-items: center;
      //   justify-content: space-around;
      margin-top: 10px;
      svg {
        width: 100px;
      }
    }

    .nut-button {
      margin: 10px;
    }
  }
  .top_tips {
    margin-top: 2rem;
    background: #fff;
    img {
      width: 100%;
      height: auto;
    }
  }
  .top_tips2 {
    // background: #fff;
    font-size: 0.8rem;
    .valid {
      font-size: 0.8rem;
    }
    p {
      padding: 0.4rem 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .nut-searchbar__search-input .nut-searchbar__input-bar {
      &:-ms-input-placeholder {
        color: #000;
      }

      &::placeholder {
        color: #000;
      }
    }
  }
  .right_keys {
    padding: 20px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-self: start;
    align-items: start;
    line-height: 34px;

    //   height: 60px;
    .key_title {
      font-size: 30px;
      font-weight: bold;
      line-height: 60px;
    }
  }
</style>

<style lang="scss" scoped>
  .add_key {
    position: fixed;
    bottom: 280px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    z-index: 100;
  }
  .add_key_topBox {
    margin-top: 20px;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
    .add_key_top {
      svg {
        vertical-align: sub;
      }
    }
    span {
      display: inline-block;
      font-size: 0.8rem;
    }
  }

  .s3_key {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f85c27;
    z-index: 100;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50%;
    // -webkit-animation: spin 2s infinite;
    // -webkit-animation-timing-function: linear;
    -webkit-perspective: 1000;
    -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.2));
    -webkit-filter: saturate(1.45) hue-rotate(2deg);
  }
  .bucket_svg_smal {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }
  .how {
    width: 100%;
    // text-align: center;
    // display: inline-block;
    text-decoration: underline;
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>
