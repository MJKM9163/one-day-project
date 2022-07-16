import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("스택");

  const ref = useRef();

  const change = (value) => {
    setText(value);
  };

  const enter = (e) => {
    if (e.code === "Enter") {
      setData([text, ...data]);
      ref.current.value = "";
      setText("");
    }
  };

  const typeChange = () => {
    if (type === "스택") {
      setType("큐");
    } else {
      setType("스택");
    }
  };

  const onStart = () => {
    if (type === "스택") {
      setData(data.slice(1, data.length));
    } else {
      setData(data.slice(0, data.length - 1));
    }
  };

  return (
    <div className="screen">
      <div className="box">
        {data.map((el, index) => (
          <div className="boxItem" key={index} style={{ backgroundColor: "#" + 0xffffff }}>
            {el}
          </div>
        ))}
      </div>
      <div>현재 {type}</div>
      <div>
        <input
          ref={ref}
          className="boxInput"
          type={"text"}
          onKeyDown={(e) => {
            enter(e);
          }}
          onChange={(e) => change(e.target.value)}
        />
        <button
          className="boxButton"
          onClick={() => {
            setData([text, ...data]);
            ref.current.value = "";
          }}
        >
          넣기
        </button>
      </div>
      <div>
        <button className="boxButton" onClick={() => typeChange()}>
          스택, 큐 전환
        </button>
        <button className="boxButton" onClick={() => onStart()}>
          실행
        </button>
        <button className="boxButton" onClick={() => setData([])}>
          초기화
        </button>
      </div>
    </div>
  );
}

export default App;
