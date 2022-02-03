import axios from 'axios'
import { BASE_URL } from './config'
axios.defaults.timeout = 5000 // 超时时间设置
axios.defaults.withCredentials = true // true允许跨域
// Content-Type 响应头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = BASE_URL


export
