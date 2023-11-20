<template>
  <div>
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">How to use S3 Browser?</div>
    </div>
    <div class="recharge_info">
      <div class="h_title h1_title"> We recommend 2 commonly used S3 third-party products for you.namely CloudBerry and S3 Browser. </div>
      <div class="h_title h1_title"> 1.CloudBerry</div>
      <div class="title">
        CloudBerry Explorer is a file browser developed in the industry for accessing and managing object storage directly through
        CloudBerry Explorer under Windows.
      </div>
      <div class="title">
        The main functions of CloudBerry include: supporting AK/SK login, managing buckets, managing objects, uploading and downloading,
        external links, synchronization, etc.
      </div>
      <div class="h_title">1.1 How to download CloudBerry? </div>
      <div class="title">Official website address: <span class="title_click" @click="gotoLink('Cdownload')">Click to download</span></div>
      <div class="title">
        Window installation package: <span class="title_click" @click="gotoLink('Cinstall')">click to install </span></div
      >
      <div class="h_title"> 1.2 How to use? </div>
      <img src="@/assets/s3Use2.jpg" />

      <div class="h_title h1_title"> 2.S3 Browser</div>
      <div class="title"> S3 Browser is an easy-to-use and powerful Amazon S3 free client. </div>
      <div class="h_title"> 2.1 How to download S3 Browser? </div>
      <div class="title">Official website address: <span class="title_click" @click="gotoLink('download')">Click to download</span></div>
      <div class="title"> Window installation package: <span class="title_click" @click="gotoLink('install')">click to install </span></div>
      <div class="h_title"> 2.2 How to use S3 Browser? </div>
      <img src="@/assets/s3Use1.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const gotoLink = (type) => {
    if (type == 'download') {
      window.open('https://s3browser.com/download.aspx');
    } else if (type === 'install') {
      window.open('https://tools-bucket.ks3-cn-beijing.ksyuncs.com/s3browser-10-7-1.exe');
    } else if ('Cdownload') {
      window.open('https://www.msp360.com/cloudberry-backup/download/cbes3free&src=ms/');
    } else if ('Cinstall') {
      window.open('https://tools-bucket.ks3-cn-beijing.ksyuncs.com/CloudBerryExplorerSetup_v5.9.1.192_netv4.0_c421412.exe');
    }
  };
</script>

<style lang="scss" scoped>
  .recharge_info {
    width: 100%;
    padding: 20px;
    padding-bottom: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .title_click {
    color: red;
    text-decoration: underline;
  }

  .h_title {
    width: 100%;
    text-align: left;
    font-size: 28px;
    color: #000;

    margin: 20px 0;
    line-height: 40px;
    font-weight: bold;
    display: inline-block;
    font-weight: bold;
  }
  .title {
    width: 100%;
    text-align: left;
    font-size: 24px;
    color: #666;
    margin: 20px 0;
    line-height: 40px;
    font-weight: bold;
    display: inline-block;
  }
  .h1_title {
    font-size: 30px;
    color: #4c5093;
  }
  img {
    width: 70%;
    height: auto;
  }
</style>
