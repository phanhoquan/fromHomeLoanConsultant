/** @format */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const HomeLoan = ({ isShowHeader, isShowFooter, children, className = "" }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Compare Home Loan</title>
      </Helmet>
      <div className="wrapper life-insurance MainRefinanceNow fromHomeLoan">
        {isShowHeader && <Header />}
        <main className={`life-insurance__MainCt ${className}`}>
          {children}
        </main>
        {isShowFooter && <Footer />}
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
