/** @format */

import React from "react";

const Assets = () => {

  return (
    <>
      <div className="assets-wrap mb-4 w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Vehicle #1</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-100 text-center">
                    <p>Make</p>
                  </div>
                  <div className="table-label w-100 text-center">
                    <p>Modal</p>
                  </div>
                  <div className="table-label w-100 text-center border-right">
                    <p>Value</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-100 text-center">
                    <p>2000</p>
                  </div>
                  <div className="table-content w-100 text-center">
                    <p>Tesla</p>
                  </div>
                  <div className="table-content w-100 text-center border-right">
                    <p>$500,000</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="assets-wrap mb-4 w-100">
          <div className="table-cell">
              <div className="table-header d-flex">
                  <div className="table-label w-100">
                    <p>Other Vehicle #1</p>
                  </div>
              </div>
              <div className="table-body table-sub d-flex">
                  <div className="table-label w-25 text-center">
                    <p>Type</p>
                  </div>
                  <div className="table-label w-25 text-center">
                    <p>Make</p>
                  </div>
                  <div className="table-label w-25 text-center">
                    <p>Modal</p>
                  </div>
                  <div className="table-label w-25 text-center border-right">
                    <p>Value</p>
                  </div>
              </div>
              <div className="table-body d-flex">
                  <div className="table-content w-25 text-center">
                    <p>2000</p>
                  </div>
                  <div className="table-content w-25 text-center">
                    <p>2000</p>
                  </div>
                  <div className="table-content w-25 text-center">
                    <p>Tesla</p>
                  </div>
                  <div className="table-content w-25 text-center border-right">
                    <p>$500,000</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="d-block d-md-flex">
        <div className="applicants-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Superanuation Applicant 1</p>
                    </div>
                    <div className="table-content w-0"/>
                </div>
                <div className="table-body d-flex">
                    <div className="table-label w-25">
                      <p>Value</p>
                    </div>
                    <div className="table-content w-75">
                      <p>$</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="applicants-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Superanuation Applicant 2</p>
                    </div>
                    <div className="table-content w-0"/>
                </div>
                <div className="table-body d-flex">
                    <div className="table-label w-25">
                      <p>Value</p>
                    </div>
                    <div className="table-content w-75">
                      <p>$</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="applicants-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Home Contents</p>
                    </div>
                    <div className="table-content w-0"/>
                </div>
                <div className="table-body d-flex">
                    <div className="table-label w-25">
                      <p>Value</p>
                    </div>
                    <div className="table-content w-75">
                      <p>$</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Assets;
