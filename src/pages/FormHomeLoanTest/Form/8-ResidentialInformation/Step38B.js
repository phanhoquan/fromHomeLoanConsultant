/** @format */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CheckboxButton } from "../../../../Components/CheckBox3";


export const types = {
  1: 'o/o',
  2: "Investment property",
};

const Step38B = ({ handleGetLoan2value }) => {
  const [currentlyRenting, setCurrentlyRenting] = useState(
    localStorage.getItem("investmentProperty38B") || ""
  );

  const onCheck = (option) => {
    setCurrentlyRenting(option);
    window.localStorage.setItem("investmentProperty38B", option);
    handleGetLoan2value("investmentProperty38B", option);
  };

  return (
    <section className="formContent-step-first pb-0">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                38b. Is this a o/o or investment property?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={currentlyRenting === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                    classContainer="radius"
                  />
                </Col>
                <Col xs={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={currentlyRenting === types[2]}
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

export default Step38B;
