<template>
  <div class="e-card playing">
    <div class="image"></div>

    <div class="my_wave"></div>
    <div class="my_wave"></div>
    <div class="my_wave"></div>

    <div class="infotop">
      <slot></slot>
      <!-- <br />
      <br /> -->
      <div class="name">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .e-card {
    margin: 100px auto;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    width: 200px;
    height: 180px;
    border-radius: 50px;
    overflow: hidden;
    border: 1px solid #ffffff2b;
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1490196078) 0%, rgba(255, 255, 255, 0.3215686275) 100%);
    background-image: linear-gradient(344deg, rgb(10 10 9 / 95%) 0%, rgb(174 255 0 / 79%) 100%);
  }
  .wave-disable {
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1490196078) 0%, rgba(255, 255, 255, 0.3215686275) 100%);
  }

  .my_wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    // background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    // background: linear-gradient(744deg, #892ecb, #a49ae0 60%, #080b0c);
    // background: linear-gradient(744deg, #e448a2, #1f27df 60%, #080b0c);
    // background: linear-gradient(744deg, #ffffff52, rgb(164 154 224 / 18%) 60%, #ca5891);
    // background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1490196078) 0%, rgba(255, 255, 255, 0.3215686275) 100%);
  }

  .my_icon {
    width: 3em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    // position: absolute;
    // top: 5.6em;
    // left: 0;
    // right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .name {
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
    .title {
    }
  }

  .my_wave:nth-child(2),
  .my_wave:nth-child(3) {
    top: 210px;
  }

  .playing .my_wave {
    border-radius: 40%;
    // animation: my_wave 3000ms infinite linear;
  }

  .my_wave {
    border-radius: 40%;
    // animation: my_wave 55s infinite linear;
  }

  .playing .my_wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .my_wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .my_wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .my_wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes my_wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
