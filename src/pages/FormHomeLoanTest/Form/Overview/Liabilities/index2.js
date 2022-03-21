/** @format */

import React from "react";

const Applicants = () => {
const loan2personalLoan =localStorage.getItem("loan2personalLoan");
const loan2carLoanAmount =localStorage.getItem("loan2carLoanAmount");
const loan2HECSDebtAmount =localStorage.getItem("loan2HECSDebtAmount")
  return (
    <>
      <div className="liabilities-wrap w-100">
          <div className={`table-cell ${loan2personalLoan?'':'disable'}`}>
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Personal Loan</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-33 text-center">
                    <p>Instituation</p>
                  </div>
                  <div className="table-label w-33 text-center">
                    <p>Limit</p>
                  </div>
                  <div className="table-label w-33 text-center">
                    <p>Monthly <br/> Repayment</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-33">
                    <p>{localStorage.getItem("loan2personalLoan") || 'No'}</p>
                  </div>
                  <div className="table-content w-33">
                      <p>{localStorage.getItem("loan2personalLoanAmount")? `$${parseInt(localStorage.getItem("loan2personalLoanAmount")).toLocaleString('en')}`:''}</p>
                  </div>
                  <div className="table-content w-33">
                      <p>{localStorage.getItem("loan2personalLoanMonthly")? `$${parseInt(localStorage.getItem("loan2personalLoanMonthly")).toLocaleString('en')}`:''}</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
            <div className={`table-cell ${loan2carLoanAmount?'':'disable'}`}>
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Car Loan</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-33 text-center">
                    <p>Instituation</p>
                  </div>
                  <div className="table-label w-33 text-center">
                    <p>Limit</p>
                  </div>
                  <div className="table-label w-33 text-center">
                    <p>Monthly <br/> Repayment</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-33">
                     <p>{localStorage.getItem("loan2carLoan")||'No'}</p>
                  </div>
                  <div className="table-content w-33">
                    <p>{localStorage.getItem("loan2carLoanAmount")? `$${parseInt(localStorage.getItem("loan2carLoanAmount")).toLocaleString('en')}`:''}</p>
                  </div>
                  <div className="table-content w-33">
                    <p>{localStorage.getItem("loan2carLoanMonthly") ? `$${parseInt(localStorage.getItem("loan2carLoanMonthly")).toLocaleString('en')}`:''}</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
          <div className={`table-cell ${loan2HECSDebtAmount?'':'disable'}`}>
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>HECS</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                 <div className="table-label w-0 text-center border-0"/>
                  <div className="table-label w-100 text-center h-80">
                    <p>Limit</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-0"/>
                  <div className="table-content w-100">
                    <p>{localStorage.getItem("loan2HECSDebtAmount")? `$${parseInt(localStorage.getItem("loan2HECSDebtAmount")).toLocaleString('en')}`:''}</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Applicants;
