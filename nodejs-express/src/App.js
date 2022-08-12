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

  function orderOfPresentation(N, K) {
    console.log(K);
    const factorial = (n) => {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    };

    let order = 0;
    const isUsed = Array(N).fill(false);

    for (let i = 0; i < K.length; i++) {
      const num = K[i];
      console.log(isUsed);
      isUsed[num] = true;
      const candidates = isUsed.slice(1, num);
      console.log(candidates, num);
      const validCnt = candidates.filter((el) => el === false).length;
      console.log(validCnt);
      const formerCnt = validCnt * factorial(N - i - 1);
      console.log(formerCnt);
      order = order + formerCnt;
    }

    return order;
  }

  //  두 번째 코드
  // function orderOfPresentation(N, K) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   let numArr = Array.from({ length: N }, (v, i) => i + 1);
  //   let result = [];
  //   let num = 0;
  //   const fun = (arr) => {
  //     for (let i = 0; i < N; i++) {
  //       if (arr.length === N) {
  //         result.push(arr);
  //         for (let u = 0; u < arr.length; u++) {
  //           if (arr[u] !== K[u]) {
  //             break;
  //           } else if (u === N - 1) {
  //             num = result.length - 1;
  //             return num;
  //           }
  //         }
  //         return;
  //       } else if (!arr.includes(numArr[i])) {
  //         fun([...arr, numArr[i]]);
  //         if (num !== 0) {
  //           return;
  //         }
  //       }
  //     }
  //   };
  //   fun([]);

  //   return num;
  // }

  // let output = orderOfPresentation(3, [2, 3, 1]);
  // console.log(output); // 3

  let output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
  console.log(output); // 6

  // 이전 코드
  // function orderOfPresentation(N, K) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   let numArr = Array.from({ length: N }, (v, i) => i + 1);
  //   let result = [];
  //   let num = 0;
  //   const fun = (arr) => {
  //     for (let i = 0; i < N; i++) {
  //       if (arr.length === N) {
  //         result.push(arr);
  //         return;
  //       } else if (!arr.includes(numArr[i])) {
  //         fun([...arr, numArr[i]]);
  //       }
  //     }
  //   };
  //   fun([]);

  //   for (let u = 0; u < result.length; u++) {
  //     for (let t = 0; t < result[u].length; t++) {
  //       if (result[u][t] !== K[t]) {
  //         break;
  //       } else if (t === N - 1) {
  //         num = u;
  //         return num;
  //       }
  //     }
  //     console.log(result[u]);
  //   }

  //   return result;
  // }

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
