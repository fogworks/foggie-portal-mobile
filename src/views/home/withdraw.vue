<template>
  <van-form label-width="8rem" class="withdraw_form" @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        @update:model-value="transferAmount"
        v-model.number="amount"
        :formatter="formatAmount"
        type="number"
        :rules="[{ required: true, message: 'Please Enter Withdraw Amount' }]"
        name="amount"
        label="Withdraw Amount"
      >
        <template #button>
          <van-button size="small" type="primary" @click="getAll">All Amount</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> Withdraw </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts" name="Withdraw">
  import { reactive, toRefs } from 'vue';

  const state = reactive({
    amount: 0,
  });
  const { amount } = toRefs(state);
  const getAll = () => {
    amount.value = 1;
  };
  const formatAmount = (val) => {
    return (+val).toFixed(4) + '';
  };
  const transferAmount = (value) => {
    //   amount.value = value.toFixed(4);
    console.log(value.toFixed(4));
  };
  const onSubmit = (value) => {
    console.log(value);
  };
</script>

<style lang="scss" scoped>
  .withdraw_form {
    margin-top: 10px;
  }
</style>
