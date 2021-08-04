/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step24 = ({ handleGetLoan2value, jointApplicationStatus }) => {
  const partnersSalaryRef = useRef(null);
  const [partnersSalary, setPartnersSalary] = useState(
    localStorage.getItem("loan2partnersSalary") || ""
  );
  const [partnersSalaryValid, setPartnersSalaryValid] = useState(
    valid.NON_VALID
  );

  const checkPartnersSalaryStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPartnersSalaryValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setPartnersSalary(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2partnersSalary",
      partnersSalary && parseInt(partnersSalary.replace(/,/g, ""), 10)
    );
  }, [partnersSalary]);

  useMemo(() => {
    if (jointApplicationStatus && jointApplicationStatus !== types[2]) {
      window.localStorage.setItem("loan2partnersSalary", "");
      setPartnersSalary("");
      handleGetLoan2value("partnersSalary", "");
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance mb-3 ${
        jointApplicationStatus !== types[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">25. What is your partners salary?</h2>
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
                    onFocus={() => setPartnersSalaryValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value)}
                    label="E.G. $80,000"
                    value={partnersSalary}
                    id="partnersSalary"
                    customClassLabel={partnersSalary ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={partnersSalaryRef}
                    onBlur={() => {
                      checkPartnersSalaryStatus(partnersSalary);
                      handleGetLoan2value("partnersSalary", partnersSalary);
                    }}
                  />
                </Col>
              </Row>
              {partnersSalaryValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $1,000,000</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step24;
