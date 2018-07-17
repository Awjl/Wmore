<template>
  <div class="details">
    <Swiper :listImg="listImg" :height="height"></Swiper>
    <div class="details-content">
      <div class="details-title">
        <div class="detalis-name">
          <p>尾波划水</p>
          <p>WAKEBOARD</p>
        </div>
        <div class="detalis-addres">
          <img src="../Icon/addres-icon.png" alt="">上海索道滑水公园
        </div>
      </div>
    </div>
    <div class="detalis-class">
      <p><img src="../Icon/classTwo-icon.png" alt="">课程简介</p>
    </div>
    <div class="detalis-claText">
      尾波是一种人借助动力的牵引,在水面上“行走”的滑水运动。滑水者通常要穿着“水鞋”,即水橇,在水面上完成各种动作。根据滑水者所使用的水橇种类或不使用水橇,滑水大致可以分成花样(Tricks)、回旋( Slalom)、跳跃( Jumping)、尾波( Wakeboard)、跪板( Kneeboard)、竞速( Ski Racing)、赤脚( Barefoot)等项目。滑水既可以使人感受高速滑行带来的刺激,又能使人体会翻、转、跳、跃带来的“玩”快乐,让人充分享受蓝天碧水的温情以及体育运动带给人的无穷乐趣。
    </div>
    <div class="line"></div>
    <div class="detalis-class active">
      <p><img src="../Icon/propers-icon.png" alt="">适合人群</p>
    </div>
    <div class="detalis-claText">
      尾波滑水适合所有人群,特别是工作压力大、上半身力量缺乏、需要改善自身体质、身上有旧伤或有心理疗愈需求的人群。如果有较为严重的骨骼伤或关节问题,建议咨询医生或教练后再进行选择28°训练效果
    </div>
    <div class="line"></div>
    <div class="detalis-class active">
      <p><img src="../Icon/xun-icon.png" alt="">训练效果</p>
    </div>
    <div class="detalis-claText">
      <div class="xun">
        <span>力量</span>
        <div class="list" style="width:150px;">
          <div class="item" :style="{width:widthOen}"></div>
        </div>
      </div>
      <div class="xun">
        <span>塑型</span>
        <div class="list" style="width:150px;">
          <div class="item" :style="{width:widthTwo}"></div>
        </div>
      </div>
      <div class="xun">
        <span>瘦身</span>
        <div class="list" style="width:150px;">
          <div class="item" :style="{width:widthThree}"></div>
        </div>
      </div>
      <div class="xun">
        <span>舒压</span>
        <div class="list" style="width:150px;">
          <div class="item" :style="{width:widthFour}"></div>
        </div>
      </div>
    </div>
    <div class="detalis-class">
      <p><img src="../Icon/zhu-icon.png" alt="">注意事项</p>
    </div>
    <div class="detalis-class active">
      <p><img src="../Icon/zhun-icon.png" alt="">训练准备</p>
    </div>
    <div class="detalis-claText">
      尾波滑水适合所有人群,特别是工作压力大、上半身力量缺乏、需要改善自身体质、身上有旧伤或有心理疗愈需求的人群。如果有较为严重的骨骼伤或关节问题,建议咨询医生或教练后再进行选择28°训练效果
    </div>
    <div class="line"></div>
    <div class="detalis-class active">
      <p><img src="../Icon/qi-icon.png" alt="">其他事项</p>
    </div>
    <div class="detalis-claText">
      <ul>
        <ol><span>&bull;</span> <p>如果有较严重的骨骼伤或关节问题，建议咨询医生或教练后再进行选择。</p>  </ol>
        <ol><span>&bull;</span> <p>所选课程一经预约不可取消。</p></ol>
      </ul>
    </div>
    <div class="line"></div>
    <div class="he140"></div>
    <div class="footer">
      <div class="line"></div>
        <div class="footer-bot">
          <div>
            <img src="../Icon/timer-icon.png" alt="">7月3日 14:00
          </div>
          <div class="footer-active">
            <img src="../Icon/xiao-icon.png" alt="">确认预约
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/swiper'
export default {
  data () {
    return {
      height: '150px',
      widthOen: '50px',
      widthTwo: '100px',
      widthThree: '120px',
      widthFour: '80px',
      listImg: [
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' },
        { url: './static/images/banner/home-banner.jpg' }
      ]
    }
  },
  components: {
    Swiper
  },
  created () {
    this.datas()
  },
  methods: {
    datas () {
      console.log(this.$route.params.item)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.details {
  width: 100vw;
  height: 100vh;
  .he140{
    height: 140px;
  }
  .line {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
    background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
  }
  .details-content {
    height: 137px;
    display: flex;
    align-items: center;
    .details-title {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .detalis-name {
        p {
          font-size: 30px;
          line-height: 40px;
          font-weight: bold;
        }
      }
      .detalis-addres {
        display: flex;
        align-items: flex-end;
        font-size: 20px;
        font-weight: bold;
        img {
          width: 21px;
          height: 25px;
          margin-right: 10px;
        }
      }
    }
  }
  .detalis-class {
    background: #000;
    margin-bottom: 20px;
    p {
      width: 90%;
      height: 59px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      color: #fff;
      img {
        width: 29px;
        height: 28px;
        margin-right: 20px;
      }
    }
  }
  .active{
    background: #fff;
    margin: 0;
    margin-top: 10px;
    p{
      color: #000;
      font-weight: bold;
    }
  }
  .detalis-claText {
    width: 90%;
    margin: 0 auto;
    line-height: 40px;
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    .xun{
      display: flex;
      align-items: center;
      span{
        font-weight: bold;
      }
      .list{
        height: 24px;
        background: #fff;
        border-radius: 20px;
        border:2px solid #81d1db;
        position: relative;
        margin-left: 20px;
        .item{
          height: 24px;
          position: absolute;
          top: 0;
          left: 0;
          background: #81d1db;
          border-radius: 20px;
        }
      }
    }
    ul ol{
      display: flex;
      margin-bottom: 10px;
      span{
        font-size: 40px;
        font-weight: bold;
        color: #57c2cf;
        margin-right: 20px;
      }
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    .footer-bot{
      display: flex;
      justify-content: space-between;
      height: 100px;
      div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: bold;
        img{
          width: 33px;
          height: 33px;
          margin-right: 20px;
        }
        &.footer-active{
          background: #81d1db;
          color: #fff;
        }
      }
    }
  }
}
</style>
