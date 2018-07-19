<template>
  <div id="app">
    <Notice></Notice>
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <comment></comment>
  </div>
</template>

<script>
import Comment from 'components/comment/comment'
import Notice from 'base/notice/notice'
export default {
  components: {
    Comment,
    Notice
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
