<template>
  <div class="fileList_content">
    <nut-popup position="top" round pop-class="type_check_pop" v-model:visible="showTypeCheckPop">
      <!-- <p class="cate_title">Classifications</p> -->
      <div class="type_check_box">
        <div class="type_item" @click="switchType(0)">
          <div class="svg_box">
            <IconAllCate></IconAllCate>
          </div>
          <p>All</p>
        </div>
        <div class="type_item" @click="switchType(3)">
          <div class="svg_box">
            <IconAudio></IconAudio>
          </div>
          <p>Audio</p>
        </div>
        <div class="type_item" @click="switchType(1)">
          <div class="svg_box">
            <IconImage></IconImage>
          </div>
          <p>Images</p>
        </div>
        <div class="type_item" @click="switchType(4)">
          <div class="svg_box">
            <IconDocument></IconDocument>
          </div>
          <p>Documents</p>
        </div>
        <div class="type_item" @click="switchType(2)">
          <div class="svg_box">
            <IconVideo></IconVideo>
          </div>
          <p>Video</p>
        </div>
      </div>
    </nut-popup>
    <nut-sticky>
      <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header']">
        <div style="display: flex">
          <template v-if="!prefix.length">
            <div class="top_back" @click="router.go(-1)"> </div>
            <span>
              {{ fileTypeText[category] }}
            </span>
            <TriangleUp
              @click="showTypeCheckPop = !showTypeCheckPop"
              :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
            ></TriangleUp>
          </template>
          <template v-else>
            <div class="top_back" @click="prefix.splice(-1)"> </div>
            <span>
              {{ prefix.at(-1) || '' }}
            </span>
          </template>
        </div>
      </div>
      <div class="search_bar" v-if="!isCheckMode && category !== 1">
        <IconNewFolder
          @click="
            isNewFolder = true;
            renameShow = true;
          "
          v-show="category == 0"
          class="new_folder"
        ></IconNewFolder>
        <nut-searchbar @clear="doSearch('', [], true)" placeholder="Search By Name" v-model="keyWord">
          <template #rightin> <Search2 @click="doSearch('', [], true)" color="#0a7dd2" /> </template>
        </nut-searchbar>
      </div>
      <div class="check_top" v-else-if="isCheckMode">
        <span @click="selectAll">{{ selectArr.length == tableData.length ? 'UnSelect' : 'Select' }} All</span>
        <span class="checked_num">{{ selectArr.length }} items selected</span>
        <span @click="cancelSelect">Cancel</span>
      </div>
    </nut-sticky>
    <nut-infinite-loading
      v-if="category !== 1"
      class="file_list"
      v-model="infinityValue"
      :has-more="!!continuationToken"
      @load-more="loadMore"
    >
      <div
        :class="['list_item', item.checked ? 'row_is_checked' : '']"
        v-for="(item, index) in tableData"
        :key="index"
        @touchstart.prevent="touchRow(item, $event)"
        @touchmove.prevent="touchmoveRow(item, $event)"
        @touchend.prevent="touchendRow(item, $event)"
      >
        <div :class="['left_icon_box', isCheckMode ? 'left_checkMode' : '', item.checked ? 'is_checked' : '']">
          <img src="@/assets/svg/home/ok-white.svg" class="ok_icon" v-if="item.checked" alt="" />
          <template v-else>
            <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
            <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
            <img v-else-if="item.category == 4" src="@/assets/svg/home/document.svg" alt="" />
            <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
            <img v-else src="@/assets/svg/home/file.svg" alt="" />
          </template>
        </div>
        <div class="name_box">
          <p>{{ item.isDir ? item.name.slice(0, item.name.length - 1) : item.name }}</p>
          <p>{{ item.date || '' }}</p>
        </div>
        <IconMore v-show="!isCheckMode" class="right_more" @click.stop="showAction(item)"></IconMore>
      </div>
    </nut-infinite-loading>
    <ImgList
      ref="imgListRef"
      :orderId="route.query.id"
      v-model:isCheckMode="isCheckMode"
      v-model:checkedData="imgCheckedData"
      @cancelSelect="cancelSelect"
      @selectAll="selectAll"
      @touchRow="touchRow"
      @touchmoveRow="touchmoveRow"
      @touchendRow="touchendRow"
      v-else
    ></ImgList>
    <!-- checkbox action -->
    <nut-tabbar
      v-if="isCheckMode"
      @tab-switch="tabSwitch"
      :class="['bottom_action', selectArr.length ? 'canAction' : '']"
      bottom
      safe-area-inset-bottom
      placeholder
    >
      <nut-tabbar-item tab-title="Share" :class="[selectArr.length > 1 ? 'is-disable' : '']">
        <template #icon>
          <IconShare :color="selectArr.length == 1 ? '#fff' : '#ffffff5c'"></IconShare>
          <!-- <img :src="props.active ? icon.active : icon.unactive" alt="" /> -->
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="Rename" :class="[selectArr.length > 1 ? 'is-disable' : '']">
        <template #icon="props">
          <IconRename :color="selectArr.length == 1 ? '#fff' : '#ffffff5c'"></IconRename>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="Move">
        <template #icon="props">
          <IconMove :color="selectArr.length ? '#fff' : '#ffffff5c'"></IconMove>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="Download">
        <template #icon="props">
          <IconDownload :color="selectArr.length ? '#fff' : '#ffffff5c'"></IconDownload>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="Delete">
        <template #icon="props">
          <IconDelete :color="selectArr.length ? '#fff' : '#ffffff5c'"></IconDelete>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
    <!-- single action -->
    <nut-action-sheet class="action_pop" v-model:visible="showActionPop">
      <div class="custom-content">
        <p> <IconFolder></IconFolder> {{ chooseItem.name }}</p>
        <ul>
          <li v-if="!chooseItem.isDir && showActionBtn" @click="handlerClick('share')"><IconShare></IconShare> Share</li>
          <li @click="handlerClick('rename')"><IconRename></IconRename> Rename</li>
          <li @click="handlerClick('move')"><IconMove></IconMove> Move</li>
          <li @click="handlerClick('download')"><IconDownload></IconDownload>Download</li>
          <li @click="handlerClick('delete')"><IconDelete></IconDelete>Delete</li>
        </ul>
        <div class="cancel_btn" @click="showActionPop = false"> Cancel </div>
      </div>
    </nut-action-sheet>
    <!-- rename / newFolder -->
    <nut-popup
      @closed="
        isNewFolder = false;
        newName = '';
      "
      position="bottom"
      closeable
      round
      :style="{ height: '90%' }"
      v-model:visible="renameShow"
    >
      <div class="rename_box">
        <IconFolder></IconFolder>
        <p v-if="!isNewFolder"> {{ chooseItem.name ? chooseItem.name.split('/')[0] : '' }}</p>
        <nut-searchbar v-model="newName" :placeholder="isNewFolder ? 'Please Input Folder Name' : 'Please Input New Name'"></nut-searchbar>
        <nut-button type="info" block @click="confirmRename">Confirm</nut-button>
      </div>
    </nut-popup>
    <!-- move -->
    <nut-popup position="bottom" closeable round :style="{ height: '90%' }" v-model:visible="moveShow">
      <div class="rename_box move_box">
        <IconFolder></IconFolder>
        <div
          v-if="movePrefix.length"
          class="top_back"
          @click="
            movePrefix.splice(-1);
            doSearch('', movePrefix, true);
          "
        >
          <p> {{ movePrefix.length ? movePrefix.slice(-1)[0] : '' }}</p>
        </div>
        <nut-infinite-loading
          v-if="category !== 1"
          class="file_list"
          v-model="infinityValue"
          :has-more="!!continuationToken2"
          @load-more="loadMore"
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
        <nut-button type="info" block @click="confirmMove">Move to current folder</nut-button>
      </div>
    </nut-popup>
    <!-- share -->
    <nut-popup @closed="isReady = false" position="bottom" closeable round :style="{ height: '200px' }" v-model:visible="showShareDialog">
      <div v-if="!isReady" class="rename_box move_box">
        <nut-cell style="margin-top: 50px" title="Access Period" :desc="desc" @click="periodShow = true"></nut-cell>
        <nut-popup position="bottom" v-model:visible="periodShow">
          <nut-picker
            v-model="periodValue"
            :columns="options"
            title="Select expiration time"
            @confirm="confirmPeriod"
            @cancel="periodShow = false"
          >
          </nut-picker>
        </nut-popup>
        <nut-button type="info" block @click="confirmShare">Confirm</nut-button>
      </div>
      <div class="share_info_box" v-else>
        <div v-if="shareRefContent.ipfsStr">
          <img @click="copyLink(shareRefContent.ipfsStr)" src="@/assets/ipfs.png" alt="" />
          IPFS Link
          <!-- <IconCopy @click="copyLink(shareRefContent.ipfsStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconHttp @click="copyLink(shareRefContent.httpStr)"></IconHttp>
          HTTP Link
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconTwitter @click="shareTwitter(shareRefContent.httpStr)"></IconTwitter>
          Twitter
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconFacebook @click="shareFacebook(shareRefContent.httpStr)"></IconFacebook>
          Facebook
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
      </div>
    </nut-popup>

    <nut-overlay overlay-class="detail_over" v-model:visible="detailShow" :close-on-click-overlay="false">
      <IconArrowLeft @click="detailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
      <div class="middle_img">
        <nut-image :src="imgUrl || detailImg" fit="contain" postion="center" />
      </div>
      <div class="bottom_action">
        <div>
          <IconShare @click="handlerClick('share')"></IconShare>
          <p>Share</p>
        </div>
        <div>
          <IconDownload @click="handlerClick('download')"></IconDownload>
          <p>Download</p>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script setup lang="ts">
  import detailImg from '@/assets/fog-works.png';
  import IconTwitter from '~icons/home/twitter.svg';
  import IconFile from '~icons/bxs/file.svg';
  import IconFacebook from '~icons/devicon/facebook.svg';
  import IconNewFolder from '~icons/home/new_folder.svg';
  import IconAllCate from '~icons/home/all-cate.svg';
  import IconAudio from '~icons/home/audio.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconVideo from '~icons/home/video.svg';
  import IconOk from '~icons/home/ok.svg';
  import IconFolder from '~icons/home/folder.svg';
  import IconShare from '~icons/home/share.svg';
  import IconRename from '~icons/home/rename.svg';
  import IconMove from '~icons/home/move.svg';
  import IconDownload from '~icons/home/download.svg';
  import IconDelete from '~icons/home/delete.svg';
  import IconSwitch from '~icons/home/switch.svg';
  import IconMore from '~icons/home/more.svg';
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconCopy from '~icons/home/copy.svg';
  import IconHttp from '~icons/home/http.svg';
  import { reactive, toRefs, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Search2, TriangleUp } from '@nutui/icons-vue';
  import { showDialog, showToast } from '@nutui/nutui';
  import { transferUTCTime, getfilesize } from '@/utils/util';
  import ImgList from './imgList.vue';
  import { rename_objects } from '@/api';
  import useDelete from './useDelete.js';
  import useShare from './useShare.js';
  // import { ProxListObjectsRequest, ProxListObjectsReq, ProxHeader } from '@/pb/prox_pb.js';
  // import Prox from '@/pb/prox_pb.ts';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import useOrderInfo from './useOrderInfo.js';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';

  import { HmacSHA1, enc } from 'crypto-js';
  // import { download_url } from '@/api/index';

  let timeOutEvent: string | number | NodeJS.Timeout | undefined;
  let server = null;
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    category: 0,
    keyWord: '',
    infinityValue: false,
    hasMore: false,
    showActionPop: false,
    tableData: [],
    chooseItem: { name: '' },
    isCheckMode: false,
    renameShow: false,
    newName: '',
    showTypeCheckPop: false,
    tableLoading: false,
    detailShow: false,
    imgCheckedData: [],
    prefix: [],
    movePrefix: [],
    isSearch: false,
    moveShow: false,
    continuationToken: '',
    continuationToken2: '',
    dirData: [],
    isNewFolder: false,
  });
  const imgListRef = ref('');

  const {
    tableLoading,
    showTypeCheckPop,
    newName,
    renameShow,
    isCheckMode,
    chooseItem,
    showActionPop,
    tableData,
    hasMore,
    infinityValue,
    keyWord,
    category,
    detailShow,
    imgCheckedData,
    prefix,
    movePrefix,
    isSearch,
    moveShow,
    continuationToken,
    continuationToken2,
    dirData,
    isNewFolder,
  } = toRefs(state);
  const { header, token, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
  const {
    isReady,
    confirmShare,
    confirmPeriod,
    periodShow,
    desc,
    options,
    doShare,
    ipfsPin,
    showShareDialog,
    shareRefContent,
    copyContent,
  } = useShare(orderInfo, header, deviceType);
  const showActionBtn = computed(() => {
    if (orderInfo.value.device_type == 'space' || orderInfo.value.device_type === 3) {
      if (
        [4, 5].includes(orderInfo.value.state)
        // || !merkleState.value
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  });
  const { deleteItem } = useDelete(
    tableLoading,
    () => {
      doSearch('', prefix.value, true);
    },
    orderInfo,
    header,
  );

  const selectArr = computed(() => {
    if (category.value == 1) {
      return imgCheckedData.value;
    } else {
      return tableData.value.filter((el) => el.checked);
    }
  });

  const loadMore = () => {
    if (moveShow.value) {
      doSearch(continuationToken2.value, movePrefix.value, false);
    } else {
      doSearch(continuationToken.value, prefix.value, false);
    }
  };
  const touchRow = (row: any, event: any) => {
    timeOutEvent = setTimeout(function () {
      timeOutEvent = 0;
      isCheckMode.value = true;
    }, 1000);
  };

  const touchmoveRow = (row: any, event: any) => {
    clearTimeout(timeOutEvent);
    timeOutEvent = 0;
  };

  const imgUrl = ref('');
  const touchendRow = (row: { checked: boolean; isDir: any; name: string }, event: { target: { nodeName: string } }) => {
    clearTimeout(timeOutEvent);
    if (event?.target?.nodeName == 'svg' || event?.target?.nodeName == 'path') {
      showAction(row);
      return false;
    }
    if (timeOutEvent != 0) {
      if (isCheckMode.value) {
        // select
        row.checked = !row.checked;
      } else {
        if (row.isDir) {
          let long_name = prefix.value.length ? prefix.value?.join('/') + '/' + row.name : row.name;
          prefix.value = long_name.split('/').slice(0, -1);
        } else {
          console.log(row, 'row');

          chooseItem.value = row;
          detailShow.value = true;
          imgUrl.value = row.imgUrl;
        }
      }
    }
    return false;
  };
  const cancelSelect = () => {
    isCheckMode.value = false;
    tableData.value.forEach((el) => {
      el.checked = false;
    });
  };
  const selectAll = () => {
    const isAll = selectArr.value.length == tableData.value.length;
    tableData.value.forEach((el) => {
      el.checked = !isAll;
    });
  };
  const showAction = (item: { name: string }) => {
    if (timeOutEvent !== 0) {
      chooseItem.value = item;
      showActionPop.value = true;
    }
  };
  const choose = (item: { name: string }) => {
    chooseItem.value = item;
  };
  const tabSwitch = (item: { tabTitle: string }, index: any) => {
    handlerClick(item.tabTitle.toLowerCase());
  };
  //move
  const confirmMove = () => {
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];
    const targetObject = (val) => {
      if (movePrefix.value.length) {
        return movePrefix.value.join('/') + '/' + val.name;
      } else {
        return val.name;
      }
    };
    let index = 0;
    console.log(checkData, 'checkData');

    const length = checkData.length - 1;
    const rename = function (resolve, reject) {
      if (targetObject(checkData[index]).length > 1024) {
        showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
        if (index === length) {
          resolve(true);
        } else {
          index++;
          rename(resolve, reject);
        }
        return false;
      }
      let ip = orderInfo.value.rpc.split(':')[0];
      server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
      let ProxRenameObject = new Prox.default.ProxRenameObject();
      ProxRenameObject.setHeader(header);
      ProxRenameObject.setSourceobject(checkData[index].fullName);
      ProxRenameObject.setTargetobject(targetObject(checkData[index]));
      ProxRenameObject.setFiletype(checkData[index].fileType);
      console.log(ProxRenameObject, 'ProxRenameObject');

      server.renameObjects(ProxRenameObject, {}, (err, data) => {
        if (data) {
          console.log(data, 'data');

          if (index === length) {
            showToast.success('Move successful');
            moveShow.value = false;
            movePrefix.value = [];
            doSearch('', prefix.value, true);
            resolve(true);
          } else {
            index++;
            rename(resolve, reject);
          }
        } else {
          console.log(err, 'err');
          movePrefix.value = [];
          showToast.fail(err.message || 'Move failed');
          doSearch('', prefix.value, true);
          reject(false);
        }
      });
    };
    return new Promise((resolve, reject) => {
      rename(resolve, reject);
    });
    // moveShow.value = false;
  };
  //rename
  const confirmRename = () => {
    if (!newName.value) {
      showToast.warn('Please enter a name');
      return false;
    }
    const folderNameRegex = /^[^\s\\\\/:*?"<>|]+(\.[^\s\\\\/:*?"<>|]+)?$/;
    if (!folderNameRegex.test(newName.value)) {
      showToast.warn("Incorrect name format. Please do not include special characters and do not end with the character '/'");

      return false;
    }
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];

    const targetObject = () => {
      if (isNewFolder.value) {
        if (prefix.value.length) {
          return prefix.value.join('/') + '/' + newName.value + '/';
        } else {
          return newName.value + '/';
        }
      } else {
        const arr = checkData[0]?.fullName.split('/');
        if (checkData[0]?.type == 'application/x-directory') {
          if (newName.value[newName.value.length - 1] == '/') {
            const newData = newName.value.slice(0, newName.value.length - 1);
            console.log(newData, 'newDatanewData');
            arr.splice(arr.length - 2, 1, newData);
          } else {
            arr.splice(arr.length - 2, 1, newName.value);
          }
        } else {
          arr.splice(arr.length - 1, 1, newName.value);
        }
        return arr.join('/');
      }
    };
    if (targetObject().length > 1024) {
      showToast.warn('The file path cannot exceed a maximum of 1024 characters, operation failed');
      return false;
    }
    let ip = orderInfo.value.rpc.split(':')[0];
    server = new grpcService.default.ServiceClient(`http://${ip}:7007`);
    if (isNewFolder.value) {
      let ProxFileInfo = new Prox.default.ProxFileInfo();
      ProxFileInfo.setHeader(header);
      ProxFileInfo.setKey(targetObject());
      ProxFileInfo.setContenttype('application/x-directory');
      ProxFileInfo.setSize(0);
      server.touchFile(ProxFileInfo, {}, (err, data) => {
        if (data) {
          showToast.success('Create successful');
          renameShow.value = false;
          isNewFolder.value = false;
          newName.value = '';
          doSearch('', prefix.value, true);
        } else {
          showToast.fail(err.message || 'Create failed');
        }
      });
    } else {
      let ProxRenameObject = new Prox.default.ProxRenameObject();
      ProxRenameObject.setHeader(header);
      ProxRenameObject.setSourceobject(checkData[0].fullName);
      ProxRenameObject.setTargetobject(targetObject());
      ProxRenameObject.setFiletype(checkData[0].fileType);
      console.log(ProxRenameObject, 'ProxRenameObject');

      server.renameObjects(ProxRenameObject, {}, (err, data) => {
        if (data) {
          showToast.success('Rename successful');
          renameShow.value = false;
          newName.value = '';
          doSearch('', prefix.value, true);
        } else {
          console.log(err, 'err');

          showToast.fail(err.message || 'Rename failed');
        }
      });
    }
  };
  const toNextLevel = (row: { name: string }) => {
    let long_name = movePrefix.value.length ? movePrefix.value?.join('/') + '/' + row.name : row.name;
    movePrefix.value = long_name.split('/').slice(0, -1);
    getFileList('', movePrefix.value, true);
  };

  const handlerClick = async (type: string) => {
    showActionPop.value = false;
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];
    if (type === 'move') {
      movePrefix.value = [];
      moveShow.value = true;
      doSearch('', movePrefix.value, true);
    } else if (type === 'download') {
      //   downLoad();

      const awsAccessKeyId = 'FOG9C40y1MBG1x85DU3o';
      const awsSecretAccessKey = 'IZIPDmHm1HXE4ZNCSRIJWuGsUXkp9f98bKHAifVG';
      const bucketName = 'foggiebucket';
      const objectKey = encodeURIComponent(checkData[0].fullName);

      console.log(awsAccessKeyId, awsSecretAccessKey, bucketName, objectKey);

      const date = new Date().toUTCString();

      const httpMethod = 'GET';
      const contentType = '';
      const contentMd5 = '';
      const canonicalizedAmzHeaders = '';
      const canonicalizedResource = `/o/${bucketName}/${objectKey}`;

      const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;
      console.log(signature, 'signature');

      // const crypto = require('crypto');
      // const hmac = crypto.createHmac('sha1', awsSecretAccessKey);
      // hmac.update(signature);
      // const signatureBase64 = hmac.digest('base64');

      let hmac = HmacSHA1(signature, awsSecretAccessKey);
      const signatureBase64 = enc.Base64.stringify(hmac);
      console.log(signatureBase64, 'signatureBase64');

      const headers = {
        'x-amz-date': date,
        Authorization: `AWS ${awsAccessKeyId}:${signatureBase64}`,
      };

      // 构建 S3 GET 请求
      const url = `/o/${bucketName}/${objectKey}`;
      console.log(url, 'url');
      console.log(headers, 'headers');

      // download_url(url, headers).then((err: any, res: any) => {
      //   if (err) {
      //     console.log('err-------------', err);
      //   }
      //   console.log('res-------------', res);
      // });

      // fetch(url, { method: 'GET', headers })
      //   .then((response) => {
      //     if (response.ok) {
      //       // 下载文件或处理响应
      //       console.log('Success', response);
      //     } else {
      //       // 处理错误响应
      //       console.error('Error:', response.status, response.statusText);
      //     }
      //   })
      //   .catch((error) => {
      //     // 处理网络错误
      //     console.error('Network Error:', error);
      //   });

      fetch(url, { method: 'GET', headers })
        .then((response) => {
          if (response.ok) {
            // 创建一个 Blob 对象，并将响应数据写入其中
            console.log('Success', response);
            return response.blob();
          } else {
            // 处理错误响应
            console.error('Error:', response.status, response.statusText);
          }
        })
        .then((blob) => {
          console.log(blob, 'blob');

          // 创建一个 <a> 元素，并设置其 href 属性为 Blob URL
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = checkData[0].fullName;

          // 将 <a> 元素添加到文档中，并模拟点击
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch((error) => {
          // 处理网络错误
          console.error('Network Error:', error);
        });
    } else if (type === 'delete') {
      const onOk = async () => {
        deleteItem(checkData);
      };
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to delete?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        onOk,
      });
    } else if (type === 'rename') {
      if (checkData.length > 1) return false;

      renameShow.value = true;
    } else if (type === 'newFolder') {
    } else if (type === 'share') {
      console.log(checkData.length);

      if (checkData.length > 1) return false;
      await doShare(checkData[0]);
      // cancelSelect();
      // proxy.$notify({
      //   customClass: "notify-success",
      //   message: "Share succeeded",
      //   position: "bottom-left",
      // });
    } else if (type === 'ipfs') {
    } else if (type === 'unipfs') {
      // ipfsPin(checkedData.value[0], "ipfs", "unpin");
    }
  };
  const fileTypeText = {
    0: 'All File List',
    1: 'Image',
    2: 'Video',
    3: 'Audio',
    4: 'Document',
  };
  const switchType = (type: number) => {
    category.value = type;
    cancelSelect();
    showTypeCheckPop.value = false;
  };
  function downLoadFile() {
    let fileStream = null;
    let stream = null;
    const { ip, token, peer_id, foggie_id, cid, key, savePath, fileName, prefixes, objsList } = file.value.params;
    server = new grpcService.default.ServiceClient(`http://${ip}:7007`);
    let request = null;
    let range = new Prox.default.ProxRangeRequest();
    let downloadType = 'monofile';
    if (downloadType == 'monofile') {
      request = new Prox.default.ProxGetRequest();
      request.setHeader(header);
      request.setCid(cid);
      request.setRange(range);
      request.setKey(key);
      request.setThumb(false);
      stream = server.getObject(request, {});
    } else {
      let infoList = [];
      for (const item of objsList) {
        let objs = new Prox.default.ProxGetInfo();
        objs.setCid(item.cid);
        objs.setKey(item.key);
        infoList.push(objs);
      }
      request = new ProxGetRequests();
      request.setHeader(header);
      request.setObjsList(infoList);

      request.setRange(range);
      request.setPrefixesList(JSON.parse(JSON.stringify(prefixes)));
      stream = server.getObjects(request, {});
    }
    fileStream = fs.createWriteStream(savePath);

    stream.on('data', (data: any) => {
      console.log(data);
    });

    stream.on('status', (status: any) => {
      console.log('Stream status:', status);
    });

    stream.on('end', (end: any) => {
      fileStream.end();
      shell.showItemInFolder(savePath);
      downloadDone('completed');
    });

    stream.on('error', (error: any) => {
      if (fileStream) fileStream.close();
      // if (stream) stream.removeListener('data', streamData);
    });
  }
  function getFileList(scroll: string, prefix: any[], reset = false) {
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = list_prefix + '/';
      }
    }
    console.log(orderInfo.value.rpc, 'orderInfo.value.rpc');
    let ip = orderInfo.value.rpc.split(':')[0];
    server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    // header.setToken(token.value.split('bearer ')[1]);
    console.log(token.value, 'token.value.sign');

    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix(list_prefix);
    let delimiter = category.value != 0 ? '' : '/';
    listObject.setDelimiter(delimiter);
    listObject.setEncodingType('');
    listObject.setMaxKeys(30);
    listObject.setStartAfter('');
    listObject.setContinuationToken(scroll || '');
    listObject.setVersionIdMarker('');
    listObject.setKeyMarker('');
    listObject.setOrderby('');
    listObject.setTags('');
    listObject.setCategory(category.value);
    listObject.setDate('');
    let requestReq = new Prox.default.ProxListObjectsReq();
    requestReq.setHeader(header);
    requestReq.setRequest(listObject);
    console.log(requestReq, 'requestReq');
    server.listObjects(
      requestReq,
      {},
      (
        err: any,
        res: {
          getCommonprefixesList: () => any;
          getContentList: () => any[];
          getContinuationtoken: () => any;
          getIstruncated: () => any;
          getMaxkeys: () => any;
          getNextmarker: () => any;
          getPrefix: () => any;
          getPrefixpinsList: () => any;
        },
      ) => {
        infinityValue.value = false;
        if (res) {
          const transferData = {
            commonPrefixes: res.getCommonprefixesList(),
            content: res
              .getContentList()
              .map(
                (el: {
                  getKey: () => any;
                  getEtag: () => any;
                  getLastmodified: () => any;
                  getSize: () => any;
                  getContenttype: () => any;
                  getCid: () => any;
                  getFileid: () => any;
                  getIspin: () => any;
                  getIspincyfs: () => any;
                  getPinexp: () => any;
                  getCyfsexp: () => any;
                  getOod: () => any;
                  getIspersistent: () => any;
                  getCategory: () => any;
                  getTags: () => any;
                }) => {
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
                },
              ),
            continuationToken: res.getContinuationtoken(),
            isTruncated: res.getIstruncated(),
            maxKeys: res.getMaxkeys(),
            nextMarker: res.getNextmarker(),
            prefix: res.getPrefix(),
            prefixpins: res.getPrefixpinsList(),
          };
          initRemoteData(transferData, reset, category.value);
        } else if (err) {
          console.log('err----', err);
        }
      },
    );
  }
  const handleImg = (item: { cid: any; key: any }, type: string, isDir: boolean) => {
    let baseUrl = '127.0.0.1';
    let imgHttpLink = '';
    let imgHttpLarge = '';
    type = type.toLowerCase();
    let isSystemImg = false;
    let cid = item.cid;
    let key = item.key;

    let ip = orderInfo.value.rpc.split(':')[0];
    let port = orderInfo.value.rpc.split(':')[1];
    let Id = orderInfo.value.foggie_id;
    let peerId = orderInfo.value.peer_id;
    if (type === 'png' || type === 'bmp' || type === 'gif' || type === 'jpeg' || type === 'ico' || type === 'jpg' || type === 'svg') {
      type = 'img';
      // imgHttpLink = `${location}/d/${ID}/${pubkey}?new_w=200`;
      // imgHttpLink = `${location}/object?pubkey=${pubkey}&new_w=${size}`;
      // let token = store.getters.token;
      // imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}&thumb=true`;
      // imgHttpLarge = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}`;
      let bucketName = 'foggiebucket';
      imgHttpLink = `/o/${bucketName}/${encodeURIComponent(item.key)}`;
      imgHttpLarge = `/o/${bucketName}/${encodeURIComponent(item.key)}`;

      // foggie://peerid/spaceid/cid
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm') {
      type = 'video';
      // item.contentType = "video/mp4";

      imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
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
  const initRemoteData = (
    data: {
      commonPrefixes?: any;
      content: any;
      continuationToken?: any;
      isTruncated?: any;
      maxKeys?: any;
      nextMarker?: any;
      prefix?: any;
      prefixpins?: any;
      err?: any;
    },
    reset = false,
    category: number,
  ) => {
    if (!data) {
      tableLoading.value = false;
      showToast.hide(1);
      return;
    }
    if (data.err) {
      showToast.fail('Failed to  retrieve data. Please try again later');
    }
    let dir = prefix.value.join('/');
    if (reset) {
      if (moveShow.value) {
        dirData.value = [];
      } else {
        tableData.value = [];
      }
    }
    for (let i = 0; i < data.commonPrefixes?.length; i++) {
      let name = decodeURIComponent(data.commonPrefixes[i]);
      if (data.prefix) {
        // name = name.split(data.prefix)[1];
        name = name.split('/')[name.split('/').length - 2] + '/';
      }

      let cur_cid = '';
      for (let i = 0; i < data.prefixpins?.length; i++) {
        if (data.prefixpins[i]?.prefix === el && data.prefixpins[i]?.cid) {
          cur_cid = data.prefixpins[i].cid;
        }
      }

      let item = {
        isDir: true,
        checked: false,
        name,
        category: 1,
        fileType: 1,

        fullName: decodeURIComponent(data.commonPrefixes[i]),
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
      if (moveShow.value) {
        dirData.value.push(item);
      } else {
        tableData.value.push(item);
      }
    }
    for (let j = 0; j < data?.content?.length; j++) {
      let date = transferUTCTime(data.content[j].lastModified);
      let isDir = false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);
      let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = decodeURIComponent(data.content[j].key);
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0) {
        name = name.split('/')[name.split('/').length - 1];
      }
      let isPersistent = data.content[j].isPersistent;

      let item = {
        isDir: isDir,
        checked: false,
        name,
        category: data.content[j].category,
        category: 2,
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
      if (moveShow.value) {
      } else {
        tableData.value.push(item);
      }
    }
    if (data.isTruncated) {
      if (moveShow.value) {
        continuationToken2.value = data.continuationToken;
      } else {
        continuationToken.value = data.continuationToken;
      }
    } else {
      continuationToken.value = '';
    }
    console.log(tableData.value);

    tableLoading.value = false;
    showToast.hide(1);
  };
  function doSearch(scroll: string = '', prefixArg: any[] = [], reset = false) {
    if (tableLoading.value) return false;
    // tableData.value = [];
    if (keyWord.value == '') {
      showToast.loading('Loading', {
        cover: true,
        id: 1,
      });
      // if (moveShow.value) {
      getFileList(scroll, prefixArg, reset);
      // } else {
      //   getFileList('', prefix.value, false);
      // }
    } else {
      prefix.value = [];
      showToast.loading('Loading', {
        cover: true,
        id: 1,
      });
      tableLoading.value = true;
      let type = orderInfo.value.device_type == 'space' || orderInfo.value.device_type == 3 ? 'space' : 'foggie';
      if (type == 'space') {
        let ip = orderInfo.value.rpc.split(':')[0];
        server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
        let ProxFindRequest = new Prox.default.ProxFindRequest();
        ProxFindRequest.setHeader(header);
        ProxFindRequest.setCid('');
        ProxFindRequest.setKey(encodeURIComponent(keyWord.value));
        ProxFindRequest.setFileid('');
        server.findObjects(ProxFindRequest, {}, (err: any, res: { getContentsList: () => any[] }) => {
          infinityValue.value = false;
          if (res) {
            const transferData = res
              .getContentsList()
              .map(
                (el: {
                  getKey: () => any;
                  getEtag: () => any;
                  getLastmodified: () => any;
                  getSize: () => any;
                  getContenttype: () => any;
                  getCid: () => any;
                  getFileid: () => any;
                  getIspin: () => any;
                  getIspincyfs: () => any;
                  getPinexp: () => any;
                  getCyfsexp: () => any;
                  getOod: () => any;
                  getIspersistent: () => any;
                  getCategory: () => any;
                  getTags: () => any;
                }) => {
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
                },
              );
            initRemoteData({ content: transferData }, true, category.value);
          } else {
          }
        });
      }
    }
  }
  const copyLink = (text: string) => {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    // let str = `Copying  ${type} successful!`;
    // this.$message.success(str);
    showToast.success('Copy succeeded');
  };
  const shareTwitter = (fileLink) => {
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];
    let tweetText = checkData[0].name;
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText) + '&url=' + encodeURIComponent(fileLink);
    window.open(twitterUrl, '_blank');
  };
  const shareFacebook = (fileLink) => {
    var twitterUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(fileLink);
    window.open(twitterUrl, '_blank');
  };
  watch(
    category,
    async (val, old) => {
      if (old == 1) {
        imgListRef.value.resetChecked();
        imgCheckedData.value = [];
      }
      if (val == 1) {
      } else {
        await getOrderInfo();
        doSearch('', prefix.value, true);
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    prefix,
    (val) => {
      if (!keyWord.value) {
        cancelSelect();
        doSearch('', val, true);
      }
    },
    { deep: true },
  );
  onMounted(() => {
    category.value = route.query.category;
    switchType(category.value);
  });
</script>
<style>
  .type_check_pop {
    padding-top: 120px;
    height: 350px;
  }
</style>
<style lang="scss" scoped>
  .detail_over {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 10px;
    background: #000;
    box-sizing: border-box;

    .middle_img {
    }
    .bottom_action {
      display: flex;
      justify-content: space-evenly;
      height: 300px;
      div {
        text-align: center;
        color: #fff;
      }
      svg {
        color: #fff;
        width: 80px;
        height: 80px;
      }
    }
  }
  .detail_back {
    width: 60px;
    height: 60px;
  }
  .top_back {
    margin: 0;
  }
  .check_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    color: #2e70ff;
    font-size: 30px;
    background: #fff;
    .checked_num {
      color: #000;
      font-size: 35px;
    }
  }
  .fileList_content {
    box-sizing: border-box;
    height: 100%;
    padding: 0 0 40px 0;
  }
  .list_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    color: $primary-color-end;
    // transition: all 0.3s;
    span {
      font-size: 35px;
      font-weight: 700;
      line-height: 60px;
    }
    .triangle {
      margin: 10px;
      width: 40px;
      height: 40px;
      transition: all 0.3s;
    }
    .triangleDown {
      transform: rotate(180deg);
    }
  }
  .header_fixed {
    position: fixed;
    z-index: 9999;
  }

  .cate_title {
    padding: 20px;
    font-size: 40px;
  }
  .type_check_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .type_item {
      width: 33%;
      text-align: center;
      height: 150px;
      .svg_box {
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin: 10px auto;
        text-align: center;
        border-radius: 20px;
        svg {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
      }
      p {
        color: #051e56;
      }
      &:nth-child(1) {
        .svg_box {
          background: #e6e9ff;
        }
      }
      &:nth-child(2) {
        .svg_box {
          background: #f5ecff;
        }
      }
      &:nth-child(3) {
        .svg_box {
          background: #e0f3ff;
        }
      }
      &:nth-child(4) {
        .svg_box {
          background: #ffebef;
        }
      }
      &:nth-child(5) {
        .svg_box {
          background: #e2e4ff;
        }
      }
    }
  }
  .search_bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    .new_folder {
      width: 50px;
      height: 50px;
    }
    :deep {
      .nut-searchbar {
        width: calc(100% - 60px);
        padding: 0;
      }
      .nut-searchbar__search-input {
        --nut-searchbar-input-background: #f5f8fd;
      }
    }
  }
  .list_item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #eee;
    &:active {
      background: #cde3f5;
    }
    .left_checkMode {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      background: #f1f1f1;
      border-radius: 50%;
      img {
        width: 50px !important;
        height: 50px !important;
      }
      &.is_checked {
        width: 60px;
        height: 60px;
        margin: 10px;
        background: #2e70ff;
      }
      .ok_icon {
        color: #fff;
      }
    }
    .type_icon {
      width: 80px;
      height: 80px;
    }
    .left_icon_box {
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
    }
    .right_more {
      width: 50px;
      height: 50px;
      color: #ccc;
    }
  }
  .bottom_action {
    :deep {
      .nut-tabbar-item {
        background-color: #2e70ff;
        color: #fff;
        svg {
          width: 40px;
          height: 40px;
        }
      }
      .nut-tabbar-item_icon-box_nav-word {
        color: #ffffff5c;
      }
    }
    &.canAction {
      :deep {
        .nut-tabbar-item_icon-box_nav-word {
          color: #fff;
        }
      }
    }
    .is-disable {
      color: #ffffff5c;
      :deep {
        .nut-tabbar-item_icon-box_nav-word {
          color: #ffffff5c;
        }
      }
    }
  }
  .row_is_checked {
    background: #cde3f5;
  }
  .rename_box {
    margin-top: 40px;
    padding: 0 40px;
    p {
      text-align: center;
      margin-bottom: 30px;
    }
    svg {
      display: block;
      margin: 0 auto;
    }
    :deep {
      .nut-searchbar {
        padding: 20px 0;
      }
      .nut-button {
        margin-top: 40px;
      }
    }
  }
  .move_box {
    .top_back {
      margin-bottom: 10px;
      p {
        margin: 0 5px;
        color: #000;
      }
    }
    .file_list {
      height: 950px;
      overflow-y: auto;
      .list_item {
        width: 100%;
      }
      .left_icon_box {
        svg {
          width: 100px;
          height: 100px;
        }
      }
      .name_box {
        p {
          text-align: right;
          margin: 0;
        }
      }
    }
  }
  .share_info_box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 150px;
    div {
      margin-top: 20px;
      text-align: center;
      color: $main_blue;
      img,
      svg {
        display: block;
        margin: 0 auto;
        width: 80px;
        height: 80px;
      }
    }
  }
  .custom-content {
    p {
      padding: 30px 20px;
      color: #909090;
      border-bottom: 1px solid #eee;
      svg {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        vertical-align: middle;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 30px 20px;
        svg {
          width: 40px;
          height: 40px;
          margin-right: 15px;
          vertical-align: text-bottom;
        }
        &:active {
          background: #cde3f5;
        }
      }
      .is-disable {
        color: #ccc;
      }
    }
    .cancel_btn {
      padding: 20px;
      background-color: #f7f7f7;
      color: #000;
      text-align: center;
      font-size: 35px;
    }
  }
</style>
