/** @format */

import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";

const HomeLoan = ({ isShowHeader, children, className = "" }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        {isShowHeader && <Header />}
        <main className={`life-insurance__MainCt ${className}`}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
