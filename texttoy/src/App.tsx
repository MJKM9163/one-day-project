import { useEffect, useRef, useState } from "react";
import "./App.css";

interface branchType {
  commit: Array<Array<string>>;
  message: Array<string>;
}

interface commitType {
  file: Array<Array<string>>;
  commitMessage: Array<string>;
}

function App() {
  const [code, setCode] = useState("");
  const [staging, setStaging] = useState<Array<string>>([]);
  const [branch, setBranch] = useState<branchType>({ commit: [], message: [] });
  const [commit, setCommit] = useState<commitType>({ file: [], commitMessage: [] });
  const ref = useRef<HTMLInputElement>(null);

  const codeCheck = (v: string) => {
    // code 재작성 하기
    let [, command, name] = v.split(" ");
    let optionCheck = /\-\w/;

    if (command === "add") {
      setStaging([...staging, name]);
    } else if (command === "push") {
      if (staging.length > 0) {
        setBranch({
          commit: [...branch.commit, ...commit.file],
          message: [...branch.message, ...commit.commitMessage],
        });
        setCommit({ file: [], commitMessage: [] });
      } else {
        // commit이 없다는 메세지
      }
    } else if (command === "commit" && /\-m/.test(v)) {
      // 옵션이 있을 경우만 넘어감
      let [gitCommand, messageText] = v.split(optionCheck);
      let [git, command] = gitCommand.split(" ");

      console.log(messageText);

      setCommit({
        file: [...commit.file, [...staging]],
        commitMessage: [...commit.commitMessage, messageText],
      });
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
