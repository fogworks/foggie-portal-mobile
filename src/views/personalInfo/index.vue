<template>
  <div class="info_box">
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Personal Information</div>
    </div>
    <nut-cell-group title="My Account">
      <nut-cell title="Account Name" :desc="userInfo.email"></nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Binding information">
      <nut-cell v-if="!userInfo.dmc" title="DMC Account" desc="Unbound" to="/bindDmc?type=dmc"></nut-cell>
      <nut-cell v-else title="DMC Account" :desc="userInfo.dmc"></nut-cell>
      <nut-cell
        class="not_amb"
        v-if="!userInfo.amb_promo_code || !cloudCodeIsBind"
        title="Ambassador Invitation Code"
        desc="Unbound"
        to="/bindDmc?type=amb"
      ></nut-cell>
      <nut-cell v-else class="not_amb" title="Ambassador Invitation Code" :desc="userInfo.amb_promo_code"></nut-cell>
    </nut-cell-group>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);
</script>

<style lang="scss" scoped>
  .not_amb {
    :deep {
      .nut-cell__value {
        width: 150px;
        flex: 0;
      }
    }
  }
  :deep {
    .nut-cell-group__wrap {
      margin-bottom: 0;
    }
  }
  .info_box {
    background: #f5f7fb;
  }
</style>
