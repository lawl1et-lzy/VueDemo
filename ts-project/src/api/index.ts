import axios from '@/util/Api/http'
import { LoginParams, LoginRes } from '@/interface/index'
class Api {
  // 登录
  public static getLogin(params: LoginParams) {
    return axios({
      method: 'GET',
      url: '/login/cellphone',
      params
    })
  }
  // // 获取歌单列表
  // static getSongSheet(data) {
  //   return axios({
  //     method: 'get',
  //     url: '/user/playlist',
  //     data
  //   })
  // }

  // // 获取歌单详细信息
  // static getSongList(data) {
  //   return axios({
  //     method: 'get',
  //     url: '/playlist/detail',
  //     data
  //   })
  // }

  // // 获取歌曲详细信息
  // static getSongInfo(data) {
  //   return axios({
  //     method: 'get',
  //     url: '/song/detail',
  //     data
  //   })
  // }

  // // 获取个人信息
  // static getPersonalInfo(data) {
  //   return axios({
  //     method: 'get',
  //     url: '/user/detail',
  //     data
  //   })
  // }
}

export default Api