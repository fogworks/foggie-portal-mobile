<template>
  <div class="userInfo">
    <div class="userHeader">
      <div class="title">UserInfo</div>
      <div class="user_header_box">
        <img src="@/assets/user.png" alt="" srcset="">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="MemberPage">
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { user } from '@/api';





</script>

<style lang="scss" scoped>
.userInfo {
  margin-left: -4vw;
  margin-right: -4vw;

  .userHeader {
    padding: 20px 60px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    .title {
      color: azure;
      font-size: 40px;
      text-align: center;
    }

    .user_header_box {
      --w: 150px;
      display: grid;
      grid-template-columns: var(--w) auto;
      column-gap: 30px;

      img {

        width: var(--w);
        height: calc(var(--w) * 1.1547);
        background-color: azure;
        // -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        // clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);

        -webkit-clip-path: polygon(50% 0%, 90% 20%, 100% 62%, 75% 100%, 25% 100%, 0% 62%, 10% 20%);
        clip-path: polygon(50% 0%, 90% 20%, 100% 62%, 75% 100%, 25% 100%, 0% 62%, 10% 20%);
        display: flex;
        flex-shrink: 0;
        height: calc(150px + 4vw);
        width: calc(150px + 4vw);
        margin: 25px;
        background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
      }
    }
  }
}
</style>
