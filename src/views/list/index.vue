<template>
  <div class="top_box">
    <div class="top_back" @click="searchType = ''" v-if="searchType">{{ searchType }} </div>
    <nut-input v-model="keyWord" clearable class="keyword-input-text" placeholder="Search">
      <template #left> <Search></Search> </template>
    </nut-input>
    <p>You can search your order here.</p>
    <nut-row type="flex" justify="space-between" class="top_btn_box">
      <nut-col :span="10">
        <div class="flex-content" @click="searchType = 'Open'">
          <div class="svg-box">
            <!-- <Shop></Shop> -->
            <IconSwitch style="vertical-align: text-top" color="#5F57FF"></IconSwitch>
          </div>
          <span>Open</span></div
        >
      </nut-col>
      <nut-col :span="10">
        <div class="flex-content" @click="searchType = 'History'">
          <div class="svg-box">
            <IconHistory style="vertical-align: text-top" color="#5F57FF"></IconHistory>
          </div>
          <span>History</span></div
        >
      </nut-col>
    </nut-row>
  </div>
  <nut-infinite-loading class="list_box" load-more-txt="No more content" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <div
      class="list_item"
      v-for="(item, index) in list"
      @click="$router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid } })"
    >
      <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
        <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
        <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
        <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" />
      </div>
      <div>
        <span>Order:{{ item.order_id }}</span>
        <span :class="['earnings']">
          +{{ item.dmc }} <IconArrowRight style="vertical-align: text-top" width="1.5rem" height="1.5rem" color="#5F57FF"></IconArrowRight>
        </span>
      </div>
      <div
        ><span>{{ item.pst || '--' }} PST</span> <span class="time">{{ item.createAt }}</span>
      </div>
    </div>
  </nut-infinite-loading>
</template>

<script lang="ts" setup name="ListPage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconSwitch from '~icons/home/switch.svg';
  import IconHistory from '~icons/home/history.svg';
  import { Search } from '@nutui/icons-vue';
  import { search_cloud } from '@/api';
  // import { listData } from './data';
  import useVariable from './details/useVariable.js';
  import { useOrderStore } from '@/store/modules/order';
  import { ref } from 'vue';
  const { uuid } = useVariable();
  const searchType = ref('');
  const loading = ref(false);
  const router = useRouter();
  const keyWord = ref('');
  const infinityValue = ref(false);
  const hasMore = ref(false);

  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();

  let list = computed(() => {
    return orderStore.getOrderList.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const loadMore = () => {};
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
  // const getCloudSpaceList = () => {
  //   return getCloudOrderList({ uuid: uuid.value }).then((res) => {
  //     if (res.code == 200) {
  //       cloudSpaceList.value = res.data;
  //     }
  //   });
  // };
  const searchList = async () => {
    loading.value = true;
    // await getCloudSpaceList();
    await search_cloud()
      .then((res) => {
        const cloudList = res.result.data.filter((el) => {
          if (!el.result) {
            // return false;
          }
          const target = cloudSpaceList.value.find((item) => item.order_id == el.order_id);
          if (!target) {
            el.notThisClient = true;
          }
          return true;
        });
        orderStore.setOrderList(cloudList);
        // store.dispatch('global/setCloudList', cloudList);
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  onMounted(() => {
    searchList();
  });
  // export default {
  //   setup() {

  //     return {
  //       onChange,
  //       activeNames,
  //       ...toRefs(title)
  //     };
  //   }
  // };
</script>

<style lang="scss" scoped>
  .top_box {
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
    .keyword-input-text {
      border-radius: 16px;
      width: 80%;
      margin: 0 auto;
      color: #5264f9;
      :deep {
        .input-text {
          font-size: 40px;
        }
      }
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
          background: #fff;
          // box-shadow: 0px 1px 2px 2px #ccc;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          svg,
          img {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
  .nut-row {
    margin-bottom: 15px;
    overflow: hidden;

    > .nut-col {
      margin-bottom: 15px;
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
      padding-left: 80px;
      min-height: 80px;
      color: #838080;
      font-size: 28px;
      background: #fff;
      border-radius: 5px;
      border-bottom: 1px solid #eee;
      .item_img_box {
        position: absolute;
        left: 5px;
        width: 70px;
        height: 70px;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 50px;
        background: #ff8b00;
        img {
          width: 36px;
          margin: 0 auto;
        }
        .cions {
          margin-right: 15px;
        }
      }
      .item_2 {
        background: #5f57ff;
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
        font-size: 36px;
      }
      .time {
        color: #ff6e00;
        font-size: 24px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
