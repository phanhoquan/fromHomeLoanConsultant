import { createApiClient } from "./createApiClient"

export const apiClient = createApiClient({
  // todo: config link call endpoint in .env file
  baseURL: `/api`,
})
