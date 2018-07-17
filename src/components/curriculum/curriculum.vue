<template>
  <div class="curriculum">
    <Swiper :listImg="listImg" :height="height"></Swiper>
    <Calendar></Calendar>
    <div class="line-clo">
    </div>
    <div class="listcomment"  @click="goDetails(111)">
      <div class="list">
        <div class="Item">
          <div class="time">
            <p>6月10日</p>
            <p>14:00</p>
          </div>
          <div class="line-shu">
          </div>
          <div class="name">
            <p>瑜伽中级 YOGA-INTERMEDIATE</p>
            <p><img src="../Icon/yuan-icon.png" alt=""> 员工课</p>
          </div>
        </div>
        <div class="list-btn">
          可选
        </div>
      </div>
      <div class="line-clo">
      </div>
    </div>
    <div class="listcomment" @click="goDetails(4444)">
      <div class="list">
        <div class="Item">
          <div class="time">
            <p>6月10日</p>
            <p>14:00</p>
          </div>
          <div class="line-shu">
          </div>
          <div class="name">
            <p>瑜伽中级 YOGA-INTERMEDIATE</p>
            <p><img src="../Icon/yuan-icon.png" alt=""> 员工课</p>
          </div>
        </div>
        <div class="list-btn">
          可选
        </div>
      </div>
      <div class="line-clo">
      </div>
    </div>
    <div class="listcomment"  @click="goDetails(23123)">
      <div class="list">
        <div class="Item">
          <div class="time">
            <p>6月10日</p>
            <p>14:00</p>
          </div>
          <div class="line-shu">
          </div>
          <div class="name">
            <p>瑜伽中级 YOGA-INTERMEDIATE</p>
            <p><img src="../Icon/yuan-icon.png" alt=""> 员工课</p>
          </div>
        </div>
        <div class="list-btn active">
          满员
        </div>
      </div>
      <div class="line-clo">
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from 'base/calendar/calendar'
import Swiper from 'base/swiper/swiper'
// import { getCourse } from 'api/dataList'
// import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      height: '150px',
      userId: '231',
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
    // this._getCourse()
  },
  methods: {
    goDetails (item) {
      // 路由跳转
      this.$router.push({
        path: `/Details/${item}`
      })
      console.log(item)
    }
    // _getCourse () {
    //   getCourse(8,).then((res) => {
    //     if (res.code === ERR_OK) {
    //       console.log(res)
    //     }
    //   })
    // }
  },
  components: {
    Calendar,
    Swiper
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.curriculum {
  background: #fff;
  width: 100vw;
  padding-bottom: 120px;
  .line-clo {
    width: 100%;
    height: 4px;
    background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
    background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
  }
  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-btn {
      width: 79px;
      height: 52px;
      line-height: 52px;
      text-align: center;
      background: #57c2cf;
      border-radius: 20px;
      font-weight: bold;
      margin-right: 40px;
    }
    .active {
      background: #b3b3b3;
    }
    .Item {
      height: 112px;
      width: 85%;
      display: flex;
      align-items: center;
      .time {
        width: 137px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          font-size: 26px;
          font-weight: bold;
          line-height: 45px;
        }
      }
      .line-shu {
        height: 75px;
        width: 2px;
        background: #89d4dd;
        margin-right: 23px;
      }
      .name {
        p {
          font-size: 26px;
          font-weight: bold;
          line-height: 45px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        img {
          width: 26px;
          height: 26px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
