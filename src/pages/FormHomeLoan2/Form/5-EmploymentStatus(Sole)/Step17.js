/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

const Step17 = ({ handleGetLoan2value, employmentWorkingStatus }) => {
  const typeOfBusinessRef = useRef(null);
  const [typeOfBusiness, setTypeOfBusiness] = useState(
    localStorage.getItem("loan2typeOfBusinessOther") || ""
  );
  const [isShowStep, setIsShowStep] = useState(
    localStorage.getItem("loan2employmentStatus") || ""
  );
  const [typeOfBusinessValid, setTypeOfBusinessValid] = useState(
    valid.NON_VALID
  );

  const checkTypeOfBusinessStatus = (value) => {
    let test = value?.trim()?.length > 1;
    setTypeOfBusinessValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setTypeOfBusiness(value.replace(/[0-9]/g, ""));
  };

  const handleBlur = () => {
    checkTypeOfBusinessStatus(typeOfBusiness);
    handleGetLoan2value("typeOfBusinessOther", typeOfBusiness);
  };

  useMemo(() => {
    window.localStorage.setItem("loan2typeOfBusinessOther", typeOfBusiness);
  }, [typeOfBusiness]);

  useMemo(() => {
    if (employmentWorkingStatus) {
      setTypeOfBusiness(localStorage.getItem("loan2typeOfBusinessOther") || "");
      setIsShowStep(employmentWorkingStatus);
    }
    // eslint-disable-next-line
  }, [employmentWorkingStatus]);

  return (
    <section
      className={`formContent-step-first mb-3 ${
        isShowStep !== types[4] && isShowStep !== types[6] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-4">17. What type of business is this?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setTypeOfBusinessValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value)}
                    label="Type of business"
                    value={
                      typeOfBusiness &&
                      typeOfBusiness[0].toUpperCase() + typeOfBusiness.slice(1)
                    }
                    id="typeOfBusiness"
                    customClassLabel={typeOfBusiness ? "active" : ""}
                    innerRef={typeOfBusinessRef}
                    onBlur={() => handleBlur()}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              {typeOfBusinessValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter in a valid</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step17;
