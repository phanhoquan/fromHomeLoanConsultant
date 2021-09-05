import React from "react"
import styled from "styled-components"
import { ButtonRegular } from "../../../components/buttons/ButtonRegular"
import { RightLayout } from "../../../components/layouts/RightLayout"
import { TextRegular } from "../../../components/texts/TextRegular"
import { theme } from "../../../theme"
import { ListRequestFiles } from "./ListRequestFiles"

export const RightContent = () => {
  return (
    <RightLayout>
      <TextRegular>List of request files</TextRegular>
      <ListRequestFiles />
      <GroupButtons>
        <CustomButtonRegular color="secondary">Save</CustomButtonRegular>
        <CustomButtonRegular>Share</CustomButtonRegular>
      </GroupButtons>
    </RightLayout>
  )
}

const CustomButtonRegular = styled(ButtonRegular)`
  padding: 6px ${theme.spacing.xl};
`
const GroupButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.l};
  justify-content: flex-end;
  margin-top: 150px;
`
