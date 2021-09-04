import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import { LogoutIcon } from "../../../assets/icons"
import { theme } from "../../../theme"

export const ListDocuments = () => {
  return (
    <CustomList>
      {new Array(10).fill(null).map((_, index) => (
        <Paper key={index} variant="outlined">
          <ListItem button>
            <CustomListItemText
              primary={"Lorem Ipsum is simply dummy"}
              secondary={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica`}
            />
            <CustomListItemSecondaryAction>
              <IconButton edge="end">
                <LogoutIcon />
              </IconButton>
            </CustomListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </CustomList>
  )
}

const CustomList = styled(List)`
  overflow-y: auto;
  max-height: calc(100% - 300px);
  min-height: 200px;
`

const CustomListItemText = styled(ListItemText)`
  max-width: 550px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.m};
`

const CustomListItemSecondaryAction = styled(ListItemSecondaryAction)`
  height: 100%;
`
