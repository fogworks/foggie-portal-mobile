<template>
  <Teleport to="body">
    <nut-drag class="button_drag" attract v-if="!popShow">
      <nut-button class="upload_btn" type="primary" @click="popShow = !popShow">
      <IconPlus></IconPlus>
      </nut-button>
    </nut-drag>
  </Teleport>
  <Teleport to="body">
    <nut-popup closeable position="bottom" :style="{ height: '100%' }" v-model:visible="popShow">
      <div class="bucket_box">
        <p style="text-align: center; font-size: 1.5rem; font-weight: 600">Quick Upload</p>
        <p class="title" v-if="listData.length || bucketName">
          <span>
            CUSTOM UPLOAD PATH
          </span>
          <div>
            <span>
              {{ bucketName }}/{{ uploadPath }}
            </span>
            <EditIcon v-if="!needSet && canSet" class="edit_button" type="primary" @click="needSet = !needSet"></EditIcon>
            <CancelBoxIcon v-else-if="needSet && canSet" class="edit_button" type="primary" @click="getBucketAndPath">
            </CancelBoxIcon>
          </div>
        </p>
        <template v-if="needSet && canSet">
          <p class="title2">Setting up the upload bucket and directory</p>
          <nut-searchbar v-if="allTotal>10&&!folderListShow" v-model="keyWord" placeholder="Search by Bucket Name" clearable class="my_top_search">
            <template #rightin>
              <Search />
            </template>
          </nut-searchbar>
          <nut-infinite-loading v-if="!folderListShow" :load-more-txt="listData.length ? '' : 'No available buckets, please purchase order first!'" class="file_list file_list_move"
            ref="listRef" v-model="infinityValue" :has-more="hasMore" @load-more="loadMoreFun">
            <div class="list_item" v-for="item in listData" @click="setBucket(item)">
              <div :class="['left_icon_box', item.checked ? 'is_checked' : '']">
                <img src="@/assets/home_bucket.png" alt="" />
              </div>
              <div class="name_box">
                <span>{{ item.domain || item.order_id }}</span>
              </div>
            </div>
          </nut-infinite-loading>
          <FolderList v-else @setBucketAndPath="setBucketAndPath" v-model:uploadPath="uploadPath"
            v-model:folderListShow="folderListShow" :header="header" :metadata="metadata" :accessKeyId="accessKeyId"
            :secretAccessKey="secretAccessKey" :bucketName="bucketName"></FolderList>
        </template>
      </div>
      <FastUploader v-if="!needSet && bucketName" @getRouteOrder="getRouteOrder" @setBucketAndPath="setBucketAndPath"
        v-model:canSet="canSet" :header="header" :metadata="metadata" :orderInfo="orderInfo" :accessKeyId="accessKeyId"
        :prefix="uploadPath" :secretAccessKey="secretAccessKey" :bucketName="bucketName"></FastUploader>
      <p class="title2" v-if="!needSet">Select existing file casting</p>
      <nut-searchbar v-if="allTotal>10&&!needSet" v-model="keyWord" placeholder="Search by Bucket Name" clearable class="my_top_search">
        <template #rightin>
          <Search @click="getList"/>
        </template>
      </nut-searchbar>
      <nut-infinite-loading v-if="!needSet"
        :load-more-txt="listData.length ? '' : 'No available buckets, please purchase order first!'"
        class="file_list file_list_move" ref="listRef" v-model="infinityValue" :has-more="hasMore"
        @load-more="loadMoreFun">
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
  </Teleport>
</template>

<script setup>
import { Search } from '@nutui/icons-vue';
import { showDialog, showToast } from '@nutui/nutui';
import loadingImg from '@/components/loadingImg/index.vue';
import FastUploader from './fastUploader.vue';
import settingIcon from '~icons/home/setting.svg';
import CancelBoxIcon from '~icons/home/cancel-box.svg';
import EditIcon from '~icons/home/edit.svg';
import lightningIcon from '~icons/home/lightning.svg';
import IconPlus from '~icons/home/plus.svg';
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
const isHistory = ref(false)
const allTotal=ref(0)
const keyWord=ref('')
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
    is_domain: 1,
    electronic_type: '0',
    domain:keyWord.value
  };
  await loadMore([0, 1, 2, 3, 6], '', '', '', postData);
  if (!keyWord.value) {
    allTotal.value=total.value
  }
  nextTick(() => {
    if (hasMore.value && listRef?.value?.$el?.clientHeight >= listRef?.value?.$el?.scrollHeight) {
      loadMoreFun();
    }
  });
};
const getList = async () => {
  resetData();
  await loadMoreFun();
}
const gotoFileList = (item) => {
  router.push({
    name: 'listDetails',
    query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, income: item.income, mintType: route.query.mintType || '0' },
  });
};
const setBucket = async (item) => {
  console.log(item);
  bucketName.value = item.domain;
  keyWord.value=''
  folderListShow.value = true;
  try {
    await getOrderInfo(true, item.uuid);
  } catch {
    folderListShow.value = false;
  }
};
const getRouteOrder = async () => {
  await getOrderInfo(true, route_order_uuid.value);
  bucketName.value = checkBucket.value;
};

const setBucketAndPath = async (isAuto = false) => {
  showToast.loading('Loading', {
    cover: true,
    customClass: 'app_loading',
    icon: loadingImg,
    loadingRotate: false,
    id: 'setBucket',
  });
  try {
    await set_bucket_file({ domain: bucketName.value, file_path: uploadPath.value });
    if (isAuto) {
      showToast.text(`has been automatically set up for you to upload to ${bucketName.value}/${uploadPath.value}`)
    }
    getBucketAndPath();
  } catch {
    showToast.hide('setBucket');
    getBucketAndPath();
  }
};
const getBucketAndPath = () => {
  folderListShow.value = false;
  showToast.loading('Loading', {
    cover: true,
    customClass: 'app_loading',
    icon: loadingImg,
    loadingRotate: false,
    id: 'setBucket',
  });
  get_bucket_file()
    .then(async (res) => {
      if (res.code == 200) {
        bucketName.value = res.result.data.domain;
        uploadPath.value = res.result.data.file_path;
        if ([4, 5].includes(res.result.data.state)) {
          needSet.value = true;
          isHistory.value = true
          if (popShow.value) {
            // showToast.fail('The currently set fast upload bucket is no longer available, select the bucket and directory again to continue to use the fast upload function.');
          }
          showToast.hide('setBucket');
          return false;
        } else {
          isHistory.value = false
          setDefaultBucketAndPath();
          if (res.result.data.uuid) {
            await getOrderInfo(true, res.result.data.uuid);
          }
          needSet.value = false;
        }
      }
    })
    .finally(() => {
      showToast.hide('setBucket');
    });
};
const setDefaultBucketAndPath = (isAuto = false) => {
  if (isAuto) {
    if (listData.value.length) {
      bucketName.value = listData.value[0].domain;
      uploadPath.value = 'NFT';
      setBucketAndPath(isAuto);
    } else {
      showToast.text("You don't have a bucket available, please set the bucket name for the order or require space and set the bucket name.")
    }
  } else if (listData.value.length && !bucketName.value) {
    bucketName.value = listData.value[0].domain;
    uploadPath.value = 'NFT';
    setBucketAndPath();
  }
};
router.beforeEach(() => {
  popShow.value = false;
});
watch(
  needSet,
  async (val) => {
    keyWord.value=''
    resetData();
    await loadMoreFun();
    if (listData.value.length == 1&&val) {
      bucketName.value = listData.value[0].domain;
      uploadPath.value = '';
      folderListShow.value = true;
      try {
          await getOrderInfo(true, listData.value[0].uuid);
      } catch {
        folderListShow.value = false;
      }
    }
  },
  { deep: true },
);
watch(popShow, async (val) => {
  if (val && isHistory.value) {
    resetData();
    await loadMoreFun();
    setDefaultBucketAndPath(true)
  }
}, { deep: true })
watch(cloudCodeIsBind, async (val) => {
  if (val) {
    resetData();
    await loadMoreFun();
    await getBucketAndPath();
  }

}, { deep: true, immediate: true });
onMounted(async () => {

});
</script>
<style lang="scss">
.upload_set {
  background: #e9e9e9;
}
</style>
<style lang="scss" scoped>
.button_drag{
  right: 0;
  bottom: 100px;
}
.upload_btn {
  // position: fixed;
  // bottom: 150px;
  // right: 50px;
  font-size: 80px;
  border-radius: 50%;
  padding: 10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 1000;
  color:#fff;

 svg, img {
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
    width: 2rem;
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
  margin: 1rem auto;
  width: 18rem;
  color: #000;
  font-size: 0.8rem;
  text-align: left;
  margin-bottom: 1rem;

  >span {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #ccc;
    border-radius: 0.8rem;

    span {
      display: block;
      margin-right: 1rem;
      font-size: 1rem;
      color: green;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    svg {
      width: 2rem;
      height: 1.2rem;
    }
  }
}

.title2 {
  width: 18rem;
  margin: 1rem auto;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
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
