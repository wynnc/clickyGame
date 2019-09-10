import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="public.env.PUBLIC_URL/">Clicky Game</a>
        </li>
        {/* <NavMessage score={props.score} topScore={props.topScore} /> */}
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
