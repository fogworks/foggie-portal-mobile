<template>
  <div>
    <!-- <nut-audio @play="palyChange" :url="audioUrl" :loop="true" type="progress">
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back">Reverse</nut-audio-operate>
        <nut-audio-operate type="play">{{ isPlay ? 'Pause' : 'Play' }}</nut-audio-operate>
        <nut-audio-operate type="forward">Forward</nut-audio-operate>
      </div>
    </nut-audio> -->
    <div class="cover_img">
      <img v-if="coverUrl" :src="coverUrl" alt="" />
      <IconAudio2 v-else alt="" />
    </div>
    <audio style="display: block; margin: 0 auto" :src="audioUrl" controls></audio>
  </div>
</template>

<script setup>
  // import IconAudio2 from '~icons/home/audio2.svg';
  // import IconAudio2 from '~icons/home/audio.svg';
  import IconAudio2 from '~icons/home/audio3.svg';
  const props = defineProps({
    audioUrl: String,
    coverUrl: String,
  });
  const { audioUrl, coverUrl } = toRefs(props);
  const isPlay = ref(false);
  const palyChange = (type) => {
    isPlay.value = type;
  };
</script>

<style lang="scss" scoped>
  .cover_img {
    position: relative;
    width: 18rem;
    height: 18rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
    background: url('@/assets/heijiao.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    svg,
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 65%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
  }
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
