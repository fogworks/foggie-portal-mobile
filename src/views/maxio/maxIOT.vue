<template>
  <div class="maxio_home_bg pool_index_box maxio_child_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <!-- <img src="@/assets/maxio/list.svg" alt="" @click="changeTab('home')" /> -->
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <img src="@/assets/maxio/beta.svg" class="betaPng" />
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <!-- <div class="max_name"> {{ 'MAX IO-' + currentItem.id }}</div> -->
              <div class="max_name"> {{ currentItem.dedicatedip }}</div>
            </div>
          </div>
          <!-- <div class="max_ip"> ({{ currentItem.dedicatedip }})</div> -->
          <div class="max_ip"> IOT Manage</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <!-- <div class="menu_img" @click="changeTab('home')">
            <img src="@/assets/maxio/maxio_name.png" alt="" style="object-fit: cover" />
          </div> -->
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img active_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('airdrop')">
            <img src="@/assets/maxio/airDrop.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('wallet')">
            <img src="@/assets/maxio/walletBind.svg" alt="" />
          </div>
          <!-- <div class="menu_img" @click="changeTab('set')">
            <img src="@/assets/maxio/set.svg" alt="" />
          </div> -->
        </div>

        <!-- maxio_home_rightContent -->
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <div class="maxio_home_card">
              <div class="maxio_pool_list maxio_iot_list">
                <div class="maxio_pool_item" v-for="(item, index) in iotList" :key="index">
                  <div class="img_bg iot_bg">
                    <img src="@/assets/maxio/room1.svg" v-if="index % 3 === 0" />
                    <img src="@/assets/maxio/room2.svg" v-if="index % 3 === 1" />
                    <img src="@/assets/maxio/room3.svg" v-if="index % 3 === 2" />
                  </div>
                  <span class="pool_name">{{ item.name }}({{ item.number }})</span>
                </div>
              </div>
            </div>

            <div class="iot_room_list" v-for="(item, index) in iotRoomList" :key="index">
              <div class="iot_room_head">
                <img src="@/assets/maxio/room1.svg" v-if="index % 3 === 0" />
                <img src="@/assets/maxio/room2.svg" v-if="index % 3 === 1" />
                <img src="@/assets/maxio/room3.svg" v-if="index % 3 === 2" />
                <div class="iot_room_title"> {{ item.groupname }}</div>
                <div class="iot_room_number">({{ item.listList.length }} IOT Devices) </div>
              </div>
              <div class="iot_room_detail">
                <div class="iot_device_item" v-for="(_item, _index) in item.listList" :key="_index">
                  <div class="iot_temp">
                    <div class="iot_temp_line iot_temp_unit">
                      <img src="@/assets/maxio/temp.svg" />
                      <span>{{ _item.temperature }}</span>
                    </div>
                    <div class=""> Current Temp. </div>
                  </div>

                  <div class="iot_hum">
                    <div class="iot_temp_line">
                      <img src="@/assets/maxio/hum.svg" />
                      <span>{{ _item.humidity }}%</span>
                    </div>
                    <div class="iot_temp_line1"> Humidity. </div>
                  </div>
                </div>
                <div v-if="!item.listList.length" class="iot_empty_box">
                  <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                  <div class="empty_img_text">There is currently no new data available</div>
                </div>
              </div>
            </div>
          </sd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import sd from './sd.vue';
  import { ref, toRefs, computed, onMounted } from 'vue';
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(true);
  const currentItem = ref({});
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  const iotList = ref([
    // { name: 'BedRoom', number: '1' },
    // { name: 'Living Room', number: '2' },
    // { name: 'Metting Room', number: '3' },
    // { name: 'Metting Room', number: '3' },
  ]);

  const iotRoomList = ref([]);
  //   iotRoomList.value = [
  //     {
  //       groupName: 'Metting Room',
  //       number: '2',
  //       deviceList: [
  //         { name: 'IOT-001', temp: '25', humidity: '60%' },
  //         { name: 'IOT-002', temp: '30', humidity: '50%' },
  //       ],
  //     },
  //   ];
  const changeTab = (type) => {
    if (type === 'index') {
      router.push({ path: '/home' });
    } else if (type === 'pool') {
      router.push({ path: '/maxPool' });
    } else if (type === 'iot') {
      router.push({ path: '/maxIOT' });
    } else if (type === 'file') {
      router.push({ path: '/maxFile' });
    } else if (type === 'reward') {
      router.push({ path: '/maxReward' });
    } else if (type === 'set') {
      router.push({ path: '/maxSet' });
    } else if (type === 'home') {
      router.push({ path: '/maxio' });
    } else if (type === 'airdrop') {
      router.push({ path: '/airDropList' });
    } else if (type === 'wallet') {
      router.push({ path: '/walletList' });
    }
  };
  onMounted(() => {
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    let myIotList = JSON.parse(window.localStorage.getItem('myIotList'));
    for (let i = 0; i < myIotList.length; i++) {
      iotList.value.push({ name: myIotList[i].groupname, number: myIotList[i].listList.length });
    }
    iotRoomList.value = myIotList;
  });
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
  .empty_img {
    margin-top: 40px;
    width: 200px !important;
    height: 200px !important;
  }

  .empty_img_text {
    font-size: 20px !important;
  }
  //   .minWidth {
  //     width: 0 !important;
  //     transform: translateX(-140px);
  //   }
  //   .maxio_home_rightContent {
  //     transition: all 0.8s;
  //     height: 100%;
  //     box-sizing: border-box;
  //     width: 100%;
  //     .maxio_home_title {
  //       font-weight: bold;
  //     }
  //   }
  //   .maxWidth {
  //     width: calc(100% - 120px);
  //   }
  //   img {
  //     width: 100%;
  //     object-fit: contain;
  //   }
</style>
