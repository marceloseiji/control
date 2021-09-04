import React from "react"
import ReactDOM from "react-dom"

import history from "./.views/components/routers/history"
import GlobalReset from "./.views/styles/GlobalReset"
import MainRouter from "./.views/components/routers/MainRouter"
import reportWebVitals from "./reportWebVitals"
import theme from "./.views/styles/theme"

import { firebase } from "./.models/firebase"
import { ThemeProvider } from "@material-ui/core/styles"
import { RootContainer } from "./.views/styles/styles"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalReset />
    <RootContainer>
      <MainRouter history={history} />
    </RootContainer>
  </ThemeProvider>,
  document.getElementById("root")
)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    history.push("/")
  } else {
    history.push("/login")
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
