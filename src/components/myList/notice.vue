<template>
  <div class="MyNotice">
    <div class="popup" v-if="stateShow">
      <div class="popup-box">
        <div class="popup-title">{{dataContent.title}}</div>
        <div class="popup-line"></div>
        <div class="popup-content">{{dataContent.content}}</div>
        <div class="popup-timer">{{new Date(dataContent.createDate).getMonth() + 1}}月{{ new Date(dataContent.createDate).getDate() > 10 ? new Date(dataContent.createDate).getDate(): '0'+new Date(dataContent.createDate).getDate()}}日</div>
      </div>
      <div class="popup-btn" @click="gohide()">
        确定
      </div>
    </div>
    <div class="heard">
      <div class="ClassTitle">
        <div class="Title" :class="{TitleActive:index==1}" @click="appointment()">未读</div>
        <div class="line"></div>
        <div class="Title" :class="{TitleActive:index==2}" @click="over()">已读</div>
      </div>
      <div class="line-clo"></div>
    </div>
    <div class="toplist">
      <!-- <li v-for="(list, index) in topList" :key="index">{{list}}</li> -->
      <div class="list" v-for="(list, index) in topList" :key="index" @click="goReatNotice(list.id, index)">
        <div class="Item">
          <div class="Item-img" v-if="list.isRead == 1">
            <img src="../Icon/wei-icon.png" alt="">
          </div>
          <div class="Item-img" v-else>
            <img src="../Icon/yi-icon.png" alt="">
          </div>
          <div class="name">
            <div>
              <span>{{list.title}}</span>
              <span>{{new Date(list.createDate).getMonth() + 1}}月{{ new Date(list.createDate).getDate() > 10 ? new Date(list.createDate).getDate(): '0'+new Date(list.createDate).getDate()}}日</span>
            </div>
            <p>{{list.content}}</p>
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
import { getUnreadNotice, getReadNotice, toReadNotice } from 'api/dataList'
import { ERR_OK } from 'api/config'
import storage from 'good-storage'

export default {
  created() {
    this._getUnreadNotice()
  },
  data() {
    return {
      topList: [],
      index: 1,
      dataContent: [],
      stateShow: false,
      overState: false
    }
  },
  methods: {
    appointment() {
      this.index = 1
      this.overState = false
      this._getUnreadNotice()
    },
    over() {
      this.index = 2
      this.overState = true
      this._getReadNotice()
    },
    goReatNotice(id, index) {
      this.dataContent = []
      if (!this.overState) {
        this.topList.splice(index, 1)
      }
      this._toReadNotice(id)
      this.stateShow = true
    },
    gohide() {
      this.stateShow = false
    },
    _getUnreadNotice() {
      getUnreadNotice(storage.get('__userID__', [])).then((res) => {
        if (res.code === ERR_OK) {
          console.log('未读')
          console.log(res.data)
          this.topList = res.data
        }
      })
    },
    _getReadNotice() {
      getReadNotice(storage.get('__userID__', [])).then((res) => {
        if (res.code === ERR_OK) {
          console.log('已读')
          console.log(res.data)
          this.topList = res.data
        }
      })
    },
    _toReadNotice(item) {
      toReadNotice(item).then((res) => {
        if (res.code === ERR_OK) {
          console.log('查看通知')
          console.log(res.data)
          this.dataContent = res.data
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.MyNotice {
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
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(000, 000, 000, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    .popup-box {
      width: 80vw;
      height: 60vh;
      background: #fff;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .popup-title {
        width: 90%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        margin: 20px 0;
        font-weight: bold;
      }
      .popup-line {
        width: 100%;
        height: 2px;
        background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
        background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
        background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
        background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
      }
      .popup-timer {
        width: 90%;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        text-align: right;
        font-size: 18px;
      }
      .popup-content {
        width: 90%;
        margin: 40px auto;
        word-wrap: break-word;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 2px;
        text-indent: 2em;
      }
    }
    .popup-btn {
      margin-top: 80px;
      width: 80vw;
      text-align: center;
      padding: 30px 0;
      background: #000;
      color: #fff;
      border-radius: 40px;
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
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      .Item {
        height: 112px;
        width: 671px;
        display: flex;
        align-items: center;
        .Item-img {
          img {
            width: 60px;
            height: 60px;
            margin-right: 27px;
          }
        }
        .line-shu {
          height: 75px;
          width: 2px;
          background: #89d4dd;
          margin-right: 23px;
        }
        .name {
          div {
            width: 590px;
            display: flex;
            justify-content: space-between;
            span {
              height: 45px;
              font-size: 26px;
              font-weight: bold;
              line-height: 45px;
            }
          }
          p {
            height: 45px;
            width: 590px;
            font-size: 22px;
            color: #c2c2c2;
            letter-spacing: 3px;
            line-height: 45px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
