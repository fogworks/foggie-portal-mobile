<template>
  <div class="MiddlewareBox">
    <div class="e-card playing">
      <div class="image"></div>

      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class="contentBox">
      <div class="showcase-content">
        <h1> Welcome to <span class="primary-text">Foggie Mobile!</span> </h1>
        <p>Please select the authorization method</p>
      </div>

      <div class="logo">
        <img src="@/assets/fog-works.png" alt="" srcset="" />
        <!-- <span>Foggie Mobile</span> -->
      </div>

      <div class="optionsBtn">
        <div @click="skipTo('H5')">
          <div class="item">
            <img src="@/assets/browser.svg" alt="" srcset="" />
          </div>
          <div style="margin-top: 5px">Browser</div>
        </div>
        <div>
          <div class="item">
            <img src="@/assets/logo-dog-black_1.svg" alt="" srcset="" />
          </div>
          <div style="margin-top: 5px">Foggie Mobile</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="middleware">
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { showToast } from '@nutui/nutui';
  const route = useRoute();
  const router = useRouter();
  function skipTo(type) {
    if (route.query?.publicKey) {
      if (type == 'H5') {
        router.push({ path: '/scanQRCodes', query: { publicKey: route.query?.publicKey } });
      } else {
        showToast.text('');
      }
    } else {
      console.log('缺少参数');
    }
  }
</script>

<style lang="scss" scoped>
  .MiddlewareBox {
    height: auto;
    position: relative;
    height: 100vh;
    box-sizing: border-box;
  }

  .contentBox {
    width: 100vw;
    box-sizing: border-box;
    padding: 15px;
    position: absolute;
    top: 5%;
    .showcase-content {
      position: relative;
      background: rgb(51, 51, 51, 0.9);
      color: #fff;
      border-radius: 90px;
      padding: 40px;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
      h1 {
        text-align: center;
        font-size: 40px;
        margin: 0;
        // padding-bottom: 20px;
        .primary-text {
          color: #56a79a;
        }
      }
      p {
        margin-top: 10px;
        text-align: center;
        color: #ccc;
        margin: 0;
        font-size: 22px;
      }
    }
    .optionsBtn {
      margin-top: 150px;
      display: flex;
      justify-content: space-around;
      div {
        text-align: center;
        color: #fff;
        font-size: 40px;
        font-weight: 500;
        // font-style: italic;
        display: flex;
        flex-direction: column;
        align-items: center;
        .item {
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 140px;
          height: 140px;
          img {
          width: 125px;
          height: 125px;
        }
        }

        // .lastImage{
        //   width: 230px;
        //   height: 230px;
        // }
      }
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 200px;
      width: 100%;
      height: 200px;
      img {
        width: 240px;
        height: 140px;
      }
      span {
        margin-top: 60px;
        font-size: 65px;
        color: #fff;
        font-weight: 600;
        font-style: italic;
      }
    }
  }

  .e-card {
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: absolute;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 1540px;
    height: 1700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 1210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
