/** @format */

import React, { useState, useRef, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LifeInsurance from "../../index";
import { valid } from "../../../../utils/constant";
import InputCustom2 from "../../../../Components/InputCustom2";
import checkEmail from "../../../../utils/checkEmail";
import { CheckboxButton } from "../../../../Components/CheckBox3";
import InputNumber from "../../../../Components/InputNumber";
import { useHistory } from "react-router-dom";
import useOnClickOutside from "../../../../hooks/useClickOutSide";

export const listHomeLoan = [
  "Adelaide Bank",
  "AMP",
  "ANZ",
  "Bank of Melbourne",
  "Bank of South Australia",
  "Bankwest",
  "Bluestone",
  "Citibank",
  "Commonwealth Bank",
  "Emoney",
  "Firefighters Mutual Bank",
  "Firstmac",
  "Health Professionals Bank",
  "Heritage Bank",
  "ING Bank",
  "Latrobe",
  "Liberty",
  "Macquarie Bank Mortgage Solutions",
  "ME Bank",
  "NAB",
  "Pepper",
  "Resimac",
  "St. George",
  "Suncorp",
  "Teachers Mutual Bank",
  "UniBank",
  "Westpac",
  "Other",
];

export const types = {
  1: "Full Time",
  2: "Part Time",
  3: "Self Employed",
  4: "Unemployed",
};

export const types2 = {
  1: "I Want To Purchase",
  2: "I Want To Refinance",
};

const First = () => {
  const firstNameRef = useRef(null);
  const refinanceBankRef = useRef(null);
  const wrapperInfoRef = useRef();
  const pricePreTaxRef = useRef(null);
  const history = useHistory();
  let listMenuStep1 = localStorage.getItem("listMenuStep1")
    ? JSON.parse(localStorage.getItem("listMenuStep1"))
    : [];

  const [dataListMenuStep1, setDataListMenuStep1] = useState(
    listMenuStep1 || []
  );

  const [firstName, setFirstName] = useState(
    localStorage.getItem("loan2firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("loan2lastName") || ""
  );
  const [firstNameValid, setFirstNameValid] = useState(valid.NON_VALID);
  const [lastNameValid, setLastNameValid] = useState(valid.NON_VALID);
  const [email, setEmail] = useState(localStorage.getItem("loan2email") || "");
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [employmentStatus, setEmploymentStatus] = useState(
    localStorage.getItem("loan2employmentStatus") || ""
  );
  const [loanOptionType, setLoanOptionType] = useState(
    localStorage.getItem("loan2loanOptionType") || ""
  );

  const [propertyValue, setPropertyValue] = useState(
    localStorage.getItem("propertyValue") || ""
  );
  const [propertyValueValid, setPropertyValueValid] = useState(valid.NON_VALID);

  const [priceOwing, setPriceOwing] = useState(
    localStorage.getItem("priceOwing") || ""
  );

  const [validMessage, setValidMessage] = useState("This field is required");
  const [priceOwingValid, setPriceOwingValid] = useState(valid.NON_VALID);

  const [refinanceBank, setRefinanceBank] = useState(
    localStorage.getItem("refinanceBank") || ""
  );
  const [isShowModal, setIsShowModal] = useState(false);

  const [pricePreTax, setPricePreTax] = useState(
    localStorage.getItem("pricePreTax") || ""
  );
  const [pricePreTaxValid, setPricePreTaxValid] = useState(valid.NON_VALID);

  const [priceBuy, setPriceBuy] = useState(
    localStorage.getItem("priceBuy") || ""
  );
  const [priceBuyValid, setPriceBuyValid] = useState(valid.NON_VALID);

  const [priceBorrow, setPriceBorrow] = useState(
    localStorage.getItem("priceBorrow") || ""
  );
  const [validMessage2, setValidMessage2] = useState("This field is required");
  const [priceBorrowValid, setPriceBorrowValid] = useState(valid.NON_VALID);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowModal(false);
  });

  const checkPriceBuyStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 150000 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setPriceBuyValid(Number(test));
    return test;
  };

  const checkPriceBorrowStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    const price =
      (priceBuy && Number(priceBuy.replace(/[^0-9\\.-]+/g, ""))) || 0;
    if (originAmount < 1) {
      setValidMessage2("This field is required");
      setPriceBorrowValid(valid.INVALID);
      return false;
    }
    if (originAmount > 10000000) {
      setValidMessage2("Value should be less that $10,000,000");
      setPriceBorrowValid(valid.INVALID);
      return false;
    }

    if (originAmount > (parseInt(price, 10) * 95) / 100) {
      setValidMessage2("Enter less than 95% of the property value.");
      setPriceBorrowValid(valid.INVALID);
      return false;
    }
    setPriceBorrowValid(valid.VALID);
    return true;
  };

  const checkEmailStatus = (value) => {
    let test = value && checkEmail(value || "");
    setEmailValid(Number(test));
    return test;
  };

  const checkPriceStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 150000 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
    setPropertyValueValid(Number(test));
    return test;
  };

  const checkPriceOwingStatus = (amount) => {
    const originAmount = Number(amount.replace(/[^0-9\\.-]+/g, ""));
    const price =
      (propertyValue && Number(propertyValue.replace(/[^0-9\\.-]+/g, ""))) || 0;
    if (originAmount < 1) {
      setValidMessage("This field is required");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    if (originAmount > 10000000) {
      setValidMessage("Value should be less that $10,000,000");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    if (originAmount > (parseInt(price, 10) * 95) / 100) {
      setValidMessage("Enter less than 95% of the property value.");
      setPriceOwingValid(valid.INVALID);
      return false;
    }
    setPriceOwingValid(valid.VALID);
    return true;
  };

  const checkFirstNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    setFirstNameValid(Number(test));
    return test;
  };

  const checkLastNameStatus = (value) => {
    let test = /^([A-Za-z'’＇`]{2,})$/.test(value);
    setLastNameValid(Number(test));
    return test;
  };
  const checkPricePreTaxStatus = (value) => {
    let test =
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 400000;
    setPricePreTaxValid(Number(test));
    return test;
  };

  const onCheck = (option) => {
    setEmploymentStatus(option);
  };
  const onCheckLoanType = (option) => {
    setLoanOptionType(option);
  };

  const onKeyUpHandle = (name, value) => {
    switch (name) {
      case "lastName":
        setLastName(value.replace(/[0-9]/g, ""));
        break;
      case "firstName":
        setFirstName(value.replace(/[0-9]/g, ""));
        break;
      case "email":
        setEmail(value);
        break;
      case "propertyValue":
        setPropertyValue(value);
        break;

      case "priceOwing":
        setPriceOwing(value);
        break;
      case "pricePreTax":
        setPricePreTax(value);
        break;
      case "priceBuy":
        setPriceBuy(value);
        break;
      case "priceBorrow":
        setPriceBorrow(value);
        break;

      default:
        break;
    }
  };

  const handleBlur = (name) => {
    switch (name) {
      case "lastName":
        checkLastNameStatus(lastName);
        break;
      case "firstName":
        checkFirstNameStatus(firstName);

        break;
      case "email":
        checkEmailStatus(email);
        break;

      case "propertyValue":
        checkPriceStatus(propertyValue);
        break;
      case "priceOwing":
        checkPriceOwingStatus(priceOwing);
        break;
      case "pricePreTax":
        checkPricePreTaxStatus(pricePreTax);
        break;
      case "priceBuy":
        checkPriceBuyStatus(priceBuy);
        break;

      case "priceBorrow":
        checkPriceBorrowStatus(priceBorrow);
        break;
      default:
        break;
    }
  };
  const onClickSelect = (value) => {
    setRefinanceBank(value);
    setIsShowModal(false);
    window.localStorage.setItem("refinanceBank", value);
  };

  const step1 = [
    {
      id: 3,
      question: `${loanOptionType ? "1. Select Your Loan Option" : ""}`,
    },
    {
      id: 2,
      question: `${
        propertyValue
          ? "1: What is the approximate value of the property you are looking to refinance?"
          : ""
      }`,
    },
    {
      id: 3,
      question: `${
        priceOwing
          ? "1. How much do you still have owing on your mortgage?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${
        refinanceBank ? "1: Who is your current home loan with?" : ""
      }`,
    },
    {
      id: 5,
      question: `${
        pricePreTax ? "1: What is your gross (pre-tax) annual income?" : ""
      }`,
    },
    {
      id: 6,
      question: `${
        priceBuy
          ? "1: What is the approximate value of the property you are looking to buy?"
          : ""
      }`,
    },
    {
      id: 7,
      question: `${priceBorrow ? "1: How much would you like to borrow?" : ""}`,
    },
    {
      id: 8,
      question: `${lastName && firstName ? "1. Please enter your name" : ""}`,
    },
    {
      id: 9,
      question: `${email ? "1. What’s your email address?" : ""}`,
    },
    {
      id: 10,
      question: `${employmentStatus ? "1. Are you currently employed?" : ""}`,
    },
  ];

  useMemo(() => {
    localStorage.setItem("loan2lastName", lastName);
    localStorage.setItem("loan2firstName", firstName);
    localStorage.setItem("loan2email", email);
    localStorage.setItem("loan2employmentStatus", employmentStatus);
    localStorage.setItem("loan2loanOptionType", loanOptionType);
    window.localStorage.setItem(
      "propertyValue",
      propertyValue && parseInt(propertyValue.replace(/,/g, ""), 10)
    );

    window.localStorage.setItem(
      "priceOwing",
      priceOwing && parseInt(priceOwing.replace(/,/g, ""), 10)
    );
    window.localStorage.setItem("refinanceBank", refinanceBank);

    window.localStorage.setItem(
      "pricePreTax",
      pricePreTax && parseInt(pricePreTax.replace(/,/g, ""), 10)
    );
    window.localStorage.setItem(
      "priceBuy",
      priceBuy && parseInt(priceBuy.replace(/,/g, ""), 10)
    );

    window.localStorage.setItem(
      "priceBorrow",
      priceBorrow && parseInt(priceBorrow.replace(/,/g, ""), 10)
    );

    if (loanOptionType === types2[1]) {
      window.localStorage.setItem("propertyValue", "");
      window.localStorage.setItem("priceOwing", "");
      window.localStorage.setItem("refinanceBank", "");
      setPropertyValue("");
      setRefinanceBank("");
      setPriceOwing("");
    }

    if (loanOptionType === types2[2]) {
      window.localStorage.setItem("priceBuy", "");
      window.localStorage.setItem("priceBorrow", "");
      setPriceBuy("");
      setPriceBorrow("");
    }

    if (
      lastName.trim() ||
      firstName.trim() ||
      email.trim() ||
      employmentStatus ||
      loanOptionType ||
      propertyValue ||
      priceOwing ||
      refinanceBank ||
      pricePreTax ||
      priceBuy ||
      priceBorrow
    ) {
      setDataListMenuStep1(step1);
    }
    window.localStorage.setItem("listMenuStep1", JSON.stringify(step1));
    // eslint-disable-next-line
  }, [
    lastName,
    firstName,
    email,
    employmentStatus,
    loanOptionType,
    propertyValue,
    priceOwing,
    refinanceBank,
    pricePreTax,
    priceBuy,
    priceBorrow,
  ]);

  const onClickNext = () => {
    history.push("/updated-hlc-consultant-4/loanInformation");
  };

  return (
    <LifeInsurance
      activeStep={1}
      className="page-main"
      listMenuStep1={dataListMenuStep1}
    >
      <section className="formContent-step-first pb-5 mt-5 mt-md-3 lg-mt-0">
        <Container>
          <div>
            <Row>
              <Col xs={12}>
                <Col xs={12} className="text-center mt-3">
                  <h2 className="mb-4">1. Select Your Loan Option</h2>
                </Col>
                <Row className="info-customer max-500">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={loanOptionType === types2[1]}
                      onClick={() => onCheckLoanType(types2[1])}
                      name={types2[1]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheckLoanType(types2[2])}
                      checkBox={loanOptionType === types2[2]}
                      name={types2[2]}
                    />
                  </Col>
                </Row>
              </Col>
              {/* Refinance */}
              {loanOptionType === types2[2] ? (
                <>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      1: What is the approximate value of the property <br />{" "}
                      you are looking to refinance?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-3">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                            numeral: true,
                            numeralDecimalMark: "",
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand",
                          }}
                          onFocus={() => setPropertyValueValid(valid.NON_VALID)}
                          onChange={(e) =>
                            onKeyUpHandle("propertyValue", e.target.value)
                          }
                          label="VALUE OF PROPERTY E.G. $600,000"
                          value={propertyValue}
                          id="price-input"
                          customClassLabel={propertyValue ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          onBlur={() => handleBlur("propertyValue")}
                        />
                      </Col>
                    </Row>
                    {propertyValueValid === valid.INVALID && (
                      <div className="text-error">
                        <p>
                          Value should be in between $150,000 - $10,000,0000
                        </p>
                      </div>
                    )}
                  </Col>

                  {/* Refinance */}
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      1. How much do you still have owing on your mortgage?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-3">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                            numeral: true,
                            numeralDecimalMark: "",
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand",
                          }}
                          onFocus={() => setPriceOwingValid(valid.NON_VALID)}
                          onChange={(e) =>
                            onKeyUpHandle("priceOwing", e.target.value)
                          }
                          label="Mortgage amount E.G. 350,000"
                          value={priceOwing}
                          id="price-input2"
                          customClassLabel={priceOwing ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          onBlur={() => handleBlur("priceOwing")}
                        />
                      </Col>
                    </Row>
                    {priceOwingValid === valid.INVALID && (
                      <div className="text-error">
                        <p>{validMessage}</p>
                      </div>
                    )}
                  </Col>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      1: Who is your current home loan with?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer">
                      <Col
                        xs={12}
                        className="wForm-input pl-0 bankProviders refinanceBank"
                        ref={wrapperInfoRef}
                      >
                        <InputCustom2
                          onFocus={() => {
                            setIsShowModal(true);
                          }}
                          onChange={() => () => {}}
                          label="Please select your current bank providers"
                          value={refinanceBank}
                          id="price-input3"
                          customClassLabel={refinanceBank ? "active" : ""}
                          iconBank
                          iconArrow
                          customClassWrap="email five"
                          innerRef={refinanceBankRef}
                          readOnly
                        />
                        <ul
                          className={`list-occupation ${
                            isShowModal ? "d-block" : "d-none"
                          }`}
                        >
                          {listHomeLoan &&
                            listHomeLoan.map((name, index) => (
                              <li
                                key={index}
                                onClick={() => onClickSelect(name)}
                                className={
                                  refinanceBank === name ? "active" : ""
                                }
                              >
                                {name}
                              </li>
                            ))}
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </>
              ) : (
                ""
              )}

              {/* End */}

              {/* Purchase */}
              {loanOptionType === types2[1] ? (
                <>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      1: What is the approximate value of <br /> the property
                      you are looking to buy?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer mt-2">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                            numeral: true,
                            numeralDecimalMark: "",
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand",
                          }}
                          onFocus={() => setPriceBuyValid(valid.NON_VALID)}
                          onChange={(e) =>
                            onKeyUpHandle("priceBuy", e.target.value)
                          }
                          label="VALUE OF PROPERTY E.G. $600,000"
                          value={priceBuy}
                          id="price-input5"
                          customClassLabel={priceBuy ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          onBlur={() => handleBlur("priceBuy")}
                        />
                      </Col>
                    </Row>
                    {priceBuyValid === valid.INVALID && (
                      <div className="text-error">
                        <p>
                          Value should be in between $150,000 - $10,000,0000
                        </p>
                      </div>
                    )}
                  </Col>
                  <Col xs={12} className="text-center">
                    <h2 className="mb-3">
                      1: How much would you like to borrow?
                    </h2>
                  </Col>
                  <Col xs={12}>
                    <Row className="info-customer pt-2">
                      <Col xs={12} className="wForm-input pl-0">
                        <InputNumber
                          inputMode="numeric"
                          options={{
                            numericOnly: true,
                            numeral: true,
                            numeralDecimalMark: "",
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand",
                          }}
                          onFocus={() => setPriceBorrowValid(valid.NON_VALID)}
                          onChange={(e) =>
                            onKeyUpHandle("priceBorrow", e.target.value)
                          }
                          label="BORROW AMOUNT E.G. $500,000"
                          value={priceBorrow}
                          id="price-input6"
                          customClassLabel={priceBorrow ? "active" : ""}
                          iconPrice
                          customClassWrap="email five"
                          onBlur={() => handleBlur("priceBorrow")}
                        />
                      </Col>
                    </Row>
                    {priceBorrowValid === valid.INVALID && (
                      <div className="text-error">
                        <p>{validMessage2}</p>
                      </div>
                    )}
                  </Col>
                </>
              ) : (
                ""
              )}

              {/* End */}

              <Col xs={12} className="text-center">
                <h2 className="mb-3">
                  1: What is your gross <span>(pre-tax)</span> annual income?
                </h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputNumber
                      inputMode="numeric"
                      options={{
                        numericOnly: true,
                        numeral: true,
                        numeralDecimalMark: "",
                        delimiter: ",",
                        numeralThousandsGroupStyle: "thousand",
                      }}
                      onFocus={() => setPricePreTaxValid(valid.NON_VALID)}
                      onChange={(e) =>
                        onKeyUpHandle("pricePreTax", e.target.value)
                      }
                      label="Enter your annual income"
                      value={pricePreTax}
                      id="price-input4"
                      customClassLabel={pricePreTax ? "active" : ""}
                      iconPrice
                      customClassWrap="email five"
                      innerRef={pricePreTaxRef}
                      onBlur={() => handleBlur("pricePreTax")}
                    />
                  </Col>
                </Row>
                {pricePreTaxValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Value should be in between $0 - $400,000</p>
                  </div>
                )}
              </Col>

              <Col xs={12} className="text-center">
                <h2 className="mb-4">1. Please enter your name</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={6} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setFirstNameValid(valid.NON_VALID)}
                      onChange={(e) =>
                        onKeyUpHandle("firstName", e.target.value)
                      }
                      label="FIRST NAME"
                      value={
                        firstName &&
                        firstName[0].toUpperCase() + firstName.slice(1)
                      }
                      id="firstName"
                      customClassLabel={firstName ? "active" : ""}
                      innerRef={firstNameRef}
                      onBlur={() => handleBlur("firstName")}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input pr-0">
                    <InputCustom2
                      onFocus={() => setLastNameValid(valid.NON_VALID)}
                      onChange={(e) =>
                        onKeyUpHandle("lastName", e.target.value)
                      }
                      id="lastName"
                      label="LAST NAME"
                      value={
                        lastName &&
                        lastName[0].toUpperCase() + lastName.slice(1)
                      }
                      onBlur={() => handleBlur("lastName")}
                      customClassLabel={lastName ? "active" : ""}
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12}>
                {firstNameValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter in a valid first name</p>
                  </div>
                )}

                {lastNameValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter in a valid last name</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="text-center mt-3">
                <h2 className="mb-4">1. What’s your email address?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={12} className="wForm-input pl-0">
                    <InputCustom2
                      onFocus={() => setEmailValid(valid.NON_VALID)}
                      onChange={(e) => onKeyUpHandle("email", e.target.value)}
                      label="PLEASE ENTER YOUR EMAIL"
                      value={email}
                      type="email"
                      id="email-input"
                      customClassLabel={email ? "active" : ""}
                      iconEmail
                      onBlur={() => handleBlur("email")}
                      customClassWrap="email"
                    />
                  </Col>
                </Row>
                {emailValid === valid.INVALID && (
                  <div className="text-error">
                    <p>Please enter a valid email</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="text-center mt-3">
                <h2 className="mb-4">1. Are you currently employed?</h2>
              </Col>
              <Col xs={12}>
                <Row className="info-customer">
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      checkBox={employmentStatus === types[1]}
                      onClick={() => onCheck(types[1])}
                      name={types[1]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[2])}
                      checkBox={employmentStatus === types[2]}
                      name={types[2]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[3])}
                      checkBox={employmentStatus === types[3]}
                      name={types[3]}
                    />
                  </Col>
                  <Col xs={6} className="wForm-input">
                    <CheckboxButton
                      onClick={() => onCheck(types[4])}
                      checkBox={employmentStatus === types[4]}
                      name={types[4]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="group-btn-footer col d-flex justify-content-center">
              <Button
                className="btnPrimary life wow fadeInUp mt-0 in-progress"
                type="next"
                onClick={onClickNext}
              >
                NEXT
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </LifeInsurance>
  );
};

export default First;
