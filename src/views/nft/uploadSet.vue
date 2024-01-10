<template>
  <nut-button class="upload_btn" type="primary" @click="popShow = true">+</nut-button>
  <nut-popup closeable position="bottom" :style="{ height: '100%' }" v-model:visible="popShow">
    <div class="bucket_box">
      <p class="title">
        Upload Path:{{ bucketName }}/{{ uploadPath }}
        <EditIcon v-if="!needSet && canSet" class="edit_button" type="primary" @click="needSet = !needSet"></EditIcon>
        <CancelBoxIcon v-else-if="needSet && canSet" class="edit_button" type="primary" @click="getBucketAndPath"></CancelBoxIcon>
      </p>
      <template v-if="needSet && canSet">
        <nut-infinite-loading
          v-if="!folderListShow"
          load-more-txt="No more bucket"
          class="file_list file_list_move"
          ref="listRef"
          v-model="infinityValue"
          :has-more="hasMore"
          @load-more="loadMoreFun"
        >
          <div class="list_item" v-for="item in listData" @click="setBucket(item)">
            <div :class="['left_icon_box', item.checked ? 'is_checked' : '']">
              <img src="@/assets/home_bucket.png" alt="" />
            </div>
            <div class="name_box">
              <span>{{ item.domain || item.order_id }}</span>
            </div>
          </div>
        </nut-infinite-loading>
        <FolderList
          v-else
          @setBucketAndPath="setBucketAndPath"
          v-model:uploadPath="uploadPath"
          v-model:folderListShow="folderListShow"
          :header="header"
          :metadata="metadata"
          :accessKeyId="accessKeyId"
          :secretAccessKey="secretAccessKey"
          :bucketName="bucketName"
        ></FolderList>
      </template>
    </div>
    <FastUploader
      v-if="!needSet"
      @getRouteOrder="getRouteOrder"
      @setBucketAndPath="setBucketAndPath"
      v-model:canSet="canSet"
      :header="header"
      :metadata="metadata"
      :orderInfo="orderInfo"
      :accessKeyId="accessKeyId"
      :prefix="uploadPath"
      :secretAccessKey="secretAccessKey"
      :bucketName="bucketName"
    ></FastUploader>
    <nut-infinite-loading
      v-if="!needSet"
      load-more-txt="No more bucket"
      class="file_list file_list_move"
      ref="listRef"
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMoreFun"
    >
      <div class="list_item" v-for="item in listData" @click="gotoFileList(item)">
        <div :class="['left_icon_box', item.checked ? 'is_checked' : '']">
          <img src="@/assets/home_bucket.png" alt="" />
        </div>
        <div class="name_box">
          <span>{{ item.domain || item.order_id }}</span>
        </div>
      </div>
    </nut-infinite-loading>
  </nut-popup>
</template>

<script setup>
  import { showDialog, showToast } from '@nutui/nutui';
  import loadingImg from '@/components/loadingImg/index.vue';
  import FastUploader from './fastUploader.vue';
  import settingIcon from '~icons/home/setting.svg';
  import CancelBoxIcon from '~icons/home/cancel-box.svg';
  import EditIcon from '~icons/home/edit.svg';
  import lightningIcon from '~icons/home/lightning.svg';
  import useOrderList from './useOrderList.ts';
  import useOrderInfoFast from './useOrderInfoFast.js';
  import FolderList from './folderList.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { set_bucket_file, get_bucket_file } from '@/api/amb.ts';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const { header, metadata, orderInfo, accessKeyId, secretAccessKey, getOrderInfo } = useOrderInfoFast();
  const { resetData, loadMore, isError, listData, hasMore, infinityValue, total } = useOrderList();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const setVisible = ref(false);
  const folderListShow = ref(false);
  const listRef = ref('');
  const bucketName = ref('');
  const needSet = ref(true);
  const order_uuid = ref('');
  const canSet = ref(true);
  const route = useRoute();
  const uploadPath = ref('');
  const router = useRouter();
  const popShow = ref(false);
  const checkBucket = computed(() => {
    return route.query.bucket || '';
  });

  const route_order_uuid = computed(() => {
    return route.query.order_uuid || '';
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
  const setBucket = async (item) => {
    console.log(item);
    bucketName.value = item.domain;
    await getOrderInfo(true, item.uuid);
    folderListShow.value = true;
  };
  const getRouteOrder = async () => {
    await getOrderInfo(true, route_order_uuid.value);
    bucketName.value = checkBucket.value;
  };

  const setBucketAndPath = async () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'setBucket',
    });
    try {
      await set_bucket_file({ domain: bucketName.value, file_path: uploadPath.value });
      getBucketAndPath();
    } catch {
      showToast.hide('setBucket');
      getBucketAndPath();
    }
  };
  const getBucketAndPath = () => {
    folderListShow.value = false;
    get_bucket_file()
      .then(async (res) => {
        if (res.code == 200) {
          bucketName.value = res.result.data.domain;
          uploadPath.value = res.result.data.file_path;
          if ([4, 5].includes(res.result.data.state)) {
            needSet.value = true;
            showToast.fail('This bucket has expired, please select a new bucket to upload.');
            return false;
          } else {
            setDefaultBucketAndPath();
            await getOrderInfo(true, res.result.data.uuid);
            needSet.value = false;
          }
        }
      })
      .finally(() => {
        showToast.hide('setBucket');
      });
  };
  const setDefaultBucketAndPath = () => {
    if (listData.value.length && !bucketName.value) {
      bucketName.value = listData.value.domain;
      uploadPath.value = 'NFT';
      setBucketAndPath();
    }
  };
  onMounted(async () => {});
  // watch(
  //   cloudCodeIsBind,
  //   async (val) => {
  //     if (val) {
  //       resetData();
  //       await loadMoreFun();
  //       await getBucketAndPath();
  //     }
  //   },
  //   { deep: true, immediate: true },
  // );
  router.beforeEach(() => {
    popShow.value = false;
  });
  watch(
    popShow,
    async (val) => {
      if (val) {
        resetData();
        await loadMoreFun();
        await getBucketAndPath();
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    needSet,
    async (val) => {
      resetData();
      await loadMoreFun();
    },
    { deep: true },
  );
  // onMounted(async () => {
  //   await getBucketAndPath();
  // });
</script>
<style lang="scss">
  .upload_set {
    background: #e9e9e9;
  }
</style>
<style lang="scss" scoped>
  .upload_btn {
    position: fixed;
    bottom: 150px;
    right: 50px;
    font-size: 80px;
    border-radius: 50%;
    padding: 10px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .set_icon {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 10rem;
    height: 1.8rem;
    svg {
      vertical-align: middle;
    }
  }
  :deep {
    .top_back2 {
      justify-content: flex-end;
    }
  }
  .list_item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // padding: 20px;
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
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    .edit_button {
      width: 1rem;
      height: 1.2rem;
      color: $main_blue;
      vertical-align: middle;
      cursor: pointer;
    }
    h2 {
      padding: 0 1rem;
    }
  }
  .file_list {
    max-height: 600px;
    width: 18rem;
    padding: 1rem;
    margin: 0 auto;
    margin-top: 1rem;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    background: #fff;
    border-radius: 1rem;
    overflow: auto;
    :deep {
      .nut-infinite__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-content: flex-start;
        grid-gap: 20px;
        // display: flex;
        // justify-content: space-between;
        // flex-wrap: wrap;
      }
      .nut-infinite__bottom {
        height: 2rem;
        line-height: 2rem;
      }
    }
    .list_item {
      height: unset;
      margin: 0.2rem 0;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      .name_box {
        margin: 0;
        width: unset;
      }
    }
  }
  .title {
    color: #000;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  :deep {
    .nut-form-item__label {
      // --nut-form-item-label-width: 10rem;
      // max-width: 10rem;
      font-size: 1rem;
    }
    .nut-input .input-text {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 500px) {
    .upload_btn {
      position: fixed;
      bottom: 100px;
      right: 50px;
      font-size: 80px;
      border-radius: 50%;
      padding: 10px;
      width: 80px;
      height: 80px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 1.5rem;
    }
    .file_list {
      max-height: 600px;
      min-width: 500px;
      width: 50%;
      margin-top: 1rem;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      background: #fcfcfd;
      border-radius: 1rem;
      overflow: auto;
      :deep {
        .nut-infinite__container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          justify-items: center;
          align-content: flex-start;
          grid-gap: 20px;
          // display: flex;
          // justify-content: space-between;
          // flex-wrap: wrap;
        }
        .nut-infinite__bottom {
          height: 2rem;
          line-height: 2rem;
        }
      }
      .list_item {
        height: unset;
        margin: 0.2rem 0;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        border: none;
        .name_box {
          margin: 0;
          width: unset;
        }
      }
    }
    .list_item {
      // padding: 20px;
      border-top: 1px solid #eee;
      cursor: pointer;

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
        font-size: 1.5rem;
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
    .bucket_box {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      .edit_button {
        width: 2rem;
        height: 2rem;
      }
    }
    .nut-button--normal {
      max-width: 200px;
      margin: 0 auto;
      --nut-button-default-font-size: 2rem;
      --nut-button-default-height: 4rem;
    }
    .set_icon {
      position: fixed;
      bottom: 1rem;
      width: 15rem;
      height: 2.8rem;
      --nut-button-default-font-size: 1.1rem;
      --nut-button-default-padding: 0.8rem;
      svg {
        vertical-align: middle;
      }
    }
  }
</style>
