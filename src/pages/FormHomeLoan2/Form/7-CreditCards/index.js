/** @format */

import React, { useState, useMemo } from "react";
import LifeInsurance from "../../index";

import Step29 from "./Step29";
import Step30 from "./Step30";

const CreditCards = () => {
  let listMenuStep8 = localStorage.getItem("listMenuStep8")
    ? JSON.parse(localStorage.getItem("listMenuStep8"))
    : [];

  const [dataListMenuStep8, setDataListMenuStep8] = useState(
    listMenuStep8 || []
  );

  const [loan2value, setLoan2value] = useState({
    loan2creditCard: localStorage.getItem("loan2creditCard") || "",
    valueCreditCard: localStorage.getItem("loan2valueCreditCard") || "",
    creditCardAmount: localStorage.getItem("loan2valueCreditCardAmount") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };
  const { loan2creditCard, valueCreditCard, creditCardAmount } = loan2value;
  const step8 = [
    {
      id: 1,
      question: `${loan2creditCard ? "33. Do you have a credit card?" : ""}`,
    },
    {
      id: 2,
      question: `${
        valueCreditCard ? "34. Which institution is the credit card with?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        creditCardAmount ? "35. What is the limit on the credit card?" : ""
      }`,
    },
  ];

  useMemo(() => {
    if (loan2creditCard || valueCreditCard || creditCardAmount) {
      setDataListMenuStep8(step8);
    }
    window.localStorage.setItem("listMenuStep8", JSON.stringify(step8));
    // eslint-disable-next-line
  }, [loan2creditCard, valueCreditCard, creditCardAmount]);

  return (
    <LifeInsurance
      activeStep={7}
      listMenuStep8={dataListMenuStep8}
      numberScroll={2000}
    >
      <Step29 handleGetLoan2value={handleGetLoan2value} />
      <Step30 handleGetLoan2value={handleGetLoan2value} />
    </LifeInsurance>
  );
};

export default CreditCards;
