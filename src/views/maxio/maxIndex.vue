<template>
  <nut-pull-refresh v-model="refresh" @refresh="refreshFun">
    <div class="pool_index_box">
      <div class="maxio_home_card" @click="changeTab('reward')">
        <div class="maxio_pool_list">
          <div class="maxio_pool_item" v-for="(item, index) in rewardList" :key="index">
            <div class="img_bg reward_bg">
              <!-- <img src="@/assets/maxio/reward.svg" v-if="item.type === 'pool'" /> -->
              <img src="@/assets/maxio/pool.svg" v-if="item.type === 'pool'" />
              <img src="@/assets/maxio/room2.svg" v-if="item.type === 'iot'" />
              <img src="@/assets/maxio/ipfs.svg" v-if="item.type === 'ipfs'" />
              <!-- <img src="@/assets/maxio/station.png" v-if="item.type === 'ipfs'" /> -->
              <!-- <img src="@/assets/maxio/reward1.svg" v-if="item.type === 'iot'" /> -->
              <!-- <img src="@/assets/maxio/reward2.svg" v-if="item.type === 'ipfs'" /> -->
              <!-- <img src="@/assets/maxio/iot.svg" v-if="item.type === 'iot'" style="width: 120%; height: 120%" /> -->
            </div>
            <span class="pool_name">{{ item.name }} ({{ item.type === 'iot' ? item.iotNumber : item.count }}) </span>
            <span class="reward_value">{{ item.number }} {{ item.type === 'ipfs' ? 'FIL' : 'DMC' }}</span>
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
      <div class="today_file">
        <span class="title">Space Use</span>
      </div>
      <div class="maxio_home_card space_card">
        <div class="space_card_left"
          ><MyEcharts style="width: 100%; height: 120px" :options="chartOptions" :showLeft="showLeft"></MyEcharts>
        </div>
      </div>

      <div class="today_file">
        <span class="title">Category</span>
      </div>
      <div class="maxio_home_card space_card">
        <div class="space_card_right">
          <!-- <div class="local_title">Category</div> -->
          <div class="file_items_groups">
            <div class="file_items" v-for="(item, index) in fileListArr" :key="index" @click="changeTab('file', item.type)">
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
      <div class="today_file" v-if="CurrentToken">
        <span class="title">Recent Files</span>
        <span class="see_all" @click="changeTab('file')">See All ></span>
      </div>
      <maxFileList :cloudQuery="cloudQuery" :deviceData="currentTabItem" :CurrentToken="CurrentToken" v-if="CurrentToken"></maxFileList>
      <!-- </div> -->
      <!-- <div class="maxio_home_title">Devices Rewards</div>
    <div class="maxio_home_card maxio_reward_card" @click="changeTab('reward')">
      <img src="@/assets/maxio/rewardLine.png" alt="" />
    </div> -->
    </div>
  </nut-pull-refresh>
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
  import { showDialog, showToast } from '@nutui/nutui';
  import loadingImg from '@/components/loadingImg/index.vue';
  const refresh = ref(false);
  const userStore = useUserStore();
  const CurrentLeftTab = computed(() => userStore.getCurrentLeftTab);
  const { getMyList, myPoolList, myIotList, MinerReward, IOTReward, rewardList, spaceData, fileListArr, header, initToken, CurrentToken } =
    getList();
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

  const changeTab = (type, name) => {
    if (type === 'index') {
      router.push({ path: '/home' });
    } else if (type === 'pool') {
      router.push({ path: '/maxPool' });
    } else if (type === 'iot') {
      router.push({ path: '/maxIOT' });
    } else if (type === 'file') {
      //   router.push({ path: '/maxFile${query ? `?type=${query}` : ''}`' });
      let category = '';
      if (name === 'Photos') {
        category = 1;
      } else if (name === 'Documents') {
        category = 4;
      } else if (name === 'Videos') {
        category = 2;
      } else if (name === 'Audio') {
        category = 3;
      } else {
        category = 0;
      }
      router.push(`/maxFile?category=${category}`);
    } else if (type === 'reward') {
      router.push({ path: '/maxReward' });
    } else if (type === 'set') {
      router.push({ path: '/maxSet' });
    } else if (type === 'home') {
      router.push({ path: '/maxio' });
    }
  };
  onMounted(async () => {
    // console.log(window.localStorage.homeChooseBucket, 'onMounted-----homeChooseBucket');
    // if (window.localStorage.homeChooseBucket) {
    //   console.log(JSON.parse(window.localStorage.homeChooseBucket), '1111-----homeChooseBucket');
    //   currentTabItem.value = window.localStorage.homeChooseBucket && JSON.parse(window.localStorage.homeChooseBucket);
    //   getMyList(currentTabItem.value);
    // }
  });
  const initOptions = (chartData) => {
    if (!chartData.length) {
      chartOptions.value = {};
      return;
    }
    let colorArr = ['#00FF00', '#40B2FB', '#00FFFF', '#9dfc37', '#7cd0b4', '#FEFF00', '#F59543', '#FF59AB', '#FF4F2C'];
    let _value = chartData.map((item) => item.value);
    let totalSum = _value.reduce((a, b) => {
      return a + b;
    });
    // console.log(totalSum, 'totalSum');
    chartData = chartData.filter((item) => {
      return item.name !== 'total' && item.name !== 'remaining';
    });
    let name = chartData.map((item) => item.name);
    let value = chartData.map((item) => item.value);
    let sum = value.reduce((a, b) => {
      return a + b;
    });

    chartOptions.value = {
      tooltip: {
        trigger: 'item',
        show: false,
      },
      legend: {
        //   backgroundColor: '#b5baca61',
        borderRadius: 3,
        icon: 'circle',
        left: '0',
        orient: 'vertical',
        textStyle: {
          color: '#fff',
          fontSize: '10px',
          //   fontWeight: 'bold',
        },
        itemWidth: 8, // 设置图例标记的宽度
        itemHeight: 8, // 设置图例标记的高度
        itemStyle: {
          borderColor: '#fff', // 边框颜色
          borderWidth: 0, // 边框宽度
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
      color: colorArr,
      title: {
        zlevel: 0,
        text: 'Total',
        subtext: getfilesize(totalSum),
        textStyle: {
          color: '#ffffff',
          fontSize: 12,
        },
        subtextStyle: {
          color: '#ffffff',
          fontSize: 10,
          x: '50%', //文字位置
        },
        x: '66%', //文字位置
        y: '32%', //文字位置
      },
      series: [
        {
          name: 'Storage Usage',
          type: 'pie',
          top: '0%',
          left: '50%',
          radius: ['60%', '80%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 0,
            //   borderWidth: 30, // 设置扇区间隙的宽度
          },
          label: {
            show: false,
            position: 'center',
            fontSize: 20,
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData,
        },
      ],
    };
  };
  const initOptions2 = (chartData) => {
    if (!chartData.length) {
      return;
    }
    let colorArr = ['#00FF00', '#40B2FB', '#B76AFF', '#00FFFF', '#FEFF00', '#F59543', '#FF59AB', '#FF4F2C'];
    let _value = chartData.map((item) => item.value);
    let totalSum = _value.reduce((a, b) => {
      return a + b;
    });
    chartData = chartData.filter((item) => {
      return item.name !== 'total' && item.name !== 'remaining';
    });
    let name = chartData.map((item) => item.name);
    let value = chartData.map((item) => item.value);
    let sum = value.reduce((a, b) => {
      return a + b;
    });

    let seriesData = [];
    let yAxisData = [];
    for (let i = 0; i < chartData.length; i++) {
      seriesData.push({
        name: 'Storage Usage',
        type: 'pie',
        clockWise: true, //顺时加载
        radius: [100 - i * 15 + '%', 94 - i * 15 + '%'],
        center: ['50%', '50%'],
        top: '0%',
        left: '50%',
        // padAngle: 5,
        // avoidLabelOverlap: false,
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
        data: [
          {
            name: chartData[i].name,
            value: chartData[i].value,
            hoverAnimation: false,
          },
          {
            name: '',
            value: sum - chartData[i].value,
            itemStyle: {
              color: 'rgba(255,255,255,.15)',
            },
            tooltip: {
              show: false,
              trigger: 'item',
            },
          },
        ],
      });
      //   seriesData.push({
      //     type: 'pie',
      //     // silent: true,
      //     // z: 1,
      //     clockWise: true, //顺时加载
      //     radius: [100 - i * 15 + '%', 94 - i * 15 + '%'],
      //     // center: ['50%', '50%'],
      //     top: '0%',
      //     left: '50%',
      //     avoidLabelOverlap: false,
      //     label: {
      //       show: false,
      //     },
      //     itemStyle: {
      //       label: {
      //         show: false,
      //       },
      //       labelLine: {
      //         show: false,
      //       },
      //     },
      //     data: [
      //       {
      //         value: 10,
      //         itemStyle: {
      //           color: 'rgba(255,255,255,.15)',
      //         },
      //         tooltip: {
      //           show: false,
      //         },
      //       },
      //       {
      //         value: 0,
      //         itemStyle: {
      //           color: 'rgba(0,0,0,0)',
      //         },
      //         tooltip: {
      //           show: false,
      //         },
      //       },
      //     ],
      //   });

      yAxisData.push(((chartData[i].value / sum) * 100).toFixed(2) + '%');
    }
    console.log(seriesData, 'seriesData');

    chartOptions.value = {
      grid: {
        width: '100%',
        height: '100%',
        top: '0%',
        left: '0%',
        containLabel: true,
      },
      title: {
        zlevel: 0,
        text: 'Total',
        subtext: getfilesize(totalSum),
        textStyle: {
          color: '#ffffff',
          fontSize: 10,
        },
        subtextStyle: {
          color: '#ffffff',
          fontSize: 10,
        },
        x: '68%', //文字位置
        y: '32%', //文字位置
      },
      color: colorArr,
      legend: {
        backgroundColor: '#b5baca61',
        borderRadius: 3,
        icon: 'circle',
        left: 0,
        bottom: 0,
        orient: 'vertical',
        width: '100%',
        height: '100%',
        textStyle: {
          color: '#fff',
          fontSize: '9px',
        },
        itemWidth: 6, // 设置图例标记的宽度
        itemHeight: 6, // 设置图例标记的高度
        itemStyle: {
          borderColor: '#fff', // 边框颜色
          borderWidth: 0, // 边框宽度
        },
        formatter: function (name) {
          let text = name;
          let value = 0;
          for (let i = 0; i < chartData.length; i++) {
            if (name === chartData[i].name) {
              value = getfilesize(chartData[i].value);
            }
          }
          let str = `${name} : ${value}`;
          return str;
        },
      },
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{b}：{c}（{d}%）',
      //   },
      //   yAxis: [
      //     {
      //       type: 'category',
      //       inverse: true,
      //       axisLine: {
      //         show: false,
      //       },
      //       axisTick: {
      //         show: false,
      //       },
      //       axisLabel: {
      //         show: false,
      //         inside: true,
      //         textStyle: {
      //           color: '#fff',
      //         },
      //       },
      //       data: yAxisData,
      //     },
      //   ],
      //   xAxis: [
      //     {
      //       show: false,
      //     },
      //   ],
      series: seriesData,
    };
  };
  const refreshFun = async () => {
    if (CurrentLeftTab.value.device_id) {
      currentTabItem.value = CurrentLeftTab.value;
      await initToken(CurrentLeftTab.value);
      showToast.loading('Loading', {
        cover: true,
        coverColor: 'rgba(0,0,0,0)',
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
      });
      await getMyList(CurrentLeftTab.value);
      refresh.value = false;
      showToast.hide('file_list');
      cloudQuery.value = {
        id: currentTabItem.value.id,
      };
    }
  };
  watch(
    CurrentLeftTab,
    async (val) => {
      if (val) {
        if (val.device_id) {
          currentTabItem.value = val;
          //   if (!cloudQuery.value.id) {
          window.localStorage.removeItem('myPoolList');
          window.localStorage.removeItem('rewardList');
          window.localStorage.removeItem('myIotList');
          window.localStorage.removeItem('spaceData');
          window.localStorage.removeItem('MinerReward');
          window.localStorage.removeItem('IOTReward');
          window.localStorage.removeItem('fileListArr');
          window.localStorage.removeItem('fileListSat');
          showToast.loading('Loading', {
            cover: true,
            coverColor: 'rgba(0,0,0,0)',
            customClass: 'app_loading',
            icon: loadingImg,
            loadingRotate: false,
          });
          await initToken(val);
          await getMyList(val);
          showToast.hide('file_list');
          cloudQuery.value = {
            id: currentTabItem.value.id,
          };
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
