<template>
  <div id="app">
    <Notice></Notice>
    <!-- <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title">
      <!-- 这里是不被缓存的视图组件 -->
    </router-view>
    <!-- <button @click="btn()">获取</button> -->
    <comment></comment>
  </div>
</template>

<script>
import Comment from 'components/comment/comment'
import Notice from 'base/notice/notice'
import storage from 'good-storage'

import {getWechat} from 'api/dataList'
export default {
  created() {
    this._getWechat()
  },
  methods: {
    // saveSearch(id) {
    //   // 设置USERid
    //   console.log(id)
    //   storage.set('__userID__',id)
    // },
    // btn () {
    //   console.log('设置')
    //   var arr = storage.get('__userID__',[])
    //   console.log(arr)
    // }
     _getWechat () {
       console.log('进入微信借口')
      getWechat().then((res) => {
        if (res.code === ERR_OK) {

         storage.set('__userID__', res.data)
        }
      })
    },
  },
  components: {
    Comment,
    Notice
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
