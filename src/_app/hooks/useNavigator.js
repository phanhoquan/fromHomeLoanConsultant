import { useHistory } from "react-router-dom"
import { createUrlWithCurrentQuery } from "../heplers/createUrlWithCurrentQuery"
import { createUrlWithQuery } from "../heplers/createUrlWithQuery"

export const useNavigator = () => {
  const history = useHistory()

  const goTo = (path: string, query = {}) => {
    history.push(createUrlWithQuery(path, query))
  }

  const goToWithCurrentQuery = (path: string, query = {}) => {
    history.push(createUrlWithCurrentQuery(path, query))
  }

  const goBack = () => history.back()

  return {
    goTo,
    goToWithCurrentQuery,
    goBack,
  }
}
