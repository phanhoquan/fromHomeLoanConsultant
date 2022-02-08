/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step20 = ({ handleGetLoan2value }) => {
  const priceTax2019Ref = useRef(null);
  const priceTax2020Ref = useRef(null);
  // const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");

  const [priceTax2019, setPriceTax2019] = useState(
    localStorage.getItem("loan2priceTax2019") || ""
  );

  const [priceTax2019Valid, setPriceTax2019Valid] = useState(valid.NON_VALID);

  const [priceTax2020, setPriceTax2020] = useState(
    localStorage.getItem("loan2priceTax2020") || ""
  );
  const [priceTax2020Valid, setPriceTax2020Valid] = useState(valid.NON_VALID);

  const checkPriceTax2019Status = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPriceTax2019Valid(Number(test));
    return test;
  };

  const checkPriceTax2020Status = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 1000000;
    setPriceTax2020Valid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "tax2019") {
      setPriceTax2019(value);
    }
    if (name === "tax2020") {
      setPriceTax2020(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem(
      "loan2priceTax2019",
      priceTax2019 && parseInt(priceTax2019.replace(/,/g, ""), 10)
    );
  }, [priceTax2019]);

  useMemo(() => {
    window.localStorage.setItem(
      "loan2priceTax2020",
      priceTax2020 && parseInt(priceTax2020.replace(/,/g, ""), 10)
    );
  }, [priceTax2020]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-3">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">22. What was your 2019 taxable income?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4 pt-2">
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
                    onFocus={() => setPriceTax2019Valid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value, "tax2019")}
                    label="E.G. $80,000"
                    value={priceTax2019}
                    id="priceTax2019"
                    customClassLabel={priceTax2019 ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={priceTax2019Ref}
                    onBlur={() => {
                      checkPriceTax2019Status(priceTax2019);
                      handleGetLoan2value("priceTax2019", priceTax2019);
                    }}
                  />
                </Col>
              </Row>
              {priceTax2019Valid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between $0 - $1,000,000</p>
                </div>
              )}
            </Col>

            <Col xs={12} className="text-center mt-4">
              <h2 className="mb-3">23. What was your 2020 taxable income?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
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
                    onFocus={() => setPriceTax2020Valid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value, "tax2020")}
                    label="E.G. $85,000"
                    value={priceTax2020}
                    id="priceTax2020"
                    customClassLabel={priceTax2020 ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={priceTax2020Ref}
                    onBlur={() => {
                      checkPriceTax2020Status(priceTax2020);
                      handleGetLoan2value("priceTax2020", priceTax2020);
                    }}
                  />
                </Col>
              </Row>
              {priceTax2020Valid === valid.INVALID && (
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

export default Step20;
