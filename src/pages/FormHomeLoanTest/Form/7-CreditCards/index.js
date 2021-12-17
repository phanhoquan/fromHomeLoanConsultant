/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step29 from "./Step29";
import Step36B1 from "./Step36B1"

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
    listCreditCard: localStorage.getItem("listCreditCard")
    ? JSON.parse(localStorage.getItem("listCreditCard"))
    : null,

  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });

    if (name === "loan2creditCard" && value === types[2]) {
      window.localStorage.setItem("listCreditCard", JSON.stringify({}));
      window.localStorage.setItem("listCreditCardNumber", 0);
      setLoan2value({
        ...loan2value,
        loan2creditCard: value,
        listCreditCard: [],
      });
    }
  };

  const { loan2creditCard, listCreditCard} = loan2value;
  const step8 = [
    {
      id: 1,
      question: `${loan2creditCard ? "35. Do you own any credit cards?" : ""}`,
    },
    {
      id: 2,
      question: `${
        listCreditCard && (listCreditCard.valueCreditCard35Amount1 || listCreditCard.valueCreditCard351) ? "What institution is the credit card #1 with ans what is the limit?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        listCreditCard && (listCreditCard.valueCreditCard35Amount2 || listCreditCard.valueCreditCard352)  ? "What institution is the credit card #2 with ans what is the limit?" : ""
      }`,
    },
    {
      id: 4,
      question: `${
        listCreditCard && (listCreditCard.valueCreditCard35Amount3 || listCreditCard.valueCreditCard353)  ? "3What institution is the credit card #1 with ans what is the limit?" : ""
      }`,
    },
  ];
  
  useMemo(() => {
    if (loan2creditCard || listCreditCard) {
      setDataListMenuStep8(step8);
    }
    window.localStorage.setItem("listMenuStep8", JSON.stringify(step8));
    // eslint-disable-next-line
  }, [loan2creditCard, listCreditCard]);
  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/ResidentialInformation");
  };

  return (
    <LifeInsurance
      activeStep={7}
      listMenuStep8={dataListMenuStep8}
      numberScroll={2000}
    >
      <Step29 handleGetLoan2value={handleGetLoan2value} />
      { loan2creditCard === types[1] ? (
        <Step36B1
          handleGetLoan2value={handleGetLoan2value}
          loan2creditCard={loan2creditCard}
        />
      ):''}
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
