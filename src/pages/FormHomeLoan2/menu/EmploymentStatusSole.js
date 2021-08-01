/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgEmployment from "../../../images/menu/employment.png";
import imgEmploymentBlue from "../../../images/menu/employment-blue.png";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const EmploymentStatusSole = ({
  children,
  stepActive,
  answerActive,
  jointApplicationStatus,
  handleShowMess,
}) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 5 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() =>
        jointApplicationStatus === types[1]
          ? history.push("/refinance-fact-find-2/EmploymentStatusSole")
          : handleShowMess()
      }
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
