var express = require("express");

var app = express();

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("server is run on 3k port");
});
