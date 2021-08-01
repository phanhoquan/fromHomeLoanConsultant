/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgApplicant from "../../../images/menu/Applicant.png";
import imgApplicantBlue from "../../../images/menu/Applicant-blue.png";

const ApplicantDetails = ({ children, stepActive }) => {
  return (
    <li
      className={`${stepActive === 3 ? "active answerActive" : ""} `}
      onClick={() => {}}
      role="button"
    >
      <LazyLoadImage
        src={imgApplicant}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgApplicantBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Applicant Details</p>
        {children}
      </div>
    </li>
  );
};

export default ApplicantDetails;
