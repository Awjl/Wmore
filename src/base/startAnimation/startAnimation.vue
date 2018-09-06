<template>
  <div class="animation" v-if="show">
    <div class="bgone" ref="bgone">
      <img src="./bgOne.jpg" alt="">
    </div>
    <div class="bgtwo" ref="bgtwo">
      <img src="./bgTwo.jpg" alt="">
    </div>
    <div class="logobg">
      <img src="./logo.gif" alt="">
    </div>
    <div class="trueClick" @click="clickGO()">
      CLICK HERE
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      stateShow: false,
      count: 0,
      imglength: 0
    };
  },
  mounted() {
    // // var tath = this
    var _this = this
    let imgs = document.querySelectorAll('img')
    this.imglength = imgs.length
    Array.from(imgs).forEach((item) => {
      let img = new Image()
      img.onload = () => {
        this.count++
      }
      img.src = item.getAttribute('src')
    })
  },
  methods: {
    clickGO() {
      this.show = false;
    }
  },
  watch: {
    stateShow: function () {
      var self = this;
      setTimeout(function () {
        self.show = false;
      }, 3000);
    },
    count(val, oldval) {
      if (val == this.imglength) {
        this.$refs.bgone.style.right = 419 + "px";
        this.$refs.bgtwo.style.right = 0 + "px";
        var self = this;
        setTimeout(function () {
          self.$refs.bgone.style.right = 0;
          setTimeout(function () {
            self.$refs.bgtwo.style.opacity = 1;
            self.$refs.bgtwo.style.right = 419 + "px";
            self.stateShow = true;
          }, 2000);
        }, 0);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.animation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
  .bgone {
    position: absolute;
    top: 0;
    right: 900px;
    width: 100%;
    height: 100%;
    transition: all 3s;
    z-index: 10;
    img {
      height: 100%;
    }
  }
  .bgtwo {
    position: absolute;
    top: 0;
    opacity: 0;
    // right: 900px;
    width: 100%;
    height: 100%;
    transition: all 3s;
    z-index: 11;
    img {
      height: 100%;
    }
  }
  .logobg {
    position: absolute;
    top: 30vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 350px;
    z-index: 12;
    img {
      width: 100%;
    }
  }
  .trueClick {
    position: absolute;
    bottom: 30vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #000;
    color: #fff;
    z-index: 12;
  }
}
</style>
