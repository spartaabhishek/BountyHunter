const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jobs = require("./routes/jobs.js");
const session = require("./routes/session.js");
const chat = require("./routes/chat.js");
const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
const {auth} = require("./firebase/firebaseApp")
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"../../","build")));

app.use("/signup", checkNotAuth, signup);
app.use("/signin", checkNotAuth, login);
app.use("/jobs", checkAuth, jobs);
app.use("/sessionLogin",checkNotAuth, session);



function checkAuth(req, res, next) {

  const sessionCookie = req.cookies.session || '';
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  auth.verifySessionCookie(
    sessionCookie, true /** checkRevoked */)
    .then((decodedClaims) => {
      next()
    })
    .catch(error => {
      // Session cookie is unavailable or invalid. Force user to login.
      res.redirect('/signin');
    });
}

function checkNotAuth(req, res, next) {

  const sessionCookie = req.cookies.session || '';
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  auth.verifySessionCookie(
    sessionCookie, true /** checkRevoked */)
    .then((decodedClaims) => {
      res.redirect('/signin');
    })
    .catch(error => {
      // Session cookie is unavailable or invalid. Force user to login.
      next()
    });
}

// websocket
const ws = new WebSocket.Server({ server });
ws.on("connection", chat);

server.listen(8080);
