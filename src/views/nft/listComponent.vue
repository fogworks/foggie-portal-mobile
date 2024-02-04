<template>
  <div>
    <div class="top_tab_box" v-if="tabList.length">
      <div :class="['tab_item', activeTab == index + 1 ? 'isActive' : '']" v-for="(item, index) in tabList" @click="updateTab(index)">
        {{ item }}
      </div>
    </div>
    <p v-if="isShowMore" @click="emits('gotoMore')" class="show_more"> Show More </p>
    <nut-infinite-loading
      v-if="activeTab == 1"
      class="list_box"
      load-more-txt="No more content"
      v-model="nftInfinityValue"
      :has-more="hasMoreNFT"
      @load-more="nftLoadMoreFun"
    >
      <div class="img_list_box">
        <div :class="['img_item', checkedItem.value.name == item.name ? 'isChecked' : '']" v-for="item in imgList">
          <div class="img_box">
            <img :src="item.meta_image" alt="" />
          </div>
          <p class="item_name">
            {{ item.name }}
          </p>
          <p class="price_time">
            <span>{{ item.token_id }}</span>
          </p>
          <p class="price_time">
            <span class="contract-link" @click="toContract(item, 'nft')">{{ contractLink(item.contract) }}</span>
          </p>
        </div>
      </div>
    </nut-infinite-loading>
    <nut-infinite-loading
      v-if="activeTab == 2"
      class="list_box"
      load-more-txt="No more content"
      v-model="contractInfinityValue"
      :has-more="hasMoreContract"
      @load-more="contractLoadMoreFun"
    >
      <div class="img_list_box">
        <div :class="['img_item', checkedItem.value.name == item.name ? 'isChecked' : '']" v-for="item in contractList">
          <div class="img_box">
            <img :src="item.meta_image" alt="" />
          </div>
          <p class="item_name">
            {{ item.name }}
          </p>
          <p class="price_time">
            <span>{{ transferUTCTime(item.createdAt) }}</span>
          </p>
          <p class="price_time">
            <span class="contract-link" @click="toContract(item, 'contract')">{{ contractLink(item.contract) }}</span>
          </p>
        </div>
      </div>
    </nut-infinite-loading>
    <div class="bottom_btn" v-if="showBtn && hasProvider">
      <nut-button v-if="!checkedItem.value.name" block type="primary" @click="goToDapp">Mint New</nut-button>
      <nut-button v-else-if="checkedItem.value.name && activeTab == 2" block type="primary">Mint</nut-button>
      <nut-button v-else-if="checkedItem.value.name" block type="primary">Mint Again</nut-button>
    </div>
    <div class="bottom_btn" v-else-if="showBtn && isMobileDevice && !hasProvider">
      <a :href="`https://metamask.app.link/dapp/${dappUrl}`">
        <nut-button block type="primary">Mint New</nut-button>
      </a>
    </div>
  </div>
</template>

<script setup>
  import { dappUrl } from '@/setting.js';
  import { useRouter } from 'vue-router';
  import { showToast } from '@nutui/nutui';
  import { transferUTCTime } from '@/utils/util';
  import { browserUrl } from '@/setting';
  import { useUserStore } from '@/store/modules/user';
  import { search_mint, search_deploy } from '@/api/index.ts';
  import detectEthereumProvider from '@metamask/detect-provider';

  const useStore = useUserStore();
  const walletInfo = computed(() => useStore.getUserInfo?.wallet_info);

  const router = useRouter();
  const props = defineProps({
    tabList: {
      type: Array,
      default: () => ['NFT List', 'Contract List'],
    },
    activeTab: {
      type: [String, Number],
      default: 1,
    },
    hasMore: {
      type: Boolean,
      default: false,
    },
    imgList: {
      type: Array,
      default: () => [],
    },
    contractList: {
      type: Array,
      default: () => [],
    },
    chooseType: {
      type: String,
      default: '0', //0 no choose ,1 single,2 multiple
    },
    nftTotal: {
      type: Number,
      default: 0,
    },
    contractTotal: {
      type: Number,
      default: 0,
    },
    isShowMore: {
      type: Boolean,
      default: false,
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
  });
  const emits = defineEmits(['update:activeTab', 'itemClick', 'gotoMore', 'loadImgList', 'loadcontractList']);
  const { showBtn, tabList, activeTab, hasMore, imgList, contractList, chooseType, nftTotal, contractTotal } = toRefs(props);
  const nftInfinityValue = ref(false);
  const contractInfinityValue = ref(false);

  const checkedItem = reactive({
    value: {},
  });
  const hasProvider = ref('');
  const nftPs = ref(10);
  const nftPn = ref(1);
  const contractPs = ref(10);
  const contractPn = ref(1);
  const hasMoreNFT = computed(() => {
    nftInfinityValue.value = false;
    return nftTotal.value > nftPs.value * nftPn.value;
  });
  const hasMoreContract = computed(() => {
    contractInfinityValue.value = false;
    return contractTotal.value > contractPs.value * contractPn.value;
  });
  const nftLoadMoreFun = async () => {
    console.log('---------nft');
    nftPn.value++;
    const arr = getWallet();
    const d = {
      account: arr,
    };
    const res = await search_mint(d, nftPs.value, nftPn.value);
    if (res?.result?.data) {
      emits('loadImgList', res.result.data);
      // nftList.value = nftList.value.concat(res.result.data);
    }
  };
  const contractLoadMoreFun = async () => {
    console.log('---------contract');
    contractPn.value++;
    const arr = getWallet();
    const d = {
      account: arr,
    };
    const res = await search_deploy(d, contractPs.value, contractPn.value);
    if (res?.result?.data) {
      console.log('---------contract');
      emits('loadcontractList', res.result.data);
    }
  };

  const getWallet = () => {
    if (!walletInfo || !walletInfo.value || walletInfo.value.length === 0) {
      return;
    }
    let arr = [];
    for (let i = 0; i < walletInfo.value.length; i++) {
      arr.push(walletInfo.value[i].address);
    }
    return arr;
  };

  const contractLink = (str) => {
    return str.slice(0, 6) + '...' + str.slice(-4);
  };
  const updateTab = (index) => {
    if (tabList.value[index] == 'Inscription List') {
      showToast.text('Coming Soon');
      return false;
    }
    emits('update:activeTab', index + 1);
  };
  const itemClick = (item) => {
    if (checkedItem.value?.name == item.name) {
      checkedItem.value = {};
      return false;
    }
    if (chooseType.value == 1) {
      checkedItem.value = item;
      emits('itemClick', item);
    }
  };
  const isMobileDevice = inject('isMobileDevice');
  const metaOpenDapp = inject('metaOpenDapp');
  const goToDapp = () => {
    metaOpenDapp();
  };
  const toContract = (item, type) => {
    if (type === 'nft') {
      window.open(`${browserUrl}/nft/${item.contract}/${item.token_id}`);
    } else {
      window.open(`${browserUrl}/address/${item.contract}`);
    }
  };
  onMounted(async () => {
    hasProvider.value = await detectEthereumProvider();
  });
</script>

<style lang="scss" scoped>
  .top_tab_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 60px;
    padding: 8px;
    background: #e4ebf3;
    border-radius: 99px;
    .tab_item {
      width: 50%;
      padding: 15px 0;
      text-align: center;
      border-radius: 99px;
      &.isActive {
        background: #fff;
        color: #007bff;
      }
    }
  }
  .show_more {
    margin: 10px 30px;
    text-align: right;
    color: #007bff;
    cursor: pointer;
  }
  .img_list_box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-content: flex-start;
    grid-gap: 20px;
    // height: calc(100vh - 400px);
    height: 100vh;
    padding-bottom: 4rem;
    overflow: auto;
    // margin: 0 30px;
    .img_item {
      width: 300px;
      height: 450px;
      padding: 10px;
      border-radius: 20px;
      overflow: hidden;
      &.isChecked {
        // background: #007bff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      .img_box {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        border-radius: 30px;
        overflow: hidden;
        border: 2px solid rgba(76, 80, 147, 0.1607843137);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: middle;
        }
      }
      .item_name {
        margin: 10px 0;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price_time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
  .bottom_btn {
    // position: fixed;
    // bottom: 120px;
    position: fixed;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 60px);
    margin: 0 auto;
  }
  @media screen and (min-width: 500px) {
    .top_tab_box {
      margin: 10px auto;
      width: 400px;
      padding: 5px;
      border-radius: 99px;
      .tab_item {
        width: 50%;
        padding: 10px 0;
      }
    }
    .show_more {
      margin: 10px 30px;
    }
    .img_list_box {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
      height: calc(100vh - 300px);
      overflow: auto;

      // margin: 0 30px;
      .img_item {
        width: 200px;
        height: 260px;
        padding: 10px;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
        &.isChecked {
          // background: #007bff;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .img_box {
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 30px;
          overflow: hidden;
        }
        .item_name {
          margin: 10px 0;
        }
      }
    }
    .bottom_btn {
      // position: fixed;
      // bottom: 120px;

      width: 300px;
      :deep {
        .nut-button {
          --nut-button-default-height: 70px;
          --nut-button-default-font-size: 1.5rem;
        }
      }
    }
  }
  .contract-link {
    color: #8fc7ff;
    cursor: pointer;
  }
</style>
