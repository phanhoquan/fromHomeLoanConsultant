/** @format */

import React, { useState, useMemo } from "react";
import LifeInsurance from "../../index";

import Step02 from "./Step02";
import Step03A from "./Step03-1";
import Step03B from "./Step03-2";
import Step03C from "./Step03-3";

const LoanInformation = () => {
  const [loan2currentLoanStatus, setLoan2currentLoanStatus] = useState(
    localStorage.getItem("loan2currentLoanStatus") || ""
  );
  let listMenuStep2 = localStorage.getItem("listMenuStep2")
    ? JSON.parse(localStorage.getItem("listMenuStep2"))
    : [];

  const [dataListMenuStep2, setDataListMenuStep2] = useState(
    listMenuStep2 || []
  );
  const [loan2value, setLoan2value] = useState({
    interestRate: localStorage.getItem("loan2valueInterestRate") || "",
    interestRate2Variable:
      localStorage.getItem("loan2valueInterestRate2Variable") || "",
    interestRateSplit:
      localStorage.getItem("loan2valueInterestRateSplit") || "",
    interestRate2Split:
      localStorage.getItem("loan2valueInterestRate2Split") || "",
  });

  const handelGetLoan2currentLoanStatus = (option) => {
    setLoan2currentLoanStatus(option);
    localStorage.setItem("loan2valueInterestRate", "");
    localStorage.setItem("loan2valueInterestRate2Variable", "");
    localStorage.setItem("loan2valueInterestRateSplit", "");
    localStorage.setItem("loan2valueInterestRate2Split", "");
  };

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };

  const {
    interestRate,
    interestRate2Variable,
    interestRateSplit,
    interestRate2Split,
  } = loan2value;
  const step2 = [
    {
      id: 1,
      question: `${
        loan2currentLoanStatus
          ? "2. Is the loan you currently have Fixed, Variable or Split?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        interestRate ||
        interestRate2Variable ||
        interestRateSplit ||
        interestRate2Split
          ? "3. What is the current interest rate you are paying on your loan?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (loan2currentLoanStatus) {
      setDataListMenuStep2(step2);
    }
    window.localStorage.setItem("listMenuStep2", JSON.stringify(step2));
    // eslint-disable-next-line
  }, [
    loan2currentLoanStatus,
    interestRate,
    interestRate2Variable,
    interestRateSplit,
    interestRate2Split,
  ]);

  return (
    <LifeInsurance activeStep={2} listMenuStep2={dataListMenuStep2}>
      <Step02
        handelGetLoan2currentLoanStatus={handelGetLoan2currentLoanStatus}
      />
      <Step03A
        loan2currentLoanStatus={loan2currentLoanStatus}
        handleGetLoan2value={handleGetLoan2value}
      />
      <Step03B
        loan2currentLoanStatus={loan2currentLoanStatus}
        handleGetLoan2value={handleGetLoan2value}
      />
      <Step03C
        loan2currentLoanStatus={loan2currentLoanStatus}
        handleGetLoan2value={handleGetLoan2value}
      />
    </LifeInsurance>
  );
};

export default LoanInformation;
