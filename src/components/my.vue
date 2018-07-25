<template>
  <div class="myBg">
    <div class="myBg-bg">
      <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="">
    </div>
    <div class="my">
      <div class="myHeard">
        <div class="myHello">
          <img :src="helloUrl" alt="">
          <div class="myName">
            {{myList.name}}
          </div>
          <div class="myId">
            ID：{{myList.id}}
          </div>
        </div>
        <div class="myTou">
          <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="">
        </div>
      </div>
      <div class="myList">
        <ul>
          <li @click="MyClass()">
            <img src="./Icon/class-icon.png" alt="">
            <span>我的课程</span>
          </li>
          <li @click="MyIntegral()">
            <img src="./Icon/integral-icon.png" alt="">
            <span>我的积分</span>
          </li>
          <li @click="MyNotice()">
            <img src="./Icon/notice-icon.png" alt="">
            <span>我的通知</span>
          </li>
          <li @click="MyInformation()">
            <img src="./Icon/information-icon.png" alt="">
            <span>个人信息</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserById } from 'api/dataList'
import { ERR_OK } from 'api/config'
import storage from 'good-storage'

export default {
  created() {
    this._getUserById()
  },
  data() {
    return {
      helloUrl: './static/images/my/hello.png',
      myList: {}
    }
  },
  methods: {
    MyClass() {
      this.$router.push({
        path: `/MyClass`
      })
    },
    MyIntegral() {
      this.$router.push({
        path: `/MyIntegral`
      })
    },
    MyNotice() {
      this.$router.push({
        path: `/MyNotice`
      })
    },
    MyInformation() {
      this.$router.push({
        path: `/MyInformation`
      })
    },
    _getUserById() {
      console.log("我的个人中心"+storage.get('__userID__', []))
      if (storage.get('__userID__', []) != '0') {
        getUserById(storage.get('__userID__', [])).then((res) => {
          if (res.code === ERR_OK) {
            console.log('个人信息')
            console.log(res)
            this.myList = res.data
          }
        })
      } else {
        this.$router.push({
          path: `/Login`
        })
      }
    }
  }
}
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
.myBg {
  width: 100%;
  height: 100vh;
  position: relative;
  .myBg-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      -webkit-filter: blur(20px);
      filter: blur(20px);
    }
  }
}
.my {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  .myHeard {
    width: 580px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 110px;
    .myHello {
      img {
        width: 268px;
        height: 62px;
      }
      .myName {
        font-size: 70px;
        color: #fff;
      }
      .myId {
        font-size: 30px;
        color: #fff;
        margin-top: 10px;
        letter-spacing: 4px;
      }
    }
    .myTou {
      width: 187px;
      height: 187px;
      border-radius: 93px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .myList {
    margin-top: 143px;
    li {
      width: 243px;
      height: 88px;
      background: #000;
      margin-bottom: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 44px;
      span {
        color: #fff;
      }
      img {
        width: 29px;
        height: 29px;
        margin-right: 15px;
      }
    }
  }
}
</style>
