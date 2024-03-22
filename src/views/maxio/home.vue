<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <img src="@/assets/maxio/list.svg" alt="" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <div class="max_name"> MAXIO-001</div>
            </div>
          </div>
          <div class="max_ip"> (192.168.1.1)</div>
        </div>
        <div class="maxio_img">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu">
          <div class="menu_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('set')">
            <img src="@/assets/maxio/set.svg" alt="" />
          </div>
        </div>
        <div class="maxio_home_rightContent">
          <div class="maxio_home_title">Minning Pool</div>
          <div class="maxio_home_card">
            <!-- <img src="@/assets/maxio/pool1.svg" alt="" /> -->
            <img src="@/assets/maxio/poolList.png" alt="" />
          </div>
          <div class="maxio_home_title">Depins</div>
          <div class="maxio_home_card">
            <img src="@/assets/maxio/iotList.png" alt="" />
          </div>
          <div class="maxio_home_title">Devices Rewards</div>
          <div class="maxio_home_card maxio_reward_card">
            <img src="@/assets/maxio/rewardLine.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed } from 'vue';
  const router = useRouter();
  const route = useRoute();
  const changeTab = (type) => {
    // if (type === 'pool') {
    //   router.push({ path: '/maxPool' });
    // } else if (type === 'iot') {
    //   router.push({ path: '/maxIOT' });
    // } else if (type === 'file') {
    //   router.push({ path: '/maxFile' });
    // } else if (type === 'reward') {
    //   router.push({ path: '/maxReward' });
    // } else if (type === 'set') {
    //   router.push({ path: '/maxSet' });
    // }
  };
</script>

<style lang="scss">
  .maxio_home_bg {
    background: #31313c;
    height: 100%;
    width: 100%;
    // padding: 20px;
    background: url('@/assets/maxio/bg1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    margin-bottom: 39px;
    box-sizing: border-box;
  }
  .maxio_home {
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    background: rgba(30, 31, 29, 0.15);
    border: 1px solid rgba(211, 211, 211, 0.43);
    box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
    border-radius: 40px;
    color: #ffffff;
    padding: 20px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .maxio_home_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    .maxio_title_box {
      //   display: flex;
      //   flex-direction: column;
      //   align-items: center;
      //   justify-content: center;
      position: relative;
      .max_ip {
        position: absolute;
        font-size: 20px;
        left: calc(50% - 24px);
        bottom: 0px;
      }
    }
    .maxio_title {
      display: flex;
      align-items: center;
    }
    .maxio_img {
      width: 70px;
      height: 70px;
      background: transparent;
      border: 0.1px solid #fff;
      border-radius: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    img {
      width: 80px;
    }
    .icon_img {
      width: 50px;
    }
    .maxio_logo {
      width: 120px;
      height: 60px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 50px;
      }
    }
    .maxio_home_headLogo {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .maxio_home_content {
    margin-top: 40px;
    height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .maxio_home_leftMenu {
    padding: 20px 0;
    width: 120px;
    background: rgb(181 186 202 / 38%);
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .menu_img {
      margin: 10px 0;
      cursor: pointer;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .maxio_home_rightContent {
    width: calc(100% - 160px);
    // border: 1px solid#fff;
    height: 100%;
    box-sizing: border-box;
    .maxio_home_title {
      font-weight: bold;
    }
  }
  .maxio_home_card {
    background: #3c3c47;
    width: 100%;
    background: rgb(181 186 202 / 38%);
    height: 300px;
    border-radius: 30px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .maxio_reward_card {
    padding: 20px;
    img {
      width: 100%;
      height: 92%;
      object-fit: contain;
    }
  }
</style>
