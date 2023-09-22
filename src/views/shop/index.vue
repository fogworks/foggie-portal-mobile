<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="shopForm">
      <nut-form-item label="Space(GB)">
        <nut-input-number :min="1" decimal-places="0" v-model="shopForm.quantity" step="1" class="nut-input-text" placeholder="Space" />
      </nut-form-item>
      <nut-form-item label="Weeks">
        <nut-range v-model="shopForm.week" :max="52" :min="25" />
      </nut-form-item>
      <nut-form-item label="Markup">
        <nut-range v-model="shopForm.floating_ratio" :max="100" :min="0" />
      </nut-form-item>
      <div style="text-align: center" class="order-tip">
        Purchase
        <strong>
          {{ shopForm.quantity > 0 ? shopForm.quantity : '--' }}
        </strong>
        GB,lasts <strong> 25 </strong> weeks and allows a premium of <strong> {{ shopForm.floating_ratio }}% </strong> for orders totaling
        about
        <br />
        <strong class="price"> {{ totalPrice || '--' }} DMC </strong>
        <!-- <nut-price :price="totalPrice" :decimal-digits="4" size="large" /> -->
      </div>
    </nut-form>
  </nut-sticky>
  <div style="margin: 0 20px">
    <nut-button block type="info" @click="submit" :loading="loading"> Buy </nut-button>
  </div>
</template>

<script setup lang="ts" name="Shop">
  import { toRefs, reactive, onMounted } from 'vue';
  import { getCurReferenceRate } from '@/api';
  import { buy_order, node_order_buy } from '@/api/amb';
  import { showToast } from '@nutui/nutui';
  import { useRouter } from 'vue-router';
  // import useUpdateDMC from './useUpdateDMC';
  // const { getAmbDmc, targetAccount } = useUpdateDMC();
  const router = useRouter();
  const state = reactive({
    shopForm: {
      quantity: 1 as number,
      week: 25,
      floating_ratio: 0,
    },
    loading: false,
    curReferenceRate: 0,
  });
  const { shopForm, curReferenceRate, loading } = toRefs(state);
  function loadCurReferenceRate() {
    return getCurReferenceRate()
      .then((res: any) => {
        curReferenceRate.value = res;
      })
      .catch(() => {
        setTimeout(() => {
          loadCurReferenceRate();
        }, 2000);
      });
  }
  const totalPrice = computed(() => {
    let total = +curReferenceRate.value * 10000 * state.shopForm.week * state.shopForm.quantity * (1 + state.shopForm.floating_ratio / 100);
    total = Math.round(total) / 10000;
    return +total.toFixed(4) > 0 ? total.toFixed(4) : '--';
  });

  async function submit() {
    loading.value = true;
    await loadCurReferenceRate();
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio,
      pst: state.shopForm.quantity.toFixed(0),
    };
    buy_order(params)
      .then(async (res) => {
        if (res.code == 200) {
          // let nodeIp ='http://'+ res.result.node_address;
          // let nodeIp = 'http://154.31.41.124:18080';
          let nodeIp = '';
          let buyOrderUuid = res.result.uuid;
          let amb_user_uuid = res.result.amb_user_uuid;
          node_order_buy(nodeIp, {
            buyOrderUuid,
            userUuid: amb_user_uuid,
            period: state.shopForm.week.toString(),
            pst: state.shopForm.quantity.toFixed(0),
            totalPrice: totalPrice.value,
            memo: `${buyOrderUuid}_Order_buy`,
            deviceType: 3,
          })
            .then(() => {
              loading.value = false;
              showToast.success('Order request has been initiated, please check the order result in the order record later.');
              router.push('/home');
            })
            .catch(() => {
              loading.value = false;
            });
        }
      })
      .catch(() => {
        loading.value = false;
      });
  }
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
