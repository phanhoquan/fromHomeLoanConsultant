/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step29 from "./Step29";
import Step30 from "./Step30";
import Step35B from "./Step35B";
import Step36B1 from "./Step36B1"
import Step36B2 from "./Step36B2"

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

    valueCreditCardB1: localStorage.getItem("loan2valueCreditCardB1") || "",
    creditCardAmountB1: localStorage.getItem("loan2valueCreditCardB1Amount") || "",

    valueCreditCardB2: localStorage.getItem("loan2valueCreditCardB2") || "",
    creditCardAmountB2: localStorage.getItem("loan2valueCreditCardB2Amount") || "",

    numberCardWorking: localStorage.getItem("numberCardWorking") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });

    if (name === "loan2creditCard" && value === types[2]) {
      window.localStorage.setItem("loan2valueCreditCard", "");
      window.localStorage.setItem("loan2valueCreditCardAmount", "");
      window.localStorage.setItem("loan2valueCreditCardB1", "");
      window.localStorage.setItem("loan2valueCreditCardB1Amount", "");
      window.localStorage.setItem("loan2valueCreditCardB2", "");
      window.localStorage.setItem("loan2valueCreditCardB2Amount", "");
      window.localStorage.setItem("numberCardWorking", "");
      setLoan2value({
        ...loan2value,
        loan2creditCard: value,
        valueCreditCard: "",
        creditCardAmount: "",
        valueCreditCardB1: "",
        creditCardAmountB1: "",
        valueCreditCardB2: "",
        creditCardAmountB2: "",
        numberCardWorking: ''
      });
    }
    if(name === 'numberCardWorking'){
      window.localStorage.setItem("loan2valueCreditCardB1", "");
      window.localStorage.setItem("loan2valueCreditCardB1Amount", "");
      window.localStorage.setItem("loan2valueCreditCardB2", "");
      window.localStorage.setItem("loan2valueCreditCardB2Amount", "");
      setLoan2value({
        ...loan2value,
        numberCardWorking: value,
        valueCreditCardB1: "",
        creditCardAmountB1: "",
        valueCreditCardB2: "",
        creditCardAmountB2: "",
      });
    }
  };

  const { loan2creditCard, valueCreditCard, creditCardAmount, numberCardWorking, valueCreditCardB1, valueCreditCardB2, creditCardAmountB1, creditCardAmountB2 } = loan2value;
  const step8 = [
    {
      id: 1,
      question: `${loan2creditCard ? "35. Do you have a credit card?" : ""}`,
    },
    {
      id: 2,
      question: `${
        numberCardWorking ? "35b. How many credit cards do you own?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        valueCreditCard ? "36.1. Which institution is the credit card with?" : ""
      }`,
    },
    {
      id: 4,
      question: `${
        creditCardAmount ? "37.1. What is the limit on the credit card?" : ""
      }`,
    },
    {
      id: 5,
      question: `${
        valueCreditCardB1 ? "36.2. Which institution is the credit card with?" : ""
      }`,
    },
    {
      id: 6,
      question: `${
        creditCardAmountB1 ? "37.2. What is the limit on the credit card?" : ""
      }`,
    },
    {
      id: 7,
      question: `${
        valueCreditCardB2 ? "36.3. Which institution is the credit card with?" : ""
      }`,
    },
    {
      id: 8,
      question: `${
        creditCardAmountB2 ? "37.3. What is the limit on the credit card?" : ""
      }`,
    },
  ];
  
  useMemo(() => {
    if (loan2creditCard || valueCreditCard || creditCardAmount || numberCardWorking || valueCreditCardB1 || valueCreditCardB2 || creditCardAmountB1 || creditCardAmountB2) {
      setDataListMenuStep8(step8);
    }
    window.localStorage.setItem("listMenuStep8", JSON.stringify(step8));
    // eslint-disable-next-line
  }, [loan2creditCard, valueCreditCard, creditCardAmount, numberCardWorking, valueCreditCardB1, valueCreditCardB2, creditCardAmountB1, creditCardAmountB2]);

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
        <Step35B handleGetLoan2value={handleGetLoan2value} />
      ):''}
      {loan2creditCard === types[1] && numberCardWorking   ? (
        <div>
          <Step30
            handleGetLoan2value={handleGetLoan2value}
            loan2creditCard={loan2creditCard}
          />
          { parseInt(numberCardWorking, 10) === 2 || parseInt(numberCardWorking, 10) === 3? (
            <Step36B1
              handleGetLoan2value={handleGetLoan2value}
              loan2creditCard={loan2creditCard}
            />
          ):''}
           { parseInt(numberCardWorking, 10) === 3 ? (
            <Step36B2
              handleGetLoan2value={handleGetLoan2value}
              loan2creditCard={loan2creditCard}
            />
           ): ''}
        </div>
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
