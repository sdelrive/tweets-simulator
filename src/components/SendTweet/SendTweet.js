import React from "react";
import "./SendTweet.scss";
import { useState } from "react";

//Material UI
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer/ModalContainer";

export default function SendTweet() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer closeModal={closeModal} isOpenModal={isOpenModal}>
        <p>Contenido del modal</p>
      </ModalContainer>
    </div>
  );
}
