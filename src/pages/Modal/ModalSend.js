/** @format */

import React from "react";
import { Modal } from "react-bootstrap";
import imageSend from "./../../images/imageSend.png";

const ModalSend = ({ handleClose, isShow }: Props) => {
  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalSend"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="imageSend">
          <img src={imageSend} alt="Send" />
        </div>
        <h4>Thank you!</h4>
        <p>
          Your living expenses have now <br /> been sent to your broker.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSend;
