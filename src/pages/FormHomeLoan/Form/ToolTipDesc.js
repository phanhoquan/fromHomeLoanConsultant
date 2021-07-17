/** @format */

import React from "react";

const ToolTipDesc = () => {
  return (
    <div className="tooltip-price">
      <div className="tooltip-desc">
        <p>
          Typically people want to cover debts so their loved ones are not left
          with this burden, should the worst happen.
        </p>
        <p>
          For example: John Doe has a:
          <br />
          - $750,000 mortgage.
          <br />
          - $10,000 credit card debt.
          <br />
          - $40,000 car loan.
          <br />
        </p>
        <p>
          He also has two kids with 7 years of schooling left which roughly
          equates to $150,000 total expenses. So in total, if John was the main
          breadwinner, to cover all the family's expenses, if the worst happened
          to him, he would likely want in excess of:{" "}
          <span className="text-red">$950,000 in life insurance cover.</span>
        </p>
        <p>
          *This is a very rough example. to be used as a 'calculation guide'
          only, and does not take into consideration your needs. If in doubt
          consult a financial planner.
        </p>
      </div>
    </div>
  );
};

export default ToolTipDesc;
