/** @format */

import React, { useMemo, useState } from "react";
import LifeInsurance from "../../index";

import Step31 from "./Step31";
import Step32 from "./Step32";

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
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };
  const { fullAddress, currentlyRenting } = loan2value;
  const step9 = [
    {
      id: 1,
      question: `${
        fullAddress
          ? " 36. What is the full residential address of your current property?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        currentlyRenting
          ? "37. So with that property, are you currently renting it out?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (fullAddress || currentlyRenting) {
      setDataListMenuStep9(step9);
    }
    window.localStorage.setItem("listMenuStep9", JSON.stringify(step9));
    // eslint-disable-next-line
  }, [fullAddress, currentlyRenting]);

  return (
    <LifeInsurance
      activeStep={8}
      numberScroll={2000}
      listMenuStep9={dataListMenuStep9}
    >
      <Step31 handleGetLoan2value={handleGetLoan2value} />
      <Step32 handleGetLoan2value={handleGetLoan2value} />
    </LifeInsurance>
  );
};

export default ResidentialInformation;
