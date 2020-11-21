const express = require("express");
const path = require("path");
const { db, storage } = require("../firebase/firebaseApp");

const router = express.Router();

router.get("/", async (req, res) => {
  //firebase datafetch
  //const data = await getData();

  res.sendFile("post.html", { root: path.join(__dirname, "../") });
});

router.post("/", async (req, res) => {
  const job = req.body;
  console.log(req.image);
  const imgUrl = await saveImg(job.image);
  //const status = await setData({...job,image:imgUrl})
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

async function saveImg(blob) {
  var storageRef = storage.ref();
  var imgRef = storageRef
    .child("job.jpg")
    .put(blob, { contentType: "image/jpeg" });

  imgRef.on("state_changed", null, null, function () {
    imgRef.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      console.log("File available at", downloadURL);
    });
  });
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
