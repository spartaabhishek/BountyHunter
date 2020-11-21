const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobs = require("./routes/jobs.js");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname))

app.use("/jobs", checkAuth, jobs);

function checkAuth(req, res, next) {
  // auth middlware
  next();
}

server.listen(8080);
