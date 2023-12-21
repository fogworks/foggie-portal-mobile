<template>
  <div>
    <div class="top_tab_box" v-if="tabList.length">
      <div :class="['tab_item', activeTab == index + 1 ? 'isActive' : '']" v-for="(item, index) in tabList" @click="updateTab(index)">
        {{ item }}
      </div>
    </div>
    <p v-if="hasMore" @click="emits('gotoMore')" class="show_more"> Show More </p>
    <div class="img_list_box">
      <div :class="['img_item', checkedItem.value.name == item.name ? 'isChecked' : '']" v-for="item in imgList" @click="itemClick(item)">
        <div class="img_box">
          <img :src="item.imgUrl" alt="" />
        </div>
        <p class="item_name">
          {{ item.name }}
        </p>
        <p class="price_time">
          <span>{{ item.price }}</span>
          <span>{{ item.createTime }}</span>
        </p>
      </div>
    </div>
    <div v-if="chooseType != 0" class="bottom_btn">
      <nut-button v-if="!checkedItem.value.name" block type="primary" @click="router.push({ name: 'BucketList', query: { mintType: 1 } })"
        >Mint New</nut-button
      >
      <nut-button v-else-if="checkedItem.value.name && activeTab == 2" block type="primary">Mint</nut-button>
      <nut-button v-else-if="checkedItem.value.name" block type="primary">Mint Again</nut-button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const props = defineProps({
    tabList: {
      type: Array,
      default: () => ['Mint List', 'Deploy List'],
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
    chooseType: {
      type: String,
      default: '0', //0 no choose ,1 single,2 multiple
    },
  });
  const emits = defineEmits(['update:activeTab', 'itemClick', 'gotoMore']);
  const { tabList, activeTab, hasMore, imgList, chooseType } = toRefs(props);
  const checkedItem = reactive({
    value: {},
  });
  const updateTab = (index) => {
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
    grid-gap: 20px;
    height: calc(100vh - 400px);
    overflow: auto;
    // margin: 0 30px;
    .img_item {
      width: 300px;
      height: 400px;
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
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
    position: fixed;
    bottom: 120px;
    width: calc(100% - 60px);
  }
  @media screen and (min-width: 500px) {
    .top_tab_box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      width: 400px;
      padding: 5px;
      background: #e4ebf3;
      border-radius: 99px;
      .tab_item {
        width: 50%;
        padding: 10px 0;
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
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      justify-items: center;
      grid-gap: 20px;
      // margin: 0 30px;
      .img_item {
        width: 200px;
        padding: 10px;
        border-radius: 20px;
        overflow: hidden;
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
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
      position: fixed;
      bottom: 120px;
      width: calc(100% - 60px);
    }
  }
</style>
