import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default class HttpClient {
  axios: AxiosInstance

  constructor(baseURL?: string , timeout: number = 10000) {
    this.axios = axios.create({
      baseURL,
      timeout,
      adapter: 'fetch'
    })

    this.axios.defaults.headers.common['Content-Type'] = 'application/json';

    this.axios.interceptors.response.use(function onFulfilled(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (response.data.success === true) {
        return Promise.resolve(response.data.data);
      }

      return Promise.reject(response.data?.message || 'Internal Server Error')

    }, function onRejected(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.axios.get(url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    return this.axios.post(url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    return this.axios.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return this.axios.delete(url, config);
  }
}
