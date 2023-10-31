<template>
  <nut-video
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

<style lang="scss" scoped></style>
