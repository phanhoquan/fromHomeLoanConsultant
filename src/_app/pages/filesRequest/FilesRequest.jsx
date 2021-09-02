import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ButtonRegular } from "../../components/buttons/ButtonRegular";
import { LeftLayout } from "../../components/layouts/LeftLayout";
import { RightLayout } from "../../components/layouts/RightLayout";
import { MUITextField } from "../../components/TextFields/MUITextField";
import { TextRegular } from "../../components/texts/TextRegular";
import { theme } from "../../theme";

export const FilesRequest = () => {
  return (
    <>
      <LeftLayout>
        <FieldItems>
          <Item>
            <TextRegular>Select User</TextRegular>
            <MUITextField placeholder="Enter user name here" />
          </Item>
          <Item>
            <TextRegular>Select Templete</TextRegular>
            <MUITextField select inputProps={{ "aria-label": "age" }} />
          </Item>
          <ButtonRegular>New templete</ButtonRegular>
        </FieldItems>
      </LeftLayout>
      <RightLayout>Right</RightLayout>
    </>
  );
};

const Item = styled.div`
  display: flex;
  gap: ${theme.spacing.m};
  flex-direction: column;

  &.MuiInputBase-root.Mui-focused fieldset {
    border-color: red !important;
  }
`;

const FieldItems = styled.div`
  display: flex;
  gap: ${theme.spacing.l};
  align-items: flex-end;
`;
