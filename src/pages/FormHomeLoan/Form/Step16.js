/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import LifeInsurance from "../index";
import { getDataListOccupationOptions } from "../../../utils/quoteOccupations";
import originArray from "../../../utils/quoteOccupations";
import useOnClickOutside from "../../../hooks/useClickOutSide";

const Step16 = () => {
  const occupationRef = useRef(null);

  const wrapperInfoRef = useRef();
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [occupation, setOccupation] = useState(
    localStorage.getItem("occupation") || ""
  );
  const [dataListOccupations, setDataListOccupations] = useState(
    originArray || []
  );
  const [occupationValid, setOccupationValid] = useState(valid.NON_VALID);

  useEffect(() => {
    setTimeout(() => {
      occupationRef?.current?.focus();
    }, 400);
  }, []);

  const checkOccupationStatus = (value) => {
    setIsShowModal(false);
    let test = originArray.includes(value);
    let testValid = /^([a-zA-Z\s]{2,})$/.test(value);
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

  const nextStep = () => {
    window.localStorage.setItem("occupation", occupation);

    history.push({
      pathname: `/refinance-fact-find/step-17`,
    });
  };

  const onKeyUpHandle = (name, value) => {
    if (name === "occupation") {
      setOccupation(value.replace(/[0-9]/g, ""));
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
    setOccupationValid(valid.NON_VALID);
  };

  const onClickSelect = (name) => {
    setOccupation(name);
    checkOccupationStatus(name);
    setIsShowModal(false);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    window.localStorage.setItem("occupation", occupation);
    checkOccupationStatus(occupation);
    if (checkOccupationStatus(occupation)) {
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

  const showClass =
    isShowModal && occupation?.length >= 2 && dataListOccupations?.length > 0
      ? "d-block"
      : "d-none";

  const onClickBack = () => {
    history.go(-1);
  };

  return (
    <LifeInsurance isShowHeader>
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
                <h2>16. What job role are you currently working in?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4">
                  <Col
                    xs={12}
                    className="wForm-input pl-0"
                    ref={wrapperInfoRef}
                  >
                    <InputCustom2
                      onFocus={() => handelOnFocus(occupation)}
                      onKeyPress={onKeyDown}
                      onChange={(e) =>
                        onKeyUpHandle("occupation", e.target.value)
                      }
                      label="Current job role"
                      value={occupation}
                      id="iconOccupation"
                      customClassLabel={occupation ? "active" : ""}
                      customClassWrap="email"
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
                <div className="SKIP">SKIP</div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default Step16;
