<template>
  <div class="sd_container">
    <div class="card-sd_container">
      <div class="card-content">
        <div class="card-sd_title">
          <span class="sd_title">
            <nut-noticebar :text="text" background="transparent" color="#fff" :left-icon="false" />
          </span>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const text = ref('您昨日的在线时长是10小时20分钟，收益+100.DMC');
</script>

<style lang="scss">
  .nut-noticebar__page {
    height: 50px;
    line-height: 50px;
  }
  .maxio_sd_rightContent {
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    margin-left: -20px;
  }
  .sd_container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    display: flex;
    aspect-ratio: 16/9;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  .card-sd_container {
    filter: drop-shadow(46px 36px 24px #4090b5) drop-shadow(-55px -40px 25px #9e30a9);
    animation: blinkShadowsFilter 3s ease-in infinite;
    width: 100%;
  }

  .card-content {
    // padding: 50px 40px 20px 30px;
    padding: 60px 60px 20px 30px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    background-color: hsl(296, 59%, 10%);
    width: 100%;
    box-sizing: border-box;
    aspect-ratio: 9/16;
    // -webkit-clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    // clip-path: polygon(0 0, 85% 0, 100% 14%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
  }

  .card-content::before {
    content: '';
    position: absolute;
    width: 250%;
    aspect-ratio: 1/1;
    transform-origin: center;
    background: linear-gradient(to bottom, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent),
      linear-gradient(to left, transparent, transparent, #66e0ff, #66e0ff, #e366ff, #e366ff, transparent, transparent);
    animation: rotate 5s infinite linear;
  }

  .card-content::after {
    content: '';
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(64, 144, 181, 0.6) 1px,
        rgb(0, 0, 0) 3px,
        rgba(64, 144, 181, 0.3019607843) 5px,
        #153544 4px,
        transparent 0.5%
      ),
      repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsla(295, 60%, 12%, 0.99) 100%);
    box-shadow: inset 0px 0px 30px 40px hsl(296, 59%, 10%);
    -webkit-clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    clip-path: polygon(0 0, 90% 0, 100% 16%, 100% 60%, 92% 65%, 93% 77%, 99% 80%, 99% 90%, 89% 100%, 0 100%);
    animation: backglitch 94ms linear infinite;
  }

  .card-sd_title {
    z-index: 80;
    -webkit-clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    clip-path: polygon(90% 0, 100% 100%, 0% 100%, 0% 0%);
    background: linear-gradient(
        90deg,
        rgba(255, 254, 250, 0) 0%,
        rgba(102, 224, 255, 0.3) 27%,
        rgba(102, 224, 255, 0.3) 63%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(102, 224, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 10%,
        rgba(255, 255, 255, 0) 96%,
        rgba(102, 224, 255, 0.3) 100%
      );
    width: 98%;
    position: absolute;
    top: 2px;
    left: 0;
  }

  .sd_title {
    width: 100%;
    height: 100%;
    text-align: right;
    position: relative;
    z-index: 2;
    color: hsl(192, 100%, 88%);
    font-size: 1em;
    transition: all ease-in-out 2s linear;
  }

  .card-body {
    z-index: 80;
  }

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }

    50% {
      box-shadow: inset 0px -20px 30px 40px hsl(296, 59%, 10.2%);
    }

    to {
      box-shadow: inset 0px 20px 30px 40px hsl(296, 59%, 10%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-50%, 20%);
    }

    50% {
      transform: rotate(180deg) translate(40%, 10%);
    }

    to {
      transform: rotate(360deg) translate(-50%, 20%);
    }
  }

  @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }

    25% {
      filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 24px #9e30a9);
    }

    50% {
      filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
    }
  }
</style>
