const express = require("express");
const { db, auth } = require("../firebase/firebaseApp");
const path = require("path");
const passport = require("passport");

const router = express.Router();

const initializePassport = require("../passport_config.js");
initializePassport(
  passport,
  async (username) =>
    // getUserByUsername
    await Users.find({ username }).exec(),
  // getUserById
  async (id) => await Users.findById(id).exec()
);

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../../", "build") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
    res.json({ accessToken });
  }
);

module.exports = router;
