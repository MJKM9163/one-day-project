import React, { useEffect } from "react";
import "./App.css";

function App() {
  let arr: any = [];
  const test = async () => {
    let box = null;
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((e) => e.json())
      .then((data) => {
        const name = document.createElement("div");
        const email = document.createElement("div");
        name.textContent = data.id;
        email.textContent = data.title;
        const userInfo: any = document.getElementById("userInfo");
        userInfo.appendChild(name);
        userInfo.appendChild(email);
        return data;
      })
      .then((e) => {
        box = e;
        return box;
      });
  };
  test().then((e) => console.log(e));

  return (
    <div>
      <div id="userInfo"></div>
    </div>
  );
}

export default App;
