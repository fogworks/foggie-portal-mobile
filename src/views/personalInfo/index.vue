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
      <nut-cell v-if="!userInfo.dmc" title="Withdrawal account" desc="Unbound" @click="openBindDMCDiaolg"></nut-cell>
      <nut-cell v-else title="Withdrawal account" :desc="userInfo.dmc"></nut-cell>
      <nut-cell
        class="not_amb"
        v-if="!userInfo.amb_promo_code || !cloudCodeIsBind"
        title="AGENT Invitation Code"
        desc="Unbound"
        @click="bindAmbCode"
      ></nut-cell>
      <nut-cell v-else class="not_amb" title="AGENT Invitation Code" :desc="userInfo.amb_promo_code"></nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Linked MetaMask Wallet" class="info_title wallet_info">
      <!-- <nut-cell :desc="item.address"></nut-cell> -->

      <nut-cell v-for="(item, index) in walletInfo">
         <template #title> <span v-show="index == 0">ERC20 Address</span> </template> 
        <template #desc>
           <span v-if="!item.eyeState">{{ item.address }}</span> 
          <span v-else>{{ item.address.slice(0, 5) + '...' + item.address.slice(-5) }}</span> 
          <eyeOffIon v-if="!item.eyeState" @click="item.eyeState = true" style="font-size: 12px; margin-left: 8px" /> 
          <eyeIon v-if="item.eyeState" @click="item.eyeState = false" style="font-size: 12px; margin-left: 8px" /> 
        </template>
 
      </nut-cell>
      <div class="add_link_wallet" @click="showAllWalletList"> <MetaMask></MetaMask> Add </div>
    </nut-cell-group>
    <nut-dialog teleport="#app" title="Link Wallet" v-model:visible="showAccountList">
      <nut-radio-group v-model="choosedWallet" class="account_list">
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
  import eyeOffIon from '~icons/ion/eye-off';
  import eyeIon from '~icons/ion/eye';
  import { inject } from 'vue';
  import MetaMask from '~icons/home/metamask.svg';
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
  const initFoggieDate = inject('initFoggieDate');
  const confirmLink = () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'bind_wallet',
    });
    wallet_bind_uuid({ address: choosedWallet.value, wallet_type: 'metamask', uuid: userInfo.value.uuid })
      .then(async (res) => {
        if (res.code == 200) {
          showToast.success('Linkage Success');
          await initFoggieDate();
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
  .account_list {
    :deep {
      .nut-radio__label {
        text-align: left;
      }
    }
  }

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
    padding-bottom: 5rem;

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
    color: #fff;
    // background-color: $main-blue;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      vertical-align: middle;
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
