import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/tab'
import Home from '@/components/Home'
import My from '@/components/my'
import MyClass from '@/components/myList/class' // 我的课程
import MyInformation from '@/components/myList/information' // 个人信息
import MyIntegral from '@/components/myList/integral' // 我的积分
import MyNotice from '@/components/myList/notice' // 我的通知
import Login from '@/components/login/login' // 登陆
import Curriculum from '@/components/curriculum/curriculum' // 我的课程页面
import Details from '@/components/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tab,
      redirect: '/home',
      children: [
        {
          path: '/Home',
          component: Home,
          meta: {
            title: '约课'
          }
        },
        {
          path: '/my',
          component: My,
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '/MyClass',
          component: MyClass,
          meta: {
            title: '我的课程'
          }
        },
        {
          path: '/MyInformation',
          component: MyInformation,
          meta: {
            title: '个人信息'
          }
        },
        {
          path: '/MyIntegral',
          component: MyIntegral,
          meta: {
            title: '我的积分'
          }
        },
        {
          path: '/MyNotice',
          component: MyNotice,
          meta: {
            title: '我的通知'
          }
        },
        {
          path: '/Login',
          component: Login,
          meta: {
            title: '登录'
          }
        },
        {
          path: '/Curriculum',
          component: Curriculum,
          meta: {
            title: '课程列表'
          }
        }
      ]
    },
    {
      path: '/Details/:item',
      component: Details,
      meta: {
        title: '课程详情'
      }
    }
  ]
})
