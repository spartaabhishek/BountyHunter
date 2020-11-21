const firebase = require("firebase");
const firebaseConfig = require("./firebaseConfig.js");
require("firebase/storage");
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

module.exports = {
  db,
  storage,
};
