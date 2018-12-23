import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="title">{props.children}</div>
      <div className="score">
        Score: {props.score} <br></br> Highscore: {props.highscore}
      </div>
    </div>
  );
}

export default Header;
