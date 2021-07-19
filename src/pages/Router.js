/** @format */

import React, { lazy, useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import HomePage from "./Home";
const HomeLoan = lazy(() => import("./FormHomeLoan/Form"));
const Login = lazy(() => import("./Login"));

const Router = () => {
  const { listen } = useHistory();
  const token = localStorage.getItem("isLogin");
  const [isLogin, setIsLogin] = useState(token || "");
  const isAuthenticated = isLogin === "1";

  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return;
      window.gtag("config", "GTM-TC9KTLT", {
        page_path: location.pathname,
      });
    });
    return unlisten;
    // eslint-disable-next-line
  }, [listen]);

  const handleGetIsLogin = (value) => {
    setIsLogin(value);
  };

  return (
    <Switch>
      <PrivateRoute
        exact
        path="/refinance-fact-find/"
        component={HomeLoan}
        isAuthenticated={isAuthenticated}
      />
      <PrivateRoute
        exact
        path="/refinance-fact-find/*"
        component={HomeLoan}
        isAuthenticated={isAuthenticated}
      />
      <PrivateRoute
        exact
        path="/"
        component={HomePage}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/login">
        <Login handleGetIsLogin={handleGetIsLogin} />
      </Route>
    </Switch>
  );
};

export default Router;
