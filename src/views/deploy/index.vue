<template>
    <div class="nft-page" v-if="isMobileDevice">
      <TopBack class="top_title" type="2"><span class="title">Deploy</span> </TopBack>
      <nut-form>
        <nut-image
          :src="contractData.metaImage"
          width="100%"
          height="100%"
          fit="contain"
          position="center"
          show-error
          show-loading
        ></nut-image>
        <nut-form-item label="Name">
          {{ contractData.name }}
        </nut-form-item>
        <nut-form-item label="Symbol">
          <nut-input v-model="contractData.symbol" class="nut-input-text" placeholder="Please Ennter Symbol" type="text" />
        </nut-form-item>
        <nut-form-item label="Image Link">
          {{ contractData.metaImage }}
        </nut-form-item>
        <nut-form-item label="Description">
          <nut-input v-model="contractData.description" class="nut-input-text" placeholder="Please Enter Description" type="text" />
        </nut-form-item>
        <nut-form-item label="Price">
          <nut-input-number v-model="contractData.cost" :step="0.0001" min="0" decimal-places="4" placeholder="Price" />
        </nut-form-item>
        <nut-cell is-link @click="editionSizeActionSheetIsShow = !editionSizeActionSheetIsShow" style="justify-content: space-between">
          <div style="width: 50%; border-right: 1px dashed #555555">Edition size</div>
          <nut-tag type="success">{{ editionState.value == 0 ? edition_size1 : edition_size2 }}</nut-tag>
        </nut-cell>
        <nut-action-sheet v-model:visible="editionSizeActionSheetIsShow" :menu-items="editionSizeMenuItems" @choose="editionSizeChoose" />
  
        <nut-form-item v-if="editionState.value === 1" class="customForItem">
          <nut-range hidden-tag v-model="edition_size2" :max="edition_size2 > 10000 ? edition_size2 : 10000" :min="1"></nut-range>
          <nut-input-number v-model="edition_size2" :step="1" decimal-places="0" placeholder="" />
        </nut-form-item>
  
        <div class="customBox customForItem">
          <label class="customLabel">Mint amount limit per address</label>
          <div class="customItem">
            <nut-range
              v-model="contractData.maxPerTx"
              hidden-tag
              :max="contractData.maxPerTx > 10 ? contractData.maxPerTx : 10"
              :min="1"
            ></nut-range>
            <nut-input-number v-model="contractData.maxPerTx" :step="1" decimal-places="0" placeholder="Price" />
          </div>
        </div>
  
        <div class="customBox">
          <label class="customLabel">Start & end time</label>
          <nut-cell title="start time" :desc="startPopupDesc" @click="startShow = true"></nut-cell>
          <nut-popup position="bottom" v-model:visible="startShow">
            <nut-date-picker :min-date="new Date()" v-model="contractData.startTime" :threeDimensional="false" @confirm="startPopupConfirm">
            </nut-date-picker>
          </nut-popup>
  
          <nut-cell title="end time" :desc="endPopupDesc" @click="endShow = true"></nut-cell>
          <nut-popup position="bottom" v-model:visible="endShow">
            <nut-date-picker :min-date="new Date()" v-model="contractData.endTime" :threeDimensional="false" @confirm="endPopupConfirm">
            </nut-date-picker>
          </nut-popup>
        </div>
      </nut-form>
  
      <nut-button type="primary" block :loading="isDeploy" :disabled="isDeploy" @click="deployContract('mobile')">Deploy</nut-button>
    </div>
    <div v-else class="pc_box">
      <TopBack class="top_title" type="2"><span class="title">Deploy</span> </TopBack>
      <div class="mianBox">
        <div class="mian_box">
          <div class="left_box">
            <el-image
              style="width: 100%; height: 100%; object-fit: contain"
              :src="contractData.metaImage"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="[contractData.metaImage]"
              :initial-index="0"
              fit="contain"
            />
            <div class="name">
              <p>Collection name</p>
              <h5 style="font-size: 20px; margin-left: 10px">{{ contractData.name }}</h5>
            </div>
          </div>
  
          <el-form
            ref="formLineRef"
            label-width="250px"
            :model="contractData"
            size="large"
            style="margin: 0px auto"
            class="customForm"
            label-position="top"
          >
            <el-form-item label="Price" prop="cost">
              <el-input
                v-model="contractData.cost"
                style="width: 200px"
                @input="inputPrice('cost', contractData.cost)"
                placeholder="Input price"
                clearable
              />
            </el-form-item>
  
            <el-form-item label="Edition size" prop="editionState">
              <el-select v-model="editionState.value" placeholder="Select" style="width: 180px">
                <el-option v-for="item in editionSizeMenuItems" :key="item.value" :label="item.name" :value="item.value" />
              </el-select>
              <div style="margin: 0px 5px">---</div>
  
              <el-input
                v-if="editionState.value == 0"
                v-model="edition_size1"
                disabled
                style="width: 190px"
                placeholder="Input size"
                clearable
              />
              <el-input
                v-else
                v-model="edition_size2"
                style="width: 190px"
                :formatter="(value) => value.replace(/[^0-9]/g, '')"
                :parser="(value) => value.replace(/[^0-9]/g, '')"
                placeholder="Input size"
                clearable
              />
            </el-form-item>
  
            <el-form-item label="Mint amount limit per address" prop="maxPerTx">
              <el-input
                v-model="contractData.maxPerTx"
                style="width: 400px"
                :formatter="(value) => (/^$|^[1-9]\d*$/.test(value) ? value : contractData.maxPerTx)"
                :parser="(value) => (/^$|^[1-9]\d*$/.test(value) ? value : contractData.maxPerTx)"
                :min="1"
                placeholder="limit per address"
                clearable
              />
            </el-form-item>
            <el-form-item label="Symbol" prop="symbol">
              <el-input v-model="contractData.symbol" placeholder="Please Enter Symbol" clearable style="width: 400px" />
            </el-form-item>
            <el-form-item label="Description" prop="description">
              <el-input v-model="contractData.description" placeholder="Please Enter Description" clearable style="width: 400px" />
            </el-form-item>
            <el-form-item label="Start & end time">
              <el-date-picker
                v-model="startPopupDesc"
                type="date"
                :placeholder="startPopupDesc"
                value-format="YYYY-MM-DD"
                :disabled-date="disabledStartDate"
              />
              <el-date-picker
                v-model="endPopupDesc"
                type="date"
                :placeholder="endPopupDesc"
                value-format="YYYY-MM-DD"
                style="margin-left: 25px"
                :disabled-date="disabledEndDate"
              />
            </el-form-item>
  
            <el-form-item class="button_item">
              <el-button type="primary" :loading="isDeploy" :disabled="isDeploy" @click.prevent="deployContract('pc')">Deploy</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup name="nftPage">
    // import Web3 from 'web3';
    import { ref, onMounted } from 'vue';
    import * as ContractCall from '@/api/contract_func';
    import { logicAddress } from '@/setting';
    import { toWei } from '@/api/sign_utils';
    // import '@nutui/nutui/dist/nutui.css';
    import { useRoute, useRouter } from 'vue-router';
    import TopBack from '@/components/topBack/index.vue';
    import { nft_deploy, update_deploy } from '@/api';
    import { showToast, showDialog } from '@nutui/nutui';
    import { mintChainId } from '@/setting';
    import { ElMessageBox } from 'element-plus';
  
    const { v4: uuidv4 } = require('uuid');
  
    console.log('uuidv4-------', uuidv4());
  
    const isMobileDevice = computed(() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      // 此正则表达式涵盖了大多数使用的手机和平板设备
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    });
  
    const route = useRoute();
    const router = useRouter();
  
    const metaImage = ref(route.query.metaImage);
  
    const name = ref(route.query.name);
    const isDeploy = ref(false);
  
    const editionSizeActionSheetIsShow = ref(false);
    const editionSizeMenuItems = [
      {
        name: 'Open edition',
        subname: 'Unlimited',
        value: 0,
      },
      {
        name: 'Fixed',
        value: 1,
      },
    ];
  
    const editionSizeChoose = (item: { value: number }) => {
      editionState.value = item.value;
    };
  
    const disabledStartDate = (time: Date) => {
      return time.getTime() < Date.now() - 3600 * 24 * 1000;
    };
  
    const disabledEndDate = (time: Date) => {
      return time.getTime() <= Date.now() - 3600 * 24 * 1000;
    };
  
    const startPopupDesc = ref('Now');
    const endPopupDesc = ref('Forever');
    const startShow = ref(false);
    const endShow = ref(false);
    const startPopupConfirm = ({ selectedValue, selectedOptions }) => {
      console.log('selectedValue---start', selectedValue, selectedOptions);
      startPopupDesc.value = selectedOptions.map((val: { text: any }) => val.text).join('-');
      startShow.value = false;
    };
  
    const endPopupConfirm = ({ selectedValue, selectedOptions }) => {
      console.log('selectedValue---end', selectedValue, selectedOptions);
      endPopupDesc.value = selectedOptions.map((val: { text: any }) => val.text).join('-');
      endShow.value = false;
    };
  
    const contractData = ref({
      name: name.value,
      symbol: '',
      metaImage: metaImage,
      metaContent: '',
      description: '',
      maxPerTx: 10,
      maxPerWallet: 0,
      freeMintAmount: 0,
      maxSupply: 0,
      startIdx: 0,
      cost: 0,
      startTime: 0,
      endTime: 0,
      bucket: '',
      cid: '',
    });
  
    const editionState = reactive({
      options: [
        { text: 'Open edition', value: 0 },
        { text: 'Fixed', value: 1 },
      ],
      value: 0,
    });
  
    const edition_size1 = ref('Unlimited');
    const edition_size2 = ref(1000);
  
    const toTime = (time: string | number | Date, type: number) => {
      if (type === 0) {
        if (time === 'Now') {
          return Math.floor(new Date().getTime() / 1000).toString();
        } else {
          return Math.floor(new Date(`${time} 00:00:00`).getTime() / 1000).toString();
        }
      } else if (type === 1) {
        if (time === 'Forever') {
          return '0';
        } else {
          return Math.floor(new Date(`${time} 23:59:59`).getTime() / 1000).toString();
        }
      }
    };
  
    const doDeploy = async () => {
      isDeploy.value = true;
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        console.log('chainId====', chainId, mintChainId);
        if (Number(chainId) !== mintChainId) {
          console.log('current chainId', chainId);
          showToast.warn('Please switch network to Polygon Mainnet');
          isDeploy.value = false;
          return;
        }
      }
  
      const rr = await ContractCall.initBlockChain();
      if (!rr) {
        isDeploy.value = false;
        return;
      }
  
      if (editionState.value === 0) {
        contractData.value.maxSupply = 0;
      } else {
        contractData.value.maxSupply = Number(edition_size2.value);
      }
  
      contractData.value.maxPerWallet = contractData.value.maxPerTx;
      const free_limit_per_address = 0;
      const start_index = 1;
  
      const start_time = toTime(startPopupDesc.value, 0);
      const end_time = toTime(endPopupDesc.value, 1);
  
      //TODO Tell the backend to start deploying
  
      const account = await ContractCall.getAccount();
  
      let uuid = uuidv4();
      console.log('uuid-------', uuid, contractData.value.metaImage);
  
      let data1 = {
        account,
        chain_type: 'Mumbai',
        logicAddress,
        name: contractData.value.name,
        symbol: contractData.value.symbol,
        meta_image: contractData.value.metaImage,
        description: contractData.value.description + uuid,
        max_per_tx: Number(contractData.value.maxPerTx) === 0 ? 10 : Number(contractData.value.maxPerTx),
        max_per_wallet: Number(contractData.value.maxPerWallet) === 0 ? 10 : Number(contractData.value.maxPerWallet),
        max_supply: Number(contractData.value.maxSupply),
        cost: contractData.value.cost.toString(),
        start_time,
        end_time,
        uuid,
        bucket: contractData.value.bucket,
        cid: contractData.value.cid,
      };
  
      nft_deploy(data1)
        .then((res) => {
          console.log('nft_deploy-------', res);
        })
        .catch((err) => {
          console.log('nft_deploy-------err', err);
          isDeploy.value = false;
        });
  
      console.log('contractData----', data1);
  
      const { txId, contract_address } = await ContractCall.deployProxyContract(
        logicAddress,
        contractData.value.name,
        contractData.value.symbol,
        contractData.value.metaImage,
        '',
        contractData.value.description + ' ' + uuid,
        Number(contractData.value.maxPerTx) === 0 ? 10 : Number(contractData.value.maxPerTx),
        Number(contractData.value.maxPerWallet) === 0 ? 10 : Number(contractData.value.maxPerWallet),
        free_limit_per_address,
        contractData.value.maxSupply,
        start_index,
        toWei(contractData.value.cost.toString()),
        start_time,
        end_time,
      );
  
      console.log('contract_address', contractData.value.description + ' ' + uuid, contract_address, txId);
  
      if (contract_address !== '') {
        // TODO   Tell the backend that the deployment was successful
        await update_deploy({
          state: 'finish',
          uuid,
          contract: contract_address,
          txId,
        });
        showToast.success('Deploy success');
        isDeploy.value = false;
  
        router.push({ path: '/nftList', query: { type: 2 } });
      } else {
        console.log('contract_address--fail', contract_address, '----', txId);
        // await update_deploy({
        //   state: 'failed',
        //   uuid,
        //   contract: contract_address,
        //   txId,
        // });
        showToast.fail('Deploy failed');
        isDeploy.value = false;
      }
    };
  
    const deployContract = async (type) => {
      if (isDeploy.value) {
        return;
      }
  
      const start_time = toTime(startPopupDesc.value, 0);
      const end_time = toTime(endPopupDesc.value, 1);
      if (Number(end_time) > 0 && Number(start_time) > Number(end_time)) {
        showToast.warn('End time cannot be earlier than start time');
        return;
      }
  
      if (type === 'pc') {
        ElMessageBox.confirm(
          `<p>Name: ${contractData.value.name}</p> 
            <p>Symbol: ${contractData.value.symbol || '-'}</p>
            <p>Description: ${contractData.value.description || '-'}</p>
            <p>Price: ${contractData.value.cost}</p>
            <p>Edition size: ${editionState.value == 0 ? edition_size1.value : edition_size2.value || '-'}</p>
            <p>Mint amount limit per address: ${contractData.value.maxPerTx || '-'}</p>
            <p>Start time: ${startPopupDesc.value}</p>
            <p>End time: ${endPopupDesc.value}</p>`,
          'Deploy Detail',
          {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
          },
        )
          .then(() => {
            doDeploy();
          })
          .catch(() => {});
      } else {
        showDialog({
          title: 'Deploy Detail',
          content: `Name: ${contractData.value.name} \n 
            Symbol: ${contractData.value.symbol || '-'} \n 
            Description: ${contractData.value.description || '-'} \n
            Price: ${contractData.value.cost} \n 
            Edition size: ${editionState.value == 0 ? edition_size1.value : edition_size2.value} \n 
            Mint amount limit per address: ${contractData.value.maxPerTx} \n 
            Start time: ${startPopupDesc.value} \n 
            End time: ${endPopupDesc.value}`,
          popClass: 'dialog-deploy',
          cancelText: 'Cancel',
          okText: 'OK',
          onCancel: () => {},
          onOk: () => {
            doDeploy();
          },
        });
      }
    };
  
    const init = async () => {
      if (window.ethereum) {
        window.ethereum.on('chainChanged', (chainId) => {
          if (chainId !== mintChainId) {
            console.log('123');
            // alert(`Network Need changed to: Polygon Mainnet`);
            showToast.warn('Please switch network to Polygon Mainnet');
          }
        });
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (Number(chainId) !== mintChainId) {
          showToast.warn('Please switch network to Polygon Mainnet' + chainId);
          return;
        }
      }
    };
  
    function inputPrice(key, value) {
      if (value != '' && value.substr(0, 1) == '.') {
        value = '';
      }
      if (key == 'cost') {
        if (value > 9007199254740991) value = '9007199254740991';
      }
      value = value.replace(/^0*(0\.|[1-9])/, '$1');
      value = value.replace(/[^\d.]/g, '');
      value = value.replace(/\.{2,}/g, '.');
      value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      value = value.replace(/^(\-)*(\d+)\.(\d{0,4}).*$/, '$1$2.$3');
  
      if (value.indexOf('.') < 0 && value != '') {
        if (value.substr(0, 1) == '0' && value.length == 2) {
          value = value.substr(1, value.length);
        }
      }
      contractData.value[key] = value;
    }
  
    onMounted(async () => {
      init();
    });
  
    watch(
      () => router.currentRoute.value.query,
      (toPath) => {
        console.log('------route', toPath);
        contractData.value.name = toPath.name;
        contractData.value.metaImage = toPath.metaImage;
        console.log('-------contractData', contractData.value);
        if (toPath.metaImage && typeof toPath.metaImage === 'string') {
          contractData.value.bucket = toPath.metaImage.split('://')[1]?.split('.')[0];
          contractData.value.cid = toPath.metaImage.split('/ipfs/')[1];
        }
        init();
      },
      { immediate: true, deep: true },
    );
    // watch(
    //   route.query,
    //   (val) => {
    //     console.log('route.query-------', val);
    //     contractData.value.name = route.query.name;
    //     contractData.value.metaImage = route.query.metaImage;
    //     init();
    //   },
    //   { deep: true, immediate: true },
    // );
  </script>
  
  <style lang="scss" scoped>
    ::v-deep {
      .customForItem {
        .nut-form-item__body__slots {
          display: flex !important;
          align-items: center;
          gap: 30px;
        }
      }
  
      @media screen and (min-width: 500px) {
        $maxWidth: 1260px;
  
        .mianBox {
          box-sizing: border-box;
          min-height: calc(100vh - 74px);
          padding: 20px 30px;
          .mian_box {
            max-width: #{$maxWidth};
            display: flex;
            align-items: center;
            margin: 0px auto;
  
            .left_box {
              flex: 0 0 300px;
              height: 300px;
              width: 300px;
              .name {
                color: #000;
                font-size: 16px;
                font-weight: 700;
                width: 100%;
                margin: 15px 0px;
              }
            }
          }
  
          .customForm {
            min-width: 500px;
          }
        }
  
        .el-form-item__label {
          // color: #4a4643 !important;
          // font-size: 16px;
          font-weight: 600;
        }
  
        .el-input__wrapper {
          background-color: #f3f6f9;
          border-color: #f3f6f9;
          color: #3f4254;
          border-radius: 7px;
        }
  
        .el-textarea__inner {
          min-height: 100px !important;
        }
  
        .el-input.is-disabled .el-input__wrapper,
        .el-textarea.is-disabled .el-textarea__inner {
          background-color: #e4e4e4;
        }
  
        .el-image {
          border-radius: 20px;
          outline: 2px #82797c solid;
        }
  
        .el-image img:hover {
          position: relative;
          border-radius: 20px;
  
          &::after {
            display: block;
          }
        }
  
        .el-image img::after {
          display: none;
          contain: '123';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          cursor: default;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          opacity: 1;
          font-size: 20px;
          background-color: rgb(0 0 0 / 50%);
          transition: opacity 0.3s;
        }
  
        .button_item > .el-form-item__content {
          justify-content: flex-end;
          padding-right: 50px;
        }
      }
    }
  
    .nft-page {
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
    }
  
    .title {
      color: #000;
      font-weight: 700;
    }
  
    .customBox {
      padding: 10px 16px;
  
      .customItem {
        display: flex !important;
        align-items: center;
        gap: 30px;
        padding: 40px 16px;
      }
  
      .customLabel {
        display: block;
      }
    }
  
    // @media screen and (min-width: 500px) {
    //   .nft-page {
    //     padding: 15px;
    //     border-bottom: 1px solid #e5e5e5;
    //     :deep {
    //       .nut-cell {
    //         padding: 1rem 1.5rem;
    //         font-size: 1.2rem;
    //         --nut-input-font-size: 1.2rem;
    //         --nut-form-item-label-width: 8rem;
    //         --nut-cell-line-height: 2rem;
    //         --nut-form-item-label-font-size: 1.2rem;
    //         --nut-cell-desc-font: 1.2rem;
    //       }
    //       .nut-input-number {
    //         --nut-inputnumber-icon-size: 2rem;
    //         --nut-inputnumber-input-font-size: 1.2rem;
    //       }
    //       .nut-tag {
    //         --nut-tag-font-size: 1.2rem;
    //       }
    //     }
    //   }
    //   .customBox {
    //     padding: 10px 16px;
  
    //     .customItem {
    //       gap: 30px;
    //       padding: 40px 16px;
    //       :deep {
    //         .nut-range-container .nut-range-min,
    //         .nut-range-container .nut-range-max {
    //           --nut-font-size-1: 1.2rem;
    //         }
    //         .nut-range-button {
    //           --nut-range-bar-btn-width: 2rem;
    //           --nut-range-bar-btn-height: 2rem;
    //         }
    //         .el-date-editor {
    //           --el-date-editor-width: 10rem;
    //         }
    //       }
    //     }
    //   }
    // }
    ::v-deep .nut-form-item__body__slots {
      color: #000;
    }
  
    ::v-deep .nut-cell__value {
      color: #000;
    }
  
    ::v-deep .nut-input-box .input-text::placeholder {
      color: #ccc;
    }
  </style>
  <style>
    .dialog-deploy .nut-dialog__header {
      font-size: 1rem !important;
    }
  
    .dialog-deploy .nut-dialog__content {
      color: #999 !important;
    }
  </style>
  