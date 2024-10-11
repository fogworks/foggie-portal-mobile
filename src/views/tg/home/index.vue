<template>
  <div class="home-page">
    <div class="home-page-head">
      <img class="img1" src="@/assets/tg/tg-dmcx1.png" alt="" />
      <img class="img2" src="@/assets/tg/tg-dmcx2.png" alt="" />
      <nut-swiper :init-page="2" :auto-play="3000" pagination-visible pagination-color="#426543" pagination-unselected-color="#808080">
        <nut-swiper-item style="height: 50vw">
          <img src="@/assets/tg/tg1.gif" alt="" style="height: 100%; width: 100%" draggable="false" />
        </nut-swiper-item>
        <nut-swiper-item style="height: 50vw">
          <img src="@/assets/tg/tg2.png" alt="" style="height: 100%; width: 100%" draggable="false" />
        </nut-swiper-item>
      </nut-swiper>
    </div>
    <div class="home-page-content">
      <!-- <div class="item">
        <div class="item-icon"> 0 </div>
        <div class="item-name"></div>
        <div class="item-val item-val-no">排名：0</div>
      </div> -->
      <div class="item" @click="gotoDrive('order')">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">GO</div>
        <!-- <div class="item-val">{{ orderTableData.length }}</div> -->
      </div>
      <div class="item" @click="gotoDrive('maxio')">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">MAXIO : Drive</div>
        <div class="item-val">GO</div>
        <!-- <div class="item-val">{{ maxTableData.length }}</div> -->
      </div>
      <div class="item" @click="gotoBind">
        <div class="item-icon">
          <tg2 />
        </div>
        <div class="item-name">钱包</div>
        <div class="item-val">{{ addressStr ? addressStr : 'Bind' }}</div>
      </div>
      <div class="item" @click="gotoShop">
        <div class="item-icon">
          <tg3 />
        </div>
        <div class="item-name">{{ $t('home.buy') }}</div>
        <div class="item-val">Buy</div>
      </div>
      <!-- <div class="item">
        <div class="item-icon">
          <tg4 />
        </div>
        <div class="item-name">转换器</div>
        <div class="item-val">前往</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg5 />
        </div>
        <div class="item-name">挖矿</div>
        <div class="item-val">参与</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg6 />
        </div>
        <div class="item-name">转盘</div>
        <div class="item-val">参与</div>
      </div> -->
      <div class="item" @click="gotoLan">
        <div class="item-icon">
          <tg7 />
        </div>
        <div class="item-name">语言</div>
        <div class="item-val">{{ currentLan === 'zh' ? $t('language.zh') : $t('language.en') }}</div>
      </div>
      <div class="item" @click="logout">
        <div class="item-icon">
          <tg4 />
        </div>
        <div class="item-name">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, createVNode, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import { useUserStore } from '@/store/modules/user';
  import { showDialog } from '@nutui/nutui';
  const userStore = useUserStore();
  import { useI18n } from 'vue-i18n';
  const { locale, t } = useI18n();
  const currentLan = computed(() => userStore.getCurLanguage);
  const address = computed(() => userStore.getAddress);
  //   import { getDmOrder, search_max } from '@/api';
  //   const orderTableData = ref([]);
  //   const maxTableData = ref([]);
  const addressStr = ref('');
  addressStr.value = address.value
    ? address.value.substring(0, 4) + '...' + address.value.substring(address.value.length - 3, address.value.length)
    : '';
  import tg1 from '~icons/home/tg1.svg';
  import tg2 from '~icons/home/tg2.svg';
  import tg3 from '~icons/home/tg3.svg';
  import tg4 from '~icons/home/tg4.svg';
  import tg5 from '~icons/home/tg5.svg';
  import tg6 from '~icons/home/tg6.svg';
  import tg7 from '~icons/home/tg7.svg';
  const list = ref(['@/assets/tg/tg1.gif', '@/assets/tg/tg2.png']);

  const gotoShop = () => {
    router.push('/tgShop');
  };
  const gotoLan = () => {
    router.push('/lan');
  };
  const gotoDrive = (type) => {
    router.push({ path: '/space', query: { page: type } });
  };
  const gotoBind = () => {
    router.push('/personalInfo');
  };
  const logout = () => {
    showDialog({
      title: 'Logout',
      content: createVNode('span', { style: {} }, 'Are you sure you want to logout?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {},
      onOk: () => {
        window.localStorage.removeItem('homeChooseBucket');
        userStore.logout();
        userStore.setCloudCodeIsBind(false);
        userStore.setcurStepIndex(1);
        router.push('/login');
      },
    });
  };
  const initData = async () => {
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
  onMounted(() => {
    // initData();
    // initMaxData();
  });
  watch(currentLan, async (newVal) => {
    console.log('currentLan', newVal);
  });
  watch(address, (val) => {
    console.log('address', val);
    if (val.length > 0) {
      addressStr.value = val.substring(0, 4) + '...' + val.substring(val.length - 3, val.length);
      //   initData();
    }
  });
</script>
<style lang="scss" scoped>
  .home-page {
    position: relative;
    height: 100%;
    .home-page-head {
      position: relative;
      margin: 15px auto;
      width: 90%;
      height: 60vw;
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
    .home-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
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
          left: 15%;
          height: 50px;
          line-height: 50px;
          font-weight: 700;
        }
        .item-val {
          position: absolute;
          top: 30px;
          right: 30px;
          font-weight: bold;
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 30px;
          // font-size: 14px;
          background: #36363b;
          font-size: 22px;
          color: #75c9f9;
        }
        .item-val-no {
          width: 150px;
          text-align: right;
          border: none;
          background: none;
        }
      }
    }
  }
</style>
