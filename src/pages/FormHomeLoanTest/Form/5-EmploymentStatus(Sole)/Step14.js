/** @format */

import React, { useState, useRef, useMemo } from "react";
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

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
  6: "Maternal Leave",
};

const Step14 = ({ handleGetLoan2value, employmentWorkingStatus }) => {
  const numberPartnerReturnRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [numberPartnerReturn, setNumberPartnerReturn] = useState(
    localStorage.getItem("loan2numberPartnerReturn16") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  // const loan2employmentStatus = localStorage.getItem("loan2employmentStatus"); // Step1
  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const onClickSelect = (value) => {
    setNumberPartnerReturn(value);
    setIsShowModal(false);
    window.localStorage.setItem("loan2numberPartnerReturn16", value);
    handleGetLoan2value("numberPartnerReturn16", value);
  };

  useMemo(() => {
    if (employmentWorkingStatus) {
      setNumberPartnerReturn(
        localStorage.getItem("loan2numberPartnerReturn16")
      );
    }
    // eslint-disable-next-line
  }, [employmentWorkingStatus]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-2"
      } ${employmentWorkingStatus === types[6] ? "" : "opacity-03"} `}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                15. When are you expected to return to work?
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
