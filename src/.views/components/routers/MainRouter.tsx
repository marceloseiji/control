import React from "react";
import { Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

const MainRouter = ({ history }: any) => {
  return (
    <Router history={history}>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};

export default MainRouter;
