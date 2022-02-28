/** @format */

import React from "react";

const ResidentialInformation = () => {

  return (
    <div className="applicants-wrap residentialInformation w-100">
        <div className="table-cell pc d-none d-md-block">
            <div className="table-header d-flex">
                <div className="table-label text-left">
                  <p>Address of the property<br/> wanting to refinance</p>
                </div>
                <div className="table-label text-left">
                  <p>Kind Of Property</p>
                </div>
                <div className="table-label text-left">
                  <p>Current Living Address</p>
                </div>
                <div className="table-label text-left">
                  <p>Time Living <br/> At This Address</p>
                </div>
                <div className="table-label text-left">
                  <p>Rental Income</p>
                </div>
            </div>
            <div className="table-body d-flex">
                <div className="table-content">
                  <p>{localStorage.getItem("loan2fullAddress")||''}</p>
                </div>
                <div className="table-content border-left-0">
                  <p>{localStorage.getItem("investmentProperty38B") ||''}</p>
                </div>
                <div className="table-content border-left-0">
                  <p>{localStorage.getItem("loan2fullAddress39A") ||localStorage.getItem("loan2fullAddress39C") || ""}</p>
                </div>
                <div className="table-content border-left-0">
                  <p>{localStorage.getItem("timeLiving39B") || localStorage.getItem("timeLiving39D") ||''}</p>
                </div>
                <div className="table-content border-left-0">
                  <p className="price">{localStorage.getItem("rentalPropertyIncome")? `$${parseInt(localStorage.getItem("rentalPropertyIncome")).toLocaleString('en')}`:''}</p>
                </div>
            </div>
        </div>
        <div className="table-cell mobile d-block d-md-none">
            <div className="table-body d-flex">
              <div className="table-label bg-blue">
                <p>Address of the property wanting to refinance</p>
              </div>
              <div className="table-content border-top">
                <p>{localStorage.getItem("loan2fullAddress")||''}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className="table-label bg-blue">
                <p>Kind Of Property</p>
              </div>
              <div className="table-content">
              <p>{localStorage.getItem("investmentProperty38B") ||''}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className="table-label bg-blue">
                <p>Current Living Address</p>
              </div>
              <div className="table-content">
              <p>{localStorage.getItem("loan2fullAddress39A") ||localStorage.getItem("loan2fullAddress39C") || ""}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className="table-label bg-blue">
                <p>Time Living <br/> At This Address</p>
              </div>
              <div className="table-content">
              <p>{localStorage.getItem("timeLiving39B") || localStorage.getItem("timeLiving39D") ||''}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className="table-label bg-blue">
                <p>Rental Income</p>
              </div>
              <div className="table-content">
              <p className="price">{localStorage.getItem("rentalPropertyIncome")? `$${parseInt(localStorage.getItem("rentalPropertyIncome")).toLocaleString('en')}`:''}</p>
              </div>
          </div>
        </div>
    </div>
  );
};

export default ResidentialInformation;
