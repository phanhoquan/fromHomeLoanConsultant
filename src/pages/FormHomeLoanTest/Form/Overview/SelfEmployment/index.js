/** @format */

import React from "react";

const SelfEmployment = ({temEmploymentStatus, temEmploymentStatus2}:Props) => {
    const loan2typeOfBusinessOther = localStorage.getItem("loan2typeOfBusinessOther")||'';
    const loan2businessBeenRegistered = localStorage.getItem("loan2businessBeenRegistered")||'';
    // const loan2numberYearWorking = localStorage.getItem("loan2numberYearWorking")||'';
    const loan2priceTax2019 =localStorage.getItem("loan2priceTax2019")? `$${parseInt(localStorage.getItem("loan2priceTax2019")).toLocaleString('en')}`:'';
    const loan2priceTax2020 = localStorage.getItem("loan2priceTax2020")? `$${parseInt(localStorage.getItem("loan2priceTax2020")).toLocaleString('en')}`:'';
    const SelfEmployed ='Self Employed'
    const listEmploymentStatus =[
        {
            name :'Applicant 1',
            temEmploymentStatus: temEmploymentStatus,
            lists: [
                {
                title: 'Business\n Type',
                content: loan2typeOfBusinessOther||''
                },
                {
                    title: 'Yrs Business \n Been Registered',
                    content: loan2businessBeenRegistered
                },
                {
                    title: 'Is GST \n Registered',
                    content: ''
                },
                {
                    title: 'Company/Trust \n Profit FY 2019',
                    content: ''
                },
                {
                    title: 'Company/Trust \n Profit FY 2020',
                    content: ''
                },
                {
                    title: '2020 Taxable \n Income',
                    content: loan2priceTax2019
                },
                {
                    title: '2021 Taxable \n Income',
                    content: loan2priceTax2020
                },
                {
                    title: 'Ownership \ne.g. 50% \nMA, 50% FA',
                    content: ''
                }
            ]
        },
        {
            name :'Applicant 2',
            temEmploymentStatus: temEmploymentStatus2,
            lists: [
                {
                    title: 'Business\n Type',
                    content: loan2typeOfBusinessOther||''
                },
                {
                    title: 'Yrs Business \n Been Registered',
                    content: loan2businessBeenRegistered
                },
                {
                    title: 'Is GST \n Registered',
                    content: ''
                },
                {
                    title: 'Company/Trust \n Profit FY 2019',
                    content: ''
                },
                {
                    title: 'Company/Trust \n Profit FY 2020',
                    content: ''
                },
                {
                    title: '2020 Taxable \n Income',
                    content: loan2priceTax2019
                },
                {
                    title: '2021 Taxable \n Income',
                    content: loan2priceTax2020
                },
                {
                    title: 'Ownership \ne.g. 50% \nMA, 50% FA',
                    content: ''
                }
            ]
        }
    ]
  return (
    <>
        <div className="d-none d-md-block">
            {listEmploymentStatus.map((item, index) =>
             <div key={index}>
                 {item.temEmploymentStatus === SelfEmployed? (
                    <div className="applicants-wrap SelfEmployment w-100">
                        <div className="table-cell">
                            <div className="table-header d-flex">
                                <div className="table-label w-100 text-left">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            <div className="table-body table-sub d-flex">
                                {item.lists.map((sub, subindex)=>
                                    <div className={`table-label ${sub.content?.trim() ? '':'disable2'} ${subindex < 7 ? '':'border-right'}`} key={subindex}>
                                        <p>{sub.title}</p>
                                    </div>
                                )}
                            </div>
                            <div className="table-body d-flex">
                                {item.lists.map((sub, subindex)=>
                                    <div className={`table-content border-right-0 ${sub.content?.trim() ? '':'disable2'} ${subindex < 7 ? '':'border-right'}`} key={subindex}>
                                        <p>{sub.content||'N/A'}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                 ):''}
             </div>
            )}
        </div>
        <div className="d-block d-md-none">
            {listEmploymentStatus.map((item, index) =>
             <div key={index}>
                {item.temEmploymentStatus === SelfEmployed? (
                    <div className="applicants-wrap SelfEmployment w-100">
                        <div className="table-cell">
                            <div className="table-header d-flex">
                                <div className="table-label">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            {item.lists.map((sub, subindex)=>
                                <div className="table-body table-sub d-flex" key={subindex}>
                                    <div className={`table-label ${sub.content?.trim()?'':'disable2'} `}>
                                        <p>{sub.title}</p>
                                    </div>
                                    <div className={`table-content ${sub.content?.trim()?'':'disable2'} `}>
                                        <p>{sub.content||'N/A'}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ):''}
             </div>
            )}
        </div>
    </>
  );
};

export default SelfEmployment;
