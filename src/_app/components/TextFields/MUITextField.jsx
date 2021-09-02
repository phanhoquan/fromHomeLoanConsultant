import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const MUITextField = styled(TextField).attrs((props) => ({
  variant: "outlined",
  size: "small",
  ...props,
}))`
  input {
    font-size: 14px;
    height: 14px;
  }
`;
