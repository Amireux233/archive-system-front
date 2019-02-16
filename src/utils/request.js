import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api's base_url
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (request) => {
    request.url = `/api${request.url}`;
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      /* eslint-disable no-param-reassign */
      request.headers['X-CSRFToken'] = getToken();
    }
    return request;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// respone interceptor
service.interceptors.response.use(
  response => response,
  (error) => {
    console.log(`err${error}`); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
