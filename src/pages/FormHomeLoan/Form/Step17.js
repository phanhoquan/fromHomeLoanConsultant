/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

const listNumberYearWorking = [
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
];

const Step17 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const numberYearWorkingRef = useRef(null);
  const wrapperInfoRef = useRef();
  const employmentStatus = localStorage.getItem("employmentStatus");
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

  const finDataStep = listDataSubmit.find((item) => item.id === 17);

  const nextStep = (value) => {
    const step17 = {
      id: 17,
      question: "How long have you been working at this job for?",
      answer: value,
      skip: "",
    };
    window.localStorage.setItem("numberYearWorking", value);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 17 ? step17 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step17])
      );
    }
    if (employmentStatus === types[3]) {
      history.push({
        pathname: `/refinance-fact-find/step-18`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    }
  };
  const onClickSelect = (value) => {
    setNumberYearWorking(value);
    setNumberYearWorkingValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("numberYearWorking", value);
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

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep17 = {
      id: 17,
      question: "How long have you been working at this job for?",
      answer: numberYearWorking,
      skip: !numberYearWorking && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 17 ? skipStep17 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep17])
      );
    }

    if (employmentStatus === types[3]) {
      history.push({
        pathname: `/refinance-fact-find/step-18`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={17} numberScroll={900}>
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
                    onClick={onClickBack}
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
                <div
                  className="SKIP"
                  onClick={() => handleSkip()}
                  role="button"
                >
                  SKIP
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step17;
