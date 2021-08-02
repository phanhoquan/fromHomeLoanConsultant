/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
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
  1: "Sole Applicant",
  2: "Joint Applicant",
};

export const types3 = {
  1: "Full Time ",
  2: "Part Time ",
  3: "Casual ",
  4: "Self Employed ",
  5: "Unemployed ",
  6: "Maternal Leave ",
};

const Step23 = ({
  handleGetLoan2value,
  jointApplicationStatus,
  employmentPartnersWorkingStatus,
}) => {
  const numberPartnerReturnRef = useRef(null);
  const wrapperInfoRef = useRef();
  // const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");

  const [numberPartnerReturn, setNumberPartnerReturn] = useState(
    localStorage.getItem("loan2numberPartnerReturn") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [numberPartnerReturnValid, setNumberPartnerReturnValid] = useState(
    valid.NON_VALID
  );

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkNumberPartnerReturnStatus = (value) => {
    const test = listNumberPartnerReturn.includes(value);
    setNumberPartnerReturnValid(Number(test));
    setIsShowModal(false);
    return test;
  };

  const onClickSelect = (value) => {
    setNumberPartnerReturn(value);
    setNumberPartnerReturnValid(valid.NON_VALID);
    setIsShowModal(false);
    checkNumberPartnerReturnStatus(value);
    window.localStorage.setItem("loan2numberPartnerReturn", value);
    handleGetLoan2value("numberPartnerReturn", value);
  };

  useMemo(() => {
    if (jointApplicationStatus !== types[2]) {
      window.localStorage.setItem("loan2numberPartnerReturn", "");
      setNumberPartnerReturn("");
      handleGetLoan2value("numberPartnerReturn", "");
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  useMemo(() => {
    if (
      employmentPartnersWorkingStatus &&
      employmentPartnersWorkingStatus !== types3[6]
    ) {
      window.localStorage.setItem("loan2numberPartnerReturn", "");
      setNumberPartnerReturn("");
      handleGetLoan2value("numberPartnerReturn", "");
    }
    // eslint-disable-next-line
  }, [employmentPartnersWorkingStatus]);

  return (
    <section
      className={`formContent-step-second formContent-life-insurance ${
        isShowModal ? "mb-10" : "mb-3"
      } ${
        jointApplicationStatus !== types[2] ||
        employmentPartnersWorkingStatus !== types3[6]
          ? "opacity-03"
          : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                24. When is your partner expected <br />
                to return to work?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col
                  xs={12}
                  className="wForm-input pl-0 bankProviders"
                  ref={wrapperInfoRef}
                >
                  <InputCustom2
                    onFocus={() => {
                      setIsShowModal(true);
                      setNumberPartnerReturnValid(valid.NON_VALID);
                    }}
                    onChange={() => () => {}}
                    label="Select when your partner return to work"
                    value={numberPartnerReturn}
                    id="numberPartnerReturn2"
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
              {numberPartnerReturnValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please select an option</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step23;
