/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const options = [
  "Own Home Mortgage",
  "Own Home",
  "Renting",
  "Boarding",
  "Living With Parents"
];

const Step41E = ({
  handleGetLoan2value,
}) => {
  const livingSituation41ERef = useRef(null);
  const wrapperInfoRef = useRef();
  const [livingSituation41E, setLivingSituation41E] = useState(
    localStorage.getItem("livingSituation41E") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setLivingSituation41E(value);
    setIsShowModal(false);
    window.localStorage.setItem("livingSituation41E", value);
    handleGetLoan2value("livingSituation41E", value);
  };

  return (
    <section
      className="formContent-step-second formContent-life-insurance"
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                42e. What is your current living situation?
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
                    label="Please select current living situation"
                    value={livingSituation41E}
                    id="livingSituation41E"
                    customClassLabel={livingSituation41E ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={livingSituation41ERef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {options &&
                      options.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={livingSituation41E === name ? "active" : ""}
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

export default Step41E;
