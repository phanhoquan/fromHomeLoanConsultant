/** @format */

import React, { lazy, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";
const HomeLoan = lazy(() => import("./FormHomeLoan/Form"));

const Router = () => {
  const { listen } = useHistory();
  
  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return;
      window.gtag("config", "GTM-TC9KTLT", {
        page_path: location.pathname,
      });
    });
    return unlisten;
  }, [listen]);

  return (
    <Switch>
      <Route path="/home-loan">
        <HomeLoan />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;
