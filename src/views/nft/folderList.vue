<template>
  <div>
    <div class="rename_box move_box">
      <IconNewFolder class="new_icon" @click="newFolderShow = true"></IconNewFolder>
      <div
        v-if="movePrefix.length"
        class="top_back"
        @click="
          movePrefix.splice(-1);
          getFileList('', movePrefix, true);
        "
      >
        <p> {{ movePrefix.length ? movePrefix.slice(-1)[0] : '' }}</p>
      </div>
      <nut-infinite-loading
        load-more-txt="No more content"
        class="file_list file_list_move"
        v-model="infinityValue"
        :has-more="!!continuationToken2"
        @load-more="() => getFileList('', movePrefix, false)"
      >
        <div @click="toNextLevel(item)" :class="['list_item']" v-for="(item, index) in dirData" :key="index">
          <div :class="['left_icon_box']">
            <IconFolder></IconFolder>
          </div>
          <div class="name_box">
            <p>{{ item.name.split('/')[0] }}</p>
            <!-- <p>{{ item.date || '' }}</p> -->
          </div>
        </div>
      </nut-infinite-loading>
      <nut-button class="block_button" type="info" block @click="confirmSet">Confirm</nut-button>
    </div>
    <nut-popup
      teleport-disable
      v-if="newFolderShow"
      @closed="
        newFolderShow = false;
        newName = '';
      "
      position="bottom"
      closeable
      round
      :style="{ height: '500px' }"
      v-model:visible="newFolderShow"
    >
      <div class="rename_box">
        <IconFolder style="display: block; margin: 0 auto"></IconFolder>
        <nut-searchbar v-model="newName" :placeholder="'Please Input Folder Name'"></nut-searchbar>
        <nut-button class="block_button" type="info" block @click="confirmNew">Confirm</nut-button>
      </div>
    </nut-popup>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';
  import { showDialog, showToast } from '@nutui/nutui';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { poolUrl } from '@/setting.js';
  import IconFolder from '~icons/home/folder.svg';
  import IconNewFolder from '~icons/home/new_folder.svg';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  const emits = defineEmits(['setBucketAndPath', 'update:folderListShow', 'update:uploadPath', 'refreshList']);
  const props = defineProps({
    folderListShow: Boolean,
    uploadPath: String,
    header: Object,
    metadata: Object,
    orderInfo: Object,
    accessKeyId: String,
    secretAccessKey: String,
    bucketName: String,
  });
  const { bucketName, uploadPath, folderListShow, header, metadata, orderInfo, accessKeyId, secretAccessKey } = toRefs(props);
  const movePrefix = ref([]);
  const dirData = ref([]);
  const infinityValue = ref(false);
  const newFolderShow = ref(false);
  const tableLoading = ref(false);
  const newName = ref('');
  const continuationToken2 = ref('');
  const isError = ref(false);
  const confirmSet = () => {
    const targetObject = (val) => {
      if (movePrefix.value.length) {
        return movePrefix.value.join('/');
      } else {
        return '';
      }
    };
    emits('update:uploadPath', targetObject());
    emits('setBucketAndPath');
    emits('update:folderListShow', false);
  };
  let server = null;
  function getFileList(scroll, prefix, reset = false) {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'file_list',
    });
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = encodeURIComponent(list_prefix) + '/';
      }
    }
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
    console.log('list-object--header', header.value, metadata.value);
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix(list_prefix);
    let delimiter = '/';
    let categoryParam = '0';
    listObject.setDelimiter(delimiter);
    listObject.setEncodingType('');
    listObject.setMaxKeys(30);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('');
    listObject.setTags('');

    listObject.setCategory(categoryParam);
    listObject.setDate('');
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header.value);
    console.log('list-object--header', header.value, metadata.value);
    console.log('listObjectlistObject', listObject);
    requestReq.setRequest(listObject);
    server.listObjects(requestReq, metadata.value, (err, res) => {
      infinityValue.value = false;
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
        console.log(transferData, 'transferData,transferData');
        isError.value = false;
        initRemoteData(transferData, reset, '0');
      } else if (err) {
        showToast.hide('file_list');
        isError.value = true;
        console.log('err----', err);
      }
    });
  }
  const toNextLevel = (row) => {
    let long_name = movePrefix.value.length ? movePrefix.value?.join('/') + '/' + row.name : row.name;
    movePrefix.value = long_name.split('/').slice(0, -1);
    getFileList('', movePrefix.value, true);
  };
  const initRemoteData = async (data, reset = false, category) => {
    if (!data) {
      tableLoading.value = false;
      showToast.hide('file_list');
      return;
    }
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }
    if (reset) {
      dirData.value = [];
    }
    // if (!accessKeyId.value) {
    //   await getOrderInfo();
    // }
    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = data.commonPrefixes[i];
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.prefix === name && data.prefixpins[i]?.cid) {
          cur_cid = data.prefixpins[i].cid;
        }
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 0,
        fileType: 1,

        fullName: data.commonPrefixes[i],
        key: data.commonPrefixes[i],
        idList: [
          {
            name: 'IPFS',
            code: cur_cid,
          },
          {
            name: 'CYFS',
            code: '',
          },
        ],
        date: '-',
        size: '',
        status: '-',
        type: 'application/x-directory',
        file_id: '',
        pubkey: '',
        cid: cur_cid,
        imgUrl: '',
        imgUrlLarge: '',
        share: {},
        isSystemImg: false,
        canShare: false,
      };
      dirData.value.push(item);
    }
    if (data.isTruncated) {
      continuationToken2.value = data.continuationToken;
    } else {
    }
    tableLoading.value = false;
    showToast.hide('file_list');
  };
  const confirmNew = () => {
    if (!newName.value) {
      showToast.warn('Please enter a name');
      return false;
    }
    const folderNameRegex = /^[^\s\\\\/:*?"<>|]+(\.[^\s\\\\/:*?"<>|]+)?$/;
    if (!folderNameRegex.test(newName.value)) {
      showToast.warn("Incorrect name format. Please do not include special characters and do not end with the character '/'");

      return false;
    }
    const targetObject = () => {
      if (movePrefix.value.length) {
        return encodeURIComponent(movePrefix.value.join('/') + '/' + newName.value) + '/';
      } else {
        return encodeURIComponent(newName.value) + '/';
      }
    };
    if (targetObject().length > 1024) {
      showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
      return false;
    }
    console.log(bucketName.value, 'bucketName');
    // let ip = orderInfo.value.rpc.split(':')[0];
    // server = new grpcService.default.ServiceClient(`http://${ip}:7007`);
    let ip = `https://${bucketName.value}.${poolUrl}:7007`;
    server = new grpcService.default.ServiceClient(ip, null, null);

    let ProxFileInfo = new Prox.default.ProxFileInfo();
    ProxFileInfo.setHeader(header.value);
    ProxFileInfo.setKey(targetObject());
    ProxFileInfo.setContenttype('application/x-directory');
    ProxFileInfo.setSize(0);
    console.log(ProxFileInfo, 'ProxFileInfo');

    server.touchFile(ProxFileInfo, metadata.value, (err, data) => {
      if (data) {
        showToast.success('Create successful');
        newFolderShow.value = false;
        newName.value = '';
        getFileList('', movePrefix, true);
      } else {
        showToast.fail(err.message || 'Create failed');
      }
    });
  };
  onMounted(() => {
    getFileList('', movePrefix.value, true);
  });
</script>

<style lang="scss" scoped>
  .move_box {
    .new_icon {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
    }
    .top_back {
      cursor: pointer;

      margin-bottom: 10px;
      p {
        margin: 0 5px;
        color: #000;
      }
    }
    .file_list {
      max-height: 600px;
      overflow-y: auto;
      .list_item {
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
      }
      .left_icon_box {
        width: 80px;
        height: 80px;
        svg {
          width: 100px;
          height: 100px;
        }
      }
      .name_box {
        p {
          text-align: right;
          margin: 0;
          font-size: 30px;
        }
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
            font-size: 1.2rem;
            text-align: left;
          }
        }
        .right_more {
          width: 50px;
          height: 50px;
          color: #ccc;
        }
      }
    }
  }
  @media screen and (min-width: 500px) {
    .move_box {
      .top_back {
        margin-bottom: 10px;
        font-size: 2rem;
        p {
          margin: 0 5px;
        }
      }
      .file_list {
        max-height: 600px;
        overflow-y: auto;
        .name_box {
          p {
            text-align: right;
            margin: 0;
            font-size: 1rem;
          }
        }
        .list_item {
          padding: 5px 20px;
          border-top: 1px solid #eee;

          .type_icon {
            width: 60px;
            height: 60px;
          }
          .left_icon_box {
            width: 60px;
            height: 60px;
            svg,
            img {
              width: 60px;
              height: 60px;
            }
          }
          .name_box {
            width: calc(100% - 180px);
            margin-left: 30px;
            p:last-child {
              margin-top: 5px;
              color: #a7a7a7;
              font-size: 1.2rem;
              text-align: left;
            }
          }
        }
      }
    }
  }
</style>
