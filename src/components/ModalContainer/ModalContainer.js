import React from "react";
import { Modal } from "@mui/material";
import "./ModalContainer.scss";

function ModalContainer(props) {
  const { children, isOpenModal, closeModal } = props;

  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}

export default ModalContainer;
