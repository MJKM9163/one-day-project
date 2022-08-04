const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response, next) => {
  response.send(
    `<div>안녕? 여긴 서버화면이야!</div><div>서버 주소는 http://localhost:${PORT}이니깐 잘 기억해</div>`
  );
});

app.post("/add", (request, response) => {
  response.json(request.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}에서 서버가 시작되었어!`);
});
