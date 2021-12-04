/** @format */

import React from "react";
// import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Form from "./Form"

const HomeLoan = () => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  // const history = useHistory();

  return (
    <React.Fragment>
      <Helmet>
        <title>Submit Processing Request</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan submit-processing-request">
        <div className="container">
          <Header />
          <Form/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
