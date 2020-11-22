const express = require("express");
const { db, auth } = require("../firebase/firebaseApp");
const path = require("path");


const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../../", "build") });
});

module.exports = router