/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step40 = ({ handleGetLoan2value }) => {
  const timeLiving39BRef = useRef(null);

  const [timeLiving39B, setTimeLiving39B] = useState(
    localStorage.getItem("timeLiving39B") || ""
  );
  const [timeLiving39BValid, setTimeLiving39BValid] = useState(
    valid.NON_VALID
  );

  const checkTimeLiving39BStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 100;
    setTimeLiving39BValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setTimeLiving39B(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "timeLiving39B",
      timeLiving39B &&
        parseInt(timeLiving39B.replace(/,/g, ""), 10)
    );
  }, [timeLiving39B]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                39b. How long have you been living in this address for?
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
                      setTimeLiving39BValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "timeLiving39B")
                    }
                    label="Please enter your time living in this address"
                    value={timeLiving39B}
                    id="timeLiving39B"
                    maxLength ="3"
                    customClassLabel={timeLiving39B ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={timeLiving39BRef}
                    onBlur={() => {
                      checkTimeLiving39BStatus(timeLiving39B);
                      handleGetLoan2value(
                        "timeLiving39B",
                        timeLiving39B
                      );
                    }}
                  />
                </Col>
              </Row>
              {timeLiving39BValid === valid.INVALID && (
                <div className="text-error">
                  <p>Value should be in between 1 - 100</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step40;
