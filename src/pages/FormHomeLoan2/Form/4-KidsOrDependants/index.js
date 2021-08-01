/** @format */

import React, { useState, useMemo } from "react";
import LifeInsurance from "../../index";

import Step08 from "./Step08";
import Step09 from "./Step09";
import Step10 from "./Step10";
import Step11 from "./Step11";

const KidsOrDependents = () => {
  let listMenuStep4 = localStorage.getItem("listMenuStep4")
    ? JSON.parse(localStorage.getItem("listMenuStep4"))
    : [];

  const [dataListMenuStep4, setDataListMenuStep4] = useState(
    listMenuStep4 || []
  );

  const [loan2value, setLoan2value] = useState({
    kidsOrDependant: localStorage.getItem("loan2kidsOrDependant") || "",
    chillApplicantAge: localStorage.getItem("loan2chillApplicantAge")
      ? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
      : null,
    otherDependents: localStorage.getItem("loan2otherDependents") || "",
    otherChillApplicantAge: localStorage.getItem("loan2otherChillApplicantAge")
      ? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
      : null,
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };
  const {
    kidsOrDependant,
    chillApplicantAge,
    otherDependents,
    otherChillApplicantAge,
  } = loan2value;
  const step4 = [
    {
      id: 1,
      question: `${
        kidsOrDependant ? "8. Do you have any kids or dependants?" : ""
      }`,
    },
    {
      id: 2,
      question: `${
        chillApplicantAge &&
        chillApplicantAge !== null &&
        chillApplicantAge !== "null"
          ? "9. What are the age of these kidsdependants?"
          : ""
      }`,
    },
    {
      id: 10,
      question: `${
        otherDependents ? "10. Do you have any other dependants?" : ""
      }`,
    },
    {
      id: 11,
      question: `${
        otherChillApplicantAge &&
        otherChillApplicantAge !== null &&
        otherChillApplicantAge !== "null"
          ? "11. What are the age of these other dependants?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (
      kidsOrDependant ||
      chillApplicantAge ||
      otherDependents ||
      otherChillApplicantAge
    ) {
      setDataListMenuStep4(step4);
    }
    window.localStorage.setItem("listMenuStep4", JSON.stringify(step4));
    // eslint-disable-next-line
  }, [
    kidsOrDependant,
    chillApplicantAge,
    otherDependents,
    otherChillApplicantAge,
  ]);

  return (
    <LifeInsurance activeStep={4} listMenuStep4={dataListMenuStep4}>
      <Step08 handleGetLoan2value={handleGetLoan2value} />
      <Step09 handleGetLoan2value={handleGetLoan2value} />
      <Step10 handleGetLoan2value={handleGetLoan2value} />
      <Step11 handleGetLoan2value={handleGetLoan2value} />
    </LifeInsurance>
  );
};

export default KidsOrDependents;
