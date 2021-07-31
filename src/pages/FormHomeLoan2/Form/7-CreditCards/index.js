/** @format */

import React from "react";
import LifeInsurance from "../../index";

import Step29 from "./Step29";
import Step30 from "./Step30";

const CreditCards = () => {
  return (
    <LifeInsurance activeStep={7}>
      <Step29 />
      <Step30 />
    </LifeInsurance>
  );
};

export default CreditCards;
