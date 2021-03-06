/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputCustom2 from "../../../../Components/InputCustom2";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

export const types2 = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

const listNumberYearWorking = [
  "Less than 12 months",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
];

const Step16 = ({
  handleGetLoan2value,
  employmentWorkingStatus,
  workingStatus,
}) => {
  const numberYearWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [isShowStep, setIsShowStep] = useState(
    localStorage.getItem("loan2employmentStatus") || ""
  );
  const [numberYearWorking, setNumberYearWorking] = useState(
    localStorage.getItem("loan2numberYearWorking") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setNumberYearWorking(value);
    setIsShowModal(false);
    window.localStorage.setItem("loan2numberYearWorking", value);
    handleGetLoan2value("numberYearWorking", value);
  };

  useMemo(() => {
    if (employmentWorkingStatus) {
      setNumberYearWorking(localStorage.getItem("loan2numberYearWorking"));
      setIsShowStep(employmentWorkingStatus);
    }
    // eslint-disable-next-line
  }, [employmentWorkingStatus]);

  useMemo(() => {
    if (workingStatus) {
      setNumberYearWorking(localStorage.getItem("loan2numberYearWorking"));
      setIsShowStep(localStorage.getItem("loan2employmentStatus") || "");
    }
    // eslint-disable-next-line
  }, [workingStatus]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-3"
      } ${
        isShowStep === types[4] || isShowStep === types[5] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                17. How long have you been working at this job for?
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
                    id="numberYearWorking"
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

export default Step16;
