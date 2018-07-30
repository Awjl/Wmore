<template>
  <div class="information">
    <div class="scroll">
      <div class="heart">
        <div class="heart-img">
          <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="" v-if="!wxImg">
          <img :src="`${wxImg}`" alt="" v-else>
        </div>
        <div class="heart-name">
          <div class="myHello">
            <img :src="helloUrl" alt="">
            <div class="myName">
              {{ myList.nickname }}
            </div>
            <div class="myId">
              ID：{{myList.id}}
            </div>
          </div>
          <div class="heart-tou" @click="uplode()">
            <img :src="`http://${myList.pictureUrl}?x-oss-process=image/format,png`" alt="" v-if="!wxImg">
            <img :src="`${wxImg}`" alt="" v-else>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 姓名</div>
        <div class="informationItem-img">
          <span>{{myList.name}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 手机</div>
        <div class="informationItem-img">
          <span>{{myList.mobile}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>* 邮箱</div>
        <div class="informationItem-img">
          <span>{{myList.email}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="setSexList()">
        <div>* 性别</div>
        <div class="informationItem-img">
          <span v-if="myList.sex == 1">男</span>
          <span v-if="myList.sex == 2">女</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem">
        <div>&nbsp;&nbsp;&nbsp;生日</div>
        <div class="informationItem-img" @click="setDate()">
          <span v-if="myList.birthday && !date">{{new Date(myList.birthday).getFullYear()}}/{{new Date(myList.birthday).getMonth() + 1}}/{{new Date(myList.birthday).getDate()}}</span>
          <!-- <span v-if="myList.birthday"></span> -->
          <span v-else>{{ date.replace(new RegExp(/-/gm), "/") }}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="setAddres()">
        <div>&nbsp;&nbsp;&nbsp;城市</div>
        <div class="informationItem-img">
          <span>{{myList.city}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="educationClick()">
        <div>&nbsp;&nbsp;&nbsp;学历</div>
        <div class="informationItem-img">
          <span>{{myList.education}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="industryClick()">
        <div>&nbsp;&nbsp;&nbsp;行业</div>
        <div class="informationItem-img">
          <span>{{myList.industry}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="informationItem" @click="hobbyClick()">
        <div>&nbsp;&nbsp;&nbsp;爱好</div>
        <div class="informationItem-img">
          <span style="width:200px;height:30px;line-height: 30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;">{{myList.hobby}}</span>
          <img src="../Icon/right-icon.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <!-- <div class="btn" @click="baocunBtn()">
        保存
      </div> -->
    </div>
    <div class="education-box" v-if="educationState">
      <div class="box">
        <div class="education-title">学历选择
          <span @click="quxiao()">取消</span>
        </div>
        <div class="education-iten">
          <div v-for="(item, index) in education" :key="index" @click="goueducation(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="list-box" v-if="industry">
      <div class="item-box">
        <div class="item-title">行业选择
          <span @click="quxiaoindustry()">取消</span>
        </div>
        <div class="item-item">
          <div v-for="(item, index) in industryList" :key="index" @click="goindustry(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="hobby-box" v-if="hobby">
      <div class="hobbyItem-box">
        <div class="hobbyItem-title">
          <span @click="quxiaphobby()">取消</span>
          <span>爱好选择</span>
          <span @click="gohobby()">确定</span>
        </div>
        <p>已选</p>
        <div class="hobbyItem-one">
          <div v-for="(item, index) in hobbyListItem" :key="index" @click="hobbyItemOne(index)">{{item.name}}</div>
        </div>
        <p>未选</p>
        <div class="hobbyItem-one">
          <div v-for="(item, index) in hobbyList" :key="index" @click="hobbyItemTwo(index)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="education-box" v-if="setSex">
      <div class="box">
        <div class="education-title">性别修改
          <span @click="setSexquxiao()">取消</span>
        </div>
        <div class="education-iten">
          <div @click="setSexOver(1)">帅气的男生</div>
          <div @click="setSexOver(2)">漂亮的女生</div>
        </div>
      </div>
    </div>
    <Addres :addresStater="addresStater" v-on:Addres="Addres"></Addres>
    <div class="true-box" v-if="trueBox">
      <span>保存成功</span>
    </div>
  </div>
</template>

<script>
import Addres from "base/addres/addres";
import { getUserById, editUser, getParam, uploadHead } from "api/dataList";
import { ERR_OK } from "api/config";
import storage from "good-storage";

export default {
  created() {
    this._getUserById();
  },
  data() {
    return {
      helloUrl: "./static/images/my/hello.png",
      datanowValue: [],
      cityData: [],
      myList: {},
      date: "",
      addresStater: false,
      education: [
        { name: "小学" },
        { name: "初中" },
        { name: "中专" },
        { name: "高中" },
        { name: "专科" },
        { name: "本科" },
        { name: "硕士研究生" },
        { name: "博士研究生" },
        { name: "其他" }
      ],
      educationState: false,
      hobby: false,
      industry: false,
      hobbyData: "",
      industryData: "",
      trueBox: false,
      setSex: false,
      industryList: [
        { name: "金融" },
        { name: "会计" },
        { name: "能源" },
        { name: "餐饮" },
        { name: "酒店" },
        { name: "通讯" },
        { name: "房地产" },
        { name: "艺术" },
        { name: "设计" },
        { name: "娱乐" },
        { name: "广告" },
        { name: "媒体" },
        { name: "出版" },
        { name: "航天" },
        { name: "建筑" },
        { name: "教育" },
        { name: "互联网" },
        { name: "美容" },
        { name: "医疗" },
        { name: "健康" },
        { name: "零售" },
        { name: "服装" },
        { name: "农业" },
        { name: "制造业" },
        { name: "旅游" },
        { name: "司法" },
        { name: "科研" },
        { name: "物流" },
        { name: "政府机关" },
        { name: "咨询" }
      ],
      hobbyList: [
        { name: "篮球" },
        { name: "足球" },
        { name: "排球" },
        { name: "羽毛球" },
        { name: "乒乓球" },
        { name: "跑步" },
        { name: "爬山" },
        { name: "徒步" },
        { name: "骑行" },
        { name: "攀岩" },
        { name: "速降" },
        { name: "轮滑" },
        { name: "唱歌" },
        { name: "影视" },
        { name: "游泳" },
        { name: "舞蹈" },
        { name: "摄影" },
        { name: "钓鱼" },
        { name: "书法" },
        { name: "乐器" },
        { name: "美食" }
      ],
      hobbyListItem: [],
      wxImg: '',
      serverId: ''
    };
  },
  methods: {
    setDate() {
      this.addresStater = false;
      this.$picker.show({
        type: "datePicker",
        onOk: date => {
          this.date = date.replace(new RegExp(/-/gm), "/");
          console.log('日期格式1', this.date);
          this.myList.birthday = this.date.split("/")[0] + '-' + this.date.split("/")[1] + '-' + this.date.split("/")[2];
          console.log('日期格式', this.myList.birthday);
        }
      });
    },
    setSexList() {
      this.setSex = true;
    },
    setSexOver(sex) {
      this.myList.sex = sex;
      this.setSex = false;
    },
    educationClick() {
      this.educationState = true;
    },
    quxiao() {
      this.educationState = false;
    },
    quxiaoindustry() {
      this.industry = false;
    },
    quxiaphobby() {
      this.hobby = false;
    },
    gohobby() {
      this.myList.hobby = "";
      for (let i = 0; i < this.hobbyListItem.length; i++) {
        this.myList.hobby =
          this.myList.hobby + this.hobbyListItem[i].name + "、";
      }
      this.hobby = false;
    },
    setSexquxiao() {
      this.setSex = false;
    },
    industryClick() {
      this.industry = true;
    },
    hobbyClick() {
      this.hobby = true;
    },
    uplode() {
      console.log(window.location.href.split('#')[0]);
      getParam(window.location.href.split('#')[0]).then(res => {
        var serverId, wxImg
        if (res.code === ERR_OK) {
          console.log('开始配置微信');
          wx.config({
            debug: false, //调试模式   当为tru时，开启调试模式
            appId: res.data.appid,
            timestamp: res.data.timestamp, //签名时间戳
            nonceStr: res.data.nonceStr, //生成签名的随机串
            signature: res.data.signature, //签名
            jsApiList: ['chooseImage', 'uploadImage'],
          })
          var self = this
          wx.ready(function () {
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                self.wxImg = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                wx.uploadImage({
                  localId: self.wxImg, // 需要上传的图片的本地ID，由chooseImage接口获得
                  isShowProgressTips: 1, // 默认为1，显示进度提示
                  success: function (res) {
                    self.serverId = res.serverId
                  }
                });
              }
            });
          })
        }
      })
    },
    hobbyItemOne(ind) {
      var arr = this.hobbyListItem.splice(ind, 1)[0];
      this.hobbyList.push(arr);
    },
    hobbyItemTwo(ind) {
      var arr = this.hobbyList.splice(ind, 1)[0];
      this.hobbyListItem.push(arr);
    },
    industryover() {
      this.industry = false;
      console.log(this.industryData);
      this.myList.industry = this.industryData;
      console.log(this.myList);
    },
    hobbyover() {
      this.hobby = false;
      this.myList.hobby = this.hobbyData;
      console.log(this.myList);
    },
    goueducation(item) {
      console.log(item);
      this.educationState = false;
      this.myList.education = item;
      console.log(this.myList);
    },
    goindustry(item) {
      console.log(item);
      this.industry = false;
      this.myList.industry = item;
    },
    setAddres() {
      this.addresStater = true;
    },
    Addres: function (Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false;
      if (!Addres) {
        this.myList.city = "";
      } else {
        this.myList.city = `${Addres.Province}-${Addres.City}-${
          Addres.District
          }`;
      }
      // this.myList = childValue
    },
    baocunBtn() {
      editUser(this.myList).then(res => {
        if (res.code === ERR_OK) {
          this.trueBox = true;
          var self = this;
          setTimeout(function () {
            self.trueBox = false;
          }, 1500);
        }
      });
    },
    _getUserById() {
      getUserById(storage.get("__userID__", [])).then(res => {
        if (res.code === ERR_OK) {
          console.log("个人信息");
          console.log(res);
          this.myList = Object.assign({}, this.myList, res.data);
          console.log(this.myList);
        }
      });
    }
  },
  components: {
    Addres
  },
  watch: {
    serverId: function () {
      var that = this
      uploadHead(this.myList.pictureId, this.serverId).then((res) => {
        if (res.code === ERR_OK) {
          that.myList.pictureUrl = res.data
          this.reload();
        }
      })
    },
    myList: {
      handler() {
        this.baocunBtn()
      },
      deep: true
    }
  }
};
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
.information {
  .scroll {
    width: 100%;
    height: 100%;
    padding-bottom: 140px;
    box-sizing: border-box;
    overflow: hidden;
    .line {
      width: 100%;
      height: 2px;
      background: -webkit-linear-gradient(left, #81d1db, #c6cbcc, #85d2db);
      background: -o-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
      background: -moz-linear-gradient(right, #81d1db, #c6cbcc, #85d2db);
      background: linear-gradient(to right, #81d1db, #c6cbcc, #85d2db);
    }
    .btn {
      width: 50%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #000;
      color: #fff;
      margin: 60px auto 0;
      border-radius: 40px;
    }
    .heart {
      width: 100%;
      height: 200px;
      position: relative;
      .heart-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        img {
          width: 100%;
          margin-top: -33.33%;
          -webkit-filter: blur(20px);
          filter: blur(20px);
        }
      }
      .heart-name {
        width: 100%;
        height: 100%;
        background: rgba(000, 000, 000, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 63px;
        box-sizing: border-box;
        .myHello {
          img {
            width: 168px;
            height: 41px;
          }
          .myName {
            font-size: 40px;
            margin: 10px 0;
            color: #fff;
          }
          .myId {
            font-size: 20px;
            color: #fff;
            margin-top: 10px;
            letter-spacing: 2px;
          }
        }
        .heart-tou {
          width: 124px;
          height: 124px;
          right: 62px;
          overflow: hidden;
          border-radius: 62px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .heart-title {
          display: flex;
          justify-content: center;
          img {
            width: 25px;
            height: 31px;
            margin: 0 31px;
          }
          span {
            font-size: 30px;
            color: #fff;
          }
        }
      }
    }
    .informationItem {
      width: 100%;
      height: 93px;
      padding: 0 57px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      div {
        font-weight: bold;
      }
      .informationItem-img {
        display: flex;
        align-items: center;
        span {
          font-weight: bold;
        }
        img {
          margin-left: 20px;
          width: 11px;
          height: 15px;
        }
      }
    }
  }
  .education-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
    .box {
      width: 100%;
      height: 50vh;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #fff;
      .education-title {
        width: 100;
        height: 80px;
        line-height: 80px;
        text-align: center;
        position: relative;
        border-bottom: 2px solid #ddd;
        span {
          position: absolute;
          right: 30px;
          padding: 0 20px;
        }
      }
      .education-iten {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 5%;
        div {
          width: 45%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 10px;
          border: 2px solid #ddd;
          margin-bottom: 30px;
        }
      }
    }
  }
  .list-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
    .item-box {
      width: 100%;
      height: 50vh;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #fff;
      overflow-x: auto;
      .item-title {
        width: 100;
        height: 80px;
        line-height: 80px;
        text-align: center;
        position: relative;
        border-bottom: 2px solid #ddd;
        span {
          position: absolute;
          right: 30px;
          padding: 0 20px;
        }
      }
      .item-item {
        margin-top: 30px;
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 2%;
        div {
          padding: 10px 30px;
          text-align: center;
          border-radius: 10px;
          border: 2px solid #ddd;
          margin-bottom: 30px;
          margin-right: 10px;
        }
      }
    }
  }
  .hobby-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
    .hobbyItem-box {
      width: 100%;
      height: 50vh;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #fff;
      overflow-x: auto;
      p {
        padding: 20px;
      }
      .hobbyItem-title {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid #ddd;
      }
      .hobbyItem-one {
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 2%;
        div {
          padding: 10px 30px;
          text-align: center;
          border-radius: 10px;
          border: 2px solid #ddd;
          margin-bottom: 30px;
          margin-right: 10px;
        }
      }
    }
  }
  .true-box {
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    position: fixed;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba($color: #000000, $alpha: 0.7);
    span {
      color: #fff;
    }
  }
}
</style>
