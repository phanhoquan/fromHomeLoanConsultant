/** @format */

import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import { getZipCodeWithAddress } from "../../../../utils/googleApi";
import InputGoogleAddress from "../../../../Components/InputGoogleAddress2";

const Step31 = () => {
  const fullAddressRef = useRef(null);
  const [zipCodeState, setZipCodeState] = useState({
    street: localStorage.getItem("street") || "",
    city: localStorage.getItem("city") || "",
    state: localStorage.getItem("state") || "",
    postcode: localStorage.getItem("postcode") || "",
  });

  const [fullAddress, setFullAddress] = useState(
    localStorage.getItem("fullAddress") || ""
  );
  const [fullAddressValid, setFullAddressValid] = useState(valid.NON_VALID);
  const [validMessage, setValidMessage] = useState("This field is required");

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

  const nextStep = () => {
    localStorage.setItem("fullAddress", fullAddress);
    localStorage.setItem("street", zipCodeState?.street);
    localStorage.setItem("city", zipCodeState?.city);
    localStorage.setItem("state", zipCodeState?.state);
    localStorage.setItem("postcode", zipCodeState?.postcode);
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

  return (
    <section className="formContent-step-second formContent-life-insurance mb-2">
      <Container>
        <div>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-3">
                36. What is the full residential address <br />
                of your current property?
              </h2>
            </Col>
            <Col xs={12}>
              <Row className="info-customer mt-3">
                <Col xs={12} className="wForm-input pl-0">
                  <InputGoogleAddress
                    country="au"
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

export default Step31;
