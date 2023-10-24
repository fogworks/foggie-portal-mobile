<template>
  <div class="top_box">
    <!-- <div class="top_type">{{ searchType }} </div> -->
    <nut-input v-model="keyWord" clearable class="keyword-input-text" placeholder="Search">
      <template #left> <Search></Search> </template>
    </nut-input>
    <!-- <p>You can search your order here.</p> -->
    <nut-row type="flex" justify="space-between" class="top_btn_box">
      <nut-col :span="10">
        <div class="flex-content">
          <div class="svg-box" @click="searchType = 'Open'" :class="[searchType == 'Open' ? 'active_svg-box' : '']">
            <!-- <Shop></Shop> -->
            <IconSwitch style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'Open'"></IconSwitch>
            <IconSwitch style="vertical-align: text-top" color="#ffffff" v-else></IconSwitch>
          </div>
          <span>Open</span></div
        >
      </nut-col>
      <nut-col :span="10">
        <div class="flex-content">
          <div class="svg-box" @click="searchType = 'History'" :class="[searchType == 'History' ? 'active_svg-box' : '']">
            <IconHistory style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'History'"></IconHistory>
            <IconHistoryActivate style="vertical-align: text-top" color="#5F57FF" v-else></IconHistoryActivate>
          </div>
          <span>History</span></div
        >
      </nut-col>
    </nut-row>
  </div>
  <nut-infinite-loading
    v-if="list.length"
    class="list_box"
    load-more-txt="No more content"
    v-model="infinityValue"
    :has-more="hasMore"
    @load-more="loadMore"
  >
    <div
      class="list_item"
      v-for="(item, index) in list"
      @click="$router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid } })"
    >
      <!-- :style="{ background: randomColor() }" -->
      <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
        <!-- <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
        <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
        <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" /> -->
        <img src="@/assets/list_item_2.svg" alt="" />
      </div>
      <div>
        <span>Order:{{ item.order_id }}</span>
        <span :class="['earnings']">
          +{{ item.income }}
          <!-- <IconArrowRight style="vertical-align: text-top" width="1.5rem" height="1.5rem" color="#5F57FF"></IconArrowRight> -->
        </span>
      </div>
      <div
        ><span>{{ item.pst || '--' }} PST</span> <span class="time">{{ transferUTCTime(item.order_created_at) }}</span>
      </div>
    </div>
  </nut-infinite-loading>
  <nut-empty v-else description="No data" image="error"></nut-empty>
</template>

<script lang="ts" setup name="ListPage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconSwitch from '~icons/home/switch.svg';
  import IconHistory from '~icons/home/history.svg';
  import IconHistoryActivate from '~icons/home/historyActivate.svg';
  import { Search } from '@nutui/icons-vue';
  import { search_cloud } from '@/api';
  // import { listData } from './data';
  import useVariable from './details/useVariable.js';
  import { useOrderStore } from '@/store/modules/order';
  import useOrderList from '../home/useOrderList.ts';
  import { transferUTCTime } from '@/utils/util';

  import { ref } from 'vue';
  const { uuid } = useVariable();
  const searchType = ref('Open');
  const loading = ref(false);
  const router = useRouter();
  const keyWord = ref('');

  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();

  const { resetData, loadMore, listData, hasMore, infinityValue } = useOrderList();

  let list = computed(() => {
    return listData.value.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const toDetails = (index: any) => {
    router.push({ path: '/details', query: { id: index } });
  };
  const activeNames = ref([]);
  const onChange = (modelValue: any, currName: any, status: any) => {
    // currName: 当前操作的 collapse-item 的 name
    // status: true 打开 false 关闭
    console.log(modelValue, currName, status);
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
  onMounted(() => {
    loadMore();
  });
  watch(
    searchType,
    (val) => {
      resetData();
      if (val == 'Open') {
        loadMore([0, 1, 2, 3, 6]);
      } else if (val == 'History') {
        loadMore([4, 5]);
      } else {
        loadMore();
      }
    },
    { deep: true },
  );
</script>

<style lang="scss" scoped>
  .top_box {
    padding: 30px 10px;
    border-radius: 0px !important;
    background: $primary-color;
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
        .active_svg-box {
          background: #fbc934;
          background: #fbc935;
          background: #fff;
          svg {
            color: #fff;
            color: #fbc934;
          }
          & + span {
            color: #fbc934;
          }
        }
      }
    }
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
    padding: 0 10px;
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
          transform-style: preserve-3d;
          -webkit-transform-origin: 50%;
          -webkit-animation: spin 5s infinite;
          -webkit-animation-timing-function: linear;
          -webkit-perspective: 1000;
          -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
          -webkit-filter: saturate(1.45) hue-rotate(2deg);
        }
        @keyframes spin {
          from {
            -webkit-transform: rotateY(0deg);
          }
          to {
            -webkit-transform: rotateY(360deg);
          }
        }
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
  }
</style>
