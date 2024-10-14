<template>
  <div>
    <img src="@/assets/DMC_token.png" alt="" />
  </div>
</template>
<style scoped>
  img {
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50%;
    -webkit-animation: spin 2s infinite;
    -webkit-animation-timing-function: linear;
    -webkit-perspective: 1000;
    -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.2));
    -webkit-filter: saturate(1.45) hue-rotate(2deg);
  }
  @keyframes spin {
    from {
      -webkit-transform: rotateY(0deg);
    }
    to {
      -webkit-transform: rotateY(360deg);
    }
  }
  @media screen and (min-width: 500px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
</style>
