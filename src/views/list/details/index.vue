<template>
  <div class="detail_box">
    <!-- <nut-grid class="top_grid" column-num="3" direction="horizontal">
      <nut-grid-item text="Income">
        <img src="@/assets/incoming.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Merkle">
        <img src="@/assets/tree.svg" alt="" />
      </nut-grid-item>
      <nut-grid-item text="Challenge">
        <img src="@/assets/setting.svg" alt="" />
      </nut-grid-item>
    </nut-grid> -->

    <nut-row class="order-detail">
      <nut-col :span="24"> Order-{{ detailsData[0].order_id }} Expriration time: {{ detailsData[0].expire }} </nut-col>
      <nut-col :span="8">
        <nut-circle-progress progress="50" radius="60">100M of 1G</nut-circle-progress>
      </nut-col>
      <nut-col :span="16">
        <nut-cell>
          <Image color="red" />
          File 1000
        </nut-cell>
        <nut-cell>
          <Image color="red" />
          Space 1GB
        </nut-cell>
      </nut-col>
    </nut-row>

    <nut-row>
      <nut-col :span="6" />
      <nut-col :span="6" />
      <nut-col :span="6" />
      <nut-col :span="6" />
    </nut-row>

    <nut-uploader url="https://www.baidu.com" multiple :before-upload="beforeupload" :disabled="isDisabled">
      <nut-button type="success" size="small">+ Upload</nut-button>
    </nut-uploader>

    <!-- <IconRecycleFill  />
     -->
    <recycleFill />
    <icon10kOutline color="red" />
  </div>
</template>

<script setup lang="ts">
  import recycleFill from '~icons/home/recycle-fill';

  // import IconRecycleFill from '~icons/ri/recycle-fill';
  import icon10kOutline from '~icons/material-symbols/10k-outline';
  // import { Image } from '@nutui/icons-vue';
  import { detailsData } from '../data';
  // const router = useRouter();
  // let details = reactive<any>({ data: {} });

  import { get_order_node } from '@/api/amb';

  const isDisabled = ref<boolean>(false);
  const beforeupload = (file: any) => {
    console.log('file++++', file);
    // get amb node
    get_order_node(detailsData[0].uuid)
      .then((res) => {
        console.log('res----', res);
        // get status
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<style lang="scss" scoped>
  .order-detail {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;

    .nut-col {
      padding: 10px;
      background: none;
      box-shadow: none;
      color: #000;
      font-size: 12px;
      font-weight: bold;

      .nut-cell {
        box-shadow: none;
      }

      .nut-circle-progress {
        .nut-circle-progress__text {
          font-size: 12px !important;
        }
      }
    }
  }

  .detail_box {
    box-sizing: border-box;
    height: 100%;
    padding: 20px;

    .top_grid {
      :deep {
        .nut-grid-item__content {
          height: unset;
          margin: 20px;
          padding: 20px;
          border-radius: 40px;

          img {
            width: 100px;
          }
        }
      }
    }
  }
</style>
