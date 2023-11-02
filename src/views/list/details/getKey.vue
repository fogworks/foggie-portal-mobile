<template>
  <div class="top_box">
    <TopBack>Generate Access keys</TopBack>
  </div>
  <div class="generateKey">
    <div class="bucket_svg_box">
      <img src="@/assets/bucket.svg" class="bucket_svg" />
    </div>

    <p class="key_tips"> Amazon S3 Object storage built specifically for retrieving any amount of data from any location. </p>
    <p class="key_tips"> You can access S3 clients through a private key. Access address: </p>
    <span class="s3url" @click="copyS3">
      <span>{{ bucketName }}</span
      >.devus.u2i.net:9900
    </span>
    <nut-form class="key_form" :model-value="dynamicForm.state" ref="dynamicRefForm">
      <!-- <nut-form-item label="Access Key">
        <span>Secret Key</span>
      </nut-form-item> -->
      <nut-form-item
        :label="item.accessKey"
        :prop="'tels.' + index + '.value'"
        :key="item.key"
        v-for="(item, index) in dynamicForm.state.tels"
        class="key_form_item"
      >
        <template #label>
          <div class="left_img">
            <keySolid></keySolid>
          </div>
        </template>
        <p>
          Access Key:
          <span>{{ item.accessKey }}</span>
        </p>
        <p class="secret_key">
          Secret Key:
          <!-- <span v-if="item.eyeState" class="open_key">{{ item.secretKey }}</span> -->
          <span v-if="item.eyeState" class="open_key">{{ item.secretKey.substring(0, 15) + '...' }}</span>
          <span v-if="!item.eyeState">xxxxx</span>
          <span class="right_action">
            <IconCopy @click="copyKey(item)"></IconCopy>
            <eyeOffIon v-if="item.eyeState" @click="dynamicForm.state.tels[index].eyeState = false" />
            <eyeIon v-if="!item.eyeState" @click="dynamicForm.state.tels[index].eyeState = true" />
            <IconDelete @click="deleteKey(index)" />
          </span>
        </p>
      </nut-form-item>
    </nut-form>
    <nut-empty description="" v-if="!dynamicForm.state.tels.length && !loading"> </nut-empty>
    <p class="key_tips add_tips" v-if="!dynamicForm.state.tels.length">
      Click the Add button to automatically generate Access Key and Secret Key for you.
    </p>
    <p class="key_tips s3_tips" v-if="!dynamicForm.state.tels.length"> Click to learn more about AWS S3. </p>
  </div>
  <nut-button type="primary" class="add_key" @click="dynamicForm.methods.add">+</nut-button>
  <nut-button type="primary" class="s3_key" @click="s3To">
    <template #icon>
      <img src="@/assets/bucketIcon.svg" class="bucket_svg_smal" />
    </template>
  </nut-button>
</template>

<script setup lang="ts">
  import IconCopy from '~icons/home/copy.svg';
  import { ref, reactive, onMounted } from 'vue';
  import eyeOffIon from '~icons/ion/eye-off';
  import keySolid from '~icons/teenyicons/key-solid';
  import { useRoute, useRouter } from 'vue-router';
  import eyeIon from '~icons/ion/eye';
  import IconDelete from '~icons/material-symbols/delete';
  import AESHelper from './AESHelper';
  import { Base64 } from 'js-base64';
  import { get_unique_order } from '@/api/index';
  import { showToast, showDialog } from '@nutui/nutui';

  import * as pb from '@/pb/prox_grpc_web_pb';
  import * as grpc from '@/pb/prox_pb';
  const router = useRouter();
  const route = useRoute();
  const ip = ref<any>('');
  const peer_id = ref<any>('');
  const foggie_id = ref<any>('');
  const token = ref<any>('');
  const bucketName = ref<any>('');
  bucketName.value = route.query.domain;
  const bucketUrl = ref<any>('');
  const loading = ref(false);
  bucketUrl.value = `${bucketName.value}.devus.u2i.net:9900`;
  ip.value = `${bucketName.value}.devus.u2i.net:7007`;
  // peer_id.value = '12D3KooWRB2biisvjS8F11MM9ritJZrtEdNfD6FaT5Fvi1JAG7sp';
  // foggie_id.value = 'baeqagmrygu';
  // token.value = 'SIG_K1_KZgJypnYhkcohgLKczEKdjbXZehopW2RCA5NbWxs1LDsdnqLRqkpQFn3YUbUjnmrpysmi9SxFxcbtU2oRCRPo555jKvE1b';

  interface DynamicFormState {
    tels: {
      key: number;
      accessKey: string;
      secretKey: string;
      eyeState: boolean;
    }[];
  }

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
  const copyKey = (item) => {
    let text = `S3Url:${bucketUrl.value};AccessKey:${item.accessKey};SecretKey:${item.secretKey}`;
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };
  const dynamicRefForm = ref<any>(null);
  const dynamicForm: {
    state: DynamicFormState;
    methods: {
      add: () => void;
    };
  } = {
    state: reactive({
      name: '',
      tels: [],
    }),

    methods: {
      add() {
        if (dynamicForm.state.tels.length === 5 || dynamicForm.state.tels.length > 5) {
          showToast.text('Sorry,Generate up to 5 Access Key and Secret Key for you');
          return;
        }

        const secretKeyBytes = generateRandomBytes(40);
        const sk = cleanString(encodeBase64(secretKeyBytes), 40);

        const accessKeyBytes = generateRandomBytes(20);
        const ak = cleanString(encodeBase64(accessKeyBytes), 20);

        // let ip = 'http://154.31.3.222:7007'
        let server = new pb.default.ServiceClient(ip.value, null, null);

        let header = new grpc.default.ProxHeader();

        let cred = new grpc.default.ProxCred();
        header.setPeerid(peer_id.value);
        header.setId(foggie_id.value);
        header.setToken(token.value);
        cred.setAccesskey(ak);
        cred.setSecretkey(sk);
        let request = new grpc.default.ProxCredRequest();
        console.log('request==:', request);
        console.log('cred=:', cred);

        request.setHeader(header);
        request.setCred(cred);

        server.generateCred(request, {}, (err: any, res: any) => {
          if (err) {
            console.log('err------generateCred:', err);
          }
        });

        dynamicForm.state.tels.push({
          key: Date.now(),
          accessKey: ak,
          secretKey: sk,
          eyeState: false,
        });
      },
    },
  };
  const s3To = () => {
    window.open('https://aws.amazon.com/s3/?nc1=h_ls');
  };
  const generateRandomBytes = (n: number): Buffer => {
    let keyStr = Math.random().toString();
    const randomBytesBuffer = AESHelper.encrypt(n.toString(), keyStr);
    return Buffer.from(randomBytesBuffer);
  };

  const encodeBase64 = (bytes: Buffer): string => {
    const base64String = Base64.fromUint8Array(new Uint8Array(bytes));
    return base64String;
  };

  const cleanString = (input: string, n: number): string => {
    const reg = /[^a-zA-Z0-9\-.\_~]/g;
    const cleaned = input.replace(reg, '');

    if (cleaned.length < 5) {
      return cleaned + 'A'.repeat(5 - cleaned.length);
    }
    if (cleaned.length > n) {
      return cleaned.slice(0, n);
    }

    return cleaned;
  };

  const getKeys = async () => {
    loading.value = true;
    await get_unique_order({ order_uuid: route?.query?.uuid }).then((res: any) => {
      peer_id.value = res.result.data.peer_id;
      foggie_id.value = res.result.data.foggie_id;
      token.value = res.result.data.sign;
      let server = new pb.default.ServiceClient(ip.value, null, null);
      let header = new grpc.default.ProxHeader();
      header.setPeerid(peer_id.value);
      header.setId(foggie_id.value);
      header.setToken(token.value);
      let request = new grpc.default.ProxGetCredRequest();
      request.setHeader(header);
      server.listCreds(request, {}, (err: any, res: { array: any }) => {
        loading.value = false;
        if (err) {
          console.log('err------:', err);
        } else {
          for (let i = 0; i < res.array[0].length; i++) {
            const ak = res.array[0][i][0];
            const sk = res.array[0][i][1];
            if (ak.indexOf('FOG') !== 0) {
              dynamicForm.state.tels.push({
                key: Date.now(),
                accessKey: ak,
                secretKey: sk,
                eyeState: false,
              });
            }
          }
        }
      });
    });
  };
  const onOk = (index: number) => {
    console.log('deleteConfirm', index);
    let server = new pb.default.ServiceClient(ip.value, null, null);

    let header = new grpc.default.ProxHeader();

    let cred = new grpc.default.ProxCred();
    header.setPeerid(peer_id.value);
    header.setId(foggie_id.value);
    header.setToken(token.value);
    const ak = dynamicForm.state.tels[index].accessKey;
    const sk = dynamicForm.state.tels[index].secretKey;
    cred.setAccesskey(ak);
    cred.setSecretkey(sk);
    let request = new grpc.default.ProxCredRequest();
    request.setHeader(header);
    request.setCred(cred);
    server.deleteCred(request, {}, (err: any, res: { array: any }) => {
      if (err) {
        console.log('err------:', err);
      } else {
        dynamicForm.state.tels.splice(index, 1);
      }
    });
  };
  const deleteKey = (index: number) => {
    showDialog({
      title: 'Delete Confirmation',
      content: `Are you sure you want to delete AK SK?`,
      popClass: 'dialog_class',
      cancelText: 'Cancel',
      okText: 'OK',
      onCancel: () => {
        console.log('onCancel');
      },
      onOk: () => {
        console.log('ok');
        onOk(index);
      },
    });
  };

  onMounted(() => {
    getKeys();
  });
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
      bottom: 150px;
      left: 0px;
      width: calc(100% - 200px);
    }
    .s3_tips {
      color: #f85c26;
      font-weight: bold;
      position: fixed;
      bottom: 320px;
      left: 0px;
      width: calc(100% - 200px);
    }
    .left_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
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
    }
    .secret_key {
      color: #5264f9;
      font-size: 24px;
      white-space: nowrap;
    }
    .key_form_item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f7f1f1;
      .nut-form-item__label {
        width: auto !important;
      }
    }
    .nut-cell-group__wrap {
      box-shadow: none;
    }
    .nut-form-item__body__slots {
      color: #5b5f97;
      font-size: 24px;
      .open_key {
        word-break: break-all;
      }
      svg {
        font-size: 37px;
        color: #5b5f97;
        margin: 0 5px;
        vertical-align: bottom;
      }
    }
    .right_action {
      float: right;
    }

    .nut-button {
      margin: 10px;
    }
  }
</style>

<style lang="scss">
  .add_key {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
    z-index: 100;
  }
  .s3_key {
    position: fixed;
    bottom: 280px;
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
  }
  .bucket_svg_smal {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }
</style>
