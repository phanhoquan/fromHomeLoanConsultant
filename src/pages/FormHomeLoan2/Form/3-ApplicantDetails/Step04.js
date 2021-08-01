/** @format */

import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CheckboxButton } from "../../../../Components/CheckBox3";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step04 = ({ handelGetApplicationStatus }) => {
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  const [jointApplicationStatus, setJointApplicationStatus] = useState(
    localStorage.getItem("loan2jointApplicationStatus") || ""
  );

  const onCheck = (option) => {
    setJointApplicationStatus(option);
    localStorage.setItem("loan2jointApplicationStatus", option);
    handelGetApplicationStatus(option);
  };
  const step4 = {
    id: 4,
    question: "4. Are you the sole applicant or is this a joint application?",
  };
  const finDataStep4 = listDataSubmit?.find((item) => item.id === 4);
  const updateDataStep4 = listDataSubmit?.map((item) =>
    item.id === 4 ? step4 : item
  );

  useMemo(() => {
    if (jointApplicationStatus) {
      if (finDataStep4) {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify(updateDataStep4)
        );
      } else {
        window.localStorage.setItem(
          "loan2listDataSubmit",
          JSON.stringify([...listDataSubmit, step4])
        );
      }
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  return (
    <section className="formContent-step-first">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h2 className="mb-4">
                4. Are you the sole applicant or is this <br />a joint
                application?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer w-650">
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    checkBox={jointApplicationStatus === types[1]}
                    onClick={() => onCheck(types[1])}
                    name={types[1]}
                  />
                </Col>
                <Col xs={12} sm={6} className="wForm-input">
                  <CheckboxButton
                    onClick={() => onCheck(types[2])}
                    checkBox={jointApplicationStatus === types[2]}
                    name={types[2]}
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

export default Step04;
