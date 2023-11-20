<template>
  <Transition name="slide-right" mode="out-in" appear>
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
</style>
