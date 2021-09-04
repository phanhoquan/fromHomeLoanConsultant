import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import React from "react"
import { useDebounce } from "../../hooks/useDebounce"

const NUMBER_CHARACTERS_TO_SEARCH = 3
const DEBOUNCE_TIME = 500

export const PageSearch = (props) => {
  const { value, onChange, onSubmit } = props

  const handleSubmit = useDebounce(() => {
    onSubmit()
  }, DEBOUNCE_TIME)

  const handleChange = (e) => {
    if (e.target.value.length >= NUMBER_CHARACTERS_TO_SEARCH) {
      handleSubmit()
    }
    onChange(e.target.value)
  }

  const handleBlur = (e) => {
    if (!e.target.value.length) {
      handleSubmit()
    }
  }

  return (
    <OutlinedInput
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end">
            <Search />
          </IconButton>
        </InputAdornment>
      }
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Search..."
    />
  )
}
