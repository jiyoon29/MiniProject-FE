import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = (option?: { multi?: boolean }) => {
  const config: AxiosRequestConfig = {
    // baseURL: '/',
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 3000;
  //요청보낼 때 쿠키에있는 엑세스토큰을 가져와서 헤더에 셋
  instance.interceptors.request.use(
    (request) => {
      // const token = getCookie('accessToken');
      // if (token)
      request.headers[
        'Authorization'
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqd3RzdHVkeSIsInJvbGUiOiJST0xFX0FETUlOIiwiaWQiOjEsImV4cCI6MTY4NDEyOTcxNn0.oAyzbYlH2p50-gJOCWztV8--LcUdI2m3Wkqz96Juu6UyEnfpp6NJMYJaSd6iwntH22Sp7yhY2Ogfhcfn8M6SoA`;
      if (option && option.multi) request.headers['Content-Type'] = 'multipart/form-data';
      return request;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return instance;
};

export const axiosInstance = getAxiosInstance;
