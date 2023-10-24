<template>
  <div class="fileList_content">
    <nut-popup
      class="file_top"
      position="top"
      :style="{ height: '100px' }"
      round
      pop-class="type_check_pop"
      v-model:visible="showTypeCheckPop"
    >
      <!-- <p class="cate_title">Classifications</p> -->
      <div class="type_check_box">
        <div class="type_item" @click="switchType(1)">
          <div class="svg_box">
            <IconRiNodeTree color="#34964f"></IconRiNodeTree>
          </div>
          <p>Merkle List</p>
        </div>
        <div class="type_item" @click="switchType(2)">
          <div class="svg_box">
            <IconRiSendToBack color="#fcd116"></IconRiSendToBack>
          </div>
          <p>Challenge List</p>
        </div>
        <div class="type_item" @click="switchType(3)">
          <div class="svg_box">
            <IconRiInputCursorMove color="#5f57ff"></IconRiInputCursorMove>
          </div>
          <p>Arbitrate List</p>
        </div>
      </div>
    </nut-popup>
    <nut-sticky>
      <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header']">
        <div style="display: flex">
          <div class="top_back" @click="router.go(-1)"> </div>
          <span class="top_title">
            {{ fileTypeText[category] }}
          </span>
          <TriangleUp
            @click="showTypeCheckPop = !showTypeCheckPop"
            :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
          ></TriangleUp>
        </div>
      </div>
      <!-- <div class="search_bar" v-if="!isCheckMode && category !== 1">
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
      </div> -->
    </nut-sticky>
    <template>
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
        >
          <div :class="['left_icon_box', isCheckMode ? 'left_checkMode' : '', item.checked ? 'is_checked' : '']">
            <img src="@/assets/svg/home/ok-white.svg" class="ok_icon" v-if="item.checked" alt="" />
            <template v-else>
              <!-- <img v-else src="@/assets/svg/home/switch.svg" class="type_icon" alt="" /> -->
              <img v-if="item.isDir" src="@/assets/svg/home/folder.svg" alt="" />
              <img v-else-if="item.category == 4" src="@/assets/svg/home/document.svg" alt="" />
              <img v-else-if="item.category == 3" src="@/assets/svg/home/audio.svg" alt="" />
              <img v-else-if="item.imgUrl" :src="imgUrl" alt="" />
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
    <!-- single action -->
  </div>
</template>

<script setup lang="ts">
  import detailImg from '@/assets/fog-works.png';
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';

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
    longPress: [
      {
        content: 'Long press on a list file to enable multi-select mode',
        target: 'list_item_1',
      },
    ],
    isFirst: false,
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
  const { header, token, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
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
  } = useShare(orderInfo, header, deviceType);
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

  const imgUrl = ref('');

  const fileTypeText = {
    1: 'Merkle List',
    2: 'Challenge List',
    3: 'Arbitrate List',
  };
  const switchType = (type: number) => {
    category.value = type;
    showTypeCheckPop.value = false;
  };

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

  const handleFirst = () => {
    isFirst.value = false;
    window.localStorage.notFirst = true;
  };
  watch(
    category,
    async (val, old) => {
      await getOrderInfo();
      // doSearch('', prefix.value, true);
    },
    { deep: true, immediate: true },
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
  .file_Top {
    z-index: 9999;
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
