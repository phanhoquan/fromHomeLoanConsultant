/** @format */

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../images/life/logo.svg";
import { redirectTo } from "../../../utils/beginPage";
import imgReset from "../../../images/reload.png";
import imgResetWhite from "../../../images/reload-white.png";
import imgAuthor from "../../../images/booking.png";
import imgAuthorWhite from "../../../images/booking-white.png";
import Modal from "../../Modal/Modal";

const Header = ({ hiddenAction = false }) => {
  // custom header sticky
  const [isShowModal, setIsShowModal] = useState(false);
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
  const handleReset = () => {
    redirectTo("/refinance-home-loan-consultant-test");
    setIsShowModal(false);
  };

  return (
    <>
      <header
        className="header header-wrap home-loan border-bottom-0 ovl-header"
        id="header"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="logo">
          <a className="logo__img" href="/">
            <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
          </a>
        </div>
        {!hiddenAction ? (
          <div className="btn-reset d-flex " style={{ opacity: "1" }}>
            <Button
              className="btnPrimary life min-300 mt-0 w-auto min-h-50 btn-white btnResetWhite color-black"
              onClick={() => {}}
            >
              <img src={imgAuthor} alt="" className="imgResetBlue mr-3" />
              <img src={imgAuthorWhite} alt="" className="imgResetWhite mr-3" />
              BOOK MEETING
              <a
                className="authorName"
                target="_blank"
                rel="noreferrer"
                href="https://meetings.hubspot.com/robert-scozzafava/rob-scozzafava-30mins-consulatation"
              >
                <p>Rob Scozzafava</p>
              </a>
            </Button>
            <Button
              className="btnPrimary life width-50 mt-0 w-auto min-h-50 btn-white btnResetWhite"
              onClick={() => setIsShowModal(true)}
            >
              <img
                src={imgReset}
                title="Reset"
                alt=""
                className="imgResetBlue"
              />
              <img
                src={imgResetWhite}
                title="Reset"
                alt=""
                className="imgResetWhite"
              />
            </Button>
          </div>
        ) : (
          ""
        )}
      </header>
      <Modal
        isShow={isShowModal}
        handleClose={() => setIsShowModal(false)}
        handleSubmit={() => handleReset()}
      />
    </>
  );
};

export default Header;
