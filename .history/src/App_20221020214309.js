import React from "react";
import "./style.css";

function App() {
  const click = () => {
    alert("Alert");
  };

  return (
    <>
      <button
        style={{ margin: "10px 10px" }}
        type="Primary"
        onClick={click}
      ></button>
    </>
  );
}

export default App;
