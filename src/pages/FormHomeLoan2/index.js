/** @format */

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
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

import Modal from "../Modal/ModalSubmit";

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
  jointApplicationStatus = "",
}) => {
  var root = document.getElementsByTagName("html")[0];
  const wrapperInfoRef = useRef();
  const wrapperInfoRefSole = useRef();
  if (document.body) {
    root.setAttribute("class", "fonts90");
  }
  const history = useHistory();

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

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMess, setIsShowMess] = useState(false);
  const [contentNoteVale, setContentNoteVale] = useState(
    localStorage.getItem("contentNoteVale") || ""
  );
  const [isShowNoteVale, setIsShowNoteVale] = useState(false);
  const [isShowMessSole, setIsShowMessSole] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowMenu(false);
  });
  useOnClickOutside(wrapperInfoRef, () => {
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

  const handleSubmit = () => {
    setIsShowModal(true);
  };

  const handleTogglesAddNote = () => {
    setIsShowNoteVale(!isShowNoteVale);
  };

  const handleShowMessSole = () => {
    if (jointApplicationStatus) {
      setIsShowMessSole(false);
    } else {
      setIsShowMessSole(true);
    }
  };

  const handleSubmitData = () => {
    if (
      !localStorage.getItem("loan2lastName") ||
      !localStorage.getItem("loan2lastName") ||
      !localStorage.getItem("loan2email")
    ) {
      setIsShowMess(true);
      return;
    } else {
      history.push("/refinance-fact-find-2/step-success");
    }
  };

  useMemo(() => {
    window.localStorage.setItem("contentNoteVale", contentNoteVale);
  }, [contentNoteVale]);

  const renderMenu = (listMenu) => {
    return listMenu.map((item) => {
      return (
        <>{item?.question ? <li key={item?.id}>{item?.question}</li> : ""}</>
      );
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant 2</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan fromHomeLoan2">
        <Header handleSubmit={handleSubmit} />
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

      <div className={`addNote ${isShowNoteVale ? "show" : ""}`}>
        <div className="addHeader" onClick={handleTogglesAddNote}>
          <img src={imgNote} alt="" className="icon-note" />
          Additional notes
          <img src={imgArrowNote} alt="" className="arrow-note" />
        </div>
        <div className="content-note">
          <textarea
            className="form-control noteVale"
            value={contentNoteVale}
            onChange={(e) => setContentNoteVale(e.target.value)}
            placeholder="Please enter your additional notes here..."
          />
        </div>
      </div>
      <Modal
        isShow={isShowModal}
        handleClose={() => {
          setIsShowMess(false);
          setIsShowModal(false);
        }}
        isShowMess={isShowMess}
        handleSubmit={() => handleSubmitData()}
      />
    </React.Fragment>
  );
};

export default HomeLoan;
