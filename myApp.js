require("dotenv").config();
let express = require("express");
let app = express();

let path = __dirname + "/public";
app.use("/public", express.static(path));

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", function (req, res) {
  let result = "Hello json";
  //var envfile = res.sendFile(__dirname + "/process.env");
  if (process.env.MESSAGE_STYLE === "uppercase") {
    result = result.toUpperCase();
  }
  res.json({ message: result });
});

module.exports = app;
