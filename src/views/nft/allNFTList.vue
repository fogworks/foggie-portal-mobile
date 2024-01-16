<template>
  <div class="page_box">
    <div class="top_img">
      <img src="@/assets/banner1.svg" alt="" />
      <div class="avatar">
        <img src="@/assets/banner1.svg" alt="" />
      </div>
    </div>
    <div class="top_info">
      <nut-switch class="check_account" @change="seeTypeChange" v-model="seeType" active-text="Current" inactive-text="All" />
      <p>
        {{ activeTab == 1 ? 'NFT List' : 'Inscription List' }}
      </p>
      <div class="info_box">
        <div class="info_item" v-for="item in infoList">
          <p>{{ item.value }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <ListComponent
      @gotoMore="gotoMore"
      has-more
      v-model:activeTab="activeTab"
      :tabList="[]"
      :imgList="imgList"
      :nftTotal="nftTotal"
      :isShowMore="true"
      @loadImgList="loadImgList"
    ></ListComponent>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ListComponent from './listComponent.vue';
  import { showToast, showDialog } from '@nutui/nutui';
  import { search_mint } from '@/api/index.ts';
  import { useUserStore } from '@/store/modules/user';

  import { update_nft_sync } from '@/api';

  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import { poolUrl } from '@/setting.js';
  import { get_unique_order, get_order_sign } from '@/api/index';

  const useStore = useUserStore();
  const walletInfo = computed(() => useStore.getUserInfo?.wallet_info);

  const router = useRouter();
  const state = reactive({
    activeTab: 1, //1 nft, 2 inscription
    infoList: [
      {
        text: 'Fog Drops',
        value: '',
      },
    ],
    seeType: false,
  });
  const { seeType, activeTab, infoList } = toRefs(state);
  const imgList = ref([]);
  const gotoMore = () => {
    if (activeTab.value == 1) {
      router.push({ name: 'NFTList' });
    }
  };
  const seeTypeChange = (val) => {
    showToast.text(`Switched to view ${!seeType.value ? 'all' : 'current'} account data`);
  };
  watch(activeTab, (val) => {
    console.log(val);
  });
  watch(walletInfo, (val) => {
    init();
  });
  const nftTotal = ref(0);
  const init = async () => {
    let arr = [];
    if (!walletInfo || !walletInfo.value || walletInfo.value.length === 0) {
      return;
    }
    for (let i = 0; i < walletInfo.value.length; i++) {
      arr.push(walletInfo.value[i].address);
    }
    const d = {
      account: arr,
    };
    const r = await search_mint(d, 10, 1);
    if (r?.result?.data) {
      imgList.value = r.result.data;
      infoList.value[0].value = r.result.total;
      nftTotal.value = r.result.total;
    }

    const dd = {
      account: arr,
      sync_storage: 2,
    };
    const sync_data = await search_mint(dd, 100, 1);
    if (sync_data?.result?.data) {
      const nft_info = [];
      sync_data?.result.data.map(async (item) => {
        const meta_image = item.meta_image;
        const bucket = meta_image.split('://')[1]?.split('.')[0];
        const cid = meta_image.split('/ipfs/')[1];
        const contractAddress = item.contract;
        const tokenId = item.token_id;
        if (contractAddress && tokenId) {
          let ip = `https://${bucket}.${poolUrl}:7007`;
          let server = new grpcService.default.ServiceClient(ip, null, null);
          let ProxUpdateNFTRequest = new Prox.default.ProxUpdateNFTRequest();
          let ProxNFTInfo = new Prox.default.ProxNFTInfo();
          const { header, metadata } = await getOrderInfo(bucket);
          ProxUpdateNFTRequest.setHeader(header);
          ProxNFTInfo.setCid(cid);
          ProxNFTInfo.setContractid(contractAddress);
          ProxNFTInfo.setTokenid(tokenId);
          ProxUpdateNFTRequest.addNftinfos(ProxNFTInfo);

          console.log('ProxUpdateNFTRequest----------', ProxUpdateNFTRequest, ProxNFTInfo);

          const update_data = await server.updateNFT(ProxUpdateNFTRequest, metadata.value, (err, data) => {
            if (err) {
              console.log('err----------', err);
            } else {
              console.log('data----------', data);
            }
          });
          if (update_data) {
            console.log('update_data----------', update_data);
            nft_info.push({
              contract: contractAddress,
              token_id: tokenId,
            });
          }
        }
      });
      if (nft_info.length > 0) {
        const _d = {
          nft_info,
        };
        await update_nft_sync(_d);
      }
    }
  };

  const getOrderInfo = async (bucket) => {
    let header = new Prox.default.ProxHeader();
    let metadata = ref({});
    let res = await get_unique_order({ domain: bucket });
    if (res?.result?.data?.uuid) {
      const order_uuid = res?.result?.data?.uuid;
      let param = {
        order_uuid,
      };
      const signData = await get_order_sign(param);
      header.setPeerid(res?.result?.data.peer_id);
      header.setId(res?.result?.data.foggie_id);

      let cur_token = signData?.result?.data?.sign;
      const date = signData?.result?.data?.timestamp;
      metadata.value = {
        'X-Custom-Date': date,
      };
      header.setToken(cur_token);
    }
    return { header, metadata };
  };

  const loadImgList = (data) => {
    imgList.value = imgList.value.concat(data);
  };
  onMounted(async () => {
    init();
  });
</script>

<style lang="scss" scoped>
  .page_box {
    // height: 100%;
    background: #fff;
    padding-bottom: 5rem;
  }
  .top_img {
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 400px;

    img {
      object-fit: contain;
      width: 100%;

      height: 100%;
    }
  }
  .avatar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -120px;
    width: 250px;
    height: 250px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .top_info {
    position: relative;
    margin-top: 120px;
    text-align: center;
    > p {
      font-size: 1.4rem;
      font-weight: 800;
    }
    .info_box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .info_item {
        p {
          font-weight: 600;
          font-size: 1.2rem;
          & + p {
            margin-top: 5px;
            font-weight: normal;
            font-size: 1rem;
            color: #9c9c9c;
          }
        }
      }
    }
    .check_account {
      position: absolute;
      right: 15px;
      top: 15px;
      --nut-switch-close-bg-color: green;
      --nut-switch-width: 4rem;
      --nut-switch-inside-open-transform: translateX(374%);
      --nut-switch-inside-close-transform: translateX(34%);
      :deep {
        .nut-switch-button .nut-switch-label.open {
          transform: translateX(-60px);
        }
      }
    }
  }

  @media screen and (min-width: 500px) {
    .top_img {
      position: relative;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      height: 300px;
      img {
        object-fit: contain;
      }
    }
    .avatar {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -80px;
      width: 200px;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 50%;
      background: #fff;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .top_info {
      margin-top: 70px;

      .info_box {
        .info_item {
          p {
            & + p {
              margin-top: 5px;
            }
          }
        }
      }
      .check_account {
        position: absolute;
        right: 15px;
        top: 15px;
        --nut-switch-inside-height: 1.5rem;
        --nut-switch-inside-width: 1.5rem;
        --nut-switch-close-bg-color: green;
        --nut-switch-width: 6rem;
        --nut-switch-height: 2rem;
        --nut-switch-inside-open-transform: translateX(280%);
        --nut-switch-inside-close-transform: translateX(34%);
        --nut-font-size-1: 1rem;
        :deep {
          .nut-switch-button .nut-switch-label.open {
            transform: translateX(-46px);
          }
          .nut-switch-button .nut-switch-label.close {
            transform: translateX(2rem);
          }
        }
      }
    }
    :deep {
      .img_list_box {
        height: unset;
      }
    }
  }
</style>
