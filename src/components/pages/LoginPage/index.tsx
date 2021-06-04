import React from "react";
import { Typography, TextField } from "@material-ui/core";
import Paper from "./Paper";
import LoginContainer from "./LoginContainer";

const LoginPage = () => {
  return (
    <LoginContainer>
      <Paper elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "15px" }}>
          Login to your account
        </Typography>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      </Paper>
    </LoginContainer>
  );
};

export default LoginPage;
