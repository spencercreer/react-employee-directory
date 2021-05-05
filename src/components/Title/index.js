import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title p-3 mb-1 col-md-12">
    <img src="assets/logo_blue.png" />
    <h1>{props.children}</h1>
  </div>
  )
}

export default Title;
