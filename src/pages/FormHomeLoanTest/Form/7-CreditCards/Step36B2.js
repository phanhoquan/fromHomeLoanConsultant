/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

export const types = {
  1: "YES",
  2: "NO",
};

const Step30 = ({ handleGetLoan2value }) => {
  const valueCreditCardRef = useRef(null);
  const valueCreditCardAmountRef = useRef(null);

  const [valueCreditCard, setValueCreditCard] = useState(
    localStorage.getItem("loan2valueCreditCardB2") || ""
  );
  const [valueCreditCardValid, setValueCreditCardValid] = useState(
    valid.NON_VALID
  );

  const [valueCreditCardAmount, setValueCreditCardAmount] = useState(
    localStorage.getItem("loan2valueCreditCardB2Amount") || ""
  );
  const [valueCreditCardAmountValid, setValueCreditCardAmountValid] = useState(
    valid.NON_VALID
  );

  const checkValueCreditCardStatus = (value) => {
    let test = value.length > 1;
    setValueCreditCardValid(Number(test));
    return test;
  };

  const checkValueCreditCardAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setValueCreditCardAmountValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "valueCreditCardB2") {
      setValueCreditCard(value);
    }
    if (name === "valueCreditCardB2Amount") {
      setValueCreditCardAmount(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("loan2valueCreditCardB2", valueCreditCard);
  }, [valueCreditCard]);

  useMemo(() => {
    window.localStorage.setItem(
      "loan2valueCreditCardB2Amount",
      valueCreditCardAmount &&
        parseInt(valueCreditCardAmount.replace(/,/g, ""), 10)
    );
  }, [valueCreditCardAmount]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                36.3. Which institution is the credit card with?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setValueCreditCardValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "valueCreditCardB2")
                    }
                    label="Credit Card Institution"
                    value={
                      valueCreditCard &&
                      valueCreditCard[0].toUpperCase() +
                        valueCreditCard.slice(1)
                    }
                    id="valueCreditCard2"
                    customClassLabel={valueCreditCard ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={valueCreditCardRef}
                    onBlur={() => {
                      checkValueCreditCardStatus(valueCreditCard);
                      handleGetLoan2value("valueCreditCardB2", valueCreditCard);
                    }}
                  />
                </Col>
              </Row>
              {valueCreditCardValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your Car Loan Institution</p>
                </div>
              )}
            </Col>

            <Col xs={12} className="text-center mt-4">
              <h2 className="mb-3">
                37.3. What is the limit on the credit card?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputNumber
                    inputMode="numeric"
                    options={{
                      numericOnly: true,
                      numeral: true,
                      numeralDecimalMark: "",
                      delimiter: ",",
                      numeralThousandsGroupStyle: "thousand",
                    }}
                    onFocus={() =>
                      setValueCreditCardAmountValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "valueCreditCardB2Amount")
                    }
                    label="E.G. $10,000"
                    value={valueCreditCardAmount}
                    id="valueCreditCardAmount2"
                    customClassLabel={valueCreditCardAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={valueCreditCardAmountRef}
                    onBlur={() => {
                      checkValueCreditCardAmountStatus(valueCreditCardAmount);
                      handleGetLoan2value(
                        "creditCardB2Amount",
                        valueCreditCardAmount
                      );
                    }}
                  />
                </Col>
              </Row>
              {valueCreditCardAmountValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $10,000,000</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step30;
