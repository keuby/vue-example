import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 60 * 1000,
  withCredentials: true
}

const _axios = axios.create(config)
console.log(_axios.defaults)
_axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue) {
  Vue.axios = _axios
  Object.defineProperty(Vue.prototype, '$axios', {
    get: () => _axios
  })
}

Vue.use(Plugin)
