/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import LifeInsurance from "../index";
import { getZipCodeWithAddress } from "../../../utils/googleApi";
import InputGoogleAddress from "../../../Components/InputGoogleAddress2";
import { currentStep } from "../../../utils/removeQuestion";
import { itemStep2 } from "../../../utils/listLocalStorage";

const Step30 = () => {
  let listDataSubmit = localStorage.getItem("listDataSubmit")
    ? JSON.parse(localStorage.getItem("listDataSubmit"))
    : [];
  const fullAddressRef = useRef(null);
  const [zipCodeState, setZipCodeState] = useState({
    street: localStorage.getItem("street") || "",
    city: localStorage.getItem("city") || "",
    state: localStorage.getItem("state") || "",
    postcode: localStorage.getItem("postcode") || "",
  });
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [fullAddress, setFullAddress] = useState(
    localStorage.getItem("fullAddress") || ""
  );
  const [fullAddressValid, setFullAddressValid] = useState(valid.NON_VALID);
  const [validMessage, setValidMessage] = useState("This field is required");

  useEffect(() => {
    setTimeout(() => {
      fullAddressRef?.current?.focus();
      setFullAddress(localStorage.getItem("fullAddress"));
    }, 400);
  }, []);

  const checkStatusValid = (zipCode) => {
    if (!zipCode) {
      setValidMessage("This field is required");
      setFullAddressValid(valid.INVALID);
      setFullAddress("");
      localStorage.setItem("fullAddress", "");
      localStorage.setItem("street", "");
      localStorage.setItem("city", "");
      localStorage.setItem("state", "");
      localStorage.setItem("postcode", "");
      return valid.INVALID;
    }

    if (zipCode.street === undefined) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
      localStorage.setItem("fullAddress", "");
      localStorage.setItem("street", "");
      localStorage.setItem("city", "");
      localStorage.setItem("state", "");
      localStorage.setItem("postcode", "");
      setFullAddress("");
      return valid.INVALID;
    }
    if (zipCode.street && zipCode.city && zipCode.state && zipCode.postcode) {
      setFullAddressValid(valid.VALID);
      return valid.VALID;
    }
    setFullAddressValid(valid.INVALID);
    return valid.INVALID;
  };
  const finDataStep = listDataSubmit.find((item) => item.id === 30);
  const step30 = {
    id: 30,
    question:
      "What is the full residential address \n of your current property?",
    answer: fullAddress,
    skip: "",
  };
  const nextStep = () => {
    localStorage.setItem("fullAddress", fullAddress);
    localStorage.setItem("street", zipCodeState?.street);
    localStorage.setItem("city", zipCodeState?.city);
    localStorage.setItem("state", zipCodeState?.state);
    localStorage.setItem("postcode", zipCodeState?.postcode);
    // eslint-disable-next-line
    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 30 ? step30 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, step30])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-31`,
    });
  };

  const onUpdateState = (zipCode) => {
    setZipCodeState(zipCode);
    checkStatusValid(zipCode);
  };

  const handleOnBlur = () => {};

  const handleOnFocus = () => {
    setFullAddress("");
    if (fullAddressRef?.current?.value) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
    }
    setFullAddressValid(valid.NON_VALID);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    if (fullAddress && fullAddressRef?.current?.value) {
      getZipCodeWithAddress(fullAddressRef?.current?.value, onUpdateState);
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    } else {
      if (!fullAddress && fullAddressRef?.current?.value) {
        setValidMessage("Please select your full street address");
      } else {
        setValidMessage("This field is required");
      }
      setFullAddressValid(valid.INVALID);
      return;
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
    const skipStep30 = {
      id: 30,
      question:
        "What is the full residential address \n of your current property?",
      answer: fullAddress,
      skip: !fullAddress && "Skipped",
    };

    const updateDataStep = listDataSubmit.map((item) =>
      item.id === 30 ? skipStep30 : item
    );
    if (finDataStep) {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify(updateDataStep)
      );
    } else {
      window.localStorage.setItem(
        "listDataSubmit",
        JSON.stringify([...listDataSubmit, skipStep30])
      );
    }
    history.push({
      pathname: `/refinance-fact-find/step-31`,
    });
  };

  return (
    <LifeInsurance isShowHeader activeStep={30} numberScroll={1740}>
      <section className="formContent-step-second formContent-life-insurance mb-2">
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
                  30. What is the full residential address <br />
                  of your current property?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer mt-4 pt-2">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputGoogleAddress
                      country="au"
                      defaultValue={fullAddress || ""}
                      updateState={onUpdateState}
                      updateAddress={setFullAddress}
                      invalid={fullAddressValid === valid.INVALID}
                      onKeyDown={onKeyDown}
                      onFocus={() => handleOnFocus()}
                      innerRef={fullAddressRef}
                      onBlur={handleOnBlur}
                    />
                  </Col>
                </Row>
                {fullAddressValid === valid.INVALID && (
                  <div className="text-error">
                    <p> {validMessage}</p>
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

export default Step30;
