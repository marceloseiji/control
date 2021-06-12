import React, { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import AuthContext from "../../contexts/AuthContext";
import { firebase } from "../../../.models/firebase";

const MainRouter = ({ history }: any) => {
  const [user, setUser] = useState({});

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  return (
    <AuthContext.Provider value={user}>
      <Router history={history}>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </AuthContext.Provider>
  );
};

export default MainRouter;
