import React from "react";
import "./SendTweet.scss";
import { useState } from "react";

//Material UI
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import moment from "moment";

import ModalContainer from "../ModalContainer/ModalContainer";
import FormSendTweet from "../FormSendTweet/FormSendTweet";

// import key del ls
import { TWEETS_STORAGE } from "../../utils/constants";

export default function SendTweet(props) {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (e, formValue) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];
    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      setToastProps({ open: true, text: "El formulario esta vacio" });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({ open: true, text: "El twit fue enviado" });
      closeModal();
    }
    allTweetsArray = allTweets;
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
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
