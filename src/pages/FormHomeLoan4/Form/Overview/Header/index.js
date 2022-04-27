/** @format */

import React, {useState} from "react";
import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image';
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { redirectTo } from "../../../../../utils/beginPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../../../images/life/logo.svg";
import imgReset from "../../../../../images/reload.png";
import imgResetWhite from "../../../../../images/reload-white.png";
import Modal from "../../../../Modal/Modal";

const Header = ({handleSubmit}) => {
  const history = useHistory();
  const loan2firstName = localStorage.getItem("loan2firstName") || ""
  const loan2lastName = localStorage.getItem("loan2lastName") || ""

  const [isShowModal, setIsShowModal] = useState(false);
  const outputPdf = () => {
    exportPDF();
 }
 const exportPDF = () => {
   const inputPDF = document.getElementById('content-body');
   const nameFile  = moment(new Date()).format('YYYYMMDD');
   domtoimage.toPng(inputPDF)
   .then(function (dataUrl) {
          const pdf = new jsPDF('portrait', 'px', [inputPDF?.offsetHeight, 810]);
          pdf.addImage(dataUrl, 'PNG', 95, 0, 0, 0, undefined,'FAST');
          pdf.save(`${nameFile}_${loan2firstName}_${loan2lastName}_FactFind.pdf`);
      });
 }
const exportPDFMobile = () => {
  const inputPDF = document.getElementById('content-overview');
  const nameFile  = moment(new Date()).format('YYYYMMDD');
  domtoimage.toPng(inputPDF)
    .then(function (dataUrl) {
      const pdf = new jsPDF('p', 'px', [inputPDF?.offsetHeight, inputPDF?.offsetWidth - 163]);
      pdf.addImage(dataUrl, 'PNG', 0, 0, 0, 0, undefined,'FAST');
        pdf.save(`${nameFile}_${loan2firstName}_${loan2lastName}_FactFind.pdf`);
    });
  }

  const handleReset = () => {
    redirectTo("/updated-hlc-consultant-4");
    setIsShowModal(false);
  };

  return (
    <>
    <header className="header header-wrap" id="header">
      <div className="logo">
        <a className="logo__img" href="/updated-hlc-consultant-4">
          <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
        </a>
      </div>
      <div className="btn-reset d-flex " style={{ opacity: "1" }}>
        <Button
            className="btnPrimary min-150 life mt-0 w-auto min-h-50"
            onClick={() => history.go(-1)}
            >
            Go Back
        </Button>
        <Button
          className="btnPrimary life d-none d-md-flex min-300 mt-0 w-auto min-h-50"
          onClick={outputPdf}
        >
         Print To PDF 
        </Button>
        <Button
          className="btnPrimary d-none d-md-flex life min-300 mt-0 w-auto min-h-50"
          onClick={() => {}}
        >
          Book an appointment
          <div className="listAuthorName">
            <a
              className="authorName"
              target="_blank"
              rel="noreferrer"
              href="https://meetings.hubspot.com/bobby-horianto/bobby-horinato-30mins-consultation"
            >
              <p>Bobby Horianto</p>
            </a>
            <a
              className="authorName"
              target="_blank"
              rel="noreferrer"
              href="https://meetings.hubspot.com/robert-scozzafava/rob-scozzafava-30mins-consulatation"
            >
              <p>Rob Scozzafava</p>
            </a>
          </div>
        </Button>
        <Button
          className="btnPrimary d-none d-md-flex life min-150 mt-0 w-auto min-h-50"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <Button
          className="btnPrimary life width-50 mt-0 w-auto min-h-50 btn-white btnResetWhite"
          onClick={() => setIsShowModal(true)}
        >
          <img
            src={imgReset}
            title="Reset"
            alt=""
            className="imgResetBlue"
          />
          <img
            src={imgResetWhite}
            title="Reset"
            alt=""
            className="imgResetWhite"
          />
        </Button>
      </div>
    </header>
    <div className="list-button-mobile d-flex mt-2">
      <Button
          className="btnPrimary d-flex d-md-none life min-300 mt-0 w-auto min-h-50"
          onClick={() => {}}
          >
            Book an appointment
            <div className="listAuthorName">
              <a
                className="authorName"
                target="_blank"
                rel="noreferrer"
                href="https://meetings.hubspot.com/bobby-horianto/bobby-horinato-30mins-consultation"
              >
                <p>Bobby Horianto</p>
              </a>
              <a
                className="authorName"
                target="_blank"
                rel="noreferrer"
                href="https://meetings.hubspot.com/robert-scozzafava/rob-scozzafava-30mins-consulatation"
              >
                <p>Rob Scozzafava</p>
              </a>
            </div>
        </Button>
        <Button
          className="btnPrimary d-flex d-md-none life mt-0 w-auto min-h-50"
          onClick={exportPDFMobile}
        >
          Print To PDF 
        </Button>
        <Button
          className="btnPrimary d-flex d-md-none life min-150 mt-0 w-auto min-h-50"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
    </div>
    <Modal
        isShow={isShowModal}
        handleClose={() => setIsShowModal(false)}
        handleSubmit={() => handleReset()}
      />
    </>
  );
};

export default Header;
