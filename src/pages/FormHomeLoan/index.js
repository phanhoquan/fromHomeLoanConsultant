/** @format */

import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";

const HomeLoan = ({ isShowHeader, children, className = "", activeStep }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const renderListQuestion =
    listDataSubmit &&
    listDataSubmit.map((item, index) => (
      <li
        key={item.id}
        className={`${activeStep === 1 ? "active " : ""} ${
          item.answer ? " answerActive" : ""
        }${item.skip ? " answerSkip" : ""}

      `}
      >
        <div className={` step`}>Step {index + 2}</div>
        <div className="wrap-question">
          <p className="question">{item.question || item.question2 || ""}</p>
          <p className="answer">{item.answer || item.answer2 || item.skip}</p>
        </div>
      </li>
    ));

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        {isShowHeader && <Header />}
        <main className={`life-insurance__MainCt ${className}`}>
          {localStorage.getItem("firstName") ||
          localStorage.getItem("skip1") ||
          listDataSubmit?.length > 0 ? (
            <div className="nav-left">
              <div className="nav-detail">
                <p>User Detail:</p>
                User name: {localStorage.getItem("firstName")}{" "}
                {localStorage.getItem("lastName")}
                <br />
                Email: {localStorage.getItem("email")}
              </div>
              <ul className="listAnswer">
                <li
                  className={`${activeStep === 1 ? "active " : ""} 
                ${
                  localStorage.getItem("employmentStatus")
                    ? " answerActive"
                    : ""
                }
                ${localStorage.getItem("skip1") ? " answerSkip" : ""}

                `}
                >
                  <div className={` step`}>Step 1</div>
                  <div className="wrap-question">
                    <p className="question">
                      {localStorage.getItem("questionStep1")}
                    </p>
                    <p className="answer">
                      {localStorage.getItem("employmentStatus") ||
                        localStorage.getItem("skip1")}
                    </p>
                  </div>
                </li>
                {renderListQuestion}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div
            className={`${
              localStorage.getItem("firstName") || listDataSubmit?.length > 0
                ? "nav-right"
                : ""
            } `}
          >
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
