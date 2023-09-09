<template>
  <nut-collapse v-model="activeNames" @change="onChange">
    <nut-collapse-item :title="'storage - ' + item.space_order_id" :name="index" v-for="(item, index) in list" :key="index">
      <nut-row>
        <nut-col :span="8">
          <img src="@/assets/storage.svg" alt="" width="100%" />
          <div class="list-col-space">
            {{ formatSize(Number(item.total_space)) }}
          </div>
        </nut-col>
        <nut-col :span="8">
          <nut-circle-progress :progress="handleProgress(item)" radius="40" />
          <span class="col-span">Run cycle</span>
        </nut-col>
        <nut-col :span="8">
          <nut-button type="info" size="small" @click="toDetails(item.space_order_id)">Detail</nut-button>
        </nut-col>
      </nut-row>
    </nut-collapse-item>
  </nut-collapse>
</template>

<script lang="ts" setup name="ListPage">
  import { listData } from './data';

  import { ref } from 'vue';

  const router = useRouter();

  let list = ref(listData);

  const toDetails = (index: any) => {
    router.push({ path: '/details', query: { id: index } });
  };
  const activeNames = ref([]);
  const onChange = (modelValue: any, currName: any, status: any) => {
    // currName: 当前操作的 collapse-item 的 name
    // status: true 打开 false 关闭
    console.log(modelValue, currName, status);
  };

  const handleProgress = (item: { created_at: string | number | Date; expire: string | number | Date }) => {
    let created = new Date(item.created_at).getTime();
    let now = new Date().getTime() - created;
    let end = new Date(item.expire).getTime() - created;
    return +(now / end).toFixed(2) > 1 ? 100 : +((now / end) * 100).toFixed(2) > 0 ? +((now / end) * 100).toFixed(2) : 0;
  };

  const formatSize = (size: number) => {
    size = Number(size);
    if (size < 1024) {
      return size.toFixed(0) + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
    }
  };

  // export default {
  //   setup() {

  //     return {
  //       onChange,
  //       activeNames,
  //       ...toRefs(title)
  //     };
  //   }
  // };
</script>

<style lang="scss" scoped>
  .nut-row {
    margin-bottom: 15px;
    overflow: hidden;

    > .nut-col {
      margin-bottom: 15px;
      padding: 10px;
      line-height: 1;
      text-align: center;
      // height: 120px;
      // background: $primary-color;
      // border: 1px solid blue;
      img {
        width: 40%;
        height: 40%;
        margin: 20%;
        border-radius: 20%;
        background: $primary-color;
      }

      .list-col-space {
        // margin-top: 5vw;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-circle-progress {
        margin: 0 auto;
      }

      .col-span {
        display: block;
        height: 16px;
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-button {
        margin-top: 8vw;
      }
    }
  }
</style>
