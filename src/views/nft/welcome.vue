<template>
  <div>
    <div class="box box1">
      <img src="@/assets/guide2.png" alt="" />
      <span> Fog Drops </span>
    </div>
    <div class="box box2">
      <img src="@/assets/guide2.png" alt="" />
      <span> Inscription </span>
    </div>
    <div class="bottom_box">
      <div class="title title1"> Get success in the crypto art </div>
      <div class="title title2"> Node is a platform that aims to build a new creative economy </div>
      <div class="bottom_btn">
        <div @click="router.go(-1)">
          <img src="@/assets/arrow-left.svg" alt="" />
        </div>
        <div class="line"> </div>
        <div class="right_btn" @click="router.push('/walletConnect')">
          <img src="@/assets/arrow-left.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>
<style>
  #app {
    background: #fff;
  }
</style>
<style lang="scss" scoped>
  .box {
    font-size: 60px;
    font-weight: 900;
    img {
      display: block;
      width: 150px;
    }
  }
  .box1 {
    // position: absolute;
    // left: 100px;
    // top: 50px;
    margin: 50px 0 0 100px;

    transform: rotate(-20deg);
    img {
      transform: rotate(10deg) translateX(50px);
    }
    span {
      display: block;
      margin-top: 30px;
    }
  }
  .box2 {
    // position: absolute;
    margin: 50px 0 0 300px;
    // left: 300px;
    // top: 450px;
    img {
      transform: rotate(10deg) translateX(100px);
    }
    span {
      display: block;
      margin-top: 30px;
    }
  }
  .title {
    margin: 50px 20px;
    text-align: center;
  }
  .title1 {
    font-size: 2rem;
  }
  .title2 {
    margin: 50px 50px;
    font-size: 1rem;
  }
  .bottom_btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 300px;
    height: 100px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .line {
      width: 1px;
      height: 60px;
      background: #ccc;
    }
    .right_btn {
      transform: rotate(180deg);
    }
  }
  @media screen and (min-width: 500px) {
    .box {
      font-size: 60px;
      font-weight: 900;
      width: 400px;
      img {
        display: block;
        width: 150px;
      }
    }
    .box1 {
      position: absolute;
      left: 25%;
      top: 10px;
      margin: 0;

      span {
        display: block;
        margin-top: 30px;
      }
    }
    .box2 {
      position: absolute;
      right: 15%;
      top: 70px;
      margin: 0;

      span {
        display: block;
        margin-top: 30px;
      }
    }
    .bottom_box {
      position: absolute;
      top: 500px;
      left: 50%;
      transform: translateX(-50%);
    }
    .title {
      margin: 50px 20px;
      text-align: center;
    }
    .title1 {
      font-size: 2rem;
    }
    .title2 {
      margin: 50px 50px;
      font-size: 1rem;
    }
    .bottom_btn {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 auto;
      width: 300px;
      height: 100px;
      border-radius: 50px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      img {
        width: 40px;
        height: 40px;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .line {
        width: 1px;
        height: 60px;
        background: #ccc;
      }
      .right_btn {
        transform: rotate(180deg);
      }
    }
  }
</style>
