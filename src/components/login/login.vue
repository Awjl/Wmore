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
            <input type="text" placeholder="企业代码">
            <div class="line"></div>
            <input type="text" placeholder="真是姓名">
            <div class="line"></div>
            <input type="text" placeholder="企业邮箱">
            <div class="line"></div>
            <div class="iphone">
              <div class="iphone-line">
                <input type="text" placeholder="输入手机号" v-model="iphone">
                <div class="line"></div>
              </div>
              <div class="yanzhen" @click="yanzheng()">
                  发送验证
              </div>
            </div>
            <input type="text" placeholder="输入验证码">
            <div class="line"></div>
            <p>请确认您所在的企业已购买Wmore企业课程</p>
            <div class="loging-btn" @click="Curriculum()">
              确定
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {sendSMS} from 'api/dataList'
export default {
  data () {
    return {
      loginImg: '../static/images/login/login-bg.jpg',
      iphone: ''
    }
  },
  methods: {
    Curriculum () {
      this.$router.push({
        path: `/Curriculum`
      })
    },
    yanzheng() {
      console.log(this.iphone)
      if (this.iphone) {
        console.log('进入')
        sendSMS(this.iphone).then((res) => {
          console.log('发送验证码')
        })
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
  .login-csroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba(0,0,0,0.5);
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
        margin-top: 120px;
        .login-node {
          width: 399px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            font-size: 20px;
            color: #57c2cf;
            text-align: center;
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
            margin-bottom: 40px;
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
              width: 149px;
              height: 65px;
              line-height: 65px;
              text-align: center;
              border: 2px solid #ddd;
              margin-top: -20px;
              color: #fff;
              border-radius: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
