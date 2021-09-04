import { useHistory, useLocation } from "react-router-dom"
import { parse, stringify } from "querystring"

export const useQuery: UseQuery = (initialValue, stripValues = [undefined, null, "", 0, "0"]) => {
  const history = useHistory()
  const queryString = useLocation().search

  const query = {
    ...initialValue,
    ...parse(queryString),
  }

  const updateQuery = (state) => {
    const newQueryString = stringify(pickBy(state, (value) => !stripValues.includes(value)))

    history.push({ search: newQueryString })
  }

  const setQuery = (state) => updateQuery(state)
  const patchQuery = (state) => updateQuery({ ...query, ...state })

  return [query, setQuery, patchQuery]
}

const pickBy = (object: Record<any, any>, predicate: (value: any) => boolean): Record<any, any> => {
  return Object.keys(object).reduce((accumulator, key) => {
    const value = object[key]

    if (predicate(value)) {
      accumulator[key] = value
    }

    return accumulator
  }, {})
}
