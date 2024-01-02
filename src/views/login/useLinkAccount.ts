import { useUserStore } from '@/store/modules/user';
import { showDialog } from '@nutui/nutui';
import { useRouter } from 'vue-router';
import injectedModule from '@web3-onboard/injected-wallets';
import { init, useOnboard } from '@web3-onboard/vue';
import metamaskSDK from '@web3-onboard/metamask';

export default function useLinkAccount() {
  const metamaskSDKWallet = metamaskSDK({
    options: {
      extensionOnly: false,
      dappMetadata: {
        name: 'Web3Onboard',
        url: 'https://amb.u2i.net',
      },
      // openDeeplink: (link) => {
      //   window.open(link);
      // },
      // useDeeplink: true,
    },
  });
  const infuraKey = '<INFURA_KEY>';
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
  const web3Onboard = init({
    wallets: [metamaskSDKWallet],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet',
        rpcUrl,
      },
      {
        id: 42161,
        token: 'ARB-ETH',
        label: 'Arbitrum One',
        rpcUrl: 'https://rpc.ankr.com/arbitrum',
      },
      {
        id: '0xa4ba',
        token: 'ARB',
        label: 'Arbitrum Nova',
        rpcUrl: 'https://nova.arbitrum.io/rpc',
      },
      {
        id: '0x2105',
        token: 'ETH',
        label: 'Base',
        rpcUrl: 'https://mainnet.base.org',
      },
    ],
    appMetadata: {
      name: 'Wallet',
      icon: '<svg>My App Icon</svg>',
      description: 'Login via MetaMask',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      ],
    },
  });
  const accountsList = ref(<any>[]);
  const showAccountList = ref(false);
  const userStore = useUserStore();
  const router = useRouter();
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const loginType = computed(() => userStore.getUserInfo?.loginType);
  const { wallets, connectWallet, disconnectConnectedWallet, connectedWallet } = useOnboard();

  const showLinkAccount = () => {
    if (loginType.value == 'MetaMask') {
      const onOk = () => {
        router.push('/linkAccount');
      };
      showDialog({
        title: 'Warning',
        content: 'Do you need an email address to log in?',
        cancelText: 'Cancel',
        okText: 'Confirm',
        popClass: 'dialog_class',
        onOk,
      });
    }
  };
  const showAllWalletList = async () => {
    if (window.ethereum) {
      // await connectWallet();
      await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      accountsList.value = await window.ethereum.request({
        method: 'eth_accounts',
        params: [],
      });
      showAccountList.value = true;
      console.log(accountsList.value, 'accountsList');
    }
  };
  return {
    showLinkAccount,
    showAllWalletList,
    accountsList,
    showAccountList,
  };
}
