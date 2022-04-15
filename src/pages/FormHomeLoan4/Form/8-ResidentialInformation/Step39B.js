/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listTimeLiving39B = [
  "Less than 12 months",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
];

const Step41B = ({
  handleGetLoan2value,
}) => {
  const timeLiving39BRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [timeLiving39B, setTimeLiving39B] = useState(
    localStorage.getItem("timeLiving39B") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setTimeLiving39B(value);
    setIsShowModal(false);
    window.localStorage.setItem("timeLiving39B", value);
    handleGetLoan2value("timeLiving39B", value);
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
                42b. How long have you been living at this address for?
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
                    label="Please select your time living in this address"
                    value={timeLiving39B}
                    id="timeLiving39B"
                    customClassLabel={timeLiving39B ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={timeLiving39BRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listTimeLiving39B &&
                      listTimeLiving39B.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={timeLiving39B === name ? "active" : ""}
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

export default Step41B;
