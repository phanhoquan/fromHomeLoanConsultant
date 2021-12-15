/** @format */

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import { getDataListOccupationOptions } from "../../../../utils/quoteOccupations";
import originArray from "../../../../utils/quoteOccupations";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

const Step15 = ({
  handleGetLoan2value,
  employmentWorkingStatus,
  workingStatus,
}) => {
  const occupationRef = useRef(null);
  const wrapperInfoRef = useRef();
  const [isShowModal, setIsShowModal] = useState(false);
  const [occupation, setOccupation] = useState(
    localStorage.getItem("loan2occupation17B1") || ""
  );
  const [dataListOccupations, setDataListOccupations] = useState(
    originArray || []
  );
  const [occupationValid, setOccupationValid] = useState(valid.NON_VALID);

  const checkOccupationStatus = (value) => {
    setIsShowModal(false);
    let test = originArray.includes(value);
    let testValid = value && value.length >= 2;
    if (!test) {
      setOccupationValid(Number(testValid));
      return testValid;
    } else {
      setOccupationValid(Number(test));
      return test;
    }
  };
  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  useEffect(() => {
    if (isShowModal) {
      setDataListOccupations([
        ...getDataListOccupationOptions(occupation),
        occupation,
      ]);
    }
    // eslint-disable-next-line
  }, [occupation]);

  const onKeyUpHandle = (name, value) => {
    if (name === "loan2occupation17B1") {
      setOccupation(value);
      if (value?.length >= 2) {
        setIsShowModal(true);
        window.localStorage.setItem("loan2occupation17B1", value);
        handleGetLoan2value("loan2occupation17B1", value);
      } else {
        setIsShowModal(false);
      }
    }
  };

  const handelOnFocus = (name) => {
    if (name?.length >= 2) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
    setOccupationValid(valid.NON_VALID);
  };

  const onClickSelect = (name) => {
    setOccupation(name);
    checkOccupationStatus(name);
    setIsShowModal(false);
    window.localStorage.setItem("loan2occupation17B1", name);
    handleGetLoan2value("loan2occupation17B1", name);
  };

  const showClass =
    isShowModal && occupation?.length >= 2 && dataListOccupations?.length > 0
      ? "d-block"
      : "d-none";

  useMemo(() => {
    if (employmentWorkingStatus) {
      setOccupation(localStorage.getItem("loan2occupation17B1"));
    }
    // eslint-disable-next-line
  }, [employmentWorkingStatus]);

  useMemo(() => {
    if (workingStatus) {
      setOccupation(localStorage.getItem("loan2occupation17B1"));
    }
    // eslint-disable-next-line
  }, [workingStatus]);

  return (
    <section
      className="formContent-step-second form-six formContent-life-insurance mb-3"
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2>17b. What was your previous occupation?</h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-2">
                <Col xs={12} className="wForm-input pl-0" ref={wrapperInfoRef}>
                  <InputCustom2
                    onFocus={() => handelOnFocus(occupation)}
                    onChange={(e) =>
                      onKeyUpHandle("occupation", e.target.value)
                    }
                    label="Current job role"
                    value={occupation}
                    id="iconOccupation17b"
                    customClassLabel={occupation ? "active" : ""}
                    innerRef={occupationRef}
                  />

                  <ul className={`list-occupation ${showClass}`}>
                    {dataListOccupations &&
                      dataListOccupations.length > 0 &&
                      dataListOccupations.map((name, index) => (
                        <li
                          key={index + 1}
                          onClick={() => onClickSelect(name)}
                          className={occupation === name ? "active" : ""}
                        >
                          {name}
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
              {occupationValid === valid.INVALID && (
                <div className="text-error">
                  <p>Please enter your working</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step15;
