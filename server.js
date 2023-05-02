var express = require("express");
var app = express();
require("./dbConnection");
let route = require("./route");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
