/** @format */

import React, {useState,useEffect} from "react";
import image1 from "../images/home1.png"
import image2 from "../images/dollar.png"
import image3 from "../images/marker.png"
import image4 from "../images/info.png"
import image5 from "../images/chat-arrow-grow.png"
import image6 from "../images/bank.png"

const ApplicationSummary = () => {
    const types2 = {
        1: "YES",
        2: "NO",
      };
    const valueOfProperty = localStorage.getItem("valueOfProperty");
    const loanAmount = localStorage.getItem("existingMortgageAmount");
    const investment = localStorage.getItem("loan2currentlyRenting") === types2[1]
          ? "Investment"
          : "Owner Occupied" || "";

const data =[
    {
        id: 1,
        image: image1,
        title: 'Property Value',
        content: `$${valueOfProperty ? parseInt(valueOfProperty, 10).toLocaleString('en'): 0 }`
    },
    {
        id: 2,
        image: image2,
        title: 'Loan Amount',
        content: `$${loanAmount ? parseInt(loanAmount, 10).toLocaleString('en'): 0 }`
    },
    {
        id: 3,
        image: image3,
        title: 'Property Address',
        content: 'null'
    },
    {
        id: 4,
        image: image4,
        title: 'Loan Status',
        content: localStorage.getItem("loan2currentLoanStatus")
    },
    {
        id: 5,
        image: image5,
        title: 'Current Rate',
        content: `${localStorage.getItem("loan2valueInterestRateSplit") || '0'}%${localStorage.getItem("loan2valueInterestRate2Split")? ', ' + localStorage.getItem("loan2valueInterestRate2Split") + '%': ''}`
    },
    {
        id: 6,
        image: image6,
        title: investment,
        content: ''
    }
];

const [progress, setProgress] = useState(90);

useEffect(() => {
 if(loanAmount &&  valueOfProperty) {
    setProgress(parseInt(loanAmount, 10) / parseInt(valueOfProperty, 10) * 100)
 }else {
    setProgress(0)
 }
}, [valueOfProperty, loanAmount]);

useEffect(() => {
    const pro = progress * 3.6 + 'deg';
    document.getElementById("left-side").style.transform = `rotate(${pro})`;
    if (progress <= 50) {
        document.getElementById("right-side").style.display = 'none';
        document.getElementById("pie").style.clip = `rect(0, 1.2em, 1.2em, 0.6em)`;
    }else {
        document.getElementById("pie").style.clip = `rect(auto, auto, auto, auto)`; 
        document.getElementById("right-side").style.transform = 'rotate(180deg)';
        document.getElementById("right-side").style.display = 'block';
    }

}, [progress]);

  return (
    <div className="application-summary">
           <div className="content">
            <div className="title">
                Application Summary 
            </div>
            <div className="content-char mt-3 d-block d-md-flex">
                <div className="chart ml-auto mr-auto mr-md-3">
                    <div className="set-size charts-container">
                        <div className="pie-wrapper progress-45 style-2">
                            <span className="label">{progress?.toFixed(0)}<span className="smaller">%</span><span className="complete">Complete</span></span>                       
                            <div className="pie" id="pie">
                            <div className="left-side half-circle" id="left-side"></div>
                            <div className="right-side half-circle" id="right-side"></div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(item =>
                        <div key={item.id} className="col-12 col-md-4 item-summary">
                            <div className="item-content d-flex">
                                <img src={item.image} alt={item.content} width="auto" height="35"/>
                                <div className="item-right ml-3">
                                    <div className="item-title">
                                        {item.title}
                                    </div>
                                    <div className={`item-content ${item.id ===3? 'font-small':''}`}>
                                        {item.content}
                                    </div>
                                    {item.id === 2 ?
                                        <div className="link-detail">
                                        View Loan Details
                                        </div>
                                        : ''}
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  );
};

export default ApplicationSummary;
