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

const Step07A = ({ applicationStatus, loan2firstNameOther }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  const [soleApplicantAge, setSoleApplicantAge] = useState(
    localStorage.getItem("loan2soleApplicantAge") || ""
  );

  const [soleApplicantAgeValid, setSoleApplicantAgeValid] = useState(
    valid.NON_VALID
  );
  const [validMessage, setValidMessage] = useState("This field is required");

  const checkSoleApplicantAgeStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    if (!originAmount) {
      setValidMessage("This field is required");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount < 18) {
      setValidMessage("Value must be greater than or equal to 18");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    if (originAmount > 100) {
      setValidMessage("Value should be less that 100");
      setSoleApplicantAgeValid(valid.INVALID);
      return false;
    }
    setSoleApplicantAgeValid(valid.VALID);
    return true;
  };

  const onKeyUp = (e) => {
    const valueConverted = formatCurrency(e.target.value);
    e.target.value = valueConverted;
    setSoleApplicantAge(valueConverted);
  };

  const onBlur = (e) => {
    checkSoleApplicantAgeStatus(e.target.value);
    checkSoleApplicantAgeStatus(soleApplicantAge);
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
    localStorage.setItem("loan2soleApplicantAge", soleApplicantAge);
    if (soleApplicantAge) {
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
  }, [soleApplicantAge, loan2firstNameOther]);

  useMemo(() => {
    setSoleApplicantAgeValid(valid.NON_VALID);
    setSoleApplicantAge(localStorage.getItem("loan2soleApplicantAge"));
    // eslint-disable-next-line
  }, [applicationStatus]);

  return (
    <section
      className={`formContent-step-first ${
        applicationStatus === "" ? "opacity-03" : ""
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
                    label="Sole Applicant Age"
                    value={soleApplicantAge}
                    type="text"
                    id="soleApplicantAge"
                    customClassLabel={soleApplicantAge ? "active" : ""}
                    maxLength="3"
                    customClassWrap="email"
                    onBlur={(e) => onBlur(e)}
                    onFocus={() => setSoleApplicantAgeValid(valid.NON_VALID)}
                  />
                </Col>
              </Row>
              {soleApplicantAgeValid === valid.INVALID && (
                <div className="text-error mb-3">
                  <p>{validMessage}</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step07A;
