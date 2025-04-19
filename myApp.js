let express = require("express");
let app = express();
//console.log("Hello World");
let path = __dirname + "/public";
app.use("/public", express.static(path));

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
