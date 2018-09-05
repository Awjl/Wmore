<template>
  <div class="Login" :style="{backgroundImage: 'url(' + loginImg + ')' }">
    <div class="login-csroll">
      <div class="login-list">
        <div class="login-text">
          <p>如果您所在的企业已购买Wmore企业课程</p>
          <p>可直接使用手机号码验证登录</p>
          <p>系统将自动识别您的身份</p>
          <p class="langey-en">Be Healthier Now.</p>
        </div>
        <div class="login-inp">
          <div class="login-node">
            <input type="text" placeholder="企业代码" v-model="userData.code">
            <div class="line"></div>
            <div class="required">{{codeCenter}} </div>
            <input type="text" placeholder="真实姓名" v-model="userData.name">
            <div class="line"></div>
            <div class="required">{{nameCenter}}</div>
            <input type="text" placeholder="企业邮箱" v-model="userData.email">
            <div class="line"></div>
            <div class="required">{{emailCenter}}</div>
            <div class="iphone">
              <div class="iphone-line">
                <input type="text" placeholder="输入手机号" v-model="userData.mobile">
                <div class="line"></div>
              </div>
              <div class="yanzhen" @click="yanzheng()">
                <span> {{content}}</span>
              </div>
            </div>
            <div class="required">{{mobileCenter}}</div>
            <input type="text" placeholder="输入验证码" v-model="userData.verCode">
            <div class="line"></div>
            <div class="required">{{verCodeCenter}}</div>
            <p>请确认您所在的企业已购买Wmore企业课程</p>
            <p class="disclaimer">点击下面的确定按钮，即代表您同意<br>《<span class="disclaimer_btn" @click="todisclaimer">Wmore运动风险免责协议</span>》</p>
            
            <div class="loging-btn" @click="Curriculum()">
              确定
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box" v-if="show">
      <span>{{boxName}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { sendSMS, getmatchUser } from 'api/dataList'
import { ERR_OK, vxconfig} from 'api/config'
import storage from 'good-storage'
export default {
  data() {
    return {
      loginImg: '../static/images/login/login-bg.jpg',
      iphone: '',
      userData: {
        code: '',
        name: '',
        mobile: '',
        email: '',
        verCode: '',
        key: ''
      },
      show: false,
      boxName: '匹配中',
      timer: 0,
      content: '发送验证',
      totalTime: 60,
      canClick: true,
      codeCenter: '',
      nameCenter: '',
      mobileCenter: '',
      emailCenter: '',
      verCodeCenter: '',
    }
  },
  created() {
    this._getParam()
  },
  methods: {
     _getParam() {
      vxconfig(window.location.href.split('#')[0])
    },
    todisclaimer() {
      this.$router.push({
        path: `/Disclaimer`
      })
    },
    Curriculum() {
      this.userData.key = storage.get('_key_', [])
      if (!this.userData.code) {
        this.codeCenter = '请输入企业代码'
      } else {
        this.codeCenter = ''
      }
      if (!this.userData.name) {
        this.nameCenter = '请输入姓名'
      } else {
        this.nameCenter = ''
      }
      if (!this.userData.mobile) {
        this.mobileCenter = '请输入手机号'
      } else {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.userData.mobile)) {
          this.mobileCenter = '请输入正确的手机号'
        } else {
          this.mobileCenter = ''
        }
      }
      if (!this.userData.email) {
        this.emailCenter = '请输入邮箱号'
      }
      else {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (!reg.test(this.userData.email)) {
          this.emailCenter = '请输入正确邮箱号'
        } else {
          this.mobileCenter = ''
        }
      }
      if (!this.userData.verCode) {
        this.verCodeCenter = '请输入验证码'
      } else {
        this.verCodeCenter = ''
      }
      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.userData.code && this.userData.name && this.userData.mobile && this.userData.email && reg.test(this.userData.email) && this.userData.verCode && myreg.test(this.userData.mobile)) {
        this.show = true
        getmatchUser(this.userData).then((res) => {
          console.log(res)
          if (res.code === -1) {
            this.boxName = '信息不符'
            setTimeout(() => {
              this.show = false
            }, 1500);
          }
          if (res.code === ERR_OK) {
            storage.set('__userID__', res.data.userId)
            this.show = false
            this.$router.push({
              path: `/Curriculum`
            })
          }
          if (res.code === 500110) {
            this.boxName = '无登录权限'
            setTimeout(() => {
              this.show = false
            }, 1500);
          }
        })
      }
    },
    yanzheng() {
      if (this.userData.mobile) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        // alert(myreg.test(this.userData.mobile))
        // return
        // this.userData.mobile.test(str)
        if (!myreg.test(this.userData.mobile)) {
          return this.mobileCenter = '请输入正确的手机号'
        } else {
          this.mobileCenter = ''
        }
        console.log('12312')
        if (!this.canClick) return  //改动的是这两行代码
        this.canClick = false
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送'
            this.totalTime = 10
            this.canClick = true  //这里重新开启
          }
        }, 1000)
        console.log('进入')
        sendSMS(this.userData.mobile).then((res) => {
          console.log('发送验证码')
          this.timer = 60
          var self = this
          setInterval(function () {
            self.timer = self.timer - 1;
          }, 1000)
        })
      } else {
        this.mobileCenter = '请输入手机号'
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.Login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  background-size: 100%;
  .box {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999999;
    span {
      display: block;
      width: 300px;
      height: 300px;
      text-align: center;
      line-height: 300px;
      padding: 10px;
      background: rgba($color: #000000, $alpha: 0.5);
      color: #fff;
      font-size: 30px;
    }
  }
  .login-csroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);
    .login-list {
      width: 100vw;
      .login-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 59px;
        box-sizing: border-box;
        p {
          color: #fff;
          font-size: 26px;
          height: 45px;
          line-height: 45px;
        }
        .langey-en {
          margin-top: 25px;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .login-inp {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        .login-node {
          width: 399px;
          p {
            font-size: 20px;
            color: #57c2cf;
            text-align: center;
            &.disclaimer {
              color: #57c2cf;
              margin:10px 0 50px;
              line-height: 30px;
              span{
                color: #fff;
                text-decoration: underline;
              }
            }
          }
          .loging-btn {
            width: 166px;
            height: 71px;
            line-height: 71px;
            text-align: center;
            background: #000;
            color: #fff;
            border-radius: 40px;
            margin-top: 42px;
            margin-bottom: 140px;
            margin: 20px auto 0;
          }
          .required {
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: #fff;
            font-size: 16px;
          }
          .line {
            width: 100%;
            height: 2px;
            background: -webkit-linear-gradient(
              left,
              #81d1db,
              #c6cbcc,
              #85d2db
            );
            background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
            background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
            background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
            margin-top: 10px;
          }
          input {
            width: 100%;
            height: 40px;
            background: initial;
            outline: none;
            color: #fff;
            font-size: 26px;
          }
          input::-webkit-input-placeholder {
            color: #fff;
            font-size: 26px;
          }
          .iphone {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .iphone-line {
              width: 200px;
            }
            .yanzhen {
              width: 160px;
              height: 55px;
              line-height: 60px;
              text-align: center;
              border: 2px solid #ddd;
              margin-top: -5px;
              color: #fff;
              border-radius: 30px;
              span {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
