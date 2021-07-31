/** @format */

import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";

import qs from "qs";

import UserDetails from "./1-UserDetails/Step01";
import LoanInformation from "./2-LoanInformation";
import ApplicantDetails from "./3-ApplicantDetails";
import KidsOrDependants from "./4-KidsOrDependants";
import EmploymentStatus from "./5-EmploymentStatus";
// import Success from "./Success";

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  //Redirect all page not begin

  useEffect(() => {
    beginPage(history, "/refinance-fact-find-2");
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
          pathname: "/refinance-fact-find-2",
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
          path="/refinance-fact-find-2/user-details"
          component={UserDetails}
        />
        <Route
          path="/refinance-fact-find-2/loanIn-formation"
          component={LoanInformation}
        />
        <Route
          path="/refinance-fact-find-2/ApplicantDetails"
          component={ApplicantDetails}
        />
        <Route
          path="/refinance-fact-find-2/KidsOrDependants"
          component={KidsOrDependants}
        />
        <Route
          path="/refinance-fact-find-2/EmploymentStatus"
          component={EmploymentStatus}
        />

        <Route path="/refinance-fact-find-2" component={EmploymentStatus} />
      </Switch>
    </section>
  );
};

export default Form;