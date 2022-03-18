/** @format */

import React from "react";

const ResidentialInformation = () => {
const loan2fullAddress = localStorage.getItem("loan2fullAddress")||'';
const investmentProperty38B = localStorage.getItem("investmentProperty38B") ||'';
const loan2fullAddress39A = localStorage.getItem("loan2fullAddress39A") || localStorage.getItem("loan2fullAddress39C") || "";
const timeLiving39B = localStorage.getItem("timeLiving39B") || localStorage.getItem("timeLiving39D") ||'';
const rentalPropertyIncome = localStorage.getItem("rentalPropertyIncome") || ''; 
  return (
    <div className="applicants-wrap residentialInformation w-100">
        <div className="table-cell pc d-none d-md-block">
            <div className="table-header d-flex">
                <div className={`table-label text-left ${loan2fullAddress.trim() ? '':'disable2'}`}>
                  <p>Address of the property<br/> wanting to refinance</p>
                </div>
                <div className={`table-label text-left ${investmentProperty38B.trim() ? '':'disable2'}`}>
                  <p>Kind Of Property</p>
                </div>
                <div className={`table-label text-left ${loan2fullAddress39A.trim() ? '':'disable2'}`}>
                  <p>Current Living Address</p>
                </div>
                <div className={`table-label text-left ${timeLiving39B.trim() ? '':'disable2'}`}>
                  <p>Time Living <br/> At This Address</p>
                </div>
                <div className={`table-label text-left ${rentalPropertyIncome.trim() ? '':'disable2'}`}>
                  <p>Rental Income</p>
                </div>
            </div>
            <div className="table-body d-flex">
                <div className={`table-content ${loan2fullAddress.trim() ? '':'disable2'}`}>
                  <p>{loan2fullAddress}</p>
                </div>
                <div className={`table-content border-left-0 ${investmentProperty38B.trim() ? '':'disable2'}`}>
                  <p>{localStorage.getItem("investmentProperty38B") ||''}</p>
                </div>
                <div className={`table-content border-left-0 ${loan2fullAddress39A.trim() ? '':'disable2'}`}>
                  <p>{localStorage.getItem("loan2fullAddress39A") || localStorage.getItem("loan2fullAddress39C") || ""}</p>
                </div>
                <div className={`table-content border-left-0 ${timeLiving39B.trim() ? '':'disable2'}`}>
                  <p>{localStorage.getItem("timeLiving39B") || localStorage.getItem("timeLiving39D") ||''}</p>
                </div>
                <div className={`table-content border-left-0 ${rentalPropertyIncome.trim() ? '':'disable2'}`}>
                  <p className="price">{localStorage.getItem("rentalPropertyIncome")? `$${parseInt(localStorage.getItem("rentalPropertyIncome")).toLocaleString('en')}`:''}</p>
                </div>
            </div>
        </div>
        <div className="table-cell mobile d-block d-md-none">
            <div className="table-body d-flex">
              <div className={`table-label bg-blue ${loan2fullAddress.trim() ? '':'disable2'}`}>
                <p>Address of the property wanting to refinance</p>
              </div>
              <div className={`table-content border-top ${loan2fullAddress.trim() ? '':'disable2'}`}>
                <p>{loan2fullAddress}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className={`table-label bg-blue ${investmentProperty38B.trim() ? '':'disable2'}`}>
                <p>Kind Of Property</p>
              </div>
              <div className={`table-content ${investmentProperty38B.trim() ? '':'disable2'}`}>
              <p>{localStorage.getItem("investmentProperty38B") ||''}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className={`table-label bg-blue ${loan2fullAddress39A.trim() ? '':'disable2'}`}>
                <p>Current Living Address</p>
              </div>
              <div className={`table-content ${loan2fullAddress39A.trim() ? '':'disable2'}`}>
              <p>{localStorage.getItem("loan2fullAddress39A") ||localStorage.getItem("loan2fullAddress39C") || ""}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className={`table-label bg-blue ${timeLiving39B.trim() ? '':'disable2'}`}>
                <p>Time Living <br/> At This Address</p>
              </div>
              <div className={`table-content ${timeLiving39B.trim() ? '':'disable2'}`}>
              <p>{localStorage.getItem("timeLiving39B") || localStorage.getItem("timeLiving39D") ||''}</p>
              </div>
          </div>
          <div className="table-body d-flex">
              <div className={`table-label bg-blue ${rentalPropertyIncome.trim() ? '':'disable2'}`}>
                <p>Rental Income</p>
              </div>
              <div className={`table-content ${rentalPropertyIncome.trim() ? '':'disable2'}`}>
              <p className="price">{localStorage.getItem("rentalPropertyIncome")? `$${parseInt(localStorage.getItem("rentalPropertyIncome")).toLocaleString('en')}`:''}</p>
              </div>
          </div>
        </div>
    </div>
  );
};

export default ResidentialInformation;
