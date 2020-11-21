const firebase = require("firebase-admin");
const firebaseConfig = require("./firebaseConfig.js");


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db