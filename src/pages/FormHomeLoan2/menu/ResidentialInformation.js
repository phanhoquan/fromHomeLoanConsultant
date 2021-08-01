/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgInfo from "../../../images/menu/info.png";
import imgInfoBlue from "../../../images/menu/info-blue.png";

const ResidentialInformation = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 8 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgInfo}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgInfoBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Residential Information</p>
        {children}
      </div>
    </li>
  );
};

export default ResidentialInformation;
