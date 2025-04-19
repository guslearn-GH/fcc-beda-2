require("dotenv").config();
let express = require("express");
let app = express();
//console.log("Hello World");
let path = __dirname + "/public";
app.use("/public", express.static(path));

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", function (req, res) {
  let result = "";
  if (process.env.MESSAGE_STYLE == "uppercase") result = "HELLO JSON";
  else result = process.env.MESSAGE_STYLE; //"hello json";
  res.json({ message: result });
});

module.exports = app;
