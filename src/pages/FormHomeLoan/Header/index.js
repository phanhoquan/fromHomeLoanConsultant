/** @format */

import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../images/life/logo.svg";
import { useHistory } from "react-router-dom";
import imgReset from "../../../images/life/reset.svg";
import Modal from "../../Modal/Modal";

const Header = () => {
  const history = useHistory();
  const [isShowModal, setIsShowModal] = useState(false);

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

  const handleReset = () => {
    localStorage.clear();
    history.push({
      pathname: `/refinance-fact-find`,
    });
    setIsShowModal(false);
  };

  return (
    <>
      <header className="header header-wrap home-loan" id="header">
        <div className="logo">
          <a className="logo__img" href="#/">
            <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
          </a>
        </div>
        <div className="btn-reset" onClick={() => setIsShowModal(true)}>
          <LazyLoadImage src={imgReset} alt="Reset" width="130" height="45" />
        </div>
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
