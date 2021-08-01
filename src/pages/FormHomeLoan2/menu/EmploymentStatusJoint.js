/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgEmployment from "../../../images/menu/employment.png";
import imgEmploymentBlue from "../../../images/menu/employment-blue.png";

const EmploymentStatusJoint = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 5 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() => history.push("/refinance-fact-find-2/EmploymentStatus")}
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
        <p className="question">Employment Status (Joint)</p>
        {children}
      </div>
    </li>
  );
};

export default EmploymentStatusJoint;
