<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/Home">
        <img src="./class-icon.png" alt=""> <span class="tab-link">课程</span>
      </router-link>
      <div class="line"></div>
      <router-link tag="div" class="tab-item" to="/My">
        <img src="./my-icon.png" alt=""><span class="tab-link">个人中心</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.tab {
  width: 100%;
  height: 100px;
  background: #000000;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  .line {
    height: 43px;
    width: 2px;
    background: #fff;
  }
  .tab-item {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tab-link {
      color: #fff;
      font-size: 22px;
    }
    img {
      width: 36px;
      height: 31px;
      margin-right: 26px;
    }
  }
}
</style>
