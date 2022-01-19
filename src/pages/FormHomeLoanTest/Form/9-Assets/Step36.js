/** @format */

import React, { useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import CardStep from "./CardStep36";

const Step30 = ({ handleGetLoan2value }) => {

  const [listAnyCard, setListAnyCard] = useState(
    localStorage.getItem("listAnyCard")
      ? JSON.parse(localStorage.getItem("listAnyCard"))
      : null
  );
  const [listAnyCardValid, setListAnyCardValid] = useState({});

  const [childrenNumber, setChildrenNumber] = useState((localStorage.getItem("listAnyCardNumber") && parseInt(localStorage.getItem("listAnyCardNumber"), 10)) || 1);
  const [validMessage, setValidMessage] = useState({});

  const checkValueCreditCardAmountStatus = (value, key, name ) => {
    let test = false;
      if(key ==='value'){
        test = value ?  (parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
        parseInt(value.replace(/,/gi, ""), 10) <= 10000000): false
      }else{
        test = value ? value.length > 1 : false
      }
      setListAnyCardValid({
        ...listAnyCardValid,
        [name]: Number(test)
      });

      window.localStorage.setItem(
        "listAnyCard",
        JSON.stringify(listAnyCard)
      );

      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });

    return test;
  };

  const onKeyUpHandle = (value, name) => {
    setListAnyCard({
      ...listAnyCard,
      [name]: value
    });
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
  };
  useMemo(() => {
    window.localStorage.setItem(
      "listAnyCard",
      JSON.stringify(listAnyCard)
    );
    window.localStorage.setItem("listAnyCardNumber", childrenNumber);
    handleGetLoan2value("listAnyCard", listAnyCard);
    // eslint-disable-next-line
  }, [listAnyCard, childrenNumber]);

  const handlePlusItem = () => {
    if (childrenNumber <= 10) {
      setChildrenNumber(childrenNumber + 1);
      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be less than or equal to 10",
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
      setListAnyCard({
        ...listAnyCard,
        [`makeCard${childrenNumber}`]: "",
        [`modelCard${childrenNumber}`]: "",
        [`valueCard${childrenNumber}`]: ""
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be greater than or equal to 1",
      });
    }
  };

  const handleSetMakeModelValid = (value, name) =>{
    setListAnyCardValid({
      ...listAnyCardValid,
      [name]: value
    });
  }
  
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
          handleSetMakeModelValid={handleSetMakeModelValid}
          nameCard="Card"
          handleBlur={checkValueCreditCardAmountStatus}
          value={listAnyCard ? listAnyCard[`valueCard${i}`] : ""}
          model={listAnyCard ? listAnyCard[`modelCard${i}`] : ""}
          make={listAnyCard ? listAnyCard[`makeCard${i}`] : ""}
          makeModelValid={listAnyCardValid && 
            ((listAnyCardValid[`valueCard${i}`] === valid.INVALID) ||
            (listAnyCardValid[`modelCard${i}`] === valid.INVALID) ||
            (listAnyCardValid[`makeCard${i}`] === valid.INVALID))}
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
              <h2 className="mb-5 mb-md-4">
              36. Do you own any cars?
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

export default Step30;
