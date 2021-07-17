/** @format */

import React from "react";
import PurchaseBorrow from "./Purchase/Borrow";
import RefinancePriceOwing from "./Refinance/Mortgage";

export const types = {
  purchase: "I want to purchase",
  refinance: "I want to refinance",
};

const Five = () => {
  const checkboxRefinancePurchase = localStorage.getItem(
    "checkboxRefinancePurchase"
  );
  return (
    <div>
      {checkboxRefinancePurchase === types.purchase ? (
        <PurchaseBorrow />
      ) : (
        <RefinancePriceOwing />
      )}
    </div>
  );
};

export default Five;
