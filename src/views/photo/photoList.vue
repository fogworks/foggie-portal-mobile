<template>
  <div class="my_photoList_page">
    <div class="top_box">
      <nut-sticky class="file_Top" top="0">
      <div :class="[showTypeCheckPop ? 'header_fixed' : '', 'list_header photo_bucket_head']">
        <div style="display: flex">
            <div class="boxtop">
              <div style="display: flex; align-items: center; flex: 0 0 auto">
                <div class="top_back" @click="router.go(-1)"> </div>
                <span class="top_title photo_title">
                    {{ bucketName }} Photography
                </span>
                <!-- <TriangleUp
                color="white"
                  @click="showTypeCheckPop = !showTypeCheckPop"
                  :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
                ></TriangleUp> -->
              </div>
            </div>
        </div>
      </div>
    </nut-sticky>

      <Teleport to="body">
        <nut-popup position="top" round pop-class="photo_top_select" v-model:visible="showTypeCheckPop">
          <div :class="['list_header']">
            <div style="display: flex">
              <div class="top_back" @click="router.go(-1)"> </div>
              <span class="top_title">{{ bucketName }} Photography</span>
              <TriangleUp
                @click="showTypeCheckPop = !showTypeCheckPop"
                :class="['triangle', showTypeCheckPop ? '' : 'triangleDown']"
              ></TriangleUp>
            </div>
          </div>
          <div class="photo_top_select_check_box type_check_box">
            <div class="type_item" @click="switchType(item)" v-for="(item,index) in bucketList" :key="index">
              <div class="svg_box">
                <img src="@/assets/home_bucket.png"/>
              </div>
              <p class="bucket_title">{{item.domain}}</p>
            </div>
          </div>
        </nut-popup>
      </Teleport>
    </div>
    <ImgBox ref="imgListRef" :orderId="orderId"></ImgBox>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TriangleUp} from '@nutui/icons-vue';
import ImgBox from './imageBox.vue';
import useDelete from '@/views/list/details/useDelete.js';
import useShare from '@/views/list/details/useShare.js';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import useOrderInfo from '@/views/list/details/useOrderInfo.js';
import '@nutui/nutui/dist/packages/dialog/style';
import '@nutui/nutui/dist/packages/toast/style';
import loadingImg from '@/components/loadingImg/index.vue';

import { poolUrl } from '@/setting.js';
import { get_order_sign } from '@/api/index';

let timeOutEvent: string | number | NodeJS.Timeout | undefined;
let server = null;
const route = useRoute();
const router = useRouter();
let list = JSON.parse(window.sessionStorage.getItem('bucketList'));
const bucketList= ref([]);
bucketList.value=list;
const orderId=ref('');
orderId.value=route.query.id;

const imgListRef = ref('');
const { isAvailableOrder, getSummary, bucketName, header, metadata, deviceType, orderInfo, accessKeyId, secretAccessKey, getOrderInfo } =
  useOrderInfo();
const { getHttpShare } = useShare(orderInfo, header, deviceType, metadata);

const handleImg = async (item: { cid: any; key: any }, type: string, isDir: boolean) => {
  let imgHttpLink = '';
  let imgHttpLarge = '';
  type = type.toLowerCase();
  let isSystemImg = false;
  if (
    type === 'png' ||
    type === 'bmp' ||
    type === 'gif' ||
    type === 'jpeg' ||
    type === 'jpg' ||
    type === 'svg' ||
    type === 'ico' ||
    type === 'webp'
  ) {
    imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
    imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, type === 'ico' ? false : true);
  } else if (type === 'mp3') {
    type = 'audio';
    imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
    imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
  } else if (type === 'mp4' || type == 'ogg' || type == 'webm' || type == 'mov') {
    type = 'video';
    imgHttpLink = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key, true);
    imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key) + '&inline=true';
  } else if (['pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(type)) {
    imgHttpLarge = getHttpShare(accessKeyId.value, secretAccessKey.value, bucketName.value, item.key);
  } else {
    isSystemImg = true;
  }
  if (isDir) {
    isSystemImg = true;
  }
  return { imgHttpLink, isSystemImg, imgHttpLarge };
};

provide('handleImg', handleImg);
const showTypeCheckPop = ref(false);
const fileTypeText = {
  0: 'All File List',
  1: 'Image',
  2: 'Video',
  3: 'Audio',
  4: 'Document',
};
const switchType =async (list) => {
  showTypeCheckPop.value = false;
//   window.sessionStorage.setItem('bucketList', JSON.stringify(list));
//     router.push({
//         name: 'photoList',
//         query: { name: list.domain || list.order_id, id: list.order_id, uuid: list.uuid, amb_uuid: list.amb_uuid, category: 1 },
//     });
};
const initParam=()=>{

};
onMounted(async () => {
  console.log('-----parent---onMounted-----');
  await getOrderInfo();
});
</script>

<style lang="scss" scoped>
@import './index.scss';
.my_photoList_page {
  background: #fff;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
  margin: 0 -4vw;
  width: calc(100% + 8vw);
  .my_photo_headTitle {
    padding-left: 30px;
    margin: 20px 0;
    .text {
      font-weight: bold;
      font-size: 50px;
    }
  }
}
.photo_bucket_head{
    background: transparent;
    .photo_title{
        color: #fff;
        padding-left: 60px;
    }
}

.photo_top_select {
  .list_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    color: $primary-color-end;
    span {
      font-size: 35px;
      font-weight: 700;
      line-height: 60px;
    }
    .triangle {
      margin: 10px;
      width: 40px;
      height: 40px;
      transition: all 0.3s;
    }
    .triangleDown {
      transform: rotate(180deg);
    }
    .top_title {
      margin-left: 80px;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }

  }
  .photo_top_select_check_box{
    padding-bottom: 20px;
    .type_item{
        margin-bottom: 20px;
    }
    .svg_box{
        img{
            width: 90px;
            height: 90px;
        }
    }
    .bucket_title{
        margin: 20px 0;
        text-align: center;
    }
}
}

</style>
