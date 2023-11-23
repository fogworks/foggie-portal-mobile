<template>
  <div>
    <div class="img-content" v-if="isReady">
      <div v-if="imgData.length" v-for="(item, index) in imgData" class="img-box">
        <p v-if="item.list.length" class="top-title">
          <nut-checkbox
            :indeterminate="item.indeterminate"
            v-if="isCheckMode"
            v-model="item.checkAll"
            @change="(val) => handleCheckAllChange(val, item)"
          >
            {{ item.time }}</nut-checkbox
          >
          <span v-else>{{ item.time }}</span>
        </p>
        <nut-infinite-loading
          load-more-txt="No more content"
          v-model="infinityValue"
          :has-more="!!continuationToken"
          @load-more="getFileList"
          class="img-item-box"
        >
          <nut-checkbox-group
            :validate-event="false"
            v-model="imgCheckedData.value[item.dateId]"
            @change="(val) => handleCheckedItemsChange(val, item)"
          >
            <div
              :class="['img-item']"
              v-for="(img, index2) in item.list"
              @touchstart="emits('touchRow', img)"
              @touchmove="emits('touchmoveRow', img)"
              @touchend="emits('touchendRow', img)"
            >
              <div :class="['mask', isCheckMode ? 'isChecking' : '']">
                <nut-checkbox
                  :class="['mask-checkbox', isCheckMode && itemChecked(img.cid, item.dateId) ? 'itemChecked' : '']"
                  :key="img.cid"
                  :label="img.cid"
                ></nut-checkbox>
              </div>
              <nut-image
                :class="[isCheckMode && itemChecked(img.cid, item.dateId) ? 'imageItemChecked' : '']"
                fit="cover"
                :key="img.cid"
                :src="img.imgUrl"
              >
                <template #loading>
                  <Loading width="16px" height="16px" name="loading" />
                </template>
              </nut-image>
            </div>
          </nut-checkbox-group>
        </nut-infinite-loading>
      </div>
      <nut-empty v-else :image-size="200" description="No Data" image="error" />
    </div>
    <div class="img-content" v-else>
      <nut-empty :image-size="200" description="No Data" image="error" />
    </div>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
  };
</script>
<script setup>
  import { toRefs, ref, reactive, nextTick, watch, onMounted, computed, inject } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import { showToast } from '@nutui/nutui';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from './useOrderInfo.js';
  import imgUrl from '@/assets/DMC_token.png';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { poolUrl } from '@/setting.js';

  let server;
  // import { isCloudCanUpload_Api } from '@/api/upload';
  const { header, metadata, deviceType, orderInfo, bucketName, getOrderInfo } = useOrderInfo();
  const imgCheckedData = reactive({
    value: {},
  });
  const isMobileOrder = inject('isMobileOrder');
  const emits = defineEmits(['update:checkedData', 'touchRow', 'touchmoveRow', 'touchendRow']);
  const props = defineProps({
    orderId: [String, Number],
    isCheckMode: Boolean,
  });
  const handleImg = inject('handleImg');
  const { orderId } = toRefs(props);
  const resetChecked = () => {
    imgCheckedData.value = {};
    refCheckAll();
  };
  const infinityValue = ref(false);
  const state = reactive({
    imgData: [],
  });
  const tableLoading = ref(false);
  const isReady = ref(false);
  const imgIndex = ref(0);
  const store = useUserStore();
  const uuid = computed(() => store.getUserInfo?.uuid || '');
  const { imgData } = toRefs(state);
  const refCheckAll = () => {
    imgData.value.forEach((el) => {
      el.checkAll = false;
      el.indeterminate = false;
    });
  };
  const itemChecked = (cid, pid) => {
    if (imgCheckedData.value?.[pid]?.indexOf(cid) > -1) {
      return true;
    } else {
      return false;
    }
  };
  const timeLine = ref([]);
  const dateTimeLine = ref([]);
  const continuationToken = ref('');
  const tableData = ref([]);
  const getTimeLine = () => {
    return new Promise((resolve, reject) => {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
        id: 'img_time_line',
      });
      const getMethod = (date = '') => {
        let interval = 'year';
        if (!date) {
          interval = 'year';
        } else if (date.length == 4) {
          // || date.length == 7 || date.length == 6
          interval = 'month';
        } else {
          interval = 'day';
        }
        tableLoading.value = true;
        // let ip = orderInfo.value.rpc.split(':')[0];
        // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
        let ip = `https://${bucketName.value}.${poolUrl}:7007`;
        server = new grpcService.default.ServiceClient(ip, null, null);

        let ProxTimeLine = new Prox.default.ProxTimeLine();
        ProxTimeLine.setHeader(header);
        ProxTimeLine.setInterval(interval);
        ProxTimeLine.setDate(date);
        ProxTimeLine.setCategory(1);
        server.getTimeLine(ProxTimeLine, metadata.value, (err, data) => {
          if (data) {
            const content = data.getContentsList().map((el) => {
              return {
                date: el.getDate(),
                count: el.getCount(),
              };
            });
            if (!content.length) {
              showToast.hide('img_time_line');
            }
            for (let k = content.length - 1; k >= 0; k--) {
              if (content[k].count) {
                timeLine.value.push(content[k].date);
                if (content[k].date.length !== 10) {
                  getMethod(content[k].date);
                } else {
                  // dateTimeLine.value.push(content[k].date);
                  dateTimeLine.value.push({
                    date: content[k].date,
                    count: content[k].count,
                  });
                  tableLoading.value = false;
                  resolve(true);
                }
              }
            }
          } else {
            reject();
          }
        });
      };
      getMethod();
    });
  };
  const getFileList = function (scroll, prefix, reset = false, date = '') {
    let target = '';
    let max_keys = '';
    target = imgData.value.find((el) => el.time == date);
    if (target) return false;
    if (dateTimeLine.value[imgIndex.value]) {
      date = dateTimeLine.value[imgIndex.value].date;
      max_keys = dateTimeLine.value[imgIndex.value].count;
      if (!target) {
        imgData.value.push({
          time: date,
          dateId: date,
          indeterminate: false,
          list: [],
        });
      }
      imgIndex.value++;
    } else {
      return false;
    }
    let list_prefix = '';
    tableLoading.value = true;
    if (deviceType.value == 'space' || deviceType.value == 3) {
      getReomteData(scroll, list_prefix, reset, date, max_keys);
    } else {
    }
  };
  const getReomteData = (scroll, prefix, reset = false, date = '', max_keys) => {
    tableLoading.value = true;
    let type = 'space';
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix('');
    listObject.setDelimiter('');
    listObject.setEncodingType('');
    listObject.setMaxKeys(100);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('');
    listObject.setTags('');
    listObject.setCategory(1);
    listObject.setDate(date);
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header);
    requestReq.setRequest(listObject);
    server.listObjects(requestReq, metadata.value, (err, res) => {
      if (res) {
        const transferData = {
          commonPrefixes: res.getCommonprefixesList(),
          content: res.getContentList().map((el) => {
            return {
              key: el.getKey(),
              etag: el.getEtag(),
              lastModified: el.getLastmodified(),
              size: el.getSize(),
              contentType: el.getContenttype(),
              cid: el.getCid(),
              fileId: el.getFileid(),
              isPin: el.getIspin(),
              isPinCyfs: el.getIspincyfs(),
              pinExp: el.getPinexp(),
              CyfsExp: el.getCyfsexp(),
              OOD: el.getOod(),
              isPersistent: el.getIspersistent(),
              category: el.getCategory(),
              tags: el.getTags(),
            };
          }),
          continuationToken: res.getContinuationtoken(),
          isTruncated: res.getIstruncated(),
          maxKeys: res.getMaxkeys(),
          nextMarker: res.getNextmarker(),
          prefix: res.getPrefix(),
          prefixpins: res.getPrefixpinsList(),
        };
        console.log(transferData, 'transferData');

        initRemoteData(transferData, reset, date);
      } else if (err) {
        tableLoading.value = false;

        console.log('err----', err);
      }
    });
  };
  const initRemoteData = async (data, reset = false, dateKey = '') => {
    if (!data) {
      tableLoading.value = false;
      return;
    }
    if (data.err) {
      showToast.warn('Failed to  retrieve data. Please try again later');
    }
    // let dir = breadcrumbList.prefix.join('/');
    let dir = '';
    if (reset) imgData.value = [];
    let promiseArray = data?.content?.map(async (el, index) => {
      let date = transferTime(el.lastModified);
      let isDir = false;
      const type = el.key.substring(el.key.lastIndexOf('.') + 1);
      const imgData2 = await handleImg(el, type, isDir);
      const url = imgData2.imgHttpLink;
      const isSystemImg = imgData2.isSystemImg;
      const url_large = imgData2.imgHttpLarge;
      let cid = el.cid;
      let file_id = el.fileId;

      let name = decodeURIComponent(el.key);
      if (name.indexOf('/') > -1) {
        name = name.split('/')[name.split('/').length - 1];
      }
      let isPersistent = el.isPersistent;

      let item = {
        fileType: 2,
        isDir: isDir,
        name,
        fullName: decodeURIComponent(el.key),
        key: name,
        idList: [
          {
            name: 'IPFS',
            code: el.isPin ? cid : '',
          },
          {
            name: 'CYFS',
            code: el.isPinCyfs ? file_id : '',
          },
        ],
        date,
        size: getfilesize(el.size),
        status: cid || file_id ? 'Published' : '-',
        type: el.contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: url,
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
      };
      return item;
    });
    let content = await Promise.all(promiseArray);

    const target = imgData.value.find((el) => el.time == dateKey);
    console.log(target, 'target');

    if (target) {
      console.log(content, 'content');
      target.list = [...target.list, ...content];
      tableData.value = [...tableData.value, ...content];
    }
    console.log(tableData.value, 'tableDatatableData');
    if (data.isTruncated) {
      continuationToken.value = data.continuationToken;
    } else {
      continuationToken.value = '';
    }
    showToast.hide('img_time_line');
    tableLoading.value = false;
  };
  const init = async () => {
    await getOrderInfo();
    await getTimeLine();
    isReady.value = true;
  };
  const refresh = async () => {
    timeLine.value = [];
    dateTimeLine.value = [];
    imgData.value = [];
    imgCheckedData.value = {};
    isReady.value = false;
    imgIndex.value = 0;
    await init();
    nextTick(() => {
      isReady.value = true;
    });
  };
  const handleCheckAllChange = (val, item) => {
    imgCheckedData.value[item.dateId] = val ? item.list.map((el) => el.cid) : [];
  };
  const handleCheckedItemsChange = (val, item) => {
    const checkedCount = val.length;
    console.log(val, 'val');
    console.log(item.list.length, 'item.list.length');
    if (checkedCount === item.list.length) {
      item.indeterminate = false;
      item.checkAll = true;
    } else if (val.length && val.length < item.list.length) {
      item.indeterminate = true;
    } else {
      item.indeterminate = false;
      item.checkAll = false;
    }
  };
  watch(
    imgCheckedData,
    (val) => {
      let data = [];
      Object.keys(val.value).forEach((key) => {
        val.value[key].forEach((el) => {
          let target = tableData.value.find((item) => item.cid == el);
          target && data.push(target);
        });
      });
      emits('update:checkedData', data);
    },
    {
      immediate: true,
      deep: true,
    },
  );

  watch(
    isReady,
    (val) => {
      console.log(val);
      getFileList();
    },
    { deep: true },
  );
  onMounted(async () => {
    await getOrderInfo();
    init();
    // nextTick(() => {
    //   refCheckAll();
    // });
    // scrollContainer.value = imgContentRef.value;
  });
  defineExpose({ resetChecked, refresh });
</script>

<style>
  #app {
    background: #fff;
  }
</style>
<style lang="scss" scoped>
  .img-content {
    // height: calc(100% - 320px);
    padding: 10px;
    overflow-y: auto;
    :deep {
      .nut-checkbox__icon {
        color: $main_blue;
        path {
          fill-opacity: 1;
        }
      }
    }
    .img-box {
      .top-title {
        position: sticky;
        top: 0;
        z-index: 999;
        background-color: var(--bg-color);
        text-align: left;
      }
      .img-name {
        width: 80%;
        display: inline-block;
        font-size: 12px;
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .img-item-box {
      height: calc(100vh - 290px);
      overflow: auto;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 10px;
      :deep {
        .nut-infinite__container {
          width: 100%;
        }
        .nut-checkbox-group {
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(4, 1fr);
          justify-items: center;
          width: 100%;
        }
      }
      .img-item {
        position: relative;
        width: 150px;
        height: 150px;
        // margin: 0 10px 10px 0;
        .mask {
          display: none;
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;

          .itemChecked {
            display: block;
          }
          &.isChecking {
            display: block;
            height: 100%;
            cursor: pointer;
            :deep {
              .nut-checkbox {
                width: 100%;
                height: 100%;
                display: block;
              }
              .nut-icon {
                padding: 10px;
              }
            }
          }

          :deep {
            .nut-checkbox {
              position: absolute;
              left: 0;
            }
            .nut-checkbox__input {
              position: absolute;
              left: 5px;
              top: 10px;
            }
            .nut-checkbox__label {
              display: none;
            }
          }
        }
        .imageItemChecked {
          padding: 20px;
          background: #74c6ff8c;
        }
      }
      :deep {
        .nut-image {
          width: 100%;
          height: 100%;
          padding: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
<style lang="scss">
  .more-list {
    .el-dropdown-menu__item {
      justify-content: flex-start !important;
    }
  }
  .el-image-viewer__mask {
    opacity: 0.8;
  }
  .el-loading-mask {
    background: transparent;
    z-index: 1;
  }
</style>
