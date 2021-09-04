import { useEffect, useRef, useState } from "react"
import { debounce } from "lodash"

export const useDebounce = (value, delay, options) => {
  const [state, setState] = useState(typeof value === "function" ? null : value)
  const callback = debounce(
    (...args) => {
      if (typeof ref.current.value === "function") {
        ref.current.value(...args)
      } else {
        setState(ref.current.value)
      }
    },
    delay,
    options
  )

  const ref = useRef({ value, callback })

  useEffect(() => {
    ref.current.value = value

    if (typeof ref.current.value !== "function") {
      ref.current.callback()
    }
  }, [value])

  return typeof ref.current.value === "function" ? ref.current.callback : state
}
