// import { api } from './config'
import axios from 'axios'
// 首页banner
export function getBigBannerPictures () {
  const url = `./api/wmore/picture/getBigBannerPictures`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 课程banner
export function getSmallBannerPictures () {
  const url = `./api/wmore/picture/getSmallBannerPictures`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取课程列表
export function getCourse (id, pn) {
  const url = `./api/wmore/course/getCourse`
  return axios.get(url, {
    params: {
      id: id,
      month: pn
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取已约课程列表
export function getReservedCourse (id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `./api/wmore/user/getReservedCourse`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取已完成课程列表
export function getFinishedCourse (id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `./api/wmore/user/getFinishedCourse`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取未读通知列表
export function getUnreadNotice (id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `./api/wmore/notice/getUnreadNotice`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取已读通知列表
export function getReadNotice (id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `./api/wmore/notice/getReadNotice`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 查看通知
export function toReadNotice (noticeId) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `./api/wmore/notice/toReadNotice`
  return axios.get(url, {
    params: {
      noticeId: noticeId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取积分列表
// GET /wmore/action/getActionById
export function getActionById (id) {
  const url = `./api/wmore/user/getActionById`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取个人信息
// /wmore/user/getUserById
export function getUserById (id) {
  const url = `./api/wmore/user/getUserById`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 查看详情
// GET /wmore/course/getCourseDetail
export function getCourseDetail (id, courseId) {
  const url = `./api/wmore/course/getCourseDetail`
  return axios.get(url, {
    params: {
      id: id,
      courseId: courseId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 查看每日通知
export function getnoticeByDay (id) {
  const url = `./api/wmore/notice/noticeByDay`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
