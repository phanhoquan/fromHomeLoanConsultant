/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLiabilities from "../../../images/menu/Liabilities.png";
import imgLiabilitiesBlue from "../../../images/menu/Liabilities-blue.png";

const Liabilities = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 6 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgLiabilities}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgLiabilitiesBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Liabilities</p>
        {children}
      </div>
    </li>
  );
};

export default Liabilities;
