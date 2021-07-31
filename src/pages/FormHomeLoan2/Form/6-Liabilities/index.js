/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step26 from "./Step26";
import Step27A from "./Step27a";
import Step27B from "./Step27B";
import Step27C from "./Step27C";

const Liabilities = () => {
  return (
    <LifeInsurance activeStep={6}>
      <Step26 />
      <Step27A />
      <Step27B />
      <Step27C />
    </LifeInsurance>
  );
};

export default Liabilities;
