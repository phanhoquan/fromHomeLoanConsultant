import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"

export const MainLayout = (props) => {
  const { children } = props
  return <Root>{children}</Root>
}

const Root = styled.div`
  display: flex;
  width: 100%;

  ${theme.mui.breakpoints.up("md")} {
    height: 100%;
  }
`
