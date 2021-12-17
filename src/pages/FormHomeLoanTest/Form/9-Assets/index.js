/** @format */

import React, { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LifeInsurance from "../../index";

import Step36 from "./Step36";
import Step37 from "./Step37";
import Step38 from "./Step38"
import Step39 from "./Step39";

export const types = {
  1: "YES",
  2: "NO",
};

const Assets = () => {
  const history = useHistory();
  let listMenuStep10 = localStorage.getItem("listMenuStep10")
    ? JSON.parse(localStorage.getItem("listMenuStep10"))
    : [];

  const [dataListMenuStep10, setDataListMenuStep10] = useState(
    listMenuStep10 || []
  );

  const [loan2value, setLoan2value] = useState({
    makeModel36: localStorage.getItem("makeModel36") || "",
    makeModel37: localStorage.getItem("makeModel37") || "",
    amountHome39: localStorage.getItem("amountHome39") || "",
    amountHome38A: localStorage.getItem("amountHome38A") || "",
    amountHome38B: localStorage.getItem("amountHome38B") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };

  const { makeModel36, makeModel37,amountHome38A,amountHome38B, amountHome39} = loan2value;

  const step10 = [
    {
      id: 1,
      question: `${makeModel36 ? "36. Do you own any cars?" : ""}`,
    },
    {
      id: 2,
      question: `${
        makeModel37 ? "37. Do you own any other vehicles or boats?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        amountHome38A || amountHome38B? "38. How much superannuation do you have?" : ""
      }`,
    },
    {
      id: 4,
      question: `${
        amountHome39  ? "39. What is the value of your home contents?" : ""
      }`,
    },
  ];
  
  useMemo(() => {
    if (makeModel36||makeModel37||amountHome39 || amountHome38B ||amountHome38A ) {
      setDataListMenuStep10(step10);
    }
    window.localStorage.setItem("listMenuStep10", JSON.stringify(step10));
    // eslint-disable-next-line
  }, [makeModel36,makeModel37,amountHome38A,amountHome38B, amountHome39]);

  const onClickNext = () => {
    history.push("/refinance-home-loan-consultant-test/ResidentialInformation");
  };

  return (
    <LifeInsurance
      activeStep={9}
      listMenuStep10={dataListMenuStep10}
      numberScroll={2000}
    >
      <Step36 handleGetLoan2value={handleGetLoan2value} />
      <Step37 handleGetLoan2value={handleGetLoan2value} />
      <Step38 handleGetLoan2value={handleGetLoan2value} />
      <Step39 handleGetLoan2value={handleGetLoan2value} />
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
