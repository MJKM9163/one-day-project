import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <div className="protection"></div> */}
      <div
        className="colorBox"
        onMouseMove={(e) => {
          //console.log("clientX => ", e.clientX); // 웹 화면 기준
          //console.log("pageX => ", e.pageX); // 전체 문서 길이 기준
          //console.log("screenX => ", e.screenX); // 컴퓨터 화면 기준
          //#80354e63

          (e.target as HTMLElement).style.backgroundColor =
            "#" +
            ((e.clientX % 255).toString(16).length === 1
              ? "0" + (e.clientX % 255).toString(16)
              : (e.clientX % 255).toString(16)) +
            ((e.clientY % 255).toString(16).length === 1
              ? "0" + (e.clientY % 255).toString(16)
              : (e.clientY % 255).toString(16)) +
            ((((e.clientX + e.clientY) / 2) % 255).toString(16).length === 1
              ? "0" + (((e.clientX + e.clientY) / 2) % 255).toString(16)
              : (((e.clientX + e.clientY) / 2) % 255).toString(16));
        }}
      >
        마우스를 천천히 움직여 보세요!
      </div>
    </div>
  );
}

export default App;
