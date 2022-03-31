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

const Step40 = ({
  handleGetLoan2value
}) => {
  const numberYearWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();

  const [timeLiving39D, setTimeLiving39D] = useState(
    localStorage.getItem("timeLiving39D") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setTimeLiving39D(value);
    setIsShowModal(false);
    window.localStorage.setItem("timeLiving39D", value);
    handleGetLoan2value("timeLiving39D", value);
  };

  useMemo(() => {
    if (timeLiving39D) {
      setTimeLiving39D(localStorage.getItem("timeLiving39D"));
    }
    // eslint-disable-next-line
  }, [timeLiving39D]);

  return (
    <section
    className={`formContent-step-second formContent-life-insurance ${
      isShowModal ? "mb-10" : "mb-3" } `}
  >
      <Container>
        <div className="wForm wow fadeInUp">
          <Row>
            <Col xs={12} className="text-center mt-0">
              <h2 className="mb-3">
                42d. How long were you living at that address for?
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
                    label="Please select how long you living at that address"
                    value={timeLiving39D}
                    id="numberYearWorking"
                    customClassLabel={timeLiving39D ? "active" : ""}
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
                          className={timeLiving39D === name ? "active" : ""}
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

export default Step40;
