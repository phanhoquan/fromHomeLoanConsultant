/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listBusinessBeenRegistered = [
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
  "10+ years",
  "15+ years",
];

const Step18 = ({ handleGetLoan2value }) => {
  const businessBeenRegisteredRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [businessBeenRegistered, setBusinessBeenRegistered] = useState(
    localStorage.getItem("loan2businessBeenRegistered") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setBusinessBeenRegistered(value);
    setIsShowModal(false);
    window.localStorage.setItem("loan2businessBeenRegistered", value);
    handleGetLoan2value("businessBeenRegistered", value);
  };

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-0"
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                18. How many years has the ABN for this <br />
                business been registered for?
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
                    label="Please select how long you have worked"
                    value={businessBeenRegistered}
                    id="input"
                    customClassLabel={businessBeenRegistered ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={businessBeenRegisteredRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listBusinessBeenRegistered &&
                      listBusinessBeenRegistered.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={
                            businessBeenRegistered === name ? "active" : ""
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

export default Step18;
