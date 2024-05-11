<template>
  <div class="pool_index_box">
    <div class="maxio_home_card" @click="changeTab('reward')">
      <div class="maxio_pool_list">
        <div class="maxio_pool_item" v-for="(item, index) in rewardList" :key="index">
          <div class="img_bg reward_bg">
            <img src="@/assets/maxio/reward.svg" v-if="item.type === 'pool'" />
            <img src="@/assets/maxio/reward1.svg" v-if="item.type === 'iot'" />
            <img src="@/assets/maxio/reward2.svg" v-if="item.type === 'ipfs'" />
            <!-- <img src="@/assets/maxio/iot.svg" v-if="item.type === 'iot'" style="width: 120%; height: 120%" /> -->
          </div>
          <span class="pool_name">{{ item.name }}({{ item.count }})</span>
          <span class="reward_value">{{ item.number }} DMC</span>
        </div>
      </div>
    </div>
    <!-- <div class="maxio_home_card">
      <div class="maxio_pool_list">
        <div class="maxio_pool_item pool_item_ipfs" v-for="(item, index) in poolList" :key="index">
          <div class="img_bg pool_bg" v-if="item.type === 'pool'" @click="changeTab(item.type)">
            <img src="@/assets/maxio/poolUser1.svg" />
          </div>
          <div class="img_bg iot_bg" v-if="item.type === 'iot'" @click="changeTab(item.type)">
            <img src="@/assets/maxio/room2.svg" />
          </div>
          <div class="img_bg iot_bg" v-if="item.type === 'ipfs'" @click="changeTab(item.type)">
            <img src="@/assets/maxio/ipfs.svg" />
          </div>
          <span class="pool_name">{{ item.name }}({{ item.number }})</span>
        </div>
      </div>
    </div> -->
    <div class="maxio_home_card space_card">
      <div class="space_card_left"
        ><MyEcharts style="width: 100%; height: 100px" :options="chartOptions" :showLeft="showLeft"></MyEcharts>
      </div>
    </div>

    <div class="maxio_home_card space_card" @click="changeTab('file')">
      <div class="space_card_right">
        <div class="local_title">Category</div>
        <div class="file_items_groups">
          <div class="file_items" v-for="(item, index) in fileListArr" :key="index">
            <div class="svg_box">
              <IconImage v-if="item.type === 'Photos'"></IconImage>
              <IconDocument v-if="item.type === 'Documents'"></IconDocument>
              <IconVideo v-if="item.type === 'Videos'"></IconVideo>
              <IconAudio2 v-if="item.type === 'Audio'"></IconAudio2>
              <IconOther v-if="item.type === 'Other'"></IconOther>
            </div>
            <div class="file_detail">
              <div class="file_name">{{ item.name }}</div>
              <div class="file_size">
                <span class="file_space">{{ getfilesize(item.total) }}</span>
                <span class="file_number"> ({{ item.number }} Files)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="maxio_home_title">Depins({{ deviceNumber }})</div> -->
    <!-- <div class="maxio_home_card" @click="changeTab('iot')"> -->
    <!-- <img src="@/assets/maxio/maxlist.jpg" alt="" style="width: 100%" /> -->
    <div class="today_file">
      <span class="title">Recent Files</span>
      <span class="see_all" @click="changeTab('file')">Go File></span>
    </div>
    <maxFileList :cloudQuery="cloudQuery" :deviceData="currentTabItem"></maxFileList>
    <!-- </div> -->
    <!-- <div class="maxio_home_title">Devices Rewards</div>
    <div class="maxio_home_card maxio_reward_card" @click="changeTab('reward')">
      <img src="@/assets/maxio/rewardLine.png" alt="" />
    </div> -->
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  const router = useRouter();
  const route = useRoute();
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import IconAudio2 from '~icons/home/maudio.svg';
  import IconImage from '~icons/home/mimage.svg';
  import IconDocument from '~icons/home/mdoc.svg';
  import IconVideo from '~icons/home/mvideo.svg';
  import IconOther from '~icons/home/mother.svg';
  import getList from './maxFileOpt/getList.ts';
  import { useUserStore } from '@/store/modules/user';
  import maxFileList from './maxFileList.vue';
  const userStore = useUserStore();
  const CurrentLeftTab = computed(() => userStore.getCurrentLeftTab);
  const { getMyList, myPoolList, myIotList, MinerReward, IOTReward, rewardList, spaceData, fileListArr } = getList();
  const cloudQuery = ref({});
  const props = defineProps({
    showLeft: Boolean,
  });
  const showLeft = ref();
  const currentTabItem = ref({});
  watch(
    () => props.showLeft,
    (val) => {
      showLeft.value = val;
    },
    { deep: true },
  );
  const poolNumber = ref(0);
  const deviceNumber = ref(0);
  //   const rewardList = ref([
  //     { name: 'Minning', number: '100.0000', type: 'pool', count: 2 },
  //     { name: 'IOT', number: '200.0000', type: 'iot', count: 4 },
  //     { name: 'IPFS', number: '20.0000', type: 'ipfs', count: 1 },
  //   ]);
  //   const poolList = ref([
  //     { name: 'Minning', number: '1', type: 'pool' },
  //     { name: 'IOT', number: '2', type: 'iot' },
  //     { name: 'IPFS', number: '2', type: 'ipfs' },
  //   ]);
  //   const spaceData = ref([]);
  //   spaceData.value = [
  //     { value: 1048, name: 'Pool' },
  //     { value: 735, name: 'IOT' },
  //     { value: 580, name: 'IPFS' },
  //     { value: 484, name: 'Local' },
  //     { value: 100, name: 'Available' },
  //   ];
  const iotList = ref([{ name: '1' }]);
  const chartOptions = ref({});
  const localStorageData = ref([]);

  localStorageData.value = [
    { value: 1048, name: 'Image', count: 10 },
    { value: 735, name: 'File', count: 20 },
    { value: 580, name: 'Audio', count: 30 },
    { value: 484, name: 'Video', count: 5 },
    // { value: 100, name: 'Other', count: 5 },
  ];

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
    }
  };
  onMounted(() => {
    // console.log(window.localStorage.homeChooseBucket, 'onMounted-----homeChooseBucket');
    // if (window.localStorage.homeChooseBucket) {
    //   console.log(JSON.parse(window.localStorage.homeChooseBucket), '1111-----homeChooseBucket');
    //   currentTabItem.value = window.localStorage.homeChooseBucket && JSON.parse(window.localStorage.homeChooseBucket);
    //   getMyList(currentTabItem.value);
    // }
  });
  const initOptions = (val) => {
    chartOptions.value = {
      tooltip: {
        trigger: 'item',
        show: false,
      },
      legend: {
        //   backgroundColor: '#b5baca61',
        borderRadius: 5,
        icon: 'circle',
        left: '0',
        orient: 'vertical',
        textStyle: {
          color: '#fff',
          fontSize: '7px',
          fontWeight: 'bold',
        },
        itemWidth: 8, // 设置图例标记的宽度
        itemHeight: 8, // 设置图例标记的高度
        itemStyle: {
          borderColor: '#fff', // 边框颜色
          borderWidth: 1, // 边框宽度
        },
        formatter: function (name) {
          let text = name;
          let value = 0;
          for (let i = 0; i < spaceData.value.length; i++) {
            if (name === spaceData.value[i].name) {
              value = getfilesize(spaceData.value[i].value);
            }
          }

          let str = `${name} : ${value}`;
          return str;
        },
      },
      series: [
        {
          name: 'Storage Usage',
          type: 'pie',
          top: '0%',
          left: '50%',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 4,
            //   borderWidth: 30, // 设置扇区间隙的宽度
          },
          label: {
            show: false,
            position: 'center',
            fontSize: 20,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: spaceData.value,
        },
      ],
    };
  };
  watch(
    CurrentLeftTab,
    async (val) => {
      if (val) {
        currentTabItem.value = val;
        // console.log(val, val.device_id, 'index----CurrentLeftTabwatch', currentTabItem.value);
        cloudQuery.value = {
          id: currentTabItem.value.id,
          // uuid: currentTabItem.value.uuid,
          // amb_uuid: item.amb_uuid,
          // domain: item.domain,
        };
        if (val.device_id) {
          await getMyList(val);
        }
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
  watch(
    spaceData,
    (val) => {
      if (val) {
        initOptions(val);
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/index.scss');
</style>
