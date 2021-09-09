/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";

const Loan2emailApplicants = ({ handleGetLoan2value }) => {
  const [email, setEmail] = useState(
    localStorage.getItem("loan2emailApplicants") || ""
  );
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };

  const onKeyUpHandle = (value) => {
    setEmail(value);
  };

  const handleBlur = () => {
    checkEmailStatus(email);
    handleGetLoan2value("loan2emailApplicants", email);
  };

  useMemo(() => {
    localStorage.setItem("loan2emailApplicants", email);
    // eslint-disable-next-line
  }, [email]);

  return (
    <section className="formContent-step-first pb-3">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                6. What is the joint applicants email address?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer">
                <Col xs={12} className="wForm-input pl-0">
                  <InputCustom2
                    onFocus={() => setEmailValid(valid.NON_VALID)}
                    onChange={(e) => onKeyUpHandle(e.target.value)}
                    label="PLEASE ENTER YOUR EMAIL"
                    value={email}
                    type="email"
                    id="email-input"
                    customClassLabel={email ? "active" : ""}
                    iconEmail
                    onBlur={() => handleBlur("email")}
                    customClassWrap="email"
                  />
                </Col>
              </Row>
              {emailValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter a valid email</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Loan2emailApplicants;
