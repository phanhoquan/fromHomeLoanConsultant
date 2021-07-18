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
    beginPage(history, "/refinance-fact-find");
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
          pathname: "refinance-fact-find",
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
        <Route path="/refinance-fact-find/step-begin" component={Begin} />
        <Route path="/refinance-fact-find/step-one" component={First} />
        <Route path="/refinance-fact-find/step-two" component={Second} />
        <Route path="/refinance-fact-find/step-three" component={Third} />
        <Route path="/refinance-fact-find/step-four" component={Four} />
        <Route path="/refinance-fact-find/step-five" component={Five} />
        <Route path="/refinance-fact-find/step-six" component={Six} />
        <Route path="/refinance-fact-find/step-seven" component={Seven} />
        <Route path="/refinance-fact-find/step-eight" component={Eight} />
        <Route path="/refinance-fact-find/step-nine" component={Nine} />
        <Route path="/refinance-fact-find/step-ten" component={Ten} />
        <Route path="/refinance-fact-find/step-success" component={Success} />
        <Route path="/refinance-fact-find" component={Begin} />
      </Switch>
    </section>
  );
};

export default Form;
