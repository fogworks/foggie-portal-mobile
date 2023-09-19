<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="formLine">
      <nut-form-item label-width="180px" label="DMC Account" v-if="!userInfo.dmc">
        <nut-input v-model="formLine.dmc" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>
      <nut-form-item label-width="180px" label="Ambassador Invitation Code" v-if="!userInfo.amb_promo_code">
        <nut-input v-model="formLine.code" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>
      <div style="margin: 0 20px">
        <nut-button block type="info" @click="submit" :loading="loading"> Confirm </nut-button>
      </div>
    </nut-form>
  </nut-sticky>
</template>

<script setup lang="ts" name="bindDmc">
  import { reactive, computed, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const formLine = reactive({ dmc: '', code: '' });
  const loading = ref(false);
  const submit = () => {};
</script>

<style scoped></style>
