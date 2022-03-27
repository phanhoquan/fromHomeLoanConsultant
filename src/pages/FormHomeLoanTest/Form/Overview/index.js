/** @format */

import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import ApplicationSummary from "./ApplicationSummary"
import Applicants from "./Applicants"
import Liabilities from "./Liabilities"
import Liabilities2 from "./Liabilities/index2"
import Assets from "./Assets"
import ResidentialInformation from "./ResidentialInformation"
import InvestmentProperties from "./ResidentialInformation/index2"
import SelfEmployment from "./SelfEmployment"
import "./_styles.scss"

const Overviews = () => {
  const history = useHistory();
  const currentDate = moment(new Date()).format("DD/MM/YYYY");
  const chillApplicantAge = localStorage.getItem("loan2chillApplicantAge")
? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
: {};

const ages = chillApplicantAge && chillApplicantAge.name1?Object.values(chillApplicantAge):[]
let employmentStatus = localStorage.getItem("loan2employmentStatus");
let temEmploymentStatus = ''
const status = 'Full Time Part Time Casual Unemployed Maternal Leave';
const dataStep35 = localStorage.getItem("listCreditCard")
? JSON.parse(localStorage.getItem("listCreditCard"))
: {};

if (employmentStatus) {
    if (status.includes(employmentStatus)) {
        temEmploymentStatus ="PAYG"
    }else {
        temEmploymentStatus ="Self Employed"
    }
}else {
    temEmploymentStatus =""
}

let employmentStatus2 = localStorage.getItem("loan2employmentPartnersWorkingStatus");
let temEmploymentStatus2 = ''

if (employmentStatus2) {
    if (status.includes(employmentStatus2)) {
        temEmploymentStatus2 ="PAYG"
    }else {
        temEmploymentStatus2 ="Self Employed"
    }
}else {
    temEmploymentStatus2 =""
}

let employmentStatus3 =localStorage.getItem("loan2employmentStatus")||'';

 if (localStorage.getItem("loan2workingStatus") ==="YES") {
    employmentStatus3 =localStorage.getItem("loan2employmentStatus") ||'';
 }
 if (localStorage.getItem("loan2workingStatus") === "NO") {
    employmentStatus3 = localStorage.getItem("loan2employmentWorkingStatus") ||'';
    if (status.includes(localStorage.getItem("loan2employmentWorkingStatus"))) {
        temEmploymentStatus ="PAYG"
    }else {
        temEmploymentStatus ="Self Employed"
    }
 }

const applicants1 = [
    {
        id: 1,
        name: 'Full name',
        content: `${localStorage.getItem("loan2firstName") ||''} ${localStorage.getItem("loan2lastName")||''}`
    },
    {
        id: 2,
        name: 'Contact number',
        content: localStorage.getItem("loan2mobile")
    },
    {
        id: 3,
        name: 'Email address',
        content: localStorage.getItem("loan2email")
    },
    {
        id: 4,
        name: 'Visa status',
        content: 'N/A'
    },
    {
        id: 5,
        name: 'Residential status',
        content: 'N/A'
    },
    {
        id: 6,
        name: 'Age',
        content: localStorage.getItem("loan2soleApplicantAge")
    },
    {
        id: 7,
        name: 'Sex',
        content: 'N/A'
    },
    {
        id: 8,
        name: 'Marital status',
        content: localStorage.getItem("loan2relationshipYour")
    },
    {
        id: 9,
        name: 'Is married with applicant 2?',
        content: localStorage.getItem("loan2relationshipYour") ==="Spouse"?'Yes':'No'
    },
    {
        id: 10,
        name: 'Number of dependents',
        content: localStorage.getItem("loan2childrenNumber")
    },
    {
        id: 11,
        name: 'Age of dependents',
        content: ages.join('-')
    },
    {
        id: 12,
        name: 'Employment type',
        content: temEmploymentStatus
    },
    {
        id: 13,
        name: 'Time live in current address',
        content: localStorage.getItem("timeLiving39B") ||''
    }
]
const applicants2 = [
    {
        id: 1,
        name: 'Full name',
        content: `${localStorage.getItem("loan2firstNameOther") ||''} ${localStorage.getItem("loan2lastNameOther")||''}`
    },
    {
        id: 2,
        name: 'Contact number',
        content: 'N/A'
    },
    {
        id: 3,
        name: 'Email address',
        content: localStorage.getItem("loan2emailApplicants")
    },
    {
        id: 4,
        name: 'Visa status',
        content: 'N/A'
    },
    {
        id: 5,
        name: 'Residential status',
        content: 'N/A'
    },
    {
        id: 6,
        name: 'Age',
        content: localStorage.getItem("loan2jointApplicantAge")
    },
    {
        id: 7,
        name: 'Sex',
        content: 'N/A'
    },
    {
        id: 8,
        name: 'Marital status',
        content: localStorage.getItem("loan2relationshipYour")
    },
    {
        id: 9,
        name: 'Is married with applicant 1?',
        content: localStorage.getItem("loan2relationshipYour") ==="Spouse"?'Yes':'No'
    },
    {
        id: 10,
        name: 'Number of dependents',
        content: 'N/A'
    },
    {
        id: 11,
        name: 'Age of dependents',
        content: 'N/A'
    },
    {
        id: 12,
        name: 'Employment type',
        content: temEmploymentStatus2
    },
    {
        id: 13,
        name: 'Time live in current address',
        content: 'N/A'
    }
];

const employment1 = [
    {
        id: 1,
        name: 'Employment Status',
        content: employmentStatus3
    },
    {
        id: 2,
        name: 'Job Title',
        content: localStorage.getItem("loan2occupation")|| ''
    },
    {
        id: 3,
        name: 'Time In Current Job',
        content: localStorage.getItem("loan2numberYearWorking")|| ''
    },
    {
        id: 4,
        name: 'Previous employment info',
        content: localStorage.getItem("loan2occupation17B1")|| ''
    },
    {
        id: 5,
        name: 'Previous job duration',
        content: localStorage.getItem("loan2numberYearWorking17b")|| ''
    },
    {
        id: 6,
        name: 'Annual Base Salary',
        content: localStorage.getItem("loan2yourSalary")? `$${parseInt(localStorage.getItem("loan2yourSalary")).toLocaleString('en')}`: '' 
    },
    {
        id: 7,
        name: 'Annual Commission',
        content: 'N/A'
    },
    {
        id: 8,
        name: 'Annual Bonus',
        content: 'N/A'
    }
];
const employment2 = [
    {
        id: 1,
        name: 'Employment Status',
        content: employmentStatus2 || ''
    },
    {
        id: 2,
        name: 'Job Title',
        content: localStorage.getItem("loan2partnersOccupation") || ''
    },
    {
        id: 3,
        name: 'Time In Current Job',
        content: localStorage.getItem("numberYearWorking24B") || ''
    },
    {
        id: 4,
        name: 'Previous Employment Info',
        content: localStorage.getItem("loan2occupation24C")|| ''
    },
    {
        id: 5,
        name: 'Previous job duration',
        content: localStorage.getItem("numberYearWorking24D")|| ''
    },
    {
        id: 6,
        name: 'Annual Base Salary',
        content: localStorage.getItem("loan2partnersSalary") || ''
    },
    {
        id: 7,
        name: 'Annual Commission',
        content: 'N/A'
    },
    {
        id: 8,
        name: 'Annual Bonus',
        content: 'N/A'
    }
]

const loan2jointApplicationStatus =localStorage.getItem("loan2jointApplicationStatus");
const  isEmploymentStatus = temEmploymentStatus ==="PAYG" && temEmploymentStatus2 ==="PAYG";

  return (
    <div className="page-overview fromHomeLoan2">
        <Header/>
        <div id="content-overview" className="container">
           <div className="content-body">
              <div className="refinance-date">
                Refinance - {currentDate}
              </div>
              <ApplicationSummary/>
              <div className="title mb-3 ml-3">Loan Purpose: <span style={{fontWeight: '400'}}>{localStorage.getItem("textLoanPurpose")||''}</span></div>
              <div className="title mb-3 ml-3">Applicants</div>
              <div className="applicants mb-4">
                  <div className="d-block d-md-flex">
                    <Applicants nameKey="1" listData={applicants1}/>
                    {loan2jointApplicationStatus !=="Sole Applicant" ? 
                        <Applicants nameKey="2" listData={applicants2}/>
                    : ""}
                  </div>
              </div>
              <div className="title mb-3 ml-3">Liabilities: {!dataStep35?.valueCreditCard35Amount1 && !dataStep35?.valueCreditCard35Amount1 && !dataStep35?.valueCreditCard35Amount1 ? (
               <span style={{fontWeight: '400'}}>Applicant does not have any credit cards</span>
            ): '' }</div>
            <div className="liabilities-wrap w-100">
            </div>
              <div className="liabilities-top">
                <div className="">
                    <div className="d-block d-md-flex">
                      <Liabilities/>
                    </div>
                </div>
                <div className="">
                    <div className="d-block d-md-flex">
                      <Liabilities2/>
                    </div>
                </div>
              </div>
              <div className="title my-3 ml-3">Assets</div>
              <div className="liabilities-top">
                <div className="liabilities">
                    <Assets/>
                </div>
              </div>
              <div className="title my-3 ml-3">Residential Information</div>
              <div className="liabilities-top">
                <div className="liabilities">
                    <ResidentialInformation/>
                </div>
              </div>
              <div className="title my-3 ml-3">Investment Properties</div>
              <div className="liabilities-top">
                <div className="liabilities">
                    <InvestmentProperties/>
                </div>
              </div>
              <div className="title my-3 ml-3">PAYG Employment</div>
              <div className="applicants mb-4">
                  <div className="d-block d-md-flex">
                    <Applicants nameKey="1" listData={employment1}/>
                    <Applicants nameKey="2" listData={employment2}/>
                  </div>
              </div>
              <div className="title my-3 ml-3">Self - Employment <span style={{fontWeight: '400'}}>{isEmploymentStatus? 'Both applicants are not self employed':''}</span></div>
              <div className="liabilities-top">
                <div className="liabilities">
                    <SelfEmployment
                        temEmploymentStatus = {temEmploymentStatus}
                        temEmploymentStatus2 = {temEmploymentStatus2}
                    />
                </div>
              </div>
              <div className="title my-3 ml-3">Additional notes</div>
              {localStorage.getItem("contentNoteVale") ?(
                <div className="liabilities-top">
                    <textarea
                        className="form-control noteVale"
                        value={localStorage.getItem("contentNoteVale")}
                        onChange={() => {}}
                        maxLength="500"
                        disabled
                        placeholder="Additional notes"
                    />
                </div>
              ):''}
            </div>
        </div>
        <div className="pb-5">
            <Button
                className="btnPrimary life min-300 mt-0 w-auto min-h-50"
                onClick={() => history.go(-1)}
                >
                Go Back
            </Button>
        </div>
    </div>
  );
};

export default Overviews;
