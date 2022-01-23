var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.sendFile();
});

app.listen(4000, () => {
  console.log("server is running is 4k port");
});
