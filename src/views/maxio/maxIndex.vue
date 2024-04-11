<template>
  <div class="pool_index_box">
    <div class="maxio_home_card">
      <div class="maxio_pool_list">
        <div class="maxio_pool_item" v-for="(item, index) in rewardList" :key="index">
          <div class="img_bg iot_bg reward_bg">
            <img src="@/assets/maxio/reward.svg" />
          </div>
          <span class="pool_name">{{ item.name }}</span>
          <span class="reward_value">{{ item.number }} DMC</span>
        </div>
      </div>
    </div>
    <div class="maxio_home_card">
      <div class="maxio_pool_list">
        <div class="maxio_pool_item" v-for="(item, index) in poolList" :key="index">
          <div class="img_bg pool_bg" v-if="item.type === 'pool'">
            <img src="@/assets/maxio/poolIcon.jpg" />
          </div>
          <div class="img_bg iot_bg" v-if="item.type === 'iot'">
            <img src="@/assets/maxio/room.png" />
          </div>
          <span class="pool_name">{{ item.name }}({{ item.number }})</span>
        </div>
      </div>
    </div>
    <div class="maxio_home_card space_card">
      <div class="space_card_left"><MyEcharts style="width: 100%; height: 260px" :options="chartOptions"></MyEcharts> </div>
      <div class="space_card_right">
        <div class="local_title">Local Usage</div>
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

    <!-- <div class="maxio_home_card"><MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts> </div> -->
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
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import IconAudio2 from '~icons/home/audio2.svg';
  import IconImage from '~icons/home/image.svg';
  import IconDocument from '~icons/home/document.svg';
  import IconVideo from '~icons/home/video.svg';
  import IconAllCate from '~icons/home/all-cate.svg';
  const poolNumber = ref(0);
  const deviceNumber = ref(0);
  const rewardList = ref([
    { name: 'Minning Reward', number: '100.0000', type: 'pool' },
    { name: 'IOT Reward', number: '200.0000', type: 'iot' },
  ]);
  const poolList = ref([
    { name: 'Minning Pool', number: '1', type: 'pool' },
    { name: 'IOT Devices', number: '2', type: 'iot' },
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
    { value: 100, name: 'Other', count: 5 },
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
        console.log(str);
        return str;
      },
    },
    series: [
      {
        name: 'Storage Usage',
        type: 'pie',
        top: '30%',
        left: '0%',
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
</script>

<style lang="scss" scoped>
  .pool_index_box {
    .maxio_home_card {
      margin-top: 20px;
    }
    .maxio_pool_list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      .maxio_pool_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;

        width: 50%;
        .img_bg {
          width: 100px;
          height: 100px;

          background-image: linear-gradient(
            215deg,
            #fcc5e4 0%,
            #fda34b 15%,
            #ff7882 35%,
            #c8699e 52%,
            #7046aa 71%,
            #0c1db8 87%,
            #020f75 100%
          );
          border-radius: 20px;
          padding: 14px;
          box-sizing: border-box;
        }
        .pool_bg {
          img {
            animation: poolChange 1s linear alternate infinite;
          }
        }
        .iot_bg {
          background-image: linear-gradient(103deg, #f83600 0%, #f9d423 100%);
          img {
            animation: iotChange 2s linear alternate infinite;
          }
        }
        .reward_bg {
          background-image: linear-gradient(177deg, #e4d1b9 0%, #e2a856 30%, #ec9210 100%);
          //   background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
          //   background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
          img {
            animation: rewardChange 2s linear alternate infinite;
          }
        }
        .pool_name {
          margin: 16px 0;
          font-weight: bold;
          white-space: nowrap;
        }
        .reward_value {
          font-style: normal;
          //   font-weight: normal;
          color: #fac858;
        }
        .pool_number {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }

  .space_card {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    .space_card_left,
    .space_card_right {
      border-radius: 0;
      width: 50% !important;
      font-style: normal;

      .local_title {
        white-space: nowrap;
        font-size: 24px;
        text-align: left;
        padding-left: 14px;
      }
      .file_items {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        line-height: 30px;
        border-bottom: 0.5px dashed #6f7681;
        padding: 5px;
        .file_name {
          font-size: 22px;
          text-align: left;
          font-style: normal;
          margin-bottom: 4px;
        }
        .file_size {
          display: flex;
          font-size: 16px;

          font-style: normal;
          span {
            white-space: nowrap;
          }
          .file_number {
            font-weight: bold;
            // font-weight: normal;
          }
          .file_space {
            margin-right: 8px;
            color: #fac858;
          }
        }
        .svg_box {
          text-align: center;
          margin-right: 10px;

          svg {
            width: 40px;
            height: 40px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  @keyframes poolChange {
    0% {
      transform: scale(1);
      transform: translateY(-10px) translateX(10px) translateZ(10px);
    }
    100% {
      transform: scale(0.96);
      transform: translateY(0px) translateX(0px);
    }
  }
  @keyframes iotChange {
    0% {
      transform: scale(1);
      transform: rotateY(90deg);
    }
    100% {
      transform: scale(0.96);
      transform: rotateY(0deg);
    }
  }
  @keyframes rewardChange {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate(-2px, -2px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate(2px, 2px);
    }
  }
</style>
