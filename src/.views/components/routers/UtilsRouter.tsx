import React from "react"
import { Router, Route } from "react-router-dom"
import UtilsLinks from "../utils/UtilsLinks"

const MainRouter = ({ history }: any) => {
  return (
    <Router history={history}>
      <Route path="/links" component={UtilsLinks} />
      <Route path="/systems" />
    </Router>
  )
}

export default MainRouter
