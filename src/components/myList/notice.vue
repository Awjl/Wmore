<template>
  <div class="MyNotice" ref="MyClass">
    <div class="ClassTitle">
      <div class="Title" :class="{TitleActive:index==1}" @click="appointment()">未读</div>
      <div class="line"></div>
      <div class="Title" :class="{TitleActive:index==2}" @click="over()">已读</div>
    </div>
    <div class="line-clo"></div>
    <scroll class="toplist" :data="topList" ref="toplist">
        <!-- <li v-for="(list, index) in topList" :key="index">{{list}}</li> -->
      <div class="list">
        <div class="Item">
          <div class="Item-img">
              <img src="../Icon/wei-icon.png" alt="">
          </div>
          <div class="name">
            <div><span>您预约的课程即将开始</span> <span>7月3日</span></div>
            <p>您预约的课您预约的课程您预约的课程您预约的课程您预约的课程程</p>
          </div>
        </div>
        <div class="line-clo">

        </div>
      </div>
      <div class="list">
        <div class="Item">
          <div class="Item-img">
              <img src="../Icon/yi-icon.png" alt="">
          </div>
          <div class="name">
            <div><span>您预约的课程即将开始</span> <span>7月3日</span></div>
            <p>您预约的课您预约的课程您预约的课程您预约的课程您预约的课程程</p>
          </div>
        </div>
        <div class="line-clo">

        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'

export default {
  created () {
  },
  data () {
    return {
      topList: [],
      index: 1
    }
  },
  methods: {
    appointment () {
      this.index = 1
    },
    over () {
      this.index = 2
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.MyNotice {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 120px;
  .ClassTitle {
    height: 134px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
      height: 40px;
      width: 2px;
      background: #000;
      margin: 0 52px;
    }
    .Title {
      font-size: 26px;
      font-weight: bold;
    }
    .TitleActive {
      color: #57c2cf;
    }
  }
  .line-clo {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
    background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
    background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
  }
  .toplist {
    height: 100%;
    overflow: hidden;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      .Item {
        height: 112px;
        width: 671px;
        display: flex;
        align-items: center;
        .Item-img {
          img {
            width: 60px;
            height: 60px;
            margin-right: 27px;
          }
        }
        .line-shu {
          height: 75px;
          width: 2px;
          background: #89d4dd;
          margin-right: 23px;
        }
        .name {
          div {
            width: 590px;
            display: flex;
            justify-content: space-between;
            span{
            height: 45px;
            font-size: 26px;
            font-weight: bold;
            line-height: 45px;
            }
          }
          p {
            height: 45px;
            width: 590px;
            font-size: 22px;
            color:#c2c2c2;
            letter-spacing:3px ;
            line-height: 45px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
