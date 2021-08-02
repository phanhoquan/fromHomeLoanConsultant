/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import { redirectTo } from "../../../utils/beginPage";
import Header from "../Header";
import { Helmet } from "react-helmet";

const PageReset = () => {
  var root = document.getElementsByTagName("html")[0];
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }

  const onClickReset = () => {
    redirectTo("/refinance-fact-find-2/");
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Thank you for your submission!</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
        <Header />

        <main className="life-insurance__MainCt">
          <div style={{ marginTop: "12%" }}>
            <h2 className="mb-4">Thank you for your submission!</h2>
            <Button
              className="btnPrimary life wow fadeInUp in-progress w-auto"
              type="next"
              onClick={onClickReset}
            >
              Start Over
            </Button>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default PageReset;
