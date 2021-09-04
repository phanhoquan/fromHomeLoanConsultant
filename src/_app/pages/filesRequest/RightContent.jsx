import { IconButton, List, ListItem, ListItemText, Paper } from "@material-ui/core"
import { Edit, MessageOutlined } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { ButtonRegular } from "../../components/buttons/ButtonRegular"
import { RightLayout } from "../../components/layouts/RightLayout"
import { TextRegular } from "../../components/texts/TextRegular"
import { theme } from "../../theme"

export const RightContent = () => {
  return (
    <RightLayout>
      <TextRegular>List of request files</TextRegular>
      <CustomList>
        {new Array(5).fill(null).map((_, index) => (
          <Paper key={index} variant="outlined">
            <CustomListItem button>
              <CustomListItemText primary={"Lorem Ipsum is simply dummy Lorem Ipsum is simply  "} />
              <CustomListItemText>
                <IconButton>
                  <Edit />
                </IconButton>
              </CustomListItemText>
              <CustomListItemText
                primary={<TextPrimary>Lorem Ipsum is simply dummy Lorem Ipsum is simply</TextPrimary>}
              />
              <CustomListItemText
                primary={<TextPrimary>Due Date:</TextPrimary>}
                secondary={<TextSecondary>28/06/21 - 15:00</TextSecondary>}
              />
              <CustomListItemText
                primary={<TextPrimary>Updated:</TextPrimary>}
                secondary={<TextSecondary>5 mins ago</TextSecondary>}
              />
              <CustomListItemText>
                <IconButton>
                  <MessageOutlined />
                </IconButton>
              </CustomListItemText>
            </CustomListItem>
          </Paper>
        ))}
      </CustomList>
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

const TextPrimary = styled.span`
  font-family: ${theme.font.bold};
  font-size: ${theme.fontSize.s};
`
const TextSecondary = styled(TextPrimary)`
  color: ${theme.color.blue1};
`

const CustomList = styled(List)`
  max-width: 900px;
`

const CustomListItem = styled(ListItem)`
  gap: ${theme.spacing.xl};

  :hover {
    background-color: ${theme.color.blue2};
    border: 1px solid ${theme.color.blue1};

    .MuiListItemText-root {
      :nth-child(1) {
        color: ${theme.color.blue1};
      }
      :nth-child(2) {
        opacity: 1;
      }
    }
  }
`

const CustomListItemText = styled(ListItemText)`
  :nth-child(1) {
    max-width: 3000px;
  }
  :nth-child(2) {
    max-width: 25px;
    opacity: 0;
  }
  :nth-child(3) {
    max-width: 150px;
  }
  :nth-child(4) {
    max-width: 200px;
  }
  :nth-child(5) {
    max-width: 200px;
  }
`
