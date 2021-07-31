/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep19 } from "../../../utils/listLocalStorage";

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Casual",
  4: "Self Employed",
  5: "Unemployed",
};

const Step19 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const typeOfBusinessRef = useRef(null);
  const history = useHistory();
  const employmentStatus = localStorage.getItem("employmentWorkingStatus");
  const [showLoading, setShowLoading] = useState(false);
  const [typeOfBusiness, setTypeOfBusiness] = useState(
    localStorage.getItem("typeOfBusinessOther") || ""
  );

  const [typeOfBusinessValid, setTypeOfBusinessValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      typeOfBusinessRef?.current?.focus();
    }, 400);
  }, []);

  const checkTypeOfBusinessStatus = (value) => {
    let test = value?.trim()?.length > 1;
    setTypeOfBusinessValid(Number(test));
    return test;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 19);
  const step19 = {
    id: 19,
    question: "What type of business is this?",
    answer: typeOfBusiness,
    skip: "",
  };
  const nextStep = (option) => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 19 ? step19 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step19])
      );
    }
    if (localStorage.getItem("typeOfBusinessOther") !== option) {
      currentStep(19, itemStep19);
    }
    window.localStorage.setItem("typeOfBusinessOther", option);
    if (employmentStatus === types[4]) {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-21`,
      });
    }
  };
  const onKeyUpHandle = (value) => {
    setTypeOfBusiness(value.replace(/[0-9]/g, ""));
  };

  const onClickNext = () => {
    setShowLoading(true);
    checkTypeOfBusinessStatus(typeOfBusiness);
    setTimeout(() => setShowLoading(false), 500);

    if (checkTypeOfBusinessStatus(typeOfBusiness)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(typeOfBusiness);
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
    const skipStep19 = {
      id: 19,
      question: "What type of business is this?",
      answer: typeOfBusiness,
      skip: !typeOfBusiness && "Skipped",
    };
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 19 ? skipStep19 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep19])
      );
    }

    if (employmentStatus === types[4]) {
      history.push({
        pathname: `/refinance-fact-find/step-20`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-21`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={19} numberScroll={900}>
      <section className="formContent-step-first pb-5">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="mb-4">19. What type of business is this?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setTypeOfBusinessValid(valid.NON_VALID)}
                      onKeyPress={onKeyDown}
                      onChange={(e) => onKeyUpHandle(e.target.value)}
                      label="Type of business"
                      value={
                        typeOfBusiness &&
                        typeOfBusiness[0].toUpperCase() +
                          typeOfBusiness.slice(1)
                      }
                      id="typeOfBusiness"
                      customClassLabel={typeOfBusiness ? "active" : ""}
                      innerRef={typeOfBusinessRef}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                {typeOfBusinessValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter in a valid</p>
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

export default Step19;
