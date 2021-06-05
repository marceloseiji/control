import React from "react";

import LoginContainer from "./LoginContainer";
import Paper from "./Paper";

import { Typography, Button } from "@material-ui/core";
import authProvider from "../../../../.controllers/authController";

const LoginPage = () => {
  return (
    <LoginContainer>
      <Paper elevation={3}>
        <Typography variant="h6" style={{ marginBottom: "15px" }}>
          Login to your account
        </Typography>
        <Button variant="outlined" color="primary" onClick={authProvider.startLogin}>
          Google Login
        </Button>
      </Paper>
    </LoginContainer>
  );
};

export default LoginPage;
