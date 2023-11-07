<template>
  <div>
    <vue-office-docx style="height: 100vh" v-if="fileType == 'docx'" :src="fileSrc" @rendered="rendered" @error="errorHandler" />
    <vue-office-excel style="height: 100vh" :src="fileSrc" v-else-if="fileType == 'excel'" @rendered="rendered" @error="errorHandler" />
    <VuePdfApp style="height: 100vh" :pdf="fileSrc" v-else-if="fileType == 'pdf'" />
  </div>
</template>

<script setup >
  import VueOfficeDocx from '@vue-office/docx';
  import '@vue-office/docx/lib/index.css';
  import VueOfficeExcel from '@vue-office/excel';
  import '@vue-office/excel/lib/index.css';
  import VuePdfApp from 'vue3-pdf-app';
  import 'vue3-pdf-app/dist/icons/main.css';

  import { useRoute } from 'vue-router';
  const route = useRoute();
  const fileSrc = ref(route.query.fileSrc || '');

  const fileType = ref(route.query.fileType || 'pdf');
console.log(fileSrc.value);
console.log(fileType.value);

  function rendered() {
    console.log('渲染完成');
  }
  function errorHandler() {
    console.log('渲染失败');
  }
</script>

<style lang="scss" scoped></style>
