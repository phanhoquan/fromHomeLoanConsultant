/** @format */

import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import FormIndex from "./Form/index";

const HomeLoan = ({ className = "" }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant 2</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        <Header />
        <main className={`life-insurance__MainCt ${className}`}>
          <FormIndex />
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
