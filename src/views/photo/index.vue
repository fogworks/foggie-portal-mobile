<template>
  <div class="my_photo_page">
    <div class="my_photo_head"> Photography </div>
    <div class="my_photo_headImg">
      <img src="@/assets/photoHead.svg" />
    </div>
    <div class="my_photo_headTitle">
      <div class="text">Show</div>
      <div class="text">Your Bucket Photography</div>
    </div>
    <nut-infinite-loading
      ref="bucketListRef"
      load-more-txt="No more content"
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMoreFun"
      class="bucket_box my_photo_box"
    >
      <div class="my_photo_list">
        <div class="my_photo_item" @click="gotoFileList(item)" v-for="(item, index) in list" :key="item.order_id">
          <img src="@/assets/bucketPhoto0.svg" v-if="index % 5 === 0" />
          <img src="@/assets/bucketPhoto1.svg" v-if="index % 5 === 1" />
          <img src="@/assets/bucketPhoto2.svg" v-if="index % 5 === 2" />
          <img src="@/assets/bucketPhoto3.svg" v-if="index % 5 === 3" />
          <img src="@/assets/bucketPhoto0.svg" v-if="index % 5 === 4" />
          <img src="@/assets/bucketPhoto1.svg" v-if="index % 5 === 5" />
          <div class="my_photo_item_text">
            <div class="bucketName">{{ item.domain || item.order_id }}</div>
            <div class="time">{{ transferUTCTime(item.order_created_at) }}</div>
          </div>
        </div>
      </div>
    </nut-infinite-loading>
  </div>
</template>

<script setup lang="ts" name="bucketPhotoList">
  import useOrderList from '../nft/useOrderList.js';
  import { transferUTCTime } from '@/utils/util';
  import { useRouter, useRoute } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const router = useRouter();
  const keyWord = ref('');
  const bucketListRef = ref('');
  const { loadMore, listData, hasMore, infinityValue, total } = useOrderList();
  let list = computed(() => {
    return listData.value.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.domain.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const loadMoreFun = async () => {
    const postData = {
      sort_type: 'created_at',
      ascending: false,
      is_domain: 1,
      electronic_type: '0',
    };
    await loadMore([0, 1, 2, 3, 6], '', '', '', postData);
    nextTick(() => {
      if (hasMore.value && bucketListRef?.value?.$el?.clientHeight >= bucketListRef?.value?.$el?.scrollHeight) {
        loadMoreFun();
      }
    });
  };
  watch(
    cloudCodeIsBind,
    (val) => {
      if (val) {
        loadMoreFun();
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
  const gotoFileList = (item) => {
    window.sessionStorage.setItem('bucketList', JSON.stringify(list.value));
    router.push({
      name: 'photoList',
      query: { name: item.domain || item.order_id, id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, category: 1 },
    });
  };
</script>

<style lang="scss" scoped>
  .my_photo_page {
    background: #fff;
    min-height: 100vh;
    height: 100%;
    margin: 0 -4vw;
    width: calc(100% + 8vw);
    .my_photo_head {
      width: 100%;
      text-align: center;
      font-weight: bold;
      height: 100px;
      line-height: 100px;
      background: #fff;
      background: #e4d8c8;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
      box-shadow:
        0px 1px 5px rgba(0, 0, 0, 0.05),
        0px 4px 20px rgba(0, 0, 0, 0.04),
        0px 2px 20px -1px rgba(0, 0, 0, 0.05);
    }
    .my_photo_headTitle {
      padding-left: 20px;
      margin: 20px 0;
      .text {
        font-weight: bold;
        font-size: 50px;
        font-style: italic;
      }
    }
    .my_photo_headImg {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .my_photo_box {
      width: 100%;
      .my_photo_list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        .my_photo_item {
          cursor: pointer;
          width: 40%;
          margin-left: 4%;
          //   height: 340px;
          //   background: #fff;
          padding: 20px;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          margin-top: 40px;
          img {
            width: 100%;
            height: 260px;
            object-fit: cover;
          }
          .my_photo_item_text {
            margin-top: 20px;
            .bucketName {
              font-weight: bold;
              margin-bottom: 20px;
            }
            .time {
              font-size: 24px;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>
