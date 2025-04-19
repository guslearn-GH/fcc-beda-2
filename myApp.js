let express = require("express");
let app = express();
//console.log("Hello World");

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.use(__dirname + "/public", express.static());

module.exports = app;
