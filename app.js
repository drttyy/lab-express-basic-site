const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/work", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/work.html");
});

app.listen(3000);
