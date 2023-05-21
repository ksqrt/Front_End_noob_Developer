// var figlet = require("figlet");

// figlet("express!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// const express = require("express");
// const app = express();

// // 파라미터 넘기기
// app.get("/user/:id", (req, res) => {
//   const q = req.params;
//   console.log();
//   res.json({ userid: q.id });
// });

// app.get("/sound/:name", (req, res) => {
//   // 비구조 할당
//   const { name } = req.params;
//   console.log(name);
//   res.json({ userid: name });
// });

// app.listen(3000);
var express = require("express");
var cors = require("cors");
var app = express();
var port = 3000;

app.use(cors());
// 정적인 html 을 가지고올 폴더 설정
app.use(express.static("public"));
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // index.html 파일을 읽어서 응답으로 보냄
  fs.readFile("./public/index.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

// 서버 시작
server.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
