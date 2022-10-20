import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import { Button } from "antd";

const clickbutton = () => {
  alert("Alert!!!");
};

const element = <button onClick={clickbutton}></button>;

ReactDOM.render(element, document.getElementById("root"));
