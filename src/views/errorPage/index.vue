<template>
  <nut-empty image="error" description="Load Failure">
    <div style="margin-top: 10px">
      <nut-button icon="refresh" type="primary" @click="refresh">Retry</nut-button>
    </div>
  </nut-empty>
</template>
<script name="ErrorPage" setup>
  const emits = defineEmits(['refresh']);
  const refresh = () => {
    emits('refresh');
  };
</script>
