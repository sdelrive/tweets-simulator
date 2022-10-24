import "./App.css";
import Header from "./components/Header";

import { useEffect, useState } from "react";
//Material UI
import { Container, Snackbar } from "@mui/material";
import SendTweet from "./components/SendTweet/SendTweet";
//
import { TWEETS_STORAGE } from "./utils/constants";
import ListTweets from "./components/ListTweets/ListTweets";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [reloadTweets, setReloadTweets] = useState(false);

  const [allTweets, setAllTweets] = useState([]);
  useEffect(() => {
    setAllTweets(JSON.parse(localStorage.getItem(TWEETS_STORAGE)));
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
