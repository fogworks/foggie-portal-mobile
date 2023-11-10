<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Recharge Guide</div>
  </div>
  <div class="recharge_info">
    <div class="title"> 1. Open the DMC Wallet App and click on the "Transfer" button on the homepage. </div>
    <img src="@/assets/dmcHome.jpg" />
    <div class="title">
      2.Copy the provided receiving account name and memo from your Foggie Mobile, then proceed with the transaction on your DMC Wallet App.
    </div>
    <img src="@/assets/dmcTrans.jpg" />
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
</script>

<style lang="scss">
  .recharge_info {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .title {
    font-size: 24px;
    color: #4c5093;
    margin: 20px 0;
    line-height: 40px;
    font-weight: bold;
    display: inline-block;
  }
  img {
    width: 70%;
    height: auto;
  }
</style>
