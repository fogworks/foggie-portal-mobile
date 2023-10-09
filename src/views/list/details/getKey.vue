<template>
  <div class="generateKey">
    <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
      <nut-button type="primary" @click="dynamicForm.methods.add">Generate access key</nut-button>
      <nut-form-item label="Access Key">
        <span>Secret Key</span>
      </nut-form-item>
      <nut-form-item
        :label="item.accessKey"
        :prop="'tels.' + index + '.value'"
        :key="item.key"
        v-for="(item, index) in dynamicForm.state.tels"
      >
        <span v-if="item.eyeState">{{ item.secretKey }}</span>
        <span v-if="!item.eyeState">XXXXX</span>
        <eyeOffIon v-if="item.eyeState" @click="dynamicForm.state.tels[index].eyeState = false" />
        <eyeIon v-if="!item.eyeState" @click="dynamicForm.state.tels[index].eyeState = true" />
        <removeMdi @click="deleteKey(index)" />
      </nut-form-item>
    </nut-form>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import eyeOffIon from '~icons/ion/eye-off';
  import eyeIon from '~icons/ion/eye';
  import removeMdi from '~icons/mdi/remove';
  import AESHelper from './AESHelper';
  import { Base64 } from 'js-base64';

  import * as pb from '@/pb/prox_grpc_web_pb';
  import * as grpc from '@/pb/prox_pb';

  const ip = ref<any>('');
  const peer_id = ref<any>('');
  const foggie_id = ref<any>('');
  const token = ref<any>('');
  ip.value = 'http://218.2.96.99:7007';
  peer_id.value = '12D3KooWAZRHMckB9ikH9u1YdaUhkgfcZ5aVaQg6JdBB2WoqXHhh';
  foggie_id.value = 'baeqagmjshayq';
  token.value = 'SIG_K1_KksLjarjf3Pg9HTY6tmSazrpJZEakLFMCPX1SmwBKBWa6jm5NZk1EV6LdkjjofP6xKdEpNWYpYEizJBxz3Ri2G4JWD8wWB';

  const dynamicRefForm = ref<any>(null);
  const dynamicForm = {
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
          dynamicForm.state.tels.push({
            key: Date.now(),
            accessKey: ak,
            secretKey: sk,
            eyeState: false,
          });
        }
      }
      console.log('res------:', res.array);
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
    .nut-form-item__body__slots {
      color: var(--nut-cell-color, var(--nut-title-color2, #666));

      svg {
        margin: 0 20px;
      }
    }

    .nut-button {
      margin: 10px;
    }
  }
</style>
