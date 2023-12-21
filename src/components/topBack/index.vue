<template>
  <div class="top_back2" @click.capture="">
    <div :class="['img_box', type == 2 ? 'img_box2' : '']">
      <img v-if="type == 1" @click="router.go(-1)" src="@/assets/arrow-left.svg" alt="" />
      <img v-else @click="router.go(-1)" src="@/assets/arrow-left2.svg" alt="" />
    </div>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>

<script setup name="TopBack">
  import { useRouter } from 'vue-router';
  const props = defineProps({
    type: {
      type: String,
      default: '1',
    },
  });
  const { type } = toRefs(props);
  const router = useRouter();
</script>

<style lang="scss" scoped>
  .top_back2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 50px;
    font-family: Hellofont FangHuaTi;
  }
  .img_box {
    position: absolute;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 16px;
  }
  .img_box2 {
    border-radius: 50%;
    background-color: #e6e6e6;
  }
  img {
    width: 40px;
    height: 40px;
    color: #fff;
    font-size: 50px;
    font-family: Hellofont FangHuaTi;
    border-radius: 16px;
  }
  @media screen and (min-width: 500px) {
    .top_back2 {
      height: 50px;
      margin-bottom: 20px;
      font-size: 50px;
    }
    .img_box {
      left: 10px;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 16px;
    }
    .img_box2 {
      border-radius: 50%;
      background-color: #e6e6e6;
    }
  }
</style>
