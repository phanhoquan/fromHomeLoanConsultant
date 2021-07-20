/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import useOnClickOutside from "../../../hooks/useClickOutSide";

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

const Step24 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const numberPartnerReturnRef = useRef(null);
  const wrapperInfoRef = useRef();
  const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [numberPartnerReturn, setNumberPartnerReturn] = useState(
    localStorage.getItem("numberPartnerReturn") || ""
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
  const finDataStep = listDataSubmit.find((item) => item.id === 24);
  const nextStep = (value) => {
    const step24 = {
      id: 24,
      question: "When is your partner expected \n to return to work?",
      answer: value,
      skip: "",
    };
    window.localStorage.setItem("numberPartnerReturn", value);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 24 ? step24 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step24])
      );
    }
    if (jointApplicationStatus === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-26`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  const onClickSelect = (value) => {
    setNumberPartnerReturn(value);
    setNumberPartnerReturnValid(valid.NON_VALID);
    setIsShowModal(false);
    window.localStorage.setItem("numberPartnerReturn", value);
    // setTimeout(() => {
    //   nextStep(value);
    // }, 500);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkNumberPartnerReturnStatus(numberPartnerReturn);
    if (checkNumberPartnerReturnStatus(numberPartnerReturn)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(numberPartnerReturn);
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
    const skipStep24 = {
      id: 24,
      question: "When is your partner expected \n to return to work?",
      answer: numberPartnerReturn,
      skip: !numberPartnerReturn && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 24 ? skipStep24 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep24])
      );
    }
    if (jointApplicationStatus === types[1]) {
      history.push({
        pathname: `/refinance-fact-find/step-26`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={24}>
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
                  24. When is your partner expected <br />
                  to return to work?
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
                        setNumberPartnerReturnValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Select when your partner return to work"
                      value={numberPartnerReturn}
                      id="price-input"
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

export default Step24;
