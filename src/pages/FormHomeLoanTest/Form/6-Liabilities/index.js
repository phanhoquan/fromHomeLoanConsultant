/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step26 from "./Step26";
import Step27 from "./Step27";
import Step27A from "./Step27a";
import Step27B from "./Step27B";
import Step32A from "./Step32a";
import Step27C from "./Step27C";

export const types = {
  1: "Personal Loans",
  2: "Car Loans",
  3: "HECS debt",
  4: "None of the above",
};

const Liabilities = () => {
  const history = useHistory();
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

    loan2personalLoanMonthly: localStorage.getItem("loan2personalLoanMonthly") || "",

    carLoan: localStorage.getItem("loan2carLoan") || "",
    carLoanAmount: localStorage.getItem("loan2carLoanAmount") || "",

    carLoanMonthly: localStorage.getItem("loan2carLoanMonthly") || "",

    HECSDebt: localStorage.getItem("loan2HECSDebt") || "",
    HECSDebtAmount: localStorage.getItem("loan2HECSDebtAmount") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "personalLoansStatus") {
      if (!value?.includes(types[1])) {
        setLoan2value({
          ...loan2value,
          personalLoansStatus: value,
          personalLoan: "",
          personalLoanAmount: "",
        });

        window.localStorage.setItem("loan2personalLoan", "");
        window.localStorage.setItem("loan2personalLoanAmount", "");
        window.localStorage.setItem("loan2personalLoanMonthly", "");
      }

      if (!value?.includes(types[2])) {
        setLoan2value({
          ...loan2value,
          personalLoansStatus: value,
          carLoanLoan: "",
          personalLoanAmount: "",
        });

        window.localStorage.setItem("loan2carLoan", "");
        window.localStorage.setItem("loan2carLoanAmount", "");
        window.localStorage.setItem("loan2carLoanMonthly", "");
        window.localStorage.setItem("loan2personalLoanMonthly", "");
      }

      if (!value?.includes(types[3])) {
        setLoan2value({
          ...loan2value,
          personalLoansStatus: value,
          HECSDebt: "",
          HECSDebtAmount: "",
        });

        window.localStorage.setItem("loan2HECSDebt", "");
        window.localStorage.setItem("loan2HECSDebtAmount", "");
      }

      if (value?.includes(types[4])) {
        window.localStorage.setItem("loan2HECSDebt", "");
        window.localStorage.setItem("loan2HECSDebtAmount", "");
        window.localStorage.setItem("loan2carLoan", "");
        window.localStorage.setItem("loan2carLoanAmount", "");
        window.localStorage.setItem("loan2carLoanMonthly", "");
        window.localStorage.setItem("loan2personalLoan", "");
        window.localStorage.setItem("loan2personalLoanAmount", "");
        window.localStorage.setItem("loan2personalLoanMonthly", "");
        setLoan2value({
          ...loan2value,
          personalLoansStatus: value,
          personalLoan: "",
          personalLoanAmount: "",
          carLoan: "",
          carLoanAmount: "",
          HECSDebt: "",
          HECSDebtAmount: "",
        });
      }
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
    loan2personalLoanMonthly,
    carLoanMonthly
  } = loan2value;

  const step7 = [
    {
      id: 1,
      question: `${
        personalLoansStatus?.length > 0
          ? "28. Are you currently paying off any personal loans, car loans or HECS debt?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        personalLoan ? "29. Which institution is the personal loan with?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        personalLoanAmount
          ? "30. What is the limit on the personal loan amount?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${
        loan2personalLoanMonthly
          ? "30a. How much is your personal loan monthly repayment?"
          : ""
      }`,
    },
    {
      id: 5,
      question: `${
        carLoan ? "31. Which institution is the car loan with?" : ""
      }`,
    },
    {
      id: 6,
      question: `${
        carLoanAmount ? "32. What is the limit on the car loan amount?" : ""
      }`,
    },
    {
      id: 7,
      question: `${
        carLoanMonthly ? "32a. How much is your car loan monthly repayment?" : ""
      }`,
    },
    {
      id: 8,
      question: `${
        carLoanMonthly ? "33. Which institution is the HECS debt with?" : ""
      }`,
    },
    {
      id: 9,
      question: `${
        HECSDebtAmount
          ? "34. What is the amount left owing on your HECS debt amount?"
          : ""
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
      HECSDebtAmount ||
      loan2personalLoanMonthly||
      carLoanMonthly
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
    loan2personalLoanMonthly,
    carLoanMonthly
  ]);

  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/CreditCards");
  };

  return (
    <LifeInsurance
      activeStep={6}
      listMenuStep7={dataListMenuStep7}
      numberScroll={1800}
    >
      <Step26 handleGetLoan2value={handleGetLoan2value} />
      {!!personalLoansStatus?.includes(types[1]) ? (
        <>
          <Step27A handleGetLoan2value={handleGetLoan2value} />
          <Step27 handleGetLoan2value={handleGetLoan2value}/>
        </>
      ) : (
        ""
      )}
      {!!personalLoansStatus?.includes(types[2]) ? (
        <>
        <Step27B handleGetLoan2value={handleGetLoan2value} />
        <Step32A handleGetLoan2value={handleGetLoan2value}/>
        </>
      ) : (
        ""
      )}
      {!!personalLoansStatus?.includes(types[3]) ? (
        <Step27C handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      <div className="group-btn-footer col d-flex justify-content-center mb-5">
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

export default Liabilities;
