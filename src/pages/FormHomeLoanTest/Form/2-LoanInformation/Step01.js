/** @format */

import React, { useState,useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Step02 = ({ handleGetLoan2value }) => {
  const [textLoanPurpose, setTextLoanPurpose] = useState(
    localStorage.getItem("textLoanPurpose") || ""
  );

  const handleChange = (value) => {
    setTextLoanPurpose(value);
  };

  useMemo(() => {
    window.localStorage.setItem("textLoanPurpose", textLoanPurpose);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textLoanPurpose]);

  const onBlur = () => {
    handleGetLoan2value("textLoanPurpose", textLoanPurpose);
  };

  return (
    <section className="formContent-step-first mb-4">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                1. Loan Purpose
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer w-500 mb-0">
                <Col xs={12} className="wForm-input">
                <textarea
                    className="form-control textarea"
                    value={textLoanPurpose}
                    onChange={(e) => handleChange(e.target.value)}
                    maxLength="500"
                    onBlur={() => onBlur()}
                    placeholder="Please enter your loan purpose here..."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step02;
