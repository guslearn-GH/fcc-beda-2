const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/process.env") });
require("body-parser");
let express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  console.log("Query: " + req.query[0]);
  console.log("Body: " + req.body);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);
/*
Note: In the following exercise you are going to 
receive data from a POST request, at the same /name 
route path. If you want, you can use the method 
app.route(path).get(handler).post(handler). 
This syntax allows you to chain different 
verb handlers on the same path route. 
You can save a bit of typing, and have cleaner code.
 */

app
  .route("/name")
  .get(function (req, res) {
    res.json({ name: req.query.first + " " + req.query.last });
  })
  .post(function (req, res) {
    res.json({ name: req.body.first + " " + req.body.last });
  });

app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
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
