var figlet = require("figlet");

figlet("express!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// 파라미터 넘기기
app.get("/user/:id", (req, res) => {
  const q = req.params;
  console.log();
  res.json({ userid: q.id });
});

app.listen(3000);
