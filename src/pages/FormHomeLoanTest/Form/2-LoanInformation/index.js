/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step02 from "./Step02";
import Step03A from "./Step03-1";
import Step03B from "./Step03-2";
import Step03C from "./Step03-3";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const LoanInformation = () => {
  const history = useHistory();
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
    if (option !== loan2currentLoanStatus) {
      localStorage.setItem("loan2valueInterestRate", "");
      localStorage.setItem("loan2valueInterestRate2Variable", "");
      localStorage.setItem("loan2valueInterestRateSplit", "");
      localStorage.setItem("loan2valueInterestRate2Split", "");
      setLoan2value({
        interestRate: "",
        interestRate2Variable: "",
        interestRateSplit: "",
        interestRate2Split: "",
      });
    }
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
    if (
      loan2currentLoanStatus ||
      interestRate ||
      interestRate2Variable ||
      interestRateSplit ||
      interestRate2Split
    ) {
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

  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/ApplicantDetails");
  };

  return (
    <LifeInsurance activeStep={2} listMenuStep2={dataListMenuStep2}>
      <Step02
        handelGetLoan2currentLoanStatus={handelGetLoan2currentLoanStatus}
      />
      {loan2currentLoanStatus === types[1] ? (
        <Step03A handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      {loan2currentLoanStatus === types[2] ? (
        <Step03B handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      {loan2currentLoanStatus === types[3] ? (
        <Step03C handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      <div className="group-btn-footer col d-flex justify-content-center mb-5 mt-3">
        <Button
          className="btnPrimary life wow fadeInUp mt-0 in-progress"
          type="next"
          onClick={onClickNext}
        >
          NEXT
        </Button>
      </div>
    </LifeInsurance>
  );
};

export default LoanInformation;
