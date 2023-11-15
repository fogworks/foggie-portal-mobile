<template>
  <div>
    <!-- <nut-audio @play="palyChange" :url="audioUrl" :loop="true" type="progress">
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back">Reverse</nut-audio-operate>
        <nut-audio-operate type="play">{{ isPlay ? 'Pause' : 'Play' }}</nut-audio-operate>
        <nut-audio-operate type="forward">Forward</nut-audio-operate>
      </div>
    </nut-audio> -->
    <audio style="display: block; margin: 0 auto" :src="audioUrl" controls></audio>
  </div>
</template>

<script setup>
  const props = defineProps({
    audioUrl: String,
  });
  const { audioUrl } = toRefs(props);
  const isPlay = ref(false);
  const palyChange = (type) => {
    isPlay.value = type;
  };
</script>

<style lang="scss" scoped>
  //   :deep {
  //     .nut-audio-operate-group {
  //       color: #fff;
  //       .nut-audio-operate {
  //         .nut-audio-operate-item {
  //           padding: 5px 15px;
  //           background: #ee0a24;
  //           border-radius: 20px;
  //         }
  //       }
  //     }
  //   }
</style>
