import React, { useState } from "react";
import styled from "styled-components";
import { isConstructorDeclaration } from "typescript";
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

function App() {
  const [resultValue, setResultValue] = useState("0");
  console.log(resultValue);
  const result = () => {
    let nums: any = resultValue.match(/\d+/g); // 연결된 숫자 모두 찾기
    let sign: any = resultValue.match(/\D/g); // 숫자가 아닌 것 모두 찾기

    if (nums.length === sign.length) {
      sign = sign.slice(0, sign.length - 1);
    }
    console.log(nums);
    let toNumber = nums.map(Number);
    console.log(toNumber);
    for (let i = 0; 1 !== toNumber.length; i++) {
      console.log(sign);
      if (sign[i] === "+") {
        toNumber[0 + 1] = toNumber[0] + toNumber[0 + 1];
      } else if (sign[i] === "-") {
        toNumber[0 + 1] = toNumber[0] - toNumber[0 + 1];
      } else if (sign[i] === "*") {
        console.log(toNumber[0 + 1]);
        console.log(sign);
        toNumber[0 + 1] = toNumber[0] * toNumber[0 + 1];
      } else if (sign[i] === "/") {
        toNumber[0 + 1] = toNumber[0] / toNumber[0 + 1];
      }
      toNumber.shift();
    }
    console.log(toNumber[0]);
    setResultValue(String(toNumber[0]));
  };

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
                }}
              >
                9
              </div>
              <div
                className="num"
                onClick={() => {
                  if (resultValue !== "0") {
                    setResultValue(resultValue + "0");
                  }
                }}
              >
                0
              </div>
              <div
                className="num"
                onClick={() => {
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
                }}
              >
                지우기
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "+");
                  }
                }}
              >
                +
              </div>
              <div
                className="sign"
                onClick={() => {
                  if (!isNaN(Number(resultValue[resultValue.length - 1]))) {
                    setResultValue(resultValue + "-");
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
