<template>
  <div class="MyClass" ref="MyClass">
    <div class="heard">
      <div class="ClassTitle">
        <div class="Title" :class="{TitleActive:index==1}" @click="appointment()">已预约</div>
        <div class="line"></div>
        <div class="Title" :class="{TitleActive:index==2}" @click="over()">已完成</div>
      </div>
      <div class="line-clo"></div>
    </div>
    <div class="toplist">
      <!-- <li v-for="(list, index) in topList" :key="index">{{list}}</li> -->
      <div class="list" v-for="(list, index) in topList" :key="index">
        <div class="Item">
          <div class="time">
            <p>{{new Date(list.courseDate).getMonth() + 1 >= 10 ?new Date(list.courseDate).getMonth() + 1: `0${new Date(list.courseDate).getMonth() + 1}`}}月{{new Date(list.courseDate).getDate() >= 10 ?new Date(list.courseDate).getDate(): `0${new Date(list.courseDate).getDate()}`}}日</p>
            <p>{{new Date(list.courseDate).getHours()>= 10 ?new Date(list.courseDate).getHours() : `0${new Date(list.courseDate).getHours() }`}}:{{new Date(list.courseDate).getMinutes() >= 10 ? new Date(list.courseDate).getMinutes() : `0${new Date(list.courseDate).getMinutes() }`}}</p>
          </div>
          <div class="line-shu">

          </div>
          <div class="name">
            <p>{{list.courseName}} {{list.courseNameEN}}</p>
            <p v-if="list.type == 1"><img src="../Icon/yuan-icon.png" alt=""> 员工课</p>
            <p v-if="list.type == 3"><img src="../Icon/hu-icon.png" alt=""> 户外课</p>
            <p v-if="list.type == 2"><img src="../Icon/yuan-icon.png" alt=""> 团建课</p>
            <p v-if="list.type == 4"><img src="../Icon/gao-icon.png" alt=""> 高管课</p>
          </div>
        </div>
        <div class="line-clo">
        </div>
      </div>
    </div>
    <div class="toplist-none" v-if="topList.length == 0">
      <span>暂无数据</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getReservedCourse, getFinishedCourse } from 'api/dataList'
import { ERR_OK } from 'api/config'
import storage from 'good-storage'

export default {
  created() {
    this._getReservedCourse()
  },
  data() {
    return {
      topList: [],
      index: 1
    }
  },
  methods: {
    appointment() {
      this.index = 1
      this._getReservedCourse()
    },
    over() {
      this.index = 2
      this._getFinishedCourse()
    },
    _getReservedCourse() {
      console.log('我的课程')
      getReservedCourse(storage.get('__userID__', [])).then((res) => {
        if (res.code === ERR_OK) {
          console.log('已预约')
          console.log(res.data)
          this.topList = res.data
        }
      })
    },
    _getFinishedCourse() {
      getFinishedCourse(storage.get('__userID__', [])).then((res) => {
        if (res.code === ERR_OK) {
          console.log('已完成')
          console.log(res.data)
          this.topList = res.data
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.MyClass {
  width: 100%;
  height: 100%;
  top: 0;
  padding-bottom: 120px;
  padding-top: 134px;
  overflow-x: auto;
  .toplist-none {
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    span {
      font-size: 30px;
      // font-weight: bold;
    }
  }
  .heard {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  .ClassTitle {
    height: 134px;
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
    .Item {
      height: 112px;
      width: 100%;
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
