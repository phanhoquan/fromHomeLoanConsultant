import React from "react"
import { DependencyInjectionContext } from "./contexts/DependencyInjectionContext"
import { apiClient } from "./service/container"

export type DependencyInjectionProps = {
  children?: ReactNode,
}

export type DependencyInjectionContainer = {
  apiClient: AxiosInstance,
}

export const DependencyInjection = (props: DependencyInjectionProps) => {
  const { children } = props

  const container: DependencyInjectionContainer = {
    apiClient: apiClient,
  }

  return <DependencyInjectionContext.Provider value={container}>{children}</DependencyInjectionContext.Provider>
}
