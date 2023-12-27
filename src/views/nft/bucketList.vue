<template>
  <div class="page_box">
    <TopBack class="top_title" type="2"
      ><span class="title">Bucket List</span>
      <uploadSet #right></uploadSet>
    </TopBack>
    <span class="sub_title">Choose your Bucket</span>
    <div>
      <nut-searchbar v-model="keyWord" placeholder="Search by order number" clearable class="my_top_search">
        <Search #leftin />
      </nut-searchbar>
      <div class="total_tag">
        <nut-tag>{{ total }}</nut-tag> Buckets
      </div>
      <nut-infinite-loading
        ref="listRef"
        load-more-txt="No more content"
        v-model="infinityValue"
        :has-more="hasMore"
        @load-more="loadMoreFun"
        class="bucket_box"
      >
        <div class="bucket_item" @click="gotoFileList(item)" v-for="item in list">
          <img src="@/assets/home_bucket.png" alt="" />
          <p>{{ item.domain || item.order_id }}</p>
        </div>
      </nut-infinite-loading>
    </div>
    <FastUploader></FastUploader>
  </div>
</template>

<script setup lang="ts" name="bucketList">
  import { computed } from 'vue';
  import uploadSet from './uploadSet.vue';
  import FastUploader from './fastUploader.vue';
  import { useUserStore } from '@/store/modules/user';
  import { useRouter, useRoute } from 'vue-router';
  import { Search, Category, TriangleUp, Clock, Checked } from '@nutui/icons-vue';
  import TopBack from '@/components/topBack/index.vue';
  import useOrderList from './useOrderList.ts';
  const { resetData, loadMore, isError, listData, hasMore, infinityValue, total } = useOrderList();
  const keyWord = ref('');
  const listRef = ref('');
  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  let list = computed(() => {
    return listData.value.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.domain.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const loadMoreFun = async () => {
    const postData = {
      sort_type: 'created_at',
      ascending: false,
    };
    await loadMore([0, 1, 2, 3, 6], '', '', '', postData);
    nextTick(() => {
      if (hasMore.value && listRef?.value?.$el?.clientHeight >= listRef?.value?.$el?.scrollHeight) {
        loadMoreFun();
      }
    });
  };
  const gotoFileList = (item) => {
    router.push({
      name: 'listDetails',
      query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, income: item.income, mintType: route.query.mintType || '0' },
    });
  };
  watch(
    cloudCodeIsBind,
    (val) => {
      if (val) {
        loadMoreFun();
      }
    },
    { deep: true, immediate: true },
  );

  onMounted(() => {});
</script>
<style>
  #app {
    background-color: #fff;
  }
</style>
<style lang="scss" scoped>
  .page_box {
    padding: 30px;
  }
  .title {
    color: #000;
    font-weight: 700;
  }
  .sub_title {
    margin-left: 10px;
    margin-top: 10px;
  }
  .total_tag {
    font-weight: 600;
    :deep {
      .nut-tag {
        margin-left: 10px;
        padding: 4px 12px;
        vertical-align: text-top;
        border-radius: 30px;
      }
    }
  }
  .bucket_box {
    height: calc(100vh - 390px);
    overflow: auto;
    :deep {
      .nut-infinite__container {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
      }
    }
    .bucket_item {
      width: 45%;
      margin: 15px;
      padding: 10px 0;
      border-radius: 30px;
      background-color: #71ea6f;
      text-align: center;
      font-size: 40px;
      box-sizing: border-box;
      img {
        width: 100px;
        margin: 0px 0 10px 0;
      }
    }
  }
  @media screen and (min-width: 500px) {
    .my_top_search {
      --nut-searchbar-input-height: 50px;
      --nut-searchbar-padding: 10px;
      :deep {
        .nut-searchbar__search-input .nut-searchbar__iptleft-search-icon {
          width: 30px;
          height: 30px;
        }
        .nut-searchbar__search-input .nut-searchbar__input-bar {
          font-size: 1.5rem;
        }
        .nut-icon {
          --nut-icon-width: 30px;
          --nut-icon-height: 30px;
          --nut-icon-line-height: 30px;
        }
      }
    }
    .total_tag {
      --nut-tag-height: 20px;
      --nut-tag-font-size: 1rem;
      :deep {
        .nut-tag {
          padding: 2px 10px;
          vertical-align: baseline;
        }
      }
    }
    .bucket_box {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
      height: calc(100vh - 300px);
      :deep {
        .nut-infinite__container {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
        }
      }
      .bucket_item {
        width: 200px;
        height: 150px;
        margin: 15px;
        padding: 10px 0;
        border-radius: 30px;
        background-color: #71ea6f;
        text-align: center;
        font-size: 40px;
        box-sizing: border-box;
        img {
          width: 80px;
          margin: 0px 0 10px 0;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
