import React from "react";
import "./App.css";

function App() {
  console.log("sss");
  return (
    <div className="container">
      <div className="textBox">
        <input
          type={"text"}
          maxLength={10}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
