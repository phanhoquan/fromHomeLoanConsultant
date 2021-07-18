/** @format */

import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";
//Calling WOWjs
import qs from "qs";
import WOW from "wowjs";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";
import Step05 from "./Step05";
import Step06 from "./Step06";
import Step07 from "./Step07";
import Step08 from "./Step08";
import Step09 from "./Step09";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step13 from "./Step13";
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
        <Route path="/refinance-fact-find/step-01" component={Step01} />
        <Route path="/refinance-fact-find/step-02" component={Step02} />
        <Route path="/refinance-fact-find/step-03" component={Step03} />
        <Route path="/refinance-fact-find/step-04" component={Step04} />
        <Route path="/refinance-fact-find/step-05" component={Step05} />
        <Route path="/refinance-fact-find/step-06" component={Step06} />
        <Route path="/refinance-fact-find/step-07" component={Step07} />
        <Route path="/refinance-fact-find/step-08" component={Step08} />
        <Route path="/refinance-fact-find/step-09" component={Step09} />
        <Route path="/refinance-fact-find/step-10" component={Step10} />
        <Route path="/refinance-fact-find/step-11" component={Step11} />
        <Route path="/refinance-fact-find/step-12" component={Step12} />
        <Route path="/refinance-fact-find/step-13" component={Step13} />
        <Route path="/refinance-fact-find/step-success" component={Success} />
        <Route path="/refinance-fact-find" component={Step13} />
      </Switch>
    </section>
  );
};

export default Form;
