import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const CalculatorBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;

  .calculator {
    position: absolute;
    width: 400px;
    height: 450px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .body {
      //position: relative;
      width: 100%;
      height: 100%;
      background-color: white;
      outline: 1px solid black;

      .ResultBox {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 70px;
        padding-right: 10px;
        color: #d6d6d6;
        background-color: #3a3a3a;
        font-size: 25px;
      }
      .keyBox {
        display: flex;
        height: 380px;
        background-color: #333333;
        font-size: 25px;
        .numberBox {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          width: 250px;

          .num {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 81.3px;
            height: 50px;
            background-color: aqua;
            text-align: center;
            border: 1px solid black;
            :hover {
              background-color: #c3ffff;
            }
            :active {
              background-color: #e2ffff;
            }
          }
          .num:nth-last-child(2) {
            width: 100%;
          }
          .num:last-child {
            //width: 100%;
            flex-grow: 1;
            //align-items: stretch;
            height: 170px;
            font-size: 40px;
            background-color: #bdd4ff;
            :hover {
              background-color: #dce8ff;
            }
            :active {
              background-color: #eff4ff;
            }
          }
        }
        .signBox {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 40px;

          .sign {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 30%;
            border-bottom: 1px solid black;
            background-color: #ff8888;
            :hover {
              background-color: #ffb4b4;
            }
            :active {
              background-color: #ffd3d3;
            }
          }

          .sign:first-child {
            font-size: 30px;
            border-top: 1px solid black;
          }
        }
      }
    }
  }
`;

let num: string = "0";
let numArray: Array<number> = [];
let signArray: Array<string> = [];
let exe: boolean = false;

function App() {
  const [resultValue, setResultValue] = useState<string>("0");
  const result = () => {
    let final = 0;
    if (numArray.length === signArray.length) {
      console.log("같음!");
      signArray.pop();
    }

    for (let i = 0; i < signArray.length; i++) {
      if (signArray[i] === "+") {
        final = numArray[i] + numArray[i + 1];
      } else if (signArray[i] === "-") {
        final = numArray[i] - numArray[i + 1];
      } else if (signArray[i] === "*") {
        final = numArray[i] * numArray[i + 1];
      } else if (signArray[i] === "/") {
        final = numArray[i] / numArray[i + 1];
      }
    }
    numArray = [];
    signArray = [];
    numArray = [final];
    exe = true;
    return setResultValue(String(final));
  };

  const keyEvent = (e: KeyboardEvent) => {
    if (e.key === "0") {
      if (resultValue !== "0" && !isNaN(Number(resultValue[resultValue.length - 1]))) {
        setResultValue(resultValue + "0");
        num += "0";
      }
    } else if (e.key === "1") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("1");
      } else {
        setResultValue(resultValue + "1");
      }
      num += "1";
    } else if (e.key === "2") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("2");
      } else {
        setResultValue(resultValue + "2");
      }
      num += "2";
    } else if (e.key === "3") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("3");
      } else {
        setResultValue(resultValue + "3");
      }
      num += "3";
    } else if (e.key === "4") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("4");
      } else {
        setResultValue(resultValue + "4");
      }
      num += "4";
    } else if (e.key === "5") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("5");
      } else {
        setResultValue(resultValue + "5");
      }
      num += "5";
    } else if (e.key === "6") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("6");
      } else {
        setResultValue(resultValue + "6");
      }
      num += "6";
    } else if (e.key === "7") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("7");
      } else {
        setResultValue(resultValue + "7");
      }
      num += "7";
    } else if (e.key === "8") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("8");
      } else {
        setResultValue(resultValue + "8");
      }
      num += "8";
    } else if (e.key === "9") {
      if (resultValue === "0" || exe) {
        exe = false;
        numArray = [];
        setResultValue("9");
      } else {
        setResultValue(resultValue + "9");
      }
      num += "9";
    } else if (e.key === "+") {
      exe = false;
      if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
        setResultValue(resultValue + "+");
        numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
        signArray = [...signArray, "+"];
        num = "";
      }
    } else if (e.key === "-") {
      exe = false;
      if (num === "0") {
        setResultValue(resultValue + "-");
        numArray = [0];
        signArray = [...signArray, "-"];
        num = "";
      } else if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
        setResultValue(resultValue + "-");
        numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
        signArray = [...signArray, "-"];
        num = "";
      }
    } else if (e.key === "*") {
      exe = false;
      if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
        setResultValue(resultValue + "*");
        numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
        signArray = [...signArray, "*"];
        num = "";
      }
    } else if (e.key === "/") {
      exe = false;
      if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
        setResultValue(resultValue + "/");
        numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
        signArray = [...signArray, "/"];
        num = "";
      }
    } else if (e.key === "Enter") {
      if (num !== "") {
        numArray = [...numArray, Number(num)];
      }
      num = "";
      result();
    }
  };
  useEffect(() => {
    document.addEventListener("keypress", keyEvent);

    return () => document.removeEventListener("keypress", keyEvent);
  });

  return (
    <CalculatorBox>
      <div className="calculator">
        <div className="body">
          <div className="ResultBox">{resultValue}</div>
          <div className="keyBox">
            <div className="numberBox">
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("1");
                  } else {
                    setResultValue(resultValue + "1");
                  }
                  num += "1";
                }}
              >
                1
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("2");
                  } else {
                    setResultValue(resultValue + "2");
                  }
                  num += "2";
                }}
              >
                2
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("3");
                  } else {
                    setResultValue(resultValue + "3");
                  }
                  num += "3";
                }}
              >
                3
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("4");
                  } else {
                    setResultValue(resultValue + "4");
                  }
                  num += "4";
                }}
              >
                4
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("5");
                  } else {
                    setResultValue(resultValue + "5");
                  }
                  num += "5";
                }}
              >
                5
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("6");
                  } else {
                    setResultValue(resultValue + "6");
                  }
                  num += "6";
                }}
              >
                6
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("7");
                  } else {
                    setResultValue(resultValue + "7");
                  }
                  num += "7";
                }}
              >
                7
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("8");
                  } else {
                    setResultValue(resultValue + "8");
                  }
                  num += "8";
                }}
              >
                8
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue === "0") {
                    setResultValue("9");
                  } else {
                    setResultValue(resultValue + "9");
                  }
                  num += "9";
                }}
              >
                9
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue !== "0" && !isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "0");
                    num += "0";
                  }
                }}
              >
                0
              </div>
              <div
                className="num"
                onClick={() => {
                  if (num !== "") {
                    numArray = [...numArray, Number(num)];
                  }
                  num = "";
                  result();
                }}
              >
                =
              </div>
            </div>
            <div className="signBox">
              <div
                className="sign"
                onClick={() => {
                  setResultValue("0");
                  numArray = [];
                  signArray = [];
                  num = "0";
                }}
              >
                지우기
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "+");
                    numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
                    signArray = [...signArray, "+"];
                    num = "";
                  }
                }}
              >
                +
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (num === "0") {
                    setResultValue(resultValue + "-");
                    numArray = [0];
                    signArray = [...signArray, "-"];
                    num = "";
                  } else if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "-");
                    numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
                    signArray = [...signArray, "-"];
                    num = "";
                  }
                }}
              >
                -
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "*");
                    numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
                    signArray = [...signArray, "*"];
                    num = "";
                  }
                }}
              >
                *
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "/");
                    numArray = num !== "" ? [...numArray, Number(num)] : [...numArray];
                    signArray = [...signArray, "/"];
                    num = "";
                  }
                }}
              >
                /
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorBox>
  );
}

export default App;
