<template>
  <div class="e-card playing">
    <div class="image"></div>

    <div class="my_wave"></div>
    <div class="my_wave"></div>
    <div class="my_wave"></div>

    <div class="infotop">
      <slot></slot>
      <br />
      <br />
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
    width: 240px;
    height: 330px;
    border-radius: 16px;
    overflow: hidden;
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
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    background: linear-gradient(744deg, #892ecb, #a49ae0 60%, #080b0c);
    background: linear-gradient(744deg, #e448a2, #1f27df 60%, #080b0c);
    background: linear-gradient(744deg, #e448a270, #a49ae063 60%, #080b0c63);
  }

  .my_icon {
    width: 3em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 5.6em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  .name {
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
  }

  .my_wave:nth-child(2),
  .my_wave:nth-child(3) {
    top: 210px;
  }

  .playing .my_wave {
    border-radius: 40%;
    animation: my_wave 3000ms infinite linear;
  }

  .my_wave {
    border-radius: 40%;
    animation: my_wave 55s infinite linear;
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
