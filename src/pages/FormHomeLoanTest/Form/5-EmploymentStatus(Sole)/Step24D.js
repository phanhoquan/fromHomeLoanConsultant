/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
}

const listNumberYearWorking = [
  "Less than 12 months",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
];

const Step24D = ({
  handleGetLoan2value,
  jointApplicationStatus
}) => {
  const numberYearWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [numberYearWorking, setNumberYearWorking] = useState(
    localStorage.getItem("numberYearWorking24D") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setNumberYearWorking(value);
    setIsShowModal(false);
    window.localStorage.setItem("numberYearWorking24D", value);
    handleGetLoan2value("numberYearWorking24D", value);
  };

  useMemo(() => {
    if (jointApplicationStatus && jointApplicationStatus !== types[2]) {
      setNumberYearWorking("");
      setIsShowModal(false);
      handleGetLoan2value("numberYearWorking24D", "");
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  return (
    <section
      className="formContent-step-second formContent-life-insurance"
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
               24d. How long has your partner been working in this role for?
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
                    value={numberYearWorking}
                    id="numberYearWorking24D"
                    customClassLabel={numberYearWorking ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={numberYearWorkingRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listNumberYearWorking &&
                      listNumberYearWorking.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={numberYearWorking === name ? "active" : ""}
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

export default Step24D;
