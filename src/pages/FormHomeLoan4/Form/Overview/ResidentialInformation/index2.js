/** @format */

import React from "react";


export const types = {
  1: 'Owner Occupied',
  2: "Investment property",
};

const ResidentialInformation = () => {
  const dataStep44 = localStorage.getItem("listItemProperty")
  ? JSON.parse(localStorage.getItem("listItemProperty"))
  : {};
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
          title: 'Investment property \n 1 Address',
          content: dataStep44?.addressProperty1||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty1? `$${parseInt(dataStep44?.valueOfPropertyProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty1? `$${parseInt(dataStep44?.loanAmountProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty1? `${dataStep44?.interestRateProperty1}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty1||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty1?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty1? `$${parseInt(dataStep44?.rentalIncomeProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    },
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 2 Address',
          content: dataStep44?.addressProperty2||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty2? `$${parseInt(dataStep44?.valueOfPropertyProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty2? `$${parseInt(dataStep44?.loanAmountProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty2? `${dataStep44?.interestRateProperty2}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty2||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty2?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty2? `$${parseInt(dataStep44?.rentalIncomeProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    },
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 3 Address',
          content: dataStep44?.addressProperty3||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty3? `$${parseInt(dataStep44?.valueOfPropertyProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty3? `$${parseInt(dataStep44?.loanAmountProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty3? `${dataStep44?.interestRateProperty3}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty3||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty3?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty3? `$${parseInt(dataStep44?.rentalIncomeProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    }
  ];

  const dataList2 =[
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 1 Address',
          content: localStorage.getItem("loan2fullAddress")||''// 40a
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: valueOfProperty // 41a
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: existingMortgageAmount // 1
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: currentRate || '' // 3
        },
        {
          id: 4,
          title: 'Lender',
          content: localStorage.getItem("currentLender")||''// 1
        },
        {
          id: 5,
          title: 'Loan Type',
          content: localStorage.getItem("loan2currentLoanStatus") ||'',// 2
        },
        {
          id: 6,
          title: 'Rental Income',
          content: localStorage.getItem("rentalPropertyIncome")? `$${parseInt(localStorage.getItem("rentalPropertyIncome")).toLocaleString('en')}`:''
        }
      ]
    },
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 2 Address',
          content: dataStep44?.addressProperty1||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty1? `$${parseInt(dataStep44?.valueOfPropertyProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty1? `$${parseInt(dataStep44?.loanAmountProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty1? `${dataStep44?.interestRateProperty1}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty1||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty1?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty1? `$${parseInt(dataStep44?.rentalIncomeProperty1.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    },
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 3 Address',
          content: dataStep44?.addressProperty2||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty2? `$${parseInt(dataStep44?.valueOfPropertyProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty2? `$${parseInt(dataStep44?.loanAmountProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty2? `${dataStep44?.interestRateProperty2}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty2||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty2?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty2? `$${parseInt(dataStep44?.rentalIncomeProperty2.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    },
    {
      list: [
        {
          id: 1,
          title: 'Investment property \n 4 Address',
          content: dataStep44?.addressProperty3||''
        },
        {
          id: 7,
          title: 'Value Of Property',
          content: dataStep44?.valueOfPropertyProperty3? `$${parseInt(dataStep44?.valueOfPropertyProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 2,
          title: 'Loan Amount',
          content: dataStep44?.loanAmountProperty3? `$${parseInt(dataStep44?.loanAmountProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        },
        {
          id: 3,
          title: 'Interest Rate',
          content: dataStep44?.interestRateProperty3? `${dataStep44?.interestRateProperty3}%`:''
        },
        {
          id: 4,
          title: 'Lender',
          content: dataStep44?.lenderProperty3||'',
        },
        {
          id: 5,
          title: 'Loan Type',
          content: dataStep44?.fixedOrVariableProperty3?.value||'',
        },
        {
          id: 6,
          title: 'Rental Income',
          content: dataStep44?.rentalIncomeProperty3? `$${parseInt(dataStep44?.rentalIncomeProperty3.replace(/,/gi, ""), 10).toLocaleString('en')}`:''
        }
      ]
    }
  ];
  const newData = investmentProperty38B === types[1] ? dataList : dataList2
  return (
    <div className="applicants-wrap residentialInformation w-100">
      {newData.map((item, index) =>
        <div className={`table-cell pc d-none d-md-block ${item.list[0].content?'':'opacity-03'}`} key={index}>
            <div className="table-header d-flex">
              {item.list.map((subitem, subIndex) =>
                <div className={`table-label text-left ${subitem?.content?.trim() ? '':'disable2'}`} key={subIndex}>
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
      {newData.map((item, index) =>
        <div className="table-cell mobile d-block d-md-none mb-3" key={index}>
           {item.list.map((subitem, subIndex) =>
            <div className={`table-body d-flex ${item.list[0].content?'':'opacity-03'}`} key={subIndex}>
                <div className={`table-label bg-blue ${subitem?.content?.trim() ? '':'disable2'}`}>
                  <p>{subitem.title}</p>
                </div>
                <div className={`table-content ${subIndex ===0 ?'border-top':''} ${subitem.content?.trim() ? '':'disable2'}`}>
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
