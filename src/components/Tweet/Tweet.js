import React from "react";
import "./Tweet.scss";

import moment from "moment";
// Material UI
import { Card, CardContent } from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";

export default function Tweet({ tweets, index, deleteTweet }) {
  const { name, time, tweet } = tweets;
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h5>{name}</h5>
          <DeleteTwoTone onClick={deleteTweet} />
        </div>
        <p>{tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:MM")}
        </div>
      </CardContent>
    </Card>
  );
}
