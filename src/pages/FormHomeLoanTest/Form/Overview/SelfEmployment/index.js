/** @format */

import React from "react";

const SelfEmployment = ({temEmploymentStatus, temEmploymentStatus2}:Props) => {
    const loan2typeOfBusinessOther = localStorage.getItem("loan2typeOfBusinessOther")||'';
    const loan2businessBeenRegistered = localStorage.getItem("loan2businessBeenRegistered")||'';
    const loan2numberYearWorking = localStorage.getItem("loan2numberYearWorking")||'';
    const loan2priceTax2019 = localStorage.getItem("loan2priceTax2019")||'';
    const loan2priceTax2020 = localStorage.getItem("loan2priceTax2020")||'';

  return (
    <>
        <div className="d-none d-md-block">
            {temEmploymentStatus ==="Self Employed" ? (
                <div className="applicants-wrap SelfEmployment w-100">
                    <div className="table-cell">
                        <div className="table-header d-flex">
                            <div className="table-label w-100 text-left">
                            <p>Applicant 1</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>Business<br/> Type</p>
                            </div>
                            <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>ABN Number</p>
                            </div>
                            <div className={`table-label ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>Yrs Business <br/> Been Registered</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Is GST <br/> Registered</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Company/Trust <br/> Profit FY 2019</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Company/Trust <br/> Profit FY 2020</p>
                            </div>
                            <div className="table-label disable2">
                                <p>2020 Taxable <br/> Income</p>
                            </div>
                            <div className="table-label disable2">
                                <p>2021 Taxable <br/> Income</p>
                            </div>
                            <div className="table-label border-right disable2">
                                <p>Ownership <br/>e.g. 50% <br/>MA, 50% FA</p>
                            </div>
                        </div>
                        <div className="table-body d-flex">
                            <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                            </div>
                            <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                            </div>
                            <div className={`table-content ${loan2numberYearWorking?'':'disable2'} `}>
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
                            <div className={`table-content ${loan2priceTax2019?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2019")||''}</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2020?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2020")||''}</p>
                            </div>
                            <div className="table-content border-right disable2">
                                <p>N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : '' }
            {temEmploymentStatus2 ==="Self Employed" ? (
                <div className="applicants-wrap SelfEmployment w-100">
                    <div className="table-cell">
                        <div className="table-header d-flex">
                            <div className="table-label w-100 text-left">
                            <p>Applicant 2</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>Business<br/> Type</p>
                            </div>
                            <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>ABN Number</p>
                            </div>
                            <div className={`table-label ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>Yrs Business <br/> Been Registered</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Is GST <br/> Registered</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Company/Trust <br/> Profit FY 2019</p>
                            </div>
                            <div className="table-label disable2">
                                <p>Company/Trust <br/> Profit FY 2020</p>
                            </div>
                            <div className="table-label disable2">
                                <p>2020 Taxable <br/> Income</p>
                            </div>
                            <div className="table-label disable2">
                                <p>2021 Taxable <br/> Income</p>
                            </div>
                            <div className="table-label border-right disable2">
                                <p>Ownership <br/>e.g. 50% <br/>MA, 50% FA</p>
                            </div>
                        </div>
                        <div className="table-body d-flex">
                            <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                            </div>
                            <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                            </div>
                            <div className={`table-content ${loan2numberYearWorking?'':'disable2'} `}>
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
                            <div className={`table-content ${loan2priceTax2019?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2019")||''}</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2020?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2020")||''}</p>
                            </div>
                            <div className="table-content border-right disable2">
                                <p>N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : '' }
        </div>
        <div className="d-block d-md-none">
            {temEmploymentStatus ==="Self Employed" ? (
                <div className="applicants-wrap SelfEmployment w-100">
                    <div className="table-cell">
                        <div className="table-header d-flex">
                            <div className="table-label">
                                <p>Applicant 1 </p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>Business Type</p>
                            </div>
                            <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>ABN Number</p>
                            </div>
                            <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>Yrs Business Been Registered</p>
                            </div>
                            <div className={`table-content ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2numberYearWorking")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className="table-label disable2">
                            <p>Is GST Registered</p>
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
                            <div className={`table-label ${loan2priceTax2019?'':'disable2'} `}>
                                <p>2020 Taxable <br/> Income</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2019?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2019")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2priceTax2020?'':'disable2'} `}>
                                <p>2021 Taxable <br/> Income</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2020?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2020")||''}</p>
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
            ) : '' }
            {temEmploymentStatus2 ==="Self Employed" ? (
                <div className="applicants-wrap SelfEmployment mb-0 w-100">
                     <div className="table-cell">
                        <div className="table-header d-flex">
                            <div className="table-label">
                                <p>Applicant 1 </p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>Business Type</p>
                            </div>
                            <div className={`table-content ${loan2typeOfBusinessOther?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2typeOfBusinessOther")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>ABN Number</p>
                            </div>
                            <div className={`table-content ${loan2businessBeenRegistered?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2businessBeenRegistered")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>Yrs Business Been Registered</p>
                            </div>
                            <div className={`table-content ${loan2numberYearWorking?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2numberYearWorking")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className="table-label disable2">
                            <p>Is GST Registered</p>
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
                            <div className={`table-label ${loan2priceTax2019?'':'disable2'} `}>
                                <p>2020 Taxable <br/> Income</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2019?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2019")||''}</p>
                            </div>
                        </div>
                        <div className="table-body table-sub d-flex">
                            <div className={`table-label ${loan2priceTax2020?'':'disable2'} `}>
                                <p>2021 Taxable <br/> Income</p>
                            </div>
                            <div className={`table-content ${loan2priceTax2020?'':'disable2'} `}>
                                <p>{localStorage.getItem("loan2priceTax2020")||''}</p>
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
            ) : '' }
        </div>
    </>
  );
};

export default SelfEmployment;
