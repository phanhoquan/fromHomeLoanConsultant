/** @format */

import React from "react";
import PurchasePropertyValue from "./Purchase/PropertyValue";
import RefinancePropertyValue from "./Refinance/PropertyValue";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Four = () => {
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );

  return (
    <div>
      {checkboxRefinancePurchase === types.purchase ? (
        <PurchasePropertyValue />
      ) : (
        <RefinancePropertyValue />
      )}
    </div>
  );
};

export default Four;
