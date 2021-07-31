/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listHomeLoan = ["Spouse", "Defacto", "Sibling", "Parent", "Offspring"];

const Step06 = () => {
  const relationshipYourRef = useRef(null);
  const wrapperInfoRef = useRef();
  const firstNameOther = localStorage.getItem("firstNameOther");
  const [relationshipYour, setRelationshipYour] = useState(
    localStorage.getItem("relationshipYour") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setRelationshipYour(value);
    setIsShowModal(false);
    window.localStorage.setItem("relationshipYour", value);
  };

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-2"
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                6. What is your relationship with {firstNameOther}?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-4 pt-2">
                <Col
                  xs={12}
                  className="wForm-input pl-0 bankProviders"
                  ref={wrapperInfoRef}
                >
                  <InputCustom2
                    onFocus={() => {
                      setIsShowModal(true);
                    }}
                    onChange={() => () => {}}
                    label="Select your relationship with the applicant"
                    value={relationshipYour}
                    id="relationshipYour"
                    customClassLabel={relationshipYour ? "active" : ""}
                    iconArrow
                    customClassWrap=" five"
                    innerRef={relationshipYourRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listHomeLoan &&
                      listHomeLoan.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={relationshipYour === name ? "active" : ""}
                        >
                          {name}
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step06;
