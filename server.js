var express = require("express");
var app = express();
require("./dbConnection");
let route = require("./route");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);

io.on("connection", (socket) => {
  console.log("a client connected");
  socket.on("disconnect", () => {
    console.log("a client has disconnected");
  });

  setImmediate(() => {
    socket.emit("numbber: " + parseInt(Math.random() * 10));
  }, 1000);
});

var port = process.env.port || 3000;
http.listen(port, () => {
  console.log("App listening to: " + port);
});
