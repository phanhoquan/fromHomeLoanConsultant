/** @format */

import React from "react";

const ResidentialInformation = () => {

// const investmentProperty38B = localStorage.getItem("investmentProperty38B") ||''; // 40B

const data =[
  {
    title: 'Current living address',
    content: localStorage.getItem("loan2fullAddress39A") || localStorage.getItem("loan2fullAddress") // 42a
  },
  // {
  //   title: 'Kind Of Property',
  //   content: investmentProperty38B // 40b
  // },
  {
    title: 'Time living at this address',
    content: localStorage.getItem("timeLiving39B")||""  // 42b
  },
  {
    title: 'Residential status',
    content: localStorage.getItem("livingSituation41E") ||''// 42e 
  },
  {
    title: 'Previous living address',
    content: localStorage.getItem("loan2fullAddress39C")||''// 42c 
  },
  {
    title: 'Time living at this \n previous address',
    content: localStorage.getItem("timeLiving39D") ||''// 42d
  }
];

  return (
    <div className="applicants-wrap residentialInformation w-100">
        <div className="table-cell pc d-none d-md-block">
            <div className="table-header d-flex">
              {data.map((item, index) =>
                <div className={`table-label text-left ${item.content?.trim() ? '':'disable2'}`} key={index}>
                  <p>{item.title}</p>
                </div>
              )}
            </div>
            <div className="table-body d-flex">
              {data.map((item, index) =>
                <div className={`table-content ${index > 0?' border-left-0':''} ${item.content?.trim() ? '':'disable2'}`} key={index}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
        </div>
        <div className="table-cell mobile d-block d-md-none">
            {data.map((item, index) =>
              <div className="table-body d-flex" key={index}>
                <div className={`table-label bg-blue ${item.content?.trim() ? '':'disable2'}`}>
                  <p>{item.title}</p>
                </div>
                <div className={`table-content ${index === 0? 'border-top':''} ${item.content?.trim() ? '':'disable2'}`}>
                <p>{item.content}</p>
                </div>
              </div>
            )}
        </div>
    </div>
  );
};

export default ResidentialInformation;
