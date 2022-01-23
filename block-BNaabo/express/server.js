var express = require("express");

var app = express();

app.use(express.json());

app.get("/json", (req, res, next) => {
  console.log(req.body);
  next();
});

app.listen(3000, () => {
  console.log("server is start in port 3k");
});
