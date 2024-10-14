<template>
  <div>
    <!-- <LoginHeader></LoginHeader> -->
    <TopBack class="top_title" type="2"
      ><span class="title">Mint</span>
      <uploadSet #right></uploadSet>
    </TopBack>
    <div v-if="info.name" class="mint-main">
      <!-- Add your minting form or components here -->
      <nut-image class="mint-img" :src="info.metaImage" width="50%" show-loading />
      <nut-cell title="Name" :desc="info.name"></nut-cell>
      <nut-cell title="Symbol" :desc="info.symbol"></nut-cell>
      <nut-cell class="contract-text" title="Contract: " :desc="info.contract"></nut-cell>
      <nut-cell title="Maximum Minting" :desc="info.maxSupply === 0 ? 'Unlimited' : info.maxSupply.toString()"></nut-cell>
      <nut-cell title="Total minted" :desc="info.totalSupply.toString()"></nut-cell>
      <nut-cell title="Maximum Minting Per Wallet" :desc="info.maxPerWallet.toString()"></nut-cell>
      <nut-cell title="Current wallet has minted" :desc="info.accountMint.toString()"></nut-cell>
      <nut-cell title="Minting Start Time" :desc="info.startTime"></nut-cell>
      <nut-cell title="Minting End Time" :desc="info.endTime"></nut-cell>
    </div>
    <div class="button-container">
      <nut-button
        v-if="info.name && inMintTIme"
        :loading="isMint"
        class="mint-btn"
        type="primary"
        :disabled="isMint || canMint"
        @click="mint"
        >{{ mintName }}</nut-button
      >
      <nut-button v-if="info.name" type="primary" :disabled="isMint" @click="toNFTList">Back To NFT List</nut-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="nftPage">
  import { ref, onMounted } from 'vue';
  import * as ContractCall from '@/api/contract_func';
  import { mintChainId } from '@/setting';
  import { useRoute, useRouter } from 'vue-router';
  import TopBack from '@/components/topBack/index.vue';
  import { transferUTCTime } from '@/utils/util';
  const route = useRoute();

  import { logicAddress } from '@/setting';
  import { nft_mint, update_mint } from '@/api';
  import { showToast } from '@nutui/nutui';
  import loadingImg from '@/components/loadingImg/index.vue';
  import * as Prox from '@/pb/prox_pb.js';
  import * as grpcService from '@/pb/prox_grpc_web_pb.js';
  import { poolUrl } from '@/setting.js';
  import { get_unique_order, get_order_sign, dm_get_by_domain, dm_order_get_token } from '@/api/index';

  const { v4: uuidv4 } = require('uuid');

  const router = useRouter();
  const isMint = ref(false);
  const canMint = ref(false);
  const mintName = ref('Mint');
  const inMintTIme = ref(false);

  const info = ref({
    logicAddress,
    name: '',
    symbol: '',
    metaImage: '',
    metaContent: '',
    description: '',
    maxPerTx: 0,
    maxPerWallet: 0,
    freeMintAmount: 0,
    maxSupply: 0,
    startIdx: 0,
    cost: '0',
    startTime: '',
    endTime: '',
    contract: '',
    totalSupply: 0,
    accountMint: 0,
    cid: '',
    bucket: '',
    order_uuid: '',
  });

  const contractAddress = ref(route.query.contract || '');
  const currentAccount = ref(route.query.account || '');

  const mint = async () => {
    if (isMint.value) {
      return;
    }
    isMint.value = true;

    const account = await ContractCall.getAccount();

    let mint_uuid = uuidv4();
    const r = await nft_mint({
      account,
      contract: contractAddress.value,
      mint_uuid,
    });

    console.log('r--------', r);

    const _r = await ContractCall.mint(1, info.value.cost);
    console.log('_r--------', _r);

    if (_r[0]) {
      console.log('mint error');
      await update_mint({
        mint_uuid,
        state: 'failed',
        contract: contractAddress.value,
        account,
      });
      showToast.fail('Mint failed');
      isMint.value = false;
    } else {
      console.log('mint success', _r[1]);
      console.log('mint success--------count', _r[1]?.events?.Transfer?.returnValues?.tokenId);
      const tokenId = _r[1]?.events?.Transfer?.returnValues?.tokenId;
      const transactionHash = _r[1]?.transactionHash;
      console.log('tokenId--------', {
        mint_uuid,
        state: 'finish',
        contract: contractAddress.value,
        account,
        token_id: tokenId.toString(),
        tx_id: transactionHash,
      });
      if (tokenId && transactionHash) {
        await update_mint({
          mint_uuid,
          state: 'finish',
          contract: contractAddress.value,
          account,
          token_id: tokenId.toString(),
          tx_id: transactionHash,
        });
        if (info.value.maxSupply > 0) {
          info.value.maxSupply += 1;
        }
        info.value.totalSupply += 1;
        info.value.accountMint += 1;

        let ip = `https://${info.value.bucket}.${poolUrl}:7007`;
        let server = new grpcService.default.ServiceClient(ip, null, null);
        let ProxUpdateNFTRequest = new Prox.default.ProxUpdateNFTRequest();
        let ProxNFTInfo = new Prox.default.ProxNFTInfo();
        console.log('header----------', header);
        ProxUpdateNFTRequest.setHeader(header);
        ProxNFTInfo.setCid(info.value.cid);
        ProxNFTInfo.setContractid(contractAddress.value);
        ProxNFTInfo.setTokenid(tokenId.toString());
        ProxUpdateNFTRequest.addNftinfos(ProxNFTInfo);

        console.log('ProxUpdateNFTRequest----------', ProxUpdateNFTRequest, ProxNFTInfo);

        await server.updateNFT(ProxUpdateNFTRequest, metadata.value, (err, data) => {
          if (err) {
            console.log('err----------', err);
          } else {
            console.log('data----------', data);
          }
        });

        if (
          (info.value.maxSupply > 0 && info.value.totalSupply >= info.value.maxSupply) ||
          info.value.accountMint >= info.value.maxPerWallet
        ) {
          canMint.value = true;
        }
        mintName.value = 'Mint Again';
        showToast.success('Mint success');
      }

      isMint.value = false;
    }
  };

  const fetchCollection = async () => {
    if (mintChainId && contractAddress.value && currentAccount.value) {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
        duration: 0,
        id: 'mint_info',
      });

      const rr = await ContractCall.initBlockChain();
      if (!rr) {
        showToast.hide('mint_info');
        return;
      }

      const xr = await ContractCall.loadContract(contractAddress.value);
      console.log('xr--------', xr);
      if (xr) {
        const _contractinfo = await ContractCall.getContractBaseInfo();
        console.log('_contractinfo--------', _contractinfo, contractAddress.value);
        info.value.cost = _contractinfo.cost;
        info.value.metaImage = _contractinfo.metaImageURI;
        info.value.name = _contractinfo.name;
        info.value.contract = _contractinfo.royaltyReceiver;
        info.value.symbol = _contractinfo.symbol;
        info.value.description = _contractinfo.metaDescription;
        info.value.totalSupply = Number(_contractinfo.totalSupply);

        info.value.maxSupply = Number(_contractinfo.maxSupply);
        info.value.maxPerWallet = Number(_contractinfo.maxPerWallet);
        info.value.maxPerTx = Number(_contractinfo.maxPerTx);

        const _account_mint = ContractCall.getRResult(await ContractCall.mintAmountOf(currentAccount.value));

        info.value.accountMint = Number(_account_mint);
        info.value.startTime = transferUTCTime(Number(_contractinfo.publicStartTime) * 1000);
        info.value.endTime =
          Number(_contractinfo.publicEndTime) === 0 ? 'Forever' : transferUTCTime(Number(_contractinfo.publicEndTime) * 1000);

        console.log('_contractinfo.metaImageURI--------', _contractinfo.metaImageURI);

        info.value.bucket = _contractinfo.metaImageURI.split('://')[1]?.split('.')[0];
        info.value.cid = _contractinfo.metaImageURI.split('/ipfs/')[1];

        mintTIme(Number(_contractinfo.publicStartTime) * 1000, Number(_contractinfo.publicEndTime) * 1000);

        await getOrderInfo();

        if (
          (Number(_contractinfo.maxSupply) > 0 && _contractinfo.totalSupply >= Number(_contractinfo.maxSupply)) ||
          Number(_account_mint) >= _contractinfo.maxPerWallet
        ) {
          canMint.value = true;
        }
        showToast.hide('mint_info');
      } else {
        showToast.hide('user_info');
      }
    }
  };

  const mintTIme = (start: number, end: number) => {
    end = end || 4102416000000;
    const t = new Date().getTime();
    if (t > start && t < end) {
      inMintTIme.value = true;
    }
  };
  const toNFTList = () => {
    router.push({
      name: 'NFTList',
    });
  };

  let header = new Prox.default.ProxHeader();
  let metadata = ref({});

  const getOrderInfo = async () => {
    let res = await dm_get_by_domain({ domain: info.value.bucket });
    // let res = {
    //   id: 7,
    //   order_id: '1006',
    //   foggie_id: 'baeqagmjqga3a',
    //   wallet: '0x40664fc3babd60ffb7820d7a8926516484488f4c',
    //   type: 1,
    //   method: 1,
    //   storage_id: 2,
    //   domain: 'dmcxac1111',
    //   rpc: '47.251.7.57:6007',
    //   peer_id: '12D3KooWLiBxpVD5xtwPbbiwzNuwSoArEYVqoR9No93Wg66dfA8v',
    //   pool_type: 1,
    //   pool_wallet: 'test12345',
    //   epoch: 1,
    //   expire: '2024-10-04T07:13:52.000Z',
    //   space: 1,
    //   signature:
    //     '0x57a4c828bfffa8d48b0d3a5504b55357ac7731830f40a0d397421f18475924cd398bbc8d512fac04a4126b887e43653164a87dfa084d80b29b9db296bd8d36741b',
    //   sign_timestamp: '20241008T071947Z',
    //   public_key: '0x9245dFFf4eE2916E2F0b022EC628ffE1F7a93ee6',
    //   dmcx_price: '0.10045',
    //   gwt_price: null,
    //   paid_price: '0.10045',
    //   to_wallet: '0x34ac8395d2628982b3acd1884a4f7b6b41fe556e',
    //   price_signature:
    //     '0xa72fa1716d27a8f479ab883ca16e1b157680f4b0d4a6d1fe6abf2eb3165dfbfe6a03587020744868bb2335ad64db6338c8e492d5b20781bfe3d8f3d567b4b9af1c',
    //   mp_domain: 'foggiempool1',
    //   status: 3,
    //   retry_num: 0,
    //   transaction_id: '0xb2f01e6eb5b52a6df9326dc8e26830de3933adfaa9b5fe09e84cd0ede3f99fd8',
    //   parent_order_id: null,
    //   update_time: '2024-10-08T07:19:47.000Z',
    //   created_at: '2024-09-27T07:13:52.000Z',
    // };
    if (res?.data) {
      const order_id = res?.data?.order_id;
      const signData = await dm_order_get_token({ orderId: order_id });

      // orderInfo.value.rpc = '218.2.96.99:6007';
      console.log('orderInfo.value==11:', res);
      header.setPeerid(res?.data.peer_id);
      header.setId(res?.data.foggie_id);

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const appType = userAgent.indexOf('MetaMask') > -1 ? 'dapp-metamask' : userAgent.indexOf('Mobile') > -1 ? 'dapp-mobile' : 'dapp-pc';
      header.setApptype(appType);

      let cur_token = signData?.data?.signature;
      const date = signData?.data?.timestamp;
      metadata.value = {
        'X-Custom-Date': date,
      };
      header.setToken(cur_token);
    }
  };
  onMounted(async () => {
    fetchCollection();
  });
</script>

<style scoped>
  /* Add your component styles here */
  .mint-img {
    margin: 5% auto;
  }
  .mint-btn {
    margin: 0 5%;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-top: auto;
    .button {
      flex: 1;
      margin: 0 10px;
    }
  }
  ::v-deep .nut-cell__value {
    color: #fff;
  }
  .mint-main .nut-cell {
    background: #000;
    color: #fff;
  }
</style>
