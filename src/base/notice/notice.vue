<template>
  <div class="notice" v-show="showstate">
    <div class="notice-box" v-for="(list, index) in data" :key="index" @click="godie()">
      <img src="./yi-icon.png" alt="">
      <span>{{list.title}}</span>
      <span>{{list.noticeDate}}</span>
    </div>
  </div>
</template>

<script>
import { getnoticeByDay } from 'api/dataList'
import { ERR_OK } from 'api/config'
import storage from 'good-storage'

export default {
  created() {
    this._getnoticeByDay()
  },
  data() {
    return {
      data: [],
      showstate: false
    }
  },
  methods: {
    _getnoticeByDay() {
      if (storage.get('__userID__', []) != '0') {
        getnoticeByDay(storage.get('__userID__', [])).then((res) => {
          if (res.code === ERR_OK) {
            this.data = res.data
            if (this.data.length > 0) {
              this.showstate = true
            }
          }
        })
      }
    },
    godie() {
      this.showstate = false
      // clearTimeout(timer)
      this.$router.push({
        path: `/MyNotice`
      })
    }
  },
  watch: {
    showstate: function () {
      console.log('12312')
      var self = this
      setTimeout(function () {
        self.showstate = false
      }, 4000)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.notice {
  position: fixed;
  width: 90vw;
  height: 100px;
  background: #fff;
  z-index: 99;
  left: 0;
  right: 0;
  top: 40px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .notice-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 56px;
    height: 62px;
  }
}
</style>
