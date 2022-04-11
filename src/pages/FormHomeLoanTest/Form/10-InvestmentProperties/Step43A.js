/** @format */

import React, { useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
// import { getZipCodeWithAddress } from "../../../../utils/googleApi";
import CardStep from "./CardStep";

const Step37 = ({ handleGetLoan2value }) => {

  const [listItemProperty, setListItemProperty] = useState(
    localStorage.getItem("listItemProperty")
      ? JSON.parse(localStorage.getItem("listItemProperty"))
      : null
  );
  const [listItemPropertyValid, setListItemPropertyValid] = useState({});

  const [childrenNumber, setChildrenNumber] = useState((localStorage.getItem("listItemPropertyNumber") && parseInt(localStorage.getItem("listItemPropertyNumber"), 10)) || 1);
  const [validMessage, setValidMessage] = useState({});

  const checkValueCreditCardAmountStatus = (value, key, name ) => {
    let test = false;
      if(key ==='loanAmount'|| key ==='rentalIncome' || key ==='valueOfProperty'){
        test = value ?  (parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
        parseInt(value.replace(/,/gi, ""), 10) <= 10000000): false
      }else{
        test = value ? value.length > 1 : false
      }
      setListItemPropertyValid({
        ...listItemPropertyValid,
        [name]: Number(test)
      });

      window.localStorage.setItem(
        "listItemProperty",
        JSON.stringify(listItemProperty)
      );

      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });

    return test;
  };

  const onKeyUpHandle = (value, name) => {
    setListItemProperty({
      ...listItemProperty,
      [name]: value
    });
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
  };

  useMemo(() => {
    window.localStorage.setItem(
      "listItemProperty",
      JSON.stringify(listItemProperty)
    );
    window.localStorage.setItem("listItemPropertyNumber", childrenNumber);
    handleGetLoan2value("listItemProperty", listItemProperty);
    // eslint-disable-next-line
  }, [listItemProperty, childrenNumber]);
  const scrollToBottom = () => {
    window.scrollTo({
      top: 30000,
      behavior: "smooth",
    });
  };
  const handlePlusItem = () => {
    if (childrenNumber < 3) {
      setChildrenNumber(childrenNumber + 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
      scrollToBottom()
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be less than or equal to 3",
      });
    }
  };
  const onUpdateState = (zipCode) => {
    // setZipCodeState(zipCode);
  };

  const handleRemoveItem = () => {
    if (childrenNumber >= 1) {
      setChildrenNumber(childrenNumber - 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
      setListItemProperty({
        ...listItemProperty,
        [`lenderProperty${childrenNumber}`]: "",
        [`interestRateProperty${childrenNumber}`]: "",
        [`loanAmountProperty${childrenNumber}`]: "",
        [`fixedOrVariableProperty${childrenNumber}`]: "",
        [`addressProperty${childrenNumber}`]: "",
        [`rentalIncomeProperty${childrenNumber}`]: "",
        [`valueOfProperty${childrenNumber}`]: "",
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be greater than or equal to 1",
      });
    }
  };
  
  const renderListChillCard = ()=> {
    const listChillApplicantAge = [];
    for (let i = 1; i <= parseInt(childrenNumber, 10); i += 1) {
      listChillApplicantAge.push(
        <CardStep
          key={i}
          handlePlusItem={handlePlusItem} 
          handleRemoveItem={handleRemoveItem}
          indexCard={i}
          childrenNumber={childrenNumber}
          onKeyUpHandle={onKeyUpHandle}
          nameCard="Property"
          handleBlur={checkValueCreditCardAmountStatus}
          loanAmount={listItemProperty ? listItemProperty[`loanAmountProperty${i}`] : ""}
          interestRate={listItemProperty ? listItemProperty[`interestRateProperty${i}`] : ""}
          lender={listItemProperty ? listItemProperty[`lenderProperty${i}`] : ""}
          fixedOrVariable={listItemProperty ? listItemProperty[`fixedOrVariableProperty${i}`] : ""}
          rentalIncome={listItemProperty ? listItemProperty[`rentalIncomeProperty${i}`] : ""}
          address={listItemProperty ? listItemProperty[`addressProperty${i}`] : ""}
          valueOfProperty={listItemProperty ? listItemProperty[`valueOfPropertyProperty${i}`] : ""}
          onUpdateState ={onUpdateState}
        />
      );
    }
    return listChillApplicantAge;
  }

  return (
    <div className="position-relative w-100">
      <div className="container">
        <Row>
            <Col xs={12} className="text-center">
              <h2 className="mb-2 mb-md-1">
              44a. What is the address of this property?
              </h2>
            </Col>
        </Row>
       </div>
      {renderListChillCard()}
      <div xs={12} className="text-center">
        {validMessage?.childrenNumber ? (
          <div className="text-error mb-3">
            <p>{validMessage?.childrenNumber}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Step37;
