<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str, index) in listImg" :key="index">
               <img :src="str.url"  @click="goDetail(index)"/>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: ['listImg'],
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination'
        // bulletClass: 'my-bullet',
        // bulletActiveClass: 'my-bullet-active'
      },
      paginationClickable: true,
      loop: false,
      speed: 600,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      onTouchEnd: function () {
        swiper.startAutoplay()
      }
    })
  },
  methods: {
    goDetail (item) {
      console.log(item)
    }
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
