<template>
  <div class="myIntegral">
    <div class="heart">
      <div class="heart-img">
        <img :src="`http://${dataList.pictureUrl }?x-oss-process=image/format,png`" alt="">
      </div>
      <div class="heart-name">
          <div class="heart-item">
            <div class="heart-title">
              <span>变野值</span>
              <img src="../Icon/integral-icon.png" alt="">
              <span>{{ dataList.points }}</span>
            </div>
            <div class="heart-tou">
              <img :src="`http://${dataList.pictureUrl }?x-oss-process=image/format,png`" alt="">
            </div>
          </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="myInformation">
        <div class="myInformationBtn" @click="goInformation()">
            <img src="../Icon/click-icon.png" alt="">点击完善资料提高变野值
        </div>
    </div>
   <div class="line"></div>
   <div class="Integral-title">
     提高你的变野值
   </div>
    <div class="line"></div>
    <div class="Integral-mover">
        <p>每日签到可变野5分</p>
        <p>评价课程可变野10分</p>
    </div>
    <div class="line"></div>
    <div class="Integral-title">
     变野福利
   </div>
   <div class="line"></div>
   <div class="IntegralMove">
     <p>COMING SOON</p>
   </div>
  </div>
</template>

<script>
import { getActionById } from 'api/dataList'
import { ERR_OK, vxconfig } from 'api/config'
import storage from 'good-storage'

export default {
  created () {
    this._getActionById()
    this._getParam()
  },
  data () {
    return {
      heartImg: './static/images/my/tou.jpg',
      dataList: {
        points: 0
      }
    }
  },
  methods: {
    goInformation () {
      this.$router.push({
        path: `/MyInformation`
      })
    },
    _getParam() {
      vxconfig(window.location.href.split('#')[0])
    },
    _getActionById () {
      getActionById(storage.get('__userID__', [])).then((res) => {
        if (res.code === ERR_OK) {
          this.topList = res.data
          this.dataList = Object.assign({}, this.dataList, res.data)
        }
      })
    }
  }
}
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
.myIntegral {
  height: 100%;
  padding-bottom: 140px;
  overflow: hidden;
  .line{
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #81d1db ,#c6cbcc, #85d2db);
    background: -o-linear-gradient(right,#81d1db ,#c6cbcc, #85d2db);
    background: -moz-linear-gradient(right,#81d1db ,#c6cbcc, #85d2db);
    background: linear-gradient(to right, #81d1db ,#c6cbcc, #85d2db);
  }
  .Integral-title{
    height: 85px;
    line-height: 85px;
    width: 100%;
    background: #cccccc;
    text-align: center;
    color: #fff;
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
    .heart-name{
      width: 100%;
      height: 100%;
      background: rgba(000, 000, 000, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      .heart-item{
        position: relative;
        width: 100%;
        height: 100%;
        align-items: center;
        .heart-tou{
          width: 124px;
          height: 124px;
          top: 0;
          bottom: 0;
          margin:  auto 0;
          position: absolute;
          right:62px;
          overflow: hidden;
          border-radius: 62px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .heart-title{
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 25px;
            height: 31px;
            margin: 0 31px;
          }
          span{
            font-size: 30px;
            color: #fff;
          }
        }
      }
    }
  }
  .myInformation{
    height: 259px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .myInformationBtn{
      width: 399px;
      height: 74px;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      img{
        width: 28px;
        height: 31px;
        margin-right: 10px;
      }
    }
  }
  .Integral-mover{
    height: 284px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      line-height: 45px;
      font-size: 26px;
      font-weight: bold;
    }
  }
  .IntegralMove{
     height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      line-height: 45px;
      font-size: 26px;
      font-weight: bold;
    }
  }
}
</style>
