import styled from "styled-components"
import { Button } from "@material-ui/core"

export const ButtonRegular = styled(Button).attrs((props) => ({
  color: "primary",
  variant: "contained",
  ...props,
}))``
