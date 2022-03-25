/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step44 from "./Step44";
import Step44A from "./Step44A";

export const types = {
  1: "YES",
  2: "NO",
};

const Assets = () => {
  const history = useHistory();
  let listMenuStep11 = localStorage.getItem("listMenuStep11")
    ? JSON.parse(localStorage.getItem("listMenuStep11"))
    : [];

  const [dataListMenuStep11, setDataListMenuStep11] = useState(
    listMenuStep11 || []
  );

  const [loan2value, setLoan2value] = useState({
    investmentProperties: localStorage.getItem("loan2investmentProperties") || "",
    listItemProperty: localStorage.getItem("listItemProperty")
    ? JSON.parse(localStorage.getItem("listItemProperty"))
    : null,
  });

  const handleGetLoan2value = (name, value) => {
    switch (name) {
      case 'investmentProperties':
        window.localStorage.setItem("listItemPropertyNumber", 1);
        window.localStorage.setItem(
          "listItemProperty", null
        );
        setLoan2value({
          ...loan2value,
          [name]: value,
          listItemProperty: null
        });
        break;
    
      default:
        setLoan2value({
          ...loan2value,
          [name]: value,
        });
        break;
    }
  };

  const { investmentProperties, listItemProperty } = loan2value;

  const step10 = [
    {
      id: 1,
      question: `${investmentProperties ? "44. Do you have any other investment properties?" : ""}`,
    },
    {
      id: 2,
      question: `${
        listItemProperty ? "44a. What is the address of this property?" : ""
      }`,
    },
  ];
  
  useMemo(() => {
    if (investmentProperties||listItemProperty) {
      setDataListMenuStep11(step10);
    }
    window.localStorage.setItem("listMenuStep11", JSON.stringify(step10));
    // eslint-disable-next-line
  }, [investmentProperties,listItemProperty]);

  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/overview");
  };
  
  return (
    <LifeInsurance
      activeStep={9}
      listMenuStep11={dataListMenuStep11}
      numberScroll={2800}
    >
      <Step44 handleGetLoan2value={handleGetLoan2value} />
      {investmentProperties === types[1] ? (
        <Step44A handleGetLoan2value={handleGetLoan2value} />
      ):''}
      <div className="group-btn-footer col d-flex justify-content-center mb-5">
        <Button
          className="btnPrimary life wow fadeInUp mt-0 in-progress"
          type="next"
          onClick={onClickNext}
        >
          NEXT
        </Button>
      </div>
    </LifeInsurance>
  );
};

export default Assets;
