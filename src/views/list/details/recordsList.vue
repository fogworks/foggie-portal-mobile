<template>
  <div>
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
            <span class="top_title"> {{ fileTypeText[category] }} </span>
            <TriangleUp
              @click="showTypeCheckPop = !showTypeCheckPop"
              :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
            ></TriangleUp>
          </div>
        </div>
      </nut-sticky>
      <nut-infinite-loading
        v-model="infinityValue"
        :has-more="false"
        v-if="tableData.length"
        load-more-txt="No more content"
        class="file_list record_list"
      >
        <div
          :class="['list_item', item.checked ? 'row_is_checked' : '']"
          :id="[index == 0 ? 'list_item_1' : '']"
          v-for="(item, index) in tableData"
          :key="index"
        >
          <div :class="['left_icon_box']">
            <IconRiNodeTree color="#3963eb" v-if="category == 1"></IconRiNodeTree>
            <IconRiSendToBack color="#3963eb" v-if="category == 2"></IconRiSendToBack>
            <IconRiInputCursorMove color="#3963eb" v-if="category == 3"></IconRiInputCursorMove>
          </div>
          <div class="name_box record_item" v-if="category == 1">
            <p class="time">{{ transferUTCTime(item.create_time) }}</p>
            <p>
              <span>Version:</span>
              <span> {{ item.merkle_version }}</span>
            </p>
            <p>
              <span>Block:</span>
              <span> #{{ item.block_num }}</span>
            </p>

            <p
              ><span>Merkle Root:</span>
              <span>
                {{
                  item.merkle_root.substring(0, 10) +
                  '...' +
                  item.merkle_root.substring(item.merkle_root.length - 6, item.merkle_root.length)
                }}
                <IconCopy style="vertical-align: sub; color: #3963eb" @click="copyLink(item.merkle_root)"></IconCopy
              ></span>
            </p>
          </div>
          <div class="name_box record_item" v-if="category == 2">
            <p class="time">{{ item.create_time && transferUTCTime(item.create_time) }}</p>
            <p>
              <span>Version:</span>
              <span> {{ item.version }}</span>
            </p>
            <p>
              <span>Data ID:</span>
              <span> {{ item.data_id }}</span>
            </p>

            <p
              ><span>CID:</span>
              <span> {{ item.cid.substring(0, 10) + '...' + item.cid.substring(item.cid.length - 6, item.cid.length) }}</span>
            </p>
            <!-- <p
            ><span>Reply Hash:</span>
            <span>
              {{
                item.reply_hash.substring(0, 10) + '...' + item.reply_hash.substring(item.reply_hash.length - 6, item.reply_hash.length)
              }}</span
            >
          </p> -->
            <p
              ><span>Hash Data:</span>
              <span>
                {{
                  item.data_hash.substring(0, 10) + '...' + item.data_hash.substring(item.data_hash.length - 6, item.data_hash.length)
                }}</span
              >
            </p>
          </div>
          <div class="name_box record_item" v-if="category == 3">
            <p class="time">{{ item.create_time && transferUTCTime(item.create_time) }}</p>
            <p>
              <span>Version:</span>
              <span> {{ item.versionUser }}</span>
            </p>
            <p>
              <span>Data ID:</span>
              <span> {{ item.data_id }}</span>
            </p>

            <p
              ><span>Data:</span>
              <span> {{ item.data }}</span>
            </p>
          </div>
        </div>
      </nut-infinite-loading>
      <nut-empty v-else description="No data" image="error">
        <div style="margin-top: 10px"> </div>
      </nut-empty>
      <!-- single action -->
    </div>
    <div
      v-if="category == 1 && orderInfo.value.electronic_type == '0' && orderInfo.value.state !== 4 && orderInfo.value.state !== 5"
      class="submit-merkle"
    >
      <nut-button block class="buy_btn" type="info" @click="submitMerkle" :loading="merkleLoading"> Submit Merkle </nut-button>
      <!-- <nut-button block class="buy_btn" type="warning" v-else @click="loadCurReferenceRate" :loading="loading"> Retry </nut-button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';
  import IconMore from '~icons/home/more.svg';
  import IconCopy from '~icons/home/copy.svg';
  import { TriangleUp } from '@nutui/icons-vue';
  import { reactive, toRefs, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import useOrderInfo from './useOrderInfo.js';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  import { transferUTCTime } from '@/utils/util';
  import { minSize } from '@/setting.js';
  import { calc_merkle } from '@/api/index';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';

  import { showToast } from '@nutui/nutui';

  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    infinityValue: false,
    tableData: [],
    showTypeCheckPop: false,
    tableLoading: false,
    continuationToken: '',
  });
  const category = ref(1);
  //   const tableData = ref([]);
  const { showTypeCheckPop, infinityValue, continuationToken, tableData } = toRefs(state);
  const { header, metadata, token, deviceType, orderInfo, getOrderInfo, bucketName } = useOrderInfo();
  import { get_merkle_record, get_challenge, get_arbitration } from '@/api/index';
  const order_id = ref<any>('');
  order_id.value = route.query.id;
  const fileTypeText = {
    1: 'Merkle List',
    2: 'Challenge List',
    3: 'Arbitrate List',
  };
  const switchType = (type: number) => {
    category.value = type;
    showTypeCheckPop.value = false;
    initListData(type);
  };
  const initListData = (type) => {
    type = Number(type);
    if (type === 1) {
      initMarkList();
    } else if (type === 2) {
      initchallengeList();
    } else if (type === 3) {
      initArbList();
    }
  };
  const initMarkList = () => {
    tableData.value = [];
    get_merkle_record({ orderId: order_id.value }).then((res) => {
      tableData.value = res.data;
    });
  };
  const initchallengeList = () => {
    tableData.value = [];
    get_challenge({ order_id: order_id.value }).then((res) => {
      tableData.value = res.result.data.map((el) => {
        return {
          ...el,
          versionUser: el.nonce ? el.nonce.split('#').slice(-1)[0] : '',
        };
      });
    });
  };
  const initArbList = () => {
    tableData.value = [];
    get_arbitration({ order_id: order_id.value }).then((res) => {
      tableData.value = res && res.result && res.result.data;
    });
  };
  const initParams = async () => {
    await getOrderInfo();
    switchType(category.value);
  };

  const merkleLoading = ref(false);

  const memo = ref<any>('');
  const amb_uuid = ref<any>('');
  memo.value = route.query.uuid;
  amb_uuid.value = route.query.amb_uuid;
  const copyLink = async (text) => {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };
  const submitMerkle = async () => {
    merkleLoading.value = true;
    const d = {
      orderId: order_id.value,
      uuid: amb_uuid.value,
      orderUuid: memo.value,
      rpc: orderInfo.value.rpc,
    };
    calc_merkle(d)
      .then((res) => {
        merkleLoading.value = false;
        console.log('calc_merkle-----', res);
        if (res.code == 200) {
          showToast.success('Joined the Merkle queue!');
        } else {
          showToast.fail(res.msg);
        }
      })
      .catch(() => {
        merkleLoading.value = false;
      });
  };

  onMounted(() => {
    category.value = route.query.category;
    initParams();
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
  .file_list {
    background: #fff;
    height: calc(100vh - 400px);
    overflow-y: auto;
  }
  :deep {
    .nut-popover-content--bottom-center {
      background: $main_blue;
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
  .list_item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0 20px 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin: 10px 0;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.333333vw 6.666667vw;
    &:active {
      background: #cde3f5;
    }

    .record_item {
      width: calc(100% - 140px);
      margin-left: 30px;
      .time {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        display: flex;
        height: 50px;
        line-height: 50px;
        font-size: 26px;
        align-items: center;
        justify-content: space-between;
        color: #000;
      }
      .time {
        margin-top: 5px;
        color: #a7a7a7;
        font-size: 22px;
        justify-content: end;
        color: #3963eb;
        font-weight: bold;
      }
    }
    .left_icon_box {
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      svg {
        width: 100%;
        height: 100%;
        vertical-align: middle;
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
  .submit-merkle {
    position: fixed;
    padding: 0 40px;
    width: calc(100vw - 80px);
    // right: 5vw;
    bottom: 120px;
    .buy_btn {
      height: 120px;
      font-size: 40px;
      margin: 10px 0;
      :deep {
        &.nut-button--disabled {
          background: #aaa !important;
        }
      }
    }
  }
</style>
