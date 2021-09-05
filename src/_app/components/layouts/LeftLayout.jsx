import React from "react"
import styled from "styled-components"
import { Logo } from "../../assets/logos"
import { theme } from "../../theme"

export const LeftLayout = (props) => {
  const { children } = props
  return (
    <Root>
      <Logo width={120} />
      {children}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.spacing.l} ${theme.spacing.xl};
  background-color: ${theme.color.blue};
  gap: ${theme.spacing.l};
  max-width: 600px;

  ${theme.mui.breakpoints.up("md")} {
    height: 100%;
  }
`
