<template>
  <div id="calendar">
    <!-- 星期 -->
    <ul class="weekdays">
      <li style="color:#57c2cf">日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <!-- 年份 月份 -->
    <div class="month">
      <div class="Optional">
        <img src="./Optional-icon.png" alt="">
        可选
      </div>
      <div class="full">
        <img src="./full-icon.png" alt="">
        满员
      </div>
      <ul>
        <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
        <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
        <li class="year-month">
          <span class="choose-year">{{ currentYear }}年</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
      </ul>
      <div class="already">
        <img src="./already-icon.png" alt="">
        已约
      </div>
      <div class="team">
        <img src="./teamOne-icon.png" alt="">
        团建
      </div>
    </div>
    <!-- 日期 -->
    <ul class="days">
      <!-- v-for循环 每一次循环用<li>标签创建一天 -->
      <li v-for="(dayobject, index) in days" style='height: 56px' :key='index' >
      <!--本月-->
      <!--如果不是本月  改变类名加灰色-->
        <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>
        <!--如果是本月  还需要判断是不是这一天-->
        <span v-else class="days-cla">
        <img src="./OptionalTwo-icon.png" alt="" v-show="dayobject.data">
        <img src="./fullTwo-icon.png" alt="" v-show="full == 2">
        <img src="./alreadyTwo-icon.png" alt="" v-show="already == 3">
        <img src="./teamTwo-icon.png" alt="" v-show="team == 4" style="top: 0;
            left:22px;
            width: 5px;
            height: 5px;">
        <!--今天  同年同月同日-->
          <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()"
          class="active">{{ dayobject.day.getDate() }}</span>

          <span v-else>{{ dayobject.day.getDate() }}</span>
        </span>
        <!--显示剩余多少数量-->
        <p>剩余剩余剩余
          <span style="color: red">{{dayobject.data}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCourse } from 'api/dataList'
import { ERR_OK } from 'api/config'
export default {
  data () {
    return {
      currentDay: 1, // 默认1号
      currentMonth: 1, // 默认一月
      currentYear: 1970, // 默认1970年
      currentWeek: 1, // 默认一周
      days: [], // 天数
      Optional: 1, // 可选
      full: 0, // 已满
      already: 0, // 已选
      team: 4, // 团建
      datas: []
    }
  },
  created () {
    // 在vue初始化时调用
    this.initData(null)
    this._getCourse()
  },
  methods: {
    _getCourse () {
      if (this.currentMonth < 10) {
        this.currentMonth = '0' + this.currentMonth
      }
      getCourse('8', `${this.currentYear}-${this.currentMonth}`).then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data)
          this.datas = res.data
          console.log(this.datas)
          for (let i = 0; i < this.days.length; i++) {
            // console.log(this.days[i].day)
            for (let j = 0; j < this.datas.length; j++) {
              if (this.days[i].day.getFullYear() === new Date(this.datas[j].courseDate).getFullYear() && this.days[i].day.getMonth() + 1 === new Date(this.datas[j].courseDate).getMonth() + 1 && this.days[i].day.getDate() === new Date(this.datas[j].courseDate).getDate()) {
                // this.days[i].data
                this.days[i].data = this.datas[j]
              }
            }
          }
        }
      })
      console.log(this.days)
    },
    initData (cur) {
      // let leftcount = 0 // 存放剩余数量
      let date
      let index = 0 // 控制显示预定的天数 ，比如下面设置只能预定三天的
      // this.initleftcount(); 每次初始化更新数量
      // 有两种方案  一种是每次翻页 ajax获取数据初始化   http请求过多会导致资源浪费
      // 一种是每次请求 ajax获取数据初始化    数据更新过慢会导致缺少实时性
      // 还可以setTimeout 定时请求更新数据  实现数据刷新（可能会更好）

      if (cur) {
        date = new Date(cur)
      } else {
        let now = new Date()
        let d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1))
        d.setDate(31)
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      }
      this.currentDay = date.getDate()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1
      // console.log(this.currentMonth)
      this.currentWeek = date.getDay() // 1...6,0
      if (this.currentWeek === 0) {
        this.currentWeek = 7
      }
      let str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      )
      this.days.length = 0
      // 今天是周日，放在第一行第7个位置，前面6个
      // 初始化本周
      for (let i = this.currentWeek; i >= 0; i--) {
        let d = new Date(str)
        d.setDate(d.getDate() - i)

        let dayobject = {}
        dayobject.day = d
        let now = new Date()
        if (
          d.getDate() === now.getDate() &&
          d.getMonth() === now.getMonth() &&
          d.getFullYear() === now.getFullYear()
        ) {
          dayobject.index = index++ // 从今天开始显示供预定的数量
        } else if (index !== 0 && index < 3) dayobject.index = index++ // 从今天开始3天内显示供预定的数量

        this.days.push(dayobject)
      }
      // 其他周
      for (let i = 1; i <= 41 - this.currentWeek; i++) {
        let d = new Date(str)
        d.setDate(d.getDate() + i)
        let dayobject = {}
        dayobject.day = d
        let now = new Date()
        if (
          d.getDate() === now.getDate() &&
          d.getMonth() === now.getMonth() &&
          d.getFullYear() === now.getFullYear()
        ) {
          dayobject.index = index++
        } else if (index !== 0 && index < 3) dayobject.index = index++
        this.days.push(dayobject)
      }
    },
    pickPre (year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(0)
      this.currentMonth = d.getMonth() + 1
      console.log(this.currentMonth)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    pickNext (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(42)
      this.currentMonth = d.getMonth() + 1
      console.log(this.currentMonth)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate (year, month, day) {
      let y = year
      let m = month
      if (m < 10) m = '0' + m
      let d = day
      if (d < 10) d = '0' + d
      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#calendar {
  width: 100%;
  overflow: hidden;
  .weekdays {
    // 星期样式
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    color: #000;
    justify-content: space-between;
    font-size: 24px;
    li {
      width: 14.2%;
      text-align: center;
    }
  }
  .month {
    width: 100%;
    padding: 20px 5%;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    box-sizing: border-box;
    div {
      color: #fff;
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .arrow {
        font-size: 30px;
        margin: 0 20px;
      }
      .year-month {
        margin-top: 7px;
      }
    }
  }
  .days {
    background: #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 20px;
    li {
      list-style-type: none;
      display: inline-block;
      width: 14.2%;
      font-size: 24px;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      .days-cla {
        display: block;
        text-align: center;
        position: relative;
        height: 41px;
        width: 41px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 41px;
          line-height: 41px;
          display: block;
        }
      }
      p {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        margin-top: 15px;
        font-size: 18px;
        overflow: hidden;
        text-align: center;
      }
      span.other-month {
        padding: 5px;
        color: gainsboro;
      }
    }
  }
}
</style>
