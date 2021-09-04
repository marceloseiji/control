import React, { useState, useContext, useEffect } from "react"
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  TextField,
  LinearProgress,
  Button,
  Dialog,
} from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import CancelIcon from "@material-ui/icons/Cancel"
import { useTheme } from "@material-ui/core/styles"

import { DialogContaier, ButtonsContainer } from "./styles"

interface IDialog {
  dialogOpen: boolean
  handleCloseDialog: any
  handleConfirmRemove: any
  text: string
}

const ConfirmDialog = ({
  dialogOpen,
  handleCloseDialog,
  text,
  handleConfirmRemove,
}: IDialog) => {
  const theme = useTheme()

  return (
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
      <DialogContaier>
        <Typography variant="body1">{text}</Typography>
        <ButtonsContainer>
          <IconButton
            onClick={handleCloseDialog}
            style={{ color: theme.palette.error.main }}
          >
            <CancelIcon />
          </IconButton>
          <IconButton
            onClick={handleConfirmRemove}
            style={{ color: theme.palette.success.main }}
          >
            <CheckCircleIcon />
          </IconButton>
        </ButtonsContainer>
      </DialogContaier>
    </Dialog>
  )
}

export default ConfirmDialog
