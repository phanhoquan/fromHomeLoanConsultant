/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import formatCurrency from "../../../../utils/formatCurrency";

const Step03A = ({ handleGetLoan2value }) => {
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
    handleGetLoan2value("interestRate", e.target.value);
  };

  const onFocus = () => {
    setValueInterestRateValid(valid.NON_VALID);
  };

  useMemo(() => {
    localStorage.setItem("loan2valueInterestRate", valueInterestRate);
  }, [valueInterestRate]);

  return (
    <section className="formContent-step-first">
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
