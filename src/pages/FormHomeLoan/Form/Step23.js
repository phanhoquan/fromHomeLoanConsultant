/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";
import { getDataListOccupationOptions } from "../../../utils/quoteOccupations";
import originArray from "../../../utils/quoteOccupations";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep23 } from "../../../utils/listLocalStorage";
import useOnClickOutside from "../../../hooks/useClickOutSide";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const Step23 = () => {
  const partnersOccupationRef = useRef(null);
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];

  const jointApplicationStatus = localStorage.getItem("jointApplicationStatus");

  const wrapperInfoRef = useRef();
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [partnersOccupation, setPartnersOccupation] = useState(
    localStorage.getItem("partnersOccupation") || ""
  );
  const [dataListPartnersOccupations, setDataListPartnersOccupations] =
    useState(originArray || []);
  const [partnersOccupationValid, setPartnersOccupationValid] = useState(
    valid.NON_VALID
  );

  useEffect(() => {
    setTimeout(() => {
      partnersOccupationRef?.current?.focus();
    }, 400);
  }, []);

  const checkPartnersOccupationStatus = (value) => {
    setIsShowModal(false);
    let test = originArray.includes(value);
    let testValid = /^([a-zA-Z\s]{2,})$/.test(value);
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
  const finDataStep = listDataSubmit.find((item) => item.id === 23);
  const step23 = {
    id: 23,
    question: "What is your partners occupation?",
    answer: partnersOccupation,
    skip: "",
  };
  const nextStep = (option) => {
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 23 ? step23 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step23])
      );
    }
    if (localStorage.getItem("partnersOccupation") !== partnersOccupation) {
      currentStep(23, itemStep23);
    }
    window.localStorage.setItem("partnersOccupation", option);
    if (jointApplicationStatus === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-24`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

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

  const handelOnFocus = (name) => {
    if (name?.length >= 2) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
    setPartnersOccupationValid(valid.NON_VALID);
  };

  const onClickSelect = (name) => {
    setPartnersOccupation(name);
    checkPartnersOccupationStatus(name);
    setIsShowModal(false);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPartnersOccupationStatus(partnersOccupation);
    if (checkPartnersOccupationStatus(partnersOccupation)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(partnersOccupation);
        }, 500);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickNext();
    }
  };

  const showClass =
    isShowModal &&
    partnersOccupation?.length >= 2 &&
    dataListPartnersOccupations?.length > 0
      ? "d-block"
      : "d-none";

  const onClickBack = () => {
    history.go(-1);
  };

  const handleSkip = () => {
    const skipStep23 = {
      id: 23,
      question: "What is your partners occupation?",
      answer: partnersOccupation,
      skip: !partnersOccupation && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 23 ? skipStep23 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep23])
      );
    }
    if (jointApplicationStatus === types[2]) {
      history.push({
        pathname: `/refinance-fact-find/step-24`,
      });
    } else {
      history.push({
        pathname: `/refinance-fact-find/step-27`,
      });
    }
  };

  return (
    <LifeInsurance isShowHeader activeStep={23} numberScroll={1000}>
      <section className="formContent-step-second form-six formContent-life-insurance mb-0">
        <Container>
          <div
            className={
              "wForm wow " +
              (history?.location?.back ? "fadeInDown" : "fadeInUp")
            }
          >
            <Row>
              <Col xs={12} className="text-center">
                <h2>23. What is your partners occupation?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col
                    xs={12}
                    className="wForm-input pl-0"
                    ref={wrapperInfoRef}
                  >
                    <InputCustom2
                      onFocus={() => handelOnFocus(partnersOccupation)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle("partnersOccupation", e.target.value)
                      }
                      label="Partners Occupation"
                      value={partnersOccupation}
                      id="iconOccupation"
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

export default Step23;
