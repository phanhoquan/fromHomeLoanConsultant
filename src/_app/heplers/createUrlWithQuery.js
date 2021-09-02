import { stringify } from "querystring"

export const createUrlWithQuery = (path: string, query = {}): string => {
  const queryString = stringify(query)
  const queryWithPrefix = path.indexOf("?") === -1 ? `?${queryString}` : `&${queryString}`

  return `${path}${queryWithPrefix}`
}
