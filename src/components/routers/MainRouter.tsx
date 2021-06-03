import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
