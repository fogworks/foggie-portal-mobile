<template>
  <!-- <Transition name="fade-transform" mode="out-in" appear> -->
  <slot></slot>
  <!-- </Transition> -->
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
    transition: all 0.15s ease;
  }

  .fade-transform-enter-active {
    transition: all 0.15s ease;
    transition-delay: 0.1s;
  }

  .fade-transform-enter-from {
    transform: translateX(-30px);
    opacity: 0;
  }

  .fade-transform-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .fade-transform-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
