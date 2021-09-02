import { AxiosInstance } from "axios"
import { useDependencyInjectionContainer } from "./useDependencyInjectionContainer"

export const useApiClient = (): AxiosInstance => {
  return useDependencyInjectionContainer().apiClient
}
