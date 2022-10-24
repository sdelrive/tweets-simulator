import React from "react";
import "./ListTweets.scss";

// Material UI
import { Grid } from "@mui/material";
import Tweet from "../Tweet/Tweet";

export default function ListTweets({ allTweets, deleteTweet }) {
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay twits</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Tweet tweets={tweet} index={index} deleteTweet={deleteTweet} />
          </Grid>
        );
      })}
    </Grid>
  );
}
