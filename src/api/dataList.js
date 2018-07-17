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
