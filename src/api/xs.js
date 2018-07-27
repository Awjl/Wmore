export function takePicture(nums) {
  wx.chooseImage({
    count: 1,
    needResult: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
    success: function (data) {
      localIds = data.localIds[0]   // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片         
      var num1 = nums
      wxuploadImage(localIds, num1)
      wxgetLocalImgData(localIds, num1)
    },
    fail: function (res) {
      alterShowMessage("操作提示", JSON.stringify(res), "1", "确定", "", "", "")
    }
  })
}
function wxuploadImage(e, num) {
  var $hiddenImg = $(".hiddenImg");
  wx.uploadImage({
    localId: e, // 需要上传的图片的本地ID，由chooseImage接口获得  
    isShowProgressTips: 1, // 默认为1，显示进度提示  
    success: function (res) {
      mediaId = res.serverId;
      wxdownloadImage(mediaId)
      $($hiddenImg[num]).val(mediaId);
    },
    fail: function (error) {
      picPath = '';
      localIds = '';
      alert(Json.stringify(error));
    }
  });
}
function wxgetLocalImgData(e, num) {
  var $myimg = $(".myimg");
  if (window.__wxjs_is_wkwebview) {
    wx.getLocalImgData({
      localId: e, // 图片的localID
      success: function (res) {
        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
        localData = localData.replace('jgp', 'jpeg');//iOS 系统里面得到的数据，类型为 image/jgp,因此需要替换一下                                            
        $($myimg[num]).attr("src", localData);
      }, fail: function (res) {
        alert("显示失败");
      }
    });
  } else {
    $($myimg[num]).attr("src", e);

  }
}
function tijiao() {
  var userInfo = JSON.parse(localStorage.getItem("UserInfoKey"));
  var user = JSON.parse(localStorage.getItem("user"));
  var userId = user.userId;
  var company = userInfo.mainInfo;
  var kfCompanyProvince = userInfo.kfCompanyProvince;
  var kfCompanyCity = userInfo.kfCompanyCity;
  var kfCompanyDistrict = userInfo.kfCompanyDistrict;
  var companyAddress = userInfo.detailAddress;
  var userType = user.userType;
  var userName = userInfo.contacts;
  var principalPhoneCode = userInfo.phone;
  var img1 = $($(".hiddenImg")[0]).val();
  var img3 = $($(".hiddenImg")[1]).val();
  var img5 = $($(".hiddenImg")[2]).val();
  var img6 = $($(".hiddenImg")[3]).val();
  var img7 = $($(".hiddenImg")[4]).val();
  $.ajax({
    url: 'user_uploadInformation',
    data: {
      "userId": userId,
      "company": company,
      "kfCompanyProvince": kfCompanyProvince,
      "kfCompanyCity": kfCompanyCity,
      "kfCompanyDistrict": kfCompanyDistrict,
      "companyAddress": companyAddress,
      "userType": userType,
      "userName": userName,
      "principalPhoneCode": principalPhoneCode,
      "img1": img1,
      "img3": img3,
      "img5": img5,
      "img6": img6,
      "img7": img7
    },
    type: 'post',
    dataType: 'json',
    async: false,
    success: function (data) {
      if (data.code == 0) {
        mui.alert("认证失败，请重新认证")
      } else if (data.code == 1) {
        mui.alert("申请提交成功，请稍后", function () {
          window.location.href = "../../index/carManLookImg.jsp"
        })

      }
    },
    error: function (data) {
      alert("上传失败")
    }
  })
}
