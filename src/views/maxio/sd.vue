<template>
  <div class="sd_container">
    <div class="card-sd_container">
      <div class="card-content">
        <div class="card_border_box">
          <div class="card-sd_title">
            <span class="sd_title">
              {{ currentItem && currentItem.device_id && textSubStr(currentItem.device_id) }}
              <!-- <nut-noticebar :text="text" background="transparent" color="#fff" :left-icon="false" /> -->
            </span>
          </div>
          <div class="order_top_icon" @click="showOrderOption = true">
            <img src="@/assets/set.svg" />
          </div>
          <div class="card-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <nut-popup position="top" :style="{ height: '180px' }" round v-model:visible="showOrderOption">
        <div class="order_top_box">
          <div class="order_top_title">Order Setting </div>
          <div class="order_top_list">
            <div class="order_top_item" @click="doOpt('cancel')">
              <img src="@/assets/cancelOrder.svg" />
              <span>Cancel Order</span>
            </div>
            <div class="order_top_item" @click="doOpt('renew')">
              <img src="@/assets/addOrder.svg" />
              <span>Renew Order</span>
            </div>
          </div>
        </div>
      </nut-popup>
    </Teleport>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import { showDialog, showNotify, showToast } from '@nutui/nutui';
  import { cancelDmOrder } from '@/api';
  import { createVNode, inject } from 'vue';
  const emits = defineEmits(['refresh']);
  const currentItem = ref({});
  const showOrderOption = ref(false);
  const props = defineProps({
    currentBucketData: {
      type: Object,
      default: () => {},
    },
  });
  const { currentBucketData } = toRefs(props);
  watch(
    currentBucketData,
    async (val) => {
      if (val) {
        if (val) {
          currentItem.value = val;
        }
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
  onMounted(() => {});
  const doOpt = (type) => {
    if (type === 'renew') {
      let text = 'We Are Comming Soon......';
      showNotify.text(text, { color: '#000', background: '#9dfc37', position: 'bottom' });
    } else if (type === 'cancel') {
      showDialog({
        title: 'Cancel Order',
        content: createVNode('span', { style: {} }, 'Are you sure you want to cancel the order?'),
        cancelText: 'Cancel',
        okText: 'Yes',
        onCancel: () => {
          // console.log('取消');
        },
        onOk: () => {
          const data = {
            orderId: currentItem.value.order_id,
          };
          cancelDmOrder(data).then((res) => {
            if (res.code == 200) {
              showToast.success('The order has been successfully cancelled');
              showOrderOption.value = false;
              emits('refresh');
            }
          });
        },
      });
    }
  };
  const textSubStr = (text) => {
    if (text) {
      let arr = text.split('-');
      let str = arr[arr.length - 1];
      return str.toUpperCase();
      //   return text.substring(0, 4) + '...' + text.substring(text.length - 4, text.length);
    }
  };
</script>

<style lang="scss">
  .order_top_icon {
    display: flex;
    align-items: end;
    justify-content: end;
    position: absolute;
    right: 0;
    top: 20px;
    img {
      width: 36px;
      height: 36px;
    }
  }
  .order_top_box {
    padding: 30px 20px;
    color: #fff;
    height: 100%;
    .order_top_title {
      font-size: 40px;
      text-align: center;
      font-weight: bold;
      padding-bottom: 30px;
      border-bottom: 1px solid green;
    }
    .order_top_list {
      height: calc(100% - 120px);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      .order_top_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-right: 20px;
        cursor: pointer;
        color: #1afa29;
        img {
          width: 80px;
          height: 80px;
          margin-bottom: 14px;
        }
      }
    }
  }
  .nut-noticebar__page {
    height: 50px;
    line-height: 50px;
  }
  .maxio_sd_rightContent {
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    margin-left: -20px;
  }
  .sd_container {
    // font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    // font-style: italic;
    font-weight: bold;
    display: flex;
    // aspect-ratio: 16/9;
    // aspect-ratio: 1;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    width: 97%;
    height: 100%;
  }

  .card-sd_container {
    // filter: drop-shadow(46px 36px 24px #4090b5) drop-shadow(-55px -40px 25px #9e30a9);
    // animation: blinkShadowsFilter 3s ease-in infinite;
    width: 100%;
    height: 100%;
  }

  .card-content {
    position: relative;
    // padding: 50px 40px 20px 30px;
    // padding: 60px 60px 20px 30px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    // background-color: hsl(296, 59%, 10%);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // aspect-ratio: 9/16;
    // aspect-ratio: 1;
    // -webkit-clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // -webkit-clip-path: polygon(0 0, 90% 0, 98% 17%, 99% 59%, 91% 65%, 93% 79%, 99% 82%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 90% 0, 98% 17%, 99% 59%, 91% 65%, 93% 79%, 99% 82%, 99% 90%, 89% 100%, 0 100%);
    // background-color: #54575f;
    // background: rgba(255, 255, 255, 0.3);
    // background: rgb(20 18 18);
    // box-shadow: #ffd700 0px 0px 1.066667vw;
    // border: 2px solid #fff;
    // border: 0.266667vw solid #818f9e;
    border-radius: 22px;
    // box-shadow: #d3d3eb 0px -0.4vw 1.066667vw 0.533333vw;
  }
  .card_border_box {
    z-index: 1;
    padding: 70px 0px 0px 10px;
    margin: 0px 0px 0px 10px;
    width: 100%;
    height: 100%;
    width: calc(100% - 60px);
    width: calc(100% - 0px);
    height: calc(100% - 40px);
    height: calc(100% - 0px);
    position: relative;
    box-sizing: border-box;
    overflow-y: scroll;
    // border: 1px solid #fff;

    // -webkit-clip-path: polygon(0 0, 94% 0, 100% 0%, 100% 100%, 86% 116%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 94% 0, 100% 0%, 100% 100%, 86% 116%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // border: 1px solid #ffffffab;
    border-radius: 10px;
    // margin: 2.666667vw;
  }
  .maxio_child_bg {
    .card_border_box {
      padding-top: 0;
    }
  }

  .card-content::before {
    // content: '';
    // position: absolute;
    // width: 250%;
    // aspect-ratio: 1/1;
    // transform-origin: center;
    // background: linear-gradient(to bottom, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent),
    //   linear-gradient(to left, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent);
    // animation: rotate 5s infinite linear;
  }

  .card-content::after {
    content: '';
    position: absolute;
    top: 1%;
    left: 1%;
    width: 99%;
    height: 98%;
    // background: repeating-linear-gradient(
    //     to bottom,
    //     transparent 0%,
    //     rgba(64, 144, 181, 0.6) 1px,
    //     rgb(0, 0, 0) 3px,
    //     rgba(64, 144, 181, 0.3019607843) 5px,
    //     #153544 4px,
    //     transparent 0.5%
    //   ),
    //   repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsla(295, 60%, 12%, 0.99) 100%);
    // box-shadow: inset 0px 0px 30px 40px hsl(296, 59%, 10%);
    // -webkit-clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // -webkit-clip-path: polygon(0 0, 90% 0, 98% 17%, 99% 59%, 91% 65%, 93% 79%, 99% 82%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 90% 0, 98% 17%, 99% 59%, 91% 65%, 93% 79%, 99% 82%, 99% 90%, 89% 100%, 0 100%);
    // animation: backglitch 1s linear infinite;
    // background: repeating-linear-gradient(
    //     to bottom,
    //     transparent 0%,
    //     rgb(103 118 124 / 60%) 1px,
    //     rgb(0, 0, 0) 0.4vw,
    //     rgba(64, 144, 181, 0.3019607843) 0.666667vw,
    //     #3c4143 0.533333vw,
    //     transparent 0.5%
    //   ),
    //   repeating-linear-gradient(to left, hsl(208.97deg 32.58% 17.45%) 100%, hsl(295deg 4.19% 5.84% / 99%) 100%);
    // background: repeating-linear-gradient(
    //     to bottom,
    //     black 0%,
    //     rgb(103 118 124 / 11%) 1px,
    //     rgb(0 0 0 / 0%) 0.4vw,
    //     rgb(64 144 181 / 0%) 0.666667vw,
    //     #3c4143 0.533333vw,
    //     transparent 0.5%
    //   ),
    //   repeating-linear-gradient(to left, hsl(208.97deg 32.58% 17.45%) 100%, hsl(295deg 4.19% 5.84% / 52%) 100%);
  }

  .card-sd_title {
    z-index: 80;
    -webkit-clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    background: linear-gradient(
        90deg,
        rgba(255, 254, 250, 0) 0%,
        rgba(102, 224, 255, 0.3) 27%,
        rgba(102, 224, 255, 0.3) 63%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(102, 224, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 10%,
        rgba(255, 255, 255, 0) 96%,
        rgba(102, 224, 255, 0.3) 100%
      );
    background: linear-gradient(
        90deg,
        rgba(255, 254, 250, 0) 0%,
        rgb(189 228 238 / 30%) 27%,
        rgb(157 181 187 / 30%) 63%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(0deg, rgb(160 174 178 / 30%) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 96%, rgb(167 213 225 / 30%) 100%);
    width: 98%;
    position: absolute;
    top: 0px;
    left: 0;
  }

  .sd_title {
    width: 100%;
    height: 100%;
    text-align: right;
    position: relative;
    z-index: 2;
    color: hsl(192, 100%, 88%);
    font-size: 1.2em;
    transition: all ease-in-out 2s linear;
    font-style: normal;
    // background: rgba(13, 13, 13, 0.38);
    // color: hsl(210deg 9.33% 50.33%);
    // text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.8);
    // background: rgb(13 13 13 / 0%);
    color: hsl(210deg 9.33% 50.33% / 53%);
    color: hsl(210deg 15.55% 3.45% / 53%);
    text-shadow: 0 1px 1px hsl(0deg 0% 100% / 70%);
    letter-spacing: 8px;
  }

  .card-body {
    z-index: 80;
  }

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }

    50% {
      box-shadow: inset 0px -20px 30px 40px hsl(296, 59%, 10.2%);
    }

    to {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-50%, 20%);
    }

    50% {
      transform: rotate(180deg) translate(40%, 10%);
    }

    to {
      transform: rotate(360deg) translate(-50%, 20%);
    }
  }

  @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }

    25% {
      filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 24px #9e30a9);
    }

    50% {
      filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }
  }
</style>
