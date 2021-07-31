/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step04 from "./Step04";
import Step05 from "./Step05";
import Step06 from "./Step06";
import Step07 from "./Step07";
import Step07B from "./Step07B";

const ApplicantDetails = () => {
  return (
    <LifeInsurance activeStep={3}>
      <Step04 />
      <Step05 />
      <Step06 />
      <Step07 />
      <Step07B />
    </LifeInsurance>
  );
};

export default ApplicantDetails;
