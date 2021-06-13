import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Snackbar as SnackBarC } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface ISnack {
  openState: {
    setOpen: Function;
    open: boolean;
  };
  message: string;
  severity: any;
}

export default function SnackBar({ openState, message, severity }: ISnack) {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    openState.setOpen(false);
  };

  return (
    <SnackBarC
      open={openState.open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </SnackBarC>
  );
}
