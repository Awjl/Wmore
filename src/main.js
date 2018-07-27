// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/style/index.css'
import VueWechatTitle from 'vue-wechat-title'
import Calendar from 'vue2-datepick'
Vue.use(Calendar) // 日期选择器
Vue.use(VueWechatTitle) // 修改标题
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
