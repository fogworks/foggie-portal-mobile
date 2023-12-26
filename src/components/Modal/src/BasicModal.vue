<template>
  <Popup
    :show="props.show"
    @close="$emit('update:show', false)"
    teleport="body"
    :style="`overflow-y: auto;`"
    :close-on-click-overlay="closeOnClickOverlay"
    class="my-custom-popup"
  >
    <div :class="['modal-content', size]">
      <div class="content">
        <slot></slot>
      </div>
      <!-- <div class="btn">
        <div class="btn-confirm" @click="$emit('confirm')">{{ $t('btn.confirm') }}</div>
        <div class="btn-cancel" @click="$emit('update:show', false)">{{ $t('btn.cancel') }}</div>
      </div> -->
      <div class="modal-close" @click="closeModal"> </div>
    </div>
  </Popup>
</template>
<script lang="ts">
  export default {
    name: 'BasicModal',
  };
</script>
<script setup lang="ts">
  import { Popup } from 'vant';
  import 'vant/es/popup/style/index';

  const props = withDefaults(
    defineProps<{
      show: boolean;
      closeOnClickOverlay?: boolean;
      size?: 'normal' | 'large';
    }>(),
    {
      show: false,
      closeOnClickOverlay: false,
      size: 'large',
    },
  );

  const emits = defineEmits<{
    (event: 'confirm'): void;
    (event: 'update:show', data: boolean): void;
  }>();
  const closeModal = () => {
    emits('update:show', false);
  };
</script>
<style scoped lang="scss">
  @import './index.scss';
</style>
<style lang="scss">
  .my-custom-popup {
    background: transparent;
  }
  .my_dialog_content {
    padding: 20px;
    .my_dialog_title {
      font-weight: bold;
      text-align: center;
      padding-top: 50px;
    }
    .my_dialog_content {
      font-size: 28px;
      color: #333;
      .my_dialog_content_p {
        margin-bottom: 10px;
        text-indent: 20px;
        line-height: 40px;
        white-space: pre-wrap;
      }
    }
  }
</style>
