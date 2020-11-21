const express = require("express");
const path = require("path");
const { db, storage } = require("../firebase/firebaseApp");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();

var store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
var upload = multer({ storage: store });

router.get("/", async (req, res) => {
  //firebase datafetch
  //const data = await getData();

  res.sendFile("post.html", { root: path.join(__dirname, "../") });
});

router.post("/", upload.single("image"), async (req, res) => {
  const job = req.body;

  // let image = "";
  // if (req.hasOwnProperty("file")) {
  //   image = fs.readFileSync(
  //     path.join(__dirname, "../", "/uploads/" + req.file.filename)
  //   );

  //   const imgRef = await saveImg(image, req.file.filename);
  //   imgRef.on("state_changed", null, null, function () {
  //     imgRef.snapshot.ref.getDownloadURL().then(async function (imgURL) {
  //       console.log("File available at", imgURL);
  //       
  //     });
  //   });
  // }

  setData(job);
  res.send({ status: "success" });
});

async function getData() {
  const jobsRef = db.collection("jobs");
  const docs = await jobsRef.get();
  var data = [];
  docs.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    data.push(doc.data());
  });
  return data;
}

async function setData(job) {
  try {
    const jobsRef = db.collection("jobs");
    await jobsRef.doc().set(job);
    return { status: "success" };
  } catch (e) {
    console.log(e);
    return { status: "error" };
  }
}

module.exports = router;
