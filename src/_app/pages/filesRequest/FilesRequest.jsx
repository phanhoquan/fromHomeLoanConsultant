import { Button, MenuItem, OutlinedInput, Select } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import { IndentAll } from "../../assets/icons"
import { ButtonRegular } from "../../components/buttons/ButtonRegular"
import { LeftLayout } from "../../components/layouts/LeftLayout"
import { RightLayout } from "../../components/layouts/RightLayout"
import { PageSearch } from "../../components/PageSearch/PageSearch"
import { usePageSearch } from "../../components/PageSearch/usePageSearch"
import { TextRegular } from "../../components/texts/TextRegular"
import { TextSmall } from "../../components/texts/TextSmall"
import { theme } from "../../theme"
import { ListDocuments } from "./components/ListDocuments"

export const FilesRequest = () => {
  const search = usePageSearch()
  return (
    <>
      <LeftLayout>
        <FieldItems>
          <Item>
            <TextRegular>Select User</TextRegular>
            <OutlinedInput placeholder="Enter user name here" />
          </Item>
          <Item>
            <TextRegular>Select Templete</TextRegular>
            <Select variant="outlined" defaultValue={10}>
              <CustomMenuItem value={10}>
                <span>Template A</span> <ButtonRegular>Use</ButtonRegular>
              </CustomMenuItem>
              <CustomMenuItem value={20}>
                <span>Template B</span> <ButtonRegular>Use</ButtonRegular>
              </CustomMenuItem>
              <CustomMenuItem value={30}>
                <span>Template C</span> <ButtonRegular>Use</ButtonRegular>
              </CustomMenuItem>
            </Select>
          </Item>
          <ButtonRegular>New templete</ButtonRegular>
        </FieldItems>
        <FieldItems>
          <Item>
            <TextRegular>File Request</TextRegular>
            <PageSearch {...search.bind()} />
          </Item>
          <ButtonRegular>New Document</ButtonRegular>
        </FieldItems>
        <CustomFieldItems>
          <Button>
            <TextSmall>Request all</TextSmall>
            <IndentAll width={15} height={15} />
          </Button>
        </CustomFieldItems>
        <ListDocuments />
      </LeftLayout>
      <RightLayout>Right</RightLayout>
    </>
  )
}

const CustomMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;

  button {
    height: 20px;
    min-width: auto;
    width: 40px;
    opacity: 0;
  }

  :hover,
  &.Mui-selected {
    button {
      opacity: 1;
    }
  }
`

const Item = styled.div`
  display: flex;
  gap: ${theme.spacing.m};
  flex-direction: column;
  flex: 1;

  .MuiSelect-root {
    button {
      opacity: 0;
    }
  }
`

const FieldItems = styled.div`
  display: flex;
  gap: ${theme.spacing.l};
  align-items: flex-end;
`
const CustomFieldItems = styled(FieldItems)`
  justify-content: flex-end;

  .MuiButton-label {
    text-transform: none;
    gap: ${theme.spacing.s};
  }
`
