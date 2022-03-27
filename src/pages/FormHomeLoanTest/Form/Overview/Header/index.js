/** @format */

import React from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image';
import moment from "moment";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgLogo from "../../../../../images/life/logo.svg";

const Header = () => {
  const outputPdf = () => {
    exportPDF();
 }
 const exportPDF = () => {
   const inputPDF = document.getElementById('content-overview');
   const nameFile  = moment(new Date()).format('DD_MM_YYYY');
    html2canvas(inputPDF)
      .then((canvas) => {
          const imgData = canvas.toDataURL('img/png');
          const pdf = new jsPDF('p', 'pt', [inputPDF?.offsetHeight, 858]);
          pdf.addImage(imgData, 'PNG', 1, 1);
          pdf.save(`applicant_1_${nameFile}.pdf`);
      });
 }
const exportPDFMobile = () => {
  const inputPDF = document.getElementById('content-overview');
  const nameFile  = moment(new Date()).format('DD_MM_YYYY');
  domtoimage.toPng(inputPDF)
    .then(function (dataUrl) {
      const pdf = new jsPDF('p', 'pt', [inputPDF?.offsetHeight, inputPDF?.offsetWidth - 90]);
        pdf.addImage(dataUrl, 'PNG', 1, 1);
        pdf.save(`applicant_1_${nameFile}.pdf`);
    });
  }

  return (
    <>
    <header className="header header-wrap" id="header">
      <div className="logo">
        <a className="logo__img" href="/refinance-home-loan-consultant-test">
          <LazyLoadImage src={imgLogo} alt="logo" width="100%" height="66" />
        </a>
      </div>
      <div className="btn-reset d-flex " style={{ opacity: "1" }}>
        <Button
          className="btnPrimary life d-none d-md-flex min-300 mt-0 w-auto min-h-50"
          onClick={outputPdf}
        >
         Print To PDF 
        </Button>
        <Button
          className="btnPrimary life min-300 mt-0 w-auto min-h-50"
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
      </div>
    </header>
    <Button
      className="btnPrimary d-flex d-md-none life mt-4 w-auto min-h-50"
      onClick={exportPDFMobile}
    >
      Print To PDF 
    </Button>
    </>
  );
};

export default Header;
