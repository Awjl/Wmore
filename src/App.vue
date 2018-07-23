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
    <comment></comment>
  </div>
</template>

<script>
import Comment from 'components/comment/comment'
import Notice from 'base/notice/notice'
// import {getWechat} from 'api/dataList'
export default {
  created() {
    // this._getWechat()
  },
  methods: {
    //  _getWechat () {
    //    console.log('进入微信借口')
    //   getWechat().then((res) => {
    //     if (res.code === ERR_OK) {
    //       console.log('小banner-内部')
    //       console.log(res.data)
    //       this.listImg = res.data
    //     }
    //   })
    // }
  },
  components: {
    Comment,
    Notice
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
