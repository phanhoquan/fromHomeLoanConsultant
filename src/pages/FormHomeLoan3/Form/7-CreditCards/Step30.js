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
    localStorage.getItem("loan2valueCreditCard") || ""
  );
  const [valueCreditCardValid, setValueCreditCardValid] = useState(
    valid.NON_VALID
  );

  const [valueCreditCardAmount, setValueCreditCardAmount] = useState(
    localStorage.getItem("loan2valueCreditCardAmount") || ""
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
    if (name === "valueCreditCard") {
      setValueCreditCard(value);
    }
    if (name === "valueCreditCardAmount") {
      setValueCreditCardAmount(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("loan2valueCreditCard", valueCreditCard);
  }, [valueCreditCard]);

  useMemo(() => {
    window.localStorage.setItem(
      "loan2valueCreditCardAmount",
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
                36. Which institution is the credit card with?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setValueCreditCardValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "valueCreditCard")
                    }
                    label="Credit Card Institution"
                    value={
                      valueCreditCard &&
                      valueCreditCard[0].toUpperCase() +
                        valueCreditCard.slice(1)
                    }
                    id="valueCreditCard"
                    customClassLabel={valueCreditCard ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={valueCreditCardRef}
                    onBlur={() => {
                      checkValueCreditCardStatus(valueCreditCard);
                      handleGetLoan2value("valueCreditCard", valueCreditCard);
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
                37. What is the limit on the credit card?
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
                      onKeyUpHandle(e.target.value, "valueCreditCardAmount")
                    }
                    label="E.G. $10,000"
                    value={valueCreditCardAmount}
                    id="valueCreditCardAmount"
                    customClassLabel={valueCreditCardAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={valueCreditCardAmountRef}
                    onBlur={() => {
                      checkValueCreditCardAmountStatus(valueCreditCardAmount);
                      handleGetLoan2value(
                        "creditCardAmount",
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
