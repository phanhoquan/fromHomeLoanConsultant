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
          <div className="nav-left">
            <div className="nav-detail">
              <p>User Detail:</p>
              User name: Jonathan Doe <br />
              Email: Samplemail@mail.com
            </div>
            <ul className="listAnswer">
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
              <li>
                <div className="step">Step 1</div>
                <div className="wrap-question">
                  <p className="question">Are you currently employed?</p>
                  <p className="answer">Full Time</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-right">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
