// export const api = 'http://172.18.2.8' // 本地
export const api = 'http://wmore.wearewer.com' // 服务器
// export const api = './api' // 本地

export const ERR_OK = 0

import { getParam } from 'api/dataList'
// wmore.wearewer.com/
export function vxconfig(url) {
  getParam(url).then(res => {
    if (res.code === ERR_OK) {
      console.log('开始配置微信');
      console.log(res.data)
      wx.config({
        debug: false, //调试模式   当为tru时，开启调试模式
        appId: res.data.appid,
        timestamp: res.data.timestamp, //签名时间戳
        nonceStr: res.data.nonceStr, //生成签名的随机串
        signature: res.data.signature, //签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'],
      })
      wx.ready(function () {
        //分享到朋友圈
        wx.onMenuShareTimeline({
          title: 'W MORE 让创造者更健康', // 分享标题
          link: `${window.location.href.split('#')[0]}/govx.html`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${window.location.href.split('#')[0]}/static/images/logo.jpg`, // 分享图标
          success: function () {
            _hmt.push(['_trackEvent', '分享', '微信分享', '分享到朋友圈']);
            alert('分享成功')
          },
        })
        wx.onMenuShareAppMessage({
          title: 'W MORE 让创造者更健康', // 分享标题
          desc: '始于运动，终于创造', // 分享描述
          link: `${window.location.href.split('#')[0]}/govx.html`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${window.location.href.split('#')[0]}/static/images/logo.jpg`, // 分享图标
          // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            _hmt.push(['_trackEvent', '分享', '微信分享', '分享给朋友']);
            alert('分享成功')
          }
        });
      })
    }
  })
}