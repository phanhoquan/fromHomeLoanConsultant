/** @format */

import React from "react";

const Assets = () => {
  const dataStep36 = localStorage.getItem("listAnyCard")
    ? JSON.parse(localStorage.getItem("listAnyCard"))
    : {};
    const dataStep37 = localStorage.getItem("listVehiclesBoats")
    ? JSON.parse(localStorage.getItem("listVehiclesBoats"))
    : {};
const amountHome38A = localStorage.getItem("amountHome38A");
const amountHome38B = localStorage.getItem("amountHome38B");
const amountHome39 = localStorage.getItem("amountHome39");
  return (
    <>
      {dataStep36?.makeCard1? (
        <div className="assets-wrap w-100">
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
                      <p>Model</p>
                    </div>
                    <div className="table-label w-100 text-center border-right">
                      <p>Value</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content w-100 text-center">
                      <p>{dataStep36?.makeCard1 ||''}</p>
                    </div>
                    <div className="table-content w-100 text-center">
                      <p>{dataStep36?.modelCard1 ||''}</p>
                    </div>
                    <div className="table-content w-100 text-center border-right">
                    <p>{dataStep36?.valueCard1? `$${dataStep36?.valueCard1}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
      ):''}
       {dataStep36?.makeCard2? (
        <div className="assets-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Vehicle #2</p>
                    </div>
                </div>
                <div className="table-body table-sub d-flex">
                    <div className="table-label w-100 text-center">
                      <p>Make</p>
                    </div>
                    <div className="table-label w-100 text-center">
                      <p>Model</p>
                    </div>
                    <div className="table-label w-100 text-center border-right">
                      <p>Value</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content w-100 text-center">
                      <p>{dataStep36?.makeCard2 ||''}</p>
                    </div>
                    <div className="table-content w-100 text-center">
                      <p>{dataStep36?.modelCard2 ||''}</p>
                    </div>
                    <div className="table-content w-100 text-center border-right">
                      <p>{dataStep36?.valueCard2? `$${dataStep36?.valueCard2}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
       ):''}
      {dataStep37?.typeBoats1?.value? (
        <div className="assets-wrap w-100">
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
                      <p>Model</p>
                    </div>
                    <div className="table-label w-25 text-center border-right">
                      <p>Value</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.typeBoats1?.value ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.makeBoats1 ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.modelBoats1 || ''}</p>
                    </div>
                    <div className="table-content w-25 text-center border-right">
                      <p>{dataStep37?.valueBoats1 ? `$${dataStep37?.valueBoats1}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
      ):''}
       {dataStep37?.typeBoats2?.value? (
        <div className="assets-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Other Vehicle #2</p>
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
                      <p>Model</p>
                    </div>
                    <div className="table-label w-25 text-center border-right">
                      <p>Value</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.typeBoats2?.value ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.makeBoats2 ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.modelBoats2 || ''}</p>
                    </div>
                    <div className="table-content w-25 text-center border-right">
                      <p>{dataStep37?.valueBoats2 ? `$${dataStep37?.valueBoats2}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
      ):''}
      {dataStep37?.typeBoats3?.value? (
        <div className="assets-wrap w-100">
            <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Other Vehicle #3</p>
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
                      <p>Model</p>
                    </div>
                    <div className="table-label w-25 text-center border-right">
                      <p>Value</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.typeBoats3?.value ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.makeBoats3 ||''}</p>
                    </div>
                    <div className="table-content w-25 text-center">
                      <p>{dataStep37?.modelBoats3 || ''}</p>
                    </div>
                    <div className="table-content w-25 text-center border-right">
                      <p>{dataStep37?.valueBoats3 ? `$${dataStep37?.valueBoats3}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
      ):''}
      <div className="d-block d-md-flex">
        <div className="applicants-wrap w-100">
            <div className={`table-cell ${amountHome38A?'':'disable'}`}>
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Superannuation Applicant 1</p>
                    </div>
                    <div className="table-content w-0"/>
                </div>
                <div className="table-body d-flex">
                    <div className="table-label w-25">
                      <p>Value</p>
                    </div>
                    <div className="table-content w-75">
                    <p>{localStorage.getItem("amountHome38A")? `$${parseInt(localStorage.getItem("amountHome38A"), 10).toLocaleString("en")}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="applicants-wrap w-100">
            <div className={`table-cell ${amountHome38B?'':'disable'}`}>
                <div className="table-header d-flex">
                    <div className="table-label w-100">
                      <p>Superannuation Applicant 2</p>
                    </div>
                    <div className="table-content w-0"/>
                </div>
                <div className="table-body d-flex">
                    <div className="table-label w-25">
                      <p>Value</p>
                    </div>
                    <div className="table-content w-75">
                      <p>{localStorage.getItem("amountHome38B")? `$${parseInt(localStorage.getItem("amountHome38B"), 10).toLocaleString("en")}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="applicants-wrap w-100">
            <div className={`table-cell ${amountHome39?'':'disable'}`}>
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
                    <p>{localStorage.getItem("amountHome39")? `$${parseInt(localStorage.getItem("amountHome39"), 10).toLocaleString("en")}`: ''}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Assets;
