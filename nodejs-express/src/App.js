import { useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([]);
  let [text, setText] = useState("");
  const dataCall = async () => {
    let newData = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((data) => data.json());
    setList(newData);
  };

  const dataPost = async () => {
    let newName = await fetch(`http://localhost:4000/add`, {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
    setList([{ name: newName }, ...list]);
    setText("");
  };

  const change = (e) => {
    setText(e);
  };

  return (
    <div className="App">
      <div className="box">무야호~! node.js express 공부</div>
      <div>
        <input
          type={"text"}
          placeholder="새로운 이름"
          value={text}
          onChange={(e) => change(e.target.value)}
        />
      </div>
      <button onClick={() => dataCall()}>GET 요청</button>
      <button onClick={() => dataPost()}>POST 요청</button>
      <div className="responseBox">
        {list.map((data, index) => (
          <div key={index}>이름: {data.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
