/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import InputCustom2 from "../../../Components/InputCustom2";
import { itemStep19 } from "../../../utils/listLocalStorage";
import { currentStep } from "../../../utils/removeQuestion";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const listBusinessBeenRegistered = [
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5+ years",
  "10+ years",
  "15+ years",
];

const Step19 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const businessBeenRegisteredRef = useRef(null);
  const wrapperInfoRef = useRef();

  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [businessBeenRegistered, setBusinessBeenRegistered] = useState(
    localStorage.getItem("businessBeenRegistered") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [businessBeenRegisteredValid, setBusinessBeenRegisteredValid] =
    useState(valid.NON_VALID);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkBusinessBeenRegisteredStatus = (value) => {
    const test = listBusinessBeenRegistered.includes(value);
    setBusinessBeenRegisteredValid(Number(test));
    setIsShowModal(false);
    return test;
  };

  const finDataStep = listDataSubmit.find((item) => item.id === 19);

  const nextStep = (value) => {
    const step19 = {
      id: 19,
      question:
        "How many years has the ABN for this business been registered for?",
      answer: value,
      skip: "",
    };

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
    if (localStorage.getItem("businessBeenRegistered") !== value) {
      currentStep(19, itemStep19);
    }
    window.localStorage.setItem("businessBeenRegistered", value);
    history.push({
      pathname: `/refinance-fact-find/step-21`,
    });
  };
  const onClickSelect = (value) => {
    setBusinessBeenRegistered(value);
    setBusinessBeenRegisteredValid(valid.NON_VALID);
    setIsShowModal(false);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkBusinessBeenRegisteredStatus(businessBeenRegistered);
    if (checkBusinessBeenRegisteredStatus(businessBeenRegistered)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep(businessBeenRegistered);
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
      question:
        "How many years has the ABN for this business been registered for?",
      answer: businessBeenRegistered,
      skip: !businessBeenRegistered && "Skipped",
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
    history.push({
      pathname: `/refinance-fact-find/step-21`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={19} numberScroll={1000}>
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
                  19. How many years has the ABN for this <br />
                  business been registered for?
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
                        setBusinessBeenRegisteredValid(valid.NON_VALID);
                      }}
                      onKeyPress={onKeyDown}
                      onChange={() => () => {}}
                      label="Please select how long you have worked"
                      value={businessBeenRegistered}
                      id="input"
                      customClassLabel={businessBeenRegistered ? "active" : ""}
                      iconArrow
                      customClassWrap="email five"
                      innerRef={businessBeenRegisteredRef}
                      readOnly
                    />
                    <ul
                      className={`list-occupation ${
                        isShowModal ? "d-block" : "d-none"
                      }`}
                    >
                      {listBusinessBeenRegistered &&
                        listBusinessBeenRegistered.map((name, index) => (
                          <li
                            key={index + 1}
                            onClick={() => onClickSelect(name)}
                            className={
                              businessBeenRegistered === name ? "active" : ""
                            }
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
                {businessBeenRegisteredValid === valid.INVALID && (
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

export default Step19;
