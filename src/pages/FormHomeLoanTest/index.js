/** @format */

import React, { useState, useRef, useEffect, useMemo } from "react";
// import { useHistory } from "react-router-dom";
import Header from "./Header";
import { Helmet } from "react-helmet";
import imgMenu from "../../images/menu.png";
import useOnClickOutside from "../../hooks/useClickOutSide";
import imgMenuClose from "../../images/closemenu.png";
import imgNote from "../../images/note.png";
import imgArrowNote from "../../images/arrow-white.svg";
import imgAller from "../../images/aler.png";

import UserDetail from "./menu/UserDetail";
import LoanInformation from "./menu/LoanInformation";
import ApplicantDetails from "./menu/ApplicantDetails";
import KidsOrDependents from "./menu/KidsOrDependents";
import EmploymentStatusSole from "./menu/EmploymentStatusSole";
import Liabilities from "./menu/Liabilities";
import CreditCards from "./menu/CreditCards";
import ResidentialInformation from "./menu/ResidentialInformation";
import MenuAssets from "./menu/Assets";
import InvestmentProperties from './menu/InvestmentProperties'
import Overviews from "./menu/Overview";

export const types = {
  1: "Sole Applicant",
  2: "Joint Applicant",
};

const HomeLoan = ({
  children,
  className = "",
  activeStep,
  numberScroll = 10,
  listMenuStep1 = [],
  listMenuStep2 = [],
  listMenuStep3 = [],
  listMenuStep4 = [],
  listMenuStep5 = [],
  listMenuStep7 = [],
  listMenuStep8 = [],
  listMenuStep9 = [],
  listMenuStep10 = [],
  listMenuStep11 = [],
  jointApplicationStatus = "",
}) => {
  var root = document.getElementsByTagName("html")[0];
  const wrapperInfoRef = useRef();
  const wrapperInfoRefSole = useRef();
  if (document.body) {
    root.setAttribute("class", "fonts90");
  }

  let dataListMenuStep1 = localStorage.getItem("listMenuStep1")
    ? JSON.parse(localStorage.getItem("listMenuStep1"))
    : [];
  let dataListMenuStep2 = localStorage.getItem("listMenuStep2")
    ? JSON.parse(localStorage.getItem("listMenuStep2"))
    : [];
  let dataListMenuStep3 = localStorage.getItem("listMenuStep3")
    ? JSON.parse(localStorage.getItem("listMenuStep3"))
    : [];
  let dataListMenuStep4 = localStorage.getItem("listMenuStep4")
    ? JSON.parse(localStorage.getItem("listMenuStep4"))
    : [];
  let dataListMenuStep5 = localStorage.getItem("listMenuStep5")
    ? JSON.parse(localStorage.getItem("listMenuStep5"))
    : [];
  let dataListMenuStep7 = localStorage.getItem("listMenuStep7")
    ? JSON.parse(localStorage.getItem("listMenuStep7"))
    : [];

  let dataListMenuStep8 = localStorage.getItem("listMenuStep8")
    ? JSON.parse(localStorage.getItem("listMenuStep8"))
    : [];

  let dataListMenuStep9 = localStorage.getItem("listMenuStep9")
    ? JSON.parse(localStorage.getItem("listMenuStep9"))
    : [];

  let dataListMenuStep10 = localStorage.getItem("listMenuStep10")
  ? JSON.parse(localStorage.getItem("listMenuStep10"))
  : [];
  let dataListMenuStep11 = localStorage.getItem("listMenuStep11")
  ? JSON.parse(localStorage.getItem("listMenuStep11"))
  : [];

  const [contentNoteVale, setContentNoteVale] = useState(
    localStorage.getItem("contentNoteVale") || ""
  );
  const [textLoanPurpose, setTextLoanPurpose] = useState(
    localStorage.getItem("textLoanPurpose") ||''
  );

  const [isShowNoteVale, setIsShowNoteVale] = useState(false);
  const [isShowLoanPurpose, setIsShowLoanPurpose] = useState(false);
  const [isShowMessSole, setIsShowMessSole] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowMenu(false);
  });
  useOnClickOutside(wrapperInfoRefSole, () => {
    setIsShowMessSole(false);
  });

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const scrollToBottom = () => {
    wrapperInfoRef.current?.scrollTo({
      block: "end",
      top: numberScroll,
    });
  };

  useEffect(() => {
    scrollToBottom();
    window.scrollTo({
      block: "top",
      top: 0,
    });
    // eslint-disable-next-line
  }, []);

  const handleTogglesAddNote = (name = "") => {
    if(name==='loan'){
      setIsShowLoanPurpose(!isShowLoanPurpose)
    }else{
      setIsShowNoteVale(!isShowNoteVale);
    }
  };

  const handleShowMessSole = () => {
    if (jointApplicationStatus) {
      setIsShowMessSole(false);
    } else {
      setIsShowMessSole(true);
    }
  };

  useMemo(() => {
    window.localStorage.setItem("contentNoteVale", contentNoteVale);
  }, [contentNoteVale]);

  useMemo(() => {
    window.localStorage.setItem("textLoanPurpose", textLoanPurpose);
  }, [textLoanPurpose]);

  const renderMenu = (listMenu) => {
    return listMenu.map((item) => {
      return (
        <>{item?.question ? <li key={item?.id}>{item?.question}</li> : ""}</>
      );
    });
  };
  const renderMess = () => {
    let html = (
      <p className="content-limited mt-2">
        Content limited to 500 characters. Remaining{" "}
        <span className="blue">{500 - contentNoteVale?.length || ""}</span>
      </p>
    );
    if (contentNoteVale?.length >= 500) {
      html = (
        <p className="content-limited mt-2 col-red">
          Maximum characters exceeded. Remaining 0<br/>
          Maximum characters exceeded in Additional notes
        </p>
      );
    }
    return html;
  };

  const renderMessLoan = () => {
    let html = (
      <p className="content-limited mt-2">
        Content limited to 500 characters. Remaining{" "}
        <span className="blue">{500 - textLoanPurpose?.length || ""}</span>
      </p>
    );
    if (textLoanPurpose?.length >= 500) {
      html = (
        <p className="content-limited mt-2 col-red">
          Maximum characters exceeded. Remaining 0<br/>
          Maximum characters exceeded in Additional notes
        </p>
      );
    }
    return html;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Refinance Home Loan Consultant Test</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan fromHomeLoan2 loan-consultant-test">
        <Header />
        <div className="iconMenu">
          <div
            className="sub-iconMenu"
            role="button"
            onClick={() => handleShowMenu()}
          >
            <img src={imgMenu} alt="MENU" />
          </div>
        </div>

        <main className={`life-insurance__MainCt ${className}`}>
          <div
            className={`nav-left style2 ${isShowMenu ? "open" : ""}`}
            ref={wrapperInfoRef}
            id="navLeft"
          >
            <div className="iconMenuClose">
              <div
                className="sub-iconMenu"
                role="button"
                onClick={() => setIsShowMenu(false)}
              >
                <img src={imgMenuClose} alt="CLOSE MENU" />
              </div>
            </div>
            <ul className="listAnswer style2">
              <UserDetail
                stepActive={activeStep}
                answerActive={
                  listMenuStep1?.length > 0
                    ? listMenuStep1[0]
                    : dataListMenuStep1[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep1?.length > 0
                      ? listMenuStep1
                      : dataListMenuStep1
                  )}
                </ul>
              </UserDetail>
              <LoanInformation
                stepActive={activeStep}
                answerActive={
                  listMenuStep2?.length > 0
                    ? listMenuStep2[0]
                    : dataListMenuStep2[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep2?.length > 0
                      ? listMenuStep2
                      : dataListMenuStep2
                  )}
                </ul>
              </LoanInformation>

              <ApplicantDetails
                stepActive={activeStep}
                answerActive={
                  listMenuStep3?.length > 0
                    ? listMenuStep3[0]
                    : dataListMenuStep3[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep3?.length > 0
                      ? listMenuStep3
                      : dataListMenuStep3
                  )}
                </ul>
              </ApplicantDetails>

              <KidsOrDependents
                stepActive={activeStep}
                answerActive={
                  listMenuStep4?.length > 0
                    ? listMenuStep4[0]
                    : dataListMenuStep4[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep4?.length > 0
                      ? listMenuStep4
                      : dataListMenuStep4
                  )}
                </ul>
              </KidsOrDependents>

              <EmploymentStatusSole
                stepActive={activeStep}
                answerActive={
                  listMenuStep5?.length > 0
                    ? listMenuStep5[0]
                    : dataListMenuStep5[0]
                }
                jointApplicationStatus={
                  jointApplicationStatus ||
                  localStorage.getItem("loan2jointApplicationStatus")
                }
                handleShowMess={handleShowMessSole}
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep5?.length > 0
                      ? listMenuStep5
                      : dataListMenuStep5
                  )}
                </ul>
              </EmploymentStatusSole>
              <Liabilities
                stepActive={activeStep}
                answerActive={
                  listMenuStep7?.length > 0
                    ? listMenuStep7[0]
                    : dataListMenuStep7[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep7?.length > 0
                      ? listMenuStep7
                      : dataListMenuStep7
                  )}
                </ul>
              </Liabilities>

              <CreditCards
                stepActive={activeStep}
                answerActive={
                  listMenuStep8?.length > 0
                    ? listMenuStep8[0]
                    : dataListMenuStep8[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep8?.length > 0
                      ? listMenuStep8
                      : dataListMenuStep8
                  )}
                </ul>
              </CreditCards>
              <MenuAssets
                stepActive={activeStep}
                answerActive={
                  listMenuStep10?.length > 0
                    ? listMenuStep10[0]
                    : dataListMenuStep10[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep10?.length > 0
                      ? listMenuStep10
                      : dataListMenuStep10
                  )}
                </ul>
              </MenuAssets>
              <ResidentialInformation
                stepActive={activeStep}
                answerActive={
                  listMenuStep9?.length > 0
                    ? listMenuStep9[0]
                    : dataListMenuStep9[0]
                }
              >
                <ul className="sub-question">
                  {renderMenu(
                    listMenuStep9?.length > 0
                      ? listMenuStep9
                      : dataListMenuStep9
                  )}
                </ul>
              </ResidentialInformation>
              <InvestmentProperties
              stepActive={activeStep}
              answerActive={
                listMenuStep11?.length > 0
                  ? listMenuStep11[0]
                  : dataListMenuStep11[0]
              }
            >
              <ul className="sub-question">
                {renderMenu(
                  listMenuStep11?.length > 0
                    ? listMenuStep11
                    : dataListMenuStep11
                )}
              </ul>
              </InvestmentProperties>
              <Overviews/>
            </ul>
          </div>
          <div className="nav-right">{children}</div>
        </main>
      </div>
      {isShowMessSole ? (
        <div className="messagesSole" ref={wrapperInfoRefSole}>
          <img src={imgAller} alt="" className="mr-3" /> This category is only
          accessible <br /> when you are the Sole applicant/Joint applicant
        </div>
      ) : (
        ""
      )}
      <div className={`addNote loan-purpose ${isShowLoanPurpose ? "show" : ""}`}>
        <div className="addHeader" onClick={() =>handleTogglesAddNote('loan')}>
          <img src={imgNote} alt="" className="icon-note" />
          Loan Purpose
          <img src={imgArrowNote} alt="" className="arrow-note" />
        </div>
        <div
          className={`content-note ${
            textLoanPurpose?.length >= 500 ? "box-red" : ""
          }`}
        >
          <textarea
            className="form-control noteVale"
            value={textLoanPurpose}
            onChange={(e) => {
              setTextLoanPurpose(e.target.value);
            }}
            maxLength="500"
            placeholder="Please enter your loan purpose here..."
          />
          {renderMessLoan()}
        </div>
      </div>
      
      <div className={`addNote ${isShowNoteVale ? "show" : ""}`}>
        <div className="addHeader" onClick={()=>handleTogglesAddNote('')}>
          <img src={imgNote} alt="" className="icon-note" />
          Additional notes
          <img src={imgArrowNote} alt="" className="arrow-note" />
        </div>
        <div
          className={`content-note ${
            contentNoteVale?.length >= 500 ? "box-red" : ""
          }`}
        >
          <textarea
            className="form-control noteVale"
            value={contentNoteVale}
            onChange={(e) => {
              setContentNoteVale(e.target.value);
            }}
            maxLength="500"
            placeholder="Please enter your additional notes here..."
          />
          {renderMess()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeLoan;
