/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";

const Step18 = () => {
  const typeOfBusinessRef = useRef(null);
  const history = useHistory();
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
    let test = /^([A-Za-z]{2,})$/.test(value);
    setTypeOfBusinessValid(Number(test));
    return test;
  };

  const nextStep = () => {
    window.localStorage.setItem("typeOfBusinessOther", typeOfBusiness);
    history.push({
      pathname: `/refinance-fact-find/step-19`,
    });
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
          nextStep();
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
                <h2 className="mb-4">18. What type of business is this?</h2>
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

export default Step18;
