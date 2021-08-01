/** @format */

import React, { useState } from "react";
import LifeInsurance from "../../index";

import Step02 from "./Step02";
import Step03A from "./Step03-1";
import Step03B from "./Step03-2";
import Step03C from "./Step03-3";

const LoanInformation = () => {
  const [loan2currentLoanStatus, setLoan2currentLoanStatus] = useState(
    localStorage.getItem("loan2currentLoanStatus") || ""
  );
  const handelGetLoan2currentLoanStatus = (option) => {
    setLoan2currentLoanStatus(option);
    localStorage.setItem("loan2valueInterestRate", "");
    localStorage.setItem("loan2valueInterestRate2Variable", "");
    localStorage.setItem("loan2valueInterestRateSplit", "");
    localStorage.setItem("loan2valueInterestRate2Split", "");
  };

  return (
    <LifeInsurance activeStep={2}>
      <Step02
        handelGetLoan2currentLoanStatus={handelGetLoan2currentLoanStatus}
      />
      <Step03A loan2currentLoanStatus={loan2currentLoanStatus} />
      <Step03B loan2currentLoanStatus={loan2currentLoanStatus} />
      <Step03C loan2currentLoanStatus={loan2currentLoanStatus} />
    </LifeInsurance>
  );
};

export default LoanInformation;
