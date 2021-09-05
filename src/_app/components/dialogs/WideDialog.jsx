import { Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core"
import React, { ReactNode } from "react"
import { ButtonRegular } from "../buttons/ButtonRegular"
import styled from "styled-components"

export type WideDialogProps = {
  onClose: () => void,
  onSubmit: () => void,
  onExited?: () => void,
  children?: ReactNode | ReactNode[],
  closeable?: boolean,
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false,
  title?: string,
}

export const WideDialog = (props: WideDialogProps) => {
  const { children, onClose, onExited, onSubmit, title, closeable = false, maxWidth = "sm" } = props

  return (
    <Dialog
      open={true}
      fullWidth={true}
      maxWidth={maxWidth}
      disableEscapeKeyDown
      TransitionProps={{
        onExited: onExited,
      }}
      onClose={(_, reason) => {
        if (reason !== "backdropClick" || closeable) {
          onClose()
        }
      }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <CustomDialogActions>
        <ButtonRegular color="secondary" onClick={onClose}>
          Cancel
        </ButtonRegular>
        <ButtonRegular onClick={onSubmit}>Save</ButtonRegular>
      </CustomDialogActions>
    </Dialog>
  )
}

const CustomDialogActions = styled(DialogActions)`
  justify-content: center;
  gap: 10px;
  margin: 15px 0;

  button {
    width: 120px;
  }
`
