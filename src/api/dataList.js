import { api } from './config'
import axios from 'axios'
// 微信接口
export function getWechat(id) {
  const url = `${api}/wmore/user/userId`
  return axios.get(url, {
    params: {
      key: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 匹配用户 
// /wmore/user/matchUser
export function getmatchUser(list) {
  const url = `${api}/wmore/user/matchUser`
  return axios.post(url, list).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 首页banner
export function getBigBannerPictures() {
  const url = `${api}/wmore/picture/getBigBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 课程banner
export function getSmallBannerPictures() {
  const url = `${api}/wmore/picture/getSmallBanner`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取课程列表
export function getCourse(id, pn) {
  const url = `${api}/wmore/course/getCourse`
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
export function getReservedCourse(id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `${api}/wmore/user/getReservedCourse`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取已完成课程列表
export function getFinishedCourse(id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `${api}/wmore/user/getFinishedCourse`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取未读通知列表
export function getUnreadNotice(id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `${api}/wmore/notice/getUnreadNotice`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取已读通知列表
export function getReadNotice(id) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `${api}/wmore/notice/getReadNotice`
  return axios.get(url, {
    params: {
      id: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 查看通知
export function toReadNotice(noticeId) {
  // GET /wmore/user/getReservedCourse GET /wmore/user/getFinishedCourse
  const url = `${api}/wmore/notice/toReadNotice`
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
export function getActionById(id) {
  const url = `${api}/wmore/user/getActionById`
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
export function getUserById(id) {
  const url = `${api}/wmore/user/getUserById`
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
export function getCourseDetail(id, courseId) {
  const url = `${api}/wmore/course/getCourseDetail`
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
export function getnoticeByDay(id) {
  const url = `${api}/wmore/notice/noticeByDay`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 确认预约
// POST /wmore/userCourse/insertUC
export function insertUC(id, claId) {
  const url = `${api}/wmore/userCourse/insertUC`
  return axios.post(url, {
    userId: id,
    courseId: claId
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 保存信息
// /wmore/user/editUser
export function editUser(list) {
  const url = `${api}/wmore/user/editUser`
  console.log(list)
  return axios.post(url, list).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取验证码
// POST /wmore/user/sendSMS
export function sendSMS(ip) {
  console.log(ip)
  const url = `${api}/wmore/user/sendSMS`
  return axios.get(url, {
    params: {
      mobile: ip
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取用户未评价
// POST /wmore/userCourse/getIsEvaluateCoursePOST /wmore/userCourse/getIsEvaluateCourse
export function getIsEvaluateCourse(id) {
  // const url = `${api}/wmore/userCourse/getIsEvaluateCourse`
  const url = `${api}/wmore/userCourse/getIsEvaluateCourse`
  return axios.get(url, {
    params: {
      userId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 保存
// POST /wmore/userCourse/setScore
export function setScore(list) {
  const url = `${api}/wmore/userCourse/setScore`
  console.log(list)
  return axios.post(url, list).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 上传头像
// /wmore/user/getParam
export function getParam(urlList) {
  const url = `${api}/wmore/user/getParam`
  return axios.get(url, {
    params: {
      url: urlList
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 请求新路径
export function uploadHead(oss, wxid) {
  const url = `${api}/wmore/user/uploadHead`
  alert(url, oss, wxid)
  return axios.get(url, {
    params: {
      mediaId: wxid,
      pictureId: oss
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}