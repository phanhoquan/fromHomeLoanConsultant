/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../images/life/logo.svg";

const Dashboard = () => {
  const history = useHistory();
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
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
            <a className="logo__img" href="#/">
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
            <div
              className="item"
              role="button"
              onClick={() => history.push("./refinance-fact-find")}
            >
              <div className="item-content">
                <div className="img1" />
                <div className="info">
                  <p>Refinance Home Loan Consultant</p>
                  <div className="group-date">
                    Create date: 16/07/2021
                    <br />
                    Last update: 30/07/2021
                  </div>
                </div>
              </div>
            </div>
            <div className="item ">
              <div className="item-content ">
                <div className="img2 mr-4 mr-md-5" />
                <div className="info">
                  <p>Lead Funnel 02</p>
                  <div className="group-date">
                    Create by: David
                    <br />
                    30/05/2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer footer-life-insurance footerDashboard">
          © 2021 Makescents
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
