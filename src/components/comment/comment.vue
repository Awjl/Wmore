<template>
  <div class="comment" ref="comment">
    <div class="comment-list">
      <div class="comment-title">
          评价
      </div>
      <div class="comment-item">
         <div class="comment-text">您的评价会让我们做的更好</div>
         <div class="comment-name">瑜伽中级</div>
         <div class="comment-name">YOGA-INTERMEDIATE</div>
         <div class="comment-timer">7月3日14:00</div>
         <div class="comment-listItem">
           <div class="comment-iconName">教练专业性</div>
           <div class="comment-icon">
              <div @click="ListItemOne(1)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemOne >= 1">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemOne(2)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemOne >= 2">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemOne(3)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemOne >= 3">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemOne(4)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemOne >= 4">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemOne(5)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemOne >= 5">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
           </div>
         </div>
         <div class="comment-listItem">
           <div class="comment-iconName">课程功能性</div>
           <div class="comment-icon">
              <div @click="ListItemTwo(1)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemTwo >= 1">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
               <div @click="ListItemTwo(2)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemTwo >= 2">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
               <div @click="ListItemTwo(3)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemTwo >= 3">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
               <div @click="ListItemTwo(4)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemTwo >= 4">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
               <div @click="ListItemTwo(5)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemTwo >= 5">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
           </div>
         </div>
         <div class="comment-listItem">
           <div class="comment-iconName">课程互动性</div>
           <div class="comment-icon">
              <div @click="ListItemThree(1)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemThree >= 1">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemThree(2)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemThree >= 2">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemThree(3)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemThree >= 3">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemThree(4)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemThree >= 4">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemThree(5)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemThree >= 5">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
           </div>
         </div>
         <div class="comment-listItem">
           <div class="comment-iconName">预约流畅度</div>
           <div class="comment-icon">
              <div @click="ListItemFour(1)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemFour >= 1">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemFour(2)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemFour >= 2">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemFour(3)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemFour >= 3">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemFour(4)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemFour >= 4">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
              <div @click="ListItemFour(5)">
                <img src="../Icon/commentyi-icon.png" alt="" v-if="ItemFour >= 5">
                <img src="../Icon/commentwei-icon.png" alt="" v-else>
              </div>
           </div>
         </div>
         <div class="comment-btn" @click="btn()">
           确认提交
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.stateList()
  },
  data () {
    return {
      ItemOne: 3,
      ItemTwo: 4,
      ItemThree: 2,
      ItemFour: 5,
      states: false
    }
  },
  methods: {
    btn () {
      this.states = false
      console.log(this.states)
    },
    ListItemOne (item) {
      this.ItemOne = item
    },
    ListItemTwo (item) {
      this.ItemTwo = item
    },
    ListItemThree (item) {
      this.ItemThree = item
    },
    ListItemFour (item) {
      this.ItemFour = item
    },
    stateList () {
      if (this.states) {
        this.$refs.comment.style.bottom = 0
        this.$refs.comment.style.display = 'block'
      } else {
        this.$refs.comment.style.bottom = -100 + '%'
        this.$refs.comment.style.display = 'none'
      }
    }
  },
  watch: {
    states: function () {
      this.stateList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.comment {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom:0;
  left: 0;
  z-index: 9999;
  transition: bottom 2s;
  display: block;
  .comment-list {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 743px;
    background: rgba(255, 255, 255, 0.9);
    .comment-title {
      width: 100%;
      height: 87px;
      line-height: 87px;
      text-align: center;
      color: #fff;
      font-size: 30px;
      background: #000;
    }
    .comment-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 656px;
      .comment-text {
        margin: 52px 0;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 5px;
      }
      .comment-name {
        font-size: 30px;
        font-weight: bold;
        height: 40px;
      }
      .comment-timer {
        font-size: 24px;
        font-weight: bold;
        height: 40px;
      }
      .comment-listItem {
        display: flex;
        align-items: center;
        .comment-iconName {
          margin-right: 20px;
          font-size: 28px;
          font-weight: bold;
          height: 50px;
          line-height: 50px;
          letter-spacing: 4px;
        }
        .comment-icon {
          display: flex;
          align-items: center;
          img {
            width: 21px;
            height: 25px;
            margin-right: 20px;
          }
        }
      }
      .comment-btn {
        width: 166px;
        height: 72px;
        line-height: 72px;
        text-align: center;
        background: #000;
        color: #fff;
        border-radius: 40px;
        margin-top: 48px;
      }
    }
  }
}
</style>
