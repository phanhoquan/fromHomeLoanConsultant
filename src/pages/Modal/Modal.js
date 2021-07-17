/** @format */

import React from "react";
import { Button, Modal } from "react-bootstrap";
const ModalReset = ({ handleClose, handleSubmit, isShow }: Props) => {
  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h4>WANT TO START OVER?</h4>
        <p>This will clear your answers and start again from the beginning</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="bnt-left">
          cancel
        </Button>
        <Button onClick={handleSubmit} className="bnt-right">
          start over
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalReset;
