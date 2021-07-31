/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step31 from "./Step31";
import Step32 from "./Step32";

const ResidentialInformation = () => {
  return (
    <LifeInsurance activeStep={8}>
      <Step31 />
      <Step32 />
    </LifeInsurance>
  );
};

export default ResidentialInformation;
