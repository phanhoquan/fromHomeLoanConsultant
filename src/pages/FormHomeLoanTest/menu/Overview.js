/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgLiabilities from "../../../images/menu/Liabilities.png";
import imgLiabilitiesBlue from "../../../images/menu/Liabilities-blue.png";
import imgArrowBlue from "../../../images/Rounded-Rectangle.png";

const Overviews = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 6 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() => history.push("/refinance-home-loan-consultant-test/overview")}
      role="button"
    >
      <LazyLoadImage src={imgArrowBlue} alt="" className="arrowBlue" />
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
        <p className="question">Overview</p>
        {children}
      </div>
    </li>
  );
};

export default Overviews;
