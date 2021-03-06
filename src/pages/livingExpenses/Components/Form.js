/** @format */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Accordion, Button, Spinner } from "react-bootstrap";
import imgLogo from "../../../images/life/logo.svg";
import YourDetail from "./YourDetail";
import AccordionFixed from "./AccordionFixed";
import AccordionVariable from "./AccordionVariable";
import AccordionDiscretionary from "./AccordionDiscretionary";

const types = {
  weekly: "Weekly",
  monthly: "Monthly",
  annually: "Annually",
};
const types2 = {
  Weekly: "week",
  Monthly: "month",
  Annually: "year",
};
const types3 = {
  Weekly: "",
  Monthly: "Monthly",
  Annually: "Annual",
};

const FormIndex = ({
  frequency,
  dataForm,
  onChangeSelect,
  onBlurHandle,
  handleGetDataDetail,
  statusDataDetail,
  handleClickFrequency,
  onKeyUpHandle,
  totalExpenses,
  handleSubmitForm,
  showLoading,
}: Props) => {
  return (
    <>
      <div className="livingExpenses">
        <div className="logo text-center">
          <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="70" />
        </div>
        <div className="container">
          <YourDetail
            handleGetDataDetail={handleGetDataDetail}
            statusDataDetail={statusDataDetail}
          />
          <div className="step-header mt-4">
            <div className="title">Living Expenses</div>
            <div className="listAction">
              {/* <button
                className={frequency === types.weekly ? "active" : ""}
                onClick={() => handleClickFrequency(types.weekly)}
              >
                Weekly
              </button> */}
              <button
                className={
                  frequency === types.monthly ? "active border-radius-0" : ""
                }
                onClick={() => handleClickFrequency(types.monthly)}
              >
                Monthly
              </button>
              {/* <button
                className={frequency === types.annually ? "active" : ""}
                onClick={() => handleClickFrequency(types.annually)}
              >
                Annually
              </button> */}
            </div>
          </div>
          <div className="contentCollapse">
            <Accordion defaultActiveKey={['0','1', '2']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="card-title">
                    <h2>Fixed Expenses</h2>
                    <div className="price">
                      {dataForm?.totalAmountLiving || "$0"}/
                      {types2[frequency]}
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="item header">
                    <div className="titleName text-center" />
                    <div className="amount text-center">Amount</div>
                    <div className="frequency text-center">Frequency</div>
                    <div className="totalAmount text-center">
                      {types3[frequency]} Amount
                    </div>
                  </div>
                  <AccordionFixed
                    onChange={onKeyUpHandle}
                    onBlurHandle={onBlurHandle}
                    dataForm={dataForm}
                    onChangeSelect={onChangeSelect}
                  />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div className="card-title">
                      <h2>Variable Expenses</h2>
                      <div className="price">
                        {dataForm?.totalVariable || "$0"}/{types2[frequency]}
                      </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="item header">
                      <div className="titleName text-center" />
                      <div className="amount text-center">Amount</div>
                      <div className="frequency text-center">Frequency</div>
                      <div className="totalAmount text-center">
                        {types3[frequency]} Amount
                      </div>
                    </div>
                    <AccordionVariable
                      onChange={onKeyUpHandle}
                      onBlurHandle={onBlurHandle}
                      dataForm={dataForm}
                      onChangeSelect={onChangeSelect}
                    />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <div className="card-title">
                      <h2>Discretionary Expenses</h2>
                      <div className="price">
                        {dataForm?.totalDiscretionary || "$0"}/
                        {types2[frequency]}
                      </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                <div className="item header">
                      <div className="titleName text-center" />
                      <div className="amount text-center">Amount</div>
                      <div className="frequency text-center">Frequency</div>
                      <div className="totalAmount text-center">
                        {types3[frequency]} Amount
                      </div>
                    </div>
                    <AccordionDiscretionary
                      onChange={onKeyUpHandle}
                      onBlurHandle={onBlurHandle}
                      dataForm={dataForm}
                      onChangeSelect={onChangeSelect}
                    />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="totalPrice">
              <h2>Total Expenses</h2>
              <div className="price">
                {totalExpenses || "$0"}/{types2[frequency]}
              </div>
            </div>
            <div className="text-center mt-4">
              <Button
                onClick={() => handleSubmitForm()}
                className="in-progress"
              >
                Submit {showLoading && <Spinner animation="border" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormIndex;
