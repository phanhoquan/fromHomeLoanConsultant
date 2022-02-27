/** @format */

import React from "react";

const Applicants = () => {

  return (
    <>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Personal Loan</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-50 text-center">
                    <p>Instituation</p>
                  </div>
                  <div className="table-label w-50 text-center">
                    <p>Limit</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-50">
                    <p></p>
                  </div>
                  <div className="table-content w-50">
                    <p>$</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Car Loan</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-50 text-center">
                    <p>Instituation</p>
                  </div>
                  <div className="table-label w-50 text-center">
                    <p>Limit</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-50">
                    <p></p>
                  </div>
                  <div className="table-content w-50">
                    <p>$</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>HECS</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-100">
                    <p>Balance</p>
                  </div>
                  <div className="table-label w-0 text-center" />
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-100">
                    <p>$</p>
                  </div>
                  <div className="table-content w-0"/>
              </div>
          </div>
      </div>
    </>
  );
};

export default Applicants;
