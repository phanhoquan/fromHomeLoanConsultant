/** @format */

import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";

import qs from "qs";

import UserDetails from "./1-UserDetails/Step01";
import LoanInformation from "./2-LoanInformation";
import ApplicantDetails from "./3-ApplicantDetails";
import KidsOrDependants from "./4-KidsOrDependants";
import EmploymentStatus from "./5-EmploymentStatus(Sole)";
import Liabilities from "./6-Liabilities";
import CreditCards from "./7-CreditCards";
import ResidentialInformation from "./8-ResidentialInformation";
import Assets from "./9-Assets";
import Success from "./Success";
import StepReset from "./PageReset";

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  //Redirect all page not begin

  useEffect(() => {
    beginPage(history, "/refinance-fact-find-v3");
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
          pathname: "/refinance-fact-find-v3",
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
  }, [location]);

  return (
    <section className="form">
      <Switch>
        <Route
          path="/refinance-fact-find-v3/user-details"
          component={UserDetails}
        />
        <Route
          path="/refinance-fact-find-v3/loanInformation"
          component={LoanInformation}
        />
        <Route
          path="/refinance-fact-find-v3/ApplicantDetails"
          component={ApplicantDetails}
        />
        <Route
          path="/refinance-fact-find-v3/KidsOrDependants"
          component={KidsOrDependants}
        />
        <Route
          path="/refinance-fact-find-v3/EmploymentStatus"
          component={EmploymentStatus}
        />
        <Route
          path="/refinance-fact-find-v3/Liabilities"
          component={Liabilities}
        />
        <Route
          path="/refinance-fact-find-v3/CreditCards"
          component={CreditCards}
        />
         <Route
          path="/refinance-fact-find-v3/Assets"
          component={Assets}
        />
        <Route
          path="/refinance-fact-find-v3/ResidentialInformation"
          component={ResidentialInformation}
        />
        <Route path="/refinance-fact-find-v3/step-success" component={Success} />
        <Route path="/refinance-fact-find-v3/step-reset" component={StepReset} />
        <Route path="/refinance-fact-find-v3/" component={UserDetails} />
      </Switch>
    </section>
  );
};

export default Form;
