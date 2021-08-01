/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import formatCurrency from "../../../../utils/formatCurrency";

export const types = {
  1: "Fixed",
  2: "Variable",
  3: "Split",
};

const Step03 = ({ loan2currentLoanStatus }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];
  const [valueInterestRate, setValueInterestRate] = useState(
    localStorage.getItem("valueInterestRate") || ""
  );

  const [valueInterestRateValid, setValueInterestRateValid] = useState(
    valid.NON_VALID
  );

  const [valueInterestRate2, setValueInterestRate2] = useState(
    localStorage.getItem("valueInterestRate2") || ""
  );

  const [valueInterestRateValid2, setValueInterestRateValid2] = useState(
    valid.NON_VALID
  );
  const [validMessage, setValidMessage] = useState("This field is required");
  const [validMessage2, setValidMessage2] = useState("This field is required");

  const checkValueInterestRateStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage("This field is required");
      setValueInterestRateValid(valid.INVALID);
      return false;
    }
    if (originAmount > 100) {
      setValidMessage("Value should be less that 100%");
      setValueInterestRateValid(valid.INVALID);
      return false;
    }
    setValueInterestRateValid(valid.VALID);
    return true;
  };

  const checkValueInterestRateStatus2 = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage2("This field is required");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }

    if (originAmount > 100) {
      setValidMessage2("Value should be less that 100%");
      setValueInterestRateValid2(valid.INVALID);
      return false;
    }
    setValueInterestRateValid2(valid.VALID);
    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    switch (name) {
      case "interestRate1":
        setValueInterestRate(valueConverted);
        break;
      case "interestRate2":
        setValueInterestRate2(valueConverted);
        break;
      default:
        break;
    }
  };

  useMemo(() => {
    setValueInterestRateValid2(valid.NON_VALID);
    setValueInterestRateValid(valid.NON_VALID);
    setValueInterestRate("");
    setValueInterestRate2("");
    // eslint-disable-next-line
  }, [loan2currentLoanStatus]);

  const onBlur = (e, name) => {
    switch (name) {
      case "interestRate1":
        checkValueInterestRateStatus(e.target.value);
        break;
      case "interestRate2":
        checkValueInterestRateStatus2(e.target.value);
        break;
      default:
        break;
    }
  };

  const onFocus = (name) => {
    switch (name) {
      case "interestRate1":
        setValueInterestRateValid(valid.NON_VALID);
        break;
      case "interestRate2":
        setValueInterestRateValid2(valid.NON_VALID);
        break;
      default:
        break;
    }
  };

  const step3 = {
    id: 3,
    question:
      " 3. What is the current interest rate you are paying on your loan?",
  };
  const finDataStep3 = listDataSubmit?.find((item) => item.id === 3);
  // const finDataStep3Remove = listDataSubmit?.filter((item) => item.id !== 3);
  const updateDataStep3 = listDataSubmit?.map((item) =>
    item.id === 3 ? step3 : item
  );

  useMemo(() => {
    localStorage.setItem("valueInterestRate", valueInterestRate);
    localStorage.setItem("valueInterestRate2", valueInterestRate2);
    if (valueInterestRate || valueInterestRate2) {
      if (finDataStep3) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep3)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step3])
        );
      }
    }
    // else {
    //   window.localStorage.setItem(
    //     "loan2listDataSubmit",
    //     finDataStep3Remove
    //       ? JSON.stringify(finDataStep3Remove)
    //       : JSON.stringify([])
    //   );
    // }
    // eslint-disable-next-line
  }, [valueInterestRate, valueInterestRate2]);

  return (
    <section
      className={`formContent-step-first pb-5 ${
        loan2currentLoanStatus !== types[3] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                3. What is the current interest rate you are <br />
                paying on your loan?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12}>
                  <InputCustom2
                    onChange={(e) => onKeyUp(e, "interestRate1")}
                    label="Fixed interest rate"
                    value={valueInterestRate}
                    type="text"
                    id="email-input3"
                    customClassLabel={valueInterestRate ? "active" : ""}
                    iconRate
                    maxLength="5"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e, "interestRate1")}
                    onFocus={() => onFocus("interestRate1")}
                  />
                </Col>
              </Row>
              {valueInterestRateValid === valid.INVALID && (
                <div className="text-error mb-3">
                  <p>{validMessage}</p>
                </div>
              )}
            </Col>

            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12}>
                  <InputCustom2
                    onChange={(e) => onKeyUp(e, "interestRate2")}
                    label="Variable interest rate"
                    value={valueInterestRate2}
                    type="text"
                    id="email-input4"
                    customClassLabel={valueInterestRate2 ? "active" : ""}
                    iconRate
                    maxLength="5"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e, "interestRate2")}
                    onFocus={() => onFocus("interestRate2")}
                  />
                </Col>
              </Row>
              {valueInterestRateValid2 === valid.INVALID && (
                <div className="text-error">
                  <p>{validMessage2}</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step03;
