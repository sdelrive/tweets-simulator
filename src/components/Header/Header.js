import React from "react";
import "./Header.scss";
import TwitterLogo from "../../assets/img/twitter-logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Tweets simulator" />
      <h1>Tweets Simulator</h1>
    </div>
  );
}
