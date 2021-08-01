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

const Step03A = ({ loan2currentLoanStatus }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  const [valueInterestRate, setValueInterestRate] = useState(
    localStorage.getItem("loan2valueInterestRate") || ""
  );

  const [valueInterestRateValid, setValueInterestRateValid] = useState(
    valid.NON_VALID
  );

  const [validMessage, setValidMessage] = useState("This field is required");

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

  const onKeyUp = (e) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    setValueInterestRate(valueConverted);
  };

  const onBlur = (e) => {
    checkValueInterestRateStatus(e.target.value);
  };

  const onFocus = () => {
    setValueInterestRateValid(valid.NON_VALID);
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
    localStorage.setItem("loan2valueInterestRate", valueInterestRate);
    if (valueInterestRate) {
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
  }, [valueInterestRate]);

  useMemo(() => {
    setValueInterestRateValid(valid.NON_VALID);
    setValueInterestRate(localStorage.getItem("loan2valueInterestRate") || "");
    // eslint-disable-next-line
  }, [loan2currentLoanStatus]);

  return (
    <section
      className={`formContent-step-first ${
        loan2currentLoanStatus !== types[1] ? "opacity-03" : ""
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
                    onChange={(e) => onKeyUp(e)}
                    label="Fixed interest rate"
                    value={valueInterestRate}
                    type="text"
                    id="email-input1"
                    customClassLabel={valueInterestRate ? "active" : ""}
                    iconRate
                    maxLength="5"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e)}
                    onFocus={() => onFocus()}
                  />
                </Col>
              </Row>
              {valueInterestRateValid === valid.INVALID && (
                <div className="text-error mb-3">
                  <p>{validMessage}</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step03A;
