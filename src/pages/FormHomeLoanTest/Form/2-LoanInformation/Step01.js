/** @format */

import React, { useState, useMemo} from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectDropdown from "../../../../Components/Select/index";

const Step02 = ({ handleGetLoan2value }) => {
  const listOption = [
    {
      value: 'Decrease repayments',
      label:'Decrease repayments'
    },
    {
      value: 'Pay off loan faster',
      label:'Pay off loan faster'
    },
    {
      value: 'Consolidated debt / get cash out',
      label:'Consolidated debt / get cash out'
    },
    {
      value: 'Build on my land or property',
      label:'Build on my land or property'
    }
  ]
  const [textLoanPurpose, setTextLoanPurpose] = useState(
    localStorage.getItem("textLoanPurpose")? {
      value: localStorage.getItem("textLoanPurpose"),
      label: localStorage.getItem("textLoanPurpose")
    } : null
  );

  const handleChange = (value) => {
    setTextLoanPurpose(value);
  };
  useMemo(() => {
    window.localStorage.setItem("textLoanPurpose", textLoanPurpose?.value ||'');
    handleGetLoan2value("textLoanPurpose", textLoanPurpose?.value ||'');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textLoanPurpose?.value]);

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
                  <SelectDropdown
                    customClass="max-100"
                    placeholder="Loan Purpose"
                    listItem={listOption}
                    onChange={(option) => {
                      handleChange(option)
                    }}
                    option={textLoanPurpose || null}
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
