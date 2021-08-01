/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgInfo from "../../../images/menu/info.png";
import imgInfoBlue from "../../../images/menu/info-blue.png";

const ResidentialInformation = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 8 ? "active" : ""} ${
        answerActive ? "answerActive" : ""
      }`}
      onClick={() =>
        history.push("/refinance-fact-find-2/ResidentialInformation")
      }
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
