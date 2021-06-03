import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MainRouter from "../src/components/routers/MainRouter";
import GlobalReset from "../src/styles/GlobalReset";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Container from "@material-ui/core/Container";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Container maxWidth="xl" style={{ backgroundColor: theme.palette.background.default, height: "100%" }}>
        <MainRouter />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
