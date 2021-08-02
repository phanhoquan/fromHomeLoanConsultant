/** @format */

import React, { useMemo, useState } from "react";
import LifeInsurance from "../../index";

import Step12 from "../5-EmploymentStatus(Sole)/Step12";
import Step13 from "../5-EmploymentStatus(Sole)/Step13";
import Step14 from "../5-EmploymentStatus(Sole)/Step14";
import Step15 from "../5-EmploymentStatus(Sole)/Step15";
import Step16 from "../5-EmploymentStatus(Sole)/Step16";
import Step17 from "../5-EmploymentStatus(Sole)/Step17";
import Step18 from "../5-EmploymentStatus(Sole)/Step18";
import Step19 from "../5-EmploymentStatus(Sole)/Step19";
import Step20 from "../5-EmploymentStatus(Sole)/Step20";

import Step21 from "../5-EmploymentStatus(Sole)/Step21";
import Step22 from "../5-EmploymentStatus(Sole)/Step22";
import Step23 from "../5-EmploymentStatus(Sole)/Step23";
import Step24 from "../5-EmploymentStatus(Sole)/Step24";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const EmploymentStatusSoleJoint = () => {
  const jointApplicationStatus =
    localStorage.getItem("loan2jointApplicationStatus") || "";
  let listMenuStep5 = localStorage.getItem("listMenuStep5")
    ? JSON.parse(localStorage.getItem("listMenuStep5"))
    : [];
  const employmentStatus = localStorage.getItem("loan2employmentStatus");
  const [dataListMenuStep5, setDataListMenuStep5] = useState(
    listMenuStep5 || []
  );

  const [loan2value, setLoan2value] = useState({
    workingStatus: localStorage.getItem("loan2workingStatus") || "",
    employmentWorkingStatus:
      localStorage.getItem("loan2employmentWorkingStatus") || "",
    numberPartnerReturn16:
      localStorage.getItem("loan2numberPartnerReturn16") || "",
    occupation: localStorage.getItem("loan2occupation") || "",
    numberYearWorking: localStorage.getItem("loan2numberYearWorking") || "",
    typeOfBusinessOther: localStorage.getItem("loan2typeOfBusinessOther") || "",
    businessBeenRegistered:
      localStorage.getItem("loan2businessBeenRegistered") || "",
    taxReturns: localStorage.getItem("loan2taxReturns") || "",
    priceTax2019: localStorage.getItem("loan2priceTax2019") || "",
    priceTax2020: localStorage.getItem("loan2priceTax2020") || "",
    partnersOccupation: localStorage.getItem("loan2partnersOccupation") || "",
    employmentPartnersWorkingStatus:
      localStorage.getItem("loan2employmentPartnersWorkingStatus") || "",
    numberPartnerReturn: localStorage.getItem("loan2numberPartnerReturn") || "",
    partnersSalary: localStorage.getItem("loan2partnersSalary") || "",
  });

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
    if (name === "employmentWorkingStatus") {
      window.localStorage.setItem("loan2numberPartnerReturn16", "");
    }
  };
  const {
    workingStatus,
    employmentWorkingStatus,
    numberPartnerReturn16,
    occupation,
    numberYearWorking,
    typeOfBusinessOther,
    businessBeenRegistered,
    taxReturns,
    priceTax2019,
    priceTax2020,
    partnersOccupation,
    employmentPartnersWorkingStatus,
    numberPartnerReturn,
    partnersSalary,
  } = loan2value;
  const titleStep12 = `12. You mentioned that you are working ‘${employmentStatus}’ Is that correct?`;
  const step5 = [
    {
      id: 1,
      question: `${workingStatus ? titleStep12 : ""}`,
    },
    {
      id: 2,
      question: `${
        employmentWorkingStatus ? "13. What is your employment status?" : ""
      }`,
    },
    {
      id: 3,
      question: `${
        numberPartnerReturn16
          ? "14. When are you expected to return to work?"
          : ""
      }`,
    },
    {
      id: 4,
      question: `${occupation ? "15. What is your occupation?" : ""}`,
    },
    {
      id: 5,
      question: `${
        numberYearWorking
          ? "16. How long have you been working at this job for?"
          : ""
      }`,
    },
    {
      id: 6,
      question: `${
        typeOfBusinessOther ? "17. What type of business is this?" : ""
      }`,
    },
    {
      id: 7,
      question: `${
        businessBeenRegistered
          ? "18. How many years has the ABN for this business been registered for?"
          : ""
      }`,
    },
    {
      id: 8,
      question: `${
        taxReturns
          ? "19. Have the tax returns for 2019/2020 been completed?"
          : ""
      }`,
    },
    {
      id: 9,
      question: `${
        priceTax2019 ? "20. What was your 2019 taxable income?" : ""
      }`,
    },
    {
      id: 10,
      question: `${
        priceTax2020 ? "21. What was your 2020 taxable income?" : ""
      }`,
    },
    {
      id: 11,
      question: `${
        partnersOccupation && jointApplicationStatus === types[2]
          ? "22. What is your partners occupation?"
          : ""
      }`,
    },
    {
      id: 12,
      question: `${
        employmentPartnersWorkingStatus && jointApplicationStatus === types[2]
          ? "23. What is your partners employment status?"
          : ""
      }`,
    },
    {
      id: 13,
      question: `${
        numberPartnerReturn && jointApplicationStatus === types[2]
          ? "24. When is your partner expected to return to work?"
          : ""
      }`,
    },
    {
      id: 14,
      question: `${
        partnersSalary && jointApplicationStatus === types[2]
          ? "25. What is your partners salary?"
          : ""
      }`,
    },
  ];

  useMemo(() => {
    if (
      workingStatus ||
      employmentWorkingStatus ||
      numberPartnerReturn16 ||
      occupation ||
      numberYearWorking ||
      typeOfBusinessOther ||
      businessBeenRegistered ||
      taxReturns ||
      priceTax2019 ||
      priceTax2020 ||
      partnersOccupation ||
      employmentPartnersWorkingStatus ||
      numberPartnerReturn ||
      partnersSalary
    ) {
      setDataListMenuStep5(step5);
    }
    window.localStorage.setItem("listMenuStep6", JSON.stringify(step5));
    // eslint-disable-next-line
  }, [
    workingStatus,
    employmentWorkingStatus,
    numberPartnerReturn16,
    occupation,
    numberYearWorking,
    typeOfBusinessOther,
    businessBeenRegistered,
    taxReturns,
    priceTax2019,
    priceTax2020,
    partnersOccupation,
    employmentPartnersWorkingStatus,
    numberPartnerReturn,
    partnersSalary,
  ]);

  return (
    <LifeInsurance
      activeStep={5}
      numberScroll={1200}
      listMenuStep5={dataListMenuStep5}
      jointApplicationStatus={jointApplicationStatus}
    >
      <Step12 handleGetLoan2value={handleGetLoan2value} />
      <Step13 handleGetLoan2value={handleGetLoan2value} />
      <Step14
        handleGetLoan2value={handleGetLoan2value}
        employmentWorkingStatus={employmentWorkingStatus}
      />
      <Step15 handleGetLoan2value={handleGetLoan2value} />
      <Step16 handleGetLoan2value={handleGetLoan2value} />
      <Step17 handleGetLoan2value={handleGetLoan2value} />
      <Step18 handleGetLoan2value={handleGetLoan2value} />
      <Step19 handleGetLoan2value={handleGetLoan2value} />
      <Step20 handleGetLoan2value={handleGetLoan2value} />

      <Step21
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
      <Step22
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
      <Step23
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
      <Step24
        handleGetLoan2value={handleGetLoan2value}
        jointApplicationStatus={jointApplicationStatus}
      />
    </LifeInsurance>
  );
};

export default EmploymentStatusSoleJoint;
