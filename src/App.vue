<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <comment></comment>
  </div>
</template>

<script>
import Comment from 'components/comment/comment'
export default {
  components: {
    Comment
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
