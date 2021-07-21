/** @format */

import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";
//Calling WOWjs
import qs from "qs";
// import WOW from "wowjs";

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
import Step14 from "./Step14";
import Step15 from "./Step15";
import Step16 from "./Step16";
import Step17 from "./Step17";
import Step18 from "./Step18";
import Step19 from "./Step19";
import Step20 from "./Step20";
import Step21 from "./Step21";
import Step22 from "./Step22";
import Step23 from "./Step23";
import Step24 from "./Step24";
import Step25 from "./Step25";
import Step26 from "./Step26";
import Step27 from "./Step27";
import Step27A from "./Step27a";
import Step27B from "./Step27B";
import Step27C from "./Step27C";
import Step28 from "./Step28";
import Step29 from "./Step29";
import Step30 from "./Step30";
import Step31 from "./Step31";
import Step32 from "./Step32";
import StepReset from "./PageReset";
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
          pathname: "/refinance-fact-find",
          search: history.location.search,
          hash: history.location.hash,
        });
      }, 0);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

    // const wow = new WOW.WOW({
    //   live: false,
    //   mobile: false,
    // });
    // wow.init();
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
        <Route path="/refinance-fact-find/step-14" component={Step14} />
        <Route path="/refinance-fact-find/step-15" component={Step15} />
        <Route path="/refinance-fact-find/step-16" component={Step16} />
        <Route path="/refinance-fact-find/step-17" component={Step17} />
        <Route path="/refinance-fact-find/step-18" component={Step18} />
        <Route path="/refinance-fact-find/step-19" component={Step19} />
        <Route path="/refinance-fact-find/step-20" component={Step20} />
        <Route path="/refinance-fact-find/step-21" component={Step21} />
        <Route path="/refinance-fact-find/step-22" component={Step22} />
        <Route path="/refinance-fact-find/step-23" component={Step23} />
        <Route path="/refinance-fact-find/step-24" component={Step24} />
        <Route path="/refinance-fact-find/step-25" component={Step25} />
        <Route path="/refinance-fact-find/step-26" component={Step26} />
        <Route path="/refinance-fact-find/step-27" component={Step27} />
        <Route path="/refinance-fact-find/step-27a" component={Step27A} />
        <Route path="/refinance-fact-find/step-27B" component={Step27B} />
        <Route path="/refinance-fact-find/step-27C" component={Step27C} />
        <Route path="/refinance-fact-find/step-28" component={Step28} />
        <Route path="/refinance-fact-find/step-29" component={Step29} />
        <Route path="/refinance-fact-find/step-30" component={Step30} />
        <Route path="/refinance-fact-find/step-31" component={Step31} />
        <Route path="/refinance-fact-find/step-32" component={Step32} />
        <Route path="/refinance-fact-find/step-success" component={Success} />
        <Route path="/refinance-fact-find/step-reset" component={StepReset} />
        <Route path="/refinance-fact-find" component={Step01} />
      </Switch>
    </section>
  );
};

export default Form;
