<template>
  <div class="detail_box">
    <nut-grid class="top_grid" column-num="3">
      <nut-grid-item text="Income">
        <img src="@/assets/incoming.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Merkle">
        <img src="@/assets/tree.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Challenge">
        <img src="@/assets/setting.svg" alt="" />
      </nut-grid-item>
    </nut-grid>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  let details = reactive<any>({ data: {} });
</script>

<style lang="scss" scoped>
  .detail_box {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    .top_grid {
      :deep {
        .nut-grid-item__content {
          border-radius: 40px;
          margin: 20px;
          padding: 20px;
          height: unset;
          img {
            width: 100px;
          }
        }
      }
    }
  }
</style>
