/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";

const Step36A = ({ handleGetLoan2value }) => {
  const makeModelRef = useRef(null);
  const [makeModel, setMakeModel] = useState(
    localStorage.getItem("makeModel37") || ""
  );

  const [makeModelValid, setMakeModelValid] = useState(valid.NON_VALID);


  const checkValueStatus = (value) => {
    let test = value&&value.length> 0;
    setMakeModelValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setMakeModel (value)
  };

  const handleBlur = (name) => {
    checkValueStatus(makeModel);
    handleGetLoan2value("makeModel37", makeModel);
  };

  useMemo(() => {
    localStorage.setItem("makeModel37", makeModel);
    // eslint-disable-next-line
  }, [makeModel]);

  return (
    <section className="formContent-step-first mb-3">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-4">
                37. Do you own any other vehicles or boats?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} className="wForm-input px-0">
                  <InputCustom2
                    onFocus={() => setMakeModelValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value)}
                    label="Make\Model"
                    value={
                      makeModel
                    }
                    id="makeModel37"
                    customClassLabel={makeModel ? "active" : ""}
                    innerRef={makeModelRef}
                    onBlur={() => handleBlur("makeModel")}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              {makeModelValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter in a valid Make\Model</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step36A;
