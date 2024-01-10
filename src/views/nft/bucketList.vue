<template>
  <div class="page_box">
    <TopBack class="top_title" type="2"><span class="title">Bucket List</span> </TopBack>
    <div>
      <!-- <nut-searchbar v-model="keyWord" placeholder="Search by order number" clearable class="my_top_search">
        <Search #leftin />
      </nut-searchbar>
      <span class="sub_title">Choose your Bucket</span> -->

      <nut-fixed-nav v-model:visible="dragIsShow" v-if="listData.length > 8" :position="{ bottom: '200px' }" :overlay="true" type="right">
        <template #list>
          <ul class="nut-fixed-nav__list">
            <nut-searchbar v-model="keyWord" placeholder="Search by order number" :clearable="false" class="my_top_search">
              <template #leftin>
                <Search />
              </template>
            </nut-searchbar>
          </ul>
        </template>
        <template #btn>
          <Search color="#fff" />
        </template>
      </nut-fixed-nav>

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
        <div class="bucket_item" @click="gotoFileList(item)" v-for="item in list" :key="item.order_id">
          <img src="@/assets/home_bucket.png" alt="" />
          <p>{{ item.domain || item.order_id }}</p>
        </div>
      </nut-infinite-loading>
    </div>
    <UploadSet />
  </div>
</template>

<script setup lang="ts" name="bucketList">
  import { computed } from 'vue';
  import UploadSet from './uploadSet.vue';

  import { useUserStore } from '@/store/modules/user';
  import { useRouter, useRoute } from 'vue-router';
  import { Search } from '@nutui/icons-vue';
  import TopBack from '@/components/topBack/index.vue';
  import useOrderList from './useOrderList.ts';

  const { loadMore, listData, hasMore, infinityValue, total } = useOrderList();
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
      is_domain: true,
      electronic_type: '0',
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

  const dragIsShow = ref(false);

  onMounted(() => {});
</script>
<style>
  #app {
    background-color: #fff;
  }
</style>
<style lang="scss" scoped>
  ::v-deep {
    .nut-fixed-nav.active .nut-icon {
      transform: rotate(0) !important;
    }

    .nut-searchbar__search-input {
      height: 90%;
      background-color: rgb(73 107 242 / 14%) !important;
    }

    .nut-fixed-nav__btn {
      width: 130px;
    }
  }

  .page_box {
    padding: 30px;
  }

  .title {
    color: #000;
    font-weight: 700;
  }

  .sub_title {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .total_tag {
    font-weight: 600;

    :deep {
      .nut-tag {
        margin-left: 10px;
        padding: 4px 12px;
        border-radius: 30px;
        vertical-align: text-top;
      }
    }
  }

  .my_top_search {
    padding: 10px 0;
  }

  .bucket_box {
    height: calc(100vh - 390px);
    overflow: auto;

    :deep {
      .nut-infinite__container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    .bucket_item {
      box-sizing: border-box;
      width: 45%;
      margin: 15px;
      padding: 10px 0;
      border-radius: 30px;
      font-size: 40px;
      //   background-color: #71ea6f;
      text-align: center;

      img {
        width: 100px;
        margin: 0 0 10px;
      }
    }
  }

  @media screen and (width >= 500px) {
    .my_top_search {
      --nut-searchbar-input-height: 50px;
      --nut-searchbar-padding: 10px;

      padding: 10px 0;

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
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      height: calc(100vh - 300px);

      :deep {
        .nut-infinite__container {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }

      .bucket_item {
        box-sizing: border-box;
        width: 200px;
        height: 150px;
        margin: 15px;
        padding: 10px 0;
        border-radius: 30px;
        font-size: 40px;
        // background-color: #71ea6f;
        text-align: center;

        img {
          width: 80px;
          margin: 0 0 10px;
        }

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
