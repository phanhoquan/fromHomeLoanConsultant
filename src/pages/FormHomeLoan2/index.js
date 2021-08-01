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
import UserDetail from "./menu/UserDetail";
import LoanInformation from "./menu/LoanInformation";
import ApplicantDetails from "./menu/ApplicantDetails";
import KidsOrDependents from "./menu/KidsOrDependents";
import EmploymentStatusSole from "./menu/EmploymentStatusSole";
import EmploymentStatusJoint from "./menu/EmploymentStatusJoint";
import Liabilities from "./menu/Liabilities";
import CreditCards from "./menu/CreditCards";
import ResidentialInformation from "./menu/ResidentialInformation";

import Modal from "../Modal/ModalSubmit";

const HomeLoan = ({
  children,
  className = "",
  activeStep,
  numberScroll = 10,
  listMenuStep1 = [],
  listMenuStep2 = [],
  listMenuStep3 = [],
  listMenuStep8 = [],
  listMenuStep9 = [],
}) => {
  var root = document.getElementsByTagName("html")[0];
  const wrapperInfoRef = useRef();
  if (document.body) {
    root.setAttribute("class", "fonts100");
  }
  let listDataSubmit = localStorage.getItem("loan2listDataSubmit")
    ? JSON.parse(localStorage.getItem("loan2listDataSubmit"))
    : [];

  listDataSubmit &&
    listDataSubmit &&
    listDataSubmit.length > 0 &&
    listDataSubmit.sort(function (a, b) {
      return a.id - b.id;
    });

  let dataListMenuStep1 = localStorage.getItem("listMenuStep1")
    ? JSON.parse(localStorage.getItem("listMenuStep1"))
    : [];
  let dataListMenuStep2 = localStorage.getItem("listMenuStep2")
    ? JSON.parse(localStorage.getItem("listMenuStep2"))
    : [];
  let dataListMenuStep3 = localStorage.getItem("listMenuStep3")
    ? JSON.parse(localStorage.getItem("listMenuStep3"))
    : [];

  let dataListMenuStep8 = localStorage.getItem("listMenuStep8")
    ? JSON.parse(localStorage.getItem("listMenuStep8"))
    : [];

  let dataListMenuStep9 = localStorage.getItem("listMenuStep9")
    ? JSON.parse(localStorage.getItem("listMenuStep9"))
    : [];

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMess, setIsIsShowMess] = useState(false);
  const [contentNoteVale, setContentNoteVale] = useState(
    localStorage.getItem("contentNoteVale") || ""
  );
  const [isShowNoteVale, setIsShowNoteVale] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useOnClickOutside(wrapperInfoRef, () => {
    setIsShowMenu(false);
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
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    setIsShowModal(true);
  };

  const handleTogglesAddNote = () => {
    setIsShowNoteVale(!isShowNoteVale);
  };

  const handleSubmitData = () => {
    if (
      !localStorage.getItem("firstName") ||
      !localStorage.getItem("lastName") ||
      !localStorage.getItem("email")
    ) {
      setIsIsShowMess(true);
      return;
    } else {
      console.log("SUBMIT FORM");
    }
  };

  useMemo(() => {
    window.localStorage.setItem("contentNoteVale", contentNoteVale);
  }, [contentNoteVale]);

  const renderMenu = (listMenu) => {
    return listMenu.map((item) => {
      return <li key={item?.id}>{item?.question}</li>;
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Loan Consultant 2</title>
      </Helmet>
      <div className="wrapper life-insurance fromHomeLoan">
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
                  listMenuStep1?.length > 0 ? listMenuStep1 : dataListMenuStep1
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
                  listMenuStep2?.length > 0 ? listMenuStep2 : dataListMenuStep2
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
                  listMenuStep3?.length > 0 ? listMenuStep3 : dataListMenuStep3
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

              <KidsOrDependents stepActive={activeStep}>
                <ul className="sub-question">
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                </ul>
              </KidsOrDependents>

              <EmploymentStatusSole stepActive={activeStep}>
                <ul className="sub-question">
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                </ul>
              </EmploymentStatusSole>

              <EmploymentStatusJoint stepActive={activeStep}>
                <ul className="sub-question">
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                </ul>
              </EmploymentStatusJoint>
              <Liabilities stepActive={activeStep}>
                <ul className="sub-question">
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                  <li>
                    2. Is the loan you currently have Fixed, Variable or Split?{" "}
                  </li>
                </ul>
              </Liabilities>

              <CreditCards
                stepActive={activeStep}
                answerActive={
                  listMenuStep8?.length > 0 ? listMenuStep8 : dataListMenuStep8
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
                  listMenuStep9?.length > 0 ? listMenuStep9 : dataListMenuStep9
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
        handleClose={() => setIsShowModal(false)}
        isShowMess={isShowMess}
        handleSubmit={() => handleSubmitData()}
      />
    </React.Fragment>
  );
};

export default HomeLoan;
