const express = require("express");
const { db, auth } = require("../firebase/firebaseApp");
const path = require("path");
const fs = require("fs")


const router = express.Router();

router.get("/:filename", (req, res) => {
    const {filename} =req.params

    res.sendFile(filename, { root: path.join(__dirname, "../", "uploads") });
});

module.exports = router