import React from "react"
import styled from "styled-components"

export const MainLayout = (props) => {
  const { children } = props
  return <Root>{children}</Root>
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
