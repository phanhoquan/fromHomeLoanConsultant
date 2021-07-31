/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step08 from "./Step08";
import Step09 from "./Step09";
import Step10 from "./Step10";
import Step11 from "./Step11";

const KidsOrDependents = () => {
  return (
    <LifeInsurance activeStep={4}>
      <Step08 />
      <Step09 />
      <Step10 />
      <Step11 />
    </LifeInsurance>
  );
};

export default KidsOrDependents;
