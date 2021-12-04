/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import checkEmail from "../../../utils/checkEmail";
import { valid } from "../../../utils/constant";
import InputCustom2 from "../../../Components/InputCustom2";
import CheckBox from "../../../Components/CheckBox2";
import ModalSend from "../../Modal/ModalSendRequest";
//Calling WOWjs
import qs from "qs";

const listCheckBox1 = ["Purchase", "Refinance", "Commercial"];
const listCheckBox2 = ["Owner Occupied", "Investment"];
const listCheckBox3 = [
  "Refinance",
  "Construction",
  "Bridging",
  "Owner Builder",
  "Full Doc",
  "Low Doc",
];
const listCheckBox4 = [
  "Weekly",
  "Fortnightly",
  "Monthly",
  "Principle & Interest",
  "Interest Only (O/O)",
  "Low DocInterest Only (Investment)",
];
const listCheckBox5 = ["Needs LMI", "First Home Buyer"];
const listCheckBox6 = [
  "File Invite",
  "Check Service ability",
  "Order Valuation",
  "Perform Credit Check",
];
const Form = () => {
  const history = useHistory();
  const location = useLocation();
  const firstNameRef = useRef(null);
  const [isShowSendSuccess, setIsShowSendSuccess] = useState(false);
  //Redirect all page not begin
  useEffect(() => {
    beginPage(history, "/submit-processing-request");
  }, [history]);

  //Redirect all page not begin
  useEffect(() => {
    if (history.action === "POP") {
      setTimeout(() => {
        // clear stores
        const paramOuters = qs.parse(history.location.search, {
          ignoreQueryPrefix: true,
        });
        for (let item in paramOuters) {
          localStorage.setItem(item, paramOuters[item]);
        }
        history.replace({
          pathname: "/submit-processing-request",
          search: history.location.search,
          hash: history.location.hash,
        });
      }, 0);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Scroll to archor
  useEffect(() => {
    setTimeout(() => {
      const { hash } = location;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }
    }, 300);
  }, [location]);

  const initDefault = {
    fullName: "",
    email: "",
    recommendProduct: "",
    additionalNotes: "",
    typeOfEnquiry: "",
    investmentType: "",
    loanPurpose: "",
    optional: "",
    loanRepayments: "",
    needCompleted: listCheckBox6 || [],
  };

  const [showLoading, setShowLoading] = useState(false);
  const [dataFormSubmit, setDataFormSubmit] = useState(initDefault);
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [fullNameValid, setFullNameValidValid] = useState(valid.NON_VALID);

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };
  const checkFullNameStatus = (value) => {
    let test = value.length > 2;
    setFullNameValidValid(Number(test));
    return test;
  };
  const onKeyUpHandle = (name, value) => {
    setDataFormSubmit({
      ...dataFormSubmit,
      [name]: value,
    });
  };
  const handleClose = () => {
    setIsShowSendSuccess(false);
    window.location.assign("/submit-processing-request");
  };

  const {
    fullName,
    email,
    recommendProduct,
    additionalNotes,
    typeOfEnquiry,
    investmentType,
    loanPurpose,
    loanRepayments,
    optional,
    needCompleted,
  } = dataFormSubmit;

  const handleBlur = (name) => {
    switch (name) {
      case "fullName":
        checkFullNameStatus(fullName);
        break;
      case "email":
        checkEmailStatus(email);
        break;
      default:
        break;
    }
  };
  const handleToggleCheckbox = (name, item, value) => {
    if (value === item && name === value) {
      setDataFormSubmit({
        ...dataFormSubmit,
        [name]: "",
      });
    } else {
      setDataFormSubmit({
        ...dataFormSubmit,
        [name]: item,
      });
    }
  };
  const handelChangeCheckbox = (itemObj) => {
    let dataSubmit = [];
    console.log(itemObj, "itemObj");
    if (needCompleted?.some((data) => data === itemObj)) {
      dataSubmit = needCompleted.filter((item) => item !== itemObj);
    } else {
      dataSubmit = [...needCompleted, itemObj];
    }
    setDataFormSubmit({
      ...dataFormSubmit,
      needCompleted: dataSubmit,
    });
  };
  const handelChangeCheckboxAll = () => {
    if (needCompleted.length === 4) {
      setDataFormSubmit({
        ...dataFormSubmit,
        needCompleted: [],
      });
    } else {
      setDataFormSubmit({
        ...dataFormSubmit,
        needCompleted: listCheckBox6,
      });
    }
  };
  console.log("itemObj", needCompleted);
  const success = (data) => {
    setIsShowSendSuccess(true);
    setShowLoading(false);
    setDataFormSubmit(initDefault);
  };

  const handleSubmitForm = () => {
    checkEmailStatus(email);
    checkFullNameStatus(fullName);
    setShowLoading(true);
    if (checkEmailStatus(email) && checkFullNameStatus(fullName)) {
      setShowLoading(true);
      setIsShowSendSuccess(true);
      // sendDataFormLiving(dataFormSubmit, success, success);
    } else {
      setShowLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitForm();
    }
  };

  return (
    <section className="form-request">
      <div className="container-form">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="mb-3">Please enter your details</h2>
          </Col>
          <Col xs={12}>
            <Row className="info-customer">
              <Col xs={12} md={6} className="wForm-input mb-3 p-0 pr-md-3">
                <InputCustom2
                  onFocus={() => setFullNameValidValid(valid.NON_VALID)}
                  onChange={(e) => onKeyUpHandle("fullName", e.target.value)}
                  label="FULL NAME"
                  onKeyPress={onKeyDown}
                  value={
                    fullName && fullName[0].toUpperCase() + fullName.slice(1)
                  }
                  id="fullName"
                  customClassLabel={fullName ? "active" : ""}
                  innerRef={firstNameRef}
                  onBlur={() => handleBlur("fullName")}
                />
                {fullNameValid === valid.INVALID && (
                  <div className="text-error mt-2 text-left">
                    <p>Please enter in a valid Full Name</p>
                  </div>
                )}
              </Col>
              <Col xs={12} md={6} className="wForm-input mb-3 p-0 pl-md-3">
                <InputCustom2
                  onFocus={() => setEmailValid(valid.NON_VALID)}
                  onChange={(e) => onKeyUpHandle("email", e.target.value)}
                  label="PLEASE ENTER YOUR EMAIL"
                  value={email}
                  type="email"
                  onKeyPress={onKeyDown}
                  id="email-input"
                  customClassLabel={email ? "active" : ""}
                  iconEmail
                  onBlur={() => handleBlur("email")}
                  customClassWrap="email"
                />
                {emailValid === valid.INVALID && (
                  <div className="text-error mt-2 text-left">
                    <p>Please enter in a valid Email</p>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5">
              <h2 className="mb-3">Information about the request</h2>
              <h3 className="mb-3 card-title mt-4">Recommend Product</h3>
              <textarea
                className="form-control noteVale"
                value={recommendProduct}
                onKeyPress={onKeyDown}
                onChange={(e) => {
                  onKeyUpHandle("recommendProduct", e.target.value);
                }}
                placeholder="PLEASE ENTER YOUR TEXT"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title title-box">Type of enquiry</h3>
              <div className="group-checkbox row max-700">
                {listCheckBox1.map((item, index) => (
                  <Col xs={4} key={index} className="p-0">
                    <CheckBox
                      handleToggleCheckbox={() =>
                        handleToggleCheckbox(
                          "typeOfEnquiry",
                          item,
                          typeOfEnquiry
                        )
                      }
                      label={item}
                      id={`${item}-${index}-typeOfEnquiry`}
                      name={item}
                      isChecked={item === typeOfEnquiry}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title title-box">Investment type</h3>
              <div className="group-checkbox row m-0 justify-content-center">
                {listCheckBox2.map((item, index) => (
                  <Col xs={6} lg={3} key={index} className="p-0">
                    <CheckBox
                      handleToggleCheckbox={() =>
                        handleToggleCheckbox(
                          "investmentType",
                          item,
                          investmentType
                        )
                      }
                      label={item}
                      id={`${item}-${index}-investmentType`}
                      name={item}
                      isChecked={item === investmentType}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title title-box">Loan Purpose</h3>
              <div className="group-checkbox row m-0 max-700">
                {listCheckBox3.map((item, index) => (
                  <Col xs={6} lg={4} key={index} className="p-0">
                    <CheckBox
                      handleToggleCheckbox={() =>
                        handleToggleCheckbox("loanPurpose", item, loanPurpose)
                      }
                      label={item}
                      id={`${item}-${index}-loanPurpose`}
                      name={item}
                      isChecked={item === loanPurpose}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title title-box">Loan Repayments</h3>
              <div className="group-checkbox row m-0">
                {listCheckBox4.map((item, index) => (
                  <Col xs={6} lg={4} key={index} className="p-0">
                    <CheckBox
                      handleToggleCheckbox={() =>
                        handleToggleCheckbox(
                          "loanRepayments",
                          item,
                          loanRepayments
                        )
                      }
                      label={item}
                      id={`${item}-${index}-loanRepayments`}
                      name={item}
                      isChecked={item === loanRepayments}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title title-box">Optional</h3>
              <div className="group-checkbox row m-0 justify-content-center">
                {listCheckBox5.map((item, index) => (
                  <Col xs={6} lg={3} key={index} className="p-0">
                    <CheckBox
                      handleToggleCheckbox={() =>
                        handleToggleCheckbox("optional", item, optional)
                      }
                      label={item}
                      id={`${item}-${index}-optional`}
                      name={item}
                      isChecked={item === optional}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5 group-checkbox">
              <h3 className="mb-3 card-title d-flex align-items-center">
                Needs to be completed{" "}
                <CheckBox
                  customClass="ml-3"
                  handleToggleCheckbox={() => handelChangeCheckboxAll()}
                  label="Select All"
                  id="Select All"
                  name="Select All"
                  isChecked={needCompleted.length === 4}
                />
              </h3>
              <div className="group-checkbox row justify-content-center">
                {listCheckBox6.map((item, index) => (
                  <Col xs={6} key={index}>
                    <CheckBox
                      handleToggleCheckbox={() => handelChangeCheckbox(item)}
                      label={item}
                      id={`${item}-${index}-needCompleted`}
                      name={item}
                      isChecked={needCompleted.includes(item)}
                    />
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5">
              <h2 className="mb-3">Additional notes</h2>
              <textarea
                className="form-control noteVale"
                value={additionalNotes}
                onKeyPress={onKeyDown}
                onChange={(e) => {
                  onKeyUpHandle("additionalNotes", e.target.value);
                }}
                placeholder="PLEASE ENTER YOUR TEXT"
              />
            </div>
          </Col>

          <Col xs={12}>
            <div className="group-btn-footer mt-5 col d-flex justify-content-center">
              <Button
                className="btnPrimary life wow fadeInUp mt-0 in-progress"
                type="next"
                onClick={handleSubmitForm}
              >
                SUBMIT {showLoading && <Spinner animation="border" />}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <ModalSend isShow={isShowSendSuccess} handleClose={handleClose} />
    </section>
  );
};

export default Form;
