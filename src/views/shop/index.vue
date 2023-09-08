<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="shopForm">
      <nut-form-item label="Space">
        <nut-input-number decimal-places="0" v-model="shopForm.space" step="1" class="nut-input-text" placeholder="Space" />
      </nut-form-item>
      <nut-form-item label="Weeks">
        <nut-range v-model="shopForm.week" :max="52" :min="25"></nut-range>
      </nut-form-item>
      <div style="margin: 0 20px">
        <nut-button block type="info" @click="buyOrder" :loading="loading"> Buy </nut-button>
      </div>
    </nut-form>
  </nut-sticky>
</template>

<script setup lang="ts" name="Shop">
  import { toRefs, reactive } from 'vue';
  const state = reactive({
    shopForm: {
      space: 1,
      week: 25,
    },
    loading: false,
  });
  const { shopForm, loading } = toRefs(state);
  const buyOrder = () => {};
</script>

<style lang="scss" scoped>
  .query_form {
    padding-bottom: 20px;
    :deep {
      .nut-cell-group__wrap {
        padding-bottom: 20px;
      }
    }
  }
</style>
