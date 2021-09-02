/** @format */

import React, { useMemo, useState } from "react";
import LifeInsurance from "../../index";

import Step31 from "./Step31";
import Step32 from "./Step32";
import Step32B from "./Step32B";
import Step33 from "./Step33";

export const types = {
  1: "YES",
  2: "NO",
};

const ResidentialInformation = () => {
  let listMenuStep9 = localStorage.getItem("listMenuStep9")
    ? JSON.parse(localStorage.getItem("listMenuStep9"))
    : [];

  const [dataListMenuStep9, setDataListMenuStep9] = useState(
    listMenuStep9 || []
  );

  const [loan2value, setLoan2value] = useState({
    fullAddress: localStorage.getItem("loan2fullAddress") || "",
    currentlyRenting: localStorage.getItem("loan2currentlyRenting") || "",
    timeRefinancing: localStorage.getItem("loan2timeRefinancing") || "",
    rentalPropertyIncome: localStorage.getItem("rentalPropertyIncome") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });

    if (name === "currentlyRenting" && value === types[2]) {
      localStorage.setItem("rentalPropertyIncome", "");
      setLoan2value({
        ...loan2value,
        currentlyRenting: value,
        rentalPropertyIncome: "",
      });
    }
  };

  const {
    fullAddress,
    currentlyRenting,
    timeRefinancing,
    rentalPropertyIncome,
  } = loan2value;
  const step9 = [
    {
      id: 1,
      question: `${
        fullAddress
          ? " 38. What is the full residential address of your current property?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        currentlyRenting
          ? "39. So with that property, are you currently renting it out?"
          : ""
      }`,
    },
    {
      id: 3,
      question: `${
        rentalPropertyIncome
          ? "40. How much rental income do you have on this property?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${
        timeRefinancing
          ? "41. What kind of time frame are you thinking of refinancing?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (fullAddress || currentlyRenting || rentalPropertyIncome) {
      setDataListMenuStep9(step9);
    }
    window.localStorage.setItem("listMenuStep9", JSON.stringify(step9));
    // eslint-disable-next-line
  }, [fullAddress, currentlyRenting, timeRefinancing, rentalPropertyIncome]);

  return (
    <LifeInsurance
      activeStep={8}
      numberScroll={2000}
      listMenuStep9={dataListMenuStep9}
    >
      <Step31 handleGetLoan2value={handleGetLoan2value} />
      <Step32 handleGetLoan2value={handleGetLoan2value} />
      {currentlyRenting === types[1] ? (
        <Step32B handleGetLoan2value={handleGetLoan2value} />
      ) : (
        ""
      )}
      <Step33 handleGetLoan2value={handleGetLoan2value} />
    </LifeInsurance>
  );
};

export default ResidentialInformation;
