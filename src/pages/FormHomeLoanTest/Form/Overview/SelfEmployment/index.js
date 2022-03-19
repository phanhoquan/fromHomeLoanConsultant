/** @format */

import React from "react";

const SelfEmployment = () => {
    let textApplicant = "Applicant 1 or 2"
    let employmentStatus = localStorage.getItem("loan2employmentStatus");
    let employmentStatus2 = localStorage.getItem("loan2employmentWorkingStatus");
    let disable2 = "";
    const status = 'Full Time Part Time Casual Unemployed Maternal Leave';
    if (employmentStatus ==="Full Time" && employmentStatus2 ==='Self Employed') {
        textApplicant ="Applicant 2"
    }else {
        textApplicant ="Applicant 1 or 2"
    }
    if (localStorage.getItem("loan2workingStatus") === "YES") {
        if (status.includes(employmentStatus)) {
            disable2 = "disable2"
        }else {
            disable2 = ""
        }
    }
    if (localStorage.getItem("loan2workingStatus") === "NO") {
        if (status.includes(employmentStatus2)) {
            disable2 = "disable2"
        }else {
            disable2 = ""
        }
    }
    const loan2typeOfBusinessOther = localStorage.getItem("loan2typeOfBusinessOther")||'';
    const loan2businessBeenRegistered = localStorage.getItem("loan2businessBeenRegistered")||'';
    const loan2numberYearWorking = localStorage.getItem("loan2numberYearWorking")||''

  return (
    <>
        <div className="d-none d-md-block">
            <div className="applicants-wrap SelfEmployment w-100">
                <div className="table-cell">
                    <div className="table-header d-flex">
                        <div className="table-label w-100 text-left">
                        <p>{textApplicant}</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} ${disable2}`}>
                            <p>Business<br/> Type</p>
                        </div>
                        <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} ${disable2}`}>
                            <p>ABN Number</p>
                        </div>
                        <div className={`table-label ${loan2numberYearWorking?'':'disable2'} ${disable2}`}>
                            <p>Start Date</p>
                        </div>
                        <div className="table-label disable2">
                            <p>Is GST <br/> Registred</p>
                        </div>
                        <div className="table-label disable2">
                            <p>Company/Trust <br/> Profit FY 2019</p>
                        </div>
                        <div className="table-label disable2">
                            <p>Company/Trust <br/> Profit FY 2020</p>
                        </div>
                        <div className="table-label disable2">
                            <p>Salary Paid To <br/>MA or FA <br/>FY 2020</p>
                        </div>
                        <div className="table-label disable2">
                            <p>Salary Paid To <br/>MA or FA <br/>FY 2021</p>
                        </div>
                        <div className="table-label border-right disable2">
                            <p>Ownership <br/>e.g. 50% <br/>MA, 50% FA</p>
                        </div>
                    </div>
                    <div className="table-body d-flex">
                        <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                        </div>
                        <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                        </div>
                        <div className={`table-content ${loan2numberYearWorking?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2numberYearWorking")||''}</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                        <div className="table-content border-right disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="applicants-wrap SelfEmployment w-100">
                <div className="table-cell">
                <div className="table-header d-flex">
                    <div className="table-label w-100 text-left">
                    <p>Applicant 1 or 2</p>
                    </div>
                </div>
                <div className="table-body table-sub d-flex">
                    <div className="table-label disable2">
                        <p>Business<br/> Type</p>
                    </div>
                    <div className="table-label disable2">
                        <p>ABN Number</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Start Date</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Is GST <br/> Registred</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Company/Trust <br/> Profit FY 2019</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Company/Trust <br/> Profit FY 2020</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Salary Paid To <br/>MA or FA <br/>FY 2020</p>
                    </div>
                    <div className="table-label disable2">
                        <p>Salary Paid To <br/>MA or FA <br/>FY 2021</p>
                    </div>
                    <div className="table-label border-right disable2">
                        <p>Ownership <br/>e.g. 50% <br/>MA, 50% FA</p>
                    </div>
                </div>
                <div className="table-body d-flex">
                    <div className="table-content disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                    <div className="table-content border-left-0 disable2">
                        <p>N/A</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="d-block d-md-none">
            <div className="applicants-wrap SelfEmployment w-100">
                <div className="table-cell">
                    <div className="table-header d-flex">
                        <div className="table-label">
                            <p>{textApplicant}</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} ${disable2}`}>
                            <p>Business Type</p>
                        </div>
                        <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} ${disable2}`}>
                            <p>ABN Number</p>
                        </div>
                        <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className={`table-label ${loan2numberYearWorking?'':'disable2'} ${disable2}`}>
                            <p>Start Date</p>
                        </div>
                        <div className={`table-content ${loan2numberYearWorking?'':'disable2'} ${disable2}`}>
                            <p>{localStorage.getItem("loan2numberYearWorking")||''}</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                        <p>Is GST Registred</p>
                        </div>
                        <div className="table-content disable2">
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Company/Trust Profit FY 2019</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Company/Trust Profit FY 2020</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Salary Paid To MA or FA FY 2020</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Salary Paid To MA or FA FY 2021</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Ownership e.g. 50% MA, 50% FA</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="applicants-wrap SelfEmployment mb-0 w-100">
                <div className="table-cell">
                    <div className="table-header d-flex">
                        <div className="table-label w-100 text-left">
                        <p>Applicant 1 or 2</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Business Type</p>
                        </div>
                        <div className="table-content disable2">
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>ABN Number</p>
                        </div>
                        <div className="table-content disable2">
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Start Date</p>
                        </div>
                        <div className="table-content disable2">
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                        <p>Is GST Registred</p>
                        </div>
                        <div className="table-content disable2">
                        <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Company/Trust Profit FY 2019</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Company/Trust Profit FY 2020</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Salary Paid To MA or FA FY 2020</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Salary Paid To MA or FA FY 2021</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                    <div className="table-body table-sub d-flex">
                        <div className="table-label disable2">
                            <p>Ownership e.g. 50% MA, 50% FA</p>
                        </div>
                        <div className="table-content disable2">
                            <p>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SelfEmployment;
