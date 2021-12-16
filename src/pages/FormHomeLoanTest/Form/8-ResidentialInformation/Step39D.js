/** @format */

import React, { useState, useMemo, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputNumber from "../../../../Components/InputNumber";

const Step40 = ({ handleGetLoan2value }) => {
  const timeLiving39DRef = useRef(null);

  const [timeLiving39D, setTimeLiving39D] = useState(
    localStorage.getItem("timeLiving39D") || ""
  );
  const [timeLiving39DValid, setTimeLiving39DValid] = useState(
    valid.NON_VALID
  );

  const checkTimeLiving39DStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 100;
    setTimeLiving39DValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setTimeLiving39D(value);
  };

  useMemo(() => {
    window.localStorage.setItem(
      "timeLiving39D",
      timeLiving39D &&
        parseInt(timeLiving39D.replace(/,/g, ""), 10)
    );
  }, [timeLiving39D]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                39d. How long were you living at that address for?
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
                      setTimeLiving39DValid(valid.NON_VALID)
                    }
                    onChange={(e) =>
                      onKeyUpHandle(e.target.value, "timeLiving39D")
                    }
                    label="Please enter your time living in this address"
                    value={timeLiving39D}
                    id="timeLiving39D"
                    maxLength ="3"
                    customClassLabel={timeLiving39D ? "active" : ""}
                    customClassWrap="email five"
                    innerRef={timeLiving39DRef}
                    onBlur={() => {
                      checkTimeLiving39DStatus(timeLiving39D);
                      handleGetLoan2value(
                        "timeLiving39D",
                        timeLiving39D
                      );
                    }}
                  />
                </Col>
              </Row>
              {timeLiving39DValid === valid.INVALID && (
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
