<template>
  <Transition name="fade-transform" mode="out-in" appear>
    <slot></slot>
  </Transition>

</template>

<script setup></script>

<style lang="scss" scoped>
  

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.4s;
  }

  .slide-right-enter-from {
    transform: translateX(0);
  }
  .slide-right-enter-to {
    transform: translateX(0);
  }
  .slide-right-leave-from {
    transform: translateX(0);
  }
  .slide-right-leave-to {
    transform: translateX(-120%);
  }

  /* fade  */
  .fade-transform-leave-active {
    transition: all 0.3s ease;
  }
  .fade-transform-enter-active {
    transition: all 0.15s ease;
    transition-delay: 0.1s;
  }

  .fade-transform-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
