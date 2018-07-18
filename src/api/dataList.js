// import { api } from './config'
import axios from 'axios'
// 首页banner
export function getBanner () {
  const url = `./api/wmore/picture/getBannerPictures`
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
