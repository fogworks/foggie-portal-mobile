<template>
  <div class="top_back" @click.capture="">
    <div class="img_box">
      <img @click="router.go(-1)" src="@/assets/arrow-left.svg" alt="" />
    </div>
    <slot></slot>
    <slot name='right'></slot>
  </div>
</template>

<script setup name="TopBack">
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>

<style lang="scss" scoped>
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
  img {
    width: 40px;
    height: 40px;
    color: #fff;
    font-size: 50px;
    font-family: Hellofont FangHuaTi;
    border-radius: 16px;
  }

</style>
