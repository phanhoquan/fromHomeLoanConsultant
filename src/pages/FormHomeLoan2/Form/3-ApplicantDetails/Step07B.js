/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import formatCurrency from "../../../../utils/formatCurrency";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step07B = () => {
  const typesApplication =
    localStorage.getItem("jointApplicationStatus") || "Sole Applicant";

  const [jointApplicantAge, setJointApplicantAge] = useState(
    localStorage.getItem("jointApplicantAge") || ""
  );

  const [jointApplicantAgeValid, setJointApplicantAgeValid] = useState(
    valid.NON_VALID
  );

  const [validMessage2, setValidMessage2] = useState("This field is required");

  const checkJointApplicantAgeStatus2 = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage2("This field is required");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount < 18) {
      setValidMessage2("Value must be greater than or equal to 18");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount > 100) {
      setValidMessage2("Value should be less that 100");
      setJointApplicantAgeValid(valid.INVALID);
      return false;
    }
    setJointApplicantAgeValid(valid.VALID);
    return true;
  };

  const onKeyUp = (e, name) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    setJointApplicantAge(valueConverted);
  };

  const onBlur = (e) => {
    checkJointApplicantAgeStatus2(e.target.value);
    checkJointApplicantAgeStatus2(jointApplicantAge);
  };

  const firstName = localStorage.getItem("firstName") || "";
  const firstNameOther = localStorage.getItem("firstNameOther") || "";
  const title = `7. What are the ages of both ${firstName} & ${firstNameOther}?`;

  useMemo(() => {
    localStorage.setItem("jointApplicantAge", jointApplicantAge);
  }, [jointApplicantAge]);

  return (
    <section className="formContent-step-first pb-5">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                {typesApplication === types[2]
                  ? title
                  : "7. What is the age of the applicant?"}
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12}>
                  <InputCustom2
                    onChange={(e) => onKeyUp(e)}
                    label="Joint Applicant Age"
                    value={jointApplicantAge}
                    type="text"
                    id="email-input"
                    customClassLabel={jointApplicantAge ? "active" : ""}
                    maxLength="3"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e)}
                    onFocus={() => setJointApplicantAgeValid(valid.NON_VALID)}
                  />
                </Col>
              </Row>
              {jointApplicantAgeValid === valid.INVALID && (
                <div className="text-error">
                  <p>{validMessage2}</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step07B;
