<template>
  <div class="info_box">
    <div class="top_box">
      <TopBack>Profile</TopBack>
    </div>
    <nut-cell-group title="My Account" class="info_title">
      <nut-cell title="Account Name" :desc="userInfo.email"></nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Binding Information" class="info_title">
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
  .info_title {
    :deep {
      .nut-cell-group__title {
        color: #000;
        font-size: 30px;
      }
    }
  }
  .not_amb {
    :deep {
      .nut-cell__value {
        width: 200px;
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
    :deep {
      .nut-cell__title {
        color: #000;
      }
      .nut-cell__value {
        color: #4d5093;
        font-weight: bold;
      }
    }
  }
</style>
