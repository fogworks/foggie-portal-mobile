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
          <span class="pool_name">{{ item.name }}</span>
          <span class="reward_value">{{ item.number }} DMC</span>
        </div>
      </div>
    </div>
    <div class="maxio_home_card">
      <div class="maxio_pool_list">
        <div class="maxio_pool_item pool_item_ipfs" v-for="(item, index) in poolList" :key="index">
          <div class="img_bg pool_bg" v-if="item.type === 'pool'" @click="changeTab(item.type)">
            <!-- <img src="@/assets/maxio/poolIcon.jpg" /> -->
            <img src="@/assets/maxio/poolUser.svg" />
          </div>
          <div class="img_bg iot_bg" v-if="item.type === 'iot'" @click="changeTab(item.type)">
            <!-- <img src="@/assets/maxio/room.png" /> -->
            <img src="@/assets/maxio/room2.svg" />
          </div>
          <div class="img_bg iot_bg" v-if="item.type === 'ipfs'" @click="changeTab(item.type)">
            <img src="@/assets/maxio/ipfs.svg" />
          </div>
          <span class="pool_name">{{ item.name }}({{ item.number }})</span>
        </div>
      </div>
    </div>
    <div class="maxio_home_card space_card" @click="changeTab('file')">
      <div class="space_card_left"
        ><MyEcharts style="width: 100%; height: 120px" :options="chartOptions" :showLeft="showLeft"></MyEcharts>
      </div>
    </div>

    <div class="maxio_home_card space_card" @click="changeTab('file')">
      <div class="space_card_right">
        <div class="local_title">Category</div>
        <div class="file_items_groups">
          <div class="file_items" v-for="(item, index) in localStorageData" :key="index">
            <div class="svg_box">
              <IconImage v-if="item.name === 'Image'"></IconImage>
              <IconDocument v-if="item.name === 'File'"></IconDocument>
              <IconVideo v-if="item.name === 'Video'"></IconVideo>
              <IconAudio2 v-if="item.name === 'Audio'"></IconAudio2>
              <IconAllCate v-if="item.name === 'Other'"></IconAllCate>
            </div>
            <div class="file_detail">
              <div class="file_name">{{ item.name }}</div>
              <div class="file_size">
                <span class="file_space">{{ getfilesize(item.value) }}</span>
                <span class="file_number"> ({{ item.count }} Files)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="maxio_home_title">Depins({{ deviceNumber }})</div>
    <div class="maxio_home_card" @click="changeTab('iot')">
      <img src="@/assets/maxio/iotList.png" alt="" />
    </div> -->
    <!-- <div class="maxio_home_title">Devices Rewards</div>
    <div class="maxio_home_card maxio_reward_card" @click="changeTab('reward')">
      <img src="@/assets/maxio/rewardLine.png" alt="" />
    </div> -->
  </div>
</template>

<script setup>
  import { ref, toRefs, computed } from 'vue';
  const router = useRouter();
  const route = useRoute();
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import IconAudio2 from '~icons/home/maudio.svg';
  import IconImage from '~icons/home/mimage.svg';
  import IconDocument from '~icons/home/mdoc.svg';
  import IconVideo from '~icons/home/mvideo.svg';
  //   import IconAllCate from '~icons/home/all-cate.svg';
  const props = defineProps({
    showLeft: Boolean,
  });
  const showLeft = ref();
  watch(
    () => props.showLeft,
    (val) => {
      showLeft.value = val;
    },
    { deep: true },
  );
  const poolNumber = ref(0);
  const deviceNumber = ref(0);
  const rewardList = ref([
    { name: 'Minning', number: '100.0000', type: 'pool' },
    { name: 'IOT', number: '200.0000', type: 'iot' },
    { name: 'IPFS', number: '20.0000', type: 'ipfs' },
  ]);
  const poolList = ref([
    { name: 'Minning', number: '1', type: 'pool' },
    { name: 'IOT', number: '2', type: 'iot' },
    { name: 'IPFS', number: '2', type: 'ipfs' },
  ]);
  const iotList = ref([{ name: '1' }]);
  const chartOptions = ref({});

  const spaceData = ref([]);
  const localStorageData = ref([]);
  spaceData.value = [
    { value: 1048, name: 'Pool' },
    { value: 735, name: 'IOT' },
    { value: 580, name: 'IPFS' },
    { value: 484, name: 'Local' },
    { value: 100, name: 'Available' },
  ];
  localStorageData.value = [
    { value: 1048, name: 'Image', count: 10 },
    { value: 735, name: 'File', count: 20 },
    { value: 580, name: 'Audio', count: 30 },
    { value: 484, name: 'Video', count: 5 },
    // { value: 100, name: 'Other', count: 5 },
  ];

  chartOptions.value = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      backgroundColor: '#b5baca61',
      borderRadius: 5,
      icon: 'circle',
      left: '0',
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        fontSize: '8px',
        fontWeight: 'bold',
      },
      itemWidth: 10, // 设置图例标记的宽度
      itemHeight: 10, // 设置图例标记的高度
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
        radius: ['60%', '100%'],
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
</script>

<style lang="scss" scoped>
  @import url('./index.scss');
</style>
