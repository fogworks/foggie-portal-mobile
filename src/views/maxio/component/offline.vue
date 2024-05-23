<template>
  <div class="offlineBox" :class="[isShowOffline ? 'showOff' : 'hideOff']">
    <div class="closeImg" @click="closeBuy"></div>
    <div class="show_offline_list"> </div>
    <div class="offline_title">添加离线下载链接</div>
    <div class="offline_box">
      <nut-textarea v-model="offlineLink" rows="4" placeholder="支持IPFS/FOGGIE/HTTP/FTP/磁力链接" />
      <nut-button class="offline_add_link" type="primary" @click="addLink">Retry</nut-button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    isShowOffline: Boolean,
  });
  const offlineLink = ref('');
  const emits = defineEmits(['closeBuy']);
  const closeBuy = () => {
    emits('closeBuy');
  };
  const addLink = () => {};
</script>

<style lang="scss">
  .offlineBox {
    position: fixed;
    top: 150px;
    left: 10%;
    width: 80%;
    height: 500px;
    border: 1px solid #373737;
    border: 1px solid #ffffff36;
    border-radius: 10px;
    z-index: 9999;
    transition: all 0.9s ease;
    background: #212121;
    padding: 10px;
    box-shadow:
      rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  .offline_title {
    color: #fff;
    text-align: center;
    height: 40px;
    margin: 20px;
    font-weight: bold;
  }
  .offline_box {
    padding: 10px;
    .nut-textarea {
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      //   height: 300px;
    }
    .nut-textarea__textarea {
      width: 100%;
      color: #fff;
    }
    .offline_add_link {
      margin: 30px auto;
      display: block;
      width: 400px;
      background: #fac858;
      //   background-image: linear-gradient(89deg, #199dec 10%, #0061a3 40%, #df6b22 50%, #ffd07f 100%);
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .hideOff {
    transform: translateY(-600px);
    opacity: 0;
  }
  .showOff {
    transform: translateY(0);
    opacity: 1;
  }
  .closeImg {
    background: url('@/assets/maxio/close.svg');
    width: 60px;
    height: 60px;
    position: absolute;
    top: -22px;
    right: -20px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    z-index: 999;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>
