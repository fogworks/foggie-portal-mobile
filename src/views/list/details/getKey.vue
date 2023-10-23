<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Generate Access keys</div>
  </div>
  <div class="generateKey">
    <p class="key_tips"> You can generate access keys here </p>
    <p class="key_tips"> You can access S3 clients through a private key. Access address: </p>
    <a href="https://bucketName.pool1.devus.u2i.net:9900" target="_blank">bucketName.pool1.devus.u2i.net:9900</a>
    <nut-form class="key_form" :model-value="dynamicForm.state" ref="dynamicRefForm">
      <!-- <nut-form-item label="Access Key">
        <span>Secret Key</span>
      </nut-form-item> -->
      <nut-form-item
        :label="item.accessKey"
        :prop="'tels.' + index + '.value'"
        :key="item.key"
        v-for="(item, index) in dynamicForm.state.tels"
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
          <span v-if="item.eyeState" class="open_key">{{ item.secretKey }}</span>
          <span v-if="!item.eyeState">XXXXX</span>
          <span class="right_action">
            <eyeOffIon v-if="item.eyeState" @click="dynamicForm.state.tels[index].eyeState = false" />
            <eyeIon v-if="!item.eyeState" @click="dynamicForm.state.tels[index].eyeState = true" />
            <IconDelete @click="deleteKey(index)" />
          </span>
        </p>
      </nut-form-item>
    </nut-form>
  </div>
  <nut-button type="primary" class="add_key" @click="dynamicForm.methods.add">+</nut-button>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import eyeOffIon from '~icons/ion/eye-off';
  import keySolid from '~icons/teenyicons/key-solid';
  import { useRouter } from 'vue-router';
  import eyeIon from '~icons/ion/eye';
  import IconDelete from '~icons/material-symbols/delete';
  import AESHelper from './AESHelper';
  import { Base64 } from 'js-base64';

  import * as pb from '@/pb/prox_grpc_web_pb';
  import * as grpc from '@/pb/prox_pb';
  const router = useRouter();
  const ip = ref<any>('');
  const peer_id = ref<any>('');
  const foggie_id = ref<any>('');
  const token = ref<any>('');
  ip.value = 'http://45.201.245.223:7007';
  peer_id.value = '12D3KooWRB2biisvjS8F11MM9ritJZrtEdNfD6FaT5Fvi1JAG7sp';
  foggie_id.value = 'baeqagmrygu';
  token.value = 'SIG_K1_KZgJypnYhkcohgLKczEKdjbXZehopW2RCA5NbWxs1LDsdnqLRqkpQFn3YUbUjnmrpysmi9SxFxcbtU2oRCRPo555jKvE1b';

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
        const secretKeyBytes = generateRandomBytes(40);
        const sk = cleanString(encodeBase64(secretKeyBytes), 40);

        const accessKeyBytes = generateRandomBytes(20);
        const ak = cleanString(encodeBase64(accessKeyBytes), 20);

        console.log('gener ak sk:', ak, sk);
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

        // console.log("server.generateCred=:", server.generateCred);

        server.generateCred(request, {}, (err: any, res: any) => {
          if (err) {
            console.log('err------generateCred:', err);
          }
          console.log('res------generateCred:', res);
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

  const generateRandomBytes = (n: number): Buffer => {
    let keyStr = Math.random().toString();
    const randomBytesBuffer = AESHelper.encrypt(n.toString(), keyStr);
    console.log('randomBytesBuffer', randomBytesBuffer);
    console.log('randomBytesBuffer', Buffer.from(randomBytesBuffer));
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

  const getKeys = () => {
    let server = new pb.default.ServiceClient(ip.value, null, null);
    let header = new grpc.default.ProxHeader();
    header.setPeerid(peer_id.value);
    header.setId(foggie_id.value);
    header.setToken(token.value);
    let request = new grpc.default.ProxGetCredRequest();
    request.setHeader(header);
    server.listCreds(request, {}, (err: any, res: { array: any }) => {
      if (err) {
        console.log('err------:', err);
      } else {
        for (let i = 0; i < res.array[0].length; i++) {
          const ak = res.array[0][i][0];
          const sk = res.array[0][i][1];
          console.log('res------ak  sk:', ak, sk);
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
  };

  const deleteKey = (index: number) => {
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
      console.log('res------:', res.array);
    });
  };

  onMounted(() => {
    getKeys();
  });
</script>

<style lang="scss" scoped></style>
<style lang="scss">
  .generateKey {
    .key_tips {
      padding: 0 20px;
      font-size: 30px;
      font-weight: 300;
      line-height: 40px;
    }
    .key_tips + a {
      display: block;
      padding: 0 20px;
      text-decoration: none;
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
    }
    .nut-cell-group__wrap {
      box-shadow: none;
    }
    .nut-form-item__body__slots {
      color: #5b5f97;
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
  .add_key {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 100px;
    height: 100px;
  }
</style>
