/** @format */

import React from "react";


export const types = {
  1: 'Owner Occupied',
  2: "Investment property",
};

const ResidentialInformation = () => {
  const investmentProperty38B = localStorage.getItem("investmentProperty38B") ||''; // 40B
  const valueOfProperty = localStorage.getItem("valueOfProperty")? `$${parseInt(localStorage.getItem("valueOfProperty")).toLocaleString('en')}`:''; // 1
  const existingMortgageAmount = localStorage.getItem("existingMortgageAmount")? `$${parseInt(localStorage.getItem("existingMortgageAmount")).toLocaleString('en')}`:''; // 1

  let currentRate = "";
  if(localStorage.getItem("loan2valueInterestRate")) {
    currentRate = `${localStorage.getItem("loan2valueInterestRate")}%`
  }
  if(localStorage.getItem("loan2valueInterestRate2Variable")){
    currentRate = `${localStorage.getItem("loan2valueInterestRate2Variable")}%`
  }

  const dataList =[
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n Address',
          content: localStorage.getItem("loan2fullAddress")||'' // 40a
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: valueOfProperty||'',
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: existingMortgageAmount||''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: currentRate||''
        },
        {
          id: 4,
          title: 'Lender',
          content: localStorage.getItem("currentLender")||''// 1
        },
        {
          id: 5,
          title: 'Loan Type',
          content: localStorage.getItem("loan2currentLoanStatus")||'',
        },
        {
          id: 6,
          title: 'Residential Status',
          content: localStorage.getItem("livingSituation41E")||'',
        }
      ]
    },
  ];

  return (
    <div className="applicants-wrap residentialInformation w-100">
      {dataList.map((item, index) =>
        <div className={`table-cell pc d-none d-md-block ${investmentProperty38B ===types[1]?'':'opacity-03'}`} key={index}>
            <div className="table-header d-flex">
              {item.list.map((subitem, subIndex) =>
                <div className={`table-label text-left ${subitem.content?.trim() ? '':'disable2'}`} key={subIndex}>
                  <p>{subitem.title}</p>
                </div>
              )}
            </div>
            <div className="table-body d-flex">
              {item.list.map((subitem, subIndex) =>
                <div className={`table-content ${subIndex < 6?'border-right-0':''} ${subitem?.content?.trim() ? '':'disable2'}`} key={subIndex}>
                  <p>{subitem.content}</p>
                </div>
              )}
            </div>
        </div>
      )}
      {dataList.map((item, index) =>
        <div className="table-cell mobile d-block d-md-none mb-3" key={index}>
           {item.list.map((subitem, subIndex) =>
            <div className={`table-body d-flex ${investmentProperty38B ===types[1]?'':'opacity-03'}`} key={subIndex}>
                <div className={`table-label bg-blue ${subitem?.content?.trim() ? '':'disable2'}`}>
                  <p>{subitem.title}</p>
                </div>
                <div className={`table-content ${subIndex ===0 ?'border-top':''} ${subitem?.content?.trim() ? '':'disable2'}`}>
                  <p>{subitem.content}</p>
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResidentialInformation;
