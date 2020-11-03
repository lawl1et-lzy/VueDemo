import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '@/util/Api/config'

let axios = Axios.create(config)

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    const { status, data } = res
    if(status === 200 || status === 304) {
      return data
    } else {
      Promise.reject(res)
    }
    return res
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const httpServer = (opts: object) => {
  return new Promise((resolve, reject) => {
    return axios(opts)
      .then((res: any) => {
        resolve(res)
      })
      .catch((err: any) => {
        console.log('axios constructor error', err)
        reject(err)
      })
  })
}

export default httpServer