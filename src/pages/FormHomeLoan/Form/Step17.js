/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const listNumberYearWorking = [
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
];

const Step17 = () => {
  const numberYearWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [numberYearWorking, setNumberYearWorking] = useState(
    localStorage.getItem("numberYearWorking") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [numberYearWorkingValid, setNumberYearWorkingValid] = useState(
    valid.NON_VALID
  );

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkNumberYearWorkingStatus = (value) => {
    const test = listNumberYearWorking.includes(value);
    setNumberYearWorkingValid(Number(test));
    setIsShowModal(false);
    return test;
  };

  const nextStep = (value) => {
    window.localStorage.setItem("numberYearWorking", value);
    history.push({
      pathname: `/refinance-fact-find/step-18`,
    });
  };
  const onClickSelect = (value) => {
    setNumberYearWorking(value);
    setNumberYearWorkingValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("numberYearWorking", value);
    setTimeout(() => {
      nextStep(value);
    }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkNumberYearWorkingStatus(numberYearWorking);
    if (checkNumberYearWorkingStatus(numberYearWorking)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(numberYearWorking);
        }, 500);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  return (
    <LifeInsurance isShowHeader>
      <section
        className={`formContent-step-second formContent-life-insurance ${
          isShowModal ? "mb-10" : "mb-2"
        }`}
      >
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  17. How long have you been working at this job for?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col
                    xs={12}
                    className="wForm-input pl-0 bankProviders"
                    ref={wrapperInfoRef}
                  >
                    <InputCustom2
                      onFocus={() => {
                        setIsShowModal(true);
                        setNumberYearWorkingValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Please select how long you have worked"
                      value={numberYearWorking}
                      id="price-input"
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
                            className={
                              numberYearWorking === name ? "active" : ""
                            }
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {numberYearWorkingValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please select an option</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="fadeInDown wow  mt-4">
                <div className="group-btn-footer col d-flex justify-content-center">
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 back"
                    type="next"
                    onClick={onClickNext}
                  >
                    BACK
                  </Button>
                  <Button
                    className="btnPrimary life wow fadeInUp mt-0 in-progress"
                    type="next"
                    onClick={onClickNext}
                  >
                    {showLoading && <Spinner animation="border" />}
                    NEXT
                  </Button>
                </div>
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step17;
