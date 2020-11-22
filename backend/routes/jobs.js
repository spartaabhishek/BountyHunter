const express = require("express");
const path = require("path");
const { db } = require("../firebase/firebaseApp");
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
  
  const data = await getData();
  res.send(data);
});

router.get("/:usename", async (req,res)=>{
  const {username} = req.params
  const data = await getDataByUsername(username);
  res.send(data);
})


router.post("/", upload.single("image"), async (req, res) => {
  const job = req.body;
  var img = "default"
  if(req.hasOwnProperty('file')) img = req.file.filename
  
  await setData({...job,img});
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

async function getDataByUsername(user) {
  const jobsRef = db.collection("jobs").where("userId",user);
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
