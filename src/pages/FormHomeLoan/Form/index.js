/** @format */

import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";
//Calling WOWjs
import qs from "qs";
import WOW from "wowjs";

import Begin from "./Begin";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Refinance/Ten";
import Success from "./Success";

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  //Redirect all page not begin
  useEffect(() => {
    beginPage(history, "/home-loan");
  }, [history]);
  //Redirect all page not begin
  useEffect(() => {
    if (history.action === "POP") {
      setTimeout(() => {
        // clear stores
        const paramOuters = qs.parse(history.location.search, {
          ignoreQueryPrefix: true,
        });
        for (let item in paramOuters) {
          localStorage.setItem(item, paramOuters[item]);
        }
        history.replace({
          pathname: "home-loan",
          search: history.location.search,
          hash: history.location.hash,
        });
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Scroll to archor
  useEffect(() => {
    setTimeout(() => {
      const { hash } = location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }
    }, 300);

    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [location]);

  return (
    <section className="form">
      <Switch>
        <Route path="/home-loan/step-begin" component={Begin} />
        <Route path="/home-loan/step-one" component={First} />
        <Route path="/home-loan/step-two" component={Second} />
        <Route path="/home-loan/step-three" component={Third} />
        <Route path="/home-loan/step-four" component={Four} />
        <Route path="/home-loan/step-five" component={Five} />
        <Route path="/home-loan/step-six" component={Six} />
        <Route path="/home-loan/step-seven" component={Seven} />
        <Route path="/home-loan/step-eight" component={Eight} />
        <Route path="/home-loan/step-nine" component={Nine} />
        <Route path="/home-loan/step-ten" component={Ten} />
        <Route path="/home-loan/step-success" component={Success} />
        <Route path="/home-loan" component={Begin} />
      </Switch>
    </section>
  );
};

export default Form;
