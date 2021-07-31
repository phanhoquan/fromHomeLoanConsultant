/** @format */

import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../images/life/logo.svg";

const Header = ({ handleSubmit }) => {
  // custom header sticky
  useEffect(() => {
    const elementHeader = document.getElementById("header");
    const sticky = elementHeader?.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window && window.pageYOffset > sticky + 60) {
        elementHeader.classList.add("sticky");
      } else {
        elementHeader.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <>
      <header
        className="header header-wrap home-loan border-bottom-0"
        id="header"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="logo">
          <a className="logo__img" href="/">
            <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
          </a>
        </div>
        <div className="btn-reset" style={{ opacity: "1" }}>
          <Button
            className="btnPrimary life min-150 mt-0 w-auto"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
