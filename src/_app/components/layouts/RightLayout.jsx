import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"
import { Header } from "./Header"

export const RightLayout = (props) => {
  const { children } = props
  return (
    <Root>
      <Header />
      {children}
    </Root>
  )
}

const Root = styled.div`
  padding: ${theme.spacing.l} ${theme.spacing.xl};
  flex: 1;

  .active button {
    background-color: ${theme.color.blue1};
    color: ${theme.color.white};
  }
`
