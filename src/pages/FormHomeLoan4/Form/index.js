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
import Success from "./Success";
import StepReset from "./PageReset";

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  //Redirect all page not begin

  useEffect(() => {
    beginPage(history, "/updated-hlc-consultant-4");
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
          pathname: "/updated-hlc-consultant-4",
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
          path="/updated-hlc-consultant-4/user-details"
          component={UserDetails}
        />
        <Route
          path="/updated-hlc-consultant-4/loanInformation"
          component={LoanInformation}
        />
        <Route
          path="/updated-hlc-consultant-4/ApplicantDetails"
          component={ApplicantDetails}
        />
        <Route
          path="/updated-hlc-consultant-4/KidsOrDependants"
          component={KidsOrDependants}
        />
        <Route
          path="/updated-hlc-consultant-4/EmploymentStatus"
          component={EmploymentStatus}
        />
        <Route
          path="/updated-hlc-consultant-4/Liabilities"
          component={Liabilities}
        />
        <Route
          path="/updated-hlc-consultant-4/CreditCards"
          component={CreditCards}
        />
        <Route
          path="/updated-hlc-consultant-4/ResidentialInformation"
          component={ResidentialInformation}
        />
        <Route path="/updated-hlc-consultant-4/step-success" component={Success} />
        <Route path="/updated-hlc-consultant-4/step-reset" component={StepReset} />
        <Route path="/updated-hlc-consultant-4/" component={UserDetails} />
      </Switch>
    </section>
  );
};

export default Form;
