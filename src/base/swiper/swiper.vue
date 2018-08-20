<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(str, index) in listImg" :key="index" :style="{height: height + 'px' }">
        <a :href="str.contentUrl"><img :src="`http://${str.pictureUrl}?x-oss-process=image/format,png`" /></a>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['listImg', 'height'],
  updated() {
    var swiper = new Swiper('.swiper-container', {
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination'
      },
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.swiper-container {
  width: 100%;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
