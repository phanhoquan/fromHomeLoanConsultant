/** @format */

import React, { useState } from "react";
import LifeInsurance from "../../index";

import Step04 from "./Step04";
import Step05 from "./Step05";
import Step06 from "./Step06";
import Step07 from "./Step07";
import Step07B from "./Step07B";

const ApplicantDetails = () => {
  const [applicationStatus, setApplicationStatus] = useState(
    localStorage.getItem("loan2jointApplicationStatus") || ""
  );
  const [loan2firstNameOther, setLoan2firstNameOther] = useState(
    localStorage.getItem("loan2firstNameOther") || ""
  );
  const handelGetApplicationStatus = (option) => {
    setApplicationStatus(option);
    localStorage.setItem("loan2firstNameOther", "");
    localStorage.setItem("loan2lastNameOther", "");
    localStorage.setItem("loan2relationshipYour", "");
    localStorage.setItem("loan2soleApplicantAge", "");
    localStorage.setItem("loan2jointApplicantAge", "");
  };

  const handleGetLoan2firstNameOther = (value) => {
    setLoan2firstNameOther(value);
  };

  return (
    <LifeInsurance activeStep={3}>
      <Step04 handelGetApplicationStatus={handelGetApplicationStatus} />
      <Step05
        applicationStatus={applicationStatus}
        handleGetLoan2firstNameOther={handleGetLoan2firstNameOther}
      />
      <Step06
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
      />
      <Step07
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
      />
      <Step07B
        applicationStatus={applicationStatus}
        loan2firstNameOther={loan2firstNameOther}
      />
    </LifeInsurance>
  );
};

export default ApplicantDetails;
