import React from "react";
import ReactDOM from "react-dom";

import history from "./.views/components/routers/history";
import GlobalReset from "./.views/styles/GlobalReset";
import MainRouter from "./.views/components/routers/MainRouter";
import Paper from "@material-ui/core/Paper";
import reportWebVitals from "./reportWebVitals";
import theme from "./.views/styles/theme";

import { firebase } from "./.models/firebase";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Paper variant="outlined" square style={{ height: "100%" }}>
        <MainRouter history={history} />
      </Paper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    history.push("/");
  } else {
    history.push("/login");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
