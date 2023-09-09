<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="shopForm">
      <nut-form-item label="Space(GB)">
        <nut-input-number :min="1" decimal-places="0" v-model="shopForm.quantity" step="1" class="nut-input-text" placeholder="Space" />
      </nut-form-item>
      <nut-form-item label="Weeks">
        <nut-range v-model="shopForm.week" :max="52" :min="25"></nut-range>
      </nut-form-item>
      <nut-form-item label="Markup">
        <nut-range v-model="shopForm.markup" :max="100" :min="0"></nut-range>
      </nut-form-item>
      <div style="text-align: center" class="order-tip">
        Purchase
        <strong>
          {{ shopForm.quantity > 0 ? shopForm.quantity : '--' }}
        </strong>
        GB,lasts <strong> 25 </strong> weeks and allows a premium of <strong> {{ shopForm.markup }}% </strong> for orders totaling about
        <br />
        <strong class="price"> {{ totalPrice || '--' }} DMC </strong>
        <!-- <nut-price :price="totalPrice" :decimal-digits="4" size="large" /> -->
      </div>
      <div style="margin: 0 20px">
        <nut-button block type="info" @click="buyOrder" :loading="loading"> Buy </nut-button>
      </div>
    </nut-form>
  </nut-sticky>
</template>

<script setup lang="ts" name="Shop">
  import { toRefs, reactive, onMounted } from 'vue';
  import { getCurReferenceRate } from '@/api';
  const state = reactive({
    shopForm: {
      quantity: 1 as number,
      week: 25,
      markup: 0,
    },
    loading: false,
    curReferenceRate: 0,
  });
  const { shopForm, curReferenceRate, loading } = toRefs(state);
  function loadCurReferenceRate() {
    return getCurReferenceRate().then((res: any) => {
      curReferenceRate.value = res;
      // .getBody('utf-8')).rows[0].benchmark_price
    });
  }
  const totalPrice = computed(() => {
    let total = +curReferenceRate.value * 10000 * state.shopForm.week * state.shopForm.quantity * (1 + state.shopForm.markup / 100);
    total = Math.round(total) / 10000;
    return +total.toFixed(4) > 0 ? total.toFixed(4) : '--';
  });
  const buyOrder = () => {};
  onMounted(() => {
    loadCurReferenceRate();
  });
</script>

<style lang="scss" scoped>
  .query_form {
    padding-bottom: 20px;

    :deep {
      .nut-cell-group__wrap {
        padding-bottom: 20px;
      }
    }

    .order-tip {
      padding: 30px 10px;
      font-size: 35px;

      strong {
        color: $primary-color;
      }

      .price {
        font-size: 50px;
      }
    }
  }
</style>
