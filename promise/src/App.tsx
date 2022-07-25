import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([]);

  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log("calling");
    const result = resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall();

  useEffect(() => {
    // function test() {
    //   console.log("함수에서 콘솔 로그");
    //   setTimeout(() => {
    //     console.log("비동기 작업 끝!");
    //   }, 1);
    // }

    // test();
    // console.log("밖에서 콘솔 로그");
    function getTitle() {
      const response = fetch("https://jsonplaceholder.typicode.com/users/1/posts");
      return response.then((res) => res.json());
    }

    async function exec() {
      try {
        let atext = await getTitle();
        setList(atext);
        console.log(atext);
      } catch (error) {
        console.log(error);
      }
    }
    // setTimeout(() => {
    //   exec();
    // }, 2000);
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default App;
