const express = require("express");
const { db, auth } = require("../firebase/firebaseApp");
const path = require("path");
const passport = require("passport");
const http = require("http");
const Users = require("../api/users");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

try {
  mongoose.connect(
    `mongodb+srv://divine:ddev@cluster0.4rlgr.mongodb.net/bountyHunter?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("connected");
} catch (err) {
  console.log(err);
}



router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../../", "build") });
});

router.post("/", async (req, res) => {
  //   const data = {
  //     displayName: "Abhishek soni",
  //     email: "abhishek5soni987@gmail.com",
  //     password: "abhishek5",
  //     uid: "abhishek_soni",
  //   };
  //console.log(req.body);
  //   auth
  //     .createUser(data)
  //     .then(function (userRecord) {
  //       console.log("Successfully fetched user data:", userRecord.id);
  //       res.send({ status: "success" });
  //     })
  //     .catch(function (error) {
  //       res.send({ status: "error" });
  //       console.log("Namans:", error);
  // 	});

  try {
    console.log(req.body);
    var data = { ...req.body };
    var user = await Users.create(data);
    //res.redirect("/login");
    res.send({ status: "success" });
  } catch (err) {
    console.log(err);
    //res.redirect("/signup");
    res.send({ status: "error" });
  }
});

module.exports = router;
