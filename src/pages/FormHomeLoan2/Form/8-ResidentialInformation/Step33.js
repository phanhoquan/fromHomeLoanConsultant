/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const listHomeLoan = ["As soon as possible", "Within the next week", "Within the next month", "Within 6 Months", "6 months or more"];

const Step33 = ({ handleGetLoan2value }) => {
  const timeRefinancingRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [timeRefinancing, setTimeRefinancing] = useState(
    localStorage.getItem("loan2timeRefinancing") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setTimeRefinancing(value);
    setIsShowModal(false);
    localStorage.setItem("loan2timeRefinancing", value);
    handleGetLoan2value("timeRefinancing", value);
  };

  useMemo(() => {
    setTimeRefinancing(localStorage.getItem("loan2timeRefinancing"));

    // eslint-disable-next-line
  }, [timeRefinancing]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-5 pb-50" : "mb-5"
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                38. What kind of time frame are you thinking of refinancing?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2 mb-2">
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
                    value={timeRefinancing}
                    id="timeRefinancing"
                    customClassLabel={timeRefinancing ? "active" : ""}
                    iconArrow
                    customClassWrap=" five"
                    innerRef={timeRefinancingRef}
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
                          className={timeRefinancing === name ? "active" : ""}
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

export default Step33;
