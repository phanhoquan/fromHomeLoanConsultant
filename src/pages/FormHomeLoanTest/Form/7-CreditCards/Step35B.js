/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listNumber = [
  1,
  2,
  3
];

const Step35B = ({
  handleGetLoan2value,
  employmentWorkingStatus,
  workingStatus,
}) => {
  const numberCardWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [numberCardWorking, setNumberCardWorking] = useState(
    localStorage.getItem("numberCardWorking") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setNumberCardWorking(value);
    setIsShowModal(false);
    window.localStorage.setItem("numberCardWorking", value);
    handleGetLoan2value("numberCardWorking", value);
  };

  useMemo(() => {
    if (employmentWorkingStatus) {
      setNumberCardWorking(localStorage.getItem("numberCardWorking"));
    }
    // eslint-disable-next-line
  }, [employmentWorkingStatus]);

  useMemo(() => {
    if (workingStatus) {
      setNumberCardWorking(localStorage.getItem("numberCardWorking"));
    }
    // eslint-disable-next-line
  }, [workingStatus]);

  return (
    <section
      className="formContent-step-second formContent-life-insurance"
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                35b. How many credit cards do you own?
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
                    label="Please select number credit cards"
                    value={numberCardWorking}
                    id="listNumber35B"
                    customClassLabel={numberCardWorking ? "active" : ""}
                    iconArrow
                    customClassWrap="email five"
                    innerRef={numberCardWorkingRef}
                    readOnly
                  />
                  <ul
                    className={`list-occupation ${
                      isShowModal ? "d-block" : "d-none"
                    }`}
                  >
                    {listNumber &&
                      listNumber.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={numberCardWorking === name ? "active" : ""}
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

export default Step35B;
