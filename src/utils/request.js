import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success) {
      return res
    } else {
      Message.error({
        message: res.message || '服务器异常'
      })
      return Promise.reject(res.message)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
