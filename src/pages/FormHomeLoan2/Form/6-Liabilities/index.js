/** @format */

import React, { useState, useMemo } from "react";
import LifeInsurance from "../../index";

import Step26 from "./Step26";
import Step27A from "./Step27a";
import Step27B from "./Step27B";
import Step27C from "./Step27C";

const Liabilities = () => {
  let listMenuStep7 = localStorage.getItem("listMenuStep7")
    ? JSON.parse(localStorage.getItem("listMenuStep7"))
    : [];

  const [dataListMenuStep7, setDataListMenuStep7] = useState(
    listMenuStep7 || []
  );

  const [loan2value, setLoan2value] = useState({
    personalLoansStatus: localStorage.getItem("loan2personalLoansStatus")
      ? localStorage.getItem("loan2personalLoansStatus").split(",")
      : [],
    personalLoan: localStorage.getItem("loan2personalLoan") || "",
    personalLoanAmount: localStorage.getItem("loan2personalLoanAmount") || "",
    carLoan: localStorage.getItem("loan2carLoan") || "",
    carLoanAmount: localStorage.getItem("loan2carLoanAmount") || "",
    HECSDebt: localStorage.getItem("loan2HECSDebt") || "",
    HECSDebtAmount: localStorage.getItem("loan2HECSDebtAmount") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "personalLoansStatus") {
      window.localStorage.setItem("loan2personalLoan", "");
      window.localStorage.setItem("loan2personalLoanAmount", "");
      window.localStorage.setItem("loan2carLoan", "");
      window.localStorage.setItem("loan2carLoanAmount", "");
      window.localStorage.setItem("loan2HECSDebt", "");
      window.localStorage.setItem("loan2HECSDebtAmount", "");
    }
  };
  const {
    personalLoansStatus,
    personalLoan,
    personalLoanAmount,
    carLoan,
    carLoanAmount,
    HECSDebt,
    HECSDebtAmount,
  } = loan2value;
  const step7 = [
    {
      id: 1,
      question: `${
        personalLoansStatus?.length > 0
          ? "26. Are you currently paying off any personal loans, car loans or HECS debt?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        personalLoan ? "27. Which institution is the personal loan with?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        personalLoanAmount
          ? "28. What is the limit on the personal loan amount?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${
        carLoan ? "29. Which institution is the car loan with?" : ""
      }`,
    },
    {
      id: 5,
      question: `${
        carLoanAmount ? "30. What is the limit on the car loan amount?" : ""
      }`,
    },
    {
      id: 6,
      question: `${
        HECSDebt ? "31. Which institution is the HECS debt with?" : ""
      }`,
    },
    {
      id: 7,
      question: `${
        HECSDebtAmount ? "32. What is the limit on the HECS Debt amount?" : ""
      }`,
    },
  ];

  useMemo(() => {
    if (
      personalLoansStatus ||
      personalLoan ||
      personalLoanAmount ||
      carLoan ||
      carLoanAmount ||
      HECSDebt ||
      HECSDebtAmount
    ) {
      setDataListMenuStep7(step7);
    }
    window.localStorage.setItem("listMenuStep7", JSON.stringify(step7));
    // eslint-disable-next-line
  }, [
    personalLoansStatus,
    personalLoan,
    personalLoanAmount,
    carLoan,
    carLoanAmount,
    HECSDebt,
    HECSDebtAmount,
  ]);

  return (
    <LifeInsurance
      activeStep={6}
      listMenuStep7={dataListMenuStep7}
      numberScroll={1800}
    >
      <Step26 handleGetLoan2value={handleGetLoan2value} />
      <Step27A
        handleGetLoan2value={handleGetLoan2value}
        personalLoansStatus={loan2value?.personalLoansStatus}
      />
      <Step27B
        handleGetLoan2value={handleGetLoan2value}
        personalLoansStatus={loan2value?.personalLoansStatus}
      />
      <Step27C
        handleGetLoan2value={handleGetLoan2value}
        personalLoansStatus={loan2value?.personalLoansStatus}
      />
    </LifeInsurance>
  );
};

export default Liabilities;
