<template>
  <h2>收益</h2>
  <nut-row>
    <nut-col :span="16">
      <div class="flex-content">span:16</div>
      <nut-row>
        <nut-col :span="24">
          <div class="flex-content">span:24</div>
        </nut-col>
      </nut-row>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content flex-content-light">span:8</div>
    </nut-col>
  </nut-row>
 
</template>
<style>
  .nut-row {
    overflow: hidden;
    margin-bottom: 15px;
  }
  .nut-row:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  .flex-content {
    color: #fff;
    text-align: center;
    border-radius: 6px;
    background: #ff8881;
  }
  .flex-content-light {
    background: #ffc7c4;
    height: 150px;
  }
</style>


<script lang="ts" setup name="HomePage">
</script>
<style lang="scss">

</style>
