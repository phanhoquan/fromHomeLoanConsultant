/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step39 = ({ handleGetLoan2value }) => {
  const amountHome39Ref = useRef(null);

  const [amountHome39, setAmountHome39] = useState(
    localStorage.getItem("amountHome39") || ""
  );
  const [amountHome39Valid, setAmountHome39Valid] = useState(
    valid.NON_VALID
  );

  const checkAmountHome39Status = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setAmountHome39Valid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setAmountHome39(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "amountHome39",
      amountHome39 &&
        parseInt(amountHome39.replace(/,/g, ""), 10)
    );
  }, [amountHome39]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                39. What is the value of your home contents?
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
                      setAmountHome39Valid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "amountHome39")
                    }
                    label="Amount"
                    value={amountHome39}
                    id="amountHome39"
                    customClassLabel={amountHome39 ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={amountHome39Ref}
                    onBlur={() => {
                      checkAmountHome39Status(amountHome39);
                      handleGetLoan2value(
                        "amountHome39",
                        amountHome39
                      );
                    }}
                  />
                </Col>
              </Row>
              {amountHome39Valid === valid.INVALID && (
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

export default Step39;
