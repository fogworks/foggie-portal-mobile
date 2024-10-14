<template>
  <div>
    <div class="dmc_account">
      <div>
        <IconSwitch @click="getList"></IconSwitch>
      </div>
      <div class="dmc_account_box">
        <div>
          Hello,
          <router-link to="/member">
            {{ (userInfo.email && userInfo.email.split('@')[0]) || handleID(userInfo.address) }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="detail_box">
      <h3 class="dmc_amount">654,000.00 <span>DMC</span></h3>
      <h4 class="DMC_USD">~ 1212.5600 <span>USD</span></h4>
      <div class="detail_box_bottom">
        <div>
          <div class="detail_box_bottom_type">Space</div>
          <div>100TB</div>
        </div>
        <div>
          <div class="detail_box_bottom_type">Today new Funds</div>
          <div>+99.00 DMC</div>
        </div>
      </div>
    </div>
    <div class="StorageDevice">
      <h4>Storage Device</h4>
      <div class="StorageDevice_box">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <span class="storage_num">5</span>
            <ArrowRight2 color="red" width="10vh" height="2.5vh" />
          </div>
          <div class="echarts_bar">
            <div style="height: 60%"></div>
            <div style="height: 90%"></div>
            <div style="height: 80%"></div>
            <div style="height: 75%"></div>
            <div style="height: 80%"></div>
            <div></div>
          </div>
        </div>
        <div class="StorageDevice_bottom">
          <div>
            <span>4 </span>
            Depin Devices
          </div>
          <div class="Reward_24h">
            Reward 24H
            <ArrowRight color="#000000" height="2vh" />
          </div>
        </div>
      </div>
    </div>
    <div class="Device_box">
      <div class="Device_box_header">
        <h2 class="Device_box_header_title"
          >Device <div class="Device_box_header_num">(5)</div> <ArrowRight2 color="red"></ArrowRight2>
        </h2>
        <div class="view_All">View All</div>
      </div>
      <div class="Device_box_body">
        <div>
          <div class="deviceType_box">
            <img src="@/assets/maxio.png" alt="" srcset="" />
          </div>
          <h2>MAXIO (2)</h2>
          <h4>4 Device</h4>
        </div>

        <div>
          <div class="deviceType_box">
            <img src="@/assets/home_bucket.png" style="width: 70%; border-radius: 50%" alt="" srcset="" />
          </div>
          <h2>Bucket (3)</h2>
          <h4>50 TB</h4>
        </div>
      </div>
    </div>
    <div class="DePings">
      <div class="Device_box_header">
        <h2 class="Device_box_header_title"
          >DePings <div class="Device_box_header_num">(4)</div> <ArrowRight2 color="red"></ArrowRight2>
        </h2>
        <div class="view_All">View All</div>
      </div>


    </div>

    <Teleport to="body">
      <nut-popup position="left" pop-class="deviceList" :style="{ width: '6rem', height: '100%' }" v-model:visible="showRight">
        <nut-infinite-loading
          :load-more-txt="'Is Bottom'"
          class="file_list"
          ref="listRef"
          v-model="infinityValue"
          :has-more="hasMore"
          @load-more="loadMoreFun"
        >
          <div class="list_item" v-for="item in leftBucketList" @click="selectDevice($event, item)">
            <template v-if="item.type == 'storage'">
              <div class="left_icon_box">
                <img src="@/assets/home_bucket.png" alt="" />
              </div>
            </template>
            <template v-else>
              <nut-badge :value="item.badge" top="25" color="#FF2D2D" right="15">
                <div class="left_icon_box" :class="item.type == 'MAXIO' ? 'maxio' : ''">
                  <img src="@/assets/maxio.png" alt="" />
                </div>
              </nut-badge>
            </template>
          </div>
        </nut-infinite-loading>
        <div style="margin-top: 1rem; text-align: center">
          <div class="plus_bucket" style="margin: 0 auto" @click="choose({ name: 'Bucket' })">
            <IconPlus></IconPlus>
          </div>
        </div>
      </nut-popup>
    </Teleport>
  </div>
</template>

<script setup name="HomePage">
  import { ArrowRight2, ArrowRight } from '@nutui/icons-vue';
  import { Divider } from '@nutui/nutui';
  import IconPlus from '~icons/home/plus.svg';
  import IconSwitch from '~icons/home/switch2.svg';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
  const userInfo = computed(() => userStore.getUserInfo);

  const curBucket = ref('1');
  const leftBucketList = ref([
    {
      type: 'MAXIO',
      deviceName: 'MAXIO-001',
      id: '1',
      badge: '2',
    },
    {
      type: 'MAXIO',
      deviceName: 'MAXIO-002',
      id: '2',
      badge: '1',
    },
    {
      type: 'storage',
      deviceName: 'Bucket-001',
      id: '3',
    },
    {
      type: 'storage',
      deviceName: 'Bucket-002',
      id: '4',
    },
    {
      type: 'storage',
      deviceName: 'Bucket-003',
      id: '5',
    },
  ]);
  function selectDevice($event, item) {
    curBucket.value = item.id;
  }
  const list = ref([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]);

  const showRight = ref(false);
  const getList = async () => {
    showRight.value = true;
  };

  function handleID(id) {
    if (id) {
      return id.substring(0, 8) + '...' + id.substring(id.length - 8, id.length);
    }
  }
</script>

<style lang="scss" scoped>
  .view_All {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    color: #8f3cff;
    border-bottom: 3px solid #8f3cff;
  }

  .plus_bucket {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0 0.2rem;
    border-radius: 50%;
    border: 1px dashed $main_blue;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: $main_blue;
    }
    & + img {
      width: 3rem;
      height: 3rem;
      margin: 0 0.2rem;
      border-radius: 50%;
    }
    & + p {
      margin-top: 0.5rem;
      margin: 0.5rem;
      text-align: left;
    }
  }
  .dmc_account {
    display: grid;
    grid-template-columns: 80px auto;
    gap: 0px;
    align-items: center;
    height: 100px;
    padding: 10px 0 0 10px;
    svg {
      width: 60px;
      height: 60px;
      margin-left: 0.5rem;
      vertical-align: middle;
      border-radius: 10px;
    }

    .dmc_account_box {
      font-weight: bold;

      display: flex;
      // justify-content: flex-end;
      justify-content: space-between;
      align-items: center;

      font-size: 40px;
      color: #5758a0;
      a {
        text-decoration: underline;
      }
    }

    .Notice {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: #ececec;
      border-radius: 50%;

      img {
        height: 70%;
        width: 70%;
      }
    }

    h2 {
      font-size: 35px;
    }
  }

  .file_list {
    border-radius: 16px;
    height: calc(100% - 5rem);
    .list_item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 5px 0;
      border-top: 1px solid #eee;
      justify-content: center;
      .left_icon_box {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 60%;
          border-radius: 50%;
          margin: 20px auto;
        }
      }
      .maxio img {
        width: 75%;
      }
    }
  }

  .detail_box {
    border-radius: 35px;
    background: #461fa2;
    // background: url('@/assets/bg-6.jpg');
    color: #fff;
    padding: 25px 20px;
    .dmc_amount {
      font-family: Montserrat;
      font-size: 36px;
      font-weight: bold;

      letter-spacing: 0px;

      font-variation-settings: 'opsz' auto;
      color: #ffffff;
    }
    .DMC_USD {
      margin: 15px;
      font-family: Montserrat;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 0.3px;
      font-variation-settings: 'opsz' auto;
      color: #ffffff9e;
    }
    .detail_box_bottom {
      margin-top: 40px;
      padding: 10px 10px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Montserrat';
      font-weight: bold;
      color: #ffffff9e;
      .detail_box_bottom_type {
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }

  .StorageDevice {
    margin-top: 30px;
    position: relative;
    // overflow: hidden;
    border: 2px solid transparent;
    padding: 25px 20px;
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(244deg, rgba(128, 11, 245, 0.3) 43%, rgba(107, 113, 255, 0.3) 93%) border-box;
    border-radius: 35px;
    box-shadow:
      5px 15px 37px #a8a8a8,
      -28px -28px 37px #ffffff;
    .StorageDevice_box {
      .echarts_bar {
        display: grid;
        grid-template-columns: repeat(6, 40px);
        gap: 15px;
        height: 150px;
        align-items: end;
        & > div {
          height: 100%;
          border-radius: 10px;
          opacity: 0.4;
          background: #6c71ff;
        }

        & > div:last-child {
          opacity: 1;
        }
      }
      .storage_num {
        text-decoration: underline;
        color: #8f3cff;
        font-weight: bold;
        font-size: 80px;
      }
    }
    .StorageDevice_bottom {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      & > div:first-child {
        color: #ffb017;
        font-weight: bold;
        font-size: 38px;
        -webkit-text-stroke: 1px rgb(0, 0, 0, 0.8); /* 设置文字描边宽度和颜色，兼容Webkit浏览器 */
        text-stroke: 1px rgb(0, 0, 0, 0.8); /* 设置文字描边宽度和颜色 */
      }

      .Reward_24h {
        display: flex;
        align-items: center;
        line-height: 60px;
        font-size: 35px;
        // color: #000000;
        font-weight: 300;
        // text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .Device_box {
    .Device_box_body {
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > div {
        margin-top: 30px;
        width: 40%;
        border-radius: 50px;
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        box-shadow:
          -10px -10px 30px 0px #ffffff,
          9px 9px 30px 0px rgba(117, 117, 117, 0.1);

        h2 {
          font-size: 28px;
          margin: 20px 0px;
        }
        h4 {
          font-size: 24px;
        }
      }
      .deviceType_box {
        margin-top: 50px;
        width: 60%;
        height: 150px;
        border-radius: 50px;
        background: linear-gradient(48deg, #ffb017 0%, #8f3cff 100%);
        box-shadow: 0px 10px 35px 0px rgba(251, 112, 144, 0.25);
        display: grid;
        place-items: center;
        img {
          width: 80%;
        }
      }
    }
  }
  .Device_box,
  .DePings {
    margin-top: 30px;
    .Device_box_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .Device_box_header_title {
        font-family: 'Poppins';
        font-size: 36px;
        font-weight: bold;
        line-height: 22px;
        letter-spacing: 0px;
        color: #2d2d2d;
        display: flex;
        align-items: center;
      }
      .Device_box_header_num {
        margin: 0px 10px;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        color: #f15e2e;
        font-variation-settings: 'opsz' auto;
        letter-spacing: 0px;
        border-bottom: 2px solid red;
      }
    }
  }
  .DePings {
    margin-bottom: 100px;
  }
</style>
<style lang="scss">
  .deviceList {
    background: #f2f3f5;
  }
</style>
