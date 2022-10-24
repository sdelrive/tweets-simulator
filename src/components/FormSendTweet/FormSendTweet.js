import React, { useState } from "react";

import "./FormSendTweet.scss";

// Material UI
import { FormControl, FormGroup, TextField, Button } from "@mui/material";

export default function FormSendTweet(props) {
  const { sendTweet } = props;

  const [formValue, setFormValue] = useState({ name: "", tweet: "" });

  const formOnChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar twit</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={(e) => sendTweet(e, formValue)}
        onChange={formOnChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="tweet"
              placeholder="Escribe tu twit"
              multiline
              rows="6"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="Submit">Enviar Twit</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
