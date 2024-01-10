<template>
  <div>
    <div class="top_box" :class="[searchType == 'History' ? 'top_history' : 'top_open']">
      <!-- <div class="top_type">{{ searchType }} </div> -->
      <!-- <nut-input v-model="keyWord" clearable class="keyword-input-text" placeholder="Search by order number">
        <template #left> <Search></Search> </template>
      </nut-input> -->
      <nut-searchbar v-model="keyWord" placeholder="Search by order number" clearable class="my_top_search">
        <template #leftin>
          <Search />
        </template>
        <!-- <template #rightout>
          <Category class="my_category_icon" @click="toShowSearch" />
        </template> -->
      </nut-searchbar>

      <!-- <p>You can search your order here.</p> -->
      <nut-row type="flex" justify="space-between" class="top_btn_box">
        <nut-col :span="10">
          <div class="flex-content">
            <div
              class="svg-box"
              @click="searchType = 'Open'"
              :class="[searchType == 'Open' ? 'active_svg-box active_svg-boxOpen' : 'svg-box-open']"
            >
              <!-- <Shop></Shop> -->
              <!-- bidian.png -->
              <img src="@/assets/dingdanhetong.png" style="background-color: transparent" alt="" srcset="" />
              <!-- <IconSwitch style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'Open'"></IconSwitch>
            <IconSwitch style="vertical-align: text-top" color="#ffffff" v-else></IconSwitch> -->
            </div>
            <span>Ongoing</span>
            <!-- <span class="order_num" v-if="searchType == 'Open'">Count : {{ total }}</span> -->
          </div>
        </nut-col>
        <nut-col :span="10">
          <div class="flex-content">
            <div
              class="svg-box"
              @click="searchType = 'History'"
              :class="[searchType == 'History' ? 'active_svg-box active_svg-boxHistory' : 'svg-box-history']"
            >
              <img src="@/assets/bidian.png" style="background-color: transparent" alt="" srcset="" />
              <!-- <IconHistory style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'History'"></IconHistory>
            <IconHistoryActivate style="vertical-align: text-top" color="#5F57FF" v-else></IconHistoryActivate> -->
            </div>
            <span>History</span>
            <!-- <span class="order_num" v-if="searchType == 'History'">Count : {{ total }}</span> -->
          </div>
        </nut-col>
      </nut-row>
    </div>

    <div class="top_filter">
      <nut-menu active-color="#4524a3">
        <nut-menu-item
          :title="`Sort By ${searchForm.sortTypeOptions.find((el) => el.value == searchForm.sortType).text}`"
          v-model="searchForm.sortType"
          :options="searchForm.sortTypeOptions"
          @change="sortChange(searchForm.sortType, 'sortType')"
        >
          <template #icon> <Checked></Checked> </template>
        </nut-menu-item>
        <nut-menu-item
          v-model="searchForm.sortValue"
          @change="sortChange(searchForm.sortValue, 'sortValue')"
          :options="searchForm.sortTypeOptions1"
        >
          <template #icon> <Checked></Checked> </template>
        </nut-menu-item>
        <!-- <nut-menu-item title="More" @open="MoreChange"> </nut-menu-item> -->
      </nut-menu>
      <div class="my_category_icon_box">
        <Category class="my_category_icon" @click="toShowSearch" :class="[isFilter ? 'my_category_icon_active' : '']" v-if="!isFilter" />
        <nut-badge v-if="isFilter" color="red" dot>
          <!-- <template #icon>
            <Check color="red" width="24px" height="24px"></Check>
          </template> -->
          <Category class="my_category_icon" @click="toShowSearch" :class="[isFilter ? 'my_category_icon_active' : '']" />
        </nut-badge>
      </div>
    </div>

    <!-- <div style="margin: 15px 0px">
      <nut-noticebar
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
        direction="vertical"
        :list="horseLamp"
        wrapable
        :speed="10"
        :standTime="1000"
        :close-mode="true"
      ></nut-noticebar>
    </div> -->
    <div class="find_tips">Based on your search criteria,We found {{ total }} items for you.</div>
    <ErrorPage v-if="isError && !list.length" @refresh="loadMoreFun"></ErrorPage>
    <nut-infinite-loading
      v-else-if="list.length"
      class="list_box"
      load-more-txt="No more content"
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMoreFun"
    >
      <template v-for="(item, index) in list">
        <!-- :class="[searchType === 'History' ? 'history_item' : '']" -->
        <div
          class="list_item order_item"
          v-if="!(item?.income && item?.state == 0)"
          @click="gotoOrder(item)"
          :class="[isOpen(item.state) ? '' : 'history_item']"
        >
          <div class="order_time">{{ transferUTCTime(item.order_created_at) }}</div>
          <div class="order_head">
            <div class="order_img">
              <img v-if="item.electronic_type == 0" src="@/assets/mobile1.svg" alt="" />
              <img v-else src="@/assets/desktop1.svg" alt="" />
              <div class="order_name">{{ index + 1 }}-{{ item.domain ? item.domain : 'Order' + item.order_id }}</div>
            </div>
            <!-- <img src="@/assets/exprie.svg" alt="" /> -->
            <!-- {{ handleExprie(item) }} -->
            <div v-if="item.expire" class="order_expTime">
              <Clock style="color: #ff8b00; margin-right: 6px"></Clock>{{ transferUTCTime(item.expire) }}</div
            >
          </div>
          <div class="order_content">
            <div class="order_content_left">
              <div class="left_space">
                <span>{{ item.pst }}GB</span> /
                <span>{{ item.week }}Weeks</span>
              </div>
              <div class="left_price">- {{ item.total_price }} DMC</div>
            </div>
            <div class="order_content_right">
              <div class="right_space">
                <span>{{ getfilesize(item.used_space, 'B') }}</span> /
                <span>{{ handleDays(item) }} Days</span>
              </div>
              <div class="right_price"> + {{ item.income }} DMC</div>
              <div class="right_rate" v-if="handleRate(item) > 0">+{{ handleRate(item) }}%<TriangleUp></TriangleUp></div>
            </div>
          </div>
          <div class="order_status">{{ statusTypes[item.state] }} </div>
        </div>
      </template>
    </nut-infinite-loading>
    <nut-empty v-else description=" " image="error">
      <div style="margin-top: 10px" v-if="!listData.length">
        <nut-button icon="refresh" type="primary" @click="toBuy">Buy Order</nut-button>
      </div>
    </nut-empty>
    <Teleport to="body">
      <nut-popup position="top" :style="{ height: 'auto' }" v-model:visible="showTop" class="top_search_wrap">
        <nut-form class="top_search_wrap" :model-value="searchForm">
          <div class="search_title">Conditional Filtering</div>
          <div class="search_title left_title">Status Filtering</div>
          <nut-form-item label="">
            <nut-checkbox-group class="status_radio" v-model="searchForm.statusArr" direction="horizontal">
              <nut-checkbox
                shape="button"
                :label="item.value"
                v-for="(item, index) in typeArr"
                :key="index"
                :class="[searchForm.statusArr.indexOf(item.value) > -1 ? 'activeStatus' : '']"
                >{{ item.text }}</nut-checkbox
              >
            </nut-checkbox-group>
          </nut-form-item>
          <div class="search_title left_title">Filter by time</div>
          <nut-form-item label="">
            <nut-radio-group direction="horizontal" v-model="searchForm.timeType" @change="changeTime">
              <nut-radio label="create">Purchase Time</nut-radio>
              <nut-radio label="expiration">Expiration Time</nut-radio>
            </nut-radio-group>
          </nut-form-item>
          <nut-form-item label="">
            <nut-cell
              :showIcon="true"
              title="Please select"
              :desc="
                searchForm.createDate && searchForm.createDate[0]
                  ? `${searchForm.createDate[0]}-${searchForm.createDate[1]}`
                  : 'Please select a time'
              "
              @click="searchForm.isVisible = true"
            >
            </nut-cell>
            <nut-calendar
              v-model:visible="searchForm.isVisible"
              :default-value="searchForm.createDate"
              type="range"
              :start-date="`2023-01-01`"
              :end-date="`2030-01-01`"
              @close="searchForm.isVisible = false"
              @choose="setCTimeChooseValue"
              @select="setCTime"
            >
            </nut-calendar>
          </nut-form-item>
          <div class="search_title left_title">Filter by purchase price</div>
          <nut-form-item label="">
            <nut-radio-group direction="horizontal" v-model="searchForm.priceType" @change="changePrice">
              <nut-radio label="purchase">Purchase Price Range</nut-radio>
              <nut-radio label="income">Reward Range</nut-radio>
            </nut-radio-group>
          </nut-form-item>
          <nut-form-item label="" direction="horizontal" class="range_number">
            <nut-input placeholder="Min Price" v-model="searchForm.min" type="number" />
            -
            <nut-input placeholder="Max Price" v-model="searchForm.max" type="number" />
          </nut-form-item>

          <div class="bottom_btn">
            <nut-button type="warning" plain :loading="SearchLoading" @click="toReset"> Reset </nut-button>
            <nut-button type="warning" @click="toSearch" :disabled="searchDisabled" :loading="SearchLoading"> Search </nut-button>
          </div>
        </nut-form>
      </nut-popup>
    </Teleport>
  </div>
</template>

<script lang="ts" setup name="ListPage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconSwitch from '~icons/home/switch.svg';
  import IconHistory from '~icons/home/history.svg';
  import IconHistoryActivate from '~icons/home/historyActivate.svg';
  import { Search, Category, TriangleUp, Clock, Checked } from '@nutui/icons-vue';
  import { search_cloud } from '@/api';
  // import { listData } from './data';
  import useVariable from './details/useVariable.js';
  import { useOrderStore } from '@/store/modules/order';
  import useOrderList from '../home/useOrderList.ts';
  import { transferUTCTime, getfilesize, handleDays, handleExprie, handleRate } from '@/utils/util';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';
  import ErrorPage from '@/views/errorPage/index.vue';

  import { ref, onMounted, reactive, toRefs } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const { uuid } = useVariable();
  const loading = ref(false);
  const router = useRouter();
  const route = useRoute();
  const searchType = ref(route.query.searchType == 'History' ? 'History' : 'Open');
  const currentTotal = ref(0);
  const statusTypes = {
    0: 'Consensus not reached',
    1: 'Consensus reached',
    2: 'Insufficient advance deposit to cancel the next cycle',
    3: 'Sufficient funds in advance',
    4: 'Order over',
    5: 'Canceled',
    6: 'Cancellation of the next cycle',
  };
  const typeArr = [
    { text: 'Consensus not reached', value: 0 },
    { text: 'Consensus reached', value: 1 },
    { text: 'Insufficient advance deposit to cancel the next cycle', value: 2 },
    { text: 'Sufficient funds in advance', value: 3 },
    { text: 'Order over', value: 4 },
    { text: 'Canceled', value: 5 },
    { text: 'Cancellation of the next cycle', value: 6 },
  ];
  const keyWord = ref('');
  const horseLamp = ref([
    'CNR - - Consensus not reached ',
    'CR - - Consensus reached ',
    'Next: canceled - - Cancellation of the next cycle',
    'IADTCNC - - Insufficient advance deposit to cancel the next cycle',
    'SFIA - - Sufficient funds in advance ',
  ]);
  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();
  const { cloudCodeIsBind } = useUpdateDMC();
  const bindAmbCode = inject('bindAmbCode');
  const { resetData, loadMore, isError, listData, hasMore, infinityValue, total } = useOrderList();
  const isFilter = ref(false);
  const searchParam = reactive({
    searchForm: {
      status: 0,
      statusArr: [],
      createDate: [],
      timeType: 'create',
      min: '0',
      max: '100',
      priceType: 'purchase',
      sortTypeOptions: [
        { text: 'Payment Time', value: 'created_at' },
        { text: 'Expiration Time', value: 'expire' },
        { text: 'Reward Price', value: 'Reward' },
        { text: 'Purchase Price', value: 'total_price' },
      ],
      sortTypeOptions1: [
        { text: 'Sort By Descending', value: 'descending' },
        { text: 'Sort By Ascending', value: 'ascending' },
      ],
      sortType: 'created_at',
      sortValue: 'descending',
      More: 'More',
    },
  });

  const { searchForm } = toRefs(searchParam);
  if (searchType.value === 'Open') {
    searchForm.value.statusArr = [0, 1, 2, 3, 6];
  } else if (searchType.value === 'History') {
    searchForm.value.statusArr = [4, 5];
  } else {
    searchForm.value.statusArr = [0];
  }
  const setCTimeChooseValue = (param) => {
    searchForm.value.createDate = [...[param[0][3], param[1][3]]];
  };
  const setCTime = (param) => {
    console.log(param);
  };
  const changeTime = () => {
    console.log(searchForm.value.timeType, 'changeTime');
  };
  const changePrice = () => {
    console.log(searchForm.value.priceType, 'changePrice');
  };
  const sortChange = (value, type) => {
    let ascending = searchForm.value.sortValue === 'ascending';
    let sort_type = searchForm.value.sortType;
    let postData = {
      ascending,
      sort_type,
    };
    console.log(postData, 'postData');
    if (searchType.value == 'Open') {
      loadMore([0, 1, 2, 3, 6], '', '', '', postData, 'search');
    } else {
      loadMore([4, 5], '', '', '', postData, 'search');
    }
  };
  const toSearch = () => {
    isFilter.value = true;
    let start_time = searchForm.value.createDate[0];
    let end_time = searchForm.value.createDate[1];
    let max_price = '';
    let min_price = '';
    let max_profit = '';
    let min_profit = '';
    let priceType = searchForm.value.priceType;
    if (priceType === 'purchase') {
      max_price = searchForm.value.max;
      min_price = searchForm.value.min;
    } else {
      max_profit = searchForm.value.max;
      min_profit = searchForm.value.min;
    }
    let order_state = searchForm.value.statusArr;
    let ascending = searchForm.value.sortValue === 'ascending';
    let sort_type = searchForm.value.sortType;
    let postData = {
      //   start_time,
      //   end_time,
      max_price,
      min_price,
      max_profit,
      min_profit,
      //   order_state,
      ascending,
      sort_type,
    };
    showTop.value = false;
    if (order_state.length > 0) {
      searchType.value = 'filter';
    }
    loadMore(order_state, start_time, end_time, '', postData, 'search');
  };
  const toReset = () => {
    isFilter.value = false;
    showTop.value = false;
    searchForm.value.createDate = [];
    searchForm.value.statusArr = [0];
    searchForm.value.timeType = 'create';
    searchForm.value.priceType = 'purchase';
    searchForm.value.min = '';
    searchForm.value.max = '';
    searchType.value = 'Open';
  };

  const showTop = ref(false);
  const SearchLoading = ref(false);
  const searchDisabled = ref(false);
  const toShowSearch = () => {
    showTop.value = true;
  };
  let list = computed(() => {
    return listData.value.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const activeNames = ref([]);
  const onChange = (modelValue: any, currName: any, status: any) => {
    // currName: 当前操作的 collapse-item 的 name
    // status: true 打开 false 关闭
    console.log(modelValue, currName, status);
  };
  const toBuy = () => {
    if (!cloudCodeIsBind.value) {
      bindAmbCode();
    } else {
      router.push('/shop');
    }
  };

  const handleProgress = (item: { created_at: string | number | Date; expire: string | number | Date }) => {
    let created = new Date(item.created_at).getTime();
    let now = new Date().getTime() - created;
    let end = new Date(item.expire).getTime() - created;
    return +(now / end).toFixed(2) > 1 ? 100 : +((now / end) * 100).toFixed(2) > 0 ? +((now / end) * 100).toFixed(2) : 0;
  };

  const formatSize = (size: number) => {
    size = Number(size);
    if (size < 1024) {
      return size.toFixed(0) + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
    }
  };
  const randomColor = () => {
    const createNumber = (min, max) => {
      let color = Math.floor(Math.random() * 255);
      if (color <= max && color >= min) {
        return color;
      } else {
        return createNumber(min, max);
      }
    };
    let r = createNumber(0, 60);
    let g = createNumber(40, 120);
    let b = createNumber(150, 255);
    return `rgb(${r} ${g} ${b})`;
  };
  const isOpen = (state) => {
    if (state === 4 || state === 5) {
      return false;
    } else {
      return true;
    }
  };
  const gotoOrder = (item) => {
    if (isOpen(item.state)) {
      router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, income: item.income } });
    } else if (!isOpen(item.state)) {
      if (item.order_id) {
        window.sessionStorage.removeItem('myHistoryOrder');
        window.sessionStorage.setItem('myHistoryOrder', JSON.stringify(item));
        router.push({
          name: 'orderSummary',
          query: {
            id: item.order_id,
            type: 'history',
            status: item.state,
            createdTime: transferUTCTime(item.order_created_at),
            endTime: transferUTCTime(item.expire),
            uuid: item.uuid,
            amb_uuid: item.amb_uuid,
            domain: item.domain,
          },
        });
      }
    }
  };
  // onMounted(async () => {
  //   loadMore();
  // });
  const loadMoreFun = () => {
    if (cloudCodeIsBind.value) {
      console.log('loadMoreFun', searchForm.value.statusArr);
      let ascending = searchForm.value.sortValue === 'ascending';
      let sort_type = searchForm.value.sortType;
      let statusArr = searchForm.value.statusArr;
      let postData = {
        ascending,
        sort_type,
      };
      if (searchType.value == 'Open') {
        let arr = [0, 1, 2, 3, 6];
        if (statusArr.length > 0) {
          arr = arr.concat(statusArr);
        }
        const uniqueArray = [...new Set(arr)];
        loadMore(uniqueArray, '', '', '', postData, '', true);
      } else if (searchType.value == 'History') {
        let arr = [4, 5];
        if (statusArr.length > 0) {
          arr = arr.concat(statusArr);
        }
        const uniqueArray = [...new Set(arr)];
        loadMore(uniqueArray, '', '', '', postData, '', true);
      } else {
        let arr = statusArr;
        loadMore(arr, '', '', '', postData, '', true);
      }
      //   if (searchType.value == 'Open') {
      //     loadMore([0, 1, 2, 3, 6]);
      //   } else {
      //     loadMore([4, 5]);
      //   }
    }
  };
  watch(
    cloudCodeIsBind,
    (val) => {
      if (val) {
        let ascending = searchForm.value.sortValue === 'ascending';
        let sort_type = searchForm.value.sortType;
        let statusArr = searchForm.value.statusArr;
        let postData = {
          ascending,
          sort_type,
        };
        if (searchType.value == 'Open') {
          let arr = [0, 1, 2, 3, 6];
          if (statusArr.length > 0) {
            arr = arr.concat(statusArr);
          }
          const uniqueArray = [...new Set(arr)];
          loadMore(uniqueArray, '', '', '', postData, 'search', true);
        } else if (searchType.value == 'History') {
          let arr = [4, 5];
          if (statusArr.length > 0) {
            arr = arr.concat(statusArr);
          }
          const uniqueArray = [...new Set(arr)];
          loadMore(uniqueArray, '', '', '', postData, 'search', true);
        } else {
          let arr = statusArr;
          loadMore(arr, '', '', '', postData, 'search', true);
        }
        // if (searchType.value == 'Open') {
        //   loadMore([0, 1, 2, 3, 6]);
        // } else {
        //   loadMore([4, 5]);
        // }
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    searchType,
    (val) => {
      resetData();
      if (cloudCodeIsBind.value) {
        let ascending = searchForm.value.sortValue === 'ascending';
        let sort_type = searchForm.value.sortType;
        let postData = {
          ascending,
          sort_type,
        };
        if (val == 'Open') {
          let arr = [0, 1, 2, 3, 6];
          searchForm.value.statusArr = [0, 1, 2, 3, 6];
          loadMore(arr, '', '', '', postData, 'search', true);
        } else if (val == 'History') {
          let arr = [4, 5];
          searchForm.value.statusArr = arr;
          loadMore(arr, '', '', '', postData, 'search', true);
        } else {
          let statusArr = searchForm.value.statusArr;
          loadMore(statusArr, '', '', '', postData, 'search', true);
        }
        // if (val == 'Open') {
        //   loadMore([0, 1, 2, 3, 6]);
        // } else if (val == 'History') {
        //   loadMore([4, 5]);
        // } else {
        //   loadMore();
        // }
      }
    },
    { deep: true },
  );
</script>

<style lang="scss" scoped>
  .order_num {
    margin-top: 10px;
    font-weight: bold;
  }
  .top_box {
    padding: 30px 10px;
    border-radius: 0px !important;
    background: $primary-color;
    background-image: linear-gradient(137deg, #4062bb 0%, #5200ae 74%);
    margin-left: -4vw;
    margin-right: -4vw;
    margin-bottom: 10px;
    .keyword-input-text {
      border-radius: 36px;
      width: 98%;
      margin: 0 auto;
      color: #5264f9;
      :deep {
        .input-text {
          font-size: 40px;
        }
      }
    }
    .top_type {
      margin-bottom: 10px;
      margin-left: 60px;
      font-size: 45px;
      color: #fff;
    }
    p {
      width: 80%;
      margin: 15px auto;
      font-size: 24px;
      color: #fff;
    }
    .top_btn_box {
      border-radius: 10px;
      padding: 10px 30px 0;
      box-sizing: border-box;
      // background: #fff;
      :deep {
        .nut-row {
          margin: 0;
        }
        .nut-col {
          color: #fff;
          font-size: 28px;
          font-weight: 600;
        }
      }

      @keyframes maxshow {
        0% {
          // transform: rotate(0deg);
          transform: scale(1);
        }
        50% {
          // transform: rotate(0deg);
          transform: scale(1.1);
        }

        100% {
          transform: scale(1);
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
        animation: maxshow 3s linear infinite;
        span {
          font-size: 0.8rem;
        }
        .svg-box {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          margin-bottom: 15px;
          background: #171414;
          // box-shadow: 0px 1px 2px 2px #ccc;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .svg-box-history {
          background-color: #fff7;
          svg,
          img {
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .svg-box-open {
          background: #fff;
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
          }
        }
        // .active_svg-box {
        //   background: #fbc934;
        //   background: #fbc935;
        //   background: #fff;
        //   svg {
        //     color: #fff;
        //     color: #fbc934;
        //   }
        //   & + span {
        //     color: #fbc934;
        //   }
        // }
        .active_svg-boxHistory {
          border: 8px solid orange;
          background-color: #aeaeae;
          -webkit-box-reflect: below 0 linear-gradient(hsla(0deg, 0%, 100%, 0), hsla(0deg, 0%, 100%, 0) 45%, hsla(0deg, 0%, 100%, 0.5));

          svg,
          img {
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .active_svg-boxOpen {
          border: 8px solid orange;
          background: #fff;
          -webkit-box-reflect: below 0 linear-gradient(hsla(0deg, 0%, 100%, 0), hsla(0deg, 0%, 100%, 0) 45%, hsla(0deg, 0%, 100%, 0.5));
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
  .top_history {
    background: #2b2929;
  }
  .nut-row {
    overflow: hidden;

    > .nut-col {
      padding: 10px;
      line-height: 1;
      text-align: center;
      // height: 120px;
      // background: $primary-color;
      // border: 1px solid blue;
      img {
        width: 40%;
        height: 40%;
        margin: 20%;
        border-radius: 20%;
        background: $primary-color;
      }

      .list-col-space {
        // margin-top: 5vw;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-circle-progress {
        margin: 0 auto;
      }

      .col-span {
        display: block;
        height: 16px;
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-button {
        margin-top: 8vw;
      }
    }
  }
  .list_box {
    height: calc(100vh - 550px);
    overflow: auto;
    // padding: 0 10px;
    .list_item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px 30px;
      padding-left: 100px;
      min-height: 80px;
      color: #171414;
      font-size: 24px;
      background: #fff;
      border-radius: 5px;
      border-bottom: 1px solid #eee;
      //   margin: 10px 0;
      border-radius: 20px;
      // box-shadow: rgba(0, 0, 0, 0.1) 0px 1.333333vw 6.666667vw;
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
        color: #121212;
        color: $main_green;
        font-size: 36px;
      }
      .time {
        color: #aaa;
        font-size: 24px;
        color: #635858;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .history_item {
      background: #2b2929;
      color: #fff !important;
      .time,
      span {
        color: #fff !important;
      }
    }
  }
</style>

<style lang="scss">
  .my_top_search {
    background: transparent;
    .my_category_icon {
      color: #fff;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  .top_search_wrap {
    .search_title {
      text-align: center;
      padding: 18px 0;
    }
    .left_title {
      text-align: left;
      padding-left: 24px;
    }
    .bottom_btn {
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
      .nut-button--disabled {
        background: #aaa !important;
        opacity: 0.28 !important;
      }
    }
    .status_radio {
      display: flex;
      flex-wrap: wrap;
    }
    .activeStatus {
      .nut-checkbox__button {
        background: #fab20c;
        background: #5758a0;
        color: #fff;
        border: 1px solid #fff !important;
      }
    }
    .nut-checkbox__button {
      margin: 10px 0;
    }
    .range_number {
      .nut-form-item__body__slots {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nut-input {
        width: 44%;
        border: 1px solid #ccc;
        border-radius: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        .input-text {
          text-align: center !important;
        }
      }
    }
  }
  .list_box .order_item {
    position: relative;
    margin: 50px 0 !important;
    padding: 20px !important;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    // overflow: hidden;
    // background:
    //   linear-gradient(#fff, #fff) padding-box,
    //   linear-gradient(145deg, #e81cff, #40c9ff) border-box;
    // border: 2px solid transparent;
    .order_time {
      position: absolute;
      right: 20px;
      top: -36px;
      color: #888;
      font-weight: bold;
      font-size: 24px;
      z-index: 99;
    }
    .order_head {
      display: flex;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 99;
      img {
        width: 42px;
        margin: 0 auto;
        margin-right: 10px;
      }
      .order_img,
      .order_expTime {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        // color: #ff7d24;

        .order_name {
          font-size: 30px;
        }
      }
    }
    .order_content {
      display: flex;
      z-index: 99;
      .order_content_left,
      .order_content_right {
        width: 50%;
        // height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 28px;
        line-height: 42px;
        // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 22px 0;
      }
      .order_content_left {
        border-right: 1px solid #ccc;
        .left_price {
          color: red;
          margin: 10px 0;
        }
      }
      .right_price {
        color: green;
        margin: 10px 0;
      }
      .right_rate {
        color: #ff7d24;
        font-size: 32px;
        // margin-top: 10px;
      }
    }
    .order_status {
      z-index: 99;
      color: #ff8b00;
      font-weight: bold;
      font-size: 28px;
    }
  }
  .top_filter {
    display: flex;
    // width: calc(100% + 100px);
    width: calc(100% + 8vw);
    margin: 0 -4vw;
    // width: 100%;
    // margin: 20px 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .nut-menu {
      width: calc(100% - 100px);
      width: 100%;
      .nut-menu__bar .nut-menu__item {
        --nut-menu-item-font-size: 0.8rem;
      }
    }
    .my_category_icon_box {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .my_category_icon {
      color: #000;
      cursor: pointer;
    }

    .my_category_icon_active {
      color: #4916a1;
      color: #ff8b00;
      font-weight: bold;
      animation: max 3s linear infinite;
    }

    @keyframes max {
      0% {
        // transform: rotate(0deg);
        transform: scale(1);
      }
      50% {
        // transform: rotate(0deg);
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .find_tips {
    font-size: 24px;
    color: #ff8b00;
    font-weight: bold;
    margin-top: 10px;
  }
</style>
