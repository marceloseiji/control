import React, { useState, useEffect, useContext } from "react"
import { Router, Route } from "react-router-dom"
import MainPage from "../pages/MainPage"
import LoginPage from "../pages/LoginPage"
import { firebase } from "../../../.models/firebase"
import SnackBar from "../../components/global/SnackBar"
import GlobalContext from "../../../contexts/GlobalContext"
import AuthContext from "../../../contexts/AuthContext"

const MainRouter = ({ history }: any) => {
  const [user, setUser] = useState({})
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    message: "Snack message",
  })

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    }
  })

  return (
    <AuthContext.Provider value={user}>
      <GlobalContext.Provider value={{ snack, setSnack }}>
        <SnackBar />
        <Router history={history}>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </GlobalContext.Provider>
    </AuthContext.Provider>
  )
}

export default MainRouter
