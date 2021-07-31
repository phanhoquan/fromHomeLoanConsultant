/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step02 from "./Step02";
import Step03A from "./Step03-1";
import Step03B from "./Step03-2";
import Step03C from "./Step03-3";

const LoanInformation = () => {
  return (
    <LifeInsurance isShowHeader activeStep={2}>
      <Step02 />
      <Step03A />
      <Step03B />
      <Step03C />
    </LifeInsurance>
  );
};

export default LoanInformation;
