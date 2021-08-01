/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "YES",
  2: "NO",
};

export const types2 = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step19 = () => {
  const [taxReturns, setTaxReturns] = useState(
    localStorage.getItem("taxReturns") || ""
  );

  const onCheck = (option) => {
    setTaxReturns(option);
    window.localStorage.setItem("taxReturns", option);
  };

  return (
    <section className="formContent-step-first pb-3">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                19. Have the tax returns for 2019/2020 <br />
                been completed?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={taxReturns === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={taxReturns === types[2]}
                    name={types[2]}
                    classContainer="radius"
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

export default Step19;
