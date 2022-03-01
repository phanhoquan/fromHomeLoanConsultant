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
import SelfEmployment from "./SelfEmployment"
import "./_styles.scss"

const Overviews = () => {
  const history = useHistory();
  const currentDate = moment(new Date()).format("DD/MM/YYYY");
  const chillApplicantAge = localStorage.getItem("loan2chillApplicantAge")
? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
: {};
const ages = chillApplicantAge && chillApplicantAge.name1?Object.values(chillApplicantAge):[]
let employmentStatus = localStorage.getItem("loan2employmentStatus") || localStorage.getItem("loan2numberPartnerReturn16");
let temEmploymentStatus = ''
if (employmentStatus) {
    if (employmentStatus !=='Self Employed') {
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
    if (employmentStatus2 !=='Self Employed') {
        temEmploymentStatus2 ="PAYG"
    }else {
        temEmploymentStatus2 ="Self Employed"
    }
    
}else {
    temEmploymentStatus =""
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
        content: 'N/A'
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
let employmentStatus3 =localStorage.getItem("loan2employmentStatus")||'';
 if (localStorage.getItem("loan2workingStatus") ==="YES") {
    employmentStatus3 =localStorage.getItem("loan2employmentStatus") ||''
 }
 if (localStorage.getItem("loan2workingStatus") ==="NO") {
    employmentStatus3 =localStorage.getItem("loan2employmentPartnersWorkingStatus") ||''
 }

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
        name: 'Annual Base Salary',
        content: localStorage.getItem("loan2yourSalary")? `$${parseInt(localStorage.getItem("loan2yourSalary")).toLocaleString('en')}`: '' 
    },
    {
        id: 5,
        name: 'Annual Commission',
        content: 'N/A'
    },
    {
        id: 6,
        name: 'Annual Bonus',
        content: 'N/A'
    }
];
const employment2 = [
    {
        id: 1,
        name: 'Employment Status',
        content: localStorage.getItem("loan2employmentPartnersWorkingStatus") || ''
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
        name: 'Annual Base Salary',
        content: localStorage.getItem("loan2partnersSalary") || ''
    },
    {
        id: 5,
        name: 'Annual Commission',
        content: 'N/A'
    },
    {
        id: 6,
        name: 'Annual Bonus',
        content: 'N/A'
    }
]
  return (
    <div className="page-overview fromHomeLoan2">
        <Header/>
        <div className="container pb-5">
           <div className="content-body">
              <div className="refinance-date">
                Refinance - {currentDate}
              </div>
              <ApplicationSummary/>
              <div className="title mb-3 ml-3">Applicants</div>
              <div className="applicants mb-4">
                  <div className="d-block d-md-flex">
                    <Applicants nameKey="1" listData={applicants1}/>
                    <Applicants nameKey="2" listData={applicants2}/>
                  </div>
              </div>
              <div className="title mb-3 ml-3">Liabilities</div>
              <div className="liabilities-top">
                <div className="liabilities mb-5">
                    <div className="d-block d-md-flex">
                      <Liabilities/>
                    </div>
                </div>
                <div className="liabilities">
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
              <div className="title my-3 ml-3">PAYG Employment</div>
              <div className="applicants mb-4">
                  <div className="d-block d-md-flex">
                    <Applicants nameKey="1" listData={employment1}/>
                    <Applicants nameKey="2" listData={employment2}/>
                  </div>
              </div>
              <div className="title my-3 ml-3">Self - Employment</div>
              <div className="liabilities-top">
                <div className="liabilities">
                    <SelfEmployment/>
                </div>
              </div>
            </div>
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
