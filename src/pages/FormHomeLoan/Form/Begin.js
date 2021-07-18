/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import onlyNumber from "../../../utils/onlyNumber";
import {
  zipCodes,
  getZipCodeOptionsPostCode,
  parseZipCodeToObject,
} from "../../../utils/zipCodes";
import imgLogo from "../../../images/life/logo.svg";
import InPartnership from "../../../images/life/In-partnership-with.png";
import LifeInsurance from "../index";
import useOnClickOutside from "../../../hooks/useClickOutSide";
import WOW from "wowjs";

const Begin = () => {
  const phoneRef = useRef(null);
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, []);

  const wrapperInfoRef = useRef();
  const { postcode } = parseZipCodeToObject(
    localStorage.getItem("postcodeOptions") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [postcodeOptions, setPostcodeOptions] = useState(
    (localStorage.getItem("postcodeOptions") && postcode) || ""
  );
  const [postcodeOptionsValue, setPostcodeOptionsValue] = useState(
    localStorage.getItem("postcodeOptions") || ""
  );
  const [dataListPostcodeOptions, setDataListPostcodeOptions] = useState([]);
  const [postcodeOptionsValid, setPostcodeOptionsValid] = useState(
    valid.NON_VALID
  );
  useEffect(() => {
    setTimeout(() => {
      phoneRef?.current?.element?.focus();
    }, 400);
  }, []);
  useEffect(() => {
    if (isShowModal) {
      setDataListPostcodeOptions(getZipCodeOptionsPostCode(postcodeOptions));
    }
    // eslint-disable-next-line
  }, [postcodeOptions]);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const getState = (data, postcode) => {
    for (var x in data) {
      if (data[x] && data[x].indexOf(postcode.toString()) !== -1)
        return data[x];
    }
  };

  const checkPostcodeValid = (value) => {
    let test = false;
    if (value && postcodeOptionsValue && getState(zipCodes, value)) {
      window.localStorage.setItem("postcodeOptions", postcodeOptionsValue);
      test = true;
      setPostcodeOptionsValid(Number(test));
    } else {
      test = false;
      setPostcodeOptionsValid(Number(test));
    }
    setIsShowModal(false);
    return test;
  };

  const nextStep = () => {
    window.localStorage.setItem("postcodeOptions", postcodeOptionsValue);
    history.push({
      pathname: `/refinance-fact-find/step-one`,
    });
  };

  const onKeyUpHandle = (value) => {
    setPostcodeOptions(value);
    setPostcodeOptionsValue("");
    if (value?.length >= 3) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
  };

  const onClickSelect = (name) => {
    const { postcode } = parseZipCodeToObject(name);
    window.localStorage.setItem("postcodeOptions", name);
    setPostcodeOptionsValue(name);
    setPostcodeOptions(postcode);
    setIsShowModal(false);
    checkPostcodeValid(name);
    setPostcodeOptionsValid(valid.NON_VALID);
  };

  const handelOnFocus = (name) => {
    if (name?.length >= 3) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
    setPostcodeOptionsValid(valid.NON_VALID);
  };

  const onClickNext = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 500);
    checkPostcodeValid(postcodeOptions);
    if (checkPostcodeValid(postcodeOptions)) {
      if (!showLoading) {
        setTimeout(function () {
          nextStep();
        }, 500);
      }
    }
  };

  const showClass =
    isShowModal &&
    postcodeOptions?.length >= 3 &&
    dataListPostcodeOptions?.length > 0
      ? "d-block"
      : "d-none";

  return (
    <LifeInsurance className="pt-0">
      <div className="wrapper">
        <main className="MainLifeInsurance">
          <section
            className={`welcomeLifeInsurance homeLoan wow fadeInUp formContent-step-first page-nine ${
              isShowModal && postcodeOptions?.length >= 3 ? "mb-10" : ""
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
                    <div className="logo">
                      <a className="logo__img" href="#/">
                        <img src={imgLogo} alt="logo" width="140" height="66" />
                      </a>
                      <a className="logo__img logo-2 ml-4" href="#/">
                        <img
                          src={InPartnership}
                          alt="logo"
                          width="140"
                          height="50"
                        />
                      </a>
                    </div>
                    <h1>Which Mortgage Program Could You Qualify For</h1>
                    <ul className="list-dot">
                      <li>Reduce monthly mortgage payments by up to $500</li>
                      <li>Get up to $4000 cashback</li>
                      <li>Lock-in lower rates starting as low as 1.89%</li>
                    </ul>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer">
                      <Col
                        xs={12}
                        className="wForm-input mt-3 p-0"
                        ref={wrapperInfoRef}
                      >
                        <InputCustom2
                          inputMode="numeric"
                          pattern="[0-9]*"
                          onFocus={() => handelOnFocus(postcodeOptions)}
                          onChange={(e) => onKeyUpHandle(e.target.value)}
                          label="please enter your Postcode"
                          value={postcodeOptionsValue || postcodeOptions}
                          id="postcodeOptions"
                          customClassLabel={postcodeOptions ? "active" : ""}
                          iconLocation
                          maxLength={postcodeOptionsValue ? "" : "4"}
                          customClassWrap="email"
                          onKeyDown={(e) => {
                            if (
                              e.target?.value?.length > 4 &&
                              e.keyCode !== 8 &&
                              e.keyCode !== 9
                            ) {
                              e.preventDefault();
                            }
                            if (e.key === "Enter") {
                              onClickNext();
                            }
                            onlyNumber(e);
                          }}
                        />
                        <ul className={`list-occupation ${showClass}`}>
                          {dataListPostcodeOptions &&
                            dataListPostcodeOptions.length > 0 &&
                            dataListPostcodeOptions.map((name, index) => (
                              <li
                                key={index + 1}
                                onClick={() => onClickSelect(name?.value)}
                                className={
                                  postcodeOptions === name?.value
                                    ? "active"
                                    : ""
                                }
                              >
                                {name.value}
                              </li>
                            ))}
                        </ul>
                      </Col>
                    </Row>

                    {postcodeOptionsValid === valid.INVALID && (
                      <div className="text-error">
                        {!postcodeOptionsValue && postcodeOptions ? (
                          <p>
                            Please select a postcode from the drop down menu{" "}
                          </p>
                        ) : (
                          <p>Postcode is required</p>
                        )}
                      </div>
                    )}
                  </Col>
                  <Col
                    xs={12}
                    className="col d-flex justify-content-center pt-4"
                  >
                    <Button
                      className="btnPrimary life wow fadeInUp mt-0 in-progress"
                      type="next"
                      onClick={onClickNext}
                    >
                      {showLoading && <Spinner animation="border" />}
                      Get Started
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </LifeInsurance>
  );
};

export default Begin;
