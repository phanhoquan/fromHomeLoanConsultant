/** @format */

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { beginPage } from "../../../utils/beginPage";
import {
  sendDataFormProcessingRequest,
  getDataHubAPIProcessingRequest,
  sendDataFormEngagementsRequest,
} from "../../../utils/api";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { valid } from "../../../utils/constant";
import CheckBox from "../../../Components/CheckBox2";
import ModalSend from "../../Modal/ModalSendRequest";
//Calling WOWjs
import qs from "qs";
import SelectDropdown from "../../../Components/Select/index";

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
  "Low Doc Interest Only (Investment)",
];
const listCheckBox5 = ["Needs LMI", "First Home Buyer"];
const listCheckBox6 = [
  "File Invite",
  "Check Service Ability",
  "Order Valuation",
  "Perform Credit Check",
];

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  const [isShowSendSuccess, setIsShowSendSuccess] = useState(false);
  const [listDataAccount, setListDataAccount] = useState([]);
  const [listDataAccountHubID, setListDataAccountHubID] = useState([]);
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
    optionName: null,
    ownerId: null,
    attachments: null,
  };

  const [showLoading, setShowLoading] = useState(false);
  const [dataFormSubmit, setDataFormSubmit] = useState(initDefault);
  const [fullNameValid, setFullNameValidValid] = useState(valid.NON_VALID);

  const callback = (data) => {
    if (data && data.length > 0) {
      setListDataAccount(data || []);
    } else {
      setListDataAccount([]);
    }
  };

  const callbackHubID = (data) => {
    if (data && data.length > 0) {
      setListDataAccountHubID(data || []);
    } else {
      setListDataAccountHubID([]);
    }
  };

  useEffect(() => {
    getDataHubAPIProcessingRequest(
      "?properties=hubspot_owner_id",
      callbackHubID,
      callbackHubID
    );
    getDataHubAPIProcessingRequest("", callback, callback);
  }, []);

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
    optionName,
    ownerId,
    attachmentsId,
  } = dataFormSubmit;

  const handleToggleCheckbox = (name, item, value) => {
    if (value === item) {
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

  const filterHubID = (idItem) => {
    const filterHubId = listDataAccountHubID.find((item) => item.id === idItem);
    return (filterHubId && filterHubId.properties.hubspot_owner_id) || "";
  };

  const onKeyUpHandleSelect = (option) => {
    setDataFormSubmit({
      ...dataFormSubmit,
      optionName: option,
      fullName: option.value,
      ownerId: filterHubID(option.id),
      attachmentsId: option.id,
    });
  };

  const success = (data) => {
    setIsShowSendSuccess(true);
    setShowLoading(false);
    setDataFormSubmit(initDefault);
  };

  const successEngagements = (data) => {
    setIsShowSendSuccess(true);
    setShowLoading(false);
    setDataFormSubmit(initDefault);
  };

  const dataForm = {
    fullname: fullName || "",
    email,
    recommend_product: recommendProduct || "",
    type_of_enquiry: typeOfEnquiry || "",
    investment_type: investmentType || "",
    loan_purpose: loanPurpose || "",
    loan_repayents: loanRepayments || "",
    optional: optional || "",
    needs_to_be_completed: needCompleted || listCheckBox6,
    additional_notes: additionalNotes || "",
  };

  const dataEngagements = {
    ownerId: ownerId,
    attachmentsId,
    body: additionalNotes,
  };

  const handleSubmitForm = () => {
    checkFullNameStatus(fullName);
    setShowLoading(true);
    if (checkFullNameStatus(fullName)) {
      setShowLoading(true);
      sendDataFormProcessingRequest(dataForm, success, success);
      sendDataFormEngagementsRequest(dataEngagements, successEngagements);
    } else {
      setShowLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const listDataSelect = listDataAccount.map((item) => {
    return {
      id: item.id,
      label: item.properties.dealname,
      value: item.properties.dealname,
      closedate: item.properties.closedate,
      createdate: item.properties.createdate,
      dealstage: item.properties.dealstage,
    };
  });

  return (
    <section className="form-request">
      <div className="container-form">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="mb-3">Please enter your name</h2>
          </Col>
          <Col xs={12}>
            <Row className="info-customer">
              <Col xs={12} md={6} className="wForm-input mb-3 p-0 pr-md-3">
                <SelectDropdown
                  placeholder="ENTER NAME HERE"
                  customClass="selectEnterName"
                  listItem={listDataSelect || []}
                  onChange={(option) => {
                    onKeyUpHandleSelect(option);
                    checkFullNameStatus(option?.value || "");
                  }}
                  isSearchable
                  option={optionName || null}
                />
                {fullNameValid === valid.INVALID && (
                  <div className="text-error mt-2 text-left">
                    <p>Please enter in a valid Full Name</p>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
          {optionName ? (
            <Col xs={12} className="info-customer mt-4">
              <Row>
                <Col xs={12} md={7}>
                  <div className="detail">
                    <div className="detail__left">
                      <div className="detail__label">
                        <label>ID:</label>
                        <div className="ml-2">{optionName.id}</div>
                      </div>
                      <div className="detail__label">
                        <label>DEALSTAGE:</label>
                        <div className="ml-2">{optionName.dealstage}</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <div className="detail">
                    <div className="detail__left">
                      <div className="detail__label">
                        <label>CLOSEDATE:</label>
                        <div className="ml-2">{optionName.closedate}</div>
                      </div>
                      <div className="detail__label">
                        <label>CREATEDATE:</label>
                        <div className="ml-2">{optionName.createdate}</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          ) : (
            ""
          )}

          <Col xs={12}>
            <div className="info-customer mt-4 mt-md-5">
              <h2 className="mb-3">Information about the request</h2>
              <h3 className="mb-3 card-title mt-4">Recommend Product</h3>
              <textarea
                className="form-control noteVale"
                value={recommendProduct}
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
              <h3 className="mb-3 card-title title-box">Optional Features</h3>
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
