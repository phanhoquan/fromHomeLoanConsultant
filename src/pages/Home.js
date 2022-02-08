/** @format */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../images/life/logo.svg";

const Dashboard = () => {
  const history = useHistory();
  const typeStep = {
    1: "step1",
    2: "step2",
  };
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  const [activeStepPage, setActiveStepPage] = useState(typeStep[1]);

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard Home Loan Consultant</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        <header
          className="header header-wrap home-loan"
          style={{
            backgroundColor: "#ecf2fb",
            boxShadow: "2px 5px 5px #ecf2fb",
          }}
        >
          <div className="logo">
            <a className="logo__img" href="/">
              <LazyLoadImage
                src={imgLogo}
                alt="logo"
                width="100%"
                height="66"
              />
            </a>
          </div>
        </header>

        <main className="life-insurance__MainCt pageDashboard">
          <div className="Dashboard">
            <h2>Welcome!</h2>
            <p>Please select the form below to Get Started</p>
            {activeStepPage === typeStep[1] ? (
              <div className="content-box">
                <div
                  className="item "
                  role="button"
                  onClick={() => setActiveStepPage(typeStep[2])}
                >
                  <div className="item-content ">
                    <div className="img2 mr-3 pr-1" />
                    <div className="info">
                      <p>Home Loan Consultants</p>
                    </div>
                  </div>
                </div>
                <div
                  className="item "
                  role="button"
                  onClick={() => history.push("./submit-processing-request")}
                >
                  <div className="item-content ">
                    <div className="img2 mortgage-brokers mr-3 pr-1" />
                    <div className="info">
                      <p>Mortgage Brokers</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
              <div className="content-box">
                <div
                  className="item "
                  role="button"
                  onClick={() => history.push("./refinance-fact-find-v3")}
                >
                  <div className="item-content text-center">
                    <div className="info">
                      <p>Refinance Home Loan Consultant 3</p>
                    </div>
                  </div>
                </div>
                <div
                  className="item "
                  role="button"
                  onClick={() => history.push("./refinance-fact-find-3")}
                >
                  <div className="item-content text-center ">
                    <div className="info">
                      <p>Zabee Refinance HLC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
              className="item pr-3"
              role="button"
              onClick={() => history.push("./refinance-home-loan-consultant-test")}
            >
              <div className="item-content text-center">
                <div className="info">
                  <p>Refinance Test</p>
                </div>
              </div>
            </div>
              </>
            )}
          </div>
        </main>
        <footer className="footer footer-life-insurance footerDashboard">
          <div className="btn-logout mb-4" role="button" onClick={handleLogOut}>
            Logout
          </div>
          © 2021 Makescents
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
