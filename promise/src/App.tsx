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

  function numberSearch(str: any) {
    // TODO: 여기에 코드를 작성합니다.
    let num = 0;
    let text = [];
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i])) {
        num += Number(str[i]);
      } else if (!Number(str[i]) && str[i] !== " ") {
        text.push(str[i]);
      }
    }
    return Math.round(num / text.length);
  }

  let output = numberSearch("Hello6 ");
  console.log(output); // --> 1

  output = numberSearch("Hello6 9World 2,");
  console.log(output); // --> 2

  output = numberSearch("Hello6 9World 2, Nic8e D7ay!");
  console.log(output); // --> 2

  return (
    <div>
      <div id="userInfo"></div>
    </div>
  );
}

export default App;
