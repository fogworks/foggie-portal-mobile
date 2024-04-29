<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <img src="@/assets/maxio/list.svg" alt="" @click="changeTab('home')" />
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <!-- <div class="max_name"> MAXIO-001</div> -->
              <div class="max_name"> {{ currentItem.dedicatedip || 'MAX IO-' + currentItem.id }}</div>
              <!-- <div class="max_name"> （MAXIO-{{ currentItem.id }} ）</div> -->
            </div>
          </div>
          <div class="max_ip"> File Manage</div>
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
          <div class="menu_img active_img" @click="changeTab('file')" active_img>
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <div class="maxio_home_card space_card">
              <div class="space_card_left"
                ><MyEcharts style="width: 100%; height: 100px" :options="chartOptions" :showLeft="showLeft"></MyEcharts>
              </div>
            </div>
            <div class="maxio_home_card space_card file_card">
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
            <maxFileList :cloudQuery="cloudQuery" :deviceData="currentItem"></maxFileList>
          </sd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import sd from './sd.vue';
  import IconAudio2 from '~icons/home/maudio.svg';
  import IconImage from '~icons/home/mimage.svg';
  import IconDocument from '~icons/home/mdoc.svg';
  import IconVideo from '~icons/home/mvideo.svg';
  import IconOther from '~icons/home/mother.svg';
  import maxFileList from './maxFileList.vue';
  const chartOptions = ref({});
  const router = useRouter();
  const cloudQuery = ref({});
  const route = useRoute();
  const showLeft = ref(true);
  const fileListArr = ref([]);
  const currentItem = ref({});
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
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
  onMounted(() => {
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    fileListArr.value = JSON.parse(window.localStorage.fileListArr);
    const _fileListArr = fileListArr.value.map((item) => {
      let _item = item;
      _item.value = item.total;
      return _item;
    });
    cloudQuery.value = {
      id: currentItem.value.id,
      // uuid: currentTabItem.value.uuid,
      // amb_uuid: item.amb_uuid,
      // domain: item.domain,
    };
    initOptions(_fileListArr);
  });

  const initOptions = (_fileListArr) => {
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
          for (let i = 0; i < _fileListArr.length; i++) {
            if (name === _fileListArr[i].name) {
              value = getfilesize(_fileListArr[i].total);
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
          data: _fileListArr,
        },
      ],
    };
  };
</script>

<style lang="scss" scoped>
  @import url('./common.scss');
  @import url('./index.scss');
  //   .minWidth {
  //     width: 0 !important;
  //     transform: translateX(-140px);
  //   }
  .maxio_home_rightContent {
    transition: all 0.8s;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    .maxio_home_title {
      font-weight: bold;
    }
  }
  //   .maxWidth {
  //     width: calc(100% - 120px);
  //   }
  .maxio_home_card {
    margin-bottom: 20px;
    background: #3c3c47;
    width: 100%;
    background: rgb(181 186 202 / 38%);
    // height: 300px;
    border-radius: 30px;
    // margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    box-sizing: border-box;
    img {
      width: 90%;
    }
  }
  .nobg {
    background: transparent;
  }
  .maxio_reward_card {
    padding: 20px;
    img {
      width: 80%;
      height: 92%;
      object-fit: contain;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
  }
</style>
