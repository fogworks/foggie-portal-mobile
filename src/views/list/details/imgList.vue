<template>
  <div class="img-content" v-if="isReady">
    <div v-for="(item, index) in imgData" class="img-box">
      <p v-if="item.list.length" class="top-title">
        <nut-checkbox v-if="isCheckMode" v-model="item.checkAll" @change="(val) => handleCheckAllChange(val, item)">
          {{ item.time }}</nut-checkbox
        >
        <span v-else>{{ item.time }}</span>
      </p>
      <div class="img-item-box">
        <nut-checkbox-group
          :validate-event="false"
          v-model="imgCheckedData.value[item.dateId]"
          @change="(val) => handleCheckedItemsChange(val, item)"
        >
          <div
            :class="['img-item']"
            v-for="(img, index2) in item.list"
            @touchstart="emits('touchRow', item)"
            @touchmove="emits('touchmoveRow', item)"
            @touchend="emits('touchendRow', item)"
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
              scroll-container=".img-content"
              :preview-teleported="true"
              :teleported="true"
              :hide-on-click-modal="true"
              :initial-index="index2"
              fit="cover"
              :key="img.cid"
              :src="img.imgUrl"
            >
            </nut-image>
          </div>
        </nut-checkbox-group>
      </div>
    </div>
  </div>
  <div class="img-content" v-else>
    <nut-empty :image-size="200" description="No Data" />
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
  import { get_timeline } from '@/api';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import { oodFileList, GetFileListAll, GetCloudFileListAll } from '@/api/myFiles';
  import imgUrl from '@/assets/DMC_token.png';
  // import { isCloudCanUpload_Api } from '@/api/upload';
  let baseUrl = 'http://127.0.0.1';

  const imgCheckedData = reactive({
    value: {},
  });
  const emits = defineEmits(['update:checkedData', 'touchRow', 'touchmoveRow', 'touchendRow']);
  const props = defineProps({
    orderId: [String, Number],
    isCheckMode: Boolean,
  });
  const { orderId } = toRefs(props);
  const deviceData = inject('deviceData');
  const resetChecked = () => {
    imgCheckedData.value = {};
    refCheckAll();
  };
  const state = reactive({
    imgData: [
      {
        time: '2023-6-2',
        dateId: 'xx',
        list: [
          {
            name: 'xxxxxxxxxxxxxxxx',
            cid: 111,
            imgUrl,
          },
          {
            name: 'xxxxxxxxxxxxxxxx',
            cid: 112,
            imgUrl,
          },
          {
            name: 'xxxxxxxxxxxxxxxx',
            cid: 113,
            imgUrl,
          },
          {
            name: 'xxxxxxxxxxxxxxxx',
            cid: 114,
            imgUrl,
          },
          {
            name: 'xxxxxxxxxxxxxxxx',
            cid: 115,
            imgUrl,
          },
        ],
      },
    ],
  });
  const tableLoading = ref(false);
  const isReady = ref(true);
  const imgIndex = ref(0);
  const store = useUserStore();
  const uuid = computed(() => store.getUserInfo?.uuid || '');
  const deviceType = 3;
  const token = computed(() => {
    // return deviceData.sign;
    return '111';
  });
  const { imgData } = toRefs(state);
  const refCheckAll = () => {
    imgData.value.forEach((el) => {
      el.checkAll = false;
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
  const isCloud = computed(() => store.getters.isCloud);

  const getPreviewList = (data) => {
    return data.list.map((el) => el.imgUrlLarge);
  };
  const getTimeLine = (date = '') => {
    return new Promise((resolve, reject) => {
      const getMethod = (date) => {
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
        get_timeline({
          deviceData,
          token: token.value,
          interval,
          date,
          category: 1,
        })
          .then((res) => {
            if (res.contents) {
              const content = res.contents;
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
                    resolve();
                  }
                }
              }
              // content.forEach((el) => {
              //   if (el.count) {
              //     timeLine.value.push(el.date);
              //     if (el.date.length !== 10) {
              //       getMethod(el.date);
              //     } else {
              //       dateTimeLine.value.push(el.date);
              //       resolve();
              //     }
              //   }
              // });
            }
          })
          .catch(() => {
            reject();
          })
          .finally(() => {
            tableLoading.value = false;
          });
      };
      getMethod();
    });
  };
  const getReomteData = (scroll, prefix, reset = false, date = '', max_keys) => {
    tableLoading.value = true;
    let type = 'space';
    oodFileList(type, token.value, deviceData, prefix, scroll, 1, date, max_keys)
      .then((res) => {
        if (res && res.content) {
          initRemoteData(res, reset, date);
        } else {
          tableLoading.value = false;
        }
      })
      .catch(() => {
        tableLoading.value = false;
      });
  };
  const initRemoteData = (data, reset = false, dateKey = '') => {
    if (!data) {
      tableLoading.value = false;
      return;
    }
    if (data.err) {
      proxy.$notify({
        customClass: 'notify-warning',
        message: 'Failed to  retrieve data. Please try again later',
        position: 'bottom-left',
      });
    }
    if (reset) imgData.value = [];
    let content = data?.content?.map((el) => {
      let date = transferTime(el.lastModified);
      let isDir = false;
      const type = el.key.substring(el.key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(el, type, isDir);
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

    for (let j = 0; j < data?.content?.length; j++) {
      let date = transferUTCTime(data.content[j].lastModified);
      let isDir = false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = decodeURIComponent(data.content[j].key);

      if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 1];
      }
      let isPersistent = data.content[j].isPersistent;

      let item = {
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        fileType: 2,
        fullName: decodeURIComponent(data.content[j].key),
        key: data.content[j].key,
        idList: [
          {
            name: 'IPFS',
            code: data.content[j].isPin ? cid : '',
          },
          {
            name: 'CYFS',
            code: data.content[j].isPinCyfs ? file_id : '',
          },
        ],
        date,
        size: getfilesize(data.content[j].size),
        originalSize: data.content[j].size,
        status: cid || file_id ? 'Published' : '-',
        type: data.content[j].contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: url,
        imgUrlLarge: url_large,
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
        isPersistent,
        isPin: data.content[j].isPin,
        isPinCyfs: data.content[j].isPinCyfs,
      };
      tableData.value.push(item);
    }

    const target = imgData.value.find((el) => el.time == dateKey);
    if (target) {
      target.list = [...target.list, ...content];
      tableData.value = [...tableData.value, ...content];
    }
    console.log(tableData.value, 'tableDatatableData');
    if (data.isTruncated) {
      continuationToken.value = data.continuationToken;
    } else {
      continuationToken.value = '';
    }

    tableLoading.value = false;
    // if (activeSort.value) {
    //   const target = sortList.find((el) => el.key == activeSort.value);
    //   const { prop, order, key } = target;
    //   nextTick(() => {
    //     tableSort({ prop, order, key });
    //   });
    // }

    // tableSort({ prop: "date", order: 1, key: 1 });
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
          list: [],
        });
      }
      imgIndex.value++;
    } else {
      return false;
    }
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = list_prefix + '/';
      }
    }
    tableLoading.value = true;
    if (deviceType.value == 'space') {
      getReomteData(scroll, list_prefix, reset, date, max_keys);
    } else {
      let type = 'foggie';
      oodFileList(type, token.value, deviceData, list_prefix, scroll, 1, date, max_keys)
        .then((res) => {
          if (res && res.content) {
            initFileData(res, reset, date);
          }
        })
        .finally(() => (tableLoading.value = false));
    }
  };

  const initFileData = async (data, reset = false, date) => {
    // tableData.value = [];
    // let commonPrefixesItem = [];
    let contentItem = [];
    emits('update:checkedData', {});
    // fileTable.value?.clearSelection();
    contentItem = data?.content?.map((el) => {
      let date = transferTime(el.lastModified);
      let isDir = false;
      const type = el.key.substring(el.key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(el, type, isDir);

      let cid = el.cid;
      let file_id = el.fileId;

      let name = decodeURIComponent(el.key);
      // if (data.prefix) {
      //   name = name.split(data.prefix)[1];
      // }
      if (name.indexOf('/') > -1) {
        name = name.split('/')[name.split('/').length - 1];
      }

      return {
        fileType: 2,
        checked: false,
        isDir: isDir,
        name,
        fullName: decodeURIComponent(el.key),
        key: el.key,
        fileType: 2,
        idList: [
          {
            name: 'IPFS',
            code: cid,
          },
          {
            name: 'CYFS',
            code: file_id,
          },
        ],
        date,
        size: getfilesize(el.size),
        // status: "Published",
        status: cid || file_id ? 'Published' : '-',
        type: el.contentType,
        file_id: file_id,
        pubkey: cid,
        cid,
        imgUrl: url,
        imgUrlLarge: url_large,
        // share: getShareOptions(),
        share: {},
        isSystemImg,
        canShare: cid ? true : false,
      };
      // contentItem.push(item);
    });
    if (data.isTruncated) {
      continuationToken.value = data.continuationToken;
    } else {
      continuationToken.value = '';
    }
    if (data?.content?.length) {
      const target = imgData.value.find((el) => el.time == date);
      if (target) {
        target.list = contentItem;
        tableData.value = [...tableData.value, ...contentItem];
      }
    }
    // if (reset) {
    //   tableData.value = [...contentItem];
    // } else {
    //   tableData.value = [...tableData.value, ...contentItem];
    // }
    tableLoading.value = false;
  };

  const handleImg = (item, type, isDir) => {
    let imgHttpLink = '';
    let imgHttpLarge = '';
    type = type.toLowerCase();
    let isSystemImg = false;
    let cid = item.cid;
    let key = item.key;

    let ip = deviceData.rpc.split(':')[0];
    let port = deviceData.rpc.split(':')[1];
    let Id = deviceData.foggie_id;
    let peerId = deviceData.peer_id;
    if (type === 'png' || type === 'bmp' || type === 'gif' || type === 'jpeg' || type === 'ico' || type === 'jpg' || type === 'svg') {
      type = 'img';
      // imgHttpLink = `${location}/d/${ID}/${pubkey}?new_w=200`;
      // imgHttpLink = `${location}/object?pubkey=${pubkey}&new_w=${size}`;
      // let token = store.getters.token;

      imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
        deviceType.value == 'space' ? 'space' : 'foggie'
      }&token=${token.value}&thumb=true`;
      imgHttpLarge = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
        deviceType.value == 'space' ? 'space' : 'foggie'
      }&token=${token.value}`;

      // foggie://peerid/spaceid/cid
    } else if (type === 'mp4') {
      type = 'video';

      imgHttpLink = `/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
        deviceType.value == 'space' ? 'space' : 'foggie'
      }&token=${token.value}&thumb=true`;
    } else {
      isSystemImg = true;
      // imgHttpLink =
      //   theme === "light"
      //     ? require(`@/assets/logo-dog.svg`)
      //     : require(`@/assets/logo-dog-black.svg`);
    }
    if (isDir) {
      isSystemImg = true;
      // imgHttpLink =
      //   theme === "light"
      //     ? require(`@/assets/logo-dog.svg`)
      //     : require(`@/assets/logo-dog-black.svg`);
    }
    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  const init = async () => {
    await getTimeLine();
    isReady.value = true;
    // getFileList(
    //   "",
    //   breadcrumbList.prefix,
    //   false,
    //   dateTimeLine.value[imgIndex.value]
    // );
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
    item.checkAll = checkedCount === item.list.length;
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
      console.log(data, 'data');
      emits('update:checkedData', data);
    },
    {
      immediate: true,
      deep: true,
    },
  );

  watch(
    imgData,
    () => {
      console.log(imgData.value, 'imgDataimgData');
    },
    { deep: true },
  );
  onMounted(() => {
    // init();
    // nextTick(() => {
    //   refCheckAll();
    // });
    // scrollContainer.value = imgContentRef.value;
  });
  defineExpose({ resetChecked, refresh });
</script>

<style lang="scss" scoped>
  .img-content {
    height: calc(100% - 280px);
    padding: 0 10px;
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
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 10px;
      :deep {
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
