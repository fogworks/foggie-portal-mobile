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
    max-width: 100%;
    :deep {
      .nut-video-player {
        max-width: 100%;
        width: unset;
        max-height: 100%;
        margin: 0 auto;
        object-fit: contain;
      }
    }
  }
</style>
