/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep9 } from "../../../utils/listLocalStorage";

const listChildrenNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Step09 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const childrenNumberRef = useRef(null);
  const wrapperInfoRef = useRef();

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [childrenNumber, setChildrenNumber] = useState(
    localStorage.getItem("childrenNumber") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [childrenNumberValid, setChildrenNumberValid] = useState(
    valid.NON_VALID
  );

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkChildrenNumberStatus = (value) => {
    const test = listChildrenNumber.includes(value);
    setChildrenNumberValid(Number(test));
    setIsShowModal(false);
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 9);
  const nextStep = (value) => {
    const step9 = {
      id: 9,
      question: "How many kids or dependants do you have?",
      answer: value,
      skip: "",
    };

    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 9 ? step9 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step9])
      );
    }
    if (localStorage.getItem("childrenNumber") !== value) {
      currentStep(9, itemStep9);
    }
    window.localStorage.setItem("childrenNumber", value);
    history.push({
      pathname: `/refinance-fact-find/step-10`,
    });
  };
  const onClickSelect = (value) => {
    setChildrenNumber(value);
    setChildrenNumberValid(valid.NON_VALID);
    setIsShowModal(false);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkChildrenNumberStatus(childrenNumber);
    if (checkChildrenNumberStatus(childrenNumber)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(childrenNumber);
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
    const skipStep9 = {
      id: 9,
      question: "How many kids or dependants do you have?",
      answer: childrenNumber,
      skip: !childrenNumber && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 9 ? skipStep9 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep9])
      );
    }

    history.push({
      pathname: `/refinance-fact-find/step-10`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={9} numberScroll={520}>
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
                  9. How many kids or dependants do you have?
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
                        setChildrenNumberValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Select how many kids or dependents you have"
                      value={childrenNumber}
                      id="childrenNumber"
                      customClassLabel={childrenNumber ? "active" : ""}
                      iconArrow
                      customClassWrap="email five"
                      innerRef={childrenNumberRef}
                      readOnly
                    />
                    <ul
                      className={`list-occupation ${
                        isShowModal ? "d-block" : "d-none"
                      }`}
                    >
                      {listChildrenNumber &&
                        listChildrenNumber.map((name, index) => (
                          <li
                            key={index + 1}
                            onClick={() => onClickSelect(name)}
                            className={childrenNumber === name ? "active" : ""}
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {childrenNumberValid === valid.INVALID && (
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

export default Step09;
