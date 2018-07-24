<template>
  <div class="information">
    <div class="scroll">
        <div class="heart">
        <div class="heart-img">
          <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="">
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
            <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="">
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
      <div class="informationItem" @click="educationClick()">
        <div>&nbsp;&nbsp;&nbsp;学历</div>
        <div class="informationItem-img">
          <span>{{myList.education}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="industryClick()">
        <div>&nbsp;&nbsp;&nbsp;行业</div>
        <div class="informationItem-img">
          <span>{{myList.industry}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="hobbyClick()">
        <div>&nbsp;&nbsp;&nbsp;爱好</div>
        <div class="informationItem-img">
          <span>{{myList.hobby}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="btn" @click="baocunBtn()">
        保存
      </div>
    </div>
    <div class="education-box" v-if="educationState">
        <div class="box">
          <div class="education-title">学历选择 <span @click="quxiao()">取消</span></div>
          <div class="education-iten">
            <div v-for="(item, index) in education" :key="index" @click="goueducation(item.name)">{{item.name}}</div>
          </div>
        </div>
    </div>
    <div class="industry" v-if="industry">
      <input type="text" placeholder="请输入行业名称" v-model="industryData"> <span @click="industryover()">确定</span>
    </div>
    <div  class="industry" v-if="hobby">
      <input type="text" placeholder="请输入爱好" v-model="hobbyData"> <span @click="hobbyover()">确定</span>
    </div>
    <Addres :addresStater = "addresStater"  v-on:Addres="Addres"></Addres>
    <div class="true-box" v-if="trueBox">
      <span>保存成功</span>
    </div>
  </div>
</template>

<script>
import Addres from 'base/addres/addres'
import { getUserById, editUser} from 'api/dataList'
import {ERR_OK} from 'api/config'
import storage from 'good-storage'


export default {
  created () {
    this._getUserById()
  },
  data () {
    return {
      helloUrl: './static/images/my/hello.png',
      datanowValue: [],
      cityData: [],
      myList: {},
      date: '',
      timerStater: false,
      addresStater: false,
      education: [{name: '小学'}, {name: '初中'}, {name: '中专'}, {name: '高中'}, {name: '专科'}, {name: '本科'}, {name: '硕士研究生'}, {name: '博士研究生'}, {name: '其他'}],
      educationState: false,
      hobby: false,
      industry: false,
      hobbyData: '',
      industryData: '',
      trueBox: false
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
    educationClick () {
      this.educationState = true
    },
    quxiao () {
      this.educationState = false
    },
    industryClick () {
      this.industry = true
    },
    hobbyClick () {
      this.hobby = true
    },
    industryover () {
      this.industry = false
      console.log(this.industryData)
      this.myList.industry = this.industryData
      console.log(this.myList)
    },
    hobbyover () {
      this.hobby = false
      this.myList.hobby = this.hobbyData
      console.log(this.myList)
    },
    goueducation (item) {
      console.log(item)
      this.educationState = false
      this.myList.education = item
      console.log(this.myList)
    },
    setAddres () {
      this.addresStater = true
    },
    Addres: function (Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false
      if (!Addres) {
        this.myList.city = ''
      } else {
        this.myList.city = `${Addres.Province}-${Addres.City}-${Addres.District}`
      }
      // this.myList = childValue
    },
    baocunBtn (){
      editUser(this.myList).then((res) => {
        if (res.code === ERR_OK) {
          this.trueBox = true
          var self = this
          setTimeout(function() {
            self.trueBox = false
          },1500)
        }
      })
    },
    _getUserById () {
      getUserById(storage.get('__userID__', [])).then((res) => {
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
  .education-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
    .box{
      width: 100%;
      height: 50vh;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #fff;
      .education-title{
        width: 100;
        height: 80px;
        line-height: 80px;
        text-align: center;
        position: relative;
        border-bottom: 2px solid #ddd;
        span{
          position: absolute;
          right:30px;
          padding: 0 20px;
        }
      }
      .education-iten{
        margin-top: 30px;
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        padding: 0 5%;
        div{
          width: 45%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 10px;
          border:2px solid #ddd;
          margin-bottom: 30px;
        }
      }
    }
  }
  .industry{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
     display: block;
     height: 60px;
     line-height: 60px;
     text-align: center;
     width: 100px;
     color: #fff;
     background: #000;
     border-radius: 10px;
     margin-left: 20px;
    }
    input{
      width: 500px;
      height: 60px;
      padding: 0 20px;
      border-radius: 10px;
    }
  }
  .true-box{
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    position: fixed;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba($color: #000000, $alpha: 0.7);
    span{
      color: #fff;
    }
  }
}
</style>
