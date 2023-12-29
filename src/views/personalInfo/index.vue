<template>
  <div class="info_box">
    <div class="top_box">
      <TopBack>UserInfo</TopBack>
    </div>
    <nut-cell-group title="My Account" class="info_title">
      <nut-cell v-if="userInfo.email" title="Email" :desc="userInfo.email"></nut-cell>
      <nut-cell v-else title="Email" desc="Unbound" @click="bindEmail"></nut-cell>
    </nut-cell-group>

    <nut-cell-group title="Binding Information" class="info_title">
      <nut-cell v-if="!userInfo.dmc" title="DMC Account" desc="Unbound" @click="openBindDMCDiaolg"></nut-cell>
      <nut-cell v-else title="DMC Account" :desc="userInfo.dmc"></nut-cell>
      <nut-cell
        class="not_amb"
        v-if="!userInfo.amb_promo_code || !cloudCodeIsBind"
        title="Ambassador Invitation Code"
        desc="Unbound"
        @click="bindAmbCode"
      ></nut-cell>
      <nut-cell v-else class="not_amb" title="Ambassador Invitation Code" :desc="userInfo.amb_promo_code"></nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Linked MetaMask Wallet" class="info_title wallet_info">
      <nut-cell v-for="item in walletInfo" title="Address" :desc="item.address"></nut-cell>
      <div class="add_link_wallet" @click="showAllWalletList">Add</div>
    </nut-cell-group>
    <nut-dialog teleport="#app" title="Link Wallet" v-model:visible="showAccountList">
      <nut-radio-group v-model="choosedWallet">
        <nut-radio v-for="item in accountsList" :disabled="hasLinked(item)" :label="item">{{ item }}</nut-radio>
      </nut-radio-group>
      <template #footer>
        <div style="display: flex; justify-content: space-evenly">
          <nut-button
            @click="
              choosedWallet = '';
              showAccountList = false;
            "
            >Cancel</nut-button
          >
          <nut-button type="primary" :disabled="!choosedWallet" @click="confirmLink">Link</nut-button>
        </div>
      </template>
    </nut-dialog>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import useLinkAccounts from '@/views/login/useLinkAccount.ts';
  import { showToast } from '@nutui/nutui';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { wallet_bind_uuid } from '@/api/index.ts';
  const router = useRouter();
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const walletInfo = computed(() => useStore.getUserInfo?.wallet_info);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);
  const { showAllWalletList, showAccountList, accountsList } = useLinkAccounts();
  const choosedWallet = ref('');
  const bindAmbCode = inject('bindAmbCode');
  const openBindDMCDiaolg = inject('openBindDMCDiaolg');
  const bindEmail = () => {
    router.push('/linkAccount');
  };
  const hasLinked = (address) => {
    return walletInfo.value.find((el) => el.address === address);
  };
  const confirmLink = () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'bind_wallet',
    });
    wallet_bind_uuid({ address: choosedWallet.value, wallet_type: 'metamask', uuid: userInfo.value.uuid })
      .then((res) => {
        if (res.code == 200) {
          showToast.success('Linkage Success');
          choosedWallet.value = '';
          showAccountList.value = false;
        }
      })
      .catch(() => {
        choosedWallet.value = '';
      })
      .finally(() => {
        showToast.hide('bind_wallet');
      });
  };
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
  .wallet_info {
    :deep {
      .nut-cell__value {
        word-break: break-all;
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
  .add_link_wallet {
    padding: 20px 0;
    text-align: center;
    color: $main-blue;
    cursor: pointer;
  }
</style>
