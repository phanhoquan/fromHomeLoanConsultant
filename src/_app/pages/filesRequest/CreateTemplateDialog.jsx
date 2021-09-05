import { Checkbox, FormControlLabel, MenuItem, Select, TextField } from "@material-ui/core"
import React, { useEffect } from "react"
import { WideDialog } from "../../components/dialogs/WideDialog"
import { links } from "../../config/links"
import { useNavigator } from "../../hooks/useNavigator"
import styled from "styled-components"
import { TextRegular } from "../../components/texts/TextRegular"
import { theme } from "../../theme"
import { yupResolver } from "@hookform/resolvers/yup"
import { createTemplateForm } from "./formValidate/createTemplateForm"
import { useForm, useFieldArray } from "react-hook-form"

export const CreateTemplateDialog = () => {
  const navigator = useNavigator()
  const formOptions = { resolver: yupResolver(createTemplateForm) }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm(formOptions)

  const { fields } = useFieldArray({
    control,
    name: "documents",
  })

  useEffect(() => {
    // todo: fake data
    setValue("documents", [
      { label: "Lizards are a widespread group of squamate reptiles 1", checkbox: false },
      { label: "Lizards are a widespread group of squamate reptiles 2", checkbox: false },
      { label: "Lizards are a widespread group of squamate reptiles 3", checkbox: true },
      { label: "Lizards are a widespread group of squamate reptiles 4", checkbox: false },
      { label: "Lizards are a widespread group of squamate reptiles 5", checkbox: false },
      { label: "Lizards are a widespread group of squamate reptiles 6", checkbox: true },
    ])
  }, [])

  const onSubmit = async (data) => console.log(data)

  return (
    <WideDialog
      title="Create New Template"
      onClose={() => navigator.goTo(links.filesRequest.index())}
      onSubmit={handleSubmit(onSubmit)}>
      <Root>
        <TextField
          variant="outlined"
          error={!!errors["templateName"]}
          helperText={errors["templateName"]?.message}
          placeholder="Enter template name"
          {...register("templateName")}
        />
        <SelectDocumentBox>
          <TextRegular>Select Document</TextRegular>
          <Select variant="outlined" defaultValue={10}>
            <MenuItem value={10}>
              <span>Template A</span>
            </MenuItem>
            <MenuItem value={20}>
              <span>Template B</span>
            </MenuItem>
            <MenuItem value={30}>
              <span>Template C</span>
            </MenuItem>
          </Select>
        </SelectDocumentBox>
        <ListItems>
          {fields?.length &&
            fields.map((field, index) => (
              <FormControlLabel
                key={field.id}
                control={<Checkbox value={field.id} defaultChecked={field.checkbox} color="primary" />}
                label={field.label}
                {...register(`documents.${index}.checkbox`)}
              />
            ))}
        </ListItems>
      </Root>
    </WideDialog>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.l};
`

const RowInline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SelectDocumentBox = styled(RowInline)`
  > p {
    width: 100%;
  }
`

const ListItems = styled(RowInline)`
  min-height: 200px;
  max-height: 500px;
  overflow: auto;
  flex-wrap: wrap;

  .MuiFormControlLabel-root {
    width: 45%;
    align-items: flex-start;
    margin-bottom: ${theme.spacing.m};

    .MuiCheckbox-root {
      padding: 5px 9px;
    }
  }
`
