<template>
  <div class="cla">
    <Swiper :listImg="listImg" :height="height"></Swiper>
    <div class="appointment">
      <div class="img">
        <img :src="imgUrl" alt="">
      </div>
      <div class="logo">
        <img :src="logo" alt="">
        <div class="logo-btn" @click="login() ">
          预约课程
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
import {getBigBannerPictures} from 'api/dataList'
import {ERR_OK} from 'api/config'
export default {
  data () {
    return {
      imgUrl: './static/images/icon/slogan.png',
      logo: './static/images/icon/logo.png',
      height: '323px',
      listImg: [
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' }
      ]
    }
  },
  created () {
    this._getBigBannerPictures()
  },
  methods: {
    login () {
      this.$router.push({
        path: `/Login`
      })
    },
    _getBigBannerPictures () {
      console.log('banner')
      getBigBannerPictures().then((res) => {
        if (res.code === ERR_OK) {
          console.log('banner-内部')
          console.log(res)
        }
      })
    }
  },
  components: {
    Swiper
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.cla {
  width: 100%;
  .appointment {
    width: 602px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 168px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .img {
      img {
        width: 304px;
        height: 204px;
      }
    }
    .logo {
      text-align: center;
      img {
        width: 165px;
        height: 84px;
      }
      .logo-btn {
        width: 183px;
        height: 74px;
        line-height: 74px;
        text-align: center;
        background: #000;
        color: #fff;
        font-size: 26px;
        border-radius: 50px;
        margin-top: 120px;
      }
    }
  }
}
</style>
