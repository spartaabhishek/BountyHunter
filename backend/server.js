const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobs = require("./routes/jobs.js");
const images = require("./routes/images.js");
const chat = require("./routes/chat.js");
const dashboard = require("./routes/dashboard.js");
const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
const { auth } = require("./firebase/firebaseApp");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");

app.use(cors());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../", "build")));
app.use(
  session({
    // key to encrpt
    secret: "secret",
    // resave existing sesson id
    resave: false,
    // save empty session id
    saveUninitialized: false,
  })
);

app.use("/signup", signup);
app.use("/signin", login);
app.use("/dashboard", dashboard);
app.use("/jobs", jobs);
app.use("/image", images);
// app.use("/sessionLogin", checkNotAuth, session);

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("check Auth");
    next();
  } else {
    return res.redirect("/signin");
  }
}

function checkNotAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

// websocket
const ws = new WebSocket.Server({ server });
// ws.on("connection", chat);

server.listen(8080);
