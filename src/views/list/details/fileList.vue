<template>
  <div class="fileList_content">
    <nut-popup position="top" round pop-class="type_check_pop" v-if="showTypeCheckPop" v-model:visible="showTypeCheckPop">
      <!-- <p class="cate_title">Classifications</p> -->
      <div :class="['list_header']">
        <div style="display: flex">
          <template v-if="!prefix.length">
            <div class="top_back" @click="router.go(-1)"> </div>
            <span class="top_title">
              {{ fileTypeText[category] }}
            </span>
            <TriangleUp
              @click="showTypeCheckPop = !showTypeCheckPop"
              :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
            ></TriangleUp>
          </template>
          <template v-else>
            <div
              class="top_back"
              @click="
                prefix.splice(-1);
                prefixChange();
              "
            >
            </div>
            <span class="top_title">
              {{ prefix.at(-1) || '' }}
            </span>
          </template>
        </div>
      </div>
      <div class="type_check_box">
        <div class="type_item" @click="switchType(0)">
          <div class="svg_box">
            <IconAllCate></IconAllCate>
          </div>
          <p>All</p>
        </div>
        <div class="type_item" @click="switchType(3)">
          <div class="svg_box">
            <IconAudio2></IconAudio2>
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
    <nut-sticky class="file_Top" top="0">
      <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header']">
        <div style="display: flex">
          <template v-if="!prefix.length">
            <div class="top_back" @click="router.go(-1)"> </div>
            <span class="top_title">
              {{ fileTypeText[category] }}
            </span>
            <TriangleUp
              @click="showTypeCheckPop = !showTypeCheckPop"
              :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
            ></TriangleUp>
          </template>
          <template v-else>
            <div
              class="top_back"
              @click="
                prefix.splice(-1);
                prefixChange();
              "
            >
            </div>
            <span class="top_title">
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
    <template v-if="category !== 1">
      <nut-infinite-loading
        v-if="tableData.length"
        class="file_list"
        v-model="infinityValue"
        :has-more="!!continuationToken"
        @load-more="loadMore"
      >
        <nut-tour
          class="nut-custom-tour nut-customword-tour nut-customstyle-tour"
          v-model="isFirst"
          :steps="longPress"
          type="tile"
          location="bottom-center"
          :close-on-click-overlay="false"
        >
          <div class="tour-demo-custom-content">
            <div>Long press on a list file to enable multi-select mode</div>
            <nut-button class="tour_btn" @click="handleFirst" type="default">OK</nut-button>
          </div>
        </nut-tour>
        <div
          :class="['list_item', item.checked ? 'row_is_checked' : '']"
          :id="[index == 0 ? 'list_item_1' : '']"
          v-for="(item, index) in tableData"
          :key="index"
          @touchstart="touchRow(item, $event)"
          @touchmove="touchmoveRow(item, $event)"
          @touchend="touchendRow(item, $event)"
        >
          <div :class="['left_icon_box', isCheckMode ? 'left_checkMode' : '', item.checked ? 'is_checked' : '']">
            <img src="@/assets/svg/home/ok-white.svg" class="ok_icon" v-if="item.checked" alt="" />
            <template v-else>
              <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
              <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
              <img v-else-if="item.category == 4" src="@/assets/svg/home/document.svg" alt="" />
              <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
              <img v-else-if="item.imgUrl" :src="item.imgUrl" alt="" />
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
      <nut-empty v-else description="No data" image="error">
        <div style="margin-top: 10px"> </div>
      </nut-empty>
    </template>
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
    <Teleport to="body">
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
        <nut-tabbar-item tab-title="Move" :class="[category == 1 ? 'is-disable' : '']">
          <template #icon="props">
            <IconMove :color="selectArr.length && category != 1 ? '#fff' : '#ffffff5c'"></IconMove>
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
    </Teleport>

    <!-- single action -->
    <Teleport to="body">
      <nut-action-sheet class="action_pop" v-if="showActionPop" v-model:visible="showActionPop">
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
    </Teleport>

    <!-- rename / newFolder -->
    <nut-popup
      teleport-disable
      v-if="renameShow"
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

    <nut-popup teleport-disable v-if="moveShow" position="bottom" closeable round :style="{ height: '90%' }" v-model:visible="moveShow">
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
        <nut-infinite-loading class="file_list" v-model="infinityValue" :has-more="!!continuationToken2" @load-more="loadMore">
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
    <nut-popup
      teleport-disable
      v-if="showShareDialog"
      @closed="isReady = false"
      position="bottom"
      closeable
      round
      :style="{ height: '200px' }"
      v-model:visible="showShareDialog"
    >
      <div v-if="isReady" class="rename_box move_box">
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
        <nut-button type="info" block @click="() => confirmHttpShare(shareType, shareCheckData, accessKeyId, secretAccessKey, bucketName)"
          >Confirm</nut-button
        >
      </div>
      <div class="share_info_box" v-else>
        <div v-if="shareRefContent.ipfsStr && +shareCheckData.originalSize <= orderInfo.total_space * 0.01">
          <img @click="confirmShare" src="@/assets/ipfs.png" alt="" />
          IPFS Link
          <!-- <IconCopy @click="copyLink(shareRefContent.ipfsStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconHttp @click="isReady = true"></IconHttp>
          HTTP Link
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconTwitter @click="isReady = true"></IconTwitter>
          Twitter
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
        <div v-if="shareRefContent.httpStr">
          <IconFacebook @click="isReady = true"></IconFacebook>
          Facebook
          <!-- <IconCopy @click="copyLink(shareRefContent.httpStr)"></IconCopy> -->
        </div>
      </div>
    </nut-popup>
    <Teleport to="body">
      <nut-overlay v-if="detailShow" overlay-class="detail_over" v-model:visible="detailShow" :close-on-click-overlay="false">
        <IconArrowLeft @click="detailShow = false" class="detail_back" color="#fff"></IconArrowLeft>
        <div class="middle_img">
          <nut-image :src="imgUrl" fit="contain" position="center" show-loading>
            <template #loading>
              <Loading width="16px" height="16px" name="loading" />
            </template>
          </nut-image>
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
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import IconTwitter from '~icons/home/twitter.svg';
  import IconFile from '~icons/bxs/file.svg';
  import IconFacebook from '~icons/devicon/facebook.svg';
  import IconNewFolder from '~icons/home/new_folder.svg';
  import IconAllCate from '~icons/home/all-cate.svg';
  import IconAudio2 from '~icons/home/audio2.svg';
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
  import { Search2, TriangleUp, Loading } from '@nutui/icons-vue';
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
  import loadingImg from '@/components/loadingImg/index.vue';

  import { HmacSHA1, enc } from 'crypto-js';
  // import { download_url } from '@/api/index';

  // const accessKeyId = ref<string>('');
  // const secretAccessKey = ref<string>('');

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
    longPress: [
      {
        content: 'Long press on a list file to enable multi-select mode',
        target: 'list_item_1',
      },
    ],
    isFirst: false,
    shareType: '',
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
    longPress,
    isFirst,
  } = toRefs(state);
  const { bucketName, header, token, deviceType, orderInfo, accessKeyId, secretAccessKey, getOrderInfo } = useOrderInfo();
  const {
    isReady,
    confirmShare,
    periodValue,
    confirmPeriod,
    periodShow,
    desc,
    options,
    doShare,
    ipfsPin,
    showShareDialog,
    shareRefContent,
    copyContent,
    confirmHttpShare,
    getHttpShare,
  } = useShare(orderInfo, header, deviceType);
  const shareCheckData = computed(() => {
    return isCheckMode.value ? selectArr.value[0] : chooseItem.value;
  });
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
  const touchendRow = (row: { checked: boolean; isDir: any; name: string; imgUrl: string }, event: { target: { nodeName: string } }) => {
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
          keyWord.value = '';
          let long_name = prefix.value.length ? prefix.value?.join('/') + '/' + row.name : row.name;
          prefix.value = long_name.split('/').slice(0, -1);
          prefixChange();
        } else {
          chooseItem.value = row;
          detailShow.value = true;
          imgUrl.value = row.imgUrlLarge;
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

      server.renameObjects(ProxRenameObject, {}, (err, data) => {
        if (data) {
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
    keyWord.value = '';
    let long_name = movePrefix.value.length ? movePrefix.value?.join('/') + '/' + row.name : row.name;
    movePrefix.value = long_name.split('/').slice(0, -1);
    getFileList('', movePrefix.value, true);
  };

  const handlerClick = async (type: string) => {
    showActionPop.value = false;
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];
    if (type === 'move') {
      // if (category.value == 1) return false;
      movePrefix.value = [];
      moveShow.value = true;
      doSearch('', movePrefix.value, true);
    } else if (type === 'download') {
      //   downLoad();

      // const bucketName = 'test11111';
      const objectKey = encodeURIComponent(checkData[0].fullName);

      // console.log('==================', accessKeyId.value, secretAccessKey.value, bucketName.value, objectKey);

      // const date = new Date().toUTCString();

      // const httpMethod = 'GET';
      // const contentType = '';
      // const contentMd5 = '';
      // const canonicalizedAmzHeaders = '';
      // // const canonicalizedResource = `/o/${bucketName}/${objectKey}`;
      // const canonicalizedResource = `/${bucketName.value}/o/${objectKey}`;

      // const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;
      // console.log(signature, 'signature');

      // let hmac = HmacSHA1(signature, secretAccessKey.value);
      // const signatureBase64 = enc.Base64.stringify(hmac);
      // console.log(signatureBase64, 'signatureBase64');

      // const headers = {
      //   'x-amz-date': date,
      //   Authorization: `AWS ${accessKeyId.value}:${signatureBase64}`,
      // };

      const headers = getSignHeaders(objectKey);

      // 构建 S3 GET 请求
      // const url = `/o/${bucketName}/${objectKey}`;
      // const url = `/o/${objectKey}`;
      // const url = `/o/${objectKey}?thumb=true`;
      const url = `http://${bucketName.value}.devus.u2i.net:6008/o/${objectKey}`;

      fetch(url, { method: 'GET', headers })
        .then((response) => {
          if (response.ok) {
            // 创建一个 Blob 对象，并将响应数据写入其中
            return response.blob();
          } else {
            // 处理错误响应
            console.error('Error:', response.status, response.statusText);
          }
        })
        .then((blob) => {
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
        popClass: 'dialog_class',
        onOk,
      });
    } else if (type === 'rename') {
      if (checkData.length > 1) return false;

      renameShow.value = true;
    } else if (type === 'newFolder') {
    } else if (type === 'share') {
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

  function getFileList(scroll: string, prefix: any[], reset = false) {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    let list_prefix = '';
    if (prefix?.length) {
      list_prefix = prefix.join('/');
      if (list_prefix.charAt(list_prefix.length - 1) !== '/') {
        list_prefix = list_prefix + '/';
      }
    }
    let ip = orderInfo.value.rpc.split(':')[0];
    server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    // header.setToken(token.value.split('bearer ')[1]);
    let listObject = new Prox.default.ProxListObjectsRequest();
    listObject.setPrefix(list_prefix);
    let delimiter;
    let categoryParam;
    if (moveShow.value) {
      delimiter = '/';
      categoryParam = '0';
    } else {
      delimiter = category.value != 0 ? '' : '/';
      categoryParam = category.value;
    }
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
    requestReq.setHeader(header);
    requestReq.setRequest(listObject);
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
          console.log(transferData, 'transferData,transferData');

          initRemoteData(transferData, reset, category.value);
        } else if (err) {
          showToast.hide();
          console.log('err----', err);
        }
      },
    );
  }

  const handleImg = async (item: { cid: any; key: any }, type: string, isDir: boolean) => {
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
      // let bucketName = 'foggiebucket';
      // imgHttpLink = `/o/${bucketName.value}/${encodeURIComponent(item.key)}?thumb=true`;
      const headers = getSignHeaders(encodeURIComponent(item.key));

      // const params = new URLSearchParams(headers);
      // imgHttpLink = `/o/${encodeURIComponent(item.key)}?${params.toString()}&thumb=true`;
      // imgHttpLarge = `/o/${encodeURIComponent(item.key)}?${params.toString()}`;
      // console.log('imgHttpLink------------', imgHttpLink);

      // const url = `/o/${encodeURIComponent(item.key)}?`
      console.log('-----------------img-headers', headers);
      // imgHttpLarge = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${orderInfo.value.foggie_id}/${item.cid}`;
      // imgHttpLink = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${orderInfo.value.foggie_id}/${item.cid}`;
      console.log('----------img', accessKeyId.value, accessKeyId.value, bucketName.value, item.key);
      imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
      imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
      console.log('--------imgHttpLarge', imgHttpLarge);

      // await fetch(url, { method: 'GET', headers })
      //   .then((response) => {
      //     if (response.ok) {
      //       // 创建一个 Blob 对象，并将响应数据写入其中
      //       console.log('Success------img', response);
      //       return response.blob();
      //     } else {
      //       // 处理错误响应
      //       console.error('Error:----img', response.status, response.statusText);
      //     }
      //   })
      //   .then((blob) => {
      //     if (blob) {
      //       imgHttpLarge = URL.createObjectURL(blob);
      //     }
      //   })
      //   .catch((error) => {
      //     // 处理网络错误
      //     console.error('Network Error:---img', error);
      //   });
      // const url_thumb = `/o/${encodeURIComponent(item.key)}?thumb=true`

      // await fetch(url_thumb, { method: 'GET', headers })
      //     .then((response) => {
      //       if (response.ok) {
      //         // 创建一个 Blob 对象，并将响应数据写入其中
      //         console.log('Success', response);
      //         return response.blob();
      //       } else {
      //         // 处理错误响应
      //         console.error('Error:', response.status, response.statusText);
      //       }
      //     })
      //     .then((blob) => {
      //       if (blob) {
      //         imgHttpLink = URL.createObjectURL(blob);
      //       }
      //     })
      //     .catch((error) => {
      //       // 处理网络错误
      //       console.error('Network Error:', error);
      //     });

      // foggie://peerid/spaceid/cid
    } else if (type === 'mp4' || type == 'ogg' || type == 'webm') {
      type = 'video';
      // item.contentType = "video/mp4";

      // imgHttpLink = `${baseUrl}/file_download/?cid=${cid}&key=${key}&ip=${ip}&port=${port}&Id=${Id}&peerId=${peerId}&type=${
      //   deviceType.value == 'space' ? 'space' : 'foggie'
      // }&token=${token.value}&thumb=true`;
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
    console.log({ imgHttpLink, isSystemImg, imgHttpLarge }, '{ imgHttpLink, isSystemImg, imgHttpLarge }');

    return { imgHttpLink, isSystemImg, imgHttpLarge };
  };
  const initRemoteData = async (
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
      showToast.hide();
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
    console.log('----------ak---1', accessKeyId.value, bucketName.value);
    if (!accessKeyId.value) {
      await getOrderInfo();
      console.log('----------ak---2', accessKeyId.value);
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
      let isDir = data?.content[j].contentType == 'application/x-directory' ? true : false;
      const type = data.content[j].key.substring(data.content[j].key.lastIndexOf('.') + 1);

      // imgHttpLink, isSystemImg, imgHttpLarge

      // let { imgHttpLink: url, isSystemImg, imgHttpLarge: url_large } = handleImg(data.content[j], type, isDir);
      console.log('----------ak---3', accessKeyId.value, bucketName.value);
      const imgData = await handleImg(data.content[j], type, isDir);
      console.log('----------ak---4', imgData);
      const url = imgData.imgHttpLink;
      const isSystemImg = imgData.isSystemImg;
      const url_large = imgData.imgHttpLarge;
      let cid = data.content[j].cid;
      let file_id = data.content[j].fileId;

      let name = decodeURIComponent(data.content[j].key);
      if (data.prefix) {
        name = name.split(data.prefix)[1];
      }
      if (name.indexOf('/') > 0) {
        if (isDir) {
          name = name.split('/')[name.split('/').length - 2] + '/';
        } else {
          name = name.split('/')[name.split('/').length - 1];
        }
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
    tableLoading.value = false;
    showToast.hide();
    nextTick(() => {
      if (window.localStorage.notFirst) {
        document.getElementsByClassName('main-page')[0].style.overflow = '';
        isFirst.value = false;
      } else {
        document.getElementsByClassName('main-page')[0].style.overflow = 'hidden';
        isFirst.value = true;
      }
    });
  };
  function doSearch(scroll: string = '', prefixArg: any[] = [], reset = false) {
    if (tableLoading.value) return false;
    if (category.value == 1 && !moveShow.value && !renameShow.value) {
      imgListRef.value.refresh();
      return;
    }
    // tableData.value = [];
    if (keyWord.value == '') {
      // if (moveShow.value) {
      getFileList(scroll, prefixArg, reset);
      // } else {
      //   getFileList('', prefix.value, false);
      // }
    } else {
      prefix.value = [];
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
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
  const handleFirst = () => {
    document.getElementsByClassName('main-page')[0].style.overflow = '';
    isFirst.value = false;
    window.localStorage.notFirst = true;
  };

  const getSignHeaders = (objectKey) => {
    // const objectKey = encodeURIComponent(checkData[0].fullName);

    console.log('==================1', accessKeyId.value, secretAccessKey.value, bucketName.value, objectKey);

    const date = new Date().toUTCString();

    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';
    // const canonicalizedResource = `/o/${bucketName}/${objectKey}`;
    const canonicalizedResource = `/${bucketName.value}/o/${objectKey}`;

    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n\nx-amz-date:${date}\n${canonicalizedAmzHeaders}${canonicalizedResource}`;
    console.log(signature, 'signature');

    let hmac = HmacSHA1(signature, secretAccessKey.value);
    const signatureBase64 = enc.Base64.stringify(hmac);
    console.log(signatureBase64, 'signatureBase64');

    const headers = {
      'x-amz-date': date,
      Authorization: `AWS ${accessKeyId.value}:${signatureBase64}`,
    };
    return headers;
  };
  // const getKeys = () => {
  //   if (orderInfo.value && orderInfo.value.peer_id) {
  //     let server = new grpcService.default.ServiceClient(`http://${bucketName.value}.devus.u2i.net:7007`, null, null);
  //     let request = new Prox.default.ProxGetCredRequest();
  //     request.setHeader(header);
  //     server.listCreds(request, {}, (err: any, res: { array: any }) => {
  //       if (err) {
  //         console.log('err------111:', err);
  //       } else if (res.array.length > 0) {
  //         accessKeyId.value = res.array[0][0][0];
  //         secretAccessKey.value = res.array[0][0][1];
  //         console.log('ak ---- sk:', accessKeyId.value, secretAccessKey.value);
  //       }
  //     });
  //   } else {
  //     setTimeout(() => {
  //       getKeys();
  //     }, 600);
  //   }
  // };

  // const getKeys = () => {
  //   console.log('getKeys--------------');
  //   let server = new grpcService.default.ServiceClient(`http://${bucketName.value}.devus.u2i.net:7007`, null, null);
  //   let request = new Prox.default.ProxGetCredRequest();

  //   // let header = new grpcService.default.ProxHeader();

  //   // header.setPeerid('12D3KooWRB2biisvjS8F11MM9ritJZrtEdNfD6FaT5Fvi1JAG7sp');
  //   // header.setId('baeqagmrygu');
  //   // header.setToken('SIG_K1_KZgJypnYhkcohgLKczEKdjbXZehopW2RCA5NbWxs1LDsdnqLRqkpQFn3YUbUjnmrpysmi9SxFxcbtU2oRCRPo555jKvE1b');

  //   console.log(header, 'header---ak', bucketName.value);
  //   request.setHeader(header);
  //   server.listCreds(request, {}, (err: any, res: { array: any }) => {
  //     if (err) {
  //       console.log('err------:ak sk', err);
  //     } else if (res.array.length > 0) {
  //       console.log('----------ak, sk', res.array);
  //       accessKeyId.value = res.array[0][0][0];
  //       secretAccessKey.value = res.array[0][0][1];
  //     }
  //   });
  // };
  const prefixChange = () => {
    cancelSelect();
    doSearch('', prefix.value, true);
  };
  provide('handleImg', handleImg);
  watch(
    category,
    async (val, old) => {
      if (old == 1) {
        imgListRef?.value?.resetChecked();
        imgCheckedData.value = [];
      }
      if (val == 1) {
      } else {
        console.log('category--------------', val, orderInfo.value);
        if (!orderInfo?.value?.id) {
          await getOrderInfo();
        }
        doSearch('', prefix.value, true);
      }
    },
    { deep: true },
  );
  onMounted(async () => {
    if (route?.query?.prefix) {
      prefix.value = route?.query?.prefix.split('/');
    }
    bucketName.value = route.query?.bucketName;
    let category1 = route.query.category || '0';
    switchType(category1);
    // getKeys();
  });
</script>
<style>
  .type_check_pop {
    /* padding-top: 120px; */
    height: 450px;
  }
  .dialog_class {
    font-size: 30px;
    .nut-dialog__header {
      height: unset;
      font-size: 35px;
    }
    .nut-dialog__content {
      font-size: 30px;
    }
  }
</style>
<style lang="scss" scoped>
  .file_Top {
    z-index: 9999;
  }
  .file_list {
    // height: calc(100% - 300px);
    background: #fff;
  }
  :deep {
    .nut-popover-content--bottom-center {
      background: $main_blue;
    }
  }
  .tour-demo-custom-content {
    padding: 20px;
    background: $main_blue;
    color: #fff;
    clear: both;
    height: 100px;
    .tour_btn {
      float: right;
      height: 50px;
      margin-top: 10px;
      padding: 5px 10px;
      text-align: right;
    }
    &:after {
      display: inline-block;
      content: '';
      clear: both;
    }
  }
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
    color: $main_blue;
  }
  .top_title {
    margin-left: 80px;
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
  // .header_fixed {
  //   position: fixed;
  //   top: 0 !important;
  //   z-index: 9999;
  // }

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
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      p {
        color: #051e56;
      }
      // &:nth-child(1) {
      //   .svg_box {
      //     background: #e6e9ff;
      //   }
      // }
      // &:nth-child(2) {
      //   .svg_box {
      //     background: #f5ecff;
      //   }
      // }
      // &:nth-child(3) {
      //   .svg_box {
      //     background: #e0f3ff;
      //   }
      // }
      // &:nth-child(4) {
      //   .svg_box {
      //     background: #ffebef;
      //   }
      // }
      // &:nth-child(5) {
      //   .svg_box {
      //     background: #e2e4ff;
      //   }
      // }
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
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
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
          font-size: 30px;
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
