import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export const createApiClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const http = axios.create(config)
  // todo: missing authenticate
  http.interceptors.request.use(async (config: any) => {
    config.headers["Access-Control-Allow-Origin"] = "*"
    config.headers["accept"] = "application/json"

    return config
  })

  return http
}
