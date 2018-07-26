<template>
  <div class="QRcode">
    <div class="img">
      <img :src="helloUrl" alt="">
    </div>
    <!-- <div class="erwei">
      <img src="" alt="">
    </div>
    <div class="name">
      <div class="name-title">

      </div>
      <div class="name-en">

      </div>
      <div class="name-tirem">

      </div>
    </div> -->
    <div>
      签到成功
    </div>
  </div>
</template>

<script>
import { getUserById } from 'api/dataList'
import { ERR_OK } from 'api/config'
import storage from 'good-storage'

export default {
  data() {
    return {
      helloUrl: './static/images/icon/QRcode.png',
      myList: {}
    }
  },
}
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
.QRcode {
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    font-size: 36px;
  }
  .img{
    width: 368px;
    height: 178px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // .erwei{
  //   width: 311px;
  //   height: 318px;
  //   border: 1px solid #ddd;
  // }
}
</style>
