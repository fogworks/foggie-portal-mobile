<template>
  <div class="fileList_content">
    <nut-sticky>
      <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header']">
        <div style="display: flex">
          <div class="top_back" @click="router.go(-1)"> </div>
          <span>
            {{ fileType }}
          </span>
          <TriangleUp
            @click="showTypeCheckPop = !showTypeCheckPop"
            :class="['triangle', showTypeCheckPop ? 'triangleDown' : '']"
          ></TriangleUp>
        </div>
      </div>
      <nut-searchbar v-if="!isCheckMode" placeholder="Search By Name" class="search_bar" v-model="keyWord">
        <template #leftin>
          <Search2 />
        </template>
      </nut-searchbar>
      <div class="check_top" v-else>
        <span @click="selectAll">{{ selectArr.length == list.length ? 'UnSelect' : 'Select' }} All</span>
        <span class="checked_num">{{ selectArr.length }} items selected</span>
        <span @click="cancelSelect">Cancel</span>
      </div>
    </nut-sticky>
    <nut-infinite-loading class="file_list" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
      <div
        :class="['list_item', item.checked ? 'row_is_checked' : '']"
        v-for="(item, index) in list"
        :key="index"
        @touchstart="touchRow(item, $event)"
        @touchmove="touchmoveRow(item, $event)"
        @touchend="touchendRow(item, $event)"
      >
        <div :class="['left_icon_box', isCheckMode ? 'left_checkMode' : '', item.checked ? 'is_checked' : '']">
          <IconOk class="ok_icon" v-if="item.checked"></IconOk>
          <IconSwitch v-else class="type_icon"></IconSwitch>
        </div>
        <div class="name_box">
          <p>{{ item.name }}</p>
          <p>{{ item.date || '' }}</p>
        </div>
        <IconMore v-show="!isCheckMode" class="right_more" @click.stop="showAction(item)"></IconMore>
      </div>
    </nut-infinite-loading>
    <!-- checkbox action -->
    <nut-tabbar
      v-if="isCheckMode"
      @tab-switch="tabSwitch"
      :class="['bottom_action', selectArr.length ? 'canAction' : '']"
      bottom
      safe-area-inset-bottom
      placeholder
    >
      <nut-tabbar-item tab-title="Share">
        <template #icon>
          <IconShare :color="selectArr.length ? '#fff' : '#ffffff5c'"></IconShare>
          <!-- <img :src="props.active ? icon.active : icon.unactive" alt="" /> -->
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="Rename">
        <template #icon="props">
          <IconRename :color="selectArr.length ? '#fff' : '#ffffff5c'"></IconRename>
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
          <li @click="handlerClick('share')"><IconShare></IconShare> Share</li>
          <li @click="handlerClick('rename')"><IconRename></IconRename> Rename</li>
          <li @click="handlerClick('move')"><IconMove></IconMove> Move</li>
          <li @click="handlerClick('download')"><IconDownload></IconDownload>Download</li>
          <li @click="handlerClick('delete')"><IconDelete></IconDelete>Delete</li>
        </ul>
        <div class="cancel_btn" @click="showActionPop = false"> Cancel </div>
      </div>
    </nut-action-sheet>
    <nut-popup position="bottom" closeable round :style="{ height: '90%' }" v-model:visible="renameShow">
      <div class="rename_box">
        <IconFolder></IconFolder>
        <p> {{ chooseItem.name }}</p>
        <nut-searchbar v-model="newName" placeholder="Please Input New Name"></nut-searchbar>
        <nut-button type="info" block>Confirm</nut-button>
      </div>
    </nut-popup>
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
  </div>
</template>

<script setup lang="ts">
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
  import { reactive, toRefs, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Search2, TriangleUp } from '@nutui/icons-vue';
  import { showDialog } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  let timeOutEvent;
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    fileType: '',
    keyWord: '',
    infinityValue: false,
    hasMore: false,
    showActionPop: false,
    list: [
      {
        name: 'XXXX',
        date: '2023-09-20',
      },
    ],
    chooseItem: { name: '' },
    isCheckMode: false,
    renameShow: false,
    newName: '',
    showTypeCheckPop: false,
  });
  const menuItems = ref([
    {
      name: '分享',
    },
    {
      name: '重命名',
    },
    {
      name: '移动',
    },
    {
      name: '下载',
    },
    {
      name: '删除',
      disable: false,
      color: 'red',
    },
  ]);
  const { showTypeCheckPop, newName, renameShow, isCheckMode, chooseItem, showActionPop, list, hasMore, infinityValue, keyWord, fileType } =
    toRefs(state);
  const selectArr = computed(() => {
    return list.value.filter((el) => el.checked);
  });
  const loadMore = () => {};
  const touchRow = (row, event) => {
    timeOutEvent = setTimeout(function () {
      timeOutEvent = 0;
      isCheckMode.value = true;
    }, 1000);
  };

  const touchmoveRow = (row, event) => {
    clearTimeout(timeOutEvent);
    timeOutEvent = 0;
  };
  const touchendRow = (row, event) => {
    clearTimeout(timeOutEvent);
    if (timeOutEvent != 0) {
      if (isCheckMode.value) {
        // select
        row.checked = !row.checked;
      }
      // 点击事件
      // location.href = '/a/live-rooms.html';
    }
    return false;
  };
  const cancelSelect = () => {
    isCheckMode.value = false;
    list.value.forEach((el) => {
      el.checked = false;
    });
  };
  const selectAll = () => {
    const isAll = selectArr.value.length == list.value.length;
    list.value.forEach((el) => {
      el.checked = !isAll;
    });
  };
  const showAction = (item) => {
    if (timeOutEvent !== 0) {
      chooseItem.value = item;
      showActionPop.value = true;
    }
  };
  const choose = (item) => {
    chooseItem.value = item;
  };
  const tabSwitch = (item, index) => {
    console.log(item, index);
    handlerClick(item.tabTitle.toLowerCase());
  };
  const handlerClick = async (type) => {
    showActionPop.value = false;
    console.log(type);
    const checkData = isCheckMode.value ? selectArr.value : [chooseItem.value];

    if (type === 'move') {
    } else if (type === 'download') {
      //   downLoad();
    } else if (type === 'delete') {
      showDialog({
        title: 'Warning',
        content: 'Are you sure you want to delete?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        // onOk,
      });
    } else if (type === 'rename') {
      renameShow.value = true;
    } else if (type === 'newFolder') {
    } else if (type === 'share') {
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
  const switchType = (type) => {
    switch (type + '') {
      case '0':
        fileType.value = 'All File List';
        break;
      case '1':
        fileType.value = 'Image';
        break;
      case '2':
        fileType.value = 'Video';
        break;
      case '3':
        fileType.value = 'Audio';
        break;
      case '4':
        fileType.value = 'Document';
        break;
      default:
        fileType.value = 'All File List';
        break;
    }
    showTypeCheckPop.value = false;
  };
  watch(
    route,
    (val) => {
      switchType(val.query?.fileType);
    },
    { deep: true, immediate: true },
  );
</script>
<style>
  .type_check_pop {
    padding-top: 120px;
    height: 350px;
  }
</style>
<style lang="scss" scoped>
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
    padding: 20px;
    padding-top: 0;

    :deep {
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
      svg {
        width: 50px;
        height: 50px;
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
    .name_box {
      width: calc(100% - 180px);
      margin-left: 30px;
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
