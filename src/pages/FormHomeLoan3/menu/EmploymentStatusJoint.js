/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgEmployment from "../../../images/menu/employment.png";
import imgEmploymentBlue from "../../../images/menu/employment-blue.png";
import imgArrowBlue from "../../../images/Rounded-Rectangle.png";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const EmploymentStatusJoint = ({
  children,
  stepActive,
  answerActive,
  jointApplicationStatus,
  handleShowMess,
}) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 5.1 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() =>
        jointApplicationStatus === types[2]
          ? history.push("/refinance-fact-find-3/EmploymentStatusJoint")
          : handleShowMess()
      }
      role="button"
    >
      <LazyLoadImage src={imgArrowBlue} alt="" className="arrowBlue" />
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
