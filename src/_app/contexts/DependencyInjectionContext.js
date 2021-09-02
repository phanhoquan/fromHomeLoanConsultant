import React, { createContext } from "react"

export type DependencyInjectionContainer = {
  apiClient: AxiosInstance,
}

export const DependencyInjectionContext: React.Context<DependencyInjectionContainer> = createContext(undefined)
