<template>
    <div class="main-page" :class="{ tabbar: tabbarVisible, border: showBorder }">
      <RouterView v-slot="{Component,route}">
        <MyTransition>
            <component  :is="Component" :key="route.path"></component>
        </MyTransition>
      </RouterView>
    </div>
    <nut-tabbar unactive-color="#364636" active-color="#1989fa" bottom v-model="activeTab" @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="item in tabItem" :key="item.key" :tab-title="$t(`tabbar.${item.key}`)" :icon="item.icon" />
    </nut-tabbar>
  
    <!-- 绑定dmc账户 -->
    <nut-dialog v-model:visible="bindDmcIsShow" title=" " :close-on-click-overlay="false" :show-cancel="false"
      :show-confirm="false" custom-class="CustomName">
      <template #header>
        <img src="@/assets/DMC_token.png" alt="" srcset="" style="width: 30px; height: 30px" />
        <div style="color: rgb(72 72 72);margin-left: 5px;font-size: 15px;">Add Withdrawal Account</div>
      </template>
      <p class="bucket_tip" style="text-align: left; color: rgb(72 72 72);padding-bottom: 15px;">
      <div>* This account will become the default withdrawal account</div>
      </p>
  
  
      <p style="
          margin-top: 10px;
          margin-bottom: 5px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgb(72 72 72);
        ">
        <span>Wallet account</span> <span>Required</span>
      </p>
      <nut-input v-model="accountName" placeholder="Please enter wallet account" max-length="12"
        min-length="12"></nut-input>
      <template #footer>
        <nut-button type="primary" @click="bindDmcIsShow = false">Operate Later</nut-button>
        <nut-button type="primary" @click="bindDmc" :loading="bindDmcLoading">Submit</nut-button>
      </template>
    </nut-dialog>
  
    <!-- 绑定amb code -->
    <nut-dialog v-model:visible="bindAmbCodeDialogIsShow" :close-on-click-overlay="false" :show-cancel="false"
      :show-confirm="false" custom-class="CustomName bindAmbCodeDialog">
      <template #header style="border-bottom: 0px;">
        <div style="font-weight: 600;font-size: 17px;">Bind</div>
      </template>
      <img src="@/assets/fog-works_w.png" style="height: 60px" alt="" srcset="">
      <nut-input v-model="userBindAmbCode" placeholder="Please enter AGENT Invitation Code" max-length="12"
        min-length="12"></nut-input>
      <nut-checkbox v-model="isConfirm" class="isConfirmCheckbox" style="text-align: left;" icon-size="24">I understand the
        usage scenario of this
        invitation code(official code is used by default,in case you don't have other code)</nut-checkbox>
      <template #footer>
        <nut-button type="primary" @click="bindAmbCodeDialogIsShow = false">Operate Later</nut-button>
        <nut-button type="primary" @click="bindUserAmbCode" :loading="userBindLoading"
          :disabled="!isConfirm">Accept</nut-button>
      </template>
    </nut-dialog>
  
    <Teleport to="body">
        <nut-dialog
          v-model:visible="showSocketDialog"
          title="File Update"
          :close-on-click-overlay="false"
          :show-cancel="false"
          :show-confirm="false"
          custom-class="CustomName BucketName"
          overlayClass="CustomOverlay"
        >
          <template #header>
            <span class="icon" style="margin-right: 5px">
                  <img src="@/assets/Alert.svg" alt="" srcset="" class="rewardIcon" />
                  <img src="@/assets/gift.svg" alt="" srcset="" class="giftIcon" />
            </span>
            Reward Notice
          </template>
  
          <p class="bucket_tip" style="text-align: left; word-break: break-word"
            >Congratulations！I am very lucky to inform you that a reward has arrived in your account.
          </p>
          <template #footer>
            <nut-button type="primary" style="font-size: 12px" @click="closeSocketDialog">Close</nut-button>
            <nut-button type="primary" @click="linkReward">Reward Record</nut-button>
          </template>
        </nut-dialog>
      </Teleport>
    <UploadSet v-if="curStepIndex == 4&&showUpload"></UploadSet>
  </template>
  
  <script lang="ts" setup name="BasicLayoutPage">
  import UploadSet from '@/views/nft/uploadSet.vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Home, Horizontal, My,Image } from '@nutui/icons-vue';
  import { user, search_cloud,check_promo, bind_user_promo, checkDmcAccount, updateUser, } from '@/api';
  import { bind_promo, check_promo as check_amb_promo, check_user_bind } from '@/api/amb';
  import { onMounted, provide } from 'vue';
  
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  import MyTransition from '@/components/myTransition/index.vue'
  import loadingImg from '@/components/loadingImg/index.vue';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  
  const userStore = useUserStore();
  const amb_promo_code = computed(() => userStore.getUserInfo?.amb_promo_code || '');
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userInfo = computed(() => userStore.getUserInfo);
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const curStepIndex = computed(() => userStore.getCurStepIndex); // 1 绑定大使邀请码

  watch(amb_promo_code, (newVal) => {
      if (newVal) {
    userBindAmbCode.value = newVal
    }
  },{deep:true})
  // watchEffect(() => {
  //   if (uuid.value && !cloudCodeIsBind.value) {
  //     bindAmbCode()
  //   }
  // })
  const bindAmbCodeDialogIsShow = ref(false)
  const userBindAmbCode = ref('')  // 用户想要绑定的ambcode
  const userBindLoading = ref(false)  // 用户绑定ambcode的 loading
  const isConfirm = ref(false)  //用户是否勾选已知 
  watch(bindAmbCodeDialogIsShow, () => {
    if (!amb_promo_code.value) {
      userBindAmbCode.value = import.meta.env.VITE_USE_AMBCODE
    }
    },
    { deep: true, immediate: true }
  )
  const tabItem = [
  { key: 'home', icon: Home },
    { key: 'list', icon: Horizontal },
    { key: 'nft', icon: Image },
    { key: 'member', icon: My },
  ];
  
  const router = useRouter();
  const route = useRoute();
  const showUpload = computed(() => {
    const routeName=['listDetails','filePreview','getKey','IPFSService','FileList','orderSummary','orderSumDetail','s3Info','RecordsListGuid','RecordsList']
    if (routeName.indexOf(route.name)==-1) {
      return true
    } else {
      return false
    }
  })
  const activeTab = ref(0);
  const orderTotal=ref(0)
  const tabbarVisible = ref(true);
  const showBorder = ref(true);
  watch(
    () => router,
    () => {
      const judgeRoute = tabItem.some((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      tabbarVisible.value = judgeRoute;
      showBorder.value = judgeRoute;
    },
    { deep: true, immediate: true },
  );
  
  const tabSwitch = (_item, index) => {
    switch (index) {
        case 0:
            router.push('/home');
            break;
        case 1:
            router.push('/list');
            break;
        case 2:
            router.push('/allNFTList');
            break;
        case 3:
            router.push('/member');
            break;
        case 4:
            router.push('/demo');
            break;
    }
    activeTab.value = index;
  };
  const fileSocket = ref('');
  const showSocketDialog = ref(false);
  
  const initFoggieDate = async () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'user_info',
    });
    let data = await user();
    if (data) {
      userStore.setInfo({
        ...data.data,
      });
    }
    showToast.hide('user_info')
  };
  provide('initFoggieDate',initFoggieDate)
  
  const bindDmcIsShow = ref(false); // 绑定dmc账户钱包弹窗 是否展示
  const accountName = ref(''); // 用户钱包名称
  const bindDmcLoading = ref(false) // 提交绑定dmc钱包loading状态
  
  function openBindDMCDiaolg() {
    bindDmcIsShow.value = true;
  }
  
  async function bindDmc() {
    if (accountName.value.length != 12) {
      showToast.fail('The DMC account length is 12, please enter the correct DMC account');
      return
    } else {
      let checkRes = await checkDmcAccount({
        account_name: accountName.value,
      });
      if (checkRes.account_name == accountName.value) {
        let postData = {
          dmc: accountName.value,
          wallet_type: 'wallet',
        };
        bindDmcLoading.value = true
        let bindRes = await updateUser(userInfo.value.id, postData).then((dmcRes) => {
          if (!userInfo.value.dmc) {
            if (dmcRes.code == 200) {
              showToast.success('Successfully bound DMC account');
              return true;
            } else {
              showToast.fail('Binding failed, please try again');
              return false;
            }
  
          } else {
            showToast.success(dmcRes.data);
            return false;
          }
        });
        if (bindRes) {
          await initFoggieDate();
          let ambBindRes = await check_user_bind(userInfo.value.uuid);
          if (userInfo.value.amb_promo_code && ambBindRes.code == 200) {
            showToast.text('Please wait while we update your account information.');
  
            let postData = {
              user_uuid: userInfo.value.uuid,
              amb_promo_code: userInfo.value.amb_promo_code,
              email: userInfo.value.email,
              dmc_account: userInfo.value.dmc,
            };
            const promoFunction = () => {
              return bind_promo(postData)
                .then((res2) => {
                  if (res2.code == 200) {
                    bind_user_promo({
                      amb_promo_code: userInfo.value.amb_promo_code,
                    })
                      .then((res) => {
                        if (res.code == 200) {
                          bindDmcLoading.value = false;
                          showToast.success('Bind successfully');
                          bindDmcIsShow.value = false
                        } else {
                          setTimeout(() => {
                            promoFunction();
                          }, 4000);
                        }
                      })
                      .catch(() => {
                        setTimeout(() => {
                          promoFunction();
                        }, 4000);
                      });
                  } else {
                    setTimeout(() => {
                      promoFunction();
                    }, 4000);
                  }
                })
                .catch(() => {
                  setTimeout(() => {
                    promoFunction();
                  }, 4000);
                });
            };
            await promoFunction();
          } else {
            bindDmcLoading.value = false;
            bindDmcIsShow.value = false
          }
        } else {
          bindDmcLoading.value = false;
        }
      } else {
        showToast.fail('This DMC account name is incorrect, please fill in a valid account');
        bindDmcLoading.value = false;
      }
    }
  }
  
    async function getOrder() {
      const order_state = null;
      const start_time = '';
      const end_time = '';
      const buy_result = 'success';
      await search_cloud({ ps: 2, pn: 1, order_state, start_time, end_time, buy_result }).then((res) => {
        orderTotal.value = res?.result?.total;
         if (orderTotal.value > 0) {
          userStore.setcurStepIndex(4);
        } else {
          userStore.setcurStepIndex(3);
        }
      });
    }
  
  async function bindAmbCode() {
  
    if (!uuid.value) {
      showToast.fail('Failed to get user id, please refresh the page and try again.');
  
      return false;
    }
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'amb-code',
    });
    await check_user_bind(uuid.value)
      .then(async(res2) => {
        if (res2.result.bind) {
  
          if (res2.result.approved && res2.result.refuse) {
            userStore.setcurStepIndex(2)
            userStore.setambRefuse(true);
  
            // refuse
            const onOk = () => {
              userStore.setcurStepIndex(1)
              bindAmbCodeDialogIsShow.value = true
            };
            showDialog({
              title: 'Notice',
              content: `Your application to join the AGENT platform has been rejected  ${res2.result.fault ? 'with the reason:' + res2.result.fault : ''
                }. you can change the AGENT invitation code and try to join another AGENT platform!`,
              cancelText: 'Cancel',
              okText: 'Confirm',
              popClass: 'dialog_class',
              onOk,
            });
          } else if (res2.result.approved && !res2.result.refuse) {
            userStore.setCloudCodeIsBind(true);
            userStore.setambRefuse(false);
            userStore.setcurStepIndex(3)
            if (!amb_promo_code.value) {
              await bind_user_promo({amb_promo_code: res2.result.amb_promo_code,})
              await initFoggieDate();
            }
            // approved
            await getOrder()
            if (orderTotal.value == 0 ) {
              if(!window.localStorage.getItem('hasCloudApproved')){
                window.localStorage.hasCloudApproved = true
                const onOk = () => {
                router.push({ name: 'Shop',  });
              };
              let src = require('@/assets/fog-works_w.png');
              let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#000000;text-align:left;'>Welcome to Foggie Mobile! Your application has been approved, and you can now buy bucket ,embarking on your Foggie journey.</p >`;
              showDialog({
                title: 'Notice',
                content: str,
                cancelText: 'Cancel',
                okText: 'Confirm',
                popClass: 'dialog_class',
                onOk,
              });
              } 
            }
          } else {
            userStore.setcurStepIndex(2)
            let src = require('@/assets/fog-works_w.png');
            let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#535353;text-align:left;'>Awaiting approval from the AGENT, please be patient until the approval is complete</p >`;
            showDialog({
              title: 'AGENT Invitation Code',
              content: str,
              'no-ok-btn': true,
              'cancel-text': 'OK',
            });
  
  
          }
        } else {
          userStore.setcurStepIndex(1)
          bindAmbCodeDialogIsShow.value = true
        }
      })
      .finally(() => {
        showToast.hide('amb-code');
      });
  }
  
  async function bindUserAmbCode() {
    if (!userBindAmbCode.value) {
      showToast.fail('Please enter the invitation code');
      return
    }
  
    let params = {
      user_uuid: userInfo.value.uuid,
      amb_promo_code: userBindAmbCode.value,
      email: userInfo.value.email,
      dmc_account: userInfo.value.dmc,
    }
  
    userBindLoading.value = true
    check_amb_promo(userBindAmbCode.value).then((res) => {
      if (res.code == 200) {
        bind_promo(params).then((res2) => {
          if (res2.code == 200) {
            bind_user_promo({ amb_promo_code: userBindAmbCode.value, }).then(async (res) => {
              if (res.code == 200) {
                showToast.success('Please wait for the successful application to join');
                userBindLoading.value = false
                bindAmbCodeDialogIsShow.value = false
                await initFoggieDate();
                bindAmbCode()
              } else {
                userBindLoading.value = false
              }
            }).finally(() => {
              userBindLoading.value = false
            })
  
          } else {
            userBindLoading.value = false
          }
        }).catch(() => {
          userBindLoading.value = false
        })
      } else {
        userBindLoading.value = false
        showToast.fail(res.message || 'Binding failed, please try again');
        return false;
      }
    }).catch(() => {
      userBindLoading.value = false
    })
  
  }
  
  
  provide('openBindDMCDiaolg', openBindDMCDiaolg)
  provide('bindAmbCode', bindAmbCode)
  
  
  
  const initWebSocket = () => {
      console.log('initWebSocket');
      const url = `ws://devlop.fogworks.io:9099/ambmgr/common/profit_ws`;
      fileSocket.value = new WebSocket(url);
      fileSocket.value.onopen = () => {
          let refresh_token = userStore.getToken;
          let token = refresh_token.split(' ')[1];
          console.log('openWebSocket token',token);
        //   showSocketDialog.value=true;
          fileSocket.value.send(token);
      };
  
      fileSocket.value.onmessage = (event) => {
          const message = JSON.parse(event.data);
          showSocketDialog.value=true;
          console.log('Received message from server:', message);
      };
  
      fileSocket.value.onclose = (event) => {
          console.log('WebSocket connection closed:', event);
      };
      fileSocket.value.onerror = (event) => {
          console.error('WebSocket connection error:', event);
      };
  };
  
  const closeSocketDialog = () => {
      showSocketDialog.value = false;
  };
  const linkReward = ()=>{
    showSocketDialog.value=false;
    router.push('/analysisChart');

  };
  onMounted(async () => {
    if (userStore.getToken) {
     await initFoggieDate()
      bindAmbCode()
      initWebSocket();
  
      // bindUser();
    }
  });
  </script>
  <style lang="scss">
    .rewardIcon {
      width: 50px;
      height: 50px;
    }
    .giftIcon{
     position: absolute;
      top: 8px;
      right: 10px;
      width: 150px;
      height: 150px;
    }
  </style> 
  <style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
  }
  
  .main-page {
    box-sizing: border-box;
    // height: calc(100vh - 92px);
    // overflow-y: scroll;
    height: unset;
    height: 100%;
  
    overflow-x: hidden;
    // background: #fff;
  }
  
  .tabbar {
    // height: calc(100vh - 92px);
    height: unset;
    // padding-bottom: 100px;
  }
  
  .border {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 100px;
    // background: #f5f7fb;
  }
  @media screen and (min-width: 500px){
    :deep{
      .nut-tabbar{
        --nut-tabbar-height:60px;
        .nut-popover-item-img{
          width: 20px;
          height: 20px;
          font-size:1rem
        }
        .nut-tabbar-item_icon-box_nav-word{
          font-size:1rem
        }
      }
    }
  }
  </style>
  