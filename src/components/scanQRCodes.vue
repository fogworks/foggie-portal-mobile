<template>
  <div class="qrcode">
    <div class="CloseLback" @click.stop.capture="goBack">
      <CloseLittle width="15" height="15" />
    </div>
    <div class="photoAlbum" @click="uploadFile">
      <div class="imageBox">
        <Image width="20" height="20" color="#fff" />
      </div>
      <span> Photo Album</span>
      <input type="file" id="upload-input" @change="changeFile" accept="image/*" v-show="false" />
    </div>
    <div id="reader"></div>

    <nut-popup
      :safe-area-inset-bottom="true"
      position="bottom"
      closeable
      round
      pop-class="scanPopup"
      z-index="2001"
      :style="{ height: '80%' }"
      v-model:visible="isPopupShow"
    >
      <template v-if="total > 0">
        <div class="title">Do you want to log in? Your OOD has the following options, please select the authorization login</div>
        <div class="total_tag">
          <nut-tag>{{ total }}</nut-tag> Buckets
        </div>
        <nut-infinite-loading
          ref="listRef"
          load-more-txt="No more content"
          v-model="infinityValue"
          :has-more="hasMore"
          @load-more="loadMoreFun"
          class="bucket_box"
        >
          <div class="loadBox">
            <div class="bucket_item" @click="ConfirmAuthorization(item)" v-for="item in listData" :key="item.order_id">
              <img src="@/assets/home_bucket.png" alt="" />
              <p>{{ item.domain || item.order_id }}</p>
            </div>
          </div>
        </nut-infinite-loading>
      </template>
      <template v-else>
        <div class="title">Do you want to log in? Currently, you don't have any available OOD. Please proceed to purchase.</div>
        <router-link to="shop">
          <nut-button shape="round" size="large" class="scanQRButton" type="primary">Require space</nut-button>
        </router-link>
      </template>
    </nut-popup>

    <div id="scanLine"></div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user';
  import { useVibrate } from '@vueuse/core';
  import { search_cloud, generate_signInfoAPi, update_signInfoAPi } from '@/api';
  import { CloseLittle, Image } from '@nutui/icons-vue';
  import { Html5Qrcode } from 'html5-qrcode';
  import { ref, onBeforeUnmount, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { showToast } from '@nutui/nutui';

  const userStore = useUserStore();
  const { vibrate, isSupported } = useVibrate({ pattern: [300, 100, 300] });
  const router = useRouter();
  const route = useRoute();
  const isPopupShow = ref(false);
  const total = ref(0);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  const goBack = async () => {
    if (html5QrCode.value && html5QrCode.value.getState() == 2) await stop();
    router.back();
  };

  function uploadFile() {
    const uploadInput = document.querySelector('#upload-input');
    uploadInput.click();
  }

  async function changeFile(event) {
    switch (html5QrCode.value.getState()) {
      case 1:
        //未开始
        console.log('未开始');
        break;
      case 2:
        //扫描中
        console.log('扫描中');
        await stop();
        html5QrCode.value.clear();
        break;
      case 3:
        //暂停
        console.log('暂停');
        break;
    }

    if (event.target.files.length == 0) {
      return;
    }

    const file = event.target.files[0];
    html5QrCode.value
      .scanFile(file, true)
      .then((decodedText) => {
        console.log(decodedText, 'decodedText---1111');
        scanQRSuccess(decodedText);
      })
      .catch((err) => {
        console.log(err, 'errrr');
      });
  }

  const html5QrCode = ref();
  async function getCameras() {
    if (html5QrCode.value) {
      await stop();
    }

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          html5QrCode.value = new Html5Qrcode('reader');
          if (!route.query?.publicKey) {
            start(); //扫码
          }
        }
      })
      .catch((err) => {
        window.alert('ERROR: 您需要授予相机访问权限', err);
        loadUserMedia();
      });
  }

  function start() {
    //environment后置 user前置
    html5QrCode.value
      .start(
        { facingMode: 'environment' },
        {
          fps: 2, //500毫秒扫描一次
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.777778, // 可选，视频馈送需要的纵横比，(4:3--1.333334, 16:9--1.777778, 1:1--1.0)传递错误的纵横比会导致视频不显示
        },
        (decodedText, decodedResult) => {
          console.log(`Code matched = ${decodedText}`, decodedResult);
          scanQRSuccess(decodedText);
        },
      )
      .catch((err) => {
        console.log(`Unable to start scanning, error: ${err}`);
      });
  }

  //关闭扫码
  function stop() {
    html5QrCode.value
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log('QR Code scanning stopped.');
        const scanLine = document.getElementById('scanLine');
        scanLine.style.animation = 'none';
      })
      .catch((err) => {
        // Stop failed, handle it.
        console.log('Unable to stop scanning.');
      });
  }

  function loadUserMedia() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        // 用户授权访问相机
        // 在这里调用 getCameras() 方法
        console.log(stream);
      })
      .catch(function (error) {
        window.alert('获取相机访问权限失败', error);
      });
  }

  const infinityValue = ref(false);
  const hasMore = computed(() => {
    if (total.value > listData.value.length) {
      return true;
    } else {
      return false;
    }
  });

  const pn = ref(1);
  const ps = ref(10);
  const listData = ref([]);
  function loadBucketList() {
    const postData = {
      sort_type: 'created_at',
      ascending: false,
      is_domain: 1,
      electronic_type: '0',
    };
    infinityValue.value = true;
    search_cloud({
      ps: ps.value,
      pn: pn.value,
      order_state: [0, 1, 2, 3, 6],
      start_time: '',
      end_time: '',
      buy_result: 'success',
      ...postData,
    })
      .then((res) => {
        total.value = res.result?.total || 0;
        pn.value++;
        listData.value = listData.value.concat(res.result?.data || []);
        infinityValue.value = false;
      })
      .catch(() => {
        infinityValue.value = false;
      });
  }

  function loadMoreFun() {
    loadBucketList();
  }

  // 扫码成功

  async function scanQRSuccess(params) {
    const regex = /publicKey=([^&]+)/;
    const match = params.match(regex);
    const publicKey = match ? match[1] : null;
    if (publicKey) {
      vibrate();
      // loadUserMedia();
      await generate_signInfo(publicKey);
    }
  }

  /* 生成签名 */
  const publicKey = ref(''); //公钥
  const signature = ref(''); //签名

  const signData = ref({
    payload: {},
  });

  watch(
    () => route.fullPath,
    (newVal) => {
      console.log(newVal);
      if (newVal) {
        scanQRSuccess(newVal);
      }
    },
    { immediate: true },
  );

  async function generate_signInfo(params) {
    await generate_signInfoAPi(params)
      .then((res) => {
        console.log('generate_sign-------111', res);
        if (res.code == 200) {
          signData.value = res.data;

          publicKey.value = res.data.public_key;
          signature.value = res.data.signature;
          signData.value.payload.user_info = true;
          update_signInfoAPi(publicKey.value, signData.value)
            .then((res) => {
              isPopupShow.value = true;
              console.log('update_signInfoAPi--success-1');
            })
            .catch((error) => {
              console.log('update_signInfoAPi--error---1', error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* 确认授权 */
  function ConfirmAuthorization(row) {
    signData.value.payload.domain = row.domain;
    signData.value.payload.order_uuid = row.uuid;
    signData.value.payload.user_info = false;
    update_signInfoAPi(publicKey.value || route.query?.publicKey, signData.value)
      .then((res) => {
        router.push({ name: 'Home' });
        stop();
        goBack();
      })
      .catch((error) => {
        console.log('update_signInfoAPi----111222', error);
        showToast.success('Scan successful');
        stop();
        goBack();
      });
  }

  /* 弹窗弹起时停止扫码 防止重复扫码调用接口 */
  watch(isPopupShow, (newVal) => {
    if (html5QrCode.value) {
      if (newVal) {
        if (html5QrCode.value.getState() == 2) {
          html5QrCode.value.pause();
        }
      } else {
        if (html5QrCode.value.getState() == 3) {
          html5QrCode.value.resume();
        } else if (html5QrCode.value.getState() == 1) {
          start();
        }
      }
    }
  });

  onMounted(() => {
    getCameras();
    loadBucketList();
  });

  onBeforeUnmount(async () => {
    if (html5QrCode.value && html5QrCode.value.getState() == 2) await stop();
  });
</script>

<style lang="scss">
  .scanPopup.nut-popup {
    background-color: #f9f9f9;
    padding: 40px 40px;
    box-sizing: border-box;

    .title {
      font-size: 24px;
      padding: 30px;
    }

    .bucket_box {
      height: calc(100% - 150px);
      overflow: auto;

      :deep {
        .nut-infinite__container {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
        }
      }

      .loadBox {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
        gap: 10px;
        justify-content: center;
      }

      .bucket_item {
        box-sizing: border-box;
        // width: 100%;
        margin: 15px;
        padding: 10px 0;
        border-radius: 30px;
        font-size: 40px;
        //   background-color: #71ea6f;
        text-align: center;

        img {
          width: 150px;
          margin: 0 0 10px;
        }

        p {
          margin-top: 0px;
          font-size: 24px;
          font-weight: 600;
        }
      }
    }

    .scanQRButton {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      border-radius: 50px;
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  }
  #reader {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 100%;

    // video {
    //   object-fit: cover !important;
    //   height: 100vh !important;
    // }
  }
</style>
<style lang="scss" scoped>
  .qrcode {
    position: relative;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.48);
    overflow: hidden;
    .CloseLback {
      position: absolute;
      left: 15px;
      top: 30px;
      width: 60px;
      height: 60px;
      background-color: aliceblue;
      display: grid;
      place-items: center;
      border-radius: 15px;
      z-index: 999;
    }

    .photoAlbum {
      position: absolute;
      right: 35px;
      bottom: 230px;
      display: flex;
      flex-direction: column;
      place-items: center;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      z-index: 999;
      .imageBox {
        width: 80px;
        height: 80px;
        background-color: #f0f8ff63;
        display: grid;
        place-items: center;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
  }
  #scanLine {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 90%;
    background-color: red; /* 扫描横线的颜色 */
    animation: scanAnimation 3s linear infinite; /* 扫描动画 */
  }

  @keyframes scanAnimation {
    0% {
      top: 10vh;
      opacity: 0;
    }
    50% {
      top: 50vh;
      opacity: 1;
      background: linear-gradient(to right, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 255, 1) 50%, rgba(0, 0, 255, 0) 100%); /* 蓝色渐变效果 */
      height: 3px;
    }
    100% {
      top: 80vh;
      opacity: 0;
      background: linear-gradient(to right, rgba(0, 0, 255, 0) 0%, rgb(113, 113, 237) 50%, rgba(0, 0, 255, 0) 100%); /* 蓝色渐变效果 */
    }
  }
</style>
