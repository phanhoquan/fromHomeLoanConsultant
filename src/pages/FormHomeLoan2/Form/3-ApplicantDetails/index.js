/** @format */

import React, { useState, useMemo } from "react";
import LifeInsurance from "../../index";

import Step04 from "./Step04";
import Step05 from "./Step05";
import Step06 from "./Step06";
import Step07 from "./Step07";
import Step07B from "./Step07B";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const ApplicantDetails = () => {
  let listMenuStep3 = localStorage.getItem("listMenuStep3")
    ? JSON.parse(localStorage.getItem("listMenuStep3"))
    : [];

  const [dataListMenuStep3, setDataListMenuStep3] = useState(
    listMenuStep3 || []
  );

  const [applicationStatus, setApplicationStatus] = useState(
    localStorage.getItem("loan2jointApplicationStatus") || ""
  );
  const [loan2firstNameOther, setLoan2firstNameOther] = useState(
    localStorage.getItem("loan2firstNameOther") || ""
  );
  const [loan2value, setLoan2value] = useState({
    firstNameOther: localStorage.getItem("loan2firstNameOther") || "",
    lastNameOther: localStorage.getItem("loan2lastNameOther") || "",
    relationshipYour: localStorage.getItem("loan2relationshipYour") || "",
    soleApplicantAge: localStorage.getItem("loan2soleApplicantAge") || "",
    jointApplicantAge: localStorage.getItem("loan2jointApplicantAge") || "",
  });

  const handelGetApplicationStatus = (option) => {
    setApplicationStatus(option);
    localStorage.setItem("loan2firstNameOther", "");
    localStorage.setItem("loan2lastNameOther", "");
    localStorage.setItem("loan2relationshipYour", "");
    localStorage.setItem("loan2soleApplicantAge", "");
    localStorage.setItem("loan2jointApplicantAge", "");
  };

  const handleGetLoan2value = (name, value) => {
    setLoan2value({
      ...loan2value,
      [name]: value,
    });
  };

  const handleGetLoan2firstNameOther = (value) => {
    setLoan2firstNameOther(value);
  };
  const {
    firstNameOther,
    lastNameOther,
    relationshipYour,
    soleApplicantAge,
    jointApplicantAge,
  } = loan2value;

  const firstName = localStorage.getItem("firstName") || "";
  const title = `7. What are the ages of both ${firstName} & ${loan2firstNameOther}?`;
  const titleRelationshipYour = `6. What is your relationship with ${loan2firstNameOther}?`;
  const step3 = [
    {
      id: 1,
      question: `${
        applicationStatus
          ? "4. Are you the sole applicant or is this a joint application?"
          : ""
      }`,
    },
    {
      id: 2,
      question: `${
        firstNameOther || lastNameOther
          ? "5. What is the other name of the applicant?"
          : ""
      }`,
    },
    {
      id: 3,
      question: `${relationshipYour ? titleRelationshipYour : ""}`,
    },
    {
      id: 4,
      question: `${
        (soleApplicantAge && applicationStatus === types[2]) ||
        (jointApplicantAge && applicationStatus === types[2])
          ? title
          : `${
              soleApplicantAge || jointApplicantAge
                ? "7. What is the age of the applicant?"
                : ""
            }`
      }`,
    },
  ];

  useMemo(() => {
    if (applicationStatus) {
      setDataListMenuStep3(step3);
    }
    window.localStorage.setItem("listMenuStep3", JSON.stringify(step3));
    // eslint-disable-next-line
  }, [
    applicationStatus,
    firstNameOther,
    lastNameOther,
    relationshipYour,
    soleApplicantAge,
    jointApplicantAge,
  ]);

  return (
    <LifeInsurance activeStep={3} listMenuStep3={dataListMenuStep3}>
      <Step04 handelGetApplicationStatus={handelGetApplicationStatus} />
      <Step05
        applicationStatus={applicationStatus}
        handleGetLoan2firstNameOther={handleGetLoan2firstNameOther}
        handleGetLoan2value={handleGetLoan2value}
      />
      <Step06
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
        handleGetLoan2value={handleGetLoan2value}
      />
      <Step07
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
        handleGetLoan2value={handleGetLoan2value}
      />
      <Step07B
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
        handleGetLoan2value={handleGetLoan2value}
      />
    </LifeInsurance>
  );
};

export default ApplicantDetails;
