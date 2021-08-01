/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import imgLoan from "../../../images/menu/loan.png";
import imgLoanBlue from "../../../images/menu/loan-blue.png";
import imgArrowBlue from "../../../images/Rounded-Rectangle.png";

const LoanInformation = ({ children, stepActive, answerActive }) => {
  const history = useHistory();
  return (
    <li
      className={`${stepActive === 2 ? "active" : ""} ${
        answerActive && answerActive?.question ? "answerActive" : ""
      }`}
      onClick={() => history.push("/refinance-fact-find-2/loanInformation")}
      role="button"
    >
      <LazyLoadImage src={imgArrowBlue} alt="" className="arrowBlue" />
      <LazyLoadImage
        src={imgLoan}
        alt=""
        width="25"
        height="25"
        className="light"
      />
      <LazyLoadImage
        src={imgLoanBlue}
        alt=""
        width="25"
        height="25"
        className="blue"
      />
      <div className="wrap-question ml-3 mt-1">
        <p className="question">Loan Information</p>
        {children}
      </div>
    </li>
  );
};

export default LoanInformation;
