/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import { getZipCodeWithAddress } from "../../../../utils/googleApi";
import InputGoogleAddress from "../../../../Components/InputGoogleAddress2";

const Step38 = ({ handleGetLoan2value }) => {
  const fullAddressRef = useRef(null);
  const [zipCodeState, setZipCodeState] = useState({
    street: localStorage.getItem("loan2street39A") || "",
    city: localStorage.getItem("loan2city39A") || "",
    state: localStorage.getItem("loan2state39A") || "",
    postcode: localStorage.getItem("loan2postcode39A") || "",
  });

  const [fullAddress, setFullAddress] = useState(
    localStorage.getItem("loan2fullAddress39A") || ""
  );
  const [fullAddressValid, setFullAddressValid] = useState(valid.NON_VALID);
  const [validMessage, setValidMessage] = useState("This field is required");

  const checkStatusValid = (zipCode) => {
    if (!zipCode) {
      setValidMessage("This field is required");
      setFullAddressValid(valid.INVALID);
      setFullAddress("");
      localStorage.setItem("loan2fullAddress39A", "");
      localStorage.setItem("loan2street39A", "");
      localStorage.setItem("loan2city39A", "");
      localStorage.setItem("loan2state39A", "");
      localStorage.setItem("loan2postcode39A", "");
      handleGetLoan2value("fullAddress39A", "");
      return valid.INVALID;
    }

    if (zipCode.street === undefined) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
      localStorage.setItem("loan2fullAddress39A", "");
      localStorage.setItem("loan2street39A", "");
      localStorage.setItem("loan2city39A", "");
      localStorage.setItem("loan2state39A", "");
      localStorage.setItem("loan2postcode39A", "");
      handleGetLoan2value("fullAddress39A", "");
      setFullAddress("");
      return valid.INVALID;
    }
    if (zipCode.street && zipCode.city && zipCode.state && zipCode.postcode) {
      setFullAddressValid(valid.VALID);
      localStorage.setItem("loan2street39A", zipCode?.street);
      localStorage.setItem("loan2city39A", zipCode?.city);
      localStorage.setItem("loan2state39A", zipCode?.state);
      localStorage.setItem("loan2postcode39A", zipCode?.postcode);
      return valid.VALID;
    }
    setFullAddressValid(valid.INVALID);
    return valid.INVALID;
  };

  const nextStep = () => {
    localStorage.setItem("loan2fullAddress39A", fullAddress);
    localStorage.setItem("loan2street39A", zipCodeState?.street);
    localStorage.setItem("loan2city39A", zipCodeState?.city);
    localStorage.setItem("loan2state39A", zipCodeState?.state);
    localStorage.setItem("loan2postcode39A", zipCodeState?.postcode);
    handleGetLoan2value("fullAddress39A", fullAddress);
  };

  const onUpdateState = (zipCode) => {
    setZipCodeState(zipCode);
    checkStatusValid(zipCode);
  };

  const handleOnFocus = () => {
    setFullAddress("");
    if (fullAddressRef?.current?.value) {
      setValidMessage("Please select your full street address");
      setFullAddressValid(valid.INVALID);
    }
    setFullAddressValid(valid.NON_VALID);
  };

  const handleOnBlur = () => {
    if (fullAddress && fullAddressRef?.current?.value) {
      getZipCodeWithAddress(fullAddressRef?.current?.value, onUpdateState);
      nextStep();
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

  useMemo(() => {
    if (fullAddress) {
      getZipCodeWithAddress(fullAddress, onUpdateState);
      nextStep();
      localStorage.setItem("loan2street39A", zipCodeState?.street);
      localStorage.setItem("loan2city39A", zipCodeState?.city);
      localStorage.setItem("loan2state39A", zipCodeState?.state);
      localStorage.setItem("loan2postcode39A", zipCodeState?.postcode);
    }
    // eslint-disable-next-line
  }, [fullAddress]);

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                39a. What is your current living address?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputGoogleAddress
                    country="au"
                    label = "Please enter your current living address"
                    id="livingAddress"
                    defaultValue={fullAddress || ""}
                    updateState={onUpdateState}
                    updateAddress={setFullAddress}
                    invalid={fullAddressValid === valid.INVALID}
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
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Step38;
