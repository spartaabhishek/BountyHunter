const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobs = require("./routes/jobs.js");
const chat = require("./routes/chat.js");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use("/jobs", checkAuth, jobs);

function checkAuth(req, res, next) {
  // auth middlware
  next();
}

// websocket
const ws = new WebSocket.Server({ server });
ws.on("connection", chat);

server.listen(8080);
