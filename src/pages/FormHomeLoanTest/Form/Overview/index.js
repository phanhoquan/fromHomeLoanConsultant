/** @format */

import React from "react";
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
import { applicants1, applicants2 } from "./data.js"
import "./_styles.scss"

const Overviews = () => {
  const history = useHistory();
  return (
    <div className="page-overview fromHomeLoan2">
        <Header/>
        <div className="container pb-5">
           <div className="content-body">
              <div className="refinance-date">
                Refinance - 15/02/2022
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
                    <Applicants/>
                    <Applicants/>
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
