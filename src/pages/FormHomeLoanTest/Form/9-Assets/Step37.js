/** @format */

import React, { useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { valid } from "../../../../utils/constant";
import CardStep from "./CardStep";

const Step37 = ({ handleGetLoan2value }) => {

  const [listVehiclesBoats, setListVehiclesBoats] = useState(
    localStorage.getItem("listVehiclesBoats")
      ? JSON.parse(localStorage.getItem("listVehiclesBoats"))
      : null
  );
  const [listVehiclesBoatsValid, setListVehiclesBoatsValid] = useState({});

  const [childrenNumber, setChildrenNumber] = useState((localStorage.getItem("listVehiclesBoatsNumber") && parseInt(localStorage.getItem("listVehiclesBoatsNumber"), 10)) || 1);
  const [validMessage, setValidMessage] = useState({});

  const checkValueCreditCardAmountStatus = (value, key, name ) => {
    let test = false;
      if(key ==='value'){
        test = value ?  (parseInt(value.replace(/,/gi, ""), 10) >= 0 &&
        parseInt(value.replace(/,/gi, ""), 10) <= 10000000): false
      }else{
        test = value ? value.length > 1 : false
      }
      setListVehiclesBoatsValid({
        ...listVehiclesBoatsValid,
        [name]: Number(test)
      });

      window.localStorage.setItem(
        "listVehiclesBoats",
        JSON.stringify(listVehiclesBoats)
      );

      setValidMessage({
        ...validMessage,
        childrenNumber: "",
      });

    return test;
  };

  const onKeyUpHandle = (value, name) => {
    setListVehiclesBoats({
      ...listVehiclesBoats,
      [name]: value
    });
    setValidMessage({
      ...validMessage,
      childrenNumber: "",
    });
  };

  useMemo(() => {
    window.localStorage.setItem(
      "listVehiclesBoats",
      JSON.stringify(listVehiclesBoats)
    );
    window.localStorage.setItem("listVehiclesBoatsNumber", childrenNumber);
    handleGetLoan2value("listVehiclesBoats", listVehiclesBoats);
    // eslint-disable-next-line
  }, [listVehiclesBoats, childrenNumber]);

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
      setListVehiclesBoats({
        ...listVehiclesBoats,
        [`makeBoats${childrenNumber}`]: "",
        [`modelBoats${childrenNumber}`]: "",
        [`valueBoats${childrenNumber}`]: ""
      });
    } else {
      setValidMessage({
        ...validMessage,
        childrenNumber: "Max must be greater than or equal to 1",
      });
    }
  };

  const handleSetMakeModelValid = (value, name) =>{
    setListVehiclesBoatsValid({
      ...listVehiclesBoatsValid,
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
          nameCard="Boats"
          handleBlur={checkValueCreditCardAmountStatus}
          value={listVehiclesBoats ? listVehiclesBoats[`valueBoats${i}`] : ""}
          model={listVehiclesBoats ? listVehiclesBoats[`modelBoats${i}`] : ""}
          make={listVehiclesBoats ? listVehiclesBoats[`makeBoats${i}`] : ""}
          makeModelValid={listVehiclesBoatsValid && 
            ((listVehiclesBoatsValid[`valueBoats${i}`] === valid.INVALID) ||
            (listVehiclesBoatsValid[`modelBoats${i}`] === valid.INVALID) ||
            (listVehiclesBoatsValid[`makeBoats${i}`] === valid.INVALID))}
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
              37. Do you own any other vehicles or boats?
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
