import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [staging, setStaging] = useState<Array<string>>([]);
  const [branch, setBranch] = useState<Array<Array<string>>>([]);
  const [commit, setCommit] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  const codeCheck = (v: string) => {
    // code 재작성 하기
    let [, command, name] = v.split(" ");
    if (command === "add") {
      setStaging([...staging, name]);
    } else if (command === "push") {
      if (staging.length > 0) {
        setBranch([...branch, [...commit]]);
        setCommit([]);
      } else {
        // commit이 없다는 메세지
      }
    } else if (command === "commit") {
      setCommit([]);
      setStaging([]);
      // commit code 작성
    }
  };

  const eventFu = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      codeCheck(code);
      if (ref.current) {
        ref.current.value = "";
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", eventFu);

    return () => document.removeEventListener("keydown", eventFu);
  });

  return (
    <div className="container">
      <div className="branchBox">
        {staging.map((e, index) => (
          <span className="branchItem" key={e + index}>
            {e}
          </span>
        ))}
      </div>
      <div className="stagingArea">
        {staging.map((e, index) => (
          <span className="stagingItem" key={e + index}>
            {e}
          </span>
        ))}
      </div>
      <div className="helpBox"></div>
      <div className="textBox">
        <input
          ref={ref}
          type={"text"}
          maxLength={20}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
