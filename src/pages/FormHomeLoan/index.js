/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";

const HomeLoan = ({ isShowHeader, children, className = "", activeStep }) => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  const history = useHistory();
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const renderListQuestion =
    listDataSubmit &&
    listDataSubmit.map((item, index) => {
      const idItem =
        item.id < 10 ? `0${item.id}` : item.id === 28 ? item.menu : item.id;
      return (
        <>
          <li
            key={item.id}
            className={`${activeStep === item.id ? "active " : ""} ${
              item.answer ? " answerActive" : ""
            }${item.skip && !item.question ? " answerSkip" : ""}
      `}
            onClick={() => history.push(`/refinance-fact-find/step-${idItem}`)}
            role="button"
          >
            <div className={` step`}>Step {item.id}</div>
            <div className="wrap-question">
              <p className="question">
                {item.question || item.question2 || ""}
              </p>
              <p className="answer">
                {item.answer || item.answer2 || item.skip}
              </p>
            </div>
          </li>
          {item?.id === 21 || item?.id === 28 || item?.id === 30 ? (
            <li
              key={index}
              onClick={() =>
                history.push(`/refinance-fact-find/step-${idItem}`)
              }
              className={`${item.skip && !item.question2 ? " answerSkip" : ""}
      `}
              role="button"
            >
              <div className={` step`}></div>
              <div className="wrap-question">
                <p className="question">{item.question2 || ""}</p>
                <p className="answer">{item.answer2 || item.skip}</p>
              </div>
            </li>
          ) : (
            ""
          )}
        </>
      );
    });

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
                  onClick={() => history.push(`/refinance-fact-find/step-01`)}
                  role="button"
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
