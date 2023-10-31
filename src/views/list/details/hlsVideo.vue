<template>
  <nut-video
    class="video_box"
    :source="{
      src: imgUrl,
      type: 'video/mp4',
    }"
    :options="{
      autoplay: true,
      controls: true,
    }"
  >
  </nut-video>
</template>

<script setup>
  const props = defineProps({
    imgUrl: String,
  });
  const { imgUrl } = toRefs(props);
  onMounted(() => {
    // init();
  });
</script>

<style lang="scss" scoped>
  .video_box {
    max-height: calc(100% - 300px);
    :deep {
      .nut-video-player {
        width: unset;
        margin: 0 auto;
      }
    }
  }
</style>
