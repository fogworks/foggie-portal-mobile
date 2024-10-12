<template>
  <div class="space-page">
    <!-- top_back_line -->
    <div class="top_back_line">
      <div class="inside_blue">
        <div class="back_icons" @click="router.go(-1)">
          <img src="@/assets/tg/shop_back.svg" />
          返回
        </div>
        <div class="balance_options"> Choose Drive</div>
      </div>
    </div>
    <div class="space-page-content">
      <h2 v-if="currentPage === 'maxio' && maxTableData.length">选择空间</h2>
      <h2 v-if="currentPage === 'order' && orderTableData.length">选择空间</h2>
      <!-- order -->
      <div class="item" @click="gotoDevice(item)" v-for="(item, index) in orderTableData" :key="index" v-if="currentPage === 'order'">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : {{ item.domain ? item.domain : 'Order-' + item.order_id }}</div>
        <div class="item-val itema-val-blue">{{ item.space }}GB</div>
      </div>
      <!-- maxio -->
      <div class="item" @click="gotoDevice(item)" v-for="(item, index) in maxTableData" :key="index" v-if="currentPage === 'maxio'">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">MAX IO: {{ item.id }}</div>
        <div class="item-val itema-val-blue max-item-val">{{ item.dedicatedip }}</div>
      </div>

      <!-- nut-empty -->
      <div v-if="currentPage === 'order' && orderTableData.length === 0">
        <nut-empty
          style="padding: 10px 0 50px 0; border: 1px dashed #fff; border-radius: 10px"
          description="You currently have no available orders and MAX IO."
          image="error"
        >
        </nut-empty>
      </div>
      <div v-if="currentPage === 'maxio' && maxTableData.length === 0">
        <nut-empty
          style="padding: 10px 0 50px 0; border: 1px dashed #fff; border-radius: 10px"
          description="You currently have no available orders and MAX IO."
          image="error"
        >
        </nut-empty>
      </div>
      <!-- 购买空间 -->
      <div class="item-buy" @click="gotoShop" v-if="currentPage === 'order'">
        <div class="item-icon">
          <tg3 />
        </div>
        <div class="item-name">购买空间</div>
        <div class="item-val">BUY</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import tg1 from '~icons/home/tg1.svg';
  import tg3 from '~icons/home/tg3.svg';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useI18n } from 'vue-i18n';
  import { getDmOrder, search_max } from '@/api';
  //   import * as Prox from '@/pb/prox_pb.js';
  //   import * as grpcService from '@/pb/prox_grpc_web_pb.js';

  import * as Prox from '@/pb/service_pb.js';
  import * as grpcService from '@/pb/service_grpc_web_pb.js';

  const list = ref(['@/assets/tg/tg1.gif', '@/assets/tg/tg2.png']);
  const { locale, t } = useI18n();
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const address = computed(
    () =>
      userStore.getAddress ||
      (userStore.getUserInfo &&
        userStore.getUserInfo.wallet_info &&
        userStore.getUserInfo.wallet_info[0] &&
        userStore.getUserInfo.wallet_info[0].address),
  );
  const currentPage = ref('');
  const orderTableData = ref([]);
  const maxTableData = ref([]);
  const gotoDevice = (item) => {
    if (currentPage.value === 'order') {
      router.push({ path: '/drive', query: { id: item.order_id } });
    } else {
      userStore.setCurrentLeftTab(item);
      window.localStorage.setItem('currentMaxIo', JSON.stringify(item));
      router.push({ path: '/maxio', query: { id: item.id } });
    }
  };

  const tgToken = computed(() => userStore.getTgToken);
  const tgId = computed(() => userStore.getTgInitData?.id);

  const gotoShop = () => {
    router.push('/tgShop');
  };
  const initData = async () => {
    console.log(address.value, 'address.value');
    if (address.value) {
      const d = {
        wallet: address.value,
        pageNo: 1,
        pageSize: 100,
      };
      let res = await getDmOrder(d);
      if (res.code === 200) {
        orderTableData.value = res.data.list;
      }
    }
  };
  const initMaxData = async () => {
    let res = await search_max({
      pn: 1,
      ps: 100,
    });
    let data = res.data;
    let maxList = data.filter((el) => el.device_type === 'maxio' && el.deploy_svc_gateway_state === 'finish' && el.is_active);
    maxTableData.value = maxList;
  };

  const initTgData = () => {
    let server = new grpcService.default.ServiceClient(`https://drive.u2i.net`, null, null);
    let request = new Prox.default.EffectRequest();
    alert(`tgToken:${tgToken.value}===tgId:${tgId.value}`);
    // request.setId(tgId.value);
    request.setId(7527654236);
    request.setForcerefresh(1);
    // let metadata = { Authorization: tgToken.value };
    let metadata = { Authorization: 'AuthToken initData.7527654236' };
    console.log('request', request);
    server.getUserEffect(request, metadata, async (err, res) => {
      if (err) {
        console.log('err-----1', err);
        alert('err-----'+ err.message.toString());
      } else if (res) {
        console.log('res-----1', res);
        alert('res----'+ res.toString());
      }
    });
  };

  onMounted(() => {
    // initTgData()
    if (route?.query?.page) {
      currentPage.value = route.query?.page;
    }
    if (currentPage.value === 'order') {
      initData();
    } else {
      initMaxData();
    }
  });
  watch(address, (val) => {
    console.log('address', val);
    if (val.length > 0) {
      initData();
    }
  });

  watch(tgToken, (val) => {
    if (val) {
      initTgData();
    }
  });
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
  .space-page {
    position: relative;
    height: 100%;
    .space-page-head {
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
    .space-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
      h2 {
        margin: 10px 0 20px;
        color: #fff;
        font-size: 28px;
      }
      .item {
        position: relative;
        margin-bottom: 20px;
        color: #fff;
        width: 100%;
        height: 100px;
        border: 1px solid #36363b;
        background: #151517;
        border-radius: 20px;
        .item-icon {
          position: absolute;
          top: 30px;
          left: 20px;
          svg {
            width: 40px;
            height: 40px;
            color: #000;
          }
        }
        .item-name {
          position: absolute;
          top: 30px;
          left: 12%;
          height: 50px;
          line-height: 50px;
          font-weight: 700;
          font-size: 28px;
        }
        .item-val {
          position: absolute;
          top: 30px;
          right: 30px;
          font-weight: bolder;
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 30px;
          // font-size: 14px;
          background: #36363b;
          font-size: 22px;
        }
        .max-item-val {
          width: 200px !important;
        }
        .itema-val-blue {
          background: #0095eb;
        }
      }
    }
    .item-buy {
      position: relative;
      margin-top: 20px;
      margin-bottom: 20px;
      color: #fff;
      width: 100%;
      height: 100px;
      border: 1px solid #36363b;
      background: linear-gradient(90deg, #0095eb 0%, #81d1ff 50.5%, #0095eb 100%);
      border-radius: 20px;
      .item-icon {
        position: absolute;
        top: 30px;
        left: 20px;
        svg {
          width: 40px;
          height: 40px;
          color: #0095eb;
        }
      }
      .item-name {
        position: absolute;
        top: 30px;
        left: 15%;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
      }
      .item-val {
        position: absolute;
        top: 30px;
        right: 30px;
        font-weight: 700;
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 30px;
        // font-size: 14px;
        background: #fff;
        color: #0095eb;
      }
    }
  }
</style>
