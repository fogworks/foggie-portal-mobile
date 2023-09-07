<template>
  <section class="info">
    <div>
      <span class="price">
      </span>
    </div>
    <div>
      <span>{{ details.data?.title }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { detailsData } from '../data';
  const router = useRouter();

  let details = reactive<any>({ data: {} });

  watch(
    () => router,
    (val) => {
      details.data = detailsData.find((_item, index) => index == parseInt(val.currentRoute.value.query.id as string));
      // details.data = detailsData[0]
    },
    { deep: true, immediate: true },
  );
</script>

<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 500px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    padding: 20px;
    .price {
      color: #f2270c;
      display: inline-block;
      font-size: 32px;
      em {
        font-size: 56px;
        font-style: normal;
      }
    }
  }
</style>
