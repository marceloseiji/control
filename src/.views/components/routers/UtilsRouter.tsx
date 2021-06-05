import React from "react";
import { Router, Route } from "react-router-dom";

const MainRouter = ({ history }: any) => {
  return (
    <Router history={history}>
      <Route path="/links" />
      <Route path="/systems" />
    </Router>
  );
};

export default MainRouter;
