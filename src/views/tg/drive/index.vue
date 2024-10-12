<template>
  <div class="drive-page">
    <!-- top_back_line -->
    <div class="top_back_line">
      <div class="inside_blue">
        <div class="back_icons" @click="router.go(-1)">
          <img src="@/assets/tg/shop_back.svg" />
          返回
        </div>
        <div class="balance_options"></div>
      </div>
    </div>
    <div class="drive-page-content">
      <h2>DMCX: {{ currentDrive.domain ? currentDrive.domain : 'Order' + currentDrive.order_id }}</h2>
      <div class="drive-line">
        <div class="drive-line1">{{ getfilesize(usedSize, 'B') }}</div>
        <div class="drive-line2">
          {{ Number(((usedSize || 0) / (cloudQuery.space * 1024 * 1024 * 1024 || 1)) * 100).toFixed(2) }}%的1GB</div
        >
        <nut-progress
          :percentage="usePercent"
          text-inside
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
          style="font-weight: bold"
        />
      </div>
      <div class="items">
        <div class="item" @click="gotoOrderDetail(cloudQuery)">
          <div class="item1">
            <img src="@/assets/tg/tg-drive1.png" />
          </div>
          <div class="item2">{{ allCount }}</div>
          <div class="item3">全部</div>
        </div>
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive2.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">收藏</div>
        </div>

        <div class="item" v-for="(item, index) in fileListArr" :key="index" @click="changeTab(item.type)">
          <div class="item1">
            <img src="@/assets/tg/tg-drive6.png" v-if="item.type === 'Photos'" />
            <img src="@/assets/tg/tg-drive4.png" v-if="item.type === 'Videos'" />
            <img src="@/assets/tg/tg-drive5.png" v-if="item.type === 'Audio'" />
            <img src="@/assets/tg/tg-drive3.png" v-if="item.type === 'Documents'" />
          </div>
          <div class="item2">{{ item.number }}</div>
          <div class="item3">{{ item.name }}</div>
        </div>
        <!-- 
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive3.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">文件</div>
        </div>
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive4.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">视频</div>
        </div>
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive5.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">音频</div>
        </div>
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive6.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">图片</div>
        </div> -->
      </div>
    </div>
    <uploader
      v-if="isAvailableOrder && cloudQuery.domain"
      :getSummary="getSummary"
      :isMobileOrder="isMobileOrder"
      :bucketName="bucketName"
      :accessKeyId="accessKeyId"
      :secretAccessKey="secretAccessKey"
      :orderInfo="cloudQuery"
      :usedSize="usedSize"
      @uploadComplete="uploadComplete"
    ></uploader>
  </div>
  <Teleport to="body">
    <nut-dialog
      v-model:visible="dialogVisible"
      title="Bucket Name"
      :close-on-click-overlay="false"
      :show-cancel="false"
      :show-confirm="false"
      custom-class="CustomName BucketName maxio_custom"
      overlayClass="CustomOverlay"
    >
      <template #header>
        <span class="icon" style="margin-right: 5px">
          <IconBucket color="#000"></IconBucket>
          <img src="@/assets/newIcon/Bucketname.png" alt="" srcset="" style="width: 100%; height: 100%" />
        </span>
        Create a Bucket
      </template>

      <p class="bucket_tip" style="text-align: left; word-break: break-word"
        >Buckets are used to store and organize your files.Custom names can only contain lowercase letters, numbers, periods, and dashes
        (-), and must start and end with lowercase letters or numbers.Sensitive information is recommended to be encrypted and uploaded.
        <span style="text-align: right; width: 100%; display: inline-block; text-decoration: underline">what is Bucket?</span>
      </p>

      <p
        style="
          margin-top: 10px;
          margin-bottom: 5px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #000;
        "
      >
        <span>Bucket Name</span> <span>Required</span>
      </p>
      <nut-input v-model="newBucketName" placeholder="Please enter Custom Name" max-length="10" min-length="8"></nut-input>
      <template #footer>
        <nut-button type="primary" style="font-size: 12px" @click="dialogVisible = false">Operate Later</nut-button>
        <nut-button type="primary" @click="createName" :loading="isNameLoading">Confirm</nut-button>
      </template>
    </nut-dialog>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref, onMounted, provide } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { useI18n } from 'vue-i18n';
  import { searchOrder, dm_order_get_token, dm_order_name_set, dm_order_name_check } from '@/api';
  import { getfilesize } from '@/utils/util';
  import { showDialog, showToast } from '@nutui/nutui';
  const { locale, t } = useI18n();
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const currentId = ref('');
  const currentDrive = ref({});

  //CLOUD CODE
  import loadingImg from '@/components/loadingImg/index.vue';
  import { poolUrl } from '@/setting.js';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from '@/views/list/details/useOrderInfo.js';
  import uploader from '@/views/list/details/uploader.vue';
  const isAvailableOrder = ref(true);
  const isMobileOrder = ref(true);
  const dialogVisible = ref(false);
  const newBucketName = ref<string>('');
  const showCreateName = ref<boolean>(true);
  const isNameLoading = ref(false);
  let allCount = ref(0);
  let allSize = ref('');
  const {
    filesCount,
    getSummary,
    usedSize,
    accessKeyId,
    secretAccessKey,
    bucketName,
    header,
    metadata,
    deviceType,
    orderInfo,
    getOrderInfo,
    getOrderInfo1,
    isError,
    loadingAnmation,
  } = useOrderInfo();
  const cloudQuery = ref({});
  const fileListArr = ref([
    {
      type: 'Photos',
      number: '',
      capacity: '',
      name: 'Images',
      total: 0,
    },
    {
      type: 'Videos',
      number: '',
      capacity: '',
      name: 'Videos',
      total: 0,
    },
    {
      type: 'Audio',
      number: '',
      capacity: '',
      name: 'Audio',
      total: 0,
    },
    {
      type: 'Documents',
      number: '',
      capacity: '',
      name: 'Documents',
      total: 0,
    },
  ]);
  const usePercent = computed(() => {
    if (cloudQuery.value.space) {
      return Number(((usedSize.value || 0) / (cloudQuery.value.space * 1024 * 1024 * 1024 || 1)) * 100).toFixed(2);
    }
  });
  onMounted(() => {
    if (route?.query?.id) {
      currentId.value = route.query?.id;
      initSearchOrder();
    }
  });
  const initSearchOrder = async () => {
    let data = {
      orderId: currentId.value,
    };
    let res = await searchOrder(data);

    currentDrive.value = res.data;
    if (currentDrive.value && !currentDrive.value.domain) {
      dialogVisible.value = true;
      return;
    }
    cloudQuery.value = currentDrive.value;
    await getOrderInfo1(cloudQuery.value);
    getSummary();
    getFileStatistics();
  };

  const getFileStatistics = async () => {
    if (cloudQuery.value.domain) {
      const signData = await dm_order_get_token({ orderId: cloudQuery.value.order_id });
      let _token = '';
      let date = '';
      if (signData?.data?.signature) {
        _token = signData?.data?.signature;
        date = signData?.data?.timestamp;
      }
      let metadata = {
        'X-Custom-Date': date,
      };
      let ip = `https://${cloudQuery.value.domain}.${poolUrl}:7007`;
      let server = new grpcService.default.ServiceClient(ip, null, null);
      let header = new Prox.default.ProxHeader();
      let request = new Prox.default.ProxRequestStatistics();
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      header.setPeerid(cloudQuery.value.peer_id);
      header.setId(cloudQuery.value.foggie_id);
      header.setToken(_token);
      header.setApptype(appType);
      request.setHeader(header);
      let total = 0;
      let size = 0;
      server.statistics(request, metadata, (err: any, res: { array: any }) => {
        if (err) {
          console.log('err-statistics------:', err);
        } else {
          fileListArr.value = fileListArr.value.map((item: any) => {
            return {
              ...item,
              number: 0,
              capacity: 0,
              total: 0,
            };
          });
          allCount.value = res.getCategorysum().getCount();
          allSize.value = getfilesize(res.getCategorysum().getTotal());
          res.getCategoriesList().map((item: any) => {
            let index = item.getCategory();
            if (index > 0 && index < 5) {
              fileListArr.value[index - 1].number = item.getCount();
              fileListArr.value[index - 1].capacity = getfilesize(item.getTotal());
              fileListArr.value[index - 1].total = item.getTotal();
              console.log('fileListArr.value', fileListArr.value);
              total = total + Number(fileListArr.value[index - 1].number);
              size = size + item.getTotal();
            }
          });
        }
      });
    }
  };
  const uploadComplete = () => {
    console.log('uploadComplete');
    refresh();
  };
  const gotoOrderDetail = (item: any) => {
    if (!item.domain) {
      dialogVisible.value = true;
    } else {
      router.push({
        name: 'FileList',
        query: {
          domain: item.domain,
          rpc: item.rpc,
          peer_id: item.peer_id,
          foggie_id: item.foggie_id,
          signature: item.signature,
          sign_timestamp: item.sign_timestamp,
          order_id: item.order_id,
        },
      });
    }
  };
  const refresh = async () => {
    console.log('refresh========');
    await getOrderInfo1(cloudQuery.value);
    getSummary();
    getFileStatistics();
  };
  const createName = async () => {
    if (!showCreateName.value) {
      showCreateName.value = true;
    } else if (newBucketName.value) {
      let reg = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9]))*(?:\.[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9]))*)*$/;
      if (newBucketName.value.length < 8 || newBucketName.value.length > 10) {
        showToast.text('Please enter a name with a length of 8-10 digits', {
          customClass: 'creat-name-error',
        });
        return;
      }
      if (!reg.test(newBucketName.value)) {
        showToast.text(
          'Custom names can only contain lowercase letters, numbers, periods, and dashes (-), and must start and end with lowercase letters or numbers',
          {
            customClass: 'creat-name-error',
          },
        );
        return;
      }
      // check name
      isNameLoading.value = true;
      const result = await dm_order_name_check({ domain: newBucketName.value });
      if (result?.data) {
        showToast.loading('Loading', {
          cover: true,
          coverColor: 'rgba(0,0,0,0.45)',
          customClass: 'app_loading',
          icon: loadingImg,
          loadingRotate: false,
          duration: 0,
        });
        createName1();
      } else {
        showToast.text('The name already exists, please change it', {
          customClass: 'creat-name-error',
        });
        console.log('name is exist');
        isNameLoading.value = false;
        return;
      }

      // dialogVisible.value = false;
    }
  };
  const createName1 = () => {
    const d = {
      orderId: cloudQuery.value.order_id,
      domain: newBucketName.value,
    };
    dm_order_name_set(d)
      .then(async (res: any) => {
        isNameLoading.value = false;
        showToast.hide();
        if (res?.code == 200) {
          showToast.success('Create successfully');
          dialogVisible.value = false;
          initSearchOrder();
        } else {
          showToast.fail('Create failed');
        }
      })
      .catch(() => {
        showToast.hide();
        isNameLoading.value = false;
      });
  };
  const changeTab = (name) => {
    let category = 0;
    if (name === 'Photos') {
      category = 1;
    } else if (name === 'Documents') {
      category = 4;
    } else if (name === 'Videos') {
      category = 2;
    } else if (name === 'Audio') {
      category = 3;
    }
    router.push({
      name: 'FileList',
      query: {
        domain: cloudQuery.value.domain,
        rpc: cloudQuery.value.rpc,
        peer_id: cloudQuery.value.peer_id,
        foggie_id: cloudQuery.value.foggie_id,
        signature: cloudQuery.value.signature,
        sign_timestamp: cloudQuery.value.sign_timestamp,
        order_id: cloudQuery.value.order_id,
        category,
        bucketName: bucketName.value,
      },
    });
  };
</script>

<style lang="scss" scoped>
  .top_back_line {
    position: relative;
    height: 120px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100px;
      background: #000;
      overflow: hidden;
      display: flex;
      align-items: center;
      color: #0ca2f8;
      .back_icons {
        margin-left: 20px;
        font-weight: bold;
      }
      .balance_options {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 200px);
        color: #fff;
        font-weight: bolder;
        font-size: 34px;
      }

      .title {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
        width: 100%;
      }

      .total_balance {
        color: #b9d4ff;
        font-size: 1.5rem;
        text-align: center;
        color: #fbcf87;
      }

      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
        margin-top: 0px;
      }
    }
  }
  .drive-page {
    position: relative;
    height: 100%;
    .drive-page-head {
      position: relative;
      margin: 15px auto;
      width: 90%;
      height: 10vw;
      img {
        position: absolute;
        z-index: 1;
      }
      .img1 {
        top: 10px;
        left: 10px;
        width: 10%;
      }
      .img2 {
        top: 10%;
        left: 25%;
        width: 50%;
      }
      .nut-swiper {
        position: absolute;
        width: 100%;
      }
    }
    .drive-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
      h2 {
        margin: 10px 0 20px;
        color: #fff;
        font-size: 28px;
      }
      .drive-line {
        position: relative;
        width: 100%;
        height: 100px;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 24px;
        .drive-line1 {
          position: absolute;
          top: -2px;
          left: 0px;
          font-weight: 700;
        }
        .drive-line2 {
          position: absolute;
          top: -2px;
          right: 0;
          font-weight: 700;
        }
        .drive-line3 {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          height: 10px;
          border-radius: 10px;
          background-color: #36363b;
        }
      }
      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          position: relative;
          width: 48%;
          height: 30vw;
          background: linear-gradient(180deg, #0095eb 0%, #000000 100%);
          border-radius: 30px;
          color: #fff;
          .item1 {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 14vw;
            height: 14vw;
            border: 2px solid;
            border-radius: 50%;
            border-image: linear-gradient(270deg, #ffffff 0%, rgba(153, 153, 153, 0) 88.68%);
            img {
              position: absolute;
              top: 15%;
              left: 15%;
              width: 70%;
              height: 70%;
            }
          }
          .item2 {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
          }
          .item3 {
            position: absolute;
            bottom: 5vw;
            right: 5vw;
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .nut-popup {
    border: 1px solid #0ff20f !important;
  }
  .maxio_custom {
    border: 1px solid #0ff20f !important;
    color: #fff;
    span,
    .bucket_tip {
      color: #fff;
    }
    .nut-dialog__header {
      color: #0ff20f !important;
    }
    .nut-button:last-child {
      background-image: linear-gradient(329deg, #b6e557 0%, #99d017 25%, rgb(131 131 16) 83%, #181b24 100%) !important;
    }
  }
  .creat-name-error {
    z-index: 20001 !important;
  }
</style>
