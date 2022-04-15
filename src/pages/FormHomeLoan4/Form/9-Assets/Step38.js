/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step39 = ({ handleGetLoan2value }) => {
  const amountHome38ARef = useRef(null);

  const [amountHome38A, setAmountHome38A] = useState(
    localStorage.getItem("amountHome38A") || ""
  );
  const [amountHome38AValid, setAmountHome38AValid] = useState(
    valid.NON_VALID
  );
  const amountHome38BRef = useRef(null);

  const [amountHome38B, setAmountHome38B] = useState(
    localStorage.getItem("amountHome38B") || ""
  );
  const [amountHome38BValid, setAmountHome38BValid] = useState(
    valid.NON_VALID
  );

  const checkAmountHome38AStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setAmountHome38AValid(Number(test));
    return test;
  };
  const checkAmountHome38BStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setAmountHome38BValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
      if (name ==="amountHome38A") {
          setAmountHome38A(value);
      }      
      if (name ==="amountHome38B") {
          setAmountHome38B(value);
      }
  };

  useMemo(() => {
    window.localStorage.setItem(
      "amountHome38A",
      amountHome38A &&
        parseInt(amountHome38A.replace(/,/g, ""), 10)
    );
    window.localStorage.setItem(
        "amountHome38B",
        amountHome38B &&
          parseInt(amountHome38B.replace(/,/g, ""), 10)
      );
  }, [amountHome38A, amountHome38B]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                38. How much superannuation do you have?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={6} className="wForm-input pl-0">
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
                      setAmountHome38AValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "amountHome38A")
                    }
                    label="Applicant 1"
                    value={amountHome38A}
                    id="amountHome38A"
                    customClassLabel={amountHome38A ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={amountHome38ARef}
                    onBlur={() => {
                      checkAmountHome38AStatus(amountHome38A);
                      handleGetLoan2value(
                        "amountHome38A",
                        amountHome38A
                      );
                    }}
                  />
                </Col>
                <Col xs={6} className="wForm-input pl-0">
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
                      setAmountHome38AValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "amountHome38B")
                    }
                    label="Applicant 2"
                    value={amountHome38B}
                    id="amountHome38B"
                    customClassLabel={amountHome38B ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={amountHome38BRef}
                    onBlur={() => {
                    checkAmountHome38BStatus(amountHome38B);
                      handleGetLoan2value(
                        "amountHome38B",
                        amountHome38B
                      );
                    }}
                  />
                </Col>
              </Row>
              {(amountHome38AValid === valid.INVALID || amountHome38BValid === valid.INVALID) && (
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
