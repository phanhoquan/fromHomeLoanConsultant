/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step29 from "./Step29";
import Step30 from "./Step30";

export const types = {
  1: "YES",
  2: "NO",
};

const CreditCards = () => {
  const history = useHistory();
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

    if (name === "loan2creditCard" && value === types[2]) {
      window.localStorage.setItem("loan2valueCreditCard", "");
      window.localStorage.setItem("loan2valueCreditCardAmount", "");
      setLoan2value({
        ...loan2value,
        loan2creditCard: value,
        valueCreditCard: "",
        creditCardAmount: "",
      });
    }
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

  const onClickNext = () => {
    history.push("/refinance-fact-find-2/ResidentialInformation");
  };

  return (
    <LifeInsurance
      activeStep={7}
      listMenuStep8={dataListMenuStep8}
      numberScroll={2000}
    >
      <Step29 handleGetLoan2value={handleGetLoan2value} />
      {loan2creditCard === types[1] ? (
        <Step30
          handleGetLoan2value={handleGetLoan2value}
          loan2creditCard={loan2creditCard}
        />
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

export default CreditCards;
