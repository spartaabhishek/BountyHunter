const firebase = require("firebase-admin");
const firebaseConfig = require("./firebaseConfig.js");
require("firebase/storage");


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db