/** @format */

import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalFooter = ({ handleClose, isShow }: Props) => {
  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <button onClick={handleClose} type="button" className="close">
          <span aria-hidden="true">×</span><span className="sr-only">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-popup-footer">
          <p>
            Makes Cents Services Pty Ltd (ABN 13630717243) is a wholly owned
            subsidiary of EMBR Group Pty Ltd (ABN 27 147 278 153) Australian
            Credit Licence 519274 and operates{" "}
            <a
              href="https://www.makescents.com.au/"
              rel="noreferrer"
              target="_blank"
            >
              makescents.com.au
            </a>{" "}
            as a free service that allows users to compare quotes and save money
            in a few simple steps. This is based on the details provided through
            this site and our partners product or service criteria at the time
            of the enquiry. When we provide comparisons, or pass your details
            onto product issuers or credit providers, Or other comparison
            services, this is not a recommendation from Makes Cents Services Pty
            Ltd or EMBR Group Pty Ltd and in no way should be treated as
            personal or general advice about the suitability of a product or
            service. You should consult the individual product issuer or credit
            provider for their terms and conditions and read any specific
            product disclosures. Makes Cents Services Pty Ltd and EMBR Group Pty
            Ltd do receive fees and commissions for providing this service and
            sharing your information with a relevant product or service
            supplier. Unlike other comparison sites, we are completely
            independently run, funded and not owned by any Bank or Insurer and
            we are not a product issuer or a credit provider. We endeavour to
            provide you with a comparison of a wide range of products, providers
            and services, however we don’t cover every available product,
            provider or service available in the market. Therefore there may be
            other options available to you that could indeed be better than our
            options. In some cases, we may only have one provider who can
            service your specific request, as opposed to multiple quotes. This
            may be because your circumstances are unique and only serviceable by
            one specific provider, or because Makes Cents Services Pty Ltd only
            has been able to come to an agreement with one product supplier. If
            you decide to proceed with a specific product or service offering
            through a referral from{" "}
            <a
              href="https://www.makescents.com.au/"
              rel="noreferrer"
              target="_blank"
            >
              makescents.com.au
            </a>{" "}
            , you will be dealing directly with the 3rd party company and(or)
            its representatives of that product or service and no longer with{" "}
            <a
              href="https://www.makescents.com.au/"
              rel="noreferrer"
              target="_blank"
            >
              makescents.com.au
            </a>{" "}
            / Makes Cents Services Pty Ltd. We endeavour to always provide
            accurate and up to date information, however at times may need to
            update these details and they could be, at times, out of date.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="btnPrimary life wow fadeInUp">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFooter;
