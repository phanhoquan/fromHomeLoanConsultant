/** @format */

import React from "react";

const Applicants = () => {
  const dataStep35 = localStorage.getItem("listCreditCard")
    ? JSON.parse(localStorage.getItem("listCreditCard"))
    : {};

  return (
    <>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Credit Card 1</p>
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
                    <p>{dataStep35?.valueCreditCard351 || ''}</p>
                  </div>
                  <div className="table-content w-50">
                    <p>${dataStep35?.valueCreditCard35Amount1 ? parseInt(dataStep35?.valueCreditCard35Amount1.replace(/,/gi, ""), 10).toLocaleString('en') : ""}</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Credit Card 2</p>
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
                    <p>{dataStep35?.valueCreditCard352 || ''}</p>
                  </div>
                  <div className="table-content w-50">
                    <p>${dataStep35?.valueCreditCard35Amount2 ? parseInt(dataStep35?.valueCreditCard35Amount2.replace(/,/gi, ""), 10).toLocaleString('en') : ""}</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="liabilities-wrap w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Credit Card 3</p>
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
                    <p>{dataStep35?.valueCreditCard353 || ''}</p>
                  </div>
                  <div className="table-content w-50">
                    <p>${dataStep35?.valueCreditCard35Amount3 ? parseInt(dataStep35?.valueCreditCard35Amount3.replace(/,/gi, ""), 10).toLocaleString('en') : ""}</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Applicants;
