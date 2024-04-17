<template>
  <div class="my-wave-loader">
    <div class="my-wave-loader-inner">
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
    </div>
    <div class="text_loading">Connecting...</div>
    <!-- <div class="my-wave-loader-inner">
      <div class="my-wave-loader-block">C</div>
      <div class="my-wave-loader-block">O</div>
      <div class="my-wave-loader-block">n</div>
      <div class="my-wave-loader-block">n</div>
      <div class="my-wave-loader-block">e</div>
      <div class="my-wave-loader-block">c</div>
      <div class="my-wave-loader-block">t</div>
      <div class="my-wave-loader-block">i</div>
      <div class="my-wave-loader-block">n</div>
      <div class="my-wave-loader-block">g</div>
    </div> -->
    <div class="my-wave-loader-inner">
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
      <div class="my-wave-loader-block"></div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .text_loading {
    font-weight: bolder;
    color: #a1cbeb;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .top_link_box {
    width: 100%;
  }
  .my-wave-loader {
    border-radius: 50px;
    width: 80%;
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
    background: #ffffff2b;
    padding: 6px;
  }

  .my-wave-loader-block {
    display: inline-block;
    width: 5px;
    height: 10px;
    margin: 4px;
    background-color: #41c0df;
    box-shadow: 0 0 20px #41c0df;
    animation: my-wave-loader_562 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
      transform: scale(1, 2.5);
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
    }

    40% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
</style>
