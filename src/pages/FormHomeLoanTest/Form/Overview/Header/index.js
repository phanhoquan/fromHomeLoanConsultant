/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../../../images/life/logo.svg";

const Header = () => {

  return (
    <header className="header header-wrap" id="header">
      <div className="logo">
        <a className="logo__img" href="/refinance-home-loan-consultant-test">
          <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
        </a>
      </div>
      <div className="btn-reset d-flex " style={{ opacity: "1" }}>
        <Button
          className="btnPrimary life min-300 mt-0 w-auto min-h-50"
          onClick={() => {}}
        >
          Book an appointment
          <div className="listAuthorName">
            <a
              className="authorName"
              target="_blank"
              rel="noreferrer"
              href="https://meetings.hubspot.com/bobby-horianto/bobby-horinato-30mins-consultation"
            >
              <p>Bobby Horianto</p>
            </a>
            <a
              className="authorName"
              target="_blank"
              rel="noreferrer"
              href="https://meetings.hubspot.com/robert-scozzafava/rob-scozzafava-30mins-consulatation"
            >
              <p>Rob Scozzafava</p>
            </a>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
