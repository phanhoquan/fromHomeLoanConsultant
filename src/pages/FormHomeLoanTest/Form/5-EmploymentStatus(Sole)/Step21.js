/** @format */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import { getDataListOccupationOptions } from "../../../../utils/quoteOccupations";
import originArray from "../../../../utils/quoteOccupations";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step21 = ({ handleGetLoan2value, jointApplicationStatus }) => {
  const partnersOccupationRef = useRef(null);

  // const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");

  const wrapperInfoRef = useRef();
  const [isShowModal, setIsShowModal] = useState(false);
  const [partnersOccupation, setPartnersOccupation] = useState(
    localStorage.getItem("loan2partnersOccupation") || ""
  );
  const [dataListPartnersOccupations, setDataListPartnersOccupations] =
    useState(originArray || []);

  const [partnersOccupationValid, setPartnersOccupationValid] = useState(
    valid.NON_VALID
  );

  const checkPartnersOccupationStatus = (value) => {
    setIsShowModal(false);
    let test = originArray.includes(value);
    let testValid = value && value.length >= 2;
    if (!test) {
      setPartnersOccupationValid(Number(testValid));
      return testValid;
    } else {
      setPartnersOccupationValid(Number(test));
      return test;
    }
  };
  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  useEffect(() => {
    if (isShowModal) {
      setDataListPartnersOccupations([
        ...getDataListOccupationOptions(partnersOccupation),
        partnersOccupation,
      ]);
    }
    // eslint-disable-next-line
  }, [partnersOccupation]);

  const onKeyUpHandle = (name, value) => {
    if (name === "partnersOccupation") {
      setPartnersOccupation(value.replace(/[0-9]/g, ""));
      if (value?.length >= 2) {
        setIsShowModal(true);
      } else {
        setIsShowModal(false);
      }
    }
  };

  const handelOnFocus = (name, value) => {
    if (name?.length >= 2) {
      setIsShowModal(true);
      window.localStorage.setItem("loan2partnersOccupation", value);
      handleGetLoan2value("partnersOccupation", value);
    } else {
      setIsShowModal(false);
    }
    setPartnersOccupationValid(valid.NON_VALID);
  };

  const onClickSelect = (name) => {
    setPartnersOccupation(name);
    checkPartnersOccupationStatus(name);
    setIsShowModal(false);
    window.localStorage.setItem("loan2partnersOccupation", name);
    handleGetLoan2value("partnersOccupation", name);
  };

  useMemo(() => {
    if (jointApplicationStatus && jointApplicationStatus !== types[2]) {
      setPartnersOccupation("");
      setIsShowModal(false);
      // window.localStorage.setItem("loan2partnersOccupation", "");
      handleGetLoan2value("partnersOccupation", "");
    }
    // eslint-disable-next-line
  }, [jointApplicationStatus]);

  const showClass =
    isShowModal &&
    partnersOccupation?.length >= 2 &&
    dataListPartnersOccupations?.length > 0
      ? "d-block"
      : "d-none";

  return (
    <section
      className={`formContent-step-second form-six formContent-life-insurance mb-3 ${
        jointApplicationStatus !== types[2] ? "opacity-03" : ""
      }`}
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2>25. What is your partners occupation?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} className="wForm-input pl-0" ref={wrapperInfoRef}>
                  <InputCustom2
                    onFocus={() => handelOnFocus(partnersOccupation)}
                    onChange={(e) =>
                      onKeyUpHandle("partnersOccupation", e.target.value)
                    }
                    label="Partners Occupation"
                    value={partnersOccupation}
                    id="partnersOccupation"
                    customClassWrap="email"
                    customClassLabel={partnersOccupation ? "active" : ""}
                    innerRef={partnersOccupationRef}
                  />

                  <ul className={`list-occupation ${showClass}`}>
                    {dataListPartnersOccupations &&
                      dataListPartnersOccupations.length > 0 &&
                      dataListPartnersOccupations.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={
                            partnersOccupation === name ? "active" : ""
                          }
                        >
                          {name}
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
              {partnersOccupationValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your partners occupation</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step21;
