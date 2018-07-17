<template>
  <div class="MyClass" ref="MyClass">
    <div class="ClassTitle">
      <div class="Title" :class="{TitleActive:index==1}" @click="appointment()">已预约</div>
      <div class="line"></div>
      <div class="Title" :class="{TitleActive:index==2}" @click="over()">已完成</div>
    </div>
    <div class="line-clo"></div>
    <scroll class="toplist" :data="topList" ref="toplist">
        <!-- <li v-for="(list, index) in topList" :key="index">{{list}}</li> -->
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
        <div class="line-clo">

        </div>
      </div>
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
            <p><img src="../Icon/hu-icon.png" alt=""> 户外课</p>
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
.MyClass {
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
  .line-clo{
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #81d1db ,#c6cbcc, #85d2db);
    background: -o-linear-gradient(right,#81d1db ,#c6cbcc, #85d2db);
    background: -moz-linear-gradient(right,#81d1db ,#c6cbcc, #85d2db);
    background: linear-gradient(to right, #81d1db ,#c6cbcc, #85d2db);
  }
  .toplist {
    height: 100%;
    overflow: hidden;
    .Item{
      height: 112px;
      width: 100%;
      display: flex;
      align-items: center;
      .time{
        width: 137px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
          font-size: 26px;
          font-weight: bold;
          line-height:45px;
        }
      }
      .line-shu{
        height: 75px;
        width: 2px;
        background: #89d4dd;
        margin-right: 23px;
      }
      .name{
        p{
          font-size: 26px;
          font-weight: bold;
          line-height: 45px;
        }
        img{
          width: 26px;
          height: 26px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
