/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const listOtherChildrenNumber = ["1", "2", "3", "4", "5"];

const Step12 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const otherChildrenNumberRef = useRef(null);
  const wrapperInfoRef = useRef();

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [otherChildrenNumber, setOtherChildrenNumber] = useState(
    localStorage.getItem("otherChildrenNumber") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [otherChildrenNumberValid, setOtherChildrenNumberValid] = useState(
    valid.NON_VALID
  );

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkOtherChildrenNumberStatus = (value) => {
    const test = listOtherChildrenNumber.includes(value);
    setOtherChildrenNumberValid(Number(test));
    setIsShowModal(false);
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 12);
  const nextStep = (value) => {
    const step12 = {
      id: 12,
      question: "How many other dependants do you have?",
      answer: value,
      skip: "",
    };
    window.localStorage.setItem("otherChildrenNumber", value);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 12 ? step12 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step12])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-13`,
    });
  };
  const onClickSelect = (value) => {
    setOtherChildrenNumber(value);
    setOtherChildrenNumberValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("otherChildrenNumber", value);
    setTimeout(() => {
      nextStep(value);
    }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkOtherChildrenNumberStatus(otherChildrenNumber);
    if (checkOtherChildrenNumberStatus(otherChildrenNumber)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(otherChildrenNumber);
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

  const skipStep12 = {
    id: 12,
    question: "How many other dependants do you have?",
    answer: otherChildrenNumber,
    skip: !otherChildrenNumber && "Skipped",
  };

  const handleSkip = () => {
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 12 ? skipStep12 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep12])
      );
    }

    history.push({
      pathname: `/refinance-fact-find/step-13`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={12}>
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
                  12. How many other dependants do you have?
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
                        setOtherChildrenNumberValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Select your number of dependents"
                      value={otherChildrenNumber}
                      id="price-input"
                      customClassLabel={otherChildrenNumber ? "active" : ""}
                      iconArrow
                      customClassWrap="email five"
                      innerRef={otherChildrenNumberRef}
                      readOnly
                    />
                    <ul
                      className={`list-occupation ${
                        isShowModal ? "d-block" : "d-none"
                      }`}
                    >
                      {listOtherChildrenNumber &&
                        listOtherChildrenNumber.map((name, index) => (
                          <li
                            key={index + 1}
                            onClick={() => onClickSelect(name)}
                            className={
                              otherChildrenNumber === name ? "active" : ""
                            }
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {otherChildrenNumberValid === valid.INVALID && (
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

export default Step12;
