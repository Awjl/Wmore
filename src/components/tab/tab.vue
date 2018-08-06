<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <div @click="homeactive()">
        <router-link tag="div" class="tab-item" to="/Home">
          <img src="./class-icon.png" alt="">
          <span class="tab-link" :class="{ active: home }">课程</span>
        </router-link>
      </div>
      <div class="line"></div>
      <div @click="myactive()">
        <router-link tag="div" class="tab-item" to="/My">
          <img src="./my-icon.png" alt="">
          <span class="tab-link" :class="{ active: my }">个人中心</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      home: true,
      my: false
    }
  },
  methods: {
    homeactive() {
      this.home = true,
        this.my = false
    },
    myactive() {
      this.home = false,
        this.my = true
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
  div {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tab-item {
      width: 50%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .tab-link {
        color: #fff;
        font-size: 22px;
        padding: 10px 0;
      }
      .active {
        border-bottom: 2px solid #fff;
      }
      img {
        width: 36px;
        height: 31px;
        margin-right: 26px;
      }
    }
  }
}
</style>
