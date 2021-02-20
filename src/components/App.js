import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [ptag, setpatg] = useState(false);
  const handleClick = () => {
    setpatg(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click to show p tag
      </button>
      {ptag ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
