/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgEmployment from "../../../images/menu/employment.png";
import imgEmploymentBlue from "../../../images/menu/employment-blue.png";

const EmploymentStatusSole = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 5 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgEmployment}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgEmploymentBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Employment Status (Sole)</p>
        {children}
      </div>
    </li>
  );
};

export default EmploymentStatusSole;
