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
            <span class="top_title"> Miner Tool </span>
            <TriangleUp
              @click="showTypeCheckPop = !showTypeCheckPop"
              :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
            ></TriangleUp>
          </div>
        </div>
      </nut-sticky>
      <div class="miner_tools">
        <div class="miner_item miner_merkle" @click="switchType(1)">
          <div class="svg_box">
            <IconRiNodeTree color="#34964f"></IconRiNodeTree>
          </div>
          <div class="miner_title">Merkle List</div>
        </div>
        <div class="miner_item miner_merkle" @click="switchType(2)">
          <div class="svg_box">
            <IconRiSendToBack color="#fcd116"></IconRiSendToBack>
          </div>
          <div class="miner_title">Challenge List</div>
        </div>
        <div class="miner_item miner_merkle" @click="switchType(3)">
          <div class="svg_box">
            <IconRiInputCursorMove color="#5f57ff"></IconRiInputCursorMove>
          </div>
          <div class="miner_title">Arbitrate List</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconRiNodeTree from '~icons/ri/node-tree';
  import IconRiSendToBack from '~icons/ri/send-to-back';
  import IconRiInputCursorMove from '~icons/ri/input-cursor-move';
  import { TriangleUp } from '@nutui/icons-vue';
  import { reactive, toRefs } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';

  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    showTypeCheckPop: false,
  });
  const category = ref(1);
  const { showTypeCheckPop } = toRefs(state);
  const fileTypeText = {
    1: 'Merkle List',
    2: 'Challenge List',
    3: 'Arbitrate List',
  };
  const switchType = (type: number) => {
    category.value = type;
    showTypeCheckPop.value = false;
    if (type === 1) {
      router.push({ name: 'RecordsList', query: { ...route.query, amb_uuid: route.query.amb_uuid, category: 1 } });
    } else if (type === 2) {
      router.push({ name: 'RecordsList', query: { ...route.query, amb_uuid: route.query.amb_uuid, category: 2 } });
    } else if (type === 3) {
      router.push({ name: 'RecordsList', query: { ...route.query, amb_uuid: route.query.amb_uuid, category: 3 } });
    }
  };
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
    background: transparent;
    color: #fff;
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
  .miner_tools {
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .miner_item {
      width: 80%;
      display: flex;
      padding: 20px;
      background: #fff;
      margin: 20px;
      border-radius: 20px;
      height: 100px;
      align-items: center;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      .miner_title {
        font-size: 34px;
        margin-left: 20px;
      }
      .svg_box {
        width: 100px;
        height: 100px;
        line-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
</style>
