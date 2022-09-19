import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  const spiralTraversal = function (matrix) {
    // 각 방향을 지정
    // [  0  ,  TOP  ,   0  ]
    // [LEFT ,  🙆🏻‍♂️  , RIGHT ]
    // [  0  ,  DOWN ,   0  ]
    const RIGHT = [0, 1];
    const DOWN = [1, 0];
    const LEFT = [0, -1];
    const UP = [-1, 0];

    // 각 방향을 순회하기 위해 경로 순서대로 배열에 넣어준다.
    const MOVES = [RIGHT, DOWN, LEFT, UP];

    // 세로 길이
    const M = matrix.length;

    // 가로 길이
    const N = matrix[0].length;

    // 탐색하는 배열을 넘어 이탈했는지 확인하는 함수이다.
    // row >= 0 은 배열의 가장 위쪽을 넘어 이탈했는지 확인한다.
    // row < M 은 배열의 가장 아래쪽을 넘어 이탈했는지 확인한다.
    // col >= 0 은 배열의 가장 왼쪽을 넘어 이탈했는지 확인한다.
    // col < N 은 배열의 가장 오른쪽을 넘어 이탈했는지 확인한다.
    const isValid = (col, row) => col >= 0 && col < M && row >= 0 && row < N;

    // 탐색한 숫자 count
    let cnt = 0;

    // 현재 탐색하는 세로 위치
    let col = 0;
    //col
    // 현재 탐색하는 가로 위치
    let row = -1;

    // 방향을 선택하는 변수
    let direction = 0;

    // 최종 return하는 변수
    let result = "";

    // 반복문으로 탐색 시작
    // cut 가 모든 배열을 탐색했다면 반복문 종료
    while (cnt < M * N) {
      // 탐색 방향을 설정
      const move = MOVES[direction];

      // 선택된 방향을 구조분해로 세로, 가로를 분리
      const [rd, cd] = move;

      // 현재 탐색하는 세로 위치에 선택된 방향 세로 값을 더해준다.
      col = col + rd;

      // 현재 탐색하는 가로 위치에 선택된 방향 가로 값을 더해준다.
      row = row + cd;

      // 현재 설정된 탐색 방향으로 갈 수 있을 때까지 이동하면서 탐색한다.
      // isValid 함수로 탐색 범위를 벗어나지 않았는지 확인한다.
      // matrix[row][col]를 확인해 이미 탐색한 숫자인지 확인한다.
      while (isValid(col, row) && matrix[col][row] !== false) {
        // return할 변수에 탐색한 숫자를 넣어준다.
        result = result + matrix[col][row];

        // 한 요소를 두 번 접근하지 않게 하기 위해서, 탐색한 요소를 false로 변경한다.
        matrix[col][row] = false;

        // 이동한 위치를 현재 위치로 변경한다.
        col = col + rd;
        row = row + cd;

        // 탐색한 숫자를 count 한다.
        cnt++;
      }

      // row, col 이 행렬의 범위를 벗어났기 때문에,
      // 진행된 방향의 반대로 한 칸 이동한다.
      col = col - rd;
      row = row - cd;

      // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
      direction = (direction + 1) % 4;
    }

    // 완성된 값을 return 한다.
    return result;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
