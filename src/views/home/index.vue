<template>
  <van-cell-group inset class="income-card">
    <template #default>
      <div class="total_title"> Balance(DMC) </div>
      <div class="total_income">100 </div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <div> 10000 </div>
          <div> Total Income</div>
        </van-grid-item>
        <van-grid-item>
          <div> 10000 </div>
          <div> Withdrawn </div>
        </van-grid-item>
        <van-grid-item>
          <div> 10000 </div>
          <div> Total </div>
        </van-grid-item>
      </van-grid>
      <van-space class="withdraw-btn" direction="horizontal" align="center">
        <van-button type="default" @click="showWithdraw" round>Withdraw</van-button>
      </van-space>
    </template>
  </van-cell-group>
</template>

<script lang="ts" setup name="HomePage">
  import { toRefs, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const state = reactive({
    withdrawVisible: false,
  });
  const { withdrawVisible } = toRefs(state);
  const showWithdraw = () => {
    withdrawVisible.value = true;
    router.push({ name: 'Withdraw' });
  };
</script>

<style lang="scss" scoped>
  // @import './home.scss';
  .income-card {
    padding: 20px 0;
    margin-top: 20px;
    //   box-shadow: 0px 0px 4px 1px #ccc;
    background-color: var(--van-blue);
    color: #fff;
    > div {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
    }

    .total_income {
      font-size: 50px;
      font-weight: 700;
    }
    .withdraw-btn {
      justify-content: center;
      width: 100%;
    }
    :deep {
      .van-grid-item {
        &:nth-child(2) {
          // border: 1px solid #fff;
          // border-width: 0 1px 0 1px;
          &::before,
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 2rem;
            display: block;
            width: 1px;
            height: 2rem;
            background-color: #ffffff5c;
          }
          &::after {
            left: unset;
            right: 0;
          }
        }
      }
      .van-grid-item__content {
        background: transparent;
        div:first-child {
          font-size: 1.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div:nth-child(2) {
          font-size: 0.95rem;
        }
      }
      .van-button {
        height: 2rem;
      }
    }
  }
</style>
