import React, { useState, useContext } from "react"
import { Snackbar as SnackBarC } from "@material-ui/core"
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert"
import { useEffect } from "react"
import GlobalContext from "../../../../contexts/GlobalContext"

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function SnackBar() {
  const { snack, setSnack } = useContext(GlobalContext)

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setSnack({ ...snack, open: false })
  }

  return (
    <SnackBarC open={snack.open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={snack.severity}>
        {snack.message}
      </Alert>
    </SnackBarC>
  )
}
