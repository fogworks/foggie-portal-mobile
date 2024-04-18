<template>
  <div class="my-wave-loader" @click="changeHeight" :class="[isHeight ? 'maxHeight' : 'hideHeight']">
    <div class="my-wave_box">
      <div class="my-wave-loader-inner">
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
      </div>
      <!-- <div class="text_loading">Connecting...</div> -->
      <div class="my-wave-loader-inner my_second_inner">
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
      </div>
      <div class="my-wave-loader-inner my_second_inner1">
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
      </div>
      <div class="my-wave-loader-inner my_second_inner2">
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const isHeight = ref(false);
  const changeHeight = () => {
    isHeight.value = !isHeight.value;
  };
</script>

<style lang="scss" scoped>
  .text_loading {
    opacity: 0.8;
    font-weight: bolder;
    color: #a1cbeb;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    z-index: 0;

    --c: #9cc6e7;
    --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
    --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%) no-repeat;
    background: var(--w1), var(--w2), var(--w1), var(--w2);
    background-position-x:
      -200%,
      -100%,
      0%,
      100%;
    background-position-y: 100%;
    background-size: 50.5% 100%;
    animation: m 1s infinite linear;
    font-weight: bold;
    color: transparent;
    -webkit-background-clip: text; /*文本裁切*/
    -webkit-text-stroke: 2px var(--c);
    @keyframes m {
      0% {
        background-position-x:
          -200%,
          -100%,
          0%,
          100%;
      }
      100% {
        background-position-x: 0%, 100%, 200%, 300%;
      }
    }
  }
  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .top_link_box {
    width: 100%;
  }
  .my-wave-loader {
    border-radius: 50px;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0px auto 20px;
    cursor: pointer;
    transition: ease 0.2s;
    position: relative;
    background: #222;
    transition: all 0.9s ease;
  }
  .maxHeight {
    height: 150px;
  }
  .hideHeight {
    height: 50px;
  }
  .my-wave_box {
    width: 70%;
    height: 100%;
    // background: #ffffff2b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-wave-loader:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
  }

  .my-wave-loader-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 6px;
    z-index: 8;
    opacity: 0.6;
  }

  .my-wave-loader-block {
    display: inline-block;
    width: 3px;
    height: 10px;
    margin: 4px;
    background-color: #41c0df;
    box-shadow: 0 0 20px #41c0df;
    animation: my-wave-loader_562 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .my_second_inner {
    .my-wave-loader-block {
      background-color: #578d9b;
      box-shadow: 0 0 20px #578d9b;
    }
  }
  .my_second_inner1 {
    .my-wave-loader-block {
      background-color: #9026dbcc;
      box-shadow: 0 0 20px #9026dbcc;
    }
  }
  .my_second_inner2 {
    .my-wave-loader-block {
      background-color: #cf32ce;
      box-shadow: 0 0 20px #cf32ce;
    }
  }

  .my-wave-loader-block:nth-child(1) {
    animation-delay: 0.1s;
  }

  .my-wave-loader-block:nth-child(2) {
    animation-delay: 0.2s;
  }

  .my-wave-loader-block:nth-child(3) {
    animation-delay: 0.3s;
  }

  .my-wave-loader-block:nth-child(4) {
    animation-delay: 0.4s;
  }

  .my-wave-loader-block:nth-child(5) {
    animation-delay: 0.5s;
  }

  .my-wave-loader-block:nth-child(6) {
    animation-delay: 0.6s;
  }

  .my-wave-loader-block:nth-child(7) {
    animation-delay: 0.7s;
  }

  .my-wave-loader-block:nth-child(8) {
    animation-delay: 0.8s;
  }
  .my-wave-loader-block:nth-child(9) {
    animation-delay: 0.9s;
  }
  .my-wave-loader-block:nth-child(10) {
    animation-delay: 1s;
  }
  .my-wave-loader-block:nth-child(8) {
    animation-delay: 1.1s;
  }

  @keyframes my-wave-loader_562 {
    0% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }

    20% {
      transform: scale(2, 5.5);
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
    }

    40% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
</style>
