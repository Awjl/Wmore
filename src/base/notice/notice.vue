<template>
  <div class="notice">
    <img src="./yi-icon.png" alt="">
    <span>通知标题</span>
    <span>时间</span>
  </div>
</template>

<script>
import { getnoticeByDay } from 'api/dataList'
import {ERR_OK} from 'api/config'
export default {
  created () {
    this._getnoticeByDay()
  },
  data () {
    return {

    }
  },
  methods: {
    _getnoticeByDay () {
      getnoticeByDay('8').then((res) => {
        if (res.code === ERR_OK) {
          console.log('顶部通知')
          console.log(res)
        }
      })
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  img {
    width: 56px;
    height: 62px;
  }
}
</style>
