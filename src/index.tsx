import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MainRouter from "../src/components/routers/MainRouter";
import GlobalReset from "../src/styles/GlobalReset";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Paper from '@material-ui/core/Paper';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Paper variant="outlined" square style={{ height: "100%" }}>
        <MainRouter />
      </Paper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
