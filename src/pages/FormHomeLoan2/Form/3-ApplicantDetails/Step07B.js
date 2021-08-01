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

const Step07B = ({ applicationStatus, loan2firstNameOther }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];
  const [jointApplicantAge, setJointApplicantAge] = useState(
    localStorage.getItem("loan2jointApplicantAge") || ""
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

  const onKeyUp = (e) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    setJointApplicantAge(valueConverted);
  };

  const onBlur = (e) => {
    checkJointApplicantAgeStatus2(e.target.value);
    checkJointApplicantAgeStatus2(jointApplicantAge);
  };

  const firstName = localStorage.getItem("firstName") || "";
  const title = `7. What are the ages of both ${firstName} & ${loan2firstNameOther}?`;

  const step7 = {
    id: 7,
    question: `${
      applicationStatus === types[2]
        ? title
        : "7. What is the age of the applicant?"
    }`,
  };

  const finDataStep7 = listDataSubmit?.find((item) => item.id === 7);
  const updateDataStep7 = listDataSubmit?.map((item) =>
    item.id === 7 ? step7 : item
  );

  useMemo(() => {
    localStorage.setItem("loan2jointApplicantAge", jointApplicantAge);
    if (jointApplicantAge) {
      if (finDataStep7) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep7)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step7])
        );
      }
    }
    // eslint-disable-next-line
  }, [jointApplicantAge, loan2firstNameOther]);

  useMemo(() => {
    setJointApplicantAgeValid(valid.NON_VALID);
    setJointApplicantAge(localStorage.getItem("loan2jointApplicantAge"));
    // eslint-disable-next-line
  }, [applicationStatus]);

  return (
    <section
      className={`formContent-step-first pb-5 ${
        applicationStatus !== types[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                {applicationStatus === types[2]
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
                    id="jointApplicantAge"
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
