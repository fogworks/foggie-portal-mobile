<template>
  <Setting @click="setVisible = true" class="set_icon"></Setting>
  <nut-popup teleport-disable v-if="setVisible" position="bottom" closeable :style="{ height: '100vh' }" v-model:visible="setVisible">
    <div class="bucket_box">
      <p class="title"> The default quick upload is to:{{ domain }} </p>
      <nut-infinite-loading
        load-more-txt="No more content"
        class="file_list file_list_move"
        ref="listRef"
        v-model="infinityValue"
        :has-more="hasMore"
        @load-more="loadMoreFun"
      >
        <div class="list_item" v-for="item in listData" @click="domain = item.domain || item.order_id">
          <div :class="['left_icon_box', item.checked ? 'is_checked' : '']">
            <img src="@/assets/home_bucket.png" alt="" />
          </div>
          <div class="name_box">
            <span>{{ item.domain || item.order_id }}</span>
          </div>
          <!-- <IconMore v-show="!isCheckMode" class="right_more" @click.stop="showAction(item)"></IconMore> -->
        </div>
      </nut-infinite-loading>
      <nut-form>
        <nut-form-item label="Quick Upload Path">
          <nut-input v-model="uploadPath" class="nut-input-text" placeholder="Example:folder1/subfolder1" type="text" />
        </nut-form-item>
      </nut-form>

      <nut-button type="info" block @click="confirmSet">Confirm</nut-button>
    </div>
  </nut-popup>
</template>

<script setup>
  import useOrderList from '../home/useOrderList.ts';
  import Setting from '~icons/home/setting.svg';
  const { resetData, loadMore, isError, listData, hasMore, infinityValue, total } = useOrderList();
  const setVisible = ref(false);
  const listRef = ref('');
  const domain = ref('');
  const uploadPath = ref('/');
  const confirmSet = () => {
    setVisible.value = false;
  };
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
  const setBucket = (item) => {
    console.log(item);
  };
  watch(setVisible, (val) => {
    if (val) {
      resetData();
      loadMoreFun();
    }
  });
  //   onMounted(() => {
  //     loadMoreFun();
  //   });
</script>

<style lang="scss" scoped>
  .set_icon {
    position: absolute;
    right: 0;
    color: #000;
    width: 1.8rem;
    height: 1.8rem;
  }
  .list_item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #eee;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    &:active {
      background: #cde3f5;
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
    .right_more {
      width: 50px;
      height: 50px;
      color: #ccc;
    }
  }
  .bucket_box {
    margin-top: 3rem;
  }
  .file_list {
    height: 60vh;
    overflow: auto;
  }
  .title {
    margin: 0 1rem 1rem 1rem;
  }
  :deep {
    .nut-form-item__label {
      max-width: 9rem;
      font-size: 1rem;
    }
  }
</style>
