/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listNumberPartnerReturn = [
  "Less than 3 months",
  "Less than 6 months",
  "Less than 9 months",
  "Less than 12 months",
  "More than 12 months",
  "Not returning to work",
];

const Step14 = () => {
  const numberPartnerReturnRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [numberPartnerReturn, setNumberPartnerReturn] = useState(
    localStorage.getItem("numberPartnerReturn16") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setNumberPartnerReturn(value);
    setIsShowModal(false);
    window.localStorage.setItem("numberPartnerReturn16", value);
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
                14. When are you expected to return to work?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
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
                    label="Select when your partner return to work"
                    value={numberPartnerReturn}
                    id="numberPartnerReturn"
                    customClassLabel={numberPartnerReturn ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={numberPartnerReturnRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listNumberPartnerReturn &&
                      listNumberPartnerReturn.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={
                            numberPartnerReturn === name ? "active" : ""
                          }
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

export default Step14;
