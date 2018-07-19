<template>
  <div class="information">
    <div class="scroll">
        <div class="heart">
        <div class="heart-img">
          <img :src="heartImg" alt="">
        </div>
        <div class="heart-name">
          <div class="myHello">
            <img :src="helloUrl" alt="">
            <div class="myName">
              {{ myList.nickname }}
            </div>
            <div class="myId">
              ID：{{myList.id}}
            </div>
          </div>
          <div class="heart-tou">
            <img :src="heartImg" alt="">
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 姓名</div>
        <div class="informationItem-img">
          <span>{{myList.name}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 手机</div>
        <div class="informationItem-img">
          <span>{{myList.mobile}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 邮箱</div>
        <div class="informationItem-img">
          <span>{{myList.email}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 性别</div>
        <div class="informationItem-img">
          <span v-if="myList.sex == 1">男</span>
          <span v-if="myList.sex == 2">女</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;生日</div>
        <div class="informationItem-img" @click="setDate()">
          <span v-if="myList.birthday && timerStater == false">{{new Date(myList.birthday).getFullYear()}} / {{new Date(myList.birthday).getMonth() + 1}} / {{new Date(myList.birthday).getDate()}}</span>
          <span v-else>{{ date }}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="setAddres()">
        <div>&nbsp;&nbsp;&nbsp;城市</div>
        <div class="informationItem-img">
          <span>{{myList.city}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;学历</div>
        <div class="informationItem-img">
          <span>{{myList.education}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;行业</div>
        <div class="informationItem-img">
          <span>{{myList.industry}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;爱好</div>
        <div class="informationItem-img">
          <span>{{myList.hobby}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="btn">
        保存
      </div>
    </div>
    <Addres :addresStater = "addresStater"  v-on:Addres="Addres"></Addres>
  </div>
</template>

<script>
import Addres from 'base/addres/addres'
import { getUserById } from 'api/dataList'
import {ERR_OK} from 'api/config'

export default {
  created () {
    this._getUserById()
  },
  data () {
    return {
      heartImg: './static/images/my/tou.jpg',
      helloUrl: './static/images/my/hello.png',
      datanowValue: [],
      cityData: [],
      myList: {},
      date: '',
      timerStater: false,
      addresStater: false
    }
  },
  methods: {
    setDate () {
      this.addresStater = false
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.date = date
          this.myList.birthday = this.date
          console.log(this.myList)
        }
      })
    },
    setAddres () {
      this.addresStater = true
    },
    Addres: function (Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false
      console.log(Addres)
      if (!Addres){
        console.log('进入')
        this.myList.city = ''
      } else {
        this.myList.city = `${Addres.Province}-${Addres.City}-${Addres.District}`
      }
      console.log(this.myList.city)
      // this.myList = childValue
    },
    _getUserById () {
      getUserById('8').then((res) => {
        if (res.code === ERR_OK) {
          console.log('个人信息')
          console.log(res)
          this.myList = Object.assign({}, this.myList, res.data)
          console.log(this.myList)
        }
      })
    }
  },
  components: {
    Addres
  }
}
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
.information {
  .scroll {
    width: 100%;
    height: 100%;
    padding-bottom: 140px;
    box-sizing: border-box;
    overflow: hidden;
    .line {
      width: 100%;
      height: 2px;
      background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
      background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
      background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
      background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
    }
    .btn{
      width: 50%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #000;
      color: #fff;
      margin: 60px auto 0;
      border-radius: 40px;
    }
    .heart {
      width: 100%;
      height: 200px;
      position: relative;
      .heart-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        img {
          width: 100%;
          margin-top: -33.33%;
          -webkit-filter: blur(20px);
          filter: blur(20px);
        }
      }
      .heart-name {
        width: 100%;
        height: 100%;
        background: rgba(000, 000, 000, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 63px;
        box-sizing: border-box;
        .myHello {
          img {
            width: 168px;
            height: 41px;
          }
          .myName {
            font-size: 40px;
            margin: 10px 0;
            color: #fff;
          }
          .myId {
            font-size: 20px;
            color: #fff;
            margin-top: 10px;
            letter-spacing: 2px;
          }
        }
        .heart-tou {
          width: 124px;
          height: 124px;
          right: 62px;
          overflow: hidden;
          border-radius: 62px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .heart-title {
          display: flex;
          justify-content: center;
          img {
            width: 25px;
            height: 31px;
            margin: 0 31px;
          }
          span {
            font-size: 30px;
            color: #fff;
          }
        }
      }
    }
    .informationItem {
      width: 100%;
      height: 93px;
      padding: 0 57px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      div {
        font-weight: bold;
      }
      .informationItem-img {
        display: flex;
        align-items: center;
        span {
          font-weight: bold;
        }
        img {
          margin-left: 20px;
          width: 11px;
          height: 15px;
        }
      }
    }
  }
}
</style>
