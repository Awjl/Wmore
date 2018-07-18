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
              Summer
            </div>
            <div class="myId">
              ID：1234567
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
          <span>张三</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 手机</div>
        <div class="informationItem-img">
          <span>13200000000</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 邮箱</div>
        <div class="informationItem-img">
          <span>1376656@qq.com</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 性别</div>
        <div class="informationItem-img">
          <span>男</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;生日</div>
        <div class="informationItem-img">
          <span>1994/05/12</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="handlePlaylist()">
        <div>&nbsp;&nbsp;&nbsp;城市</div>
        <div class="informationItem-img">
          <span>上海</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;学历</div>
        <div class="informationItem-img">
          <span>本科</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;行业</div>
        <div class="informationItem-img">
          <span>软件</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;爱好</div>
        <div class="informationItem-img">
          <span>打篮球</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heartImg: './static/images/my/tou.jpg',
      helloUrl: './static/images/my/hello.png',
      datanowValue: [],
      cityData: []
    }
  },
  methods: {
    handlePlaylist () {
      new Picker({
        'title': '请选择', // 标题(可选)
        'defaultValue': this.datanowValue, // 默认值-多个以空格分开（可选）
        'data': this.cityData, // 数据(必传)
        'keys': {
          'id': 'Code',
          'value': 'Name',
          'childData': 'level' // 最多3级联动
        }, // 数组内的键名称(必传，id、text、data)
        'callBack': function (val) {
          // 回调函数（val为选择的值）
          this.datanowValue = val
        }
      })
    }
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
