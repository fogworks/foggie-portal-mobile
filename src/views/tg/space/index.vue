<template>
  <div class="space-page">
    <div class="space-page-head">
      <span>返回</span>
      <nut-input></nut-input>
    </div>
    <div class="space-page-content">
      <h2>选择空间</h2>

      <div class="item">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">50%</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">20%</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">0%</div>
      </div>
      <div class="item-buy">
        <div class="item-icon">
          <tg8 />
        </div>
        <div class="item-name">购买空间</div>
        <div class="item-val">BUY</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import tg1 from '~icons/home/tg1.svg';
  import tg8 from '~icons/home/tg8.svg';

  const list = ref(['@/assets/tg/tg1.gif', '@/assets/tg/tg2.png']);
</script>

<style lang="scss" scoped>
  .space-page {
    position: relative;
    height: 100%;
    .space-page-head {
      position: relative;
      margin: 15px auto;
      width: 90%;
      height: 10vw;
      img {
        position: absolute;
        z-index: 1;
      }
      .img1 {
        top: 10px;
        left: 10px;
        width: 10%;
      }
      .img2 {
        top: 10%;
        left: 25%;
        width: 50%;
      }
      .nut-swiper {
        position: absolute;
        width: 100%;
      }
    }
    .space-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
      .item {
        position: relative;
        margin-bottom: 20px;
        color: #fff;
        width: 100%;
        height: 100px;
        border: 1px solid #36363b;
        background: #151517;
        border-radius: 10px;
        .item-icon {
          position: absolute;
          top: 30px;
          left: 20px;
          svg {
            width: 40px;
            height: 40px;
            color: #000;
          }
        }
        .item-name {
          position: absolute;
          top: 30px;
          left: 15%;
          height: 50px;
          line-height: 50px;
          font-weight: 700;
        }
        .item-val {
          position: absolute;
          top: 30px;
          right: 30px;
          font-weight: 700;
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 30px;
          // font-size: 14px;
          background: #36363b;
        }
        .item-val-no {
          width: 150px;
          text-align: right;
          border: none;
          background: none;
        }
      }
    }
    .item-buy {
      position: relative;
      margin-bottom: 20px;
      color: #fff;
      width: 100%;
      height: 100px;
      border: 1px solid #36363b;
      background: #151517;
      border-radius: 10px;
      .item-icon {
        position: absolute;
        top: 30px;
        left: 20px;
        svg {
          width: 40px;
          height: 40px;
          color: #000;
        }
      }
      .item-name {
        position: absolute;
        top: 30px;
        left: 15%;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
      }
      .item-val {
        position: absolute;
        top: 30px;
        right: 30px;
        font-weight: 700;
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 30px;
        // font-size: 14px;
        background: #36363b;
      }
      .item-val-no {
        width: 150px;
        text-align: right;
        border: none;
        background: none;
      }
    }
  }
</style>
