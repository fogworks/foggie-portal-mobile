<template>
  <div class="home-page">
    <div class="home-page-head">
      <img class="img1" src="@/assets/tg/tg-dmcx1.png" alt="" />
      <img class="img2" src="@/assets/tg/tg-dmcx2.png" alt="" />
    </div>
    <div class="home-page-content">
      <div class="item">
        <div class="item-icon">
          0
        </div>
        <div class="item-name"></div>
        <div class="item-val item-val-no">排名：0</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">0%</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg2 />
        </div>
        <div class="item-name">钱包</div>
        <div class="item-val">添加</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg3 />
        </div>
        <div class="item-name">提升</div>
        <div class="item-val">X1</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg4 />
        </div>
        <div class="item-name">转换器</div>
        <div class="item-val">前往</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg5 />
        </div>
        <div class="item-name">挖矿</div>
        <div class="item-val">参与</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg6 />
        </div>
        <div class="item-name">转盘</div>
        <div class="item-val">参与</div>
      </div>
      <div class="item">
        <div class="item-icon">
          <tg7 />
        </div>
        <div class="item-name">语言</div>
        <div class="item-val">中文</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import tg1 from '~icons/home/tg1.svg';
  import tg2 from '~icons/home/tg2.svg';
  import tg3 from '~icons/home/tg3.svg';
  import tg4 from '~icons/home/tg4.svg';
  import tg5 from '~icons/home/tg5.svg';
  import tg6 from '~icons/home/tg6.svg';
  import tg7 from '~icons/home/tg7.svg';


</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 100%;
  .home-page-head {
    position: relative;
    margin: 15px auto;
    width: 90%;
    padding-bottom: 45%; /* 2:1 的宽高比 */
    background: url(@/assets/tg/tg1.gif) no-repeat;
    background-size: cover;
    img {
      position: absolute;
    }
    .img1 {
      top: 10px;
      left: 10px;
      width: 10%;
    }
    .img2 {
      bottom: 10%;
      left: 25%;
      width: 50%;
    }
  }
  .home-page-content {
    position: relative;
    margin: 15px auto;
    width: 90%;
    .item {
      position: relative;
      margin-bottom: 10px;
      color: #fff;
      width: 100%;
      height: 50px;
      border: 1px solid #36363B;
      background: #151517;
      .item-icon {
        position: absolute;
        top: 0;
        left: 0;
        svg {
          width: 40px;
          height: 40px;
          color: #000;
        }
      }
      .item-name {
        position: absolute;
        top: 0;
        left: 15%;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
      }
      .item-val {
        position: absolute;
        top: 12px;
        right: 0;
        font-weight: 700;
        width: 57px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 30px;
        font-size: 14px;
        background: #36363B;
      }
      .item-val-no {
        border: none;
        background: none;
      }
    }
  }
}
</style>