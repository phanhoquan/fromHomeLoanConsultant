/** @format */

import React, { useState, useMemo } from "react";
import CardList from "./CardList";

const Step30 = ({ handleGetLoan2value }) => {

  const [listCreditCard, setListCreditCard] = useState(
    localStorage.getItem("listCreditCard")
      ? JSON.parse(localStorage.getItem("listCreditCard"))
      : null
  );
  const [listCreditCardValid, setListCreditCardValid] = useState({});

  const [childrenNumber, setChildrenNumber] = useState((localStorage.getItem("listCreditCardNumber") && parseInt(localStorage.getItem("listCreditCardNumber"), 10)) || 1);
  const [validMessage, setValidMessage] = useState({});

  const checkValueCreditCardStatus = (value, name) => {
    let test = value && value.length > 1;
    setListCreditCardValid({
      ...listCreditCard,
      [name]: Number(test)
    });
    window.localStorage.setItem(
      "listCreditCard",
      JSON.stringify(listCreditCard)
    );
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
    return test;
  };

  const checkValueCreditCardAmountStatus = (value, name) => {
    let test =value &&
      parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
      parseInt(value.replace(/,/gi, ""), 10) <= 10000000;
      setListCreditCardValid({
        ...listCreditCard,
        [name]: Number(test)
      });
      window.localStorage.setItem(
        "listCreditCard",
        JSON.stringify(listCreditCard)
      );
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
    return test;
  };

  const onKeyUpHandle = (value, name) => {
    setListCreditCard({
      ...listCreditCard,
      [name]: value
    });
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
  };

  useMemo(() => {
    window.localStorage.setItem(
      "listCreditCard",
      JSON.stringify(listCreditCard)
    );
    window.localStorage.setItem("listCreditCardNumber", childrenNumber);
    handleGetLoan2value("listCreditCard", listCreditCard);
    // eslint-disable-next-line
  }, [listCreditCard, childrenNumber]);

  const handlePlusItem = () => {
    if (childrenNumber <= 2) {
      setChildrenNumber(childrenNumber + 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be less than or equal to 3",
      });
    }
  };

  const handleRemoveItem = () => {
    if (childrenNumber >= 1) {
      setChildrenNumber(childrenNumber - 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
      setListCreditCard({
        ...listCreditCard,
        [`valueCreditCard35${childrenNumber}`]: "",
        [`valueCreditCard35Amount${childrenNumber}`]: ""
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be greater than or equal to 1",
      });
    }
  };

  const handleSetValueCreditCardValid = (value, name) =>{
    setListCreditCardValid({
      ...listCreditCard,
      [name]: value
    });
  }
  
  const renderListChillCard = ()=> {
    const listChillApplicantAge = [];
    for (let i = 1; i <= parseInt(childrenNumber, 10); i += 1) {
      listChillApplicantAge.push(
        <CardList
          key={i}
          handlePlusItem={handlePlusItem} 
          handleRemoveItem={handleRemoveItem}
          handleGetLoan2value={handleGetLoan2value}
          indexItem={i}
          valueCreditCardValid={listCreditCardValid ? listCreditCardValid[`valueCreditCard35${i}`] : ""}
          handleSetValueCreditCardValid={handleSetValueCreditCardValid}
          onKeyUpHandle={onKeyUpHandle}
          valueCreditCard={listCreditCard ? listCreditCard[`valueCreditCard35${i}`] : ""}
          checkValueCreditCardStatus={checkValueCreditCardStatus}
          valueCreditCardAmount={listCreditCard && listCreditCard[`valueCreditCard35Amount${i}`]}
          checkValueCreditCardAmountStatus={checkValueCreditCardAmountStatus}
          valueCreditCardAmountValid={listCreditCardValid && listCreditCardValid[`valueCreditCard35Amount${i}`]}
          childrenNumber={childrenNumber}
        />
      );
    }
    return listChillApplicantAge;
  }

  return (
    <div className="position-relative w-100">
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

export default Step30;
