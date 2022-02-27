/** @format */

import React from "react";

const ResidentialInformation = () => {

  return (
    <div className="applicants-wrap residentialInformation w-100">
        <div className="table-cell">
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
                  <p>Address of the property wanting to refinance</p>
                </div>
                <div className="table-content border-left-0">
                  <p>Investment Property</p>
                </div>
                <div className="table-content border-left-0">
                  <p>2/19 Randwick Court, Varsity Lakes, QLD 4227, Australia copy</p>
                </div>
                <div className="table-content border-left-0">
                  <p>4 Years</p>
                </div>
                <div className="table-content border-left-0">
                  <p className="price">$250,000</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ResidentialInformation;
