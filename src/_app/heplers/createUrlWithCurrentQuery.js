import { parse } from "querystring"
import { createUrlWithQuery } from "./createUrlWithQuery"

export const createUrlWithCurrentQuery = (path: string, query = {}) => {
  const currentQuery = parse(window.location.search)
  const newQuery = { ...currentQuery, ...query }

  return createUrlWithQuery(path, newQuery)
}
