const chillApplicantAge = localStorage.getItem("loan2chillApplicantAge")
? JSON.parse(localStorage.getItem("loan2chillApplicantAge"))
: {};
const ages = chillApplicantAge && chillApplicantAge.name1?Object.values(chillApplicantAge):[]
let employmentStatus = localStorage.getItem("loan2employmentStatus");
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
export const applicants1 = [
    {
        id: 1,
        name: 'Full name',
        content: `${localStorage.getItem("loan2firstName") ||''} ${localStorage.getItem("loan2lastName")||''}`
    },
    {
        id: 2,
        name: 'Contact number',
        content: 'null'
    },
    {
        id: 3,
        name: 'Email address',
        content: localStorage.getItem("loan2email")
    },
    {
        id: 4,
        name: 'Visa status',
        content: 'null'
    },
    {
        id: 5,
        name: 'Residential status',
        content: 'null'
    },
    {
        id: 6,
        name: 'Age',
        content: localStorage.getItem("loan2soleApplicantAge")
    },
    {
        id: 7,
        name: 'Sex',
        content: ''
    },
    {
        id: 8,
        name: 'Marital status',
        content: localStorage.getItem("loan2relationshipYour")
    },
    {
        id: 9,
        name: 'Is married with applicant 2?',
        content: localStorage.getItem("loan2relationshipYour") ==="Spouse"?'Yes':''
    },
    {
        id: 10,
        name: 'Number of dependents',
        content: localStorage.getItem("loan2childrenNumber")
    },
    {
        id: 11,
        name: 'Age of dependents',
        content: ages.join(', ')
    },
    {
        id: 12,
        name: 'Employment type',
        content: temEmploymentStatus
    },
    {
        id: 13,
        name: 'Time live in current address',
        content: ''
    }
]
export const applicants2 = [
    {
        id: 1,
        name: 'Full name',
        content: `${localStorage.getItem("loan2firstNameOther") ||''} ${localStorage.getItem("loan2lastNameOther")||''}`
    },
    {
        id: 2,
        name: 'Contact number',
        content: 'null'
    },
    {
        id: 3,
        name: 'Email address',
        content: localStorage.getItem("loan2emailApplicants")
    },
    {
        id: 4,
        name: 'Visa status',
        content: 'null'
    },
    {
        id: 5,
        name: 'Residential status',
        content: 'null'
    },
    {
        id: 6,
        name: 'Age',
        content: localStorage.getItem("loan2jointApplicantAge")
    },
    {
        id: 7,
        name: 'Sex',
        content: ''
    },
    {
        id: 8,
        name: 'Marital status',
        content: localStorage.getItem("loan2relationshipYour")
    },
    {
        id: 9,
        name: 'Is married with applicant 1?',
        content: localStorage.getItem("loan2relationshipYour") ==="Spouse"?'Yes':''
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
        content: 'null'
    }
];
export const employment1 = [
    {
        id: 1,
        name: 'Employment Status',
        content: localStorage.getItem("loan2employmentStatus")
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
        content: 'null'
    },
    {
        id: 6,
        name: 'Annual Bonus',
        content: 'null'
    }
];
export const employment2 = [
    {
        id: 1,
        name: 'Employment Status',
        content: 'null'
    },
    {
        id: 2,
        name: 'Job Title',
        content: 'null'
    },
    {
        id: 3,
        name: 'Time In Current Job',
        content: 'null'
    },
    {
        id: 4,
        name: 'Annual Base Salary',
        content: 'null'
    },
    {
        id: 5,
        name: 'Annual Commission',
        content: 'null'
    },
    {
        id: 6,
        name: 'Annual Bonus',
        content: 'null'
    }
]