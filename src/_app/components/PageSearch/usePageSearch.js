import { useState } from "react"
import { useQuery } from "../../hooks/useQuery"

export const usePageSearch = (key: string = "search") => {
  const [query, setQuery] = useQuery({ [key]: "" })
  const [value, setValue] = useState(query[key])

  const handleChange = (newValue: string) => setValue(newValue)

  const handleSubmit = (): void => updateQuery(value)

  const updateQuery = (newValue: string) => {
    setQuery({ [key]: !!newValue ? newValue : undefined })
  }

  const bind = () => {
    return {
      value,
      onChange: handleChange,
      onSubmit: handleSubmit,
    }
  }

  return {
    bind,
    query: query[key],
  }
}
