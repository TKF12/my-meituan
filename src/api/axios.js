import axios from 'axios';

const instance = axios.create({
  // 请求的地址
  baseURL: 'https://open.duyiedu.com/api/meituan',
});

// 请求拦截
instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    appkey: 'TKF12_1616069409735',
    ...config.params,
  },
}));

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.data.status === 'success') {
    return response.data.data;
  }
  return response;
});

export default instance;
