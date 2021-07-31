/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import InputNumber from "../../../../Components/InputNumber";

const Step27C = () => {
  const HECSDebtRef = useRef(null);
  const HECSDebtAmountRef = useRef(null);

  const [HECSDebt, setHECSDebt] = useState(
    localStorage.getItem("HECSDebt") || ""
  );
  const [HECSDebtValid, setHECSDebtValid] = useState(valid.NON_VALID);

  const [HECSDebtAmount, setHECSDebtAmount] = useState(
    localStorage.getItem("HECSDebtAmount") || ""
  );
  const [HECSDebtAmountValid, setHECSDebtAmountValid] = useState(
    valid.NON_VALID
  );

  const checkHECSDebtStatus = (value) => {
    let test = value.length > 1;
    setHECSDebtValid(Number(test));
    return test;
  };

  const checkHECSDebtAmountStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setHECSDebtAmountValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    if (name === "HECSDebt") {
      setHECSDebt(value);
    }
    if (name === "HECSDebtAmount") {
      setHECSDebtAmount(value);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("HECSDebt", HECSDebt);
  }, [HECSDebt]);

  useMemo(() => {
    window.localStorage.setItem(
      "HECSDebtAmount",
      HECSDebtAmount && parseInt(HECSDebtAmount.replace(/,/g, ""), 10)
    );
  }, [HECSDebtAmount]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-5">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                31. Which institution is the HECS debt with?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setHECSDebtValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value, "HECSDebt")}
                    label="HECS debt Institution"
                    value={
                      HECSDebt && HECSDebt[0].toUpperCase() + HECSDebt.slice(1)
                    }
                    id="HECSDebt"
                    customClassLabel={HECSDebt ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={HECSDebtRef}
                    onBlur={() => checkHECSDebtStatus(HECSDebt)}
                  />
                </Col>
              </Row>
              {HECSDebtValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your Car Loan Institution</p>
                </div>
              )}
            </Col>

            <Col xs={12} className="text-center mt-4">
              <h2 className="mb-3">
                32. What is the limit on the HECS Debt amount?
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
                    onFocus={() => setHECSDebtAmountValid(valid.NON_VALID)}
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "HECSDebtAmount")
                    }
                    label="E.G. $10,000"
                    value={HECSDebtAmount}
                    id="HECSDebtAmount"
                    customClassLabel={HECSDebtAmount ? "active" : ""}
                    iconPrice
                    customClassWrap="email five"
                    innerRef={HECSDebtAmountRef}
                    onBlur={() => checkHECSDebtAmountStatus(HECSDebtAmount)}
                  />
                </Col>
              </Row>
              {HECSDebtAmountValid === valid.INVALID && (
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

export default Step27C;
