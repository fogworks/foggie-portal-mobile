<template>
  <div>
    <div class="dmc_account">
      <div>
        <IconSwitch @click="getList" v-show="curStepIndex == 4"></IconSwitch>
      </div>
      <div class="dmc_account_box">
        <div>
          Hello,
          <router-link to="/member">
            {{ (userInfo.email && userInfo.email.split('@')[0]) || handleID(userInfo.address) }}
          </router-link>
        </div>
        <div class="img-box">
          <nut-popover
            theme="dark"
            :arrow-offset="60"
            :offset="[-60, 12]"
            v-model:visible="accountShow"
            :list="menuItems"
            location="bottom-start"
            @choose="choose"
          >
            <template #reference>
              <nut-image show-error :src="userAvatar ? userAvatar : require('@/assets/user.png')" />
            </template>
          </nut-popover>
        </div>
      </div>
    </div>

    <van-swipe @change="topSwipeChange" :loop="false" class="top_swipe" :width="swipeWidth" ref="swipeRef">
      <van-swipe-item @click="swipeRef.swipeTo(0)">
        <div inset class="income-card">
          <img src="@/assets/balance_right.svg" @click="gotoPage('analysisChart')" />
          <div class="card_row_1 card_header">
            <div class="total_income">
              <div class="balance_text">
                <span>{{ cloudBalanceNum?.integerPart }}</span>
                <span style="font-size: 13px">.{{ cloudBalanceNum?.decimalPart }}</span>
                <img src="@/assets/DMC(1).png" alt="" style="margin-left: 5px" />
              </div>
              <div class="usd_text" v-if="dmc2usdRate && cloudBalance && cloudBalance != '--'">
                ≈ {{ formatNumber(dmc2usdRate * cloudBalance)?.integerPart
                }}<span style="font-size: 13px">.{{ formatNumber(dmc2usdRate * cloudBalance)?.decimalPart }}</span> USD
              </div>
            </div>
          </div>
          <div class="card_row_1 pst-row">
            <div>
              <p>Space</p>
              <p class="column_value">{{ getfilesize2(cloudPst == '--' ? 0 : cloudPst) }}</p>
            </div>

            <div @click="gotoPage('analysis')">
              <p>Today's new funds</p>
              <p class="column_value today_income"
                >+ {{ cloudTodayIncomeNum?.integerPart }}<span style="font-size: 13px">.{{ cloudTodayIncomeNum?.decimalPart }}</span> DMC
                <TriangleUp color="#fbd116" width="20px"></TriangleUp>
              </p>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item @click="swipeRef.swipeTo(1)">
        <div inset class="income-card income-card2">
          <img src="@/assets/balance_right.svg" />
          <div class="card_row_1 card_header">
            <div class="total_income">
              <div class="balance_text">
                <IconNFT></IconNFT>
              </div>
            </div>
          </div>
          <div class="card_row_1 pst-row">
            <div>
              <p>Total</p>
              <p class="column_value">{{ nftTotal }}</p>
            </div>
            <div>
              <p>Contracts</p>
              <p class="column_value">{{ contractTotal }}</p>
            </div>

            <div @click="gotoPage('PersonalInfo')">
              <p>Wallets</p>
              <p class="column_value">
                {{ walletInfo?.length || 0 }}
              </p>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>

    <div v-if="!leftBucketList.length" style="margin-top: 2rem; text-align: center">
      <!-- <nut-button type="primary" @click="choose({ name: 'Expansion' })">Bucket</nut-button> -->
      <div style="display: flex; justify-content: center; align-items: center">
        <div class="plus_bucket" @click="choose({ name: 'Bucket' })">
          <IconPlus></IconPlus>
        </div>
        <img src="@/assets/home_bucket.png" alt="" />
      </div>

      <p>Welcome to foggie mobile, you don't have a bucket yet, please select one. Click on the + to make your selection!</p>
    </div>
    <div v-if="order_uuid && leftBucketList.length" style="margin-top: 0.8rem">
      <!-- <div class="bucket_tips">
        The current display is the content of {{ bucketName }},click on the upper right corner of the page <IconMore></IconMore> to switch
        the bucket
      </div> -->
      <div style="display: grid; grid-gap: 10px; justify-content: space-between; grid-template-columns: 1fr 1fr">
        <ImgBox
          :isAvailableOrder="isAvailableOrder"
          :header="header"
          :metadata="metadata"
          :deviceType="deviceType"
          :orderInfo="orderInfo"
          :bucketName="bucketName"
          :accessKeyId="accessKeyId"
          :secretAccessKey="secretAccessKey"
          class=""
          ref="imgListRef"
          :order_uuid="order_uuid"
          @refresh="refresh"
          :handleImg="handleImg"
        >
          <Uploader
            :getSummary="getSummary"
            v-if="isAvailableOrder && accessKeyId && orderInfo.value.uuid"
            class="img_upload"
            :isMobileOrder="isMobileOrder"
            :bucketName="bucketName"
            :accessKeyId="accessKeyId"
            :secretAccessKey="secretAccessKey"
            :orderInfo="orderInfo"
            @uploadComplete="uploadComplete"
            @refresh="refresh"
          ></Uploader>
        </ImgBox>

        <div class="type_check_box right_check_box">
          <div
            class="type_item"
            @click="
              router.push({
                name: 'FileList',
                query: {
                  id: currentBucketData.order_id,
                  uuid: currentBucketData.uuid,
                  amb_uuid: currentBucketData.amb_uuid,
                  domain: currentBucketData.domain,
                  category: 1,
                  bucketName,
                },
              })
            "
          >
            <div class="svg_box">
              <IconImage></IconImage>
            </div>
            <p>Images</p>
          </div>
          <div
            class="type_item"
            @click="
              router.push({
                name: 'FileList',
                query: {
                  id: currentBucketData.order_id,
                  uuid: currentBucketData.uuid,
                  amb_uuid: currentBucketData.amb_uuid,
                  domain: currentBucketData.domain,
                  category: 3,
                  bucketName,
                },
              })
            "
          >
            <div class="svg_box">
              <IconAudio2></IconAudio2>
            </div>
            <p>Audio</p>
          </div>
          <div
            class="type_item"
            @click="
              router.push({
                name: 'FileList',
                query: {
                  id: currentBucketData.order_id,
                  uuid: currentBucketData.uuid,
                  amb_uuid: currentBucketData.amb_uuid,
                  domain: currentBucketData.domain,
                  category: 4,
                  bucketName,
                },
              })
            "
          >
            <div class="svg_box">
              <IconDocument></IconDocument>
            </div>
            <p>Documents</p>
          </div>
          <div
            class="type_item"
            @click="
              router.push({
                name: 'FileList',
                query: {
                  id: currentBucketData.order_id,
                  uuid: currentBucketData.uuid,
                  amb_uuid: currentBucketData.amb_uuid,
                  domain: currentBucketData.domain,
                  category: 2,
                  bucketName,
                },
              })
            "
          >
            <div class="svg_box">
              <IconVideo></IconVideo>
            </div>
            <p>Video</p>
          </div>
        </div>
      </div>

      <div class="recent_folder_box" v-if="tableData.length">
        <div class="recent_folder_title">
          <span>Recent Files</span>
          <span class="more" @click="gotoOrderDetail(currentBucketData)">See All</span>
        </div>
        <!-- <div class="recent_folder">
          <div class="folder_item" v-for="item in floderData">
            <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div> -->
        <div class="file_list file_list_img" v-if="imgData.length">
          <div @click="handleRow(item)" class="list_item" v-show="index < 10" v-for="(item, index) in imgData" :key="index">
            <nut-image show-loading show-error round radius="5px" :src="item.imgUrl" fit="cover" position="center">
              <template #loading>
                <Loading width="16" height="16"></Loading>
              </template>
            </nut-image>
            <!-- <img :src="item.imgUrl" alt="" /> -->
          </div>
        </div>
        <div class="file_list" v-if="otherData.length">
          <div @click="handleRow(item)" class="list_item" v-show="index < 4" v-for="(item, index) in otherData" :key="index">
            <div :class="['left_icon_box']">
              <img v-if="item.isDir && item.name == 'pinning'" class="cloud_pin" src="@/assets/cloud_pin.png" alt="" />
              <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
              <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
              <!-- <img v-else-if="item.category == 4" src="@/assets/svg/home/icon_pdf.svg" alt="" /> -->
              <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />

              <img v-else-if="(item.category == 1 || item.category == 2) && item.imgUrl" :src="item.imgUrl" alt="" />
              <img v-else src="@/assets/svg/home/file.svg" alt="" />
            </div>
            <div class="name_box">
              <p>{{ item.name }}</p>
              <p>{{ item.date || '' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else-if="!order_uuid && listData.length">
      <p>Please set the bucket name first</p>
    </div> -->
    <div class="recent_folder_box" v-if="nftImgList.length" style="padding: 1rem 0">
      <div class="recent_folder_title" style="margin-left: 1rem">
        <span>NFT Recent</span>
        <span></span>
      </div>
      <ListComponent :showBtn="false" has-more :tabList="[]" :imgList="nftImgList"></ListComponent>
    </div>
    <div class="tab_top_title" v-if="ishaveProfit"
      >Reward and Expenditure <span style="font-size: 12px; display: inline-block">(for the last weeks)</span></div
    >
    <nut-infinite-loading
      style="margin-top: 1rem; min-height: 280px; height: 600px; padding-bottom: 10px; overflow: auto"
      v-if="cloudCodeIsBind && earningsList.length"
      load-more-txt="No more content"
      :has-more="hasMore2"
      v-model="infinityValue2"
      @load-more="loadMore2"
    >
      <div
        class="list_item"
        v-for="(item, index) in earningsList"
        @click="gotoOrderPage(item)"
        :class="[isOpen(item.order_info.state) ? '' : 'history_item']"
      >
        <div class="order_status_flag open" v-if="isOpen(item.order_info.state) && !item.order_info.domain">To be activated</div>
        <div class="order_status_flag open" v-else-if="isOpen(item.order_info.state)">Open Bucket</div>
        <div class="order_status_flag history" v-if="!isOpen(item.order_info.state)">History Bucket</div>
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
          <!-- <img src="@/assets/DMC_Token1.png" alt="" /> -->
          <img v-if="item.order_info.electronic_type == 0" src="@/assets/mobile.svg" alt="" />
          <img v-else src="@/assets/desktop.svg" alt="" />
        </div>
        <div style="width: 100%; justify-content: flex-end !important; margin-top: -2px">
          <span>{{ transferUTCTime(item.created_at) }}</span>
        </div>
        <div>
          <span style="font-weight: bold" v-if="item.order_info.domain">{{ item.order_info.domain }}</span>
          <span style="font-weight: bold" v-else>Bucket({{ item.order_id }})</span>
          <span
            :class="[
              item.inner_user_trade_type == 'payout' ? 'expense' : '',
              item.inner_user_trade_type == 'income' ? 'earnings' : '',
              'trade_type',
            ]"
          >
            <span v-if="item.inner_user_trade_type == 'payout'">-</span><span v-else-if="item.inner_user_trade_type == 'income'">+</span>
            {{ formatNumber(item.quantity)?.integerPart
            }}<span style="font-size: 13px">.{{ formatNumber(item.quantity)?.decimalPart }}</span>
          </span>
        </div>
        <div>
          <span class="time">{{ item.trx_id }}</span>
          <!-- <span class="time">{{ transferUTCTime(item.created_at) }}</span> -->
          <span style="text-align: right" class="my_status">{{ mapTypes[item.trade_type] }}</span>
          <!-- <span>{{ item.trade_type == 'user_delivery_income' ? '' : item.state }} </span> -->
        </div>
      </div>
    </nut-infinite-loading>
    <!-- <nut-backtop el-id="app" :distance="200"></nut-backtop> -->
    <van-back-top target="#app" offset="200" right="0" bottom="15vh" />

    <!-- account show -->
    <!-- <nut-action-sheet v-model:visible="accountShow" :menu-items="menuItems" @choose="choose" /> -->
    <Teleport to="body">
      <nut-popup position="left" :style="{ width: '6rem', height: '100%' }" v-model:visible="showRight">
        <!-- <span class="draw_title"> Select a bucket to display on the home page </span> -->
        <nut-infinite-loading
          :load-more-txt="'Is Bottom'"
          class="file_list file_list_bucket"
          ref="listRef"
          v-model="infinityValue"
          :has-more="hasMore"
          @load-more="loadMoreFun"
        >
          <div
            :class="[bucketName && bucketName == item.domain ? 'is_checked' : '', 'list_item']"
            v-for="item in leftBucketList"
            @click="setBucket(item)"
          >
            <div class="order_img">
              <!-- <img v-if="item.electronic_type == 0" src="@/assets/mobile1.svg" alt="" /> -->
              <img v-if="item.electronic_type == 1" src="@/assets/desktop1.svg" alt="" />
            </div>
            <IconHistory class="history" v-if="[4, 5].includes(item.state)"></IconHistory>
            <div :class="['left_icon_box', [4, 5].includes(item.state) ? 'isHistory' : '', item.checked ? 'is_checked' : '']">
              <img src="@/assets/home_bucket.png" alt="" />
            </div>
            <div class="name_box">
              <span>{{ item.domain || 'Order' + item.order_id }}</span>
            </div>
          </div>
        </nut-infinite-loading>
        <div style="margin-top: 1rem; text-align: center">
          <div class="plus_bucket" style="margin: 0 auto" @click="choose({ name: 'Bucket' })">
            <IconPlus></IconPlus>
          </div>
        </div>
      </nut-popup>
    </Teleport>

    <ActionComponent
      v-model:fileItemPopupIsShow="fileItemPopupIsShow"
      v-model:fileItemDetailPopupIsShow="fileItemDetailPopupIsShow"
      v-model:renameShow="renameShow"
      v-model:moveShow="moveShow"
      v-model:detailShow="detailShow"
      v-model:imgStartIndex="imgStartIndex"
      :category="0"
      :header="header"
      :prefix="[]"
      :isAvailableOrder="isAvailableOrder"
      :chooseItem="detailRow.value"
      :images="images"
      :imgUrl="imgUrl"
      :isMobileOrder="isMobileOrder"
      :isNewFolder="false"
      :selectArr="selectArr"
      :bucketName="bucketName"
      :metadata="metadata"
      :orderInfo="orderInfo"
      :isCheckMode="false"
      :accessKeyId="accessKeyId"
      :secretAccessKey="secretAccessKey"
      @refresh="refresh"
      @handlerClick="handlerClick"
      @swipeChange="swipeChange"
      @clickFIleItemDetail="clickFIleItemDetail"
      @clickFIleItem="clickFIleItem"
    ></ActionComponent>
  </div>
</template>

<script lang="ts" setup name="HomePage">
  import ImgBox from '@/views/photo/imageBox.vue';
  // import UploadSet from '@/views/nft/uploadSet.vue';
  import ErrorPage from '@/views/errorPage/index.vue';
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconTransaction from '~icons/home/transaction.svg';
  import IconPlus from '~icons/home/plus.svg';
  import IconPlus2 from '~icons/home/add.svg';
  import IconAssets from '~icons/home/assets.svg';
  import IconHistory from '~icons/home/history.svg';
  import IconNFT from '~icons/home/nft2.svg';
  import IconMore from '~icons/home/more.svg';
  import IconSwitch from '~icons/home/switch2.svg';
  import IconAudio2 from '~icons/home/audio2.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconVideo from '~icons/home/video.svg';
  import { Notice, TriangleUp, DouArrowUp, RectUp, Setting, Loading, Shop, Scan2 } from '@nutui/icons-vue';
  import { toRefs, computed, reactive, ref, watch, watchEffect, createVNode } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  //   import { search_cloud } from '@/api';
  import { search_cloud } from '@/api';
  import useUserAssets from './useUserAssets.ts';
  import { transferUTCTimeDay, getfilesize2 } from '@/utils/util';
  import { transferUTCTime, formatNumber } from '@/utils/util';
  import '@nutui/nutui/dist/packages/toast/style';
  import { useIntersectionObserver } from '@vueuse/core';
  import { search_order_profit, search_user_asset_detail, check_bind_otp, setIsVerifiedAPI, getIsVerifiedAPI } from '@/api/amb';
  import useOrderList from './useOrderList.ts';
  import loadingImg from '@/components/loadingImg/index.vue';
  import Uploader from '@/views/list/details/uploader.vue';
  import useOrderInfo from '@/views/list/details/useOrderInfo.js';
  import useShare from '@/views/list/details/useShare.js';
  import useDelete from '@/views/list/details/useDelete.js';
  import ActionComponent from '@/views/list/details/actionComponent.vue';
  import ListComponent from '@/views/nft/listComponent.vue';

  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import { poolUrl } from '@/setting.js';
  import moment from 'moment';
  import { HmacSHA1, enc } from 'crypto-js';
  import { search_mint, search_deploy } from '@/api/index.ts';
  const tableLoading = ref(false);

  // const { loadMore as loadBucket, listData  } = useOrderList();
  const { resetData, loadMore, listData, hasMore, infinityValue, total } = useOrderList();
  const {
    isAvailableOrder,
    getSummary,
    isError,
    bucketName,
    header,
    metadata,
    deviceType,
    orderInfo,
    accessKeyId,
    secretAccessKey,
    getOrderInfo,
  } = useOrderInfo();
  const { createNFT, doShare, getHttpShare, cloudPin } = useShare(orderInfo, header, deviceType, metadata);
  const selectArr = computed(() => {
    return [detailRow.value];
  });
  const images = computed(() => {
    let arr = [];
    imgData.value.filter((el) => {
      arr.push(el.imgUrlLarge);
    });
    return arr;
  });
  const { deleteItem } = useDelete(
    tableLoading,
    () => {
      refresh();
    },
    orderInfo,
    header,
    metadata,
  );
  const isOpen = (state) => {
    if (state === 4 || state === 5) {
      return false;
    } else {
      return true;
    }
  };

  const isMobileOrder = computed(() => {
    if (orderInfo.value.electronic_type == '0') {
      return true;
    } else {
      return false;
    }
  });
  let server, currentBucketData;
  const swipeWidth = ref(300);
  const swipeRef = ref('');
  const moveShow = ref(false);
  const accountShow = ref(false);
  const showRight = ref(false);
  const detailShow = ref(false);
  const curSelectSrc = ref('');
  const curSelectType = ref('');
  const listRef = ref('');
  const imgUrl = ref('');
  const imgStartIndex = ref(0);
  const contractTotal = ref(0);
  const menuItems = [
    {
      name: 'Assets',
      icon: IconAssets,
    },
    {
      name: 'Bucket',
      icon: IconPlus2,
    },
    {
      name: 'Scan',
      icon: Scan2,
    },
  ];
  const userInfo = computed(() => userStore.getUserInfo);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const walletInfo = computed(() => userStore.getUserInfo?.wallet_info);

  const router = useRouter();

  const mapTypes = {
    user_delivery_income: 'UserDeliveryReward',
    buy_order: 'Purchased Bucket',
    challenge: 'Bucket Challenge',
    arbitration: 'Bucket Arbitration',
    OrderReceiptAddReserve: 'Increase Bucket deposit', // 增加订单预存金
    OrderReceiptSubReserve: 'Reduce Bucket deposit', // 减少订单预存金
    OrderReceiptDeposit: 'Bucket deposit', // 押金
    OrderReceiptClaim: 'Bucket deliver', // 交付
    OrderReceiptReward: 'Bucket incentive', // 激励
    OrderReceiptRenew: 'Bucket Update', // 订单更新
    OrderReceiptChallengeReq: 'Initiate a Challenge', // 发起挑战
    OrderReceiptChallengeAns: 'Responding to challenges', // 响应挑战
    OrderReceiptChallengeArb: 'arbitrate', // 仲裁
    OrderReceiptPayChallengeRet: 'Overtime compensation return', // 超时赔付返还
    OrderReceiptLockRet: 'Bucket lock return', // 订单锁定返还
    user_cancel_order: 'Bucket Cancellation Refund', // 订单取消
    user_OrderReceiptDeposit: 'Bucket expires. Deposit refunded', // 订单到期退还押金
    OrderRefund: 'Bucket refund', // 订单退款
    OrderReceiptEnd: 12,
  };
  const imgListRef = ref('');
  const nftImgList = ref([]);
  const nftTotal = ref(0);
  const noBucketData = ref([]);
  const tableData = ref([]);
  const otherData = ref([]);
  const imgData = ref([]);
  const userStore = useUserStore();
  const topSwipeIndex = ref(0);
  const earningsList = ref([] as any);
  const { getUserAssets, getExchangeRate, dmc2usdRate, cloudTodayIncome, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } =
    useUserAssets();

  const ambRefuse = computed(() => userStore.getambRefuse); //大使是否拒绝  true 拒绝  false 同意
  const curStepIndex = computed(() => userStore.getCurStepIndex); // 1 绑定大使邀请码
  const bindAmbCode = inject('bindAmbCode');
  const openBindDMCDiaolg = inject('openBindDMCDiaolg');
  const fileItemPopupIsShow = ref(false);
  const fileItemDetailPopupIsShow = ref(false);
  const renameShow = ref(false);
  function swipeChange(index) {
    imgStartIndex.value = index;
    detailRow.value = imgData.value[index];
    if (detailRow.value.originalSize > 1024 * 1024 * 20) {
      showToast.text('The file is too large, please download and view');
    }
  }
  function topSwipeChange(index) {
    topSwipeIndex.value = index;
  }
  function clickFIleItem(params) {
    detailRow.value = params;
    fileItemPopupIsShow.value = true;
    if (detailRow.value.originalSize > 1024 * 1024 * 20) {
      showToast.text('The file is too large, please download and view');
    }
  }

  function clickFIleItemDetail(params) {
    console.log(params);
    fileItemDetailPopupIsShow.value = true;
  }
  watch(
    tableData,
    (val) => {
      imgData.value = [];
      otherData.value = [];
      if (val.length) {
        val.forEach((el) => {
          if (el.category == 1) {
            imgData.value.push(el);
          } else {
            otherData.value.push(el);
            // if (floderData.value.length < 4) floderData.value.push(el);
          }
        });
      }
    },
    { deep: true },
  );
  const infinityValue2 = ref(false);
  const hasMore2 = computed(() => {
    if (total2.value > earningsList.value.length) {
      return true;
    } else {
      return false;
    }
  });
  const leftBucketList = computed(() => {
    return noBucketData.value.concat(listData.value);
  });
  const isError2 = ref(false);
  const pageSize = ref(10);
  const pageNum = ref(1);
  const total2 = ref(0);
  const order_uuid = ref('');
  const pn = ref(1);
  const ps = ref(10);
  const loadMoreFun = async () => {
    try {
      const postData = {
        sort_type: 'expire',
        ascending: false,
        is_domain: 1,
        electronic_type: '0',
        domain: '',
      };
      await loadMore([0, 1, 2, 3, 4, 6], '', '', '', postData);
      console.log('开始请求');

      nextTick(() => {
        if (hasMore.value && listData.value.length <= 20) {
          loadMoreFun();
        }
      });
    } catch {}
  };
  const ishaveProfit = ref(false); //是否订单已经产生过收益 如果有收益不展示引导页
  function searchAllOrderProfit() {
    const postData = { start_time: '', end_time: '' };
    search_user_asset_detail(postData)
      .then((res) => {
        if (res.code == 200) {
          if (res.result.data.length > 0) {
            ishaveProfit.value = true;
          } else {
            ishaveProfit.value = false;
          }
        }
      })
      .finally(() => {});
  }

  const getList = async () => {
    showRight.value = true;
    if (!leftBucketList.value.length) {
      nextTick(async () => {
        resetData();
        getNoBucketOrder();
        await loadMoreFun();
      });
    }
  };
  const choose = (item) => {
    if (item.name == 'Scan') {
      router.push({ path: '/scanQRCodes' });
      accountShow.value = false;
      return false;
    }
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      bindAmbCode();
      return false;
    }
    if (item.name == 'Assets') {
      router.push({
        name: 'AssetsInfo',
      });
    } else if (item.name == 'Bucket') {
      router.push({
        name: 'Shop',
      });
    }
    accountShow.value = false;
  };
  async function getOrder() {
    const order_state = null;
    const start_time = '';
    const end_time = '';
    const buy_result = 'success';

    await search_cloud({ ps: ps.value, pn: pn.value, order_state, start_time, end_time, buy_result }).then((res) => {
      let total = res?.result?.total;
      if (total > 0) {
        userStore.setcurStepIndex(4);
      } else {
        userStore.setcurStepIndex(3);
      }
    });
  }
  async function getNoBucketOrder() {
    const order_state = [0];
    const start_time = '';
    const end_time = '';
    const buy_result = 'success';
    const postData = {
      sort_type: 'expire',
      ascending: false,
      is_domain: 2,
      electronic_type: '0',
      domain: '',
    };
    await search_cloud({ ps: 30, pn: 1, order_state, start_time, end_time, buy_result, ...postData }).then((res) => {
      noBucketData.value = res.result.data;
    });
  }

  const cloudBalanceNum = computed(() => {
    return formatNumber(cloudBalance.value);
  });
  const cloudTodayIncomeNum = computed(() => {
    return formatNumber(cloudTodayIncome.value);
  });

  function handleID(id) {
    if (id) {
      return id.substring(0, 8) + '...' + id.substring(id.length - 8, id.length);
    }
  }
  const detailRow = reactive({ value: {} });

  const handleRow = (row) => {
    detailRow.value = row;
    const type = row.name.substring(row.name.lastIndexOf('.') + 1);
    console.log(row.imgUrlLarge);
    console.log(type);

    if (type == 'pdf') {
      curSelectSrc.value = row.imgUrlLarge;
      curSelectType.value = 'pdf';
      router.push({ path: '/filePreview', query: { fileSrc: row.imgUrlLarge, fileType: 'pdf' } });
    } else if (type == 'txt') {
      detailRow.value.detailType = 'txt';
      detailShow.value = true;
      // fetch(row.imgUrlLarge)
      //   .then((response) => response.text())
      //   .then((text) => {
      //     document.getElementById('txtContainer').textContent = text;
      //   });
    } else if (['xls', 'xlsx'].includes(type)) {
      curSelectSrc.value = row.imgUrlLarge;
      router.push({ path: '/filePreview', query: { fileSrc: row.imgUrlLarge, fileType: 'excel' } });
    } else if (['doc', 'docx'].includes(type)) {
      detailRow.value.detailType = 'word';
      router.push({ path: '/filePreview', query: { fileSrc: row.imgUrlLarge, fileType: 'docx' } });
      // window.open('https://docs.google.com/viewer?url=' +  encodeURIComponent(row.imgUrlLarge));
      // window.open("https://view.xdocin.com/view?src=" + encodeURIComponent(row.imgUrlLarge) );
      console.log(row.imgUrlLarge);
    } else if (['ppt', 'pptx'].includes(type)) {
      curSelectSrc.value = row.imgUrlLarge;
      curSelectType.value = 'ppt';
      // window.open('https://docs.google.com/viewer?url=' +  encodeURIComponent(row.imgUrlLarge));
      window.open('https://view.xdocin.com/view?src=' + encodeURIComponent(row.imgUrlLarge));
      // window.open("https://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(row.imgUrlLarge) );

      console.log(row.imgUrlLarge);
    } else if (row.imgUrlLarge) {
      imgUrl.value = row.imgUrlLarge;
      imgStartIndex.value = imgData.value.findIndex((el) => el.name == row.name);
      detailShow.value = true;
    } else {
      let prefix = detailRow.value.fullName.split('/').slice(0, -1);
      console.log(detailRow.value.fullName, prefix);

      router.push({
        name: 'FileList',
        query: {
          id: currentBucketData.order_id,
          uuid: currentBucketData.uuid,
          amb_uuid: currentBucketData.amb_uuid,
          domain: currentBucketData.domain,
          category: 0,
          prefix: prefix.join('/'),
          bucketName: bucketName.value,
        },
      });
    }
  };

  const gotoPage = async (type, query = '') => {
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      bindAmbCode();
      return false;
    } else {
      if (type === 'analysisCate') {
        router.push('/analysisCate?type=1');
      } else if (type === 'analysis') {
        if (topSwipeIndex.value != 0) return false;
        router.push('/analysis');
      } else if (type === 'transactionRecords') {
        router.push(`/transactionRecords${query ? `?type=${query}` : ''}`);
      } else if (type === 'shop') {
        router.push({ name: 'Shop' });
      } else if (type === 'analysisChart') {
        if (topSwipeIndex.value != 0) return false;
        router.push('/analysisChart');
      } else if (type === 'Order') {
        router.push('/list');
      } else if (type == 'Bucket') {
        const postData = {
          sort_type: 'created_at',
          ascending: false,
          is_domain: 1,
          electronic_type: '0',
        };
        // await loadBucket([0, 1, 2, 3, 6], '', '', '', postData);
        search_cloud({
          ps: 2,
          pn: 1,
          order_state: [0, 1, 2, 3, 6],
          start_time: '',
          end_time: '',
          buy_result: 'success',
          ...postData,
        }).then((res) => {
          let total = res?.result?.total;
          if (total == 1) {
            let item = res?.result.data[0];
            router.push({
              name: 'listDetails',
              query: {
                id: item.order_id,
                uuid: item.uuid,
                amb_uuid: item.amb_uuid,
                income: item.income,
                mintType: '0',
              },
            });
            return false;
          } else {
            router.push({
              name: 'BucketList',
            });
          }
        });
      } else if (type == 'NFT') {
        router.push('/nft');
      } else if (type == 'Assets') {
        router.push('/assetsInfo');
      } else if (type == 'PersonalInfo') {
        if (topSwipeIndex.value != 1) return false;
        router.push('/personalInfo');
      }
    }
  };

  function gotoOrderPage(row) {
    console.log(row);
    if (row.order_info.state == 5 || row.order_info.state == 4) {
      window.sessionStorage.removeItem('myHistoryOrder');
      window.sessionStorage.setItem('myHistoryOrder', JSON.stringify(row));
      router.push({
        name: 'listDetails',
        query: {
          id: row.order_id,
          uuid: row.order_info && row.order_info.uuid,
          amb_uuid: row.amb_uuid,
        },
      });
    } else {
      router.push({
        name: 'listDetails',
        query: {
          id: row.order_id,
          uuid: row.order_info && row.order_info.uuid,
          amb_uuid: row.amb_uuid,
        },
      });
    }
  }
  const gotoOrderDetail = (item) => {
    router.push({
      name: 'FileList',
      query: {
        id: item.order_id,
        uuid: item.uuid,
        amb_uuid: item.amb_uuid,
        domain: item.domain,
      },
    });
  };
  const uploadComplete = () => {
    imgListRef?.value?.refresh();
    getFileList();
  };
  const setBucket = async (item) => {
    if (!item.domain) {
      router.push({
        name: 'listDetails',
        query: {
          id: item.order_id,
          uuid: item.uuid,
          amb_uuid: item.amb_uuid,
          domain: item.domain,
        },
      });
      return false;
    }
    // bucketName.value = item.domain
    currentBucketData = item;
    window.localStorage.homeChooseBucket = JSON.stringify(item);
    order_uuid.value = item.uuid;
    showRight.value = false;
    if (order_uuid.value) {
      await getOrderInfo(true, order_uuid.value);
      getFileList();
      // if (imgListRef?.value) {
      //   imgListRef?.value?.refresh();
      // }
    }
  };
  watch(
    secretAccessKey,
    (val) => {
      console.log(val, 'secretAccessKey');
    },
    { deep: true, immediate: true },
  );
  const refresh = async () => {
    detailShow.value = false;
    if (order_uuid.value) {
      imgListRef?.value?.refresh();
      await getOrderInfo(true, order_uuid.value);
      getFileList();
    }
  };
  const handleImg = (item: { cid: any; key: any }, type: string, isDir: boolean) => {
    let imgHttpLink = '';
    let imgHttpLarge = '';
    type = type.toLowerCase();
    let isSystemImg = false;
    let cid = item.cid;
    let key = item.key;

    let ip = orderInfo.value.rpc.split(':')[0];
    let port = orderInfo.value.rpc.split(':')[1];
    let Id = orderInfo.value.foggie_id;
    let peerId = orderInfo.value.peer_id;
    if (
      type === 'png' ||
      type === 'bmp' ||
      type === 'gif' ||
      type === 'jpeg' ||
      type === 'jpg' ||
      type === 'svg' ||
      type === 'ico' ||
      type === 'webp'
    ) {
      console.log('----------img', accessKeyId.value, accessKeyId.value, bucketName.value, item.key);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
      imgHttpLink = getHttpShare(
        accessKeyId.value,
        secretAccessKey.value,
        bucketName.value,
        item.key,
        type === 'ico' || type === 'svg' ? false : true,
      );
      // console.log('--------imgHttpLarge', imgHttpLarge);
    } else if (type === 'mp3') {
      type = 'audio';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm' || type == 'mov') {
      type = 'video';
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
    } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(type)) {
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
    } else {
      isSystemImg = true;
    }
    if (isDir) {
      isSystemImg = true;
    }
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  function getFileList(scroll: string = '', prefix: any[] = [], reset = true) {
    console.log(11111);

    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'file_list',
    });
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    console.log('ip:', ip);
    console.log('metadata.value:', metadata.value);
    console.log('metadata.value:', JSON.stringify(metadata.value));
    console.log('header.value:', header.value);

    server = new grpcService.default.ServiceClient(ip, null, null);
    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix('');
    listObject.setDelimiter('');
    listObject.setEncodingType('');
    listObject.setMaxKeys(20);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('lastmodifiedtime desc');
    listObject.setTags('');
    listObject.setCategory(0);
    listObject.setDate('');
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header.value);
    requestReq.setRequest(listObject);
    console.log('requestReq.value:', requestReq);

    server.listObjects(
      requestReq,
      metadata.value,
      (
        err: any,
        res: {
          getCommonprefixesList: () => any;
          getContentList: () => any[];
          getContinuationtoken: () => any;
          getIstruncated: () => any;
          getMaxkeys: () => any;
          getNextmarker: () => any;
          getPrefix: () => any;
          getPrefixpinsList: () => any;
        },
      ) => {
        if (res) {
          const transferData = {
            commonPrefixes: res.getCommonprefixesList(),
            content: res
              .getContentList()
              .map(
                (el: {
                  getKey: () => any;
                  getEtag: () => any;
                  getLastmodified: () => any;
                  getSize: () => any;
                  getContenttype: () => any;
                  getCid: () => any;
                  getFileid: () => any;
                  getIspin: () => any;
                  getIspincyfs: () => any;
                  getPinexp: () => any;
                  getCyfsexp: () => any;
                  getOod: () => any;
                  getIspersistent: () => any;
                  getCategory: () => any;
                  getTags: () => any;
                  getImages: () => any;
                  getNftinfosList: () => any;
                }) => {
                  const imageObj = el.getImages().toObject();
                  const imageInfo = {};
                  let isShowDetail = false;
                  if (imageObj.camerainfo?.make) {
                    isShowDetail = true;
                    imageInfo.aperture = imageObj.addition.aperture; //光圈
                    imageInfo.datetime = moment(imageObj.addition?.datetime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); //拍摄时间
                    imageInfo.exposuretime = imageObj.addition.exposuretime; //ev曝光量
                    imageInfo.exptime = imageObj.addition.exptime; //曝光时间
                    imageInfo.orientation = imageObj.addition.orientation; //方向
                    imageInfo.focallength = imageObj.addition.focallength; //焦距
                    imageInfo.Flash = imageObj.addition.Flash || false; //是否使用闪光灯
                    imageInfo.software = imageObj.addition.software; // 使用软件
                    imageInfo.iso = imageObj.addition.iso.charCodeAt(0);
                    imageInfo.camerainfo = imageObj.camerainfo; //手机厂商及其机型
                    imageInfo.gps = imageObj.gps; //经纬度
                    imageInfo.resolution = imageObj.resolution; //像素
                  }
                  return {
                    key: el.getKey(),
                    etag: el.getEtag(),
                    lastModified: el.getLastmodified(),
                    size: el.getSize(),
                    contentType: el.getContenttype(),
                    cid: el.getCid(),
                    fileId: el.getFileid(),
                    isPin: el.getIspin(),
                    isPinCyfs: el.getIspincyfs(),
                    pinExp: el.getPinexp(),
                    CyfsExp: el.getCyfsexp(),
                    OOD: el.getOod(),
                    isPersistent: el.getIspersistent(),
                    category: el.getCategory(),
                    tags: el.getTags(),
                    imageInfo: imageInfo,
                    isShowDetail,
                    nftInfoList: el.getNftinfosList(),
                  };
                },
              ),
            continuationToken: res.getContinuationtoken(),
            isTruncated: res.getIstruncated(),
            maxKeys: res.getMaxkeys(),
            nextMarker: res.getNextmarker(),
            prefix: res.getPrefix(),
            prefixpins: res.getPrefixpinsList(),
          };
          isError.value = false;
          initRemoteData(transferData, reset, 0);
          showToast.hide('file_list');
        } else if (err) {
          isError.value = true;
          showToast.hide('file_list');
          console.log('err----list', err);
          console.log('err----list', JSON.stringify(err));
        }
      },
    );
  }
  const initRemoteData = async (
    data: {
      commonPrefixes?: any;
      content: any;
      continuationToken?: any;
      isTruncated?: any;
      maxKeys?: any;
      nextMarker?: any;
      prefix?: any;
      prefixpins?: any;
      err?: any;
    },
    reset = false,
    category: number,
  ) => {
    if (!data) {
      return;
    }
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }
    if (!accessKeyId.value) {
      await getOrderInfo(true, order_uuid.value);
    }
    tableData.value = [];
    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = data.commonPrefixes[i];
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.prefix === el && data.prefixpins[i]?.cid) {
          cur_cid = data.prefixpins[i].cid;
        }
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 0,
        fileType: 1,

        fullName: data.commonPrefixes[i],
        key: data.commonPrefixes[i],
        idList: [
          {
            name: 'IPFS',
            code: cur_cid,
          },
          {
            name: 'CYFS',
            code: '',
          },
        ],
        date: '-',
        size: '',
        status: '-',
        type: 'application/x-directory',
        file_id: '',
        pubkey: '',
        cid: cur_cid,
        imgUrl: '',
        imgUrlLarge: '',
        share: {},
        isSystemImg: false,
        canShare: false,
      };

      tableData.value.push(item);
    }

    for (let j = 0; j < data?.content?.length; j++) {
      let date = transferUTCTime(data.content[j].lastModified);
      let isDir = data.content[j].contentType == 'application/x-directory' ? true : false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = data.content[j].key;
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0 && name[name.length - 1] != '/') {
        name = name.split('/')[name.split('/').length - 1];
      } else if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 2];
      }
      let isPersistent = data.content[j].isPersistent;
      console.log(data.content[j], 'data.content[j]');

      let item = {
        imageInfo: data.content[j].imageInfo,
        isShowDetail: data.content[j].isShowDetail,
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        fileType: 2,
        fullName: data.content[j].key,
        key: data.content[j].key,
        idList: [
          {
            name: 'IPFS',
            code: data.content[j].isPin ? cid : '',
          },
          {
            name: 'CYFS',
            code: data.content[j].isPinCyfs ? file_id : '',
          },
        ],
        date,
        // size: getfilesize(data.content[j].size),
        originalSize: data.content[j].size,
        status: cid || file_id ? 'Published' : '-',
        type: data.content[j].contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: url,
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
        isPin: data.content[j].isPin,
        isPinCyfs: data.content[j].isPinCyfs,
      };
      // if (item.isDir || category == 1) {
      tableData.value.push(item);
      // }
    }
  };
  const $cordovaPlugins = inject('$cordovaPlugins');

  const getSignHeaders = (objectKey) => {
    // const objectKey = encodeURIComponent(checkData[0].fullName);
    const date = new Date().toUTCString();

    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';
    // const canonicalizedResource = `/o/${bucketName}/${objectKey}`;
    const canonicalizedResource = `/${bucketName.value}/o/${objectKey}`;

    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;

    let hmac = HmacSHA1(signature, secretAccessKey.value);
    const signatureBase64 = enc.Base64.stringify(hmac);

    const headers = {
      'x-amz-date': date,
      Authorization: `AWS ${accessKeyId.value}:${signatureBase64}`,
    };
    return headers;
  };
  const handlerClick = async (type: string) => {
    const checkData = JSON.parse(JSON.stringify(detailRow.value));
    console.log(checkData, 'checkData');

    if (type === 'download') {
      const objectKey = encodeURIComponent(checkData.fullName);
      const headers = getSignHeaders(objectKey);
      console.log('headers:', headers);
      const url = `https://${bucketName.value}.${poolUrl}:6008/o/${objectKey}`;
      if (import.meta.env.VITE_BUILD_TYPE == 'ANDROID') {
        $cordovaPlugins.downloadFileHH(url, checkData.fullName, headers);
      } else {
        showToast.text('Coming soon for your download');
        fetch(url, { method: 'GET', headers })
          .then((response) => {
            if (response.ok) {
              // 创建一个 Blob 对象，并将响应数据写入其中
              console.log('Success', response);
              return response.blob();
            } else {
              showToast.fail('Download failed, please try again');
              // 处理错误响应
              console.error('Error:', response.status, response.statusText);
            }
          })
          .then((blob) => {
            console.log(blob, 'blob');
            console.log('Blob type:', blob.type);

            // 创建一个 <a> 元素，并设置其 href 属性为 Blob URL
            const a = document.createElement('a');
            console.log("document.createElement('a')");

            a.href = URL.createObjectURL(blob);
            console.log(a.href);

            a.download = checkData.fullName;
            console.log(a.download);

            // 将 <a> 元素添加到文档中，并模拟点击
            document.body.appendChild(a);
            console.log('添加');
            a.click();
            console.log('点击');

            document.body.removeChild(a);
          })
          .catch((error) => {
            showToast.fail('Download failed, please try again');
            // 处理网络错误
            console.error('Network Error:', error);
          });
      }
    } else if (type === 'share') {
      await doShare(checkData);
    } else if (type === 'move') {
      moveShow.value = true;
    } else if (type == 'rename') {
      renameShow.value = true;
    } else if (type === 'delete') {
      const onOk = async () => {
        deleteItem([checkData]);
        fileItemPopupIsShow.value = false;
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to delete?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class_delete',
        onOk,
      });
    } else if (type == 'nft') {
      createNFT(checkData, accessKeyId.value, secretAccessKey.value, bucketName.value);
    } else if (type === 'pin') {
      const onOk = async () => {
        await cloudPin(checkData, 'ipfs');
        // detailRow.value.isPin = true;
        detailShow.value = false;
        getFileList();
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to execute IPFS PIN?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        onOk,
      });
    } else if (type === 'un pin') {
      const onOk = async () => {
        const d = await cloudPin(checkData, 'ipfs', 'unpin');
        if (d) {
          imgData.value.map((el: { cid: any }) => {
            if (el.cid && el.cid == checkData.cid) {
              el.isPin = false;
            }
          });
          otherData.value.map((el: { cid: any }) => {
            if (el.cid && el.cid == checkData.cid) {
              el.isPin = false;
            }
          });
          detailRow.value.isPin = false;
        }
        // doSearch('', prefix.value, true);
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to execute IPFS UNPIN?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class_delete',

        onOk,
      });
    }
  };
  const initNFT = async () => {
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
    const r = await search_mint(d, 2, 1);
    if (r?.result?.data) {
      nftImgList.value = r.result.data;
      nftTotal.value = r.result.total;
    }
    const r2 = await search_deploy(d, 2, 1);
    if (r2?.result?.data) {
      contractTotal.value = r2.result.total;
    }
    // const dd = {
    //   account: arr,
    //   sync_storage: 2,
    // };
    // const sync_data = await search_mint(dd, 100, 1);
    // if (sync_data?.result?.data) {
    //   const nft_info = [];
    //   sync_data?.result.data.map(async (item) => {
    //     const meta_image = item.meta_image;
    //     const bucket = meta_image.split('://')[1]?.split('.')[0];
    //     const cid = meta_image.split('/ipfs/')[1];
    //     const contractAddress = item.contract;
    //     const tokenId = item.token_id;
    //     if (contractAddress && tokenId) {
    //       let ip = `https://${bucket}.${poolUrl}:7007`;
    //       let server = new grpcService.default.ServiceClient(ip, null, null);
    //       let ProxUpdateNFTRequest = new Prox.default.ProxUpdateNFTRequest();
    //       let ProxNFTInfo = new Prox.default.ProxNFTInfo();
    //       const { header, metadata } = await getOrderInfo(bucket);
    //       ProxUpdateNFTRequest.setHeader(header);
    //       ProxNFTInfo.setCid(cid);
    //       ProxNFTInfo.setContractid(contractAddress);
    //       ProxNFTInfo.setTokenid(tokenId);
    //       ProxUpdateNFTRequest.addNftinfos(ProxNFTInfo);

    //       console.log('ProxUpdateNFTRequest----------', ProxUpdateNFTRequest, ProxNFTInfo);

    //       const update_data = await server.updateNFT(ProxUpdateNFTRequest, metadata.value, (err, data) => {
    //         if (err) {
    //           console.log('err----------', err);
    //         } else {
    //           console.log('data----------', data);
    //         }
    //       });
    //       if (update_data) {
    //         console.log('update_data----------', update_data);
    //         nft_info.push({
    //           contract: contractAddress,
    //           token_id: tokenId,
    //         });
    //       }
    //     }
    //   });
    //   if (nft_info.length > 0) {
    //     const _d = {
    //       nft_info,
    //     };
    //     await update_nft_sync(_d);
    //   }
    // }
  };
  function loadMore2() {
    if (cloudCodeIsBind.value) {
      isError2.value = false;
      pageNum.value = pageNum.value + 1;
      searchOrderProfit();
    }
  }
  function searchOrderProfit() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    const postData = {
      start_time: transferUTCTimeDay(start),
      end_time: transferUTCTimeDay(end),
      ps: pageSize.value,
      pn: pageNum.value,
    };
    infinityValue2.value = true;
    search_user_asset_detail(postData)
      .then((res) => {
        infinityValue2.value = false;
        if (res && res.result && res.result.data.length) {
          for (const item of res.result.data || []) {
            item.trx_id = handleID(item.trx_id);
          }
          console.log('pnnnnnnnnnnn', pageNum.value);

          earningsList.value = earningsList.value.concat(res.result.data);
          // const newSetCloudList = [...earningsList.value, ...res.result.data];
          // let arr = [];
          // const filterList = newSetCloudList.filter((item) => !arr.includes(item.trx_id) && arr.push(item.trx_id));
          // earningsList.value = filterList;
          // console.log(earningsList.value );

          total2.value = res.result.total;
        }
        if (res.code != 200) {
          pageNum.value = pageNum.value - 1;
          isError2.value = true;
        }
      })
      .catch(() => {
        isError2.value = true;
        pageNum.value = pageNum.value - 1;
        infinityValue2.value = false;
      });
  }

  watch(
    cloudCodeIsBind,
    async (newVal) => {
      nextTick(() => {
        const swipe = document.getElementsByClassName('top_swipe')[0];
        swipeWidth.value = swipe.clientWidth * 0.8;
        if (swipeRef.value) {
          swipeRef.value.resize();
        }
        window.addEventListener('resize', (event) => {
          swipeWidth.value = swipe.clientWidth * 0.8;
          if (swipeRef.value) {
            swipeRef.value.resize();
          }
        });
      });
      if (newVal) {
        userStore.setambRefuse(false);
        getOrder();
        getUserAssets();
        getExchangeRate();
        initNFT();
        getNoBucketOrder();
        await loadMoreFun();
        console.log(listData.value.length, 'listData.length');
        if (window.localStorage.homeChooseBucket) {
          setBucket(JSON.parse(window.localStorage.homeChooseBucket));
        } else if (leftBucketList.value.length) {
          let bucketList = leftBucketList.value.filter((el) => el.domain);
          if (bucketList.length) {
            setBucket(bucketList[0]);
          } else {
            showRight.value = true;
            showToast.text('Please select a bucket and set the bucket name.');
          }
        }
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    curStepIndex,
    (val) => {
      if (val === 4) {
        searchOrderProfit();
        searchAllOrderProfit();
      }
    },
    { deep: true, immediate: true },
  );

  // watch(
  //   curStepIndex,
  //   (val) => {
  //     if (val === 4) {
  //     }
  //   },
  //   { deep: true, immediate: true },
  // );
  provide('handleImg', handleImg);
  provide('getSummary', getSummary);
</script>

<style lang="scss" scoped>
  .plus_bucket {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0 0.2rem;
    border-radius: 50%;
    border: 1px dashed $main_blue;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: $main_blue;
    }
    & + img {
      width: 3rem;
      height: 3rem;
      margin: 0 0.2rem;
      border-radius: 50%;
    }
    & + p {
      margin-top: 0.5rem;
      margin: 0.5rem;
      text-align: left;
    }
  }
  :deep {
    .out_img_box {
      .upload_out_box {
        height: 100%;
      }
      .nut-uploader__input {
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        left: 0 !important;
        top: unset !important;
        right: unset !important;
        bottom: unset !important;
      }
      .upload_btn {
        position: relative;
        left: unset;
        top: unset;
        right: unset;
        bottom: unset;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background: unset;
        border: 1px dashed #ccc;
        color: #666;
        cursor: pointer;
      }
      .nut-uploader__preview {
        display: none;
      }
      .nut-uploader {
        width: 100%;
        height: 100%;
      }
      .nut-uploader__slot {
        width: 100%;
      }
      .upload_progress {
        left: 0;
      }
    }
  }

  .draw_title {
    display: block;
    padding: 0.5rem;
    text-align: center;
    color: $main_blue;
    font-weight: 600;
  }
  .file_list_bucket {
    height: calc(100% - 5rem);
    // padding: 0 0.5rem;
    border-bottom: 1px solid #ccc;
    border-radius: 0 !important;
    .list_item {
      position: relative;
      margin: 0 !important;
      padding: 0.5rem !important;
      .order_img {
        position: absolute;
        left: 0.3rem;
        top: 0.3rem;
        img {
          width: 1rem;
          height: auto;
        }
      }
      .history {
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        width: 1rem;
        height: auto;
        opacity: 0.4;
      }
    }
    :deep {
      .nut-infinite__container {
        display: grid !important;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.4rem;
      }
      .nut-infinite__bottom {
        display: block !important;
      }
    }
    .left_icon_box {
      img {
        width: 75% !important;
        margin: 0 auto;
        border-radius: 50%;
      }
    }
  }
  .top_swipe {
    :deep {
      .van-swipe-item {
      }
    }
  }
  ::v-deep {
    .nut-step-main {
      padding-bottom: 30px !important;
    }
  }
  .bucket_tips {
    margin-top: 1rem;
    font-size: 0.8rem;
    svg {
      width: 45px;
      height: 45px;
      vertical-align: middle;
    }
  }
  .type_check_box {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    background: #fff;
    border-radius: 20px;
    width: 100%;
    height: 380px;
    box-sizing: border-box;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .type_item {
      width: 50%;
      text-align: center;
      height: 150px;
      cursor: pointer;
      font-weight: bold;
      &.miner_tool {
        height: 100px;
        .svg_box {
          margin: 0 auto;
          img {
            width: unset;
            height: 60%;
          }
        }
        p {
          font-size: 0.8rem;
        }
      }

      .svg_box {
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin: 10px auto;
        text-align: center;
        border-radius: 20px;

        svg {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }

      &:nth-child(3),
      &:nth-child(4) {
        .svg_box {
          svg {
            width: 60px;
            height: 60px;
          }
        }
      }

      .order-icon-recycle {
        //   background-color: #ff8b00;
        // background-image: linear-gradient(120deg, rgb(255, 158, 13) 0%, #f3d811 100%);
        //   background-image: linear-gradient(120deg, #8ae9d7 0%, #483bb5 100%);
        border-radius: 50%;

        svg {
          width: 80% !important;
          height: 80% !important;
          vertical-align: middle;
        }
      }

      .order-icon-node-tree {
        //   background-color: #34964f;
        //   background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
        border-radius: 50%;

        svg {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }

      .order-icon-send-to-back {
        background-color: #fcd116;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
        border-radius: 50%;

        svg {
          width: 60%;
          height: 60%;
          vertical-align: middle;
        }
      }

      .order-icon-input-cursor-move {
        background-color: #5f57ff;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #483bb5 100%);
        border-radius: 50%;

        svg {
          width: 60%;
          height: 60%;
          vertical-align: middle;
        }
      }

      p {
        color: #051e56;
        white-space: nowrap;
      }

      // &:nth-child(1) {
      //   .svg_box {
      //     svg {
      //       color: #aa5eff;
      //     }
      //   }
      // }
      // &:nth-child(2) {
      //   .svg_box {
      //     background: #e0f3ff;
      //   }
      // }
      // &:nth-child(3) {
      //   .svg_box {
      //     background: #ffebef;
      //   }
      // }
      // &:nth-child(4) {
      //   .svg_box {
      //     background: #e2e4ff;
      //   }
      // }
    }
  }
  .recent_folder_box {
    background: #fff;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :deep {
      .img_list_box {
        height: unset;
        padding-bottom: 0;
        .img_item {
          height: unset;
          .img_box {
            height: 150px;
          }
        }
      }
      .nut-infinite__bottom {
        display: none;
      }
    }
    .recent_folder_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      .more {
        font-size: 0.8rem;
        font-weight: normal;
        color: $main_blue;
      }
    }

    .recent_folder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
      .folder_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 80%;
        }
      }
    }
    .file_list {
      // display: grid;
      // grid-template-columns: repeat(4, 1fr);
      // grid-gap: 0.5rem;
      background: #fff;
      border-radius: 16px;
      .list_item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 0;
        border-top: 1px solid #eee;
        .left_icon_box {
          position: relative;
        }

        .type_icon {
          width: 80px;
          height: 80px;
        }

        .left_icon_box {
          width: 80px;
          height: 80px;

          img {
            width: 80px;
            height: 80px;
          }
        }

        .name_box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: calc(100% - 180px);
          margin-left: 30px;

          p:first-child {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          p:last-child {
            margin-top: 5px;
            color: #a7a7a7;
            font-size: 20px;
          }
        }
      }
    }
    .file_list_img {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0.2rem;
      justify-items: center;
      margin-top: 20px;
      padding: 0.5rem 0;
      background: #fff;
      border-radius: 16px;
      .list_item {
        width: 120px;
        height: 120px;
        justify-content: center;
        padding: 0 !important;
        // padding: 20px 0;
        :deep {
          .nut-image {
            width: 100%;
            height: 100%;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.3rem;
        }
      }
    }
  }

  .file_list {
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    // padding: 0.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 1rem;
    overflow: auto;

    :deep {
      .nut-infinite__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        // display: flex;
        // justify-content: space-between;
        // flex-wrap: wrap;
      }

      .nut-infinite__bottom {
        display: none;
        height: 2rem;
        line-height: 2rem;
      }
    }

    .list_item {
      padding: 0;
      height: unset;
      margin: 0.2rem 0;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      box-shadow: none;
      &.is_checked {
        background: hsl(209, 95%, 90.1%);

        color: $main_blue;
      }
      img {
        width: 100%;
        height: auto;
      }

      .name_box {
        display: flex;
        justify-content: center;
        margin: 0;
        width: unset;
      }
    }
  }
  .DouArrowDown {
    // transform: rotate(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .my_swipe {
    margin-top: 30px;

    .nut-swiper {
      height: 300px;
    }

    .nut-swiper-item {
      line-height: 150px;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .my_steps {
    margin: 40px auto;
    width: calc(100% - 80px);
    background: #fff;
    height: 820px;
    border-radius: 20px;
    padding: 20px;
  }

  .my_noticebar {
    margin: 0 -4vw;
    display: inline-block;
    width: 120%;

    :deep {
      .nut-noticebar__page {
        padding: 0;
      }

      .nut-noticebar__page-lefticon {
        margin: 0 8px;
      }
    }
  }

  .dmc_account {
    // background: #5758a0;
    // margin: 0 -4vw;
    display: grid;
    grid-template-columns: 80px auto;
    gap: 0px;
    align-items: center;
    height: 100px;
    padding: 10px 0 0 10px;
    svg {
      width: 60px;
      height: 60px;
      margin-left: 0.5rem;
      vertical-align: middle;
      border-radius: 10px;
    }

    .dmc_account_box {
      font-weight: bold;

      display: flex;
      // justify-content: flex-end;
      justify-content: space-between;
      align-items: center;

      font-size: 40px;
      color: #5758a0;
      a {
        text-decoration: underline;
      }
    }

    .Notice {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: #ececec;
      border-radius: 50%;

      img {
        height: 70%;
        width: 70%;
      }
    }

    .img-box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      //   background: #5758a0;
      box-sizing: border-box;

      svg,
      img {
        width: 60px;
        height: 60px;
        margin-left: 0.5rem;
        vertical-align: middle;
        border-radius: 10px;
      }
      :deep {
        .nut-image {
          width: 60px;
          height: 60px;
          margin-left: 0.5rem;
          border-radius: 10px;
        }
        .nut-popover-menu-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          svg {
            width: 1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            margin-right: 0.5rem;
          }
          .nut-popover-menu-item-name {
            white-space: noWrap;
            font-size: 1rem;
          }
        }
      }
    }

    h2 {
      font-size: 35px;
    }
  }

  .middle_btn_box {
    // display: flex;
    // justify-content: flex-start;
    // align-items: flex-start;
    margin-top: -60px;
    border-radius: 10px;
    padding: 10px 0px;
    box-sizing: border-box;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    background: #fff;

    // background: #fff;
    > div {
      display: inline-block;
      color: #1e0a0a;
      font-size: 28px;
      font-weight: 600;
      width: 150px;
      width: 25%;

      &:nth-child(2) {
        .svg-box {
          // background: #34964f;
          // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
          background-image: linear-gradient(to top, #e0e1e2 0%, #e7f0fd 100%);
        }
      }

      &:nth-child(3) {
        .svg-box {
          // background: #fcd116;
          background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
      }

      &:nth-child(4) {
        .svg-box {
          // background: #5f57ff;
          // background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
          background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
        }
      }
    }

    .flex-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // height: 120px;
      text-align: center;
      word-break: break-word;

      span {
        font-size: 0.8rem;
      }

      .svg-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        // background: #ff8b00;
        // background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
        //   linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 50%, rgba(255, 255, 255, 0.02) 61%, rgba(0, 0, 0, 0.02) 73%),
        //   linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
        // background-blend-mode: normal, color-burn;

        // box-shadow: 0px 1px 2px 2px #ccc;
        // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        // background: #ff656d;
        // background-image: linear-gradient(to top, #3551ad 0%, #fff 100%) !important;

        svg,
        img {
          width: 90px;
          height: 90px;
          color: #fff;
          border-radius: 50%;
        }
      }
    }
  }

  .income-card {
    position: relative;
    padding: 40px;
    height: 410px;
    box-sizing: border-box;
    margin: 0;
    // margin-top: 20px;
    //   box-shadow: 0px 0px 4px 1px #ccc;
    // background-color: var(--van-blue);
    background: $primary-color;
    color: #fff;
    border-radius: 30px;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
    > img {
      top: 30px;
      position: absolute;
      right: 20px;
      width: 60px;
      cursor: pointer;
      transform-style: preserve-3d;
      -webkit-transform-origin: 50%;
      -webkit-animation: sizeChange 10s infinite;
      -webkit-animation-timing-function: linear;
      -webkit-perspective: 1000;
      -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
      -webkit-filter: saturate(1.45) hue-rotate(2deg);
    }
    @keyframes sizeChange {
      0% {
        -webkit-transform: rotateY(0deg);
      }
      25% {
        -webkit-transform: rotateY(-90deg);
      }
      50% {
        -webkit-transform: rotateY(-180deg);
      }
      75% {
        -webkit-transform: rotateY(-270deg);
      }
      100% {
        -webkit-transform: rotateY(-360deg);
      }
    }

    > div {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
    }

    .card_row_1 {
      display: flex;
      justify-content: space-between;

      &.card_header {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-between;
        // margin-right: 100px;

        span {
          text-align: left;
        }

        .total_income {
          > div {
            font-size: 30px;
            text-align: left;
          }

          .balance_text {
            font-size: 60px;

            img {
              height: 50px;
              width: 100px;
              vertical-align: sub;
            }
            svg {
              width: 120px;
              height: auto;
            }
          }

          .usd_text {
            color: #ccc;
          }
        }
      }
    }

    .card_row_top {
      font-weight: bold;
      font-size: 32px;
    }

    .pst-row {
      margin-top: 20px;
      font-size: 28px;
      text-align: left;
      font-weight: bold;

      .column_value {
        font-size: 28px;
      }

      .today_income {
        color: #ff8b00;
        color: #fbd116;

        svg {
          vertical-align: sub;
        }
      }
    }

    .total_income {
      font-size: 55px;
      font-weight: 700;

      .about_income {
        font-size: 35px;
      }
    }

    :deep {
      .van-grid-item {
        &:nth-child(2) {
          // border: 1px solid #fff;
          // border-width: 0 1px 0 1px;
          &::before,
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 60px;
            display: block;
            width: 1px;
            height: 60px;
            background-color: #ffffff5c;
          }

          &::after {
            left: unset;
            right: 0;
          }
        }
      }

      .van-grid-item__content {
        background: transparent;

        div:first-child {
          font-size: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        div:nth-child(2) {
          font-size: 30px;
        }
      }

      .van-button {
        height: 60px;
      }
    }
  }
  .income-card2 {
    background-image: linear-gradient(260deg, #4474f1 0%, #2934bc 74%);
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .withdraw-btn::after {
    content: '';
    position: absolute;
    background: #fff;
    inset: 3px;
    border-radius: 15px;
  }

  .tab_top_title {
    margin-top: 20px;
    margin-bottom: 10px;
    // font-style: italic;
    font-size: 35px;
    font-weight: 600;
  }

  .time_tabs {
    :deep {
      .nut-tabs__titles {
        // background: transparent;
      }

      .nut-tabs__content {
        display: none;
      }
    }
  }

  .list_item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 30px;
    padding-left: 100px;
    min-height: 100px;
    color: #171414;
    font-size: 24px;
    background: #fff;

    border-bottom: 1px solid #eee;
    margin: 10px 0 20px 0;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.333333vw 6.666667vw;

    .order_status_flag {
      width: 180px;
      height: 40px;
      border-radius: 0 20px 20px 0;

      position: absolute;
      top: -12px;
      left: 0px;
      background: #ccc;
      color: #fff;
      text-align: center;
      justify-content: center;
      font-weight: bold;

      &.open {
        background: #009771;
        background: #f88b02;
      }

      &.history {
        background: #999;
        border: 1px dashed #fff;
      }
    }

    .item_img_box {
      position: absolute;
      left: 16px;
      width: 70px;
      height: 70px;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 50px;
      background: #ff8b00;

      img {
        width: 36px;
        margin: 0 auto;
        // transform-style: preserve-3d;
        // -webkit-transform-origin: 50%;
        // -webkit-animation: spin 5s infinite;
        // -webkit-animation-timing-function: linear;
        // -webkit-perspective: 1000;
        // -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
        // -webkit-filter: saturate(1.45) hue-rotate(2deg);
      }

      // @keyframes spin {
      //   from {
      //     -webkit-transform: rotateY(0deg);
      //   }

      //   to {
      //     -webkit-transform: rotateY(360deg);
      //   }
      // }

      .cions {
        margin-right: 15px;
      }
    }

    .item_2 {
      background: #5f57ff;
      background: #ffc933;
    }

    .item_3 {
      background: #1ba27a;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;
    }

    .earnings {
      display: inline-block;
      color: $main_green;

      font-size: 30px;
    }

    .expense {
      display: inline-block;
      color: red;
      font-size: 30px;
    }

    .trade_type {
      display: inline-block;
      font-size: 30px;
    }

    .time {
      font-size: 24px;
      color: #000000;
      font-weight: 600;
    }

    .my_status {
      text-align: right;
      width: 240px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .history_item {
    background: #ccc;
  }

  .googleVerificationBox {
    padding: 60px 40px;
    padding-bottom: 160px;

    .title {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      color: #334557;
    }

    .content {
      display: grid;
      grid-template-columns: auto 200px;
      background-color: #d8d8d8;
      border-radius: 20px 20px 0 0;
      border: 2px solid #e1e3e1;
      border-bottom: 0px;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: 60px;
      padding: 20px;

      // align-items: center;
      // justify-items: center;
      .content_title {
        font-family: 'Google Sans', Roboto, Arial, sans-serif;

        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0;
        font-weight: 400;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
        color: #1f1f1f;
      }

      .content_tips {
        margin-top: 20px;
        font-size: 24px;
        letter-spacing: 0;
        font-weight: 400;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
        color: #1f1f1f;
      }

      & > img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    .switchButton {
      border: 2px solid #e1e3e1;
      padding: 20px;
      border-radius: 0 0 20px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
    }

    .google-tips {
      margin-top: 20px;
      margin-top: 16px;
      margin-bottom: 20px;
      font-size: 26px;
      color: #000;
    }

    .auth_input {
      display: flex;
      align-items: center;
      margin-top: 30px;
      color: #000;
      font-size: 26px;

      span {
        display: inline-block;
        width: 100%;
      }

      .copy-icon {
        cursor: pointer;
        color: $main_blue;
      }

      .warning-icon {
        color: #ff9200;
      }
    }

    .auth_qrcode {
      text-align: center;

      img {
        width: 400px;
        height: 400px;
      }
    }

    .title_item {
      text-align: center;
      font-size: 24px;

      .keyWordBox {
        background-color: #edf2f7;
        border-radius: 30px;
        border: 2px solid darkgray;
        width: 90%;
        height: 100px;
        margin: 0px auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>

<style lang="scss">
  .isConfirmCheckbox {
    margin-top: 25px;

    .nut-checkbox__label {
      // color: rgb(158, 158, 158) !important;
      font-size: 28px;
    }
  }

  .bindAmbCodeDialog {
    .nut-dialog__header {
      border-bottom: 0px !important;
      justify-content: center !important;
      margin-bottom: 0px !important;
    }

    .nut-dialog__content {
      padding-top: 0px !important;
      margin-top: 0px !important;
    }
  }
</style>
